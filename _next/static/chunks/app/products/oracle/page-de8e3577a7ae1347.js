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
    (e._sentryDebugIds[s] = "1675cff8-7ca4-42f4-9a33-656ac1e9b37f"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-1675cff8-7ca4-42f4-9a33-656ac1e9b37f"));
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
  [7858],
  {
    45277: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { Hero: () => d });
      var a = t(9598),
        l = t(11950),
        i = t(97255),
        r = t(45602);
      let n = (e) => (e - 0.5) * 2;
      function d() {
        let e = (0, l.useRef)(null),
          [s, t] = (0, l.useState)(!1),
          [d, x] = (0, l.useState)({ x: 0, y: 0, width: 0, height: 0 }),
          [o, c] = (0, l.useState)({ x: 0, y: 0 }),
          [m, h] = (0, l.useState)({ x: 0, y: 0 });
        return (
          (0, l.useEffect)(() => {
            let s = e.current;
            if (!s) return;
            let { x: t, y: a, width: l, height: i } = s.getBoundingClientRect();
            x({ x: t, y: a, width: l, height: i });
          }, []),
          (0, a.jsx)("section", {
            id: "home",
            className:
              "px-4 pt-16 pb-24 lg:px-20 lg:py-20 bg-gray-100 overflow-hidden md:h-[950px]",
            children: (0, a.jsxs)("div", {
              className:
                "container-max container-tablet flex flex-col xl:flex-row gap-8 items-center",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col basis-1/2 grow xl:max-w-[578px]",
                  children: [
                    (0, a.jsxs)("h4", {
                      className:
                        "flex items-center text-text-xl font-black text-primary-500 gap-2 mb-4 md:mb-2",
                      children: [(0, a.jsx)(r.dE, {}), " Oracle"],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-4 xl:gap-8",
                      children: [
                        (0, a.jsx)("h1", {
                          className:
                            "xl:text-display-lg font-black text-gray-900 text-display-md md:text-display-sm",
                          children:
                            "The Authoritative Oracle for Decentralized Identity",
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "xl:text-text-lg text-gray-600 text-text-md xl:max-w-[480px]",
                          children:
                            "T3 3's Oracle encrypts, atomizes, and decentrally stores user data, creating a self-sovereign and universal identity record. Our zero-knowledge platform allows applications to accept decentralized identities, query customer data, and issue verifiable credentials, all while maintaining comprehensive user privacy. Securely stored user profiles serve as a single source of truth for publicly anonymous digital identities and credentials, powering a safer and more interoperable internet.",
                        }),
                        (0, a.jsx)(r.$n, {
                          className: "mt-4 xl:mt-0",
                          size: "xl",
                          href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xf60899b5d7239d0868520d9b6fec14976a37795b",
                          children: "Chart",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "hidden md:flex justify-center md:w-[670px] relative md:mt-[-70px]",
                  children: [
                    (0, a.jsx)(i.default, {
                      priority: !0,
                      src: "/images/products/oracle/hero.png",
                      width: 670,
                      height: 670,
                      alt: "Oracle Hero Image",
                      className: "w-full h-auto relative",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "absolute md:w-[50.5%] h-fit top-[34.5%] left-[24.65%]",
                      style: { perspective: 1e3 },
                      onMouseMove: (e) => {
                        t(!0);
                        let s = Math.max(0, e.clientX - d.x) / d.width,
                          a = Math.max(0, e.clientY - d.y) / d.height;
                        c({ x: -(15 * n(a)), y: 10 * n(s) }),
                          h({ x: -(80 * n(a)), y: -(160 * n(s)) });
                      },
                      onMouseOut: () => t(!1),
                      children: [
                        (0, a.jsx)(i.default, {
                          ref: e,
                          src: "/images/products/oracle/card.png",
                          width: 342,
                          height: 206,
                          alt: "Oracle Hero Image",
                          className: "w-full h-auto",
                          style: s
                            ? {
                                willChange: "transform",
                                transformStyle: "preserve-3d",
                                transform:
                                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX("
                                    .concat(o.x, "deg) rotateY(")
                                    .concat(
                                      o.y,
                                      "deg) rotateZ(0deg) skew(0deg, 0deg)"
                                    ),
                              }
                            : {},
                        }),
                        (0, a.jsx)("div", {
                          className: "aspect-square",
                          style: {
                            width: "30%",
                            opacity: 0.6,
                            filter: "blur(40px)",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            translate: "-50% -50%",
                            willChange: "transform",
                            transform: "translate3d("
                              .concat(s ? m.y : 0, "%, ")
                              .concat(
                                s ? m.x : 0,
                                "%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                              ),
                            transformStyle: "preserve-3d",
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "md:hidden",
                  children: (0, a.jsx)(i.default, {
                    priority: !0,
                    src: "/images/products/oracle/hero-mobile.png",
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
    47424: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 80836)),
        Promise.resolve().then(t.bind(t, 45277)),
        Promise.resolve().then(t.bind(t, 70549)),
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
    56550: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => a });
      let a = (0, t(73710).A)("ArrowDown", [
        ["path", { d: "M12 5v14", key: "s699le" }],
        ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
      ]);
    },
    70549: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { UseCases: () => r });
      var a = t(9598),
        l = t(97255),
        i = t(45602);
      function r() {
        return (0, a.jsx)("section", {
          className: "bg-gray-50 py-16 lg:py-24",
          id: "use-cases",
          "data-section": "use-cases",
          children: (0, a.jsxs)("div", {
            className: "container-max gap-12 lg:gap-16 flex flex-col",
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center gap-16 px-4 md:px-15 lg:px-20",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, a.jsx)("h2", {
                        className:
                          "text-display-xs lg:text-display-md text-gray-900 font-black",
                        children: "Oracle Use Cases",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-text-lg lg:text-text-xl text-gray-600",
                        children:
                          "Terminal 3's Oracle is able to power the identity layer for any digital application, facilitating sign up and data storage, and enabling privacy-preserving use-access to customer information for targeting, analysis, segmentation, and communications.",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "hidden lg:block shrink-0",
                    children: (0, a.jsx)(i.$n, {
                      size: "xl",
                      href: "https://www.dextools.io/app/en/ether/pair-explorer/0xf60899b5d7239d0868520d9b6fec14976a37795b",
                      children: "Chart",
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(i.FN, {
                className: "flex xl:gap-12 lg:gap-4",
                withControl: !0,
                slideClassName: "basis-1/3",
                children: [
                  (0, a.jsx)("figure", {
                    className: "lg:pl-0 min-w-[327px] snap-start group",
                    id: "item-1",
                    children: (0, a.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, a.jsx)(l.default, {
                            src: "/images/products/oracle/usecase-1.png",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "px-4 min-h-[220px] lg:min-h-[202px] pb-4",
                          children: [
                            (0, a.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Plug-and-play Enterprise SSO",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Terminal 3's Single Sign-On (SSO) feature offers enterprises a seamless way to implement secure account creation and user authentication through the OpenID Connect protocol. White-labeled registration and decentralized data storage enables users to easily onboard a new application or platform with confidence that their personal data will remain secure and private.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("figure", {
                    className: "lg:pl-0 min-w-[327px] snap-start group",
                    id: "item-2",
                    children: (0, a.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, a.jsx)(l.default, {
                            src: "/images/products/oracle/usecase-2.png",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "px-4 min-h-[220px] lg:min-h-[202px] pb-4",
                          children: [
                            (0, a.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Audience Analytics",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Businesses can easily configure audience segments using Terminal 3's enterprise dashboard. With diverse user profiles, including demographic data like age, income, and location, teams can create targeted marketing segments while ensuring the privacy of identifiable information.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("figure", {
                    className: "lg:pl-0 min-w-[327px] snap-start group",
                    id: "item-3",
                    children: (0, a.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, a.jsx)(l.default, {
                            src: "/images/products/oracle/usecase-3.png",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "px-4 min-h-[220px] lg:min-h-[202px] pb-4",
                          children: [
                            (0, a.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Email Targeting",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Terminal 3 offers a privacy-preserving email system for enterprises to send personalized campaigns by audience segments, ensuring high deliverability, CAN-SPAM compliance, and comprehensive analytics, all while safeguarding user privacy and data security.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "px-4 md:px-15 lg:hidden",
                children: (0, a.jsx)(i.$n, {
                  size: "xl",
                  className: "w-full",
                  href: "https://www.dextools.io/app/en/ether/pair-explorer/0xf60899b5d7239d0868520d9b6fec14976a37795b",
                  children: "Chart",
                }),
              }),
            ],
          }),
        });
      }
    },
    80836: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { Features: () => n });
      var a = t(9598),
        l = t(97255),
        i = t(56550),
        r = t(45602);
      function n() {
        return (0, a.jsx)("section", {
          className: "overflow-x-hidden bg-gray-100 xl:py-24 xl:px-20",
          id: "features",
          "data-section": "features",
          children: (0, a.jsxs)("div", {
            className: "container-max container-tablet flex flex-col xl:gap-6",
            children: [
              (0, a.jsxs)("div", {
                className: "py-16 px-4 lg:px-20 xl:py-0 xl:px-0",
                children: [
                  (0, a.jsx)("h2", {
                    className:
                      "mb-6 xl:mb-12 text-display-xs xl:text-display-md text-gray-900 font-black",
                    children: "Oracle Features",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col xl:flex-row gap-6",
                    children: [
                      (0, a.jsxs)("a", {
                        className:
                          "pl-2 pr-4 xl:p-6 py-4 bg-primary-600 rounded-3xl flex xl:flex-col gap-2 text-left xl:basis-1/3 h-[176px] xl:h-auto",
                        href: "#enrich",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "p-[7px] w-[40px] xl:w-[56px] xl:p-[14px] text-base-white",
                            children: (0, a.jsx)(r._R, {
                              className: "size-[26px] xl:size-[36px]",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-2 xl:gap-4 flex-1",
                            children: [
                              (0, a.jsx)("h4", {
                                className:
                                  "text-text-md xl:text-text-xl font-black text-base-white",
                                children: "Enrich, standardize, & encrypt data",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-text-xs xl:text-text-md text-base-white flex-1 xl:mb-0",
                                children:
                                  "User data is always encrypted client-side before transmission to the Oracle. User profiles are then enriched and standardized to empower interoperability across platforms and applications.",
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "flex text-text-sm xl:text-text-md font-bold text-base-white gap-2 xl:mt-4",
                                children: [
                                  "Learn more ",
                                  (0, a.jsx)(i.A, {
                                    className: "size-5 xl:size-6",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("a", {
                        className:
                          "pl-2 pr-4 xl:p-6 py-4 bg-primary-800 rounded-3xl flex xl:flex-col gap-2 text-left xl:basis-1/3 h-[176px] xl:h-auto",
                        href: "#atomize",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "p-[7px] w-[40px] xl:w-[56px] xl:p-[14px] text-base-white",
                            children: (0, a.jsx)(r.Oy, {
                              className: "size-[26px] xl:size-[36px]",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-2 xl:gap-4 flex-1",
                            children: [
                              (0, a.jsx)("h4", {
                                className:
                                  "text-text-md xl:text-text-xl font-black text-base-white",
                                children: "Atomize & decentrally store data",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-text-xs xl:text-text-md text-base-white flex-1 xl:mb-0",
                                children:
                                  "Encrypted data objects are atomized and stored across decentralized storage networks, ensuring self-sovereignty and world-class security.",
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "flex text-text-sm xl:text-text-md font-bold text-base-white gap-2 xl:mt-4",
                                children: [
                                  "Learn more ",
                                  (0, a.jsx)(i.A, {
                                    className: "size-5 xl:size-6",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("a", {
                        className:
                          "pl-2 pr-4 xl:p-6 py-4 bg-primary-900 rounded-3xl flex xl:flex-col gap-2 text-left xl:basis-1/3 h-[176px] xl:h-auto",
                        href: "#privacy-preserving",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "p-[7px] w-[40px] xl:w-[56px] xl:p-[14px] text-base-white",
                            children: (0, a.jsx)(r.fS, {
                              className: "size-[26px] xl:size-[36px]",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-2 xl:gap-4 flex-1",
                            children: [
                              (0, a.jsx)("h4", {
                                className:
                                  "text-text-md xl:text-text-xl font-black text-base-white",
                                children:
                                  "Privacy-preserving data access & applications",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-text-xs xl:text-text-md text-base-white flex-1 xl:mb-0",
                                children:
                                  "Access to user data is granted via zero-knowledge applications and APIs, enabling data use without revealing private information.",
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "flex text-text-sm xl:text-text-md font-bold text-base-white gap-2 xl:mt-4",
                                children: [
                                  "Learn more ",
                                  (0, a.jsx)(i.A, {
                                    className: "size-5 xl:size-6",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "py-16 px-4 lg:px-20 xl:px-0 xl:py-12 flex flex-col xl:flex-row xl:gap-18 xl:gap-24 xl:items-center gap-6",
                id: "enrich",
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
                                  "rounded-full bg-primary-600 flex items-center w-fit p-[10px] text-gray-25",
                                children: (0, a.jsx)(r._R, {}),
                              }),
                              (0, a.jsx)("h4", {
                                className:
                                  "text-text-md font-bold text-primary-700",
                                children: "Enrich, standardize, & encrypt",
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "xl:hidden my-4 md:my-6",
                            children: (0, a.jsx)(l.default, {
                              src: "/images/products/oracle/feature-1.png",
                              alt: "multiple app icons all pointing to T3 VC card",
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
                                  "text-display-xs font-black text-gray-900",
                                children:
                                  "Secure and optimized identity infrastructure",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-text-md text-gray-600",
                                children:
                                  "Multiple data sources combine to form a universal record of a user, which can then be expressed selectively and privately across all digital platforms and applications.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "py-6",
                        children: (0, a.jsxs)(r.nD, {
                          defaultIndex: 0,
                          children: [
                            (0, a.jsxs)(r.As, {
                              children: [
                                (0, a.jsx)(r.u, {
                                  children: (0, a.jsx)("h4", {
                                    className:
                                      "text-text-lg text-left font-bold text-gray-900",
                                    children:
                                      "Data Enrichment and Standardization",
                                  }),
                                }),
                                (0, a.jsx)(r.ub, {
                                  className: "flex flex-col gap-4",
                                  children: (0, a.jsx)("p", {
                                    className: "text-text-sm text-gray-600",
                                    children:
                                      "Encrypted user data is enriched with additional on- and off-chain data points, standardized for interoperability across digital platforms, and optimized for performance and usability.",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)(r.As, {
                              children: [
                                (0, a.jsx)(r.u, {
                                  children: (0, a.jsx)("h4", {
                                    className:
                                      "text-text-lg font-bold text-gray-900",
                                    children: "Data Encryption",
                                  }),
                                }),
                                (0, a.jsx)(r.ub, {
                                  className: "flex flex-col gap-4",
                                  children: (0, a.jsx)("p", {
                                    className: "text-text-sm text-gray-600",
                                    children:
                                      "User data is secured using symmetric and asymmetric key encryption that prevents data tampering, and stored across nodes in a decentralized network ensuring ultimate data security.",
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
                    className: "xl:basis-1/2 hidden xl:block",
                    children: (0, a.jsx)(l.default, {
                      src: "/images/products/oracle/feature-1.png",
                      alt: "multiple app icons all pointing to T3 VC card",
                      width: 640,
                      height: 640,
                      className: "w-full h-auto rounded-3xl",
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "py-16 px-4 lg:px-20 xl:px-0 xl:py-12 flex flex-col xl:flex-row xl:gap-18 xl:gap-24 xl:items-center gap-6",
                id: "atomize",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "xl:basis-1/2 order-2 xl:order-1 hidden xl:block",
                    children: (0, a.jsx)(l.default, {
                      src: "/images/products/oracle/feature-2.png",
                      alt: "multiple block chains pointing to a T3 VC card",
                      width: 640,
                      height: 640,
                      className: "w-full h-auto rounded-3xl",
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
                                  "rounded-full bg-primary-800 flex items-center w-fit p-[10px] text-gray-25",
                                children: (0, a.jsx)(r.Oy, {}),
                              }),
                              (0, a.jsx)("h4", {
                                className:
                                  "text-text-md font-bold text-primary-700",
                                children: "Atomize & decentrally store",
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "xl:hidden my-4 md:my-6",
                            children: (0, a.jsx)(l.default, {
                              src: "/images/products/oracle/feature-2.png",
                              alt: "multiple block chains pointing to a T3 VC card",
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
                                  "text-display-xs font-black text-gray-900",
                                children:
                                  "Decentralized Data Storage for Protection and User Control",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-text-md text-gray-600",
                                children:
                                  "Securing user data with client-side encryption and decentralized storage ensures tamper-proof and self-sovereign ownership, while blockchain protocols guarantee accessibility and resilience.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "py-6",
                        children: (0, a.jsx)(r.nD, {
                          defaultIndex: 0,
                          children: (0, a.jsxs)(r.As, {
                            children: [
                              (0, a.jsx)(r.u, {
                                children: (0, a.jsx)("h4", {
                                  className:
                                    "text-text-lg text-left font-bold text-gray-900",
                                  children:
                                    "Atomization and Decentralized Data Storage",
                                }),
                              }),
                              (0, a.jsxs)(r.ub, {
                                className: "flex flex-col gap-4",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "text-text-sm text-gray-600",
                                    children:
                                      "Encrypted user data objects are broken into numerous pieces which guarantees enhanced security (no single server can access all data) and enables faster retrieval and transaction speeds.",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-text-sm text-gray-600",
                                    children:
                                      "Terminal 3 only stores the content ID of atomized user data in a dedicated reference database, while all PII is secured off-chain. Access to data is granted only by the user data, via a decentralized key-share network which guarantees user privacy and sovereignty.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "py-16 px-4 lg:px-20 xl:px-0 xl:py-12 flex flex-col xl:flex-row xl:gap-18 xl:gap-24 xl:items-center gap-6",
                id: "privacy-preserving",
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
                                  "rounded-full bg-primary-900 flex items-center w-fit p-[10px] text-gray-25",
                                children: (0, a.jsx)(r.fS, {}),
                              }),
                              (0, a.jsx)("h4", {
                                className:
                                  "text-text-md font-bold text-primary-700",
                                children:
                                  "Privacy-preserving data access & applications",
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "xl:hidden my-4 md:my-6",
                            children: (0, a.jsx)(l.default, {
                              src: "/images/products/oracle/feature-3.png",
                              alt: "a user flow leading to zk database",
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
                                  "text-display-xs font-black text-gray-900",
                                children:
                                  "Ensuring Data Integrity and Scalable Processing",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-text-md text-gray-600",
                                children:
                                  "Utilizing zero-knowledge cryptography and universally verifiable proofs, applications can confidently access user information and guarantee data integrity while safeguarding user privacy.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "py-6",
                        children: (0, a.jsxs)(r.nD, {
                          defaultIndex: 0,
                          children: [
                            (0, a.jsxs)(r.As, {
                              children: [
                                (0, a.jsx)(r.u, {
                                  children: (0, a.jsx)("h4", {
                                    className:
                                      "text-text-lg font-bold text-gray-900",
                                    children: "Zero-knowledge Proofs",
                                  }),
                                }),
                                (0, a.jsx)(r.ub, {
                                  className: "flex flex-col gap-4",
                                  children: (0, a.jsx)("p", {
                                    className: "text-text-sm text-gray-600",
                                    children:
                                      "Claims and query-returns about a user are delivered with a zk-proof, which enables data to remain fully private yet verifiable. Underlying identity and private information is never revealed.",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)(r.As, {
                              children: [
                                (0, a.jsx)(r.u, {
                                  children: (0, a.jsx)("h4", {
                                    className:
                                      "text-text-lg font-bold text-gray-900",
                                    children: "Query Engine",
                                  }),
                                }),
                                (0, a.jsx)(r.ub, {
                                  className: "flex flex-col gap-4",
                                  children: (0, a.jsx)("p", {
                                    className: "text-text-sm text-gray-600",
                                    children:
                                      "Terminal 3's query engine is designed to reduce computational overhead and enable performant data use: (1) Past query-returns are encrypted and cached to reduce new computations, and (2) Smart Verifiable Credentials are issued to enable data use without incremental proof generation.",
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
                    className: "xl:basis-1/2 hidden xl:block",
                    children: (0, a.jsx)(l.default, {
                      src: "/images/products/oracle/feature-3.png",
                      alt: "a user flow leading to zk database",
                      width: 640,
                      height: 640,
                      className: "w-full h-auto rounded-3xl",
                    }),
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
    var s = (s) => e((e.s = s));
    e.O(0, [7255, 507, 5602, 5148, 1860, 2086, 7358], () => s(47424)),
      (_N_E = e.O());
  },
]);
