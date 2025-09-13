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
    (e._sentryDebugIds[t] = "3535c16b-1b09-4a4e-9b68-32b1952c20b4"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-3535c16b-1b09-4a4e-9b68-32b1952c20b4"));
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
  [314],
  {
    9915: (e, t, l) => {
      var n = l(11950),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = n.useState,
        r = n.useEffect,
        o = n.useLayoutEffect,
        u = n.useDebugValue;
      function a(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var l = t();
          return !i(e, l);
        } catch (e) {
          return !0;
        }
      }
      var d =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var l = t(),
                n = s({ inst: { value: l, getSnapshot: t } }),
                i = n[0].inst,
                d = n[1];
              return (
                o(
                  function () {
                    (i.value = l), (i.getSnapshot = t), a(i) && d({ inst: i });
                  },
                  [e, l, t]
                ),
                r(
                  function () {
                    return (
                      a(i) && d({ inst: i }),
                      e(function () {
                        a(i) && d({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                u(l),
                l
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : d;
    },
    28884: (e, t, l) => {
      l.d(t, { oz: () => eN, wb: () => eI, Kp: () => eP, tU: () => eM });
      var n = l(11950);
      function i(e) {
        let {
            children: t,
            items: l,
            idScope: i,
            addIdAndValue: s,
            dependencies: r = [],
          } = e,
          o = (0, n.useMemo)(() => new WeakMap(), r);
        return (0, n.useMemo)(() => {
          if (l && "function" == typeof t) {
            let u = [];
            for (let a of l) {
              let l = o.get(a);
              if (!l) {
                var e, r;
                let u =
                  null != (r = null != (e = (l = t(a)).props.id) ? e : a.key)
                    ? r
                    : a.id;
                if (null == u) throw Error("Could not determine key for item");
                i && (u = i + ":" + u),
                  (l = (0, n.cloneElement)(
                    l,
                    s ? { key: u, id: u, value: a } : { key: u }
                  )),
                  o.set(a, l);
              }
              u.push(l);
            }
            return u;
          }
          if ("function" != typeof t) return t;
        }, [t, l, o, i, s]);
      }
      let s = {
        CollectionRoot: ({ collection: e, renderDropIndicator: t }) =>
          r(e, null, t),
        CollectionBranch: ({
          collection: e,
          parent: t,
          renderDropIndicator: l,
        }) => r(e, t, l),
      };
      function r(e, t, l) {
        return i({
          items: t ? e.getChildren(t.key) : e,
          dependencies: [l],
          children(t) {
            let i = t.render(t);
            return l && "item" === t.type
              ? n.createElement(
                  n.Fragment,
                  null,
                  l({ type: "item", key: t.key, dropPosition: "before" }),
                  i,
                  (function (e, t, l) {
                    let i = t.key,
                      s = e.getKeyAfter(i),
                      r = null != s ? e.getItem(s) : null;
                    for (; null != r && "item" !== r.type; )
                      r =
                        null != (s = e.getKeyAfter(r.key))
                          ? e.getItem(s)
                          : null;
                    let o = null != t.nextKey ? e.getItem(t.nextKey) : null;
                    for (; null != o && "item" !== o.type; )
                      o = null != o.nextKey ? e.getItem(o.nextKey) : null;
                    let u = [];
                    if (null == o) {
                      let i = t;
                      for (
                        ;
                        i &&
                        (!r ||
                          (i.parentKey !== r.parentKey && r.level < i.level));

                      ) {
                        let t = l({
                          type: "item",
                          key: i.key,
                          dropPosition: "after",
                        });
                        (0, n.isValidElement)(t) &&
                          u.push(
                            (0, n.cloneElement)(t, { key: `${i.key}-after` })
                          ),
                          (i =
                            null != i.parentKey
                              ? e.getItem(i.parentKey)
                              : null);
                      }
                    }
                    return u;
                  })(e, t, l)
                )
              : i;
          },
        });
      }
      let o = (0, n.createContext)(s);
      var u = l(30022),
        a = l(78741);
      let d = new WeakMap();
      function c(e, t, l) {
        if (!e) return "";
        "string" == typeof t && (t = t.replace(/\s+/g, ""));
        let n = d.get(e);
        return `${n}-${l}-${t}`;
      }
      class h {
        getKeyLeftOf(e) {
          return this.flipDirection
            ? this.getNextKey(e)
            : this.getPreviousKey(e);
        }
        getKeyRightOf(e) {
          return this.flipDirection
            ? this.getPreviousKey(e)
            : this.getNextKey(e);
        }
        isDisabled(e) {
          var t, l;
          return (
            this.disabledKeys.has(e) ||
            !!(null == (l = this.collection.getItem(e)) || null == (t = l.props)
              ? void 0
              : t.isDisabled)
          );
        }
        getFirstKey() {
          let e = this.collection.getFirstKey();
          return null != e && this.isDisabled(e) && (e = this.getNextKey(e)), e;
        }
        getLastKey() {
          let e = this.collection.getLastKey();
          return (
            null != e && this.isDisabled(e) && (e = this.getPreviousKey(e)), e
          );
        }
        getKeyAbove(e) {
          return this.tabDirection ? null : this.getPreviousKey(e);
        }
        getKeyBelow(e) {
          return this.tabDirection ? null : this.getNextKey(e);
        }
        getNextKey(e) {
          let t = e;
          do
            null == (t = this.collection.getKeyAfter(t)) &&
              (t = this.collection.getFirstKey());
          while (null != t && this.isDisabled(t));
          return t;
        }
        getPreviousKey(e) {
          let t = e;
          do
            null == (t = this.collection.getKeyBefore(t)) &&
              (t = this.collection.getLastKey());
          while (null != t && this.isDisabled(t));
          return t;
        }
        constructor(e, t, l, n = new Set()) {
          (this.collection = e),
            (this.flipDirection = "rtl" === t && "horizontal" === l),
            (this.disabledKeys = n),
            (this.tabDirection = "horizontal" === l);
        }
      }
      var y = l(72605),
        f = l(11223),
        p = l(93945),
        g = l(95413),
        v = l(33302);
      function K(e) {
        return (0, v.lg)() ? e.altKey : e.ctrlKey;
      }
      function b(e, t) {
        var l, n;
        let i = `[data-key="${CSS.escape(String(t))}"]`,
          s = null == (l = e.current) ? void 0 : l.dataset.collection;
        return (
          s && (i = `[data-collection="${CSS.escape(s)}"]${i}`),
          null == (n = e.current) ? void 0 : n.querySelector(i)
        );
      }
      let m = new WeakMap();
      var S = l(10943);
      function C(e) {
        return (0, v.cX)() ? e.metaKey : e.ctrlKey;
      }
      var k = l(55542),
        x = l(42945);
      function w(e, t, l, i) {
        let s = (0, x.J)(l),
          r = null == l;
        (0, n.useEffect)(() => {
          if (r || !e.current) return;
          let l = e.current;
          return (
            l.addEventListener(t, s, i),
            () => {
              l.removeEventListener(t, s, i);
            }
          );
        }, [e, t, i, r, s]);
      }
      var D = l(90836);
      function M(e, t) {
        let l = E(e, t, "left"),
          n = E(e, t, "top"),
          i = t.offsetWidth,
          s = t.offsetHeight,
          r = e.scrollLeft,
          o = e.scrollTop,
          {
            borderTopWidth: u,
            borderLeftWidth: a,
            scrollPaddingTop: d,
            scrollPaddingRight: c,
            scrollPaddingBottom: h,
            scrollPaddingLeft: y,
          } = getComputedStyle(e),
          f = r + parseInt(a, 10),
          p = o + parseInt(u, 10),
          g = f + e.clientWidth,
          v = p + e.clientHeight,
          K = parseInt(d, 10) || 0,
          b = parseInt(h, 10) || 0,
          m = parseInt(c, 10) || 0,
          S = parseInt(y, 10) || 0;
        l <= r + S
          ? (r = l - parseInt(a, 10) - S)
          : l + i > g - m && (r += l + i - g + m),
          n <= p + K
            ? (o = n - parseInt(u, 10) - K)
            : n + s > v - b && (o += n + s - v + b),
          (e.scrollLeft = r),
          (e.scrollTop = o);
      }
      function E(e, t, l) {
        let n = "left" === l ? "offsetLeft" : "offsetTop",
          i = 0;
        for (; t.offsetParent && ((i += t[n]), t.offsetParent !== e); ) {
          if (t.offsetParent.contains(e)) {
            i -= e[n];
            break;
          }
          t = t.offsetParent;
        }
        return i;
      }
      function I(e, t) {
        if (e && document.contains(e)) {
          let r = document.scrollingElement || document.documentElement;
          if ("hidden" === window.getComputedStyle(r).overflow)
            for (let t of (function (e, t) {
              let l = [];
              for (; e && e !== document.documentElement; )
                (0, D.o)(e, void 0) && l.push(e), (e = e.parentElement);
              return l;
            })(e))
              M(t, e);
          else {
            var l, n, i, s;
            let { left: r, top: o } = e.getBoundingClientRect();
            null == e ||
              null == (l = e.scrollIntoView) ||
              l.call(e, { block: "nearest" });
            let { left: u, top: a } = e.getBoundingClientRect();
            (Math.abs(r - u) > 1 || Math.abs(o - a) > 1) &&
              (null == t ||
                null == (i = t.containingElement) ||
                null == (n = i.scrollIntoView) ||
                n.call(i, { block: "center", inline: "center" }),
              null == (s = e.scrollIntoView) ||
                s.call(e, { block: "nearest" }));
          }
        }
      }
      var F = l(62191);
      function N(e, t) {
        let l = (0, n.useRef)(!0),
          i = (0, n.useRef)(null);
        (0, F.N)(
          () => (
            (l.current = !0),
            () => {
              l.current = !1;
            }
          ),
          []
        ),
          (0, F.N)(() => {
            l.current
              ? (l.current = !1)
              : (!i.current || t.some((e, t) => !Object.is(e, i[t]))) && e(),
              (i.current = t);
          }, t);
      }
      var P = l(68203),
        T = l(93220),
        A = l(75469),
        R = l(92477),
        L = l(67744),
        _ = l(7336);
      function B(e) {
        var t, l, n, i, s;
        let r,
          o,
          u =
            ((t = (0, L.TW)(e)),
            ((o =
              null == (r = (0, _.bq)(t))
                ? void 0
                : r.getAttribute("aria-activedescendant")) &&
              t.getElementById(o)) ||
              r);
        u !== e &&
          (u &&
            ((l = u),
            (n = e),
            l.dispatchEvent(new FocusEvent("blur", { relatedTarget: n })),
            l.dispatchEvent(
              new FocusEvent("focusout", { bubbles: !0, relatedTarget: n })
            )),
          e &&
            ((i = e),
            (s = u),
            i.dispatchEvent(new FocusEvent("focus", { relatedTarget: s })),
            i.dispatchEvent(
              new FocusEvent("focusin", { bubbles: !0, relatedTarget: s })
            )));
      }
      var V = l(2635),
        z = l(27125),
        $ = l(44292),
        O = l(42356);
      let H = 0,
        U = new Map();
      function W() {
        let e = window.event;
        return (null == e ? void 0 : e.key) === "Enter";
      }
      function q() {
        let e = window.event;
        return (
          (null == e ? void 0 : e.key) === " " ||
          (null == e ? void 0 : e.code) === "Space"
        );
      }
      var j = l(26470);
      class J {
        get childNodes() {
          throw Error("childNodes is not supported");
        }
        clone() {
          let e = new J(this.type, this.key);
          return (
            (e.value = this.value),
            (e.level = this.level),
            (e.hasChildNodes = this.hasChildNodes),
            (e.rendered = this.rendered),
            (e.textValue = this.textValue),
            (e["aria-label"] = this["aria-label"]),
            (e.index = this.index),
            (e.parentKey = this.parentKey),
            (e.prevKey = this.prevKey),
            (e.nextKey = this.nextKey),
            (e.firstChildKey = this.firstChildKey),
            (e.lastChildKey = this.lastChildKey),
            (e.props = this.props),
            (e.render = this.render),
            (e.colSpan = this.colSpan),
            (e.colIndex = this.colIndex),
            e
          );
        }
        constructor(e, t) {
          (this.value = null),
            (this.level = 0),
            (this.hasChildNodes = !1),
            (this.rendered = null),
            (this.textValue = ""),
            (this["aria-label"] = void 0),
            (this.index = 0),
            (this.parentKey = null),
            (this.prevKey = null),
            (this.nextKey = null),
            (this.firstChildKey = null),
            (this.lastChildKey = null),
            (this.props = {}),
            (this.colSpan = null),
            (this.colIndex = null),
            (this.type = e),
            (this.key = t);
        }
      }
      class Y {
        get size() {
          return this.keyMap.size;
        }
        getKeys() {
          return this.keyMap.keys();
        }
        *[Symbol.iterator]() {
          let e =
            null != this.firstKey ? this.keyMap.get(this.firstKey) : void 0;
          for (; e; )
            yield e,
              (e = null != e.nextKey ? this.keyMap.get(e.nextKey) : void 0);
        }
        getChildren(e) {
          let t = this.keyMap;
          return {
            *[Symbol.iterator]() {
              let l = t.get(e),
                n =
                  (null == l ? void 0 : l.firstChildKey) != null
                    ? t.get(l.firstChildKey)
                    : null;
              for (; n; )
                yield n, (n = null != n.nextKey ? t.get(n.nextKey) : void 0);
            },
          };
        }
        getKeyBefore(e) {
          let t = this.keyMap.get(e);
          if (!t) return null;
          if (null != t.prevKey) {
            var l;
            for (
              t = this.keyMap.get(t.prevKey);
              t && "item" !== t.type && null != t.lastChildKey;

            )
              t = this.keyMap.get(t.lastChildKey);
            return null != (l = null == t ? void 0 : t.key) ? l : null;
          }
          return t.parentKey;
        }
        getKeyAfter(e) {
          let t = this.keyMap.get(e);
          if (!t) return null;
          if ("item" !== t.type && null != t.firstChildKey)
            return t.firstChildKey;
          for (; t; ) {
            if (null != t.nextKey) return t.nextKey;
            if (null != t.parentKey) t = this.keyMap.get(t.parentKey);
            else break;
          }
          return null;
        }
        getFirstKey() {
          return this.firstKey;
        }
        getLastKey() {
          var e;
          let t = null != this.lastKey ? this.keyMap.get(this.lastKey) : null;
          for (; (null == t ? void 0 : t.lastChildKey) != null; )
            t = this.keyMap.get(t.lastChildKey);
          return null != (e = null == t ? void 0 : t.key) ? e : null;
        }
        getItem(e) {
          var t;
          return null != (t = this.keyMap.get(e)) ? t : null;
        }
        at() {
          throw Error("Not implemented");
        }
        clone() {
          let e = new this.constructor();
          return (
            (e.keyMap = new Map(this.keyMap)),
            (e.firstKey = this.firstKey),
            (e.lastKey = this.lastKey),
            e
          );
        }
        addNode(e) {
          if (this.frozen)
            throw Error("Cannot add a node to a frozen collection");
          this.keyMap.set(e.key, e);
        }
        removeNode(e) {
          if (this.frozen)
            throw Error("Cannot remove a node to a frozen collection");
          this.keyMap.delete(e);
        }
        commit(e, t, l = !1) {
          if (this.frozen) throw Error("Cannot commit a frozen collection");
          (this.firstKey = e), (this.lastKey = t), (this.frozen = !l);
        }
        UNSTABLE_filter(e) {
          let t = new Y(),
            l = null;
          for (let n of this)
            if ("section" === n.type && n.hasChildNodes) {
              let i = n.clone(),
                s = null;
              for (let l of this.getChildren(n.key))
                if (G(l, e, this, t)) {
                  let e = l.clone();
                  null == s && (i.firstChildKey = e.key),
                    null == t.firstKey && (t.firstKey = i.key),
                    s && s.parentKey === e.parentKey
                      ? ((s.nextKey = e.key), (e.prevKey = s.key))
                      : (e.prevKey = null),
                    (e.nextKey = null),
                    t.addNode(e),
                    (s = e);
                }
              s &&
                ("header" !== s.type
                  ? ((i.lastChildKey = s.key),
                    null == l
                      ? (i.prevKey = null)
                      : ("section" === l.type || "separator" === l.type) &&
                        ((l.nextKey = i.key), (i.prevKey = l.key)),
                    (i.nextKey = null),
                    (l = i),
                    t.addNode(i))
                  : (t.firstKey === i.key && (t.firstKey = null),
                    t.removeNode(s.key)));
            } else if ("separator" === n.type) {
              let e = n.clone();
              (e.nextKey = null),
                (null == l ? void 0 : l.type) === "section" &&
                  ((l.nextKey = e.key),
                  (e.prevKey = l.key),
                  (l = e),
                  t.addNode(e));
            } else {
              let i = n.clone();
              G(i, e, this, t) &&
                (null == t.firstKey && (t.firstKey = i.key),
                null != l &&
                "section" !== l.type &&
                "separator" !== l.type &&
                l.parentKey === i.parentKey
                  ? ((l.nextKey = i.key), (i.prevKey = l.key))
                  : (i.prevKey = null),
                (i.nextKey = null),
                t.addNode(i),
                (l = i));
            }
          if (
            (null == l ? void 0 : l.type) === "separator" &&
            null === l.nextKey
          ) {
            let e;
            null != l.prevKey && ((e = t.getItem(l.prevKey)).nextKey = null),
              t.removeNode(l.key),
              (l = e);
          }
          return (t.lastKey = (null == l ? void 0 : l.key) || null), t;
        }
        constructor() {
          (this.keyMap = new Map()),
            (this.firstKey = null),
            (this.lastKey = null),
            (this.frozen = !1);
        }
      }
      function G(e, t, l, n) {
        if ("subdialogtrigger" === e.type || "submenutrigger" === e.type) {
          let i = [...l.getChildren(e.key)][0];
          if (!(i && t(i.textValue))) return !1;
          {
            let e = i.clone();
            return n.addNode(e), !0;
          }
        }
        return "header" === e.type || t(e.textValue);
      }
      class Z {
        *[Symbol.iterator]() {
          let e = this.firstChild;
          for (; e; ) yield e, (e = e.nextSibling);
        }
        get firstChild() {
          return this._firstChild;
        }
        set firstChild(e) {
          (this._firstChild = e), this.ownerDocument.markDirty(this);
        }
        get lastChild() {
          return this._lastChild;
        }
        set lastChild(e) {
          (this._lastChild = e), this.ownerDocument.markDirty(this);
        }
        get previousSibling() {
          return this._previousSibling;
        }
        set previousSibling(e) {
          (this._previousSibling = e), this.ownerDocument.markDirty(this);
        }
        get nextSibling() {
          return this._nextSibling;
        }
        set nextSibling(e) {
          (this._nextSibling = e), this.ownerDocument.markDirty(this);
        }
        get parentNode() {
          return this._parentNode;
        }
        set parentNode(e) {
          (this._parentNode = e), this.ownerDocument.markDirty(this);
        }
        get isConnected() {
          var e;
          return (null == (e = this.parentNode) ? void 0 : e.isConnected) || !1;
        }
        invalidateChildIndices(e) {
          (null == this._minInvalidChildIndex ||
            !this._minInvalidChildIndex.isConnected ||
            e.index < this._minInvalidChildIndex.index) &&
            ((this._minInvalidChildIndex = e),
            this.ownerDocument.markDirty(this));
        }
        updateChildIndices() {
          let e = this._minInvalidChildIndex;
          for (; e; )
            (e.index = e.previousSibling ? e.previousSibling.index + 1 : 0),
              (e = e.nextSibling);
          this._minInvalidChildIndex = null;
        }
        appendChild(e) {
          e.parentNode && e.parentNode.removeChild(e),
            null == this.firstChild && (this.firstChild = e),
            this.lastChild
              ? ((this.lastChild.nextSibling = e),
                (e.index = this.lastChild.index + 1),
                (e.previousSibling = this.lastChild))
              : ((e.previousSibling = null), (e.index = 0)),
            (e.parentNode = this),
            (e.nextSibling = null),
            (this.lastChild = e),
            this.ownerDocument.markDirty(this),
            this.isConnected && this.ownerDocument.queueUpdate();
        }
        insertBefore(e, t) {
          if (null == t) return this.appendChild(e);
          e.parentNode && e.parentNode.removeChild(e),
            (e.nextSibling = t),
            (e.previousSibling = t.previousSibling),
            (e.index = t.index - 1),
            this.firstChild === t
              ? (this.firstChild = e)
              : t.previousSibling && (t.previousSibling.nextSibling = e),
            (t.previousSibling = e),
            (e.parentNode = t.parentNode),
            this.invalidateChildIndices(e),
            this.isConnected && this.ownerDocument.queueUpdate();
        }
        removeChild(e) {
          e.parentNode === this &&
            this.ownerDocument.isMounted &&
            (this._minInvalidChildIndex === e &&
              (this._minInvalidChildIndex = null),
            e.nextSibling &&
              (this.invalidateChildIndices(e.nextSibling),
              (e.nextSibling.previousSibling = e.previousSibling)),
            e.previousSibling &&
              (e.previousSibling.nextSibling = e.nextSibling),
            this.firstChild === e && (this.firstChild = e.nextSibling),
            this.lastChild === e && (this.lastChild = e.previousSibling),
            (e.parentNode = null),
            (e.nextSibling = null),
            (e.previousSibling = null),
            (e.index = 0),
            this.ownerDocument.markDirty(e),
            this.isConnected && this.ownerDocument.queueUpdate());
        }
        addEventListener() {}
        removeEventListener() {}
        get previousVisibleSibling() {
          let e = this.previousSibling;
          for (; e && e.isHidden; ) e = e.previousSibling;
          return e;
        }
        get nextVisibleSibling() {
          let e = this.nextSibling;
          for (; e && e.isHidden; ) e = e.nextSibling;
          return e;
        }
        get firstVisibleChild() {
          let e = this.firstChild;
          for (; e && e.isHidden; ) e = e.nextSibling;
          return e;
        }
        get lastVisibleChild() {
          let e = this.lastChild;
          for (; e && e.isHidden; ) e = e.previousSibling;
          return e;
        }
        constructor(e) {
          (this._firstChild = null),
            (this._lastChild = null),
            (this._previousSibling = null),
            (this._nextSibling = null),
            (this._parentNode = null),
            (this._minInvalidChildIndex = null),
            (this.ownerDocument = e);
        }
      }
      class X extends Z {
        get index() {
          return this._index;
        }
        set index(e) {
          (this._index = e), this.ownerDocument.markDirty(this);
        }
        get level() {
          return this.parentNode instanceof X
            ? this.parentNode.level + +("item" === this.node.type)
            : 0;
        }
        getMutableNode() {
          return (
            this.isMutated ||
              ((this.node = this.node.clone()), (this.isMutated = !0)),
            this.ownerDocument.markDirty(this),
            this.node
          );
        }
        updateNode() {
          var e, t, l, n, i, s, r, o, u;
          let a = this.nextVisibleSibling,
            d = this.getMutableNode();
          if (
            ((d.index = this.index),
            (d.level = this.level),
            (d.parentKey =
              this.parentNode instanceof X ? this.parentNode.node.key : null),
            (d.prevKey =
              null !=
              (n =
                null == (e = this.previousVisibleSibling) ? void 0 : e.node.key)
                ? n
                : null),
            (d.nextKey =
              null != (i = null == a ? void 0 : a.node.key) ? i : null),
            (d.hasChildNodes = !!this.firstChild),
            (d.firstChildKey =
              null !=
              (s = null == (t = this.firstVisibleChild) ? void 0 : t.node.key)
                ? s
                : null),
            (d.lastChildKey =
              null !=
              (r = null == (l = this.lastVisibleChild) ? void 0 : l.node.key)
                ? r
                : null),
            (null != d.colSpan || null != d.colIndex) && a)
          ) {
            let e =
              (null != (o = d.colIndex) ? o : d.index) +
              (null != (u = d.colSpan) ? u : 1);
            e !== a.node.colIndex && (a.getMutableNode().colIndex = e);
          }
        }
        setProps(e, t, l, n) {
          let i = this.getMutableNode(),
            { value: s, textValue: r, id: o, ...u } = e;
          if (
            ((u.ref = t),
            (i.props = u),
            (i.rendered = l),
            (i.render = n),
            (i.value = s),
            (i.textValue =
              r ||
              ("string" == typeof u.children ? u.children : "") ||
              e["aria-label"] ||
              ""),
            null != o && o !== i.key)
          ) {
            if (this.hasSetProps)
              throw Error("Cannot change the id of an item");
            i.key = o;
          }
          null != u.colSpan && (i.colSpan = u.colSpan),
            (this.hasSetProps = !0),
            this.isConnected && this.ownerDocument.queueUpdate();
        }
        get style() {
          let e = this;
          return {
            get display() {
              return e.isHidden ? "none" : "";
            },
            set display(value) {
              let n = "none" === value;
              if (e.isHidden !== n) {
                var t, l;
                ((null == (t = e.parentNode) ? void 0 : t.firstVisibleChild) ===
                  e ||
                  (null == (l = e.parentNode) ? void 0 : l.lastVisibleChild) ===
                    e) &&
                  e.ownerDocument.markDirty(e.parentNode);
                let i = e.previousVisibleSibling,
                  s = e.nextVisibleSibling;
                i && e.ownerDocument.markDirty(i),
                  s && e.ownerDocument.markDirty(s),
                  (e.isHidden = n),
                  e.ownerDocument.markDirty(e);
              }
            },
          };
        }
        hasAttribute() {}
        setAttribute() {}
        setAttributeNS() {}
        removeAttribute() {}
        constructor(e, t) {
          super(t),
            (this.nodeType = 8),
            (this.isMutated = !0),
            (this._index = 0),
            (this.hasSetProps = !1),
            (this.isHidden = !1),
            (this.node = new J(e, `react-aria-${++t.nodeId}`));
        }
      }
      class Q extends Z {
        get isConnected() {
          return this.isMounted;
        }
        createElement(e) {
          return new X(e, this);
        }
        getMutableCollection() {
          return (
            this.nextCollection ||
              (this.nextCollection = this.collection.clone()),
            this.nextCollection
          );
        }
        markDirty(e) {
          this.dirtyNodes.add(e);
        }
        addNode(e) {
          if (e.isHidden) return;
          let t = this.getMutableCollection();
          if (!t.getItem(e.node.key)) for (let t of e) this.addNode(t);
          t.addNode(e.node);
        }
        removeNode(e) {
          for (let t of e) this.removeNode(t);
          this.getMutableCollection().removeNode(e.node.key);
        }
        getCollection() {
          return this.inSubscription
            ? this.collection.clone()
            : ((this.queuedRender = !1),
              this.updateCollection(),
              this.collection);
        }
        updateCollection() {
          for (let e of this.dirtyNodes)
            e instanceof X && (!e.isConnected || e.isHidden)
              ? this.removeNode(e)
              : e.updateChildIndices();
          for (let e of this.dirtyNodes)
            e instanceof X &&
              (e.isConnected &&
                !e.isHidden &&
                (e.updateNode(), this.addNode(e)),
              (e.isMutated = !1));
          if ((this.dirtyNodes.clear(), this.nextCollection)) {
            var e, t, l, n;
            this.nextCollection.commit(
              null !=
                (l = null == (e = this.firstVisibleChild) ? void 0 : e.node.key)
                ? l
                : null,
              null !=
                (n = null == (t = this.lastVisibleChild) ? void 0 : t.node.key)
                ? n
                : null,
              this.isSSR
            ),
              this.isSSR ||
                ((this.collection = this.nextCollection),
                (this.nextCollection = null));
          }
        }
        queueUpdate() {
          if (0 !== this.dirtyNodes.size && !this.queuedRender) {
            for (let e of ((this.queuedRender = !0),
            (this.inSubscription = !0),
            this.subscriptions))
              e();
            this.inSubscription = !1;
          }
        }
        subscribe(e) {
          return this.subscriptions.add(e), () => this.subscriptions.delete(e);
        }
        resetAfterSSR() {
          this.isSSR &&
            ((this.isSSR = !1),
            (this.firstChild = null),
            (this.lastChild = null),
            (this.nodeId = 0));
        }
        constructor(e) {
          super(null),
            (this.nodeType = 11),
            (this.ownerDocument = this),
            (this.dirtyNodes = new Set()),
            (this.isSSR = !1),
            (this.nodeId = 0),
            (this.nodesByProps = new WeakMap()),
            (this.isMounted = !0),
            (this.nextCollection = null),
            (this.subscriptions = new Set()),
            (this.queuedRender = !1),
            (this.inSubscription = !1),
            (this.collection = e),
            (this.nextCollection = e);
        }
      }
      var ee = l(99458),
        et = l(63362),
        el = l(87700);
      let en = (0, n.createContext)(!1),
        ei = (0, n.createContext)(null);
      function es(e) {
        if ((0, n.useContext)(ei)) return e.content;
        let { collection: t, document: l } = (function (e) {
          let [t] = (0, n.useState)(
              () => new Q((null == e ? void 0 : e()) || new Y())
            ),
            l = eo(
              (0, n.useCallback)((e) => t.subscribe(e), [t]),
              (0, n.useCallback)(() => {
                let e = t.getCollection();
                return t.isSSR && t.resetAfterSSR(), e;
              }, [t]),
              (0, n.useCallback)(() => ((t.isSSR = !0), t.getCollection()), [t])
            );
          return (
            (0, F.N)(
              () => (
                (t.isMounted = !0),
                () => {
                  t.isMounted = !1;
                }
              ),
              [t]
            ),
            { collection: l, document: t }
          );
        })(e.createCollection);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            ee.jZ,
            null,
            n.createElement(ei.Provider, { value: l }, e.content)
          ),
          n.createElement(er, { render: e.children, collection: t })
        );
      }
      function er({ collection: e, render: t }) {
        return t(e);
      }
      let eo =
          "function" == typeof n.useSyncExternalStore
            ? n.useSyncExternalStore
            : function (e, t, l) {
                let i = (0, et.wR)(),
                  s = (0, n.useRef)(i);
                s.current = i;
                let r = (0, n.useCallback)(
                  () => (s.current ? l() : t()),
                  [t, l]
                );
                return (0, el.useSyncExternalStore)(e, r);
              },
        eu = (0, n.createContext)(null),
        ea = (0, n.createContext)(null);
      function ed(e) {
        let t = (0, n.useContext)(ea),
          l = ((null == t ? void 0 : t.dependencies) || []).concat(
            e.dependencies
          ),
          s = e.idScope || (null == t ? void 0 : t.idScope),
          r = i({ ...e, idScope: s, dependencies: l, addIdAndValue: !0 });
        return (
          (0, n.useContext)(ei) && (r = n.createElement(ec, null, r)),
          (t = (0, n.useMemo)(
            () => ({ dependencies: l, idScope: s }),
            [s, ...l]
          )),
          n.createElement(ea.Provider, { value: t }, r)
        );
      }
      function ec({ children: e }) {
        let t = (0, n.useContext)(ei),
          l = (0, n.useMemo)(
            () =>
              n.createElement(
                ei.Provider,
                { value: null },
                n.createElement(en.Provider, { value: !0 }, e)
              ),
            [e]
          );
        return (0, et.wR)()
          ? n.createElement(eu.Provider, { value: t }, l)
          : (0, P.createPortal)(l, t);
      }
      var eh = l(97544);
      function ey(e) {
        return parseInt(n.version.split(".")[0], 10) >= 19
          ? e
          : e
          ? "true"
          : void 0;
      }
      class ef {
        *[Symbol.iterator]() {
          yield* this.iterable;
        }
        get size() {
          return this.keyMap.size;
        }
        getKeys() {
          return this.keyMap.keys();
        }
        getKeyBefore(e) {
          var t;
          let l = this.keyMap.get(e);
          return l && null != (t = l.prevKey) ? t : null;
        }
        getKeyAfter(e) {
          var t;
          let l = this.keyMap.get(e);
          return l && null != (t = l.nextKey) ? t : null;
        }
        getFirstKey() {
          return this.firstKey;
        }
        getLastKey() {
          return this.lastKey;
        }
        getItem(e) {
          var t;
          return null != (t = this.keyMap.get(e)) ? t : null;
        }
        at(e) {
          let t = [...this.getKeys()];
          return this.getItem(t[e]);
        }
        getChildren(e) {
          let t = this.keyMap.get(e);
          return (null == t ? void 0 : t.childNodes) || [];
        }
        constructor(e) {
          var t;
          (this.keyMap = new Map()),
            (this.firstKey = null),
            (this.lastKey = null),
            (this.iterable = e);
          let l = (e) => {
            if (
              (this.keyMap.set(e.key, e), e.childNodes && "section" === e.type)
            )
              for (let t of e.childNodes) l(t);
          };
          for (let t of e) l(t);
          let n = null,
            i = 0;
          for (let [e, t] of this.keyMap)
            n
              ? ((n.nextKey = e), (t.prevKey = n.key))
              : ((this.firstKey = e), (t.prevKey = void 0)),
              "item" === t.type && (t.index = i++),
              ((n = t).nextKey = void 0);
          this.lastKey = null != (t = null == n ? void 0 : n.key) ? t : null;
        }
      }
      class ep extends Set {
        constructor(e, t, l) {
          super(e),
            e instanceof ep
              ? ((this.anchorKey = null != t ? t : e.anchorKey),
                (this.currentKey = null != l ? l : e.currentKey))
              : ((this.anchorKey = null != t ? t : null),
                (this.currentKey = null != l ? l : null));
        }
      }
      var eg = l(98773);
      function ev(e, t) {
        return e ? ("all" === e ? "all" : new ep(e)) : t;
      }
      function eK(e, t, l) {
        if (t.parentKey === l.parentKey) return t.index - l.index;
        let n = [...eb(e, t), t],
          i = [...eb(e, l), l],
          s = n.slice(0, i.length).findIndex((e, t) => e !== i[t]);
        return -1 !== s
          ? ((t = n[s]), (l = i[s]), t.index - l.index)
          : n.findIndex((e) => e === l) >= 0
          ? 1
          : (i.findIndex((e) => e === t), -1);
      }
      function eb(e, t) {
        let l = [],
          n = t;
        for (; (null == n ? void 0 : n.parentKey) != null; )
          (n = e.getItem(n.parentKey)) && l.unshift(n);
        return l;
      }
      class em {
        get selectionMode() {
          return this.state.selectionMode;
        }
        get disallowEmptySelection() {
          return this.state.disallowEmptySelection;
        }
        get selectionBehavior() {
          return this.state.selectionBehavior;
        }
        setSelectionBehavior(e) {
          this.state.setSelectionBehavior(e);
        }
        get isFocused() {
          return this.state.isFocused;
        }
        setFocused(e) {
          this.state.setFocused(e);
        }
        get focusedKey() {
          return this.state.focusedKey;
        }
        get childFocusStrategy() {
          return this.state.childFocusStrategy;
        }
        setFocusedKey(e, t) {
          (null == e || this.collection.getItem(e)) &&
            this.state.setFocusedKey(e, t);
        }
        get selectedKeys() {
          return "all" === this.state.selectedKeys
            ? new Set(this.getSelectAllKeys())
            : this.state.selectedKeys;
        }
        get rawSelection() {
          return this.state.selectedKeys;
        }
        isSelected(e) {
          if ("none" === this.state.selectionMode) return !1;
          let t = this.getKey(e);
          return (
            null != t &&
            ("all" === this.state.selectedKeys
              ? this.canSelectItem(t)
              : this.state.selectedKeys.has(t))
          );
        }
        get isEmpty() {
          return (
            "all" !== this.state.selectedKeys &&
            0 === this.state.selectedKeys.size
          );
        }
        get isSelectAll() {
          if (this.isEmpty) return !1;
          if ("all" === this.state.selectedKeys) return !0;
          if (null != this._isSelectAll) return this._isSelectAll;
          let e = this.getSelectAllKeys(),
            t = this.state.selectedKeys;
          return (
            (this._isSelectAll = e.every((e) => t.has(e))), this._isSelectAll
          );
        }
        get firstSelectedKey() {
          var e;
          let t = null;
          for (let e of this.state.selectedKeys) {
            let l = this.collection.getItem(e);
            (!t || (l && 0 > eK(this.collection, l, t))) && (t = l);
          }
          return null != (e = null == t ? void 0 : t.key) ? e : null;
        }
        get lastSelectedKey() {
          var e;
          let t = null;
          for (let e of this.state.selectedKeys) {
            let l = this.collection.getItem(e);
            (!t || (l && eK(this.collection, l, t) > 0)) && (t = l);
          }
          return null != (e = null == t ? void 0 : t.key) ? e : null;
        }
        get disabledKeys() {
          return this.state.disabledKeys;
        }
        get disabledBehavior() {
          return this.state.disabledBehavior;
        }
        extendSelection(e) {
          let t;
          if ("none" === this.selectionMode) return;
          if ("single" === this.selectionMode)
            return void this.replaceSelection(e);
          let l = this.getKey(e);
          if (null != l) {
            if ("all" === this.state.selectedKeys) t = new ep([l], l, l);
            else {
              var n, i;
              let e = this.state.selectedKeys,
                s = null != (n = e.anchorKey) ? n : l;
              for (let n of ((t = new ep(e, s, l)),
              this.getKeyRange(s, null != (i = e.currentKey) ? i : l)))
                t.delete(n);
              for (let e of this.getKeyRange(l, s))
                this.canSelectItem(e) && t.add(e);
            }
            this.state.setSelectedKeys(t);
          }
        }
        getKeyRange(e, t) {
          let l = this.collection.getItem(e),
            n = this.collection.getItem(t);
          return l && n
            ? 0 >= eK(this.collection, l, n)
              ? this.getKeyRangeInternal(e, t)
              : this.getKeyRangeInternal(t, e)
            : [];
        }
        getKeyRangeInternal(e, t) {
          var l;
          if (null == (l = this.layoutDelegate) ? void 0 : l.getKeyRange)
            return this.layoutDelegate.getKeyRange(e, t);
          let n = [],
            i = e;
          for (; null != i; ) {
            let e = this.collection.getItem(i);
            if (
              (e &&
                ("item" === e.type ||
                  ("cell" === e.type && this.allowsCellSelection)) &&
                n.push(i),
              i === t)
            )
              return n;
            i = this.collection.getKeyAfter(i);
          }
          return [];
        }
        getKey(e) {
          let t = this.collection.getItem(e);
          if (!t || ("cell" === t.type && this.allowsCellSelection)) return e;
          for (; t && "item" !== t.type && null != t.parentKey; )
            t = this.collection.getItem(t.parentKey);
          return t && "item" === t.type ? t.key : null;
        }
        toggleSelection(e) {
          if ("none" === this.selectionMode) return;
          if ("single" === this.selectionMode && !this.isSelected(e))
            return void this.replaceSelection(e);
          let t = this.getKey(e);
          if (null == t) return;
          let l = new ep(
            "all" === this.state.selectedKeys
              ? this.getSelectAllKeys()
              : this.state.selectedKeys
          );
          l.has(t)
            ? l.delete(t)
            : this.canSelectItem(t) &&
              (l.add(t), (l.anchorKey = t), (l.currentKey = t)),
            (this.disallowEmptySelection && 0 === l.size) ||
              this.state.setSelectedKeys(l);
        }
        replaceSelection(e) {
          if ("none" === this.selectionMode) return;
          let t = this.getKey(e);
          if (null == t) return;
          let l = this.canSelectItem(t) ? new ep([t], t, t) : new ep();
          this.state.setSelectedKeys(l);
        }
        setSelectedKeys(e) {
          if ("none" === this.selectionMode) return;
          let t = new ep();
          for (let l of e) {
            let e = this.getKey(l);
            if (null != e && (t.add(e), "single" === this.selectionMode)) break;
          }
          this.state.setSelectedKeys(t);
        }
        getSelectAllKeys() {
          let e = [],
            t = (l) => {
              for (; null != l; ) {
                if (this.canSelectItem(l)) {
                  var n, i, s;
                  let r = this.collection.getItem(l);
                  (null == r ? void 0 : r.type) === "item" && e.push(l),
                    (null == r ? void 0 : r.hasChildNodes) &&
                      (this.allowsCellSelection || "item" !== r.type) &&
                      t(
                        null !=
                          (i =
                            null ==
                            (n = (function (e, t) {
                              !1;
                              let l = 0;
                              for (let n of e) {
                                if (l === t) return n;
                                l++;
                              }
                            })(
                              "function" ==
                                typeof (s = this.collection).getChildren
                                ? s.getChildren(r.key)
                                : r.childNodes,
                              0
                            ))
                              ? void 0
                              : n.key)
                          ? i
                          : null
                      );
                }
                l = this.collection.getKeyAfter(l);
              }
            };
          return t(this.collection.getFirstKey()), e;
        }
        selectAll() {
          this.isSelectAll ||
            "multiple" !== this.selectionMode ||
            this.state.setSelectedKeys("all");
        }
        clearSelection() {
          !this.disallowEmptySelection &&
            ("all" === this.state.selectedKeys ||
              this.state.selectedKeys.size > 0) &&
            this.state.setSelectedKeys(new ep());
        }
        toggleSelectAll() {
          this.isSelectAll ? this.clearSelection() : this.selectAll();
        }
        select(e, t) {
          "none" !== this.selectionMode &&
            ("single" === this.selectionMode
              ? this.isSelected(e) && !this.disallowEmptySelection
                ? this.toggleSelection(e)
                : this.replaceSelection(e)
              : "toggle" === this.selectionBehavior ||
                (t &&
                  ("touch" === t.pointerType || "virtual" === t.pointerType))
              ? this.toggleSelection(e)
              : this.replaceSelection(e));
        }
        isSelectionEqual(e) {
          if (e === this.state.selectedKeys) return !0;
          let t = this.selectedKeys;
          if (e.size !== t.size) return !1;
          for (let l of e) if (!t.has(l)) return !1;
          for (let l of t) if (!e.has(l)) return !1;
          return !0;
        }
        canSelectItem(e) {
          var t;
          if (
            "none" === this.state.selectionMode ||
            this.state.disabledKeys.has(e)
          )
            return !1;
          let l = this.collection.getItem(e);
          return (
            !!l &&
            (null == l || null == (t = l.props) || !t.isDisabled) &&
            ("cell" !== l.type || !!this.allowsCellSelection)
          );
        }
        isDisabled(e) {
          var t, l;
          return (
            "all" === this.state.disabledBehavior &&
            (this.state.disabledKeys.has(e) ||
              !!(null == (l = this.collection.getItem(e)) ||
              null == (t = l.props)
                ? void 0
                : t.isDisabled))
          );
        }
        isLink(e) {
          var t, l;
          return !!(null == (l = this.collection.getItem(e)) ||
          null == (t = l.props)
            ? void 0
            : t.href);
        }
        getItemProps(e) {
          var t;
          return null == (t = this.collection.getItem(e)) ? void 0 : t.props;
        }
        withCollection(e) {
          return new em(e, this.state, {
            allowsCellSelection: this.allowsCellSelection,
            layoutDelegate: this.layoutDelegate || void 0,
          });
        }
        constructor(e, t, l) {
          var n;
          (this.collection = e),
            (this.state = t),
            (this.allowsCellSelection =
              null != (n = null == l ? void 0 : l.allowsCellSelection) && n),
            (this._isSelectAll = null),
            (this.layoutDelegate =
              (null == l ? void 0 : l.layoutDelegate) || null);
        }
      }
      class eS {
        build(e, t) {
          return (this.context = t), eC(() => this.iterateCollection(e));
        }
        *iterateCollection(e) {
          let { children: t, items: l } = e;
          if (n.isValidElement(t) && t.type === n.Fragment)
            yield* this.iterateCollection({
              children: t.props.children,
              items: l,
            });
          else if ("function" == typeof t) {
            if (!l)
              throw Error(
                "props.children was a function but props.items is missing"
              );
            let e = 0;
            for (let n of l)
              yield* this.getFullNode({ value: n, index: e }, { renderer: t }),
                e++;
          } else {
            let e = [];
            n.Children.forEach(t, (t) => {
              t && e.push(t);
            });
            let l = 0;
            for (let t of e)
              for (let e of this.getFullNode({ element: t, index: l }, {}))
                l++, yield e;
          }
        }
        getKey(e, t, l, n) {
          if (null != e.key) return e.key;
          if ("cell" === t.type && null != t.key) return `${n}${t.key}`;
          let i = t.value;
          if (null != i) {
            var s;
            let e = null != (s = i.key) ? s : i.id;
            if (null == e) throw Error("No key found for item");
            return e;
          }
          return n ? `${n}.${t.index}` : `$.${t.index}`;
        }
        getChildState(e, t) {
          return { renderer: t.renderer || e.renderer };
        }
        *getFullNode(e, t, l, i) {
          var s, r, o, u, a, d, c, h;
          if (n.isValidElement(e.element) && e.element.type === n.Fragment) {
            let r = [];
            n.Children.forEach(e.element.props.children, (e) => {
              r.push(e);
            });
            let o = null != (s = e.index) ? s : 0;
            for (let e of r)
              yield* this.getFullNode({ element: e, index: o++ }, t, l, i);
            return;
          }
          let y = e.element;
          if (!y && e.value && t && t.renderer) {
            let l = this.cache.get(e.value);
            if (
              l &&
              (!l.shouldInvalidate || !l.shouldInvalidate(this.context))
            ) {
              (l.index = e.index), (l.parentKey = i ? i.key : null), yield l;
              return;
            }
            y = t.renderer(e.value);
          }
          if (n.isValidElement(y)) {
            let n = y.type;
            if (
              "function" != typeof n &&
              "function" != typeof n.getCollectionNode
            ) {
              let e = y.type;
              throw Error(`Unknown element <${e}> in collection.`);
            }
            let s = n.getCollectionNode(y.props, this.context),
              c = null != (r = e.index) ? r : 0,
              h = s.next();
            for (; !h.done && h.value; ) {
              let n = h.value;
              e.index = c;
              let r = null != (o = n.key) ? o : null;
              null == r && (r = n.element ? null : this.getKey(y, e, t, l));
              let f = [
                ...this.getFullNode(
                  {
                    ...n,
                    key: r,
                    index: c,
                    wrapper: (function (e, t) {
                      return e && t ? (l) => e(t(l)) : e || t || void 0;
                    })(e.wrapper, n.wrapper),
                  },
                  this.getChildState(t, n),
                  l ? `${l}${y.key}` : y.key,
                  i
                ),
              ];
              for (let t of f) {
                if (
                  ((t.value =
                    null != (a = null != (u = n.value) ? u : e.value)
                      ? a
                      : null),
                  t.value && this.cache.set(t.value, t),
                  e.type && t.type !== e.type)
                )
                  throw Error(
                    `Unsupported type <${ek(t.type)}> in <${ek(
                      null != (d = null == i ? void 0 : i.type)
                        ? d
                        : "unknown parent type"
                    )}>. Only <${ek(e.type)}> is supported.`
                  );
                c++, yield t;
              }
              h = s.next(f);
            }
            return;
          }
          if (null == e.key || null == e.type) return;
          let f = this,
            p = {
              type: e.type,
              props: e.props,
              key: e.key,
              parentKey: i ? i.key : null,
              value: null != (c = e.value) ? c : null,
              level: i ? i.level + 1 : 0,
              index: e.index,
              rendered: e.rendered,
              textValue: null != (h = e.textValue) ? h : "",
              "aria-label": e["aria-label"],
              wrapper: e.wrapper,
              shouldInvalidate: e.shouldInvalidate,
              hasChildNodes: e.hasChildNodes || !1,
              childNodes: eC(function* () {
                if (!e.hasChildNodes || !e.childNodes) return;
                let l = 0;
                for (let n of e.childNodes())
                  for (let e of (null != n.key && (n.key = `${p.key}${n.key}`),
                  f.getFullNode(
                    { ...n, index: l },
                    f.getChildState(t, n),
                    p.key,
                    p
                  )))
                    l++, yield e;
              }),
            };
          yield p;
        }
        constructor() {
          this.cache = new WeakMap();
        }
      }
      function eC(e) {
        let t = [],
          l = null;
        return {
          *[Symbol.iterator]() {
            for (let e of t) yield e;
            for (let n of (l || (l = e()), l)) t.push(n), yield n;
          },
        };
      }
      function ek(e) {
        return e[0].toUpperCase() + e.slice(1);
      }
      function ex(e, t) {
        let l = null;
        if (e) {
          var n, i, s, r;
          for (
            l = e.getFirstKey();
            null != l &&
            (t.has(l) ||
              (null == (i = e.getItem(l)) || null == (n = i.props)
                ? void 0
                : n.isDisabled)) &&
            l !== e.getLastKey();

          )
            l = e.getKeyAfter(l);
          null != l &&
            (t.has(l) ||
              (null == (r = e.getItem(l)) || null == (s = r.props)
                ? void 0
                : s.isDisabled)) &&
            l === e.getLastKey() &&
            (l = e.getFirstKey());
        }
        return l;
      }
      let ew = (0, n.createContext)(null),
        eD = (0, n.createContext)(null),
        eM = (0, n.forwardRef)(function (e, t) {
          [e, t] = (0, u.JT)(e, t, ew);
          let { children: l, orientation: i = "horizontal" } = e;
          return (
            (l = (0, n.useMemo)(
              () =>
                "function" == typeof l
                  ? l({ orientation: i, defaultChildren: null })
                  : l,
              [l, i]
            )),
            n.createElement(es, { content: l }, (l) =>
              n.createElement(eE, { props: e, collection: l, tabsRef: t })
            )
          );
        });
      function eE({ props: e, tabsRef: t, collection: l }) {
        let { orientation: i = "horizontal" } = e,
          s = (function (e) {
            var t, l;
            let i = (function (e) {
                var t;
                let [l, i] = (0, eg.P)(
                    e.selectedKey,
                    null != (t = e.defaultSelectedKey) ? t : null,
                    e.onSelectionChange
                  ),
                  s = (0, n.useMemo)(() => (null != l ? [l] : []), [l]),
                  {
                    collection: r,
                    disabledKeys: o,
                    selectionManager: u,
                  } = (function (e) {
                    let { filter: t, layoutDelegate: l } = e,
                      i = (function (e) {
                        let {
                            selectionMode: t = "none",
                            disallowEmptySelection: l = !1,
                            allowDuplicateSelectionEvents: i,
                            selectionBehavior: s = "toggle",
                            disabledBehavior: r = "all",
                          } = e,
                          o = (0, n.useRef)(!1),
                          [, u] = (0, n.useState)(!1),
                          a = (0, n.useRef)(null),
                          d = (0, n.useRef)(null),
                          [, c] = (0, n.useState)(null),
                          h = (0, n.useMemo)(
                            () => ev(e.selectedKeys),
                            [e.selectedKeys]
                          ),
                          y = (0, n.useMemo)(
                            () => ev(e.defaultSelectedKeys, new ep()),
                            [e.defaultSelectedKeys]
                          ),
                          [f, p] = (0, eg.P)(h, y, e.onSelectionChange),
                          g = (0, n.useMemo)(
                            () =>
                              e.disabledKeys
                                ? new Set(e.disabledKeys)
                                : new Set(),
                            [e.disabledKeys]
                          ),
                          [v, K] = (0, n.useState)(s);
                        "replace" === s &&
                          "toggle" === v &&
                          "object" == typeof f &&
                          0 === f.size &&
                          K("replace");
                        let b = (0, n.useRef)(s);
                        return (
                          (0, n.useEffect)(() => {
                            s !== b.current && (K(s), (b.current = s));
                          }, [s]),
                          {
                            selectionMode: t,
                            disallowEmptySelection: l,
                            selectionBehavior: v,
                            setSelectionBehavior: K,
                            get isFocused() {
                              return o.current;
                            },
                            setFocused(e) {
                              (o.current = e), u(e);
                            },
                            get focusedKey() {
                              return a.current;
                            },
                            get childFocusStrategy() {
                              return d.current;
                            },
                            setFocusedKey(e, t = "first") {
                              (a.current = e), (d.current = t), c(e);
                            },
                            selectedKeys: f,
                            setSelectedKeys(e) {
                              (i ||
                                !(function (e, t) {
                                  if (e.size !== t.size) return !1;
                                  for (let l of e) if (!t.has(l)) return !1;
                                  return !0;
                                })(e, f)) &&
                                p(e);
                            },
                            disabledKeys: g,
                            disabledBehavior: r,
                          }
                        );
                      })(e),
                      s = (0, n.useMemo)(
                        () =>
                          e.disabledKeys ? new Set(e.disabledKeys) : new Set(),
                        [e.disabledKeys]
                      ),
                      r = (0, n.useCallback)((e) => new ef(t ? t(e) : e), [t]),
                      o = (0, n.useMemo)(
                        () => ({
                          suppressTextValueWarning: e.suppressTextValueWarning,
                        }),
                        [e.suppressTextValueWarning]
                      ),
                      u = (function (e, t, l) {
                        let i = (0, n.useMemo)(() => new eS(), []),
                          { children: s, items: r, collection: o } = e;
                        return (0, n.useMemo)(
                          () => o || t(i.build({ children: s, items: r }, l)),
                          [i, s, r, o, l, t]
                        );
                      })(e, r, o),
                      a = (0, n.useMemo)(
                        () => new em(u, i, { layoutDelegate: l }),
                        [u, i, l]
                      );
                    return (
                      (function (e, t) {
                        let l = (0, n.useRef)(null);
                        (0, n.useEffect)(() => {
                          if (
                            null != t.focusedKey &&
                            !e.getItem(t.focusedKey) &&
                            l.current
                          ) {
                            var n, i, s, r, o, u, a;
                            let d = l.current.getItem(t.focusedKey),
                              c = [...l.current.getKeys()]
                                .map((e) => {
                                  let t = l.current.getItem(e);
                                  return (null == t ? void 0 : t.type) ===
                                    "item"
                                    ? t
                                    : null;
                                })
                                .filter((e) => null !== e),
                              h = [...e.getKeys()]
                                .map((t) => {
                                  let l = e.getItem(t);
                                  return (null == l ? void 0 : l.type) ===
                                    "item"
                                    ? l
                                    : null;
                                })
                                .filter((e) => null !== e),
                              y =
                                (null != (n = null == c ? void 0 : c.length)
                                  ? n
                                  : 0) -
                                (null != (i = null == h ? void 0 : h.length)
                                  ? i
                                  : 0),
                              f = Math.min(
                                y > 1
                                  ? Math.max(
                                      (null !=
                                      (s = null == d ? void 0 : d.index)
                                        ? s
                                        : 0) -
                                        y +
                                        1,
                                      0
                                    )
                                  : null != (r = null == d ? void 0 : d.index)
                                  ? r
                                  : 0,
                                (null != (o = null == h ? void 0 : h.length)
                                  ? o
                                  : 0) - 1
                              ),
                              p = null,
                              g = !1;
                            for (; f >= 0; ) {
                              if (!t.isDisabled(h[f].key)) {
                                p = h[f];
                                break;
                              }
                              f < h.length - 1 && !g
                                ? f++
                                : ((g = !0),
                                  f >
                                    (null != (u = null == d ? void 0 : d.index)
                                      ? u
                                      : 0) &&
                                    (f =
                                      null != (a = null == d ? void 0 : d.index)
                                        ? a
                                        : 0),
                                  f--);
                            }
                            t.setFocusedKey(p ? p.key : null);
                          }
                          l.current = e;
                        }, [e, t]);
                      })(u, a),
                      { collection: u, disabledKeys: s, selectionManager: a }
                    );
                  })({
                    ...e,
                    selectionMode: "single",
                    disallowEmptySelection: !0,
                    allowDuplicateSelectionEvents: !0,
                    selectedKeys: s,
                    onSelectionChange: (t) => {
                      var n;
                      if ("all" === t) return;
                      let s = null != (n = t.values().next().value) ? n : null;
                      s === l && e.onSelectionChange && e.onSelectionChange(s),
                        i(s);
                    },
                  }),
                  a = null != l ? r.getItem(l) : null;
                return {
                  collection: r,
                  disabledKeys: o,
                  selectionManager: u,
                  selectedKey: l,
                  setSelectedKey: i,
                  selectedItem: a,
                };
              })({
                ...e,
                onSelectionChange: e.onSelectionChange
                  ? (t) => {
                      var l;
                      null != t &&
                        (null == (l = e.onSelectionChange) || l.call(e, t));
                    }
                  : void 0,
                suppressTextValueWarning: !0,
                defaultSelectedKey:
                  null !=
                  (l =
                    null != (t = e.defaultSelectedKey)
                      ? t
                      : ex(
                          e.collection,
                          e.disabledKeys ? new Set(e.disabledKeys) : new Set()
                        ))
                    ? l
                    : void 0,
              }),
              { selectionManager: s, collection: r, selectedKey: o } = i,
              u = (0, n.useRef)(o);
            return (
              (0, n.useEffect)(() => {
                let t = o;
                null == e.selectedKey &&
                  (s.isEmpty || null == t || !r.getItem(t)) &&
                  null != (t = ex(r, i.disabledKeys)) &&
                  s.setSelectedKeys([t]),
                  ((null == t || null != s.focusedKey) &&
                    (s.isFocused || t === u.current)) ||
                    s.setFocusedKey(t),
                  (u.current = t);
              }),
              { ...i, isDisabled: e.isDisabled || !1 }
            );
          })({ ...e, collection: l, children: void 0 }),
          {
            focusProps: r,
            isFocused: o,
            isFocusVisible: d,
          } = (0, a.o)({ within: !0 }),
          c = (0, n.useMemo)(
            () => ({ orientation: i, isFocusWithin: o, isFocusVisible: d }),
            [i, o, d]
          ),
          h = (0, u.Sl)({
            ...e,
            defaultClassName: "react-aria-Tabs",
            values: c,
          });
        return n.createElement(
          "div",
          {
            ...(0, V.$)(e),
            ...r,
            ...h,
            ref: t,
            slot: e.slot || void 0,
            "data-focused": o || void 0,
            "data-orientation": i,
            "data-focus-visible": d || void 0,
            "data-disabled": s.isDisabled || void 0,
          },
          n.createElement(
            u.Kq,
            {
              values: [
                [ew, e],
                [eD, s],
              ],
            },
            h.children
          )
        );
      }
      let eI = (0, n.forwardRef)(function (e, t) {
        return (0, n.useContext)(eD)
          ? n.createElement(eF, { props: e, forwardedRef: t })
          : n.createElement(ed, e);
      });
      function eF({ props: e, forwardedRef: t }) {
        var l;
        let i = (0, n.useContext)(eD),
          { CollectionRoot: s } = (0, n.useContext)(o),
          {
            orientation: r = "horizontal",
            keyboardActivation: a = "automatic",
          } = (0, u.CC)(ew),
          c = (0, eh.U)(t),
          { tabListProps: v } = (function (e, t, l) {
            let {
                orientation: i = "horizontal",
                keyboardActivation: s = "automatic",
              } = e,
              { collection: r, selectionManager: o, disabledKeys: u } = t,
              { direction: a } = (0, g.Y)(),
              { collectionProps: c } = (function (e) {
                var t;
                let l,
                  i,
                  {
                    selectionManager: s,
                    keyboardDelegate: r,
                    ref: o,
                    autoFocus: u = !1,
                    shouldFocusWrap: a = !1,
                    disallowEmptySelection: d = !1,
                    disallowSelectAll: c = !1,
                    escapeKeyBehavior: h = "clearSelection",
                    selectOnFocus: f = "replace" === s.selectionBehavior,
                    disallowTypeAhead: v = !1,
                    shouldUseVirtualFocus: D,
                    allowsTabNavigation: E = !1,
                    isVirtualized: F,
                    scrollRef: L = o,
                    linkBehavior: _ = "action",
                  } = e,
                  { direction: V } = (0, g.Y)(),
                  z = (0, S.rd)(),
                  $ = (0, n.useRef)({ top: 0, left: 0 });
                w(
                  L,
                  "scroll",
                  F
                    ? void 0
                    : () => {
                        var e, t, l, n;
                        $.current = {
                          top:
                            null !=
                            (l = null == (e = L.current) ? void 0 : e.scrollTop)
                              ? l
                              : 0,
                          left:
                            null !=
                            (n =
                              null == (t = L.current) ? void 0 : t.scrollLeft)
                              ? n
                              : 0,
                        };
                      }
                );
                let O = (0, n.useRef)(!1);
                w(
                  o,
                  "react-aria-focus",
                  D
                    ? (e) => {
                        let { detail: t } = e;
                        e.stopPropagation(),
                          s.setFocused(!0),
                          (null == t ? void 0 : t.focusStrategy) === "first" &&
                            (O.current = !0);
                      }
                    : void 0
                );
                let H = (0, x.J)(() => {
                  var e, t;
                  let l =
                    null !=
                    (t = null == (e = r.getFirstKey) ? void 0 : e.call(r))
                      ? t
                      : null;
                  null == l
                    ? (B(o.current), s.collection.size > 0 && (O.current = !1))
                    : (s.setFocusedKey(l), (O.current = !1));
                });
                N(() => {
                  O.current && H();
                }, [s.collection, H]);
                let U = (0, x.J)(() => {
                  s.collection.size > 0 && (O.current = !1);
                });
                N(() => {
                  U();
                }, [s.focusedKey, U]),
                  w(
                    o,
                    "react-aria-clear-focus",
                    D
                      ? (e) => {
                          var t;
                          e.stopPropagation(),
                            s.setFocused(!1),
                            (null == (t = e.detail)
                              ? void 0
                              : t.clearFocusKey) && s.setFocusedKey(null);
                        }
                      : void 0
                  );
                let W = (0, n.useRef)(u),
                  q = (0, n.useRef)(!1);
                (0, n.useEffect)(() => {
                  if (W.current) {
                    var e, t, l, n;
                    let i = null;
                    "first" === u &&
                      (i =
                        null !=
                        (l = null == (e = r.getFirstKey) ? void 0 : e.call(r))
                          ? l
                          : null),
                      "last" === u &&
                        (i =
                          null !=
                          (n = null == (t = r.getLastKey) ? void 0 : t.call(r))
                            ? n
                            : null);
                    let a = s.selectedKeys;
                    if (a.size) {
                      for (let e of a)
                        if (s.canSelectItem(e)) {
                          i = e;
                          break;
                        }
                    }
                    s.setFocused(!0),
                      s.setFocusedKey(i),
                      null == i && !D && o.current && (0, A.l)(o.current),
                      s.collection.size > 0 &&
                        ((W.current = !1), (q.current = !0));
                  }
                });
                let j = (0, n.useRef)(s.focusedKey),
                  J = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                  if (
                    s.isFocused &&
                    null != s.focusedKey &&
                    (s.focusedKey !== j.current || q.current) &&
                    L.current &&
                    o.current
                  ) {
                    let e = (0, T.ME)(),
                      t = b(o, s.focusedKey);
                    if (!(t instanceof HTMLElement)) return;
                    ("keyboard" === e || q.current) &&
                      (J.current && cancelAnimationFrame(J.current),
                      (J.current = requestAnimationFrame(() => {
                        L.current &&
                          (M(L.current, t),
                          "virtual" !== e &&
                            I(t, { containingElement: o.current }));
                      })));
                  }
                  !D &&
                    s.isFocused &&
                    null == s.focusedKey &&
                    null != j.current &&
                    o.current &&
                    (0, A.l)(o.current),
                    (j.current = s.focusedKey),
                    (q.current = !1);
                }),
                  (0, n.useEffect)(
                    () => () => {
                      J.current && cancelAnimationFrame(J.current);
                    },
                    []
                  ),
                  w(o, "react-aria-focus-scope-restore", (e) => {
                    e.preventDefault(), s.setFocused(!0);
                  });
                let Y = {
                    onKeyDown: (e) => {
                      var t, l, n, i, u, y, p, g, v, m, S, x, w;
                      if (
                        (e.altKey && "Tab" === e.key && e.preventDefault(),
                        !(null == (t = o.current)
                          ? void 0
                          : t.contains(e.target)))
                      )
                        return;
                      let D = (t, l) => {
                        if (null != t) {
                          if (s.isLink(t) && "selection" === _ && f && !K(e)) {
                            (0, P.flushSync)(() => {
                              s.setFocusedKey(t, l);
                            });
                            let n = b(o, t),
                              i = s.getItemProps(t);
                            n && z.open(n, e, i.href, i.routerOptions);
                            return;
                          }
                          s.setFocusedKey(t, l),
                            (s.isLink(t) && "override" === _) ||
                              (e.shiftKey && "multiple" === s.selectionMode
                                ? s.extendSelection(t)
                                : f && !K(e) && s.replaceSelection(t));
                        }
                      };
                      switch (e.key) {
                        case "ArrowDown":
                          if (r.getKeyBelow) {
                            let t =
                              null != s.focusedKey
                                ? null == (l = r.getKeyBelow)
                                  ? void 0
                                  : l.call(r, s.focusedKey)
                                : null == (n = r.getFirstKey)
                                ? void 0
                                : n.call(r);
                            null == t &&
                              a &&
                              (t =
                                null == (i = r.getFirstKey)
                                  ? void 0
                                  : i.call(r, s.focusedKey)),
                              null != t && (e.preventDefault(), D(t));
                          }
                          break;
                        case "ArrowUp":
                          if (r.getKeyAbove) {
                            let t =
                              null != s.focusedKey
                                ? null == (u = r.getKeyAbove)
                                  ? void 0
                                  : u.call(r, s.focusedKey)
                                : null == (y = r.getLastKey)
                                ? void 0
                                : y.call(r);
                            null == t &&
                              a &&
                              (t =
                                null == (p = r.getLastKey)
                                  ? void 0
                                  : p.call(r, s.focusedKey)),
                              null != t && (e.preventDefault(), D(t));
                          }
                          break;
                        case "ArrowLeft":
                          if (r.getKeyLeftOf) {
                            let t =
                              null != s.focusedKey
                                ? null == (g = r.getKeyLeftOf)
                                  ? void 0
                                  : g.call(r, s.focusedKey)
                                : null;
                            null == t &&
                              a &&
                              (t =
                                "rtl" === V
                                  ? null == (v = r.getFirstKey)
                                    ? void 0
                                    : v.call(r, s.focusedKey)
                                  : null == (m = r.getLastKey)
                                  ? void 0
                                  : m.call(r, s.focusedKey)),
                              null != t &&
                                (e.preventDefault(),
                                D(t, "rtl" === V ? "first" : "last"));
                          }
                          break;
                        case "ArrowRight":
                          if (r.getKeyRightOf) {
                            let t =
                              null != s.focusedKey
                                ? null == (S = r.getKeyRightOf)
                                  ? void 0
                                  : S.call(r, s.focusedKey)
                                : null;
                            null == t &&
                              a &&
                              (t =
                                "rtl" === V
                                  ? null == (x = r.getLastKey)
                                    ? void 0
                                    : x.call(r, s.focusedKey)
                                  : null == (w = r.getFirstKey)
                                  ? void 0
                                  : w.call(r, s.focusedKey)),
                              null != t &&
                                (e.preventDefault(),
                                D(t, "rtl" === V ? "last" : "first"));
                          }
                          break;
                        case "Home":
                          if (r.getFirstKey) {
                            if (null === s.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = r.getFirstKey(s.focusedKey, C(e));
                            s.setFocusedKey(t),
                              null != t &&
                                (C(e) &&
                                e.shiftKey &&
                                "multiple" === s.selectionMode
                                  ? s.extendSelection(t)
                                  : f && s.replaceSelection(t));
                          }
                          break;
                        case "End":
                          if (r.getLastKey) {
                            if (null === s.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = r.getLastKey(s.focusedKey, C(e));
                            s.setFocusedKey(t),
                              null != t &&
                                (C(e) &&
                                e.shiftKey &&
                                "multiple" === s.selectionMode
                                  ? s.extendSelection(t)
                                  : f && s.replaceSelection(t));
                          }
                          break;
                        case "PageDown":
                          if (r.getKeyPageBelow && null != s.focusedKey) {
                            let t = r.getKeyPageBelow(s.focusedKey);
                            null != t && (e.preventDefault(), D(t));
                          }
                          break;
                        case "PageUp":
                          if (r.getKeyPageAbove && null != s.focusedKey) {
                            let t = r.getKeyPageAbove(s.focusedKey);
                            null != t && (e.preventDefault(), D(t));
                          }
                          break;
                        case "a":
                          C(e) &&
                            "multiple" === s.selectionMode &&
                            !0 !== c &&
                            (e.preventDefault(), s.selectAll());
                          break;
                        case "Escape":
                          "clearSelection" !== h ||
                            d ||
                            0 === s.selectedKeys.size ||
                            (e.stopPropagation(),
                            e.preventDefault(),
                            s.clearSelection());
                          break;
                        case "Tab":
                          if (!E)
                            if (e.shiftKey) o.current.focus();
                            else {
                              let e,
                                t,
                                l = (0, R.N$)(o.current, { tabbable: !0 });
                              do (t = l.lastChild()) && (e = t);
                              while (t);
                              e &&
                                !e.contains(document.activeElement) &&
                                (0, k.e)(e);
                            }
                      }
                    },
                    onFocus: (e) => {
                      if (s.isFocused) {
                        e.currentTarget.contains(e.target) || s.setFocused(!1);
                        return;
                      }
                      if (e.currentTarget.contains(e.target)) {
                        if ((s.setFocused(!0), null == s.focusedKey)) {
                          var t, l, n, i;
                          let o = (e) => {
                              null != e &&
                                (s.setFocusedKey(e),
                                f && !s.isSelected(e) && s.replaceSelection(e));
                            },
                            u = e.relatedTarget;
                          u &&
                          e.currentTarget.compareDocumentPosition(u) &
                            Node.DOCUMENT_POSITION_FOLLOWING
                            ? o(
                                null != (n = s.lastSelectedKey)
                                  ? n
                                  : null == (t = r.getLastKey)
                                  ? void 0
                                  : t.call(r)
                              )
                            : o(
                                null != (i = s.firstSelectedKey)
                                  ? i
                                  : null == (l = r.getFirstKey)
                                  ? void 0
                                  : l.call(r)
                              );
                        } else
                          !F &&
                            L.current &&
                            ((L.current.scrollTop = $.current.top),
                            (L.current.scrollLeft = $.current.left));
                        if (null != s.focusedKey && L.current) {
                          let e = b(o, s.focusedKey);
                          e instanceof HTMLElement &&
                            (e.contains(document.activeElement) ||
                              D ||
                              (0, k.e)(e),
                            "keyboard" === (0, T.ME)() &&
                              I(e, { containingElement: o.current }));
                        }
                      }
                    },
                    onBlur: (e) => {
                      e.currentTarget.contains(e.relatedTarget) ||
                        s.setFocused(!1);
                    },
                    onMouseDown(e) {
                      L.current === e.target && e.preventDefault();
                    },
                  },
                  { typeSelectProps: G } = (function (e) {
                    let {
                        keyboardDelegate: t,
                        selectionManager: l,
                        onTypeSelect: i,
                      } = e,
                      s = (0, n.useRef)({
                        search: "",
                        timeout: void 0,
                      }).current;
                    return {
                      typeSelectProps: {
                        onKeyDownCapture: t.getKeyForSearch
                          ? (e) => {
                              var n;
                              let r =
                                1 !== (n = e.key).length && /^[A-Z]/i.test(n)
                                  ? ""
                                  : n;
                              if (
                                r &&
                                !e.ctrlKey &&
                                !e.metaKey &&
                                e.currentTarget.contains(e.target)
                              ) {
                                if (
                                  (" " === r &&
                                    s.search.trim().length > 0 &&
                                    (e.preventDefault(),
                                    "continuePropagation" in e ||
                                      e.stopPropagation()),
                                  (s.search += r),
                                  null != t.getKeyForSearch)
                                ) {
                                  let e = t.getKeyForSearch(
                                    s.search,
                                    l.focusedKey
                                  );
                                  null == e &&
                                    (e = t.getKeyForSearch(s.search)),
                                    null != e &&
                                      (l.setFocusedKey(e), i && i(e));
                                }
                                clearTimeout(s.timeout),
                                  (s.timeout = setTimeout(() => {
                                    s.search = "";
                                  }, 1e3));
                              }
                            }
                          : void 0,
                      },
                    };
                  })({ keyboardDelegate: r, selectionManager: s });
                v || (Y = (0, p.v)(G, Y)),
                  D || (l = null == s.focusedKey ? 0 : -1);
                let Z = ((t = s.collection), (i = (0, y.Bi)()), m.set(t, i), i);
                return {
                  collectionProps: (0, p.v)(Y, {
                    tabIndex: l,
                    "data-collection": Z,
                  }),
                };
              })({
                ref: l,
                selectionManager: o,
                keyboardDelegate: (0, n.useMemo)(
                  () => new h(r, a, i, u),
                  [r, u, i, a]
                ),
                selectOnFocus: "automatic" === s,
                disallowEmptySelection: !0,
                scrollRef: l,
                linkBehavior: "selection",
              }),
              v = (0, y.Bi)();
            d.set(t, v);
            let D = (0, f.b)({ ...e, id: v });
            return {
              tabListProps: {
                ...(0, p.v)(c, D),
                role: "tablist",
                "aria-orientation": i,
                tabIndex: void 0,
              },
            };
          })({ ...e, orientation: r, keyboardActivation: a }, i, c),
          D = (0, u.Sl)({
            ...e,
            children: null,
            defaultClassName: "react-aria-TabList",
            values: { orientation: r, state: i },
          }),
          E = (0, V.$)(e);
        return (
          delete E.id,
          n.createElement(
            "div",
            { ...E, ...v, ref: c, ...D, "data-orientation": r || void 0 },
            n.createElement(s, {
              collection: i.collection,
              persistedKeys:
                ((l = i.selectionManager.focusedKey),
                (0, n.useMemo)(() => (null != l ? new Set([l]) : null), [l])),
            })
          )
        );
      }
      let eN = (function (e, t) {
          let l = ({ node: e }) => t(e.props, e.props.ref, e),
            i = (0, n.forwardRef)((i, s) => {
              let r = (0, n.useContext)(z.gY);
              if (!(0, n.useContext)(en)) {
                if (t.length >= 3)
                  throw Error(
                    t.name + " cannot be rendered outside a collection."
                  );
                return t(i, s);
              }
              return (function (e, t, l, i, s, r) {
                let o = (0, n.useCallback)(
                    (e) => {
                      null == e || e.setProps(t, l, i, r);
                    },
                    [t, l, i, r]
                  ),
                  u = (0, n.useContext)(eu);
                if (u) {
                  let n = u.ownerDocument.nodesByProps.get(t);
                  return (
                    n ||
                      ((n = u.ownerDocument.createElement(e)).setProps(
                        t,
                        l,
                        i,
                        r
                      ),
                      u.appendChild(n),
                      u.ownerDocument.updateCollection(),
                      u.ownerDocument.nodesByProps.set(t, n)),
                    null
                  );
                }
                return n.createElement(e, { ref: o }, s);
              })(e, i, s, "children" in i ? i.children : null, null, (e) =>
                n.createElement(
                  z.gY.Provider,
                  { value: r },
                  n.createElement(l, { node: e })
                )
              );
            });
          return (i.displayName = t.name), i;
        })("item", (e, t, l) => {
          let i = (0, n.useContext)(eD),
            s = (0, eh.U)(t),
            {
              tabProps: r,
              isSelected: o,
              isDisabled: d,
              isPressed: h,
            } = (function (e, t, l) {
              let { key: i, isDisabled: s, shouldSelectOnPressUp: r } = e,
                { selectionManager: o, selectedKey: u } = t,
                a = i === u,
                d = s || t.isDisabled || t.selectionManager.isDisabled(i),
                { itemProps: h, isPressed: f } = (function (e) {
                  var t;
                  let {
                      id: l,
                      selectionManager: i,
                      key: s,
                      ref: r,
                      shouldSelectOnPressUp: o,
                      shouldUseVirtualFocus: u,
                      focus: a,
                      isDisabled: d,
                      onAction: c,
                      allowsDifferentPressOrigin: h,
                      linkBehavior: f = "action",
                    } = e,
                    g = (0, S.rd)();
                  l = (0, y.Bi)(l);
                  let v = (e) => {
                    if ("keyboard" === e.pointerType && K(e))
                      i.toggleSelection(s);
                    else {
                      if ("none" === i.selectionMode) return;
                      if (i.isLink(s)) {
                        if ("selection" === f && r.current) {
                          let t = i.getItemProps(s);
                          g.open(r.current, e, t.href, t.routerOptions),
                            i.setSelectedKeys(i.selectedKeys);
                          return;
                        } else if ("override" === f || "none" === f) return;
                      }
                      "single" === i.selectionMode
                        ? i.isSelected(s) && !i.disallowEmptySelection
                          ? i.toggleSelection(s)
                          : i.replaceSelection(s)
                        : e && e.shiftKey
                        ? i.extendSelection(s)
                        : "toggle" === i.selectionBehavior ||
                          (e &&
                            (C(e) ||
                              "touch" === e.pointerType ||
                              "virtual" === e.pointerType))
                        ? i.toggleSelection(s)
                        : i.replaceSelection(s);
                    }
                  };
                  (0, n.useEffect)(() => {
                    s === i.focusedKey &&
                      i.isFocused &&
                      (u
                        ? B(r.current)
                        : a
                        ? a()
                        : document.activeElement !== r.current &&
                          r.current &&
                          (0, A.l)(r.current));
                  }, [
                    r,
                    s,
                    i.focusedKey,
                    i.childFocusStrategy,
                    i.isFocused,
                    u,
                  ]),
                    (d = d || i.isDisabled(s));
                  let b = {};
                  u || d
                    ? d &&
                      (b.onMouseDown = (e) => {
                        e.preventDefault();
                      })
                    : (b = {
                        tabIndex: s === i.focusedKey ? 0 : -1,
                        onFocus(e) {
                          e.target === r.current && i.setFocusedKey(s);
                        },
                      });
                  let x = i.isLink(s) && "override" === f,
                    w = i.isLink(s) && "selection" !== f && "none" !== f,
                    D = !d && i.canSelectItem(s) && !x,
                    M = (c || w) && !d,
                    E =
                      M &&
                      ("replace" === i.selectionBehavior
                        ? !D
                        : !D || i.isEmpty),
                    I = M && D && "replace" === i.selectionBehavior,
                    N = E || I,
                    P = (0, n.useRef)(null),
                    T = N && D,
                    R = (0, n.useRef)(!1),
                    _ = (0, n.useRef)(!1),
                    V = (e) => {
                      if ((c && c(), w && r.current)) {
                        let t = i.getItemProps(s);
                        g.open(r.current, e, t.href, t.routerOptions);
                      }
                    },
                    z = { ref: r };
                  o
                    ? ((z.onPressStart = (e) => {
                        (P.current = e.pointerType),
                          (R.current = T),
                          "keyboard" === e.pointerType && (!N || q()) && v(e);
                      }),
                      h
                        ? ((z.onPressUp = E
                            ? void 0
                            : (e) => {
                                "mouse" === e.pointerType && D && v(e);
                              }),
                          (z.onPress = E
                            ? V
                            : (e) => {
                                "keyboard" !== e.pointerType &&
                                  "mouse" !== e.pointerType &&
                                  D &&
                                  v(e);
                              }))
                        : (z.onPress = (e) => {
                            E || (I && "mouse" !== e.pointerType)
                              ? ("keyboard" !== e.pointerType || W()) && V(e)
                              : "keyboard" !== e.pointerType && D && v(e);
                          }))
                    : ((z.onPressStart = (e) => {
                        (P.current = e.pointerType),
                          (R.current = T),
                          (_.current = E),
                          D &&
                            (("mouse" === e.pointerType && !E) ||
                              ("keyboard" === e.pointerType && (!M || q()))) &&
                            v(e);
                      }),
                      (z.onPress = (e) => {
                        ("touch" === e.pointerType ||
                          "pen" === e.pointerType ||
                          "virtual" === e.pointerType ||
                          ("keyboard" === e.pointerType && N && W()) ||
                          ("mouse" === e.pointerType && _.current)) &&
                          (N ? V(e) : D && v(e));
                      })),
                    (b["data-collection"] = ((t = i.collection), m.get(t))),
                    (b["data-key"] = s),
                    (z.preventFocusOnPress = u),
                    u &&
                      (z = (0, p.v)(z, {
                        onPressStart(e) {
                          "touch" !== e.pointerType &&
                            (i.setFocused(!0), i.setFocusedKey(s));
                        },
                        onPress(e) {
                          "touch" === e.pointerType &&
                            (i.setFocused(!0), i.setFocusedKey(s));
                        },
                      }));
                  let { pressProps: j, isPressed: J } = (0, $.d)(z),
                    Y = I
                      ? (e) => {
                          "mouse" === P.current &&
                            (e.stopPropagation(), e.preventDefault(), V(e));
                        }
                      : void 0,
                    { longPressProps: G } = (function (e) {
                      let {
                          isDisabled: t,
                          onLongPressStart: l,
                          onLongPressEnd: i,
                          onLongPress: s,
                          threshold: r = 500,
                          accessibilityDescription: o,
                        } = e,
                        u = (0, n.useRef)(void 0),
                        { addGlobalListener: a, removeGlobalListener: d } = (0,
                        O.A)(),
                        { pressProps: c } = (0, $.d)({
                          isDisabled: t,
                          onPressStart(e) {
                            if (
                              (e.continuePropagation(),
                              ("mouse" === e.pointerType ||
                                "touch" === e.pointerType) &&
                                (l && l({ ...e, type: "longpressstart" }),
                                (u.current = setTimeout(() => {
                                  e.target.dispatchEvent(
                                    new PointerEvent("pointercancel", {
                                      bubbles: !0,
                                    })
                                  ),
                                    (0, L.TW)(e.target).activeElement !==
                                      e.target && (0, k.e)(e.target),
                                    s && s({ ...e, type: "longpress" }),
                                    (u.current = void 0);
                                }, r)),
                                "touch" === e.pointerType))
                            ) {
                              let t = (e) => {
                                e.preventDefault();
                              };
                              a(e.target, "contextmenu", t, { once: !0 }),
                                a(
                                  window,
                                  "pointerup",
                                  () => {
                                    setTimeout(() => {
                                      d(e.target, "contextmenu", t);
                                    }, 30);
                                  },
                                  { once: !0 }
                                );
                            }
                          },
                          onPressEnd(e) {
                            u.current && clearTimeout(u.current),
                              i &&
                                ("mouse" === e.pointerType ||
                                  "touch" === e.pointerType) &&
                                i({ ...e, type: "longpressend" });
                          },
                        }),
                        h = (function (e) {
                          let [t, l] = (0, n.useState)();
                          return (
                            (0, F.N)(() => {
                              if (!e) return;
                              let t = U.get(e);
                              if (t) l(t.element.id);
                              else {
                                let n = `react-aria-description-${H++}`;
                                l(n);
                                let i = document.createElement("div");
                                (i.id = n),
                                  (i.style.display = "none"),
                                  (i.textContent = e),
                                  document.body.appendChild(i),
                                  (t = { refCount: 0, element: i }),
                                  U.set(e, t);
                              }
                              return (
                                t.refCount++,
                                () => {
                                  t &&
                                    0 == --t.refCount &&
                                    (t.element.remove(), U.delete(e));
                                }
                              );
                            }, [e]),
                            { "aria-describedby": e ? t : void 0 }
                          );
                        })(s && !t ? o : void 0);
                      return { longPressProps: (0, p.v)(c, h) };
                    })({
                      isDisabled: !T,
                      onLongPress(e) {
                        "touch" === e.pointerType &&
                          (v(e), i.setSelectionBehavior("toggle"));
                      },
                    }),
                    Z = i.isLink(s)
                      ? (e) => {
                          S.Fe.isOpening || e.preventDefault();
                        }
                      : void 0;
                  return {
                    itemProps: (0, p.v)(
                      b,
                      D || E || (u && !d) ? j : {},
                      T ? G : {},
                      {
                        onDoubleClick: Y,
                        onDragStartCapture: (e) => {
                          "touch" === P.current &&
                            R.current &&
                            e.preventDefault();
                        },
                        onClick: Z,
                        id: l,
                      },
                      u ? { onMouseDown: (e) => e.preventDefault() } : void 0
                    ),
                    isPressed: J,
                    isSelected: i.isSelected(s),
                    isFocused: i.isFocused && i.focusedKey === s,
                    isDisabled: d,
                    allowsSelection: D,
                    hasAction: N,
                  };
                })({
                  selectionManager: o,
                  key: i,
                  ref: l,
                  isDisabled: d,
                  shouldSelectOnPressUp: r,
                  linkBehavior: "selection",
                }),
                g = c(t, i, "tab"),
                v = c(t, i, "tabpanel"),
                { tabIndex: b } = h,
                x = t.collection.getItem(i),
                w = (0, V.$)(null == x ? void 0 : x.props, { labelable: !0 });
              delete w.id;
              let D = (0, S._h)(null == x ? void 0 : x.props),
                { focusableProps: M } = (0, z.Wc)({ isDisabled: d }, l);
              return {
                tabProps: (0, p.v)(w, M, D, h, {
                  id: g,
                  "aria-selected": a,
                  "aria-disabled": d || void 0,
                  "aria-controls": a ? v : void 0,
                  tabIndex: d ? void 0 : b,
                  role: "tab",
                }),
                isSelected: a,
                isDisabled: d,
                isPressed: f,
              };
            })({ key: l.key, ...e }, i, s),
            { focusProps: f, isFocused: g, isFocusVisible: v } = (0, a.o)(),
            { hoverProps: b, isHovered: x } = (0, j.M)({
              isDisabled: d,
              onHoverStart: e.onHoverStart,
              onHoverEnd: e.onHoverEnd,
              onHoverChange: e.onHoverChange,
            }),
            w = (0, u.Sl)({
              ...e,
              id: void 0,
              children: l.rendered,
              defaultClassName: "react-aria-Tab",
              values: {
                isSelected: o,
                isDisabled: d,
                isFocused: g,
                isFocusVisible: v,
                isPressed: h,
                isHovered: x,
              },
            }),
            D = l.props.href ? "a" : "div";
          return n.createElement(
            D,
            {
              ...(0, p.v)(r, f, b, w),
              ref: s,
              "data-selected": o || void 0,
              "data-disabled": d || void 0,
              "data-focused": g || void 0,
              "data-focus-visible": v || void 0,
              "data-pressed": h || void 0,
              "data-hovered": x || void 0,
            },
            w.children
          );
        }),
        eP = (0, ee.U7)(function (e, t) {
          let l = (0, n.useContext)(eD),
            i = (0, eh.U)(t),
            { tabPanelProps: r } = (function (e, t, l) {
              var i;
              let s = !(function (e, t) {
                  let l,
                    [i, s] = (0, n.useState)(!1);
                  return (
                    (0, F.N)(() => {
                      if ((null == e ? void 0 : e.current) && !l) {
                        let t = () => {
                          e.current &&
                            s(
                              !!(0, R.N$)(e.current, {
                                tabbable: !0,
                              }).nextNode()
                            );
                        };
                        t();
                        let l = new MutationObserver(t);
                        return (
                          l.observe(e.current, {
                            subtree: !0,
                            childList: !0,
                            attributes: !0,
                            attributeFilter: ["tabIndex", "disabled"],
                          }),
                          () => {
                            l.disconnect();
                          }
                        );
                      }
                    }),
                    !l && i
                  );
                })(l)
                  ? 0
                  : void 0,
                r = c(
                  t,
                  null != (i = e.id) ? i : null == t ? void 0 : t.selectedKey,
                  "tabpanel"
                ),
                o = (0, f.b)({
                  ...e,
                  id: r,
                  "aria-labelledby": c(
                    t,
                    null == t ? void 0 : t.selectedKey,
                    "tab"
                  ),
                });
              return {
                tabPanelProps: (0, p.v)(o, {
                  tabIndex: s,
                  role: "tabpanel",
                  "aria-describedby": e["aria-describedby"],
                  "aria-details": e["aria-details"],
                }),
              };
            })(e, l, i),
            { focusProps: d, isFocused: h, isFocusVisible: y } = (0, a.o)(),
            g = l.selectedKey === e.id,
            v = (0, u.Sl)({
              ...e,
              defaultClassName: "react-aria-TabPanel",
              values: {
                isFocused: h,
                isFocusVisible: y,
                isInert: ey(!g),
                state: l,
              },
            });
          if (!g && !e.shouldForceMount) return null;
          let K = (0, V.$)(e);
          delete K.id;
          let b = g ? (0, p.v)(K, r, d, v) : v;
          return n.createElement(
            "div",
            {
              ...b,
              ref: i,
              "data-focused": h || void 0,
              "data-focus-visible": y || void 0,
              inert: ey(!g),
              "data-inert": g ? void 0 : "true",
            },
            n.createElement(
              u.Kq,
              {
                values: [
                  [ew, null],
                  [eD, null],
                ],
              },
              n.createElement(o.Provider, { value: s }, v.children)
            )
          );
        });
    },
    56550: (e, t, l) => {
      l.d(t, { A: () => n });
      let n = (0, l(73710).A)("ArrowDown", [
        ["path", { d: "M12 5v14", key: "s699le" }],
        ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
      ]);
    },
    77632: (e, t, l) => {
      l.d(t, { A: () => n });
      let n = (0, l(73710).A)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    87700: (e, t, l) => {
      e.exports = l(9915);
    },
  },
]);
