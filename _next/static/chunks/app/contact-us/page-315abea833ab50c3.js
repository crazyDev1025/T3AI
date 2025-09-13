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
    (e._sentryDebugIds[t] = "e43e9971-30ba-4ccd-9f55-5136cb20591e"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-e43e9971-30ba-4ccd-9f55-5136cb20591e"));
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
  [2920],
  {
    12251: (e, t, r) => {
      "use strict";
      r.d(t, { DP: () => n, hD: () => o });
      var s = r(97892);
      function a(e) {
        this.message = e;
      }
      function i(e) {
        this.message = e;
      }
      r(71721),
        r(54747),
        (a.prototype = Error()),
        (a.prototype.name = "InvalidCharacterError"),
        window.atob && window.atob.bind(window),
        (i.prototype = Error()),
        (i.prototype.name = "InvalidTokenError");
      var l = (e) => {
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
          constructor(e, t, r, s) {
            let a = l(e);
            super(n(e)),
              (this.name = "ApiError - ".concat(r)),
              (this.status = t),
              (this.code = a),
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
    14017: (e, t, r) => {
      "use strict";
      r.d(t, { HR: () => d, Li: () => c, NM: () => o });
      var s = r(60118),
        a = r(3482),
        i = r(37811);
      let l = a.z
          .string()
          .refine((e) => "true" === e || "false" === e)
          .transform((e) => "true" === e),
        n = (0, s.w)({
          server: {
            SENTRY_DSN: a.z.string(),
            SENTRY_ENABLED: l,
            SENTRY_ENVIRONMENT: a.z.string(),
            T3_WEBSITE_GHOST_API_KEY: a.z.string(),
            T3_WEBSITE_GHOST_ADMIN_KEY: a.z.string(),
            T3_WEBSITE_GHOST_API_URL: a.z.string().url(),
          },
          client: {
            NEXT_PUBLIC_T3_WEBSITE_BASE_API_URL: a.z.string().url(),
            NEXT_PUBLIC_SENTRY_ENABLED: l,
            NEXT_PUBLIC_T3_WEBSITE_ANALYTICS_ID: a.z.string().min(1),
          },
          runtimeEnv: {
            NEXT_PUBLIC_T3_WEBSITE_BASE_API_URL: "https://api.terminal3.io/api",
            NEXT_PUBLIC_T3_WEBSITE_ANALYTICS_ID: "G-DVBSG810QF",
            NEXT_PUBLIC_SENTRY_ENABLED: "true",
            SENTRY_DSN: i.env.SENTRY_DSN,
            SENTRY_ENABLED: i.env.SENTRY_ENABLED,
            SENTRY_ENVIRONMENT: i.env.SENTRY_ENVIRONMENT,
            T3_WEBSITE_GHOST_API_KEY: i.env.T3_WEBSITE_GHOST_API_KEY,
            T3_WEBSITE_GHOST_ADMIN_KEY: i.env.T3_WEBSITE_GHOST_ADMIN_KEY,
            T3_WEBSITE_GHOST_API_URL: i.env.T3_WEBSITE_GHOST_API_URL,
          },
        }),
        o = "https://api.terminal3.io/api",
        c = n.NEXT_PUBLIC_SENTRY_ENABLED,
        d = n.NEXT_PUBLIC_T3_WEBSITE_ANALYTICS_ID;
    },
    15408: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => i, r: () => a });
      var s = r(96806);
      let a = async (e) =>
          await s.O.fetch({
            url: "/landing_page/v2/enterprise/contact",
            fetchOpt: { method: "POST", body: JSON.stringify(e) },
            shouldNotify: !0,
          }),
        i = [
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
      r.d(t, { v: () => a });
      var s = r(38357);
      let a = r(14017).Li
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
        $G: () => c,
        $Y: () => o,
        DM: () => n,
        HS: () => i,
        OQ: () => d,
        Rn: () => l,
        h6: () => a,
        jq: () => s,
      });
      let s =
          "Member already exists. Attempting to add member with existing email address",
        a = "Email is required",
        i = "Please enter a valid email address",
        l = "First name is required",
        n = "Last name is required",
        o = "Industry is invalid",
        c = "Please agree to the terms and conditions",
        d = "Message is required";
    },
    59685: (e, t) => {
      "use strict";
      var r =
        /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      t.validate = function (e) {
        if (!e || e.length > 254 || !r.test(e)) return !1;
        var t = e.split("@");
        return !(
          t[0].length > 64 ||
          t[1].split(".").some(function (e) {
            return e.length > 63;
          })
        );
      };
    },
    62797: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { ContactForm: () => E });
      var s = r(9598),
        a = r(11950),
        i = r(78422),
        l = r(31877),
        n = r(91371),
        o = r(97255),
        c = r(30027),
        d = r.n(c),
        u = r(50685),
        h = r(1231),
        m = r(45602),
        x = r(15408),
        g = r(91695),
        p = r(3482),
        f = r(56505),
        y = r(47275);
      let b = p.Ik({
          email: p
            .Yj({ required_error: f.h6, invalid_type_error: f.h6 })
            .trim()
            .toLowerCase()
            .regex(y.Uo, f.HS)
            .refine((e) => g.G(e), {
              message: "Personal email account cannot be used",
            }),
          first_name: p
            .Yj({ required_error: f.Rn, invalid_type_error: f.Rn })
            .trim()
            .min(1, f.Rn),
          last_name: p
            .Yj({ required_error: f.DM, invalid_type_error: f.DM })
            .trim()
            .min(1, f.DM),
          message: p
            .Yj({ required_error: f.OQ, invalid_type_error: f.OQ })
            .trim()
            .min(1, f.OQ),
          industry: p.lq(p.Yj({ invalid_type_error: f.$Y })),
          agreeTOC: p
            .zM({ required_error: f.$G })
            .refine((e) => !0 === e, { message: f.$G }),
        }),
        _ = [
          {
            alt: "animoca",
            src: "/images/contact-us/trusted-1.svg",
            width: 110,
            height: 64,
          },
          {
            alt: "w3h",
            src: "/images/contact-us/trusted-2.svg",
            width: 112,
            height: 64,
          },
          {
            alt: "humanity",
            src: "/images/contact-us/trusted-3.svg",
            width: 160,
            height: 36.8,
          },
          {
            alt: "open-campus",
            src: "/images/contact-us/trusted-4.svg",
            width: 137,
            height: 24,
          },
          {
            alt: "ida",
            src: "/images/contact-us/trusted-5.svg",
            width: 113,
            height: 24,
          },
          {
            alt: "berabucks",
            src: "/images/contact-us/trusted-6.svg",
            width: 160,
            height: 49,
          },
          {
            alt: "help-bnk",
            src: "/images/contact-us/trusted-7.svg",
            width: 92,
            height: 48,
          },
          {
            alt: "hedera",
            src: "/images/contact-us/trusted-8.svg",
            width: 160,
            height: 50,
          },
          {
            alt: "soneium",
            src: "/images/contact-us/trusted-9.svg",
            width: 170,
            height: 36,
          },
          {
            alt: "varmeta",
            src: "/images/contact-us/trusted-10.svg",
            width: 170,
            height: 24,
          },
          {
            alt: "monad",
            src: "/images/contact-us/trusted-11.svg",
            width: 170,
            height: 32,
          },
        ];
      function v() {
        let e =
            _.reduce((e, t) => {
              let { width: r } = t;
              return e + 0.8 * r;
            }, 0) +
            (_.length - 1) * 32,
          t = _.map((e) => {
            let { src: t, alt: r, width: a, height: i } = e;
            return (0, s.jsx)(
              o.default,
              { src: t, alt: r, width: 0.8 * a, height: 0.8 * i },
              r
            );
          });
        return (0, s.jsxs)("div", {
          className: "container-tablet pt-28 md:pt-12 xl:hidden text-center",
          children: [
            (0, s.jsx)("div", {
              className: "text-text-lg md:text-display-xs text-gray-600 mb-8",
              children: "Ecosystem",
            }),
            (0, s.jsxs)("div", {
              className: "w-full overflow-hidden relative",
              children: [
                (0, s.jsxs)("div", {
                  className: "absolute inset-x-0 inset-y-0 z-[2] lg:hidden",
                  children: [
                    (0, s.jsx)("div", {
                      className: "w-[5rem] h-full absolute left-0 top-0",
                      style: {
                        background:
                          "linear-gradient(270deg, transparent 0%, rgb(240 249 255) 100%)",
                      },
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "w-[5rem] h-full absolute right-0 top-0 rotate-180",
                      style: {
                        background:
                          "linear-gradient(270deg, transparent 0%, rgb(240 249 255) 100%)",
                      },
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "hidden lg:flex flex-col gap-6 lg:gap-8",
                  children: [
                    (0, s.jsx)("div", {
                      className: "flex justify-between h-16",
                      children: _.slice(0, 5).map((e) => {
                        let { src: t, alt: r, width: a, height: i } = e;
                        return (0, s.jsx)(
                          o.default,
                          { src: t, alt: r, width: a, height: i },
                          r
                        );
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex justify-between h-16",
                      children: _.slice(5).map((e) => {
                        let { src: t, alt: r, width: a, height: i } = e;
                        return (0, s.jsx)(
                          o.default,
                          { src: t, alt: r, width: a, height: i },
                          r
                        );
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "relative h-[80px] lg:hidden",
                  style: { width: e },
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "w-full h-full flex justify-around absolute whitespace-nowrap animate-init-scroll-horizontal left-0",
                      children: t,
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "w-full h-full flex justify-around absolute whitespace-nowrap animate-scroll-horizontal left-full",
                      children: t,
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "w-full h-full flex justify-around absolute whitespace-nowrap animate-scroll-horizontal left-full",
                      style: { animationDelay: "20s" },
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var N = r(77632);
      function w(e) {
        let {
          imageSrc: t,
          title: r,
          description: a,
          linkText: i,
          link: l,
          isOutside: n,
          isDisabled: c,
        } = e;
        return (0, s.jsxs)(d(), {
          href: l,
          target: n ? "_blank" : "_self",
          className: (0, h.A)(
            "basis-1/2 shadow-xs rounded-xl border-[1px] border-gray-200 bg-white group hover:bg-primary-25 hover:border-primary-600 transition-all duration-150 outline outline-1 outline-transparent hover:outline-primary-600",
            { "pointer-events-none": c }
          ),
          children: [
            (0, s.jsxs)("div", {
              className: "px-5 py-4 flex flex-row lg:flex-col gap-4 lg:ap-2",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "bg-gray-100 size-8 lg:size-14 p-2 lg:p-3.5 rounded-full shrink-0 group-hover:bg-primary-100",
                  children: (0, s.jsx)(o.default, {
                    className: "h-auto",
                    src: "/images/contact-us/".concat(t, ".svg"),
                    alt: "file",
                    width: 28,
                    height: 28,
                  }),
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("div", {
                      className: "text-text-md font-bold text-gray-900 mb-2",
                      children: r,
                    }),
                    (0, s.jsx)("div", {
                      className: "text-text-sm text-gray-600 w-[190px]",
                      children: a,
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: (0, h.A)(
                "px-5 py-4 border-t-[1px] border-gray-200 flex gap-2 items-center text-text-sm font-bold group-hover:border-primary-600 group-hover:border-t-2 h-[52px] group-hover:pt-[15px]",
                { "text-gray-300": c },
                { "text-primary-700": !c }
              ),
              children: [i, " ", (0, s.jsx)(N.A, { size: 20 })],
            }),
          ],
        });
      }
      let j = () =>
        (0, s.jsxs)("div", {
          className: "max-w-full lg:w-[576px] text-center mx-auto",
          children: [
            (0, s.jsx)("div", {
              className:
                "w-fit rounded-full bg-success-50 p-2.5 mx-auto mb-8 lg:mb-6",
              children: (0, s.jsx)("div", {
                className: "rounded-full bg-success-100 p-2.5",
                children: (0, s.jsx)(o.default, {
                  className: "h-auto",
                  src: "/images/contact-us/check-circle.svg",
                  alt: "check circle",
                  width: 28,
                  height: 28,
                }),
              }),
            }),
            (0, s.jsx)("div", {
              className:
                "text-display-xs lg:text-display-sm font-black text-gray-900 mb-4 lg:mb-3",
              children: "Thanks for reaching out!",
            }),
            (0, s.jsx)("div", {
              className: "text-text-md text-gray-600",
              children:
                "Our team is excited to connect with you and we will get in touch shortly.",
            }),
            (0, s.jsx)("hr", { className: "bg-gray-200 my-8" }),
            (0, s.jsx)("div", {
              className:
                "text-text-lg lg:text-display-xs font-black text-gray-900 mb-2 lg:mb-4",
              children: "Looking for something else?",
            }),
            (0, s.jsx)("div", {
              className: "text-text-sm lg:text-text-md text-gray-600 mb-6",
              children: "Check out these resources selected for you.",
            }),
            (0, s.jsxs)("div", {
              className:
                "flex gap-5 justify-between flex-col md:flex-row text-left",
              children: [
                (0, s.jsx)(w, {
                  imageSrc: "stars",
                  title: "T3 Insights",
                  description:
                    "Read more on industry news, product announcements",
                  linkText: "Read T3 Insights",
                  link: "https://blog.terminal3.io",
                }),
                (0, s.jsx)(w, {
                  imageSrc: "file-code",
                  title: "Documentation",
                  description:
                    "Explore our technology and build on our platform",
                  linkText: "Read Documentation",
                  link: "https://docs.terminal3.io/",
                  isOutside: !0,
                }),
              ],
            }),
          ],
        });
      function E() {
        let [e, t] = (0, a.useState)(!1),
          [r, c] = (0, a.useState)(0),
          g = (0, a.useRef)(null),
          {
            control: p,
            register: f,
            handleSubmit: y,
            formState: { errors: N, isValid: w, isSubmitting: E },
          } = (0, l.mN)({
            resolver: (0, u.u)(b),
            defaultValues: { agreeTOC: !0 },
            mode: "onBlur",
          }),
          T = y(async (e) => {
            if (r > 0 || !g.current) return;
            let s = await g.current.executeAsync();
            if (s) {
              Reflect.deleteProperty(e, "agreeTOC");
              try {
                await (0, x.r)({ ...e, token: s }), t(!0);
              } catch (e) {
                g.current.reset(), n.oR.error(e);
              }
            }
          });
        return (0, s.jsxs)("section", {
          className:
            "px-4 pt-16 pb-12 md:px-15 xl:px-20 xl:py-24 bg-primary-50 relative xl:min-h-0",
          children: [
            (0, s.jsx)("div", {
              className: (0, h.A)(
                "absolute left-0 top-0 md:h-[650px] xl:h-[480px] w-full bg-[url('/images/contact-us/grainy-bg.png')] bg-no-repeat bg-cover contact:ps-0 xl:ps-20",
                { "h-[1004px]": !e, "h-[1101px]": e }
              ),
              children: (0, s.jsx)("div", {
                className: "container-max container-tablet hidden xl:block",
                children: (0, s.jsxs)("div", {
                  className:
                    "absolute bottom-12 text-base-white flex flex-col items-stretch justify-end",
                  children: [
                    (0, s.jsx)("div", {
                      className: "font-black text-display-lg mb-5",
                      children: "How can we help?",
                    }),
                    (0, s.jsx)("div", {
                      className: "text-display-xs max-w-[560px]",
                      children:
                        "Tell us more about your project and find out how T3 AI can empower a secure future for your business and your users.",
                    }),
                  ],
                }),
              }),
            }),
            (0, s.jsxs)("div", {
              className:
                "container-max container-tablet flex-1 flex gap-12 xl:gap-16 flex-col xl:flex-row relative",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "basis-1/2 hidden xl:flex flex-col justify-center mt-[22rem]",
                  children: [
                    (0, s.jsx)("div", {
                      className: "text-display-xs text-gray-600 mb-8",
                      children: "Ecosystem",
                    }),
                    (0, s.jsx)("div", {
                      className: "h-[160px]",
                      children: (0, s.jsx)("div", {
                        className: "grid grid-cols-8 gap-8 items-center",
                        children: _.map((e, t) => {
                          let { src: r, alt: a, width: i, height: l } = e;
                          return (0, s.jsx)(
                            o.default,
                            {
                              src: r,
                              alt: a,
                              width: i,
                              height: l,
                              className: (0, h.A)(
                                "max-w-[auto] shrink mx-auto col-span-2",
                                { "col-span-3": 8 === t }
                              ),
                            },
                            a
                          );
                        }),
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "xl:hidden",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "font-bold text-base-white text-display-md mb-4",
                      children: "How can we help?",
                    }),
                    (0, s.jsx)("div", {
                      className: "text-text-lg text-primary-200",
                      children:
                        "Tell us more about your project and find out how T3 AI can empower a secure future for your business and your users.",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "shadow-md md:shadow-3xl rounded-3xl bg-white py-12 px-6 xl:px-12 xl:max-w-[576px]",
                  children: e
                    ? (0, s.jsx)(j, {})
                    : (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("form", {
                          onSubmit: T,
                          children: (0, s.jsxs)("div", {
                            className: "flex flex-col gap-4 xl:gap-6 xl:mb-4",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex justify-between gap-2 xl:gap-4",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "w-[calc(50%_-_4px)]",
                                    children: (0, s.jsx)(m.FO, {
                                      register: f,
                                      label: "First name",
                                      placeholder: "First name",
                                      name: "first_name",
                                      error: N.first_name,
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "w-[calc(50%_-_2px)]",
                                    children: (0, s.jsx)(m.FO, {
                                      register: f,
                                      label: "Last name",
                                      placeholder: "Last name",
                                      name: "last_name",
                                      error: N.last_name,
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)(m.FO, {
                                label: "Business email",
                                placeholder: "you@company.com",
                                register: f,
                                name: "email",
                                error: N.email,
                              }),
                              (0, s.jsx)(m.$k, {
                                label: "Industry",
                                optional: !0,
                                control: p,
                                name: "industry",
                                placeholder: "Select industry",
                                options: x.W,
                              }),
                              (0, s.jsx)(m.A_, {
                                register: f,
                                name: "message",
                                label: "Message",
                                placeholder:
                                  "Leave us a message. Tell us more about your project, needs, and timeline.",
                                error: N.message,
                              }),
                              (0, s.jsx)("input", {
                                type: "checkbox",
                                name: "agree",
                                className: "hidden",
                                value: r,
                                onChange: (e) => {
                                  e.currentTarget.checked && c(1);
                                },
                                tabIndex: -1,
                                autoComplete: "off",
                              }),
                              (0, s.jsx)("div", {
                                className: "flex gap-3 mt-2 xl:mt-0",
                                children: (0, s.jsxs)("label", {
                                  className: "flex gap-3 xl:mb-4",
                                  children: [
                                    (0, s.jsx)("input", {
                                      type: "checkbox",
                                      className:
                                        "size-5 bg-base-white border-gray-300 rounded-md accent-primary-700 text-primary-700 focus:ring-primary-700",
                                      ...f("agreeTOC"),
                                    }),
                                    (0, s.jsxs)("span", {
                                      className:
                                        "text-text-xs xl:text-text-sm text-gray-400",
                                      children: [
                                        "By submitting this form, you are confirming that you have read and agree to our",
                                        " ",
                                        (0, s.jsx)(d(), {
                                          href: "/privacy-policy",
                                          target: "_blank",
                                          className:
                                            "underline underline-offset-[3px]",
                                          children: "Privacy Policy",
                                        }),
                                        " ",
                                        "and",
                                        " ",
                                        (0, s.jsx)(d(), {
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
                              (0, s.jsx)(m.$n, {
                                size: "lg",
                                className: "w-full",
                                type: "submit",
                                isDisabled: !w,
                                isLoading: E,
                                children: "Submit",
                              }),
                              (0, s.jsx)("div", {
                                className: "-mt-4",
                                children: (0, s.jsx)(i.A, {
                                  ref: g,
                                  size: "invisible",
                                  sitekey:
                                    "6Lc5RIwnAAAAAJ6C7Xqn0E04dnv_keFw0oTrLgSs",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                }),
              ],
            }),
            (0, s.jsx)(v, {}),
          ],
        });
      }
    },
    76897: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 62797));
    },
    91695: (e, t, r) => {
      "use strict";
      var s = r(5922),
        a = r(59685);
      t.G = function (e) {
        if (!a.validate(e)) return !1;
        let t = e.split("@")[1];
        return !s.has(t);
      };
    },
    96806: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => d });
      var s = r(91371),
        a = r(14017),
        i = r(12251),
        l = r(97892),
        n = r(71721),
        o = class {
          fetch(e) {
            return (0, n.BU)(this, null, function* () {
              let {
                  url: t,
                  withHeaders: r = !1,
                  shouldNotify: s = !0,
                  fetchOpt: a,
                  altToken: o,
                } = e,
                c = t.startsWith("/") ? "" : "/",
                d = this.basePath + c + t,
                u = (null == a ? void 0 : a.headers)
                  ? new Headers(a.headers)
                  : new Headers(),
                h = this.getToken();
              o
                ? u.set("Authorization", "Bearer ".concat(o))
                : h && u.set("Authorization", "Bearer ".concat(h));
              try {
                let e = this.getHeaders(u),
                  t = yield fetch(
                    d,
                    (0, n.ko)((0, n.IA)({}, a), { headers: e })
                  );
                if (t.status === l.wb.NOT_FOUND) {
                  let e = new i.hD(l.p2, t.status, d);
                  throw (s && this.notify.error(l.p2), e);
                }
                if (t.status === l.wb.TOO_MANY_REQUESTS)
                  throw new i.hD(l.Wm, t.status, d);
                let o = yield t.json();
                if (t.status >= l.wb.BAD_REQUEST) {
                  let e = {};
                  r &&
                    t.headers.forEach((t, r) => {
                      e[r] = t;
                    });
                  let a = new i.hD(o, t.status, d, e);
                  throw (s && this.notify.error(a.message), a);
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
        c = r(18922);
      let d = new o(a.NM, c.v, s.oR);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [7255, 2697, 507, 118, 9523, 5602, 5148, 1860, 2086, 7358], () =>
      t(76897)
    ),
      (_N_E = e.O());
  },
]);
