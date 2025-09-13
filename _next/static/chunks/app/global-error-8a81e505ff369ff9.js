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
    _ = new e.Error().stack;
  _ &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[_] = "5aa98aa7-5480-487a-9b67-afa041e0b443"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-5aa98aa7-5480-487a-9b67-afa041e0b443"));
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
  [4219],
  {
    14017: (e, _, n) => {
      "use strict";
      n.d(_, { HR: () => l, Li: () => a, NM: () => s });
      var E = n(60118),
        t = n(3482),
        r = n(37811);
      let T = t.z
          .string()
          .refine((e) => "true" === e || "false" === e)
          .transform((e) => "true" === e),
        i = (0, E.w)({
          server: {
            SENTRY_DSN: t.z.string(),
            SENTRY_ENABLED: T,
            SENTRY_ENVIRONMENT: t.z.string(),
            T3_WEBSITE_GHOST_API_KEY: t.z.string(),
            T3_WEBSITE_GHOST_ADMIN_KEY: t.z.string(),
            T3_WEBSITE_GHOST_API_URL: t.z.string().url(),
          },
          client: {
            NEXT_PUBLIC_T3_WEBSITE_BASE_API_URL: t.z.string().url(),
            NEXT_PUBLIC_SENTRY_ENABLED: T,
            NEXT_PUBLIC_T3_WEBSITE_ANALYTICS_ID: t.z.string().min(1),
          },
          runtimeEnv: {
            NEXT_PUBLIC_T3_WEBSITE_BASE_API_URL: "https://api.terminal3.io/api",
            NEXT_PUBLIC_T3_WEBSITE_ANALYTICS_ID: "G-DVBSG810QF",
            NEXT_PUBLIC_SENTRY_ENABLED: "true",
            SENTRY_DSN: r.env.SENTRY_DSN,
            SENTRY_ENABLED: r.env.SENTRY_ENABLED,
            SENTRY_ENVIRONMENT: r.env.SENTRY_ENVIRONMENT,
            T3_WEBSITE_GHOST_API_KEY: r.env.T3_WEBSITE_GHOST_API_KEY,
            T3_WEBSITE_GHOST_ADMIN_KEY: r.env.T3_WEBSITE_GHOST_ADMIN_KEY,
            T3_WEBSITE_GHOST_API_URL: r.env.T3_WEBSITE_GHOST_API_URL,
          },
        }),
        s = "https://api.terminal3.io/api",
        a = i.NEXT_PUBLIC_SENTRY_ENABLED,
        l = i.NEXT_PUBLIC_T3_WEBSITE_ANALYTICS_ID;
    },
    15324: (e, _, n) => {
      Promise.resolve().then(n.bind(n, 52374));
    },
    18922: (e, _, n) => {
      "use strict";
      n.d(_, { v: () => t });
      var E = n(38357);
      let t = n(14017).Li
        ? {
            error(e) {
              let _ = e;
              e instanceof Error ||
                (_ = Error("Non-Error rejection: ".concat(JSON.stringify(e)))),
                E.Cp(_);
            },
          }
        : console;
    },
    52374: (e, _, n) => {
      "use strict";
      n.r(_), n.d(_, { default: () => T });
      var E = n(9598),
        t = n(11950),
        r = n(18922);
      function T(e) {
        let { error: _, reset: n } = e;
        return (
          (0, t.useEffect)(() => {
            r.v;
          }, [_]),
          (0, E.jsxs)("html", {
            children: [
              (0, E.jsx)("title", { children: "T3 AI" }),
              (0, E.jsxs)("body", {
                children: [
                  (0, E.jsx)("h2", { children: "Something went wrong!" }),
                  (0, E.jsx)("button", {
                    onClick: () => n(),
                    children: "Try again",
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  (e) => {
    var _ = (_) => e((e.s = _));
    e.O(0, [118, 5148, 1860, 2086, 7358], () => _(15324)), (_N_E = e.O());
  },
]);
