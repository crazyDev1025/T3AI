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
    (e._sentryDebugIds[t] = "3c216659-a595-4056-bb73-32b3200218bf"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-3c216659-a595-4056-bb73-32b3200218bf"));
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
  [8658],
  {
    35987: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { UseCases: () => m });
      var a = s(9598),
        i = s(11950),
        n = s(28884),
        l = s(97255),
        r = s(1231),
        d = s(35028),
        o = s(11676),
        c = s(45602);
      let x = [
        {
          id: "education",
          title: "Education",
          href: "/solutions/education",
          content:
            "Empower educational institutions and platforms with Verifiable Private Identity and secure user data storage. Grant customers control over their profiles and learning data, relieving institutions from storing vast amounts of private information while ensuring seamless verification of educational achievements.",
          icon: (0, a.jsx)(l.default, {
            fill: !0,
            alt: "education",
            src: "/images/products/t3-identity/education.svg",
          }),
          image: "/images/solutions/education/hero.png",
          alt: "different coin symbols with a globe and a screen showing a login screen",
        },
        {
          id: "pd",
          title: "Healthcare",
          href: "/solutions/healthcare",
          content:
            "Enable patient-controlled health records that allow selectively disclosure of information to trusted healthcare professionals, safeguarding individual data while providing low-cost and cryptographically-protected access to large, anonymized, and verified datasets for diagnosis and research.",
          icon: (0, a.jsx)(l.default, {
            fill: !0,
            alt: "healthcare",
            src: "/images/products/t3-identity/healthcare.svg",
          }),
          image: "/images/solutions/healthcare/hero.png",
          alt: "different coin symbols with a globe and a screen showing a login screen",
        },
        {
          id: "gaming",
          title: "Gaming",
          href: "/solutions/gaming",
          content:
            "Ensure authentic and secure identities that defend against ecosystem intrusion of bots and AI, and protect against multi-accounting and other abuses by connecting each player to a unique Verifiable Private Identity.",
          icon: (0, a.jsx)(l.default, {
            fill: !0,
            alt: "gaming",
            src: "/images/products/t3-identity/gaming.svg",
          }),
          image: "/images/solutions/gaming/hero.png",
          alt: "different icons of different platforms like gaming, social media and crypto coin surrounding a T3 VC card with a galaxy background",
        },
      ];
      function m() {
        let [e, t] = (0, i.useState)("education");
        return (0, a.jsx)("section", {
          className: (0, r.A)(
            "px-4 py-12 md:py-24 md:px-15 lg:px-20 lg:pt-24 lg:pb-0 lg:h-[824px] w-full transition-colors duration-200 overflow-hidden relative",
            {
              "bg-primary-100": "education" === e,
              "bg-base-white": "pd" === e,
              "bg-black": "gaming" === e,
            }
          ),
          id: "use-cases",
          "data-section": "use-cases",
          children: (0, a.jsx)("div", {
            className: "relative container-max",
            children: (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("h2", {
                  className: (0, r.A)(
                    "text-display-xs lg:text-display-md font-black pb-5",
                    {
                      "text-gray-900": "gaming" !== e,
                      "text-base-white": "gaming" === e,
                    }
                  ),
                  children: "Use cases",
                }),
                (0, a.jsxs)(n.tU, {
                  selectedKey: e,
                  onSelectionChange: t,
                  children: [
                    (0, a.jsx)(n.wb, {
                      "aria-label": "Use cases",
                      className: "flex gap-4 w-[353px] lg:w-auto",
                      children: x.map((t) =>
                        (0, a.jsxs)(
                          n.oz,
                          {
                            id: t.id,
                            className: (0, r.A)(
                              "text-text-sm font-bold cursor-pointer px-[4px] pb-[12px] outline-none focus-visible:ring-2 transition-colors relative",
                              {
                                "text-gray-500 selected:text-primary-700":
                                  "gaming" !== e,
                                "text-gray-300 selected:text-primary-400":
                                  "gaming" === e,
                              }
                            ),
                            children: [
                              t.title,
                              e === t.id &&
                                (0, a.jsx)(d.P.div, {
                                  className: (0, r.A)(
                                    "absolute bottom-0 left-0 w-full h-[2px] bg-primary-700",
                                    { "bg-primary-400": "gaming" === e }
                                  ),
                                  layoutId: "underline",
                                }),
                            ],
                          },
                          t.id
                        )
                      ),
                    }),
                    x.map((t) =>
                      (0, a.jsxs)(
                        n.Kp,
                        {
                          id: t.id,
                          className:
                            "lg:flex lg:justify-between lg:h-[480px] lg:mt-6 lg:gap-24",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "h-[296px] lg:h-auto pt-6 lg:pt-16 lg:max-w-[624px] shrink-0",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex items-center gap-2 mb-4 lg:block lg:mb-0",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "relative size-[30px] lg:size-16",
                                      children: t.icon,
                                    }),
                                    (0, a.jsx)("h3", {
                                      className: (0, r.A)(
                                        "text-text-lg lg:text-display-sm font-black transition-colors duration-200 lg:pt-6 lg:pb-4 text-primary-500",
                                        {
                                          "lg:text-gray-900": "gaming" !== e,
                                          "lg:text-base-white": "gaming" === e,
                                        }
                                      ),
                                      children: t.title,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, o.QP)(
                                    (0, r.A)(
                                      "text-text-sm lg:text-text-lg text-gray-600 pb-6 lg:pb-8",
                                      {
                                        "text-gray-700": "pd" === e,
                                        "text-gray-100": "gaming" === e,
                                      }
                                    )
                                  ),
                                  children: t.content,
                                }),
                                (0, a.jsx)(c.$n, {
                                  size: "lg",
                                  href: t.href,
                                  variant:
                                    "gaming" === e ? "secondary" : "primary",
                                  children: "Learn more",
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "relative h-full",
                              children: (0, a.jsx)("div", {
                                className: "lg:w-[650px]",
                                children: (0, a.jsx)(l.default, {
                                  loading: "lazy",
                                  width: 0,
                                  height: 0,
                                  sizes: "100%",
                                  src: t.image,
                                  alt: t.alt,
                                  className: (0, r.A)(
                                    "lg:w-full lg:h-auto w-[375px] md:w-full h-auto lg:max-w-[560px] lg:max-h-[560px]",
                                    {
                                      "lg:max-w-[650px] lg:max-h-[480px]":
                                        "education" === t.id,
                                    }
                                  ),
                                }),
                              }),
                            }),
                          ],
                        },
                        t.id
                      )
                    ),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    50308: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 92840)),
        Promise.resolve().then(s.bind(s, 81052)),
        Promise.resolve().then(s.bind(s, 35987)),
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
    81052: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { HowItWorks: () => m });
      var a = s(9598),
        i = s(11950),
        n = s(97255),
        l = s(1231),
        r = s(73710);
      let d = (0, r.A)("User", [
          [
            "path",
            { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
          ],
          ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
        ]),
        o = (0, r.A)("Building2", [
          [
            "path",
            { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" },
          ],
          [
            "path",
            { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" },
          ],
          [
            "path",
            { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" },
          ],
          ["path", { d: "M10 6h4", key: "1itunk" }],
          ["path", { d: "M10 10h4", key: "tcdvrf" }],
          ["path", { d: "M10 14h4", key: "kelpxr" }],
          ["path", { d: "M10 18h4", key: "1ulq68" }],
        ]);
      var c = s(11676);
      let x = [
          {
            icon: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "rounded-full text-primary-600 bg-primary-100 p-1.5 lg:p-2",
                  children: [
                    (0, a.jsx)(d, { className: "hidden lg:block" }),
                    (0, a.jsx)(d, { className: "lg:hidden", size: 12 }),
                  ],
                }),
                "For Users",
              ],
            }),
            name: "Oracle",
            heading:
              "A familiar and simple onboarding experience, secured by T3 AI",
            text: "Enrich, atomize, and decentrally store user data, issue verifiable credentials, and gain privacy-preserving data access through cryptographic APIs. Manage end-to-end user data flow from collection to access, through our decentralized platform with endless privacy-preserving output applications",
          },
          {
            icon: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "rounded-full text-primary-600 bg-primary-100 p-1.5 lg:p-2",
                  children: [
                    (0, a.jsx)(o, { className: "hidden lg:block" }),
                    (0, a.jsx)(o, { className: "lg:hidden", size: 12 }),
                  ],
                }),
                "For Enterprises",
              ],
            }),
            name: "T3 Identity",
            heading:
              "Everything you need for identity and customer relationship management",
            text: "Manage, segment, analyze, and communicate with users in a privacy-preserving environment via zero-knowledge cryptography. Secure user PII with self-sovereign decentralized identity infrastructure and foster impactful, yet privacy-preserving, user connections throughout the client journey.",
          },
        ],
        m = () => {
          let [e, t] = (0, i.useState)(1),
            s = x[e - 1];
          return (0, a.jsxs)("section", {
            className: "lg:px-20 pt-16 lg:pt-24 relative",
            id: "how-it-works",
            "data-section": "how-it-works",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute inset-x-0 inset-y-0 bg-gradient-to-tr from-[#101828] to-[#475467]",
              }),
              (0, a.jsx)("div", {
                className: (0, l.A)(
                  "absolute inset-x-0 inset-y-0 opacity-0 bg-gradient-to-tr transition-opacity from-[#0B4A6F] to-[#0086C9]",
                  { "opacity-100": 2 === e }
                ),
              }),
              (0, a.jsxs)("div", {
                className: "container-max relative",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "px-8 md:px-15 lg:px-0 mb-12 lg:mb-16 text-base-white flex flex-col lg:items-center",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "text-text-md font-bold text-primary-300 mb-3 text-center",
                        children: "Platform",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "font-black text-display-sm lg:text-display-md text-gray-25 mb-5 lg:max-w-[768px] text-center",
                        children: null == s ? void 0 : s.heading,
                      }),
                      (0, a.jsx)("div", {
                        className: "flex lg:h-16 gap-6 justify-center",
                        children: x.map((s, i) => {
                          let { icon: n } = s;
                          return (0, a.jsx)(
                            "div",
                            {
                              onClick: () => t(i + 1),
                              className: (0, l.A)(
                                "cursor-pointer rounded-3xl lg:rounded-full p-2 lg:p-4 text-text-sm font-black transition-all flex items-center gap-1 lg:gap-2 hover:bg-gray-700",
                                {
                                  "text-gray-900 bg-base-white hover:!bg-base-white":
                                    e === i + 1,
                                }
                              ),
                              children: n,
                            },
                            i
                          );
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: (0, c.QP)(
                      (0, l.A)("lg:w-full h-[530px] relative overflow-hidden", {
                        "md:h-[472px]": 1 === e,
                        "h-[470px] lg:h-[398px]": 2 === e,
                      })
                    ),
                    children: [
                      (0, a.jsx)(n.default, {
                        className: (0, l.A)(
                          "hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 max-w-none",
                          { "opacity-0": 1 !== e }
                        ),
                        src: "/images/products/t3-identity/user.png",
                        alt: "hiw-users",
                        width: 1024,
                        height: 682,
                      }),
                      (0, a.jsx)(n.default, {
                        className: (0, l.A)(
                          "absolute md:hidden left-1/2 -translate-x-1/2",
                          { "opacity-0": 1 !== e }
                        ),
                        src: "/images/products/t3-identity/user-mobile.png",
                        alt: "hiw-users",
                        width: 314,
                        height: 530,
                      }),
                      (0, a.jsx)(n.default, {
                        className: (0, l.A)(
                          "transition-opacity hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 xl:-bottom-[80px]",
                          { "opacity-0": 2 !== e }
                        ),
                        src: "/images/products/t3-identity/enterprise.png",
                        alt: "hiw-users",
                        width: 1024,
                        height: 682,
                      }),
                      (0, a.jsx)(n.default, {
                        className: (0, l.A)(
                          "absolute top-0 transition-opacity lg:hidden left-4 md:left-15 w-[720px] h-[470px] max-w-none",
                          { "opacity-0": 2 !== e }
                        ),
                        src: "/images/products/t3-identity/enterprise-mobile.png",
                        alt: "hiw-users",
                        width: 720,
                        height: 479,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    92840: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { Features: () => w });
      var a = s(9598),
        i = s(97255),
        n = s(77632),
        l = s(45602),
        r = s(56550),
        d = s(11676);
      function o(e) {
        let {
          link: t,
          icon: s,
          title: i,
          text: n,
          className: l = "",
          buttonText: o = "Learn more",
        } = e;
        return (0, a.jsxs)("a", {
          className: (0, d.Id)(
            "px-2 py-4 md:p-6 rounded-3xl flex md:flex-col gap-2 xl:gap-6 text-left lg:basis-1/3 xl:h-[320px]",
            l
          ),
          href: t,
          children: [
            (0, a.jsx)("div", {
              className: "p-2 lg:p-[10px] text-base-white",
              children: s,
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-4 md:gap-6 flex-1",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-2 lg:gap-4",
                  children: [
                    (0, a.jsx)("h4", {
                      className:
                        "text-text-md md:text-text-xl font-black text-base-white lg:mt-2 lg:mb-2",
                      children: i,
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-text-xs md:text-text-sm lg:text-text-md text-base-white flex-1 lg:mb-0",
                      children: n,
                    }),
                  ],
                }),
                (0, a.jsxs)("p", {
                  className:
                    "flex text-text-sm md:text-text-md font-bold text-base-white gap-2 lg:mt-auto",
                  children: [
                    o,
                    " ",
                    (0, a.jsx)(r.A, { className: "size-5 lg:size-6" }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var c = s(11950),
        x = s(1231),
        m = s(47275),
        h = s(76859);
      let g = [
          "/images/products/t3-identity/stack-4.svg",
          "/images/products/t3-identity/stack-3.svg",
          "/images/products/t3-identity/stack-2.svg",
          "/images/products/t3-identity/stack-1.svg",
        ],
        p = 0,
        u = [
          [
            { zIndex: 3, top: 0 },
            { zIndex: 0, top: -48 },
            { zIndex: 1, top: -32 },
            { zIndex: 2, top: -16 },
          ],
          [
            { zIndex: 2, top: -16 },
            { zIndex: 3, top: 0 },
            { zIndex: 0, top: -48 },
            { zIndex: 1, top: -32 },
          ],
          [
            { zIndex: 1, top: -32 },
            { zIndex: 2, top: -16 },
            { zIndex: 3, top: 0 },
            { zIndex: 0, top: -48 },
          ],
          [
            { zIndex: 0, top: -48 },
            { zIndex: 1, top: -32 },
            { zIndex: 2, top: -16 },
            { zIndex: 3, top: 0 },
          ],
        ];
      function f() {
        let e = (0, h.Ub)(m.w9),
          [t, s] = (0, c.useState)(3),
          [n, l] = (0, c.useState)(0);
        return (
          (0, h.$$)(() => {
            (p += 16.6667) > 2500 ? l(1) : l(0),
              p > 3e3 && ((p = 0), s((e) => (e < 1 ? 3 : e - 1)));
          }, 16.6667),
          (0, a.jsx)("div", {
            className:
              "absolute top-20 xl:top-10 left-1/2 -translate-x-1/2 w-[343px] xl:w-[600px]",
            style: { perspective: 5e3 },
            children: g.map((s, l) => {
              let r = u[t][l];
              return (0, a.jsx)(
                "div",
                {
                  className: "relative",
                  style: {
                    zIndex: r.zIndex,
                    transformOrigin: "top center",
                    transform: "scale(".concat(
                      100 - 7.5 * (3 - r.zIndex),
                      "%)"
                    ),
                    transition: "transform 0.15s",
                  },
                  children: (0, a.jsx)(i.default, {
                    className: (0, x.A)("rounded-3xl absolute shadow-xl", {
                      "animate-stack-flip": n > 0 && t === l,
                      "animate-fade-in": l === (t + 1) % 4,
                    }),
                    loading: "lazy",
                    width: 600,
                    height: 600,
                    src: s,
                    alt: "User Onboarding & Authentication",
                    style: {
                      top: r.top * (e ? 1.5 : 2),
                      transition: "top 0.15s ease",
                      transformStyle: "preserve-3d",
                    },
                  }),
                },
                s
              );
            }),
          })
        );
      }
      let b = [
          "/images/products/t3-identity/stack-4.svg",
          "/images/products/t3-identity/stack-3.svg",
          "/images/products/t3-identity/stack-2.svg",
          "/images/products/t3-identity/stack-1.svg",
        ],
        y = 0,
        v = [
          [
            { zIndex: 3, top: 0 },
            { zIndex: 0, top: -48 },
            { zIndex: 1, top: -32 },
            { zIndex: 2, top: -16 },
          ],
          [
            { zIndex: 2, top: -16 },
            { zIndex: 3, top: 0 },
            { zIndex: 0, top: -48 },
            { zIndex: 1, top: -32 },
          ],
          [
            { zIndex: 1, top: -32 },
            { zIndex: 2, top: -16 },
            { zIndex: 3, top: 0 },
            { zIndex: 0, top: -48 },
          ],
          [
            { zIndex: 0, top: -48 },
            { zIndex: 1, top: -32 },
            { zIndex: 2, top: -16 },
            { zIndex: 3, top: 0 },
          ],
        ];
      function j() {
        let e = (0, h.Ub)(m.w9),
          [t, s] = (0, c.useState)(3),
          [n, l] = (0, c.useState)(0);
        return (
          (0, h.$$)(() => {
            (y += 16.6667) > 2500 ? l(1) : l(0),
              y > 3e3 && ((y = 0), s((e) => (e < 1 ? 3 : e - 1)));
          }, 16.6667),
          (0, a.jsx)("div", {
            className:
              "absolute top-20 xl:top-10 left-1/2 -translate-x-1/2 w-[343px] xl:w-[600px]",
            style: { perspective: 5e3 },
            children: b.map((s, l) => {
              let r = v[t][l];
              return (0, a.jsx)(
                "div",
                {
                  className: "relative",
                  style: {
                    zIndex: r.zIndex,
                    transformOrigin: "top center",
                    transform: "scale(".concat(
                      100 - 7.5 * (3 - r.zIndex),
                      "%)"
                    ),
                    transition: "transform 0.15s",
                  },
                  children: (0, a.jsx)(i.default, {
                    className: (0, x.A)("rounded-3xl absolute shadow-xl", {
                      "animate-stack-flip": n > 0 && t === l,
                      "animate-fade-in": l === (t + 1) % 4,
                    }),
                    loading: "lazy",
                    width: 600,
                    height: 600,
                    src: s,
                    alt: "User Onboarding & Authentication",
                    style: {
                      top: r.top * (e ? 1.5 : 2),
                      transition: "top 0.15s ease",
                      transformStyle: "preserve-3d",
                    },
                  }),
                },
                s
              );
            }),
          })
        );
      }
      function w() {
        return (0, a.jsx)("section", {
          className: "overflow-x-hidden bg-gray-100 xl:py-24 xl:px-20",
          id: "features",
          "data-section": "features",
          children: (0, a.jsxs)("div", {
            className: "container-max flex flex-col",
            children: [
              (0, a.jsxs)("div", {
                className: "py-16 px-4 md:py-24 md:px-15 xl:px-0",
                children: [
                  (0, a.jsx)("h2", {
                    className:
                      "mb-6 xl:mb-12 text-display-xs xl:text-display-md text-gray-900 font-black",
                    children: "T3 Identity Features",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col xl:flex-row gap-6",
                    children: [
                      (0, a.jsx)(o, {
                        link: "#onboarding",
                        icon: (0, a.jsx)(l.DP, {
                          className: "size-[26px] xl:size-[36px]",
                        }),
                        title: "User Onboarding & Authentication",
                        text: "Efficiently onboard and authenticate users with digital identities that are self-sovereign and interoperable.",
                        className: "bg-gray-500",
                      }),
                      (0, a.jsx)(o, {
                        link: "#segmentation",
                        icon: (0, a.jsx)(l.Mz, {
                          className: "size-[26px] xl:size-[36px]",
                        }),
                        title: "Segmentation & Analysis",
                        text: "Gain insights into your users with trusted and privacy-preserving audience segmentation and programmable analytics and reporting.",
                        className: "bg-gray-700",
                      }),
                      (0, a.jsx)(o, {
                        link: "#communication",
                        icon: (0, a.jsx)(l.a2, {
                          className: "size-[26px] xl:size-[36px]",
                        }),
                        title: "User Communication & Acquisition",
                        text: "Build connections, target communications, and acquire users through T3 AI's privacy-preserving CRM and data oracle.",
                        className: "bg-gray-900",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex flex-col md:px-15 md:pb-24 md:gap-24 xl:py-24 xl:px-0",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "py-16 px-4 md:px-0 md:py-0 xl:py-12 flex flex-col xl:flex-row xl:gap-18 xl:gap-24 xl:items-center gap-6",
                    id: "onboarding",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "xl:basis-[584px]",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex gap-4 items-center xl:gap-2",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "rounded-full bg-gray-500 flex items-center w-fit p-[10px] text-gray-25",
                                    children: (0, a.jsx)(l.DP, {}),
                                  }),
                                  (0, a.jsx)("h4", {
                                    className:
                                      "text-text-md font-bold text-gray-500",
                                    children:
                                      "User Onboarding & Authentication",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "relative h-[422px] xl:hidden my-4 md:my-6",
                                children: (0, a.jsx)(j, {}),
                              }),
                              (0, a.jsxs)("div", {
                                className: "my-6 xl:my-8 flex flex-col gap-4",
                                children: [
                                  (0, a.jsx)("h2", {
                                    className:
                                      "text-display-xs md:text-display-sm font-black text-gray-900",
                                    children:
                                      "Seamless and Secure Decentralized Identity Infrastructure",
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-text-md md:text-text-lg text-gray-600",
                                    children:
                                      "Protect user PII through self-sovereign and encrypted decentralized storage. T3 AI simplifies user identity onboarding via wallet, email, or social logins, ensuring complete user control, privacy, and security while alleviating enterprise burdens for PII privacy and security compliance.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "py-6",
                            children: (0, a.jsxs)(l.nD, {
                              defaultIndex: 0,
                              children: [
                                (0, a.jsxs)(l.As, {
                                  children: [
                                    (0, a.jsx)(l.u, {
                                      children: (0, a.jsx)("h4", {
                                        className:
                                          "text-text-xl font-bold text-gray-900 text-left",
                                        children: "Customizable Frontend",
                                      }),
                                    }),
                                    (0, a.jsx)(l.ub, {
                                      className: "flex flex-col gap-4",
                                      children: (0, a.jsx)("p", {
                                        className:
                                          "text-text-sm md:text-text-md text-gray-600",
                                        children:
                                          "T3 AI's customizable frontend bridges Web2 users into the Web3 ecosystem through seamless onboarding of new and existing users, allowing authentication via wallet, email, or social logins.",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)(l.As, {
                                  children: [
                                    (0, a.jsx)(l.u, {
                                      children: (0, a.jsx)("h4", {
                                        className:
                                          "text-text-xl font-bold text-gray-900 text-left",
                                        children:
                                          "Interoperable DIDs and Reusable Verifiable Credentials",
                                      }),
                                    }),
                                    (0, a.jsx)(l.ub, {
                                      className: "flex flex-col gap-4",
                                      children: (0, a.jsx)("p", {
                                        className:
                                          "text-text-sm md:text-text-md text-gray-600",
                                        children:
                                          "Businesses are empowered to issue Decentralized IDs (DIDs) and Smart Verifiable Credentials, providing users with digital identities that are encrypted, self-sovereign, and connected to privacy-preserving data storage. Our plug-and-play enterprise Single Sign-On (SSO) ensures effortless DID adoption and use.",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "xl:basis-1/2 relative h-[392px] xl:h-[672px] hidden xl:block",
                        children: (0, a.jsx)(f, {}),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "py-16 px-4 md:px-0 md:py-0 xl:py-12 flex flex-col xl:flex-row xl:gap-18 xl:gap-24 xl:items-center gap-6",
                    id: "segmentation",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "xl:basis-1/2 order-2 xl:order-1 hidden xl:block",
                        children: (0, a.jsx)(i.default, {
                          className: "w-full h-auto rounded-3xl",
                          loading: "lazy",
                          width: 640,
                          height: 640,
                          src: "/images/products/t3-identity/feature-2.png",
                          alt: "T3 Enterprise dashboard",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "xl:basis-1/2 order-1 xl:order-2",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex gap-4 items-center xl:gap-2",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "rounded-full bg-gray-700 flex items-center w-fit p-[10px] text-gray-25",
                                    children: (0, a.jsx)(l.Mz, {}),
                                  }),
                                  (0, a.jsx)("h4", {
                                    className:
                                      "text-text-md font-bold text-gray-700",
                                    children: "Segmentation & Analytics",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "xl:hidden my-4 md:my-6",
                                children: (0, a.jsx)(i.default, {
                                  className: "w-full h-auto rounded-3xl",
                                  loading: "lazy",
                                  width: 640,
                                  height: 640,
                                  src: "/images/products/t3-identity/feature-2.png",
                                  alt: "T3 Enterprise dashboard",
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "my-6 xl:my-8 flex flex-col gap-4",
                                children: [
                                  (0, a.jsx)("h2", {
                                    className:
                                      "text-display-xs md:text-display-sm font-black text-gray-900",
                                    children:
                                      "Unlock User Insights with Enriched Data and Privacy-Preserving Analytics",
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-text-md md:text-text-lg text-gray-600",
                                    children:
                                      "T3 AI enhances user profiles with on- and off-chain data, delivering customizable analytics dashboards tailored to unique business requirements",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "py-6",
                            children: (0, a.jsxs)(l.nD, {
                              defaultIndex: 0,
                              children: [
                                (0, a.jsxs)(l.As, {
                                  children: [
                                    (0, a.jsx)(l.u, {
                                      children: (0, a.jsx)("h4", {
                                        className:
                                          "text-text-xl font-bold text-gray-900 text-left",
                                        children: "Data Transformation",
                                      }),
                                    }),
                                    (0, a.jsx)(l.ub, {
                                      className: "flex flex-col gap-4",
                                      children: (0, a.jsx)("p", {
                                        className:
                                          "text-text-sm md:text-text-md text-gray-600",
                                        children:
                                          "T3 AI standardizes, enriches, and encrypts user data, utilizing our proprietary schema which is designed to work with universally established user data taxonomies and classifications, enhancing data actionability, interoperability, and relevancy of insights.",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)(l.As, {
                                  children: [
                                    (0, a.jsx)(l.u, {
                                      children: (0, a.jsx)("h4", {
                                        className:
                                          "text-text-xl font-bold text-gray-900 text-left",
                                        children:
                                          "Programmable Reporting and Analytics",
                                      }),
                                    }),
                                    (0, a.jsx)(l.ub, {
                                      className: "flex flex-col gap-4",
                                      children: (0, a.jsx)("p", {
                                        className:
                                          "text-text-sm md:text-text-md text-gray-600",
                                        children:
                                          "T3 Identity’s analytics homepage helps enterprises understand their customers with programmable engagement analytics and reporting. Secured with zero-knowledge cryptography, enterprises are guaranteed data integrity and output accuracy without the need to handle or reveal protected user PII. Users also have access to a dashboard that ensures self-sovereign data control and management.",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "py-16 px-4 md:px-0 md:py-0 xl:py-12 flex flex-col xl:flex-row xl:gap-18 xl:gap-24 xl:items-center gap-6",
                    id: "communication",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "xl:basis-1/2",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex gap-4 items-center xl:gap-2",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "rounded-full bg-gray-900 flex items-center w-fit p-[10px] text-gray-25",
                                    children: (0, a.jsx)(l.a2, {}),
                                  }),
                                  (0, a.jsx)("h4", {
                                    className:
                                      "text-text-md font-bold text-gray-900",
                                    children:
                                      "User Communication & Acquisition",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "xl:hidden my-4 md:my-6",
                                children: (0, a.jsx)(i.default, {
                                  src: "/images/products/t3-identity/feature-3.png",
                                  alt: "components from T3 Enterprise dashboard",
                                  width: 640,
                                  height: 640,
                                  className: "w-full h-auto rounded-3xl",
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "my-6 xl:my-8 flex flex-col gap-4",
                                children: [
                                  (0, a.jsx)("h2", {
                                    className:
                                      "text-display-xs md:text-display-sm font-black text-gray-900",
                                    children:
                                      "Streamlined Customer Engagement and Acquisition",
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-text-md md:text-text-lg text-gray-600",
                                    children:
                                      "Unlock automated segmentation, personalized messaging, and seamless lead generation with T3 Identity",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "py-6",
                            children: (0, a.jsxs)(l.nD, {
                              defaultIndex: 0,
                              children: [
                                (0, a.jsxs)(l.As, {
                                  children: [
                                    (0, a.jsx)(l.u, {
                                      children: (0, a.jsx)("h4", {
                                        className:
                                          "text-text-xl font-bold text-gray-900 text-left",
                                        children:
                                          "Automated Segmentation and Messaging",
                                      }),
                                    }),
                                    (0, a.jsxs)(l.ub, {
                                      className: "flex flex-col gap-4",
                                      children: [
                                        (0, a.jsx)("p", {
                                          className:
                                            "text-text-sm md:text-text-md text-gray-600",
                                          children:
                                            "T3 AI allows privacy-preserving customer segmentation and automated and personalized communications via our zero-knowledge platform.",
                                        }),
                                        (0, a.jsxs)(l.$n, {
                                          variant: "link",
                                          href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                                          size: "sm",
                                          children: [
                                            "Chart",
                                            (0, a.jsx)(n.A, {}),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)(l.As, {
                                  children: [
                                    (0, a.jsx)(l.u, {
                                      children: (0, a.jsx)("h4", {
                                        className:
                                          "text-text-xl font-bold text-gray-900 text-left",
                                        children:
                                          "Lead Generation and Acquisition",
                                      }),
                                    }),
                                    (0, a.jsxs)(l.ub, {
                                      className: "flex flex-col gap-4",
                                      children: [
                                        (0, a.jsx)("p", {
                                          className:
                                            "text-text-sm md:text-text-md text-gray-600",
                                          children:
                                            "The interoperability of T3 AI identities enables enterprises to acquire new users via targeted campaigns, all without handling private customer data. Users can stake their self-sovereign data for enterprise access, opting-in to marketing and acquisition campaigns.",
                                        }),
                                        (0, a.jsxs)(l.$n, {
                                          variant: "link",
                                          href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                                          size: "sm",
                                          children: [
                                            "Chart",
                                            (0, a.jsx)(n.A, {}),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "xl:basis-1/2 hidden xl:block",
                        children: (0, a.jsx)(i.default, {
                          src: "/images/products/t3-identity/feature-3.png",
                          alt: "components from T3 Enterprise dashboard",
                          width: 640,
                          height: 640,
                          className: "w-full h-auto rounded-3xl",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [7255, 507, 314, 5602, 5148, 1860, 2086, 7358], () => t(50308)),
      (_N_E = e.O());
  },
]);
