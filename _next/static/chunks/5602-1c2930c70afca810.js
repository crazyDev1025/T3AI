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
    l = new e.Error().stack;
  l &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[l] = "25ebc454-d2f3-476f-926c-9ffb1d7158ab"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-25ebc454-d2f3-476f-926c-9ffb1d7158ab"));
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
  [5602],
  {
    780: (e, l, t) => {
      "use strict";
      t.d(l, { MenuStoreProvider: () => r, c: () => a });
      var s = t(9598),
        c = t(11950);
      let i = (0, c.createContext)({ isMenuOpen: !1, setIsMenuOpen: () => {} }),
        r = (e) => {
          let { children: l } = e,
            [t, r] = (0, c.useState)(!1);
          return (0, s.jsx)(i.Provider, {
            value: {
              isMenuOpen: t,
              setIsMenuOpen: (e) => {
                if (void 0 !== e) return void r(e);
                let [l] = document.getElementsByClassName("desktop-navmenu");
                l &&
                  r(
                    [...l.querySelectorAll("button[aria-expanded]")].some(
                      (e) => "true" === e.getAttribute("aria-expanded")
                    )
                  );
              },
            },
            children: l,
          });
        };
      function a() {
        return (0, c.useContext)(i);
      }
    },
    1549: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { DecentralizedAtom: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 37, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 37 36",
            ...t,
            children: [
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M34.906 21.94c-1.104-.414-2.631-.663-4.325-.663-1.693 0-3.22.258-4.325.663-1.003.377-1.62.846-1.62 1.343s.617.967 1.62 1.344c1.104.414 2.632.663 4.325.663 1.694 0 3.221-.258 4.325-.663 1.003-.377 1.62-.847 1.62-1.344 0-.497-.617-.966-1.62-1.343Zm-10.27 4.997V25.05c.35.285.82.543 1.39.755 1.178.442 2.788.708 4.555.708s3.387-.267 4.555-.708c.57-.212 1.04-.47 1.39-.755v1.887c0 .487-.617.966-1.62 1.343-1.104.414-2.631.663-4.325.663-1.693 0-3.22-.258-4.325-.663-1.003-.377-1.62-.846-1.62-1.343Zm0 3.524v-1.886c.35.285.82.543 1.39.754 1.178.442 2.788.709 4.555.709s3.387-.267 4.555-.709c.57-.211 1.04-.47 1.39-.754v1.886c0 .488-.617.966-1.62 1.344-1.104.414-2.631.662-4.325.662-1.693 0-3.22-.258-4.325-.662-1.003-.378-1.62-.847-1.62-1.344Zm0 3.534v-1.887c.35.286.82.543 1.39.755 1.178.441 2.788.708 4.555.708s3.387-.267 4.555-.708c.57-.212 1.04-.47 1.39-.755v1.887c0 .487-.617.966-1.62 1.343-1.104.414-2.631.663-4.325.663-1.693 0-3.22-.258-4.325-.663-1.003-.377-1.62-.846-1.62-1.343Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M22.876 28.571c-.064 0-.129 0-.193-.027-3.837-1.132-8.678-4.353-12.948-8.632-7.509-7.5-11.005-15.763-7.969-18.8 3.037-3.036 11.291.46 18.791 7.96 3.497 3.497 6.276 7.325 7.813 10.767a.69.69 0 0 1-1.26.561c-1.473-3.294-4.142-6.966-7.528-10.352C12.165 2.63 4.886-.056 2.742 2.087c-2.144 2.144.543 9.423 7.96 16.84 4.113 4.113 8.742 7.214 12.358 8.281.368.11.57.488.47.856a.696.696 0 0 1-.663.497l.01.01Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M4.845 28.97c-1.28 0-2.328-.35-3.064-1.095-1.537-1.537-1.482-4.39.147-8.034 1.537-3.442 4.307-7.26 7.813-10.766 3.496-3.497 7.324-6.276 10.766-7.813 3.644-1.629 6.497-1.684 8.034-.147 3.036 3.036-.46 11.29-7.96 18.79-5.669 5.669-11.77 9.055-15.727 9.055l-.009.01ZM25.43 1.381c-1.168 0-2.668.386-4.37 1.14-3.295 1.473-6.967 4.142-10.353 7.528C3.29 17.467.603 24.746 2.747 26.89c2.144 2.144 9.423-.543 16.84-7.96S29.69 4.234 27.547 2.09c-.479-.478-1.206-.718-2.126-.718l.01.01Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M15.164 17.925a3.452 3.452 0 0 1 0-6.902 3.452 3.452 0 0 1 0 6.902Zm0-5.521c-1.141 0-2.07.93-2.07 2.07 0 1.141.929 2.07 2.07 2.07 1.14 0 2.07-.929 2.07-2.07 0-1.14-.93-2.07-2.07-2.07Z",
                fill: "#F6F9FC",
              }),
            ],
          }),
        });
      };
    },
    2465: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { AccordionHeader: () => d });
      var s = t(9598),
        c = t(1231),
        i = t(61668),
        r = t(11676),
        a = t(45602),
        n = t(87454),
        o = t(57503);
      function d(e) {
        let { children: l, className: t = "" } = e,
          { isExpanded: d, index: h } = (0, o.useAccordionItem)(),
          { setActiveIndex: x, id: u } = (0, n.useAccordion)();
        return (0, s.jsxs)(a.$n, {
          "aria-expanded": d,
          "aria-controls": "accordion-panel-".concat(u, "-").concat(h),
          id: "accordion-button-".concat(u, "-").concat(h),
          onPress: () => {
            if (d) return void x(-1);
            x(h);
          },
          variant: "text",
          className: (0, r.QP)(
            "w-full flex justify-between text-gray-900 text-text-lg font-medium",
            t
          ),
          type: "submit",
          children: [
            l,
            " ",
            (0, s.jsx)("span", {
              className: "text-gray-400",
              children: (0, s.jsx)(i.A, {
                className: (0, c.A)("transition-transform", {
                  "transform rotate-180": d,
                }),
              }),
            }),
          ],
        });
      }
    },
    2754: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { SubMenu: () => p });
      var s = t(9598),
        c = t(47275),
        i = t(76859),
        r = t(11950),
        a = t(1231),
        n = t(53371),
        o = t(20260),
        d = t(35028),
        h = t(45602);
      function x(e) {
        let { menuLogo: l, pageTitle: t, menuItems: c } = e,
          [i, x] = (0, r.useState)(!1),
          u = (0, r.useRef)(null),
          [v, p] = (0, r.useState)({ input: [0, 1], output: ["0%", "100%"] }),
          { scrollYProgress: f } = (0, n.L)(),
          m = (0, o.G)(f, v.input, v.output);
        return (
          (0, r.useEffect)(() => {
            function e() {
              if (i && u.current) {
                let { width: e } = u.current.getBoundingClientRect(),
                  l = u.current.querySelectorAll(".anchor-links > a"),
                  t = ["0px"],
                  s = [0];
                [...l].forEach((e) => {
                  let { width: l, left: s } = e.getBoundingClientRect();
                  t.push("".concat(Math.floor(s + l / 2), "px"));
                }),
                  c.forEach((e) => {
                    let l = document.getElementById(e.id);
                    if (l) {
                      let e = l.getBoundingClientRect();
                      s.push(
                        (e.top + document.documentElement.scrollTop) /
                          (document.documentElement.scrollHeight -
                            document.documentElement.clientHeight)
                      );
                    }
                  }),
                  t.push("".concat(e, "px")),
                  s.push(1),
                  p({ input: s, output: t });
              }
            }
            return (
              window.addEventListener("resize", e),
              e(),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, [i]),
          (0, r.useEffect)(() => {
            if (!u.current) return;
            let e = [...document.querySelectorAll("[data-section]")],
              l = new IntersectionObserver(
                function (e) {
                  e.forEach((e) => {
                    var l;
                    let t = e.target.getAttribute("data-section"),
                      s =
                        null == (l = u.current)
                          ? void 0
                          : l.querySelector('a[href="#'.concat(t, '"]'));
                    if (!e.isIntersecting) {
                      null == s || s.removeAttribute("data-active");
                      return;
                    }
                    null == s || s.setAttribute("data-active", "true");
                  });
                },
                { rootMargin: "-2% 0% -99% 0%", threshold: 0 }
              );
            return (
              e.forEach((e) => {
                l.observe(e);
              }),
              function () {
                l.disconnect();
              }
            );
          }, []),
          (0, r.useEffect)(() => {
            if (u.current)
              return (
                document.addEventListener("scroll", e),
                function () {
                  document.removeEventListener("scroll", e);
                }
              );
            function e() {
              var e;
              0 ===
              (null == (e = u.current) ? void 0 : e.getBoundingClientRect().top)
                ? x(!0)
                : x(!1);
            }
          }, []),
          (0, s.jsx)("div", {
            className:
              "sticky top-0 z-30 will-change-scroll -mb-[--header-height] h-[--header-height]",
            ref: u,
            children: (0, s.jsx)("div", {
              className: (0, a.A)(
                "bg-gray-50 lg:px-20 shadow-md gap-6 hidden h-full",
                { "shadow-md lg:block": i }
              ),
              children: (0, s.jsxs)("div", {
                className:
                  "container-max flex items-center h-full w-full gap-20",
                children: [
                  i &&
                    (0, s.jsxs)(h.$n, {
                      variant: "ghost",
                      onPress: () => {
                        (document.body.scrollTop = 0),
                          (document.documentElement.scrollTop = 0);
                      },
                      className:
                        "flex gap-2 text-text-xl font-black text-gray-500 p-0",
                      children: [l, t],
                    }),
                  (0, s.jsx)("div", {
                    className: (0, a.A)(
                      "flex justify-between flex-1 anchor-links",
                      { "justify-around": c.length < 4 }
                    ),
                    children: c.map((e) =>
                      (0, s.jsx)(
                        h.$n,
                        {
                          href: "#".concat(e.id),
                          variant: "text",
                          size: "sm",
                          className:
                            "text-text-sm font-bold text-gray-500 data-[active]:text-primary-600 p-0 justify-start",
                          children: e.text,
                        },
                        e.id
                      )
                    ),
                  }),
                  i &&
                    (0, s.jsx)(h.$n, {
                      href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                      size: "lg",
                      children: "Buy T3",
                    }),
                  i &&
                    (0, s.jsx)(d.P.div, {
                      className:
                        "bottom-0 left-0 h-[6px] rounded-r-full absolute bg-primary-600 origin-left",
                      style: { width: m },
                      transition: { type: "tween" },
                    }),
                ],
              }),
            }),
          })
        );
      }
      var u = t(11676);
      function v(e) {
        let { menuLogo: l, pageTitle: t, menuItems: c } = e,
          [i, x] = (0, r.useState)(-1),
          [v, p] = (0, r.useState)(!1),
          { scrollYProgress: f } = (0, n.L)(),
          m = (0, o.G)(f, [0, 1], ["0%", "100%"]);
        return (
          (0, r.useEffect)(() => {
            let e = [...document.querySelectorAll("[data-section]")],
              l = new IntersectionObserver(
                function (e) {
                  let l = document.getElementById("link-container");
                  e.forEach((e) => {
                    let t = e.target.getAttribute("data-section"),
                      s =
                        null == l
                          ? void 0
                          : l.querySelector('a[href="#'.concat(t, '"]'));
                    if (!e.isIntersecting) {
                      null == s || s.removeAttribute("data-active");
                      return;
                    }
                    null == s || s.setAttribute("data-active", "true");
                  });
                },
                { rootMargin: "-2% 0% -99% 0%", threshold: 0, root: document }
              );
            return (
              e.forEach((e) => {
                l.observe(e);
              }),
              function () {
                l.disconnect();
              }
            );
          }, [i]),
          (0, r.useEffect)(() => {
            let e = document.querySelector("#sub-banner");
            if (e)
              return (
                document.addEventListener("scroll", l),
                function () {
                  document.removeEventListener("scroll", l);
                }
              );
            function l() {
              0 >= ((null == e ? void 0 : e.getBoundingClientRect().top) || 999)
                ? p(!0)
                : p(!1);
            }
          }, []),
          (0, s.jsxs)("div", {
            className: (0, u.QP)(
              (0, a.A)(
                "z-30 fixed w-full top-0 bg-white shadow-md opacity-0 -translate-y-full transition-transform duration-300 overflow-hidden",
                { "opacity-1 translate-y-0": v, "rounded-b-xl": i > -1 }
              )
            ),
            children: [
              v &&
                (0, s.jsx)(d.P.div, {
                  className:
                    "top-0 left-0 h-[6px] rounded-r-full absolute bg-primary-600 origin-left",
                  style: { width: m },
                }),
              (0, s.jsx)(h.nD, {
                activeIdx: i,
                onChange: x,
                children: (0, s.jsxs)(h.As, {
                  children: [
                    (0, s.jsx)(h.u, {
                      className:
                        "p-4 min-h-[72px] border-b border-solid border-gray-100 md:px-15",
                      children: (0, s.jsxs)("div", {
                        className:
                          "flex items-center gap-2 font-black text-gray-500 text-text-xl",
                        children: [l, " ", t],
                      }),
                    }),
                    (0, s.jsxs)(h.ub, {
                      children: [
                        (0, s.jsx)("div", {
                          id: "link-container",
                          children: c.map((e) =>
                            (0, s.jsx)(
                              h.$n,
                              {
                                href: "#".concat(e.id),
                                variant: "ghost",
                                className:
                                  "w-full justify-start data-[active]:text-primary-600 hover:text-primary-600 hover:!bg-transparent",
                                onClick: () => x(-1),
                                children: e.text,
                              },
                              e.id
                            )
                          ),
                        }),
                        (0, s.jsx)("div", {
                          className: "px-4 py-4 bg-gray-100",
                          children: (0, s.jsx)(h.$n, {
                            href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                            size: "lg",
                            className: "w-full",
                            children: "Buy T3",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function p(e) {
        return (0, i.Ub)(c.g0)
          ? (0, s.jsx)(x, { ...e })
          : (0, s.jsx)(v, { ...e });
      }
    },
    2870: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { Header: () => j });
      var s = t(9598),
        c = t(11950),
        i = t(30027),
        r = t.n(i),
        a = t(14092),
        n = t(1231),
        o = t(34053),
        d = t(96838),
        h = t(61589),
        x = t(20704),
        u = t(35028),
        v = t(45602),
        p = t(780),
        f = t(76859),
        m = t(54975);
      function j() {
        let e = (0, a.usePathname)(),
          l = "/" === e,
          t =
            l ||
            [
              "/privacy-policy",
              "/terms-of-service",
              "/solutions/gaming",
              "/products/ai",
              "/waitlist",
              "/report/verifiable-private-identity",
            ].includes(e),
          i = e.includes("/products/"),
          { isOpen: j, onToggle: g, onClose: C } = (0, f.j1)(),
          { setIsMenuOpen: w } = (0, p.c)(),
          [E, Z] = (0, c.useState)("solutions"),
          [M, y] = (0, c.useState)(!0),
          [b, L] = (0, c.useState)(!0),
          A = (0, c.useRef)(null);
        return (
          (0, c.useEffect)(() => {
            w(j);
          }, [j]),
          (0, c.useEffect)(() => {
            let e = window.scrollY,
              t = () => {
                let t = window.scrollY,
                  s = e > t;
                (e = t),
                  (l && t >= 3800) || (!l && t >= 368) ? L(!1) : L(!0),
                  M !== s && y(s);
              };
            return (
              window.addEventListener("scroll", t),
              () => {
                window.removeEventListener("scroll", t);
              }
            );
          }, [M]),
          (0, s.jsxs)("header", {
            className: (0, n.A)(
              "h-[--header-height] lg:h-[--header-height] border-gray-100 lg:px-20 md:px-15 px-4 overflow-hidden w-full z-[31] transition-all shadow-md",
              {
                sticky: !i,
                "bg-gray-25 border-b": !t || j,
                "bg-[rgba(19,30,51,0.1)] backdrop-blur-sm": t && b,
                "bg-[rgba(252,252,253,0.95)] backdrop-blur-sm": t && !b,
                "-top-[--header-height]": !M,
                "top-0": M,
              }
            ),
            ref: A,
            children: [
              (0, s.jsxs)("div", {
                className:
                  "container-max flex items-center lg:justify-between xl:gap-20 w-full h-full",
                children: [
                  ("default" === E || !j) &&
                    (0, s.jsxs)(r(), {
                      href: "/",
                      className: "flex items-center gap-[10px]",
                      children: [
                        (0, s.jsx)(v.bh, {
                          variant: t && b && !j ? "white" : "default",
                        }),
                        " ",
                        (0, s.jsx)(v.xM, {
                          variant: t && b && !j ? "white" : "default",
                        }),
                      ],
                    }),
                  (0, s.jsx)(x.N, {
                    children:
                      j &&
                      "default" !== E &&
                      (0, s.jsx)(u.P.div, {
                        initial: { x: 20, opacity: 0 },
                        animate: { x: 0, opacity: 1 },
                        transition: { ease: "easeOut", duration: 0.1 },
                        children: (0, s.jsxs)(v.$n, {
                          variant: "text",
                          className: "text-primary-700",
                          onPress: () => Z("default"),
                          children: [(0, s.jsx)(o.A, {}), " Back"],
                        }),
                      }),
                  }),
                  (0, s.jsxs)("nav", {
                    className:
                      "text-gray-600 text-text-md font-bold gap-10 hidden lg:flex desktop-navmenu",
                    children: [
                      (0, s.jsx)(v.he, {
                        title: "Products menu",
                        triggerText: m.ZE.title,
                        variant: t && b ? "transparent" : "default",
                        children: (0, s.jsx)("div", {
                          className: "flex flex-col",
                          children: (0, s.jsx)("div", {
                            className: "p-3 max-w-[350px] flex flex-col gap-2",
                            children: m.ZE.items.map((e) => {
                              let {
                                icon: l,
                                title: t,
                                subtitle: c,
                                link: i,
                              } = e;
                              return (0, s.jsx)(
                                v.Op,
                                {
                                  icon: (0, s.jsx)(l, {}),
                                  title: t,
                                  subtitle: c,
                                  href: i,
                                },
                                t
                              );
                            }),
                          }),
                        }),
                      }),
                      (0, s.jsx)(v.he, {
                        title: "Solutions menu",
                        triggerText: m.lN.title,
                        variant: t && b ? "transparent" : "default",
                        children: (0, s.jsx)("div", {
                          className:
                            "max-w-[1098px] p-5 pt-6 flex flex-col gap-6",
                          children: (0, s.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "text-text-sm text-primary-600 font-bold",
                                children: "Use cases",
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex gap-6",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "flex flex-col gap-2 basis-1/2",
                                    children: m.lN.items
                                      .slice(0, 3)
                                      .map((e) => {
                                        let {
                                          icon: l,
                                          title: t,
                                          subtitle: c,
                                          link: i,
                                        } = e;
                                        return (0, s.jsx)(
                                          v.Op,
                                          {
                                            icon: (0, s.jsx)("span", {
                                              className:
                                                "w-12 h-12 flex justify-center items-center bg-primary-100 rounded-3xl",
                                              children: (0, s.jsx)(l, {}),
                                            }),
                                            title: t,
                                            subtitle: c,
                                            href: i,
                                          },
                                          t
                                        );
                                      }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "flex flex-col gap-2 basis-1/2",
                                    children: m.lN.items
                                      .slice(3, 6)
                                      .map((e) => {
                                        let {
                                          icon: l,
                                          title: t,
                                          subtitle: c,
                                          link: i,
                                        } = e;
                                        return (0, s.jsx)(
                                          v.Op,
                                          {
                                            icon: (0, s.jsx)("span", {
                                              className:
                                                "w-12 h-12 flex justify-center items-center bg-primary-100 rounded-3xl",
                                              children: (0, s.jsx)(l, {}),
                                            }),
                                            title: t,
                                            subtitle: c,
                                            href: i,
                                          },
                                          t
                                        );
                                      }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "flex flex-col gap-2 basis-1/2",
                                    children: m.lN.items.slice(6).map((e) => {
                                      let {
                                        icon: l,
                                        title: t,
                                        subtitle: c,
                                        link: i,
                                      } = e;
                                      return (0, s.jsx)(
                                        v.Op,
                                        {
                                          icon: (0, s.jsx)("span", {
                                            className:
                                              "w-12 h-12 flex justify-center items-center bg-primary-100 rounded-3xl",
                                            children: (0, s.jsx)(l, {}),
                                          }),
                                          title: t,
                                          subtitle: c,
                                          href: i,
                                        },
                                        t
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),

                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex gap-4 items-center shrink-0 ms-auto lg:ms-0 xl:ms-auto",
                    children: [
                      (0, s.jsx)(v.$n, {
                        href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                        size: "lg",
                        className: "hidden lg:block",
                        children: "Buy T3",
                      }),
                      (0, s.jsx)(v.$n, {
                        className: (0, n.A)(
                          "lg:hidden text-gray-700 hover:text-primary-700",
                          { "!text-gray-300 hover:!text-gray-25": t && b && !j }
                        ),
                        variant: "text",
                        onPress: () => {
                          g(), Z("default");
                        },
                        children: j
                          ? (0, s.jsx)(d.A, {
                              className: "animate-in spin-in-180",
                            })
                          : (0, s.jsx)(h.A, {
                              className: "animate-in spin-in-180",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(v.qe, {
                isOpen: j,
                onToggle: g,
                onClose: C,
                triggerRef: A,
                selectedMenu: E,
                setSelectedMenu: Z,
              }),
            ],
          })
        );
      }
    },
    3724: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { MobileMenu: () => v });
      var s = t(9598),
        c = t(11950),
        i = t(92410),
        r = t(81484),
        a = t(75391),
        n = t(14092),
        o = t(41350),
        d = t(45602),
        h = t(86733);
      function x(e) {
        let {
          title: l,
          subtitle: t,
          icon: c,
          tag: i,
          link: r,
          isOutside: a = !1,
        } = e;
        return (0, s.jsxs)(d.$n, {
          variant: "ghost",
          className:
            "flex w-full py-3 px-4 gap-4 text-primary-600 items-start h-auto min-h-[40px]",
          href: r,
          children: [
            (0, s.jsx)("div", { children: c }),
            (0, s.jsxs)("div", {
              className: "flex flex-col grow text-left",
              children: [
                (0, s.jsxs)("p", {
                  className: "text-text-md font-bold text-gray-900",
                  children: [
                    l,
                    i &&
                      (0, s.jsx)("span", {
                        className:
                          "bg-success-50 text-success-700 py-[2px] px-[10px] rounded-full text-text-sm font-medium",
                        children: i,
                      }),
                  ],
                }),
                (0, s.jsx)("p", {
                  className: "text-text-sm text-gray-600 font-normal",
                  children: t,
                }),
              ],
            }),
            (0, s.jsx)("div", {
              children: a ? (0, s.jsx)(h.A, {}) : (0, s.jsx)(o.A, {}),
            }),
          ],
        });
      }
      function u(e) {
        let { children: l, header: t } = e;
        return (0, s.jsxs)(r.lG, {
          className:
            "bg-white outline-none data-[focus-visible]:ring w-full rounded-b-xl shadow-lg animate-in overflow-y-scroll max-h-[calc(100svh-90px)]",
          children: [
            (0, s.jsxs)("div", {
              className: "py-6 flex flex-col gap-3",
              children: [
                (0, s.jsx)(a.D, {
                  className: "text-text-sm font-bold text-primary-600 px-4",
                  slot: "title",
                  children: t,
                }),
                (0, s.jsx)("div", { className: "flex flex-col", children: l }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "flex flex-col bg-gray-100",
              children: (0, s.jsx)("div", {
                className: "px-4 py-6",
                children: (0, s.jsx)(d.$n, {
                  href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                  size: "lg",
                  className: "w-full",
                  children: "Buy T3",
                }),
              }),
            }),
          ],
        });
      }
      function v(e) {
        let {
            isOpen: l,
            onToggle: t,
            onClose: h,
            triggerRef: v,
            selectedMenu: p,
            setSelectedMenu: f,
          } = e,
          m = (0, n.usePathname)();
        return (
          (0, c.useEffect)(() => {
            h();
          }, [m]),
          (0, s.jsxs)(i.A, {
            className: (e) => {
              let { isEntering: l, isExiting: t } = e;
              return "\n        "
                .concat(
                  l
                    ? "animate-in fade-in slide-in-from-top-20 ease-out duration-300"
                    : "",
                  "\n        "
                )
                .concat(
                  t
                    ? "animate-out slide-out-to-top-20 ease-in duration-75"
                    : "",
                  "\n        w-full\n        "
                );
            },
            isOpen: l,
            triggerRef: v,
            onOpenChange: t,
            offset: 0,
            containerPadding: 0,
            shouldCloseOnInteractOutside: (e) => "BUTTON" !== e.nodeName,
            children: [
              "default" === p &&
                (0, s.jsx)("div", {
                  children: (0, s.jsxs)(r.lG, {
                    className:
                      "bg-white outline-none data-[focus-visible]:ring w-full rounded-b-xl shadow-lg overflow-y-scroll max-h-[calc(100svh-90px)]",
                    children: [
                      (0, s.jsx)(a.D, {
                        className: "sr-only",
                        slot: "title",
                        children: "Main menu",
                      }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsxs)("div", {
                            className: "bg-primary-50",
                            children: [
                              (0, s.jsx)("h4", {
                                className:
                                  "text-text-md font-bold text-gray-600 px-4 py-3 border-b border-gray-200",
                                children: d.ZE.title,
                              }),
                              (0, s.jsx)("div", {
                                className: "flex flex-col gap-4",
                                children: d.ZE.items.map((e) => {
                                  let {
                                    icon: l,
                                    title: t,
                                    subtitle: c,
                                    link: i,
                                  } = e;
                                  return (0, s.jsxs)(
                                    "a",
                                    {
                                      href: i,
                                      className: "flex w-full py-3 px-4 gap-4",
                                      children: [
                                        (0, s.jsx)(l, {
                                          className: "shrink-0",
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: "flex flex-col grow",
                                          children: [
                                            (0, s.jsx)("p", {
                                              className:
                                                "text-text-md font-bold text-gray-900",
                                              children: t,
                                            }),
                                            (0, s.jsx)("p", {
                                              className:
                                                "text-text-sm text-gray-600",
                                              children: c,
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)(o.A, {}),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              }),
                            ],
                          }),
                          (0, s.jsxs)(d.$n, {
                            variant: "ghost",
                            className: "w-full flex justify-between px-4 py-3",
                            onPress: () => f("solutions"),
                            children: ["Solutions ", (0, s.jsx)(o.A, {})],
                          }),
                          (0, s.jsxs)(d.$n, {
                            variant: "ghost",
                            className: "w-full flex justify-between px-4 py-3",
                            onPress: () => f("about"),
                            children: ["About ", (0, s.jsx)(o.A, {})],
                          }),
                          (0, s.jsxs)(d.$n, {
                            variant: "ghost",
                            className: "w-full flex justify-between px-4 py-3",
                            onPress: () => f("resources"),
                            children: ["Resources ", (0, s.jsx)(o.A, {})],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "flex flex-col bg-gray-100 rounded-b-xl",
                        children: (0, s.jsx)("div", {
                          className: "px-4 py-6",
                          children: (0, s.jsx)(d.$n, {
                            href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                            size: "lg",
                            className: "w-full",
                            onClick: h,
                            children: "Buy T3",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              "solutions" === p &&
                (0, s.jsx)("div", {
                  children: (0, s.jsx)(u, {
                    header: d.lN.title,
                    children: d.lN.items.map((e) => {
                      let { icon: l, ...t } = e;
                      return (0, s.jsx)(
                        x,
                        { ...t, icon: (0, s.jsx)(l, {}) },
                        t.title
                      );
                    }),
                  }),
                }),
            ],
          })
        );
      }
    },
    5045: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { Button: () => h });
      var s = t(9598),
        c = t(11950),
        i = t(17610),
        r = t(30027),
        a = t.n(r),
        n = t(47804),
        o = t(11676);
      let d = (0, t(87968).tv)({
          base: "rounded-lg border shadow-sm transition-colors duration-200 disabled:cursor-not-allowed w-fit flex gap-2 items-center justify-center outline-none focus-visible:ring-1",
          variants: {
            size: {
              sm: "py-2 px-[14px] text-text-sm font-bold min-h-[36px]",
              md: "py-[10px] px-4 text-text-sm font-bold min-h-[40px]",
              lg: "py-[10px] px-[18px] text-text-md font-bold min-h-[44px]",
              xl: "py-3 px-5 text-text-md font-bold min-h-[48px]",
              "2xl": "py-4 px-7 text-text-lg font-bold min-h-[60px]",
            },
            variant: {
              primary:
                "bg-primary-700 border-primary-700 hover:bg-primary-800 hover:border-primary-800 text-white disabled:bg-primary-200 disabled:border-primary-200",
              secondary:
                "bg-primary-300 border-primary-300 hover:bg-primary-400 hover:border-primary-400 text-gray-900 disabled:bg-primary-200 disabled:border-primary-200",
              outline:
                "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-800 disabled:border-gray-200 disabled:text-gray-300",
              ghost:
                "border-none shadow-none text-gray-600 hover:bg-gray-50 hover:text-gray-700 disabled:text-gray-300",
              text: "p-0 border-none shadow-none rounded-none",
              link: "p-0 border-none shadow-none rounded-none text-primary-700 hover:text-primary-800 disabled:text-gray-300",
            },
          },
        }),
        h = (0, c.forwardRef)(function (e, l) {
          let {
              children: t,
              className: r = "",
              variant: h = "primary",
              size: x = "md",
              isLoading: u,
              isDisabled: v,
              href: p,
              onClick: f,
              target: m,
              rel: j,
              ...g
            } = e,
            C = (0, c.useRef)(null);
          return ((0, c.useImperativeHandle)(l, () => C.current),
          (0, c.useEffect)(() => {
            var e;
            null == (e = C.current) ||
              e.addEventListener("touchstart", (e) => {
                var l;
                (null == (l = e.currentTarget)
                  ? void 0
                  : l.getAttribute("type")) !== "submit" && e.preventDefault();
              });
          }, []),
          p)
            ? (0, s.jsx)(a(), {
                href: p,
                onClick: f,
                className: (0, o.QP)(
                  d({ variant: h, size: x }),
                  "text-center",
                  r
                ),
                target: m,
                rel: j,
                children: t,
              })
            : (0, s.jsx)(i.$, {
                ...g,
                className: (0, o.QP)(d({ variant: h, size: x }), r),
                isDisabled: v || u,
                ref: C,
                children: u
                  ? (0, s.jsx)(s.Fragment, {
                      children: (0, s.jsx)(n.A, { className: "animate-spin" }),
                    })
                  : t,
              });
        });
    },
    9073: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { CoinStackedIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M13 5c0 1.105-2.462 2-5.5 2S2 6.105 2 5m11 0c0-1.105-2.462-2-5.5-2S2 3.895 2 5m11 0v1.5M2 5v12c0 1.105 2.462 2 5.5 2m0-8c-.169 0-.335-.003-.5-.008C4.197 10.9 2 10.043 2 9m5.5 6C4.462 15 2 14.105 2 13m20-1.5c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2m11 0c0-1.105-2.462-2-5.5-2s-5.5.895-5.5 2m11 0V19c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2v-7.5m11 3.75c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    11826: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { FileCodeIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            viewBox: "0 0 24 24",
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M5 18.5C5 18.9644 5 19.1966 5.02567 19.3916C5.2029 20.7378 6.26222 21.7971 7.60842 21.9743C7.80337 22 8.03558 22 8.5 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V9.98822C21 9.25445 21 8.88757 20.9171 8.5423C20.8436 8.2362 20.7224 7.94356 20.5579 7.67515C20.3724 7.3724 20.113 7.11296 19.5941 6.59411L16.4059 3.40589C15.887 2.88703 15.6276 2.6276 15.3249 2.44208C15.0564 2.27759 14.7638 2.15638 14.4577 2.08289C14.1124 2 13.7455 2 13.0118 2H8.5C8.03558 2 7.80337 2 7.60842 2.02567C6.26222 2.2029 5.2029 3.26222 5.02567 4.60842C5 4.80337 5 5.03558 5 5.5M9 14.5L11.5 12L9 9.5M5 9.5L2.5 12L5 14.5",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    13888: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { Carousel: () => n });
      var s = t(9598),
        c = t(11950),
        i = t(1231),
        r = t(26957),
        a = t(11676);
      function n(e) {
        let {
            children: l,
            className: t,
            withControl: n = !1,
            controlsClassName: o,
            slideClassName: d = "",
            containerClassName: h = "",
          } = e,
          [x, u] = (0, c.useState)(0),
          [v, p] = (0, c.useState)([]),
          f = c.Children.count(l),
          [m, j] = (0, r.A)({ containScroll: !1, align: "start" }),
          g = (0, c.useCallback)(
            (e) => {
              j && j.scrollTo(e);
            },
            [j]
          ),
          C = (0, c.useCallback)((e) => {
            p(e.scrollSnapList());
          }, []),
          w = (0, c.useCallback)((e) => {
            u(e.selectedScrollSnap());
          }, []);
        return (
          (0, c.useEffect)(() => {
            j &&
              (C(j), w(j), j.on("reInit", C).on("reInit", w).on("select", w));
          }, [j, C, w]),
          (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)("div", {
                className: (0, a.QP)(
                  "embla overflow-hidden ps-4 md:ps-15 lg:ps-20 xl:px-20 max-w-[1280px]",
                  h
                ),
                children: (0, s.jsx)("div", {
                  className: "flex flex-col embla__container",
                  ref: m,
                  children: (0, s.jsx)("div", {
                    className: (0, a.QP)("gap-4", t),
                    children: c.Children.map(l, (e, l) =>
                      e
                        ? (0, s.jsx)("div", {
                            className: (0, a.QP)("embla__slide", d),
                            children: (0, c.cloneElement)(e, { index: l }),
                          })
                        : null
                    ),
                  }),
                }),
              }),
              n &&
                (0, s.jsx)("div", {
                  className: (0, a.QP)(
                    "flex flex-row items-center justify-center xl:hidden ps-6 py-6 gap-2 embla__dots",
                    o
                  ),
                  children: [...Array(f)].map((e, l) =>
                    (0, s.jsx)(
                      "button",
                      {
                        className: (0, i.A)(
                          "w-[8px] h-[8px] bg-gray-300 rounded-full embla__dot",
                          { "bg-primary-600 embla__dot--selected": l === x }
                        ),
                        onClick: () => g(l),
                        children: (0, s.jsxs)("span", {
                          className: "sr-only",
                          children: ["Click to scroll carousel to: ", l],
                        }),
                      },
                      l
                    )
                  ),
                }),
            ],
          })
        );
      }
    },
    15152: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { PageOverlay: () => i });
      var s = t(9598),
        c = t(780);
      function i() {
        let { isMenuOpen: e } = (0, c.c)();
        return e
          ? (0, s.jsx)("div", {
              className:
                "top-0 fixed h-full w-full bg-black/70 z-30 animate-in fade-in-0 duration-300 pointer-events-none",
            })
          : null;
      }
    },
    21435: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { BriefcaseIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 24 24",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M16 7c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C13.395 3 12.93 3 12 3c-.93 0-1.395 0-1.777.102a3 3 0 0 0-2.12 2.122C8 5.605 8 6.07 8 7M5.2 21h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 19.48 22 18.92 22 17.8v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 7 19.92 7 18.8 7H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 8.52 2 9.08 2 10.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 21 4.08 21 5.2 21Z",
              stroke: "#4692CA",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    24016: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { BarLineChartIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M20 20V13M12 20V10M4 20L4 16M13.4067 5.0275L18.5751 6.96567M10.7988 5.40092L5.20023 9.59983M21.0607 6.43934C21.6464 7.02513 21.6464 7.97487 21.0607 8.56066C20.4749 9.14645 19.5251 9.14645 18.9393 8.56066C18.3536 7.97487 18.3536 7.02513 18.9393 6.43934C19.5251 5.85355 20.4749 5.85355 21.0607 6.43934ZM5.06066 9.43934C5.64645 10.0251 5.64645 10.9749 5.06066 11.5607C4.47487 12.1464 3.52513 12.1464 2.93934 11.5607C2.35355 10.9749 2.35355 10.0251 2.93934 9.43934C3.52513 8.85355 4.47487 8.85355 5.06066 9.43934ZM13.0607 3.43934C13.6464 4.02513 13.6464 4.97487 13.0607 5.56066C12.4749 6.14645 11.5251 6.14645 10.9393 5.56066C10.3536 4.97487 10.3536 4.02513 10.9393 3.43934C11.5251 2.85355 12.4749 2.85355 13.0607 3.43934Z",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    24560: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { T3OracleLogo: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) =>
        (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "26",
            height: "30",
            fill: "none",
            ...e,
            children: [
              (0, s.jsx)("path", {
                d: "M12.98.024V15l-4.326 2.476L4.327 20 0 22.476V7.5l4.327-2.476L8.654 2.5 12.98.024Z",
                fill: "#1E425C",
              }),
              (0, s.jsx)("path", {
                d: "M25.96 7.5 21.633 5l-4.327-2.5L12.98 0v15l4.327 2.5 4.327 2.5 4.327 2.5v-15Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "m21.635 20-4.327-2.5L12.98 15l-4.327 2.5L4.327 20 0 22.5 4.327 25l4.327 2.476L12.98 30l4.327-2.524L21.635 25l4.326-2.5-4.326-2.5Z",
                fill: "#8DC6EA",
              }),
              (0, s.jsx)("path", {
                d: "M19.181 18.582V11.42L12.98 15v7.188l6.202-3.606Z",
                fill: "#1E425C",
              }),
              (0, s.jsx)("path", {
                d: "M6.778 18.582V11.42L12.98 15v7.188l-6.202-3.606Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M19.182 11.418 12.98 7.813l-6.202 3.605L12.98 15l6.202-3.582Z",
                fill: "#8DC6EA",
              }),
            ],
          }),
        });
    },
    25759: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { Icon: () => c });
      var s = t(11950);
      let c = (0, s.forwardRef)(function (e, l) {
        let { children: t, ...c } = e;
        return (0, s.isValidElement)(t)
          ? (0, s.cloneElement)(t, { ...c, ref: l })
          : null;
      });
    },
    26641: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { InputField: () => o });
      var s = t(9598),
        c = t(29465),
        i = t(1231),
        r = t(24189),
        a = t(11676);
      let n = (e) => {
        let { value: l, isNumber: t, optional: s } = e;
        return l ? (t ? Number(String(l)) : l) : s ? void 0 : null;
      };
      function o(e) {
        let {
            label: l,
            placeholder: t,
            optional: o,
            register: d,
            name: h,
            onBlur: x,
            isNumber: u,
            error: v,
            children: p,
            suffix: f,
            classNames: m = "",
            ...j
          } = e,
          g = !!(null == v ? void 0 : v.message),
          C =
            d && h
              ? d(h, {
                  onBlur: x,
                  setValueAs: (e) => n({ value: e, isNumber: u, optional: o }),
                })
              : {};
        return (0, s.jsxs)("div", {
          className: "flex flex-col gap-1.5",
          children: [
            l &&
              (0, s.jsxs)("div", {
                className: "text-text-sm font-medium text-gray-700",
                children: [
                  l,
                  " ",
                  o &&
                    (0, s.jsx)("span", {
                      className: "text-text-xs text-gray-400",
                      children: "(Optional)",
                    }),
                ],
              }),
            (0, s.jsxs)("div", {
              className: "relative flex flex-col",
              children: [
                (0, s.jsx)(c.p, {
                  className: (0, a.QP)(
                    (0, i.A)(
                      "shadow-xs rounded-lg border py-2.5 px-3.5 h-[44px] text-text-md placeholder:text-gray-300 focus:border-primary-500 focus:ring-primary-500",
                      {
                        "border-gray-300": !g,
                        "border-error-600 focus:border-error-600 focus:ring-error-600":
                          g,
                      }
                    ),
                    m
                  ),
                  placeholder: t,
                  onBlur: x,
                  ...C,
                  ...j,
                }),
                g &&
                  (0, s.jsx)("div", {
                    className:
                      "absolute top-1/2 -translate-y-1/2 h-4 w-4 right-4 text-error-600",
                    children: (0, s.jsx)(r.A, { size: 16 }),
                  }),
                !!f &&
                  (0, s.jsx)("div", {
                    className: "absolute right-[16px] top-1/2 -translate-y-1/2",
                    children: f,
                  }),
              ],
            }),
            p,
            g &&
              (0, s.jsx)("div", {
                className: (0, i.A)(
                  "opacity-0 ease-linear duration-200 text-error-600 h-6",
                  { "opacity-100": g }
                ),
                children: null == v ? void 0 : v.message,
              }),
          ],
        });
      }
    },
    29177: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { CommentUserIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 35, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 35 32",
            ...t,
            children: [
              (0, s.jsx)("path", {
                d: "M29.082 25.523a3.05 3.05 0 1 0 0-6.101 3.05 3.05 0 0 0 0 6.101ZM24.028 32a.735.735 0 0 1-.72-.848 5.838 5.838 0 0 1 5.774-4.99 5.838 5.838 0 0 1 5.773 4.99.735.735 0 0 1-.72.847H24.02h.009Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M6.66 26.708c-1.11 0-2.048-.938-2.048-2.048v-3.297h-.237A4.046 4.046 0 0 1 .332 17.32V4.043A4.046 4.046 0 0 1 4.375 0h22.429a4.046 4.046 0 0 1 4.043 4.043v13.304c0 .374-.31.683-.683.683a.688.688 0 0 1-.683-.683V4.043a2.682 2.682 0 0 0-2.677-2.677H4.375a2.682 2.682 0 0 0-2.677 2.677V17.32a2.682 2.682 0 0 0 2.677 2.677h.92c.373 0 .683.31.683.683v3.989a.7.7 0 0 0 .683.683.704.704 0 0 0 .519-.246l4.198-4.863a.666.666 0 0 1 .519-.237h12.175c.373 0 .683.31.683.683 0 .374-.31.683-.683.683H12.207l-3.998 4.635c-.4.456-.965.72-1.548.72v-.019Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M24.696 5.983H6.484A.688.688 0 0 1 5.8 5.3c0-.373.31-.683.683-.683h18.212c.373 0 .683.31.683.683 0 .373-.31.683-.683.683ZM24.696 11.108H6.484a.688.688 0 0 1-.683-.683c0-.373.31-.683.683-.683h18.212c.373 0 .683.31.683.683 0 .373-.31.683-.683.683ZM21.418 16.245H6.484a.688.688 0 0 1-.683-.683c0-.373.31-.683.683-.683h14.934c.373 0 .683.31.683.683 0 .373-.31.683-.683.683Z",
                fill: "#F6F9FC",
              }),
            ],
          }),
        });
      };
    },
    30471: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { CreditWithCoinIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 64 64",
            ...t,
            children: [
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "m1.738 63.746-1.066-.613-.464-.382-.349-.538-.219-.69-.078-.836v-28.38l.078-.92.22-.947.348-.946.464-.913.56-.858.643-.776.709-.664.76-.527L47.082.505l.76-.353.71-.152.642.033.56.212 1.065.612-.56-.207-.642-.034-.71.152-.76.353L4.41 26.372l-.76.527-.71.665-.642.775-.56.858-.464.913-.35.943-.218.946-.078.924v28.38l.078.832.219.694.349.538.464.379Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.41 26.373 48.146 1.122c2.082-1.203 3.782-.223 3.782 2.182v28.38c0 2.405-1.7 5.349-3.782 6.552L4.41 63.486C2.328 64.69.628 63.71.628 61.305v-28.38c0-2.405 1.7-5.349 3.782-6.551Z",
                fill: "#1D2939",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M47.222 14.365V8.582c0-.371-.26-.52-.583-.334-3.73 2.153-7.46 4.31-11.191 6.462-.32.186-.583.638-.583 1.01v5.783c0 .37.26.52.583.337 3.73-2.152 7.46-4.309 11.191-6.462.32-.185.583-.638.583-1.01v-.003Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "m6.915 55.147 7.668-4.428c.32-.186.583-.639.583-1.01v-1.34c0-.371-.26-.52-.583-.334l-7.668 4.428c-.32.186-.583.639-.583 1.006v1.34c0 .371.26.52.583.338ZM17.597 48.977l7.669-4.428c.32-.186.583-.639.583-1.01V42.2c0-.371-.26-.52-.583-.334l-7.669 4.428c-.319.186-.582.639-.582 1.006v1.34c0 .371.26.52.582.338ZM28.288 42.809l7.668-4.428c.32-.186.583-.639.583-1.01v-1.34c0-.371-.26-.52-.583-.334l-7.668 4.428c-.32.186-.583.639-.583 1.006v1.34c0 .371.26.52.583.338ZM38.973 36.636l7.669-4.428c.32-.185.583-.638.583-1.01v-1.34c0-.37-.26-.519-.583-.337l-7.669 4.428c-.319.186-.582.638-.582 1.01v1.34c0 .37.26.52.582.337Z",
                fill: "#98A2B3",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.332 37.3c0-.72.509-1.596 1.128-1.956 2.343-1.351 4.685-2.706 7.027-4.057.623-.36 1.128-.067 1.128.653v6.191c0 .717-.508 1.596-1.128 1.956-2.342 1.351-4.684 2.706-7.027 4.057-.623.36-1.128.067-1.128-.653V37.3Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M63.108 46.154c0 .09 0 .194-.03.283 0 .075-.045.15-.06.224-.03.09-.044.179-.074.268l-.09.223c-.044.09-.074.179-.134.283-.03.06-.074.134-.119.194a3.8 3.8 0 0 1-.208.313c-.045.06-.09.119-.15.178-.118.134-.238.268-.372.402-.044.045-.089.105-.149.15l-.267.223c-.09.06-.164.134-.254.193a3.8 3.8 0 0 1-.312.209c-.12.074-.224.149-.343.223a9.708 9.708 0 0 1-1.25.596c-.12.044-.224.09-.343.134a7.738 7.738 0 0 1-.834.253c-.298.09-.596.164-.894.223-.357.075-.715.135-1.087.194-.09 0-.179.03-.268.03-.492.06-.998.074-1.504.09h-.239c-.491 0-.997-.03-1.489-.09-.074 0-.149-.015-.223-.03-.492-.06-.968-.134-1.445-.253-.089-.015-.163-.045-.253-.06-.432-.104-.834-.238-1.236-.372-.074-.03-.149-.045-.223-.075a9.466 9.466 0 0 1-1.355-.64c-1.758-1.013-2.636-2.353-2.636-3.678v3.44c0 1.325.863 2.666 2.62 3.678.403.239.835.432 1.281.61.03 0 .045.016.075.03.074.03.149.045.223.075.253.09.521.194.79.268.148.045.297.075.446.104.09.015.164.045.253.06.075.015.15.045.224.06.298.06.58.119.893.148.105.015.209.03.328.03.075 0 .149.015.223.03.105 0 .224.03.328.03.298.03.58.044.879.044H54.753c.328 0 .67-.03.998-.06.044 0 .074 0 .104-.014.09 0 .179-.03.268-.03.253-.03.521-.06.76-.104.104-.015.208-.06.327-.075a8.7 8.7 0 0 0 .894-.223c.149-.044.327-.074.476-.119l.358-.134c.119-.045.238-.09.342-.134.432-.179.864-.372 1.251-.596.03-.015.075-.044.104-.06.075-.044.15-.103.224-.148.104-.075.223-.134.327-.209.09-.06.164-.134.254-.193.089-.075.193-.15.268-.224.014-.015.044-.03.06-.044.029-.03.059-.06.089-.105.134-.134.268-.268.372-.402l.09-.09a.31.31 0 0 0 .059-.088c.074-.105.149-.209.208-.313l.09-.134c0-.015.014-.045.03-.075.044-.089.089-.178.133-.283.03-.06.06-.104.075-.163 0-.015 0-.03.015-.06a1.8 1.8 0 0 0 .074-.268c.015-.06.045-.12.045-.179v-.044c.015-.09.03-.194.03-.283 0-.06.015-.12.015-.18v-3.513.252h.014Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M60.486 42.209c3.5 2.025 3.53 5.286.06 7.311-3.47 2.026-9.144 2.026-12.644 0-3.5-2.025-3.5-5.286-.03-7.312 3.47-2.025 9.114-2.025 12.614 0Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M54.231 49.76c-2.13 0-4.214-.492-5.689-1.341-1.265-.73-1.995-1.668-1.995-2.561 0-.894.715-1.817 1.966-2.547 1.489-.864 3.5-1.34 5.659-1.34 2.16 0 4.17.476 5.674 1.34 1.266.73 2.01 1.668 2.01 2.576 0 .894-.715 1.802-1.95 2.532-1.475.849-3.53 1.34-5.675 1.34Z",
                fill: "#70B7E4",
              }),
              (0, s.jsx)("path", {
                d: "M63.122 41.803c0 .09 0 .194-.03.283 0 .074-.044.149-.059.223-.03.09-.045.179-.074.268l-.09.224c-.044.09-.074.178-.134.283-.03.06-.074.134-.119.193-.06.105-.134.209-.208.313-.045.06-.09.12-.15.179-.119.134-.238.268-.372.402-.044.044-.089.104-.149.149l-.268.223c-.089.06-.163.134-.253.194a3.774 3.774 0 0 1-.313.208c-.119.075-.223.15-.342.224a9.707 9.707 0 0 1-1.251.595c-.12.045-.223.09-.343.134-.268.105-.55.179-.834.253-.297.09-.595.164-.893.224-.357.074-.715.134-1.087.194-.09 0-.179.03-.268.03-.492.059-.998.074-1.504.089h-.239c-.491 0-.997-.03-1.489-.09-.074 0-.149-.015-.223-.03-.492-.06-.968-.133-1.445-.253-.09-.015-.164-.044-.253-.06a14.929 14.929 0 0 1-1.236-.372c-.075-.03-.149-.044-.223-.074a9.456 9.456 0 0 1-1.356-.64c-1.772-1.013-2.65-2.353-2.65-3.679v3.44c0 1.326.863 2.666 2.62 3.679.403.238.835.432 1.281.61.03 0 .045.015.075.03.074.03.149.045.223.075.253.089.521.193.79.268.148.044.297.074.446.104.09.015.164.044.253.06.075.014.15.044.224.059.298.06.58.12.893.149.105.015.209.03.328.03.075 0 .149.015.223.03.105 0 .224.03.328.03.298.029.58.044.879.044H54.753c.328 0 .67-.03.998-.06.044 0 .074 0 .104-.014.09 0 .179-.03.268-.03.253-.03.521-.06.76-.105.104-.014.208-.06.327-.074a8.7 8.7 0 0 0 .894-.223c.149-.045.327-.075.476-.12l.358-.134c.119-.044.238-.089.342-.134.432-.178.864-.372 1.251-.595.03-.015.075-.045.104-.06.075-.044.15-.104.224-.149.104-.074.223-.134.327-.208.09-.06.164-.134.254-.194.089-.074.193-.149.268-.223.014-.015.044-.03.06-.045.029-.03.059-.06.089-.104.134-.134.268-.268.372-.402l.09-.09c.029-.03.044-.06.059-.089a3.8 3.8 0 0 0 .208-.313l.09-.134c0-.015.014-.044.03-.074.044-.09.089-.179.133-.283.03-.06.06-.104.075-.164 0-.015 0-.03.015-.06.03-.089.06-.178.074-.268.015-.06.045-.119.045-.178v-.045c.015-.09.03-.194.03-.283 0-.06.015-.12.015-.179V41.55v.253h.03Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M60.487 37.857c3.5 2.025 3.53 5.287.06 7.312-3.47 2.025-9.144 2.025-12.644 0s-3.5-5.287-.03-7.312c3.47-2.025 9.114-2.025 12.614 0Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M54.232 45.408c-2.13 0-4.214-.492-5.689-1.34-1.265-.73-1.995-1.668-1.995-2.562 0-.894.715-1.817 1.966-2.547 1.489-.863 3.5-1.34 5.659-1.34 2.16 0 4.17.477 5.674 1.34 1.265.73 2.01 1.668 2.01 2.577 0 .893-.715 1.802-1.95 2.532-1.475.848-3.53 1.34-5.675 1.34Z",
                fill: "#70B7E4",
              }),
              (0, s.jsx)("path", {
                d: "M63.115 37.451c0 .09 0 .194-.03.283 0 .075-.044.15-.059.224-.03.09-.045.178-.075.268l-.089.223c-.044.09-.074.179-.134.283-.03.06-.074.134-.119.194a3.8 3.8 0 0 1-.209.313c-.044.059-.089.119-.148.178-.12.134-.239.268-.373.402-.044.045-.09.104-.149.15l-.268.223c-.09.06-.164.134-.253.193-.104.075-.208.15-.313.209-.119.074-.223.149-.342.223a9.708 9.708 0 0 1-1.251.596c-.12.044-.223.09-.343.134a7.716 7.716 0 0 1-.834.253c-.297.09-.595.164-.893.223a23.52 23.52 0 0 1-1.087.194c-.09 0-.179.03-.268.03-.492.06-.998.074-1.504.09h-.239c-.491 0-.997-.03-1.489-.09-.074 0-.149-.015-.223-.03-.492-.06-.968-.134-1.445-.253-.09-.015-.164-.045-.253-.06a15.006 15.006 0 0 1-1.236-.372c-.075-.03-.149-.045-.223-.075a9.456 9.456 0 0 1-1.356-.64c-1.757-1.013-2.636-2.353-2.636-3.678v3.44c0 1.325.864 2.666 2.621 3.678.402.238.834.432 1.281.61.03 0 .045.016.075.03.074.03.149.045.223.075.253.09.521.194.79.268.148.045.297.075.446.104.09.015.164.045.253.06.075.015.15.044.224.06.297.059.58.119.893.148.104.015.209.03.328.03.074 0 .149.015.223.03.104 0 .224.03.328.03.298.03.58.044.878.044h.924c.327 0 .67-.03.998-.06.044 0 .074 0 .104-.014.09 0 .178-.03.268-.03.253-.03.521-.06.76-.104.104-.015.208-.06.327-.075.313-.06.596-.134.893-.223.15-.045.328-.074.477-.12l.358-.133c.119-.045.238-.09.342-.134.432-.179.864-.373 1.251-.596.03-.015.074-.044.104-.06.075-.044.15-.104.224-.148.104-.075.223-.134.327-.209.09-.06.164-.134.253-.193.09-.075.194-.15.268-.224.015-.015.045-.03.06-.044.03-.03.06-.06.09-.105.133-.134.267-.268.372-.402l.089-.09c.03-.029.045-.059.06-.088a3.8 3.8 0 0 0 .208-.313l.09-.134c0-.015.014-.045.03-.075.044-.09.089-.178.133-.283.03-.06.06-.104.075-.164 0-.014 0-.03.015-.06.03-.088.06-.178.074-.267.015-.06.045-.12.045-.179v-.044c.015-.09.03-.194.03-.283 0-.06.014-.12.014-.18v-3.514.253h.015Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M60.479 33.505c3.5 2.026 3.53 5.287.06 7.312-3.47 2.026-9.144 2.026-12.644 0-3.5-2.025-3.5-5.286-.03-7.312 3.47-2.025 9.114-2.025 12.614 0Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M54.224 41.056c-2.13 0-4.214-.491-5.688-1.34-1.266-.73-1.996-1.668-1.996-2.562 0-.893.715-1.816 1.966-2.546 1.489-.864 3.5-1.34 5.659-1.34 2.16 0 4.17.476 5.674 1.34 1.266.73 2.01 1.668 2.01 2.576 0 .894-.715 1.802-1.95 2.532-1.475.849-3.53 1.34-5.675 1.34Z",
                fill: "#70B7E4",
              }),
              (0, s.jsx)("path", {
                d: "M63.115 33.1c0 .09 0 .193-.03.283 0 .074-.044.149-.059.223-.03.09-.045.179-.075.268l-.089.224c-.044.089-.074.178-.134.283-.03.06-.074.134-.119.193a3.8 3.8 0 0 1-.209.313c-.044.06-.089.119-.148.179-.12.134-.239.268-.373.402-.044.044-.09.104-.149.149l-.268.223c-.09.06-.164.134-.253.194a3.8 3.8 0 0 1-.313.208c-.119.075-.223.149-.342.224a9.708 9.708 0 0 1-1.251.595c-.12.045-.223.09-.343.134-.268.105-.55.179-.834.253-.297.09-.595.164-.893.224-.357.074-.715.134-1.087.193-.09 0-.179.03-.268.03-.492.06-.998.075-1.504.09h-.239c-.491 0-.997-.03-1.489-.09-.074 0-.149-.015-.223-.03-.492-.06-.968-.134-1.445-.253-.09-.015-.164-.044-.253-.06-.432-.104-.834-.238-1.236-.372-.075-.03-.149-.044-.223-.074a9.467 9.467 0 0 1-1.356-.64c-1.757-1.013-2.636-2.354-2.636-3.679v3.44c0 1.326.864 2.666 2.621 3.679.402.238.834.431 1.281.61.03 0 .045.015.075.03.074.03.149.045.223.074.253.09.521.194.79.269.148.044.297.074.446.104.09.015.164.044.253.06.075.014.15.044.224.059.297.06.58.119.893.149.104.015.209.03.328.03.074 0 .149.015.223.03.104 0 .224.03.328.03.298.029.58.044.878.044h.924c.327 0 .67-.03.998-.06.044 0 .074 0 .104-.015.09 0 .178-.03.268-.03.253-.03.521-.059.76-.104.104-.015.208-.06.327-.074.313-.06.596-.134.893-.224.15-.044.328-.074.477-.119l.358-.134c.119-.044.238-.089.342-.134.432-.178.864-.372 1.251-.595.03-.015.074-.045.104-.06.075-.045.15-.104.224-.149.104-.074.223-.134.327-.208.09-.06.164-.134.253-.194.09-.075.194-.149.268-.223.015-.015.045-.03.06-.045.03-.03.06-.06.09-.104.133-.134.267-.268.372-.402l.089-.09c.03-.03.045-.06.06-.09a3.8 3.8 0 0 0 .208-.312l.09-.134a.25.25 0 0 1 .03-.074c.044-.09.089-.179.133-.283.03-.06.06-.104.075-.164 0-.015 0-.03.015-.06a1.8 1.8 0 0 0 .074-.268c.015-.06.045-.119.045-.178v-.045c.015-.09.03-.194.03-.283 0-.06.014-.12.014-.179v-3.514.253h.015Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M60.479 29.154c3.5 2.025 3.53 5.287.06 7.312-3.47 2.025-9.144 2.025-12.644 0-3.5-2.026-3.5-5.287-.03-7.312 3.47-2.026 9.114-2.026 12.614 0Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M54.158 36.705c-2.062 0-4.081-.492-5.509-1.34-1.226-.73-1.932-1.669-1.932-2.562 0-.894.692-1.817 1.903-2.547 1.443-.863 3.39-1.34 5.48-1.34 2.092 0 4.038.477 5.495 1.34 1.226.73 1.947 1.668 1.947 2.577 0 .893-.692 1.802-1.89 2.531-1.427.85-3.417 1.34-5.494 1.34Z",
                fill: "#70B7E4",
              }),
              (0, s.jsx)("path", {
                d: "M47.695 55.621c0 .09 0 .194-.03.283 0 .075-.044.15-.059.224-.03.089-.045.178-.074.268l-.09.223c-.044.09-.074.179-.134.283-.03.06-.074.134-.119.194-.06.104-.134.208-.208.312-.045.06-.09.12-.15.18-.119.133-.238.267-.372.401-.044.045-.089.104-.149.15l-.268.222c-.089.06-.163.135-.253.194a3.8 3.8 0 0 1-.313.209c-.119.074-.223.148-.342.223a9.707 9.707 0 0 1-1.251.596c-.12.044-.223.089-.343.134a7.738 7.738 0 0 1-.834.253c-.297.09-.595.164-.893.223a23.39 23.39 0 0 1-1.087.194c-.09 0-.179.03-.268.03-.492.06-.998.074-1.504.089h-.239c-.491 0-.997-.03-1.489-.09-.074 0-.149-.014-.223-.03-.492-.059-.968-.133-1.445-.252-.09-.015-.164-.045-.253-.06-.432-.104-.834-.238-1.236-.372-.075-.03-.149-.045-.223-.075a9.466 9.466 0 0 1-1.356-.64c-1.757-1.013-2.636-2.353-2.636-3.678v3.44c0 1.325.864 2.665 2.621 3.678.403.238.834.432 1.281.61.03 0 .045.016.075.03.074.03.149.045.223.075.253.09.521.194.79.268.148.045.297.074.446.104.09.015.164.045.253.06.075.015.15.044.224.06.298.059.58.118.893.148.105.015.209.03.328.03.074 0 .149.015.223.03.105 0 .224.03.328.03.298.03.58.044.878.044h.924c.328 0 .67-.03.998-.06.044 0 .074 0 .104-.014.09 0 .179-.03.268-.03.253-.03.521-.06.76-.104.104-.015.208-.06.327-.075a8.7 8.7 0 0 0 .894-.223c.148-.045.327-.074.476-.12l.358-.133c.119-.045.238-.09.342-.134.432-.179.864-.373 1.251-.596.03-.015.075-.045.104-.06.075-.044.15-.104.224-.148.104-.075.223-.134.327-.209.09-.06.164-.134.254-.194.089-.074.193-.148.267-.223.015-.015.045-.03.06-.045.03-.03.06-.06.09-.104.133-.134.267-.268.372-.402l.09-.09a.31.31 0 0 0 .059-.089c.074-.104.149-.208.208-.312l.09-.134a.25.25 0 0 1 .03-.075c.044-.09.089-.178.133-.283.03-.06.06-.104.075-.164 0-.015 0-.03.015-.06a1.8 1.8 0 0 0 .074-.267c.015-.06.045-.12.045-.179v-.045c.015-.089.03-.193.03-.283 0-.06.015-.119.015-.178v-3.515.253h.014Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M45.075 51.675c3.5 2.026 3.53 5.287.06 7.312-3.47 2.026-9.145 2.026-12.644 0-3.5-2.025-3.5-5.286-.03-7.312 3.47-2.025 9.114-2.025 12.614 0Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M38.82 59.226c-2.13 0-4.215-.491-5.69-1.34-1.266-.73-1.995-1.668-1.995-2.562 0-.893.715-1.816 1.965-2.546 1.49-.864 3.5-1.34 5.66-1.34 2.159 0 4.17.476 5.674 1.34 1.265.73 2.01 1.668 2.01 2.576 0 .894-.715 1.802-1.95 2.532-1.475.849-3.53 1.34-5.675 1.34Z",
                fill: "#70B7E4",
              }),
              (0, s.jsx)("path", {
                d: "M47.71 51.27c0 .09 0 .193-.03.283 0 .074-.044.149-.059.223-.03.09-.045.179-.075.268l-.089.224c-.044.089-.074.178-.134.282-.03.06-.074.135-.119.194-.06.104-.134.209-.209.313-.044.06-.089.119-.148.178-.12.135-.239.269-.373.403-.044.044-.09.104-.149.149l-.268.223c-.09.06-.164.134-.253.194-.104.074-.208.148-.313.208-.119.075-.223.149-.342.223a9.707 9.707 0 0 1-1.251.596c-.12.045-.224.09-.343.134-.268.104-.55.179-.834.253-.297.09-.595.164-.893.224-.358.074-.715.134-1.087.193-.09 0-.179.03-.268.03-.492.06-.998.075-1.504.09h-.239c-.491 0-.997-.03-1.489-.09-.074 0-.149-.015-.223-.03-.492-.06-.968-.134-1.445-.253-.09-.015-.164-.045-.253-.06a14.938 14.938 0 0 1-1.236-.372c-.075-.03-.149-.044-.224-.074a9.456 9.456 0 0 1-1.355-.64c-1.772-1.013-2.65-2.354-2.65-3.679v3.44c0 1.325.863 2.666 2.62 3.678.403.239.834.432 1.281.611.03 0 .045.015.075.03.074.03.149.045.223.074.253.09.521.194.79.268.148.045.297.075.446.105.09.015.164.044.253.06.075.014.15.044.224.059.298.06.58.119.893.149.105.015.209.03.328.03.074 0 .149.014.223.03.105 0 .224.03.328.03.298.029.58.044.878.044h.924c.328 0 .67-.03.998-.06.044 0 .074 0 .104-.015.09 0 .179-.03.268-.03.253-.03.521-.06.76-.104.104-.015.208-.06.327-.074.313-.06.596-.134.894-.224.148-.044.327-.074.476-.119l.358-.134c.119-.044.238-.09.342-.134.432-.178.864-.372 1.251-.596.03-.014.075-.044.104-.06.075-.044.15-.103.224-.148.104-.074.223-.134.327-.209.09-.059.164-.133.254-.193.089-.075.193-.149.267-.224.015-.014.045-.03.06-.044.03-.03.06-.06.09-.104.133-.134.267-.268.372-.403l.09-.089c.029-.03.044-.06.059-.09a3.8 3.8 0 0 0 .208-.312l.09-.134c0-.015.014-.045.03-.074.044-.09.089-.18.133-.283.03-.06.06-.105.075-.164 0-.015 0-.03.015-.06.03-.09.06-.178.074-.268.015-.06.045-.119.045-.178v-.045c.015-.09.03-.194.03-.283 0-.06.015-.12.015-.179v-3.514.253h.03Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M45.074 47.324c3.5 2.025 3.53 5.286.06 7.312-3.47 2.025-9.145 2.025-12.644 0-3.5-2.026-3.5-5.287-.03-7.312 3.47-2.026 9.114-2.026 12.614 0Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M38.82 54.875c-2.13 0-4.215-.492-5.69-1.34-1.266-.73-1.995-1.669-1.995-2.562 0-.894.715-1.817 1.965-2.547 1.49-.864 3.5-1.34 5.66-1.34 2.159 0 4.17.477 5.674 1.34 1.265.73 2.01 1.668 2.01 2.577 0 .893-.715 1.801-1.95 2.531-1.475.85-3.53 1.34-5.675 1.34Z",
                fill: "#70B7E4",
              }),
              (0, s.jsx)("path", {
                d: "M47.703 46.918c0 .09 0 .194-.03.283 0 .075-.044.15-.06.224-.029.089-.044.178-.074.268l-.089.223c-.045.09-.074.179-.134.283-.03.06-.074.134-.12.194a3.8 3.8 0 0 1-.208.312c-.044.06-.089.12-.148.179-.12.134-.239.268-.373.402-.044.045-.09.104-.149.149l-.268.223c-.09.06-.164.134-.253.194-.104.074-.208.149-.313.209-.119.074-.223.148-.342.223a9.708 9.708 0 0 1-1.251.596c-.12.044-.224.089-.343.134a7.716 7.716 0 0 1-.834.253c-.297.09-.595.163-.893.223a23.5 23.5 0 0 1-1.087.194c-.09 0-.18.03-.268.03-.492.06-.998.074-1.505.089h-.238c-.491 0-.998-.03-1.489-.09-.075 0-.149-.014-.223-.03-.492-.059-.968-.133-1.445-.252-.09-.015-.164-.045-.253-.06-.432-.104-.834-.238-1.236-.372-.075-.03-.15-.045-.224-.075a9.456 9.456 0 0 1-1.355-.64c-1.757-1.013-2.636-2.353-2.636-3.678v3.44c0 1.325.864 2.665 2.621 3.678.402.238.834.432 1.281.61.03 0 .045.015.075.03.074.03.148.045.223.075.253.09.521.193.79.268.148.044.297.074.446.104.09.015.164.045.253.06.075.014.15.044.224.06.297.059.58.118.893.148.104.015.209.03.328.03.074 0 .149.015.223.03.104 0 .224.03.328.03.298.03.58.044.878.044h.924c.327 0 .67-.03.998-.06.044 0 .074 0 .104-.014.09 0 .178-.03.268-.03.253-.03.521-.06.76-.104.104-.015.208-.06.327-.075a8.7 8.7 0 0 0 .893-.223c.15-.045.328-.075.477-.12l.357-.133c.12-.045.239-.09.343-.134.432-.18.864-.373 1.25-.596.03-.015.075-.045.105-.06.075-.044.149-.104.224-.148.104-.075.223-.135.327-.209.09-.06.164-.134.253-.194.09-.074.194-.149.268-.223.015-.015.045-.03.06-.045.03-.03.06-.06.09-.104.133-.134.267-.268.372-.402l.089-.09c.03-.03.045-.059.06-.089a3.8 3.8 0 0 0 .208-.313l.09-.133c0-.015.014-.045.03-.075.044-.09.089-.179.133-.283.03-.06.06-.104.075-.164 0-.015 0-.03.015-.06.03-.089.06-.178.074-.267.015-.06.045-.12.045-.18v-.044c.014-.09.03-.193.03-.283 0-.06.014-.119.014-.178v-3.515.253h.015Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M45.067 42.972c3.5 2.026 3.53 5.287.06 7.312-3.47 2.026-9.144 2.026-12.644 0-3.5-2.025-3.5-5.286-.03-7.312 3.47-2.025 9.114-2.025 12.614 0Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M38.812 50.523c-2.13 0-4.214-.491-5.688-1.34-1.266-.73-1.996-1.668-1.996-2.562 0-.893.715-1.817 1.966-2.546 1.489-.864 3.5-1.34 5.659-1.34 2.16 0 4.17.476 5.674 1.34 1.266.73 2.01 1.668 2.01 2.576 0 .894-.715 1.802-1.95 2.532-1.475.849-3.53 1.34-5.675 1.34Z",
                fill: "#70B7E4",
              }),
            ],
          }),
        });
      };
    },
    32764: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { T3AILogo: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) =>
        (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            width: "28",
            height: "30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 65 64",
            ...e,
            children: [
              (0, s.jsx)("g", {
                clipPath: "url(#clip0_5331_140528)",
                children: (0, s.jsxs)("g", {
                  clipPath: "url(#clip1_5331_140528)",
                  children: [
                    (0, s.jsx)("path", {
                      d: "M55.426 15.999 27.713 0 0 15.999V48L27.713 64l27.713-15.999V16Z",
                      fill: "#164C63",
                    }),
                    (0, s.jsx)("path", {
                      d: "m13.862 8.002 6.929-4L27.713 0l13.862 8.002-.005 8.002 4.14 4.994-4.14 3.003v8.002l-6.929 4.001-6.928-4.001V64l-13.857-7.996.006-48.002Z",
                      fill: "#155B75",
                    }),
                    (0, s.jsx)("path", {
                      d: "m6.934 12.003 6.928-4L20.791 4l13.856 8.002V20l4.134 5-4.14 3.002v8.002l-6.922 4L20.79 44l-.006 16.005-13.85-8.003V12.003Z",
                      fill: "#0E7090",
                    }),
                    (0, s.jsx)("path", {
                      d: "m0 15.998 6.934-3.995 6.928-4.001 6.929 4.001 6.928 3.995V24l4.134 5-4.14 3.003.006 8.002L20.79 44l-6.929-4v16.003L0 48.001V15.998Z",
                      fill: "#A5F0FC",
                    }),
                    (0, s.jsx)("path", {
                      d: "m20.79 44 6.923 4.001 21.004-12.124v8.13L27.72 56.003l-6.934-4.002L20.79 44Z",
                      fill: "#fff",
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)("defs", {
                children: [
                  (0, s.jsx)("clipPath", {
                    id: "clip0_5331_140528",
                    children: (0, s.jsx)("path", {
                      fill: "#fff",
                      transform: "translate(.25)",
                      d: "M0 0h64v64H0z",
                    }),
                  }),
                  (0, s.jsx)("clipPath", {
                    id: "clip1_5331_140528",
                    children: (0, s.jsx)("path", {
                      fill: "#fff",
                      d: "M0 0h55.426v64H0z",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
    },
    35732: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { TextField: () => n });
      var s = t(9598),
        c = t(2539),
        i = t(1231),
        r = t(24189);
      let a = (e) => {
        let { value: l, isNumber: t, optional: s } = e;
        return l ? (t ? Number(String(l)) : l) : s ? void 0 : null;
      };
      function n(e) {
        let {
            label: l,
            placeholder: t,
            optional: n,
            register: o,
            name: d,
            onBlur: h,
            isNumber: x,
            error: u,
            children: v,
            suffix: p,
            rows: f = 5,
            ...m
          } = e,
          j = !!(null == u ? void 0 : u.message),
          g =
            o && d
              ? o(d, {
                  onBlur: h,
                  setValueAs: (e) => a({ value: e, isNumber: x, optional: n }),
                })
              : {};
        return (0, s.jsxs)("div", {
          className: "flex flex-col gap-1.5 relative",
          children: [
            l &&
              (0, s.jsxs)("div", {
                className: "text-text-sm font-medium text-gray-700",
                children: [
                  l,
                  " ",
                  n &&
                    (0, s.jsx)("span", {
                      className: "text-text-xs text-gray-400",
                      children: "(Optional)",
                    }),
                ],
              }),
            (0, s.jsx)(c.f, {
              className: (0, i.A)(
                "shadow-xs rounded-lg border py-2.5 px-3.5 h-[44px] text-text-md placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500",
                { "border-gray-300": !j, "border-error-600": j }
              ),
              placeholder: t,
              onBlur: h,
              style: { minHeight: "8.5rem" },
              rows: f,
              ...g,
              ...m,
            }),
            j &&
              (0, s.jsx)("div", {
                className:
                  "absolute top-1/2 -translate-y-1/2 h-4 w-4 right-4 text-error-600",
                children: (0, s.jsx)(r.A, { size: 16 }),
              }),
            !!p &&
              (0, s.jsx)("div", {
                className: "absolute right-[16px] top-1/2 -translate-y-1/2",
                children: p,
              }),
            v,
            j &&
              (0, s.jsx)("div", {
                className: (0, i.A)(
                  "opacity-0 ease-linear duration-200 text-error-600",
                  { "opacity-100": j }
                ),
                children: null == u ? void 0 : u.message,
              }),
          ],
        });
      }
    },
    35888: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { T3TextOnly: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { variant: l = "default", ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("img", {
            href: "/images/logo_txt.png"
          }),
        });
      };
    },
    39582: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { AnnouncementBanner: () => d });
      var s = t(9598),
        c = t(11950),
        i = t(30027),
        r = t.n(i),
        a = t(14092),
        n = t(1231),
        o = t(96838);
      function d() {
        let [e, l] = (0, c.useState)(!0);
        return "/" === (0, a.usePathname)()
          ? (0, s.jsxs)("div", {
              className: (0, n.A)(
                "pl-4 md:px-4 xl:px-8 flex justify-between items-center transition-all overflow-hidden text-base-white h-[48px]",
                { "!h-0": !e }
              ),
              style: {
                background:
                  "linear-gradient(63deg, #0B4A6F 13.18%, #0086C9 79.88%)",
              },
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "text-text-xs md:text-text-sm xl:text-text-md font-bold md:flex-1 md:text-center",
                  children: [
                    "New: Accelerate Open Data Strategies with Verifiable Private Identity.",
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "text-primary-100 cursor-pointer p-2",
                  onClick: () => l(!1),
                  children: (0, s.jsx)(o.A, { size: 20 }),
                }),
              ],
            })
          : null;
      }
    },
    41057: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { CoinStackedIcon2: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 18 24",
            ...t,
            children: [
              (0, s.jsxs)("g", {
                clipPath: "url(#coin-stacked-icon-2)",
                children: [
                  (0, s.jsx)("path", {
                    d: "M15.915 17.555c0 .07 0 .15-.023.22 0 .058-.034.115-.046.173-.023.07-.034.139-.058.208l-.069.173c-.034.07-.058.139-.104.22a1.06 1.06 0 0 1-.092.15c-.046.08-.104.161-.162.242-.035.046-.07.093-.115.139a7.134 7.134 0 0 1-.29.312c-.034.034-.068.08-.115.115l-.207.173c-.07.047-.128.104-.197.15-.08.058-.162.116-.242.162-.093.058-.174.116-.266.174a7.54 7.54 0 0 1-.97.462c-.093.034-.173.069-.266.103-.208.081-.427.139-.647.197-.23.07-.462.127-.693.173-.277.058-.554.104-.843.15-.069 0-.138.023-.208.023-.38.046-.773.058-1.166.07H8.95c-.381 0-.774-.024-1.155-.07a.888.888 0 0 1-.173-.023 9.087 9.087 0 0 1-1.12-.196c-.07-.012-.127-.035-.197-.046-.335-.081-.647-.185-.958-.29-.058-.022-.116-.034-.174-.057a7.333 7.333 0 0 1-1.05-.496c-1.363-.786-2.045-1.825-2.045-2.853v2.668c0 1.028.67 2.067 2.033 2.852.312.185.647.335.993.474.023 0 .035.012.058.023.058.023.115.035.173.058.196.07.404.15.612.208.116.034.231.058.347.08.069.012.127.035.196.047.058.011.116.034.173.046.231.046.45.092.693.115.081.012.162.023.254.023.058 0 .116.012.174.024.08 0 .173.023.254.023.23.023.45.034.681.034h.716c.254 0 .52-.023.774-.046.035 0 .058 0 .08-.011.07 0 .14-.024.209-.024.196-.023.404-.046.589-.08.08-.012.162-.047.254-.058.242-.046.462-.104.693-.173.115-.035.254-.058.37-.093l.277-.104c.092-.034.184-.069.265-.104a8.33 8.33 0 0 0 .97-.462c.024-.011.058-.034.081-.046.058-.034.116-.08.174-.115.08-.058.173-.104.254-.162.069-.046.127-.104.196-.15.07-.058.15-.116.208-.173.011-.012.034-.023.046-.035a.504.504 0 0 0 .07-.08c.103-.105.207-.209.288-.313l.07-.069c.022-.023.034-.046.046-.07.057-.08.115-.161.161-.242l.07-.104c0-.011.011-.034.023-.058.034-.069.069-.138.104-.219.023-.046.046-.08.057-.127 0-.012 0-.023.012-.046a1.39 1.39 0 0 0 .058-.208c.011-.046.034-.093.034-.139v-.034c.012-.07.023-.15.023-.22 0-.046.012-.092.012-.138v-2.726.196h.011Z",
                    fill: "#131E33",
                  }),
                  (0, s.jsx)("path", {
                    d: "M13.883 14.495c2.714 1.57 2.737 4.1.046 5.67-2.691 1.571-7.091 1.571-9.806 0-2.714-1.57-2.714-4.1-.023-5.67 2.691-1.571 7.069-1.571 9.783 0Z",
                    fill: "#CDE7F6",
                  }),
                  (0, s.jsx)("path", {
                    d: "M9.032 20.35c-1.652 0-3.269-.38-4.412-1.04-.982-.565-1.548-1.293-1.548-1.986 0-.693.555-1.409 1.525-1.975 1.155-.67 2.714-1.04 4.389-1.04 1.674 0 3.233.37 4.4 1.04.982.566 1.56 1.294 1.56 1.998 0 .693-.555 1.398-1.514 1.964-1.143.658-2.737 1.04-4.4 1.04Z",
                    fill: "#70B7E4",
                  }),
                  (0, s.jsx)("path", {
                    d: "M13.848 13.12c0 .07 0 .15-.023.22 0 .057-.035.115-.046.173-.024.07-.035.139-.058.208l-.07.173c-.034.07-.057.139-.103.22a1.05 1.05 0 0 1-.093.15c-.046.08-.104.161-.162.242-.034.046-.069.093-.115.139-.092.104-.185.208-.289.312-.034.034-.069.08-.115.115l-.208.173c-.07.046-.127.104-.196.15-.081.058-.162.116-.243.162-.092.058-.173.116-.266.173-.3.174-.623.324-.97.462-.092.035-.173.07-.265.104-.208.081-.428.139-.647.197-.231.069-.462.127-.693.173-.277.058-.555.104-.843.15-.07 0-.139.023-.208.023-.381.046-.774.058-1.167.07h-.184c-.382 0-.774-.024-1.155-.07-.058 0-.116-.011-.174-.023a9.087 9.087 0 0 1-1.12-.196c-.07-.012-.127-.035-.196-.047-.335-.08-.647-.184-.959-.288-.058-.023-.115-.035-.173-.058a7.334 7.334 0 0 1-1.051-.497C.68 14.945 0 13.906 0 12.878v2.668c0 1.027.67 2.067 2.033 2.852.312.185.647.335.993.474.023 0 .035.012.058.023.057.023.115.035.173.058.196.07.404.15.612.208.116.034.231.057.347.08.069.012.127.035.196.047.058.011.115.034.173.046.231.046.45.092.693.115.081.012.162.023.254.023.058 0 .116.012.173.024.081 0 .174.023.255.023.23.023.45.034.681.034h.716c.254 0 .52-.023.774-.046.035 0 .058 0 .08-.011.07 0 .14-.023.209-.023.196-.024.404-.047.589-.081.08-.012.161-.047.254-.058a6.75 6.75 0 0 0 .693-.173c.115-.035.254-.058.37-.093l.276-.104c.093-.034.185-.069.266-.104.335-.138.67-.288.97-.462.023-.011.058-.034.081-.046.058-.035.116-.08.173-.115.081-.058.174-.104.255-.162.069-.046.127-.104.196-.15.07-.058.15-.116.208-.173.011-.012.034-.023.046-.035.023-.023.046-.046.07-.08.103-.105.207-.209.288-.313l.07-.069c.022-.023.034-.046.045-.07.058-.08.116-.161.162-.242l.07-.104c0-.011.011-.034.022-.058.035-.069.07-.138.105-.219.023-.046.046-.08.057-.127 0-.012 0-.023.012-.046a1.39 1.39 0 0 0 .057-.208c.012-.046.035-.093.035-.139v-.034c.012-.07.023-.15.023-.22 0-.046.012-.092.012-.138v-2.726.196h.023Z",
                    fill: "#131E33",
                  }),
                  (0, s.jsx)("path", {
                    d: "M11.804 10.06c2.714 1.57 2.737 4.1.046 5.67-2.691 1.571-7.091 1.571-9.806 0-2.714-1.57-2.714-4.1-.023-5.67 2.691-1.571 7.069-1.571 9.783 0Z",
                    fill: "#CDE7F6",
                  }),
                  (0, s.jsx)("path", {
                    d: "M6.953 15.915c-1.652 0-3.269-.38-4.412-1.04C1.559 14.31.993 13.583.993 12.89c0-.693.555-1.409 1.525-1.975 1.155-.67 2.714-1.04 4.389-1.04 1.674 0 3.233.37 4.4 1.04.982.566 1.56 1.294 1.56 1.998 0 .693-.555 1.398-1.514 1.964-1.143.658-2.737 1.04-4.4 1.04Z",
                    fill: "#70B7E4",
                  }),
                  (0, s.jsx)("path", {
                    d: "M17.66 8.674c0 .069 0 .15-.024.22 0 .057-.035.115-.046.172-.023.07-.035.139-.058.208l-.07.174c-.034.069-.057.138-.103.219a1.05 1.05 0 0 1-.093.15c-.046.08-.103.162-.161.243-.035.046-.07.092-.116.138a7.076 7.076 0 0 1-.288.312c-.035.035-.07.08-.116.116l-.208.173c-.07.046-.127.104-.196.15-.081.058-.162.116-.243.162-.092.057-.173.115-.265.173a7.54 7.54 0 0 1-.97.462c-.093.034-.174.07-.266.104-.208.08-.428.138-.647.196a7.6 7.6 0 0 1-.693.173c-.277.058-.554.104-.843.15-.07 0-.139.024-.208.024-.381.046-.774.057-1.166.069h-.185c-.381 0-.774-.023-1.155-.07-.058 0-.116-.01-.173-.022a9.087 9.087 0 0 1-1.12-.197c-.07-.011-.128-.034-.197-.046-.335-.08-.647-.185-.959-.289-.057-.023-.115-.034-.173-.057a7.332 7.332 0 0 1-1.051-.497c-1.363-.786-2.044-1.825-2.044-2.853V11.1c0 1.028.67 2.067 2.032 2.853.312.185.647.335.994.473.023 0 .034.012.057.023.058.024.116.035.174.058.196.07.404.15.612.208.115.035.23.058.346.081.07.011.127.035.197.046.057.012.115.035.173.046.23.047.45.093.693.116.08.011.162.023.254.023.058 0 .115.011.173.023.081 0 .173.023.254.023.231.023.45.035.682.035h.716c.254 0 .52-.023.774-.046.034 0 .057 0 .08-.012.07 0 .14-.023.208-.023.197-.023.405-.046.59-.08.08-.012.161-.047.253-.059.243-.046.462-.104.693-.173.116-.034.255-.058.37-.092l.277-.104c.093-.035.185-.07.266-.104.335-.139.67-.289.97-.462.023-.012.058-.035.08-.046.059-.035.116-.081.174-.116.081-.058.173-.104.254-.161.07-.047.127-.104.197-.15.069-.058.15-.116.207-.174.012-.011.035-.023.047-.035.023-.023.046-.046.069-.08.104-.104.208-.208.289-.312l.069-.07a.24.24 0 0 0 .046-.069c.058-.08.116-.162.162-.242l.07-.104c0-.012.01-.035.022-.058.035-.07.07-.139.104-.22.023-.046.046-.08.058-.127 0-.011 0-.023.011-.046.024-.07.047-.138.058-.208.012-.046.035-.092.035-.138v-.035c.012-.07.023-.15.023-.22 0-.046.012-.092.012-.138V8.477v.197h.011Z",
                    fill: "#131E33",
                  }),
                  (0, s.jsx)("path", {
                    d: "M15.615 5.613c2.714 1.57 2.737 4.1.046 5.671-2.691 1.57-7.091 1.57-9.806 0-2.714-1.57-2.714-4.1-.023-5.67 2.691-1.572 7.069-1.572 9.783 0Z",
                    fill: "#CDE7F6",
                  }),
                  (0, s.jsx)("path", {
                    d: "M10.764 11.469c-1.652 0-3.269-.381-4.412-1.04-.982-.566-1.548-1.293-1.548-1.986 0-.693.555-1.41 1.525-1.975 1.155-.67 2.714-1.04 4.389-1.04 1.674 0 3.233.37 4.4 1.04.982.566 1.56 1.293 1.56 1.998 0 .693-.555 1.397-1.514 1.963-1.143.659-2.737 1.04-4.4 1.04Z",
                    fill: "#70B7E4",
                  }),
                  (0, s.jsx)("path", {
                    d: "M14.888 4.239c0 .069 0 .15-.023.22 0 .057-.035.115-.047.172-.023.07-.034.139-.057.208l-.07.173c-.034.07-.057.14-.104.22a1.059 1.059 0 0 1-.092.15c-.046.08-.104.162-.162.243-.034.046-.069.092-.115.138-.093.104-.185.208-.289.312-.035.035-.07.08-.116.116l-.207.173c-.07.046-.127.104-.197.15-.08.058-.161.115-.242.162-.093.057-.174.115-.266.173-.3.173-.624.323-.97.462-.092.034-.173.07-.266.104-.208.08-.427.138-.646.196-.231.07-.462.127-.693.173-.278.058-.555.104-.844.15-.069 0-.138.024-.207.024-.382.046-.774.057-1.167.069h-.185c-.38 0-.774-.023-1.155-.07-.057 0-.115-.011-.173-.022a9.087 9.087 0 0 1-1.12-.197c-.07-.011-.127-.035-.197-.046-.335-.08-.646-.185-.958-.289-.058-.023-.116-.034-.173-.058a7.334 7.334 0 0 1-1.051-.496C1.733 6.063 1.05 5.024 1.05 3.996v2.668c0 1.028.67 2.067 2.033 2.853.312.185.647.335.993.473.023 0 .035.012.058.023.058.024.115.035.173.058.197.07.404.15.612.208.116.035.231.058.347.08.07.012.127.036.196.047.058.012.116.035.173.046.231.046.45.093.693.116.081.011.162.023.255.023.057 0 .115.011.173.023.08 0 .173.023.254.023.23.023.45.035.681.035h.716c.254 0 .52-.023.774-.046.035 0 .058 0 .081-.012.07 0 .139-.023.208-.023.196-.023.404-.046.589-.081.08-.011.162-.046.254-.058.243-.046.462-.104.693-.173.116-.035.254-.058.37-.092l.277-.104c.092-.035.185-.07.265-.104.335-.139.67-.289.97-.462.024-.012.058-.035.081-.046.058-.035.116-.081.174-.116.08-.058.173-.104.254-.162.07-.046.127-.104.196-.15.07-.057.15-.115.208-.173.011-.012.035-.023.046-.035a.503.503 0 0 0 .07-.08c.103-.104.207-.208.288-.312l.07-.07a.24.24 0 0 0 .046-.069c.058-.08.115-.162.161-.242l.07-.104c0-.012.011-.035.023-.058.034-.07.07-.139.104-.22.023-.046.046-.08.058-.127 0-.011 0-.023.011-.046.023-.07.046-.138.058-.208.011-.046.034-.092.034-.138v-.035c.012-.07.024-.15.024-.22 0-.046.011-.092.011-.138V4.042v.197h.012Z",
                    fill: "#131E33",
                  }),
                  (0, s.jsx)("path", {
                    d: "M12.843 1.178c2.714 1.57 2.738 4.1.046 5.67-2.69 1.572-7.09 1.572-9.805 0C.37 5.279.37 2.749 3.06 1.179c2.69-1.57 7.068-1.57 9.782 0Z",
                    fill: "#CDE7F6",
                  }),
                  (0, s.jsx)("path", {
                    d: "M7.992 7.034c-1.651 0-3.268-.381-4.412-1.04-.981-.566-1.547-1.293-1.547-1.986 0-.693.554-1.41 1.524-1.975 1.155-.67 2.714-1.04 4.39-1.04 1.674 0 3.233.37 4.4 1.04.981.566 1.559 1.293 1.559 1.998 0 .693-.555 1.397-1.513 1.963-1.144.659-2.738 1.04-4.4 1.04Z",
                    fill: "#70B7E4",
                  }),
                ],
              }),
              (0, s.jsx)("defs", {
                children: (0, s.jsx)("clipPath", {
                  id: "coin-stacked-icon-2",
                  children: (0, s.jsx)("path", {
                    fill: "#fff",
                    d: "M0 0h17.671v24H0z",
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    41123: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { ConnectedNodesIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 21 24",
            ...t,
            children: [
              (0, s.jsx)("path", {
                d: "m10.43 21.757-8.411-4.822V7.178l8.41-4.935 8.412 4.822v9.757l-8.411 4.935Zm-7.29-5.495 7.29 4.261 7.29-4.261V7.738l-7.29-4.15-7.29 4.15v8.524Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M12.897 4.374V1.458L10.43 2.916v2.916l2.467-1.458Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "M7.962 4.374V1.458l2.468 1.458v2.916L7.962 4.374Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M12.897 1.458 10.43 0 7.962 1.458l2.468 1.458 2.467-1.458Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M5.047 8.972V6.056L2.58 7.514v2.916l2.467-1.458Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "M0 8.972V6.056l2.58 1.458v2.916L0 8.972Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M5.047 6.056 2.579 4.598 0 6.056l2.58 1.458 2.467-1.458Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M5.159 18.056V15.14l-2.58 1.458v2.916l2.58-1.458Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "M.112 18.056V15.14l2.468 1.458v2.916L.112 18.056Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "m5.16 15.14-2.58-1.458L.112 15.14l2.468 1.458 2.58-1.458Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M13.01 22.542v-2.916l-2.58 1.458V24l2.58-1.458Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "M7.962 22.542v-2.916l2.468 1.458V24l-2.468-1.458Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "m13.01 19.626-2.58-1.458-2.468 1.458 2.468 1.458 2.58-1.458Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M13.01 13.458v-2.916L10.43 12v2.916l2.58-1.458Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "M7.962 13.458v-2.916L10.43 12v2.916l-2.468-1.458Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "m13.01 10.542-2.58-1.458-2.468 1.458L10.43 12l2.58-1.458Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M20.748 18.056V15.14l-2.468 1.458v2.916l2.468-1.458Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "M15.7 18.056V15.14l2.468 1.458v2.916l-2.467-1.458Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "m20.748 15.14-2.468-1.458-2.467 1.458 2.467 1.458 2.468-1.458Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M20.748 8.411V5.495L18.28 6.953V9.87l2.468-1.458Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "M15.813 8.411V5.608l2.467 1.345V9.87l-2.467-1.458Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "m20.748 5.608-2.468-1.57-2.467 1.457 2.467 1.57 2.468-1.457Z",
                fill: "#CDE7F6",
              }),
            ],
          }),
        });
      };
    },
    41407: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { NavMenu: () => p });
      var s = t(9598),
        c = t(11950),
        i = t(92410),
        r = t(68374),
        a = t(81484),
        n = t(75391),
        o = t(14092),
        d = t(1231),
        h = t(61668),
        x = t(45602),
        u = t(780),
        v = t(76859);
      function p(e) {
        let l = (0, o.usePathname)(),
          { children: t, triggerText: p, title: f, variant: m } = e,
          { setIsMenuOpen: j } = (0, u.c)(),
          { isOpen: g, onOpen: C, onToggle: w, onClose: E } = (0, v.j1)(),
          Z = (0, c.useRef)(null),
          M = (0, c.useRef)(null),
          y = (0, c.useRef)(null);
        (0, c.useEffect)(() => {
          j();
        }, [g]);
        let b = (0, c.useCallback)(
            (e) => {
              function l(l) {
                var t;
                if (!l) return !1;
                let s = l.getBoundingClientRect();
                return (
                  (null == (t = l.parentElement)
                    ? void 0
                    : t.querySelector(":hover")) === l ||
                  (e.clientX >= s.left &&
                    e.clientX <= s.right &&
                    e.clientY >= s.top &&
                    e.clientY <= s.bottom)
                );
              }
              e.stopPropagation();
              let t = l(Z.current),
                s = l(M.current),
                c = l(y.current);
              t || s || c
                ? C()
                : document.activeElement !== M.current || t || s || c || E();
            },
            [E, C]
          ),
          L = (0, c.useMemo)(
            () =>
              (function (e) {
                let l =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  t = null;
                return function (s) {
                  t && clearTimeout(t),
                    (t = setTimeout(() => {
                      e(s);
                    }, l));
                };
              })(b),
            [b]
          );
        return (
          (0, c.useEffect)(() => {
            function e(e) {
              e.persisted && E();
            }
            return (
              window.addEventListener("pageshow", e),
              E(),
              function () {
                window.removeEventListener("pageshow", e);
              }
            );
          }, [l]),
          (0, c.useEffect)(() => {
            if (Z.current)
              return (
                document.addEventListener("mousemove", L),
                function () {
                  var e;
                  null == (e = document) ||
                    e.removeEventListener("mousemove", L);
                }
              );
          }, []),
          (0, c.useEffect)(() => {
            if (!M.current || "Resources menu" !== f) return;
            let e = M.current;
            return (
              e.addEventListener("click", E),
              function () {
                e.removeEventListener("mousemove", E);
              }
            );
          }, [E, f, null == M ? void 0 : M.current]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(x.$n, {
                variant: "text",
                className: (0, d.A)(
                  "flex items-center gap-2 p-0 text-text-md",
                  {
                    "text-gray-300 hover:text-gray-25": "transparent" === m,
                    "hover:text-primary-700": "transparent" !== m,
                  }
                ),
                onPress: C,
                ref: Z,
                "aria-expanded": g,
                children: [
                  p,
                  " ",
                  (0, s.jsx)(h.A, {
                    className: (0, d.A)(
                      "transition-transform ease-in-out duration-150",
                      { "rotate-180": g }
                    ),
                  }),
                ],
              }),
              (0, s.jsxs)(i.A, {
                className: (e) => {
                  let { isEntering: l, isExiting: t } = e;
                  return "\n        "
                    .concat(
                      l
                        ? "animate-in fade-in slide-in-from-top-3 ease-out duration-150"
                        : "",
                      "\n        "
                    )
                    .concat(
                      t
                        ? "animate-out fade-out slide-out-to-top-3 ease-in duration-150"
                        : "",
                      "\n        "
                    );
                },
                isOpen: g,
                triggerRef: Z,
                onOpenChange: w,
                children: [
                  (0, s.jsx)(r.k, {
                    ref: y,
                    className: "pointer-events-none",
                    children: (0, s.jsx)("div", {
                      className: (0, d.A)("h-2", {
                        "w-[98px]": "Products" === p,
                        "w-[100px]": "Solutions" === p,
                        "w-[76px]": " " === p,
                        "w-[108px]": "Resources" === p,
                      }),
                    }),
                  }),
                  (0, s.jsxs)(a.lG, {
                    className:
                      "overflow-hidden rounded-xl border border-gray-200 bg-white outline-none data-[focus-visible]:ring shadow-lg",
                    ref: M,
                    children: [
                      (0, s.jsx)(n.D, {
                        className: "sr-only",
                        slot: "title",
                        children: f,
                      }),
                      t,
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    42684: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { MessageSmileIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M8.5 12.5S9.813 14 12 14c2.188 0 3.5-1.5 3.5-1.5m-.75-5h.01m-5.51 0h.01M7 18v2.335c0 .533 0 .8.11.937a.5.5 0 0 0 .39.188c.176 0 .384-.167.8-.5l2.385-1.908c.487-.39.731-.585 1.002-.724.241-.122.497-.212.762-.267.299-.061.61-.061 1.235-.061H16.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 15.72 21 14.88 21 13.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8V14c0 .93 0 1.395.102 1.777a3 3 0 0 0 2.122 2.12C5.605 18 6.07 18 7 18Zm8.25-10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-5.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    43232: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { AtomIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 28, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 28 29",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M19.968 17.966c-.316.358-.648.71-.994 1.057-5.012 5.012-11.29 6.858-14.024 4.125-1.874-1.875-1.596-5.415.38-9.071m2.708-3.849a23.69 23.69 0 0 1 1.036-1.105C14.086 4.112 20.365 2.265 23.1 4.998c1.875 1.876 1.595 5.42-.384 9.079m-3.741-4.954c5.012 5.012 6.858 11.29 4.125 14.025-2.734 2.733-9.013.887-14.025-4.125C4.063 14.01 2.216 7.733 4.95 4.998c2.733-2.733 9.012-.886 14.024 4.125Zm-3.807 4.926a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0Z",
              stroke: "currentColor",
              strokeWidth: "1.667",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    44094: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { TelegramIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 24 24",
            ...t,
            children: [
              (0, s.jsx)("g", {
                clipPath: "url(#telegram-icon)",
                children: (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12ZM12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014-.568.226-.866.447-.893.663-.046.366.412.51 1.034.705.085.027.173.054.263.084.613.199 1.437.432 1.865.441.389.008.823-.152 1.302-.48 3.268-2.207 4.955-3.322 5.061-3.346.075-.017.179-.039.249.024.07.062.063.18.056.212-.046.193-1.84 1.862-2.77 2.726-.29.269-.495.46-.537.504-.094.097-.19.19-.282.279-.57.548-.996.96.024 1.632.49.323.882.59 1.273.856.427.291.853.581 1.405.943.14.092.274.187.405.28.497.355.944.673 1.496.623.32-.03.652-.331.82-1.23.397-2.126 1.179-6.73 1.36-8.628a2.123 2.123 0 0 0-.02-.472.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14-.451.008-1.143.249-4.476 1.635Z",
                  fill: "currentColor",
                }),
              }),
              (0, s.jsx)("defs", {
                children: (0, s.jsx)("clipPath", {
                  id: "telegram-icon",
                  children: (0, s.jsx)("path", {
                    fill: "#fff",
                    d: "M0 0h24v24H0z",
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    45224: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { UserCheckIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "m16 5 2 2 4-4m0 9v5.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 22 18.88 22 17.2 22H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 19.72 2 18.88 2 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 2 5.12 2 6.8 2H12M2.146 19.926A4.002 4.002 0 0 1 6 17h7c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143c.077.386.077.85.077 1.78M14 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    45602: (e, l, t) => {
      "use strict";
      t.d(l, {
        nD: () => i.Accordion,
        ub: () => a.AccordionContent,
        u: () => n.AccordionHeader,
        As: () => r.AccordionItem,
        ag: () => w.BooksIcon,
        _d: () => L.BriefcaseIcon,
        ai: () => A.BuildingIcon,
        $n: () => s.Button,
        FN: () => G.Carousel,
        DP: () => D.CogIcon,
        ql: () => Z.CoinStackedIcon2,
        a2: () => R.CommentUserIcon,
        cb: () => C.ConnectedNodesIcon,
        A3: () => y.ControllerIcon,
        G6: () => g.CreditWithCoinIcon,
        Jy: () => T.CursorBoxIcon,
        Oy: () => N.DecentralizedAtom,
        _R: () => I.EncryptedIcon,
        bM: () => O.FileCodeIcon,
        xB: () => E.HealthcareIcon,
        FO: () => c.InputField,
        $k: () => W.InputSelect,
        cW: () => _.InstitutionCheckIcon,
        ky: () => f.LinkedInIcon,
        fK: () => q,
        qe: () => U.MobileMenu,
        i9: () => M.NFTIcon,
        he: () => B.NavMenu,
        Op: () => P,
        Mz: () => S.PieSearchIcon,
        fS: () => F.PrivacyAppIcon,
        G8: () => V.SettingsProfileIcon,
        Yu: () => b.StairsIcon,
        LV: () => k.StampIcon,
        Lu: () => X.SubBanner,
        D5: () => h.T3AILogo,
        f3: () => v.T3IdentityLogo,
        bh: () => x.T3LogoOnly,
        dE: () => p.T3OracleLogo,
        xM: () => u.T3TextOnly,
        _l: () => d.T3VerifyLogo,
        hZ: () => j.TelegramIcon,
        A_: () => o.TextField,
        uv: () => m.XIcon,
        Cv: () => z.Cv,
        ZE: () => z.ZE,
        ES: () => z.ES,
        lN: () => z.lN,
      });
      var s = t(5045),
        c = t(26641),
        i = t(87454),
        r = t(57503),
        a = t(46577),
        n = t(2465),
        o = t(35732);
      t(53085),
        t(60688),
        t(45224),
        t(47175),
        t(55868),
        t(98545),
        t(48821),
        t(24016),
        t(42684),
        t(60013),
        t(68949),
        t(59762),
        t(9073),
        t(54985);
      var d = t(47701),
        h = t(32764),
        x = t(64240),
        u = t(35888),
        v = t(76300),
        p = t(24560),
        f = t(97021),
        m = t(78947);
      t(79898), t(84770);
      var j = t(44094),
        g = t(30471),
        C = t(41123),
        w = t(54697),
        E = t(78618),
        Z = t(41057),
        M = t(68459),
        y = t(67767),
        b = t(54633),
        L = t(21435);
      t(75394);
      var A = t(57179);
      t(50403), t(43232), t(25759);
      var I = t(63351),
        N = t(1549),
        F = t(52874),
        k = t(80042),
        V = t(53181),
        _ = t(53541),
        D = t(79114),
        R = t(29177),
        S = t(83473),
        T = t(70186),
        O = t(11826);
      t(2754);
      var B = t(41407),
        H = t(9598);
      function P(e) {
        let {
          icon: l,
          title: t,
          subtitle: s,
          titleTag: c,
          href: i = "/",
          isOutside: r = !1,
        } = e;
        return (0, H.jsxs)("a", {
          className:
            "flex rounded-xl cursor-pointer hover:bg-gray-50 p-2 gap-3 items-start h-auto",
          href: i,
          target: r ? "_blank" : "_self",
          children: [
            (0, H.jsx)("div", { className: "text-primary-600", children: l }),
            (0, H.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, H.jsxs)("h3", {
                  className:
                    "font-bold text-text-md text-gray-900 flex items-center gap-2",
                  children: [
                    t,
                    " ",
                    c &&
                      (0, H.jsx)("span", {
                        className:
                          "bg-success-50 text-success-700 py-[2px] px-[10px] rounded-full text-text-sm font-medium",
                        children: c,
                      }),
                  ],
                }),
                (0, H.jsx)("p", {
                  className: "text-text-sm text-gray-600",
                  children: s,
                }),
              ],
            }),
          ],
        });
      }
      var U = t(3724),
        G = t(13888);
      t(97255), t(30027), t(2870);
      var z = t(54975);
      t(89514), t(15152);
      var W = t(46291),
        Q = t(1231),
        $ = t(81394),
        Y = t.n($);
      let q = (e) => {
        let { color: l, size: t = 16, text: s } = e;
        return (0, H.jsxs)("div", {
          className: (0, Q.A)(Y().indicator),
          children: [
            (0, H.jsx)("div", {
              className: Y().loader,
              style: { fontSize: t, color: l },
              children: (0, H.jsx)("svg", {
                className: Y().circularLoader,
                viewBox: "25 25 50 50",
                children: (0, H.jsx)("circle", {
                  className: Y().loaderPath,
                  cx: "50",
                  cy: "50",
                  r: "20",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "6",
                }),
              }),
            }),
            s && (0, H.jsx)("div", { className: Y().text, children: s }),
          ],
        });
      };
      var X = t(58415);
      t(39582);
    },
    46291: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { InputSelect: () => o });
      var s = t(9598),
        c = t(11950),
        i = t(31877),
        r = t(89650),
        a = t(1231);
      let n = (0, r.default)(() => t.e(7410).then(t.bind(t, 97410)), {
          loadableGenerated: { webpack: () => [97410] },
          ssr: !1,
          loading: () =>
            (0, s.jsx)("div", {
              className: "min-h-[44px]",
              children: "Loading...",
            }),
        }),
        o = (0, c.forwardRef)((e, l) => {
          let {
              label: t,
              name: c,
              error: r,
              control: o,
              optional: d,
              ...h
            } = e,
            x = !!(null == r ? void 0 : r.message);
          return (0, s.jsxs)("div", {
            className: "flex flex-col gap-1.5 relative",
            children: [
              t &&
                (0, s.jsxs)("div", {
                  className: "text-text-sm font-medium text-gray-700",
                  children: [
                    t,
                    " ",
                    d &&
                      (0, s.jsx)("span", {
                        className: "text-text-xs text-gray-400",
                        children: "(Optional)",
                      }),
                  ],
                }),
              (0, s.jsx)(i.xI, {
                control: o,
                name: c,
                render: (e) => {
                  var t;
                  let {
                    field: { onChange: c, value: i, ...r },
                  } = e;
                  return (0, s.jsx)(n, {
                    ...r,
                    ...h,
                    ref: l,
                    styles: {
                      input: (e) => ({
                        ...e,
                        "> input": { boxShadow: "none !important" },
                      }),
                    },
                    classNames: {
                      container: () => "!outline-none",
                      control: (e) => {
                        let l =
                          "shadow-xs h-[44px] w-full !border-gray-300 !rounded-lg";
                        return e.isFocused
                          ? l +
                              " !border-primary-500 !shadow-none ring-1 ring-primary-500"
                          : l;
                      },
                      placeholder: () => "!text-gray-400",
                      menu: () => "!mt-1",
                      menuList: () => "!py-1.5",
                      option: (e) => {
                        let l = ["!mb-1 !relative !cursor-pointer"];
                        return (
                          e.isFocused && l.push("!bg-gray-200"),
                          e.isSelected &&
                            l.push("!bg-primary-900 !text-base-white"),
                          l.join(" ")
                        );
                      },
                    },
                    onChange: (e) => {
                      c(null == e ? void 0 : e.value);
                    },
                    value:
                      (null == (t = h.options)
                        ? void 0
                        : t.find((e) => e.value === i)) || null,
                  });
                },
              }),
              x &&
                (0, s.jsx)("div", {
                  className: (0, a.A)(
                    "opacity-0 ease-linear duration-200 text-error-600",
                    { "opacity-100": x }
                  ),
                  children: null == r ? void 0 : r.message,
                }),
            ],
          });
        });
    },
    46577: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { AccordionContent: () => o });
      var s = t(9598),
        c = t(20704),
        i = t(35028),
        r = t(11676),
        a = t(87454),
        n = t(57503);
      function o(e) {
        let { children: l, className: t = "" } = e,
          { id: o } = (0, a.useAccordion)(),
          { isExpanded: d, index: h } = (0, n.useAccordionItem)();
        return (0, s.jsx)(c.N, {
          children:
            d &&
            (0, s.jsx)(i.P.div, {
              role: "region",
              "aria-labelledby": "accordion-button-".concat(o, "-").concat(h),
              id: "accordion-panel-".concat(o, "-").concat(h),
              initial: { height: 0, opacity: 0 },
              transition: { duration: 0.15 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              children: (0, s.jsx)("div", {
                className: (0, r.QP)("pt-2", t),
                children: l,
              }),
            }),
        });
      }
    },
    47175: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { VerifiedIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "m9 12 2 2 4.5-4.5m2.401-4.501c.206.498.601.893 1.1 1.1l1.744.723a2.033 2.033 0 0 1 1.1 2.656l-.722 1.744a2.03 2.03 0 0 0 0 1.556l.722 1.744a2.033 2.033 0 0 1-1.1 2.656L19 17.901A2.033 2.033 0 0 0 17.9 19l-.723 1.745a2.032 2.032 0 0 1-2.656 1.1l-1.744-.722a2.032 2.032 0 0 0-1.555 0l-1.745.723a2.033 2.033 0 0 1-2.654-1.1L6.1 19.001A2.033 2.033 0 0 0 5 17.9l-1.744-.723a2.033 2.033 0 0 1-1.1-2.654l.721-1.744a2.033 2.033 0 0 0 0-1.556l-.722-1.746a2.033 2.033 0 0 1 1.1-2.657L5 6.098c.498-.206.893-.6 1.1-1.098l.723-1.745a2.033 2.033 0 0 1 2.656-1.1l1.744.722a2.033 2.033 0 0 0 1.555-.001l1.746-.72a2.032 2.032 0 0 1 2.655 1.1l.723 1.746v-.003Z",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    47275: (e, l, t) => {
      "use strict";
      t.d(l, {
        Sj: () => s.Sj,
        Ug: () => s.Ug,
        Uo: () => s.Uo,
        g0: () => s.g0,
        w9: () => s.w9,
      });
      var s = t(97892);
      t(71721);
    },
    47701: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { T3VerifyLogo: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) =>
        (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "26",
            height: "30",
            fill: "none",
            ...e,
            children: [
              (0, s.jsx)("path", {
                d: "M0 7.5v15L12.98 30V15L0 7.5Z",
                fill: "#12B76A",
              }),
              (0, s.jsx)("path", {
                d: "M25.961 22.5v-15L12.981 15v15l12.98-7.5Z",
                fill: "#054F31",
              }),
              (0, s.jsx)("path", {
                d: "M12.98 0 0 7.5 12.98 15l12.982-7.5L12.98 0Z",
                fill: "#6CE9A6",
              }),
              (0, s.jsx)("path", {
                d: "m12.98 15-6.49-3.75v5.156l6.49 3.75",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "m12.98 20.156 12.981-7.5V7.5L12.981 15",
                fill: "#D1FADF",
              }),
            ],
          }),
        });
    },
    48821: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { PieChartIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M12 2a10 10 0 0 1 10 10M12 2v10m0-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10M12 2c5.523 0 10 4.477 10 10m0 0H12m10 0a10 10 0 0 1-4.122 8.09L12 12",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    50403: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { DataFlowIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 28, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 28 29",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M4.667 21.046v-.234c0-1.96 0-2.94.382-3.689a3.5 3.5 0 0 1 1.53-1.53c.748-.38 1.728-.38 3.688-.38h7.467c1.96 0 2.94 0 3.689.38a3.5 3.5 0 0 1 1.53 1.53c.381.749.381 1.73.381 3.69v.233m-18.667 0a2.333 2.333 0 1 0 0 4.666 2.333 2.333 0 0 0 0-4.666Zm18.667 0a2.333 2.333 0 1 0 0 4.666 2.333 2.333 0 0 0 0-4.666Zm-9.333 0a2.333 2.333 0 1 0 0 4.666 2.333 2.333 0 0 0 0-4.666Zm0 0V9.379m-7 0h14c1.087 0 1.63 0 2.06-.178a2.333 2.333 0 0 0 1.262-1.263c.178-.428.178-.972.178-2.06 0-1.086 0-1.63-.178-2.059a2.333 2.333 0 0 0-1.263-1.262c-.429-.178-.972-.178-2.06-.178H7c-1.087 0-1.63 0-2.059.178a2.333 2.333 0 0 0-1.263 1.262c-.177.43-.177.973-.177 2.06 0 1.087 0 1.63.177 2.06A2.333 2.333 0 0 0 4.941 9.2c.429.178.972.178 2.06.178Z",
              stroke: "currentColor",
              strokeWidth: "1.667",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    52874: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { PrivacyAppIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 36, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 36 36",
            ...t,
            children: [
              (0, s.jsx)("path", {
                d: "M12.04 14.184H2.811a2.477 2.477 0 0 1-2.478-2.479V2.478A2.482 2.482 0 0 1 2.812 0h9.227a2.482 2.482 0 0 1 2.479 2.478v9.227a2.482 2.482 0 0 1-2.479 2.479ZM2.811 1.343c-.622 0-1.126.504-1.126 1.126v9.227c0 .622.504 1.127 1.126 1.127h9.227c.622 0 1.127-.505 1.127-1.127V2.47c0-.622-.505-1.126-1.127-1.126H2.812ZM28.041 14.184h-9.227a2.477 2.477 0 0 1-2.478-2.479V2.478A2.482 2.482 0 0 1 18.814 0h9.227a2.482 2.482 0 0 1 2.478 2.478v9.227a2.482 2.482 0 0 1-2.478 2.479ZM18.814 1.343c-.622 0-1.126.504-1.126 1.126v9.227c0 .622.504 1.127 1.126 1.127h9.227c.622 0 1.127-.505 1.127-1.127V2.47c0-.622-.505-1.126-1.127-1.126h-9.227ZM12.04 30.18H2.811A2.477 2.477 0 0 1 .334 27.7v-9.227a2.482 2.482 0 0 1 2.478-2.478h9.227a2.477 2.477 0 0 1 2.479 2.478v9.227a2.482 2.482 0 0 1-2.479 2.479ZM2.811 17.348c-.622 0-1.126.504-1.126 1.126v9.227c0 .622.504 1.127 1.126 1.127h9.227c.622 0 1.127-.505 1.127-1.127v-9.227c0-.622-.505-1.126-1.127-1.126H2.812ZM22.653 30.18h-3.839a2.477 2.477 0 0 1-2.478-2.479v-9.227a2.482 2.482 0 0 1 2.478-2.478h9.227a2.477 2.477 0 0 1 2.478 2.478v1.983a.68.68 0 0 1-.675.675.68.68 0 0 1-.676-.675v-1.983c0-.622-.505-1.126-1.127-1.126h-9.227c-.622 0-1.126.504-1.126 1.126v9.227c0 .622.504 1.127 1.126 1.127h3.839a.68.68 0 0 1 .676.676.68.68 0 0 1-.676.676Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M34.638 23.494a7.98 7.98 0 0 1-2-.468 7.717 7.717 0 0 1-2.154-1.217 1.042 1.042 0 0 0-1.289 0 7.98 7.98 0 0 1-4.154 1.685 1.04 1.04 0 0 0-.955 1.036v5.164a5.712 5.712 0 0 0 3.18 5.145l2.1 1.054c.154.072.316.108.469.108.162 0 .324-.036.469-.108l2.108-1.054a5.72 5.72 0 0 0 3.172-5.145V24.53a1.026 1.026 0 0 0-.946-1.036Zm-4.803 1.307c.865 0 1.559.694 1.559 1.55a1.56 1.56 0 0 1-1.559 1.559c-.865 0-1.55-.694-1.55-1.56 0-.865.694-1.55 1.55-1.55Zm2.586 6.407h-5.163a.364.364 0 0 1-.36-.424 2.971 2.971 0 0 1 5.884 0 .364.364 0 0 1-.36.424Z",
                fill: "#CDE7F6",
              }),
            ],
          }),
        });
      };
    },
    53085: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { T3LogoFull: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) =>
        (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            width: "150",
            height: "30",
            viewBox: "0 0 250 53",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, s.jsx)("path", {
                d: "M30.224 13.638 22.352 0 0 38.684l7.872 13.638 7.874-13.639 7.942 13.714 7.875-13.638-7.94-13.713 6.601-11.408Z",
                fill: "#17253F",
              }),
              (0, s.jsx)("path", {
                d: "m22.352 0 7.872 13.638h21.22L43.57 0h-21.22Z",
                fill: "#7AC8EE",
              }),
              (0, s.jsx)("path", {
                d: "m51.444 13.638-6.601 11.408-13.28.059 6.658-11.467h13.223Z",
                fill: "#3D6477",
              }),
              (0, s.jsx)("path", {
                d: "m31.563 38.76 21.091-.02-7.874 13.638-21.091.02 7.874-13.639Z",
                fill: "#7AC8EE",
              }),
              (0, s.jsx)("path", {
                d: "m31.563 25.105 13.28-.06 7.811 13.696-13.188-.002-7.904-13.634Z",
                fill: "#3D6477",
              }),
              (0, s.jsx)("path", {
                d: "M92.897 13.606c.31 0 .463.154.463.463v4.021c0 .31-.154.463-.463.463h-6.92V37.92c0 .31-.153.465-.462.465h-4.522c-.31 0-.463-.153-.463-.465V18.553h-7.035c-.31 0-.463-.155-.463-.463V14.07c0-.31.154-.463.463-.463h19.406-.004ZM94.443 22.884c1.663-1.7 3.866-2.55 6.61-2.55 2.59 0 4.678.772 6.262 2.319 1.585 1.547 2.397 3.596 2.397 6.109 0 .618-.038 1.275-.156 1.931-.038.272-.193.426-.503.426H97.301c.193 2.05 1.972 3.402 4.406 3.402 1.972-.038 3.479-.656 4.6-1.856.194-.271.425-.271.657 0l2.203 2.435c.194.231.231.463.038.657-1.663 1.893-4.562 3.13-7.809 3.13-2.86 0-5.141-.85-6.881-2.552-1.74-1.7-2.59-3.943-2.59-6.765 0-2.822.85-4.987 2.512-6.688l.006.002Zm9.897 4.638c-.116-1.662-1.431-2.784-3.479-2.784-2.047 0-3.362 1.082-3.518 2.784h6.997ZM124.096 20.72c.271.039.425.194.425.504v3.943c0 .347-.156.463-.503.425a5.953 5.953 0 0 0-1.198-.115c-2.049 0-3.865.965-4.677 2.512v9.934c0 .31-.156.465-.465.465h-4.447c-.309 0-.465-.153-.465-.465V21.417c0-.31.156-.463.465-.463h4.447c.309 0 .465.154.465.463v1.391c.965-1.469 2.55-2.203 4.715-2.203.425 0 .851.038 1.238.116ZM156.218 27.872v10.05c0 .31-.154.465-.463.465h-4.406c-.31 0-.463-.154-.463-.465v-9.2c0-2.32-.966-3.479-2.938-3.479-1.547 0-2.668.619-3.403 1.816.038.194.038.465.038.813v10.05c0 .31-.153.465-.463.465h-4.446c-.309 0-.465-.154-.465-.465v-9.2c0-2.32-.966-3.479-2.9-3.479-1.584 0-2.744.619-3.403 1.816v10.863c0 .31-.153.465-.462.465h-4.447c-.309 0-.463-.154-.463-.465V21.416c0-.31.154-.463.463-.463h4.447c.309 0 .462.153.462.463v.618c1.316-1.121 2.938-1.7 4.872-1.7 2.359 0 4.137.85 5.334 2.512 1.353-1.506 3.75-2.512 6.109-2.512 4.329 0 6.997 2.9 6.997 7.538ZM159.311 14.96c0-1.973 1.547-3.441 3.596-3.441 2.05 0 3.594 1.468 3.594 3.44s-1.546 3.44-3.594 3.44c-2.047 0-3.596-1.546-3.596-3.44Zm1.353 23.424c-.309 0-.463-.153-.463-.465V21.413c0-.31.154-.463.463-.463h4.447c.309 0 .465.154.465.463v16.506c0 .31-.154.465-.465.465h-4.447ZM187.259 27.872v10.05c0 .31-.153.465-.462.465h-4.447c-.309 0-.465-.154-.465-.465v-9.2c0-2.32-1.122-3.479-3.325-3.479-1.584 0-2.744.619-3.402 1.816v10.863c0 .31-.154.465-.465.465h-4.447c-.309 0-.463-.154-.463-.465V21.416c0-.31.154-.463.463-.463h4.447c.309 0 .465.153.465.463v.618c1.315-1.121 2.977-1.7 4.947-1.7 4.213 0 7.15 2.784 7.15 7.538h.004ZM204.271 21.416c0-.31.153-.463.462-.463h4.447c.309 0 .465.153.465.463v16.506c0 .31-.154.465-.465.465h-4.447c-.309 0-.462-.154-.462-.465v-.89c-1.238 1.237-2.978 1.856-5.257 1.856-2.59 0-4.678-.85-6.263-2.513-1.584-1.7-2.358-3.943-2.358-6.727 0-2.784.774-5.063 2.358-6.765 1.585-1.7 3.713-2.551 6.301-2.551 2.281 0 4.019.619 5.219 1.816v-.734.002Zm0 10.437V27.37c-.657-1.275-2.244-2.166-3.982-2.166-2.628 0-4.406 1.779-4.406 4.445 0 2.666 1.778 4.368 4.406 4.368 1.818 0 3.363-.89 3.982-2.165v.002ZM214.05 38.387c-.309 0-.463-.154-.463-.465v-23.85c0-.31.154-.464.463-.464h4.446c.31 0 .465.154.465.463v23.85c0 .31-.153.466-.465.466h-4.446ZM243.544 23.077c3.903.58 6.456 3.441 6.456 7.422 0 2.435-.89 4.407-2.628 5.953-1.738 1.547-3.944 2.32-6.688 2.32-2.434 0-4.484-.62-6.146-1.895-1.663-1.275-2.629-2.977-2.9-5.102-.038-.31.078-.503.387-.541l4.369-.85c.309-.038.502.078.54.425.194 1.894 1.701 3.169 3.828 3.169 2.128 0 3.828-1.391 3.828-3.597 0-2.205-1.509-3.44-3.788-3.556l-2.628-.038h-.116c-.271 0-.465-.115-.541-.387l-.734-2.822a.647.647 0 0 1 .193-.618l4.832-4.716h-8.388c-.309 0-.463-.154-.463-.463v-3.712c0-.31.154-.463.463-.463h14.806c.309 0 .463.154.463.463v3.556a.797.797 0 0 1-.231.581l-4.91 4.871h-.004Z",
                fill: "#17253F",
              }),
            ],
          }),
        });
    },
    53181: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { SettingsProfileIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 37, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 37 36",
            ...t,
            children: [
              (0, s.jsx)("path", {
                d: "M18.122 5.279H1.018a.691.691 0 0 1-.686-.686c0-.376.311-.687.686-.687h17.104c.375 0 .686.311.686.687a.691.691 0 0 1-.686.686ZM30.3 5.279h-3.422a.691.691 0 0 1-.687-.686c0-.376.312-.687.687-.687H30.3c.375 0 .687.311.687.687a.691.691 0 0 1-.687.686Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M22.5 9.188a4.597 4.597 0 0 1-4.594-4.594A4.597 4.597 0 0 1 22.5 0a4.597 4.597 0 0 1 4.594 4.594A4.597 4.597 0 0 1 22.5 9.188Zm0-7.806a3.226 3.226 0 0 0-3.221 3.221A3.226 3.226 0 0 0 22.5 7.824a3.226 3.226 0 0 0 3.221-3.22 3.226 3.226 0 0 0-3.22-3.222ZM13.784 26.3H1.018a.691.691 0 0 1-.686-.686c0-.375.311-.686.686-.686h12.766c.376 0 .687.31.687.686a.691.691 0 0 1-.687.686ZM23.943 26.3H21.6a.691.691 0 0 1-.686-.686c0-.375.311-.686.686-.686h2.343c.375 0 .686.31.686.686a.691.691 0 0 1-.686.686Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M17.695 30.21a4.597 4.597 0 0 1-4.593-4.595 4.597 4.597 0 0 1 4.593-4.593 4.597 4.597 0 0 1 4.594 4.593 4.597 4.597 0 0 1-4.594 4.594Zm0-7.816a3.226 3.226 0 0 0-3.22 3.221 3.226 3.226 0 0 0 3.22 3.222 3.226 3.226 0 0 0 3.222-3.222 3.226 3.226 0 0 0-3.222-3.22ZM3.105 15.795H1.018a.691.691 0 0 1-.686-.687c0-.375.311-.686.686-.686h2.087c.375 0 .686.311.686.686a.691.691 0 0 1-.686.687ZM30.307 15.795H11.858a.691.691 0 0 1-.686-.687c0-.375.311-.686.686-.686h18.45c.374 0 .686.311.686.686a.691.691 0 0 1-.687.687Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M7.477 19.703a4.597 4.597 0 0 1-4.594-4.593 4.597 4.597 0 0 1 4.594-4.594 4.597 4.597 0 0 1 4.594 4.594 4.597 4.597 0 0 1-4.594 4.593Zm0-7.815a3.226 3.226 0 0 0-3.222 3.222 3.226 3.226 0 0 0 3.222 3.22 3.226 3.226 0 0 0 3.221-3.22 3.226 3.226 0 0 0-3.221-3.222Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "m36.602 25.357-3.688-3.679a.873.873 0 0 0-.66-.284H26.17a.947.947 0 0 0-.942.943v12.72c0 .522.42.943.942.943h9.765c.521 0 .942-.421.942-.943v-9.032a.905.905 0 0 0-.274-.668Zm-5.555-.156c.942 0 1.702.76 1.702 1.703 0 .942-.76 1.693-1.702 1.693a1.69 1.69 0 0 1-1.693-1.693c0-.934.76-1.703 1.693-1.703Zm2.818 6.992h-5.628a.4.4 0 0 1-.393-.467 3.235 3.235 0 0 1 3.203-2.773 3.244 3.244 0 0 1 3.212 2.773.4.4 0 0 1-.394.467Z",
                fill: "#CDE7F6",
              }),
            ],
          }),
        });
      };
    },
    53541: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { InstitutionCheckIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 37, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 37 36",
            ...t,
            children: [
              (0, s.jsx)("path", {
                d: "M23.456 31.395H2.27a.689.689 0 0 1-.684-.684v-3.646c0-.374.31-.684.684-.684h21.186c.373 0 .683.31.683.684 0 .373-.31.683-.683.683H2.953v2.28h20.503c.373 0 .683.31.683.683 0 .374-.31.684-.683.684ZM30.083 10.848H1.804c-.52 0-.957-.337-1.094-.83a1.125 1.125 0 0 1 .502-1.276L15.352.164a1.136 1.136 0 0 1 1.175 0l14.14 8.578c.446.265.646.784.51 1.277-.137.492-.584.83-1.094.83ZM2.625 9.481H29.27L15.954 1.404 2.633 9.48h-.008Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M5.918 27.157a.689.689 0 0 1-.684-.683v-16.3c0-.374.31-.684.684-.684.374 0 .684.31.684.684v16.3c0 .373-.31.683-.684.683ZM9.567 27.157a.689.689 0 0 1-.684-.683v-16.3c0-.374.31-.684.684-.684.373 0 .683.31.683.684v16.3c0 .373-.31.683-.683.683ZM14.121 27.157a.689.689 0 0 1-.684-.683v-16.3c0-.374.31-.684.684-.684.374 0 .684.31.684.684v16.3c0 .373-.31.683-.684.683ZM17.77 27.157a.689.689 0 0 1-.684-.683v-16.3c0-.374.31-.684.684-.684.373 0 .683.31.683.684v16.3c0 .373-.31.683-.683.683ZM22.328 27.157a.689.689 0 0 1-.683-.683v-16.3c0-.374.31-.684.683-.684.374 0 .684.31.684.684v16.3c0 .373-.31.683-.684.683ZM25.973 24.55a.689.689 0 0 1-.684-.684V10.174c0-.374.31-.684.684-.684.373 0 .684.31.684.684v13.692c0 .374-.31.684-.684.684Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M30.719 23.547a6.223 6.223 0 0 0-6.227 6.226A6.223 6.223 0 0 0 30.72 36a6.217 6.217 0 0 0 6.226-6.227 6.223 6.223 0 0 0-6.226-6.226Zm3.537 4.95-3.847 3.838a.683.683 0 0 1-.967 0l-2.106-2.106a.688.688 0 0 1 0-.966.672.672 0 0 1 .967 0l1.622 1.622 3.364-3.354a.672.672 0 0 1 .967 0 .688.688 0 0 1 0 .966Z",
                fill: "#CDE7F6",
              }),
            ],
          }),
        });
      };
    },
    54633: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { StairsIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 24 24",
            ...t,
            children: [
              (0, s.jsxs)("g", {
                clipPath: "url(#stairs-icon)",
                children: [
                  (0, s.jsx)("path", {
                    d: "m-.438 15.29 9.214-5.059 9.213 5.06-9.213 5.058-9.213-5.059Z",
                    fill: "#CDE7F6",
                  }),
                  (0, s.jsx)("path", {
                    d: "M-.438 15.29v3.651L8.777 24v-3.651L-.437 15.29Z",
                    fill: "#70B7E4",
                  }),
                  (0, s.jsx)("path", {
                    d: "M17.99 15.29v3.651L8.775 24v-3.651l9.213-5.059Z",
                    fill: "#131E33",
                  }),
                  (0, s.jsx)("path", {
                    d: "m2.35 10.168 9.213-5.059 9.213 5.059-9.213 5.059-9.214-5.059Z",
                    fill: "#CDE7F6",
                  }),
                  (0, s.jsx)("path", {
                    d: "M2.35 10.168v3.651l9.213 5.059v-3.651l-9.214-5.059Z",
                    fill: "#70B7E4",
                  }),
                  (0, s.jsx)("path", {
                    d: "M20.776 10.168v3.651l-9.213 5.059v-3.651l9.213-5.059Z",
                    fill: "#131E33",
                  }),
                  (0, s.jsx)("path", {
                    d: "M5.136 5.059 14.349 0l9.213 5.059-9.213 5.058L5.136 5.06Z",
                    fill: "#CDE7F6",
                  }),
                  (0, s.jsx)("path", {
                    d: "M5.136 5.059v3.65l9.213 5.06v-3.652L5.136 5.06Z",
                    fill: "#70B7E4",
                  }),
                  (0, s.jsx)("path", {
                    d: "M23.563 5.059v3.65l-9.214 5.06v-3.652l9.213-5.058Z",
                    fill: "#131E33",
                  }),
                  (0, s.jsx)("path", {
                    d: "m16.163 9.116 7.4-4.057v10.814l-7.387 4.07",
                    fill: "#131E33",
                  }),
                ],
              }),
              (0, s.jsx)("defs", {
                children: (0, s.jsx)("clipPath", {
                  id: "stairs-icon",
                  children: (0, s.jsx)("path", {
                    fill: "#fff",
                    transform: "translate(-.438)",
                    d: "M0 0h24v24H0z",
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    54697: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { BooksIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 21 24",
            ...t,
            children: [
              (0, s.jsx)("path", {
                d: "M20.758 15.577V18l-10.385 6v-2.423l10.385-6Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "m-.012 15.577 10.385-6 10.385 6-10.385 6-10.385-6Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M10.373 2.423V12l-8.308 4.846V7.154l8.308-4.73Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "M10.373 0-.012 6l10.385 6 10.385-6-10.385-6ZM-.012 12.346v2.423l10.385 6v-2.423l-10.385-6ZM20.758 12.346v2.423l-10.385 6v-2.423l10.385-6Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "m-.012 12.346 10.385-6 10.385 6-10.385 6-10.385-6Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M-.012 9.23v2.424l10.385 6V15.23l-10.385-6ZM20.758 9.23v2.424l-10.385 6V15.23l10.385-6Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "m-.012 9.23 10.385-6 10.385 6-10.385 6-10.385-6Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M20.758 6v2.423l-10.385 6V12l10.385-6Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "m-.012 6 10.385-6 10.385 6-10.385 6L-.012 6Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "m2.065 9.692 8.308 4.731V12l-2.077-1.154L-.012 6v12l6.462 3.692 1.846 1.154L10.373 24v-2.423L2.065 16.73V9.692Z",
                fill: "#131E33",
              }),
            ],
          }),
        });
      };
    },
    54975: (e, l, t) => {
      "use strict";
      t.d(l, { Cv: () => n, ES: () => o, ZE: () => r, lN: () => a });
      var s = t(14734),
        c = t(67529),
        i = t(45602);
      let r = {
          title: "Products",
          items: [
            {
              icon: i.dE,
              title: "Oracle",
              subtitle: "The Authoritative Oracle for Digital Identity",
              link: "/products/oracle",
            },
            {
              icon: i.f3,
              title: "T3 Identity",
              subtitle: "DIDs & Secure Data Storage for Any Business",
              link: "/products/t3-identity",
            },
            {
              icon: i._l,
              title: "T3 Verify",
              subtitle: "Verifiable Credentials & KYC for the New Internet",
              link: "/products/t3-verify",
            },
            {
              icon: i.D5,
              title: "Agent Auth",
              subtitle: "Authentication and Authorization for AI Agents",
              link: "/products/ai",
            },
          ],
        },
        a = {
          title: "Solutions",
          items: [
            {
              icon: i.G6,
              title: "Financial Services",
              subtitle:
                "Enhance reusable identity with unmatched security, privacy, and compliance",
              link: "/solutions/financial-services",
            },
            {
              icon: i.cb,
              title: "Permissioned DeFi",
              subtitle:
                "Access new liquidity pools with institutional-grade compliance",
              link: "/solutions/defi",
            },
            {
              icon: i.ql,
              title: "RWA & Stablecoins",
              subtitle: "Create a new privacy-enabled financial ecosystem",
              link: "/solutions/rwa-and-stablecoins",
            },
            {
              icon: i.ag,
              title: "Education",
              subtitle: "Empower learners and teachers with academic integrity",
              link: "/solutions/education",
            },
            {
              icon: i.xB,
              title: "Healthcare",
              subtitle:
                "Optimize digital medicine with privacy-preserving patient identity",
              link: "/solutions/healthcare",
            },
            {
              icon: i.i9,
              title: "NFT Projects",
              subtitle: "Drive purposeful engagement and grow your community",
              link: "/solutions/nft",
            },
            {
              icon: i.A3,
              title: "Gaming",
              subtitle:
                "Empower gamers with cross-game player identity and profiles",
              link: "/solutions/gaming",
            },
            {
              icon: i.Yu,
              title: "Protocols",
              subtitle:
                "Enable faster development and enhanced use cases with verifiable identity",
              link: "/solutions/protocols",
            },
            {
              icon: i.ai,
              title: "Government",
              subtitle:
                "Safeguard privacy, prevent fraud, increase trade, and enhance Smart Nation capabilities",
              link: "/solutions/government",
            },
          ],
        },
        n = {
          title: " ",
          items: [
          ],
        },
        o = {
          title: "Resources",
          items: [
            {
              icon: i.bM,
              title: "Documentation",
              subtitle: "Explore our technology and build on our platform",
              link: "https://docs.terminal3.io/",
              isOutside: !0,
            },
            {
              icon: c.A,
              title: "Trading Scan",
              subtitle:
                "Read deep dives on industry news, product announcements, and more",
              link: "https://blog.terminal3.io/",
              isOutside: !0,
            },
            {
              icon: i.Jy,
              title: "Join Community",
              subtitle: "View logos, images and T3 AI's brand guidelines",
              link: "https://t.me",
              isOutside: !0,
            },
          ],
        };
    },
    54985: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { CoinSwapIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "m6 6 2-2m0 0L6 2m2 2H6a4 4 0 0 0-4 4m16 10-2 2m0 0 2 2m-2-2h2a4 4 0 0 0 4-4m-8.583-2.583a6 6 0 1 0-2.834-2.834M14 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    55868: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { BreakoutIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M15.5 3.5V2m3.94 2.56L20.5 3.5m.01 5h1.5m-.06 4.5c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95M12 8h4v4m-.38-4A12.984 12.984 0 0 1 5 13.5c-1.003 0-1.98-.114-2.917-.329",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    57179: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { BuildingIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 63 64",
            ...t,
            children: [
              (0, s.jsx)("path", {
                d: "m62.27 38.745-31.135-17.99L0 38.746l6.227 3.46 6.227 3.459 6.227 3.46 12.454 7.264 18.681-10.724 6.227-3.46 6.227-3.459Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "M62.27 38.746v7.265L37.362 60.195 31.135 64v-7.265l18.68-10.724 6.228-3.805 6.227-3.46Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M31.135 56.735V64L0 46.011v-7.265l31.135 17.99Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M25.254 19.72v26.985l-3.806 2.075V22.142l3.806-2.421Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M21.448 22.142V48.78l-3.805-2.075V19.72l3.805 2.421Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "m25.253 19.72-3.805 2.422-3.805-2.422 3.805-2.075 3.805 2.075ZM34.941 14.531V41.17l-3.805 2.422V16.953l3.805-2.422Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M31.136 16.953V43.59l-3.806-2.422V14.531l3.806 2.422Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "m34.94 14.531-3.804 2.422-3.806-2.422 3.806-2.422 3.805 2.422ZM44.628 9.342V35.98L40.822 38.4V11.417l3.806-2.075Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M40.822 11.418V38.4l-3.805-2.421V9.342l3.805 2.075Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "m44.627 9.342-3.805 2.075-3.805-2.075 3.805-2.422 3.805 2.422Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M35.289 4.843 26.986 0l18.681.692 8.303 5.19L35.29 4.842Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "M35.288 4.844 53.97 5.882 16.607 27.33 35.288 4.844Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "m16.607 27.33-8.302-5.19L26.985 0l8.303 4.843-18.68 22.487Z",
                fill: "#131E33",
              }),
            ],
          }),
        });
      };
    },
    57503: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { AccordionItem: () => o, useAccordionItem: () => n });
      var s = t(9598),
        c = t(11950),
        i = t(11676),
        r = t(87454);
      let a = (0, c.createContext)({ isExpanded: !1, index: -1 });
      function n() {
        let e = (0, c.useContext)(a);
        if (void 0 === e)
          throw Error(
            "useAccordionItem must be use within AccordionItemContext"
          );
        return e;
      }
      function o(e) {
        let { children: l, index: t = -1, className: c = "" } = e,
          { activeIndex: n } = (0, r.useAccordion)();
        if (-1 === t)
          throw Error("AccordionItem must have an non-negative index");
        return (0, s.jsx)(a.Provider, {
          value: { isExpanded: n === t, index: t },
          children: (0, s.jsx)("div", {
            className: (0, i.QP)(
              "border-t border-gray-200 first:border-t-0 pt-6 first:pt-0 flex flex-col",
              c
            ),
            children: l,
          }),
        });
      }
    },
    58415: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { SubBanner: () => d });
      var s = t(9598),
        c = t(81876),
        i = t(97255),
        r = t(1231),
        a = t(11676),
        n = t(47275),
        o = t(76859);
      let d = (e) => {
        let {
            bg: l,
            fg: t,
            fgSpeed: d,
            header: h,
            body: x,
            bgSpeed: u = -30,
            bgSize: v = "contain",
            bgPosition: p = "center",
            fgHeight: f = 185,
            fgWidthMobile: m = 279,
            className: j,
          } = e,
          g = (0, o.Ub)(n.w9),
          C = (0, o.Ub)(n.Ug),
          w = g || C;
        return (0, s.jsx)(c.zE, {
          children: (0, s.jsx)(c.y, {
            layers: [
              {
                disabled: g,
                speed: u,
                children: (0, s.jsx)("div", {
                  className: "relative h-full",
                  style: {
                    background: ""
                      .concat(p, " / ")
                      .concat(w ? "cover" : v, " no-repeat url(")
                      .concat(l, ")"),
                  },
                }),
              },
              {
                speed: d || C ? -13 : g ? -5 : -15,
                disabled: g,
                children: (0, s.jsx)("section", {
                  className: "relative flex items-center",
                  children: (0, s.jsxs)("div", {
                    className: (0, r.A)(
                      "container-max container-tablet min-h-[650px] text-center flex flex-col justify-end items-center gap-5 px-4 md:px-0 lg:px-20",
                      j
                    ),
                    children: [
                      (0, s.jsx)(i.default, {
                        alt: "Sub-hero image",
                        src: t,
                        width: 0,
                        height: 0,
                        sizes: "100%",
                        style: {
                          height: g ? "auto" : f,
                          width: g ? m : "auto",
                          minHeight: 0,
                        },
                      }),
                      (0, s.jsx)("h2", {
                        className:
                          "text-display-xs xl:text-display-md font-black text-gray-25",
                        children: h,
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "text-text-md xl:text-text-lg text-gray-50 max-w-[1216px] lg:max-w-[800px]",
                        children: x,
                      }),
                    ],
                  }),
                }),
              },
            ],
            className: (0, a.QP)("min-h-[650px]", j),
            id: "sub-banner",
          }),
        });
      };
    },
    59762: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { FileAttachmentIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M12 14V8.5a1.5 1.5 0 0 1 3 0V14a3 3 0 1 1-6 0v-4m-.2 12h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 2 16.88 2 15.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22Z",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    60013: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { LineChartIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "m18 10-3.434 3.434c-.198.198-.297.297-.412.334a.499.499 0 0 1-.309 0c-.114-.037-.213-.136-.41-.334l-2.87-2.868c-.197-.198-.296-.297-.41-.334a.499.499 0 0 0-.31 0c-.114.037-.213.136-.41.334L6 14m16-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    60688: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { CubeIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "m9.75 20.75 1.473.818c.284.158.425.237.576.267.133.028.27.028.402 0 .15-.03.292-.11.576-.267l1.473-.818m-9-2.5-1.427-.793c-.3-.166-.45-.25-.558-.368a1 1 0 0 1-.215-.364C3 16.573 3 16.401 3 16.058V14.5m0-5V7.941c0-.342 0-.514.05-.666a1 1 0 0 1 .215-.364c.109-.119.258-.202.558-.368L5.25 5.75m4.5-2.5 1.473-.818c.284-.158.425-.237.576-.268a1 1 0 0 1 .402 0c.15.031.292.11.576.268l1.473.818m4.5 2.5 1.427.793c.3.166.45.25.558.368a1 1 0 0 1 .215.364c.05.152.05.324.05.666V9.5m0 5v1.558c0 .343 0 .515-.05.667a1 1 0 0 1-.215.364c-.109.119-.258.202-.558.368l-1.427.793m-9-7.5L12 12m0 0 2.25-1.25M12 12v2.5M3 7l2.25 1.25m13.5 0L21 7m-9 12.5V22",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    63351: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { EncryptedIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 36, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 35 36",
            ...t,
            children: [
              (0, s.jsx)("path", {
                d: "M22.78 26.733H.676A.682.682 0 0 1 0 26.056c0-.37.307-.677.677-.677h22.102c.37 0 .677.307.677.677 0 .37-.307.677-.677.677ZM26.054 22.256a.682.682 0 0 1-.677-.677V.677c0-.37.307-.677.677-.677.37 0 .677.307.677.677v20.902c0 .37-.307.677-.677.677Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M30.676 5.975h-30A.682.682 0 0 1 0 5.298c0-.37.307-.677.677-.677h29.999c.37 0 .677.307.677.677 0 .37-.307.677-.677.677Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M5.298 31.353a.682.682 0 0 1-.677-.677v-30c0-.37.307-.676.677-.676.37 0 .677.307.677.677v29.999c0 .37-.307.677-.677.677Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M33.012 27.879h-1.354v-2.14c0-1.118-1.101-2.03-2.455-2.03s-2.455.912-2.455 2.03v2.14h-1.354v-2.14c0-1.867 1.706-3.384 3.81-3.384 2.102 0 3.808 1.517 3.808 3.385v2.139Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M24.68 27.879h9.025c.496 0 .902.406.902.902v5.867c0 .749-.604 1.353-1.353 1.353H24.68a.905.905 0 0 1-.903-.902V28.78c0-.496.406-.902.903-.902Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M10.817 14.068a2.496 2.496 0 0 1-2.49-2.491c0-1.372 1.118-2.491 2.49-2.491s2.491 1.119 2.491 2.49c0 1.373-1.12 2.492-2.49 2.492Zm0-3.628c-.632 0-1.137.514-1.137 1.137s.514 1.137 1.137 1.137 1.137-.514 1.137-1.137-.514-1.137-1.137-1.137ZM16.096 23.599a2.496 2.496 0 0 1-2.49-2.49c0-1.373 1.119-2.492 2.49-2.492 1.372 0 2.491 1.12 2.491 2.491 0 1.372-1.119 2.491-2.49 2.491Zm0-3.628c-.631 0-1.137.514-1.137 1.137s.515 1.137 1.137 1.137c.623 0 1.137-.514 1.137-1.137s-.514-1.137-1.137-1.137ZM20.497 16.353a2.496 2.496 0 0 1-2.491-2.491c0-1.372 1.119-2.49 2.49-2.49 1.373 0 2.492 1.118 2.492 2.49s-1.12 2.49-2.491 2.49Zm0-3.637c-.632 0-1.137.514-1.137 1.137s.514 1.137 1.137 1.137c.622 0 1.137-.514 1.137-1.137s-.515-1.137-1.137-1.137Z",
                fill: "#F6F9FC",
              }),
            ],
          }),
        });
      };
    },
    64240: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { T3LogoOnly: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 32, variant: t = "default", isHoliday: i, ...r } = e,
          a = "default" === t ? "#131E33" : "#FCFCFD";
        return i
          ? (0, s.jsxs)("svg", {
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              width: l,
              height: l,
              viewBox: "0 0 380 380",
              ...r,
              children: [
                (0, s.jsx)("path", {
                  d: "M217.087 154.789L179.677 89.9795L73.457 273.809L110.867 338.62L148.287 273.809L186.027 338.979L223.447 274.169L185.717 208.999L217.087 154.789Z",
                  fill: a,
                }),
                (0, s.jsx)("path", {
                  d: "M179.678 89.9795L217.088 154.789H317.928L280.518 89.9795H179.678Z",
                  fill: "#7AC8EE",
                }),
                (0, s.jsx)("path", {
                  d: "M317.927 154.79L286.557 209L223.447 209.28L255.087 154.79H317.927Z",
                  fill: "#3D6477",
                }),
                (0, s.jsx)("path", {
                  d: "M223.447 274.17L323.677 274.08L286.257 338.89L186.027 338.98L223.447 274.17Z",
                  fill: "#7AC8EE",
                }),
                (0, s.jsx)("path", {
                  d: "M223.451 209.27L286.589 209L323.684 274.082L260.995 274.142L223.451 209.27Z",
                  fill: "#3D6477",
                }),
                (0, s.jsx)("path", {
                  d: "M210.736 54.3308C210.736 54.3308 193.06 38.4338 190.161 36.3123C178.033 27.4383 152.81 18.526 135.461 19.4162C118.114 20.3055 95.833 28.6698 89.4344 33.5041C79.483 41.0195 71.9536 56.3858 69.2239 63.005C66.4943 69.6242 61.9962 79.0902 58.2775 82.3236C54.562 85.5583 52.5197 94.8444 60.791 91.4032C69.0623 87.9619 80.0917 76.9868 82.2814 73.1228C84.4712 69.2589 84.1071 68.3456 86.4059 67.182C90.2915 65.2176 91.1582 64.2754 97.3175 67.8975C103.837 71.7335 102.444 79.4403 102.192 84.317C102.006 87.9048 101.244 92.4416 104.595 104.959C107.001 113.94 106.673 121.098 109.788 125.017C114.18 130.537 220.467 67.5773 210.736 54.3308Z",
                  fill: "#C23732",
                }),
                (0, s.jsx)("path", {
                  d: "M187.578 36.3514C180.644 31.2621 172.466 27.901 164.269 25.4321C155.93 22.9215 147.243 21.3627 138.529 21.1297C134.311 21.0179 130.116 21.2605 125.947 21.8929C121.538 22.5614 117.188 23.5747 112.902 24.787C105.338 26.9222 97.9679 29.6776 90.6894 32.6395C98.3755 27.7342 119.11 20.2549 135.461 19.4162C152.811 18.5259 178.033 27.4383 190.162 36.3122C193.06 38.4338 210.736 54.3307 210.736 54.3307C211.031 54.7337 211.22 55.181 211.308 55.6729C210.245 54.7582 209.167 53.8656 208.09 52.9939C205.801 51.1367 190.569 38.5486 187.578 36.3514Z",
                  fill: "#FFBBBB",
                }),
                (0, s.jsx)("path", {
                  d: "M55.8308 85.8389C59.6837 84.6448 62.9285 81.4148 65.5714 78.5891C69.6234 74.2611 73.1082 69.4442 77.0325 65.0073C78.6954 63.1258 80.4456 61.2691 82.4708 59.7732C84.7286 58.109 87.5273 57.0428 90.282 56.5792C92.9344 56.1315 95.6554 56.391 98.1071 57.5351C100.445 58.6285 102.38 60.4205 103.95 62.4464C107.546 67.0872 109.286 72.7124 110.903 78.2642C111.816 81.3974 112.996 84.7437 115.54 86.9384C117.968 89.035 121.285 89.5963 124.377 89.0506C127.622 88.476 130.627 86.9307 133.458 85.3018C136.85 83.3514 140.112 81.2162 143.294 78.9391C150.355 73.8849 157.285 68.4577 165.629 65.6766C179.882 60.9232 195.974 60.2984 209.2 52.9502C210.161 53.8116 210.738 54.3309 210.738 54.3309C220.469 67.5775 114.182 130.537 109.791 125.017C106.676 121.098 107.004 113.94 104.598 104.959C101.246 92.4418 102.009 87.905 102.194 84.3172C102.446 79.4405 103.839 71.7337 97.3208 67.8999C91.1606 64.2756 90.2938 65.2178 86.4083 67.1822C84.1095 68.3458 84.4736 69.2591 82.2838 73.123C80.0941 76.9869 69.0647 87.9621 60.7934 91.4033C54.7246 93.9283 54.2065 89.6003 55.8308 85.8389Z",
                  fill: "#A03028",
                }),
                (0, s.jsx)("path", {
                  d: "M65.7627 80.7191C65.7627 80.7191 59.6736 76.2447 55.3701 79.2725C51.0644 82.3014 44.4431 77.5306 40.6258 86.4372C39.8797 88.1736 36.9937 88.3599 36.4773 97.0245C36.3666 98.8709 32.7049 101.584 36.8364 107.8C37.9768 109.513 33.9862 113.829 41.3778 117.969C46.0559 120.59 43.5762 124.989 50.4853 125C56.3704 125.008 63.4536 127.436 67.6148 121.584C71.4888 116.132 77.4038 115.139 77.2293 110.265C77.058 105.392 85.5174 107.643 80.9243 97.5986C79.2071 93.8413 79.0368 84.1772 73.6209 84.2503C70.5458 84.2949 69.8252 79.3396 65.7627 80.7191Z",
                  fill: "#F9F9F9",
                }),
                (0, s.jsx)("path", {
                  d: "M36.8355 107.8C35.9907 106.529 35.4721 105.404 35.1824 104.401C36.0283 105.119 37.0081 105.681 38.0203 106.046C39.366 106.529 40.8389 106.687 42.2459 106.399C43.7379 106.091 45.0438 105.298 46.0933 104.208C46.4385 104.413 46.7881 104.602 47.151 104.772C48.7871 105.539 50.6262 105.913 52.4258 105.655C53.335 105.524 54.219 105.236 55.0332 104.812C55.7936 104.419 56.5544 103.956 57.0408 103.236C57.5053 102.546 57.8444 101.778 58.2158 101.037C58.5145 100.44 58.8455 99.6145 59.4355 99.239C61.286 98.0575 63.5032 99.4293 65.4594 99.4785C68.2014 99.5459 71.4614 98.8481 72.9994 96.3282C73.7596 95.0852 73.9414 93.6074 73.7637 92.1784C73.5188 90.2302 72.8045 88.2836 71.713 86.6558C69.9247 83.9849 67.3576 82.0018 64.7802 80.0894C65.3957 80.452 65.7618 80.7193 65.7618 80.7193C69.8243 79.3398 70.545 84.2951 73.6201 84.2505C79.036 84.1774 79.2063 93.8414 80.9235 97.5988C85.5165 107.643 77.0572 105.392 77.2285 110.265C77.403 115.14 71.4879 116.132 67.614 121.584C63.4527 127.436 56.3696 125.008 50.4845 125.001C43.5754 124.989 46.0551 120.59 41.377 117.969C33.9853 113.829 37.976 109.513 36.8355 107.8Z",
                  fill: "#E5E5E5",
                }),
                (0, s.jsx)("mask", {
                  id: "mask0_334_115",
                  style: { maskType: "luminance" },
                  maskUnits: "userSpaceOnUse",
                  x: "91",
                  y: "39",
                  width: "163",
                  height: "129",
                  children: (0, s.jsx)("path", {
                    d: "M223.154 39.1187L91.2521 93.9962L121.871 167.592L253.773 112.714L223.154 39.1187Z",
                    fill: "white",
                  }),
                }),
                (0, s.jsx)("g", {
                  mask: "url(#mask0_334_115)",
                  children: (0, s.jsx)("path", {
                    d: "M169.898 65.7318C164.187 70.5831 156.216 72.9725 150.35 78.1933C144.485 83.4164 142.177 85.3058 138.883 88.5302C135.586 91.7578 131.874 95.4664 126.58 99.8334C119.751 105.465 116.145 108.192 112.39 112.538C108.632 116.884 106.328 115.06 106.039 121.054C105.856 124.858 107.923 127.07 107.746 129.619C107.57 132.164 109.346 137.918 113.208 141.259C118.714 146.018 116.412 146.726 119.308 149.234C122.206 151.738 124.595 155.999 130.457 158.197C133.676 159.404 141.785 160.903 151.606 154.037C167.513 142.909 186.709 121.027 193.146 117.895C201.886 113.64 216.253 102.096 223.062 96.1729C227.829 92.0254 244.297 94.4492 241.667 84.4119C241.102 82.2569 239.233 80.7883 237.588 76.836C235.943 72.8814 236.294 71.4979 233.332 68.0937C231.339 65.8054 231.093 63.4593 228.945 61.2624C226.794 59.0664 224.421 60.0533 222.205 56.9549C219.988 53.8596 217.2 55.3277 214.985 52.2315C212.767 49.1339 210.99 47.0903 205.545 48.121C200.099 49.1493 200.448 51.4762 195.574 51.6507C190.698 51.823 177.026 59.6809 169.898 65.7318Z",
                    fill: "#F9F9F9",
                  }),
                }),
                (0, s.jsx)("mask", {
                  id: "mask1_334_115",
                  style: { maskType: "luminance" },
                  maskUnits: "userSpaceOnUse",
                  x: "99",
                  y: "59",
                  width: "155",
                  height: "109",
                  children: (0, s.jsx)("path", {
                    d: "M231.838 59.981L99.9357 114.859L121.875 167.592L253.778 112.715L231.838 59.981Z",
                    fill: "white",
                  }),
                }),
                (0, s.jsx)("g", {
                  mask: "url(#mask1_334_115)",
                  children: (0, s.jsx)("path", {
                    d: "M107.748 129.619C107.925 127.071 105.858 124.859 106.041 121.054C106.33 115.06 108.634 116.884 112.392 112.538C113.591 111.15 114.774 109.929 116.054 108.722C117.589 112.635 119.367 116.461 121.422 120.13C123.668 124.145 126.254 128.036 129.456 131.361C132.236 134.246 135.597 136.802 139.547 137.782C144.589 139.033 150.085 137.301 154.566 135.004C160.162 132.134 165.015 128.028 169.805 124.006C172.166 122.023 174.521 120.029 176.986 118.174C179.786 116.07 182.776 114.233 185.821 112.507C192.322 108.825 199.115 105.691 205.634 102.041C207.267 101.128 208.895 100.196 210.474 99.1913C211.953 98.2544 213.352 97.1679 214.764 96.1317C217.628 94.0293 220.487 91.9023 223.578 90.1387C226.678 88.3681 229.924 87.2033 233.342 86.2275C236.058 85.4534 238.786 84.7033 241.43 83.7098C241.525 83.9385 241.605 84.1705 241.669 84.4123C244.299 94.4496 227.831 92.0257 223.064 96.1733C216.255 102.097 201.888 113.64 193.148 117.895C186.71 121.028 167.515 142.91 151.607 154.037C141.787 160.903 133.677 159.404 130.459 158.197C124.597 155.999 122.208 151.738 119.31 149.234C116.414 146.727 118.716 146.018 113.209 141.259C109.347 137.919 107.572 132.165 107.748 129.619Z",
                    fill: "#E5E5E5",
                  }),
                }),
              ],
            })
          : (0, s.jsx)(c.Icon, {
              children: (0, s.jsxs)("svg", {
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: l,
                ...r,
                children: [
                  (0, s.jsx)("path", {
                    d: "M18.455 8.33 13.653 0 0 23.625l4.811 8.33 4.802-8.33L14.47 32l4.802-8.33-4.847-8.375 4.03-6.965Z",
                    fill: a,
                  }),
                  (0, s.jsx)("path", {
                    d: "m13.653 0 4.802 8.33h12.962L26.605 0H13.653ZM19.272 23.67l12.88-.009-4.802 8.33L14.47 32l4.802-8.33Z",
                    fill: "#8DC6EA",
                  }),
                  (0, s.jsx)("path", {
                    d: "m27.386 15.296 4.03-6.966h-8.078l-4.066 7.001 4.829 8.33h8.052l-4.767-8.366Z",
                    fill: "#2B5D81",
                  }),
                ],
              }),
            });
      };
    },
    67767: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { ControllerIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 23 24",
            ...t,
            children: [
              (0, s.jsxs)("g", {
                clipPath: "url(#controller-icon)",
                children: [
                  (0, s.jsx)("path", {
                    d: "M20.969 2.683c.748.403 1.212 1.299 1.212 2.585v7.413c-.002.53-.171 1.14-.494 1.709a4.05 4.05 0 0 1-.527.731c-.674.74-1.492 1.052-2.067.784l-2.894-1.57c-.344-.186-.805-.136-1.285.14l-3.039 1.743c-.544.312-1.067.857-1.454 1.517l-2.83 4.823c-.466.793-1.162 1.37-1.768 1.435-.02.003-.04.004-.06.005-.02.002-.04.002-.059.002a.791.791 0 0 1-.456-.13c-.028-.014-4.142-2.377-4.168-2.395-.348-.171-.54-.601-.515-1.176L.563 20.2v-7.412c0-2.53 1.795-5.61 4.01-6.882l.402-.23.965-.554 6.61-3.792.68-.39.688-.395c1.131-.65 2.152-.7 2.881-.257l4.169 2.394v.001Z",
                    fill: "#8DC6EA",
                  }),
                  (0, s.jsx)("path", {
                    d: "m2.67 21.518-.002-.1v-7.411c0-2.53 1.795-5.611 4.01-6.882l.402-.23.965-.554 6.61-3.793.68-.39.687-.395c1.131-.649 2.152-.699 2.881-.256l-.353-.212c-.73-.442-1.75-.392-2.88.257l-.689.395-.68.39-6.61 3.792-.964.554-.403.23c-2.214 1.271-4.01 4.352-4.01 6.882v7.412l.003.1c-.025.574.167 1.004.515 1.176.003.003.085.05.224.13-.265-.207-.407-.596-.385-1.095Z",
                    fill: "#8DC6EA",
                  }),
                  (0, s.jsx)("path", {
                    d: "M22.181 12.682V5.269c0-2.53-1.795-3.552-4.01-2.28l-.688.394-.68.39-6.61 3.793-.964.553-.403.23c-2.214 1.272-4.01 4.352-4.01 6.883v7.412l.003.099c-.033.755.308 1.262.887 1.258.019 0 .038 0 .059-.002l.06-.005c.606-.066 1.302-.642 1.768-1.435l2.83-4.823c.387-.66.909-1.205 1.454-1.517l3.039-1.744c.48-.275.941-.326 1.285-.139l2.894 1.57c.575.268 1.393-.044 2.067-.784.216-.237.389-.487.526-.731.323-.568.492-1.18.494-1.709Z",
                    fill: "#4692CA",
                  }),
                  (0, s.jsx)("path", {
                    d: "M8.992 16.181c-1.552.89-2.81.175-2.81-1.598 0-1.773 1.258-3.932 2.81-4.823 1.553-.89 2.81-.175 2.81 1.598 0 1.773-1.257 3.932-2.81 4.823ZM18.003 11.011c-1.552.891-2.81.175-2.81-1.598 0-1.773 1.258-3.932 2.81-4.823 1.553-.89 2.811-.175 2.811 1.598 0 1.774-1.258 3.932-2.81 4.823Z",
                    fill: "#131E33",
                  }),
                  (0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.658 16.099c.515.454 1.315.476 2.213-.04 1.553-.89 2.81-3.049 2.81-4.822 0-.662-.175-1.177-.475-1.516.374.33.597.89.597 1.637 0 1.773-1.258 3.932-2.81 4.823-.973.558-1.83.486-2.335-.082ZM15.668 10.928c.514.455 1.315.478 2.214-.038 1.552-.89 2.81-3.05 2.81-4.823 0-.662-.175-1.176-.475-1.515.374.331.597.89.597 1.636 0 1.774-1.258 3.933-2.81 4.823-.974.559-1.832.486-2.336-.083Z",
                    fill: "#3977A6",
                  }),
                  (0, s.jsx)("path", {
                    d: "M11.079 5.299c-.302 0-.604-.068-.84-.204-.263-.152-.414-.378-.414-.619 0-.24.153-.47.419-.623.474-.274 1.215-.276 1.687-.003.263.152.414.377.414.618s-.153.47-.419.624a1.73 1.73 0 0 1-.848.206Z",
                    fill: "#3977A6",
                  }),
                  (0, s.jsx)("path", {
                    d: "m17.358 6.95.009.004.008.005a.038.038 0 0 0 .008.004.035.035 0 0 0 .009.005.038.038 0 0 0 .008.005.035.035 0 0 0 .008.004.04.04 0 0 0 .009.005l.008.005.008.004.009.005A.035.035 0 0 0 17.45 7l.009.005a.036.036 0 0 0 .008.005l.008.004.008.005.009.005.008.004a.035.035 0 0 0 .009.005l.008.005a.038.038 0 0 0 .008.004l.009.005a.038.038 0 0 0 .008.004l.008.005a.038.038 0 0 0 .009.005.035.035 0 0 0 .008.004.04.04 0 0 0 .008.005l.009.005a.04.04 0 0 0 .008.004l.008.005.009.005.008.004a.035.035 0 0 0 .008.005c.003.002.006.004.009.004a.038.038 0 0 0 .008.005c.15.088.36.077.591-.056.46-.263.83-.9.83-1.424 0-.264-.094-.449-.246-.533l-.009-.005a.04.04 0 0 0-.008-.005l-.009-.004-.008-.005-.008-.004a.036.036 0 0 0-.009-.005l-.008-.005-.008-.004-.009-.005-.008-.005-.008-.004-.009-.005a.035.035 0 0 0-.008-.005L18.7 5.03a.038.038 0 0 0-.009-.005l-.008-.004a.038.038 0 0 0-.008-.005l-.009-.005a.038.038 0 0 0-.008-.004A.035.035 0 0 0 18.65 5a.04.04 0 0 0-.009-.005l-.008-.004-.008-.005-.009-.005-.008-.004-.009-.005a.035.035 0 0 0-.008-.004l-.008-.005a.038.038 0 0 0-.008-.005l-.009-.004a.038.038 0 0 0-.008-.005l-.009-.005a.038.038 0 0 0-.008-.004.035.035 0 0 0-.008-.005c-.15-.088-.36-.077-.592.057-.458.263-.83.9-.83 1.424 0 .265.094.45.247.533ZM17.168 7.955l-.008-.005a.038.038 0 0 0-.009-.004l-.008-.005a.038.038 0 0 0-.008-.004.035.035 0 0 0-.009-.005.04.04 0 0 0-.008-.005l-.008-.004-.009-.005a.038.038 0 0 0-.008-.005l-.008-.004a.038.038 0 0 0-.009-.005.035.035 0 0 0-.008-.004l-.008-.005a.038.038 0 0 0-.009-.005l-.008-.004-.008-.005a.035.035 0 0 0-.009-.005l-.008-.004a.035.035 0 0 0-.009-.005l-.007-.005a.038.038 0 0 0-.01-.004l-.008-.005a.038.038 0 0 0-.008-.004.035.035 0 0 0-.008-.005.038.038 0 0 0-.009-.005.035.035 0 0 0-.008-.004.04.04 0 0 0-.008-.005l-.009-.005-.008-.004-.008-.005a.035.035 0 0 0-.009-.005l-.008-.004a.035.035 0 0 0-.008-.005c-.003-.002-.006-.004-.009-.004-.15-.089-.36-.077-.591.055-.459.263-.83.901-.83 1.425 0 .264.094.449.247.533l.008.005.009.004.008.005.008.004.009.005a.038.038 0 0 0 .008.005.035.035 0 0 0 .008.004.04.04 0 0 0 .009.005l.008.005.008.004.009.005.008.005.008.004a.035.035 0 0 0 .009.005l.007.004h.001a.038.038 0 0 0 .008.005l.009.005.004.002.005.003c.002 0 .003.002.005.003.002 0 .002.002.004.003.002 0 .003.002.005.003l.005.002.008.005.008.005.009.004a.035.035 0 0 0 .008.005l.008.005a.038.038 0 0 0 .009.004l.008.005a.038.038 0 0 0 .008.004l.009.005a.038.038 0 0 0 .008.005.035.035 0 0 0 .008.004l.009.005a.038.038 0 0 0 .008.005l.008.004c.15.088.36.077.592-.055.459-.264.83-.901.83-1.425 0-.264-.094-.449-.247-.533l-.003-.003ZM18.828 8.9l-.008-.005-.009-.004a.038.038 0 0 0-.008-.005.035.035 0 0 0-.008-.005.04.04 0 0 0-.009-.004l-.008-.005-.008-.005-.009-.004-.008-.005-.008-.004a.035.035 0 0 0-.009-.005.04.04 0 0 0-.008-.005.038.038 0 0 0-.008-.004l-.009-.005a.038.038 0 0 0-.008-.005l-.008-.004a.038.038 0 0 0-.009-.005.035.035 0 0 0-.008-.005l-.008-.004-.009-.005c-.003-.002-.005-.004-.008-.004a.038.038 0 0 0-.008-.005.036.036 0 0 0-.009-.005.038.038 0 0 0-.008-.004.035.035 0 0 0-.008-.005.04.04 0 0 0-.009-.005l-.008-.004-.008-.005-.009-.005a.035.035 0 0 0-.008-.004l-.008-.005a.035.035 0 0 0-.009-.004l-.008-.005a.038.038 0 0 0-.009-.005c-.15-.088-.36-.077-.59.057-.46.263-.831.9-.831 1.425 0 .264.094.448.247.533l.008.004a.041.041 0 0 0 .009.005l.008.005a.034.034 0 0 0 .008.004.04.04 0 0 0 .009.005c.003.002.005.004.008.004a.035.035 0 0 0 .008.005.037.037 0 0 0 .009.005l.008.004a.035.035 0 0 0 .008.005.039.039 0 0 0 .009.005l.008.004a.034.034 0 0 0 .009.005l.008.005.008.004h.001l.008.005c.002.002.005.004.008.004l.008.005a.04.04 0 0 0 .009.005l.008.004.008.005a.037.037 0 0 0 .009.005l.008.004.008.005a.039.039 0 0 0 .009.005l.008.004a.033.033 0 0 0 .008.005.04.04 0 0 0 .009.004l.008.005a.036.036 0 0 0 .008.005.04.04 0 0 0 .009.004l.008.005a.035.035 0 0 0 .008.005.037.037 0 0 0 .009.004c.15.088.36.077.591-.055.459-.264.83-.901.83-1.425 0-.264-.094-.449-.247-.533V8.9ZM20.614 5.98l-.009-.005-.008-.005-.008-.004-.009-.005a.035.035 0 0 0-.008-.005l-.008-.004a.038.038 0 0 0-.009-.005l-.008-.005a.038.038 0 0 0-.008-.004.035.035 0 0 0-.009-.005.038.038 0 0 0-.008-.005.035.035 0 0 0-.008-.004.04.04 0 0 0-.009-.005.038.038 0 0 0-.008-.004l-.008-.005h-.001l-.008-.005a.036.036 0 0 0-.008-.004l-.008-.005c-.002 0-.003-.002-.005-.003-.002 0-.003-.002-.005-.003l-.004-.002-.005-.003a.04.04 0 0 0-.008-.005l-.009-.004-.008-.005-.008-.005a.035.035 0 0 0-.009-.004l-.008-.005a.038.038 0 0 0-.008-.005l-.009-.004a.038.038 0 0 0-.008-.005l-.008-.004a.038.038 0 0 0-.009-.005.035.035 0 0 0-.008-.005.04.04 0 0 0-.008-.004l-.009-.005c-.15-.088-.36-.077-.591.056-.459.263-.83.9-.83 1.424 0 .265.094.449.247.533a.038.038 0 0 0 .008.005l.008.005a.038.038 0 0 0 .009.004l.008.005a.038.038 0 0 0 .008.005.035.035 0 0 0 .009.004.04.04 0 0 0 .008.005.038.038 0 0 0 .009.004l.008.005.008.005.009.004.008.005a.036.036 0 0 0 .008.005.04.04 0 0 0 .008.004l.009.005a.04.04 0 0 0 .008.005l.009.004.008.005c.002 0 .003.002.005.003l.004.002c.002 0 .003.002.005.003l.005.003a.035.035 0 0 0 .008.005l.008.004a.038.038 0 0 0 .009.005c.002.002.005.004.008.004a.038.038 0 0 0 .008.005l.008.005a.038.038 0 0 0 .009.004.035.035 0 0 0 .008.005l.009.005.008.004.008.005.009.005a.035.035 0 0 0 .008.004.038.038 0 0 0 .008.005c.15.088.36.077.592-.056.459-.263.83-.9.83-1.425 0-.264-.094-.448-.247-.533ZM11.142 11.476l-.008-.005a.035.035 0 0 0-.009-.005l-.008-.004-.008-.005a.033.033 0 0 0-.009-.004.036.036 0 0 0-.008-.005l-.008-.005a.041.041 0 0 0-.009-.004l-.008-.005-.008-.005a.04.04 0 0 0-.009-.004l-.008-.005-.008-.005a.037.037 0 0 0-.009-.004l-.008-.005-.008-.004a.039.039 0 0 0-.009-.005l-.008-.005a.033.033 0 0 0-.008-.004l-.008-.005-.01-.005a.036.036 0 0 0-.007-.004.04.04 0 0 0-.009-.005l-.008-.005a.035.035 0 0 0-.008-.004.033.033 0 0 0-.009-.005c-.003-.002-.005-.004-.008-.004a.033.033 0 0 0-.008-.005.037.037 0 0 0-.009-.005l-.008-.004a.039.039 0 0 0-.008-.005l-.009-.005-.008-.004a.041.041 0 0 0-.009-.005c-.038-.024-.09-.022-.15.011l-.805.462v-.918c0-.067-.025-.114-.065-.134a.035.035 0 0 0-.008-.005l-.009-.005-.008-.004a.035.035 0 0 0-.009-.005c-.002-.002-.005-.004-.008-.004l-.008-.005a.04.04 0 0 0-.009-.005l-.008-.004-.008-.005a.04.04 0 0 0-.009-.005l-.008-.004-.008-.005a.04.04 0 0 0-.009-.005l-.008-.004a.035.035 0 0 0-.008-.005.04.04 0 0 0-.009-.004l-.008-.005a.035.035 0 0 0-.008-.005.039.039 0 0 0-.009-.004l-.008-.005a.035.035 0 0 0-.008-.005.04.04 0 0 0-.009-.004l-.008-.005a.035.035 0 0 0-.008-.004l-.009-.005-.008-.005a.035.035 0 0 0-.008-.004l-.009-.005-.008-.005a.04.04 0 0 0-.008-.004l-.009-.005-.008-.005a.04.04 0 0 0-.008-.004l-.009-.005c-.038-.024-.09-.022-.15.011l-.771.442a.453.453 0 0 0-.207.355v1.163c0 .058-.042.13-.093.158l-1.017.584a.454.454 0 0 0-.207.355v.881c0 .068.025.114.065.135l.008.004a.035.035 0 0 0 .008.005c.003.002.006.004.009.004l.008.005a.04.04 0 0 0 .008.005l.009.004.008.005a.039.039 0 0 0 .009.005l.008.004.008.005a.04.04 0 0 0 .009.005l.008.004a.035.035 0 0 0 .008.005.04.04 0 0 0 .009.004l.008.005a.035.035 0 0 0 .008.005.04.04 0 0 0 .009.004l.008.005a.035.035 0 0 0 .008.005.04.04 0 0 0 .009.004l.008.005a.035.035 0 0 0 .008.004l.009.005.008.005a.035.035 0 0 0 .008.004l.009.005.008.005a.04.04 0 0 0 .008.004l.009.005.008.005a.04.04 0 0 0 .008.004l.009.005.008.004a.04.04 0 0 0 .008.005c.038.024.091.022.15-.011l.806-.462v.918c0 .068.025.114.065.134a.035.035 0 0 0 .008.005.035.035 0 0 0 .009.005l.008.004a.04.04 0 0 0 .008.005l.009.005.008.004a.04.04 0 0 0 .008.005l.009.005.008.004a.04.04 0 0 0 .008.005l.009.004a.035.035 0 0 0 .008.005.039.039 0 0 0 .008.005l.009.004a.035.035 0 0 0 .008.005.04.04 0 0 0 .008.005l.009.004a.035.035 0 0 0 .008.005.04.04 0 0 0 .009.005l.008.004a.035.035 0 0 0 .008.005.035.035 0 0 0 .009.004l.008.005a.039.039 0 0 0 .008.005l.009.004.008.005a.04.04 0 0 0 .008.005l.009.004.008.005a.04.04 0 0 0 .008.005l.009.004.008.005a.04.04 0 0 0 .008.004l.009.005c.038.024.09.022.15-.011l.771-.442a.453.453 0 0 0 .207-.355v-1.163c0-.058.041-.13.092-.158L11 12.846a.453.453 0 0 0 .207-.355v-.88c0-.069-.025-.115-.065-.135ZM14.778 13.3l-.004-.003c-.002 0-.003-.003-.004-.003l-.005-.002-.003-.004c-.002 0-.003 0-.005-.002-.002 0-.003-.003-.003-.003l-.005-.002c-.002 0-.003-.003-.004-.004l-.004-.002c-.002 0-.003-.003-.004-.004-.002 0-.003 0-.005-.002-.002 0-.003-.002-.004-.003l-.004-.002c-.002 0-.003-.003-.004-.004-.002 0-.003 0-.005-.002l-.003-.003-.005-.002c-.002 0-.003-.003-.004-.004l-.004-.002c-.002 0-.003-.002-.004-.004l-.005-.001-.003-.004c-.002 0-.003 0-.005-.002-.002 0-.003-.003-.004-.004l-.004-.001c-.002 0-.003-.003-.004-.004l-.005-.002-.003-.004c-.002 0-.003 0-.005-.002-.002 0-.003-.002-.004-.003l-.004-.002c-.002 0-.003-.003-.004-.004-.002 0-.003 0-.005-.002-.002 0-.002-.002-.003-.003l-.005-.002c-.002 0-.003-.003-.004-.004l-.004-.002c-.002 0-.003-.003-.004-.003l-.005-.002c-.002 0-.002-.003-.003-.004l-.005-.002c-.002 0-.003-.003-.004-.004a.007.007 0 0 1-.004-.002c-.002 0-.003-.002-.004-.003l-.005-.002c-.002 0-.002-.003-.003-.004-.002 0-.003 0-.005-.002-.002 0-.003-.002-.004-.003l-.004-.002-.004-.004c-.002 0-.003 0-.005-.002-.002 0-.002-.002-.003-.003l-.005-.002c-.002 0-.003-.003-.004-.004-.002 0-.003 0-.004-.002-.002 0-.003-.003-.004-.004l-.005-.001c-.002 0-.002-.003-.003-.004l-.005-.002c-.002 0-.003-.003-.004-.004-.002 0-.003 0-.004-.002-.002 0-.003-.002-.004-.003l-.005-.002c-.002 0-.003-.003-.004-.004l-.004-.002c-.002 0-.003-.002-.004-.003l-.005-.002-.003-.004c-.002 0-.003 0-.005-.002-.002 0-.003-.003-.004-.004-.055-.031-.131-.026-.216.022l-1.519.871a.672.672 0 0 0-.306.526c0 .096.035.164.09.195l.005.002c.002 0 .003.003.004.004l.004.002c.002 0 .003.002.004.003l.005.002.003.004.005.002c.002 0 .003.003.004.004l.004.001c.002 0 .003.003.004.004l.005.002.003.004c.002 0 .003 0 .005.002.002 0 .003.002.004.003l.004.002c.002 0 .003.003.004.004.002 0 .003 0 .005.002.002 0 .002.002.003.003l.005.002c.002 0 .003.003.004.004l.004.002c.002 0 .003.003.004.004l.005.001c.002 0 .002.003.003.004l.005.002c.002 0 .003.003.004.004l.004.002c.002 0 .003.002.004.003l.005.002c.002 0 .002.003.003.004.002 0 .003 0 .005.002l.002.002.002.001.004.002c.002 0 .003.003.004.004.002 0 .003 0 .005.002.002 0 .002.003.003.004l.005.001c.002 0 .003.003.004.004l.004.002c.002 0 .003.003.004.004l.005.001c.002 0 .002.003.003.004l.005.002c.002 0 .003.003.004.004.002 0 .003 0 .004.002.002 0 .003.002.004.003l.005.002c.002 0 .003.003.004.004l.004.002c.002 0 .003.003.004.003l.004.002c.002 0 .003.003.004.004.002 0 .003 0 .005.002.002 0 .003.003.004.003l.004.002c.002 0 .003.003.004.004l.005.002.003.004c.002 0 .003 0 .005.002.002 0 .003.002.004.003l.004.002c.002 0 .003.003.004.004.002 0 .003 0 .005.002l.003.003.005.002c.002 0 .003.003.003.004.002 0 .003 0 .005.002.002 0 .003.002.004.003l.004.002c.002 0 .003.003.004.004.056.031.132.027.217-.021l1.518-.872a.67.67 0 0 0 .307-.525c0-.097-.034-.164-.09-.196Z",
                    fill: "#8DC6EA",
                  }),
                  (0, s.jsx)("path", {
                    d: "M16.585 9.913c-.459.263-.83.052-.83-.472 0-.523.371-1.161.83-1.424.459-.264.83-.052.83.471 0 .524-.371 1.162-.83 1.425ZM18.246 10.857c-.459.264-.83.052-.83-.472 0-.525.371-1.162.83-1.425.459-.263.83-.052.83.472 0 .523-.371 1.161-.83 1.425ZM18.247 7.064c-.46.263-.831.051-.831-.472 0-.524.372-1.162.83-1.425.46-.263.831-.052.831.472s-.372 1.161-.83 1.425ZM19.201 7.465c0-.524.372-1.162.83-1.425.46-.263.831-.052.831.472s-.371 1.161-.83 1.425c-.46.263-.83.051-.83-.472ZM11 11.492l-1.017.584c-.051.03-.093.005-.093-.053V10.86c0-.13-.093-.183-.207-.117l-.77.442a.454.454 0 0 0-.208.355v1.162c0 .059-.041.13-.092.159l-1.018.584a.453.453 0 0 0-.207.355v.88c0 .131.093.184.207.118l1.018-.584c.05-.03.092-.005.092.053v1.162c0 .131.093.184.207.118l.771-.442a.454.454 0 0 0 .207-.355v-1.162c0-.059.042-.13.093-.159L11 12.845a.453.453 0 0 0 .206-.355v-.88c0-.131-.092-.184-.206-.118Z",
                    fill: "#F6F9FC",
                  }),
                  (0, s.jsx)("path", {
                    d: "m14.563 14.02-1.519.872c-.084.048-.161.053-.217.021-.055-.031-.09-.099-.09-.195 0-.193.137-.429.306-.526l1.519-.871c.084-.049.16-.053.216-.022.056.032.09.1.09.196a.67.67 0 0 1-.306.526Z",
                    fill: "#8DC6EA",
                  }),
                  (0, s.jsx)("path", {
                    d: "M10.367 1.397v3.078c0 .138.086.266.237.353a.976.976 0 0 0 .478.115.98.98 0 0 0 .483-.117c.152-.087.239-.217.239-.355V1.395l-1.436.002Z",
                    fill: "#1D2939",
                  }),
                  (0, s.jsx)("path", {
                    d: "M11.082 1.868a.98.98 0 0 1-.478-.116c-.15-.086-.237-.215-.237-.352 0-.137.087-.268.24-.355a1.05 1.05 0 0 1 .96-.002c.15.086.237.215.237.353 0 .137-.087.267-.24.355a.988.988 0 0 1-.482.117Z",
                    fill: "#98A2B3",
                  }),
                ],
              }),
              (0, s.jsx)("defs", {
                children: (0, s.jsx)("clipPath", {
                  id: "controller-icon",
                  children: (0, s.jsx)("path", {
                    fill: "#fff",
                    transform: "translate(.563)",
                    d: "M0 0h21.619v24H0z",
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    68459: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { NFTIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 24 24",
            ...t,
            children: [
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "m13.48 12 10.454-6L18.7 3l-5.233-3-5.234 3L3 6l10.454 6h.026Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.48 23.987v-12l-10.453-6v12l5.233 3 5.234 3h-.013Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.48 12v12l5.234-3 5.233-3V6l-10.453 6h-.014ZM6.645 13.982h2.167v2.155H6.645v-2.155Z",
                fill: "#70B7E4",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.636 16.137h2.167v2.154h-2.167v-2.154Z",
                fill: "#fff",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.478 13.982h2.167v2.155H4.478v-2.155ZM.156 13.982h2.167v2.155H.156v-2.155Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.323 11.842h2.168v2.154H2.323v-2.154Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.645 9.687h2.167v2.155H6.645V9.687Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.478 9.687h2.167v2.155H4.478V9.687Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.478 7.533h2.167v2.154H4.478V7.533ZM.156 5.379h2.167v2.154H.156V5.38Z",
                fill: "#70B7E4",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.98 5.379h2.167v2.154h-2.168V5.38Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.147 7.533h2.167v2.154h-2.167V7.533Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.645 1.084h2.167v2.154H6.645V1.084ZM17.468 11.842h2.168v2.154h-2.168v-2.154Z",
                fill: "#70B7E4",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.645 13.996v-2.154H4.478v2.154h2.167ZM10.98 11.842v2.154h2.167v-2.154h-2.168Z",
                fill: "#fff",
              }),
              (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.468 13.982v2.155h2.168v-2.155h-2.168Z",
                fill: "#131E33",
              }),
            ],
          }),
        });
      };
    },
    68949: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { ChatCircleIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 20, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: [
              (0, s.jsx)("g", {
                clipPath: "url(#chat-circle)",
                children: (0, s.jsx)("path", {
                  d: "M5.079 9.357A6.676 6.676 0 0 1 5 8.333c0-3.682 3.005-6.667 6.71-6.667 3.707 0 6.711 2.985 6.711 6.667 0 .832-.153 1.628-.433 2.362a2.446 2.446 0 0 0-.1.288.752.752 0 0 0-.02.161c-.002.061.007.129.023.263l.336 2.725c.036.295.054.443.005.55a.417.417 0 0 1-.214.21c-.108.046-.256.024-.55-.019l-2.654-.39a1.95 1.95 0 0 0-.271-.03.754.754 0 0 0-.167.019c-.061.013-.14.042-.298.101a6.735 6.735 0 0 1-3.392.35m-4.326 3.41c2.47 0 4.474-2.052 4.474-4.583S8.83 9.166 6.36 9.166c-2.47 0-4.474 2.053-4.474 4.584 0 .509.081.998.23 1.455.064.194.095.29.106.357a.71.71 0 0 1 .008.177c-.003.066-.02.142-.054.293l-.509 2.301 2.496-.34a2.04 2.04 0 0 1 .263-.028.71.71 0 0 1 .158.016c.058.011.145.042.318.103a4.37 4.37 0 0 0 1.458.25Z",
                  stroke: "currentColor",
                  strokeWidth: "1.667",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              }),
              (0, s.jsx)("defs", {
                children: (0, s.jsx)("clipPath", {
                  id: "chat-circle",
                  children: (0, s.jsx)("path", {
                    fill: "#fff",
                    d: "M0 0h20v20H0z",
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    70186: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { CursorBoxIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M21 9.5V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h1.7m7.886-3.289-1.698 3.154c-.278.516-.417.774-.586.84a.5.5 0 0 1-.447-.038c-.155-.096-.247-.374-.43-.93L11.5 12.511c-.16-.486-.241-.73-.183-.892a.5.5 0 0 1 .302-.302c.162-.058.405.022.892.183l8.226 2.724c.556.184.834.276.93.431a.5.5 0 0 1 .039.447c-.067.17-.325.308-.84.586l-3.155 1.698a1.062 1.062 0 0 0-.152.09.508.508 0 0 0-.082.083 1.062 1.062 0 0 0-.09.152Z",
              stroke: "#4692CA",
              "stroke-width": "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    71721: (e, l, t) => {
      "use strict";
      t.d(l, { BU: () => x, IA: () => d, ko: () => h });
      var s = Object.defineProperty,
        c = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        n = Object.prototype.propertyIsEnumerable,
        o = (e, l, t) =>
          l in e
            ? s(e, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[l] = t),
        d = (e, l) => {
          for (var t in l || (l = {})) a.call(l, t) && o(e, t, l[t]);
          if (r) for (var t of r(l)) n.call(l, t) && o(e, t, l[t]);
          return e;
        },
        h = (e, l) => c(e, i(l)),
        x = (e, l, t) =>
          new Promise((s, c) => {
            var i = (e) => {
                try {
                  a(t.next(e));
                } catch (e) {
                  c(e);
                }
              },
              r = (e) => {
                try {
                  a(t.throw(e));
                } catch (e) {
                  c(e);
                }
              },
              a = (e) =>
                e.done ? s(e.value) : Promise.resolve(e.value).then(i, r);
            a((t = t.apply(e, l)).next());
          });
    },
    75394: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { NotFoundIcon: () => o });
      var s = t(9598),
        c = t(11950),
        i = t(69798),
        r = t(20260),
        a = t(35028),
        n = t(25759);
      let o = (e) => {
        let { width: l = 480, height: t = 368, ...o } = e,
          [[d, h], x] = (0, c.useState)([0, 0]),
          u = (0, i.d)(0),
          v = (0, i.d)(0),
          p = (0, r.G)(u, [0, d], [-33, 0]),
          f = (0, r.G)(v, [0, h], [-80, 85]);
        return (
          (0, c.useEffect)(() => {
            let e = (e) => {
              u.set(e.clientX), v.set(e.clientY);
            };
            return (
              x([window.innerWidth, window.innerHeight]),
              window.addEventListener("mousemove", e),
              function () {
                window.removeEventListener("mousemove", e);
              }
            );
          }, []),
          (0, s.jsx)(n.Icon, {
            children: (0, s.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: l,
              height: t,
              viewBox: "0 0 480 368",
              fill: "none",
              ...o,
              children: [
                (0, s.jsx)("circle", {
                  cx: "240.001",
                  cy: "192.727",
                  r: "174.545",
                  fill: "#E3F1FA",
                }),
                (0, s.jsxs)(a.P.g, {
                  style: { x: p, y: f },
                  children: [
                    (0, s.jsx)("circle", {
                      cx: "56.728",
                      cy: "61.819",
                      r: "17.454",
                      fill: "#E3F1FA",
                    }),
                    (0, s.jsx)("circle", {
                      cx: "431.999",
                      cy: "293.091",
                      r: "13.091",
                      fill: "#E3F1FA",
                    }),
                    (0, s.jsx)("circle", {
                      cx: "54.545",
                      cy: "319.273",
                      r: "21.818",
                      fill: "#E3F1FA",
                    }),
                    (0, s.jsx)("circle", {
                      cx: "458.181",
                      cy: "118.546",
                      r: "21.818",
                      fill: "#E3F1FA",
                    }),
                    (0, s.jsx)("circle", {
                      cx: "416.728",
                      cy: "42.182",
                      r: "15.273",
                      fill: "#E3F1FA",
                    }),
                  ],
                }),
                (0, s.jsxs)("g", {
                  filter: "url(#404-a)",
                  children: [
                    (0, s.jsx)("path", {
                      d: "m240 120.625 15.081-6.317-15.079 6.424v179.847l138.957-58.229V62.422l.677-.284-.677-.3v-.302l-.348.148L241.096.728 100.363 60.676l.666.286-.666 179.197L240 300.472V120.625Z",
                      fill: "#F9FAFB",
                    }),
                    (0, s.jsx)("path", {
                      d: "M240 120.625v179.847l-139.637-60.313.666-179.197L240 120.625Z",
                      fill: "url(#404-b)",
                    }),
                    (0, s.jsx)("path", {
                      d: "M240.002 120.731v179.848l138.957-58.23V61.535l-138.957 59.196Z",
                      fill: "url(#404-c)",
                    }),
                    (0, s.jsx)("path", {
                      d: "m240 120.625 139.636-58.487L241.096.728 100.363 60.676 240 120.625Z",
                      fill: "#E3F1FA",
                    }),
                    (0, s.jsx)("path", {
                      d: "m153.002 38.254 139.104 60.547 1.263 44.122 38.92-16.059-1.177-44.4-143.219-59.072-34.891 14.862Z",
                      fill: "#CDE7F6",
                    }),
                  ],
                }),
                (0, s.jsxs)("g", {
                  filter: "url(#404-d)",
                  children: [
                    (0, s.jsx)("rect", {
                      x: "178.908",
                      y: "227.637",
                      width: "122.182",
                      height: "122.182",
                      rx: "61.091",
                      fill: "#8DC6EA",
                    }),
                    (0, s.jsx)("path", {
                      d: "m262.908 311.637-8.909-8.91m6.364-15.272c0 11.949-9.687 21.636-21.637 21.636-11.949 0-21.636-9.687-21.636-21.636 0-11.95 9.687-21.637 21.636-21.637 11.95 0 21.637 9.687 21.637 21.637Z",
                      stroke: "#F6F9FC",
                      strokeWidth: "4.364",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  ],
                }),
                (0, s.jsxs)("defs", {
                  children: [
                    (0, s.jsxs)("linearGradient", {
                      id: "404-b",
                      x1: "100.363",
                      y1: "241.063",
                      x2: "155.51",
                      y2: "91.712",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, s.jsx)("stop", { stopColor: "#CDE7F6" }),
                        (0, s.jsx)("stop", {
                          offset: "1",
                          stopColor: "#F0F9FF",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("linearGradient", {
                      id: "404-c",
                      x1: "240",
                      y1: "124.251",
                      x2: "397.453",
                      y2: "155.599",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, s.jsx)("stop", { stopColor: "#CDE7F6" }),
                        (0, s.jsx)("stop", {
                          offset: "1",
                          stopColor: "#8DC6EA",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("filter", {
                      id: "404-a",
                      x: "80.363",
                      y: ".728",
                      width: "319.273",
                      height: "339.852",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, s.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, s.jsx)("feColorMatrix", {
                          in: "SourceAlpha",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          result: "hardAlpha",
                        }),
                        (0, s.jsx)("feMorphology", {
                          radius: "4",
                          in: "SourceAlpha",
                          result: "effect1_dropShadow_1667_56668",
                        }),
                        (0, s.jsx)("feOffset", { dy: "8" }),
                        (0, s.jsx)("feGaussianBlur", { stdDeviation: "4" }),
                        (0, s.jsx)("feColorMatrix", {
                          values:
                            "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0",
                        }),
                        (0, s.jsx)("feBlend", {
                          in2: "BackgroundImageFix",
                          result: "effect1_dropShadow_1667_56668",
                        }),
                        (0, s.jsx)("feColorMatrix", {
                          in: "SourceAlpha",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          result: "hardAlpha",
                        }),
                        (0, s.jsx)("feMorphology", {
                          radius: "4",
                          in: "SourceAlpha",
                          result: "effect2_dropShadow_1667_56668",
                        }),
                        (0, s.jsx)("feOffset", { dy: "20" }),
                        (0, s.jsx)("feGaussianBlur", { stdDeviation: "12" }),
                        (0, s.jsx)("feColorMatrix", {
                          values:
                            "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0",
                        }),
                        (0, s.jsx)("feBlend", {
                          in2: "effect1_dropShadow_1667_56668",
                          result: "effect2_dropShadow_1667_56668",
                        }),
                        (0, s.jsx)("feBlend", {
                          in: "SourceGraphic",
                          in2: "effect2_dropShadow_1667_56668",
                          result: "shape",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("filter", {
                      id: "404-d",
                      x: "170.908",
                      y: "219.637",
                      width: "138.182",
                      height: "138.182",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, s.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, s.jsx)("feGaussianBlur", {
                          in: "BackgroundImageFix",
                          stdDeviation: "4",
                        }),
                        (0, s.jsx)("feComposite", {
                          in2: "SourceAlpha",
                          operator: "in",
                          result: "effect1_backgroundBlur_1667_56668",
                        }),
                        (0, s.jsx)("feBlend", {
                          in: "SourceGraphic",
                          in2: "effect1_backgroundBlur_1667_56668",
                          result: "shape",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    76300: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { T3IdentityLogo: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) =>
        (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "26",
            height: "30",
            fill: "none",
            ...e,
            children: [
              (0, s.jsx)("path", {
                d: "M12.98.025V15l-4.326 2.476L4.327 20 0 22.477V7.5l4.327-2.475L8.654 2.5 12.98.026Z",
                fill: "#EAECF0",
              }),
              (0, s.jsx)("path", {
                d: "M25.96 7.5 21.633 5l-4.327-2.5L12.98 0v15l4.327 2.5 4.327 2.5 4.327 2.5v-15Z",
                fill: "#D0D5DD",
              }),
              (0, s.jsx)("path", {
                d: "m21.635 20-4.327-2.5L12.98 15l-4.327 2.5L4.327 20 0 22.5 4.327 25l4.327 2.476L12.98 30l4.327-2.524L21.635 25l4.326-2.5-4.326-2.5Z",
                fill: "#000",
              }),
              (0, s.jsxs)("g", {
                clipPath: "url(#identity-logo)",
                children: [
                  (0, s.jsx)("path", {
                    d: "m12.987 23.997-2.597-1.5-2.598-1.501-2.597-1.501V10.49L2.597 8.99 0 7.475v14.992l2.597 1.501 2.598 1.501 2.597 1.5 2.598 1.501 2.597 1.501v-6.003.03Z",
                    fill: "#D0D5DD",
                  }),
                  (0, s.jsx)("path", {
                    d: "M25.974 7.504v14.978l-2.597 1.515-2.598 1.486L18.182 27l-2.597 1.486L12.987 30v-6.003l2.598-1.515 2.597-1.486 2.598-1.515v-8.99l2.597-1.487 2.597-1.5Z",
                    fill: "#98A2B3",
                  }),
                  (0, s.jsx)("path", {
                    d: "m25.974 7.504-2.597 1.5-2.598 1.487-2.597-1.487-2.598-1.515-2.597-1.486-2.597 1.486-2.598 1.515-2.597 1.487-2.598-1.487L0 7.49l2.597-1.486 2.598-1.515L7.792 3l2.598-1.515L12.987 0l2.597 1.486v.015L18.182 3l2.597 1.501 2.598 1.5 2.597 1.502Z",
                    fill: "#F2F4F7",
                  }),
                ],
              }),
              (0, s.jsx)("path", {
                d: "m9.375 11.202 3.655 2.11v4.22l-3.655-2.11v-4.22Z",
                fill: "#475467",
              }),
              (0, s.jsx)("path", {
                d: "M16.685 11.201v4.222l-3.655 2.11v-4.22l3.655-2.112Z",
                fill: "#1D2939",
              }),
              (0, s.jsx)("path", {
                d: "m13.03 9.09-3.655 2.112 3.655 2.11 3.655-2.11L13.03 9.09Z",
                fill: "#000",
              }),
              (0, s.jsx)("defs", {
                children: (0, s.jsx)("clipPath", {
                  id: "identity-logo",
                  children: (0, s.jsx)("path", {
                    fill: "#fff",
                    d: "M0 0h25.974v30H0z",
                  }),
                }),
              }),
            ],
          }),
        });
    },
    76859: (e, l, t) => {
      "use strict";
      function s() {}
      t.d(l, { j1: () => r, $$: () => a, Ub: () => i }), t(71721);
      var c = t(11950);
      function i(e) {
        let l = (0, c.useCallback)(
          (l) => {
            let t = window.matchMedia(e);
            return (
              t.addEventListener("change", l),
              () => {
                t.removeEventListener("change", l);
              }
            );
          },
          [e]
        );
        return (0, c.useSyncExternalStore)(
          l,
          () => window.matchMedia(e).matches,
          () => !1
        );
      }
      function r() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onClose: l, onOpen: t, isOpen: s } = e,
          [i, r] = (0, c.useState)(e.defaultIsOpen || !1),
          a = void 0 !== s ? s : i,
          n = (0, c.useCallback)(() => {
            r(!1), null == l || l();
          }, [l]),
          o = (0, c.useCallback)(() => {
            r(!0), null == t || t();
          }, [t]),
          d = (0, c.useCallback)(() => {
            a ? n() : o();
          }, [a, o, n]);
        return { isOpen: a, onOpen: o, onClose: n, onToggle: d };
      }
      function a(e, l) {
        let t = (0, c.useRef)(s);
        (0, c.useEffect)(() => {
          t.current = e;
        }, [e]),
          (0, c.useEffect)(() => {
            let e = setInterval(function () {
              t.current();
            }, l);
            return () => {
              clearInterval(e);
            };
          }, [l]);
      }
    },
    78618: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { HealthcareIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 24 24",
            ...t,
            children: [
              (0, s.jsx)("path", {
                d: "M16.177 14.345v-4.69l4.137-2.483V12l4.138-2.345v4.69l-4.138 2.483v4.69L16.177 24v-4.828l-4.138 2.345v-4.69l4.138-2.482Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "m3.763 16.828-4.138-2.483v-4.69L3.763 12V7.172L7.9 9.655v4.69l4.138 2.483v4.69L7.9 19.171V24l-4.138-2.483v-4.69Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "m16.177 14.345-4.138 2.483L7.9 14.345 12.039 12l4.138 2.345Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M12.039 12V7.172l4.138 2.483v4.69L12.039 12Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "M7.9 9.655v4.69L12.04 12V7.172L7.9 9.655Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "m16.177 24-4.138-2.483 4.138-2.345V24Z",
                fill: "#131E33",
              }),
              (0, s.jsx)("path", {
                d: "M12.039 21.517 7.9 19.172V24l4.138-2.483Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "m24.452 9.655-4.138-2.483V12l4.138-2.345ZM20.314 7.172l-4.137-2.344 4.137-2.345L16.177 0l-4.138 2.483L7.9 0 3.763 2.483 7.9 4.828 3.763 7.172 7.9 9.655l4.138-2.483 4.138 2.483 4.137-2.483Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M20.315 7.172v-4.69l-4.138 2.345 4.138 2.345Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "m-.375 9.655 4.138-2.483V12L-.375 9.655Z",
                fill: "#57A7E0",
              }),
              (0, s.jsx)("path", {
                d: "M3.763 7.172v-4.69L7.9 4.828 3.763 7.172Z",
                fill: "#131E33",
              }),
            ],
          }),
        });
      };
    },
    78947: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { XIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 24 24",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M14.286 10.163 23.221 0h-2.117l-7.762 8.823L7.147 0H0l9.37 13.343L0 24h2.117l8.192-9.32L16.853 24H24l-9.714-13.837Zm-2.9 3.297-.952-1.33L2.881 1.563h3.252l6.098 8.532.947 1.33 7.925 11.09h-3.252l-6.466-9.054Z",
              fill: "currentColor",
            }),
          }),
        });
      };
    },
    79114: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { CogIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 37, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 37 36",
            ...t,
            children: [
              (0, s.jsx)("path", {
                d: "M35.546 23.421c-.729-.091-1.367-.182-2.005-.456-.82-.273-1.55-.729-2.187-1.276a1.095 1.095 0 0 0-1.276 0c-.638.547-1.367.912-2.188 1.276-.638.274-1.367.365-2.005.456-.547 0-1.002.456-1.002 1.003v5.195c0 2.187 1.276 4.192 3.19 5.194l2.096 1.094c.182.091.273.091.456.091.182 0 .364 0 .455-.09l2.096-1.095c2.005-1.002 3.19-3.007 3.19-5.194v-5.195c.183-.456-.273-.912-.82-1.003ZM34.18 27.25l-3.828 3.828a.697.697 0 0 1-.456.182.696.696 0 0 1-.455-.182l-2.096-2.096a.715.715 0 0 1 0-1.003.715.715 0 0 1 1.002 0l1.64 1.64 3.373-3.372a.715.715 0 0 1 1.002 0c.091.274.091.73-.182 1.003Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M17.043 30.532h-3.372c-1.094 0-2.096-.912-2.096-2.097v-1.731c-.638-.183-1.185-.456-1.732-.73L8.658 27.16c-.82.82-2.096.82-2.825 0l-1.914-1.914c-.547-.547-.82-1.185-.82-1.914 0-.73.273-1.367.82-1.914l.638-.638a14.021 14.021 0 0 1-.73-1.732h-1.73C1.002 19.048 0 18.137 0 17.043v-3.372c0-1.094.911-2.096 2.096-2.096h1.732c.182-.638.456-1.185.729-1.732l-.638-.73c-.547-.546-.82-1.184-.82-1.913 0-.73.273-1.458.82-1.914l1.914-1.914c.82-.82 2.096-.82 2.825 0l1.185 1.185c.547-.273 1.094-.547 1.732-.73v-1.73c0-1.094.911-2.097 2.096-2.097h3.372c1.094 0 2.005.911 2.005 2.005v1.732c.638.182 1.185.455 1.732.729l.729-.73c.547-.546 1.185-.82 1.914-.82.729 0 1.458.274 1.914.82l1.367 1.368c.547.547.82 1.185.82 1.914 0 .729-.273 1.367-.82 1.914l-.73.729c.274.638.547 1.185.73 1.731h1.731c1.094 0 2.006.912 2.006 2.006v3.372a2.023 2.023 0 0 1-2.006 2.005h-1.731a14.028 14.028 0 0 1-.73 1.731l.73.73a.715.715 0 0 1 0 1.002.715.715 0 0 1-1.003 0l-1.458-1.458.456-.274c.455-.82.82-1.549 1.002-2.37l.091-.546h2.735c.364 0 .729-.273.729-.73V13.49a.719.719 0 0 0-.73-.73h-2.734l-.09-.455a6.623 6.623 0 0 0-1.003-2.37l-.274-.456 1.459-1.458c.273-.273.455-.638.455-1.002 0-.365-.182-.73-.455-1.003l-1.367-1.367c-.274-.273-.639-.456-1.003-.456-.365 0-.73.183-.912.365l-1.458 1.458-.455-.09c-.82-.457-1.55-.73-2.37-1.003l-.547-.092V2.096a.719.719 0 0 0-.729-.729h-3.372a.719.719 0 0 0-.73.73V4.83l-.546.092c-.82.182-1.64.546-2.37 1.002l-.455.273-1.914-1.913c-.274-.274-.638-.274-.912 0L4.83 6.197c-.273.274-.455.638-.455 1.003 0 .365.182.73.364.911L6.106 9.57l-.273.455c-.456.82-.73 1.55-1.003 2.37l-.09.547H2.004a.719.719 0 0 0-.729.729v3.372c0 .365.273.73.73.73h2.733l.091.546c.183.82.547 1.55 1.003 2.37l.273.455-1.367 1.459c-.273.273-.455.637-.455 1.002s.182.73.455 1.003l1.914 1.913c.274.274.638.274.912 0l1.913-1.913.456.273c.73.456 1.55.73 2.37 1.003l.547.09v2.735c0 .364.273.729.729.729h3.372c.364 0 .729-.273.729-.73v-2.733l.547-.091c.82-.183 1.64-.547 2.37-1.003l.455-.273 1.458 1.458c.274.273.638.456 1.003.456.364 0 .729.273.729.729 0 .455-.273.729-.73.729-.728 0-1.457-.274-1.913-.82l-.73-1.185c-.546.273-1.184.546-1.73.729v1.731a2.062 2.062 0 0 1-2.097 2.097Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M15.414 9.205c1.002 0 1.914.82 1.914 1.914 0 1.094-.82 1.914-1.914 1.914-1.094 0-1.914-.82-1.914-1.914 0-1.094.82-1.914 1.914-1.914Zm0-1.367a3.267 3.267 0 0 0-3.281 3.28 3.267 3.267 0 0 0 3.28 3.282 3.267 3.267 0 0 0 3.282-3.281c0-1.823-1.55-3.281-3.281-3.281ZM15.413 16.406c2.188 0 4.01 1.458 4.648 3.463h-9.296c.547-2.096 2.461-3.463 4.648-3.463Zm0-1.367c-3.098 0-5.65 2.278-6.106 5.286-.091.456.273.912.73.912H20.79c.455 0 .82-.456.729-.912-.456-3.008-3.008-5.286-6.107-5.286Z",
                fill: "#F6F9FC",
              }),
            ],
          }),
        });
      };
    },
    79898: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { CoinsHandIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M13.53 8.352a3.5 3.5 0 1 1 .941-4.704M6 20.088h2.61c.34 0 .679.04 1.009.12l2.758.67c.598.147 1.222.16 1.826.043l3.05-.593a4.204 4.204 0 0 0 2.127-1.107l2.158-2.1a1.503 1.503 0 0 0 0-2.168 1.61 1.61 0 0 0-2.06-.143l-2.515 1.835c-.36.263-.799.405-1.25.405h-2.427 1.545c.871 0 1.577-.687 1.577-1.534v-.307c0-.704-.492-1.317-1.194-1.487l-2.385-.58A5.03 5.03 0 0 0 11.643 13c-.965 0-2.711.799-2.711.799L6 15.025M20 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM2 14.6v5.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C2.76 22 3.04 22 3.6 22h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C6 21.24 6 20.96 6 20.4v-5.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C5.24 13 4.96 13 4.4 13h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 13.76 2 14.04 2 14.6Z",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    80042: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { StampIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 37, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 37 36",
            ...t,
            children: [
              (0, s.jsx)("path", {
                d: "M30.112 30.291c-.092 0-.092.092-.184.184 0 .092-.092.184-.092.184v-.276l.276-.092Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M34.069 24.123H26.15c-1.105 0-2.026.92-2.026 2.026v7.826c0 1.105.92 2.025 2.026 2.025h7.918c1.105 0 2.025-.92 2.025-2.025v-7.826c0-1.105-.92-2.026-2.025-2.026Zm.828 9.207c-.368.645-1.197.829-1.749.46a1.37 1.37 0 0 1-.645-1.38h-.092l-2.025-1.197-.92.552-1.106.645h-.092a1.37 1.37 0 0 1-.644 1.38c-.645.369-1.381.185-1.75-.46-.368-.644-.184-1.38.46-1.75.461-.275 1.106-.183 1.474.093l.092-.092 2.026-1.197V27.99c-.46-.184-.83-.644-.83-1.197 0-.736.553-1.289 1.29-1.289.736 0 1.289.553 1.289 1.29 0 .552-.368 1.012-.829 1.196v2.394l.92.552 1.106.645.092.092c.46-.368 1.013-.46 1.473-.092.553.276.829 1.105.46 1.75Zm-4.143-2.854c0 .092.092.184.092.184l-.092-.184-.092-.092c.092 0 .092.092.092.092Zm-.368.737h-.184.368c-.092-.093-.092 0-.184 0Z",
                fill: "#CDE7F6",
              }),
              (0, s.jsx)("path", {
                d: "M30.108 30.293c-.092 0-.092.092-.184.184 0 .092-.092.184-.092.184v-.276l.276-.092ZM30.846 30.477v.276-.276c-.092 0-.092 0-.092-.092l.092.092Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M30.108 30.293c-.092 0-.092.092-.184.184 0 .092-.092.184-.092.184v-.276l.276-.092ZM30.567 31.121l-.184.092-.184-.092h.368Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "M30.383 31.213h.184-.368c.092-.092.092 0 .184 0ZM30.846 30.477v.276-.276c-.092 0-.092 0-.092-.092l.092.092ZM22.461 30.844H2.85a.726.726 0 0 1-.737-.736c0-.46.276-.737.737-.737H22.46c.368 0 .737.276.737.737 0 .46-.369.736-.737.736ZM22.465 27.437H0v-4.603a2.672 2.672 0 0 1 2.67-2.67h8.47c-.184-1.842-.368-3.591-.736-5.34a39.872 39.872 0 0 0-1.933-6.445c-.645-1.75-.645-3.5.092-5.064.644-1.381 1.749-2.486 3.13-2.947C12.338.092 13.074 0 13.811 0c.736 0 1.473.092 2.117.368 1.473.553 2.578 1.566 3.223 3.039.736 1.473.829 3.222.092 4.972a39.86 39.86 0 0 0-1.933 6.444c-.369 1.75-.553 3.5-.737 5.34h8.47a2.672 2.672 0 0 1 2.67 2.67.726.726 0 0 1-.736.737c-.46 0-.737-.276-.737-.736 0-.737-.552-1.29-1.289-1.29H15.1l.092-.736c.092-2.21.46-4.235.828-6.26.46-2.303 1.105-4.512 2.026-6.722.553-1.381.46-2.762-.092-3.867a4.192 4.192 0 0 0-2.394-2.302 5.214 5.214 0 0 0-1.657-.276c-.645 0-1.105.092-1.658.276-1.104.369-1.933 1.197-2.393 2.302a4.918 4.918 0 0 0-.092 3.96c.828 2.117 1.565 4.419 2.025 6.72.46 2.026.737 4.144.829 6.261l.092.737H2.67c-.736 0-1.289.552-1.289 1.289v3.222h21.084c.369 0 .737.277.737.737 0 .46-.368.552-.737.552Z",
                fill: "#F6F9FC",
              }),
            ],
          }),
        });
      };
    },
    81394: (e) => {
      e.exports = {
        indicator: "LoadingCircle_indicator__DeJIz",
        loader: "LoadingCircle_loader__au2XY",
        circularLoader: "LoadingCircle_circularLoader__90ggN",
        rotate: "LoadingCircle_rotate__X9r9R",
        loaderPath: "LoadingCircle_loaderPath__P396j",
        dash: "LoadingCircle_dash__GgSmK",
        text: "LoadingCircle_text__YqFj_",
        spin: "LoadingCircle_spin__Pi8MW",
      };
    },
    83473: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { PieSearchIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 39, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 38 36",
            ...t,
            children: [
              (0, s.jsx)("path", {
                d: "M5.133 25.169c-.094 0-.198 0-.293-.02a2.439 2.439 0 0 1-1.807-1.144 15.924 15.924 0 0 1-2.365-8.373A15.957 15.957 0 0 1 12.9.07a2.493 2.493 0 0 1 2.129.464c.596.473.936 1.173.936 1.93v11.835c0 .652-.255 1.267-.719 1.73l-8.381 8.402a2.447 2.447 0 0 1-1.75.728l.018.01Zm8.363-23.746c-.085 0-.17.01-.255.028C6.675 3.031 2.096 8.868 2.096 15.632c0 2.716.748 5.355 2.148 7.626a1.053 1.053 0 0 0 1.637.18l8.382-8.402c.198-.198.302-.454.302-.728V2.473c0-.322-.142-.615-.397-.814a1.06 1.06 0 0 0-.662-.227l-.01-.01ZM16.705 31.659c-2.942 0-5.827-.814-8.344-2.337a2.416 2.416 0 0 1-1.154-1.807 2.424 2.424 0 0 1 .71-2.043l8.39-8.392a2.434 2.434 0 0 1 1.732-.719h11.873c.757 0 1.457.34 1.93.937a2.48 2.48 0 0 1 .463 2.119c-.132.54-.293 1.088-.482 1.608a.714.714 0 0 1-.908.436.722.722 0 0 1-.436-.909c.17-.482.322-.974.436-1.466.075-.322 0-.653-.2-.918a1.03 1.03 0 0 0-.813-.397H18.03a1 1 0 0 0-.728.303L8.91 26.465a1.06 1.06 0 0 0-.303.87c.038.322.218.596.482.757a14.619 14.619 0 0 0 7.607 2.138c2.185 0 4.285-.463 6.243-1.39.36-.17.776-.01.947.34.17.36.018.776-.341.946a15.951 15.951 0 0 1-6.85 1.523l.01.01ZM29.897 14.904h-10.01a2.45 2.45 0 0 1-2.45-2.45v-9.98c0-.758.341-1.467.937-1.93a2.433 2.433 0 0 1 2.1-.464C26.274 1.46 30.92 6.087 32.3 11.877c.18.738 0 1.504-.464 2.11a2.452 2.452 0 0 1-1.94.936v-.019Zm-10-13.49c-.236 0-.463.075-.653.227a1.035 1.035 0 0 0-.397.823v9.98c0 .568.464 1.032 1.031 1.032h10.01c.321 0 .624-.142.822-.398a1.06 1.06 0 0 0 .2-.898c-1.26-5.27-5.488-9.49-10.776-10.747a1.031 1.031 0 0 0-.246-.029l.01.01Z",
                fill: "#F6F9FC",
              }),
              (0, s.jsx)("path", {
                d: "m38.325 34.128-3.008-3c.614-.879.983-1.939.983-3.083a5.396 5.396 0 0 0-5.392-5.393 5.402 5.402 0 0 0-5.392 5.393 5.402 5.402 0 0 0 5.392 5.392c1.04 0 1.987-.302 2.81-.823l3.055 3.065c.218.208.492.322.776.322.284 0 .558-.114.776-.322a1.102 1.102 0 0 0 0-1.551Zm-7.417-2.876a3.216 3.216 0 0 1-3.207-3.207 3.21 3.21 0 0 1 3.207-3.207 3.198 3.198 0 0 1 3.207 3.207 3.198 3.198 0 0 1-3.207 3.207Z",
                fill: "#CDE7F6",
              }),
            ],
          }),
        });
      };
    },
    84770: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { QuestionMessageIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M10 8.002a2.249 2.249 0 0 1 4.37.75c0 1.499-2.25 2.248-2.25 2.248m.03 3h.01M7 18v2.335c0 .533 0 .8.11.937a.5.5 0 0 0 .39.188c.176 0 .384-.167.8-.5l2.385-1.908c.487-.39.731-.585 1.002-.724.241-.122.497-.212.762-.267.299-.061.61-.061 1.235-.061H16.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 15.72 21 14.88 21 13.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8V14c0 .93 0 1.395.102 1.777a3 3 0 0 0 2.122 2.12C5.605 18 6.07 18 7 18Z",
              stroke: "#4692CA",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    87454: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { Accordion: () => n, useAccordion: () => a });
      var s = t(9598),
        c = t(11950),
        i = t(11676);
      let r = (0, c.createContext)({
        activeIndex: -1,
        setActiveIndex: () => {},
        id: "",
      });
      function a() {
        let e = (0, c.useContext)(r);
        if (void 0 === e)
          throw Error("useAccordion must be use within AccordionContext");
        return e;
      }
      function n(e) {
        let {
            children: l,
            defaultIndex: t,
            onChange: a,
            className: n = "",
            activeIdx: o,
          } = e,
          [d, h] = (0, c.useState)(null != t ? t : -1),
          x = (0, c.useId)();
        return (
          (0, c.useEffect)(() => {
            void 0 !== o && h(o);
          }, [o]),
          (0, s.jsx)(r.Provider, {
            value: {
              activeIndex: d,
              setActiveIndex: (e) => {
                void 0 === o && h(e), null == a || a(e);
              },
              id: x,
            },
            children: (0, s.jsx)("div", {
              className: (0, i.QP)("flex flex-col gap-8", n),
              children: c.Children.map(l, (e, l) =>
                e ? (0, c.cloneElement)(e, { index: l }) : null
              ),
            }),
          })
        );
      }
    },
    89514: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { GetStarted: () => i });
      var s = t(9598),
        c = t(45602);
      function i() {
        return (0, s.jsx)("div", {
          className: "py-10 md:py-12 px-4 md:px-15 lg:px-20 bg-primary-700",
          children: (0, s.jsxs)("div", {
            className:
              "container-max container-tablet flex flex-col md:flex-row justify-between md:items-center gap-8",
            children: [
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("h2", {
                    className:
                      "text-white text-display-xs lg:text-display-sm font-black mb-4",
                    children: "Ready to get started?",
                  }),
                  (0, s.jsx)("p", {
                    className: "text-primary-200 text-text-md lg:text-text-xl",
                    children: "Get in touch today to see T3 AI in action.",
                  }),
                ],
              }),
              (0, s.jsx)(c.$n, {
                href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                variant: "outline",
                size: "lg",
                className: "w-full md:w-fit",
                children: "Chart",
              }),
            ],
          }),
        });
      }
    },
    97021: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { LinkedInIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            viewBox: "0 0 24 24",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z",
              fill: "currentColor",
            }),
          }),
        });
      };
    },
    97892: (e, l, t) => {
      "use strict";
      t.d(l, {
        Rb: () => n,
        Sj: () => r,
        Ug: () => c,
        Uo: () => x,
        Wm: () => d,
        g0: () => i,
        p2: () => h,
        tC: () => o,
        w9: () => s,
        wb: () => a,
      });
      var s = "only screen and (max-width : 600px)",
        c = "only screen and (min-width: ".concat(
          "601px",
          ") and (max-width: 1024px)"
        ),
        i = "only screen and (min-width: ".concat("1025px", ")"),
        r = "only screen and (max-width: 1024px)",
        a = {
          ACCEPTED: 202,
          BAD_GATEWAY: 502,
          BAD_REQUEST: 400,
          CONFLICT: 409,
          CONTINUE: 100,
          CREATED: 201,
          EXPECTATION_FAILED: 417,
          FAILED_DEPENDENCY: 424,
          FORBIDDEN: 403,
          GATEWAY_TIMEOUT: 504,
          GONE: 410,
          HTTP_VERSION_NOT_SUPPORTED: 505,
          IM_A_TEAPOT: 418,
          INSUFFICIENT_SPACE_ON_RESOURCE: 419,
          INSUFFICIENT_STORAGE: 507,
          INTERNAL_SERVER_ERROR: 500,
          LENGTH_REQUIRED: 411,
          LOCKED: 423,
          METHOD_FAILURE: 420,
          METHOD_NOT_ALLOWED: 405,
          MOVED_PERMANENTLY: 301,
          MOVED_TEMPORARILY: 302,
          MULTI_STATUS: 207,
          MULTIPLE_CHOICES: 300,
          NETWORK_AUTHENTICATION_REQUIRED: 511,
          NO_CONTENT: 204,
          NON_AUTHORITATIVE_INFORMATION: 203,
          NOT_ACCEPTABLE: 406,
          NOT_FOUND: 404,
          NOT_IMPLEMENTED: 501,
          NOT_MODIFIED: 304,
          OK: 200,
          PARTIAL_CONTENT: 206,
          PAYMENT_REQUIRED: 402,
          PERMANENT_REDIRECT: 308,
          PRECONDITION_FAILED: 412,
          PRECONDITION_REQUIRED: 428,
          PROCESSING: 102,
          PROXY_AUTHENTICATION_REQUIRED: 407,
          REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
          REQUEST_TIMEOUT: 408,
          REQUEST_TOO_LONG: 413,
          REQUEST_URI_TOO_LONG: 414,
          REQUESTED_RANGE_NOT_SATISFIABLE: 416,
          RESET_CONTENT: 205,
          SEE_OTHER: 303,
          SERVICE_UNAVAILABLE: 503,
          SWITCHING_PROTOCOLS: 101,
          TEMPORARY_REDIRECT: 307,
          TOO_MANY_REQUESTS: 429,
          UNAUTHORIZED: 401,
          UNPROCESSABLE_ENTITY: 422,
          UNSUPPORTED_MEDIA_TYPE: 415,
          USE_PROXY: 305,
        },
        n = "Something went wrong.",
        o = "Unprocessable entity",
        d = "Too many requests",
        h = "404 Not Found",
        x =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    },
    98545: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { MonitorIcon: () => i });
      var s = t(9598),
        c = t(25759);
      let i = (e) => {
        let { size: l = 24, ...t } = e;
        return (0, s.jsx)(c.Icon, {
          children: (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: l,
            fill: "none",
            ...t,
            children: (0, s.jsx)("path", {
              d: "M15 17v4H9v-4m-3.8 0h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 15.48 22 14.92 22 13.8V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 3 19.92 3 18.8 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 17 4.08 17 5.2 17Z",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
  },
]);
