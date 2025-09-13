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
    (e._sentryDebugIds[s] = "eb8d5a1e-0e0d-4469-9a67-ab0e007d19b2"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-eb8d5a1e-0e0d-4469-9a67-ab0e007d19b2"));
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
  [5275],
  {
    1645: (e, s, i) => {
      "use strict";
      i.r(s), i.d(s, { Features: () => o });
      var t = i(9598),
        n = i(97255),
        r = i(45602);
      function o() {
        return (0, t.jsx)("section", {
          className: "py-16 md:py-24 bg-base-white",
          children: (0, t.jsxs)("div", {
            className: "container-max flex flex-col gap-12",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "flex flex-col gap-3 lg:max-w-[60%] px-4 md:px-15 lg:px-20",
                children: [
                  (0, t.jsx)("h2", {
                    className:
                      "text-display-xs lg:text-display-md font-black text-gray-900",
                    children: "Designed for onboarding gamers",
                  }),
                  (0, t.jsx)("p", {
                    className: "text-text-md lg:text-text-lg text-gray-600",
                    children:
                      "Manage and segment gamers in a privacy-preserving environment",
                  }),
                ],
              }),
              (0, t.jsxs)(r.FN, {
                className: "flex xl:gap-12 lg:gap-4 py-3",
                withControl: !0,
                slideClassName: "basis-1/3",
                children: [
                  (0, t.jsx)("figure", {
                    className: "ps-4 lg:pl-0 min-w-[327px] snap-start group",
                    id: "item-1",
                    children: (0, t.jsxs)("div", {
                      className: " flex flex-col gap-6",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, t.jsx)(n.default, {
                            src: "/images/solutions/gaming/usecase-1.png",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "px-4 min-h-[175px] lg:min-h-[180px]",
                          children: [
                            (0, t.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Cross-Game Portability",
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Seamlessly onboard web2 gamers into web3 through a unified gaming account. Foster a cohesive gaming experience with cross-game achievement recognition.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("figure", {
                    className: "ps-4 lg:pl-0 min-w-[327px] snap-start group",
                    id: "item-2",
                    children: (0, t.jsxs)("div", {
                      className: " flex flex-col gap-6",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, t.jsx)(n.default, {
                            src: "/images/solutions/gaming/usecase-2.png",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "px-4 min-h-[175px] lg:min-h-[180px]",
                          children: [
                            (0, t.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Faster Project Deployment",
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Speed up project deployment while saving resources that would otherwise be allocated to building an in-house identity layer and CRM. Cost-effective alternative to centralized storage.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("figure", {
                    className: "px-4 lg:pl-0 min-w-[327px] snap-start group",
                    id: "item-3",
                    children: (0, t.jsxs)("div", {
                      className: " flex flex-col gap-6",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, t.jsx)(n.default, {
                            src: "/images/solutions/gaming/usecase-3.png",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "px-4 min-h-[175px] lg:min-h-[180px]",
                          children: [
                            (0, t.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Privacy & Trust",
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Tamper-resistant and self-sovereign identity controlled by the user. Empower gamers to directly benefit from the economics of their game play, engagement and achievements",
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
    35609: (e, s, i) => {
      Promise.resolve().then(i.bind(i, 1645)),
        Promise.resolve().then(i.bind(i, 87454)),
        Promise.resolve().then(i.bind(i, 46577)),
        Promise.resolve().then(i.bind(i, 2465)),
        Promise.resolve().then(i.bind(i, 57503)),
        Promise.resolve().then(i.bind(i, 39582)),
        Promise.resolve().then(i.bind(i, 5045)),
        Promise.resolve().then(i.bind(i, 13888)),
        Promise.resolve().then(i.bind(i, 89514)),
        Promise.resolve().then(i.bind(i, 2870)),
        Promise.resolve().then(i.bind(i, 43232)),
        Promise.resolve().then(i.bind(i, 24016)),
        Promise.resolve().then(i.bind(i, 54697)),
        Promise.resolve().then(i.bind(i, 55868)),
        Promise.resolve().then(i.bind(i, 21435)),
        Promise.resolve().then(i.bind(i, 57179)),
        Promise.resolve().then(i.bind(i, 68949)),
        Promise.resolve().then(i.bind(i, 79114)),
        Promise.resolve().then(i.bind(i, 79898)),
        Promise.resolve().then(i.bind(i, 9073)),
        Promise.resolve().then(i.bind(i, 41057)),
        Promise.resolve().then(i.bind(i, 54985)),
        Promise.resolve().then(i.bind(i, 29177)),
        Promise.resolve().then(i.bind(i, 41123)),
        Promise.resolve().then(i.bind(i, 67767)),
        Promise.resolve().then(i.bind(i, 30471)),
        Promise.resolve().then(i.bind(i, 60688)),
        Promise.resolve().then(i.bind(i, 70186)),
        Promise.resolve().then(i.bind(i, 50403)),
        Promise.resolve().then(i.bind(i, 1549)),
        Promise.resolve().then(i.bind(i, 63351)),
        Promise.resolve().then(i.bind(i, 59762)),
        Promise.resolve().then(i.bind(i, 11826)),
        Promise.resolve().then(i.bind(i, 78618)),
        Promise.resolve().then(i.bind(i, 25759)),
        Promise.resolve().then(i.bind(i, 53541)),
        Promise.resolve().then(i.bind(i, 60013)),
        Promise.resolve().then(i.bind(i, 97021)),
        Promise.resolve().then(i.bind(i, 42684)),
        Promise.resolve().then(i.bind(i, 98545)),
        Promise.resolve().then(i.bind(i, 68459)),
        Promise.resolve().then(i.bind(i, 75394)),
        Promise.resolve().then(i.bind(i, 48821)),
        Promise.resolve().then(i.bind(i, 83473)),
        Promise.resolve().then(i.bind(i, 52874)),
        Promise.resolve().then(i.bind(i, 84770)),
        Promise.resolve().then(i.bind(i, 53181)),
        Promise.resolve().then(i.bind(i, 54633)),
        Promise.resolve().then(i.bind(i, 80042)),
        Promise.resolve().then(i.bind(i, 32764)),
        Promise.resolve().then(i.bind(i, 76300)),
        Promise.resolve().then(i.bind(i, 53085)),
        Promise.resolve().then(i.bind(i, 64240)),
        Promise.resolve().then(i.bind(i, 24560)),
        Promise.resolve().then(i.bind(i, 35888)),
        Promise.resolve().then(i.bind(i, 47701)),
        Promise.resolve().then(i.bind(i, 44094)),
        Promise.resolve().then(i.bind(i, 45224)),
        Promise.resolve().then(i.bind(i, 47175)),
        Promise.resolve().then(i.bind(i, 78947)),
        Promise.resolve().then(i.bind(i, 26641)),
        Promise.resolve().then(i.bind(i, 46291)),
        Promise.resolve().then(i.bind(i, 3724)),
        Promise.resolve().then(i.bind(i, 41407)),
        Promise.resolve().then(i.bind(i, 15152)),
        Promise.resolve().then(i.bind(i, 2754)),
        Promise.resolve().then(i.bind(i, 58415)),
        Promise.resolve().then(i.bind(i, 35732)),
        Promise.resolve().then(i.t.bind(i, 30027, 23)),
        Promise.resolve().then(i.t.bind(i, 76236, 23));
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [7255, 507, 5602, 5148, 1860, 2086, 7358], () => s(35609)),
      (_N_E = e.O());
  },
]);
