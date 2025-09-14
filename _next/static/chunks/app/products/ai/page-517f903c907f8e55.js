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
    (e._sentryDebugIds[t] = "c2fe6c45-4c6d-4019-b830-98412ce92a6b"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-c2fe6c45-4c6d-4019-b830-98412ce92a6b"));
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
  [2786],
  {
    29101: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { Hero: () => m });
      var i = s(9598),
        o = s(11950),
        n = s(53371),
        r = s(20260),
        a = s(35028),
        l = s(560),
        h = s(66190),
        d = s.n(h),
        c = s(45602);
      function m() {
        let [e, t] = (0, o.useState)(null),
          s = (0, o.useRef)(null),
          h = (0, o.useRef)(null),
          { scrollYProgress: m } = (0, n.L)(),
          p = (0, r.G)(m, [0, 1], [1, 0]);
        return (
          (0, o.useEffect)(() => {
            let i = {
              el: s.current,
              THREE: l,
              mouseControls: !0,
              touchControls: !0,
              gyroControls: !1,
              minHeight: 200,
              minWidth: 200,
              scale: 1,
              scaleMobile: 1,
              spacing: 20,
              points: 12,
              maxDistance: 25,
              color: 8047870,
              backgroundColor: 69400,
            };
            return (
              e || t(d()(i)),
              () => {
                e && e.destroy();
              }
            );
          }, [e, t]),
          (0, i.jsxs)(a.P.section, {
            id: "home",
            className:
              "bg-[#010f18] pt-16 pb-24 lg:py-20 overflow-hidden h-[calc(100svh-var(--header-height))] text-white flex px-4 md:px-15 lg:px-20",
            ref: h,
            style: { opacity: p },
            children: [
              (0, i.jsx)("div", {
                className:
                  "absolute inset-0 bg-[#010f18] h-svh after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:h-full after:w-full after:absolute after:bg-black/60 md:after:bg-black/40",
                ref: s,
              }),
              (0, i.jsx)("div", {
                className:
                  "container-max flex flex-col xl:flex-row gap-8 items-center relative w-full",
                children: (0, i.jsxs)("div", {
                  className: "flex flex-col grow xl:max-w-[900px]",
                  children: [
                    (0, i.jsxs)("h4", {
                      className:
                        "flex items-center text-text-xl font-black text-primary-500 gap-2 mb-4 md:mb-2",
                      children: [(0, i.jsx)(c.D5, {}), " Agent Auth"],
                    }),
                    (0, i.jsxs)("div", {
                      className: "flex flex-col gap-4 xl:gap-8",
                      children: [
                        (0, i.jsx)("h1", {
                          className:
                            "xl:text-display-lg font-black text-display-md md:text-display-sm",
                          children:
                            "Authentication and Authorization for AI Agents",
                        }),
                        (0, i.jsx)("p", {
                          className: "xl:text-text-lg text-text-md",
                          children:
                            "Assign digital identities to your AI Agents and customers, enabling easy authentication for actions and ensuring safety, compliance, and real-time monitoring. Empower human operators to issue credentials that authorize agents to execute transactions autonomously, all via privacy-preserving cryptography.",
                        }),
                        (0, i.jsx)(c.$n, {
                          className:
                            "mt-4 xl:mt-0 text-gray-900 bg-primary-300",
                          size: "xl",
                          href: "https://www.dextools.io/app/en/ether/pair-explorer/0xf60899b5d7239d0868520d9b6fec14976a37795b",
                          children: "Chart",
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
    },
    58976: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 90644)),
        Promise.resolve().then(s.bind(s, 29101)),
        Promise.resolve().then(s.bind(s, 66629)),
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
    66190: function (e) {
      var t;
      "undefined" != typeof self && self,
        (e.exports = (() => {
          "use strict";
          var e = {
              d: (t, s) => {
                for (var i in s)
                  e.o(s, i) &&
                    !e.o(t, i) &&
                    Object.defineProperty(t, i, { enumerable: !0, get: s[i] });
              },
              o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
              r: (e) => {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              },
            },
            t = {};
          function s() {
            return "undefined" != typeof navigator
              ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                ) || window.innerWidth < 600
              : null;
          }
          function i(e, t) {
            return (
              null == e && (e = 0),
              null == t && (t = 1),
              Math.floor(e + Math.random() * (t - e + 1))
            );
          }
          e.r(t),
            e.d(t, { default: () => m }),
            (Number.prototype.clamp = function (e, t) {
              return Math.min(Math.max(this, e), t);
            });
          let o = (e) => 0.299 * e.r + 0.587 * e.g + 0.114 * e.b,
            n = "object" == typeof window,
            r = (n && window.THREE) || {};
          n && !window.VANTA && (window.VANTA = {});
          let a = (n && window.VANTA) || {};
          (a.register = (e, t) => (a[e] = (e) => new t(e))),
            (a.version = "0.5.24");
          let l = function () {
            return (
              Array.prototype.unshift.call(arguments, "[VANTA]"),
              console.error.apply(this, arguments)
            );
          };
          a.VantaBase = class {
            constructor(e = {}) {
              var t;
              if (!n) return !1;
              (a.current = this),
                (this.windowMouseMoveWrapper =
                  this.windowMouseMoveWrapper.bind(this)),
                (this.windowTouchWrapper = this.windowTouchWrapper.bind(this)),
                (this.windowGyroWrapper = this.windowGyroWrapper.bind(this)),
                (this.resize = this.resize.bind(this)),
                (this.animationLoop = this.animationLoop.bind(this)),
                (this.restart = this.restart.bind(this));
              let s =
                "function" == typeof this.getDefaultOptions
                  ? this.getDefaultOptions()
                  : this.defaultOptions;
              if (
                ((this.options = Object.assign(
                  {
                    mouseControls: !0,
                    touchControls: !0,
                    gyroControls: !1,
                    minHeight: 200,
                    minWidth: 200,
                    scale: 1,
                    scaleMobile: 1,
                  },
                  s
                )),
                (e instanceof HTMLElement || "string" == typeof e) &&
                  (e = { el: e }),
                Object.assign(this.options, e),
                this.options.THREE && (r = this.options.THREE),
                (this.el = this.options.el),
                null == this.el)
              )
                l('Instance needs "el" param!');
              else if (!(this.options.el instanceof HTMLElement)) {
                let e = this.el;
                if (((this.el = document.querySelector(e)), !this.el))
                  return void l("Cannot find element", e);
              }
              this.prepareEl(), this.initThree(), this.setSize();
              try {
                this.init();
              } catch (e) {
                return (
                  l("Init error", e),
                  this.renderer &&
                    this.renderer.domElement &&
                    this.el.removeChild(this.renderer.domElement),
                  void (
                    this.options.backgroundColor &&
                    (console.log("[VANTA] Falling back to backgroundColor"),
                    (this.el.style.background =
                      "number" == typeof (t = this.options.backgroundColor)
                        ? "#" + ("00000" + t.toString(16)).slice(-6)
                        : t))
                  )
                );
              }
              this.initMouse(), this.resize(), this.animationLoop();
              let i = window.addEventListener;
              i("resize", this.resize),
                window.requestAnimationFrame(this.resize),
                this.options.mouseControls &&
                  (i("scroll", this.windowMouseMoveWrapper),
                  i("mousemove", this.windowMouseMoveWrapper)),
                this.options.touchControls &&
                  (i("touchstart", this.windowTouchWrapper),
                  i("touchmove", this.windowTouchWrapper)),
                this.options.gyroControls &&
                  i("deviceorientation", this.windowGyroWrapper);
            }
            setOptions(e = {}) {
              Object.assign(this.options, e), this.triggerMouseMove();
            }
            prepareEl() {
              let e, t;
              if ("undefined" != typeof Node && Node.TEXT_NODE)
                for (e = 0; e < this.el.childNodes.length; e++) {
                  let t = this.el.childNodes[e];
                  if (t.nodeType === Node.TEXT_NODE) {
                    let e = document.createElement("span");
                    (e.textContent = t.textContent),
                      t.parentElement.insertBefore(e, t),
                      t.remove();
                  }
                }
              for (e = 0; e < this.el.children.length; e++)
                "static" ===
                  getComputedStyle((t = this.el.children[e])).position &&
                  (t.style.position = "relative"),
                  "auto" === getComputedStyle(t).zIndex && (t.style.zIndex = 1);
              "static" === getComputedStyle(this.el).position &&
                (this.el.style.position = "relative");
            }
            applyCanvasStyles(e, t = {}) {
              Object.assign(e.style, {
                position: "absolute",
                zIndex: 0,
                top: 0,
                left: 0,
                background: "",
              }),
                Object.assign(e.style, t),
                e.classList.add("vanta-canvas");
            }
            initThree() {
              r.WebGLRenderer
                ? ((this.renderer = new r.WebGLRenderer({
                    alpha: !0,
                    antialias: !0,
                  })),
                  this.el.appendChild(this.renderer.domElement),
                  this.applyCanvasStyles(this.renderer.domElement),
                  isNaN(this.options.backgroundAlpha) &&
                    (this.options.backgroundAlpha = 1),
                  (this.scene = new r.Scene()))
                : console.warn("[VANTA] No THREE defined on window");
            }
            getCanvasElement() {
              return this.renderer
                ? this.renderer.domElement
                : this.p5renderer
                ? this.p5renderer.canvas
                : void 0;
            }
            getCanvasRect() {
              let e = this.getCanvasElement();
              return !!e && e.getBoundingClientRect();
            }
            windowMouseMoveWrapper(e) {
              let t = this.getCanvasRect();
              if (!t) return !1;
              let s = e.clientX - t.left,
                i = e.clientY - t.top;
              s >= 0 &&
                i >= 0 &&
                s <= t.width &&
                i <= t.height &&
                ((this.mouseX = s),
                (this.mouseY = i),
                this.options.mouseEase || this.triggerMouseMove(s, i));
            }
            windowTouchWrapper(e) {
              let t = this.getCanvasRect();
              if (!t) return !1;
              if (1 === e.touches.length) {
                let s = e.touches[0].clientX - t.left,
                  i = e.touches[0].clientY - t.top;
                s >= 0 &&
                  i >= 0 &&
                  s <= t.width &&
                  i <= t.height &&
                  ((this.mouseX = s),
                  (this.mouseY = i),
                  this.options.mouseEase || this.triggerMouseMove(s, i));
              }
            }
            windowGyroWrapper(e) {
              let t = this.getCanvasRect();
              if (!t) return !1;
              let s = Math.round(2 * e.alpha) - t.left,
                i = Math.round(2 * e.beta) - t.top;
              s >= 0 &&
                i >= 0 &&
                s <= t.width &&
                i <= t.height &&
                ((this.mouseX = s),
                (this.mouseY = i),
                this.options.mouseEase || this.triggerMouseMove(s, i));
            }
            triggerMouseMove(e, t) {
              void 0 === e &&
                void 0 === t &&
                (this.options.mouseEase
                  ? ((e = this.mouseEaseX), (t = this.mouseEaseY))
                  : ((e = this.mouseX), (t = this.mouseY))),
                this.uniforms &&
                  ((this.uniforms.iMouse.value.x = e / this.scale),
                  (this.uniforms.iMouse.value.y = t / this.scale));
              let s = e / this.width,
                i = t / this.height;
              "function" == typeof this.onMouseMove && this.onMouseMove(s, i);
            }
            setSize() {
              this.scale || (this.scale = 1),
                s() && this.options.scaleMobile
                  ? (this.scale = this.options.scaleMobile)
                  : this.options.scale && (this.scale = this.options.scale),
                (this.width = Math.max(
                  this.el.offsetWidth,
                  this.options.minWidth
                )),
                (this.height = Math.max(
                  this.el.offsetHeight,
                  this.options.minHeight
                ));
            }
            initMouse() {
              ((this.mouseX || this.mouseY) &&
                (this.mouseX !== this.options.minWidth / 2 ||
                  this.mouseY !== this.options.minHeight / 2)) ||
                ((this.mouseX = this.width / 2),
                (this.mouseY = this.height / 2),
                this.triggerMouseMove(this.mouseX, this.mouseY));
            }
            resize() {
              this.setSize(),
                this.camera &&
                  ((this.camera.aspect = this.width / this.height),
                  "function" == typeof this.camera.updateProjectionMatrix &&
                    this.camera.updateProjectionMatrix()),
                this.renderer &&
                  (this.renderer.setSize(this.width, this.height),
                  this.renderer.setPixelRatio(
                    window.devicePixelRatio / this.scale
                  )),
                "function" == typeof this.onResize && this.onResize();
            }
            isOnScreen() {
              let e = this.el.offsetHeight,
                t = this.el.getBoundingClientRect(),
                s =
                  window.pageYOffset ||
                  (
                    document.documentElement ||
                    document.body.parentNode ||
                    document.body
                  ).scrollTop,
                i = t.top + s;
              return i - window.innerHeight <= s && s <= i + e;
            }
            animationLoop() {
              this.t || (this.t = 0), this.t2 || (this.t2 = 0);
              let e = performance.now();
              if (this.prevNow) {
                let t = (e - this.prevNow) / (1e3 / 60);
                (t = Math.max(0.2, Math.min(t, 5))),
                  (this.t += t),
                  (this.t2 += (this.options.speed || 1) * t),
                  this.uniforms &&
                    (this.uniforms.iTime.value = 0.016667 * this.t2);
              }
              return (
                (this.prevNow = e),
                this.options.mouseEase &&
                  ((this.mouseEaseX = this.mouseEaseX || this.mouseX || 0),
                  (this.mouseEaseY = this.mouseEaseY || this.mouseY || 0),
                  Math.abs(this.mouseEaseX - this.mouseX) +
                    Math.abs(this.mouseEaseY - this.mouseY) >
                    0.1 &&
                    ((this.mouseEaseX +=
                      0.05 * (this.mouseX - this.mouseEaseX)),
                    (this.mouseEaseY += 0.05 * (this.mouseY - this.mouseEaseY)),
                    this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))),
                (this.isOnScreen() || this.options.forceAnimate) &&
                  ("function" == typeof this.onUpdate && this.onUpdate(),
                  this.scene &&
                    this.camera &&
                    (this.renderer.render(this.scene, this.camera),
                    this.renderer.setClearColor(
                      this.options.backgroundColor,
                      this.options.backgroundAlpha
                    )),
                  this.fps && this.fps.update && this.fps.update(),
                  "function" == typeof this.afterRender && this.afterRender()),
                (this.req = window.requestAnimationFrame(this.animationLoop))
              );
            }
            restart() {
              if (this.scene)
                for (; this.scene.children.length; )
                  this.scene.remove(this.scene.children[0]);
              "function" == typeof this.onRestart && this.onRestart(),
                this.init();
            }
            init() {
              "function" == typeof this.onInit && this.onInit();
            }
            destroy() {
              "function" == typeof this.onDestroy && this.onDestroy();
              let e = window.removeEventListener;
              e("touchstart", this.windowTouchWrapper),
                e("touchmove", this.windowTouchWrapper),
                e("scroll", this.windowMouseMoveWrapper),
                e("mousemove", this.windowMouseMoveWrapper),
                e("deviceorientation", this.windowGyroWrapper),
                e("resize", this.resize),
                window.cancelAnimationFrame(this.req);
              let t = this.scene;
              t &&
                t.children &&
                (function e(t) {
                  for (; t.children && t.children.length > 0; )
                    e(t.children[0]), t.remove(t.children[0]);
                  t.geometry && t.geometry.dispose(),
                    t.material &&
                      (Object.keys(t.material).forEach((e) => {
                        t.material[e] &&
                          null !== t.material[e] &&
                          "function" == typeof t.material[e].dispose &&
                          t.material[e].dispose();
                      }),
                      t.material.dispose());
                })(t),
                this.renderer &&
                  (this.renderer.domElement &&
                    this.el.removeChild(this.renderer.domElement),
                  (this.renderer = null),
                  (this.scene = null)),
                a.current === this && (a.current = null);
            }
          };
          let h = a.VantaBase,
            d = "object" == typeof window && window.THREE;
          class c extends h {
            static initClass() {
              this.prototype.defaultOptions = {
                color: 0xff3f81,
                backgroundColor: 2299196,
                points: 10,
                maxDistance: 20,
                spacing: 15,
                showDots: !0,
              };
            }
            constructor(e) {
              (d = e.THREE || d), super(e);
            }
            genPoint(e, t, s) {
              let i;
              if ((this.points || (this.points = []), this.options.showDots)) {
                let e = new d.SphereGeometry(0.25, 12, 12),
                  t = new d.MeshLambertMaterial({ color: this.options.color });
                i = new d.Mesh(e, t);
              } else i = new d.Object3D();
              return (
                this.cont.add(i),
                (i.ox = e),
                (i.oy = t),
                (i.oz = s),
                i.position.set(e, t, s),
                (i.r = -2 + 4 * Math.random()),
                this.points.push(i)
              );
            }
            onInit() {
              (this.cont = new d.Group()),
                this.cont.position.set(0, 0, 0),
                this.scene.add(this.cont);
              let e = this.options.points,
                { spacing: t } = this.options;
              s() && ((e = ~~(0.75 * e)), (t = ~~(0.65 * t)));
              let n = e * e * 2;
              (this.linePositions = new Float32Array(n * n * 3)),
                (this.lineColors = new Float32Array(n * n * 3));
              let r = o(new d.Color(this.options.color)),
                a = o(new d.Color(this.options.backgroundColor));
              this.blending = r > a ? "additive" : "subtractive";
              let l = new d.BufferGeometry();
              l.setAttribute(
                "position",
                new d.BufferAttribute(this.linePositions, 3).setUsage(
                  d.DynamicDrawUsage
                )
              ),
                l.setAttribute(
                  "color",
                  new d.BufferAttribute(this.lineColors, 3).setUsage(
                    d.DynamicDrawUsage
                  )
                ),
                l.computeBoundingSphere(),
                l.setDrawRange(0, 0);
              let h = new d.LineBasicMaterial({
                vertexColors: d.VertexColors,
                blending:
                  "additive" === this.blending ? d.AdditiveBlending : null,
                transparent: !0,
              });
              (this.linesMesh = new d.LineSegments(l, h)),
                this.cont.add(this.linesMesh);
              for (let s = 0; s <= e; s++)
                for (let o = 0; o <= e; o++) {
                  let n = i(-3, 3),
                    r = (s - e / 2) * t + i(-5, 5),
                    a = (o - e / 2) * t + i(-5, 5);
                  s % 2 && (a += 0.5 * t),
                    this.genPoint(r, n - i(5, 15), a),
                    this.genPoint(r + i(-5, 5), n + i(5, 15), a + i(-5, 5));
                }
              (this.camera = new d.PerspectiveCamera(
                25,
                this.width / this.height,
                0.01,
                1e4
              )),
                this.camera.position.set(50, 100, 150),
                this.scene.add(this.camera);
              let c = new d.AmbientLight(0xffffff, 0.75);
              return (
                this.scene.add(c),
                (this.spot = new d.SpotLight(0xffffff, 1)),
                this.spot.position.set(0, 200, 0),
                (this.spot.distance = 400),
                (this.spot.target = this.cont),
                this.scene.add(this.spot)
              );
            }
            onDestroy() {
              this.scene && this.scene.remove(this.linesMesh),
                (this.spot =
                  this.points =
                  this.linesMesh =
                  this.lineColors =
                  this.linePositions =
                    null);
            }
            setOptions(e) {
              super.setOptions(e),
                e.color &&
                  this.points.forEach((t) => {
                    t.material.color = new d.Color(e.color);
                  });
            }
            onUpdate() {
              let e,
                t = this.camera;
              Math.abs(t.tx - t.position.x) > 0.01 &&
                ((e = t.tx - t.position.x), (t.position.x += 0.02 * e)),
                Math.abs(t.ty - t.position.y) > 0.01 &&
                  ((e = t.ty - t.position.y), (t.position.y += 0.02 * e)),
                t.lookAt(new d.Vector3(0, 0, 0));
              let s = 0,
                i = 0,
                o = 0,
                n = new d.Color(this.options.backgroundColor),
                r = new d.Color(this.options.color),
                a = r.clone().sub(n);
              this.rayCaster &&
                this.rayCaster.setFromCamera(
                  new d.Vector2(this.rcMouseX, this.rcMouseY),
                  this.camera
                );
              for (let e = 0; e < this.points.length; e++) {
                let t,
                  l = this.points[e],
                  h = (
                    this.rayCaster
                      ? this.rayCaster.ray.distanceToPoint(l.position)
                      : 1e3
                  ).clamp(5, 15);
                if (
                  ((l.scale.x =
                    l.scale.y =
                    l.scale.z =
                      (0.25 * (15 - h)).clamp(1, 100)),
                  0 !== l.r)
                ) {
                  let e = Math.atan2(l.position.z, l.position.x);
                  (t = Math.sqrt(
                    l.position.z * l.position.z + l.position.x * l.position.x
                  )),
                    (e += 25e-5 * l.r),
                    (l.position.x = t * Math.cos(e)),
                    (l.position.z = t * Math.sin(e));
                }
                for (let h = e; h < this.points.length; h++) {
                  let e = this.points[h],
                    c = l.position.x - e.position.x,
                    m = l.position.y - e.position.y,
                    p = l.position.z - e.position.z;
                  if (
                    (t = Math.sqrt(c * c + m * m + p * p)) <
                    this.options.maxDistance
                  ) {
                    let h,
                      c = (2 * (1 - t / this.options.maxDistance)).clamp(0, 1);
                    (h =
                      "additive" === this.blending
                        ? new d.Color(0).lerp(a, c)
                        : n.clone().lerp(r, c)),
                      (this.linePositions[s++] = l.position.x),
                      (this.linePositions[s++] = l.position.y),
                      (this.linePositions[s++] = l.position.z),
                      (this.linePositions[s++] = e.position.x),
                      (this.linePositions[s++] = e.position.y),
                      (this.linePositions[s++] = e.position.z),
                      (this.lineColors[i++] = h.r),
                      (this.lineColors[i++] = h.g),
                      (this.lineColors[i++] = h.b),
                      (this.lineColors[i++] = h.r),
                      (this.lineColors[i++] = h.g),
                      (this.lineColors[i++] = h.b),
                      o++;
                  }
                }
              }
              return (
                this.linesMesh.geometry.setDrawRange(0, 2 * o),
                (this.linesMesh.geometry.attributes.position.needsUpdate = !0),
                (this.linesMesh.geometry.attributes.color.needsUpdate = !0),
                0.001 * this.t
              );
            }
            onMouseMove(e, t) {
              let s = this.camera;
              s.oy ||
                ((s.oy = s.position.y),
                (s.ox = s.position.x),
                (s.oz = s.position.z));
              let i = Math.atan2(s.oz, s.ox),
                o = Math.sqrt(s.oz * s.oz + s.ox * s.ox),
                n = i + 2 * (e - 0.5) * (this.options.mouseCoeffX || 1);
              (s.tz = o * Math.sin(n)),
                (s.tx = o * Math.cos(n)),
                (s.ty =
                  s.oy + 50 * (t - 0.5) * (this.options.mouseCoeffY || 1)),
                this.rayCaster,
                (this.rcMouseX = 2 * e - 1),
                (this.rcMouseY = -(2 * e) + 1);
            }
            onRestart() {
              this.scene && this.scene.remove(this.linesMesh),
                (this.points = []);
            }
          }
          c.initClass();
          let m = a.register("NET", c);
          return t;
        })());
    },
    66629: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { UseCases: () => r });
      var i = s(9598),
        o = s(97255),
        n = s(45602);
      function r() {
        return (0, i.jsx)("section", {
          className: "bg-gray-50 py-16 lg:py-24 px-4 md:px-15 lg:px-20",
          id: "use-cases",
          "data-section": "use-cases",
          children: (0, i.jsxs)("div", {
            className: "container-max gap-12 lg:gap-16 flex flex-col",
            children: [
              (0, i.jsx)("div", {
                className: "flex items-center gap-16",
                children: (0, i.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    (0, i.jsx)("h2", {
                      className:
                        "text-display-xs lg:text-display-md text-gray-900 font-black",
                      children: "Designed for Ultimate Flexibility & Security",
                    }),
                    (0, i.jsx)("p", {
                      className: "text-text-lg lg:text-text-xl text-gray-600",
                      children:
                        "Enable secure, compliant AI Agent transactions with real-time policy enforcement, in any industry.",
                    }),
                  ],
                }),
              }),
              (0, i.jsxs)(n.FN, {
                className: "flex xl:gap-12 lg:gap-4",
                withControl: !0,
                slideClassName: "basis-1/3",
                containerClassName: "xl:px-0 lg:ps-0 md:ps-0 ps-0",
                children: [
                  (0, i.jsx)("figure", {
                    className: "lg:pl-0 min-w-[327px] snap-start group",
                    id: "item-1",
                    children: (0, i.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, i.jsx)(o.default, {
                            src: "/images/products/ai/usecase-1.png",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "px-4 min-h-[220px] lg:min-h-[202px] pb-4",
                          children: [
                            (0, i.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children:
                                "Protect AI-Driven Financial Transactions",
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Ensure that AI Agents stay within predefined risk parameters for autonomous transactions, to prevent unauthorized or malicious activities.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("figure", {
                    className: "lg:pl-0 min-w-[327px] snap-start group",
                    id: "item-2",
                    children: (0, i.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, i.jsx)(o.default, {
                            src: "/images/products/ai/usecase-2.png",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "px-4 min-h-[220px] lg:min-h-[202px] pb-4",
                          children: [
                            (0, i.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Agent Compliance Automation",
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Program AI Agents to verify compliance before executing transactions, while ensuring that user privacy is never compromised.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("figure", {
                    className: "lg:pl-0 min-w-[327px] snap-start group",
                    id: "item-3",
                    children: (0, i.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "h-[245px] lg:h-[300px] bg-primary-600 rounded-3xl bg-gradient-to-tr from-[#0B4A6F] to-[#0086C9] flex justify-center items-center",
                          children: (0, i.jsx)(o.default, {
                            src: "/images/products/ai/usecase-3.png",
                            alt: "usecase",
                            height: 128,
                            width: 300,
                            className:
                              "w-auto group-hover:scale-125 transition-all max-h-[128px]",
                            sizes: "100%",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "px-4 min-h-[220px] lg:min-h-[202px] pb-4",
                          children: [
                            (0, i.jsx)("figcaption", {
                              className:
                                "text-text-lg lg:text-text-xl font-bold text-gray-900 mb-4",
                              children: "Autonomous DAO Governance",
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "text-text-sm marker:lg:text-text-md text-gray-600",
                              children:
                                "Use AI Agents to streamline DAO governance and distribution, while maintaining control over decision-making processes and safeguarding against unauthorized access or actions.",
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
    77632: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      let i = (0, s(73710).A)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    90644: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { Features: () => c });
      var i = s(9598),
        o = s(11950),
        n = s(97255),
        r = s(77632),
        a = s(20704),
        l = s(35028),
        h = s(45602);
      let d = [
        {
          src: "/images/products/ai/feature-1.webp",
          alt: 'A flowchart showing three AI agents connected to a verification system. "AI Agent 1" and "AI Agent 2" are marked as "Verified" with green check badges and are connected to a web page icon, while "AI Agent 3" is marked as "Unverified" with a red cross badge and is not connected. The background is a dark grid.',
        },
        {
          src: "/images/products/ai/feature-2.webp",
          alt: "A flowchart showing a blue hexagonal verification system at the top, connected downward to a row of three circular icons: two green document icons with checkmarks and one red document icon with an X. Below, a web page icon is connected, representing the result of the verification process.",
        },
        {
          src: "/images/products/ai/feature-3.webp",
          alt: 'A diagram showing a blue hexagonal verification system issuing a "Verified Agent" card. The card is labeled "Verified" with a green checkmark and an issue date. Dotted lines connect the card to three web page icons representing different services: a payment, a folder with a privacy symbol, and a shield for security.',
        },
        {
          src: "/images/products/ai/feature-4.webp",
          alt: 'A conversation flow where an AI Agent asks, "Confirm payment?" A verification system displays a credit card confirmation form with masked details for "Terry Smith." Below, a user confirms with "Yes, payment is confirmed," and a green checkmark indicates approval.',
        },
        {
          src: "/images/products/ai/feature-5.webp",
          alt: "A central blue hexagonal verification system is connected upward to four icons representing different industries or applications: a grid of squares (apps), a game controller (gaming), a bank (finance), and an airplane (travel). Below, the system connects to a web page icon, indicating integration across sectors.",
        },
      ];
      function c() {
        let [e, t] = (0, o.useState)(0);
        return (0, i.jsx)("section", {
          className:
            "overflow-x-hidden bg-gray-100 xl:py-24 px-4 md:px-15 lg:px-20",
          id: "features",
          "data-section": "features",
          children: (0, i.jsx)("div", {
            className: "container-max flex flex-col xl:gap-6",
            children: (0, i.jsxs)("div", {
              className:
                "py-16 xl:py-12 flex flex-col xl:flex-row xl:gap-18 xl:gap-24 xl:items-center gap-6",
              children: [
                (0, i.jsxs)("div", {
                  className: "md:basis-1/2",
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(a.N, {
                          mode: "popLayout",
                          children: (0, i.jsx)(
                            l.P.div,
                            {
                              className: "md:hidden my-4 md:my-6",
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.5 },
                              children: (0, i.jsx)(n.default, {
                                src: d[e].src,
                                alt: d[e].alt,
                                width: 640,
                                height: 640,
                                className: "w-full h-auto rounded-3xl",
                              }),
                            },
                            e
                          ),
                        }),
                        (0, i.jsxs)("div", {
                          className: "my-6 xl:my-8 flex flex-col gap-4",
                          children: [
                            (0, i.jsx)("h2", {
                              className:
                                "text-display-sm md:text-display-sm font-black text-gray-900",
                              children: "A Trust Platform for AI Agents",
                            }),
                            (0, i.jsx)("p", {
                              className: "text-text-lg text-gray-600",
                              children:
                                "From verifying identities to monitoring real-time actions, Agent Auth ensures that your AI Agents operate within safe, secure, and auditable boundaries.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "py-6",
                      children: (0, i.jsxs)(h.nD, {
                        defaultIndex: e,
                        activeIdx: e,
                        onChange: (e) => t(e),
                        children: [
                          (0, i.jsxs)(h.As, {
                            children: [
                              (0, i.jsx)(h.u, {
                                children: (0, i.jsx)("h4", {
                                  className:
                                    "text-text-lg md:text-text-md text-left font-bold text-gray-900",
                                  children: "Agent Identity & Authentication",
                                }),
                              }),
                              (0, i.jsxs)(h.ub, {
                                className: "flex flex-col gap-4",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-text-sm md:text-text-md text-gray-600",
                                    children:
                                      "Assign unique, verifiable identities to each agent, preventing unauthorized actions and ensuring accountability at every step.",
                                  }),
                                  (0, i.jsxs)(h.$n, {
                                    variant: "link",
                                    href: "https://www.dextools.io/app/en/ether/pair-explorer/0xf60899b5d7239d0868520d9b6fec14976a37795b",
                                    size: "sm",
                                    children: [
                                      "Chart",
                                      (0, i.jsx)(r.A, {}),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)(h.As, {
                            children: [
                              (0, i.jsx)(h.u, {
                                children: (0, i.jsx)("h4", {
                                  className:
                                    "text-text-lg md:text-text-md font-bold text-gray-900",
                                  children: "Granular Policy Control",
                                }),
                              }),
                              (0, i.jsxs)(h.ub, {
                                className: "flex flex-col gap-4",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-text-sm md:text-text-md text-gray-600",
                                    children:
                                      "Maintain full control over agent activity with an intuitive policy engine that adapts to your specific needs.",
                                  }),
                                  (0, i.jsxs)(h.$n, {
                                    variant: "link",
                                    href: "https://www.dextools.io/app/en/ether/pair-explorer/0xf60899b5d7239d0868520d9b6fec14976a37795b",
                                    size: "sm",
                                    children: [
                                      "Chart",
                                      (0, i.jsx)(r.A, {}),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)(h.As, {
                            children: [
                              (0, i.jsx)(h.u, {
                                children: (0, i.jsx)("h4", {
                                  className:
                                    "text-text-lg md:text-text-md font-bold text-gray-900",
                                  children:
                                    "Authorization Credentials for Agents",
                                }),
                              }),
                              (0, i.jsxs)(h.ub, {
                                className: "flex flex-col gap-4",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-text-sm md:text-text-md text-gray-600",
                                    children:
                                      "Issue advanced cryptographic authorizations for autonomous transactions, guaranteeing compliance while maintaining user privacy.",
                                  }),
                                  (0, i.jsxs)(h.$n, {
                                    variant: "link",
                                    href: "https://www.dextools.io/app/en/ether/pair-explorer/0xf60899b5d7239d0868520d9b6fec14976a37795b",
                                    size: "sm",
                                    children: [
                                      "Chart",
                                      (0, i.jsx)(r.A, {}),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)(h.As, {
                            children: [
                              (0, i.jsx)(h.u, {
                                children: (0, i.jsx)("h4", {
                                  className:
                                    "text-text-lg md:text-text-md font-bold text-gray-900",
                                  children: "Real-Time Monitoring",
                                }),
                              }),
                              (0, i.jsxs)(h.ub, {
                                className: "flex flex-col gap-4",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-text-sm md:text-text-md text-gray-600",
                                    children:
                                      "Stay informed on every action taken by your agents, ensuring continuous oversight and rapid response to potential threats.",
                                  }),
                                  (0, i.jsxs)(h.$n, {
                                    variant: "link",
                                    href: "https://www.dextools.io/app/en/ether/pair-explorer/0xf60899b5d7239d0868520d9b6fec14976a37795b",
                                    size: "sm",
                                    children: [
                                      "Chart",
                                      (0, i.jsx)(r.A, {}),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)(h.As, {
                            children: [
                              (0, i.jsx)(h.u, {
                                children: (0, i.jsx)("h4", {
                                  className:
                                    "text-text-lg md:text-text-md font-bold text-gray-900",
                                  children: "Seamless Integration",
                                }),
                              }),
                              (0, i.jsxs)(h.ub, {
                                className: "flex flex-col gap-4",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-text-sm md:text-text-md text-gray-600",
                                    children:
                                      "Enhance your platform's security without disrupting your current workflows and agent capabilities.",
                                  }),
                                  (0, i.jsxs)(h.$n, {
                                    variant: "link",
                                    href: "https://www.dextools.io/app/en/ether/pair-explorer/0xf60899b5d7239d0868520d9b6fec14976a37795b",
                                    size: "sm",
                                    children: [
                                      "Learn more",
                                      (0, i.jsx)(r.A, {}),
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
                (0, i.jsx)(a.N, {
                  mode: "popLayout",
                  children: (0, i.jsx)(
                    l.P.div,
                    {
                      className: "md:basis-1/2 hidden md:block",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.5 },
                      children: (0, i.jsx)(n.default, {
                        src: d[e].src,
                        alt: d[e].alt,
                        width: 640,
                        height: 640,
                        className: "w-full h-auto rounded-3xl",
                      }),
                    },
                    e
                  ),
                }),
              ],
            }),
          }),
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [7255, 7951, 507, 5602, 5148, 1860, 2086, 7358], () => t(58976)),
      (_N_E = e.O());
  },
]);
