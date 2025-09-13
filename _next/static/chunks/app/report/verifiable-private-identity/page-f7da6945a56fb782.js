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
    (e._sentryDebugIds[t] = "d2275489-1468-45f6-ab65-e6c07e957831"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-d2275489-1468-45f6-ab65-e6c07e957831"));
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
  [6954],
  {
    12251: (e, t, r) => {
      "use strict";
      r.d(t, { DP: () => l, hD: () => o });
      var s = r(97892);
      function i(e) {
        this.message = e;
      }
      function a(e) {
        this.message = e;
      }
      r(71721),
        r(54747),
        (i.prototype = Error()),
        (i.prototype.name = "InvalidCharacterError"),
        window.atob && window.atob.bind(window),
        (a.prototype = Error()),
        (a.prototype.name = "InvalidTokenError");
      var n = (e) => {
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
        l = (e) => {
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
          constructor(e, t, r, s) {
            let i = n(e);
            super(l(e)),
              (this.name = "ApiError - ".concat(r)),
              (this.status = t),
              (this.code = i),
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
    12377: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 82482)),
        Promise.resolve().then(r.bind(r, 78019)),
        Promise.resolve().then(r.bind(r, 84978)),
        Promise.resolve().then(r.bind(r, 87454)),
        Promise.resolve().then(r.bind(r, 46577)),
        Promise.resolve().then(r.bind(r, 2465)),
        Promise.resolve().then(r.bind(r, 57503)),
        Promise.resolve().then(r.bind(r, 39582)),
        Promise.resolve().then(r.bind(r, 5045)),
        Promise.resolve().then(r.bind(r, 13888)),
        Promise.resolve().then(r.bind(r, 89514)),
        Promise.resolve().then(r.bind(r, 2870)),
        Promise.resolve().then(r.bind(r, 43232)),
        Promise.resolve().then(r.bind(r, 24016)),
        Promise.resolve().then(r.bind(r, 54697)),
        Promise.resolve().then(r.bind(r, 55868)),
        Promise.resolve().then(r.bind(r, 21435)),
        Promise.resolve().then(r.bind(r, 57179)),
        Promise.resolve().then(r.bind(r, 68949)),
        Promise.resolve().then(r.bind(r, 79114)),
        Promise.resolve().then(r.bind(r, 79898)),
        Promise.resolve().then(r.bind(r, 9073)),
        Promise.resolve().then(r.bind(r, 41057)),
        Promise.resolve().then(r.bind(r, 54985)),
        Promise.resolve().then(r.bind(r, 29177)),
        Promise.resolve().then(r.bind(r, 41123)),
        Promise.resolve().then(r.bind(r, 67767)),
        Promise.resolve().then(r.bind(r, 30471)),
        Promise.resolve().then(r.bind(r, 60688)),
        Promise.resolve().then(r.bind(r, 70186)),
        Promise.resolve().then(r.bind(r, 50403)),
        Promise.resolve().then(r.bind(r, 1549)),
        Promise.resolve().then(r.bind(r, 63351)),
        Promise.resolve().then(r.bind(r, 59762)),
        Promise.resolve().then(r.bind(r, 11826)),
        Promise.resolve().then(r.bind(r, 78618)),
        Promise.resolve().then(r.bind(r, 25759)),
        Promise.resolve().then(r.bind(r, 53541)),
        Promise.resolve().then(r.bind(r, 60013)),
        Promise.resolve().then(r.bind(r, 97021)),
        Promise.resolve().then(r.bind(r, 42684)),
        Promise.resolve().then(r.bind(r, 98545)),
        Promise.resolve().then(r.bind(r, 68459)),
        Promise.resolve().then(r.bind(r, 75394)),
        Promise.resolve().then(r.bind(r, 48821)),
        Promise.resolve().then(r.bind(r, 83473)),
        Promise.resolve().then(r.bind(r, 52874)),
        Promise.resolve().then(r.bind(r, 84770)),
        Promise.resolve().then(r.bind(r, 53181)),
        Promise.resolve().then(r.bind(r, 54633)),
        Promise.resolve().then(r.bind(r, 80042)),
        Promise.resolve().then(r.bind(r, 32764)),
        Promise.resolve().then(r.bind(r, 76300)),
        Promise.resolve().then(r.bind(r, 53085)),
        Promise.resolve().then(r.bind(r, 64240)),
        Promise.resolve().then(r.bind(r, 24560)),
        Promise.resolve().then(r.bind(r, 35888)),
        Promise.resolve().then(r.bind(r, 47701)),
        Promise.resolve().then(r.bind(r, 44094)),
        Promise.resolve().then(r.bind(r, 45224)),
        Promise.resolve().then(r.bind(r, 47175)),
        Promise.resolve().then(r.bind(r, 78947)),
        Promise.resolve().then(r.bind(r, 26641)),
        Promise.resolve().then(r.bind(r, 46291)),
        Promise.resolve().then(r.bind(r, 3724)),
        Promise.resolve().then(r.bind(r, 41407)),
        Promise.resolve().then(r.bind(r, 15152)),
        Promise.resolve().then(r.bind(r, 2754)),
        Promise.resolve().then(r.bind(r, 58415)),
        Promise.resolve().then(r.bind(r, 35732)),
        Promise.resolve().then(r.t.bind(r, 30027, 23)),
        Promise.resolve().then(r.t.bind(r, 76236, 23));
    },
    14017: (e, t, r) => {
      "use strict";
      r.d(t, { HR: () => c, Li: () => d, NM: () => o });
      var s = r(60118),
        i = r(3482),
        a = r(37811);
      let n = i.z
          .string()
          .refine((e) => "true" === e || "false" === e)
          .transform((e) => "true" === e),
        l = (0, s.w)({
          server: {
            SENTRY_DSN: i.z.string(),
            SENTRY_ENABLED: n,
            SENTRY_ENVIRONMENT: i.z.string(),
            T3_WEBSITE_GHOST_API_KEY: i.z.string(),
            T3_WEBSITE_GHOST_ADMIN_KEY: i.z.string(),
            T3_WEBSITE_GHOST_API_URL: i.z.string().url(),
          },
          client: {
            NEXT_PUBLIC_T3_WEBSITE_BASE_API_URL: i.z.string().url(),
            NEXT_PUBLIC_SENTRY_ENABLED: n,
            NEXT_PUBLIC_T3_WEBSITE_ANALYTICS_ID: i.z.string().min(1),
          },
          runtimeEnv: {
            NEXT_PUBLIC_T3_WEBSITE_BASE_API_URL: "https://api.terminal3.io/api",
            NEXT_PUBLIC_T3_WEBSITE_ANALYTICS_ID: "G-DVBSG810QF",
            NEXT_PUBLIC_SENTRY_ENABLED: "true",
            SENTRY_DSN: a.env.SENTRY_DSN,
            SENTRY_ENABLED: a.env.SENTRY_ENABLED,
            SENTRY_ENVIRONMENT: a.env.SENTRY_ENVIRONMENT,
            T3_WEBSITE_GHOST_API_KEY: a.env.T3_WEBSITE_GHOST_API_KEY,
            T3_WEBSITE_GHOST_ADMIN_KEY: a.env.T3_WEBSITE_GHOST_ADMIN_KEY,
            T3_WEBSITE_GHOST_API_URL: a.env.T3_WEBSITE_GHOST_API_URL,
          },
        }),
        o = "https://api.terminal3.io/api",
        d = l.NEXT_PUBLIC_SENTRY_ENABLED,
        c = l.NEXT_PUBLIC_T3_WEBSITE_ANALYTICS_ID;
    },
    15408: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => a, r: () => i });
      var s = r(96806);
      let i = async (e) =>
          await s.O.fetch({
            url: "/landing_page/v2/enterprise/contact",
            fetchOpt: { method: "POST", body: JSON.stringify(e) },
            shouldNotify: !0,
          }),
        a = [
          { label: "Education", value: "Education" },
          {
            label: "Financial Services & Decentralized Finance",
            value: "Financial Services & Decentralized Finance",
          },
          { label: "Gaming", value: "Gaming" },
          { label: "Healthcare", value: "Healthcare" },
          { label: "NFT Projects", value: "NFT Projects" },
          {
            label: "Public Sector/Government",
            value: "Public Sector/Government",
          },
          {
            label: "Web3 Infrastructure & Protocols",
            value: "Web3 Infrastructure & Protocols",
          },
          { label: "Other", value: "Other" },
        ];
    },
    18922: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => i });
      var s = r(38357);
      let i = r(14017).Li
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
    56505: (e, t, r) => {
      "use strict";
      r.d(t, {
        $G: () => d,
        $Y: () => o,
        DM: () => l,
        HS: () => a,
        OQ: () => c,
        Rn: () => n,
        h6: () => i,
        jq: () => s,
      });
      let s =
          "Member already exists. Attempting to add member with existing email address",
        i = "Email is required",
        a = "Please enter a valid email address",
        n = "First name is required",
        l = "Last name is required",
        o = "Industry is invalid",
        d = "Please agree to the terms and conditions",
        c = "Message is required";
    },
    78019: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { Hero: () => f });
      var s = r(9598),
        i = r(11950),
        a = r(78422),
        n = r(31877),
        l = r(30027),
        o = r.n(l),
        d = r(50685);
      let c = (0, r(73710).A)("FileText", [
        [
          "path",
          {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7",
          },
        ],
        ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
        ["path", { d: "M10 9H8", key: "b1mrlr" }],
        ["path", { d: "M16 13H8", key: "t4e002" }],
        ["path", { d: "M16 17H8", key: "z1uh3a" }],
      ]);
      var x = r(77632),
        m = r(15408),
        h = r(45602),
        p = r(3482),
        g = r(56505),
        u = r(47275);
      let b = p.Ik({
        email: p
          .Yj({ required_error: g.h6, invalid_type_error: g.h6 })
          .trim()
          .toLowerCase()
          .regex(u.Uo, g.HS),
        first_name: p
          .Yj({ required_error: g.Rn, invalid_type_error: g.Rn })
          .trim()
          .min(1, g.Rn),
        last_name: p
          .Yj({ required_error: g.DM, invalid_type_error: g.DM })
          .trim()
          .min(1, g.DM),
        industry: p.lq(p.Yj({ invalid_type_error: g.$Y })),
        agreeTOC: p
          .zM({ required_error: g.$G })
          .refine((e) => !0 === e, { message: g.$G }),
        subscribe: p.zM(),
      });
      function f() {
        let e = (0, i.useRef)(null),
          [t, r] = (0, i.useState)(!1),
          [l, p] = (0, i.useState)(0),
          g = (0, i.useRef)(null),
          {
            register: u,
            handleSubmit: f,
            formState: { errors: v, isValid: y, isSubmitting: N },
            control: _,
          } = (0, n.mN)({
            resolver: (0, d.u)(b),
            defaultValues: { agreeTOC: !0 },
            mode: "onBlur",
          });
        function j() {
          window.location.href = "/files/verifiable-private-identity.pdf";
        }
        (0, i.useLayoutEffect)(() => {
          function t() {
            if (!e.current) return;
            let t = window.matchMedia("(min-width: 1281px)").matches
              ? 380
              : e.current.offsetHeight;
            document.documentElement.style.setProperty(
              "--section-height",
              "".concat(t, "px")
            );
          }
          return (
            window.addEventListener("resize", t),
            t(),
            () => {
              window.removeEventListener("resize", t);
            }
          );
        }, [e]);
        let P = f(async (e) => {
          if (l > 0 || !g.current) return;
          let t = await g.current.executeAsync();
          if (t && e.agreeTOC) {
            if ((Reflect.deleteProperty(e, "agreeTOC"), r(!0), !e.subscribe))
              return void j();
            Reflect.deleteProperty(e, "subscribe"),
              (
                await fetch("/newsletter", {
                  method: "POST",
                  body: JSON.stringify({
                    ...e,
                    token: t,
                    label: "position-paper",
                  }),
                })
              ).ok || console.error("You have already subscribed!"),
              j(),
              g.current.reset();
          }
        });
        return (0, s.jsxs)("section", {
          className: "py-16 px-4 md:px-15 lg:px-20",
          ref: e,
          id: "home",
          children: [
            (0, s.jsx)("div", {
              className:
                "-z-10 absolute inset-x-0 inset-y-0 h-[calc(var(--header-height)+998px)] bg-[url('/images/contact-us/grainy-bg.png')] bg-no-repeat bg-cover bg-top",
              style: {
                height: "calc(var(--header-height) + var(--section-height))",
              },
            }),
            (0, s.jsxs)("div", {
              className:
                "container-max z-10 flex flex-col xl:flex-row gap-6 md:gap-12",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-4 xl:basis-1/2 xl:pt-4",
                  children: [
                    (0, s.jsxs)("h4", {
                      className:
                        "text-text-lg md:text-text-xl text-primary-300 font-black flex items-center gap-1",
                      children: [(0, s.jsx)(c, {}), " Report"],
                    }),
                    (0, s.jsxs)("h1", {
                      className:
                        "font-bold md:text-display-md xl:text-display-lg text-base-white text-display-sm flex flex-col",
                      children: [
                        (0, s.jsxs)("span", {
                          className:
                            "flex flex-col md:flex-row xl:flex-col gap-1",
                          children: [
                            "Empowering Trust: ",
                            (0, s.jsx)("span", {
                              children: "The Next Wave of",
                            }),
                            " ",
                          ],
                        }),
                        (0, s.jsx)("span", {
                          className:
                            "bg-[linear-gradient(90deg,#57A7E0_0%,#CDE7F6_100%)] bg-clip-text text-transparent",
                          children: "Digital Identity",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      className:
                        "text-text-md xl:text-display-xs xl:text-gray-600 md:text-text-lg md:mt-2 xl:mt-[88px] text-primary-200",
                      children: [
                        "Verifiable Private Identity can transform your institution's approach to data privacy and compliance.",
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("br", {}),
                        "Get expert insights into the new technologies powering enterprise identity for a more secure, compliant, and future-ready organization.",
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "shadow-md md:shadow-3xl rounded-3xl bg-white py-12 px-6 xl:px-12 xl:max-w-[576px] xl:basis-1/2",
                  children: (0, s.jsx)("form", {
                    onSubmit: P,
                    children: (0, s.jsxs)("div", {
                      className: "flex flex-col gap-4 xl:gap-6 xl:mb-4",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, s.jsx)("h2", {
                              className:
                                "text-display-xs xl:text-display-sm font-black text-gray-900",
                              children: "Get your copy",
                            }),
                            (0, s.jsx)("p", {
                              className: "text-text-md text-gray-600",
                              children:
                                "Please enter your information to unlock the report",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex justify-between gap-2 xl:gap-4",
                          children: [
                            (0, s.jsx)("div", {
                              className: "w-[calc(50%_-_4px)]",
                              children: (0, s.jsx)(h.FO, {
                                register: u,
                                label: "First name",
                                placeholder: "First name",
                                name: "first_name",
                                error: v.first_name,
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "w-[calc(50%_-_2px)]",
                              children: (0, s.jsx)(h.FO, {
                                register: u,
                                label: "Last name",
                                placeholder: "Last name",
                                name: "last_name",
                                error: v.last_name,
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsx)(h.FO, {
                          label: "Business email",
                          placeholder: "you@company.com",
                          register: u,
                          name: "email",
                          error: v.email,
                        }),
                        (0, s.jsx)(h.$k, {
                          label: "Industry",
                          optional: !0,
                          control: _,
                          name: "industry",
                          placeholder: "Select industry",
                          options: m.W,
                        }),
                        (0, s.jsx)("input", {
                          type: "checkbox",
                          name: "agree",
                          className: "hidden",
                          value: l,
                          onChange: (e) => {
                            e.currentTarget.checked && p(1);
                          },
                          tabIndex: -1,
                          autoComplete: "off",
                        }),
                        (0, s.jsxs)("label", {
                          className: "hidden",
                          children: [
                            "Form Page",
                            (0, s.jsx)("input", {
                              name: "form_page",
                              value: "verifiable-private-identity",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex flex-col gap-2 mt-2 xl:mt-0",
                          children: [
                            (0, s.jsx)("div", {
                              className: "flex gap-3",
                              children: (0, s.jsxs)("label", {
                                className: "flex gap-3 xl:mb-4",
                                children: [
                                  (0, s.jsx)("input", {
                                    type: "checkbox",
                                    className:
                                      "size-5 bg-base-white border-gray-300 rounded-md accent-primary-700 text-primary-700 focus:ring-primary-700",
                                    ...u("agreeTOC"),
                                  }),
                                  (0, s.jsxs)("span", {
                                    className:
                                      "text-text-xs xl:text-text-sm text-gray-400",
                                    children: [
                                      "By submitting this form, you are confirming that you have read and agree to our",
                                      " ",
                                      (0, s.jsx)(o(), {
                                        href: "/#",
                                        target: "_blank",
                                        className:
                                          "underline underline-offset-[3px]",
                                        children: "Privacy Policy",
                                      }),
                                      " ",
                                      "and",
                                      " ",
                                      (0, s.jsx)(o(), {
                                        href: "/terms-of-service",
                                        target: "_blank",
                                        className:
                                          "underline underline-offset-[3px]",
                                        children: "Terms of Service",
                                      }),
                                      ".",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "flex gap-3",
                              children: (0, s.jsxs)("label", {
                                className: "flex gap-3",
                                children: [
                                  (0, s.jsx)("input", {
                                    type: "checkbox",
                                    className:
                                      "size-5 bg-base-white border-gray-300 rounded-md accent-primary-700 text-primary-700 focus:ring-primary-700",
                                    ...u("subscribe"),
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-text-xs xl:text-text-sm text-gray-400",
                                    children:
                                      "I would like to receive product updates and news from T3 AI. You can unsubscribe any time.",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)(h.$n, {
                          size: "lg",
                          className: "w-full",
                          type: "submit",
                          isDisabled: !y || t,
                          isLoading: N,
                          children: ["Get Copy ", (0, s.jsx)(x.A, {})],
                        }),
                        (0, s.jsx)("div", {
                          className: "-mt-4",
                          children: (0, s.jsx)(a.A, {
                            ref: g,
                            size: "invisible",
                            sitekey: "6Lc5RIwnAAAAAJ6C7Xqn0E04dnv_keFw0oTrLgSs",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    82482: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { Features: () => n });
      var s = r(9598),
        i = r(97255),
        a = r(45602);
      function n() {
        return (0, s.jsx)("section", {
          className: "py-16 md:py-24 bg-white xl:mx-20",
          children: (0, s.jsxs)("div", {
            className: "container-max flex flex-col gap-12",
            children: [
              (0, s.jsx)("div", {
                className:
                  "flex flex-col gap-3 lg:max-w-[60%] px-4 md:px-15 xl:px-0",
                children: (0, s.jsx)("h2", {
                  className:
                    "text-text-xl lg:text-display-xs md:text-display-md font-bold lg:font-black text-gray-900",
                  children: "Inside this report, we explore:",
                }),
              }),
              (0, s.jsxs)(a.FN, {
                className: "flex xl:gap-6 lg:gap-4 py-3",
                withControl: !0,
                slideClassName: "basis-1/4",
                containerClassName: "xl:px-0",
                children: [
                  (0, s.jsx)("figure", {
                    className:
                      "ps-4 lg:pl-0 min-w-[327px] xl:min-w-[302px] snap-start group",
                    id: "item-1",
                    children: (0, s.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, s.jsx)(i.default, {
                            src: "/images/report/verifiable-private-identity/feature-1.avif",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: "px-4 min-h-[175px] lg:min-h-[180px]",
                          children: [
                            (0, s.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "New digital identity standards",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Open standards for decentralized identities, verifiable credentials, and data encryption enable privacy-preserving enterprise access.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("figure", {
                    className:
                      "ps-4 lg:pl-0 min-w-[327px] xl:min-w-[302px] snap-start group",
                    id: "item-2",
                    children: (0, s.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, s.jsx)(i.default, {
                            src: "/images/report/verifiable-private-identity/feature-2.avif",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: "px-4 min-h-[175px] lg:min-h-[180px]",
                          children: [
                            (0, s.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Regulatory agility",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Key trends in data privacy and regulatory compliance that require updated identity storage and access solutions.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("figure", {
                    className:
                      "px-4 lg:pl-0 min-w-[327px] xl:min-w-[302px] snap-start group",
                    id: "item-3",
                    children: (0, s.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, s.jsx)(i.default, {
                            src: "/images/report/verifiable-private-identity/feature-3.avif",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: "px-4 min-h-[175px] lg:min-h-[180px]",
                          children: [
                            (0, s.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Cost and risk reduction",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "How to avoid costly breaches and compliance fines by eliminating the need to store sensitive data.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("figure", {
                    className:
                      "px-4 lg:pl-0 min-w-[327px] xl:min-w-[302px] snap-start group",
                    id: "item-3",
                    children: (0, s.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, s.jsx)(i.default, {
                            src: "/images/report/verifiable-private-identity/feature-4.avif",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: "px-4 min-h-[175px] lg:min-h-[180px]",
                          children: [
                            (0, s.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Future-proof technologies",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "How you can keep data quantum-resistant and safe from attacks as technology and regulations evolve.",
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
    84978: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { Overview: () => l });
      var s = r(9598),
        i = r(81876),
        a = r(47275),
        n = r(76859);
      function l() {
        let e = (0, n.Ub)(a.w9),
          t = (0, n.Ub)(a.Ug),
          r = (0, n.Ub)(a.g0),
          l = -15;
        return (
          e ? (l = -5) : t ? (l = -3) : r && (l = -2),
          (0, s.jsx)("section", {
            children: (0, s.jsx)(i.zE, {
              children: (0, s.jsx)(i.y, {
                layers: [
                  {
                    speed: -30,
                    children: (0, s.jsx)("div", {
                      className:
                        "relative h-full bg-no-repeat bg-cover bg-[url('/images/report/verifiable-private-identity/bg-1.avif')] report-pos",
                    }),
                  },
                  {
                    speed: l,
                    children: (0, s.jsx)("section", {
                      className:
                        "relative text-white py-24 px-4 md:py-16 md:pb-24 xl:px-20 xl:flex xl:items-center xl:justify-center h-full",
                      children: (0, s.jsxs)("div", {
                        className:
                          "container-max flex flex-col xl:flex-row gap-6 xl:items-center ",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "flex flex-col gap-4 text-center xl:text-left xl:gap-5 xl:w-full",
                            children: [
                              (0, s.jsxs)("h2", {
                                className:
                                  "text-display-xs md:text-display-md xl:text-display-xl font-black",
                                children: [
                                  "Unlock the Future of",
                                  (0, s.jsx)("br", {}),
                                  (0, s.jsx)("span", {
                                    className:
                                      "bg-[linear-gradient(90deg,#57A7E0_0%,#CDE7F6_100%)] bg-clip-text text-transparent",
                                    children: "Institutional Identity",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("p", {
                                className:
                                  "text-text-lg md:text-text-xl xl:text-display-md font-medium flex flex-col md:flex-row xl:flex-col justify-center",
                                children: [
                                  "New Frontiers in Interoperability,",
                                  " ",
                                  (0, s.jsx)("span", {
                                    children: "Compliance and Value",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "border-t border-gray-600 text-center pt-4 md:w-[480px] md:mx-auto xl:border-t-0 xl:border-s xl:pt-0 xl:ps-6 xl:h-fit xl:text-left xl:w-full",
                            children: (0, s.jsxs)("p", {
                              className:
                                "text-text-md md:text-text-lg xl:text-display-sm font-medium",
                              children: [
                                "Discover the future of digital identity",
                                " ",
                                (0, s.jsx)("span", {
                                  className: "md:hidden",
                                  children: (0, s.jsx)("br", {}),
                                }),
                                " ",
                                "management with this comprehensive report on",
                                " ",
                                (0, s.jsx)("span", {
                                  className:
                                    "bg-[linear-gradient(90deg,#57A7E0_0%,#CDE7F6_100%)] bg-clip-text text-transparent",
                                  children: "Verifiable Private Identity (VPI)",
                                }),
                                " ",
                                "for regulated enterprises.",
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  },
                ],
                className: "min-h-[465px] xl:h-[640px]",
                id: "overview",
              }),
            }),
          })
        );
      }
    },
    96806: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => c });
      var s = r(91371),
        i = r(14017),
        a = r(12251),
        n = r(97892),
        l = r(71721),
        o = class {
          fetch(e) {
            return (0, l.BU)(this, null, function* () {
              let {
                  url: t,
                  withHeaders: r = !1,
                  shouldNotify: s = !0,
                  fetchOpt: i,
                  altToken: o,
                } = e,
                d = t.startsWith("/") ? "" : "/",
                c = this.basePath + d + t,
                x = (null == i ? void 0 : i.headers)
                  ? new Headers(i.headers)
                  : new Headers(),
                m = this.getToken();
              o
                ? x.set("Authorization", "Bearer ".concat(o))
                : m && x.set("Authorization", "Bearer ".concat(m));
              try {
                let e = this.getHeaders(x),
                  t = yield fetch(
                    c,
                    (0, l.ko)((0, l.IA)({}, i), { headers: e })
                  );
                if (t.status === n.wb.NOT_FOUND) {
                  let e = new a.hD(n.p2, t.status, c);
                  throw (s && this.notify.error(n.p2), e);
                }
                if (t.status === n.wb.TOO_MANY_REQUESTS)
                  throw new a.hD(n.Wm, t.status, c);
                let o = yield t.json();
                if (t.status >= n.wb.BAD_REQUEST) {
                  let e = {};
                  r &&
                    t.headers.forEach((t, r) => {
                      e[r] = t;
                    });
                  let i = new a.hD(o, t.status, c, e);
                  throw (s && this.notify.error(i.message), i);
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
          constructor(e, t, r) {
            (this.basePath = e), (this.logger = t), (this.notify = r);
          }
        },
        d = r(18922);
      let c = new o(i.NM, d.v, s.oR);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [7255, 507, 118, 9523, 5602, 5148, 1860, 2086, 7358], () =>
      t(12377)
    ),
      (_N_E = e.O());
  },
]);
