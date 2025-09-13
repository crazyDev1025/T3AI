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
    (e._sentryDebugIds[s] = "cd6c40a7-c070-495c-93ed-7ae28cf867af"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-cd6c40a7-c070-495c-93ed-7ae28cf867af"));
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
  [6390],
  {
    34784: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { Features: () => l });
      var i = t(9598),
        r = t(97255),
        n = t(45602);
      function l() {
        return (0, i.jsx)("section", {
          className: "py-16 md:py-24 bg-gray-100",
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
                    children: "Designed for NFT platforms",
                  }),
                  (0, i.jsx)("p", {
                    className: "text-text-md lg:text-text-lg text-gray-600",
                    children:
                      "Secure user PII with fraud-resistant and self-sovereign decentralized identity infrastructure and optimize project success with informed community insights.",
                  }),
                ],
              }),
              (0, i.jsxs)(n.FN, {
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
                            src: "/images/solutions/nft/usecase-1.png",
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
                              children: "Interoperable across Projects",
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Establish clear and reliable ownership verification mechanisms to maintain trust and functionality in the decentralized space. seamlessly verify and transfer identity across different projects.",
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
                            src: "/images/solutions/nft/usecase-2.png",
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
                              children: "Resource & Cost Savings",
                            }),
                            (0, i.jsx)("p", {
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
                  (0, i.jsx)("figure", {
                    className: "px-4 lg:px-0 min-w-[327px] snap-start group",
                    id: "item-3",
                    children: (0, i.jsxs)("div", {
                      className: " flex flex-col gap-6",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, i.jsx)(r.default, {
                            src: "/images/solutions/nft/usecase-3.png",
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
                              children: "Privacy & Trust",
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Protect against hacks, scams, and fraudulent activities that could compromise user data and the authenticity of digital assets.",
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
    38824: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 34784)),
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
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [7255, 507, 5602, 5148, 1860, 2086, 7358], () => s(38824)),
      (_N_E = e.O());
  },
]);
