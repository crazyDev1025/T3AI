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
    (e._sentryDebugIds[t] = "a5b5ad61-86f9-42ee-981f-4d37d89d0055"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-a5b5ad61-86f9-42ee-981f-4d37d89d0055"));
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
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [190],
  {
    9661: (e, t, a) => {
      a.d(t, { AD: () => l, Uq: () => r, eH: () => s, iZ: () => i });
      let s = 1580,
        r = 800,
        l = 880,
        i = [
          {
            alt: "open-campus",
            src: "/images/homepage/trusted-4.svg",
            width: 170,
            height: 29.7,
          },
          {
            alt: "animoca",
            src: "/images/homepage/trusted-5.svg",
            width: 137,
            height: 80,
          },
          {
            alt: "humanity",
            src: "/images/homepage/trusted-6.svg",
            width: 170,
            height: 39.1,
          },
          {
            alt: "w3h",
            src: "/images/homepage/trusted-7.svg",
            width: 160,
            height: 91.4,
          },
          {
            alt: "ida",
            src: "/images/homepage/trusted-8.svg",
            width: 160,
            height: 33.9,
          },
          {
            alt: "help-bnk",
            src: "/images/homepage/trusted-1.svg",
            width: 153,
            height: 80,
          },
          {
            alt: "berabucks",
            src: "/images/homepage/trusted-2.svg",
            width: 170,
            height: 51.9,
          },
          {
            alt: "hedera",
            src: "/images/homepage/trusted-3.svg",
            width: 170,
            height: 53.25,
          },
          {
            alt: "varmeta",
            src: "/images/homepage/trusted-9.svg",
            width: 170,
            height: 24,
          },
          {
            alt: "soneium",
            src: "/images/homepage/trusted-10.svg",
            width: 149,
            height: 32,
          },
          {
            alt: "monad",
            src: "/images/homepage/trusted-11.svg",
            width: 170,
            height: 32,
          },
        ];
    },
    12251: (e, t, a) => {
      a.d(t, { DP: () => n, hD: () => o });
      var s = a(97892);
      function r(e) {
        this.message = e;
      }
      function l(e) {
        this.message = e;
      }
      a(71721),
        a(54747),
        (r.prototype = Error()),
        (r.prototype.name = "InvalidCharacterError"),
        window.atob && window.atob.bind(window),
        (l.prototype = Error()),
        (l.prototype.name = "InvalidTokenError");
      var i = (e) => {
          let t = s.tC;
          return (
            "string" == typeof e && (t = e),
            "object" == typeof e && "code" in e && (t = e.code),
            "object" == typeof e &&
              "errors" in e &&
              Array.isArray(e.errors) &&
              (t = e.errors.map((e) => e.code).join("\n")),
            "object" == typeof e &&
              Array.isArray(e) &&
              (t = e.map((e) => e.code).join("\n")),
            t
          );
        },
        n = (e) => {
          let t = s.Rb;
          return (
            "string" == typeof e && (t = e),
            "object" == typeof e && "message" in e && (t = e.message),
            "object" == typeof e &&
              "errors" in e &&
              Array.isArray(e.errors) &&
              (t = e.errors.map((e) => e.message).join("\n")),
            "object" == typeof e &&
              Array.isArray(e) &&
              (t = e.map((e) => e.message).join("\n")),
            t
          );
        },
        o = class extends Error {
          constructor(e, t, a, s) {
            let r = i(e);
            super(n(e)),
              (this.name = "ApiError - ".concat(a)),
              (this.status = t),
              (this.code = r),
              (this.headers = s),
              Object.setPrototypeOf(this, new.target.prototype);
            try {
              Error.captureStackTrace && Error.captureStackTrace(this);
            } catch (e) {
              console.error(e);
            }
          }
        };
    },
    14017: (e, t, a) => {
      a.d(t, { HR: () => c, Li: () => d, NM: () => o });
      var s = a(60118),
        r = a(3482),
        l = a(37811);
      let i = r.z
          .string()
          .refine((e) => "true" === e || "false" === e)
          .transform((e) => "true" === e),
        n = (0, s.w)({
          server: {
            SENTRY_DSN: r.z.string(),
            SENTRY_ENABLED: i,
            SENTRY_ENVIRONMENT: r.z.string(),
            T3_WEBSITE_GHOST_API_KEY: r.z.string(),
            T3_WEBSITE_GHOST_ADMIN_KEY: r.z.string(),
            T3_WEBSITE_GHOST_API_URL: r.z.string().url(),
          },
          client: {
            NEXT_PUBLIC_T3_WEBSITE_BASE_API_URL: r.z.string().url(),
            NEXT_PUBLIC_SENTRY_ENABLED: i,
            NEXT_PUBLIC_T3_WEBSITE_ANALYTICS_ID: r.z.string().min(1),
          },
          runtimeEnv: {
            NEXT_PUBLIC_T3_WEBSITE_BASE_API_URL: "https://api.terminal3.io/api",
            NEXT_PUBLIC_T3_WEBSITE_ANALYTICS_ID: "G-DVBSG810QF",
            NEXT_PUBLIC_SENTRY_ENABLED: "true",
            SENTRY_DSN: l.env.SENTRY_DSN,
            SENTRY_ENABLED: l.env.SENTRY_ENABLED,
            SENTRY_ENVIRONMENT: l.env.SENTRY_ENVIRONMENT,
            T3_WEBSITE_GHOST_API_KEY: l.env.T3_WEBSITE_GHOST_API_KEY,
            T3_WEBSITE_GHOST_ADMIN_KEY: l.env.T3_WEBSITE_GHOST_ADMIN_KEY,
            T3_WEBSITE_GHOST_API_URL: l.env.T3_WEBSITE_GHOST_API_URL,
          },
        }),
        o = "https://api.terminal3.io/api",
        d = n.NEXT_PUBLIC_SENTRY_ENABLED,
        c = n.NEXT_PUBLIC_T3_WEBSITE_ANALYTICS_ID;
    },
    15015: (e, t, a) => {
      a.d(t, { DP: () => s.DP });
      var s = a(12251);
      a(97892), a(71721);
    },
    17101: (e, t, a) => {
      a.r(t), a.d(t, { Features: () => g });
      var s = a(9598),
        r = a(11950),
        l = a(82380),
        i = a(1231),
        n = a(53371),
        o = a(55337),
        d = a(47275),
        c = a(76859),
        x = a(9661);
      let m = [
          {
            icon: "/images/homepage/feature-1.svg",
            heading: "Privacy without compromise",
            text: "T3 Oracle is secured by quantum-resistant encryption and zero-knowledge cryptography, enabling user data and identity to be freely composable across platforms and applications without compromising user privacy.",
          },
          {
            icon: "/images/homepage/feature-2.svg",
            heading: "Trusted by users & institutions",
            text: "Protect your user with Verifiable Private Identity that never reveals their personal information, and protect your business with compliant and secure data storage that meets global Privacy and AML regulations.",
          },
          {
            icon: "/images/homepage/feature-3.svg",
            heading: "Unlock the value of private data",
            text: "T3 AI’s zero-knowledge engine unlocks the value of private data for enterprises; manage, analyze, segment, and communicate with your users without handling or revealing their securely stored information.",
          },
        ],
        p = [0, 13, 39, 78],
        h = (e, t) => {
          let a,
            s = 1 === e.playDirection,
            r = 0 === e.currentFrame ? p[t + 1] - p[t] : e.currentFrame,
            l = 2;
          s
            ? ((a = [p[t - 1], p[t]]), (l = 2 === t || 3 === t ? 5 : 2))
            : ((l = 2 === t || 1 === t ? 5 : 2), (a = [p[t] + r, p[t]])),
            e.setSpeed(l),
            e.playSegments(a, !0);
        },
        g = () => {
          let [e, t] = (0, r.useState)(1),
            [a, p] = (0, r.useState)(1),
            [g, u] = (0, r.useState)(0),
            [f, b] = (0, r.useState)(1),
            [y, v] = (0, r.useState)(null),
            w = (0, c.Ub)(d.w9),
            j = (0, c.Ub)(d.Ug),
            N = (0, r.useRef)(null),
            { scrollY: E } = (0, n.L)({ target: N }),
            _ = w ? x.AD : j ? x.Uq : x.eH;
          return (
            (0, r.useEffect)(() => {
              y && (y.goToAndStop(y.totalFrames, !0), y.pause());
            }, [y]),
            (0, r.useEffect)(() => {
              y &&
                (y.pause(),
                f >= a ? y.setDirection(1) : y.setDirection(-1),
                p(f),
                h(y, f));
            }, [y, f]),
            (0, o.L)(E, "change", (a) => {
              let s = window.innerHeight,
                r = _ - a,
                l = Math.min(1, Math.max(0, (a - _) / (w ? 2400 : 3 * s))),
                i = +(r < s / 1.5);
              (i =
                0 === l
                  ? +(r < s / (w ? 3 : 2))
                  : l <= 0.3333
                  ? 1
                  : l <= 0.6666
                  ? 2
                  : 3) !== e && t(i);
              let n = (l % 0.3333) * 3;
              n >= 0.75 ? b(Math.min(3, i + 1)) : b(i), u(n);
            }),
            (0, s.jsx)("section", {
              className:
                "relative text-base-white h-[calc(300vh_+_144px)] md:h-[300vh]",
              children: (0, s.jsx)("div", {
                ref: N,
                className:
                  "container-max h-[calc(300vh_+_144px)] md:h-[300vh] sticky top-0",
                children: (0, s.jsx)("div", {
                  className: "container-max h-screen sticky top-12 lg:top-0",
                  children: (0, s.jsxs)("div", {
                    className:
                      "h-full flex flex-col-reverse xl:flex-row xl:items-center md:justify-center md:gap-12 justify-between",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "w-screen xl:w-[480px] z-[29] xl:z-10 transition-opacity bg-gray-900",
                        children: (0, s.jsxs)("div", {
                          className: "w-full relative",
                          style: {
                            height: w ? "calc(100vh - 310px)" : j ? 528 : 480,
                          },
                          children: [
                            (0, s.jsx)("div", {
                              className: (0, i.A)(
                                "absolute w-full h-[33px] top-0 bg-gradient-to-b from-transparent to-gray-900",
                                { hidden: !w && !j }
                              ),
                              style: {
                                transform: "translateY(calc(-100% + 1px))",
                              },
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "w-[375px] md:w-[480px] xl:w-[480px] mx-auto",
                              children: (0, s.jsx)(l.ai, {
                                src: "/files/homepage-features.json",
                                loop: !1,
                                keepLastFrame: !0,
                                lottieRef: (e) => {
                                  v(e);
                                },
                                className:
                                  "size-[375px] md:size-[480px] xl:size-[480px]",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "container-tablet w-screen md:w-full md:text-center xl:w-[674px] relative h-[200px]",
                        children: m.map((t, a) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className: (0, i.A)(
                                "absolute inset-x-0 inset-y-0 left-4 xl:left-0 top-16 xl:top-0 opacity-0 pr-4",
                                {
                                  "translate-y-[240%]": e < a + 1,
                                  "-translate-y-[240%]": e > a + 1,
                                  "!opacity-100": 3 === e && 2 === a,
                                }
                              ),
                              style: {
                                ...(e === a && {
                                  transform:
                                    0 === a
                                      ? "translateY(0%)"
                                      : "translateY(".concat(
                                          (1 - g) * 300,
                                          "%)"
                                        ),
                                  opacity:
                                    0 === a ? 1 : Math.max(0, (g - 0.2) * 1.25),
                                }),
                                ...(e === a + 1 &&
                                  2 !== a && {
                                    transform: "translateY(".concat(
                                      -(300 * Math.max(0, g - 0.2)),
                                      "%)"
                                    ),
                                    opacity: 1.5 - 1.5 * g,
                                  }),
                              },
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "text-display-xs xl:text-display-md font-black mb-4 xl:mb-6",
                                  children: t.heading,
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "text-text-md xl:text-display-xs text-primary-200 lg:px-20 xl:px-0",
                                  children: t.text,
                                }),
                              ],
                            },
                            t.heading
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        };
    },
    18922: (e, t, a) => {
      a.d(t, { v: () => r });
      var s = a(38357);
      let r = a(14017).Li
        ? {
            error(e) {
              let t = e;
              e instanceof Error ||
                (t = Error("Non-Error rejection: ".concat(JSON.stringify(e)))),
                s.Cp(t);
            },
          }
        : console;
    },
    21686: (e, t, a) => {
      a.d(t, { g: () => l }), a(96806);
      var s = a(3482),
        r = a(47275);
      let l = s.Ik({
        email: s
          .Yj({
            required_error: "Email is required",
            invalid_type_error: "Email is required",
          })
          .toLowerCase()
          .regex(r.Uo, "Please enter a valid email address"),
      });
    },
    48924: (e, t, a) => {
      a.r(t), a.d(t, { Products: () => p });
      var s = a(9598),
        r = a(11950),
        l = a(97255),
        i = a(1231),
        n = a(77632),
        o = a(11676),
        d = a(45602);
      let c = [
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                className: "relative w-[24px] h-[24px] xl:w-[26px] xl:h-[30px]",
                children: (0, s.jsx)(l.default, {
                  src: "/images/homepage/product-tab-1.svg",
                  alt: "tab-1",
                  fill: !0,
                }),
              }),
              "Oracle",
            ],
          }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                className: "relative w-[24px] h-[24px] xl:w-[26px] xl:h-[30px]",
                children: (0, s.jsx)(l.default, {
                  src: "/images/homepage/product-tab-2.svg",
                  alt: "tab-2",
                  fill: !0,
                }),
              }),
              "T3 Identity",
            ],
          }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                className: "relative w-[24px] h-[24px] xl:w-[26px] xl:h-[30px]",
                children: (0, s.jsx)(l.default, {
                  src: "/images/homepage/product-tab-3.svg",
                  alt: "tab-3",
                  fill: !0,
                }),
              }),
              "T3 Verify",
            ],
          }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                className: "relative w-[24px] h-[24px] xl:w-[26px] xl:h-[30px]",
                children: (0, s.jsx)(l.default, {
                  src: "/images/homepage/product-tab-4.svg",
                  alt: "tab-4",
                  fill: !0,
                }),
              }),
              "Agent Auth",
            ],
          }),
        ],
        x = [
          {
            name: "Oracle",
            heading: "The Authoritative Oracle for Decentralized Identity",
            text: "T3 AI's Oracle encrypts, atomizes, and decentrally stores user data, creating a self-sovereign and universal identity record.",
            href: "/products/oracle",
          },
          {
            name: "T3 Identity",
            heading:
              "Decentralized Identities & Secure Data Storage for Any Business",
            text: "T3 AI's full-stack decentralized identity (DID) solution allows organisations to manage, segment, analyze, and communicate with users in a privacy-preserving environment via zero-knowledge cryptography.",
            href: "/products/t3-identity",
            imageClassName: "h-[252px]",
          },
          {
            name: "T3 Verify",
            heading: "Enterprise-grade Credentials & KYC for a New Internet",
            text: "T3 AI offers an enterprise-grade Verifiable Credentials solution that allows users to remain 'anonymous' on-chain while meeting KYC/AML requirements to hold and trade regulated assets.",
            href: "/products/t3-verify",
            imageClassName: "h-[214px] xl:h-[240px] h-auto p-6 xl:p-0",
          },
          {
            name: "Agent Auth",
            heading: "Authentication and Authorization for AI Agents",
            text: "Agent Auth is a solution that enables AI agents to authenticate and execute transactions in a controlled manner. It provides centralized policy control, a user-friendly dashboard for managing restrictions, and real-time monitoring of agent activity.",
            href: "/products/ai",
            imageClassName: "h-[214px] xl:h-[240px] h-auto p-6 xl:p-0",
          },
        ],
        m = (e) => {
          let {
            icon: t,
            tab: a,
            heading: r,
            text: c,
            name: x,
            href: m,
            imageClassName: p = "",
          } = e;
          return (0, s.jsxs)("div", {
            className: (0, i.A)(
              "rounded-2xl xl:p-12 xl:items-center transition-all text-base-white flex flex-col xl:flex-row justify-between overflow-hidden relative xl:h-[648px]",
              {
                "bg-[linear-gradient(180deg,#131E33_0%,#386E8A_100%)]": 1 === a,
                "bg-[linear-gradient(180deg,#131E33_0%,#475467_100%)]": 2 === a,
                "bg-[linear-gradient(180deg,#131E33_0%,rgba(19,30,51,0.00)_100%),linear-gradient(79deg,#054F31_0%,#3977A6_100%)]":
                  3 === a,
                "bg-[linear-gradient(180deg,rgba(19,30,51,0.00)_0%,#0E7090_100%)] bg-cover bg-no-repeat":
                  4 === a,
              }
            ),
            children: [
              (0, s.jsxs)("div", {
                className:
                  "flex flex-col gap-4 md:gap-6 p-6 md:py-10 xl:p-0 xl:w-[624px] relative",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "flex items-center justify-center xl:hidden m-auto w-[343px] md:w-[433px] h-full relative",
                    children: (0, s.jsx)(l.default, {
                      src: "/images/homepage/product-content-".concat(
                        a,
                        ".png"
                      ),
                      alt: "tab-content",
                      width: 560,
                      height: 483,
                      className: (0, o.QP)(
                        "w-auto h-[222px] md:h-[240px] xl:h-[320px] relative",
                        p
                      ),
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: (0, i.A)(
                      "hidden text-text-xl font-black transition-all xl:flex items-center gap-2 text-base-white"
                    ),
                    children: t,
                  }),
                  (0, s.jsx)("div", {
                    className: (0, i.A)(
                      "text-text-xl md:text-display-xs xl:text-display-lg font-black",
                      { "text-base-white": 3 === a }
                    ),
                    children: r,
                  }),
                  (0, s.jsx)("div", {
                    className: (0, i.A)(
                      "text-text-sm md:text-text-md min-h-[140px] md:min-h-[96px] xl:text-text-xl xl:mt-2 xl:mb-8",
                      { "text-base-white": 3 === a }
                    ),
                    children: c,
                  }),
                  (0, s.jsxs)(d.$n, {
                    variant: "primary",
                    className: (0, i.A)(
                      "bg-primary-300 hover:bg-primary-400 border-primary-300 hover:border-primary-400"
                    ),
                    href: m,
                    size: "xl",
                    children: [
                      "Learn more about ",
                      x,
                      " ",
                      (0, s.jsx)(n.A, { size: 20 }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "xl:flex items-center justify-center xl:shrink-0 m-auto w-[560px] h-full hidden relative",
                children: (0, s.jsx)(l.default, {
                  src: "/images/homepage/product-content-".concat(a, ".png"),
                  alt: "tab-content",
                  width: 560,
                  height: 483,
                  className: (0, o.QP)(
                    "w-auto h-[222px] md:h-[240px] xl:h-[320px] relative",
                    p
                  ),
                }),
              }),
            ],
          });
        },
        p = () => {
          let [e, t] = (0, r.useState)(1),
            a = x[e - 1];
          return (0, s.jsx)("section", {
            className: "py-12 px-4 xl:py-[100px] lg:px-20 bg-gray-900 relative",
            children: (0, s.jsxs)("div", {
              className: "container-max container-tablet",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col gap-4 justify-between items-center mb-6 xl:mb-14 text-base-white",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "text-display-sm xl:text-display-lg font-bold",
                      children: [
                        "T3 AI's",
                        " ",
                        (0, s.jsx)("span", {
                          className:
                            "bg-gradient-to-r from-[#57A7E0] to-[#CDE7F6] bg-clip-text text-transparent",
                          children: "Products",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "grid grid-cols-2 md:grid-cols-4 xl:h-16 justify-end gap-2.5",
                      children: c.map((a, r) =>
                        (0, s.jsx)(
                          "div",
                          {
                            onClick: () => t(r + 1),
                            className: (0, i.A)(
                              "cursor-pointer rounded-3xl p-2 xl:py-[18px] xl:px-6 text-text-sm xl:text-text-xl font-black transition-all flex items-center gap-2 hover:bg-gray-700 w-fit mx-auto",
                              {
                                "text-gray-900 bg-base-white hover:!bg-base-white":
                                  e === r + 1,
                              }
                            ),
                            children: a,
                          },
                          r
                        )
                      ),
                    }),
                  ],
                }),
                (0, s.jsx)(m, {
                  name: null == a ? void 0 : a.name,
                  icon: c[e - 1],
                  tab: e,
                  heading: null == a ? void 0 : a.heading,
                  text: null == a ? void 0 : a.text,
                  href: null == a ? void 0 : a.href,
                  imageClassName: null == a ? void 0 : a.imageClassName,
                }),
              ],
            }),
          });
        };
    },
    56505: (e, t, a) => {
      a.d(t, {
        $G: () => d,
        $Y: () => o,
        DM: () => n,
        HS: () => l,
        OQ: () => c,
        Rn: () => i,
        h6: () => r,
        jq: () => s,
      });
      let s =
          "Member already exists. Attempting to add member with existing email address",
        r = "Email is required",
        l = "Please enter a valid email address",
        i = "First name is required",
        n = "Last name is required",
        o = "Industry is invalid",
        d = "Please agree to the terms and conditions",
        c = "Message is required";
    },
    73439: (e, t, a) => {
      a.r(t), a.d(t, { CookiesBanner: () => h });
      var s = a(9598),
        r = a(11950),
        l = a(97255),
        i = a(30027),
        n = a.n(i),
        o = a(1231),
        d = a(96838),
        c = a(45602),
        x = a(14017),
        m = a(76859);
      let p = "cookiesAllowed",
        h = () => {
          let { isOpen: e, onClose: t, onOpen: a } = (0, m.j1)(),
            i = () => {
              var e, t;
              if (!(null == (e = window) ? void 0 : e.gtag)) return;
              window.gtag("consent", "update", {
                analytics_storage: "granted",
              });
              let a = document.createElement("script");
              (a.async = !0),
                (a.src = "https://www.googletagmanager.com/gtag/js?id=".concat(
                  x.HR
                ));
              let s = document.getElementsByTagName("script")[0];
              s && (null == (t = s.parentNode) || t.insertBefore(a, s));
            };
          (0, r.useEffect)(() => {
            let e = localStorage.getItem(p);
            null === e && a(), "true" === e && (i(), t());
          }, []);
          let h = (e) => {
            localStorage.setItem(p, String(e)), t(), e && i();
          };
          return e
            ? (0, s.jsxs)("div", {
                className: (0, o.A)(
                  "fixed right-2 lg:right-[80px] bottom-4 lg:bottom-[64px] px-4 py-3 shadow-lg rounded-xl bg-base-white z-10 flex flex-col lg:flex-row gap-3 lg:gap-5 transition-opacity border-[1px] border-gray-100 w-[359px] lg:w-[400px]"
                ),
                children: [
                  (0, s.jsx)("div", {
                    className: "size-10 ml-[-5px] lg:ml-0",
                    children: (0, s.jsx)(l.default, {
                      src: "/images/homepage/cookies.svg",
                      alt: "feature-image",
                      width: 32,
                      height: 32,
                      className: "w-auto",
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "lg:w-[276px] pt-1",
                    children: [
                      (0, s.jsx)("div", {
                        className: "text-text-sm font-bold text-gray-900 mb-1",
                        children:
                          "We use essential cookies to make this website work. You may also allow cookies that provide an enhanced experience.",
                      }),
                      (0, s.jsxs)("div", {
                        className: "text-gray-600 text-text-sm mb-4",
                        children: [
                          "View our",
                          " ",
                          (0, s.jsx)(n(), {
                            href: "/privacy-policy",
                            target: "_blank",
                            className: "underline underline-offset-[3px]",
                            children: (0, s.jsx)("span", {
                              children: "Privacy Policy",
                            }),
                          }),
                          " ",
                          "for more information.",
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "font-bold text-text-sm flex gap-6 pb-1",
                        children: [
                          (0, s.jsx)(c.$n, {
                            onPress: () => h(!0),
                            className: "w-full",
                            size: "sm",
                            children: "Allow",
                          }),
                          (0, s.jsx)(c.$n, {
                            onPress: () => h(!1),
                            variant: "ghost",
                            className: "w-full",
                            size: "sm",
                            children: "Decline",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute top-2 right-1 px-2 pt-1 text-gray-500 cursor-pointer",
                    onClick: t,
                    children: (0, s.jsx)(d.A, { size: 20 }),
                  }),
                ],
              })
            : null;
        };
    },
    74483: (e, t, a) => {
      a.r(t), a.d(t, { Metrics: () => o });
      var s = a(9598),
        r = a(11950),
        l = a(91723),
        i = a(47275),
        n = a(76859);
      let o = () => {
        let e = (0, n.Ub)(i.w9),
          t = (0, r.useRef)(null),
          [a, o] = (0, r.useState)(!1),
          [d, c] = (0, r.useState)(0);
        return (
          (0, r.useEffect)(() => {
            if (!t.current) return;
            let e = () => {
              if (!(t && t.current)) return;
              let e = window.innerHeight,
                { y: a } = t.current.getBoundingClientRect();
              o(a < e / 2);
            };
            return (
              window.addEventListener("scroll", e, { passive: !0 }),
              () => {
                window.removeEventListener("scroll", e);
              }
            );
          }, []),
          (0, n.$$)(() => {
            !(d >= 10) && a && c((e) => ++e);
          }, 50),
          (0, s.jsx)("section", {
            ref: t,
            className: "py-16 px-4 lg:py-24 lg:px-20 relative bg-gray-900",
            children: (0, s.jsxs)("div", {
              className:
                "container-max container-tablet mx-auto flex flex-col lg:flex-row lg:gap-8 justify-between items-center gap-16",
              children: [
                (0, s.jsxs)("div", {
                  className: "lg:w-[557px] text-center lg:text-left",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "text-display-sm lg:text-display-lg font-bold lg:font-black text-base-white mb-5",
                      children: "Scale with Confidence, Secure with Precision",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "text-text-lg lg:text-display-xs text-gray-200",
                      children: [
                        "Unlock decentralized identity and verifiable credentials tailored to your needs.",
                        (0, s.jsx)("br", {}),
                        "We are a global team that supports business needs around the world.",
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "lg:pl-6 text-center lg:text-left lg:border-l-2 border-gray-600",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "text-display-lg md:text-display-2xl font-black bg-gradient-to-r from-[#57A7E0] to-[#CDE7F6] bg- bg-clip-text text-transparent mb-1 flex justify-center md:justify-start",
                      style: { backgroundPositionX: e ? "-20px" : "-60px" },
                      children: [
                        (0, s.jsx)(l.Ay, {
                          height: e ? 46 : 66,
                          width: e ? 30 : 52,
                          color: "transparent",
                          background:
                            "text linear-gradient(to right, #57A7E0, #CDE7F6)",
                          play: !0,
                          perspective: 1e3,
                          numbers: String(d),
                        }),
                        "M+",
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "text-text-lg lg:text-display-sm text-gray-200 font-bold",
                      children: "decentralized profiles",
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    74892: (e, t, a) => {
      a.r(t), a.d(t, { Solutions: () => o });
      var s = a(9598),
        r = a(77632),
        l = a(45602);
      let i = (e) => {
          let { icon: t, title: a, subtitle: r, link: l } = e;
          return (0, s.jsxs)("a", {
            className:
              "p-6 w-[200px] h-[200px] rounded-3xl bg-white relative overflow-hidden",
            href: l,
            children: [
              (0, s.jsxs)("div", {
                className: "flex flex-col h-full",
                children: [
                  (0, s.jsx)("div", {
                    className: "flex-1",
                    children: (0, s.jsx)(t, { size: 64 }),
                  }),
                  (0, s.jsx)("div", {
                    className: "font-black text-text-md text-gray-900",
                    children: a,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "p-6 absolute inset-x-0 inset-y-0 transition-all opacity-0 hover:opacity-100 bg-primary-600 text-white flex flex-col justify-between",
                children: [
                  (0, s.jsx)("div", {
                    className: "font-black text-text-md",
                    children: a,
                  }),
                  (0, s.jsx)("div", { className: "text-sm", children: r }),
                  (0, s.jsx)("div", {
                    className: "text-sm font-bold text-primary-200",
                    children: "Learn more",
                  }),
                ],
              }),
            ],
          });
        },
        n = (e) => {
          let { icon: t, title: a, subtitle: l, link: i } = e;
          return (0, s.jsxs)("a", {
            className: "block py-4 relative overflow-hidden",
            href: i,
            children: [
              (0, s.jsxs)("div", {
                className: "flex items-center gap-3 mb-2",
                children: [
                  (0, s.jsx)(t, { size: 39 }),
                  (0, s.jsx)("div", {
                    className: "font-black text-text-md flex-1",
                    children: a,
                  }),
                  (0, s.jsx)("div", {
                    className: "p-2",
                    children: (0, s.jsx)(r.A, {
                      className: "text-primary-700",
                      size: 20,
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "text-sm text-gray-600",
                children: (0, s.jsx)("div", {
                  className: "w-[280px]",
                  children: l,
                }),
              }),
            ],
          });
        },
        o = () =>
          (0, s.jsx)("section", {
            className: "px-4 py-16 xl:py-[198px] lg:px-20 bg-gray-100 relative",
            children: (0, s.jsxs)("div", {
              className:
                "container-max container-tablet flex flex-col md:flex-col-reverse xl:flex-row xl:gap-12 justify-between items-center",
              children: [
                (0, s.jsx)("div", {
                  className: "hidden md:grid gap-4 md:gap-6 grid-cols-3",
                  children: l.lN.items.map((e) =>
                    (0, s.jsx)(i, { ...e }, e.title)
                  ),
                }),
                (0, s.jsxs)("div", {
                  className: "md:w-full xl:w-[478px]",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "font-black text-gray-900 text-display-sm xl:text-display-lg mb-4 xl:mb-8",
                      children: [
                        "Transform the way you",
                        " ",
                        (0, s.jsx)("span", {
                          className: "text-primary-700",
                          children: "secure user data",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "text-text-md xl:text-display-xs text-gray-600 mb-4 md:mb-6 xl:mb-10",
                      children: [
                        "Over ",
                        (0, s.jsx)("span", {
                          className: "font-bold",
                          children: "10,000,000",
                        }),
                        " users have taken charge of their personal data with T3 AI",
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "md:hidden divide-y-[1px] divide-gray-300 w-full",
                  children: l.lN.items.map((e) =>
                    (0, s.jsx)(n, { ...e }, e.title)
                  ),
                }),
              ],
            }),
          });
    },
    81244: (e, t, a) => {
      a.r(t), a.d(t, { Subscribe: () => u });
      var s = a(9598),
        r = a(11950),
        l = a(78422),
        i = a(31877),
        n = a(97255),
        o = a(50685),
        d = a(1231),
        c = a(32502),
        x = a(77632),
        m = a(45602),
        p = a(56505),
        h = a(15015),
        g = a(21686);
      let u = () => {
        let [e, t] = (0, r.useState)(!1),
          a = (0, r.useRef)(null),
          {
            register: u,
            handleSubmit: f,
            formState: {
              errors: b,
              isValid: y,
              isSubmitted: v,
              isSubmitting: w,
            },
          } = (0, i.mN)({ resolver: (0, o.u)(g.g) }),
          j = f(async (e) => {
            if (!a.current) return;
            let s = await a.current.executeAsync();
            if (!s) return;
            let r = await fetch("/newsletter", {
              method: "POST",
              body: JSON.stringify({ ...e, token: s, label: "T3 Website" }),
            });
            if (!r.ok) {
              let e = await r.json();
              (0, h.DP)(e) === p.jq ? t(!0) : console.error(e);
              return;
            }
            t(!0);
          });
        return (0, s.jsxs)("section", {
          className:
            "py-16 px-4 md:py-24 lg:px-20 bg-gray-50 relative overflow-hidden",
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute inset-x-0 inset-y-0 w-full h-full pointer-events-none",
              children: (0, s.jsx)(n.default, {
                className: "size-full object-cover",
                src: "/images/homepage/subscribe-bg.png",
                width: 1920,
                height: 1080,
                alt: "bg",
              }),
            }),
            (0, s.jsxs)("div", {
              className:
                "container-max container-tablet flex flex-col gap-4 justify-between relative",
              children: [
                (0, s.jsx)("h2", {
                  className:
                    "text-gray-900 text-display-sm lg:text-display-md font-black ",
                  children: "Be the first to know",
                }),
                (0, s.jsx)("p", {
                  className:
                    "text-gray-600 text-text-lg lg:text-text-xl max-w-[758px]",
                  children:
                    "Subscribe to the T3 AI newsletter to receive product updates and industry insights in your inbox.",
                }),
                (0, s.jsx)("form", {
                  onSubmit: j,
                  className: "flex flex-col md:flex-row gap-4",
                  children: (0, s.jsxs)("div", {
                    className: "text-gray-600 text-text-sm w-full relative",
                    children: [
                      (0, s.jsx)(m.FO, {
                        placeholder: "Enter your work email",
                        classNames: (0, d.A)(
                          "h-[46px] border-none shadow-none py-6 md:py-8 h-[68px] md:h-[96px] text-sm md:text-xl pr-[68px] md:pr-[208px]",
                          { "bg-primary-50": e }
                        ),
                        register: u,
                        name: "email",
                        error: b.email,
                        readOnly: e,
                      }),
                      (0, s.jsx)(l.A, {
                        ref: a,
                        size: "invisible",
                        sitekey: "6Lc5RIwnAAAAAJ6C7Xqn0E04dnv_keFw0oTrLgSs",
                      }),
                      (0, s.jsxs)(m.$n, {
                        type: "submit",
                        className:
                          "w-[36px] h-[36px] min-h-[36px] md:w-[176px] md:h-[60px] absolute top-4 md:top-[18px] right-4 text-lg p-2",
                        isDisabled: (v && !y) || e,
                        isLoading: w,
                        children: [
                          (0, s.jsx)("span", {
                            className: "hidden md:block",
                            children: e ? "Subscribed" : "Subscribe",
                          }),
                          e ? (0, s.jsx)(c.A, {}) : (0, s.jsx)(x.A, {}),
                        ],
                      }),
                    ],
                  }),
                }),
                e &&
                  (0, s.jsxs)("p", {
                    className:
                      "text-gray-600 text-text-lg lg:text-text-xl max-w-[758px]",
                    children: [
                      "Thanks for subscribing to",
                      " ",
                      (0, s.jsx)("span", {
                        className: "font-bold",
                        children: "T3 AI",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      };
    },
    86480: (e, t, a) => {
      a.r(t), a.d(t, { Hero: () => h });
      var s = a(9598),
        r = a(11950),
        l = a(97255),
        i = a(45602),
        n = a(47275),
        o = a(76859),
        d = a(9661);
      let c = [
          "Trusted",
          "Private",
          "Secure",
          "Self-sovereign",
          "Composable",
          "Decentralized",
        ],
        x = [250, 233, 230, 474, 422, 455],
        m = 0,
        p = (e, t) => ({
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%) rotate(".concat(
            e / 2 - (e / 6) * t,
            "deg)"
          ),
          transformOrigin: "center 250%",
        }),
        h = () => {
          let e = (0, o.Ub)(n.w9),
            t = (0, o.Ub)(n.Ug),
            a = (0, r.useRef)(null),
            [h, g] = (0, r.useState)(-417),
            [u, f] = (0, r.useState)(-208),
            [b, y] = (0, r.useState)(0),
            [v, w] = (0, r.useState)(0),
            [j, N] = (0, r.useState)(0),
            E = 75 + j;
          return (
            (0, o.$$)(() => {
              let e = x[b] || 0;
              (m += 33) > 2e3
                ? w(Math.pow(Math.max(0, (2500 - m) / 500), 4) * e)
                : w(Math.min(m / 500, 1) * e),
                m > 2500 && ((m = 0), y((e) => (e + 1) % c.length));
            }, 33),
            (0, r.useEffect)(() => {
              if (!a.current) return;
              let e = () => {
                if (!(a && a.current)) return;
                let { y: e, height: t } = a.current.getBoundingClientRect(),
                  s = t + 80,
                  r = t + e;
                g(-417 - 0.8 * (s - r)),
                  f(-208 - 0.8 * (s - r)),
                  N(Math.min(100, ((s - r) / s) * 100));
              };
              return (
                window.addEventListener("scroll", e, { passive: !0 }),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, s.jsxs)("section", {
              ref: a,
              className:
                "overflow-hidden py-16 px-4 md:py-12 lg:py-24 lg:px-20 relative",
              style: { height: e ? d.AD : t ? d.Uq : d.eH },
              children: [
                (0, s.jsxs)("div", {
                  className: "container-max container-tablet",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "pointer-events-none opacity-60 absolute top-[398px] w-[640px] h-[358px] lg:hidden",
                      style: { right: "".concat(u, "px") },
                      children: (0, s.jsx)(l.default, {
                        src: "/images/homepage/rainbow.png",
                        alt: "rainbow",
                        fill: !0,
                        priority: !0,
                        sizes: "100%",
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "pointer-events-none opacity-60 absolute top-[436px] w-[1280px] h-[1280px] hidden lg:block",
                      style: { right: "".concat(h, "px") },
                      children: (0, s.jsx)(l.default, {
                        src: "/images/homepage/rainbow.png",
                        alt: "rainbow",
                        fill: !0,
                        priority: !0,
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-center mb-6 font-bold text-display-md md:text-display-lg lg:text-display-2xl text-gray-25",
                      children: [
                        (0, s.jsx)("div", {
                          className: "text-center",
                          children: "Connect the World with",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "whitespace-nowrap overflow-hidden bg-gradient-to-r from-[#57A7E0] to-[#CDE7F6] bg-clip-text text-transparent text-center",
                          style: { width: v },
                          children: c[b],
                        }),
                        (0, s.jsx)("div", {
                          className: "w-fit",
                          children: "Identity & Data",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "text-text-md lg:text-text-xl text-primary-200 lg:w-[768px] mx-auto mb-8 md:mb-12 lg:mb-12 text-center",
                      children:
                        "Secure your enterprise applications with Verifiable Private Identity, and elevate your business with T3 AI's user data oracle and smart credentials. CA:0xcomingsoon",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "absolute left-0 right-0 h-[251px] top-[510px] md:top-[430px] lg:top-[850px]",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "relative w-[221px] h-[133px] lg:w-[560px] lg:h-[337px] z-[5]",
                      style: p(E, 1),
                      children: (0, s.jsx)(l.default, {
                        className:
                          "backdrop-blur-[5.6px] rounded-[14px] lg:rounded-[36px] -rotate-90",
                        src: "/images/homepage/card1.svg",
                        alt: "card1",
                        fill: !0,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "relative w-[221px] h-[133px] lg:w-[560px] lg:h-[337px] z-[4]",
                      style: p(E, 2),
                      children: (0, s.jsx)(l.default, {
                        className:
                          "backdrop-blur-[5.6px] rounded-[14px] lg:rounded-[36px] -rotate-90",
                        src: "/images/homepage/card2.svg",
                        alt: "card2",
                        fill: !0,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "relative w-[221px] h-[133px] lg:w-[560px] lg:h-[337px] z-[3]",
                      style: p(E, 3),
                      children: (0, s.jsx)(l.default, {
                        className:
                          "backdrop-blur-[5.6px] rounded-[14px] lg:rounded-[36px] -rotate-90",
                        src: "/images/homepage/card3.svg",
                        alt: "card3",
                        fill: !0,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "relative w-[221px] h-[133px] lg:w-[560px] lg:h-[337px] z-[2]",
                      style: p(E, 4),
                      children: (0, s.jsx)(l.default, {
                        className:
                          "backdrop-blur-[5.6px] rounded-[14px] lg:rounded-[36px] -rotate-90",
                        src: "/images/homepage/card4.svg",
                        alt: "card4",
                        fill: !0,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "relative w-[221px] h-[133px] lg:w-[560px] lg:h-[337px] z-[1]",
                      style: p(E, 5),
                      children: (0, s.jsx)(l.default, {
                        className:
                          "backdrop-blur-[5.6px] rounded-[14px] lg:rounded-[36px] -rotate-90",
                        src: "/images/homepage/card5.svg",
                        alt: "card5",
                        fill: !0,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    91138: (e, t, a) => {
      a.r(t), a.d(t, { SocialProof: () => d });
      var s = a(9598),
        r = a(97255);
      let l = [
        { alt: "illuminate financial", src: "/images/about-us/illuminate.png" },
        { alt: "titan fund", src: "/images/about-us/titan-fund.png" },
        { alt: "animoca brands", src: "/images/about-us/animoca.png" },
        { alt: "progression", src: "/images/about-us/progression.png" },
        { alt: "IDG blockchain", src: "/images/about-us/idg-blockchain.png" },
        { alt: "cherubic", src: "/images/about-us/cherubic.png" },
        { alt: "500 southeast asia", src: "/images/about-us/500-new.png" },
        { alt: "mesh", src: "/images/about-us/mesh-new.png" },
        { alt: "hard yaka", src: "/images/about-us/hard-yaka.png" },
        { alt: "blackpine", src: "/images/about-us/blackpine.png" },
      ];
      var i = a(47275),
        n = a(76859),
        o = a(9661);
      let d = () => {
        let e = (0, n.Ub)(i.w9),
          t =
            o.iZ.reduce((e, t) => {
              let { width: a } = t;
              return e + a;
            }, 0) +
            (o.iZ.length - 1) * 64,
          a = o.iZ.map((t) => {
            let { src: a, alt: l, width: i, height: n } = t;
            return (0, s.jsx)(
              r.default,
              {
                src: a,
                alt: l,
                width: e ? 0.8 * i : i,
                height: e ? 0.8 * n : n,
              },
              l
            );
          });
        return (0, s.jsxs)("section", {
          className: "bg-base-white",
          children: [
            (0, s.jsx)("div", {
              children: (0, s.jsxs)("div", {
                className:
                  "container-max container-tablet mx-auto px-4 lg:px-0 py-16 text-center",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "text-text-md lg:text-text-xl text-gray-600 mb-8",
                    children: "Ecosystem",
                  }),
                  (0, s.jsxs)("div", {
                    className: "w-full overflow-hidden relative",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "absolute inset-x-0 inset-y-0 z-[2]",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-[5rem] lg:w-[10rem] h-full absolute left-0 top-0",
                            style: {
                              background:
                                "linear-gradient(270deg, transparent 0%, rgb(246, 249, 252) 100%)",
                            },
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "w-[5rem] lg:w-[10rem] h-full absolute right-0 top-0 rotate-180",
                            style: {
                              background:
                                "linear-gradient(270deg, transparent 0%, rgb(246, 249, 252) 100%)",
                            },
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "relative w-[753px]_ h-[63px] lg:h-[91px]",
                        style: { width: e ? 0.8 * t : t },
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-full h-full flex justify-around absolute whitespace-nowrap animate-init-scroll-horizontal left-0",
                            children: a,
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "w-full h-full flex justify-around absolute whitespace-nowrap animate-scroll-horizontal left-full",
                            children: a,
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "w-full h-full flex justify-around absolute whitespace-nowrap animate-scroll-horizontal left-full",
                            style: { animationDelay: "30s" },
                            children: a,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)("div", {
              className: "p-0 lg:py-24 lg:px-20",
              children: (0, s.jsxs)("div", {
                className:
                  "py-12 px-4 md:py-16 lg:px-8 container-max container-tablet bg-gray-900 md:rounded-3xl flex flex-col justify-center items-center gap-8 text-center",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "font-bold text-display-xs md:text-display-sm lg:text-display-md text-gray-25",
                    children: [
                      "T3 AI is backed by",
                      (0, s.jsx)("br", {}),
                      " ",
                      (0, s.jsx)("span", {
                        className: "text-primary-400",
                        children: "world-class investors",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "flex flex-wrap items-center justify-center gap-y-6 w-full",
                    children: l.map((e) => {
                      let { alt: t, src: a } = e;
                      return (0, s.jsx)(
                        "div",
                        {
                          className:
                            "basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center",
                          children: (0, s.jsx)(r.default, {
                            src: a,
                            alt: t,
                            loading: "lazy",
                            width: 133,
                            height: 100,
                            className: "h-auto w-[133px] lg:w-[100px]",
                          }),
                        },
                        a
                      );
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    96806: (e, t, a) => {
      a.d(t, { O: () => c });
      var s = a(91371),
        r = a(14017),
        l = a(12251),
        i = a(97892),
        n = a(71721),
        o = class {
          fetch(e) {
            return (0, n.BU)(this, null, function* () {
              let {
                  url: t,
                  withHeaders: a = !1,
                  shouldNotify: s = !0,
                  fetchOpt: r,
                  altToken: o,
                } = e,
                d = t.startsWith("/") ? "" : "/",
                c = this.basePath + d + t,
                x = (null == r ? void 0 : r.headers)
                  ? new Headers(r.headers)
                  : new Headers(),
                m = this.getToken();
              o
                ? x.set("Authorization", "Bearer ".concat(o))
                : m && x.set("Authorization", "Bearer ".concat(m));
              try {
                let e = this.getHeaders(x),
                  t = yield fetch(
                    c,
                    (0, n.ko)((0, n.IA)({}, r), { headers: e })
                  );
                if (t.status === i.wb.NOT_FOUND) {
                  let e = new l.hD(i.p2, t.status, c);
                  throw (s && this.notify.error(i.p2), e);
                }
                if (t.status === i.wb.TOO_MANY_REQUESTS)
                  throw new l.hD(i.Wm, t.status, c);
                let o = yield t.json();
                if (t.status >= i.wb.BAD_REQUEST) {
                  let e = {};
                  a &&
                    t.headers.forEach((t, a) => {
                      e[a] = t;
                    });
                  let r = new l.hD(o, t.status, c, e);
                  throw (s && this.notify.error(r.message), r);
                }
                return o;
              } catch (e) {
                throw (this.logger.error(e), e);
              }
            });
          }
          getToken() {
            return "undefined" == typeof localStorage
              ? ""
              : localStorage.getItem("token");
          }
          getHeaders(e) {
            let t = new Headers(e);
            return (
              t.set("Content-Type", "application/json"),
              t.set("Access-Control-Allow-Origin", this.basePath),
              t
            );
          }
          constructor(e, t, a) {
            (this.basePath = e), (this.logger = t), (this.notify = a);
          }
        },
        d = a(18922);
      let c = new o(r.NM, d.v, s.oR);
    },
  },
]);
