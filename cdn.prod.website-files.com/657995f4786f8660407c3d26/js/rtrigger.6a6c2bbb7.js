/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var Uy = Object.create;
    var Rr = Object.defineProperty;
    var By = Object.getOwnPropertyDescriptor;
    var Wy = Object.getOwnPropertyNames;
    var Hy = Object.getPrototypeOf,
        zy = Object.prototype.hasOwnProperty;
    var he = (e, t) => () => (e && (t = e(e = 0)), t);
    var f = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Pe = (e, t) => {
            for (var r in t) Rr(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        la = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of Wy(t)) !zy.call(e, i) && i !== r && Rr(e, i, {
                    get: () => t[i],
                    enumerable: !(n = By(t, i)) || n.enumerable
                });
            return e
        };
    var ce = (e, t, r) => (r = e != null ? Uy(Hy(e)) : {}, la(t || !e || !e.__esModule ? Rr(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        Ke = e => la(Rr({}, "__esModule", {
            value: !0
        }), e);
    var fa = f(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !t) {
                window.objectFitPolyfill = function() {
                    return !1
                };
                return
            }
            let n = function(a) {
                    let u = window.getComputedStyle(a, null),
                        l = u.getPropertyValue("position"),
                        E = u.getPropertyValue("overflow"),
                        g = u.getPropertyValue("display");
                    (!l || l === "static") && (a.style.position = "relative"), E !== "hidden" && (a.style.overflow = "hidden"), (!g || g === "inline") && (a.style.display = "block"), a.clientHeight === 0 && (a.style.height = "100%"), a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
                },
                i = function(a) {
                    let u = window.getComputedStyle(a, null),
                        l = {
                            "max-width": "none",
                            "max-height": "none",
                            "min-width": "0px",
                            "min-height": "0px",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                            "margin-top": "0px",
                            "margin-right": "0px",
                            "margin-bottom": "0px",
                            "margin-left": "0px"
                        };
                    for (let E in l) u.getPropertyValue(E) !== l[E] && (a.style[E] = l[E])
                },
                o = function(a) {
                    let u = a.parentNode;
                    n(u), i(a), a.style.position = "absolute", a.style.height = "100%", a.style.width = "auto", a.clientWidth > u.clientWidth ? (a.style.top = "0", a.style.marginTop = "0", a.style.left = "50%", a.style.marginLeft = a.clientWidth / -2 + "px") : (a.style.width = "100%", a.style.height = "auto", a.style.left = "0", a.style.marginLeft = "0", a.style.top = "50%", a.style.marginTop = a.clientHeight / -2 + "px")
                },
                s = function(a) {
                    if (typeof a > "u" || a instanceof Event) a = document.querySelectorAll("[data-object-fit]");
                    else if (a && a.nodeName) a = [a];
                    else if (typeof a == "object" && a.length && a[0].nodeName) a = a;
                    else return !1;
                    for (let u = 0; u < a.length; u++) {
                        if (!a[u].nodeName) continue;
                        let l = a[u].nodeName.toLowerCase();
                        if (l === "img") {
                            if (t) continue;
                            a[u].complete ? o(a[u]) : a[u].addEventListener("load", function() {
                                o(this)
                            })
                        } else l === "video" ? a[u].readyState > 0 ? o(a[u]) : a[u].addEventListener("loadedmetadata", function() {
                            o(this)
                        }) : o(a[u])
                    }
                    return !0
                };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(), window.addEventListener("resize", s), window.objectFitPolyfill = s
        })()
    });
    var da = f(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;

            function e(n) {
                Webflow.env("design") || ($("video").each(function() {
                    n && $(this).prop("autoplay") ? this.play() : this.pause()
                }), $(".w-background-video--control").each(function() {
                    n ? r($(this)) : t($(this))
                }))
            }

            function t(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 0)
                })
            }

            function r(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 1)
                })
            }
            $(document).ready(() => {
                let n = window.matchMedia("(prefers-reduced-motion: reduce)");
                n.addEventListener("change", i => {
                    e(!i.matches)
                }), n.matches && e(!1), $("video:not([autoplay])").each(function() {
                    $(this).parent().find(".w-background-video--control").each(function() {
                        t($(this))
                    })
                }), $(document).on("click", ".w-background-video--control", function(i) {
                    if (Webflow.env("design")) return;
                    let o = $(i.currentTarget),
                        s = $(`video#${o.attr("aria-controls")}`).get(0);
                    if (s)
                        if (s.paused) {
                            let a = s.play();
                            r(o), a && typeof a.catch == "function" && a.catch(() => {
                                t(o)
                            })
                        } else s.pause(), t(o)
                })
            })
        })()
    });
    var Hn = f(() => {
        "use strict";
        window.tram = function(e) {
            function t(c, m) {
                var b = new F.Bare;
                return b.init(c, m)
            }

            function r(c) {
                return c.replace(/[A-Z]/g, function(m) {
                    return "-" + m.toLowerCase()
                })
            }

            function n(c) {
                var m = parseInt(c.slice(1), 16),
                    b = m >> 16 & 255,
                    S = m >> 8 & 255,
                    L = 255 & m;
                return [b, S, L]
            }

            function i(c, m, b) {
                return "#" + (1 << 24 | c << 16 | m << 8 | b).toString(16).slice(1)
            }

            function o() {}

            function s(c, m) {
                l("Type warning: Expected: [" + c + "] Got: [" + typeof m + "] " + m)
            }

            function a(c, m, b) {
                l("Units do not match [" + c + "]: " + m + ", " + b)
            }

            function u(c, m, b) {
                if (m !== void 0 && (b = m), c === void 0) return b;
                var S = b;
                return je.test(c) || !gt.test(c) ? S = parseInt(c, 10) : gt.test(c) && (S = 1e3 * parseFloat(c)), 0 > S && (S = 0), S === S ? S : b
            }

            function l(c) {
                j.debug && window && window.console.warn(c)
            }

            function E(c) {
                for (var m = -1, b = c ? c.length : 0, S = []; ++m < b;) {
                    var L = c[m];
                    L && S.push(L)
                }
                return S
            }
            var g = function(c, m, b) {
                    function S(re) {
                        return typeof re == "object"
                    }

                    function L(re) {
                        return typeof re == "function"
                    }

                    function C() {}

                    function K(re, Y) {
                        function X() {
                            var Ae = new ie;
                            return L(Ae.init) && Ae.init.apply(Ae, arguments), Ae
                        }

                        function ie() {}
                        Y === b && (Y = re, re = Object), X.Bare = ie;
                        var ae, Ee = C[c] = re[c],
                            Fe = ie[c] = X[c] = new C;
                        return Fe.constructor = X, X.mixin = function(Ae) {
                            return ie[c] = X[c] = K(X, Ae)[c], X
                        }, X.open = function(Ae) {
                            if (ae = {}, L(Ae) ? ae = Ae.call(X, Fe, Ee, X, re) : S(Ae) && (ae = Ae), S(ae))
                                for (var Jt in ae) m.call(ae, Jt) && (Fe[Jt] = ae[Jt]);
                            return L(Fe.init) || (Fe.init = re), X
                        }, X.open(Y)
                    }
                    return K
                }("prototype", {}.hasOwnProperty),
                d = {
                    ease: ["ease", function(c, m, b, S) {
                        var L = (c /= S) * c,
                            C = L * c;
                        return m + b * (-2.75 * C * L + 11 * L * L + -15.5 * C + 8 * L + .25 * c)
                    }],
                    "ease-in": ["ease-in", function(c, m, b, S) {
                        var L = (c /= S) * c,
                            C = L * c;
                        return m + b * (-1 * C * L + 3 * L * L + -3 * C + 2 * L)
                    }],
                    "ease-out": ["ease-out", function(c, m, b, S) {
                        var L = (c /= S) * c,
                            C = L * c;
                        return m + b * (.3 * C * L + -1.6 * L * L + 2.2 * C + -1.8 * L + 1.9 * c)
                    }],
                    "ease-in-out": ["ease-in-out", function(c, m, b, S) {
                        var L = (c /= S) * c,
                            C = L * c;
                        return m + b * (2 * C * L + -5 * L * L + 2 * C + 2 * L)
                    }],
                    linear: ["linear", function(c, m, b, S) {
                        return b * c / S + m
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, m, b, S) {
                        return b * (c /= S) * c + m
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, m, b, S) {
                        return -b * (c /= S) * (c - 2) + m
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, m, b, S) {
                        return (c /= S / 2) < 1 ? b / 2 * c * c + m : -b / 2 * (--c * (c - 2) - 1) + m
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, m, b, S) {
                        return b * (c /= S) * c * c + m
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, m, b, S) {
                        return b * ((c = c / S - 1) * c * c + 1) + m
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, m, b, S) {
                        return (c /= S / 2) < 1 ? b / 2 * c * c * c + m : b / 2 * ((c -= 2) * c * c + 2) + m
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, m, b, S) {
                        return b * (c /= S) * c * c * c + m
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, m, b, S) {
                        return -b * ((c = c / S - 1) * c * c * c - 1) + m
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, m, b, S) {
                        return (c /= S / 2) < 1 ? b / 2 * c * c * c * c + m : -b / 2 * ((c -= 2) * c * c * c - 2) + m
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, m, b, S) {
                        return b * (c /= S) * c * c * c * c + m
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, m, b, S) {
                        return b * ((c = c / S - 1) * c * c * c * c + 1) + m
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, m, b, S) {
                        return (c /= S / 2) < 1 ? b / 2 * c * c * c * c * c + m : b / 2 * ((c -= 2) * c * c * c * c + 2) + m
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, m, b, S) {
                        return -b * Math.cos(c / S * (Math.PI / 2)) + b + m
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, m, b, S) {
                        return b * Math.sin(c / S * (Math.PI / 2)) + m
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, m, b, S) {
                        return -b / 2 * (Math.cos(Math.PI * c / S) - 1) + m
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, m, b, S) {
                        return c === 0 ? m : b * Math.pow(2, 10 * (c / S - 1)) + m
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, m, b, S) {
                        return c === S ? m + b : b * (-Math.pow(2, -10 * c / S) + 1) + m
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, m, b, S) {
                        return c === 0 ? m : c === S ? m + b : (c /= S / 2) < 1 ? b / 2 * Math.pow(2, 10 * (c - 1)) + m : b / 2 * (-Math.pow(2, -10 * --c) + 2) + m
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, m, b, S) {
                        return -b * (Math.sqrt(1 - (c /= S) * c) - 1) + m
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, m, b, S) {
                        return b * Math.sqrt(1 - (c = c / S - 1) * c) + m
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, m, b, S) {
                        return (c /= S / 2) < 1 ? -b / 2 * (Math.sqrt(1 - c * c) - 1) + m : b / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + m
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, m, b, S, L) {
                        return L === void 0 && (L = 1.70158), b * (c /= S) * c * ((L + 1) * c - L) + m
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, m, b, S, L) {
                        return L === void 0 && (L = 1.70158), b * ((c = c / S - 1) * c * ((L + 1) * c + L) + 1) + m
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, m, b, S, L) {
                        return L === void 0 && (L = 1.70158), (c /= S / 2) < 1 ? b / 2 * c * c * (((L *= 1.525) + 1) * c - L) + m : b / 2 * ((c -= 2) * c * (((L *= 1.525) + 1) * c + L) + 2) + m
                    }]
                },
                v = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                I = document,
                _ = window,
                w = "bkwld-tram",
                T = /[\-\.0-9]/g,
                x = /[A-Z]/,
                O = "number",
                P = /^(rgb|#)/,
                N = /(em|cm|mm|in|pt|pc|px)$/,
                R = /(em|cm|mm|in|pt|pc|px|%)$/,
                k = /(deg|rad|turn)$/,
                U = "unitless",
                B = /(all|none) 0s ease 0s/,
                z = /^(width|height)$/,
                J = " ",
                D = I.createElement("a"),
                A = ["Webkit", "Moz", "O", "ms"],
                M = ["-webkit-", "-moz-", "-o-", "-ms-"],
                W = function(c) {
                    if (c in D.style) return {
                        dom: c,
                        css: c
                    };
                    var m, b, S = "",
                        L = c.split("-");
                    for (m = 0; m < L.length; m++) S += L[m].charAt(0).toUpperCase() + L[m].slice(1);
                    for (m = 0; m < A.length; m++)
                        if (b = A[m] + S, b in D.style) return {
                            dom: b,
                            css: M[m] + c
                        }
                },
                V = t.support = {
                    bind: Function.prototype.bind,
                    transform: W("transform"),
                    transition: W("transition"),
                    backface: W("backface-visibility"),
                    timing: W("transition-timing-function")
                };
            if (V.transition) {
                var te = V.timing.dom;
                if (D.style[te] = d["ease-in-back"][0], !D.style[te])
                    for (var ee in v) d[ee][0] = v[ee]
            }
            var ue = t.frame = function() {
                    var c = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                    return c && V.bind ? c.bind(_) : function(m) {
                        _.setTimeout(m, 16)
                    }
                }(),
                _e = t.now = function() {
                    var c = _.performance,
                        m = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                    return m && V.bind ? m.bind(c) : Date.now || function() {
                        return +new Date
                    }
                }(),
                y = g(function(c) {
                    function m(Z, se) {
                        var ge = E(("" + Z).split(J)),
                            fe = ge[0];
                        se = se || {};
                        var we = Ce[fe];
                        if (!we) return l("Unsupported property: " + fe);
                        if (!se.weak || !this.props[fe]) {
                            var Xe = we[0],
                                Le = this.props[fe];
                            return Le || (Le = this.props[fe] = new Xe.Bare), Le.init(this.$el, ge, we, se), Le
                        }
                    }

                    function b(Z, se, ge) {
                        if (Z) {
                            var fe = typeof Z;
                            if (se || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), fe == "number" && se) return this.timer = new ne({
                                duration: Z,
                                context: this,
                                complete: C
                            }), void(this.active = !0);
                            if (fe == "string" && se) {
                                switch (Z) {
                                    case "hide":
                                        X.call(this);
                                        break;
                                    case "stop":
                                        K.call(this);
                                        break;
                                    case "redraw":
                                        ie.call(this);
                                        break;
                                    default:
                                        m.call(this, Z, ge && ge[1])
                                }
                                return C.call(this)
                            }
                            if (fe == "function") return void Z.call(this, this);
                            if (fe == "object") {
                                var we = 0;
                                Fe.call(this, Z, function(ve, Vy) {
                                    ve.span > we && (we = ve.span), ve.stop(), ve.animate(Vy)
                                }, function(ve) {
                                    "wait" in ve && (we = u(ve.wait, 0))
                                }), Ee.call(this), we > 0 && (this.timer = new ne({
                                    duration: we,
                                    context: this
                                }), this.active = !0, se && (this.timer.complete = C));
                                var Xe = this,
                                    Le = !1,
                                    xr = {};
                                ue(function() {
                                    Fe.call(Xe, Z, function(ve) {
                                        ve.active && (Le = !0, xr[ve.name] = ve.nextStyle)
                                    }), Le && Xe.$el.css(xr)
                                })
                            }
                        }
                    }

                    function S(Z) {
                        Z = u(Z, 0), this.active ? this.queue.push({
                            options: Z
                        }) : (this.timer = new ne({
                            duration: Z,
                            context: this,
                            complete: C
                        }), this.active = !0)
                    }

                    function L(Z) {
                        return this.active ? (this.queue.push({
                            options: Z,
                            args: arguments
                        }), void(this.timer.complete = C)) : l("No active transition timer. Use start() or wait() before then().")
                    }

                    function C() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var Z = this.queue.shift();
                            b.call(this, Z.options, !0, Z.args)
                        }
                    }

                    function K(Z) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var se;
                        typeof Z == "string" ? (se = {}, se[Z] = 1) : se = typeof Z == "object" && Z != null ? Z : this.props, Fe.call(this, se, Ae), Ee.call(this)
                    }

                    function re(Z) {
                        K.call(this, Z), Fe.call(this, Z, Jt, Xy)
                    }

                    function Y(Z) {
                        typeof Z != "string" && (Z = "block"), this.el.style.display = Z
                    }

                    function X() {
                        K.call(this), this.el.style.display = "none"
                    }

                    function ie() {
                        this.el.offsetHeight
                    }

                    function ae() {
                        K.call(this), e.removeData(this.el, w), this.$el = this.el = null
                    }

                    function Ee() {
                        var Z, se, ge = [];
                        this.upstream && ge.push(this.upstream);
                        for (Z in this.props) se = this.props[Z], se.active && ge.push(se.string);
                        ge = ge.join(","), this.style !== ge && (this.style = ge, this.el.style[V.transition.dom] = ge)
                    }

                    function Fe(Z, se, ge) {
                        var fe, we, Xe, Le, xr = se !== Ae,
                            ve = {};
                        for (fe in Z) Xe = Z[fe], fe in be ? (ve.transform || (ve.transform = {}), ve.transform[fe] = Xe) : (x.test(fe) && (fe = r(fe)), fe in Ce ? ve[fe] = Xe : (Le || (Le = {}), Le[fe] = Xe));
                        for (fe in ve) {
                            if (Xe = ve[fe], we = this.props[fe], !we) {
                                if (!xr) continue;
                                we = m.call(this, fe)
                            }
                            se.call(this, we, Xe)
                        }
                        ge && Le && ge.call(this, Le)
                    }

                    function Ae(Z) {
                        Z.stop()
                    }

                    function Jt(Z, se) {
                        Z.set(se)
                    }

                    function Xy(Z) {
                        this.$el.css(Z)
                    }

                    function Ge(Z, se) {
                        c[Z] = function() {
                            return this.children ? ky.call(this, se, arguments) : (this.el && se.apply(this, arguments), this)
                        }
                    }

                    function ky(Z, se) {
                        var ge, fe = this.children.length;
                        for (ge = 0; fe > ge; ge++) Z.apply(this.children[ge], se);
                        return this
                    }
                    c.init = function(Z) {
                        if (this.$el = e(Z), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, j.keepInherited && !j.fallback) {
                            var se = le(this.el, "transition");
                            se && !B.test(se) && (this.upstream = se)
                        }
                        V.backface && j.hideBackface && H(this.el, V.backface.css, "hidden")
                    }, Ge("add", m), Ge("start", b), Ge("wait", S), Ge("then", L), Ge("next", C), Ge("stop", K), Ge("set", re), Ge("show", Y), Ge("hide", X), Ge("redraw", ie), Ge("destroy", ae)
                }),
                F = g(y, function(c) {
                    function m(b, S) {
                        var L = e.data(b, w) || e.data(b, w, new y.Bare);
                        return L.el || L.init(b), S ? L.start(S) : L
                    }
                    c.init = function(b, S) {
                        var L = e(b);
                        if (!L.length) return this;
                        if (L.length === 1) return m(L[0], S);
                        var C = [];
                        return L.each(function(K, re) {
                            C.push(m(re, S))
                        }), this.children = C, this
                    }
                }),
                p = g(function(c) {
                    function m() {
                        var C = this.get();
                        this.update("auto");
                        var K = this.get();
                        return this.update(C), K
                    }

                    function b(C, K, re) {
                        return K !== void 0 && (re = K), C in d ? C : re
                    }

                    function S(C) {
                        var K = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
                        return (K ? i(K[1], K[2], K[3]) : C).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var L = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    c.init = function(C, K, re, Y) {
                        this.$el = C, this.el = C[0];
                        var X = K[0];
                        re[2] && (X = re[2]), Re[X] && (X = Re[X]), this.name = X, this.type = re[1], this.duration = u(K[1], this.duration, L.duration), this.ease = b(K[2], this.ease, L.ease), this.delay = u(K[3], this.delay, L.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = z.test(this.name), this.unit = Y.unit || this.unit || j.defaultUnit, this.angle = Y.angle || this.angle || j.defaultAngle, j.fallback || Y.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + J + this.duration + "ms" + (this.ease != "ease" ? J + d[this.ease][0] : "") + (this.delay ? J + this.delay + "ms" : ""))
                    }, c.set = function(C) {
                        C = this.convert(C, this.type), this.update(C), this.redraw()
                    }, c.transition = function(C) {
                        this.active = !0, C = this.convert(C, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), C == "auto" && (C = m.call(this))), this.nextStyle = C
                    }, c.fallback = function(C) {
                        var K = this.el.style[this.name] || this.convert(this.get(), this.type);
                        C = this.convert(C, this.type), this.auto && (K == "auto" && (K = this.convert(this.get(), this.type)), C == "auto" && (C = m.call(this))), this.tween = new Q({
                            from: K,
                            to: C,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, c.get = function() {
                        return le(this.el, this.name)
                    }, c.update = function(C) {
                        H(this.el, this.name, C)
                    }, c.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, H(this.el, this.name, this.get()));
                        var C = this.tween;
                        C && C.context && C.destroy()
                    }, c.convert = function(C, K) {
                        if (C == "auto" && this.auto) return C;
                        var re, Y = typeof C == "number",
                            X = typeof C == "string";
                        switch (K) {
                            case O:
                                if (Y) return C;
                                if (X && C.replace(T, "") === "") return +C;
                                re = "number(unitless)";
                                break;
                            case P:
                                if (X) {
                                    if (C === "" && this.original) return this.original;
                                    if (K.test(C)) return C.charAt(0) == "#" && C.length == 7 ? C : S(C)
                                }
                                re = "hex or rgb string";
                                break;
                            case N:
                                if (Y) return C + this.unit;
                                if (X && K.test(C)) return C;
                                re = "number(px) or string(unit)";
                                break;
                            case R:
                                if (Y) return C + this.unit;
                                if (X && K.test(C)) return C;
                                re = "number(px) or string(unit or %)";
                                break;
                            case k:
                                if (Y) return C + this.angle;
                                if (X && K.test(C)) return C;
                                re = "number(deg) or string(angle)";
                                break;
                            case U:
                                if (Y || X && R.test(C)) return C;
                                re = "number(unitless) or string(unit or %)"
                        }
                        return s(re, C), C
                    }, c.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                h = g(p, function(c, m) {
                    c.init = function() {
                        m.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), P))
                    }
                }),
                G = g(p, function(c, m) {
                    c.init = function() {
                        m.init.apply(this, arguments), this.animate = this.fallback
                    }, c.get = function() {
                        return this.$el[this.name]()
                    }, c.update = function(b) {
                        this.$el[this.name](b)
                    }
                }),
                q = g(p, function(c, m) {
                    function b(S, L) {
                        var C, K, re, Y, X;
                        for (C in S) Y = be[C], re = Y[0], K = Y[1] || C, X = this.convert(S[C], re), L.call(this, K, X, re)
                    }
                    c.init = function() {
                        m.init.apply(this, arguments), this.current || (this.current = {}, be.perspective && j.perspective && (this.current.perspective = j.perspective, H(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, c.set = function(S) {
                        b.call(this, S, function(L, C) {
                            this.current[L] = C
                        }), H(this.el, this.name, this.style(this.current)), this.redraw()
                    }, c.transition = function(S) {
                        var L = this.values(S);
                        this.tween = new oe({
                            current: this.current,
                            values: L,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var C, K = {};
                        for (C in this.current) K[C] = C in L ? L[C] : this.current[C];
                        this.active = !0, this.nextStyle = this.style(K)
                    }, c.fallback = function(S) {
                        var L = this.values(S);
                        this.tween = new oe({
                            current: this.current,
                            values: L,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, c.update = function() {
                        H(this.el, this.name, this.style(this.current))
                    }, c.style = function(S) {
                        var L, C = "";
                        for (L in S) C += L + "(" + S[L] + ") ";
                        return C
                    }, c.values = function(S) {
                        var L, C = {};
                        return b.call(this, S, function(K, re, Y) {
                            C[K] = re, this.current[K] === void 0 && (L = 0, ~K.indexOf("scale") && (L = 1), this.current[K] = this.convert(L, Y))
                        }), C
                    }
                }),
                Q = g(function(c) {
                    function m(X) {
                        re.push(X) === 1 && ue(b)
                    }

                    function b() {
                        var X, ie, ae, Ee = re.length;
                        if (Ee)
                            for (ue(b), ie = _e(), X = Ee; X--;) ae = re[X], ae && ae.render(ie)
                    }

                    function S(X) {
                        var ie, ae = e.inArray(X, re);
                        ae >= 0 && (ie = re.slice(ae + 1), re.length = ae, ie.length && (re = re.concat(ie)))
                    }

                    function L(X) {
                        return Math.round(X * Y) / Y
                    }

                    function C(X, ie, ae) {
                        return i(X[0] + ae * (ie[0] - X[0]), X[1] + ae * (ie[1] - X[1]), X[2] + ae * (ie[2] - X[2]))
                    }
                    var K = {
                        ease: d.ease[1],
                        from: 0,
                        to: 1
                    };
                    c.init = function(X) {
                        this.duration = X.duration || 0, this.delay = X.delay || 0;
                        var ie = X.ease || K.ease;
                        d[ie] && (ie = d[ie][1]), typeof ie != "function" && (ie = K.ease), this.ease = ie, this.update = X.update || o, this.complete = X.complete || o, this.context = X.context || this, this.name = X.name;
                        var ae = X.from,
                            Ee = X.to;
                        ae === void 0 && (ae = K.from), Ee === void 0 && (Ee = K.to), this.unit = X.unit || "", typeof ae == "number" && typeof Ee == "number" ? (this.begin = ae, this.change = Ee - ae) : this.format(Ee, ae), this.value = this.begin + this.unit, this.start = _e(), X.autoplay !== !1 && this.play()
                    }, c.play = function() {
                        this.active || (this.start || (this.start = _e()), this.active = !0, m(this))
                    }, c.stop = function() {
                        this.active && (this.active = !1, S(this))
                    }, c.render = function(X) {
                        var ie, ae = X - this.start;
                        if (this.delay) {
                            if (ae <= this.delay) return;
                            ae -= this.delay
                        }
                        if (ae < this.duration) {
                            var Ee = this.ease(ae, 0, 1, this.duration);
                            return ie = this.startRGB ? C(this.startRGB, this.endRGB, Ee) : L(this.begin + Ee * this.change), this.value = ie + this.unit, void this.update.call(this.context, this.value)
                        }
                        ie = this.endHex || this.begin + this.change, this.value = ie + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, c.format = function(X, ie) {
                        if (ie += "", X += "", X.charAt(0) == "#") return this.startRGB = n(ie), this.endRGB = n(X), this.endHex = X, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ae = ie.replace(T, ""),
                                Ee = X.replace(T, "");
                            ae !== Ee && a("tween", ie, X), this.unit = ae
                        }
                        ie = parseFloat(ie), X = parseFloat(X), this.begin = this.value = ie, this.change = X - ie
                    }, c.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var re = [],
                        Y = 1e3
                }),
                ne = g(Q, function(c) {
                    c.init = function(m) {
                        this.duration = m.duration || 0, this.complete = m.complete || o, this.context = m.context, this.play()
                    }, c.render = function(m) {
                        var b = m - this.start;
                        b < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                oe = g(Q, function(c, m) {
                    c.init = function(b) {
                        this.context = b.context, this.update = b.update, this.tweens = [], this.current = b.current;
                        var S, L;
                        for (S in b.values) L = b.values[S], this.current[S] !== L && this.tweens.push(new Q({
                            name: S,
                            from: this.current[S],
                            to: L,
                            duration: b.duration,
                            delay: b.delay,
                            ease: b.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, c.render = function(b) {
                        var S, L, C = this.tweens.length,
                            K = !1;
                        for (S = C; S--;) L = this.tweens[S], L.context && (L.render(b), this.current[L.name] = L.value, K = !0);
                        return K ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, c.destroy = function() {
                        if (m.destroy.call(this), this.tweens) {
                            var b, S = this.tweens.length;
                            for (b = S; b--;) this.tweens[b].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                j = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !V.transition,
                    agentTests: []
                };
            t.fallback = function(c) {
                if (!V.transition) return j.fallback = !0;
                j.agentTests.push("(" + c + ")");
                var m = new RegExp(j.agentTests.join("|"), "i");
                j.fallback = m.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(c) {
                return new Q(c)
            }, t.delay = function(c, m, b) {
                return new ne({
                    complete: m,
                    duration: c,
                    context: b
                })
            }, e.fn.tram = function(c) {
                return t.call(null, this, c)
            };
            var H = e.style,
                le = e.css,
                Re = {
                    transform: V.transform && V.transform.css
                },
                Ce = {
                    color: [h, P],
                    background: [h, P, "background-color"],
                    "outline-color": [h, P],
                    "border-color": [h, P],
                    "border-top-color": [h, P],
                    "border-right-color": [h, P],
                    "border-bottom-color": [h, P],
                    "border-left-color": [h, P],
                    "border-width": [p, N],
                    "border-top-width": [p, N],
                    "border-right-width": [p, N],
                    "border-bottom-width": [p, N],
                    "border-left-width": [p, N],
                    "border-spacing": [p, N],
                    "letter-spacing": [p, N],
                    margin: [p, N],
                    "margin-top": [p, N],
                    "margin-right": [p, N],
                    "margin-bottom": [p, N],
                    "margin-left": [p, N],
                    padding: [p, N],
                    "padding-top": [p, N],
                    "padding-right": [p, N],
                    "padding-bottom": [p, N],
                    "padding-left": [p, N],
                    "outline-width": [p, N],
                    opacity: [p, O],
                    top: [p, R],
                    right: [p, R],
                    bottom: [p, R],
                    left: [p, R],
                    "font-size": [p, R],
                    "text-indent": [p, R],
                    "word-spacing": [p, R],
                    width: [p, R],
                    "min-width": [p, R],
                    "max-width": [p, R],
                    height: [p, R],
                    "min-height": [p, R],
                    "max-height": [p, R],
                    "line-height": [p, U],
                    "scroll-top": [G, O, "scrollTop"],
                    "scroll-left": [G, O, "scrollLeft"]
                },
                be = {};
            V.transform && (Ce.transform = [q], be = {
                x: [R, "translateX"],
                y: [R, "translateY"],
                rotate: [k],
                rotateX: [k],
                rotateY: [k],
                scale: [O],
                scaleX: [O],
                scaleY: [O],
                skew: [k],
                skewX: [k],
                skewY: [k]
            }), V.transform && V.backface && (be.z = [R, "translateZ"], be.rotateZ = [k], be.scaleZ = [O], be.perspective = [N]);
            var je = /ms/,
                gt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var ha = f((LF, pa) => {
        "use strict";
        var jy = window.$,
            Ky = Hn() && jy.tram;
        pa.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                s = r.slice,
                a = r.concat,
                u = n.toString,
                l = n.hasOwnProperty,
                E = r.forEach,
                g = r.map,
                d = r.reduce,
                v = r.reduceRight,
                I = r.filter,
                _ = r.every,
                w = r.some,
                T = r.indexOf,
                x = r.lastIndexOf,
                O = Array.isArray,
                P = Object.keys,
                N = i.bind,
                R = e.each = e.forEach = function(A, M, W) {
                    if (A == null) return A;
                    if (E && A.forEach === E) A.forEach(M, W);
                    else if (A.length === +A.length) {
                        for (var V = 0, te = A.length; V < te; V++)
                            if (M.call(W, A[V], V, A) === t) return
                    } else
                        for (var ee = e.keys(A), V = 0, te = ee.length; V < te; V++)
                            if (M.call(W, A[ee[V]], ee[V], A) === t) return;
                    return A
                };
            e.map = e.collect = function(A, M, W) {
                var V = [];
                return A == null ? V : g && A.map === g ? A.map(M, W) : (R(A, function(te, ee, ue) {
                    V.push(M.call(W, te, ee, ue))
                }), V)
            }, e.find = e.detect = function(A, M, W) {
                var V;
                return k(A, function(te, ee, ue) {
                    if (M.call(W, te, ee, ue)) return V = te, !0
                }), V
            }, e.filter = e.select = function(A, M, W) {
                var V = [];
                return A == null ? V : I && A.filter === I ? A.filter(M, W) : (R(A, function(te, ee, ue) {
                    M.call(W, te, ee, ue) && V.push(te)
                }), V)
            };
            var k = e.some = e.any = function(A, M, W) {
                M || (M = e.identity);
                var V = !1;
                return A == null ? V : w && A.some === w ? A.some(M, W) : (R(A, function(te, ee, ue) {
                    if (V || (V = M.call(W, te, ee, ue))) return t
                }), !!V)
            };
            e.contains = e.include = function(A, M) {
                return A == null ? !1 : T && A.indexOf === T ? A.indexOf(M) != -1 : k(A, function(W) {
                    return W === M
                })
            }, e.delay = function(A, M) {
                var W = s.call(arguments, 2);
                return setTimeout(function() {
                    return A.apply(null, W)
                }, M)
            }, e.defer = function(A) {
                return e.delay.apply(e, [A, 1].concat(s.call(arguments, 1)))
            }, e.throttle = function(A) {
                var M, W, V;
                return function() {
                    M || (M = !0, W = arguments, V = this, Ky.frame(function() {
                        M = !1, A.apply(V, W)
                    }))
                }
            }, e.debounce = function(A, M, W) {
                var V, te, ee, ue, _e, y = function() {
                    var F = e.now() - ue;
                    F < M ? V = setTimeout(y, M - F) : (V = null, W || (_e = A.apply(ee, te), ee = te = null))
                };
                return function() {
                    ee = this, te = arguments, ue = e.now();
                    var F = W && !V;
                    return V || (V = setTimeout(y, M)), F && (_e = A.apply(ee, te), ee = te = null), _e
                }
            }, e.defaults = function(A) {
                if (!e.isObject(A)) return A;
                for (var M = 1, W = arguments.length; M < W; M++) {
                    var V = arguments[M];
                    for (var te in V) A[te] === void 0 && (A[te] = V[te])
                }
                return A
            }, e.keys = function(A) {
                if (!e.isObject(A)) return [];
                if (P) return P(A);
                var M = [];
                for (var W in A) e.has(A, W) && M.push(W);
                return M
            }, e.has = function(A, M) {
                return l.call(A, M)
            }, e.isObject = function(A) {
                return A === Object(A)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var U = /(.)^/,
                B = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                z = /\\|'|\r|\n|\u2028|\u2029/g,
                J = function(A) {
                    return "\\" + B[A]
                },
                D = /^\s*(\w|\$)+\s*$/;
            return e.template = function(A, M, W) {
                !M && W && (M = W), M = e.defaults({}, M, e.templateSettings);
                var V = RegExp([(M.escape || U).source, (M.interpolate || U).source, (M.evaluate || U).source].join("|") + "|$", "g"),
                    te = 0,
                    ee = "__p+='";
                A.replace(V, function(F, p, h, G, q) {
                    return ee += A.slice(te, q).replace(z, J), te = q + F.length, p ? ee += `'+
((__t=(` + p + `))==null?'':_.escape(__t))+
'` : h ? ee += `'+
((__t=(` + h + `))==null?'':__t)+
'` : G && (ee += `';
` + G + `
__p+='`), F
                }), ee += `';
`;
                var ue = M.variable;
                if (ue) {
                    if (!D.test(ue)) throw new Error("variable is not a bare identifier: " + ue)
                } else ee = `with(obj||{}){
` + ee + `}
`, ue = "obj";
                ee = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ee + `return __p;
`;
                var _e;
                try {
                    _e = new Function(M.variable || "obj", "_", ee)
                } catch (F) {
                    throw F.source = ee, F
                }
                var y = function(F) {
                    return _e.call(this, F, e)
                };
                return y.source = "function(" + ue + `){
` + ee + "}", y
            }, e
        }()
    });
    var Ue = f((PF, Ta) => {
        "use strict";
        var de = {},
            At = {},
            wt = [],
            jn = window.Webflow || [],
            ut = window.jQuery,
            Ve = ut(window),
            Yy = ut(document),
            Ye = ut.isFunction,
            ke = de._ = ha(),
            ya = de.tram = Hn() && ut.tram,
            Lr = !1,
            Kn = !1;
        ya.config.hideBackface = !1;
        ya.config.keepInherited = !0;
        de.define = function(e, t, r) {
            At[e] && va(At[e]);
            var n = At[e] = t(ut, ke, r) || {};
            return Ea(n), n
        };
        de.require = function(e) {
            return At[e]
        };

        function Ea(e) {
            de.env() && (Ye(e.design) && Ve.on("__wf_design", e.design), Ye(e.preview) && Ve.on("__wf_preview", e.preview)), Ye(e.destroy) && Ve.on("__wf_destroy", e.destroy), e.ready && Ye(e.ready) && $y(e)
        }

        function $y(e) {
            if (Lr) {
                e.ready();
                return
            }
            ke.contains(wt, e.ready) || wt.push(e.ready)
        }

        function va(e) {
            Ye(e.design) && Ve.off("__wf_design", e.design), Ye(e.preview) && Ve.off("__wf_preview", e.preview), Ye(e.destroy) && Ve.off("__wf_destroy", e.destroy), e.ready && Ye(e.ready) && Qy(e)
        }

        function Qy(e) {
            wt = ke.filter(wt, function(t) {
                return t !== e.ready
            })
        }
        de.push = function(e) {
            if (Lr) {
                Ye(e) && e();
                return
            }
            jn.push(e)
        };
        de.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var Cr = navigator.userAgent.toLowerCase(),
            ma = de.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            Zy = de.env.chrome = /chrome/.test(Cr) && /Google/.test(navigator.vendor) && parseInt(Cr.match(/chrome\/(\d+)\./)[1], 10),
            Jy = de.env.ios = /(ipod|iphone|ipad)/.test(Cr);
        de.env.safari = /safari/.test(Cr) && !Zy && !Jy;
        var zn;
        ma && Yy.on("touchstart mousedown", function(e) {
            zn = e.target
        });
        de.validClick = ma ? function(e) {
            return e === zn || ut.contains(e, zn)
        } : function() {
            return !0
        };
        var _a = "resize.webflow orientationchange.webflow load.webflow",
            eE = "scroll.webflow " + _a;
        de.resize = Yn(Ve, _a);
        de.scroll = Yn(Ve, eE);
        de.redraw = Yn();

        function Yn(e, t) {
            var r = [],
                n = {};
            return n.up = ke.throttle(function(i) {
                ke.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (ke.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = ke.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        de.location = function(e) {
            window.location = e
        };
        de.env() && (de.location = function() {});
        de.ready = function() {
            Lr = !0, Kn ? tE() : ke.each(wt, ga), ke.each(jn, ga), de.resize.up()
        };

        function ga(e) {
            Ye(e) && e()
        }

        function tE() {
            Kn = !1, ke.each(At, Ea)
        }
        var yt;
        de.load = function(e) {
            yt.then(e)
        };

        function Ia() {
            yt && (yt.reject(), Ve.off("load", yt.resolve)), yt = new ut.Deferred, Ve.on("load", yt.resolve)
        }
        de.destroy = function(e) {
            e = e || {}, Kn = !0, Ve.triggerHandler("__wf_destroy"), e.domready != null && (Lr = e.domready), ke.each(At, va), de.resize.off(), de.scroll.off(), de.redraw.off(), wt = [], jn = [], yt.state() === "pending" && Ia()
        };
        ut(de.ready);
        Ia();
        Ta.exports = window.Webflow = de
    });
    var wa = f((NF, Aa) => {
        "use strict";
        var ba = Ue();
        ba.define("brand", Aa.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                s = window.location,
                a = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                l;
            t.ready = function() {
                var v = n.attr("data-wf-status"),
                    I = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(I) && s.hostname !== I && (v = !0), v && !a && (l = l || g(), d(), setTimeout(d, 500), e(r).off(u, E).on(u, E))
            };

            function E() {
                var v = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(l).attr("style", v ? "display: none !important;" : "")
            }

            function g() {
                var v = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return v.append(I, _), v[0]
            }

            function d() {
                var v = i.children(o),
                    I = v.length && v.get(0) === l,
                    _ = ba.env("editor");
                if (I) {
                    _ && v.remove();
                    return
                }
                v.length && v.remove(), _ || i.append(l)
            }
            return t
        })
    });
    var Oa = f((MF, Sa) => {
        "use strict";
        var $n = Ue();
        $n.define("edit", Sa.exports = function(e, t, r) {
            if (r = r || {}, ($n.env("test") || $n.env("frame")) && !r.fixture && !rE()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                s = document.location,
                a = "hashchange",
                u, l = r.load || d,
                E = !1;
            try {
                E = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            E ? l() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && l() : i.on(a, g).triggerHandler(a);

            function g() {
                u || /\?edit/.test(s.hash) && l()
            }

            function d() {
                u = !0, window.WebflowEditor = !0, i.off(a, g), x(function(P) {
                    e.ajax({
                        url: T("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: v(P)
                    })
                })
            }

            function v(P) {
                return function(N) {
                    if (!N) {
                        console.error("Could not load editor data");
                        return
                    }
                    N.thirdPartyCookiesSupported = P, I(w(N.scriptPath), function() {
                        window.WebflowEditor(N)
                    })
                }
            }

            function I(P, N) {
                e.ajax({
                    type: "GET",
                    url: P,
                    dataType: "script",
                    cache: !0
                }).then(N, _)
            }

            function _(P, N, R) {
                throw console.error("Could not load editor script: " + N), R
            }

            function w(P) {
                return P.indexOf("//") >= 0 ? P : T("https://editor-api.webflow.com" + P)
            }

            function T(P) {
                return P.replace(/([^:])\/\//g, "$1/")
            }

            function x(P) {
                var N = window.document.createElement("iframe");
                N.src = "https://webflow.com/site/third-party-cookie-check.html", N.style.display = "none", N.sandbox = "allow-scripts allow-same-origin";
                var R = function(k) {
                    k.data === "WF_third_party_cookies_unsupported" ? (O(N, R), P(!1)) : k.data === "WF_third_party_cookies_supported" && (O(N, R), P(!0))
                };
                N.onerror = function() {
                    O(N, R), P(!1)
                }, window.addEventListener("message", R, !1), window.document.body.appendChild(N)
            }

            function O(P, N) {
                window.removeEventListener("message", N, !1), P.remove()
            }
            return n
        });

        function rE() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Ra = f((DF, xa) => {
        "use strict";
        var nE = Ue();
        nE.define("focus-visible", xa.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    s = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function a(O) {
                    return !!(O && O !== document && O.nodeName !== "HTML" && O.nodeName !== "BODY" && "classList" in O && "contains" in O.classList)
                }

                function u(O) {
                    var P = O.type,
                        N = O.tagName;
                    return !!(N === "INPUT" && s[P] && !O.readOnly || N === "TEXTAREA" && !O.readOnly || O.isContentEditable)
                }

                function l(O) {
                    O.getAttribute("data-wf-focus-visible") || O.setAttribute("data-wf-focus-visible", "true")
                }

                function E(O) {
                    O.getAttribute("data-wf-focus-visible") && O.removeAttribute("data-wf-focus-visible")
                }

                function g(O) {
                    O.metaKey || O.altKey || O.ctrlKey || (a(r.activeElement) && l(r.activeElement), n = !0)
                }

                function d() {
                    n = !1
                }

                function v(O) {
                    a(O.target) && (n || u(O.target)) && l(O.target)
                }

                function I(O) {
                    a(O.target) && O.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), E(O.target))
                }

                function _() {
                    document.visibilityState === "hidden" && (i && (n = !0), w())
                }

                function w() {
                    document.addEventListener("mousemove", x), document.addEventListener("mousedown", x), document.addEventListener("mouseup", x), document.addEventListener("pointermove", x), document.addEventListener("pointerdown", x), document.addEventListener("pointerup", x), document.addEventListener("touchmove", x), document.addEventListener("touchstart", x), document.addEventListener("touchend", x)
                }

                function T() {
                    document.removeEventListener("mousemove", x), document.removeEventListener("mousedown", x), document.removeEventListener("mouseup", x), document.removeEventListener("pointermove", x), document.removeEventListener("pointerdown", x), document.removeEventListener("pointerup", x), document.removeEventListener("touchmove", x), document.removeEventListener("touchstart", x), document.removeEventListener("touchend", x)
                }

                function x(O) {
                    O.target.nodeName && O.target.nodeName.toLowerCase() === "html" || (n = !1, T())
                }
                document.addEventListener("keydown", g, !0), document.addEventListener("mousedown", d, !0), document.addEventListener("pointerdown", d, !0), document.addEventListener("touchstart", d, !0), document.addEventListener("visibilitychange", _, !0), w(), r.addEventListener("focus", v, !0), r.addEventListener("blur", I, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var Pa = f((FF, La) => {
        "use strict";
        var Ca = Ue();
        Ca.define("focus", La.exports = function() {
            var e = [],
                t = !1;

            function r(s) {
                t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
            }

            function n(s) {
                var a = s.target,
                    u = a.tagName;
                return /^a$/i.test(u) && a.href != null || /^(button|textarea)$/i.test(u) && a.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && a.controls === !0
            }

            function i(s) {
                n(s) && (t = !0, setTimeout(() => {
                    for (t = !1, s.target.focus(); e.length > 0;) {
                        var a = e.pop();
                        a.target.dispatchEvent(new MouseEvent(a.type, a))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ca.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var Da = f((qF, Ma) => {
        "use strict";
        var Qn = window.jQuery,
            $e = {},
            Pr = [],
            Na = ".w-ix",
            Nr = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Qn(t).triggerHandler($e.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Qn(t).triggerHandler($e.types.OUTRO))
                }
            };
        $e.triggers = {};
        $e.types = {
            INTRO: "w-ix-intro" + Na,
            OUTRO: "w-ix-outro" + Na
        };
        $e.init = function() {
            for (var e = Pr.length, t = 0; t < e; t++) {
                var r = Pr[t];
                r[0](0, r[1])
            }
            Pr = [], Qn.extend($e.triggers, Nr)
        };
        $e.async = function() {
            for (var e in Nr) {
                var t = Nr[e];
                Nr.hasOwnProperty(e) && ($e.triggers[e] = function(r, n) {
                    Pr.push([t, n])
                })
            }
        };
        $e.async();
        Ma.exports = $e
    });
    var Jn = f((GF, Ga) => {
        "use strict";
        var Zn = Da();

        function Fa(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var iE = window.jQuery,
            Mr = {},
            qa = ".w-ix",
            oE = {
                reset: function(e, t) {
                    Zn.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Zn.triggers.intro(e, t), Fa(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Zn.triggers.outro(e, t), Fa(t, "COMPONENT_INACTIVE")
                }
            };
        Mr.triggers = {};
        Mr.types = {
            INTRO: "w-ix-intro" + qa,
            OUTRO: "w-ix-outro" + qa
        };
        iE.extend(Mr.triggers, oE);
        Ga.exports = Mr
    });
    var ei = f((XF, Xa) => {
        var aE = typeof global == "object" && global && global.Object === Object && global;
        Xa.exports = aE
    });
    var Be = f((kF, ka) => {
        var sE = ei(),
            uE = typeof self == "object" && self && self.Object === Object && self,
            cE = sE || uE || Function("return this")();
        ka.exports = cE
    });
    var St = f((VF, Va) => {
        var lE = Be(),
            fE = lE.Symbol;
        Va.exports = fE
    });
    var Ha = f((UF, Wa) => {
        var Ua = St(),
            Ba = Object.prototype,
            dE = Ba.hasOwnProperty,
            pE = Ba.toString,
            er = Ua ? Ua.toStringTag : void 0;

        function hE(e) {
            var t = dE.call(e, er),
                r = e[er];
            try {
                e[er] = void 0;
                var n = !0
            } catch {}
            var i = pE.call(e);
            return n && (t ? e[er] = r : delete e[er]), i
        }
        Wa.exports = hE
    });
    var ja = f((BF, za) => {
        var gE = Object.prototype,
            yE = gE.toString;

        function EE(e) {
            return yE.call(e)
        }
        za.exports = EE
    });
    var ct = f((WF, $a) => {
        var Ka = St(),
            vE = Ha(),
            mE = ja(),
            _E = "[object Null]",
            IE = "[object Undefined]",
            Ya = Ka ? Ka.toStringTag : void 0;

        function TE(e) {
            return e == null ? e === void 0 ? IE : _E : Ya && Ya in Object(e) ? vE(e) : mE(e)
        }
        $a.exports = TE
    });
    var ti = f((HF, Qa) => {
        function bE(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Qa.exports = bE
    });
    var ri = f((zF, Za) => {
        var AE = ti(),
            wE = AE(Object.getPrototypeOf, Object);
        Za.exports = wE
    });
    var nt = f((jF, Ja) => {
        function SE(e) {
            return e != null && typeof e == "object"
        }
        Ja.exports = SE
    });
    var ni = f((KF, ts) => {
        var OE = ct(),
            xE = ri(),
            RE = nt(),
            CE = "[object Object]",
            LE = Function.prototype,
            PE = Object.prototype,
            es = LE.toString,
            NE = PE.hasOwnProperty,
            ME = es.call(Object);

        function DE(e) {
            if (!RE(e) || OE(e) != CE) return !1;
            var t = xE(e);
            if (t === null) return !0;
            var r = NE.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && es.call(r) == ME
        }
        ts.exports = DE
    });
    var rs = f(ii => {
        "use strict";
        Object.defineProperty(ii, "__esModule", {
            value: !0
        });
        ii.default = FE;

        function FE(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var ns = f((ai, oi) => {
        "use strict";
        Object.defineProperty(ai, "__esModule", {
            value: !0
        });
        var qE = rs(),
            GE = XE(qE);

        function XE(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Ot;
        typeof self < "u" ? Ot = self : typeof window < "u" ? Ot = window : typeof global < "u" ? Ot = global : typeof oi < "u" ? Ot = oi : Ot = Function("return this")();
        var kE = (0, GE.default)(Ot);
        ai.default = kE
    });
    var si = f(tr => {
        "use strict";
        tr.__esModule = !0;
        tr.ActionTypes = void 0;
        tr.default = ss;
        var VE = ni(),
            UE = as(VE),
            BE = ns(),
            is = as(BE);

        function as(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var os = tr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function ss(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(ss)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                s = [],
                a = s,
                u = !1;

            function l() {
                a === s && (a = s.slice())
            }

            function E() {
                return o
            }

            function g(_) {
                if (typeof _ != "function") throw new Error("Expected listener to be a function.");
                var w = !0;
                return l(), a.push(_),
                    function() {
                        if (w) {
                            w = !1, l();
                            var x = a.indexOf(_);
                            a.splice(x, 1)
                        }
                    }
            }

            function d(_) {
                if (!(0, UE.default)(_)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, _)
                } finally {
                    u = !1
                }
                for (var w = s = a, T = 0; T < w.length; T++) w[T]();
                return _
            }

            function v(_) {
                if (typeof _ != "function") throw new Error("Expected the nextReducer to be a function.");
                i = _, d({
                    type: os.INIT
                })
            }

            function I() {
                var _, w = g;
                return _ = {
                    subscribe: function(x) {
                        if (typeof x != "object") throw new TypeError("Expected the observer to be an object.");

                        function O() {
                            x.next && x.next(E())
                        }
                        O();
                        var P = w(O);
                        return {
                            unsubscribe: P
                        }
                    }
                }, _[is.default] = function() {
                    return this
                }, _
            }
            return d({
                type: os.INIT
            }), n = {
                dispatch: d,
                subscribe: g,
                getState: E,
                replaceReducer: v
            }, n[is.default] = I, n
        }
    });
    var ci = f(ui => {
        "use strict";
        ui.__esModule = !0;
        ui.default = WE;

        function WE(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var ls = f(li => {
        "use strict";
        li.__esModule = !0;
        li.default = YE;
        var us = si(),
            HE = ni(),
            ZF = cs(HE),
            zE = ci(),
            JF = cs(zE);

        function cs(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function jE(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function KE(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: us.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + us.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function YE(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var s;
            var a;
            try {
                KE(r)
            } catch (u) {
                a = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    E = arguments[1];
                if (a) throw a;
                if (!1) var g;
                for (var d = !1, v = {}, I = 0; I < o.length; I++) {
                    var _ = o[I],
                        w = r[_],
                        T = l[_],
                        x = w(T, E);
                    if (typeof x > "u") {
                        var O = jE(_, E);
                        throw new Error(O)
                    }
                    v[_] = x, d = d || x !== T
                }
                return d ? v : l
            }
        }
    });
    var ds = f(fi => {
        "use strict";
        fi.__esModule = !0;
        fi.default = $E;

        function fs(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function $E(e, t) {
            if (typeof e == "function") return fs(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    s = e[o];
                typeof s == "function" && (n[o] = fs(s, t))
            }
            return n
        }
    });
    var pi = f(di => {
        "use strict";
        di.__esModule = !0;
        di.default = QE;

        function QE() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, s) {
                    return s(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var ps = f(hi => {
        "use strict";
        hi.__esModule = !0;
        var ZE = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        hi.default = rv;
        var JE = pi(),
            ev = tv(JE);

        function tv(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function rv() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, s) {
                    var a = n(i, o, s),
                        u = a.dispatch,
                        l = [],
                        E = {
                            getState: a.getState,
                            dispatch: function(d) {
                                return u(d)
                            }
                        };
                    return l = t.map(function(g) {
                        return g(E)
                    }), u = ev.default.apply(void 0, l)(a.dispatch), ZE({}, a, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var gi = f(qe => {
        "use strict";
        qe.__esModule = !0;
        qe.compose = qe.applyMiddleware = qe.bindActionCreators = qe.combineReducers = qe.createStore = void 0;
        var nv = si(),
            iv = xt(nv),
            ov = ls(),
            av = xt(ov),
            sv = ds(),
            uv = xt(sv),
            cv = ps(),
            lv = xt(cv),
            fv = pi(),
            dv = xt(fv),
            pv = ci(),
            i1 = xt(pv);

        function xt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        qe.createStore = iv.default;
        qe.combineReducers = av.default;
        qe.bindActionCreators = uv.default;
        qe.applyMiddleware = lv.default;
        qe.compose = dv.default
    });
    var We, yi, Qe, hv, gv, Dr, yv, Ei = he(() => {
        "use strict";
        We = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, yi = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, Qe = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, hv = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, gv = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, Dr = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, yv = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Se, Ev, Fr = he(() => {
        "use strict";
        Se = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, Ev = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var vv, hs = he(() => {
        "use strict";
        vv = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var mv, _v, Iv, Tv, bv, Av, wv, vi, gs = he(() => {
        "use strict";
        Fr();
        ({
            TRANSFORM_MOVE: mv,
            TRANSFORM_SCALE: _v,
            TRANSFORM_ROTATE: Iv,
            TRANSFORM_SKEW: Tv,
            STYLE_SIZE: bv,
            STYLE_FILTER: Av,
            STYLE_FONT_VARIATION: wv
        } = Se), vi = {
            [mv]: !0,
            [_v]: !0,
            [Iv]: !0,
            [Tv]: !0,
            [bv]: !0,
            [Av]: !0,
            [wv]: !0
        }
    });
    var me = {};
    Pe(me, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Uv,
        IX2_ANIMATION_FRAME_CHANGED: () => Fv,
        IX2_CLEAR_REQUESTED: () => Nv,
        IX2_ELEMENT_STATE_CHANGED: () => Vv,
        IX2_EVENT_LISTENER_ADDED: () => Mv,
        IX2_EVENT_STATE_CHANGED: () => Dv,
        IX2_INSTANCE_ADDED: () => Gv,
        IX2_INSTANCE_REMOVED: () => kv,
        IX2_INSTANCE_STARTED: () => Xv,
        IX2_MEDIA_QUERIES_DEFINED: () => Wv,
        IX2_PARAMETER_CHANGED: () => qv,
        IX2_PLAYBACK_REQUESTED: () => Lv,
        IX2_PREVIEW_REQUESTED: () => Cv,
        IX2_RAW_DATA_IMPORTED: () => Sv,
        IX2_SESSION_INITIALIZED: () => Ov,
        IX2_SESSION_STARTED: () => xv,
        IX2_SESSION_STOPPED: () => Rv,
        IX2_STOP_REQUESTED: () => Pv,
        IX2_TEST_FRAME_RENDERED: () => Hv,
        IX2_VIEWPORT_WIDTH_CHANGED: () => Bv
    });
    var Sv, Ov, xv, Rv, Cv, Lv, Pv, Nv, Mv, Dv, Fv, qv, Gv, Xv, kv, Vv, Uv, Bv, Wv, Hv, ys = he(() => {
        "use strict";
        Sv = "IX2_RAW_DATA_IMPORTED", Ov = "IX2_SESSION_INITIALIZED", xv = "IX2_SESSION_STARTED", Rv = "IX2_SESSION_STOPPED", Cv = "IX2_PREVIEW_REQUESTED", Lv = "IX2_PLAYBACK_REQUESTED", Pv = "IX2_STOP_REQUESTED", Nv = "IX2_CLEAR_REQUESTED", Mv = "IX2_EVENT_LISTENER_ADDED", Dv = "IX2_EVENT_STATE_CHANGED", Fv = "IX2_ANIMATION_FRAME_CHANGED", qv = "IX2_PARAMETER_CHANGED", Gv = "IX2_INSTANCE_ADDED", Xv = "IX2_INSTANCE_STARTED", kv = "IX2_INSTANCE_REMOVED", Vv = "IX2_ELEMENT_STATE_CHANGED", Uv = "IX2_ACTION_LIST_PLAYBACK_CHANGED", Bv = "IX2_VIEWPORT_WIDTH_CHANGED", Wv = "IX2_MEDIA_QUERIES_DEFINED", Hv = "IX2_TEST_FRAME_RENDERED"
    });
    var Te = {};
    Pe(Te, {
        ABSTRACT_NODE: () => Bm,
        AUTO: () => Pm,
        BACKGROUND: () => Sm,
        BACKGROUND_COLOR: () => wm,
        BAR_DELIMITER: () => Dm,
        BORDER_COLOR: () => Om,
        BOUNDARY_SELECTOR: () => $v,
        CHILDREN: () => Fm,
        COLON_DELIMITER: () => Mm,
        COLOR: () => xm,
        COMMA_DELIMITER: () => Nm,
        CONFIG_UNIT: () => im,
        CONFIG_VALUE: () => em,
        CONFIG_X_UNIT: () => tm,
        CONFIG_X_VALUE: () => Qv,
        CONFIG_Y_UNIT: () => rm,
        CONFIG_Y_VALUE: () => Zv,
        CONFIG_Z_UNIT: () => nm,
        CONFIG_Z_VALUE: () => Jv,
        DISPLAY: () => Rm,
        FILTER: () => Im,
        FLEX: () => Cm,
        FONT_VARIATION_SETTINGS: () => Tm,
        HEIGHT: () => Am,
        HTML_ELEMENT: () => Vm,
        IMMEDIATE_CHILDREN: () => qm,
        IX2_ID_DELIMITER: () => zv,
        OPACITY: () => _m,
        PARENT: () => Xm,
        PLAIN_OBJECT: () => Um,
        PRESERVE_3D: () => km,
        RENDER_GENERAL: () => Hm,
        RENDER_PLUGIN: () => jm,
        RENDER_STYLE: () => zm,
        RENDER_TRANSFORM: () => Wm,
        ROTATE_X: () => hm,
        ROTATE_Y: () => gm,
        ROTATE_Z: () => ym,
        SCALE_3D: () => pm,
        SCALE_X: () => lm,
        SCALE_Y: () => fm,
        SCALE_Z: () => dm,
        SIBLINGS: () => Gm,
        SKEW: () => Em,
        SKEW_X: () => vm,
        SKEW_Y: () => mm,
        TRANSFORM: () => om,
        TRANSLATE_3D: () => cm,
        TRANSLATE_X: () => am,
        TRANSLATE_Y: () => sm,
        TRANSLATE_Z: () => um,
        WF_PAGE: () => jv,
        WIDTH: () => bm,
        WILL_CHANGE: () => Lm,
        W_MOD_IX: () => Yv,
        W_MOD_JS: () => Kv
    });
    var zv, jv, Kv, Yv, $v, Qv, Zv, Jv, em, tm, rm, nm, im, om, am, sm, um, cm, lm, fm, dm, pm, hm, gm, ym, Em, vm, mm, _m, Im, Tm, bm, Am, wm, Sm, Om, xm, Rm, Cm, Lm, Pm, Nm, Mm, Dm, Fm, qm, Gm, Xm, km, Vm, Um, Bm, Wm, Hm, zm, jm, Es = he(() => {
        "use strict";
        zv = "|", jv = "data-wf-page", Kv = "w-mod-js", Yv = "w-mod-ix", $v = ".w-dyn-item", Qv = "xValue", Zv = "yValue", Jv = "zValue", em = "value", tm = "xUnit", rm = "yUnit", nm = "zUnit", im = "unit", om = "transform", am = "translateX", sm = "translateY", um = "translateZ", cm = "translate3d", lm = "scaleX", fm = "scaleY", dm = "scaleZ", pm = "scale3d", hm = "rotateX", gm = "rotateY", ym = "rotateZ", Em = "skew", vm = "skewX", mm = "skewY", _m = "opacity", Im = "filter", Tm = "font-variation-settings", bm = "width", Am = "height", wm = "backgroundColor", Sm = "background", Om = "borderColor", xm = "color", Rm = "display", Cm = "flex", Lm = "willChange", Pm = "AUTO", Nm = ",", Mm = ":", Dm = "|", Fm = "CHILDREN", qm = "IMMEDIATE_CHILDREN", Gm = "SIBLINGS", Xm = "PARENT", km = "preserve-3d", Vm = "HTML_ELEMENT", Um = "PLAIN_OBJECT", Bm = "ABSTRACT_NODE", Wm = "RENDER_TRANSFORM", Hm = "RENDER_GENERAL", zm = "RENDER_STYLE", jm = "RENDER_PLUGIN"
    });
    var vs = {};
    Pe(vs, {
        ActionAppliesTo: () => Ev,
        ActionTypeConsts: () => Se,
        EventAppliesTo: () => yi,
        EventBasedOn: () => Qe,
        EventContinuousMouseAxes: () => hv,
        EventLimitAffectedElements: () => gv,
        EventTypeConsts: () => We,
        IX2EngineActionTypes: () => me,
        IX2EngineConstants: () => Te,
        InteractionTypeConsts: () => vv,
        QuickEffectDirectionConsts: () => yv,
        QuickEffectIds: () => Dr,
        ReducedMotionTypes: () => vi
    });
    var Ne = he(() => {
        "use strict";
        Ei();
        Fr();
        hs();
        gs();
        ys();
        Es();
        Fr();
        Ei()
    });
    var Km, ms, _s = he(() => {
        "use strict";
        Ne();
        ({
            IX2_RAW_DATA_IMPORTED: Km
        } = me), ms = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case Km:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Rt = f(ye => {
        "use strict";
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var Ym = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ye.clone = Gr;
        ye.addLast = bs;
        ye.addFirst = As;
        ye.removeLast = ws;
        ye.removeFirst = Ss;
        ye.insert = Os;
        ye.removeAt = xs;
        ye.replaceAt = Rs;
        ye.getIn = Xr;
        ye.set = kr;
        ye.setIn = Vr;
        ye.update = Ls;
        ye.updateIn = Ps;
        ye.merge = Ns;
        ye.mergeDeep = Ms;
        ye.mergeIn = Ds;
        ye.omit = Fs;
        ye.addDefaults = qs;
        var Is = "INVALID_ARGS";

        function Ts(e) {
            throw new Error(e)
        }

        function mi(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var $m = {}.hasOwnProperty;

        function Gr(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = mi(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Me(e, t, r) {
            var n = r;
            n == null && Ts(Is);
            for (var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++) s[a - 3] = arguments[a];
            for (var u = 0; u < s.length; u++) {
                var l = s[u];
                if (l != null) {
                    var E = mi(l);
                    if (E.length)
                        for (var g = 0; g <= E.length; g++) {
                            var d = E[g];
                            if (!(e && n[d] !== void 0)) {
                                var v = l[d];
                                t && qr(n[d]) && qr(v) && (v = Me(e, t, n[d], v)), !(v === void 0 || v === n[d]) && (i || (i = !0, n = Gr(n)), n[d] = v)
                            }
                        }
                }
            }
            return n
        }

        function qr(e) {
            var t = typeof e > "u" ? "undefined" : Ym(e);
            return e != null && (t === "object" || t === "function")
        }

        function bs(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function As(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function ws(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Ss(e) {
            return e.length ? e.slice(1) : e
        }

        function Os(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function xs(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Rs(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Xr(e, t) {
            if (!Array.isArray(t) && Ts(Is), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function kr(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = Gr(i);
            return o[t] = r, o
        }

        function Cs(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var s = qr(e) && qr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Cs(s, t, r, n + 1)
            }
            return kr(e, o, i)
        }

        function Vr(e, t, r) {
            return t.length ? Cs(e, t, r, 0) : r
        }

        function Ls(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return kr(e, t, i)
        }

        function Ps(e, t, r) {
            var n = Xr(e, t),
                i = r(n);
            return Vr(e, t, i)
        }

        function Ns(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Me.call.apply(Me, [null, !1, !1, e, t, r, n, i, o].concat(a)) : Me(!1, !1, e, t, r, n, i, o)
        }

        function Ms(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Me.call.apply(Me, [null, !1, !0, e, t, r, n, i, o].concat(a)) : Me(!1, !0, e, t, r, n, i, o)
        }

        function Ds(e, t, r, n, i, o, s) {
            var a = Xr(e, t);
            a == null && (a = {});
            for (var u = void 0, l = arguments.length, E = Array(l > 7 ? l - 7 : 0), g = 7; g < l; g++) E[g - 7] = arguments[g];
            return E.length ? u = Me.call.apply(Me, [null, !1, !1, a, r, n, i, o, s].concat(E)) : u = Me(!1, !1, a, r, n, i, o, s), Vr(e, t, u)
        }

        function Fs(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if ($m.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, s = mi(e), a = 0; a < s.length; a++) {
                var u = s[a];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function qs(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Me.call.apply(Me, [null, !0, !1, e, t, r, n, i, o].concat(a)) : Me(!0, !1, e, t, r, n, i, o)
        }
        var Qm = {
            clone: Gr,
            addLast: bs,
            addFirst: As,
            removeLast: ws,
            removeFirst: Ss,
            insert: Os,
            removeAt: xs,
            replaceAt: Rs,
            getIn: Xr,
            set: kr,
            setIn: Vr,
            update: Ls,
            updateIn: Ps,
            merge: Ns,
            mergeDeep: Ms,
            mergeIn: Ds,
            omit: Fs,
            addDefaults: qs
        };
        ye.default = Qm
    });
    var Xs, Zm, Jm, e_, t_, r_, Gs, ks, Vs = he(() => {
        "use strict";
        Ne();
        Xs = ce(Rt()), {
            IX2_PREVIEW_REQUESTED: Zm,
            IX2_PLAYBACK_REQUESTED: Jm,
            IX2_STOP_REQUESTED: e_,
            IX2_CLEAR_REQUESTED: t_
        } = me, r_ = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Gs = Object.create(null, {
            [Zm]: {
                value: "preview"
            },
            [Jm]: {
                value: "playback"
            },
            [e_]: {
                value: "stop"
            },
            [t_]: {
                value: "clear"
            }
        }), ks = (e = r_, t) => {
            if (t.type in Gs) {
                let r = [Gs[t.type]];
                return (0, Xs.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Oe, n_, i_, o_, a_, s_, u_, c_, l_, f_, d_, Us, p_, Bs, Ws = he(() => {
        "use strict";
        Ne();
        Oe = ce(Rt()), {
            IX2_SESSION_INITIALIZED: n_,
            IX2_SESSION_STARTED: i_,
            IX2_TEST_FRAME_RENDERED: o_,
            IX2_SESSION_STOPPED: a_,
            IX2_EVENT_LISTENER_ADDED: s_,
            IX2_EVENT_STATE_CHANGED: u_,
            IX2_ANIMATION_FRAME_CHANGED: c_,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: l_,
            IX2_VIEWPORT_WIDTH_CHANGED: f_,
            IX2_MEDIA_QUERIES_DEFINED: d_
        } = me, Us = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, p_ = 20, Bs = (e = Us, t) => {
            switch (t.type) {
                case n_:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Oe.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case i_:
                    return (0, Oe.set)(e, "active", !0);
                case o_:
                    {
                        let {
                            payload: {
                                step: r = p_
                            }
                        } = t;
                        return (0, Oe.set)(e, "tick", e.tick + r)
                    }
                case a_:
                    return Us;
                case c_:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Oe.set)(e, "tick", r)
                    }
                case s_:
                    {
                        let r = (0, Oe.addLast)(e.eventListeners, t.payload);
                        return (0, Oe.set)(e, "eventListeners", r)
                    }
                case u_:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Oe.setIn)(e, ["eventState", r], n)
                    }
                case l_:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Oe.setIn)(e, ["playbackState", r], n)
                    }
                case f_:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let s = 0; s < i; s++) {
                            let {
                                key: a,
                                min: u,
                                max: l
                            } = n[s];
                            if (r >= u && r <= l) {
                                o = a;
                                break
                            }
                        }
                        return (0, Oe.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case d_:
                    return (0, Oe.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var zs = f((A1, Hs) => {
        function h_() {
            this.__data__ = [], this.size = 0
        }
        Hs.exports = h_
    });
    var Ur = f((w1, js) => {
        function g_(e, t) {
            return e === t || e !== e && t !== t
        }
        js.exports = g_
    });
    var rr = f((S1, Ks) => {
        var y_ = Ur();

        function E_(e, t) {
            for (var r = e.length; r--;)
                if (y_(e[r][0], t)) return r;
            return -1
        }
        Ks.exports = E_
    });
    var $s = f((O1, Ys) => {
        var v_ = rr(),
            m_ = Array.prototype,
            __ = m_.splice;

        function I_(e) {
            var t = this.__data__,
                r = v_(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : __.call(t, r, 1), --this.size, !0
        }
        Ys.exports = I_
    });
    var Zs = f((x1, Qs) => {
        var T_ = rr();

        function b_(e) {
            var t = this.__data__,
                r = T_(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        Qs.exports = b_
    });
    var eu = f((R1, Js) => {
        var A_ = rr();

        function w_(e) {
            return A_(this.__data__, e) > -1
        }
        Js.exports = w_
    });
    var ru = f((C1, tu) => {
        var S_ = rr();

        function O_(e, t) {
            var r = this.__data__,
                n = S_(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        tu.exports = O_
    });
    var nr = f((L1, nu) => {
        var x_ = zs(),
            R_ = $s(),
            C_ = Zs(),
            L_ = eu(),
            P_ = ru();

        function Ct(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Ct.prototype.clear = x_;
        Ct.prototype.delete = R_;
        Ct.prototype.get = C_;
        Ct.prototype.has = L_;
        Ct.prototype.set = P_;
        nu.exports = Ct
    });
    var ou = f((P1, iu) => {
        var N_ = nr();

        function M_() {
            this.__data__ = new N_, this.size = 0
        }
        iu.exports = M_
    });
    var su = f((N1, au) => {
        function D_(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        au.exports = D_
    });
    var cu = f((M1, uu) => {
        function F_(e) {
            return this.__data__.get(e)
        }
        uu.exports = F_
    });
    var fu = f((D1, lu) => {
        function q_(e) {
            return this.__data__.has(e)
        }
        lu.exports = q_
    });
    var Ze = f((F1, du) => {
        function G_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        du.exports = G_
    });
    var _i = f((q1, pu) => {
        var X_ = ct(),
            k_ = Ze(),
            V_ = "[object AsyncFunction]",
            U_ = "[object Function]",
            B_ = "[object GeneratorFunction]",
            W_ = "[object Proxy]";

        function H_(e) {
            if (!k_(e)) return !1;
            var t = X_(e);
            return t == U_ || t == B_ || t == V_ || t == W_
        }
        pu.exports = H_
    });
    var gu = f((G1, hu) => {
        var z_ = Be(),
            j_ = z_["__core-js_shared__"];
        hu.exports = j_
    });
    var vu = f((X1, Eu) => {
        var Ii = gu(),
            yu = function() {
                var e = /[^.]+$/.exec(Ii && Ii.keys && Ii.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function K_(e) {
            return !!yu && yu in e
        }
        Eu.exports = K_
    });
    var Ti = f((k1, mu) => {
        var Y_ = Function.prototype,
            $_ = Y_.toString;

        function Q_(e) {
            if (e != null) {
                try {
                    return $_.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        mu.exports = Q_
    });
    var Iu = f((V1, _u) => {
        var Z_ = _i(),
            J_ = vu(),
            eI = Ze(),
            tI = Ti(),
            rI = /[\\^$.*+?()[\]{}|]/g,
            nI = /^\[object .+?Constructor\]$/,
            iI = Function.prototype,
            oI = Object.prototype,
            aI = iI.toString,
            sI = oI.hasOwnProperty,
            uI = RegExp("^" + aI.call(sI).replace(rI, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function cI(e) {
            if (!eI(e) || J_(e)) return !1;
            var t = Z_(e) ? uI : nI;
            return t.test(tI(e))
        }
        _u.exports = cI
    });
    var bu = f((U1, Tu) => {
        function lI(e, t) {
            return e ? .[t]
        }
        Tu.exports = lI
    });
    var lt = f((B1, Au) => {
        var fI = Iu(),
            dI = bu();

        function pI(e, t) {
            var r = dI(e, t);
            return fI(r) ? r : void 0
        }
        Au.exports = pI
    });
    var Br = f((W1, wu) => {
        var hI = lt(),
            gI = Be(),
            yI = hI(gI, "Map");
        wu.exports = yI
    });
    var ir = f((H1, Su) => {
        var EI = lt(),
            vI = EI(Object, "create");
        Su.exports = vI
    });
    var Ru = f((z1, xu) => {
        var Ou = ir();

        function mI() {
            this.__data__ = Ou ? Ou(null) : {}, this.size = 0
        }
        xu.exports = mI
    });
    var Lu = f((j1, Cu) => {
        function _I(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Cu.exports = _I
    });
    var Nu = f((K1, Pu) => {
        var II = ir(),
            TI = "__lodash_hash_undefined__",
            bI = Object.prototype,
            AI = bI.hasOwnProperty;

        function wI(e) {
            var t = this.__data__;
            if (II) {
                var r = t[e];
                return r === TI ? void 0 : r
            }
            return AI.call(t, e) ? t[e] : void 0
        }
        Pu.exports = wI
    });
    var Du = f((Y1, Mu) => {
        var SI = ir(),
            OI = Object.prototype,
            xI = OI.hasOwnProperty;

        function RI(e) {
            var t = this.__data__;
            return SI ? t[e] !== void 0 : xI.call(t, e)
        }
        Mu.exports = RI
    });
    var qu = f(($1, Fu) => {
        var CI = ir(),
            LI = "__lodash_hash_undefined__";

        function PI(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = CI && t === void 0 ? LI : t, this
        }
        Fu.exports = PI
    });
    var Xu = f((Q1, Gu) => {
        var NI = Ru(),
            MI = Lu(),
            DI = Nu(),
            FI = Du(),
            qI = qu();

        function Lt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Lt.prototype.clear = NI;
        Lt.prototype.delete = MI;
        Lt.prototype.get = DI;
        Lt.prototype.has = FI;
        Lt.prototype.set = qI;
        Gu.exports = Lt
    });
    var Uu = f((Z1, Vu) => {
        var ku = Xu(),
            GI = nr(),
            XI = Br();

        function kI() {
            this.size = 0, this.__data__ = {
                hash: new ku,
                map: new(XI || GI),
                string: new ku
            }
        }
        Vu.exports = kI
    });
    var Wu = f((J1, Bu) => {
        function VI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Bu.exports = VI
    });
    var or = f((e2, Hu) => {
        var UI = Wu();

        function BI(e, t) {
            var r = e.__data__;
            return UI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Hu.exports = BI
    });
    var ju = f((t2, zu) => {
        var WI = or();

        function HI(e) {
            var t = WI(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        zu.exports = HI
    });
    var Yu = f((r2, Ku) => {
        var zI = or();

        function jI(e) {
            return zI(this, e).get(e)
        }
        Ku.exports = jI
    });
    var Qu = f((n2, $u) => {
        var KI = or();

        function YI(e) {
            return KI(this, e).has(e)
        }
        $u.exports = YI
    });
    var Ju = f((i2, Zu) => {
        var $I = or();

        function QI(e, t) {
            var r = $I(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        Zu.exports = QI
    });
    var Wr = f((o2, ec) => {
        var ZI = Uu(),
            JI = ju(),
            eT = Yu(),
            tT = Qu(),
            rT = Ju();

        function Pt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Pt.prototype.clear = ZI;
        Pt.prototype.delete = JI;
        Pt.prototype.get = eT;
        Pt.prototype.has = tT;
        Pt.prototype.set = rT;
        ec.exports = Pt
    });
    var rc = f((a2, tc) => {
        var nT = nr(),
            iT = Br(),
            oT = Wr(),
            aT = 200;

        function sT(e, t) {
            var r = this.__data__;
            if (r instanceof nT) {
                var n = r.__data__;
                if (!iT || n.length < aT - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new oT(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        tc.exports = sT
    });
    var bi = f((s2, nc) => {
        var uT = nr(),
            cT = ou(),
            lT = su(),
            fT = cu(),
            dT = fu(),
            pT = rc();

        function Nt(e) {
            var t = this.__data__ = new uT(e);
            this.size = t.size
        }
        Nt.prototype.clear = cT;
        Nt.prototype.delete = lT;
        Nt.prototype.get = fT;
        Nt.prototype.has = dT;
        Nt.prototype.set = pT;
        nc.exports = Nt
    });
    var oc = f((u2, ic) => {
        var hT = "__lodash_hash_undefined__";

        function gT(e) {
            return this.__data__.set(e, hT), this
        }
        ic.exports = gT
    });
    var sc = f((c2, ac) => {
        function yT(e) {
            return this.__data__.has(e)
        }
        ac.exports = yT
    });
    var cc = f((l2, uc) => {
        var ET = Wr(),
            vT = oc(),
            mT = sc();

        function Hr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new ET; ++t < r;) this.add(e[t])
        }
        Hr.prototype.add = Hr.prototype.push = vT;
        Hr.prototype.has = mT;
        uc.exports = Hr
    });
    var fc = f((f2, lc) => {
        function _T(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        lc.exports = _T
    });
    var pc = f((d2, dc) => {
        function IT(e, t) {
            return e.has(t)
        }
        dc.exports = IT
    });
    var Ai = f((p2, hc) => {
        var TT = cc(),
            bT = fc(),
            AT = pc(),
            wT = 1,
            ST = 2;

        function OT(e, t, r, n, i, o) {
            var s = r & wT,
                a = e.length,
                u = t.length;
            if (a != u && !(s && u > a)) return !1;
            var l = o.get(e),
                E = o.get(t);
            if (l && E) return l == t && E == e;
            var g = -1,
                d = !0,
                v = r & ST ? new TT : void 0;
            for (o.set(e, t), o.set(t, e); ++g < a;) {
                var I = e[g],
                    _ = t[g];
                if (n) var w = s ? n(_, I, g, t, e, o) : n(I, _, g, e, t, o);
                if (w !== void 0) {
                    if (w) continue;
                    d = !1;
                    break
                }
                if (v) {
                    if (!bT(t, function(T, x) {
                            if (!AT(v, x) && (I === T || i(I, T, r, n, o))) return v.push(x)
                        })) {
                        d = !1;
                        break
                    }
                } else if (!(I === _ || i(I, _, r, n, o))) {
                    d = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), d
        }
        hc.exports = OT
    });
    var yc = f((h2, gc) => {
        var xT = Be(),
            RT = xT.Uint8Array;
        gc.exports = RT
    });
    var vc = f((g2, Ec) => {
        function CT(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        Ec.exports = CT
    });
    var _c = f((y2, mc) => {
        function LT(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        mc.exports = LT
    });
    var wc = f((E2, Ac) => {
        var Ic = St(),
            Tc = yc(),
            PT = Ur(),
            NT = Ai(),
            MT = vc(),
            DT = _c(),
            FT = 1,
            qT = 2,
            GT = "[object Boolean]",
            XT = "[object Date]",
            kT = "[object Error]",
            VT = "[object Map]",
            UT = "[object Number]",
            BT = "[object RegExp]",
            WT = "[object Set]",
            HT = "[object String]",
            zT = "[object Symbol]",
            jT = "[object ArrayBuffer]",
            KT = "[object DataView]",
            bc = Ic ? Ic.prototype : void 0,
            wi = bc ? bc.valueOf : void 0;

        function YT(e, t, r, n, i, o, s) {
            switch (r) {
                case KT:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case jT:
                    return !(e.byteLength != t.byteLength || !o(new Tc(e), new Tc(t)));
                case GT:
                case XT:
                case UT:
                    return PT(+e, +t);
                case kT:
                    return e.name == t.name && e.message == t.message;
                case BT:
                case HT:
                    return e == t + "";
                case VT:
                    var a = MT;
                case WT:
                    var u = n & FT;
                    if (a || (a = DT), e.size != t.size && !u) return !1;
                    var l = s.get(e);
                    if (l) return l == t;
                    n |= qT, s.set(e, t);
                    var E = NT(a(e), a(t), n, i, o, s);
                    return s.delete(e), E;
                case zT:
                    if (wi) return wi.call(e) == wi.call(t)
            }
            return !1
        }
        Ac.exports = YT
    });
    var zr = f((v2, Sc) => {
        function $T(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        Sc.exports = $T
    });
    var Ie = f((m2, Oc) => {
        var QT = Array.isArray;
        Oc.exports = QT
    });
    var Si = f((_2, xc) => {
        var ZT = zr(),
            JT = Ie();

        function eb(e, t, r) {
            var n = t(e);
            return JT(e) ? n : ZT(n, r(e))
        }
        xc.exports = eb
    });
    var Cc = f((I2, Rc) => {
        function tb(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var s = e[r];
                t(s, r, e) && (o[i++] = s)
            }
            return o
        }
        Rc.exports = tb
    });
    var Oi = f((T2, Lc) => {
        function rb() {
            return []
        }
        Lc.exports = rb
    });
    var xi = f((b2, Nc) => {
        var nb = Cc(),
            ib = Oi(),
            ob = Object.prototype,
            ab = ob.propertyIsEnumerable,
            Pc = Object.getOwnPropertySymbols,
            sb = Pc ? function(e) {
                return e == null ? [] : (e = Object(e), nb(Pc(e), function(t) {
                    return ab.call(e, t)
                }))
            } : ib;
        Nc.exports = sb
    });
    var Dc = f((A2, Mc) => {
        function ub(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Mc.exports = ub
    });
    var qc = f((w2, Fc) => {
        var cb = ct(),
            lb = nt(),
            fb = "[object Arguments]";

        function db(e) {
            return lb(e) && cb(e) == fb
        }
        Fc.exports = db
    });
    var ar = f((S2, kc) => {
        var Gc = qc(),
            pb = nt(),
            Xc = Object.prototype,
            hb = Xc.hasOwnProperty,
            gb = Xc.propertyIsEnumerable,
            yb = Gc(function() {
                return arguments
            }()) ? Gc : function(e) {
                return pb(e) && hb.call(e, "callee") && !gb.call(e, "callee")
            };
        kc.exports = yb
    });
    var Uc = f((O2, Vc) => {
        function Eb() {
            return !1
        }
        Vc.exports = Eb
    });
    var jr = f((sr, Mt) => {
        var vb = Be(),
            mb = Uc(),
            Hc = typeof sr == "object" && sr && !sr.nodeType && sr,
            Bc = Hc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
            _b = Bc && Bc.exports === Hc,
            Wc = _b ? vb.Buffer : void 0,
            Ib = Wc ? Wc.isBuffer : void 0,
            Tb = Ib || mb;
        Mt.exports = Tb
    });
    var Kr = f((x2, zc) => {
        var bb = 9007199254740991,
            Ab = /^(?:0|[1-9]\d*)$/;

        function wb(e, t) {
            var r = typeof e;
            return t = t ? ? bb, !!t && (r == "number" || r != "symbol" && Ab.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        zc.exports = wb
    });
    var Yr = f((R2, jc) => {
        var Sb = 9007199254740991;

        function Ob(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Sb
        }
        jc.exports = Ob
    });
    var Yc = f((C2, Kc) => {
        var xb = ct(),
            Rb = Yr(),
            Cb = nt(),
            Lb = "[object Arguments]",
            Pb = "[object Array]",
            Nb = "[object Boolean]",
            Mb = "[object Date]",
            Db = "[object Error]",
            Fb = "[object Function]",
            qb = "[object Map]",
            Gb = "[object Number]",
            Xb = "[object Object]",
            kb = "[object RegExp]",
            Vb = "[object Set]",
            Ub = "[object String]",
            Bb = "[object WeakMap]",
            Wb = "[object ArrayBuffer]",
            Hb = "[object DataView]",
            zb = "[object Float32Array]",
            jb = "[object Float64Array]",
            Kb = "[object Int8Array]",
            Yb = "[object Int16Array]",
            $b = "[object Int32Array]",
            Qb = "[object Uint8Array]",
            Zb = "[object Uint8ClampedArray]",
            Jb = "[object Uint16Array]",
            e0 = "[object Uint32Array]",
            pe = {};
        pe[zb] = pe[jb] = pe[Kb] = pe[Yb] = pe[$b] = pe[Qb] = pe[Zb] = pe[Jb] = pe[e0] = !0;
        pe[Lb] = pe[Pb] = pe[Wb] = pe[Nb] = pe[Hb] = pe[Mb] = pe[Db] = pe[Fb] = pe[qb] = pe[Gb] = pe[Xb] = pe[kb] = pe[Vb] = pe[Ub] = pe[Bb] = !1;

        function t0(e) {
            return Cb(e) && Rb(e.length) && !!pe[xb(e)]
        }
        Kc.exports = t0
    });
    var Qc = f((L2, $c) => {
        function r0(e) {
            return function(t) {
                return e(t)
            }
        }
        $c.exports = r0
    });
    var Jc = f((ur, Dt) => {
        var n0 = ei(),
            Zc = typeof ur == "object" && ur && !ur.nodeType && ur,
            cr = Zc && typeof Dt == "object" && Dt && !Dt.nodeType && Dt,
            i0 = cr && cr.exports === Zc,
            Ri = i0 && n0.process,
            o0 = function() {
                try {
                    var e = cr && cr.require && cr.require("util").types;
                    return e || Ri && Ri.binding && Ri.binding("util")
                } catch {}
            }();
        Dt.exports = o0
    });
    var $r = f((P2, rl) => {
        var a0 = Yc(),
            s0 = Qc(),
            el = Jc(),
            tl = el && el.isTypedArray,
            u0 = tl ? s0(tl) : a0;
        rl.exports = u0
    });
    var Ci = f((N2, nl) => {
        var c0 = Dc(),
            l0 = ar(),
            f0 = Ie(),
            d0 = jr(),
            p0 = Kr(),
            h0 = $r(),
            g0 = Object.prototype,
            y0 = g0.hasOwnProperty;

        function E0(e, t) {
            var r = f0(e),
                n = !r && l0(e),
                i = !r && !n && d0(e),
                o = !r && !n && !i && h0(e),
                s = r || n || i || o,
                a = s ? c0(e.length, String) : [],
                u = a.length;
            for (var l in e)(t || y0.call(e, l)) && !(s && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || p0(l, u))) && a.push(l);
            return a
        }
        nl.exports = E0
    });
    var Qr = f((M2, il) => {
        var v0 = Object.prototype;

        function m0(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || v0;
            return e === r
        }
        il.exports = m0
    });
    var al = f((D2, ol) => {
        var _0 = ti(),
            I0 = _0(Object.keys, Object);
        ol.exports = I0
    });
    var Zr = f((F2, sl) => {
        var T0 = Qr(),
            b0 = al(),
            A0 = Object.prototype,
            w0 = A0.hasOwnProperty;

        function S0(e) {
            if (!T0(e)) return b0(e);
            var t = [];
            for (var r in Object(e)) w0.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        sl.exports = S0
    });
    var Et = f((q2, ul) => {
        var O0 = _i(),
            x0 = Yr();

        function R0(e) {
            return e != null && x0(e.length) && !O0(e)
        }
        ul.exports = R0
    });
    var lr = f((G2, cl) => {
        var C0 = Ci(),
            L0 = Zr(),
            P0 = Et();

        function N0(e) {
            return P0(e) ? C0(e) : L0(e)
        }
        cl.exports = N0
    });
    var fl = f((X2, ll) => {
        var M0 = Si(),
            D0 = xi(),
            F0 = lr();

        function q0(e) {
            return M0(e, F0, D0)
        }
        ll.exports = q0
    });
    var hl = f((k2, pl) => {
        var dl = fl(),
            G0 = 1,
            X0 = Object.prototype,
            k0 = X0.hasOwnProperty;

        function V0(e, t, r, n, i, o) {
            var s = r & G0,
                a = dl(e),
                u = a.length,
                l = dl(t),
                E = l.length;
            if (u != E && !s) return !1;
            for (var g = u; g--;) {
                var d = a[g];
                if (!(s ? d in t : k0.call(t, d))) return !1
            }
            var v = o.get(e),
                I = o.get(t);
            if (v && I) return v == t && I == e;
            var _ = !0;
            o.set(e, t), o.set(t, e);
            for (var w = s; ++g < u;) {
                d = a[g];
                var T = e[d],
                    x = t[d];
                if (n) var O = s ? n(x, T, d, t, e, o) : n(T, x, d, e, t, o);
                if (!(O === void 0 ? T === x || i(T, x, r, n, o) : O)) {
                    _ = !1;
                    break
                }
                w || (w = d == "constructor")
            }
            if (_ && !w) {
                var P = e.constructor,
                    N = t.constructor;
                P != N && "constructor" in e && "constructor" in t && !(typeof P == "function" && P instanceof P && typeof N == "function" && N instanceof N) && (_ = !1)
            }
            return o.delete(e), o.delete(t), _
        }
        pl.exports = V0
    });
    var yl = f((V2, gl) => {
        var U0 = lt(),
            B0 = Be(),
            W0 = U0(B0, "DataView");
        gl.exports = W0
    });
    var vl = f((U2, El) => {
        var H0 = lt(),
            z0 = Be(),
            j0 = H0(z0, "Promise");
        El.exports = j0
    });
    var _l = f((B2, ml) => {
        var K0 = lt(),
            Y0 = Be(),
            $0 = K0(Y0, "Set");
        ml.exports = $0
    });
    var Li = f((W2, Il) => {
        var Q0 = lt(),
            Z0 = Be(),
            J0 = Q0(Z0, "WeakMap");
        Il.exports = J0
    });
    var Jr = f((H2, xl) => {
        var Pi = yl(),
            Ni = Br(),
            Mi = vl(),
            Di = _l(),
            Fi = Li(),
            Ol = ct(),
            Ft = Ti(),
            Tl = "[object Map]",
            eA = "[object Object]",
            bl = "[object Promise]",
            Al = "[object Set]",
            wl = "[object WeakMap]",
            Sl = "[object DataView]",
            tA = Ft(Pi),
            rA = Ft(Ni),
            nA = Ft(Mi),
            iA = Ft(Di),
            oA = Ft(Fi),
            vt = Ol;
        (Pi && vt(new Pi(new ArrayBuffer(1))) != Sl || Ni && vt(new Ni) != Tl || Mi && vt(Mi.resolve()) != bl || Di && vt(new Di) != Al || Fi && vt(new Fi) != wl) && (vt = function(e) {
            var t = Ol(e),
                r = t == eA ? e.constructor : void 0,
                n = r ? Ft(r) : "";
            if (n) switch (n) {
                case tA:
                    return Sl;
                case rA:
                    return Tl;
                case nA:
                    return bl;
                case iA:
                    return Al;
                case oA:
                    return wl
            }
            return t
        });
        xl.exports = vt
    });
    var Fl = f((z2, Dl) => {
        var qi = bi(),
            aA = Ai(),
            sA = wc(),
            uA = hl(),
            Rl = Jr(),
            Cl = Ie(),
            Ll = jr(),
            cA = $r(),
            lA = 1,
            Pl = "[object Arguments]",
            Nl = "[object Array]",
            en = "[object Object]",
            fA = Object.prototype,
            Ml = fA.hasOwnProperty;

        function dA(e, t, r, n, i, o) {
            var s = Cl(e),
                a = Cl(t),
                u = s ? Nl : Rl(e),
                l = a ? Nl : Rl(t);
            u = u == Pl ? en : u, l = l == Pl ? en : l;
            var E = u == en,
                g = l == en,
                d = u == l;
            if (d && Ll(e)) {
                if (!Ll(t)) return !1;
                s = !0, E = !1
            }
            if (d && !E) return o || (o = new qi), s || cA(e) ? aA(e, t, r, n, i, o) : sA(e, t, u, r, n, i, o);
            if (!(r & lA)) {
                var v = E && Ml.call(e, "__wrapped__"),
                    I = g && Ml.call(t, "__wrapped__");
                if (v || I) {
                    var _ = v ? e.value() : e,
                        w = I ? t.value() : t;
                    return o || (o = new qi), i(_, w, r, n, o)
                }
            }
            return d ? (o || (o = new qi), uA(e, t, r, n, i, o)) : !1
        }
        Dl.exports = dA
    });
    var Gi = f((j2, Xl) => {
        var pA = Fl(),
            ql = nt();

        function Gl(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !ql(e) && !ql(t) ? e !== e && t !== t : pA(e, t, r, n, Gl, i)
        }
        Xl.exports = Gl
    });
    var Vl = f((K2, kl) => {
        var hA = bi(),
            gA = Gi(),
            yA = 1,
            EA = 2;

        function vA(e, t, r, n) {
            var i = r.length,
                o = i,
                s = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var a = r[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
            }
            for (; ++i < o;) {
                a = r[i];
                var u = a[0],
                    l = e[u],
                    E = a[1];
                if (s && a[2]) {
                    if (l === void 0 && !(u in e)) return !1
                } else {
                    var g = new hA;
                    if (n) var d = n(l, E, u, e, t, g);
                    if (!(d === void 0 ? gA(E, l, yA | EA, n, g) : d)) return !1
                }
            }
            return !0
        }
        kl.exports = vA
    });
    var Xi = f((Y2, Ul) => {
        var mA = Ze();

        function _A(e) {
            return e === e && !mA(e)
        }
        Ul.exports = _A
    });
    var Wl = f(($2, Bl) => {
        var IA = Xi(),
            TA = lr();

        function bA(e) {
            for (var t = TA(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, IA(i)]
            }
            return t
        }
        Bl.exports = bA
    });
    var ki = f((Q2, Hl) => {
        function AA(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Hl.exports = AA
    });
    var jl = f((Z2, zl) => {
        var wA = Vl(),
            SA = Wl(),
            OA = ki();

        function xA(e) {
            var t = SA(e);
            return t.length == 1 && t[0][2] ? OA(t[0][0], t[0][1]) : function(r) {
                return r === e || wA(r, e, t)
            }
        }
        zl.exports = xA
    });
    var fr = f((J2, Kl) => {
        var RA = ct(),
            CA = nt(),
            LA = "[object Symbol]";

        function PA(e) {
            return typeof e == "symbol" || CA(e) && RA(e) == LA
        }
        Kl.exports = PA
    });
    var tn = f((eq, Yl) => {
        var NA = Ie(),
            MA = fr(),
            DA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            FA = /^\w*$/;

        function qA(e, t) {
            if (NA(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || MA(e) ? !0 : FA.test(e) || !DA.test(e) || t != null && e in Object(t)
        }
        Yl.exports = qA
    });
    var Zl = f((tq, Ql) => {
        var $l = Wr(),
            GA = "Expected a function";

        function Vi(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(GA);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var s = e.apply(this, n);
                return r.cache = o.set(i, s) || o, s
            };
            return r.cache = new(Vi.Cache || $l), r
        }
        Vi.Cache = $l;
        Ql.exports = Vi
    });
    var ef = f((rq, Jl) => {
        var XA = Zl(),
            kA = 500;

        function VA(e) {
            var t = XA(e, function(n) {
                    return r.size === kA && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        Jl.exports = VA
    });
    var rf = f((nq, tf) => {
        var UA = ef(),
            BA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            WA = /\\(\\)?/g,
            HA = UA(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(BA, function(r, n, i, o) {
                    t.push(i ? o.replace(WA, "$1") : n || r)
                }), t
            });
        tf.exports = HA
    });
    var Ui = f((iq, nf) => {
        function zA(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        nf.exports = zA
    });
    var lf = f((oq, cf) => {
        var of = St(), jA = Ui(), KA = Ie(), YA = fr(), $A = 1 / 0, af = of ? of .prototype : void 0, sf = af ? af.toString : void 0;

        function uf(e) {
            if (typeof e == "string") return e;
            if (KA(e)) return jA(e, uf) + "";
            if (YA(e)) return sf ? sf.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -$A ? "-0" : t
        }
        cf.exports = uf
    });
    var df = f((aq, ff) => {
        var QA = lf();

        function ZA(e) {
            return e == null ? "" : QA(e)
        }
        ff.exports = ZA
    });
    var dr = f((sq, pf) => {
        var JA = Ie(),
            ew = tn(),
            tw = rf(),
            rw = df();

        function nw(e, t) {
            return JA(e) ? e : ew(e, t) ? [e] : tw(rw(e))
        }
        pf.exports = nw
    });
    var qt = f((uq, hf) => {
        var iw = fr(),
            ow = 1 / 0;

        function aw(e) {
            if (typeof e == "string" || iw(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -ow ? "-0" : t
        }
        hf.exports = aw
    });
    var rn = f((cq, gf) => {
        var sw = dr(),
            uw = qt();

        function cw(e, t) {
            t = sw(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[uw(t[r++])];
            return r && r == n ? e : void 0
        }
        gf.exports = cw
    });
    var nn = f((lq, yf) => {
        var lw = rn();

        function fw(e, t, r) {
            var n = e == null ? void 0 : lw(e, t);
            return n === void 0 ? r : n
        }
        yf.exports = fw
    });
    var vf = f((fq, Ef) => {
        function dw(e, t) {
            return e != null && t in Object(e)
        }
        Ef.exports = dw
    });
    var _f = f((dq, mf) => {
        var pw = dr(),
            hw = ar(),
            gw = Ie(),
            yw = Kr(),
            Ew = Yr(),
            vw = qt();

        function mw(e, t, r) {
            t = pw(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var s = vw(t[n]);
                if (!(o = e != null && r(e, s))) break;
                e = e[s]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && Ew(i) && yw(s, i) && (gw(e) || hw(e)))
        }
        mf.exports = mw
    });
    var Tf = f((pq, If) => {
        var _w = vf(),
            Iw = _f();

        function Tw(e, t) {
            return e != null && Iw(e, t, _w)
        }
        If.exports = Tw
    });
    var Af = f((hq, bf) => {
        var bw = Gi(),
            Aw = nn(),
            ww = Tf(),
            Sw = tn(),
            Ow = Xi(),
            xw = ki(),
            Rw = qt(),
            Cw = 1,
            Lw = 2;

        function Pw(e, t) {
            return Sw(e) && Ow(t) ? xw(Rw(e), t) : function(r) {
                var n = Aw(r, e);
                return n === void 0 && n === t ? ww(r, e) : bw(t, n, Cw | Lw)
            }
        }
        bf.exports = Pw
    });
    var on = f((gq, wf) => {
        function Nw(e) {
            return e
        }
        wf.exports = Nw
    });
    var Bi = f((yq, Sf) => {
        function Mw(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Sf.exports = Mw
    });
    var xf = f((Eq, Of) => {
        var Dw = rn();

        function Fw(e) {
            return function(t) {
                return Dw(t, e)
            }
        }
        Of.exports = Fw
    });
    var Cf = f((vq, Rf) => {
        var qw = Bi(),
            Gw = xf(),
            Xw = tn(),
            kw = qt();

        function Vw(e) {
            return Xw(e) ? qw(kw(e)) : Gw(e)
        }
        Rf.exports = Vw
    });
    var ft = f((mq, Lf) => {
        var Uw = jl(),
            Bw = Af(),
            Ww = on(),
            Hw = Ie(),
            zw = Cf();

        function jw(e) {
            return typeof e == "function" ? e : e == null ? Ww : typeof e == "object" ? Hw(e) ? Bw(e[0], e[1]) : Uw(e) : zw(e)
        }
        Lf.exports = jw
    });
    var Wi = f((_q, Pf) => {
        var Kw = ft(),
            Yw = Et(),
            $w = lr();

        function Qw(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!Yw(t)) {
                    var o = Kw(r, 3);
                    t = $w(t), r = function(a) {
                        return o(i[a], a, i)
                    }
                }
                var s = e(t, r, n);
                return s > -1 ? i[o ? t[s] : s] : void 0
            }
        }
        Pf.exports = Qw
    });
    var Hi = f((Iq, Nf) => {
        function Zw(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Nf.exports = Zw
    });
    var Df = f((Tq, Mf) => {
        var Jw = /\s/;

        function eS(e) {
            for (var t = e.length; t-- && Jw.test(e.charAt(t)););
            return t
        }
        Mf.exports = eS
    });
    var qf = f((bq, Ff) => {
        var tS = Df(),
            rS = /^\s+/;

        function nS(e) {
            return e && e.slice(0, tS(e) + 1).replace(rS, "")
        }
        Ff.exports = nS
    });
    var an = f((Aq, kf) => {
        var iS = qf(),
            Gf = Ze(),
            oS = fr(),
            Xf = 0 / 0,
            aS = /^[-+]0x[0-9a-f]+$/i,
            sS = /^0b[01]+$/i,
            uS = /^0o[0-7]+$/i,
            cS = parseInt;

        function lS(e) {
            if (typeof e == "number") return e;
            if (oS(e)) return Xf;
            if (Gf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Gf(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = iS(e);
            var r = sS.test(e);
            return r || uS.test(e) ? cS(e.slice(2), r ? 2 : 8) : aS.test(e) ? Xf : +e
        }
        kf.exports = lS
    });
    var Bf = f((wq, Uf) => {
        var fS = an(),
            Vf = 1 / 0,
            dS = 17976931348623157e292;

        function pS(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = fS(e), e === Vf || e === -Vf) {
                var t = e < 0 ? -1 : 1;
                return t * dS
            }
            return e === e ? e : 0
        }
        Uf.exports = pS
    });
    var zi = f((Sq, Wf) => {
        var hS = Bf();

        function gS(e) {
            var t = hS(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Wf.exports = gS
    });
    var zf = f((Oq, Hf) => {
        var yS = Hi(),
            ES = ft(),
            vS = zi(),
            mS = Math.max;

        function _S(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : vS(r);
            return i < 0 && (i = mS(n + i, 0)), yS(e, ES(t, 3), i)
        }
        Hf.exports = _S
    });
    var ji = f((xq, jf) => {
        var IS = Wi(),
            TS = zf(),
            bS = IS(TS);
        jf.exports = bS
    });
    var $f = {};
    Pe($f, {
        ELEMENT_MATCHES: () => AS,
        FLEX_PREFIXED: () => Ki,
        IS_BROWSER_ENV: () => He,
        TRANSFORM_PREFIXED: () => dt,
        TRANSFORM_STYLE_PREFIXED: () => un,
        withBrowser: () => sn
    });
    var Yf, He, sn, AS, Ki, dt, Kf, un, cn = he(() => {
        "use strict";
        Yf = ce(ji()), He = typeof window < "u", sn = (e, t) => He ? e() : t, AS = sn(() => (0, Yf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Ki = sn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), dt = sn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), Kf = dt.split("transform")[0], un = Kf ? Kf + "TransformStyle" : "transformStyle"
    });
    var Yi = f((Rq, td) => {
        var wS = 4,
            SS = .001,
            OS = 1e-7,
            xS = 10,
            pr = 11,
            ln = 1 / (pr - 1),
            RS = typeof Float32Array == "function";

        function Qf(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function Zf(e, t) {
            return 3 * t - 6 * e
        }

        function Jf(e) {
            return 3 * e
        }

        function fn(e, t, r) {
            return ((Qf(t, r) * e + Zf(t, r)) * e + Jf(t)) * e
        }

        function ed(e, t, r) {
            return 3 * Qf(t, r) * e * e + 2 * Zf(t, r) * e + Jf(t)
        }

        function CS(e, t, r, n, i) {
            var o, s, a = 0;
            do s = t + (r - t) / 2, o = fn(s, n, i) - e, o > 0 ? r = s : t = s; while (Math.abs(o) > OS && ++a < xS);
            return s
        }

        function LS(e, t, r, n) {
            for (var i = 0; i < wS; ++i) {
                var o = ed(t, r, n);
                if (o === 0) return t;
                var s = fn(t, r, n) - e;
                t -= s / o
            }
            return t
        }
        td.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = RS ? new Float32Array(pr) : new Array(pr);
            if (t !== r || n !== i)
                for (var s = 0; s < pr; ++s) o[s] = fn(s * ln, t, n);

            function a(u) {
                for (var l = 0, E = 1, g = pr - 1; E !== g && o[E] <= u; ++E) l += ln;
                --E;
                var d = (u - o[E]) / (o[E + 1] - o[E]),
                    v = l + d * ln,
                    I = ed(v, t, n);
                return I >= SS ? LS(u, v, t, n) : I === 0 ? v : CS(u, l, l + ln, t, n)
            }
            return function(l) {
                return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : fn(a(l), r, i)
            }
        }
    });
    var gr = {};
    Pe(gr, {
        bounce: () => pO,
        bouncePast: () => hO,
        ease: () => PS,
        easeIn: () => NS,
        easeInOut: () => DS,
        easeOut: () => MS,
        inBack: () => iO,
        inCirc: () => eO,
        inCubic: () => XS,
        inElastic: () => sO,
        inExpo: () => QS,
        inOutBack: () => aO,
        inOutCirc: () => rO,
        inOutCubic: () => VS,
        inOutElastic: () => cO,
        inOutExpo: () => JS,
        inOutQuad: () => GS,
        inOutQuart: () => WS,
        inOutQuint: () => jS,
        inOutSine: () => $S,
        inQuad: () => FS,
        inQuart: () => US,
        inQuint: () => HS,
        inSine: () => KS,
        outBack: () => oO,
        outBounce: () => nO,
        outCirc: () => tO,
        outCubic: () => kS,
        outElastic: () => uO,
        outExpo: () => ZS,
        outQuad: () => qS,
        outQuart: () => BS,
        outQuint: () => zS,
        outSine: () => YS,
        swingFrom: () => fO,
        swingFromTo: () => lO,
        swingTo: () => dO
    });

    function FS(e) {
        return Math.pow(e, 2)
    }

    function qS(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function GS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function XS(e) {
        return Math.pow(e, 3)
    }

    function kS(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function VS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function US(e) {
        return Math.pow(e, 4)
    }

    function BS(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function WS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function HS(e) {
        return Math.pow(e, 5)
    }

    function zS(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function jS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function KS(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function YS(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function $S(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function QS(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function ZS(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function JS(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function eO(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function tO(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function rO(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function nO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function iO(e) {
        let t = it;
        return e * e * ((t + 1) * e - t)
    }

    function oO(e) {
        let t = it;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function aO(e) {
        let t = it;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function sO(e) {
        let t = it,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function uO(e) {
        let t = it,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function cO(e) {
        let t = it,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function lO(e) {
        let t = it;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function fO(e) {
        let t = it;
        return e * e * ((t + 1) * e - t)
    }

    function dO(e) {
        let t = it;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function pO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function hO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var hr, it, PS, NS, MS, DS, $i = he(() => {
        "use strict";
        hr = ce(Yi()), it = 1.70158, PS = (0, hr.default)(.25, .1, .25, 1), NS = (0, hr.default)(.42, 0, 1, 1), MS = (0, hr.default)(0, 0, .58, 1), DS = (0, hr.default)(.42, 0, .58, 1)
    });
    var nd = {};
    Pe(nd, {
        applyEasing: () => yO,
        createBezierEasing: () => gO,
        optimizeFloat: () => yr
    });

    function yr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function gO(e) {
        return (0, rd.default)(...e)
    }

    function yO(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : yr(r ? t > 0 ? r(t) : t : t > 0 && e && gr[e] ? gr[e](t) : t)
    }
    var rd, Qi = he(() => {
        "use strict";
        $i();
        rd = ce(Yi())
    });
    var ad = {};
    Pe(ad, {
        createElementState: () => od,
        ixElements: () => CO,
        mergeActionState: () => Zi
    });

    function od(e, t, r, n, i) {
        let o = r === EO ? (0, Gt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, Gt.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function Zi(e, t, r, n, i) {
        let o = PO(i);
        return (0, Gt.mergeIn)(e, [t, RO, r], n, o)
    }

    function PO(e) {
        let {
            config: t
        } = e;
        return LO.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                s = t[i],
                a = t[o];
            return s != null && a != null && (r[o] = a), r
        }, {})
    }
    var Gt, Lq, EO, Pq, vO, mO, _O, IO, TO, bO, AO, wO, SO, OO, xO, id, RO, CO, LO, sd = he(() => {
        "use strict";
        Gt = ce(Rt());
        Ne();
        ({
            HTML_ELEMENT: Lq,
            PLAIN_OBJECT: EO,
            ABSTRACT_NODE: Pq,
            CONFIG_X_VALUE: vO,
            CONFIG_Y_VALUE: mO,
            CONFIG_Z_VALUE: _O,
            CONFIG_VALUE: IO,
            CONFIG_X_UNIT: TO,
            CONFIG_Y_UNIT: bO,
            CONFIG_Z_UNIT: AO,
            CONFIG_UNIT: wO
        } = Te), {
            IX2_SESSION_STOPPED: SO,
            IX2_INSTANCE_ADDED: OO,
            IX2_ELEMENT_STATE_CHANGED: xO
        } = me, id = {}, RO = "refState", CO = (e = id, t = {}) => {
            switch (t.type) {
                case SO:
                    return id;
                case OO:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: s
                        } = t.payload,
                        {
                            actionTypeId: a
                        } = o,
                        u = e;
                        return (0, Gt.getIn)(u, [r, n]) !== n && (u = od(u, n, s, r, o)),
                        Zi(u, r, a, i, o)
                    }
                case xO:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return Zi(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        LO = [
            [vO, TO],
            [mO, bO],
            [_O, AO],
            [IO, wO]
        ]
    });
    var ud = f(Ji => {
        "use strict";
        Object.defineProperty(Ji, "__esModule", {
            value: !0
        });

        function NO(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        NO(Ji, {
            clearPlugin: function() {
                return kO
            },
            createPluginInstance: function() {
                return GO
            },
            getPluginConfig: function() {
                return MO
            },
            getPluginDestination: function() {
                return qO
            },
            getPluginDuration: function() {
                return DO
            },
            getPluginOrigin: function() {
                return FO
            },
            renderPlugin: function() {
                return XO
            }
        });
        var MO = e => e.value,
            DO = (e, t) => {
                if (t.config.duration !== "auto") return null;
                let r = parseFloat(e.getAttribute("data-duration"));
                return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
            },
            FO = e => e || {
                value: 0
            },
            qO = e => ({
                value: e.value
            }),
            GO = e => {
                let t = window.Webflow.require("lottie").createInstance(e);
                return t.stop(), t.setSubframe(!0), t
            },
            XO = (e, t, r) => {
                if (!e) return;
                let n = t[r.actionTypeId].value / 100;
                e.goToFrame(e.frames * n)
            },
            kO = e => {
                window.Webflow.require("lottie").createInstance(e).stop()
            }
    });
    var ld = f(eo => {
        "use strict";
        Object.defineProperty(eo, "__esModule", {
            value: !0
        });

        function VO(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        VO(eo, {
            clearPlugin: function() {
                return QO
            },
            createPluginInstance: function() {
                return YO
            },
            getPluginConfig: function() {
                return HO
            },
            getPluginDestination: function() {
                return KO
            },
            getPluginDuration: function() {
                return zO
            },
            getPluginOrigin: function() {
                return jO
            },
            renderPlugin: function() {
                return $O
            }
        });
        var UO = e => document.querySelector(`[data-w-id="${e}"]`),
            BO = () => window.Webflow.require("spline"),
            WO = (e, t) => e.filter(r => !t.includes(r)),
            HO = (e, t) => e.value[t],
            zO = () => null,
            cd = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            jO = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        s = WO(n, o);
                    return s.length ? s.reduce((u, l) => (u[l] = cd[l], u), e) : e
                }
                return n.reduce((o, s) => (o[s] = cd[s], o), {})
            },
            KO = e => e.value,
            YO = (e, t) => {
                let r = t ? .config ? .target ? .pluginElement;
                return r ? UO(r) : null
            },
            $O = (e, t, r) => {
                let n = BO(),
                    i = n.getInstance(e),
                    o = r.config.target.objectId,
                    s = a => {
                        if (!a) throw new Error("Invalid spline app passed to renderSpline");
                        let u = o && a.findObjectById(o);
                        if (!u) return;
                        let {
                            PLUGIN_SPLINE: l
                        } = t;
                        l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ)
                    };
                i ? s(i.spline) : n.setLoadHandler(e, s)
            },
            QO = () => null
    });
    var fd = f(no => {
        "use strict";
        Object.defineProperty(no, "__esModule", {
            value: !0
        });

        function ZO(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        ZO(no, {
            clearPlugin: function() {
                return sx
            },
            createPluginInstance: function() {
                return ox
            },
            getPluginConfig: function() {
                return tx
            },
            getPluginDestination: function() {
                return ix
            },
            getPluginDuration: function() {
                return rx
            },
            getPluginOrigin: function() {
                return nx
            },
            renderPlugin: function() {
                return ax
            }
        });
        var to = "--wf-rive-fit",
            ro = "--wf-rive-alignment",
            JO = e => document.querySelector(`[data-w-id="${e}"]`),
            ex = () => window.Webflow.require("rive"),
            tx = (e, t) => e.value.inputs[t],
            rx = () => null,
            nx = (e, t) => {
                if (e) return e;
                let r = {},
                    {
                        inputs: n = {}
                    } = t.config.value;
                for (let i in n) n[i] == null && (r[i] = 0);
                return r
            },
            ix = e => e.value.inputs ? ? {},
            ox = (e, t) => {
                if ((t.config ? .target ? .selectorGuids || []).length > 0) return e;
                let n = t ? .config ? .target ? .pluginElement;
                return n ? JO(n) : null
            },
            ax = (e, {
                PLUGIN_RIVE: t
            }, r) => {
                let n = ex(),
                    i = n.getInstance(e),
                    o = n.rive.StateMachineInputType,
                    {
                        name: s,
                        inputs: a = {}
                    } = r.config.value || {};

                function u(l) {
                    if (l.loaded) E();
                    else {
                        let g = () => {
                            E(), l ? .off("load", g)
                        };
                        l ? .on("load", g)
                    }

                    function E() {
                        let g = l.stateMachineInputs(s);
                        if (g != null) {
                            if (l.isPlaying || l.play(s, !1), to in a || ro in a) {
                                let d = l.layout,
                                    v = a[to] ? ? d.fit,
                                    I = a[ro] ? ? d.alignment;
                                (v !== d.fit || I !== d.alignment) && (l.layout = d.copyWith({
                                    fit: v,
                                    alignment: I
                                }))
                            }
                            for (let d in a) {
                                if (d === to || d === ro) continue;
                                let v = g.find(I => I.name === d);
                                if (v != null) switch (v.type) {
                                    case o.Boolean:
                                        {
                                            if (a[d] != null) {
                                                let I = !!a[d];
                                                v.value = I
                                            }
                                            break
                                        }
                                    case o.Number:
                                        {
                                            let I = t[d];I != null && (v.value = I);
                                            break
                                        }
                                    case o.Trigger:
                                        {
                                            a[d] && v.fire();
                                            break
                                        }
                                }
                            }
                        }
                    }
                }
                i ? .rive ? u(i.rive) : n.setLoadHandler(e, u)
            },
            sx = (e, t) => null
    });
    var oo = f(io => {
        "use strict";
        Object.defineProperty(io, "__esModule", {
            value: !0
        });
        Object.defineProperty(io, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return ux
            }
        });
        var dd = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function ux(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                a = (typeof dd[o] == "string" ? dd[o].toLowerCase() : null) || o;
            if (a.startsWith("#")) {
                let u = a.substring(1);
                u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16), u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16), u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
            } else if (a.startsWith("rgba")) {
                let u = a.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (a.startsWith("rgb")) {
                let u = a.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10)
            } else if (a.startsWith("hsla")) {
                let u = a.match(/hsla\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    E = parseFloat(u[1].replace("%", "")) / 100,
                    g = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let d = (1 - Math.abs(2 * g - 1)) * E,
                    v = d * (1 - Math.abs(l / 60 % 2 - 1)),
                    I = g - d / 2,
                    _, w, T;
                l >= 0 && l < 60 ? (_ = d, w = v, T = 0) : l >= 60 && l < 120 ? (_ = v, w = d, T = 0) : l >= 120 && l < 180 ? (_ = 0, w = d, T = v) : l >= 180 && l < 240 ? (_ = 0, w = v, T = d) : l >= 240 && l < 300 ? (_ = v, w = 0, T = d) : (_ = d, w = 0, T = v), t = Math.round((_ + I) * 255), r = Math.round((w + I) * 255), n = Math.round((T + I) * 255)
            } else if (a.startsWith("hsl")) {
                let u = a.match(/hsl\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    E = parseFloat(u[1].replace("%", "")) / 100,
                    g = parseFloat(u[2].replace("%", "")) / 100,
                    d = (1 - Math.abs(2 * g - 1)) * E,
                    v = d * (1 - Math.abs(l / 60 % 2 - 1)),
                    I = g - d / 2,
                    _, w, T;
                l >= 0 && l < 60 ? (_ = d, w = v, T = 0) : l >= 60 && l < 120 ? (_ = v, w = d, T = 0) : l >= 120 && l < 180 ? (_ = 0, w = d, T = v) : l >= 180 && l < 240 ? (_ = 0, w = v, T = d) : l >= 240 && l < 300 ? (_ = v, w = 0, T = d) : (_ = d, w = 0, T = v), t = Math.round((_ + I) * 255), r = Math.round((w + I) * 255), n = Math.round((T + I) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    });
    var pd = f(ao => {
        "use strict";
        Object.defineProperty(ao, "__esModule", {
            value: !0
        });

        function cx(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        cx(ao, {
            clearPlugin: function() {
                return vx
            },
            createPluginInstance: function() {
                return gx
            },
            getPluginConfig: function() {
                return fx
            },
            getPluginDestination: function() {
                return hx
            },
            getPluginDuration: function() {
                return dx
            },
            getPluginOrigin: function() {
                return px
            },
            renderPlugin: function() {
                return Ex
            }
        });
        var lx = oo(),
            fx = (e, t) => e.value[t],
            dx = () => null,
            px = (e, t) => {
                if (e) return e;
                let r = t.config.value,
                    n = t.config.target.objectId,
                    i = getComputedStyle(document.documentElement).getPropertyValue(n);
                if (r.size != null) return {
                    size: parseInt(i, 10)
                };
                if (r.unit === "%" || r.unit === "-") return {
                    size: parseFloat(i)
                };
                if (r.red != null && r.green != null && r.blue != null) return (0, lx.normalizeColor)(i)
            },
            hx = e => e.value,
            gx = () => null,
            yx = {
                color: {
                    match: ({
                        red: e,
                        green: t,
                        blue: r,
                        alpha: n
                    }) => [e, t, r, n].every(i => i != null),
                    getValue: ({
                        red: e,
                        green: t,
                        blue: r,
                        alpha: n
                    }) => `rgba(${e}, ${t}, ${r}, ${n})`
                },
                size: {
                    match: ({
                        size: e
                    }) => e != null,
                    getValue: ({
                        size: e
                    }, t) => {
                        switch (t) {
                            case "-":
                                return e;
                            default:
                                return `${e}${t}`
                        }
                    }
                }
            },
            Ex = (e, t, r) => {
                let {
                    target: {
                        objectId: n
                    },
                    value: {
                        unit: i
                    }
                } = r.config, o = t.PLUGIN_VARIABLE, s = Object.values(yx).find(a => a.match(o, i));
                s && document.documentElement.style.setProperty(n, s.getValue(o, i))
            },
            vx = (e, t) => {
                let r = t.config.target.objectId;
                document.documentElement.style.removeProperty(r)
            }
    });
    var gd = f(so => {
        "use strict";
        Object.defineProperty(so, "__esModule", {
            value: !0
        });
        Object.defineProperty(so, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return bx
            }
        });
        var dn = (Ne(), Ke(vs)),
            mx = pn(ud()),
            _x = pn(ld()),
            Ix = pn(fd()),
            Tx = pn(pd());

        function hd(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (hd = function(n) {
                return n ? r : t
            })(e)
        }

        function pn(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var r = hd(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        var bx = new Map([
            [dn.ActionTypeConsts.PLUGIN_LOTTIE, { ...mx
            }],
            [dn.ActionTypeConsts.PLUGIN_SPLINE, { ..._x
            }],
            [dn.ActionTypeConsts.PLUGIN_RIVE, { ...Ix
            }],
            [dn.ActionTypeConsts.PLUGIN_VARIABLE, { ...Tx
            }]
        ])
    });
    var yd = {};
    Pe(yd, {
        clearPlugin: () => ho,
        createPluginInstance: () => wx,
        getPluginConfig: () => co,
        getPluginDestination: () => fo,
        getPluginDuration: () => Ax,
        getPluginOrigin: () => lo,
        isPluginType: () => mt,
        renderPlugin: () => po
    });

    function mt(e) {
        return uo.pluginMethodMap.has(e)
    }
    var uo, _t, co, lo, Ax, fo, wx, po, ho, go = he(() => {
        "use strict";
        cn();
        uo = ce(gd());
        _t = e => t => {
            if (!He) return () => null;
            let r = uo.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, co = _t("getPluginConfig"), lo = _t("getPluginOrigin"), Ax = _t("getPluginDuration"), fo = _t("getPluginDestination"), wx = _t("createPluginInstance"), po = _t("renderPlugin"), ho = _t("clearPlugin")
    });
    var vd = f((kq, Ed) => {
        function Sx(e, t) {
            return e == null || e !== e ? t : e
        }
        Ed.exports = Sx
    });
    var _d = f((Vq, md) => {
        function Ox(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        md.exports = Ox
    });
    var Td = f((Uq, Id) => {
        function xx(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), s = n(t), a = s.length; a--;) {
                    var u = s[e ? a : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        Id.exports = xx
    });
    var Ad = f((Bq, bd) => {
        var Rx = Td(),
            Cx = Rx();
        bd.exports = Cx
    });
    var yo = f((Wq, wd) => {
        var Lx = Ad(),
            Px = lr();

        function Nx(e, t) {
            return e && Lx(e, t, Px)
        }
        wd.exports = Nx
    });
    var Od = f((Hq, Sd) => {
        var Mx = Et();

        function Dx(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!Mx(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, s = Object(r);
                    (t ? o-- : ++o < i) && n(s[o], o, s) !== !1;);
                return r
            }
        }
        Sd.exports = Dx
    });
    var Eo = f((zq, xd) => {
        var Fx = yo(),
            qx = Od(),
            Gx = qx(Fx);
        xd.exports = Gx
    });
    var Cd = f((jq, Rd) => {
        function Xx(e, t, r, n, i) {
            return i(e, function(o, s, a) {
                r = n ? (n = !1, o) : t(r, o, s, a)
            }), r
        }
        Rd.exports = Xx
    });
    var Pd = f((Kq, Ld) => {
        var kx = _d(),
            Vx = Eo(),
            Ux = ft(),
            Bx = Cd(),
            Wx = Ie();

        function Hx(e, t, r) {
            var n = Wx(e) ? kx : Bx,
                i = arguments.length < 3;
            return n(e, Ux(t, 4), r, i, Vx)
        }
        Ld.exports = Hx
    });
    var Md = f((Yq, Nd) => {
        var zx = Hi(),
            jx = ft(),
            Kx = zi(),
            Yx = Math.max,
            $x = Math.min;

        function Qx(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = Kx(r), i = r < 0 ? Yx(n + i, 0) : $x(i, n - 1)), zx(e, jx(t, 3), i, !0)
        }
        Nd.exports = Qx
    });
    var Fd = f(($q, Dd) => {
        var Zx = Wi(),
            Jx = Md(),
            eR = Zx(Jx);
        Dd.exports = eR
    });

    function qd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function tR(e, t) {
        if (qd(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !qd(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var vo, Gd = he(() => {
        "use strict";
        vo = tR
    });
    var rp = {};
    Pe(rp, {
        cleanupHTMLElement: () => ZR,
        clearAllStyles: () => QR,
        clearObjectCache: () => vR,
        getActionListProgress: () => eC,
        getAffectedElements: () => bo,
        getComputedStyle: () => SR,
        getDestinationValues: () => NR,
        getElementId: () => TR,
        getInstanceId: () => _R,
        getInstanceOrigin: () => RR,
        getItemConfigByKey: () => PR,
        getMaxDurationItemIndex: () => tp,
        getNamespacedParameterId: () => nC,
        getRenderType: () => Zd,
        getStyleProp: () => MR,
        mediaQueriesEqual: () => oC,
        observeStore: () => wR,
        reduceListToGroup: () => tC,
        reifyState: () => bR,
        renderHTMLElement: () => DR,
        shallowEqual: () => vo,
        shouldAllowMediaQuery: () => iC,
        shouldNamespaceEventParameter: () => rC,
        stringifyTarget: () => aC
    });

    function vR() {
        hn.clear()
    }

    function _R() {
        return "i" + mR++
    }

    function TR(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + IR++
    }

    function bR({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, vn.default)(e, (s, a) => {
                let {
                    eventTypeId: u
                } = a;
                return s[u] || (s[u] = {}), s[u][a.id] = a, s
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function wR({
        store: e,
        select: t,
        onChange: r,
        comparator: n = AR
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, s = o(u), a = t(i());

        function u() {
            let l = t(i());
            if (l == null) {
                s();
                return
            }
            n(l, a) || (a = l, r(a, e))
        }
        return s
    }

    function Vd(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            }
        }
        return {}
    }

    function bo({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((D, A) => D.concat(bo({
            config: {
                target: A
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: s,
            getQuerySelector: a,
            queryDocument: u,
            getChildElements: l,
            getSiblingElements: E,
            matchSelector: g,
            elementContains: d,
            isSiblingNode: v
        } = i, {
            target: I
        } = e;
        if (!I) return [];
        let {
            id: _,
            objectId: w,
            selector: T,
            selectorGuids: x,
            appliesTo: O,
            useEventTarget: P
        } = Vd(I);
        if (w) return [hn.has(w) ? hn.get(w) : hn.set(w, {}).get(w)];
        if (O === yi.PAGE) {
            let D = s(_);
            return D ? [D] : []
        }
        let R = (t ? .action ? .config ? .affectedElements ? ? {})[_ || T] || {},
            k = !!(R.id || R.selector),
            U, B, z, J = t && a(Vd(t.target));
        if (k ? (U = R.limitAffectedElements, B = J, z = a(R)) : B = z = a({
                id: _,
                selector: T,
                selectorGuids: x
            }), t && P) {
            let D = r && (z || P === !0) ? [r] : u(J);
            if (z) {
                if (P === gR) return u(z).filter(A => D.some(M => d(A, M)));
                if (P === Xd) return u(z).filter(A => D.some(M => d(M, A)));
                if (P === kd) return u(z).filter(A => D.some(M => v(M, A)))
            }
            return D
        }
        return B == null || z == null ? [] : He && n ? u(z).filter(D => n.contains(D)) : U === Xd ? u(B, z) : U === hR ? l(u(B)).filter(g(z)) : U === kd ? E(u(B)).filter(g(z)) : u(z)
    }

    function SR({
        element: e,
        actionItem: t
    }) {
        if (!He) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case Bt:
            case Wt:
            case Ht:
            case zt:
            case _n:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function RR(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: s
        } = n;
        if (mt(s)) return lo(s)(t[s], n);
        switch (n.actionTypeId) {
            case kt:
            case Vt:
            case Ut:
            case _r:
                return t[n.actionTypeId] || Ao[n.actionTypeId];
            case Ir:
                return OR(t[n.actionTypeId], n.config.filters);
            case Tr:
                return xR(t[n.actionTypeId], n.config.fontVariations);
            case Yd:
                return {
                    value: (0, ot.default)(parseFloat(o(e, yn)), 1)
                };
            case Bt:
                {
                    let a = o(e, Je),
                        u = o(e, et),
                        l, E;
                    return n.config.widthUnit === pt ? l = Ud.test(a) ? parseFloat(a) : parseFloat(r.width) : l = (0, ot.default)(parseFloat(a), parseFloat(r.width)),
                    n.config.heightUnit === pt ? E = Ud.test(u) ? parseFloat(u) : parseFloat(r.height) : E = (0, ot.default)(parseFloat(u), parseFloat(r.height)),
                    {
                        widthValue: l,
                        heightValue: E
                    }
                }
            case Wt:
            case Ht:
            case zt:
                return KR({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case _n:
                return {
                    value: (0, ot.default)(o(e, En), r.display)
                };
            case ER:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function NR({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (mt(t.actionTypeId)) return fo(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case kt:
            case Vt:
            case Ut:
            case _r:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case Bt:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: s,
                        heightUnit: a
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: l
                    } = t.config;
                    if (!He) return {
                        widthValue: u,
                        heightValue: l
                    };
                    if (s === pt) {
                        let E = n(e, Je);
                        i(e, Je, ""), u = o(e, "offsetWidth"), i(e, Je, E)
                    }
                    if (a === pt) {
                        let E = n(e, et);
                        i(e, et, ""), l = o(e, "offsetHeight"), i(e, et, E)
                    }
                    return {
                        widthValue: u,
                        heightValue: l
                    }
                }
            case Wt:
            case Ht:
            case zt:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s,
                        globalSwatchId: a
                    } = t.config;
                    if (a && a.startsWith("--")) {
                        let {
                            getStyle: u
                        } = r, l = u(e, a), E = (0, Hd.normalizeColor)(l);
                        return {
                            rValue: E.red,
                            gValue: E.green,
                            bValue: E.blue,
                            aValue: E.alpha
                        }
                    }
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s
                    }
                }
            case Ir:
                return t.config.filters.reduce(CR, {});
            case Tr:
                return t.config.fontVariations.reduce(LR, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function Zd(e) {
        if (/^TRANSFORM_/.test(e)) return jd;
        if (/^STYLE_/.test(e)) return Io;
        if (/^GENERAL_/.test(e)) return _o;
        if (/^PLUGIN_/.test(e)) return Kd
    }

    function MR(e, t) {
        return e === Io ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function DR(e, t, r, n, i, o, s, a, u) {
        switch (a) {
            case jd:
                return kR(e, t, r, i, s);
            case Io:
                return YR(e, t, r, i, o, s);
            case _o:
                return $R(e, i, s);
            case Kd:
                {
                    let {
                        actionTypeId: l
                    } = i;
                    if (mt(l)) return po(l)(u, t, i)
                }
        }
    }

    function kR(e, t, r, n, i) {
        let o = XR.map(a => {
                let u = Ao[a],
                    {
                        xValue: l = u.xValue,
                        yValue: E = u.yValue,
                        zValue: g = u.zValue,
                        xUnit: d = "",
                        yUnit: v = "",
                        zUnit: I = ""
                    } = t[a] || {};
                switch (a) {
                    case kt:
                        return `${iR}(${l}${d}, ${E}${v}, ${g}${I})`;
                    case Vt:
                        return `${oR}(${l}${d}, ${E}${v}, ${g}${I})`;
                    case Ut:
                        return `${aR}(${l}${d}) ${sR}(${E}${v}) ${uR}(${g}${I})`;
                    case _r:
                        return `${cR}(${l}${d}, ${E}${v})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: s
            } = i;
        It(e, dt, i), s(e, dt, o), BR(n, r) && s(e, un, lR)
    }

    function VR(e, t, r, n) {
        let i = (0, vn.default)(t, (s, a, u) => `${s} ${u}(${a}${GR(u,r)})`, ""),
            {
                setStyle: o
            } = n;
        It(e, Er, n), o(e, Er, i)
    }

    function UR(e, t, r, n) {
        let i = (0, vn.default)(t, (s, a, u) => (s.push(`"${u}" ${a}`), s), []).join(", "),
            {
                setStyle: o
            } = n;
        It(e, vr, n), o(e, vr, i)
    }

    function BR({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === kt && n !== void 0 || e === Vt && n !== void 0 || e === Ut && (t !== void 0 || r !== void 0)
    }

    function jR(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function KR({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = To[t],
            o = n(e, i),
            s = HR.test(o) ? o : r[i],
            a = jR(zR, s).split(mr);
        return {
            rValue: (0, ot.default)(parseInt(a[0], 10), 255),
            gValue: (0, ot.default)(parseInt(a[1], 10), 255),
            bValue: (0, ot.default)(parseInt(a[2], 10), 255),
            aValue: (0, ot.default)(parseFloat(a[3]), 1)
        }
    }

    function YR(e, t, r, n, i, o) {
        let {
            setStyle: s
        } = o;
        switch (n.actionTypeId) {
            case Bt:
                {
                    let {
                        widthUnit: a = "",
                        heightUnit: u = ""
                    } = n.config,
                    {
                        widthValue: l,
                        heightValue: E
                    } = r;l !== void 0 && (a === pt && (a = "px"), It(e, Je, o), s(e, Je, l + a)),
                    E !== void 0 && (u === pt && (u = "px"), It(e, et, o), s(e, et, E + u));
                    break
                }
            case Ir:
                {
                    VR(e, r, n.config, o);
                    break
                }
            case Tr:
                {
                    UR(e, r, n.config, o);
                    break
                }
            case Wt:
            case Ht:
            case zt:
                {
                    let a = To[n.actionTypeId],
                        u = Math.round(r.rValue),
                        l = Math.round(r.gValue),
                        E = Math.round(r.bValue),
                        g = r.aValue;It(e, a, o),
                    s(e, a, g >= 1 ? `rgb(${u},${l},${E})` : `rgba(${u},${l},${E},${g})`);
                    break
                }
            default:
                {
                    let {
                        unit: a = ""
                    } = n.config;It(e, i, o),
                    s(e, i, r.value + a);
                    break
                }
        }
    }

    function $R(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case _n:
                {
                    let {
                        value: i
                    } = t.config;i === fR && He ? n(e, En, Ki) : n(e, En, i);
                    return
                }
        }
    }

    function It(e, t, r) {
        if (!He) return;
        let n = Qd[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, Xt);
        if (!s) {
            o(e, Xt, n);
            return
        }
        let a = s.split(mr).map($d);
        a.indexOf(n) === -1 && o(e, Xt, a.concat(n).join(mr))
    }

    function Jd(e, t, r) {
        if (!He) return;
        let n = Qd[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, Xt);
        !s || s.indexOf(n) === -1 || o(e, Xt, s.split(mr).map($d).filter(a => a !== n).join(mr))
    }

    function QR({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let s = n[o],
                {
                    config: a
                } = s.action,
                {
                    actionListId: u
                } = a,
                l = i[u];
            l && Bd({
                actionList: l,
                event: s,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            Bd({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function Bd({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Wd({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: s
            } = o;
            s.forEach(a => {
                Wd({
                    actionGroup: a,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Wd({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: s
            } = i, a;
            mt(o) ? a = u => ho(o)(u, i) : a = ep({
                effect: JR,
                actionTypeId: o,
                elementApi: r
            }), bo({
                config: s,
                event: t,
                elementApi: r
            }).forEach(a)
        })
    }

    function ZR(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === Bt) {
            let {
                config: s
            } = t;
            s.widthUnit === pt && n(e, Je, ""), s.heightUnit === pt && n(e, et, "")
        }
        i(e, Xt) && ep({
            effect: Jd,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function JR(e, t, r) {
        let {
            setStyle: n
        } = r;
        Jd(e, t, r), n(e, t, ""), t === dt && n(e, un, "")
    }

    function tp(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, s = o.delay + o.duration;
            s >= t && (t = s, r = i)
        }), r
    }

    function eC(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, s = 0, a = 0;
        return r.forEach((u, l) => {
            if (n && l === 0) return;
            let {
                actionItems: E
            } = u, g = E[tp(E)], {
                config: d,
                actionTypeId: v
            } = g;
            i.id === g.id && (a = s + o);
            let I = Zd(v) === _o ? 0 : d.duration;
            s += d.delay + I
        }), s > 0 ? yr(a / s) : 0
    }

    function tC({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], s = a => (o.push((0, mn.mergeIn)(a, ["config"], {
            delay: 0,
            duration: 0
        })), a.id === t);
        return n && n.some(({
            actionItems: a
        }) => a.some(s)), i && i.some(a => {
            let {
                continuousActionGroups: u
            } = a;
            return u.some(({
                actionItems: l
            }) => l.some(s))
        }), (0, mn.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function rC(e, {
        basedOn: t
    }) {
        return e === We.SCROLLING_IN_VIEW && (t === Qe.ELEMENT || t == null) || e === We.MOUSE_MOVE && t === Qe.ELEMENT
    }

    function nC(e, t) {
        return e + yR + t
    }

    function iC(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function oC(e, t) {
        return vo(e && e.sort(), t && t.sort())
    }

    function aC(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + mo + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + mo + r + mo + n
    }
    var ot, vn, gn, mn, Hd, rR, nR, iR, oR, aR, sR, uR, cR, lR, fR, yn, Er, vr, Je, et, zd, dR, pR, Xd, hR, kd, gR, En, Xt, pt, mr, yR, mo, jd, _o, Io, Kd, kt, Vt, Ut, _r, Yd, Ir, Tr, Bt, Wt, Ht, zt, _n, ER, $d, To, Qd, hn, mR, IR, AR, Ud, OR, xR, CR, LR, PR, Ao, FR, qR, GR, XR, WR, HR, zR, ep, np = he(() => {
        "use strict";
        ot = ce(vd()), vn = ce(Pd()), gn = ce(Fd()), mn = ce(Rt());
        Ne();
        Gd();
        Qi();
        Hd = ce(oo());
        go();
        cn();
        ({
            BACKGROUND: rR,
            TRANSFORM: nR,
            TRANSLATE_3D: iR,
            SCALE_3D: oR,
            ROTATE_X: aR,
            ROTATE_Y: sR,
            ROTATE_Z: uR,
            SKEW: cR,
            PRESERVE_3D: lR,
            FLEX: fR,
            OPACITY: yn,
            FILTER: Er,
            FONT_VARIATION_SETTINGS: vr,
            WIDTH: Je,
            HEIGHT: et,
            BACKGROUND_COLOR: zd,
            BORDER_COLOR: dR,
            COLOR: pR,
            CHILDREN: Xd,
            IMMEDIATE_CHILDREN: hR,
            SIBLINGS: kd,
            PARENT: gR,
            DISPLAY: En,
            WILL_CHANGE: Xt,
            AUTO: pt,
            COMMA_DELIMITER: mr,
            COLON_DELIMITER: yR,
            BAR_DELIMITER: mo,
            RENDER_TRANSFORM: jd,
            RENDER_GENERAL: _o,
            RENDER_STYLE: Io,
            RENDER_PLUGIN: Kd
        } = Te), {
            TRANSFORM_MOVE: kt,
            TRANSFORM_SCALE: Vt,
            TRANSFORM_ROTATE: Ut,
            TRANSFORM_SKEW: _r,
            STYLE_OPACITY: Yd,
            STYLE_FILTER: Ir,
            STYLE_FONT_VARIATION: Tr,
            STYLE_SIZE: Bt,
            STYLE_BACKGROUND_COLOR: Wt,
            STYLE_BORDER: Ht,
            STYLE_TEXT_COLOR: zt,
            GENERAL_DISPLAY: _n,
            OBJECT_VALUE: ER
        } = Se, $d = e => e.trim(), To = Object.freeze({
            [Wt]: zd,
            [Ht]: dR,
            [zt]: pR
        }), Qd = Object.freeze({
            [dt]: nR,
            [zd]: rR,
            [yn]: yn,
            [Er]: Er,
            [Je]: Je,
            [et]: et,
            [vr]: vr
        }), hn = new Map;
        mR = 1;
        IR = 1;
        AR = (e, t) => e === t;
        Ud = /px/, OR = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = FR[n.type]), r), e || {}), xR = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = qR[n.type] || n.defaultValue || 0), r), e || {});
        CR = (e, t) => (t && (e[t.type] = t.value || 0), e), LR = (e, t) => (t && (e[t.type] = t.value || 0), e), PR = (e, t, r) => {
            if (mt(e)) return co(e)(r, t);
            switch (e) {
                case Ir:
                    {
                        let n = (0, gn.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case Tr:
                    {
                        let n = (0, gn.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        Ao = {
            [kt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Vt]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Ut]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [_r]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, FR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), qR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), GR = (e, t) => {
            let r = (0, gn.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, XR = Object.keys(Ao);
        WR = "\\(([^)]+)\\)", HR = /^rgb/, zR = RegExp(`rgba?${WR}`);
        ep = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case kt:
                case Vt:
                case Ut:
                case _r:
                    e(n, dt, r);
                    break;
                case Ir:
                    e(n, Er, r);
                    break;
                case Tr:
                    e(n, vr, r);
                    break;
                case Yd:
                    e(n, yn, r);
                    break;
                case Bt:
                    e(n, Je, r), e(n, et, r);
                    break;
                case Wt:
                case Ht:
                case zt:
                    e(n, To[t], r);
                    break;
                case _n:
                    e(n, En, r);
                    break
            }
        }
    });
    var Tt = f(wo => {
        "use strict";
        Object.defineProperty(wo, "__esModule", {
            value: !0
        });

        function sC(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        sC(wo, {
            IX2BrowserSupport: function() {
                return uC
            },
            IX2EasingUtils: function() {
                return lC
            },
            IX2Easings: function() {
                return cC
            },
            IX2ElementsReducer: function() {
                return fC
            },
            IX2VanillaPlugins: function() {
                return dC
            },
            IX2VanillaUtils: function() {
                return pC
            }
        });
        var uC = jt((cn(), Ke($f))),
            cC = jt(($i(), Ke(gr))),
            lC = jt((Qi(), Ke(nd))),
            fC = jt((sd(), Ke(ad))),
            dC = jt((go(), Ke(yd))),
            pC = jt((np(), Ke(rp)));

        function ip(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (ip = function(n) {
                return n ? r : t
            })(e)
        }

        function jt(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var r = ip(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
    });
    var Tn, at, hC, gC, yC, EC, vC, mC, In, op, _C, IC, So, TC, bC, AC, wC, ap, sp = he(() => {
        "use strict";
        Ne();
        Tn = ce(Tt()), at = ce(Rt()), {
            IX2_RAW_DATA_IMPORTED: hC,
            IX2_SESSION_STOPPED: gC,
            IX2_INSTANCE_ADDED: yC,
            IX2_INSTANCE_STARTED: EC,
            IX2_INSTANCE_REMOVED: vC,
            IX2_ANIMATION_FRAME_CHANGED: mC
        } = me, {
            optimizeFloat: In,
            applyEasing: op,
            createBezierEasing: _C
        } = Tn.IX2EasingUtils, {
            RENDER_GENERAL: IC
        } = Te, {
            getItemConfigByKey: So,
            getRenderType: TC,
            getStyleProp: bC
        } = Tn.IX2VanillaUtils, AC = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: s,
                restingValue: a,
                actionTypeId: u,
                customEasingFn: l,
                skipMotion: E,
                skipToValue: g
            } = e, {
                parameters: d
            } = t.payload, v = Math.max(1 - s, .01), I = d[n];
            I == null && (v = 1, I = a);
            let _ = Math.max(I, 0) || 0,
                w = In(_ - r),
                T = E ? g : In(r + w * v),
                x = T * 100;
            if (T === r && e.current) return e;
            let O, P, N, R;
            for (let U = 0, {
                    length: B
                } = i; U < B; U++) {
                let {
                    keyframe: z,
                    actionItems: J
                } = i[U];
                if (U === 0 && (O = J[0]), x >= z) {
                    O = J[0];
                    let D = i[U + 1],
                        A = D && x !== z;
                    P = A ? D.actionItems[0] : null, A && (N = z / 100, R = (D.keyframe - z) / 100)
                }
            }
            let k = {};
            if (O && !P)
                for (let U = 0, {
                        length: B
                    } = o; U < B; U++) {
                    let z = o[U];
                    k[z] = So(u, z, O.config)
                } else if (O && P && N !== void 0 && R !== void 0) {
                    let U = (T - N) / R,
                        B = O.config.easing,
                        z = op(B, U, l);
                    for (let J = 0, {
                            length: D
                        } = o; J < D; J++) {
                        let A = o[J],
                            M = So(u, A, O.config),
                            te = (So(u, A, P.config) - M) * z + M;
                        k[A] = te
                    }
                }
            return (0, at.merge)(e, {
                position: T,
                current: k
            })
        }, wC = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: s,
                verbose: a,
                actionItem: u,
                destination: l,
                destinationKeys: E,
                pluginDuration: g,
                instanceDelay: d,
                customEasingFn: v,
                skipMotion: I
            } = e, _ = u.config.easing, {
                duration: w,
                delay: T
            } = u.config;
            g != null && (w = g), T = d ? ? T, s === IC ? w = 0 : (o || I) && (w = T = 0);
            let {
                now: x
            } = t.payload;
            if (r && n) {
                let O = x - (i + T);
                if (a) {
                    let U = x - i,
                        B = w + T,
                        z = In(Math.min(Math.max(0, U / B), 1));
                    e = (0, at.set)(e, "verboseTimeElapsed", B * z)
                }
                if (O < 0) return e;
                let P = In(Math.min(Math.max(0, O / w), 1)),
                    N = op(_, P, v),
                    R = {},
                    k = null;
                return E.length && (k = E.reduce((U, B) => {
                    let z = l[B],
                        J = parseFloat(n[B]) || 0,
                        A = (parseFloat(z) - J) * N + J;
                    return U[B] = A, U
                }, {})), R.current = k, R.position = P, P === 1 && (R.active = !1, R.complete = !0), (0, at.merge)(e, R)
            }
            return e
        }, ap = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case hC:
                    return t.payload.ixInstances || Object.freeze({});
                case gC:
                    return Object.freeze({});
                case yC:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: l,
                            isCarrier: E,
                            origin: g,
                            destination: d,
                            immediate: v,
                            verbose: I,
                            continuous: _,
                            parameterId: w,
                            actionGroups: T,
                            smoothing: x,
                            restingValue: O,
                            pluginInstance: P,
                            pluginDuration: N,
                            instanceDelay: R,
                            skipMotion: k,
                            skipToValue: U
                        } = t.payload,
                        {
                            actionTypeId: B
                        } = i,
                        z = TC(B),
                        J = bC(z, B),
                        D = Object.keys(d).filter(M => d[M] != null && typeof d[M] != "string"),
                        {
                            easing: A
                        } = i.config;
                        return (0, at.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: g,
                            destination: d,
                            destinationKeys: D,
                            immediate: v,
                            verbose: I,
                            current: null,
                            actionItem: i,
                            actionTypeId: B,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: l,
                            renderType: z,
                            isCarrier: E,
                            styleProp: J,
                            continuous: _,
                            parameterId: w,
                            actionGroups: T,
                            smoothing: x,
                            restingValue: O,
                            pluginInstance: P,
                            pluginDuration: N,
                            instanceDelay: R,
                            skipMotion: k,
                            skipToValue: U,
                            customEasingFn: Array.isArray(A) && A.length === 4 ? _C(A) : void 0
                        })
                    }
                case EC:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, at.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case vC:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let s = 0; s < o; s++) {
                            let a = i[s];
                            a !== r && (n[a] = e[a])
                        }
                        return n
                    }
                case mC:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let s = n[o],
                                a = e[s],
                                u = a.continuous ? AC : wC;
                            r = (0, at.set)(r, s, u(a, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var SC, OC, xC, up, cp = he(() => {
        "use strict";
        Ne();
        ({
            IX2_RAW_DATA_IMPORTED: SC,
            IX2_SESSION_STOPPED: OC,
            IX2_PARAMETER_CHANGED: xC
        } = me), up = (e = {}, t) => {
            switch (t.type) {
                case SC:
                    return t.payload.ixParameters || {};
                case OC:
                    return {};
                case xC:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var dp = {};
    Pe(dp, {
        default: () => CC
    });
    var lp, fp, RC, CC, pp = he(() => {
        "use strict";
        lp = ce(gi());
        _s();
        Vs();
        Ws();
        fp = ce(Tt());
        sp();
        cp();
        ({
            ixElements: RC
        } = fp.IX2ElementsReducer), CC = (0, lp.combineReducers)({
            ixData: ms,
            ixRequest: ks,
            ixSession: Bs,
            ixElements: RC,
            ixInstances: ap,
            ixParameters: up
        })
    });
    var gp = f((hG, hp) => {
        var LC = ct(),
            PC = Ie(),
            NC = nt(),
            MC = "[object String]";

        function DC(e) {
            return typeof e == "string" || !PC(e) && NC(e) && LC(e) == MC
        }
        hp.exports = DC
    });
    var Ep = f((gG, yp) => {
        var FC = Bi(),
            qC = FC("length");
        yp.exports = qC
    });
    var mp = f((yG, vp) => {
        var GC = "\\ud800-\\udfff",
            XC = "\\u0300-\\u036f",
            kC = "\\ufe20-\\ufe2f",
            VC = "\\u20d0-\\u20ff",
            UC = XC + kC + VC,
            BC = "\\ufe0e\\ufe0f",
            WC = "\\u200d",
            HC = RegExp("[" + WC + GC + UC + BC + "]");

        function zC(e) {
            return HC.test(e)
        }
        vp.exports = zC
    });
    var xp = f((EG, Op) => {
        var Ip = "\\ud800-\\udfff",
            jC = "\\u0300-\\u036f",
            KC = "\\ufe20-\\ufe2f",
            YC = "\\u20d0-\\u20ff",
            $C = jC + KC + YC,
            QC = "\\ufe0e\\ufe0f",
            ZC = "[" + Ip + "]",
            Oo = "[" + $C + "]",
            xo = "\\ud83c[\\udffb-\\udfff]",
            JC = "(?:" + Oo + "|" + xo + ")",
            Tp = "[^" + Ip + "]",
            bp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Ap = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            eL = "\\u200d",
            wp = JC + "?",
            Sp = "[" + QC + "]?",
            tL = "(?:" + eL + "(?:" + [Tp, bp, Ap].join("|") + ")" + Sp + wp + ")*",
            rL = Sp + wp + tL,
            nL = "(?:" + [Tp + Oo + "?", Oo, bp, Ap, ZC].join("|") + ")",
            _p = RegExp(xo + "(?=" + xo + ")|" + nL + rL, "g");

        function iL(e) {
            for (var t = _p.lastIndex = 0; _p.test(e);) ++t;
            return t
        }
        Op.exports = iL
    });
    var Cp = f((vG, Rp) => {
        var oL = Ep(),
            aL = mp(),
            sL = xp();

        function uL(e) {
            return aL(e) ? sL(e) : oL(e)
        }
        Rp.exports = uL
    });
    var Pp = f((mG, Lp) => {
        var cL = Zr(),
            lL = Jr(),
            fL = Et(),
            dL = gp(),
            pL = Cp(),
            hL = "[object Map]",
            gL = "[object Set]";

        function yL(e) {
            if (e == null) return 0;
            if (fL(e)) return dL(e) ? pL(e) : e.length;
            var t = lL(e);
            return t == hL || t == gL ? e.size : cL(e).length
        }
        Lp.exports = yL
    });
    var Mp = f((_G, Np) => {
        var EL = "Expected a function";

        function vL(e) {
            if (typeof e != "function") throw new TypeError(EL);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Np.exports = vL
    });
    var Ro = f((IG, Dp) => {
        var mL = lt(),
            _L = function() {
                try {
                    var e = mL(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Dp.exports = _L
    });
    var Co = f((TG, qp) => {
        var Fp = Ro();

        function IL(e, t, r) {
            t == "__proto__" && Fp ? Fp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        qp.exports = IL
    });
    var Xp = f((bG, Gp) => {
        var TL = Co(),
            bL = Ur(),
            AL = Object.prototype,
            wL = AL.hasOwnProperty;

        function SL(e, t, r) {
            var n = e[t];
            (!(wL.call(e, t) && bL(n, r)) || r === void 0 && !(t in e)) && TL(e, t, r)
        }
        Gp.exports = SL
    });
    var Up = f((AG, Vp) => {
        var OL = Xp(),
            xL = dr(),
            RL = Kr(),
            kp = Ze(),
            CL = qt();

        function LL(e, t, r, n) {
            if (!kp(e)) return e;
            t = xL(t, e);
            for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o;) {
                var u = CL(t[i]),
                    l = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != s) {
                    var E = a[u];
                    l = n ? n(E, u, a) : void 0, l === void 0 && (l = kp(E) ? E : RL(t[i + 1]) ? [] : {})
                }
                OL(a, u, l), a = a[u]
            }
            return e
        }
        Vp.exports = LL
    });
    var Wp = f((wG, Bp) => {
        var PL = rn(),
            NL = Up(),
            ML = dr();

        function DL(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var s = t[n],
                    a = PL(e, s);
                r(a, s) && NL(o, ML(s, e), a)
            }
            return o
        }
        Bp.exports = DL
    });
    var zp = f((SG, Hp) => {
        var FL = zr(),
            qL = ri(),
            GL = xi(),
            XL = Oi(),
            kL = Object.getOwnPropertySymbols,
            VL = kL ? function(e) {
                for (var t = []; e;) FL(t, GL(e)), e = qL(e);
                return t
            } : XL;
        Hp.exports = VL
    });
    var Kp = f((OG, jp) => {
        function UL(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        jp.exports = UL
    });
    var $p = f((xG, Yp) => {
        var BL = Ze(),
            WL = Qr(),
            HL = Kp(),
            zL = Object.prototype,
            jL = zL.hasOwnProperty;

        function KL(e) {
            if (!BL(e)) return HL(e);
            var t = WL(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !jL.call(e, n)) || r.push(n);
            return r
        }
        Yp.exports = KL
    });
    var Zp = f((RG, Qp) => {
        var YL = Ci(),
            $L = $p(),
            QL = Et();

        function ZL(e) {
            return QL(e) ? YL(e, !0) : $L(e)
        }
        Qp.exports = ZL
    });
    var eh = f((CG, Jp) => {
        var JL = Si(),
            eP = zp(),
            tP = Zp();

        function rP(e) {
            return JL(e, tP, eP)
        }
        Jp.exports = rP
    });
    var rh = f((LG, th) => {
        var nP = Ui(),
            iP = ft(),
            oP = Wp(),
            aP = eh();

        function sP(e, t) {
            if (e == null) return {};
            var r = nP(aP(e), function(n) {
                return [n]
            });
            return t = iP(t), oP(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        th.exports = sP
    });
    var ih = f((PG, nh) => {
        var uP = ft(),
            cP = Mp(),
            lP = rh();

        function fP(e, t) {
            return lP(e, cP(uP(t)))
        }
        nh.exports = fP
    });
    var ah = f((NG, oh) => {
        var dP = Zr(),
            pP = Jr(),
            hP = ar(),
            gP = Ie(),
            yP = Et(),
            EP = jr(),
            vP = Qr(),
            mP = $r(),
            _P = "[object Map]",
            IP = "[object Set]",
            TP = Object.prototype,
            bP = TP.hasOwnProperty;

        function AP(e) {
            if (e == null) return !0;
            if (yP(e) && (gP(e) || typeof e == "string" || typeof e.splice == "function" || EP(e) || mP(e) || hP(e))) return !e.length;
            var t = pP(e);
            if (t == _P || t == IP) return !e.size;
            if (vP(e)) return !dP(e).length;
            for (var r in e)
                if (bP.call(e, r)) return !1;
            return !0
        }
        oh.exports = AP
    });
    var uh = f((MG, sh) => {
        var wP = Co(),
            SP = yo(),
            OP = ft();

        function xP(e, t) {
            var r = {};
            return t = OP(t, 3), SP(e, function(n, i, o) {
                wP(r, i, t(n, i, o))
            }), r
        }
        sh.exports = xP
    });
    var lh = f((DG, ch) => {
        function RP(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        ch.exports = RP
    });
    var dh = f((FG, fh) => {
        var CP = on();

        function LP(e) {
            return typeof e == "function" ? e : CP
        }
        fh.exports = LP
    });
    var hh = f((qG, ph) => {
        var PP = lh(),
            NP = Eo(),
            MP = dh(),
            DP = Ie();

        function FP(e, t) {
            var r = DP(e) ? PP : NP;
            return r(e, MP(t))
        }
        ph.exports = FP
    });
    var yh = f((GG, gh) => {
        var qP = Be(),
            GP = function() {
                return qP.Date.now()
            };
        gh.exports = GP
    });
    var mh = f((XG, vh) => {
        var XP = Ze(),
            Lo = yh(),
            Eh = an(),
            kP = "Expected a function",
            VP = Math.max,
            UP = Math.min;

        function BP(e, t, r) {
            var n, i, o, s, a, u, l = 0,
                E = !1,
                g = !1,
                d = !0;
            if (typeof e != "function") throw new TypeError(kP);
            t = Eh(t) || 0, XP(r) && (E = !!r.leading, g = "maxWait" in r, o = g ? VP(Eh(r.maxWait) || 0, t) : o, d = "trailing" in r ? !!r.trailing : d);

            function v(R) {
                var k = n,
                    U = i;
                return n = i = void 0, l = R, s = e.apply(U, k), s
            }

            function I(R) {
                return l = R, a = setTimeout(T, t), E ? v(R) : s
            }

            function _(R) {
                var k = R - u,
                    U = R - l,
                    B = t - k;
                return g ? UP(B, o - U) : B
            }

            function w(R) {
                var k = R - u,
                    U = R - l;
                return u === void 0 || k >= t || k < 0 || g && U >= o
            }

            function T() {
                var R = Lo();
                if (w(R)) return x(R);
                a = setTimeout(T, _(R))
            }

            function x(R) {
                return a = void 0, d && n ? v(R) : (n = i = void 0, s)
            }

            function O() {
                a !== void 0 && clearTimeout(a), l = 0, n = u = i = a = void 0
            }

            function P() {
                return a === void 0 ? s : x(Lo())
            }

            function N() {
                var R = Lo(),
                    k = w(R);
                if (n = arguments, i = this, u = R, k) {
                    if (a === void 0) return I(u);
                    if (g) return clearTimeout(a), a = setTimeout(T, t), v(u)
                }
                return a === void 0 && (a = setTimeout(T, t)), s
            }
            return N.cancel = O, N.flush = P, N
        }
        vh.exports = BP
    });
    var Ih = f((kG, _h) => {
        var WP = mh(),
            HP = Ze(),
            zP = "Expected a function";

        function jP(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(zP);
            return HP(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), WP(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        _h.exports = jP
    });
    var bh = {};
    Pe(bh, {
        actionListPlaybackChanged: () => Yt,
        animationFrameChanged: () => An,
        clearRequested: () => vN,
        elementStateChanged: () => Xo,
        eventListenerAdded: () => bn,
        eventStateChanged: () => Fo,
        instanceAdded: () => qo,
        instanceRemoved: () => Go,
        instanceStarted: () => wn,
        mediaQueriesDefined: () => Vo,
        parameterChanged: () => Kt,
        playbackRequested: () => yN,
        previewRequested: () => gN,
        rawDataImported: () => Po,
        sessionInitialized: () => No,
        sessionStarted: () => Mo,
        sessionStopped: () => Do,
        stopRequested: () => EN,
        testFrameRendered: () => mN,
        viewportWidthChanged: () => ko
    });
    var Th, KP, YP, $P, QP, ZP, JP, eN, tN, rN, nN, iN, oN, aN, sN, uN, cN, lN, fN, dN, pN, hN, Po, No, Mo, Do, gN, yN, EN, vN, bn, mN, Fo, An, Kt, qo, wn, Go, Xo, Yt, ko, Vo, Sn = he(() => {
        "use strict";
        Ne();
        Th = ce(Tt()), {
            IX2_RAW_DATA_IMPORTED: KP,
            IX2_SESSION_INITIALIZED: YP,
            IX2_SESSION_STARTED: $P,
            IX2_SESSION_STOPPED: QP,
            IX2_PREVIEW_REQUESTED: ZP,
            IX2_PLAYBACK_REQUESTED: JP,
            IX2_STOP_REQUESTED: eN,
            IX2_CLEAR_REQUESTED: tN,
            IX2_EVENT_LISTENER_ADDED: rN,
            IX2_TEST_FRAME_RENDERED: nN,
            IX2_EVENT_STATE_CHANGED: iN,
            IX2_ANIMATION_FRAME_CHANGED: oN,
            IX2_PARAMETER_CHANGED: aN,
            IX2_INSTANCE_ADDED: sN,
            IX2_INSTANCE_STARTED: uN,
            IX2_INSTANCE_REMOVED: cN,
            IX2_ELEMENT_STATE_CHANGED: lN,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: fN,
            IX2_VIEWPORT_WIDTH_CHANGED: dN,
            IX2_MEDIA_QUERIES_DEFINED: pN
        } = me, {
            reifyState: hN
        } = Th.IX2VanillaUtils, Po = e => ({
            type: KP,
            payload: { ...hN(e)
            }
        }), No = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: YP,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), Mo = () => ({
            type: $P
        }), Do = () => ({
            type: QP
        }), gN = ({
            rawData: e,
            defer: t
        }) => ({
            type: ZP,
            payload: {
                defer: t,
                rawData: e
            }
        }), yN = ({
            actionTypeId: e = Se.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: s,
            verbose: a,
            rawData: u
        }) => ({
            type: JP,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: s,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: a,
                rawData: u
            }
        }), EN = e => ({
            type: eN,
            payload: {
                actionListId: e
            }
        }), vN = () => ({
            type: tN
        }), bn = (e, t) => ({
            type: rN,
            payload: {
                target: e,
                listenerParams: t
            }
        }), mN = (e = 1) => ({
            type: nN,
            payload: {
                step: e
            }
        }), Fo = (e, t) => ({
            type: iN,
            payload: {
                stateKey: e,
                newState: t
            }
        }), An = (e, t) => ({
            type: oN,
            payload: {
                now: e,
                parameters: t
            }
        }), Kt = (e, t) => ({
            type: aN,
            payload: {
                key: e,
                value: t
            }
        }), qo = e => ({
            type: sN,
            payload: { ...e
            }
        }), wn = (e, t) => ({
            type: uN,
            payload: {
                instanceId: e,
                time: t
            }
        }), Go = e => ({
            type: cN,
            payload: {
                instanceId: e
            }
        }), Xo = (e, t, r, n) => ({
            type: lN,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), Yt = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: fN,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), ko = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: dN,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), Vo = () => ({
            type: pN
        })
    });
    var xe = {};
    Pe(xe, {
        elementContains: () => Wo,
        getChildElements: () => RN,
        getClosestElement: () => br,
        getProperty: () => AN,
        getQuerySelector: () => Bo,
        getRefType: () => Ho,
        getSiblingElements: () => CN,
        getStyle: () => bN,
        getValidDocument: () => SN,
        isSiblingNode: () => xN,
        matchSelector: () => wN,
        queryDocument: () => ON,
        setStyle: () => TN
    });

    function TN(e, t, r) {
        e.style[t] = r
    }

    function bN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function AN(e, t) {
        return e[t]
    }

    function wN(e) {
        return t => t[Uo](e)
    }

    function Bo({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(Ah) !== -1) {
                let n = e.split(Ah),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(Sh)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function SN(e) {
        return e == null || e === document.documentElement.getAttribute(Sh) ? document : null
    }

    function ON(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function Wo(e, t) {
        return e.contains(t)
    }

    function xN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function RN(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let s = 0; s < o; s++) t.push(i[s])
        }
        return t
    }

    function CN(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let s = o.firstElementChild;
            for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
        }
        return t
    }

    function Ho(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? _N : IN : null
    }
    var wh, Uo, Ah, _N, IN, Sh, br, Oh = he(() => {
        "use strict";
        wh = ce(Tt());
        Ne();
        ({
            ELEMENT_MATCHES: Uo
        } = wh.IX2BrowserSupport), {
            IX2_ID_DELIMITER: Ah,
            HTML_ELEMENT: _N,
            PLAIN_OBJECT: IN,
            WF_PAGE: Sh
        } = Te;
        br = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[Uo] && r[Uo](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var zo = f((BG, Rh) => {
        var LN = Ze(),
            xh = Object.create,
            PN = function() {
                function e() {}
                return function(t) {
                    if (!LN(t)) return {};
                    if (xh) return xh(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        Rh.exports = PN
    });
    var On = f((WG, Ch) => {
        function NN() {}
        Ch.exports = NN
    });
    var Rn = f((HG, Lh) => {
        var MN = zo(),
            DN = On();

        function xn(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        xn.prototype = MN(DN.prototype);
        xn.prototype.constructor = xn;
        Lh.exports = xn
    });
    var Dh = f((zG, Mh) => {
        var Ph = St(),
            FN = ar(),
            qN = Ie(),
            Nh = Ph ? Ph.isConcatSpreadable : void 0;

        function GN(e) {
            return qN(e) || FN(e) || !!(Nh && e && e[Nh])
        }
        Mh.exports = GN
    });
    var Gh = f((jG, qh) => {
        var XN = zr(),
            kN = Dh();

        function Fh(e, t, r, n, i) {
            var o = -1,
                s = e.length;
            for (r || (r = kN), i || (i = []); ++o < s;) {
                var a = e[o];
                t > 0 && r(a) ? t > 1 ? Fh(a, t - 1, r, n, i) : XN(i, a) : n || (i[i.length] = a)
            }
            return i
        }
        qh.exports = Fh
    });
    var kh = f((KG, Xh) => {
        var VN = Gh();

        function UN(e) {
            var t = e == null ? 0 : e.length;
            return t ? VN(e, 1) : []
        }
        Xh.exports = UN
    });
    var Uh = f((YG, Vh) => {
        function BN(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Vh.exports = BN
    });
    var Hh = f(($G, Wh) => {
        var WN = Uh(),
            Bh = Math.max;

        function HN(e, t, r) {
            return t = Bh(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = Bh(n.length - t, 0), s = Array(o); ++i < o;) s[i] = n[t + i];
                    i = -1;
                    for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
                    return a[t] = r(s), WN(e, this, a)
                }
        }
        Wh.exports = HN
    });
    var jh = f((QG, zh) => {
        function zN(e) {
            return function() {
                return e
            }
        }
        zh.exports = zN
    });
    var $h = f((ZG, Yh) => {
        var jN = jh(),
            Kh = Ro(),
            KN = on(),
            YN = Kh ? function(e, t) {
                return Kh(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: jN(t),
                    writable: !0
                })
            } : KN;
        Yh.exports = YN
    });
    var Zh = f((JG, Qh) => {
        var $N = 800,
            QN = 16,
            ZN = Date.now;

        function JN(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = ZN(),
                    i = QN - (n - r);
                if (r = n, i > 0) {
                    if (++t >= $N) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        Qh.exports = JN
    });
    var eg = f((eX, Jh) => {
        var eM = $h(),
            tM = Zh(),
            rM = tM(eM);
        Jh.exports = rM
    });
    var rg = f((tX, tg) => {
        var nM = kh(),
            iM = Hh(),
            oM = eg();

        function aM(e) {
            return oM(iM(e, void 0, nM), e + "")
        }
        tg.exports = aM
    });
    var og = f((rX, ig) => {
        var ng = Li(),
            sM = ng && new ng;
        ig.exports = sM
    });
    var sg = f((nX, ag) => {
        function uM() {}
        ag.exports = uM
    });
    var jo = f((iX, cg) => {
        var ug = og(),
            cM = sg(),
            lM = ug ? function(e) {
                return ug.get(e)
            } : cM;
        cg.exports = lM
    });
    var fg = f((oX, lg) => {
        var fM = {};
        lg.exports = fM
    });
    var Ko = f((aX, pg) => {
        var dg = fg(),
            dM = Object.prototype,
            pM = dM.hasOwnProperty;

        function hM(e) {
            for (var t = e.name + "", r = dg[t], n = pM.call(dg, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        pg.exports = hM
    });
    var Ln = f((sX, hg) => {
        var gM = zo(),
            yM = On(),
            EM = 4294967295;

        function Cn(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = EM, this.__views__ = []
        }
        Cn.prototype = gM(yM.prototype);
        Cn.prototype.constructor = Cn;
        hg.exports = Cn
    });
    var yg = f((uX, gg) => {
        function vM(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        gg.exports = vM
    });
    var vg = f((cX, Eg) => {
        var mM = Ln(),
            _M = Rn(),
            IM = yg();

        function TM(e) {
            if (e instanceof mM) return e.clone();
            var t = new _M(e.__wrapped__, e.__chain__);
            return t.__actions__ = IM(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        Eg.exports = TM
    });
    var Ig = f((lX, _g) => {
        var bM = Ln(),
            mg = Rn(),
            AM = On(),
            wM = Ie(),
            SM = nt(),
            OM = vg(),
            xM = Object.prototype,
            RM = xM.hasOwnProperty;

        function Pn(e) {
            if (SM(e) && !wM(e) && !(e instanceof bM)) {
                if (e instanceof mg) return e;
                if (RM.call(e, "__wrapped__")) return OM(e)
            }
            return new mg(e)
        }
        Pn.prototype = AM.prototype;
        Pn.prototype.constructor = Pn;
        _g.exports = Pn
    });
    var bg = f((fX, Tg) => {
        var CM = Ln(),
            LM = jo(),
            PM = Ko(),
            NM = Ig();

        function MM(e) {
            var t = PM(e),
                r = NM[t];
            if (typeof r != "function" || !(t in CM.prototype)) return !1;
            if (e === r) return !0;
            var n = LM(r);
            return !!n && e === n[0]
        }
        Tg.exports = MM
    });
    var Og = f((dX, Sg) => {
        var Ag = Rn(),
            DM = rg(),
            FM = jo(),
            Yo = Ko(),
            qM = Ie(),
            wg = bg(),
            GM = "Expected a function",
            XM = 8,
            kM = 32,
            VM = 128,
            UM = 256;

        function BM(e) {
            return DM(function(t) {
                var r = t.length,
                    n = r,
                    i = Ag.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(GM);
                    if (i && !s && Yo(o) == "wrapper") var s = new Ag([], !0)
                }
                for (n = s ? n : r; ++n < r;) {
                    o = t[n];
                    var a = Yo(o),
                        u = a == "wrapper" ? FM(o) : void 0;
                    u && wg(u[0]) && u[1] == (VM | XM | kM | UM) && !u[4].length && u[9] == 1 ? s = s[Yo(u[0])].apply(s, u[3]) : s = o.length == 1 && wg(o) ? s[a]() : s.thru(o)
                }
                return function() {
                    var l = arguments,
                        E = l[0];
                    if (s && l.length == 1 && qM(E)) return s.plant(E).value();
                    for (var g = 0, d = r ? t[g].apply(this, l) : E; ++g < r;) d = t[g].call(this, d);
                    return d
                }
            })
        }
        Sg.exports = BM
    });
    var Rg = f((pX, xg) => {
        var WM = Og(),
            HM = WM();
        xg.exports = HM
    });
    var Lg = f((hX, Cg) => {
        function zM(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Cg.exports = zM
    });
    var Ng = f((gX, Pg) => {
        var jM = Lg(),
            $o = an();

        function KM(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = $o(r), r = r === r ? r : 0), t !== void 0 && (t = $o(t), t = t === t ? t : 0), jM($o(e), t, r)
        }
        Pg.exports = KM
    });
    var Ug, Bg, Wg, Hg, YM, $M, QM, ZM, JM, eD, tD, rD, nD, iD, oD, aD, sD, uD, cD, zg, jg, lD, fD, dD, Kg, pD, hD, Yg, gD, Qo, $g, Mg, Dg, Qg, wr, yD, tt, Zg, ED, De, ze, Sr, Jg, Zo, Fg, Jo, vD, Ar, mD, _D, ID, ey, qg, TD, Gg, bD, AD, wD, Xg, Nn, Mn, kg, Vg, ty, ry = he(() => {
        "use strict";
        Ug = ce(Rg()), Bg = ce(nn()), Wg = ce(Ng());
        Ne();
        ea();
        Sn();
        Hg = ce(Tt()), {
            MOUSE_CLICK: YM,
            MOUSE_SECOND_CLICK: $M,
            MOUSE_DOWN: QM,
            MOUSE_UP: ZM,
            MOUSE_OVER: JM,
            MOUSE_OUT: eD,
            DROPDOWN_CLOSE: tD,
            DROPDOWN_OPEN: rD,
            SLIDER_ACTIVE: nD,
            SLIDER_INACTIVE: iD,
            TAB_ACTIVE: oD,
            TAB_INACTIVE: aD,
            NAVBAR_CLOSE: sD,
            NAVBAR_OPEN: uD,
            MOUSE_MOVE: cD,
            PAGE_SCROLL_DOWN: zg,
            SCROLL_INTO_VIEW: jg,
            SCROLL_OUT_OF_VIEW: lD,
            PAGE_SCROLL_UP: fD,
            SCROLLING_IN_VIEW: dD,
            PAGE_FINISH: Kg,
            ECOMMERCE_CART_CLOSE: pD,
            ECOMMERCE_CART_OPEN: hD,
            PAGE_START: Yg,
            PAGE_SCROLL: gD
        } = We, Qo = "COMPONENT_ACTIVE", $g = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: Mg
        } = Te, {
            getNamespacedParameterId: Dg
        } = Hg.IX2VanillaUtils, Qg = e => t => typeof t == "object" && e(t) ? !0 : t, wr = Qg(({
            element: e,
            nativeEvent: t
        }) => e === t.target), yD = Qg(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), tt = (0, Ug.default)([wr, yD]), Zg = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !vD[i.eventTypeId]) return i
            }
            return null
        }, ED = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!Zg(e, n)
        }, De = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: s
            } = t, {
                actionListId: a,
                autoStopEventId: u
            } = o.config, l = Zg(e, u);
            return l && $t({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Mg + n.split(Mg)[1],
                actionListId: (0, Bg.default)(l, "action.config.actionListId")
            }), $t({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), Or({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), i
        }, ze = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Sr = {
            handler: ze(tt, De)
        }, Jg = { ...Sr,
            types: [Qo, $g].join(" ")
        }, Zo = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], Fg = "mouseover mouseout", Jo = {
            types: Zo
        }, vD = {
            PAGE_START: Yg,
            PAGE_FINISH: Kg
        }, Ar = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, Wg.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), mD = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), _D = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let s = e.contains(i);
            return !!(r === "mouseout" && o && s)
        }, ID = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = Ar(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return mD(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, ey = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [Qo, $g].indexOf(n) !== -1 ? n === Qo : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, qg = e => (t, r) => {
            let n = {
                elementHovered: _D(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, TD = e => (t, r) => {
            let n = { ...r,
                elementVisible: ID(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, Gg = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = Ar(), {
                event: {
                    config: s,
                    eventTypeId: a
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: l
            } = s, E = l === "PX", g = i - o, d = Number((n / g).toFixed(2));
            if (r && r.percentTop === d) return r;
            let v = (E ? u : o * (u || 0) / 100) / g,
                I, _, w = 0;
            r && (I = d > r.percentTop, _ = r.scrollingDown !== I, w = _ ? d : r.anchorTop);
            let T = a === zg ? d >= w + v : d <= w - v,
                x = { ...r,
                    percentTop: d,
                    inBounds: T,
                    anchorTop: w,
                    scrollingDown: I
                };
            return r && T && (_ || x.inBounds !== r.inBounds) && e(t, x) || x
        }, bD = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, AD = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, wD = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, Xg = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, Nn = (e = !0) => ({ ...Jg,
            handler: ze(e ? tt : wr, ey((t, r) => r.isActive ? Sr.handler(t, r) : r))
        }), Mn = (e = !0) => ({ ...Jg,
            handler: ze(e ? tt : wr, ey((t, r) => r.isActive ? r : Sr.handler(t, r)))
        }), kg = { ...Jo,
            handler: TD((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: s
                } = o;
                return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === jg === r ? (De(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, Vg = .05, ty = {
            [nD]: Nn(),
            [iD]: Mn(),
            [rD]: Nn(),
            [tD]: Mn(),
            [uD]: Nn(!1),
            [sD]: Mn(!1),
            [oD]: Nn(),
            [aD]: Mn(),
            [hD]: {
                types: "ecommerce-cart-open",
                handler: ze(tt, De)
            },
            [pD]: {
                types: "ecommerce-cart-close",
                handler: ze(tt, De)
            },
            [YM]: {
                types: "click",
                handler: ze(tt, Xg((e, {
                    clickCount: t
                }) => {
                    ED(e) ? t === 1 && De(e) : De(e)
                }))
            },
            [$M]: {
                types: "click",
                handler: ze(tt, Xg((e, {
                    clickCount: t
                }) => {
                    t === 2 && De(e)
                }))
            },
            [QM]: { ...Sr,
                types: "mousedown"
            },
            [ZM]: { ...Sr,
                types: "mouseup"
            },
            [JM]: {
                types: Fg,
                handler: ze(tt, qg((e, t) => {
                    t.elementHovered && De(e)
                }))
            },
            [eD]: {
                types: Fg,
                handler: ze(tt, qg((e, t) => {
                    t.elementHovered || De(e)
                }))
            },
            [cD]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: s,
                        selectedAxis: a,
                        continuousParameterGroupId: u,
                        reverse: l,
                        restingState: E = 0
                    } = r, {
                        clientX: g = o.clientX,
                        clientY: d = o.clientY,
                        pageX: v = o.pageX,
                        pageY: I = o.pageY
                    } = n, _ = a === "X_AXIS", w = n.type === "mouseout", T = E / 100, x = u, O = !1;
                    switch (s) {
                        case Qe.VIEWPORT:
                            {
                                T = _ ? Math.min(g, window.innerWidth) / window.innerWidth : Math.min(d, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case Qe.PAGE:
                            {
                                let {
                                    scrollLeft: P,
                                    scrollTop: N,
                                    scrollWidth: R,
                                    scrollHeight: k
                                } = Ar();T = _ ? Math.min(P + v, R) / R : Math.min(N + I, k) / k;
                                break
                            }
                        case Qe.ELEMENT:
                        default:
                            {
                                x = Dg(i, u);
                                let P = n.type.indexOf("mouse") === 0;
                                if (P && tt({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let N = t.getBoundingClientRect(),
                                    {
                                        left: R,
                                        top: k,
                                        width: U,
                                        height: B
                                    } = N;
                                if (!P && !bD({
                                        left: g,
                                        top: d
                                    }, N)) break;O = !0,
                                T = _ ? (g - R) / U : (d - k) / B;
                                break
                            }
                    }
                    return w && (T > 1 - Vg || T < Vg) && (T = Math.round(T)), (s !== Qe.ELEMENT || O || O !== o.elementHovered) && (T = l ? 1 - T : T, e.dispatch(Kt(x, T))), {
                        elementHovered: O,
                        clientX: g,
                        clientY: d,
                        pageX: v,
                        pageY: I
                    }
                }
            },
            [gD]: {
                types: Zo,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: s
                    } = Ar(), a = i / (o - s);
                    a = n ? 1 - a : a, e.dispatch(Kt(r, a))
                }
            },
            [dD]: {
                types: Zo,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: s,
                        scrollWidth: a,
                        scrollHeight: u,
                        clientHeight: l
                    } = Ar(), {
                        basedOn: E,
                        selectedAxis: g,
                        continuousParameterGroupId: d,
                        startsEntering: v,
                        startsExiting: I,
                        addEndOffset: _,
                        addStartOffset: w,
                        addOffsetValue: T = 0,
                        endOffsetValue: x = 0
                    } = r, O = g === "X_AXIS";
                    if (E === Qe.VIEWPORT) {
                        let P = O ? o / a : s / u;
                        return P !== i.scrollPercent && t.dispatch(Kt(d, P)), {
                            scrollPercent: P
                        }
                    } else {
                        let P = Dg(n, d),
                            N = e.getBoundingClientRect(),
                            R = (w ? T : 0) / 100,
                            k = (_ ? x : 0) / 100;
                        R = v ? R : 1 - R, k = I ? k : 1 - k;
                        let U = N.top + Math.min(N.height * R, l),
                            z = N.top + N.height * k - U,
                            J = Math.min(l + z, u),
                            A = Math.min(Math.max(0, l - U), J) / J;
                        return A !== i.scrollPercent && t.dispatch(Kt(P, A)), {
                            scrollPercent: A
                        }
                    }
                }
            },
            [jg]: kg,
            [lD]: kg,
            [zg]: { ...Jo,
                handler: Gg((e, t) => {
                    t.scrollingDown && De(e)
                })
            },
            [fD]: { ...Jo,
                handler: Gg((e, t) => {
                    t.scrollingDown || De(e)
                })
            },
            [Kg]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: ze(wr, AD(De))
            },
            [Yg]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: ze(wr, wD(De))
            }
        }
    });
    var my = {};
    Pe(my, {
        observeRequests: () => HD,
        startActionGroup: () => Or,
        startEngine: () => kn,
        stopActionGroup: () => $t,
        stopAllActionGroups: () => yy,
        stopEngine: () => Vn
    });

    function HD(e) {
        bt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: KD
        }), bt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: YD
        }), bt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: $D
        }), bt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: QD
        })
    }

    function zD(e) {
        bt({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Vn(e), dy({
                    store: e,
                    elementApi: xe
                }), kn({
                    store: e,
                    allowEvents: !0
                }), py()
            }
        })
    }

    function jD(e, t) {
        let r = bt({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function KD({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            kn({
                store: r,
                rawData: e,
                allowEvents: !0
            }), py()
        };
        t ? setTimeout(n, 0) : n()
    }

    function py() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function YD(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: s,
            immediate: a,
            testManual: u,
            verbose: l = !0
        } = e, {
            rawData: E
        } = e;
        if (n && i && E && a) {
            let g = E.actionLists[n];
            g && (E = MD({
                actionList: g,
                actionItemId: i,
                rawData: E
            }))
        }
        if (kn({
                store: t,
                rawData: E,
                allowEvents: s,
                testManual: u
            }), n && r === Se.GENERAL_START_ACTION || ta(r)) {
            $t({
                store: t,
                actionListId: n
            }), gy({
                store: t,
                actionListId: n,
                eventId: o
            });
            let g = Or({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: a,
                verbose: l
            });
            l && g && t.dispatch(Yt({
                actionListId: n,
                isPlaying: !a
            }))
        }
    }

    function $D({
        actionListId: e
    }, t) {
        e ? $t({
            store: t,
            actionListId: e
        }) : yy({
            store: t
        }), Vn(t)
    }

    function QD(e, t) {
        Vn(t), dy({
            store: t,
            elementApi: xe
        })
    }

    function kn({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(Po(t)), i.active || (e.dispatch(No({
            hasBoundaryNodes: !!document.querySelector(Fn),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (nF(e), ZD(), e.getState().ixSession.hasDefinedMediaQueries && zD(e)), e.dispatch(Mo()), JD(e, n))
    }

    function ZD() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(ny) === -1 && (e.className += ` ${ny}`)
    }

    function JD(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(An(n, o)), t ? jD(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Vn(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(eF), GD(), e.dispatch(Do())
        }
    }

    function eF({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function tF({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: s,
        smoothing: a,
        restingValue: u
    }) {
        let {
            ixData: l,
            ixSession: E
        } = e.getState(), {
            events: g
        } = l, d = g[n], {
            eventTypeId: v
        } = d, I = {}, _ = {}, w = [], {
            continuousActionGroups: T
        } = s, {
            id: x
        } = s;
        DD(v, i) && (x = FD(t, x));
        let O = E.hasBoundaryNodes && r ? br(r, Fn) : null;
        T.forEach(P => {
            let {
                keyframe: N,
                actionItems: R
            } = P;
            R.forEach(k => {
                let {
                    actionTypeId: U
                } = k, {
                    target: B
                } = k.config;
                if (!B) return;
                let z = B.boundaryMode ? O : null,
                    J = XD(B) + ra + U;
                if (_[J] = rF(_[J], N, k), !I[J]) {
                    I[J] = !0;
                    let {
                        config: D
                    } = k;
                    qn({
                        config: D,
                        event: d,
                        eventTarget: r,
                        elementRoot: z,
                        elementApi: xe
                    }).forEach(A => {
                        w.push({
                            element: A,
                            key: J
                        })
                    })
                }
            })
        }), w.forEach(({
            element: P,
            key: N
        }) => {
            let R = _[N],
                k = (0, st.default)(R, "[0].actionItems[0]", {}),
                {
                    actionTypeId: U
                } = k,
                z = (U === Se.PLUGIN_RIVE ? (k.config ? .target ? .selectorGuids || []).length === 0 : Xn(U)) ? ia(U)(P, k) : null,
                J = na({
                    element: P,
                    actionItem: k,
                    elementApi: xe
                }, z);
            oa({
                store: e,
                element: P,
                eventId: n,
                actionListId: o,
                actionItem: k,
                destination: J,
                continuous: !0,
                parameterId: x,
                actionGroups: R,
                smoothing: a,
                restingValue: u,
                pluginInstance: z
            })
        })
    }

    function rF(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, s) => o.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function nF(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        hy(e), (0, Qt.default)(r, (i, o) => {
            let s = ty[o];
            if (!s) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            cF({
                logic: s,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && oF(e)
    }

    function oF(e) {
        let t = () => {
            hy(e)
        };
        iF.forEach(r => {
            window.addEventListener(r, t), e.dispatch(bn(window, [r, t]))
        }), t()
    }

    function hy(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(ko({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function cF({
        logic: e,
        store: t,
        events: r
    }) {
        lF(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: s
        } = o, a = aF(r, uF);
        if (!(0, ay.default)(a)) return;
        (0, Qt.default)(a, (g, d) => {
            let v = r[d],
                {
                    action: I,
                    id: _,
                    mediaQueries: w = o.mediaQueryKeys
                } = v,
                {
                    actionListId: T
                } = I.config;
            kD(w, o.mediaQueryKeys) || t.dispatch(Vo()), I.actionTypeId === Se.GENERAL_CONTINUOUS_ACTION && (Array.isArray(v.config) ? v.config : [v.config]).forEach(O => {
                let {
                    continuousParameterGroupId: P
                } = O, N = (0, st.default)(s, `${T}.continuousParameterGroups`, []), R = (0, oy.default)(N, ({
                    id: B
                }) => B === P), k = (O.smoothing || 0) / 100, U = (O.restingState || 0) / 100;
                R && g.forEach((B, z) => {
                    let J = _ + ra + z;
                    tF({
                        store: t,
                        eventStateKey: J,
                        eventTarget: B,
                        eventId: _,
                        eventConfig: O,
                        actionListId: T,
                        parameterGroup: R,
                        smoothing: k,
                        restingValue: U
                    })
                })
            }), (I.actionTypeId === Se.GENERAL_START_ACTION || ta(I.actionTypeId)) && gy({
                store: t,
                actionListId: T,
                eventId: _
            })
        });
        let u = g => {
                let {
                    ixSession: d
                } = t.getState();
                sF(a, (v, I, _) => {
                    let w = r[I],
                        T = d.eventState[_],
                        {
                            action: x,
                            mediaQueries: O = o.mediaQueryKeys
                        } = w;
                    if (!Gn(O, d.mediaQueryKey)) return;
                    let P = (N = {}) => {
                        let R = i({
                            store: t,
                            element: v,
                            event: w,
                            eventConfig: N,
                            nativeEvent: g,
                            eventStateKey: _
                        }, T);
                        VD(R, T) || t.dispatch(Fo(_, R))
                    };
                    x.actionTypeId === Se.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(w.config) ? w.config : [w.config]).forEach(P) : P()
                })
            },
            l = (0, ly.default)(u, WD),
            E = ({
                target: g = document,
                types: d,
                throttle: v
            }) => {
                d.split(" ").filter(Boolean).forEach(I => {
                    let _ = v ? l : u;
                    g.addEventListener(I, _), t.dispatch(bn(g, [I, _]))
                })
            };
        Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e)
    }

    function lF(e) {
        if (!BD) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], s = Bo(o);
            t[s] || (i === We.MOUSE_CLICK || i === We.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function gy({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: s
        } = n, a = s[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0, st.default)(u, "actionItemGroups[0].actionItems", []),
                E = (0, st.default)(a, "mediaQueries", n.mediaQueryKeys);
            if (!Gn(E, i.mediaQueryKey)) return;
            l.forEach(g => {
                let {
                    config: d,
                    actionTypeId: v
                } = g, I = d ? .target ? .useEventTarget === !0 && d ? .target ? .objectId == null ? {
                    target: a.target,
                    targets: a.targets
                } : d, _ = qn({
                    config: I,
                    event: a,
                    elementApi: xe
                }), w = Xn(v);
                _.forEach(T => {
                    let x = w ? ia(v)(T, g) : null;
                    oa({
                        destination: na({
                            element: T,
                            actionItem: g,
                            elementApi: xe
                        }, x),
                        immediate: !0,
                        store: e,
                        element: T,
                        eventId: r,
                        actionItem: g,
                        actionListId: t,
                        pluginInstance: x
                    })
                })
            })
        }
    }

    function yy({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, Qt.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                aa(r, e), i && e.dispatch(Yt({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function $t({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: s
        } = e.getState(), a = s.hasBoundaryNodes && r ? br(r, Fn) : null;
        (0, Qt.default)(o, u => {
            let l = (0, st.default)(u, "actionItem.config.target.boundaryMode"),
                E = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && E) {
                if (a && l && !Wo(a, u.element)) return;
                aa(u, e), u.verbose && e.dispatch(Yt({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function Or({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: s,
        verbose: a
    }) {
        let {
            ixData: u,
            ixSession: l
        } = e.getState(), {
            events: E
        } = u, g = E[t] || {}, {
            mediaQueries: d = u.mediaQueryKeys
        } = g, v = (0, st.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: I,
            useFirstGroupAsInitialState: _
        } = v;
        if (!I || !I.length) return !1;
        o >= I.length && (0, st.default)(g, "config.loop") && (o = 0), o === 0 && _ && o++;
        let T = (o === 0 || o === 1 && _) && ta(g.action ? .actionTypeId) ? g.config.delay : void 0,
            x = (0, st.default)(I, [o, "actionItems"], []);
        if (!x.length || !Gn(d, l.mediaQueryKey)) return !1;
        let O = l.hasBoundaryNodes && r ? br(r, Fn) : null,
            P = LD(x),
            N = !1;
        return x.forEach((R, k) => {
            let {
                config: U,
                actionTypeId: B
            } = R, z = Xn(B), {
                target: J
            } = U;
            if (!J) return;
            let D = J.boundaryMode ? O : null;
            qn({
                config: U,
                event: g,
                eventTarget: r,
                elementRoot: D,
                elementApi: xe
            }).forEach((M, W) => {
                let V = z ? ia(B)(M, R) : null,
                    te = z ? UD(B)(M, R) : null;
                N = !0;
                let ee = P === k && W === 0,
                    ue = PD({
                        element: M,
                        actionItem: R
                    }),
                    _e = na({
                        element: M,
                        actionItem: R,
                        elementApi: xe
                    }, V);
                oa({
                    store: e,
                    element: M,
                    actionItem: R,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: ee,
                    computedStyle: ue,
                    destination: _e,
                    immediate: s,
                    verbose: a,
                    pluginInstance: V,
                    pluginDuration: te,
                    instanceDelay: T
                })
            })
        }), N
    }

    function oa(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: s,
            pluginInstance: a,
            continuous: u,
            restingValue: l,
            eventId: E
        } = n, g = !u, d = RD(), {
            ixElements: v,
            ixSession: I,
            ixData: _
        } = t.getState(), w = xD(v, i), {
            refState: T
        } = v[w] || {}, x = Ho(i), O = I.reducedMotion && vi[o.actionTypeId], P;
        if (O && u) switch (_.events[E] ? .eventTypeId) {
            case We.MOUSE_MOVE:
            case We.MOUSE_MOVE_IN_VIEWPORT:
                P = l;
                break;
            default:
                P = .5;
                break
        }
        let N = ND(i, T, r, o, xe, a);
        if (t.dispatch(qo({
                instanceId: d,
                elementId: w,
                origin: N,
                refType: x,
                skipMotion: O,
                skipToValue: P,
                ...n
            })), Ey(document.body, "ix2-animation-started", d), s) {
            fF(t, d);
            return
        }
        bt({
            store: t,
            select: ({
                ixInstances: R
            }) => R[d],
            onChange: vy
        }), g && t.dispatch(wn(d, I.tick))
    }

    function aa(e, t) {
        Ey(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: s
        } = i[r] || {};
        s === fy && qD(o, n, xe), t.dispatch(Go(e.id))
    }

    function Ey(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function fF(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(wn(t, 0)), e.dispatch(An(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        vy(n[t], e)
    }

    function vy(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: s,
            actionTypeId: a,
            renderType: u,
            current: l,
            groupIndex: E,
            eventId: g,
            eventTarget: d,
            eventStateKey: v,
            actionListId: I,
            isCarrier: _,
            styleProp: w,
            verbose: T,
            pluginInstance: x
        } = e, {
            ixData: O,
            ixSession: P
        } = t.getState(), {
            events: N
        } = O, R = N && N[g] ? N[g] : {}, {
            mediaQueries: k = O.mediaQueryKeys
        } = R;
        if (Gn(k, P.mediaQueryKey) && (n || r || i)) {
            if (l || u === OD && i) {
                t.dispatch(Xo(o, a, l, s));
                let {
                    ixElements: U
                } = t.getState(), {
                    ref: B,
                    refType: z,
                    refState: J
                } = U[o] || {}, D = J && J[a];
                (z === fy || Xn(a)) && CD(B, J, D, g, s, w, xe, u, x)
            }
            if (i) {
                if (_) {
                    let U = Or({
                        store: t,
                        eventId: g,
                        eventTarget: d,
                        eventStateKey: v,
                        actionListId: I,
                        groupIndex: E + 1,
                        verbose: T
                    });
                    T && !U && t.dispatch(Yt({
                        actionListId: I,
                        isPlaying: !1
                    }))
                }
                aa(e, t)
            }
        }
    }
    var oy, st, ay, sy, uy, cy, Qt, ly, Dn, SD, ta, ra, Fn, fy, OD, ny, qn, xD, na, bt, RD, CD, dy, LD, PD, ND, MD, DD, FD, Gn, qD, GD, XD, kD, VD, Xn, ia, UD, iy, BD, WD, iF, aF, sF, uF, ea = he(() => {
        "use strict";
        oy = ce(ji()), st = ce(nn()), ay = ce(Pp()), sy = ce(ih()), uy = ce(ah()), cy = ce(uh()), Qt = ce(hh()), ly = ce(Ih());
        Ne();
        Dn = ce(Tt());
        Sn();
        Oh();
        ry();
        SD = Object.keys(Dr), ta = e => SD.includes(e), {
            COLON_DELIMITER: ra,
            BOUNDARY_SELECTOR: Fn,
            HTML_ELEMENT: fy,
            RENDER_GENERAL: OD,
            W_MOD_IX: ny
        } = Te, {
            getAffectedElements: qn,
            getElementId: xD,
            getDestinationValues: na,
            observeStore: bt,
            getInstanceId: RD,
            renderHTMLElement: CD,
            clearAllStyles: dy,
            getMaxDurationItemIndex: LD,
            getComputedStyle: PD,
            getInstanceOrigin: ND,
            reduceListToGroup: MD,
            shouldNamespaceEventParameter: DD,
            getNamespacedParameterId: FD,
            shouldAllowMediaQuery: Gn,
            cleanupHTMLElement: qD,
            clearObjectCache: GD,
            stringifyTarget: XD,
            mediaQueriesEqual: kD,
            shallowEqual: VD
        } = Dn.IX2VanillaUtils, {
            isPluginType: Xn,
            createPluginInstance: ia,
            getPluginDuration: UD
        } = Dn.IX2VanillaPlugins, iy = navigator.userAgent, BD = iy.match(/iPad/i) || iy.match(/iPhone/), WD = 12;
        iF = ["resize", "orientationchange"];
        aF = (e, t) => (0, sy.default)((0, cy.default)(e, t), uy.default), sF = (e, t) => {
            (0, Qt.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let s = n + ra + o;
                    t(i, n, s)
                })
            })
        }, uF = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return qn({
                config: t,
                elementApi: xe
            })
        }
    });
    var Ty = f(ua => {
        "use strict";
        Object.defineProperty(ua, "__esModule", {
            value: !0
        });

        function dF(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        dF(ua, {
            actions: function() {
                return gF
            },
            destroy: function() {
                return Iy
            },
            init: function() {
                return mF
            },
            setEnv: function() {
                return vF
            },
            store: function() {
                return Un
            }
        });
        var pF = gi(),
            hF = yF((pp(), Ke(dp))),
            sa = (ea(), Ke(my)),
            gF = EF((Sn(), Ke(bh)));

        function yF(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function _y(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (_y = function(n) {
                return n ? r : t
            })(e)
        }

        function EF(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var r = _y(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        var Un = (0, pF.createStore)(hF.default);

        function vF(e) {
            e() && (0, sa.observeRequests)(Un)
        }

        function mF(e) {
            Iy(), (0, sa.startEngine)({
                store: Un,
                rawData: e,
                allowEvents: !0
            })
        }

        function Iy() {
            (0, sa.stopEngine)(Un)
        }
    });
    var Sy = f((wX, wy) => {
        "use strict";
        var by = Ue(),
            Ay = Ty();
        Ay.setEnv(by.env);
        by.define("ix2", wy.exports = function() {
            return Ay
        })
    });
    var xy = f((SX, Oy) => {
        "use strict";
        var Zt = Ue();
        Zt.define("links", Oy.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = Zt.env(),
                s = window.location,
                a = document.createElement("a"),
                u = "w--current",
                l = /index\.(html|php)$/,
                E = /\/$/,
                g, d;
            r.ready = r.design = r.preview = v;

            function v() {
                i = o && Zt.env("design"), d = Zt.env("slug") || s.pathname || "", Zt.scroll.off(_), g = [];
                for (var T = document.links, x = 0; x < T.length; ++x) I(T[x]);
                g.length && (Zt.scroll.on(_), _())
            }

            function I(T) {
                if (!T.getAttribute("hreflang")) {
                    var x = i && T.getAttribute("href-disabled") || T.getAttribute("href");
                    if (a.href = x, !(x.indexOf(":") >= 0)) {
                        var O = e(T);
                        if (a.hash.length > 1 && a.host + a.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                            var P = e(a.hash);
                            P.length && g.push({
                                link: O,
                                sec: P,
                                active: !1
                            });
                            return
                        }
                        if (!(x === "#" || x === "")) {
                            var N = a.href === s.href || x === d || l.test(x) && E.test(d);
                            w(O, u, N)
                        }
                    }
                }
            }

            function _() {
                var T = n.scrollTop(),
                    x = n.height();
                t.each(g, function(O) {
                    if (!O.link.attr("hreflang")) {
                        var P = O.link,
                            N = O.sec,
                            R = N.offset().top,
                            k = N.outerHeight(),
                            U = x * .5,
                            B = N.is(":visible") && R + k - U >= T && R + U <= T + x;
                        O.active !== B && (O.active = B, w(P, u, B))
                    }
                })
            }

            function w(T, x, O) {
                var P = T.hasClass(x);
                O && P || !O && !P || (O ? T.addClass(x) : T.removeClass(x))
            }
            return r
        })
    });
    var Cy = f((OX, Ry) => {
        "use strict";
        var Bn = Ue();
        Bn.define("scroll", Ry.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = I() ? null : window.history,
                i = e(window),
                o = e(document),
                s = e(document.body),
                a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(D) {
                    window.setTimeout(D, 15)
                },
                u = Bn.env("editor") ? ".w-editor-body" : "body",
                l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                E = 'a[href="#"]',
                g = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
                d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                v = document.createElement("style");
            v.appendChild(document.createTextNode(d));

            function I() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;

            function w(D) {
                return _.test(D.hash) && D.host + D.pathname === r.host + r.pathname
            }
            let T = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function x() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || T.matches
            }

            function O(D, A) {
                var M;
                switch (A) {
                    case "add":
                        M = D.attr("tabindex"), M ? D.attr("data-wf-tabindex-swap", M) : D.attr("tabindex", "-1");
                        break;
                    case "remove":
                        M = D.attr("data-wf-tabindex-swap"), M ? (D.attr("tabindex", M), D.removeAttr("data-wf-tabindex-swap")) : D.removeAttr("tabindex");
                        break
                }
                D.toggleClass("wf-force-outline-none", A === "add")
            }

            function P(D) {
                var A = D.currentTarget;
                if (!(Bn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(A.className))) {
                    var M = w(A) ? A.hash : "";
                    if (M !== "") {
                        var W = e(M);
                        W.length && (D && (D.preventDefault(), D.stopPropagation()), N(M, D), window.setTimeout(function() {
                            R(W, function() {
                                O(W, "add"), W.get(0).focus({
                                    preventScroll: !0
                                }), O(W, "remove")
                            })
                        }, D ? 0 : 300))
                    }
                }
            }

            function N(D) {
                if (r.hash !== D && n && n.pushState && !(Bn.env.chrome && r.protocol === "file:")) {
                    var A = n.state && n.state.hash;
                    A !== D && n.pushState({
                        hash: D
                    }, "", D)
                }
            }

            function R(D, A) {
                var M = i.scrollTop(),
                    W = k(D);
                if (M !== W) {
                    var V = U(D, M, W),
                        te = Date.now(),
                        ee = function() {
                            var ue = Date.now() - te;
                            window.scroll(0, B(M, W, ue, V)), ue <= V ? a(ee) : typeof A == "function" && A()
                        };
                    a(ee)
                }
            }

            function k(D) {
                var A = e(l),
                    M = A.css("position") === "fixed" ? A.outerHeight() : 0,
                    W = D.offset().top - M;
                if (D.data("scroll") === "mid") {
                    var V = i.height() - M,
                        te = D.outerHeight();
                    te < V && (W -= Math.round((V - te) / 2))
                }
                return W
            }

            function U(D, A, M) {
                if (x()) return 0;
                var W = 1;
                return s.add(D).each(function(V, te) {
                    var ee = parseFloat(te.getAttribute("data-scroll-time"));
                    !isNaN(ee) && ee >= 0 && (W = ee)
                }), (472.143 * Math.log(Math.abs(A - M) + 125) - 2e3) * W
            }

            function B(D, A, M, W) {
                return M > W ? A : D + (A - D) * z(M / W)
            }

            function z(D) {
                return D < .5 ? 4 * D * D * D : (D - 1) * (2 * D - 2) * (2 * D - 2) + 1
            }

            function J() {
                var {
                    WF_CLICK_EMPTY: D,
                    WF_CLICK_SCROLL: A
                } = t;
                o.on(A, g, P), o.on(D, E, function(M) {
                    M.preventDefault()
                }), document.head.insertBefore(v, document.head.firstChild)
            }
            return {
                ready: J
            }
        })
    });
    var Py = f((xX, Ly) => {
        "use strict";
        var _F = Ue();
        _F.define("touch", Ly.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var s = !1,
                    a = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    l, E;
                o.addEventListener("touchstart", g, !1), o.addEventListener("touchmove", d, !1), o.addEventListener("touchend", v, !1), o.addEventListener("touchcancel", I, !1), o.addEventListener("mousedown", g, !1), o.addEventListener("mousemove", d, !1), o.addEventListener("mouseup", v, !1), o.addEventListener("mouseout", I, !1);

                function g(w) {
                    var T = w.touches;
                    T && T.length > 1 || (s = !0, T ? (a = !0, l = T[0].clientX) : l = w.clientX, E = l)
                }

                function d(w) {
                    if (s) {
                        if (a && w.type === "mousemove") {
                            w.preventDefault(), w.stopPropagation();
                            return
                        }
                        var T = w.touches,
                            x = T ? T[0].clientX : w.clientX,
                            O = x - E;
                        E = x, Math.abs(O) > u && r && String(r()) === "" && (i("swipe", w, {
                            direction: O > 0 ? "right" : "left"
                        }), I())
                    }
                }

                function v(w) {
                    if (s && (s = !1, a && w.type === "mouseup")) {
                        w.preventDefault(), w.stopPropagation(), a = !1;
                        return
                    }
                }

                function I() {
                    s = !1
                }

                function _() {
                    o.removeEventListener("touchstart", g, !1), o.removeEventListener("touchmove", d, !1), o.removeEventListener("touchend", v, !1), o.removeEventListener("touchcancel", I, !1), o.removeEventListener("mousedown", g, !1), o.removeEventListener("mousemove", d, !1), o.removeEventListener("mouseup", v, !1), o.removeEventListener("mouseout", I, !1), o = null
                }
                this.destroy = _
            }

            function i(o, s, a) {
                var u = e.Event(o, {
                    originalEvent: s
                });
                e(s.target).trigger(u, a)
            }
            return t.instance = t.init(document), t
        })
    });
    var Ny = f(ca => {
        "use strict";
        Object.defineProperty(ca, "__esModule", {
            value: !0
        });
        Object.defineProperty(ca, "default", {
            enumerable: !0,
            get: function() {
                return IF
            }
        });

        function IF(e, t, r, n, i, o, s, a, u, l, E, g, d) {
            return function(v) {
                e(v);
                var I = v.form,
                    _ = {
                        name: I.attr("data-name") || I.attr("name") || "Untitled Form",
                        pageId: I.attr("data-wf-page-id") || "",
                        elementId: I.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(I.html()),
                        trackingCookies: n()
                    };
                let w = I.attr("data-wf-flow");
                w && (_.wfFlow = w), i(v);
                var T = o(I, _.fields);
                if (T) return s(T);
                if (_.fileUploads = a(I), u(v), !l) {
                    E(v);
                    return
                }
                g.ajax({
                    url: d,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(x) {
                    x && x.code === 200 && (v.success = !0), E(v)
                }).fail(function() {
                    E(v)
                })
            }
        }
    });
    var Dy = f((CX, My) => {
        "use strict";
        var Wn = Ue(),
            TF = (e, t, r, n) => {
                let i = document.createElement("div");
                t.appendChild(i), turnstile.render(i, {
                    sitekey: e,
                    callback: function(o) {
                        r(o)
                    },
                    "error-callback": function() {
                        n()
                    }
                })
            };
        Wn.define("forms", My.exports = function(e, t) {
            let r = "TURNSTILE_LOADED";
            var n = {},
                i = e(document),
                o, s = window.location,
                a = window.XDomainRequest && !window.atob,
                u = ".w-form",
                l, E = /e(-)?mail/i,
                g = /^\S+@\S+$/,
                d = window.alert,
                v = Wn.env(),
                I, _, w;
            let T = i.find("[data-turnstile-sitekey]").data("turnstile-sitekey"),
                x;
            var O = /list-manage[1-9]?.com/i,
                P = t.debounce(function() {
                    d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            n.ready = n.design = n.preview = function() {
                R(), N(), !v && !I && U()
            };

            function N() {
                l = e("html").attr("data-wf-site"), _ = "https://webflow.com/api/v1/form/" + l, a && _.indexOf("https://webflow.com") >= 0 && (_ = _.replace("https://webflow.com", "https://formdata.webflow.com")), w = `${_}/signFile`, o = e(u + " form"), o.length && o.each(k)
            }

            function R() {
                T && (x = document.createElement("script"), x.src = "https://challenges.cloudflare.com/turnstile/v0/api.js", document.head.appendChild(x), x.onload = () => {
                    i.trigger(r)
                })
            }

            function k(p, h) {
                var G = e(h),
                    q = e.data(h, u);
                q || (q = e.data(h, u, {
                    form: G
                })), B(q);
                var Q = G.closest("div.w-form");
                q.done = Q.find("> .w-form-done"), q.fail = Q.find("> .w-form-fail"), q.fileUploads = Q.find(".w-file-upload"), q.fileUploads.each(function(j) {
                    _e(j, q)
                }), T && (q.wait = !1, z(q), i.on(typeof turnstile < "u" ? "ready" : r, function() {
                    TF(T, h, j => {
                        q.turnstileToken = j, B(q)
                    }, () => {
                        z(q)
                    })
                }));
                var ne = q.form.attr("aria-label") || q.form.attr("data-name") || "Form";
                q.done.attr("aria-label") || q.form.attr("aria-label", ne), q.done.attr("tabindex", "-1"), q.done.attr("role", "region"), q.done.attr("aria-label") || q.done.attr("aria-label", ne + " success"), q.fail.attr("tabindex", "-1"), q.fail.attr("role", "region"), q.fail.attr("aria-label") || q.fail.attr("aria-label", ne + " failure");
                var oe = q.action = G.attr("action");
                if (q.handler = null, q.redirect = G.attr("data-redirect"), O.test(oe)) {
                    q.handler = te;
                    return
                }
                if (!oe) {
                    if (l) {
                        q.handler = (() => {
                            let j = Ny().default;
                            return j(B, s, Wn, M, ue, J, d, D, z, l, ee, e, _)
                        })();
                        return
                    }
                    P()
                }
            }

            function U() {
                I = !0, i.on("submit", u + " form", function(j) {
                    var H = e.data(this, u);
                    H.handler && (H.evt = j, H.handler(H))
                });
                let p = ".w-checkbox-input",
                    h = ".w-radio-input",
                    G = "w--redirected-checked",
                    q = "w--redirected-focus",
                    Q = "w--redirected-focus-visible",
                    ne = ":focus-visible, [data-wf-focus-visible]",
                    oe = [
                        ["checkbox", p],
                        ["radio", h]
                    ];
                i.on("change", u + ' form input[type="checkbox"]:not(' + p + ")", j => {
                    e(j.target).siblings(p).toggleClass(G)
                }), i.on("change", u + ' form input[type="radio"]', j => {
                    e(`input[name="${j.target.name}"]:not(${p})`).map((le, Re) => e(Re).siblings(h).removeClass(G));
                    let H = e(j.target);
                    H.hasClass("w-radio-input") || H.siblings(h).addClass(G)
                }), oe.forEach(([j, H]) => {
                    i.on("focus", u + ` form input[type="${j}"]:not(` + H + ")", le => {
                        e(le.target).siblings(H).addClass(q), e(le.target).filter(ne).siblings(H).addClass(Q)
                    }), i.on("blur", u + ` form input[type="${j}"]:not(` + H + ")", le => {
                        e(le.target).siblings(H).removeClass(`${q} ${Q}`)
                    })
                })
            }

            function B(p) {
                var h = p.btn = p.form.find(':input[type="submit"]');
                p.wait = p.btn.attr("data-wait") || null, p.success = !1, h.prop("disabled", !!(T && !p.turnstileToken)), p.label && h.val(p.label)
            }

            function z(p) {
                var h = p.btn,
                    G = p.wait;
                h.prop("disabled", !0), G && (p.label = h.val(), h.val(G))
            }

            function J(p, h) {
                var G = null;
                return h = h || {}, p.find(':input:not([type="submit"]):not([type="file"])').each(function(q, Q) {
                    var ne = e(Q),
                        oe = ne.attr("type"),
                        j = ne.attr("data-name") || ne.attr("name") || "Field " + (q + 1);
                    j = encodeURIComponent(j);
                    var H = ne.val();
                    if (oe === "checkbox") H = ne.is(":checked");
                    else if (oe === "radio") {
                        if (h[j] === null || typeof h[j] == "string") return;
                        H = p.find('input[name="' + ne.attr("name") + '"]:checked').val() || null
                    }
                    typeof H == "string" && (H = e.trim(H)), h[j] = H, G = G || W(ne, oe, j, H)
                }), G
            }

            function D(p) {
                var h = {};
                return p.find(':input[type="file"]').each(function(G, q) {
                    var Q = e(q),
                        ne = Q.attr("data-name") || Q.attr("name") || "File " + (G + 1),
                        oe = Q.attr("data-value");
                    typeof oe == "string" && (oe = e.trim(oe)), h[ne] = oe
                }), h
            }
            let A = {
                _mkto_trk: "marketo"
            };

            function M() {
                return document.cookie.split("; ").reduce(function(h, G) {
                    let q = G.split("="),
                        Q = q[0];
                    if (Q in A) {
                        let ne = A[Q],
                            oe = q.slice(1).join("=");
                        h[ne] = oe
                    }
                    return h
                }, {})
            }

            function W(p, h, G, q) {
                var Q = null;
                return h === "password" ? Q = "Passwords cannot be submitted." : p.attr("required") ? q ? E.test(p.attr("type")) && (g.test(q) || (Q = "Please enter a valid email address for: " + G)) : Q = "Please fill out the required field: " + G : G === "g-recaptcha-response" && !q && (Q = "Please confirm you\u2019re not a robot."), Q
            }

            function V(p) {
                ue(p), ee(p)
            }

            function te(p) {
                B(p);
                var h = p.form,
                    G = {};
                if (/^https/.test(s.href) && !/^https/.test(p.action)) {
                    h.attr("method", "post");
                    return
                }
                ue(p);
                var q = J(h, G);
                if (q) return d(q);
                z(p);
                var Q;
                t.each(G, function(H, le) {
                    E.test(le) && (G.EMAIL = H), /^((full[ _-]?)?name)$/i.test(le) && (Q = H), /^(first[ _-]?name)$/i.test(le) && (G.FNAME = H), /^(last[ _-]?name)$/i.test(le) && (G.LNAME = H)
                }), Q && !G.FNAME && (Q = Q.split(" "), G.FNAME = Q[0], G.LNAME = G.LNAME || Q[1]);
                var ne = p.action.replace("/post?", "/post-json?") + "&c=?",
                    oe = ne.indexOf("u=") + 2;
                oe = ne.substring(oe, ne.indexOf("&", oe));
                var j = ne.indexOf("id=") + 3;
                j = ne.substring(j, ne.indexOf("&", j)), G["b_" + oe + "_" + j] = "", e.ajax({
                    url: ne,
                    data: G,
                    dataType: "jsonp"
                }).done(function(H) {
                    p.success = H.result === "success" || /already/.test(H.msg), p.success || console.info("MailChimp error: " + H.msg), ee(p)
                }).fail(function() {
                    ee(p)
                })
            }

            function ee(p) {
                var h = p.form,
                    G = p.redirect,
                    q = p.success;
                if (q && G) {
                    Wn.location(G);
                    return
                }
                p.done.toggle(q), p.fail.toggle(!q), q ? p.done.focus() : p.fail.focus(), h.toggle(!q), B(p)
            }

            function ue(p) {
                p.evt && p.evt.preventDefault(), p.evt = null
            }

            function _e(p, h) {
                if (!h.fileUploads || !h.fileUploads[p]) return;
                var G, q = e(h.fileUploads[p]),
                    Q = q.find("> .w-file-upload-default"),
                    ne = q.find("> .w-file-upload-uploading"),
                    oe = q.find("> .w-file-upload-success"),
                    j = q.find("> .w-file-upload-error"),
                    H = Q.find(".w-file-upload-input"),
                    le = Q.find(".w-file-upload-label"),
                    Re = le.children(),
                    Ce = j.find(".w-file-upload-error-msg"),
                    be = oe.find(".w-file-upload-file"),
                    je = oe.find(".w-file-remove-link"),
                    gt = be.find(".w-file-upload-file-name"),
                    c = Ce.attr("data-w-size-error"),
                    m = Ce.attr("data-w-type-error"),
                    b = Ce.attr("data-w-generic-error");
                if (v || le.on("click keydown", function(Y) {
                        Y.type === "keydown" && Y.which !== 13 && Y.which !== 32 || (Y.preventDefault(), H.click())
                    }), le.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), je.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), v) H.on("click", function(Y) {
                    Y.preventDefault()
                }), le.on("click", function(Y) {
                    Y.preventDefault()
                }), Re.on("click", function(Y) {
                    Y.preventDefault()
                });
                else {
                    je.on("click keydown", function(Y) {
                        if (Y.type === "keydown") {
                            if (Y.which !== 13 && Y.which !== 32) return;
                            Y.preventDefault()
                        }
                        H.removeAttr("data-value"), H.val(""), gt.html(""), Q.toggle(!0), oe.toggle(!1), le.focus()
                    }), H.on("change", function(Y) {
                        G = Y.target && Y.target.files && Y.target.files[0], G && (Q.toggle(!1), j.toggle(!1), ne.toggle(!0), ne.focus(), gt.text(G.name), re() || z(h), h.fileUploads[p].uploading = !0, y(G, C))
                    });
                    var S = le.outerHeight();
                    H.height(S), H.width(1)
                }

                function L(Y) {
                    var X = Y.responseJSON && Y.responseJSON.msg,
                        ie = b;
                    typeof X == "string" && X.indexOf("InvalidFileTypeError") === 0 ? ie = m : typeof X == "string" && X.indexOf("MaxFileSizeError") === 0 && (ie = c), Ce.text(ie), H.removeAttr("data-value"), H.val(""), ne.toggle(!1), Q.toggle(!0), j.toggle(!0), j.focus(), h.fileUploads[p].uploading = !1, re() || B(h)
                }

                function C(Y, X) {
                    if (Y) return L(Y);
                    var ie = X.fileName,
                        ae = X.postData,
                        Ee = X.fileId,
                        Fe = X.s3Url;
                    H.attr("data-value", Ee), F(Fe, ae, G, ie, K)
                }

                function K(Y) {
                    if (Y) return L(Y);
                    ne.toggle(!1), oe.css("display", "inline-block"), oe.focus(), h.fileUploads[p].uploading = !1, re() || B(h)
                }

                function re() {
                    var Y = h.fileUploads && h.fileUploads.toArray() || [];
                    return Y.some(function(X) {
                        return X.uploading
                    })
                }
            }

            function y(p, h) {
                var G = new URLSearchParams({
                    name: p.name,
                    size: p.size
                });
                e.ajax({
                    type: "GET",
                    url: `${w}?${G}`,
                    crossDomain: !0
                }).done(function(q) {
                    h(null, q)
                }).fail(function(q) {
                    h(q)
                })
            }

            function F(p, h, G, q, Q) {
                var ne = new FormData;
                for (var oe in h) ne.append(oe, h[oe]);
                ne.append("file", G, q), e.ajax({
                    type: "POST",
                    url: p,
                    data: ne,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    Q(null)
                }).fail(function(j) {
                    Q(j)
                })
            }
            return n
        })
    });
    var Gy = f((LX, qy) => {
        "use strict";
        var ht = Ue(),
            bF = Jn(),
            rt = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            Fy = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        ht.define("slider", qy.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(document),
                o, s, a = ht.env(),
                u = ".w-slider",
                l = '<div class="w-slider-dot" data-wf-ignore />',
                E = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                g = "w-slider-force-show",
                d = bF.triggers,
                v, I = !1;
            r.ready = function() {
                s = ht.env("design"), _()
            }, r.design = function() {
                s = !0, setTimeout(_, 1e3)
            }, r.preview = function() {
                s = !1, _()
            }, r.redraw = function() {
                I = !0, _(), I = !1
            }, r.destroy = w;

            function _() {
                o = i.find(u), o.length && (o.each(O), !v && (w(), T()))
            }

            function w() {
                ht.resize.off(x), ht.redraw.off(r.redraw)
            }

            function T() {
                ht.resize.on(x), ht.redraw.on(r.redraw)
            }

            function x() {
                o.filter(":visible").each(V)
            }

            function O(y, F) {
                var p = e(F),
                    h = e.data(F, u);
                h || (h = e.data(F, u, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: p,
                    config: {}
                })), h.mask = p.children(".w-slider-mask"), h.left = p.children(".w-slider-arrow-left"), h.right = p.children(".w-slider-arrow-right"), h.nav = p.children(".w-slider-nav"), h.slides = h.mask.children(".w-slide"), h.slides.each(d.reset), I && (h.maskWidth = 0), p.attr("role") === void 0 && p.attr("role", "region"), p.attr("aria-label") === void 0 && p.attr("aria-label", "carousel");
                var G = h.mask.attr("id");
                if (G || (G = "w-slider-mask-" + y, h.mask.attr("id", G)), !s && !h.ariaLiveLabel && (h.ariaLiveLabel = e(E).appendTo(h.mask)), h.left.attr("role", "button"), h.left.attr("tabindex", "0"), h.left.attr("aria-controls", G), h.left.attr("aria-label") === void 0 && h.left.attr("aria-label", "previous slide"), h.right.attr("role", "button"), h.right.attr("tabindex", "0"), h.right.attr("aria-controls", G), h.right.attr("aria-label") === void 0 && h.right.attr("aria-label", "next slide"), !n.support.transform) {
                    h.left.hide(), h.right.hide(), h.nav.hide(), v = !0;
                    return
                }
                h.el.off(u), h.left.off(u), h.right.off(u), h.nav.off(u), P(h), s ? (h.el.on("setting" + u, A(h)), D(h), h.hasTimer = !1) : (h.el.on("swipe" + u, A(h)), h.left.on("click" + u, U(h)), h.right.on("click" + u, B(h)), h.left.on("keydown" + u, k(h, U)), h.right.on("keydown" + u, k(h, B)), h.nav.on("keydown" + u, "> div", A(h)), h.config.autoplay && !h.hasTimer && (h.hasTimer = !0, h.timerCount = 1, J(h)), h.el.on("mouseenter" + u, R(h, !0, "mouse")), h.el.on("focusin" + u, R(h, !0, "keyboard")), h.el.on("mouseleave" + u, R(h, !1, "mouse")), h.el.on("focusout" + u, R(h, !1, "keyboard"))), h.nav.on("click" + u, "> div", A(h)), a || h.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var q = p.filter(":hidden");
                q.addClass(g);
                var Q = p.parents(":hidden");
                Q.addClass(g), I || V(y, F), q.removeClass(g), Q.removeClass(g)
            }

            function P(y) {
                var F = {};
                F.crossOver = 0, F.animation = y.el.attr("data-animation") || "slide", F.animation === "outin" && (F.animation = "cross", F.crossOver = .5), F.easing = y.el.attr("data-easing") || "ease";
                var p = y.el.attr("data-duration");
                if (F.duration = p != null ? parseInt(p, 10) : 500, N(y.el.attr("data-infinite")) && (F.infinite = !0), N(y.el.attr("data-disable-swipe")) && (F.disableSwipe = !0), N(y.el.attr("data-hide-arrows")) ? F.hideArrows = !0 : y.config.hideArrows && (y.left.show(), y.right.show()), N(y.el.attr("data-autoplay"))) {
                    F.autoplay = !0, F.delay = parseInt(y.el.attr("data-delay"), 10) || 2e3, F.timerMax = parseInt(y.el.attr("data-autoplay-limit"), 10);
                    var h = "mousedown" + u + " touchstart" + u;
                    s || y.el.off(h).one(h, function() {
                        D(y)
                    })
                }
                var G = y.right.width();
                F.edge = G ? G + 40 : 100, y.config = F
            }

            function N(y) {
                return y === "1" || y === "true"
            }

            function R(y, F, p) {
                return function(h) {
                    if (F) y.hasFocus[p] = F;
                    else if (e.contains(y.el.get(0), h.relatedTarget) || (y.hasFocus[p] = F, y.hasFocus.mouse && p === "keyboard" || y.hasFocus.keyboard && p === "mouse")) return;
                    F ? (y.ariaLiveLabel.attr("aria-live", "polite"), y.hasTimer && D(y)) : (y.ariaLiveLabel.attr("aria-live", "off"), y.hasTimer && J(y))
                }
            }

            function k(y, F) {
                return function(p) {
                    switch (p.keyCode) {
                        case rt.SPACE:
                        case rt.ENTER:
                            return F(y)(), p.preventDefault(), p.stopPropagation()
                    }
                }
            }

            function U(y) {
                return function() {
                    W(y, {
                        index: y.index - 1,
                        vector: -1
                    })
                }
            }

            function B(y) {
                return function() {
                    W(y, {
                        index: y.index + 1,
                        vector: 1
                    })
                }
            }

            function z(y, F) {
                var p = null;
                F === y.slides.length && (_(), te(y)), t.each(y.anchors, function(h, G) {
                    e(h.els).each(function(q, Q) {
                        e(Q).index() === F && (p = G)
                    })
                }), p != null && W(y, {
                    index: p,
                    immediate: !0
                })
            }

            function J(y) {
                D(y);
                var F = y.config,
                    p = F.timerMax;
                p && y.timerCount++ > p || (y.timerId = window.setTimeout(function() {
                    y.timerId == null || s || (B(y)(), J(y))
                }, F.delay))
            }

            function D(y) {
                window.clearTimeout(y.timerId), y.timerId = null
            }

            function A(y) {
                return function(F, p) {
                    p = p || {};
                    var h = y.config;
                    if (s && F.type === "setting") {
                        if (p.select === "prev") return U(y)();
                        if (p.select === "next") return B(y)();
                        if (P(y), te(y), p.select == null) return;
                        z(y, p.select);
                        return
                    }
                    if (F.type === "swipe") return h.disableSwipe || ht.env("editor") ? void 0 : p.direction === "left" ? B(y)() : p.direction === "right" ? U(y)() : void 0;
                    if (y.nav.has(F.target).length) {
                        var G = e(F.target).index();
                        if (F.type === "click" && W(y, {
                                index: G
                            }), F.type === "keydown") switch (F.keyCode) {
                            case rt.ENTER:
                            case rt.SPACE:
                                {
                                    W(y, {
                                        index: G
                                    }),
                                    F.preventDefault();
                                    break
                                }
                            case rt.ARROW_LEFT:
                            case rt.ARROW_UP:
                                {
                                    M(y.nav, Math.max(G - 1, 0)),
                                    F.preventDefault();
                                    break
                                }
                            case rt.ARROW_RIGHT:
                            case rt.ARROW_DOWN:
                                {
                                    M(y.nav, Math.min(G + 1, y.pages)),
                                    F.preventDefault();
                                    break
                                }
                            case rt.HOME:
                                {
                                    M(y.nav, 0),
                                    F.preventDefault();
                                    break
                                }
                            case rt.END:
                                {
                                    M(y.nav, y.pages),
                                    F.preventDefault();
                                    break
                                }
                            default:
                                return
                        }
                    }
                }
            }

            function M(y, F) {
                var p = y.children().eq(F).focus();
                y.children().not(p)
            }

            function W(y, F) {
                F = F || {};
                var p = y.config,
                    h = y.anchors;
                y.previous = y.index;
                var G = F.index,
                    q = {};
                G < 0 ? (G = h.length - 1, p.infinite && (q.x = -y.endX, q.from = 0, q.to = h[0].width)) : G >= h.length && (G = 0, p.infinite && (q.x = h[h.length - 1].width, q.from = -h[h.length - 1].x, q.to = q.from - q.x)), y.index = G;
                var Q = y.nav.children().eq(G).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                y.nav.children().not(Q).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), p.hideArrows && (y.index === h.length - 1 ? y.right.hide() : y.right.show(), y.index === 0 ? y.left.hide() : y.left.show());
                var ne = y.offsetX || 0,
                    oe = y.offsetX = -h[y.index].x,
                    j = {
                        x: oe,
                        opacity: 1,
                        visibility: ""
                    },
                    H = e(h[y.index].els),
                    le = e(h[y.previous] && h[y.previous].els),
                    Re = y.slides.not(H),
                    Ce = p.animation,
                    be = p.easing,
                    je = Math.round(p.duration),
                    gt = F.vector || (y.index > y.previous ? 1 : -1),
                    c = "opacity " + je + "ms " + be,
                    m = "transform " + je + "ms " + be;
                if (H.find(Fy).removeAttr("tabindex"), H.removeAttr("aria-hidden"), H.find("*").removeAttr("aria-hidden"), Re.find(Fy).attr("tabindex", "-1"), Re.attr("aria-hidden", "true"), Re.find("*").attr("aria-hidden", "true"), s || (H.each(d.intro), Re.each(d.outro)), F.immediate && !I) {
                    n(H).set(j), L();
                    return
                }
                if (y.index === y.previous) return;
                if (s || y.ariaLiveLabel.text(`Slide ${G+1} of ${h.length}.`), Ce === "cross") {
                    var b = Math.round(je - je * p.crossOver),
                        S = Math.round(je - b);
                    c = "opacity " + b + "ms " + be, n(le).set({
                        visibility: ""
                    }).add(c).start({
                        opacity: 0
                    }), n(H).set({
                        visibility: "",
                        x: oe,
                        opacity: 0,
                        zIndex: y.depth++
                    }).add(c).wait(S).then({
                        opacity: 1
                    }).then(L);
                    return
                }
                if (Ce === "fade") {
                    n(le).set({
                        visibility: ""
                    }).stop(), n(H).set({
                        visibility: "",
                        x: oe,
                        opacity: 0,
                        zIndex: y.depth++
                    }).add(c).start({
                        opacity: 1
                    }).then(L);
                    return
                }
                if (Ce === "over") {
                    j = {
                        x: y.endX
                    }, n(le).set({
                        visibility: ""
                    }).stop(), n(H).set({
                        visibility: "",
                        zIndex: y.depth++,
                        x: oe + h[y.index].width * gt
                    }).add(m).start({
                        x: oe
                    }).then(L);
                    return
                }
                p.infinite && q.x ? (n(y.slides.not(le)).set({
                    visibility: "",
                    x: q.x
                }).add(m).start({
                    x: oe
                }), n(le).set({
                    visibility: "",
                    x: q.from
                }).add(m).start({
                    x: q.to
                }), y.shifted = le) : (p.infinite && y.shifted && (n(y.shifted).set({
                    visibility: "",
                    x: ne
                }), y.shifted = null), n(y.slides).set({
                    visibility: ""
                }).add(m).start({
                    x: oe
                }));

                function L() {
                    H = e(h[y.index].els), Re = y.slides.not(H), Ce !== "slide" && (j.visibility = "hidden"), n(Re).set(j)
                }
            }

            function V(y, F) {
                var p = e.data(F, u);
                if (p) {
                    if (ue(p)) return te(p);
                    s && _e(p) && te(p)
                }
            }

            function te(y) {
                var F = 1,
                    p = 0,
                    h = 0,
                    G = 0,
                    q = y.maskWidth,
                    Q = q - y.config.edge;
                Q < 0 && (Q = 0), y.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }], y.slides.each(function(oe, j) {
                    h - p > Q && (F++, p += q, y.anchors[F - 1] = {
                        els: [],
                        x: h,
                        width: 0
                    }), G = e(j).outerWidth(!0), h += G, y.anchors[F - 1].width += G, y.anchors[F - 1].els.push(j);
                    var H = oe + 1 + " of " + y.slides.length;
                    e(j).attr("aria-label", H), e(j).attr("role", "group")
                }), y.endX = h, s && (y.pages = null), y.nav.length && y.pages !== F && (y.pages = F, ee(y));
                var ne = y.index;
                ne >= F && (ne = F - 1), W(y, {
                    immediate: !0,
                    index: ne
                })
            }

            function ee(y) {
                var F = [],
                    p, h = y.el.attr("data-nav-spacing");
                h && (h = parseFloat(h) + "px");
                for (var G = 0, q = y.pages; G < q; G++) p = e(l), p.attr("aria-label", "Show slide " + (G + 1) + " of " + q).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), y.nav.hasClass("w-num") && p.text(G + 1), h != null && p.css({
                    "margin-left": h,
                    "margin-right": h
                }), F.push(p);
                y.nav.empty().append(F)
            }

            function ue(y) {
                var F = y.mask.width();
                return y.maskWidth !== F ? (y.maskWidth = F, !0) : !1
            }

            function _e(y) {
                var F = 0;
                return y.slides.each(function(p, h) {
                    F += e(h).outerWidth(!0)
                }), y.slidesWidth !== F ? (y.slidesWidth = F, !0) : !1
            }
            return r
        })
    });
    fa();
    da();
    wa();
    Oa();
    Ra();
    Pa();
    Jn();
    Sy();
    xy();
    Cy();
    Py();
    Dy();
    Gy();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|f0e98dc6-24be-b6ab-a1f7-e053f4f5fd39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|f0e98dc6-24be-b6ab-a1f7-e053f4f5fd39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 85,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1638221358806
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-3"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|55e19e9a-a83b-eba0-eeae-dcd36c05455a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|55e19e9a-a83b-eba0-eeae-dcd36c05455a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644373625002
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|fdd4b4b1-6ec5-c153-a91a-bb92ba22af3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|fdd4b4b1-6ec5-c153-a91a-bb92ba22af3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "smoothing": 97,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1644420693912
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|bcf35b38-502a-a046-d87a-ee36a469d651",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|bcf35b38-502a-a046-d87a-ee36a469d651",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 95,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1644421206264
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f139f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f139f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644424436588
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".w__1",
                "originalId": "657995f4786f8660407c3d65|64db539d-8acd-1bb7-518c-f3094225a5b9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".w__1",
                "originalId": "657995f4786f8660407c3d65|64db539d-8acd-1bb7-518c-f3094225a5b9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644450604563
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|1cc00790-8389-f562-f836-5d3b5fb6b849",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|1cc00790-8389-f562-f836-5d3b5fb6b849",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644450752715
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d64|bcf35b38-502a-a046-d87a-ee36a469d651",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d64|bcf35b38-502a-a046-d87a-ee36a469d651",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 95,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1644537623438
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d64",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d64",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1644926719006
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|1aad4f46-5f1f-e67c-39a0-cf2338ae794d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|1aad4f46-5f1f-e67c-39a0-cf2338ae794d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1645372171240
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1645395079141
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "657995f4786f8660407c3d65|5dff4856-ee7a-ca83-ac5e-161c0af2f34a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|5dff4856-ee7a-ca83-ac5e-161c0af2f34a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 98,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 98,
                "restingState": 50
            }],
            "createdOn": 1645544383802
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".cr__card__bottom",
                "originalId": "657995f4786f8660407c3d65|5611b7dc-3145-cd80-b269-6a62b5fbc357",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".cr__card__bottom",
                "originalId": "657995f4786f8660407c3d65|5611b7dc-3145-cd80-b269-6a62b5fbc357",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1645568601994
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".cr__card__bottom",
                "originalId": "657995f4786f8660407c3d65|5611b7dc-3145-cd80-b269-6a62b5fbc357",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".cr__card__bottom",
                "originalId": "657995f4786f8660407c3d65|5611b7dc-3145-cd80-b269-6a62b5fbc357",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1645568601994
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1645653672033
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "657995f4786f8660407c3d65",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1645715238547
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1645719760228
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1645719935316
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|85496bf8-c704-6a14-8938-309440d1f53b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|85496bf8-c704-6a14-8938-309440d1f53b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1645721425795
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d66|e6fa6a84-2a11-4bb1-af7c-2653a528a054",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d66|e6fa6a84-2a11-4bb1-af7c-2653a528a054",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646038528439
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-53"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d66|e6fa6a84-2a11-4bb1-af7c-2653a528a0ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d66|e6fa6a84-2a11-4bb1-af7c-2653a528a0ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646038528439
        },
        "e-54": {
            "id": "e-54",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d66|e6fa6a84-2a11-4bb1-af7c-2653a528a0ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d66|e6fa6a84-2a11-4bb1-af7c-2653a528a0ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646038528439
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d66|e6fa6a84-2a11-4bb1-af7c-2653a528a0fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d66|e6fa6a84-2a11-4bb1-af7c-2653a528a0fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646038528439
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d66|e6fa6a84-2a11-4bb1-af7c-2653a528a107",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d66|e6fa6a84-2a11-4bb1-af7c-2653a528a107",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646038528439
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d66|e6fa6a84-2a11-4bb1-af7c-2653a528a144",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d66|e6fa6a84-2a11-4bb1-af7c-2653a528a144",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646038528439
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|0cb813cd-d72b-a225-d33f-ad4d69aa8be6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|0cb813cd-d72b-a225-d33f-ad4d69aa8be6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646042294501
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|0cb813cd-d72b-a225-d33f-ad4d69aa8c05",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|0cb813cd-d72b-a225-d33f-ad4d69aa8c05",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646042294501
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|0cb813cd-d72b-a225-d33f-ad4d69aa8c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|0cb813cd-d72b-a225-d33f-ad4d69aa8c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646042294501
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|0cb813cd-d72b-a225-d33f-ad4d69aa8c2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|0cb813cd-d72b-a225-d33f-ad4d69aa8c2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646042294501
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|0cb813cd-d72b-a225-d33f-ad4d69aa8c3b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|0cb813cd-d72b-a225-d33f-ad4d69aa8c3b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646042294501
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|0cb813cd-d72b-a225-d33f-ad4d69aa8c5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|0cb813cd-d72b-a225-d33f-ad4d69aa8c5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646042294501
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".card__wrap",
                "originalId": "657995f4786f8660407c3d65|7c7c76ca-86ba-a1b3-5b62-4a8f79f4cafe",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".card__wrap",
                "originalId": "657995f4786f8660407c3d65|7c7c76ca-86ba-a1b3-5b62-4a8f79f4cafe",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-27-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-27-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1646149024469
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d65|84c5e15b-1f78-ced5-c5cf-9fbc794e5e36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|84c5e15b-1f78-ced5-c5cf-9fbc794e5e36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1646152465346
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "657995f4786f8660407c3d65|45619e1b-2a4b-fbd6-8cbe-86cf6c4e9c77",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d65|45619e1b-2a4b-fbd6-8cbe-86cf6c4e9c77",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-29-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-29-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1646158649674
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|f0e98dc6-24be-b6ab-a1f7-e053f4f5fd39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|f0e98dc6-24be-b6ab-a1f7-e053f4f5fd39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 85,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1653850331397
        },
        "e-80": {
            "id": "e-80",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-81"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|55e19e9a-a83b-eba0-eeae-dcd36c05455a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|55e19e9a-a83b-eba0-eeae-dcd36c05455a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|bcf35b38-502a-a046-d87a-ee36a469d651",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|bcf35b38-502a-a046-d87a-ee36a469d651",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 95,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1653850331397
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-85"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f139f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f139f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-87"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|1cc00790-8389-f562-f836-5d3b5fb6b849",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|1cc00790-8389-f562-f836-5d3b5fb6b849",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-88": {
            "id": "e-88",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|1aad4f46-5f1f-e67c-39a0-cf2338ae794d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|1aad4f46-5f1f-e67c-39a0-cf2338ae794d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-90": {
            "id": "e-90",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-92": {
            "id": "e-92",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "657995f4786f8660407c3d25|5dff4856-ee7a-ca83-ac5e-161c0af2f34a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|5dff4856-ee7a-ca83-ac5e-161c0af2f34a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 98,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 98,
                "restingState": 50
            }],
            "createdOn": 1653850331397
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "657995f4786f8660407c3d25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|85496bf8-c704-6a14-8938-309440d1f53b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|85496bf8-c704-6a14-8938-309440d1f53b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|0cb813cd-d72b-a225-d33f-ad4d69aa8be6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|0cb813cd-d72b-a225-d33f-ad4d69aa8be6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|0cb813cd-d72b-a225-d33f-ad4d69aa8c05",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|0cb813cd-d72b-a225-d33f-ad4d69aa8c05",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|0cb813cd-d72b-a225-d33f-ad4d69aa8c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|0cb813cd-d72b-a225-d33f-ad4d69aa8c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|0cb813cd-d72b-a225-d33f-ad4d69aa8c2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|0cb813cd-d72b-a225-d33f-ad4d69aa8c2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|0cb813cd-d72b-a225-d33f-ad4d69aa8c3b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|0cb813cd-d72b-a225-d33f-ad4d69aa8c3b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|0cb813cd-d72b-a225-d33f-ad4d69aa8c5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|0cb813cd-d72b-a225-d33f-ad4d69aa8c5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25|84c5e15b-1f78-ced5-c5cf-9fbc794e5e36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|84c5e15b-1f78-ced5-c5cf-9fbc794e5e36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653850331397
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "657995f4786f8660407c3d25|45619e1b-2a4b-fbd6-8cbe-86cf6c4e9c77",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25|45619e1b-2a4b-fbd6-8cbe-86cf6c4e9c77",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-29-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-29-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1653850331397
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-35-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1653852204668
        },
        "e-120": {
            "id": "e-120",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|f0e98dc6-24be-b6ab-a1f7-e053f4f5fd39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|f0e98dc6-24be-b6ab-a1f7-e053f4f5fd39",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 85,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1666786381598
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|55e19e9a-a83b-eba0-eeae-dcd36c05455a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|55e19e9a-a83b-eba0-eeae-dcd36c05455a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|bcf35b38-502a-a046-d87a-ee36a469d651",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|bcf35b38-502a-a046-d87a-ee36a469d651",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 95,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1666786381598
        },
        "e-124": {
            "id": "e-124",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-125"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f139f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f139f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-126": {
            "id": "e-126",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-127"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|1cc00790-8389-f562-f836-5d3b5fb6b849",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|1cc00790-8389-f562-f836-5d3b5fb6b849",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-128": {
            "id": "e-128",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|1aad4f46-5f1f-e67c-39a0-cf2338ae794d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|1aad4f46-5f1f-e67c-39a0-cf2338ae794d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-130": {
            "id": "e-130",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-131"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-132": {
            "id": "e-132",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "657995f4786f8660407c3d62|5dff4856-ee7a-ca83-ac5e-161c0af2f34a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|5dff4856-ee7a-ca83-ac5e-161c0af2f34a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 98,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 98,
                "restingState": 50
            }],
            "createdOn": 1666786381598
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-136": {
            "id": "e-136",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "657995f4786f8660407c3d62",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-138": {
            "id": "e-138",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-137"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|85496bf8-c704-6a14-8938-309440d1f53b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|85496bf8-c704-6a14-8938-309440d1f53b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-143": {
            "id": "e-143",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|0cb813cd-d72b-a225-d33f-ad4d69aa8be6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|0cb813cd-d72b-a225-d33f-ad4d69aa8be6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|0cb813cd-d72b-a225-d33f-ad4d69aa8c05",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|0cb813cd-d72b-a225-d33f-ad4d69aa8c05",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-148"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|0cb813cd-d72b-a225-d33f-ad4d69aa8c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|0cb813cd-d72b-a225-d33f-ad4d69aa8c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|0cb813cd-d72b-a225-d33f-ad4d69aa8c2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|0cb813cd-d72b-a225-d33f-ad4d69aa8c2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|0cb813cd-d72b-a225-d33f-ad4d69aa8c3b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|0cb813cd-d72b-a225-d33f-ad4d69aa8c3b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|0cb813cd-d72b-a225-d33f-ad4d69aa8c5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|0cb813cd-d72b-a225-d33f-ad4d69aa8c5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62|84c5e15b-1f78-ced5-c5cf-9fbc794e5e36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|84c5e15b-1f78-ced5-c5cf-9fbc794e5e36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666786381598
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "657995f4786f8660407c3d62|45619e1b-2a4b-fbd6-8cbe-86cf6c4e9c77",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62|45619e1b-2a4b-fbd6-8cbe-86cf6c4e9c77",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-29-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-29-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1666786381598
        },
        "e-158": {
            "id": "e-158",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d62",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d62",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1666786381598
        },
        "e-162": {
            "id": "e-162",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d5c|bcf35b38-502a-a046-d87a-ee36a469d651",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d5c|bcf35b38-502a-a046-d87a-ee36a469d651",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 95,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1675791992850
        },
        "e-175": {
            "id": "e-175",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-174"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "657995f4786f8660407c3d5c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d5c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675791992850
        },
        "e-177": {
            "id": "e-177",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-176"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d5c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d5c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675791992850
        },
        "e-179": {
            "id": "e-179",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-178"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d5c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d5c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675791992850
        },
        "e-181": {
            "id": "e-181",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-180"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d5c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d5c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675800367984
        },
        "e-182": {
            "id": "e-182",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "657995f4786f8660407c3d4a|ccbf38d1-c0f1-bd65-aca3-a9bc9ad52a3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "657995f4786f8660407c3d4a|ccbf38d1-c0f1-bd65-aca3-a9bc9ad52a3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 95,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1684760617075
        },
        "e-196": {
            "id": "e-196",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-197"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d0e44efb74ef2ae68f7e6a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d0e44efb74ef2ae68f7e6a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708188751873
        },
        "e-199": {
            "id": "e-199",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "65d0e44efb74ef2ae68f7e6a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d0e44efb74ef2ae68f7e6a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708188751873
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d0e44efb74ef2ae68f7e6a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d0e44efb74ef2ae68f7e6a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708188751873
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d0e44efb74ef2ae68f7e6a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d0e44efb74ef2ae68f7e6a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1708188751873
        },
        "e-221": {
            "id": "e-221",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65d0e44efb74ef2ae68f7e6a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65d0e44efb74ef2ae68f7e6a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-48-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1708188751873
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "roadmap",
            "continuousParameterGroups": [{
                "id": "a-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".list",
                                "selectorGuids": ["705face7-fa78-c0be-defb-7f13b7d93a1a"]
                            },
                            "xValue": 0,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".rm__bg",
                                "selectorGuids": ["88e53e72-b5b2-1cd6-bffa-dde3280ca1ed"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".list",
                                "selectorGuids": ["705face7-fa78-c0be-defb-7f13b7d93a1a"]
                            },
                            "xValue": -1,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".rm__bg",
                                "selectorGuids": ["88e53e72-b5b2-1cd6-bffa-dde3280ca1ed"]
                            },
                            "xValue": -35,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1638221368880
        },
        "a-2": {
            "id": "a-2",
            "title": "oldtext",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1644373628682
        },
        "a-4": {
            "id": "a-4",
            "title": "parallax1",
            "continuousParameterGroups": [{
                "id": "a-4-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-4-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".vid",
                                "selectorGuids": ["7de75e57-882e-743c-5194-61436aa80a0a"]
                            },
                            "yValue": 5,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-4-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".vid",
                                "selectorGuids": ["7de75e57-882e-743c-5194-61436aa80a0a"]
                            },
                            "yValue": -5,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1644420706259
        },
        "a-5": {
            "id": "a-5",
            "title": "parallax2",
            "continuousParameterGroups": [{
                "id": "a-5-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 5,
                    "actionItems": [{
                        "id": "a-5-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".h__img",
                                "selectorGuids": ["68b9ba3e-03b5-3ea6-78d4-0ae12d7d1a56"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-5-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".h__img",
                                "selectorGuids": ["68b9ba3e-03b5-3ea6-78d4-0ae12d7d1a56"]
                            },
                            "yValue": -20,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1644421223790
        },
        "a-6": {
            "id": "a-6",
            "title": "oldtext 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1000,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d65|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1644373628682
        },
        "a-7": {
            "id": "a-7",
            "title": "window in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "657995f4786f8660407c3d65|64db539d-8acd-1bb7-518c-f3094225a5b9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-3",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "657995f4786f8660407c3d65|64db539d-8acd-1bb7-518c-f3094225a5b9"
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "6da3",
                            "value": 5,
                            "unit": "px"
                        }]
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 800,
                        "target": {
                            "useEventTarget": true,
                            "id": "657995f4786f8660407c3d65|64db539d-8acd-1bb7-518c-f3094225a5b9"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 800,
                        "target": {
                            "useEventTarget": true,
                            "id": "657995f4786f8660407c3d65|64db539d-8acd-1bb7-518c-f3094225a5b9"
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "d86c",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1644450609390
        },
        "a-8": {
            "id": "a-8",
            "title": "window in 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "657995f4786f8660407c3d65|64db539d-8acd-1bb7-518c-f3094225a5b9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "657995f4786f8660407c3d65|64db539d-8acd-1bb7-518c-f3094225a5b9"
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "6da3",
                            "value": 5,
                            "unit": "px"
                        }]
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 800,
                        "target": {
                            "useEventTarget": true,
                            "id": "657995f4786f8660407c3d65|64db539d-8acd-1bb7-518c-f3094225a5b9"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 800,
                        "target": {
                            "useEventTarget": true,
                            "id": "657995f4786f8660407c3d65|64db539d-8acd-1bb7-518c-f3094225a5b9"
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "d86c",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1644450609390
        },
        "a-11": {
            "id": "a-11",
            "title": "icon loop",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": -105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|d594b525-ecb3-1bc6-04f3-323cf2ac731f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|fb6edc57-b80a-0d0b-a175-8b6e780f16c3"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|83a2fbdc-b2ce-a56c-4583-cb4b57c218ba"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|6264cb49-bd31-09e8-e996-d66998c7a746"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|05fbb2ec-4559-d6a7-5a76-32b190c59482"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|982c5b81-7f05-45dd-764c-3a95ffc307b7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "657995f4786f8660407c3d64|982c5b81-7f05-45dd-764c-3a95ffc307b7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": -105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "657995f4786f8660407c3d64|982c5b81-7f05-45dd-764c-3a95ffc307b7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "657995f4786f8660407c3d64|05fbb2ec-4559-d6a7-5a76-32b190c59482"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": -105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "657995f4786f8660407c3d64|05fbb2ec-4559-d6a7-5a76-32b190c59482"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "657995f4786f8660407c3d64|6264cb49-bd31-09e8-e996-d66998c7a746"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": -105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "657995f4786f8660407c3d64|6264cb49-bd31-09e8-e996-d66998c7a746"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-20",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "657995f4786f8660407c3d64|83a2fbdc-b2ce-a56c-4583-cb4b57c218ba"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": -105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "657995f4786f8660407c3d64|83a2fbdc-b2ce-a56c-4583-cb4b57c218ba"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-25",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "657995f4786f8660407c3d64|fb6edc57-b80a-0d0b-a175-8b6e780f16c3"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-26",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": -105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "657995f4786f8660407c3d64|fb6edc57-b80a-0d0b-a175-8b6e780f16c3"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-28",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "657995f4786f8660407c3d64|d594b525-ecb3-1bc6-04f3-323cf2ac731f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-30",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d64|667082cc-8231-28d0-81fe-d4309f5b1e12"
                        },
                        "yValue": -105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "id": "657995f4786f8660407c3d64|d594b525-ecb3-1bc6-04f3-323cf2ac731f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1644926726010
        },
        "a-12": {
            "id": "a-12",
            "title": "oldtext three",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1000,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d65|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1644373628682
        },
        "a-15": {
            "id": "a-15",
            "title": "move crew",
            "continuousParameterGroups": [{
                "id": "a-15-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-15-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".crew__abs",
                                "selectorGuids": ["7c4bf7aa-cc2e-e0b1-f785-12758c77a084"]
                            },
                            "xValue": 30,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-15-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".crew__abs",
                                "selectorGuids": ["7c4bf7aa-cc2e-e0b1-f785-12758c77a084"]
                            },
                            "xValue": -30,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-15-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": []
            }],
            "createdOn": 1645544387359
        },
        "a-20": {
            "id": "a-20",
            "title": "mobile crew open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mcr__w",
                            "selectorGuids": ["55a8629f-c9af-4f13-6de6-9f8e8eadfc99"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".w__text3.tertiary.allcaps__text",
                            "selectorGuids": ["32564446-e225-0790-044c-aa6ff053b9f1", "17c67cc3-e5b8-64ba-84f6-3c73237bcabb", "46c03a00-b0e9-a679-f749-84cb7f639d85"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".mcr__plus",
                            "selectorGuids": ["1db7b93d-6020-b614-8fa9-ecce93505f68"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-20-n-2",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mcr__w",
                            "selectorGuids": ["55a8629f-c9af-4f13-6de6-9f8e8eadfc99"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "6067",
                            "value": 5,
                            "unit": "px"
                        }]
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mcr__w",
                            "selectorGuids": ["55a8629f-c9af-4f13-6de6-9f8e8eadfc99"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".w__text3.tertiary.allcaps__text",
                            "selectorGuids": ["32564446-e225-0790-044c-aa6ff053b9f1", "17c67cc3-e5b8-64ba-84f6-3c73237bcabb", "46c03a00-b0e9-a679-f749-84cb7f639d85"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".mcr__plus",
                            "selectorGuids": ["1db7b93d-6020-b614-8fa9-ecce93505f68"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-20-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mcr__w",
                            "selectorGuids": ["55a8629f-c9af-4f13-6de6-9f8e8eadfc99"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "b01b",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1645568607214
        },
        "a-21": {
            "id": "a-21",
            "title": "mobile crew open close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mcr__w",
                            "selectorGuids": ["55a8629f-c9af-4f13-6de6-9f8e8eadfc99"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-21-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".w__text3.tertiary.allcaps__text",
                            "selectorGuids": ["32564446-e225-0790-044c-aa6ff053b9f1", "17c67cc3-e5b8-64ba-84f6-3c73237bcabb", "46c03a00-b0e9-a679-f749-84cb7f639d85"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-21-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".mcr__plus",
                            "selectorGuids": ["1db7b93d-6020-b614-8fa9-ecce93505f68"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-21-n-8",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mcr__w",
                            "selectorGuids": ["55a8629f-c9af-4f13-6de6-9f8e8eadfc99"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "b01b",
                            "value": 5,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1645568607214
        },
        "a-22": {
            "id": "a-22",
            "title": "Preloader",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|ec39399d-d585-1356-fb57-52f0b91f88e4"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|56f6ac9c-4956-d037-1e6c-7d6d4d73d3ec"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-14",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d65|56f6ac9c-4956-d037-1e6c-7d6d4d73d3ec"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-22-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|942069f8-2ee9-06e5-417b-4e3271dba4bf"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|73e4e046-6bb0-5559-d496-d1ebf376cf62"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|ec39399d-d585-1356-fb57-52f0b91f88e4"
                        },
                        "widthValue": 12,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|ec39399d-d585-1356-fb57-52f0b91f88e4"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|942069f8-2ee9-06e5-417b-4e3271dba4bf"
                        },
                        "widthValue": 12,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|942069f8-2ee9-06e5-417b-4e3271dba4bf"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|73e4e046-6bb0-5559-d496-d1ebf376cf62"
                        },
                        "widthValue": 12,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|73e4e046-6bb0-5559-d496-d1ebf376cf62"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|942069f8-2ee9-06e5-417b-4e3271dba4bf"
                        },
                        "widthValue": 12,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|942069f8-2ee9-06e5-417b-4e3271dba4bf"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|ec39399d-d585-1356-fb57-52f0b91f88e4"
                        },
                        "widthValue": 12,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|ec39399d-d585-1356-fb57-52f0b91f88e4"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d65|56f6ac9c-4956-d037-1e6c-7d6d4d73d3ec"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-15",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d65|56f6ac9c-4956-d037-1e6c-7d6d4d73d3ec"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1645653676422
        },
        "a-23": {
            "id": "a-23",
            "title": "reveal nums",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-14",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-15",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-16",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-17",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-18",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-19",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-20",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-21",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev",
                            "selectorGuids": ["789f030c-fdbd-a19d-7026-354064f18af1"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1645715243608
        },
        "a-24": {
            "id": "a-24",
            "title": "reveal nums 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev2",
                            "selectorGuids": ["d35f5684-dd7d-0bd3-4569-c2248de5f4b8"]
                        },
                        "heightValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev2",
                            "selectorGuids": ["d35f5684-dd7d-0bd3-4569-c2248de5f4b8"]
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev2",
                            "selectorGuids": ["d35f5684-dd7d-0bd3-4569-c2248de5f4b8"]
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev2",
                            "selectorGuids": ["d35f5684-dd7d-0bd3-4569-c2248de5f4b8"]
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev2",
                            "selectorGuids": ["d35f5684-dd7d-0bd3-4569-c2248de5f4b8"]
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev2",
                            "selectorGuids": ["d35f5684-dd7d-0bd3-4569-c2248de5f4b8"]
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev2",
                            "selectorGuids": ["d35f5684-dd7d-0bd3-4569-c2248de5f4b8"]
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev2",
                            "selectorGuids": ["d35f5684-dd7d-0bd3-4569-c2248de5f4b8"]
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev2",
                            "selectorGuids": ["d35f5684-dd7d-0bd3-4569-c2248de5f4b8"]
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev2",
                            "selectorGuids": ["d35f5684-dd7d-0bd3-4569-c2248de5f4b8"]
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev2",
                            "selectorGuids": ["d35f5684-dd7d-0bd3-4569-c2248de5f4b8"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1645715243608
        },
        "a-25": {
            "id": "a-25",
            "title": "reveal nums 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev3",
                            "selectorGuids": ["25a2a954-db8d-b543-0791-5e866fde4187"]
                        },
                        "heightValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev3",
                            "selectorGuids": ["25a2a954-db8d-b543-0791-5e866fde4187"]
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev3",
                            "selectorGuids": ["25a2a954-db8d-b543-0791-5e866fde4187"]
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev3",
                            "selectorGuids": ["25a2a954-db8d-b543-0791-5e866fde4187"]
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev3",
                            "selectorGuids": ["25a2a954-db8d-b543-0791-5e866fde4187"]
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev3",
                            "selectorGuids": ["25a2a954-db8d-b543-0791-5e866fde4187"]
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev3",
                            "selectorGuids": ["25a2a954-db8d-b543-0791-5e866fde4187"]
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev3",
                            "selectorGuids": ["25a2a954-db8d-b543-0791-5e866fde4187"]
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev3",
                            "selectorGuids": ["25a2a954-db8d-b543-0791-5e866fde4187"]
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev3",
                            "selectorGuids": ["25a2a954-db8d-b543-0791-5e866fde4187"]
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".f__rev3",
                            "selectorGuids": ["25a2a954-db8d-b543-0791-5e866fde4187"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1645715243608
        },
        "a-26": {
            "id": "a-26",
            "title": "pda fade",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "657995f4786f8660407c3d65|85496bf8-c704-6a14-8938-309440d1f53b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-3",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "657995f4786f8660407c3d65|85496bf8-c704-6a14-8938-309440d1f53b"
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "aa6f",
                            "value": 5,
                            "unit": "px"
                        }]
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "657995f4786f8660407c3d65|85496bf8-c704-6a14-8938-309440d1f53b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "657995f4786f8660407c3d65|85496bf8-c704-6a14-8938-309440d1f53b"
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "4241",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1645721444893
        },
        "a-14": {
            "id": "a-14",
            "title": "close team",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".crd__plus.crd__plus1",
                            "selectorGuids": ["3f02f03f-9590-ba09-4d20-39f4f4eb0d29", "81dff417-b7b2-e2c4-fd96-cbcab22aa9c4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cr__w.cr__w1",
                            "selectorGuids": ["823ca8ca-d1d9-1545-c1d3-9c38d0a2dfbd", "08927f1b-8da8-c812-c714-516c99328bae"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".crd__plus.crd__plus1",
                            "selectorGuids": ["3f02f03f-9590-ba09-4d20-39f4f4eb0d29", "81dff417-b7b2-e2c4-fd96-cbcab22aa9c4"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-2",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cr__w.cr__w1",
                            "selectorGuids": ["823ca8ca-d1d9-1545-c1d3-9c38d0a2dfbd", "08927f1b-8da8-c812-c714-516c99328bae"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "9e11",
                            "value": 5,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1645543900816
        },
        "a-13": {
            "id": "a-13",
            "title": "open team",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".cr__w.cr__w1",
                            "selectorGuids": ["823ca8ca-d1d9-1545-c1d3-9c38d0a2dfbd", "08927f1b-8da8-c812-c714-516c99328bae"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".crd__plus.crd__plus1",
                            "selectorGuids": ["3f02f03f-9590-ba09-4d20-39f4f4eb0d29", "81dff417-b7b2-e2c4-fd96-cbcab22aa9c4"]
                        },
                        "value": 0.002,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".cr__w.cr__w1",
                            "selectorGuids": ["823ca8ca-d1d9-1545-c1d3-9c38d0a2dfbd", "08927f1b-8da8-c812-c714-516c99328bae"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "e9df",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1645543900816
        },
        "a-16": {
            "id": "a-16",
            "title": "close team 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".crd__plus.crd__plus2",
                            "selectorGuids": ["3f02f03f-9590-ba09-4d20-39f4f4eb0d29", "e4d32629-4286-cda4-f2be-2c7325eb3631"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cr__w.cr__w3",
                            "selectorGuids": ["823ca8ca-d1d9-1545-c1d3-9c38d0a2dfbd", "5855a0dd-9966-5e4a-0d9b-b1f82bc1a187"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".crd__plus.crd__plus2",
                            "selectorGuids": ["3f02f03f-9590-ba09-4d20-39f4f4eb0d29", "e4d32629-4286-cda4-f2be-2c7325eb3631"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-3",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cr__w.cr__w3",
                            "selectorGuids": ["823ca8ca-d1d9-1545-c1d3-9c38d0a2dfbd", "5855a0dd-9966-5e4a-0d9b-b1f82bc1a187"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "9e11",
                            "value": 5,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1645543900816
        },
        "a-18": {
            "id": "a-18",
            "title": "open team 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".cr__w.cr__w3",
                            "selectorGuids": ["823ca8ca-d1d9-1545-c1d3-9c38d0a2dfbd", "5855a0dd-9966-5e4a-0d9b-b1f82bc1a187"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".crd__plus.crd__plus2",
                            "selectorGuids": ["3f02f03f-9590-ba09-4d20-39f4f4eb0d29", "e4d32629-4286-cda4-f2be-2c7325eb3631"]
                        },
                        "value": 0.002,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-6",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".cr__w.cr__w3",
                            "selectorGuids": ["823ca8ca-d1d9-1545-c1d3-9c38d0a2dfbd", "5855a0dd-9966-5e4a-0d9b-b1f82bc1a187"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "e9df",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1645543900816
        },
        "a-17": {
            "id": "a-17",
            "title": "close team 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".crd__plus.crd__plus3",
                            "selectorGuids": ["3f02f03f-9590-ba09-4d20-39f4f4eb0d29", "efeae85b-92a9-f3a7-0c8a-e31a4889e9eb"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cr__w.cr__w2",
                            "selectorGuids": ["823ca8ca-d1d9-1545-c1d3-9c38d0a2dfbd", "7ac17244-6191-c306-7a6d-53593058d2ce"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".crd__plus.crd__plus3",
                            "selectorGuids": ["3f02f03f-9590-ba09-4d20-39f4f4eb0d29", "efeae85b-92a9-f3a7-0c8a-e31a4889e9eb"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-3",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".cr__w.cr__w2",
                            "selectorGuids": ["823ca8ca-d1d9-1545-c1d3-9c38d0a2dfbd", "7ac17244-6191-c306-7a6d-53593058d2ce"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "9e11",
                            "value": 5,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1645543900816
        },
        "a-19": {
            "id": "a-19",
            "title": "open team 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".cr__w.cr__w2",
                            "selectorGuids": ["823ca8ca-d1d9-1545-c1d3-9c38d0a2dfbd", "7ac17244-6191-c306-7a6d-53593058d2ce"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".crd__plus.crd__plus3",
                            "selectorGuids": ["3f02f03f-9590-ba09-4d20-39f4f4eb0d29", "efeae85b-92a9-f3a7-0c8a-e31a4889e9eb"]
                        },
                        "value": 0.002,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-6",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".cr__w.cr__w2",
                            "selectorGuids": ["823ca8ca-d1d9-1545-c1d3-9c38d0a2dfbd", "7ac17244-6191-c306-7a6d-53593058d2ce"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "e9df",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1645543900816
        },
        "a-27": {
            "id": "a-27",
            "title": "move cards",
            "continuousParameterGroups": [{
                "id": "a-27-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-27-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".card",
                                "selectorGuids": ["a45e299d-60ff-68f5-3cb0-bf2ae1572d00"]
                            },
                            "yValue": -10,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-27-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".card_shine",
                                "selectorGuids": ["0755bea7-9b69-3fe6-c46e-e0a5c9d3ab9a"]
                            },
                            "xValue": 20,
                            "xUnit": "em",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-27-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".card",
                                "selectorGuids": ["a45e299d-60ff-68f5-3cb0-bf2ae1572d00"]
                            },
                            "yValue": 10,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-27-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".card_shine",
                                "selectorGuids": ["0755bea7-9b69-3fe6-c46e-e0a5c9d3ab9a"]
                            },
                            "xValue": -20,
                            "xUnit": "em",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-27-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-27-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".card",
                                "selectorGuids": ["a45e299d-60ff-68f5-3cb0-bf2ae1572d00"]
                            },
                            "xValue": 10,
                            "yValue": null,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-27-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".card_shine",
                                "selectorGuids": ["0755bea7-9b69-3fe6-c46e-e0a5c9d3ab9a"]
                            },
                            "yValue": 20,
                            "xUnit": "PX",
                            "yUnit": "em",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-27-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".card",
                                "selectorGuids": ["a45e299d-60ff-68f5-3cb0-bf2ae1572d00"]
                            },
                            "xValue": -10,
                            "yValue": null,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-27-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".card_shine",
                                "selectorGuids": ["0755bea7-9b69-3fe6-c46e-e0a5c9d3ab9a"]
                            },
                            "yValue": -30,
                            "xUnit": "PX",
                            "yUnit": "em",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1646148098146
        },
        "a-28": {
            "id": "a-28",
            "title": "social rotate",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c_disk1",
                            "selectorGuids": ["929c3afe-378e-3625-cdda-e4a36dff38f5"]
                        },
                        "zValue": 3600,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-28-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c_disk2",
                            "selectorGuids": ["8850f2cd-c8d4-8eef-4a2f-5ccd254ac0d3"]
                        },
                        "zValue": -3600,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1646152484320
        },
        "a-29": {
            "id": "a-29",
            "title": "move chip",
            "continuousParameterGroups": [{
                "id": "a-29-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-29-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chip",
                                "selectorGuids": ["2ebefac3-be9d-86c0-b14d-c1835efee9f4"]
                            },
                            "yValue": -10,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-29-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chip__shine",
                                "selectorGuids": ["d2eb0a20-36c9-4791-afa4-2db020663eda"]
                            },
                            "xValue": 20,
                            "xUnit": "em",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-29-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chip",
                                "selectorGuids": ["2ebefac3-be9d-86c0-b14d-c1835efee9f4"]
                            },
                            "yValue": 10,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-29-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chip__shine",
                                "selectorGuids": ["d2eb0a20-36c9-4791-afa4-2db020663eda"]
                            },
                            "xValue": -20,
                            "xUnit": "em",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-29-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-29-n-5",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chip",
                                "selectorGuids": ["2ebefac3-be9d-86c0-b14d-c1835efee9f4"]
                            },
                            "xValue": 10,
                            "yValue": null,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-29-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chip__shine",
                                "selectorGuids": ["d2eb0a20-36c9-4791-afa4-2db020663eda"]
                            },
                            "yValue": 20,
                            "xUnit": "PX",
                            "yUnit": "em",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-29-n-7",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chip",
                                "selectorGuids": ["2ebefac3-be9d-86c0-b14d-c1835efee9f4"]
                            },
                            "xValue": -10,
                            "yValue": null,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-29-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".chip__shine",
                                "selectorGuids": ["d2eb0a20-36c9-4791-afa4-2db020663eda"]
                            },
                            "yValue": -30,
                            "xUnit": "PX",
                            "yUnit": "em",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1646148098146
        },
        "a-30": {
            "id": "a-30",
            "title": "oldtext 5",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1644373628682
        },
        "a-31": {
            "id": "a-31",
            "title": "oldtext 6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1000,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d25|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1644373628682
        },
        "a-32": {
            "id": "a-32",
            "title": "oldtext three 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1000,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d25|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1644373628682
        },
        "a-34": {
            "id": "a-34",
            "title": "Preloader WebGL",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".pr1",
                            "selectorGuids": ["bf3b4577-95b7-68c6-bc60-4523972bce27"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".pre",
                            "selectorGuids": ["128e03d9-b916-3ef9-b08c-02cb1883ab41"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".pr2",
                            "selectorGuids": ["1ad56d2b-e84c-ebcd-5af1-8b6db6fb979f"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".pr3",
                            "selectorGuids": ["bfd0a28c-befc-099e-7f2e-2a420569f865"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".pr1",
                            "selectorGuids": ["bf3b4577-95b7-68c6-bc60-4523972bce27"]
                        },
                        "widthValue": 12,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".pr1",
                            "selectorGuids": ["bf3b4577-95b7-68c6-bc60-4523972bce27"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".pr2",
                            "selectorGuids": ["1ad56d2b-e84c-ebcd-5af1-8b6db6fb979f"]
                        },
                        "widthValue": 12,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".pr2",
                            "selectorGuids": ["1ad56d2b-e84c-ebcd-5af1-8b6db6fb979f"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".pr3",
                            "selectorGuids": ["bfd0a28c-befc-099e-7f2e-2a420569f865"]
                        },
                        "widthValue": 12,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".pr3",
                            "selectorGuids": ["bfd0a28c-befc-099e-7f2e-2a420569f865"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".pr2",
                            "selectorGuids": ["1ad56d2b-e84c-ebcd-5af1-8b6db6fb979f"]
                        },
                        "widthValue": 12,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".pr2",
                            "selectorGuids": ["1ad56d2b-e84c-ebcd-5af1-8b6db6fb979f"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-14",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".pr1",
                            "selectorGuids": ["bf3b4577-95b7-68c6-bc60-4523972bce27"]
                        },
                        "widthValue": 12,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-15",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".pr1",
                            "selectorGuids": ["bf3b4577-95b7-68c6-bc60-4523972bce27"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1645653676422
        },
        "a-35": {
            "id": "a-35",
            "title": "webgl hide",
            "continuousParameterGroups": [{
                "id": "a-35-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-35-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "657995f4786f8660407c3d25|d37b0aee-540b-bc84-2151-591abdb35207"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-35-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "657995f4786f8660407c3d25|d37b0aee-540b-bc84-2151-591abdb35207"
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 10,
                    "actionItems": [{
                        "id": "a-35-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "657995f4786f8660407c3d25|d37b0aee-540b-bc84-2151-591abdb35207"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-35-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "657995f4786f8660407c3d25|d37b0aee-540b-bc84-2151-591abdb35207"
                            },
                            "xValue": 1.3,
                            "yValue": 1.3,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1653852207797
        },
        "a-36": {
            "id": "a-36",
            "title": "oldtext 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1644373628682
        },
        "a-37": {
            "id": "a-37",
            "title": "oldtext 8",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1000,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "id": "657995f4786f8660407c3d62|bd1ba191-f268-d579-9076-57139f2e5abd"
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|c0e863ae-8d81-ae75-ddcf-74e35f7f13a1"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1644373628682
        },
        "a-38": {
            "id": "a-38",
            "title": "oldtext three 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1000,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 20,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 30,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 40,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 50,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 60,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 70,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 80,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "657995f4786f8660407c3d62|f2efabb4-6d42-0be1-de0d-22fed9b7b69f"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1644373628682
        },
        "a-39": {
            "id": "a-39",
            "title": "webgl hide 2",
            "continuousParameterGroups": [{
                "id": "a-39-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-39-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "657995f4786f8660407c3d62|d37b0aee-540b-bc84-2151-591abdb35207"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 10,
                    "actionItems": [{
                        "id": "a-39-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "657995f4786f8660407c3d62|d37b0aee-540b-bc84-2151-591abdb35207"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1653852207797
        },
        "a-44": {
            "id": "a-44",
            "title": "preload__2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "657995f4786f8660407c3d5c|4584a906-3f87-92c6-dc40-87a8c99ed5ac"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-44-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "657995f4786f8660407c3d5c|4584a906-3f87-92c6-dc40-87a8c99ed5ac"
                        },
                        "value": "flex"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1675800375497
        },
        "a-48": {
            "id": "a-48",
            "title": "webgl hide 4",
            "continuousParameterGroups": [{
                "id": "a-48-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-48-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65d0e44efb74ef2ae68f7e6a|d37b0aee-540b-bc84-2151-591abdb35207"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-48-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65d0e44efb74ef2ae68f7e6a|d37b0aee-540b-bc84-2151-591abdb35207"
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 10,
                    "actionItems": [{
                        "id": "a-48-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65d0e44efb74ef2ae68f7e6a|d37b0aee-540b-bc84-2151-591abdb35207"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-48-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65d0e44efb74ef2ae68f7e6a|d37b0aee-540b-bc84-2151-591abdb35207"
                            },
                            "xValue": 1.3,
                            "yValue": 1.3,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1653852207797
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});