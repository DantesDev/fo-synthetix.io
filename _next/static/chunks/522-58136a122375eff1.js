"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [522],
  {
    1522: function (e, t, r) {
      r.d(t, {
        $_: function () {
          return ex;
        },
        t1: function () {
          return eN;
        },
        h4: function () {
          return x;
        },
        OZ: function () {
          return ez;
        },
        _T: function () {
          return eA;
        },
        TR: function () {
          return eO;
        },
        v2: function () {
          return F;
        },
        Xg: function () {
          return eP;
        },
        I_: function () {
          return H;
        },
      });
      var n,
        i,
        o,
        l,
        s = r(7294),
        c = r(8900),
        a = r(1163),
        p = r(3717),
        d = r(6089),
        u = r(5713),
        h = r(7747),
        f = r(5893),
        x = function () {
          var e = (0, s.useState)(!1),
            t = e[0],
            r = e[1],
            n = (0, a.useRouter)().push;
          return (
            (0, s.useEffect)(
              function () {
                t
                  ? document.documentElement.classList.add("stop-scrolling")
                  : document.documentElement.classList.remove("stop-scrolling");
              },
              [t]
            ),
            (0, f.jsx)(p.k, {
              as: "header",
              minH: b.toString().concat("px"),
              alignItems: "center",
              justifyContent: "center",
              minW: "100vw",
              bg: "navy.900",
              borderBottomColor: "gray.900",
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              zIndex: 9999,
              position: { base: "fixed" },
              children: (0, f.jsxs)(p.k, {
                w: "100%",
                alignItems: "center",
                justifyContent: { base: "center", xl: "space-between" },
                maxW: {
                  base: "100vw",
                  md: "48rem",
                  lg: "62rem",
                  xl: "80rem",
                  "2xl": "96rem",
                },
                px: "24px",
                children: [
                  (0, f.jsx)(d.E, {
                    src: "/snx.svg",
                    width: 200,
                    height: 12,
                    onClick: function () {
                      return n("/");
                    },
                    cursor: "pointer",
                    mr: { base: "", xl: "32px" },
                    alt: "logo",
                  }),
                  (0, f.jsx)(u.d, {
                    breakpoint: "(max-width: 1279px)",
                    children: (0, f.jsx)(h.xu, {
                      cursor: "pointer",
                      userSelect: "none",
                      top: "25px",
                      left: "20px",
                      position: t ? "fixed" : "absolute",
                      zIndex: "999",
                      children: (0, f.jsx)(c.Z, {
                        isOpen: t,
                        menuClicked: function () {
                          return r(!t);
                        },
                        width: 22,
                        height: 16,
                        strokeWidth: 2,
                        rotate: 0,
                        color: "white",
                        borderRadius: 0,
                        animationDuration: 0.3,
                      }),
                    }),
                  }),
                  (0, f.jsx)(F, { isOpen: t, "data-test-id": "header-menu" }),
                ],
              }),
            })
          );
        },
        b = 65,
        g = r(9499),
        m = r(4730),
        y = r(3990),
        j = r(1383),
        O = r(917),
        v = r(66),
        w = r(605),
        k = r(6033);
      (0, O.keyframes)(i || (i = (0, j.Z)(["to{opacity: 1;}"])));
      var P = v.ZP.a
        .attrs({ target: "_blank", rel: "noopener noreferrer" })
        .withConfig({
          displayName: "common__ExternalLink",
          componentId: "sc-1n27v57-0",
        })([""]);
      v.ZP.h1.withConfig({
        displayName: "common__PageTitle",
        componentId: "sc-1n27v57-1",
      })(["", ";"], k.r.fonts.pageHeadline),
        v.ZP.h2.withConfig({
          displayName: "common__SectionTitle",
          componentId: "sc-1n27v57-2",
        })(["", ";"], k.r.fonts.sectionTitle),
        v.ZP.article.withConfig({
          displayName: "common__Subline",
          componentId: "sc-1n27v57-3",
        })(["", ";text-align:inherit;"], k.r.fonts.subline),
        v.ZP.div.withConfig({
          displayName: "common__Line",
          componentId: "sc-1n27v57-4",
        })(
          [
            "width:100vw;height:1px;background:rgba(14,4,53,0.29);background-image:linear-gradient( 0deg,rgba(14,4,53,0.29),rgba(14,4,53,0.29) ),linear-gradient(88.63deg,#00d1ff -14.83%,#ed1eff 108.22%);opacity:0.39;",
            "",
          ],
          function (e) {
            if (!e.showOnMobile)
              return w.ZP.lessThan("medium")(
                o || (o = (0, j.Z)(["\n			display: none;\n		"]))
              );
          }
        );
      var D = v.ZP.div.withConfig({
        displayName: "common__FlexDiv",
        componentId: "sc-1n27v57-5",
      })(["display:flex;"]);
      (0, v.ZP)(D).withConfig({
        displayName: "common__FlexDivCentered",
        componentId: "sc-1n27v57-6",
      })(["align-items:center;"]);
      var S = (0, v.ZP)(D).withConfig({
        displayName: "common__FlexDivCol",
        componentId: "sc-1n27v57-7",
      })(["flex-direction:column;"]);
      (0, v.ZP)(S).withConfig({
        displayName: "common__FlexDivColCentered",
        componentId: "sc-1n27v57-8",
      })(["align-items:center;"]);
      var _ = (0, v.ZP)(D).withConfig({
        displayName: "common__FlexDivRow",
        componentId: "sc-1n27v57-9",
      })(["justify-content:space-between;"]);
      (0, v.ZP)(_).withConfig({
        displayName: "common__FlexDivRowCentered",
        componentId: "sc-1n27v57-10",
      })(["align-items:center;"]),
        (0, v.iv)([
          "border:none;background:none;outline:none;cursor:pointer;padding:0;",
        ]);
      var C = r(2883),
        E = r(1293),
        I = r(4225),
        z = ["isOpen"],
        Z = ["children"];
      function R(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : R(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var W = [
          { link: "/perps", label: "Perps" },
          { externalLink: "https://synthetixdefi.gitbook.io/", label: "Docs" },
        ],
        A = [
          {
            externalLink: "https://fo-liquidity-synthetix-io.vercel.app/",
            label: "Liquidity App",
          },
        ],
        F = function (e) {
          var t = e.isOpen,
            r = (0, m.Z)(e, z),
            n = (0, a.useRouter)().pathname.split("/")[1];
          return (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)(
              p.k,
              L(
                L(
                  {
                    as: "ul",
                    left: t ? 0 : "-100%",
                    justifyContent: "flex-start",
                    flexWrap: "nowrap",
                    zIndex: "101",
                    width: "100%",
                    position: { base: "fixed", xl: "static" },
                    direction: { base: "column", xl: "row" },
                    top: "0",
                    pt: { base: "100px", xl: "0px" },
                    height: { base: "100%", xl: "auto" },
                    transition: "all 250ms linear",
                    background: { base: "navy.900", xl: "transparent" },
                  },
                  r
                ),
                {},
                {
                  children: [
                    W.map(function (e) {
                      return (0,
                      f.jsx)(M, L(L({}, r), {}, { children: e.link ? (0, f.jsx)(C.r, { transition: n === e.label ? "color 0.3s ease-out" : "", _hover: { color: "cyan.500" }, href: e.link, children: (0, f.jsx)(E.x, { fontFamily: "heading", fontWeight: "bold", color: n === e.label ? "cyan.500" : "gray.500", _hover: { color: "white" }, fontSize: { base: "2xl", md: "sm" }, children: e.label }) }) : (0, f.jsx)(C.r, { href: e.externalLink, color: "#828295", _hover: { color: "cyan.500" }, target: "_blank", children: (0, f.jsx)(E.x, { fontFamily: "heading", fontWeight: "bold", color: "gray.500", _hover: { color: "white" }, fontSize: { base: "2xl", md: "sm" }, children: e.label }) }, e.link) }), e.label);
                    }),
                    (0, f.jsx)(p.k, {
                      ml: { base: "16px", xl: "auto" },
                      gap: "2",
                      alignItems: "center",
                      children: A.map(function (e) {
                        return (0,
                        f.jsx)(P, { href: e.externalLink, children: (0, f.jsx)(I.z, { size: "sm", colorScheme: "cyan", rightIcon: (0, f.jsx)(y.yGO, {}), mt: { base: "8px", xl: "0" }, borderRadius: "4px", children: e.label }, e.label) }, e.label);
                      }),
                    }),
                  ],
                }
              )
            ),
          });
        },
        M = function (e) {
          var t = e.children,
            r = (0, m.Z)(e, Z);
          return (0, f.jsx)(
            h.xu,
            L(
              L(
                {
                  display: { base: "block", md: "inline-block" },
                  margin: { base: "0 0 51px 20px", md: "10px 16px" },
                  as: "li",
                },
                r
              ),
              {},
              { children: t }
            )
          );
        },
        T = r(9161),
        N = r(6812),
        B = r(1841),
        H = function (e) {
          var t = e.isFooter,
            r = e.fill;
          return (0, f.jsx)(p.k, {
            as: "ul",
            alignItems: "center",
            mt: t ? "0" : "20",
            ml: t ? "3" : "",
            children: [
              {
                link: "https://x.com/synthetixdefi",
                label: "twitter",
                image: (0, f.jsx)(N.Z, { fill: r }),
              },
              {
                link: "https://t.me/+bCyT8IqLvHsyMzJk",
                label: "github",
                image: (0, f.jsx)(B.Z, { fill: r }),
              },
            ].map(function (e, t) {
              return (0,
              f.jsx)(C.r, { href: e.link, mx: 1 === t ? { base: "16px" } : "", target: "_blank", rel: "noopener noreferrer", children: e.image }, e.link);
            }),
          });
        },
        G = r(1496),
        U = r(9289),
        V = r(2215),
        J = r(8087),
        X = r(4071),
        q = r(7334),
        $ = r(2185),
        K = r(753),
        Y = r(29),
        Q = r(7794),
        ee = r.n(Q),
        et = r(7080),
        er = r(1136);
      function en(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ei(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? en(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : en(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      ((n = l || (l = {})).VALID = "VALID"),
        (n.ERROR = "ERROR"),
        (n.SUBMIT = "SUBMIT"),
        (n.CLEAR = "CLEAR"),
        (n.LOADING = "LOADING");
      var eo = { errorMessage: null, submitted: !1, valid: !1, loading: !1 };
      function el(e, t) {
        switch (t.type) {
          case l.VALID:
            return ei(
              ei({}, e),
              {},
              { errorMessage: null, valid: !0, submitted: !1 }
            );
          case l.ERROR:
            return ei(
              ei({}, e),
              {},
              {
                errorMessage: t.payload || null,
                valid: !1,
                submitted: !1,
                loading: !1,
              }
            );
          case l.SUBMIT:
            return ei(
              ei({}, e),
              {},
              { errorMessage: null, valid: !1, submitted: !0, loading: !1 }
            );
          case l.CLEAR:
            return ei(ei({}, e), {}, { errorMessage: null });
          case l.LOADING:
            return ei(ei({}, e), {}, { loading: !0 });
          default:
            return ei({}, e);
        }
      }
      var es = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        ec = function (e, t) {
          window.localStorage.setItem(e, JSON.stringify(t));
        },
        ea = ["page"];
      function ep(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ed(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ep(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ep(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var eu = function (e) {
          var t,
            r = e.page,
            n = void 0 === r ? "home" : r,
            i = (0, m.Z)(e, ea),
            o = (0, s.useReducer)(el, eo),
            c = o[0],
            a = o[1],
            d = (0, s.useRef)(null),
            u = c.submitted,
            x = c.errorMessage,
            b = c.valid,
            g = c.loading;
          (0, s.useEffect)(function () {
            !0 ===
              (function (e) {
                var t = window.localStorage.getItem(e);
                try {
                  if (null != t) return JSON.parse(t);
                } catch (e) {
                  console.error(e);
                }
                return null;
              })("marketing-form-submission") && a({ type: l.SUBMIT });
          }, []);
          var y =
              ((t = (0, Y.Z)(
                ee().mark(function e() {
                  var t, r;
                  return ee().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = new Headers()).append(
                                "Content-Type",
                                "application/json"
                              ),
                              !b)
                            ) {
                              e.next = 15;
                              break;
                            }
                            return (
                              a({ type: l.LOADING }),
                              (e.prev = 4),
                              (e.next = 7),
                              fetch(
                                "https://hooks.zapier.com/hooks/catch/10152802/bnfuyao/",
                                {
                                  method: "POST",
                                  mode: "no-cors",
                                  headers: t,
                                  redirect: "follow",
                                  body: JSON.stringify({
                                    contact: {
                                      email:
                                        null == d
                                          ? void 0
                                          : null === (r = d.current) ||
                                            void 0 === r
                                          ? void 0
                                          : r.value,
                                      route: n,
                                    },
                                  }),
                                }
                              )
                            );
                          case 7:
                            a({ type: l.SUBMIT }),
                              ec("marketing-form-submission", !0),
                              (d.current.value = ""),
                              (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t0 = e.catch(4)),
                              a({
                                type: l.ERROR,
                                payload: "There has been an error.",
                              });
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 12]]
                  );
                })
              )),
              function () {
                return t.apply(this, arguments);
              }),
            j = function (e) {
              e.target.value
                ? es.test(e.target.value)
                  ? a({ type: l.VALID })
                  : a({
                      type: l.ERROR,
                      payload: "Please enter a valid email address.",
                    })
                : a({ type: l.CLEAR });
            };
          return "/" !== n
            ? (0, f.jsxs)(
                p.k,
                ed(
                  ed(
                    {
                      direction: "column",
                      mt: { base: "8px" },
                      height: "100%",
                      pt: "36px",
                    },
                    i
                  ),
                  {}
                )
              )
            : (0, f.jsxs)(
                p.k,
                ed(
                  ed(
                    {
                      direction: "column",
                      justifyContent: "center",
                      height: "100%",
                      pt: "36px",
                    },
                    i
                  ),
                  {},
                  {
                    children: [
                      (0, f.jsxs)(p.k, {
                        as: "form",
                        noValidate: !0,
                        onSubmit: function (e) {
                          return e.preventDefault();
                        },
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        height: "fit-content",
                        bg: "whiteAlpha.300",
                        borderWidth: "1px",
                        borderColor: "whiteAlpha.50",
                        borderRadius: "md",
                        width: "fit-content",
                        children: [
                          (0, f.jsx)(et.I, {
                            placeholder: "Enter Your Email Address",
                            type: "email",
                            minW: ["200px", "250px"],
                            w: "100%",
                            fontFamily: "heading",
                            fontSize: "lg",
                            lineHeight: "8",
                            isRequired: !0,
                            bg: "transparent",
                            border: "none",
                            my: 0,
                            py: 6,
                            _placeholder: { color: "gray.400" },
                            onBlur: j,
                            ref: d,
                          }),
                          (0, f.jsx)(I.z, {
                            onClick: y,
                            height: "44px",
                            flexShrink: 0,
                            type: "submit",
                            color: "cyan.500",
                            fontFamily: "GT America",
                            fontWeight: "700",
                            bgGradient: "none",
                            bgColor: "#161B44",
                            fontSize: "sm",
                            borderRadius: "md",
                            boxShadow: "0px 0px 10px rgba(0, 209, 255, 0.9);",
                            px: 8,
                            _hover: {
                              bgGradient: "none",
                              bgColor: "#161B4480",
                            },
                            _active: { bgColor: "#161B4490" },
                            children: g ? (0, f.jsx)(er.$, {}) : "Sign Up",
                          }),
                        ],
                      }),
                      (0, f.jsxs)(h.xu, {
                        minH: "10",
                        children: [
                          x && (0, f.jsx)(E.x, { mt: 1, children: x }),
                          u &&
                            (0, f.jsx)(E.x, {
                              color: "green.500",
                              mt: 1,
                              children: "Thank you for Signing Up!",
                            }),
                        ],
                      }),
                    ],
                  }
                )
              );
        },
        eh = function () {
          var e = (0, a.useRouter)().pathname;
          return (0, f.jsxs)(p.k, {
            flexDir: "column",
            justifyContent: "center",
            height: "100%",
            mt: 5,
            w: "100%",
            children: [(0, f.jsx)(eu, { pt: 0, page: "footer ".concat(e) })],
          });
        },
        ef = [
          [
            { title: "Synthetix : " },
            { title: "Home", link: "https://synthetix.io/" },
            { title: "Perps", link: "https://synthetix.io/perps" },
            {
              title: "Docs",
              link: "https://synthetixdefi.gitbook.io/synthetix-protocol/welcome-to-synthetix",
            },
          ],
        ];
      function ex() {
        return (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)(u.d, {
              above: "lg",
              children: (0, f.jsxs)(p.k, {
                w: "100%",
                flexDir: "column",
                maxW: "100%",
                as: "footer",
                my: "24px",
                children: [
                  (0, f.jsxs)(p.k, {
                    w: "100%",
                    justifyContent: "space-between",
                    children: [
                      (0, f.jsx)(p.k, {
                        gap: "14",
                        m: "5",
                        w: "100%",
                        children: ef.map(function (e, t) {
                          return (0, f.jsx)(
                            p.k,
                            {
                              flexDir: "row",
                              gap: "2",
                              children: e.map(function (e, r) {
                                var n;
                                return (0,
                                f.jsxs)(p.k, { flexDir: "column", children: [!r && (0, f.jsx)(E.x, { fontWeight: "bold", textTransform: "uppercase", minW: "95px", children: e.title }), e.link && (0, f.jsx)(C.r, { href: e.link, textDecoration: "none !important", target: null != e && null !== (n = e.link) && void 0 !== n && n.startsWith("http") ? "_blank" : "", children: (0, f.jsx)(E.x, { color: "gray.500", _hover: { color: "white" }, fontFamily: "heading", fontSize: "md", fontWeight: "bold", children: e.title }) })] }, "menu" + r + t);
                              }),
                            },
                            "col" + t
                          );
                        }),
                      }),
                      (0, f.jsx)(eh, {}),
                    ],
                  }),
                  (0, f.jsxs)(p.k, {
                    m: "16px",
                    justifyContent: "space-between",
                    children: [
                      (0, f.jsx)(eO, { small: !0 }),
                      (0, f.jsx)(H, { isFooter: !0 }),
                    ],
                  }),
                ],
              }),
            }),
            (0, f.jsx)(G.c, {
              above: "lg",
              children: (0, f.jsxs)(p.k, {
                as: "footer",
                w: "100%",
                justifyContent: "center",
                alignItems: "center",
                flexDir: "column",
                my: "24px",
                children: [
                  ef.map(function (e, t) {
                    return (0, f.jsxs)(
                      s.Fragment,
                      {
                        children: [
                          (0, f.jsx)(V.U, {
                            w: "100%",
                            allowToggle: !0,
                            children: (0, f.jsxs)(J.Q, {
                              children: [
                                (0, f.jsxs)(X.K, {
                                  px: "0",
                                  children: [
                                    (0, f.jsx)(E.x, {
                                      fontWeight: "bold",
                                      textTransform: "uppercase",
                                      mr: "auto",
                                      children: e[0].title,
                                    }),
                                    (0, f.jsx)(q.X, {
                                      children: (0, f.jsx)(K.X, {}),
                                    }),
                                  ],
                                }),
                                (0, f.jsx)($.H, {
                                  px: "0px",
                                  children: (0, f.jsx)(p.k, {
                                    flexDir: "column",
                                    gap: "2",
                                    children: e.map(function (e, t) {
                                      return (0,
                                      f.jsx)(s.Fragment, { children: !!t && (0, f.jsx)(C.r, { href: e.link, textDecoration: "none !important", mt: "24px", children: (0, f.jsx)(E.x, { fontWeight: "bold", color: "gray.500", _hover: { color: "white" }, fontFamily: "heading", fontSize: "md", children: e.title }) }) }, (e.link || "menu-link") + t);
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, f.jsx)(U.i, { color: "gray.900" }),
                        ],
                      },
                      "col" + t
                    );
                  }),
                  (0, f.jsx)(h.xu, {
                    mt: 4,
                    w: "100%",
                    children: (0, f.jsx)(eh, {}),
                  }),
                  (0, f.jsxs)(p.k, {
                    m: "5",
                    justifyContent: "space-between",
                    w: "100%",
                    children: [
                      (0, f.jsx)(eO, { small: !0 }),
                      (0, f.jsx)(H, { isFooter: !0 }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      r(1664),
        v.ZP.a.withConfig({
          displayName: "Button__A",
          componentId: "sc-1vyz7h9-0",
        })(["display:inline-block;"]),
        v.ZP.button.withConfig({
          displayName: "Button",
          componentId: "sc-1vyz7h9-1",
        })(
          [
            "text-decoration:uppercase;box-shadow:0px 0px 10px rgba(0,209,255,0.9);box-sizing:border-box;border-radius:4px;background:",
            ";border:",
            ";color:",
            ";outline:none;cursor:pointer;",
            ";width:100%;height:100%;transition:opacity 0.2s ease-out,color 0.2s ease-out,background 0.2s ease-out;&:hover{background:",
            ";}&:disabled{opacity:0.2;background:#00d1ff !important;}",
          ],
          function (e) {
            return "primary" === e.buttonType ? e.theme.colors.cyan : "#0C2344";
          },
          function (e) {
            return "primary" === e.buttonType
              ? "none"
              : "1px solid ".concat(e.theme.colors.cyan);
          },
          function (e) {
            return "primary" === e.buttonType
              ? e.theme.colors.bgBlack
              : e.theme.colors.cyan;
          },
          function (e) {
            var t = e.size,
              r = e.theme;
            return "medium" === t ? r.fonts.button : r.fonts.largeButton;
          },
          function (e) {
            return "primary" === e.buttonType ? "#58E1FF" : "#173764";
          }
        );
      var eb = r(5675),
        eg = r.n(eb),
        em = ["small"];
      function ey(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ej(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ey(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ey(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var eO = function (e) {
          var t = e.small,
            r = (0, m.Z)(e, em);
          return (0, f.jsx)(
            C.r,
            ej(
              ej({ href: "/" }, r),
              {},
              {
                children: (0, f.jsx)(eg(), {
                  src: t ? "/logo-x.svg" : "/logo.svg",
                  alt: "Synthetix",
                }),
              }
            )
          );
        },
        ev = ["children"];
      function ew(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ek(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ew(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ew(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function eP(e) {
        var t = e.children,
          r = (0, m.Z)(e, ev);
        return (0, f.jsx)(p.k, {
          minW: "100vw",
          bg: "navy.900",
          justifyContent: "center",
          children: (0, f.jsxs)(
            p.k,
            ek(
              ek(
                {
                  direction: "column",
                  alignItems: "center",
                  w: "100%",
                  maxW: {
                    base: "100vw",
                    md: "48rem",
                    lg: "62rem",
                    xl: "80rem",
                    "2xl": "96rem",
                  },
                  px: { base: "16px", lg: "24px" },
                },
                r
              ),
              {},
              {
                children: [
                  (0, f.jsx)(x, {}),
                  t,
                  (0, f.jsx)(U.i, { minW: "100vw", borderColor: "gray.900" }),
                  (0, f.jsx)(ex, {}),
                ],
              }
            )
          ),
        });
      }
      var eD = r(6052),
        eS = r(8371),
        e_ = r(2757),
        eC = [
          "uri",
          "name",
          "description",
          "largestDescription",
          "link",
          "tag",
          "enabled",
          "imageHeight",
          "imageWidth",
        ];
      function eE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eI(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eE(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eE(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var ez = function (e) {
          var t = e.uri,
            r = e.name,
            n = e.description,
            i = e.largestDescription,
            o = e.link,
            l = e.tag,
            s = e.enabled,
            c = void 0 === s || s,
            a = e.imageHeight,
            x = e.imageWidth,
            b = (0, m.Z)(e, eC);
          return (0, f.jsx)(
            eD.f,
            eI(
              eI(
                {
                  as: p.k,
                  flexDir: "column",
                  alignItems: "flex-start",
                  bg: "navy.700",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderRadius: "5px",
                  borderColor: "gray.900",
                },
                b
              ),
              {},
              {
                cursor: c ? "pointer" : "default",
                pointerEvents: c ? "auto" : "none",
                children: (0, f.jsxs)(eD.A, {
                  href: o,
                  isExternal: !0,
                  width: "100%",
                  children: [
                    (0, f.jsxs)(p.k, {
                      justifyContent: { base: "flex-end", md: "space-between" },
                      width: "100%",
                      children: [
                        (0, f.jsx)(d.E, {
                          display: { base: "none", md: "unset" },
                          alt: "".concat(r, "-logo"),
                          src: t,
                          h: { base: a, xl: "50px" },
                          w: { base: x, xl: "50px" },
                        }),
                        (0, f.jsx)(eS.Vp, {
                          px: "8px",
                          height: "fit-content",
                          py: "2px",
                          background: "whiteAlpha.300",
                          borderRadius: "4px",
                          children: (0, f.jsx)(eS.Sn, {
                            fontSize: "12px",
                            color: "white",
                            fontWeight: 500,
                            fontFamily: "heading",
                            children: l,
                          }),
                        }),
                      ],
                    }),
                    (0, f.jsx)(d.E, {
                      mt: { base: "16px", md: "0px" },
                      display: { md: "none" },
                      alt: "".concat(r, "-logo"),
                      src: t,
                      h: { base: a, xl: "50px" },
                      w: { base: x, xl: "50px" },
                    }),
                    (0, f.jsx)(e_.X, {
                      my: "16px",
                      fontSize: "18px",
                      children: r,
                    }),
                    (0, f.jsx)(u.d, {
                      above: "md",
                      children: (0, f.jsxs)(h.xu, {
                        position: "relative",
                        children: [
                          (0, f.jsx)(E.x, {
                            fontSize: "16px",
                            lineHeight: "24px",
                            color: "gray.500",
                            fontWeight: 400,
                            position: "absolute",
                            children: n,
                          }),
                          (0, f.jsx)(E.x, {
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontWeight: 400,
                            color: "transparent",
                            children: i,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }
            )
          );
        },
        eZ = r(6948),
        eR = ["uri", "name", "description", "link"];
      function eL(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eW(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eL(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eL(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var eA = function (e) {
          var t = e.uri,
            r = e.name,
            n = e.description,
            i = e.link,
            o = (0, m.Z)(e, eR);
          return (0, f.jsxs)(
            p.k,
            eW(
              eW(
                {
                  flexDir: "column",
                  alignItems: "flex-start",
                  bg: "navy.900",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderRadius: "base",
                  borderColor: "gray.900",
                },
                o
              ),
              {},
              {
                children: [
                  (0, f.jsxs)(G.c, {
                    above: "md",
                    children: [
                      (0, f.jsxs)(p.k, {
                        alignItems: "center",
                        h: "40px",
                        mb: "16px",
                        children: [
                          (0, f.jsx)(d.E, {
                            src: t,
                            h: { base: "40px", xl: "50px" },
                            alt: "Integrator",
                          }),
                          (0, f.jsx)(E.x, {
                            my: "16px",
                            fontSize: "lg",
                            ml: "16px",
                            color: "white",
                            fontWeight: 700,
                            children: r,
                          }),
                        ],
                      }),
                      (0, f.jsx)(E.x, {
                        mb: { base: "auto" },
                        fontSize: "16px",
                        color: "gray.500",
                        children: Array.isArray(n)
                          ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                n[0],
                                " ",
                                (0, f.jsx)(C.r, {
                                  href: "mailto:perps@snxdao.io",
                                  color: "cyan.500",
                                  children: "perps@snxdao.io.",
                                }),
                              ],
                            })
                          : n,
                      }),
                    ],
                  }),
                  (0, f.jsxs)(u.d, {
                    above: "md",
                    children: [
                      (0, f.jsx)(d.E, {
                        src: t,
                        h: { base: "40px", xl: "50px" },
                        alt: "Integrator",
                      }),
                      (0, f.jsx)(e_.X, {
                        my: "16px",
                        fontSize: "18px",
                        children: r,
                      }),
                      (0, f.jsx)(E.x, {
                        mb: { base: "auto" },
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "gray.500",
                        children: n,
                      }),
                    ],
                  }),
                  (0, f.jsxs)(I.z, {
                    mt: { lg: "16px" },
                    variant: "outline",
                    onClick: function () {
                      return window.open(i, "_blank", "noopener,noreferrer");
                    },
                    w: { base: "100%", xl: "180px" },
                    size: { base: "lg", xl: "sm" },
                    rightIcon:
                      "Synthetix" === r
                        ? void 0
                        : (0, f.jsxs)(eZ.J, {
                            width: "14px",
                            height: "14px",
                            viewBox: "0 0 14 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              (0, f.jsx)("g", {
                                clipPath: "url(#clip0_4786_501)",
                                children: (0, f.jsx)("path", {
                                  d: "M9.07952 4.47127L4.65444 4.47127L4.65445 3.30478L11.071 3.30478L11.071 9.7213L9.90448 9.7213L9.90448 5.29623L4.11717 11.325L3.29221 10.5001L9.07952 4.47127Z",
                                  fill: "#00D1FF",
                                }),
                              }),
                              (0, f.jsx)("defs", {
                                children: (0, f.jsx)("clipPath", {
                                  id: "clip0_4786_501",
                                  children: (0, f.jsx)("rect", {
                                    width: "14",
                                    height: "14",
                                    fill: "white",
                                  }),
                                }),
                              }),
                            ],
                          }),
                    children: ["Visit ", r],
                  }),
                ],
              }
            )
          );
        },
        eF = ["children"];
      function eM(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eM(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eM(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var eN = function (e) {
        var t = e.children,
          r = (0, m.Z)(e, eF);
        return (0, f.jsx)(
          h.xu,
          eT(
            eT(
              {
                display: "inline",
                bg: "linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)",
                backgroundClip: "text",
                "text-fill-color": "transparent",
                as: "div",
              },
              r
            ),
            {},
            { children: t }
          )
        );
      };
      v.ZP.svg.withConfig({
        displayName: "ArrowWrapper__StyledSVG",
        componentId: "sc-1cddw3-0",
      })(["position:absolute;z-index:1;top:0;left:0;pointer-events:none;"]);
    },
    9161: function (e, t, r) {
      var n = r(9499);
      r(7294);
      var i = r(5893);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.Z = function (e) {
        return (0, i.jsxs)(
          "svg",
          l(
            l(
              {
                width: 22,
                height: 25,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            {},
            {
              children: [
                (0, i.jsx)("path", {
                  d: "M8.725 10.488c-.717 0-1.283.625-1.283 1.387s.579 1.387 1.283 1.387c.716 0 1.282-.625 1.282-1.387.013-.762-.566-1.387-1.282-1.387zm4.588 0c-.716 0-1.282.625-1.282 1.387s.578 1.387 1.282 1.387c.717 0 1.282-.625 1.282-1.387s-.565-1.387-1.282-1.387z",
                  fill: e.fill ? e.fill : "#fff",
                }),
                (0, i.jsx)("path", {
                  d: "M19.423 0H2.577A2.576 2.576 0 000 2.575v16.9a2.576 2.576 0 002.577 2.575h14.256l-.666-2.313 1.609 1.488 1.521 1.4L22 25V2.575A2.576 2.576 0 0019.423 0zM14.57 16.325s-.452-.537-.83-1.012c1.647-.463 2.276-1.488 2.276-1.488a7.209 7.209 0 01-1.446.738 8.31 8.31 0 01-1.823.537 8.856 8.856 0 01-3.256-.012 10.599 10.599 0 01-1.848-.538 7.387 7.387 0 01-.917-.425c-.038-.025-.076-.037-.113-.063-.026-.012-.038-.024-.05-.037-.227-.125-.353-.213-.353-.213s.604 1 2.2 1.476c-.377.474-.842 1.037-.842 1.037-2.778-.087-3.834-1.9-3.834-1.9 0-4.025 1.81-7.288 1.81-7.288 1.81-1.35 3.533-1.312 3.533-1.312l.125.15c-2.263.65-3.306 1.638-3.306 1.638s.277-.15.742-.363c1.345-.588 2.413-.75 2.853-.787.076-.013.139-.026.214-.026a10.29 10.29 0 016.323 1.175s-.993-.937-3.13-1.587l.176-.2s1.723-.038 3.533 1.313c0 0 1.81 3.262 1.81 7.287 0 0-1.068 1.813-3.847 1.9z",
                  fill: e.fill ? e.fill : "#fff",
                }),
              ],
            }
          )
        );
      };
    },
    1841: function (e, t, r) {
      var n = r(9499);
      r(7294);
      var i = r(5893);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.Z = function (e) {
        return (0, i.jsxs)(
          "svg",
          l(
            l(
              {
                width: 32,
                height: 32,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            {
              children: [
                (0, i.jsxs)("g", {
                  clipPath: "url(#github_svg__clip0)",
                  fill: e.fill ? e.fill : "#fff",
                  children: [
                    (0, i.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z",
                    }),
                  ],
                }),
              ],
            }
          )
        );
      };
    },
    6812: function (e, t, r) {
      var n = r(9499);
      r(7294);
      var i = r(5893);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.Z = function (e) {
        return (0, i.jsxs)(
          "svg",
          l(
            l(
              {
                width: 36,
                height: 36,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            {},
            {
              children: [
                (0, i.jsx)("g", {
                  clipPath: "url(#twitter_svg__clip0)",
                  children: (0, i.jsx)("path", {
                    d: "M10.573 13.5844L4.98887 20.25H6.31212L11.1608 14.4623L15.0334 20.25H19.5L13.6438 11.498L19.5 4.50809H18.1767L13.0564 10.6201L8.9666 4.50809H4.5L10.5733 13.5844H10.573ZM12.3854 11.4209L12.9788 12.2924L17.6999 19.227H15.6673L11.8573 13.6306L11.264 12.7591L6.3115 5.48454H8.34405L12.3854 11.4206V11.4209Z",
                    fill: e.fill ? e.fill : "#fff",
                  }),
                }),
              ],
            }
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=522-58136a122375eff1.js.map
