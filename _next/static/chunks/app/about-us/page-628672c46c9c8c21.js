try {
  let e =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : {},
    t = new e.Error().stack;
  t &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[t] = "b7fada84-8b8b-4284-9633-b0f28c7a42e9"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-b7fada84-8b8b-4284-9633-b0f28c7a42e9"));
} catch (e) {}
{
  let e =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : {};
  (e._sentryModuleMetadata = e._sentryModuleMetadata || {}),
    (e._sentryModuleMetadata[new e.Error().stack] = Object.assign(
      {},
      e._sentryModuleMetadata[new e.Error().stack],
      { "_sentryBundlerPluginAppKey:t3-website": !0 }
    ));
}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6851],
  {
    8656: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { Hero: () => a });
      var r = s(9598),
        n = s(81876),
        i = s(47275),
        l = s(76859);
      function a() {
        let e = (0, l.Ub)(i.w9);
        return (0, r.jsx)("section", {
          children: (0, r.jsx)(n.zE, {
            children: (0, r.jsx)(n.y, {
              layers: [
                {
                  speed: -30,
                  children: (0, r.jsxs)("div", {
                    className: "absolute inset-x-0 inset-y-0",
                    children: [
                      (0, r.jsx)("video", {
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        preload: "preload",
                        className:
                          "inset-x-0 inset-y-0 w-0 h-0 min-w-[100vw] max-w-[100vw] lg:min-w-full lg:max-w-full min-h-full max-h-full object-cover hidden lg:block",
                        children: (0, r.jsx)("source", {
                          src: "/videos/about-bg.mp4",
                          type: "video/mp4",
                        }),
                      }),
                      (0, r.jsx)("video", {
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        preload: "preload",
                        className:
                          "inset-x-0 inset-y-0 w-0 h-0 min-w-[100vw] max-w-[100vw] lg:min-w-full lg:max-w-full min-h-full max-h-full object-cover lg:hidden",
                        children: (0, r.jsx)("source", {
                          src: "/videos/about-bg-mobile.mp4",
                          type: "video/mp4",
                        }),
                      }),
                    ],
                  }),
                },
                {
                  speed: e ? -5 : -10,
                  children: (0, r.jsx)("div", {
                    className:
                      "relative pt-[72px] lg:pt-20 px-4 lg:px-20 md:px-15",
                    children: (0, r.jsxs)("div", {
                      className:
                        "container-max flex flex-col gap-16 lg:gap-20 pt-10 lg:pt-20",
                      children: [
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsxs)("h1", {
                              className:
                                "text-display-xl lg:text-display-2xl text-white font-black mt-3 mb-4 hidden md:block",
                              children: [
                                "Empowering a",
                                " ",
                                (0, r.jsxs)("span", {
                                  className: "text-primary-400",
                                  children: [
                                    "more ",
                                    (0, r.jsx)("br", {}),
                                    "equitable digital future",
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)("h1", {
                              className:
                                "text-display-md md:hidden text-center text-white font-black",
                              children: [
                                "Empowering ",
                                (0, r.jsx)("br", {}),
                                "a",
                                " ",
                                (0, r.jsx)("span", {
                                  className: "text-primary-400",
                                  children: "more equitable digital future",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-col lg:flex-row text-center md:text-left lg:gap-14",
                          children: [
                            (0, r.jsxs)("h2", {
                              className:
                                "text-display-xs md:text-display-md font-bold text-white lg:basis-1/2 lg:text-right",
                              children: [
                                "Our Vision ",
                                (0, r.jsx)("span", {
                                  className: "text-primary-400",
                                  children: "/",
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "lg:basis-1/2",
                              children: (0, r.jsxs)("p", {
                                className:
                                  "text-text-sm lg:text-text-xl text-gray-200 mb-12 mt-6 lg:mt-0",
                                children: [
                                  "Terminal 3 was founded on the belief that every human should own and control their digital data and identity.",
                                  (0, r.jsx)("br", {}),
                                  (0, r.jsx)("br", {}),
                                  "We want to empower a more equitable digital future, where users and enterprises have equal rights and protections across all platforms. Our technology makes fully private data freely composable, securing the world's most important asset while realizing its full value.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
              ],
              className:
                "min-h-[650px] md:min-h-[750px] lg:min-h-[940px] xl:min-h-[880px] bg-gray-800 px-4 lg:px-20 relative",
              children: (0, r.jsx)("div", {
                className:
                  "absolute w-full bottom-16 md:bottom-24 motion-safe:animate-bounce -ms-4 lg:-ms-20 flex justify-center",
                children: (0, r.jsxs)("svg", {
                  width: "18",
                  height: "28",
                  viewBox: "0 0 18 28",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, r.jsx)("rect", {
                      x: "0.5",
                      y: "0.5",
                      width: "17",
                      height: "27",
                      rx: "8.5",
                      stroke: "white",
                    }),
                    (0, r.jsx)("rect", {
                      x: "8",
                      y: "6",
                      width: "2",
                      height: "8",
                      rx: "1",
                      fill: "white",
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
    },
    14061: (e, t, s) => {
      "use strict";
      s.d(t, { Founders: () => u });
      var r = s(9598),
        n = s(11950),
        i = s(53371),
        l = s(20260),
        a = s(35028),
        o = s(47275),
        d = s(76859);
      let m = [
        {
          name: "Gary Liu",
          position: "Co-Founder & CEO",
          image: "/images/about-us/gary.jpg",
          caption: (0, r.jsxs)(r.Fragment, {
            children: [
              "Gary Liu is Terminal 3's CEO and is also the Chair of Web3 Harbour, Hong Kong's leading web3 industry association. Gary also serves as a committee member of the Hong Kong Government's Web3 Taskforce, and as a member of the Hong Kong Trade Development Council's ICT Advisory Board.",
              (0, r.jsx)("br", {}),
              (0, r.jsx)("br", {}),
              "Gary was formerly CEO of the South China Morning Post, the Founder & CEO of Artifact Labs, CEO of Digg, and has also held leadership positions at Spotify, AOL, and Google.",
              (0, r.jsx)("br", {}),
              (0, r.jsx)("br", {}),
              "Gary holds a B.A. in Economics from Harvard University.",
            ],
          }),
          linkedIn: "t3gary",
          twitter: "garyliu",
          telegram: "t3gary",
        },
        {
          name: "Malcolm Ong",
          position: "Co-Founder & CPO",
          image: "/images/about-us/malcolm.jpg",
          caption: (0, r.jsxs)(r.Fragment, {
            children: [
              "Malcolm is Terminal 3’s Chief Product Officer and was formerly the SVP of Product at the South China Morning Post, a Product and Growth leader at Lyft, a Venture Partner and Entrepreneur-in-Residence (EIR) at 500 Global, Co-founder & CTO of Skillshare, and Product Lead at OMGPOP (acq. Zynga).",
              (0, r.jsx)("br", {}),
              (0, r.jsx)("br", {}),
              "Malcolm holds a B.S. in Computer Science with a double major in Business Administration and minor in E-commerce from Carnegie Mellon University.",
            ],
          }),
          linkedIn: "malcolmong",
          twitter: "MalcolmOng",
          telegram: "t3malcolm",
        },
        {
          name: "Joey Liu",
          position: "Co-Founder & COO",
          image: "/images/about-us/joey.jpg",
          caption: (0, r.jsxs)(r.Fragment, {
            children: [
              "Joey Liu is Terminal 3’s Chief Operating Officer and was formerly Head of Strategy at the South China Morning Post, Co-founder and General Manager at Artifact Labs, market launcher at Uber Taipei, and consultant at McKinsey & Company.",
              (0, r.jsx)("br", {}),
              (0, r.jsx)("br", {}),
              "Joey holds a B.A from Cornell University and an M.B.A from Columbia Business School.",
            ],
          }),
          linkedIn: "t3joey",
          twitter: "jlius3r",
          telegram: "t3joey",
        },
      ];
      var h = s(26470),
        c = s(1231),
        x = s(52326),
        b = s(78974),
        f = s(45602);
      function g(e) {
        let {
            name: t,
            image: s,
            caption: i,
            position: l,
            linkedIn: a,
            twitter: m,
            telegram: g,
            className: u,
          } = e,
          { isOpen: p, onOpen: v, onClose: y, onToggle: w } = (0, d.j1)(),
          { hoverProps: j } = (0, h.M)({ onHoverStart: v, onHoverEnd: y }),
          P = (0, d.Ub)(o.w9);
        return (
          (0, n.useEffect)(() => {
            function e() {
              if (!P) return;
              let e = document.getElementsByClassName("founder-image");
              if (0 !== e.length)
                for (let t = 0; t < e.length; t++) {
                  let s = e[t];
                  (s.style.height = "500px"),
                    (s.style.width = "".concat(window.innerWidth - 32, "px"));
                }
            }
            return (
              window.addEventListener("resize", e),
              e(),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, [P]),
          (0, r.jsxs)("div", {
            className: u,
            children: [
              (0, r.jsx)("figure", {
                role: "button",
                tabIndex: 0,
                className: "",
                ...j,
                onClick: w,
                children: (0, r.jsxs)("div", {
                  className:
                    "founder-image rounded-3xl relative overflow-hidden after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:h-full after:w-full after:absolute after:bg-founder-card min-w-[min(100vw-32px,340px)] lg:min-w-[min(100vw-32px,140px)] w-auto h-[380px] lg:h-[480px] bg-center bg-no-repeat bg-cover",
                  style: { backgroundImage: "url(".concat(s, ")") },
                  children: [
                    (0, r.jsx)("span", {
                      className: "absolute right-4 bottom-4 text-white z-20",
                      children: p ? (0, r.jsx)(x.A, {}) : (0, r.jsx)(b.A, {}),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, c.A)(
                        "z-10 absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-[#131E33] p-8 transition-opacity opacity-0 duration-300",
                        { "opacity-90": p }
                      ),
                      children: (0, r.jsx)("figcaption", {
                        className: "text-text-sm xl:text-text-md text-gray-25",
                        children: i,
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)("div", {
                className: "flex flex-col gap-6 mt-8",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-text-xl font-black text-gray-900",
                        children: t,
                      }),
                      (0, r.jsx)("p", {
                        className: "text-text-lg text-primary-700",
                        children: l,
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex gap-5 text-gray-400",
                    children: [
                      a &&
                        (0, r.jsx)(f.$n, {
                          variant: "text",
                          href: "https://www.linkedin.com/in/".concat(a),
                          rel: "noopener noreferrer",
                          target: "_blank",
                          className: "hover:text-primary-600",
                          children: (0, r.jsx)(f.ky, {}),
                        }),
                      m &&
                        (0, r.jsx)(f.$n, {
                          variant: "text",
                          href: "https://x.com/".concat(m),
                          rel: "noopener noreferrer",
                          target: "_blank",
                          className: "hover:text-primary-600",
                          children: (0, r.jsx)(f.uv, {}),
                        }),
                      g &&
                        (0, r.jsx)(f.$n, {
                          variant: "text",
                          href: "https://t.me/".concat(g),
                          rel: "noopener noreferrer",
                          target: "_blank",
                          className: "hover:text-primary-600",
                          children: (0, r.jsx)(f.hZ, {}),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function u() {
        let e = (0, n.useRef)(null),
          t = (0, n.useRef)(null),
          s = (0, n.useRef)(null),
          [h, c] = (0, n.useState)(["0", "-700px"]),
          { scrollYProgress: x } = (0, i.L)({ target: e }),
          b = (0, d.Ub)(o.Sj),
          f = (0, d.Ub)(o.w9),
          u = (0, l.G)(x, [0, 1], h);
        return (
          (0, n.useEffect)(() => {
            function e() {
              if (!t.current || !s.current || !b) return;
              let { width: e } = t.current.getBoundingClientRect(),
                r = window.screen.width,
                n = f ? 16 : 56,
                i = e * m.length + 16 * m.length - 16;
              c(["".concat(n, "px"), "-".concat(i - r + n, "px")]);
            }
            return (
              window.addEventListener("resize", e),
              e(),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, [b]),
          (0, r.jsx)("div", {
            className: "relative h-[3000px] lg:h-auto",
            ref: e,
            children: (0, r.jsxs)("div", {
              className:
                "sticky lg:static top-0 flex flex-col overflow-x-hidden",
              children: [
                (0, r.jsx)("div", {
                  className: "px-4 md:px-15 lg:px-20 mb-4",
                  children: (0, r.jsx)("h2", {
                    className: "text-display-xs font-bold text-gray-900",
                    children: "Meet the T3 founders",
                  }),
                }),
                b &&
                  (0, r.jsx)(a.P.div, {
                    style: { x: u },
                    className: "flex gap-4 will-change-transform",
                    ref: s,
                    drag: "x",
                    dragConstraints: { left: 0, right: 0 },
                    children: m.map((e) =>
                      (0, r.jsx)(
                        "div",
                        {
                          ref: t,
                          children: (0, n.createElement)(g, {
                            ...e,
                            key: e.name,
                          }),
                        },
                        e.name
                      )
                    ),
                  }),
                !b &&
                  (0, r.jsx)("div", {
                    className:
                      "flex justify-between w-full mb-24 gap-4 lg:gap-6 px-20",
                    children: m.map((e) =>
                      (0, n.createElement)(g, {
                        ...e,
                        key: e.name,
                        className: "basis-1/3",
                      })
                    ),
                  }),
              ],
            }),
          })
        );
      }
    },
    47144: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 8656)),
        Promise.resolve().then(s.bind(s, 14061)),
        Promise.resolve().then(s.bind(s, 51704)),
        Promise.resolve().then(s.bind(s, 87454)),
        Promise.resolve().then(s.bind(s, 46577)),
        Promise.resolve().then(s.bind(s, 2465)),
        Promise.resolve().then(s.bind(s, 57503)),
        Promise.resolve().then(s.bind(s, 39582)),
        Promise.resolve().then(s.bind(s, 5045)),
        Promise.resolve().then(s.bind(s, 13888)),
        Promise.resolve().then(s.bind(s, 89514)),
        Promise.resolve().then(s.bind(s, 2870)),
        Promise.resolve().then(s.bind(s, 43232)),
        Promise.resolve().then(s.bind(s, 24016)),
        Promise.resolve().then(s.bind(s, 54697)),
        Promise.resolve().then(s.bind(s, 55868)),
        Promise.resolve().then(s.bind(s, 21435)),
        Promise.resolve().then(s.bind(s, 57179)),
        Promise.resolve().then(s.bind(s, 68949)),
        Promise.resolve().then(s.bind(s, 79114)),
        Promise.resolve().then(s.bind(s, 79898)),
        Promise.resolve().then(s.bind(s, 9073)),
        Promise.resolve().then(s.bind(s, 41057)),
        Promise.resolve().then(s.bind(s, 54985)),
        Promise.resolve().then(s.bind(s, 29177)),
        Promise.resolve().then(s.bind(s, 41123)),
        Promise.resolve().then(s.bind(s, 67767)),
        Promise.resolve().then(s.bind(s, 30471)),
        Promise.resolve().then(s.bind(s, 60688)),
        Promise.resolve().then(s.bind(s, 70186)),
        Promise.resolve().then(s.bind(s, 50403)),
        Promise.resolve().then(s.bind(s, 1549)),
        Promise.resolve().then(s.bind(s, 63351)),
        Promise.resolve().then(s.bind(s, 59762)),
        Promise.resolve().then(s.bind(s, 11826)),
        Promise.resolve().then(s.bind(s, 78618)),
        Promise.resolve().then(s.bind(s, 25759)),
        Promise.resolve().then(s.bind(s, 53541)),
        Promise.resolve().then(s.bind(s, 60013)),
        Promise.resolve().then(s.bind(s, 97021)),
        Promise.resolve().then(s.bind(s, 42684)),
        Promise.resolve().then(s.bind(s, 98545)),
        Promise.resolve().then(s.bind(s, 68459)),
        Promise.resolve().then(s.bind(s, 75394)),
        Promise.resolve().then(s.bind(s, 48821)),
        Promise.resolve().then(s.bind(s, 83473)),
        Promise.resolve().then(s.bind(s, 52874)),
        Promise.resolve().then(s.bind(s, 84770)),
        Promise.resolve().then(s.bind(s, 53181)),
        Promise.resolve().then(s.bind(s, 54633)),
        Promise.resolve().then(s.bind(s, 80042)),
        Promise.resolve().then(s.bind(s, 32764)),
        Promise.resolve().then(s.bind(s, 76300)),
        Promise.resolve().then(s.bind(s, 53085)),
        Promise.resolve().then(s.bind(s, 64240)),
        Promise.resolve().then(s.bind(s, 24560)),
        Promise.resolve().then(s.bind(s, 35888)),
        Promise.resolve().then(s.bind(s, 47701)),
        Promise.resolve().then(s.bind(s, 44094)),
        Promise.resolve().then(s.bind(s, 45224)),
        Promise.resolve().then(s.bind(s, 47175)),
        Promise.resolve().then(s.bind(s, 78947)),
        Promise.resolve().then(s.bind(s, 26641)),
        Promise.resolve().then(s.bind(s, 46291)),
        Promise.resolve().then(s.bind(s, 3724)),
        Promise.resolve().then(s.bind(s, 41407)),
        Promise.resolve().then(s.bind(s, 15152)),
        Promise.resolve().then(s.bind(s, 2754)),
        Promise.resolve().then(s.bind(s, 58415)),
        Promise.resolve().then(s.bind(s, 35732)),
        Promise.resolve().then(s.t.bind(s, 30027, 23)),
        Promise.resolve().then(s.t.bind(s, 76236, 23));
    },
    51704: (e, t, s) => {
      "use strict";
      s.d(t, { TeamCard: () => o });
      var r = s(9598),
        n = s(97255),
        i = s(35028),
        l = s(11676),
        a = s(45602);
      function o(e) {
        let {
          name: t,
          position: s,
          image: o,
          linkedIn: d,
          twitter: m,
          telegram: h,
          index: c,
          className: x = "",
        } = e;
        return (0, r.jsxs)("div", {
          className: (0, l.QP)(
            "flex flex-col items-center group team-card max-w-[160px] mx-auto lg:max-w-[296px]",
            x
          ),
          children: [
            (0, r.jsx)(i.P.span, {
              className:
                "inline-block rounded-full bg-[#E3F1FA] max-w-[160px] max-h-[160px] w-auto h-auto lg:max-w-[296px] lg:max-h-[296px]",
              animate: { scale: 1 },
              initial: { scale: 0 },
              transition: {
                duration: 0.1,
                delay: 0.15 * c,
                type: "spring",
                stiffness: 150,
              },
              children: (0, r.jsx)(n.default, {
                src: o,
                alt: t,
                width: 296,
                height: 296,
                className:
                  "w-full h-auto group-hover:scale-105 pointer-events-none transition-transform",
              }),
            }),
            (0, r.jsxs)(i.P.div, {
              className: "flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-6  w-full",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.3, delay: 0.2 * c },
              children: [
                (0, r.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, r.jsx)("p", {
                      className:
                        "text-text-md lg:text-text-xl font-black text-gray-900",
                      children: t,
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "text-text-sm lg:text-text-lg text-primary-700",
                      children: s,
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex gap-5 text-gray-400",
                  children: [
                    d &&
                      (0, r.jsx)(a.$n, {
                        variant: "text",
                        href: "https://www.linkedin.com/in/".concat(d),
                        rel: "noopener noreferrer",
                        target: "_blank",
                        className: "hover:text-primary-600",
                        children: (0, r.jsx)(a.ky, {
                          className: "h-4 w-4 lg:h-6 lg:w-6",
                        }),
                      }),
                    m &&
                      (0, r.jsx)(a.$n, {
                        variant: "text",
                        href: "https://x.com/".concat(m),
                        rel: "noopener noreferrer",
                        target: "_blank",
                        className: "hover:text-primary-600",
                        children: (0, r.jsx)(a.uv, {
                          className: "h-4 w-4 lg:h-6 lg:w-6",
                        }),
                      }),
                    h &&
                      (0, r.jsx)(a.$n, {
                        variant: "text",
                        href: "https://t.me/".concat(h),
                        rel: "noopener noreferrer",
                        target: "_blank",
                        className: "hover:text-primary-600",
                        children: (0, r.jsx)(a.hZ, {
                          className: "h-4 w-4 lg:h-6 lg:w-6",
                        }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    52326: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => r });
      let r = (0, s(73710).A)("Minus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
      ]);
    },
    78974: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => r });
      let r = (0, s(73710).A)("Plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [7255, 507, 5602, 5148, 1860, 2086, 7358], () => t(47144)),
      (_N_E = e.O());
  },
]);
