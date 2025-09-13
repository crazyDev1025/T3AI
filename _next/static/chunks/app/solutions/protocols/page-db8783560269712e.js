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
    s = new e.Error().stack;
  s &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[s] = "8ed10d10-8f24-4318-bd32-d0d72d336ad9"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-8ed10d10-8f24-4318-bd32-d0d72d336ad9"));
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
  [5259],
  {
    703: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { Features: () => n });
      var i = t(9598),
        r = t(97255),
        l = t(45602);
      function n() {
        return (0, i.jsx)("section", {
          className: "py-16 md:py-24 bg-base-white",
          children: (0, i.jsxs)("div", {
            className: "container-max flex flex-col gap-12",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex flex-col gap-3 lg:max-w-[60%] px-4 md:px-15 lg:px-20",
                children: [
                  (0, i.jsx)("h2", {
                    className:
                      "text-display-xs lg:text-display-md font-black text-gray-900",
                    children: "Designed for protocol builders",
                  }),
                  (0, i.jsx)("p", {
                    className: "text-text-md lg:text-text-lg text-gray-600",
                    children:
                      "Powering universally composable, yet on-chain anonymous, identity without having to proprietary infrastructure",
                  }),
                ],
              }),
              (0, i.jsxs)(l.FN, {
                className: "flex xl:gap-12 lg:gap-4 py-3",
                withControl: !0,
                slideClassName: "basis-1/3",
                children: [
                  (0, i.jsx)("figure", {
                    className: "ps-4 lg:pl-0 min-w-[327px] snap-start group",
                    id: "item-1",
                    children: (0, i.jsxs)("div", {
                      className: " flex flex-col gap-6",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, i.jsx)(r.default, {
                            src: "/images/solutions/protocols/usecase-1.png",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "px-4 min-h-[175px] lg:min-h-[180px]",
                          children: [
                            (0, i.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Streamlined Development",
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Developers can skip the hassle of independent identity and data storage decisions by using built-in, secure components, simplifying the development process and speeding up project timelines.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("figure", {
                    className: "ps-4 lg:pl-0 min-w-[327px] snap-start group",
                    id: "item-2",
                    children: (0, i.jsxs)("div", {
                      className: " flex flex-col gap-6",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, i.jsx)(r.default, {
                            src: "/images/solutions/protocols/usecase-2.png",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "px-4 min-h-[175px] lg:min-h-[180px]",
                          children: [
                            (0, i.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Enhanced interoperability",
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "A consistent identity layer across decentralized applications accelerates development and enables single records for individuals, ensuring seamless interoperability and a cohesive user experience across all projects.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("figure", {
                    className: "px-4 lg:pl-0 min-w-[327px] snap-start group",
                    id: "item-3",
                    children: (0, i.jsxs)("div", {
                      className: " flex flex-col gap-6",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, i.jsx)(r.default, {
                            src: "/images/solutions/protocols/usecase-3.png",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "px-4 min-h-[175px] lg:min-h-[180px]",
                          children: [
                            (0, i.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Increased Security and Efficiency",
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Eliminate the need for separate infrastructure security audits and benefit from reusable tools created by other projects, boosting both the speed to launch and market readiness, while maintaining high security standards",
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
        });
      }
    },
    38742: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 703)),
        Promise.resolve().then(t.bind(t, 74775)),
        Promise.resolve().then(t.bind(t, 87454)),
        Promise.resolve().then(t.bind(t, 46577)),
        Promise.resolve().then(t.bind(t, 2465)),
        Promise.resolve().then(t.bind(t, 57503)),
        Promise.resolve().then(t.bind(t, 39582)),
        Promise.resolve().then(t.bind(t, 5045)),
        Promise.resolve().then(t.bind(t, 13888)),
        Promise.resolve().then(t.bind(t, 89514)),
        Promise.resolve().then(t.bind(t, 2870)),
        Promise.resolve().then(t.bind(t, 43232)),
        Promise.resolve().then(t.bind(t, 24016)),
        Promise.resolve().then(t.bind(t, 54697)),
        Promise.resolve().then(t.bind(t, 55868)),
        Promise.resolve().then(t.bind(t, 21435)),
        Promise.resolve().then(t.bind(t, 57179)),
        Promise.resolve().then(t.bind(t, 68949)),
        Promise.resolve().then(t.bind(t, 79114)),
        Promise.resolve().then(t.bind(t, 79898)),
        Promise.resolve().then(t.bind(t, 9073)),
        Promise.resolve().then(t.bind(t, 41057)),
        Promise.resolve().then(t.bind(t, 54985)),
        Promise.resolve().then(t.bind(t, 29177)),
        Promise.resolve().then(t.bind(t, 41123)),
        Promise.resolve().then(t.bind(t, 67767)),
        Promise.resolve().then(t.bind(t, 30471)),
        Promise.resolve().then(t.bind(t, 60688)),
        Promise.resolve().then(t.bind(t, 70186)),
        Promise.resolve().then(t.bind(t, 50403)),
        Promise.resolve().then(t.bind(t, 1549)),
        Promise.resolve().then(t.bind(t, 63351)),
        Promise.resolve().then(t.bind(t, 59762)),
        Promise.resolve().then(t.bind(t, 11826)),
        Promise.resolve().then(t.bind(t, 78618)),
        Promise.resolve().then(t.bind(t, 25759)),
        Promise.resolve().then(t.bind(t, 53541)),
        Promise.resolve().then(t.bind(t, 60013)),
        Promise.resolve().then(t.bind(t, 97021)),
        Promise.resolve().then(t.bind(t, 42684)),
        Promise.resolve().then(t.bind(t, 98545)),
        Promise.resolve().then(t.bind(t, 68459)),
        Promise.resolve().then(t.bind(t, 75394)),
        Promise.resolve().then(t.bind(t, 48821)),
        Promise.resolve().then(t.bind(t, 83473)),
        Promise.resolve().then(t.bind(t, 52874)),
        Promise.resolve().then(t.bind(t, 84770)),
        Promise.resolve().then(t.bind(t, 53181)),
        Promise.resolve().then(t.bind(t, 54633)),
        Promise.resolve().then(t.bind(t, 80042)),
        Promise.resolve().then(t.bind(t, 32764)),
        Promise.resolve().then(t.bind(t, 76300)),
        Promise.resolve().then(t.bind(t, 53085)),
        Promise.resolve().then(t.bind(t, 64240)),
        Promise.resolve().then(t.bind(t, 24560)),
        Promise.resolve().then(t.bind(t, 35888)),
        Promise.resolve().then(t.bind(t, 47701)),
        Promise.resolve().then(t.bind(t, 44094)),
        Promise.resolve().then(t.bind(t, 45224)),
        Promise.resolve().then(t.bind(t, 47175)),
        Promise.resolve().then(t.bind(t, 78947)),
        Promise.resolve().then(t.bind(t, 26641)),
        Promise.resolve().then(t.bind(t, 46291)),
        Promise.resolve().then(t.bind(t, 3724)),
        Promise.resolve().then(t.bind(t, 41407)),
        Promise.resolve().then(t.bind(t, 15152)),
        Promise.resolve().then(t.bind(t, 2754)),
        Promise.resolve().then(t.bind(t, 58415)),
        Promise.resolve().then(t.bind(t, 35732)),
        Promise.resolve().then(t.t.bind(t, 30027, 23)),
        Promise.resolve().then(t.t.bind(t, 76236, 23));
    },
    74775: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { Solution: () => a });
      var i = t(9598),
        r = t(11950),
        l = t(97255),
        n = t(45602);
      let o = (e) => (e - 0.5) * 2;
      function a() {
        let e = (0, r.useRef)(null),
          [s, t] = (0, r.useState)(!1),
          [a, d] = (0, r.useState)({ x: 0, y: 0, width: 0, height: 0 }),
          [m, c] = (0, r.useState)({ x: 0, y: 0 }),
          [h, x] = (0, r.useState)({ x: 0, y: 0 });
        return (
          (0, r.useEffect)(() => {
            let s = e.current;
            if (!s) return;
            let { x: t, y: i, width: r, height: l } = s.getBoundingClientRect();
            d({ x: t, y: i, width: r, height: l });
          }, []),
          (0, i.jsx)("section", {
            className:
              "px-0 py-0 lg:px-20 lg:py-24 bg-base-white overflow-hidden",
            children: (0, i.jsxs)("div", {
              className:
                "container-max flex flex-col lg:flex-row gap-8 items-center bg-gray-900 lg:rounded-3xl py-16 lg:py-12 px-4 lg:px-20",
              children: [
                (0, i.jsx)("div", {
                  className: "flex flex-col basis-1/2 grow lg:max-w-[456px]",
                  children: (0, i.jsxs)("div", {
                    className:
                      "flex flex-col gap-4 md:gap-5 text-center lg:text-left items-center lg:items-start",
                    children: [
                      (0, i.jsx)("h1", {
                        className:
                          "lg:text-display-lg font-black text-gray-25 text-display-xs",
                        children: "Terminal 3’s protocol solution",
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "lg:text-text-xl text-base-white text-text-md max-w-[343px] lg:max-w-full",
                        children:
                          "Enable developers to build dApps that leverage zk-secured identity, credentials and decentralized data infrastructure.",
                      }),
                      (0, i.jsx)(n.$n, {
                        variant: "secondary",
                        className: "mt-4 lg:mt-6",
                        size: "lg",
                        href: "/products/oracle",
                        children: "Learn more",
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)("div", {
                  className:
                    "hidden lg:flex justify-center lg:w-[670px] relative",
                  children: [
                    (0, i.jsx)(l.default, {
                      priority: !0,
                      src: "/images/solutions/protocols/solution-bg.png",
                      width: 670,
                      height: 670,
                      alt: "T3 Protocols",
                      className: "w-full h-auto relative",
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "absolute lg:w-[50.5%] h-fit top-[34%] left-[24.5%]",
                      style: { perspective: 1e3 },
                      onMouseMove: (e) => {
                        t(!0);
                        let s = Math.max(0, e.clientX - a.x) / a.width,
                          i = Math.max(0, e.clientY - a.y) / a.height;
                        c({ x: -(15 * o(i)), y: 15 * o(s) }),
                          x({ x: -(40 * o(i)), y: -(170 * o(s)) });
                      },
                      onMouseOut: () => t(!1),
                      children: [
                        (0, i.jsx)(l.default, {
                          ref: e,
                          src: "/images/solutions/protocols/solution-fg.png",
                          width: 342,
                          height: 206,
                          alt: "T3 Card",
                          className: "w-full h-auto",
                          style: s
                            ? {
                                willChange: "transform",
                                transformStyle: "preserve-3d",
                                transform:
                                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX("
                                    .concat(m.x, "deg) rotateY(")
                                    .concat(
                                      m.y,
                                      "deg) rotateZ(0deg) skew(0deg, 0deg)"
                                    ),
                              }
                            : {},
                        }),
                        (0, i.jsx)("div", {
                          className: "aspect-square",
                          style: {
                            width: "20%",
                            opacity: 0.6,
                            filter: "blur(35px)",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            translate: "-50% -50%",
                            willChange: "transform",
                            transform: "translate3d("
                              .concat(s ? h.y : 0, "%, ")
                              .concat(
                                s ? h.x : 0,
                                "%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                              ),
                            transformStyle: "preserve-3d",
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "lg:hidden",
                  children: (0, i.jsx)(l.default, {
                    priority: !0,
                    src: "/images/solutions/protocols/vc-mobile.png",
                    width: 670,
                    height: 670,
                    alt: "Oracle Hero Image",
                    className: "w-full h-auto relative",
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [7255, 507, 5602, 5148, 1860, 2086, 7358], () => s(38742)),
      (_N_E = e.O());
  },
]);
