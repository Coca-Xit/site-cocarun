(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [676], {
        4063: function(e) {
            "use strict";
            e.exports = function e(t, n) {
                if (t === n) return !0;
                if (t && n && "object" == typeof t && "object" == typeof n) {
                    if (t.constructor !== n.constructor) return !1;
                    if (Array.isArray(t)) {
                        if ((a = t.length) != n.length) return !1;
                        for (i = a; 0 != i--;)
                            if (!e(t[i], n[i])) return !1;
                        return !0
                    }
                    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
                    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
                    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
                    if ((a = (o = Object.keys(t)).length) !== Object.keys(n).length) return !1;
                    for (i = a; 0 != i--;)
                        if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
                    for (i = a; 0 != i--;) {
                        var a, i, o, r = o[i];
                        if (!e(t[r], n[r])) return !1
                    }
                    return !0
                }
                return t != t && n != n
            }
        },
        9090: function(e) {
            function t(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(Error("Failed to load " + this.src), e)
                }
            }

            function n(e, t) {
                e.onreadystatechange = function() {
                    ("complete" == this.readyState || "loaded" == this.readyState) && (this.onreadystatechange = null, t(null, e))
                }
            }
            e.exports = function(e, a, i) {
                var o = document.head || document.getElementsByTagName("head")[0],
                    r = document.createElement("script");
                "function" == typeof a && (i = a, a = {}), a = a || {}, i = i || function() {}, r.type = a.type || "text/javascript", r.charset = a.charset || "utf8", r.async = !("async" in a) || !!a.async, r.src = e, a.attrs && function(e, t) {
                    for (var n in t) e.setAttribute(n, t[n])
                }(r, a.attrs), a.text && (r.text = "" + a.text), ("onload" in r ? t : n)(r, i), r.onload || t(r, i), o.appendChild(r)
            }
        },
        6472: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/home/[user]", function() {
                return n(5324)
            }])
        },
        5324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return S
                },
                default: function() {
                    return A
                }
            });
            var a = n(5893),
                i = n(3473),
                o = n.n(i),
                r = n(9008),
                s = n.n(r),
                l = n(4298),
                c = n.n(l);
            n(5227);
            var d = n(5697),
                u = n.n(d),
                p = n(7294),
                f = n(4063),
                y = n.n(f),
                h = n(1062),
                m = n.n(h),
                g = Object.defineProperty,
                v = Object.defineProperties,
                _ = Object.getOwnPropertyDescriptors,
                b = Object.getOwnPropertySymbols,
                P = Object.prototype.hasOwnProperty,
                x = Object.prototype.propertyIsEnumerable,
                w = (e, t, n) => t in e ? g(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                k = (e, t) => {
                    for (var n in t || (t = {})) P.call(t, n) && w(e, n, t[n]);
                    if (b)
                        for (var n of b(t)) x.call(t, n) && w(e, n, t[n]);
                    return e
                },
                I = (e, t) => v(e, _(t)),
                j = (e, t, n) => new Promise((a, i) => {
                    var o = e => {
                            try {
                                s(n.next(e))
                            } catch (t) {
                                i(t)
                            }
                        },
                        r = e => {
                            try {
                                s(n.throw(e))
                            } catch (t) {
                                i(t)
                            }
                        },
                        s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(o, r);
                    s((n = n.apply(e, t)).next())
                });

            function B(e = {}) {
                return I(k({}, e), {
                    height: 0,
                    width: 0,
                    playerVars: I(k({}, e.playerVars), {
                        autoplay: 0,
                        start: 0,
                        end: 0
                    })
                })
            }
            var E = {
                    videoId: u().string,
                    id: u().string,
                    className: u().string,
                    iframeClassName: u().string,
                    style: u().object,
                    title: u().string,
                    loading: u().oneOf(["lazy", "eager"]),
                    opts: u().objectOf(u().any),
                    onReady: u().func,
                    onError: u().func,
                    onPlay: u().func,
                    onPause: u().func,
                    onEnd: u().func,
                    onStateChange: u().func,
                    onPlaybackRateChange: u().func,
                    onPlaybackQualityChange: u().func
                },
                N = class extends p.Component {
                    constructor(e) {
                        super(e), this.destroyPlayerPromise = void 0, this.onPlayerReady = e => {
                            var t, n;
                            return null == (n = (t = this.props).onReady) ? void 0 : n.call(t, e)
                        }, this.onPlayerError = e => {
                            var t, n;
                            return null == (n = (t = this.props).onError) ? void 0 : n.call(t, e)
                        }, this.onPlayerStateChange = e => {
                            var t, n, a, i, o, r, s, l;
                            switch (null == (n = (t = this.props).onStateChange) || n.call(t, e), e.data) {
                                case N.PlayerState.ENDED:
                                    null == (i = (a = this.props).onEnd) || i.call(a, e);
                                    break;
                                case N.PlayerState.PLAYING:
                                    null == (r = (o = this.props).onPlay) || r.call(o, e);
                                    break;
                                case N.PlayerState.PAUSED:
                                    null == (l = (s = this.props).onPause) || l.call(s, e)
                            }
                        }, this.onPlayerPlaybackRateChange = e => {
                            var t, n;
                            return null == (n = (t = this.props).onPlaybackRateChange) ? void 0 : n.call(t, e)
                        }, this.onPlayerPlaybackQualityChange = e => {
                            var t, n;
                            return null == (n = (t = this.props).onPlaybackQualityChange) ? void 0 : n.call(t, e)
                        }, this.destroyPlayer = () => this.internalPlayer ? (this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0), this.destroyPlayerPromise) : Promise.resolve(), this.createPlayer = () => {
                            if ("undefined" == typeof document) return;
                            if (this.destroyPlayerPromise) {
                                this.destroyPlayerPromise.then(this.createPlayer);
                                return
                            }
                            let e = I(k({}, this.props.opts), {
                                videoId: this.props.videoId
                            });
                            this.internalPlayer = m()(this.container, e), this.internalPlayer.on("ready", this.onPlayerReady), this.internalPlayer.on("error", this.onPlayerError), this.internalPlayer.on("stateChange", this.onPlayerStateChange), this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange), this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange), (this.props.title || this.props.loading) && this.internalPlayer.getIframe().then(e => {
                                this.props.title && e.setAttribute("title", this.props.title), this.props.loading && e.setAttribute("loading", this.props.loading)
                            })
                        }, this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer), this.updatePlayer = () => {
                            var e;
                            null == (e = this.internalPlayer) || e.getIframe().then(e => {
                                this.props.id ? e.setAttribute("id", this.props.id) : e.removeAttribute("id"), this.props.iframeClassName ? e.setAttribute("class", this.props.iframeClassName) : e.removeAttribute("class"), this.props.opts && this.props.opts.width ? e.setAttribute("width", this.props.opts.width.toString()) : e.removeAttribute("width"), this.props.opts && this.props.opts.height ? e.setAttribute("height", this.props.opts.height.toString()) : e.removeAttribute("height"), this.props.title ? e.setAttribute("title", this.props.title) : e.setAttribute("title", "YouTube video player"), this.props.loading ? e.setAttribute("loading", this.props.loading) : e.removeAttribute("loading")
                            })
                        }, this.getInternalPlayer = () => this.internalPlayer, this.updateVideo = () => {
                            var e, t, n, a;
                            if (void 0 === this.props.videoId || null === this.props.videoId) {
                                null == (e = this.internalPlayer) || e.stopVideo();
                                return
                            }
                            let i = !1,
                                o = {
                                    videoId: this.props.videoId
                                };
                            if ((null == (t = this.props.opts) ? void 0 : t.playerVars) && (i = 1 === this.props.opts.playerVars.autoplay, "start" in this.props.opts.playerVars && (o.startSeconds = this.props.opts.playerVars.start), "end" in this.props.opts.playerVars && (o.endSeconds = this.props.opts.playerVars.end)), i) {
                                null == (n = this.internalPlayer) || n.loadVideoById(o);
                                return
                            }
                            null == (a = this.internalPlayer) || a.cueVideoById(o)
                        }, this.refContainer = e => {
                            this.container = e
                        }, this.container = null, this.internalPlayer = null
                    }
                    componentDidMount() {
                        this.createPlayer()
                    }
                    componentDidUpdate(e) {
                        return j(this, null, function*() {
                            var t, n, a, i, o, r;
                            t = this.props, (e.id !== t.id || e.className !== t.className || (null == (n = e.opts) ? void 0 : n.width) !== (null == (a = t.opts) ? void 0 : a.width) || (null == (i = e.opts) ? void 0 : i.height) !== (null == (o = t.opts) ? void 0 : o.height) || e.iframeClassName !== t.iframeClassName || e.title !== t.title) && this.updatePlayer(), r = this.props, e.videoId === r.videoId && y()(B(e.opts), B(r.opts)) || (yield this.resetPlayer()),
                                function(e, t) {
                                    var n, a;
                                    if (e.videoId !== t.videoId) return !0;
                                    let i = (null == (n = e.opts) ? void 0 : n.playerVars) || {},
                                        o = (null == (a = t.opts) ? void 0 : a.playerVars) || {};
                                    return i.start !== o.start || i.end !== o.end
                                }(e, this.props) && this.updateVideo()
                        })
                    }
                    componentWillUnmount() {
                        this.destroyPlayer()
                    }
                    render() {
                        return p.createElement("div", {
                            className: this.props.className,
                            style: this.props.style
                        }, p.createElement("div", {
                            id: this.props.id,
                            className: this.props.iframeClassName,
                            ref: this.refContainer
                        }))
                    }
                },
                C = N;
            C.propTypes = E, C.defaultProps = {
                videoId: "",
                id: "",
                className: "",
                iframeClassName: "",
                style: {},
                title: "",
                loading: void 0,
                opts: {},
                onReady: () => {},
                onError: () => {},
                onPlay: () => {},
                onPause: () => {},
                onEnd: () => {},
                onStateChange: () => {},
                onPlaybackRateChange: () => {},
                onPlaybackQualityChange: () => {}
            }, C.PlayerState = {
                UNSTARTED: -1,
                ENDED: 0,
                PLAYING: 1,
                PAUSED: 2,
                BUFFERING: 3,
                CUED: 5
            };
            var S = !0;

            function A(e) {
                var t, n, i, r, l, d, u, p, f, y, h, m, g, v, _, b, P, x, w, k, I, j, B, E, N, S, A, O, T;
                let V = e.showFrame;

                function M(e) {
                    var t = e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);
                    return !!t && 11 == t[7].length && t[7]
                }
                let R = (null === (t = e.user) || void 0 === t ? void 0 : t.musics) || [],
                    D = (null === (n = e.user) || void 0 === n ? void 0 : null === (i = n.presence) || void 0 === i ? void 0 : null === (r = i.activities) || void 0 === r ? void 0 : r.length) > 0 ? e.user.presence.activities : [],
                    L = {
                        nowPlaying: 0,
                        presence: 0
                    };

                function F(e) {
                    if (R.length <= 0) return;
                    L.nowPlaying + 1 >= R.length ? L.nowPlaying = 0 : L.nowPlaying++;
                    let t = document.getElementById("nowPlaying");
                    t.innerText = " ".concat(R[L.nowPlaying].name), e.target.loadVideoById(M(R[L.nowPlaying].link)), e.target.playVideo()
                }
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s(), {
                        children: (0, a.jsx)("title", {
                            children: (null === (l = e.user) || void 0 === l ? void 0 : l.title) || (null === (d = e.user) || void 0 === d ? void 0 : d.name) || (null === (u = e.user) || void 0 === u ? void 0 : u.user)
                        })
                    }), (0, a.jsx)(c(), {
                        children: 'document.getElementsByTagName(\'body\')[0].style.setProperty("--bg-image", "url('.concat((null === (p = e.user) || void 0 === p ? void 0 : p.background) || "", ')");\n                    document.getElementsByTagName(\'body\')[0].style.setProperty("--bg-color", "#1E1E1E");')
                    }), (0, a.jsx)("script", {
                        async: !0,
                        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2341151340961274",
                        crossorigin: "anonymous"
                    }), (0, a.jsx)("div", {
                        className: "".concat(R.length > 0 ? "".concat(o().initialCase) : "".concat(o().hidden)),
                        id: "clickAnywhere",
                        onClick: function() {
                            let t = "".concat(e.user.title ? e.user.title : e.user.name ? e.user.name : e.user.user, "ﾠﾠﾠﾠﾠ"),
                                n = new function(e, t, n) {
                                    var a = {},
                                        i = 0,
                                        o = e.length;

                                    function r() {
                                        (i += 1) > o - 1 && (i = 0);
                                        var t, a = i,
                                            r = a + n;
                                        r < o - 1 ? t = e.substring(a, r) : (r -= o, t = e.substring(a, o) + e.substring(0, r)), document.title = t
                                    }
                                    return a.init = function() {
                                        setInterval(r, t)
                                    }, a
                                }(t, 200, t.length);
                            n.init();
                            let a = document.getElementById("content");
                            a.classList.remove("".concat(o().hidden)), a.classList.add("".concat(o().fadeIn));
                            let i = document.getElementById("clickAnywhere");
                            i.style.position = "fixed", i.classList.add("".concat(o().fadeOut)), i.addEventListener("animationend", e => {
                                "animationend" === e.type && (i.classList.add("".concat(o().hidden)), i.classList.remove("".concat(o().initialCase)))
                            }, !1)
                        },
                        children: (0, a.jsx)("p", {
                            children: "Sai Puta "
                        })
                    }), (0, a.jsx)("div", {
                        className: "".concat(o().fadeIn),
                        id: "content",
                        children: (0, a.jsxs)("div", {
                            className: "".concat(o().content),
                            style: {
                                "--primaryColor": "".concat((null === (f = e.user) || void 0 === f ? void 0 : null === (y = f.colors) || void 0 === y ? void 0 : y.primary) || ""),
                                "--secondaryColor": "".concat((null === (h = e.user) || void 0 === h ? void 0 : null === (m = h.colors) || void 0 === m ? void 0 : m.secondary) || ""),
                                "--balloon-border-radius": "5px",
                                "--balloon-color": "".concat((null === (g = e.user) || void 0 === g ? void 0 : null === (v = g.colors) || void 0 === v ? void 0 : v.secondary) || "")
                            },
                            children: [(0, a.jsxs)("div", {
                                className: "".concat(o().box),
                                children: [(0, a.jsxs)("div", {
                                    className: o().doubleBoxes,
                                    children: [(0, a.jsxs)("div", {
                                        className: "".concat(o().userInfos, " ").concat((null === (_ = e.user) || void 0 === _ ? void 0 : null === (b = _.presence) || void 0 === b ? void 0 : b.active) === !0 && D.length > 0 ? null : o().completeBox),
                                        children: [V && (0, a.jsx)("div", {
                                            className: o().profileFrame,
                                            children: (0, a.jsx)("img", {
                                                src: "/ruta/imagen-marco.png",
                                                alt: "Marco de perfil"
                                            })
                                        }), (0, a.jsx)("img", {
                                            className: "".concat(o().profileImage, " ").concat(V ? o().avatarFrame : ""),
                                            src: "".concat((null === (P = e.user) || void 0 === P ? void 0 : P.avatar) ? e.user.avatar : (null === (x = e.user) || void 0 === x ? void 0 : x.profilePicture) ? "https://cdn.discordapp.com/avatars/".concat(e.user.id, "/").concat(e.user.profilePicture, ".").concat(e.user.profilePicture.includes("a_") ? "gif" : "png", "?size=2048") : "/cdn/neon.png")
                                        }), (0, a.jsxs)("div", {
                                            className: o().infos,
                                            children: [(0, a.jsxs)("div", {
                                                className: o().views,
                                                children: [(0, a.jsx)("i", {
                                                    className: "fa-regular fa-eye ".concat(o().eyeViews)
                                                }), (0, a.jsx)("p", {
                                                    className: o().textViews,
                                                    children: e.user && void 0 !== e.user.views ? e.user.views : 0
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: o().tagInfos,
                                                children: [e.user && e.user.status && e.user.status.active && (0, a.jsx)("img", {
                                                    className: o().statusImg,
                                                    src: "/cdn/".concat(e.user.status.actual ? e.user.status.actual : "offline", ".png")
                                                }), (0, a.jsx)("h6", {
                                                    className: o().tag,
                                                    children: "".concat(e.user ? e.user.name || e.user.user : "")
                                                }), (0, a.jsx)("div", {
                                                    className: o().displayBadges,
                                                    children: e.user && e.user.badges.map(t => (0, a.jsx)(a.Fragment, {
                                                        children: e.badges.find(e => e.id == t).image && (0, a.jsx)("div", {
                                                            "aria-label": "".concat(e.badges.find(e => e.id == t).name),
                                                            "data-balloon-pos": "down",
                                                            children: (0, a.jsx)("img", {
                                                                className: o().nameBadge,
                                                                src: "".concat(e.badges.find(e => e.id == t).image)
                                                            })
                                                        })
                                                    }))
                                                })]
                                            }), e.user && e.user.customStatus.active && (0, a.jsx)("p", {
                                                className: o().textViews,
                                                children: null === (w = e.user) || void 0 === w ? void 0 : null === (k = w.customStatus) || void 0 === k ? void 0 : k.content
                                            })]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: o().presenceInfos,
                                        style: (null === (I = e.user) || void 0 === I ? void 0 : null === (j = I.presence) || void 0 === j ? void 0 : j.active) === !0 && (null == D ? void 0 : D.length) > 0 ? (null == D ? void 0 : D.length) <= 0 ? {
                                            justifyContent: "center"
                                        } : null : {
                                            display: "none"
                                        },
                                        onClick: function() {
                                            if (D.length <= 0) return;
                                            L.presence + 1 >= D.length ? L.presence = 0 : L.presence++;
                                            let e = document.getElementById("presenceImg");
                                            e.src = "".concat(D[L.presence].image);
                                            let t = document.getElementById("presenceTitle");
                                            t.innerText = "".concat(D[L.presence].title.length > 40 ? "".concat(D[L.presence].title.slice(0, 40), "...") : D[L.presence].title);
                                            let n = document.getElementById("presenceDescription");
                                            n.innerText = "".concat(D[L.presence].description.length > 40 ? "".concat(D[L.presence].description.slice(0, 40), "...") : D[L.presence].description);
                                            let a = document.getElementById("presenceAditional");
                                            a.innerText = D[L.presence].aditional ? "".concat(D[L.presence].aditional.length > 40 ? "".concat(D[L.presence].aditional.slice(0, 40), "...") : D[L.presence].aditional) : ""
                                        },
                                        children: (null === (N = e.user) || void 0 === N ? void 0 : null === (S = N.presence) || void 0 === S ? void 0 : S.active) === !0 && (null == D ? void 0 : D.length) > 0 ? (0, a.jsxs)(a.Fragment, {
                                            children: [D[L.presence].image && (0, a.jsx)("img", {
                                                id: "presenceImg",
                                                className: o().presenceImage,
                                                src: "".concat(D[L.presence].image)
                                            }), (0, a.jsxs)("div", {
                                                className: o().presenceTexts,
                                                children: [(0, a.jsx)("h4", {
                                                    id: "presenceTitle",
                                                    className: o().presenceTitle,
                                                    children: "".concat(D[L.presence].title.length > 40 ? "".concat(D[L.presence].title.slice(0, 40), "...") : D[L.presence].title)
                                                }), D[L.presence].description && (0, a.jsx)("h4", {
                                                    id: "presenceDescription",
                                                    className: o().presenceDescription,
                                                    children: "".concat(D[L.presence].description.length > 40 ? "".concat(D[L.presence].description.slice(0, 40), "...") : D[L.presence].description)
                                                }), D[L.presence].aditional && (0, a.jsx)("h4", {
                                                    id: "presenceAditional",
                                                    className: o().presenceInformations,
                                                    children: "".concat(D[L.presence].aditional.length > 40 ? "".concat(D[L.presence].aditional.slice(0, 40), "...") : D[L.presence].aditional)
                                                })]
                                            })]
                                        }) : (0, a.jsx)(a.Fragment, {
                                            children: (0, a.jsx)("p", {
                                                className: o().textPresence,
                                                children: "The user isn't playing anything"
                                            })
                                        })
                                    })]
                                }), (() => {
                                    var t, n, i;
                                    if ((null === (t = e.user) || void 0 === t ? void 0 : null === (n = t.badges) || void 0 === n ? void 0 : n.length) > 0 && e.user.showBadges && (null === (i = e.user.roles) || void 0 === i ? void 0 : i.includes("1137748990654423103"))) return (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsx)("div", {
                                            className: o().badges,
                                            children: e.user.badges.map(t => (0, a.jsxs)("div", {
                                                className: o().badge,
                                                style: {
                                                    borderColor: "".concat(e.badges.find(e => e.id == t).color)
                                                },
                                                children: [e.badges.find(e => e.id == t).image && (0, a.jsx)("img", {
                                                    src: "".concat(e.badges.find(e => e.id == t).image)
                                                }), (0, a.jsx)("p", {
                                                    children: "".concat(e.badges.find(e => e.id == t).name)
                                                })]
                                            }, t))
                                        })
                                    })
                                })(), (null === (A = e.user) || void 0 === A ? void 0 : null === (O = A.badges) || void 0 === O ? void 0 : O.length) <= 0 && null == e.user.aboutMe ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)("div", {
                                        className: o().aboutMe,
                                        children: (null === (T = e.user) || void 0 === T ? void 0 : T.aboutMe) != null && (0, a.jsx)(a.Fragment, {
                                            children: (0, a.jsx)("p", {
                                                className: o().textAboutMe,
                                                children: e.user.aboutMe.split("\n").map(e => (0, a.jsxs)(a.Fragment, {
                                                    children: [e, (0, a.jsx)("br", {})]
                                                }))
                                            })
                                        })
                                    })
                                }), (null === (B = e.user) || void 0 === B ? void 0 : B.musics.length) > 0 && (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsxs)("div", {
                                        className: o().mediaPlayer,
                                        children: [(0, a.jsx)(C, {
                                            videoId: "".concat(M(R[L.nowPlaying].link)),
                                            opts: {
                                                height: "0",
                                                width: "0",
                                                playerVars: {
                                                    autoplay: 0
                                                }
                                            },
                                            style: {
                                                display: "none"
                                            },
                                            onReady: function(e) {
                                                let t = !1,
                                                    n = document.getElementById("clickAnywhere");
                                                setInterval(() => {
                                                    n.classList.contains("".concat(o().fadeOut)) && !t && (e.target.playVideo(), t = !0)
                                                }, 100), e.target.playVideo();
                                                let a = document.getElementById("slider");
                                                a.max = e.target.getDuration();
                                                let i = !1;
                                                a.onchange = () => {
                                                    e.target.seekTo(a.value)
                                                }, a.onmousedown = () => {
                                                    i = !0
                                                }, a.onmouseup = () => {
                                                    i = !1
                                                };
                                                let r = document.getElementById("pause"),
                                                    s = document.getElementById("play");
                                                r.onclick = () => {
                                                    e.target.pauseVideo(), s.style.display = "block", r.style.display = "none"
                                                }, s.onclick = () => {
                                                    e.target.playVideo(), s.style.display = "none", r.style.display = "block"
                                                };
                                                let l = document.getElementById("backward"),
                                                    c = document.getElementById("forward");
                                                c.onclick = () => {
                                                    F(e), s.style.display = "none", r.style.display = "block"
                                                }, l.onclick = () => {
                                                    (function(e) {
                                                        if (R.length <= 0) return;
                                                        Math.round(Number(e.target.getCurrentTime())) < Number(2 * Math.round(Number(e.target.getDuration())) / 100) && (0 == L.nowPlaying ? L.nowPlaying = R.length - 1 : L.nowPlaying--);
                                                        let t = document.getElementById("nowPlaying");
                                                        t.innerText = " ".concat(R[L.nowPlaying].name.length > 50 ? "".concat(R[L.nowPlaying].name.slice(0, 50), "...") : R[L.nowPlaying].name), e.target.loadVideoById(M(R[L.nowPlaying].link)), e.target.playVideo()
                                                    })(e), s.style.display = "none", r.style.display = "block"
                                                };
                                                let d = document.getElementById("volume");
                                                d.onmousemove = () => {
                                                    e.target.setVolume("".concat(d.value, "0"))
                                                }, setInterval(() => {
                                                    let t = e.target.getCurrentTime();
                                                    0 != t && !0 != i && (a.value = t)
                                                }, 100)
                                            },
                                            onStateChange: function(e) {
                                                0 == e.data && F(e)
                                            }
                                        }), (0, a.jsxs)("p", {
                                            id: "nowPlaying",
                                            children: [" ", "".concat(R[L.nowPlaying].name.length > 50 ? "".concat(R[L.nowPlaying].name.slice(0, 50), "...") : R[L.nowPlaying].name)]
                                        }), (0, a.jsx)("input", {
                                            className: o().slider,
                                            id: "slider",
                                            type: "range",
                                            min: "0"
                                        }), (0, a.jsxs)("div", {
                                            className: o().mediaControls,
                                            children: [(0, a.jsx)("i", {
                                                className: "fa-solid fa-backward-step ".concat(o().backwardIcon),
                                                id: "backward"
                                            }), (0, a.jsx)("i", {
                                                className: "fa-solid fa-circle-play ".concat(o().playIcon),
                                                id: "play"
                                            }), (0, a.jsx)("i", {
                                                className: "fa-solid fa-circle-pause ".concat(o().pauseIcon),
                                                id: "pause"
                                            }), (0, a.jsx)("i", {
                                                className: "fa-solid fa-forward-step ".concat(o().forwardIcon),
                                                id: "forward"
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: o().volumeControl,
                                            children: (0, a.jsx)("input", {
                                                className: o().volumeSlider,
                                                id: "volume",
                                                type: "range",
                                                min: "0",
                                                max: "10"
                                            })
                                        })]
                                    })
                                }), (null === (E = e.user) || void 0 === E ? void 0 : E.socialMedias.length) > 0 && (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)("div", {
                                        className: o().socialMediasBar,
                                        children: e.user.socialMedias.map(t => (0, a.jsx)("a", {
                                            target: "_blank",
                                            href: "".concat(t.link),
                                            children: (0, a.jsx)("div", {
                                                className: o().socialMedia,
                                                "aria-label": "".concat(e.socialMedias.find(e => e.id == t.id).name),
                                                "data-balloon-pos": "down",
                                                children: (0, a.jsx)("img", {
                                                    className: o().socialMediaImage,
                                                    src: "".concat(e.socialMedias.find(e => t.id == e.id).image)
                                                })
                                            })
                                        }, t.id))
                                    })
                                })]
                            }), e.user.roles.find(t => t.id == e.user.role) && e.user.copywrite && (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)("a", {
                                    href: "https://fir3.cc/",
                                    children: (0, a.jsx)("p", {
                                        className: o().copywrite,
                                        children: "LOGIN/REGISTER"
                                    })
                                })
                            })]
                        })
                    })]
                })
            }
        },
        3473: function(e) {
            e.exports = {
                fadeOut: "Biolink_fadeOut__Hg_CS",
                fadeIn: "Biolink_fadeIn__Isuq_",
                hidden: "Biolink_hidden__MsrMl",
                initialCase: "Biolink_initialCase__j5JYK",
                content: "Biolink_content__nasTR",
                box: "Biolink_box__kXcjm",
                divider: "Biolink_divider__IcT_m",
                doubleBoxes: "Biolink_doubleBoxes__iIZSs",
                userInfos: "Biolink_userInfos__6zXV4",
                presenceInfos: "Biolink_presenceInfos__336Vs",
                completeBox: "Biolink_completeBox__3Akif",
                infos: "Biolink_infos__VgzH9",
                tagInfos: "Biolink_tagInfos__gIS1L",
                views: "Biolink_views__6KtSf",
                textViews: "Biolink_textViews__RTw5l",
                profileImage: "Biolink_profileImage__oBqTZ",
                status: "Biolink_status__nPJui",
                statusImg: "Biolink_statusImg__7Bsea",
                statusText: "Biolink_statusText__3jX99",
                badges: "Biolink_badges__6y_Du",
                displayBadges: "Biolink_displayBadges__Nt4JW",
                badge: "Biolink_badge__vv8sP",
                nameBadge: "Biolink_nameBadge__le54P",
                dividerAbout: "Biolink_dividerAbout__2POcL",
                tag: "Biolink_tag__d_tyK",
                presenceImage: "Biolink_presenceImage__V2WRK",
                presenceTexts: "Biolink_presenceTexts__mQkf1",
                textPresence: "Biolink_textPresence__eZOSS",
                mediaPlayer: "Biolink_mediaPlayer__eM24S",
                presenceDescription: "Biolink_presenceDescription__NqRIf",
                presenceInformations: "Biolink_presenceInformations__v2CKu",
                aboutMe: "Biolink_aboutMe__veU08",
                textAboutMe: "Biolink_textAboutMe__Rn5Wi",
                slider: "Biolink_slider__MXJkC",
                mediaControls: "Biolink_mediaControls__JdZ3P",
                playIcon: "Biolink_playIcon__4nO5n",
                backwardIcon: "Biolink_backwardIcon__035Da",
                forwardIcon: "Biolink_forwardIcon__d7mIJ",
                pauseIcon: "Biolink_pauseIcon__fxijd",
                volumeControl: "Biolink_volumeControl__TGTuv",
                volumeIcon: "Biolink_volumeIcon__cdm0K",
                volumeSlider: "Biolink_volumeSlider__cR9PH",
                socialMediasBar: "Biolink_socialMediasBar__e8lkz",
                socialMedia: "Biolink_socialMedia__DsNC_",
                socialMediaImage: "Biolink_socialMediaImage__peLpA",
                notPresence: "Biolink_notPresence__SdQC3",
                copywrite: "Biolink_copywrite__OkxcT",
                avatarFrame: "Biolink_avatarFrame__i7MKV"
            }
        },
        5227: function() {},
        4298: function(e, t, n) {
            e.exports = n(3573)
        },
        2703: function(e, t, n) {
            "use strict";
            var a = n(414);

            function i() {}

            function o() {}
            o.resetWarningCache = i, e.exports = function() {
                function e(e, t, n, i, o, r) {
                    if (r !== a) {
                        var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: i
                };
                return n.PropTypes = n, n
            }
        },
        5697: function(e, t, n) {
            e.exports = n(2703)()
        },
        414: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        3988: function(e) {
            "use strict";
            e.exports = function() {
                var e = {},
                    t = {};
                return e.on = function(e, n) {
                    var a = {
                        name: e,
                        handler: n
                    };
                    return t[e] = t[e] || [], t[e].unshift(a), a
                }, e.off = function(e) {
                    var n = t[e.name].indexOf(e); - 1 !== n && t[e.name].splice(n, 1)
                }, e.trigger = function(e, n) {
                    var a, i = t[e];
                    if (i)
                        for (a = i.length; a--;) i[a].handler(n)
                }, e
            }
        },
        6006: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = (a = n(2275)) && a.__esModule ? a : {
                default: a
            };
            t.default = {
                pauseVideo: {
                    acceptableStates: [i.default.ENDED, i.default.PAUSED],
                    stateChangeRequired: !1
                },
                playVideo: {
                    acceptableStates: [i.default.ENDED, i.default.PLAYING],
                    stateChangeRequired: !1
                },
                seekTo: {
                    acceptableStates: [i.default.ENDED, i.default.PLAYING, i.default.PAUSED],
                    stateChangeRequired: !0,
                    timeout: 3e3
                }
            }, e.exports = t.default
        },
        9125: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = s(n(9215)),
                i = s(n(8255)),
                o = s(n(5279)),
                r = s(n(6006));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = (0, a.default)("youtube-player"),
                c = {};
            c.proxyEvents = function(e) {
                var t = {},
                    n = function(n) {
                        var a = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
                        t[a] = function(t) {
                            l('event "%s"', a, t), e.trigger(n, t)
                        }
                    },
                    a = !0,
                    i = !1,
                    r = void 0;
                try {
                    for (var s, c = o.default[Symbol.iterator](); !(a = (s = c.next()).done); a = !0) {
                        var d = s.value;
                        n(d)
                    }
                } catch (u) {
                    i = !0, r = u
                } finally {
                    try {
                        !a && c.return && c.return()
                    } finally {
                        if (i) throw r
                    }
                }
                return t
            }, c.promisifyPlayer = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = {},
                    a = function(a) {
                        t && r.default[a] ? n[a] = function() {
                            for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                            return e.then(function(e) {
                                var t = r.default[a],
                                    i = e.getPlayerState(),
                                    o = e[a].apply(e, n);
                                return t.stateChangeRequired || Array.isArray(t.acceptableStates) && -1 === t.acceptableStates.indexOf(i) ? new Promise(function(n) {
                                    e.addEventListener("onStateChange", function a() {
                                        var i = e.getPlayerState(),
                                            o = void 0;
                                        "number" == typeof t.timeout && (o = setTimeout(function() {
                                            e.removeEventListener("onStateChange", a), n()
                                        }, t.timeout)), Array.isArray(t.acceptableStates) && -1 !== t.acceptableStates.indexOf(i) && (e.removeEventListener("onStateChange", a), clearTimeout(o), n())
                                    })
                                }).then(function() {
                                    return o
                                }) : o
                            })
                        } : n[a] = function() {
                            for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                            return e.then(function(e) {
                                return e[a].apply(e, n)
                            })
                        }
                    },
                    o = !0,
                    s = !1,
                    l = void 0;
                try {
                    for (var c, d = i.default[Symbol.iterator](); !(o = (c = d.next()).done); o = !0) {
                        var u = c.value;
                        a(u)
                    }
                } catch (p) {
                    s = !0, l = p
                } finally {
                    try {
                        !o && d.return && d.return()
                    } finally {
                        if (s) throw l
                    }
                }
                return n
            }, t.default = c, e.exports = t.default
        },
        2275: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = {
                BUFFERING: 3,
                ENDED: 0,
                PAUSED: 2,
                PLAYING: 1,
                UNSTARTED: -1,
                VIDEO_CUED: 5
            }, e.exports = t.default
        },
        5279: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], e.exports = t.default
        },
        8255: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], e.exports = t.default
        },
        1062: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                i = s(n(3988)),
                o = s(n(5900)),
                r = s(n(9125));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = void 0;
            t.default = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = (0, i.default)();
                if (l || (l = (0, o.default)(s)), t.events) throw Error("Event handlers cannot be overwritten.");
                if ("string" == typeof e && !document.getElementById(e)) throw Error('Element "' + e + '" does not exist.');
                t.events = r.default.proxyEvents(s);
                var c = new Promise(function(n) {
                        (void 0 === e ? "undefined" : a(e)) === "object" && e.playVideo instanceof Function ? n(e) : l.then(function(a) {
                            var i = new a.Player(e, t);
                            return s.on("ready", function() {
                                n(i)
                            }), null
                        })
                    }),
                    d = r.default.promisifyPlayer(c, n);
                return d.on = s.on, d.off = s.off, d
            }, e.exports = t.default
        },
        5900: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = (a = n(9090)) && a.__esModule ? a : {
                default: a
            };
            t.default = function(e) {
                return new Promise(function(t) {
                    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
                        t(window.YT);
                        return
                    }
                    var n = "http:" === window.location.protocol ? "http:" : "https:";
                    (0, i.default)(n + "//www.youtube.com/iframe_api", function(t) {
                        t && e.trigger("error", t)
                    });
                    var a = window.onYouTubeIframeAPIReady;
                    window.onYouTubeIframeAPIReady = function() {
                        a && a(), t(window.YT)
                    }
                })
            }, e.exports = t.default
        },
        9215: function(e, t, n) {
            var a = n(3454);

            function i() {
                var e;
                try {
                    e = t.storage.debug
                } catch (n) {}
                return !e && void 0 !== a && "env" in a && (e = a.env.DEBUG), e
            }(t = e.exports = n(5046)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }, t.formatArgs = function(e) {
                var n = this.useColors;
                if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                    var a = "color: " + this.color;
                    e.splice(1, 0, a, "color: inherit");
                    var i = 0,
                        o = 0;
                    e[0].replace(/%[a-zA-Z%]/g, function(e) {
                        "%%" !== e && (i++, "%c" === e && (o = i))
                    }), e.splice(o, 0, a)
                }
            }, t.save = function(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (n) {}
            }, t.load = i, t.useColors = function() {
                return "undefined" != typeof window && !!window.process && "renderer" === window.process.type || "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage
                } catch (e) {}
            }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }, t.enable(i())
        },
        5046: function(e, t, n) {
            var a;

            function i(e) {
                function n() {
                    if (n.enabled) {
                        var e = n,
                            i = +new Date,
                            o = i - (a || i);
                        e.diff = o, e.prev = a, e.curr = i, a = i;
                        for (var r = Array(arguments.length), s = 0; s < r.length; s++) r[s] = arguments[s];
                        r[0] = t.coerce(r[0]), "string" != typeof r[0] && r.unshift("%O");
                        var l = 0;
                        r[0] = r[0].replace(/%([a-zA-Z%])/g, function(n, a) {
                            if ("%%" === n) return n;
                            l++;
                            var i = t.formatters[a];
                            if ("function" == typeof i) {
                                var o = r[l];
                                n = i.call(e, o), r.splice(l, 1), l--
                            }
                            return n
                        }), t.formatArgs.call(e, r), (n.log || t.log || console.log.bind(console)).apply(e, r)
                    }
                }
                return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function(e) {
                    var n, a = 0;
                    for (n in e) a = (a << 5) - a + e.charCodeAt(n) | 0;
                    return t.colors[Math.abs(a) % t.colors.length]
                }(e), "function" == typeof t.init && t.init(n), n
            }(t = e.exports = i.debug = i.default = i).coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e
            }, t.disable = function() {
                t.enable("")
            }, t.enable = function(e) {
                t.save(e), t.names = [], t.skips = [];
                for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), a = n.length, i = 0; i < a; i++) n[i] && ("-" === (e = n[i].replace(/\*/g, ".*?"))[0] ? t.skips.push(RegExp("^" + e.substr(1) + "$")) : t.names.push(RegExp("^" + e + "$")))
            }, t.enabled = function(e) {
                var n, a;
                for (n = 0, a = t.skips.length; n < a; n++)
                    if (t.skips[n].test(e)) return !1;
                for (n = 0, a = t.names.length; n < a; n++)
                    if (t.names[n].test(e)) return !0;
                return !1
            }, t.humanize = n(4680), t.names = [], t.skips = [], t.formatters = {}
        },
        4680: function(e) {
            function t(e, t, n) {
                return e < t ? void 0 : e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
            }
            e.exports = function(e, n) {
                n = n || {};
                var a = typeof e;
                if ("string" === a && e.length > 0) return function(e) {
                    if (!((e = String(e)).length > 100)) {
                        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                        if (t) {
                            var n = parseFloat(t[1]);
                            switch ((t[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * n;
                                case "days":
                                case "day":
                                case "d":
                                    return 864e5 * n;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return 36e5 * n;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return 6e4 * n;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return 1e3 * n;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return n;
                                default:
                                    return
                            }
                        }
                    }
                }(e);
                if ("number" === a && !1 === isNaN(e)) return n.long ? t(e, 864e5, "day") || t(e, 36e5, "hour") || t(e, 6e4, "minute") || t(e, 1e3, "second") || e + " ms" : e >= 864e5 ? Math.round(e / 864e5) + "d" : e >= 36e5 ? Math.round(e / 36e5) + "h" : e >= 6e4 ? Math.round(e / 6e4) + "m" : e >= 1e3 ? Math.round(e / 1e3) + "s" : e + "ms";
                throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], function() {
            return e(e.s = 6472)
        }), _N_E = e.O()
    }
]);