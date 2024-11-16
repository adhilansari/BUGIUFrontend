import {
  $ as ot,
  $a as re,
  A as Te,
  Aa as er,
  Ab as fr,
  B as gt,
  Ba as at,
  Bb as gr,
  C as An,
  Ca as nr,
  D as ki,
  Da as ir,
  E as Ui,
  Ea as z,
  F as Hi,
  Fa as $,
  G as it,
  Ga as _,
  H as ji,
  Ha as rr,
  I as U,
  Ia as wt,
  J as T,
  Ja as Le,
  K as In,
  Ka as u,
  L as w,
  La as h,
  M as Q,
  Ma as b,
  N as Bi,
  Na as Pe,
  O as F,
  Oa as Fe,
  P as Mn,
  Pa as Ve,
  Q as O,
  Qa as yt,
  R as m,
  Ra as j,
  S as Kt,
  Sa as Xt,
  T as N,
  Ta as Jt,
  U as X,
  Ua as te,
  V as rt,
  Va as ee,
  W as Yt,
  Wa as ne,
  X as $i,
  Xa as f,
  Y as Oe,
  Ya as ie,
  Z as ut,
  Za as or,
  _ as Gi,
  _a as V,
  a as g,
  aa as mt,
  ab as ke,
  b as P,
  ba as Zt,
  bb as sr,
  ca as Wi,
  cb as Ue,
  d as xi,
  da as zi,
  db as Nn,
  e as Ni,
  ea as J,
  eb as ar,
  f as bn,
  fa as st,
  fb as Ln,
  g as _n,
  ga as Rn,
  gb as Pn,
  h as ct,
  ha as vt,
  hb as lr,
  i as Y,
  ia as qi,
  ib as Lt,
  j as ft,
  ja as Dn,
  jb as cr,
  k as et,
  ka as Ki,
  kb as D,
  l as y,
  la as dt,
  lb as He,
  m as zt,
  ma as Yi,
  mb as Fn,
  n as Li,
  na as Tn,
  nb as ur,
  o as Pi,
  oa as Zi,
  ob as dr,
  p as I,
  pa as Qt,
  pb as x,
  q as Sn,
  qa as M,
  qb as je,
  r as Z,
  ra as H,
  rb as hr,
  s as Fi,
  sa as On,
  sb as Pt,
  t as wn,
  ta as Qi,
  tb as Be,
  u as Ot,
  ua as Xi,
  ub as $e,
  v as xt,
  va as xe,
  vb as Ge,
  w as qt,
  wa as xn,
  wb as Et,
  x as En,
  xa as Ji,
  xb as pr,
  y as Nt,
  ya as tr,
  yb as We,
  z as Vi,
  za as Ne,
  zb as Vn,
} from './chunk-UGMI2HG6.js';
var Hn = class extends dr {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  jn = class n extends Hn {
    static makeCurrent() {
      ur(new n());
    }
    onAndCancel(i, t, e) {
      return (
        i.addEventListener(t, e),
        () => {
          i.removeEventListener(t, e);
        }
      );
    }
    dispatchEvent(i, t) {
      i.dispatchEvent(t);
    }
    remove(i) {
      i.remove();
    }
    createElement(i, t) {
      return (t = t || this.getDefaultDocument()), t.createElement(i);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument('fakeTitle');
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(i) {
      return i.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(i) {
      return i instanceof DocumentFragment;
    }
    getGlobalEventTarget(i, t) {
      return t === 'window'
        ? window
        : t === 'document'
          ? i
          : t === 'body'
            ? i.body
            : null;
    }
    getBaseHref(i) {
      let t = Ao();
      return t == null ? null : Io(t);
    }
    resetBaseElement() {
      oe = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(i) {
      return hr(document.cookie, i);
    }
  },
  oe = null;
function Ao() {
  return (
    (oe = oe || document.querySelector('base')),
    oe ? oe.getAttribute('href') : null
  );
}
function Io(n) {
  return new URL(n, document.baseURI).pathname;
}
var Mo = (() => {
    class n {
      build() {
        return new XMLHttpRequest();
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)();
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  Bn = new F(''),
  Cr = (() => {
    class n {
      constructor(t, e) {
        (this._zone = e),
          (this._eventNameToPlugin = new Map()),
          t.forEach((r) => {
            r.manager = this;
          }),
          (this._plugins = t.slice().reverse());
      }
      addEventListener(t, e, r) {
        return this._findPluginFor(e).addEventListener(t, e, r);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(t) {
        let e = this._eventNameToPlugin.get(t);
        if (e) return e;
        if (((e = this._plugins.find((o) => o.supports(t))), !e))
          throw new T(5101, !1);
        return this._eventNameToPlugin.set(t, e), e;
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)(O(Bn), O(st));
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  ze = class {
    constructor(i) {
      this._doc = i;
    }
  },
  kn = 'ng-app-id',
  br = (() => {
    class n {
      constructor(t, e, r, o = {}) {
        (this.doc = t),
          (this.appId = e),
          (this.nonce = r),
          (this.platformId = o),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Vn(o)),
          this.resetHostNodes();
      }
      addStyles(t) {
        for (let e of t)
          this.changeUsageCount(e, 1) === 1 && this.onStyleAdded(e);
      }
      removeStyles(t) {
        for (let e of t)
          this.changeUsageCount(e, -1) <= 0 && this.onStyleRemoved(e);
      }
      ngOnDestroy() {
        let t = this.styleNodesInDOM;
        t && (t.forEach((e) => e.remove()), t.clear());
        for (let e of this.getAllStyles()) this.onStyleRemoved(e);
        this.resetHostNodes();
      }
      addHost(t) {
        this.hostNodes.add(t);
        for (let e of this.getAllStyles()) this.addStyleToHost(t, e);
      }
      removeHost(t) {
        this.hostNodes.delete(t);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(t) {
        for (let e of this.hostNodes) this.addStyleToHost(e, t);
      }
      onStyleRemoved(t) {
        let e = this.styleRef;
        e.get(t)?.elements?.forEach((r) => r.remove()), e.delete(t);
      }
      collectServerRenderedStyles() {
        let t = this.doc.head?.querySelectorAll(`style[${kn}="${this.appId}"]`);
        if (t?.length) {
          let e = new Map();
          return (
            t.forEach((r) => {
              r.textContent != null && e.set(r.textContent, r);
            }),
            e
          );
        }
        return null;
      }
      changeUsageCount(t, e) {
        let r = this.styleRef;
        if (r.has(t)) {
          let o = r.get(t);
          return (o.usage += e), o.usage;
        }
        return r.set(t, { usage: e, elements: [] }), e;
      }
      getStyleElement(t, e) {
        let r = this.styleNodesInDOM,
          o = r?.get(e);
        if (o?.parentNode === t) return r.delete(e), o.removeAttribute(kn), o;
        {
          let s = this.doc.createElement('style');
          return (
            this.nonce && s.setAttribute('nonce', this.nonce),
            (s.textContent = e),
            this.platformIsServer && s.setAttribute(kn, this.appId),
            t.appendChild(s),
            s
          );
        }
      }
      addStyleToHost(t, e) {
        let r = this.getStyleElement(t, e),
          o = this.styleRef,
          s = o.get(e)?.elements;
        s ? s.push(r) : o.set(e, { elements: [r], usage: 1 });
      }
      resetHostNodes() {
        let t = this.hostNodes;
        t.clear(), t.add(this.doc.head);
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)(O(x), O(Dn), O(Tn, 8), O(dt));
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  Un = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    math: 'http://www.w3.org/1998/Math/MathML',
  },
  Gn = /%COMP%/g,
  _r = '%COMP%',
  Ro = `_nghost-${_r}`,
  Do = `_ngcontent-${_r}`,
  To = !0,
  Oo = new F('', { providedIn: 'root', factory: () => To });
function xo(n) {
  return Do.replace(Gn, n);
}
function No(n) {
  return Ro.replace(Gn, n);
}
function Sr(n, i) {
  return i.map((t) => t.replace(Gn, n));
}
var qe = (() => {
    class n {
      constructor(t, e, r, o, s, l, a, c = null) {
        (this.eventManager = t),
          (this.sharedStylesHost = e),
          (this.appId = r),
          (this.removeStylesOnCompDestroy = o),
          (this.doc = s),
          (this.platformId = l),
          (this.ngZone = a),
          (this.nonce = c),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = Vn(l)),
          (this.defaultRenderer = new se(t, s, a, this.platformIsServer));
      }
      createRenderer(t, e) {
        if (!t || !e) return this.defaultRenderer;
        this.platformIsServer &&
          e.encapsulation === Kt.ShadowDom &&
          (e = P(g({}, e), { encapsulation: Kt.Emulated }));
        let r = this.getOrCreateRenderer(t, e);
        return (
          r instanceof Ke
            ? r.applyToHost(t)
            : r instanceof ae && r.applyStyles(),
          r
        );
      }
      getOrCreateRenderer(t, e) {
        let r = this.rendererByCompId,
          o = r.get(e.id);
        if (!o) {
          let s = this.doc,
            l = this.ngZone,
            a = this.eventManager,
            c = this.sharedStylesHost,
            d = this.removeStylesOnCompDestroy,
            p = this.platformIsServer;
          switch (e.encapsulation) {
            case Kt.Emulated:
              o = new Ke(a, c, e, this.appId, d, s, l, p);
              break;
            case Kt.ShadowDom:
              return new $n(a, c, t, e, s, l, this.nonce, p);
            default:
              o = new ae(a, c, e, d, s, l, p);
              break;
          }
          r.set(e.id, o);
        }
        return o;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)(
            O(Cr),
            O(br),
            O(Dn),
            O(Oo),
            O(x),
            O(dt),
            O(st),
            O(Tn)
          );
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  se = class {
    constructor(i, t, e, r) {
      (this.eventManager = i),
        (this.doc = t),
        (this.ngZone = e),
        (this.platformIsServer = r),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(i, t) {
      return t
        ? this.doc.createElementNS(Un[t] || t, i)
        : this.doc.createElement(i);
    }
    createComment(i) {
      return this.doc.createComment(i);
    }
    createText(i) {
      return this.doc.createTextNode(i);
    }
    appendChild(i, t) {
      (mr(i) ? i.content : i).appendChild(t);
    }
    insertBefore(i, t, e) {
      i && (mr(i) ? i.content : i).insertBefore(t, e);
    }
    removeChild(i, t) {
      t.remove();
    }
    selectRootElement(i, t) {
      let e = typeof i == 'string' ? this.doc.querySelector(i) : i;
      if (!e) throw new T(-5104, !1);
      return t || (e.textContent = ''), e;
    }
    parentNode(i) {
      return i.parentNode;
    }
    nextSibling(i) {
      return i.nextSibling;
    }
    setAttribute(i, t, e, r) {
      if (r) {
        t = r + ':' + t;
        let o = Un[r];
        o ? i.setAttributeNS(o, t, e) : i.setAttribute(t, e);
      } else i.setAttribute(t, e);
    }
    removeAttribute(i, t, e) {
      if (e) {
        let r = Un[e];
        r ? i.removeAttributeNS(r, t) : i.removeAttribute(`${e}:${t}`);
      } else i.removeAttribute(t);
    }
    addClass(i, t) {
      i.classList.add(t);
    }
    removeClass(i, t) {
      i.classList.remove(t);
    }
    setStyle(i, t, e, r) {
      r & (Qt.DashCase | Qt.Important)
        ? i.style.setProperty(t, e, r & Qt.Important ? 'important' : '')
        : (i.style[t] = e);
    }
    removeStyle(i, t, e) {
      e & Qt.DashCase ? i.style.removeProperty(t) : (i.style[t] = '');
    }
    setProperty(i, t, e) {
      i != null && (i[t] = e);
    }
    setValue(i, t) {
      i.nodeValue = t;
    }
    listen(i, t, e) {
      if (
        typeof i == 'string' &&
        ((i = Fn().getGlobalEventTarget(this.doc, i)), !i)
      )
        throw new Error(`Unsupported event target ${i} for event ${t}`);
      return this.eventManager.addEventListener(
        i,
        t,
        this.decoratePreventDefault(e)
      );
    }
    decoratePreventDefault(i) {
      return (t) => {
        if (t === '__ngUnwrap__') return i;
        (this.platformIsServer ? this.ngZone.runGuarded(() => i(t)) : i(t)) ===
          !1 && t.preventDefault();
      };
    }
  };
function mr(n) {
  return n.tagName === 'TEMPLATE' && n.content !== void 0;
}
var $n = class extends se {
    constructor(i, t, e, r, o, s, l, a) {
      super(i, o, s, a),
        (this.sharedStylesHost = t),
        (this.hostEl = e),
        (this.shadowRoot = e.attachShadow({ mode: 'open' })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let c = Sr(r.id, r.styles);
      for (let d of c) {
        let p = document.createElement('style');
        l && p.setAttribute('nonce', l),
          (p.textContent = d),
          this.shadowRoot.appendChild(p);
      }
    }
    nodeOrShadowRoot(i) {
      return i === this.hostEl ? this.shadowRoot : i;
    }
    appendChild(i, t) {
      return super.appendChild(this.nodeOrShadowRoot(i), t);
    }
    insertBefore(i, t, e) {
      return super.insertBefore(this.nodeOrShadowRoot(i), t, e);
    }
    removeChild(i, t) {
      return super.removeChild(null, t);
    }
    parentNode(i) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  ae = class extends se {
    constructor(i, t, e, r, o, s, l, a) {
      super(i, o, s, l),
        (this.sharedStylesHost = t),
        (this.removeStylesOnCompDestroy = r),
        (this.styles = a ? Sr(a, e.styles) : e.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  Ke = class extends ae {
    constructor(i, t, e, r, o, s, l, a) {
      let c = r + '-' + e.id;
      super(i, t, e, o, s, l, a, c),
        (this.contentAttr = xo(c)),
        (this.hostAttr = No(c));
    }
    applyToHost(i) {
      this.applyStyles(), this.setAttribute(i, this.hostAttr, '');
    }
    createElement(i, t) {
      let e = super.createElement(i, t);
      return super.setAttribute(e, this.contentAttr, ''), e;
    }
  },
  Lo = (() => {
    class n extends ze {
      constructor(t) {
        super(t);
      }
      supports(t) {
        return !0;
      }
      addEventListener(t, e, r) {
        return (
          t.addEventListener(e, r, !1), () => this.removeEventListener(t, e, r)
        );
      }
      removeEventListener(t, e, r) {
        return t.removeEventListener(e, r);
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)(O(x));
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  vr = ['alt', 'control', 'meta', 'shift'],
  Po = {
    '\b': 'Backspace',
    '	': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    Del: 'Delete',
    Esc: 'Escape',
    Left: 'ArrowLeft',
    Right: 'ArrowRight',
    Up: 'ArrowUp',
    Down: 'ArrowDown',
    Menu: 'ContextMenu',
    Scroll: 'ScrollLock',
    Win: 'OS',
  },
  Fo = {
    alt: (n) => n.altKey,
    control: (n) => n.ctrlKey,
    meta: (n) => n.metaKey,
    shift: (n) => n.shiftKey,
  },
  Vo = (() => {
    class n extends ze {
      constructor(t) {
        super(t);
      }
      supports(t) {
        return n.parseEventName(t) != null;
      }
      addEventListener(t, e, r) {
        let o = n.parseEventName(e),
          s = n.eventCallback(o.fullKey, r, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => Fn().onAndCancel(t, o.domEventName, s));
      }
      static parseEventName(t) {
        let e = t.toLowerCase().split('.'),
          r = e.shift();
        if (e.length === 0 || !(r === 'keydown' || r === 'keyup')) return null;
        let o = n._normalizeKey(e.pop()),
          s = '',
          l = e.indexOf('code');
        if (
          (l > -1 && (e.splice(l, 1), (s = 'code.')),
          vr.forEach((c) => {
            let d = e.indexOf(c);
            d > -1 && (e.splice(d, 1), (s += c + '.'));
          }),
          (s += o),
          e.length != 0 || o.length === 0)
        )
          return null;
        let a = {};
        return (a.domEventName = r), (a.fullKey = s), a;
      }
      static matchEventFullKeyCode(t, e) {
        let r = Po[t.key] || t.key,
          o = '';
        return (
          e.indexOf('code.') > -1 && ((r = t.code), (o = 'code.')),
          r == null || !r
            ? !1
            : ((r = r.toLowerCase()),
              r === ' ' ? (r = 'space') : r === '.' && (r = 'dot'),
              vr.forEach((s) => {
                if (s !== r) {
                  let l = Fo[s];
                  l(t) && (o += s + '.');
                }
              }),
              (o += r),
              o === e)
        );
      }
      static eventCallback(t, e, r) {
        return (o) => {
          n.matchEventFullKeyCode(o, t) && r.runGuarded(() => e(o));
        };
      }
      static _normalizeKey(t) {
        return t === 'esc' ? 'escape' : t;
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)(O(x));
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })();
function wr(n, i) {
  return cr(g({ rootComponent: n }, ko(i)));
}
function ko(n) {
  return {
    appProviders: [...$o, ...(n?.providers ?? [])],
    platformProviders: Bo,
  };
}
function Uo() {
  jn.makeCurrent();
}
function Ho() {
  return new Rn();
}
function jo() {
  return qi(document), document;
}
var Bo = [
  { provide: dt, useValue: pr },
  { provide: Ki, useValue: Uo, multi: !0 },
  { provide: x, useFactory: jo, deps: [] },
];
var $o = [
  { provide: $i, useValue: 'root' },
  { provide: Rn, useFactory: Ho, deps: [] },
  { provide: Bn, useClass: Lo, multi: !0, deps: [x, st, dt] },
  { provide: Bn, useClass: Vo, multi: !0, deps: [x] },
  qe,
  br,
  Cr,
  { provide: xe, useExisting: qe },
  { provide: fr, useClass: Mo, deps: [] },
  [],
];
var Er = (() => {
  class n {
    constructor(t) {
      this._doc = t;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(t) {
      this._doc.title = t || '';
    }
    static {
      this.ɵfac = function (e) {
        return new (e || n)(O(x));
      };
    }
    static {
      this.ɵprov = w({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
  }
  return n;
})();
var C = 'primary',
  Ee = Symbol('RouteTitle'),
  Yn = class {
    constructor(i) {
      this.params = i || {};
    }
    has(i) {
      return Object.prototype.hasOwnProperty.call(this.params, i);
    }
    get(i) {
      if (this.has(i)) {
        let t = this.params[i];
        return Array.isArray(t) ? t[0] : t;
      }
      return null;
    }
    getAll(i) {
      if (this.has(i)) {
        let t = this.params[i];
        return Array.isArray(t) ? t : [t];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function jt(n) {
  return new Yn(n);
}
function Wo(n, i, t) {
  let e = t.path.split('/');
  if (
    e.length > n.length ||
    (t.pathMatch === 'full' && (i.hasChildren() || e.length < n.length))
  )
    return null;
  let r = {};
  for (let o = 0; o < e.length; o++) {
    let s = e[o],
      l = n[o];
    if (s[0] === ':') r[s.substring(1)] = l;
    else if (s !== l.path) return null;
  }
  return { consumed: n.slice(0, e.length), posParams: r };
}
function zo(n, i) {
  if (n.length !== i.length) return !1;
  for (let t = 0; t < n.length; ++t) if (!lt(n[t], i[t])) return !1;
  return !0;
}
function lt(n, i) {
  let t = n ? Zn(n) : void 0,
    e = i ? Zn(i) : void 0;
  if (!t || !e || t.length != e.length) return !1;
  let r;
  for (let o = 0; o < t.length; o++)
    if (((r = t[o]), !xr(n[r], i[r]))) return !1;
  return !0;
}
function Zn(n) {
  return [...Object.keys(n), ...Object.getOwnPropertySymbols(n)];
}
function xr(n, i) {
  if (Array.isArray(n) && Array.isArray(i)) {
    if (n.length !== i.length) return !1;
    let t = [...n].sort(),
      e = [...i].sort();
    return t.every((r, o) => e[o] === r);
  } else return n === i;
}
function Nr(n) {
  return n.length > 0 ? n[n.length - 1] : null;
}
function bt(n) {
  return Li(n) ? n : Nn(n) ? et(Promise.resolve(n)) : y(n);
}
var qo = { exact: Pr, subset: Fr },
  Lr = { exact: Ko, subset: Yo, ignored: () => !0 };
function Ar(n, i, t) {
  return (
    qo[t.paths](n.root, i.root, t.matrixParams) &&
    Lr[t.queryParams](n.queryParams, i.queryParams) &&
    !(t.fragment === 'exact' && n.fragment !== i.fragment)
  );
}
function Ko(n, i) {
  return lt(n, i);
}
function Pr(n, i, t) {
  if (
    !It(n.segments, i.segments) ||
    !Qe(n.segments, i.segments, t) ||
    n.numberOfChildren !== i.numberOfChildren
  )
    return !1;
  for (let e in i.children)
    if (!n.children[e] || !Pr(n.children[e], i.children[e], t)) return !1;
  return !0;
}
function Yo(n, i) {
  return (
    Object.keys(i).length <= Object.keys(n).length &&
    Object.keys(i).every((t) => xr(n[t], i[t]))
  );
}
function Fr(n, i, t) {
  return Vr(n, i, i.segments, t);
}
function Vr(n, i, t, e) {
  if (n.segments.length > t.length) {
    let r = n.segments.slice(0, t.length);
    return !(!It(r, t) || i.hasChildren() || !Qe(r, t, e));
  } else if (n.segments.length === t.length) {
    if (!It(n.segments, t) || !Qe(n.segments, t, e)) return !1;
    for (let r in i.children)
      if (!n.children[r] || !Fr(n.children[r], i.children[r], e)) return !1;
    return !0;
  } else {
    let r = t.slice(0, n.segments.length),
      o = t.slice(n.segments.length);
    return !It(n.segments, r) || !Qe(n.segments, r, e) || !n.children[C]
      ? !1
      : Vr(n.children[C], i, o, e);
  }
}
function Qe(n, i, t) {
  return i.every((e, r) => Lr[t](n[r].parameters, e.parameters));
}
var pt = class {
    constructor(i = new S([], {}), t = {}, e = null) {
      (this.root = i), (this.queryParams = t), (this.fragment = e);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= jt(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return Xo.serialize(this);
    }
  },
  S = class {
    constructor(i, t) {
      (this.segments = i),
        (this.children = t),
        (this.parent = null),
        Object.values(t).forEach((e) => (e.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return Xe(this);
    }
  },
  At = class {
    constructor(i, t) {
      (this.path = i), (this.parameters = t);
    }
    get parameterMap() {
      return (this._parameterMap ??= jt(this.parameters)), this._parameterMap;
    }
    toString() {
      return Ur(this);
    }
  };
function Zo(n, i) {
  return It(n, i) && n.every((t, e) => lt(t.parameters, i[e].parameters));
}
function It(n, i) {
  return n.length !== i.length ? !1 : n.every((t, e) => t.path === i[e].path);
}
function Qo(n, i) {
  let t = [];
  return (
    Object.entries(n.children).forEach(([e, r]) => {
      e === C && (t = t.concat(i(r, e)));
    }),
    Object.entries(n.children).forEach(([e, r]) => {
      e !== C && (t = t.concat(i(r, e)));
    }),
    t
  );
}
var Si = (() => {
    class n {
      static {
        this.ɵfac = function (e) {
          return new (e || n)();
        };
      }
      static {
        this.ɵprov = w({
          token: n,
          factory: () => new fe(),
          providedIn: 'root',
        });
      }
    }
    return n;
  })(),
  fe = class {
    parse(i) {
      let t = new Xn(i);
      return new pt(
        t.parseRootSegment(),
        t.parseQueryParams(),
        t.parseFragment()
      );
    }
    serialize(i) {
      let t = `/${le(i.root, !0)}`,
        e = es(i.queryParams),
        r = typeof i.fragment == 'string' ? `#${Jo(i.fragment)}` : '';
      return `${t}${e}${r}`;
    }
  },
  Xo = new fe();
function Xe(n) {
  return n.segments.map((i) => Ur(i)).join('/');
}
function le(n, i) {
  if (!n.hasChildren()) return Xe(n);
  if (i) {
    let t = n.children[C] ? le(n.children[C], !1) : '',
      e = [];
    return (
      Object.entries(n.children).forEach(([r, o]) => {
        r !== C && e.push(`${r}:${le(o, !1)}`);
      }),
      e.length > 0 ? `${t}(${e.join('//')})` : t
    );
  } else {
    let t = Qo(n, (e, r) =>
      r === C ? [le(n.children[C], !1)] : [`${r}:${le(e, !1)}`]
    );
    return Object.keys(n.children).length === 1 && n.children[C] != null
      ? `${Xe(n)}/${t[0]}`
      : `${Xe(n)}/(${t.join('//')})`;
  }
}
function kr(n) {
  return encodeURIComponent(n)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',');
}
function Ye(n) {
  return kr(n).replace(/%3B/gi, ';');
}
function Jo(n) {
  return encodeURI(n);
}
function Qn(n) {
  return kr(n)
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/%26/gi, '&');
}
function Je(n) {
  return decodeURIComponent(n);
}
function Ir(n) {
  return Je(n.replace(/\+/g, '%20'));
}
function Ur(n) {
  return `${Qn(n.path)}${ts(n.parameters)}`;
}
function ts(n) {
  return Object.entries(n)
    .map(([i, t]) => `;${Qn(i)}=${Qn(t)}`)
    .join('');
}
function es(n) {
  let i = Object.entries(n)
    .map(([t, e]) =>
      Array.isArray(e)
        ? e.map((r) => `${Ye(t)}=${Ye(r)}`).join('&')
        : `${Ye(t)}=${Ye(e)}`
    )
    .filter((t) => t);
  return i.length ? `?${i.join('&')}` : '';
}
var ns = /^[^\/()?;#]+/;
function Wn(n) {
  let i = n.match(ns);
  return i ? i[0] : '';
}
var is = /^[^\/()?;=#]+/;
function rs(n) {
  let i = n.match(is);
  return i ? i[0] : '';
}
var os = /^[^=?&#]+/;
function ss(n) {
  let i = n.match(os);
  return i ? i[0] : '';
}
var as = /^[^&#]+/;
function ls(n) {
  let i = n.match(as);
  return i ? i[0] : '';
}
var Xn = class {
  constructor(i) {
    (this.url = i), (this.remaining = i);
  }
  parseRootSegment() {
    return (
      this.consumeOptional('/'),
      this.remaining === '' ||
      this.peekStartsWith('?') ||
      this.peekStartsWith('#')
        ? new S([], {})
        : new S([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let i = {};
    if (this.consumeOptional('?'))
      do this.parseQueryParam(i);
      while (this.consumeOptional('&'));
    return i;
  }
  parseFragment() {
    return this.consumeOptional('#')
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === '') return {};
    this.consumeOptional('/');
    let i = [];
    for (
      this.peekStartsWith('(') || i.push(this.parseSegment());
      this.peekStartsWith('/') &&
      !this.peekStartsWith('//') &&
      !this.peekStartsWith('/(');

    )
      this.capture('/'), i.push(this.parseSegment());
    let t = {};
    this.peekStartsWith('/(') &&
      (this.capture('/'), (t = this.parseParens(!0)));
    let e = {};
    return (
      this.peekStartsWith('(') && (e = this.parseParens(!1)),
      (i.length > 0 || Object.keys(t).length > 0) && (e[C] = new S(i, t)),
      e
    );
  }
  parseSegment() {
    let i = Wn(this.remaining);
    if (i === '' && this.peekStartsWith(';')) throw new T(4009, !1);
    return this.capture(i), new At(Je(i), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let i = {};
    for (; this.consumeOptional(';'); ) this.parseParam(i);
    return i;
  }
  parseParam(i) {
    let t = rs(this.remaining);
    if (!t) return;
    this.capture(t);
    let e = '';
    if (this.consumeOptional('=')) {
      let r = Wn(this.remaining);
      r && ((e = r), this.capture(e));
    }
    i[Je(t)] = Je(e);
  }
  parseQueryParam(i) {
    let t = ss(this.remaining);
    if (!t) return;
    this.capture(t);
    let e = '';
    if (this.consumeOptional('=')) {
      let s = ls(this.remaining);
      s && ((e = s), this.capture(e));
    }
    let r = Ir(t),
      o = Ir(e);
    if (i.hasOwnProperty(r)) {
      let s = i[r];
      Array.isArray(s) || ((s = [s]), (i[r] = s)), s.push(o);
    } else i[r] = o;
  }
  parseParens(i) {
    let t = {};
    for (
      this.capture('(');
      !this.consumeOptional(')') && this.remaining.length > 0;

    ) {
      let e = Wn(this.remaining),
        r = this.remaining[e.length];
      if (r !== '/' && r !== ')' && r !== ';') throw new T(4010, !1);
      let o;
      e.indexOf(':') > -1
        ? ((o = e.slice(0, e.indexOf(':'))), this.capture(o), this.capture(':'))
        : i && (o = C);
      let s = this.parseChildren();
      (t[o] = Object.keys(s).length === 1 ? s[C] : new S([], s)),
        this.consumeOptional('//');
    }
    return t;
  }
  peekStartsWith(i) {
    return this.remaining.startsWith(i);
  }
  consumeOptional(i) {
    return this.peekStartsWith(i)
      ? ((this.remaining = this.remaining.substring(i.length)), !0)
      : !1;
  }
  capture(i) {
    if (!this.consumeOptional(i)) throw new T(4011, !1);
  }
};
function Hr(n) {
  return n.segments.length > 0 ? new S([], { [C]: n }) : n;
}
function jr(n) {
  let i = {};
  for (let [e, r] of Object.entries(n.children)) {
    let o = jr(r);
    if (e === C && o.segments.length === 0 && o.hasChildren())
      for (let [s, l] of Object.entries(o.children)) i[s] = l;
    else (o.segments.length > 0 || o.hasChildren()) && (i[e] = o);
  }
  let t = new S(n.segments, i);
  return cs(t);
}
function cs(n) {
  if (n.numberOfChildren === 1 && n.children[C]) {
    let i = n.children[C];
    return new S(n.segments.concat(i.segments), i.children);
  }
  return n;
}
function ge(n) {
  return n instanceof pt;
}
function us(n, i, t = null, e = null) {
  let r = Br(n);
  return $r(r, i, t, e);
}
function Br(n) {
  let i;
  function t(o) {
    let s = {};
    for (let a of o.children) {
      let c = t(a);
      s[a.outlet] = c;
    }
    let l = new S(o.url, s);
    return o === n && (i = l), l;
  }
  let e = t(n.root),
    r = Hr(e);
  return i ?? r;
}
function $r(n, i, t, e) {
  let r = n;
  for (; r.parent; ) r = r.parent;
  if (i.length === 0) return zn(r, r, r, t, e);
  let o = ds(i);
  if (o.toRoot()) return zn(r, r, new S([], {}), t, e);
  let s = hs(o, r, n),
    l = s.processChildren
      ? de(s.segmentGroup, s.index, o.commands)
      : Wr(s.segmentGroup, s.index, o.commands);
  return zn(r, s.segmentGroup, l, t, e);
}
function tn(n) {
  return typeof n == 'object' && n != null && !n.outlets && !n.segmentPath;
}
function me(n) {
  return typeof n == 'object' && n != null && n.outlets;
}
function zn(n, i, t, e, r) {
  let o = {};
  e &&
    Object.entries(e).forEach(([a, c]) => {
      o[a] = Array.isArray(c) ? c.map((d) => `${d}`) : `${c}`;
    });
  let s;
  n === i ? (s = t) : (s = Gr(n, i, t));
  let l = Hr(jr(s));
  return new pt(l, o, r);
}
function Gr(n, i, t) {
  let e = {};
  return (
    Object.entries(n.children).forEach(([r, o]) => {
      o === i ? (e[r] = t) : (e[r] = Gr(o, i, t));
    }),
    new S(n.segments, e)
  );
}
var en = class {
  constructor(i, t, e) {
    if (
      ((this.isAbsolute = i),
      (this.numberOfDoubleDots = t),
      (this.commands = e),
      i && e.length > 0 && tn(e[0]))
    )
      throw new T(4003, !1);
    let r = e.find(me);
    if (r && r !== Nr(e)) throw new T(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/'
    );
  }
};
function ds(n) {
  if (typeof n[0] == 'string' && n.length === 1 && n[0] === '/')
    return new en(!0, 0, n);
  let i = 0,
    t = !1,
    e = n.reduce((r, o, s) => {
      if (typeof o == 'object' && o != null) {
        if (o.outlets) {
          let l = {};
          return (
            Object.entries(o.outlets).forEach(([a, c]) => {
              l[a] = typeof c == 'string' ? c.split('/') : c;
            }),
            [...r, { outlets: l }]
          );
        }
        if (o.segmentPath) return [...r, o.segmentPath];
      }
      return typeof o != 'string'
        ? [...r, o]
        : s === 0
          ? (o.split('/').forEach((l, a) => {
              (a == 0 && l === '.') ||
                (a == 0 && l === ''
                  ? (t = !0)
                  : l === '..'
                    ? i++
                    : l != '' && r.push(l));
            }),
            r)
          : [...r, o];
    }, []);
  return new en(t, i, e);
}
var kt = class {
  constructor(i, t, e) {
    (this.segmentGroup = i), (this.processChildren = t), (this.index = e);
  }
};
function hs(n, i, t) {
  if (n.isAbsolute) return new kt(i, !0, 0);
  if (!t) return new kt(i, !1, NaN);
  if (t.parent === null) return new kt(t, !0, 0);
  let e = tn(n.commands[0]) ? 0 : 1,
    r = t.segments.length - 1 + e;
  return ps(t, r, n.numberOfDoubleDots);
}
function ps(n, i, t) {
  let e = n,
    r = i,
    o = t;
  for (; o > r; ) {
    if (((o -= r), (e = e.parent), !e)) throw new T(4005, !1);
    r = e.segments.length;
  }
  return new kt(e, !1, r - o);
}
function fs(n) {
  return me(n[0]) ? n[0].outlets : { [C]: n };
}
function Wr(n, i, t) {
  if (((n ??= new S([], {})), n.segments.length === 0 && n.hasChildren()))
    return de(n, i, t);
  let e = gs(n, i, t),
    r = t.slice(e.commandIndex);
  if (e.match && e.pathIndex < n.segments.length) {
    let o = new S(n.segments.slice(0, e.pathIndex), {});
    return (
      (o.children[C] = new S(n.segments.slice(e.pathIndex), n.children)),
      de(o, 0, r)
    );
  } else
    return e.match && r.length === 0
      ? new S(n.segments, {})
      : e.match && !n.hasChildren()
        ? Jn(n, i, t)
        : e.match
          ? de(n, 0, r)
          : Jn(n, i, t);
}
function de(n, i, t) {
  if (t.length === 0) return new S(n.segments, {});
  {
    let e = fs(t),
      r = {};
    if (
      Object.keys(e).some((o) => o !== C) &&
      n.children[C] &&
      n.numberOfChildren === 1 &&
      n.children[C].segments.length === 0
    ) {
      let o = de(n.children[C], i, t);
      return new S(n.segments, o.children);
    }
    return (
      Object.entries(e).forEach(([o, s]) => {
        typeof s == 'string' && (s = [s]),
          s !== null && (r[o] = Wr(n.children[o], i, s));
      }),
      Object.entries(n.children).forEach(([o, s]) => {
        e[o] === void 0 && (r[o] = s);
      }),
      new S(n.segments, r)
    );
  }
}
function gs(n, i, t) {
  let e = 0,
    r = i,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; r < n.segments.length; ) {
    if (e >= t.length) return o;
    let s = n.segments[r],
      l = t[e];
    if (me(l)) break;
    let a = `${l}`,
      c = e < t.length - 1 ? t[e + 1] : null;
    if (r > 0 && a === void 0) break;
    if (a && c && typeof c == 'object' && c.outlets === void 0) {
      if (!Rr(a, c, s)) return o;
      e += 2;
    } else {
      if (!Rr(a, {}, s)) return o;
      e++;
    }
    r++;
  }
  return { match: !0, pathIndex: r, commandIndex: e };
}
function Jn(n, i, t) {
  let e = n.segments.slice(0, i),
    r = 0;
  for (; r < t.length; ) {
    let o = t[r];
    if (me(o)) {
      let a = ms(o.outlets);
      return new S(e, a);
    }
    if (r === 0 && tn(t[0])) {
      let a = n.segments[i];
      e.push(new At(a.path, Mr(t[0]))), r++;
      continue;
    }
    let s = me(o) ? o.outlets[C] : `${o}`,
      l = r < t.length - 1 ? t[r + 1] : null;
    s && l && tn(l)
      ? (e.push(new At(s, Mr(l))), (r += 2))
      : (e.push(new At(s, {})), r++);
  }
  return new S(e, {});
}
function ms(n) {
  let i = {};
  return (
    Object.entries(n).forEach(([t, e]) => {
      typeof e == 'string' && (e = [e]),
        e !== null && (i[t] = Jn(new S([], {}), 0, e));
    }),
    i
  );
}
function Mr(n) {
  let i = {};
  return Object.entries(n).forEach(([t, e]) => (i[t] = `${e}`)), i;
}
function Rr(n, i, t) {
  return n == t.path && lt(i, t.parameters);
}
var he = 'imperative',
  k = (function (n) {
    return (
      (n[(n.NavigationStart = 0)] = 'NavigationStart'),
      (n[(n.NavigationEnd = 1)] = 'NavigationEnd'),
      (n[(n.NavigationCancel = 2)] = 'NavigationCancel'),
      (n[(n.NavigationError = 3)] = 'NavigationError'),
      (n[(n.RoutesRecognized = 4)] = 'RoutesRecognized'),
      (n[(n.ResolveStart = 5)] = 'ResolveStart'),
      (n[(n.ResolveEnd = 6)] = 'ResolveEnd'),
      (n[(n.GuardsCheckStart = 7)] = 'GuardsCheckStart'),
      (n[(n.GuardsCheckEnd = 8)] = 'GuardsCheckEnd'),
      (n[(n.RouteConfigLoadStart = 9)] = 'RouteConfigLoadStart'),
      (n[(n.RouteConfigLoadEnd = 10)] = 'RouteConfigLoadEnd'),
      (n[(n.ChildActivationStart = 11)] = 'ChildActivationStart'),
      (n[(n.ChildActivationEnd = 12)] = 'ChildActivationEnd'),
      (n[(n.ActivationStart = 13)] = 'ActivationStart'),
      (n[(n.ActivationEnd = 14)] = 'ActivationEnd'),
      (n[(n.Scroll = 15)] = 'Scroll'),
      (n[(n.NavigationSkipped = 16)] = 'NavigationSkipped'),
      n
    );
  })(k || {}),
  tt = class {
    constructor(i, t) {
      (this.id = i), (this.url = t);
    }
  },
  ve = class extends tt {
    constructor(i, t, e = 'imperative', r = null) {
      super(i, t),
        (this.type = k.NavigationStart),
        (this.navigationTrigger = e),
        (this.restoredState = r);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Mt = class extends tt {
    constructor(i, t, e) {
      super(i, t), (this.urlAfterRedirects = e), (this.type = k.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  K = (function (n) {
    return (
      (n[(n.Redirect = 0)] = 'Redirect'),
      (n[(n.SupersededByNewNavigation = 1)] = 'SupersededByNewNavigation'),
      (n[(n.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
      (n[(n.GuardRejected = 3)] = 'GuardRejected'),
      n
    );
  })(K || {}),
  ti = (function (n) {
    return (
      (n[(n.IgnoredSameUrlNavigation = 0)] = 'IgnoredSameUrlNavigation'),
      (n[(n.IgnoredByUrlHandlingStrategy = 1)] =
        'IgnoredByUrlHandlingStrategy'),
      n
    );
  })(ti || {}),
  ht = class extends tt {
    constructor(i, t, e, r) {
      super(i, t),
        (this.reason = e),
        (this.code = r),
        (this.type = k.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Rt = class extends tt {
    constructor(i, t, e, r) {
      super(i, t),
        (this.reason = e),
        (this.code = r),
        (this.type = k.NavigationSkipped);
    }
  },
  ye = class extends tt {
    constructor(i, t, e, r) {
      super(i, t),
        (this.error = e),
        (this.target = r),
        (this.type = k.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  nn = class extends tt {
    constructor(i, t, e, r) {
      super(i, t),
        (this.urlAfterRedirects = e),
        (this.state = r),
        (this.type = k.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  ei = class extends tt {
    constructor(i, t, e, r) {
      super(i, t),
        (this.urlAfterRedirects = e),
        (this.state = r),
        (this.type = k.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  ni = class extends tt {
    constructor(i, t, e, r, o) {
      super(i, t),
        (this.urlAfterRedirects = e),
        (this.state = r),
        (this.shouldActivate = o),
        (this.type = k.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  ii = class extends tt {
    constructor(i, t, e, r) {
      super(i, t),
        (this.urlAfterRedirects = e),
        (this.state = r),
        (this.type = k.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  ri = class extends tt {
    constructor(i, t, e, r) {
      super(i, t),
        (this.urlAfterRedirects = e),
        (this.state = r),
        (this.type = k.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  oi = class {
    constructor(i) {
      (this.route = i), (this.type = k.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  si = class {
    constructor(i) {
      (this.route = i), (this.type = k.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  ai = class {
    constructor(i) {
      (this.snapshot = i), (this.type = k.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  li = class {
    constructor(i) {
      (this.snapshot = i), (this.type = k.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  ci = class {
    constructor(i) {
      (this.snapshot = i), (this.type = k.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  ui = class {
    constructor(i) {
      (this.snapshot = i), (this.type = k.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  };
var Ce = class {},
  Bt = class {
    constructor(i, t) {
      (this.url = i), (this.navigationBehaviorOptions = t);
    }
  };
function vs(n, i) {
  return (
    n.providers &&
      !n._injector &&
      (n._injector = ir(n.providers, i, `Route: ${n.path}`)),
    n._injector ?? i
  );
}
function nt(n) {
  return n.outlet || C;
}
function ys(n, i) {
  let t = n.filter((e) => nt(e) === i);
  return t.push(...n.filter((e) => nt(e) !== i)), t;
}
function Ae(n) {
  if (!n) return null;
  if (n.routeConfig?._injector) return n.routeConfig._injector;
  for (let i = n.parent; i; i = i.parent) {
    let t = i.routeConfig;
    if (t?._loadedInjector) return t._loadedInjector;
    if (t?._injector) return t._injector;
  }
  return null;
}
var di = class {
    get injector() {
      return Ae(this.route?.snapshot) ?? this.rootInjector;
    }
    set injector(i) {}
    constructor(i) {
      (this.rootInjector = i),
        (this.outlet = null),
        (this.route = null),
        (this.children = new un(this.rootInjector)),
        (this.attachRef = null);
    }
  },
  un = (() => {
    class n {
      constructor(t) {
        (this.rootInjector = t), (this.contexts = new Map());
      }
      onChildOutletCreated(t, e) {
        let r = this.getOrCreateContext(t);
        (r.outlet = e), this.contexts.set(t, r);
      }
      onChildOutletDestroyed(t) {
        let e = this.getContext(t);
        e && ((e.outlet = null), (e.attachRef = null));
      }
      onOutletDeactivated() {
        let t = this.contexts;
        return (this.contexts = new Map()), t;
      }
      onOutletReAttached(t) {
        this.contexts = t;
      }
      getOrCreateContext(t) {
        let e = this.getContext(t);
        return (
          e || ((e = new di(this.rootInjector)), this.contexts.set(t, e)), e
        );
      }
      getContext(t) {
        return this.contexts.get(t) || null;
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)(O(Oe));
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac, providedIn: 'root' });
      }
    }
    return n;
  })(),
  rn = class {
    constructor(i) {
      this._root = i;
    }
    get root() {
      return this._root.value;
    }
    parent(i) {
      let t = this.pathFromRoot(i);
      return t.length > 1 ? t[t.length - 2] : null;
    }
    children(i) {
      let t = hi(i, this._root);
      return t ? t.children.map((e) => e.value) : [];
    }
    firstChild(i) {
      let t = hi(i, this._root);
      return t && t.children.length > 0 ? t.children[0].value : null;
    }
    siblings(i) {
      let t = pi(i, this._root);
      return t.length < 2
        ? []
        : t[t.length - 2].children.map((r) => r.value).filter((r) => r !== i);
    }
    pathFromRoot(i) {
      return pi(i, this._root).map((t) => t.value);
    }
  };
function hi(n, i) {
  if (n === i.value) return i;
  for (let t of i.children) {
    let e = hi(n, t);
    if (e) return e;
  }
  return null;
}
function pi(n, i) {
  if (n === i.value) return [i];
  for (let t of i.children) {
    let e = pi(n, t);
    if (e.length) return e.unshift(i), e;
  }
  return [];
}
var q = class {
  constructor(i, t) {
    (this.value = i), (this.children = t);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function Vt(n) {
  let i = {};
  return n && n.children.forEach((t) => (i[t.value.outlet] = t)), i;
}
var on = class extends rn {
  constructor(i, t) {
    super(i), (this.snapshot = t), wi(this, i);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function zr(n) {
  let i = Cs(n),
    t = new Y([new At('', {})]),
    e = new Y({}),
    r = new Y({}),
    o = new Y({}),
    s = new Y(''),
    l = new Ct(t, e, o, s, r, C, n, i.root);
  return (l.snapshot = i.root), new on(new q(l, []), i);
}
function Cs(n) {
  let i = {},
    t = {},
    e = {},
    r = '',
    o = new Ut([], i, e, r, t, C, n, null, {});
  return new an('', new q(o, []));
}
var Ct = class {
  constructor(i, t, e, r, o, s, l, a) {
    (this.urlSubject = i),
      (this.paramsSubject = t),
      (this.queryParamsSubject = e),
      (this.fragmentSubject = r),
      (this.dataSubject = o),
      (this.outlet = s),
      (this.component = l),
      (this._futureSnapshot = a),
      (this.title = this.dataSubject?.pipe(I((c) => c[Ee])) ?? y(void 0)),
      (this.url = i),
      (this.params = t),
      (this.queryParams = e),
      (this.fragment = r),
      (this.data = o);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(I((i) => jt(i)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(I((i) => jt(i)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function sn(n, i, t = 'emptyOnly') {
  let e,
    { routeConfig: r } = n;
  return (
    i !== null &&
    (t === 'always' ||
      r?.path === '' ||
      (!i.component && !i.routeConfig?.loadComponent))
      ? (e = {
          params: g(g({}, i.params), n.params),
          data: g(g({}, i.data), n.data),
          resolve: g(g(g(g({}, n.data), i.data), r?.data), n._resolvedData),
        })
      : (e = {
          params: g({}, n.params),
          data: g({}, n.data),
          resolve: g(g({}, n.data), n._resolvedData ?? {}),
        }),
    r && Kr(r) && (e.resolve[Ee] = r.title),
    e
  );
}
var Ut = class {
    get title() {
      return this.data?.[Ee];
    }
    constructor(i, t, e, r, o, s, l, a, c) {
      (this.url = i),
        (this.params = t),
        (this.queryParams = e),
        (this.fragment = r),
        (this.data = o),
        (this.outlet = s),
        (this.component = l),
        (this.routeConfig = a),
        (this._resolve = c);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= jt(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= jt(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let i = this.url.map((e) => e.toString()).join('/'),
        t = this.routeConfig ? this.routeConfig.path : '';
      return `Route(url:'${i}', path:'${t}')`;
    }
  },
  an = class extends rn {
    constructor(i, t) {
      super(t), (this.url = i), wi(this, t);
    }
    toString() {
      return qr(this._root);
    }
  };
function wi(n, i) {
  (i.value._routerState = n), i.children.forEach((t) => wi(n, t));
}
function qr(n) {
  let i = n.children.length > 0 ? ` { ${n.children.map(qr).join(', ')} } ` : '';
  return `${n.value}${i}`;
}
function qn(n) {
  if (n.snapshot) {
    let i = n.snapshot,
      t = n._futureSnapshot;
    (n.snapshot = t),
      lt(i.queryParams, t.queryParams) ||
        n.queryParamsSubject.next(t.queryParams),
      i.fragment !== t.fragment && n.fragmentSubject.next(t.fragment),
      lt(i.params, t.params) || n.paramsSubject.next(t.params),
      zo(i.url, t.url) || n.urlSubject.next(t.url),
      lt(i.data, t.data) || n.dataSubject.next(t.data);
  } else
    (n.snapshot = n._futureSnapshot),
      n.dataSubject.next(n._futureSnapshot.data);
}
function fi(n, i) {
  let t = lt(n.params, i.params) && Zo(n.url, i.url),
    e = !n.parent != !i.parent;
  return t && !e && (!n.parent || fi(n.parent, i.parent));
}
function Kr(n) {
  return typeof n.title == 'string' || n.title === null;
}
var Ie = (() => {
    class n {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = C),
          (this.activateEvents = new J()),
          (this.deactivateEvents = new J()),
          (this.attachEvents = new J()),
          (this.detachEvents = new J()),
          (this.parentContexts = m(un)),
          (this.location = m(Ji)),
          (this.changeDetector = m(Lt)),
          (this.inputBinder = m(Ei, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(t) {
        if (t.name) {
          let { firstChange: e, previousValue: r } = t.name;
          if (e) return;
          this.isTrackedInParentContexts(r) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(r)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(t) {
        return this.parentContexts.getContext(t)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let t = this.parentContexts.getContext(this.name);
        t?.route &&
          (t.attachRef
            ? this.attach(t.attachRef, t.route)
            : this.activateWith(t.route, t.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new T(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new T(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new T(4012, !1);
        this.location.detach();
        let t = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(t.instance),
          t
        );
      }
      attach(t, e) {
        (this.activated = t),
          (this._activatedRoute = e),
          this.location.insert(t.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(t.instance);
      }
      deactivate() {
        if (this.activated) {
          let t = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(t);
        }
      }
      activateWith(t, e) {
        if (this.isActivated) throw new T(4013, !1);
        this._activatedRoute = t;
        let r = this.location,
          s = t.snapshot.component,
          l = this.parentContexts.getOrCreateContext(this.name).children,
          a = new gi(t, l, r.injector);
        (this.activated = r.createComponent(s, {
          index: r.length,
          injector: a,
          environmentInjector: e,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)();
        };
      }
      static {
        this.ɵdir = rt({
          type: n,
          selectors: [['router-outlet']],
          inputs: { name: 'name' },
          outputs: {
            activateEvents: 'activate',
            deactivateEvents: 'deactivate',
            attachEvents: 'attach',
            detachEvents: 'detach',
          },
          exportAs: ['outlet'],
          standalone: !0,
          features: [Gi],
        });
      }
    }
    return n;
  })(),
  gi = class n {
    __ngOutletInjector(i) {
      return new n(this.route, this.childContexts, i);
    }
    constructor(i, t, e) {
      (this.route = i), (this.childContexts = t), (this.parent = e);
    }
    get(i, t) {
      return i === Ct
        ? this.route
        : i === un
          ? this.childContexts
          : this.parent.get(i, t);
    }
  },
  Ei = new F('');
function bs(n, i, t) {
  let e = be(n, i._root, t ? t._root : void 0);
  return new on(e, i);
}
function be(n, i, t) {
  if (t && n.shouldReuseRoute(i.value, t.value.snapshot)) {
    let e = t.value;
    e._futureSnapshot = i.value;
    let r = _s(n, i, t);
    return new q(e, r);
  } else {
    if (n.shouldAttach(i.value)) {
      let o = n.retrieve(i.value);
      if (o !== null) {
        let s = o.route;
        return (
          (s.value._futureSnapshot = i.value),
          (s.children = i.children.map((l) => be(n, l))),
          s
        );
      }
    }
    let e = Ss(i.value),
      r = i.children.map((o) => be(n, o));
    return new q(e, r);
  }
}
function _s(n, i, t) {
  return i.children.map((e) => {
    for (let r of t.children)
      if (n.shouldReuseRoute(e.value, r.value.snapshot)) return be(n, e, r);
    return be(n, e);
  });
}
function Ss(n) {
  return new Ct(
    new Y(n.url),
    new Y(n.params),
    new Y(n.queryParams),
    new Y(n.fragment),
    new Y(n.data),
    n.outlet,
    n.component,
    n
  );
}
var _e = class {
    constructor(i, t) {
      (this.redirectTo = i), (this.navigationBehaviorOptions = t);
    }
  },
  Yr = 'ngNavigationCancelingError';
function ln(n, i) {
  let { redirectTo: t, navigationBehaviorOptions: e } = ge(i)
      ? { redirectTo: i, navigationBehaviorOptions: void 0 }
      : i,
    r = Zr(!1, K.Redirect);
  return (r.url = t), (r.navigationBehaviorOptions = e), r;
}
function Zr(n, i) {
  let t = new Error(`NavigationCancelingError: ${n || ''}`);
  return (t[Yr] = !0), (t.cancellationCode = i), t;
}
function ws(n) {
  return Qr(n) && ge(n.url);
}
function Qr(n) {
  return !!n && n[Yr];
}
var Es = (n, i, t, e) =>
    I(
      (r) => (
        new mi(i, r.targetRouterState, r.currentRouterState, t, e).activate(n),
        r
      )
    ),
  mi = class {
    constructor(i, t, e, r, o) {
      (this.routeReuseStrategy = i),
        (this.futureState = t),
        (this.currState = e),
        (this.forwardEvent = r),
        (this.inputBindingEnabled = o);
    }
    activate(i) {
      let t = this.futureState._root,
        e = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(t, e, i),
        qn(this.futureState.root),
        this.activateChildRoutes(t, e, i);
    }
    deactivateChildRoutes(i, t, e) {
      let r = Vt(t);
      i.children.forEach((o) => {
        let s = o.value.outlet;
        this.deactivateRoutes(o, r[s], e), delete r[s];
      }),
        Object.values(r).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, e);
        });
    }
    deactivateRoutes(i, t, e) {
      let r = i.value,
        o = t ? t.value : null;
      if (r === o)
        if (r.component) {
          let s = e.getContext(r.outlet);
          s && this.deactivateChildRoutes(i, t, s.children);
        } else this.deactivateChildRoutes(i, t, e);
      else o && this.deactivateRouteAndItsChildren(t, e);
    }
    deactivateRouteAndItsChildren(i, t) {
      i.value.component &&
      this.routeReuseStrategy.shouldDetach(i.value.snapshot)
        ? this.detachAndStoreRouteSubtree(i, t)
        : this.deactivateRouteAndOutlet(i, t);
    }
    detachAndStoreRouteSubtree(i, t) {
      let e = t.getContext(i.value.outlet),
        r = e && i.value.component ? e.children : t,
        o = Vt(i);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, r);
      if (e && e.outlet) {
        let s = e.outlet.detach(),
          l = e.children.onOutletDeactivated();
        this.routeReuseStrategy.store(i.value.snapshot, {
          componentRef: s,
          route: i,
          contexts: l,
        });
      }
    }
    deactivateRouteAndOutlet(i, t) {
      let e = t.getContext(i.value.outlet),
        r = e && i.value.component ? e.children : t,
        o = Vt(i);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, r);
      e &&
        (e.outlet && (e.outlet.deactivate(), e.children.onOutletDeactivated()),
        (e.attachRef = null),
        (e.route = null));
    }
    activateChildRoutes(i, t, e) {
      let r = Vt(t);
      i.children.forEach((o) => {
        this.activateRoutes(o, r[o.value.outlet], e),
          this.forwardEvent(new ui(o.value.snapshot));
      }),
        i.children.length && this.forwardEvent(new li(i.value.snapshot));
    }
    activateRoutes(i, t, e) {
      let r = i.value,
        o = t ? t.value : null;
      if ((qn(r), r === o))
        if (r.component) {
          let s = e.getOrCreateContext(r.outlet);
          this.activateChildRoutes(i, t, s.children);
        } else this.activateChildRoutes(i, t, e);
      else if (r.component) {
        let s = e.getOrCreateContext(r.outlet);
        if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
          let l = this.routeReuseStrategy.retrieve(r.snapshot);
          this.routeReuseStrategy.store(r.snapshot, null),
            s.children.onOutletReAttached(l.contexts),
            (s.attachRef = l.componentRef),
            (s.route = l.route.value),
            s.outlet && s.outlet.attach(l.componentRef, l.route.value),
            qn(l.route.value),
            this.activateChildRoutes(i, null, s.children);
        } else
          (s.attachRef = null),
            (s.route = r),
            s.outlet && s.outlet.activateWith(r, s.injector),
            this.activateChildRoutes(i, null, s.children);
      } else this.activateChildRoutes(i, null, e);
    }
  },
  cn = class {
    constructor(i) {
      (this.path = i), (this.route = this.path[this.path.length - 1]);
    }
  },
  Ht = class {
    constructor(i, t) {
      (this.component = i), (this.route = t);
    }
  };
function As(n, i, t) {
  let e = n._root,
    r = i ? i._root : null;
  return ce(e, r, t, [e.value]);
}
function Is(n) {
  let i = n.routeConfig ? n.routeConfig.canActivateChild : null;
  return !i || i.length === 0 ? null : { node: n, guards: i };
}
function Gt(n, i) {
  let t = Symbol(),
    e = i.get(n, t);
  return e === t ? (typeof n == 'function' && !Bi(n) ? n : i.get(n)) : e;
}
function ce(
  n,
  i,
  t,
  e,
  r = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let o = Vt(i);
  return (
    n.children.forEach((s) => {
      Ms(s, o[s.value.outlet], t, e.concat([s.value]), r),
        delete o[s.value.outlet];
    }),
    Object.entries(o).forEach(([s, l]) => pe(l, t.getContext(s), r)),
    r
  );
}
function Ms(
  n,
  i,
  t,
  e,
  r = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let o = n.value,
    s = i ? i.value : null,
    l = t ? t.getContext(n.value.outlet) : null;
  if (s && o.routeConfig === s.routeConfig) {
    let a = Rs(s, o, o.routeConfig.runGuardsAndResolvers);
    a
      ? r.canActivateChecks.push(new cn(e))
      : ((o.data = s.data), (o._resolvedData = s._resolvedData)),
      o.component ? ce(n, i, l ? l.children : null, e, r) : ce(n, i, t, e, r),
      a &&
        l &&
        l.outlet &&
        l.outlet.isActivated &&
        r.canDeactivateChecks.push(new Ht(l.outlet.component, s));
  } else
    s && pe(i, l, r),
      r.canActivateChecks.push(new cn(e)),
      o.component
        ? ce(n, null, l ? l.children : null, e, r)
        : ce(n, null, t, e, r);
  return r;
}
function Rs(n, i, t) {
  if (typeof t == 'function') return t(n, i);
  switch (t) {
    case 'pathParamsChange':
      return !It(n.url, i.url);
    case 'pathParamsOrQueryParamsChange':
      return !It(n.url, i.url) || !lt(n.queryParams, i.queryParams);
    case 'always':
      return !0;
    case 'paramsOrQueryParamsChange':
      return !fi(n, i) || !lt(n.queryParams, i.queryParams);
    case 'paramsChange':
    default:
      return !fi(n, i);
  }
}
function pe(n, i, t) {
  let e = Vt(n),
    r = n.value;
  Object.entries(e).forEach(([o, s]) => {
    r.component
      ? i
        ? pe(s, i.children.getContext(o), t)
        : pe(s, null, t)
      : pe(s, i, t);
  }),
    r.component
      ? i && i.outlet && i.outlet.isActivated
        ? t.canDeactivateChecks.push(new Ht(i.outlet.component, r))
        : t.canDeactivateChecks.push(new Ht(null, r))
      : t.canDeactivateChecks.push(new Ht(null, r));
}
function Me(n) {
  return typeof n == 'function';
}
function Ds(n) {
  return typeof n == 'boolean';
}
function Ts(n) {
  return n && Me(n.canLoad);
}
function Os(n) {
  return n && Me(n.canActivate);
}
function xs(n) {
  return n && Me(n.canActivateChild);
}
function Ns(n) {
  return n && Me(n.canDeactivate);
}
function Ls(n) {
  return n && Me(n.canMatch);
}
function Xr(n) {
  return n instanceof Pi || n?.name === 'EmptyError';
}
var Ze = Symbol('INITIAL_VALUE');
function $t() {
  return it((n) =>
    Sn(n.map((i) => i.pipe(Nt(1), Hi(Ze)))).pipe(
      I((i) => {
        for (let t of i)
          if (t !== !0) {
            if (t === Ze) return Ze;
            if (t === !1 || Ps(t)) return t;
          }
        return !0;
      }),
      Ot((i) => i !== Ze),
      Nt(1)
    )
  );
}
function Ps(n) {
  return ge(n) || n instanceof _e;
}
function Fs(n, i) {
  return Z((t) => {
    let {
      targetSnapshot: e,
      currentSnapshot: r,
      guards: { canActivateChecks: o, canDeactivateChecks: s },
    } = t;
    return s.length === 0 && o.length === 0
      ? y(P(g({}, t), { guardsResult: !0 }))
      : Vs(s, e, r, n).pipe(
          Z((l) => (l && Ds(l) ? ks(e, o, n, i) : y(l))),
          I((l) => P(g({}, t), { guardsResult: l }))
        );
  });
}
function Vs(n, i, t, e) {
  return et(n).pipe(
    Z((r) => $s(r.component, r.route, t, i, e)),
    gt((r) => r !== !0, !0)
  );
}
function ks(n, i, t, e) {
  return et(i).pipe(
    qt((r) =>
      Fi(
        Hs(r.route.parent, e),
        Us(r.route, e),
        Bs(n, r.path, t),
        js(n, r.route, t)
      )
    ),
    gt((r) => r !== !0, !0)
  );
}
function Us(n, i) {
  return n !== null && i && i(new ci(n)), y(!0);
}
function Hs(n, i) {
  return n !== null && i && i(new ai(n)), y(!0);
}
function js(n, i, t) {
  let e = i.routeConfig ? i.routeConfig.canActivate : null;
  if (!e || e.length === 0) return y(!0);
  let r = e.map((o) =>
    wn(() => {
      let s = Ae(i) ?? t,
        l = Gt(o, s),
        a = Os(l) ? l.canActivate(i, n) : ut(s, () => l(i, n));
      return bt(a).pipe(gt());
    })
  );
  return y(r).pipe($t());
}
function Bs(n, i, t) {
  let e = i[i.length - 1],
    o = i
      .slice(0, i.length - 1)
      .reverse()
      .map((s) => Is(s))
      .filter((s) => s !== null)
      .map((s) =>
        wn(() => {
          let l = s.guards.map((a) => {
            let c = Ae(s.node) ?? t,
              d = Gt(a, c),
              p = xs(d) ? d.canActivateChild(e, n) : ut(c, () => d(e, n));
            return bt(p).pipe(gt());
          });
          return y(l).pipe($t());
        })
      );
  return y(o).pipe($t());
}
function $s(n, i, t, e, r) {
  let o = i && i.routeConfig ? i.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return y(!0);
  let s = o.map((l) => {
    let a = Ae(i) ?? r,
      c = Gt(l, a),
      d = Ns(c) ? c.canDeactivate(n, i, t, e) : ut(a, () => c(n, i, t, e));
    return bt(d).pipe(gt());
  });
  return y(s).pipe($t());
}
function Gs(n, i, t, e) {
  let r = i.canLoad;
  if (r === void 0 || r.length === 0) return y(!0);
  let o = r.map((s) => {
    let l = Gt(s, n),
      a = Ts(l) ? l.canLoad(i, t) : ut(n, () => l(i, t));
    return bt(a);
  });
  return y(o).pipe($t(), Jr(e));
}
function Jr(n) {
  return Ni(
    U((i) => {
      if (typeof i != 'boolean') throw ln(n, i);
    }),
    I((i) => i === !0)
  );
}
function Ws(n, i, t, e) {
  let r = i.canMatch;
  if (!r || r.length === 0) return y(!0);
  let o = r.map((s) => {
    let l = Gt(s, n),
      a = Ls(l) ? l.canMatch(i, t) : ut(n, () => l(i, t));
    return bt(a);
  });
  return y(o).pipe($t(), Jr(e));
}
var Se = class {
    constructor(i) {
      this.segmentGroup = i || null;
    }
  },
  we = class extends Error {
    constructor(i) {
      super(), (this.urlTree = i);
    }
  };
function Ft(n) {
  return zt(new Se(n));
}
function zs(n) {
  return zt(new T(4e3, !1));
}
function qs(n) {
  return zt(Zr(!1, K.GuardRejected));
}
var vi = class {
    constructor(i, t) {
      (this.urlSerializer = i), (this.urlTree = t);
    }
    lineralizeSegments(i, t) {
      let e = [],
        r = t.root;
      for (;;) {
        if (((e = e.concat(r.segments)), r.numberOfChildren === 0)) return y(e);
        if (r.numberOfChildren > 1 || !r.children[C])
          return zs(`${i.redirectTo}`);
        r = r.children[C];
      }
    }
    applyRedirectCommands(i, t, e, r, o) {
      if (typeof t != 'string') {
        let l = t,
          {
            queryParams: a,
            fragment: c,
            routeConfig: d,
            url: p,
            outlet: v,
            params: E,
            data: A,
            title: L,
          } = r,
          G = ut(o, () =>
            l({
              params: E,
              data: A,
              queryParams: a,
              fragment: c,
              routeConfig: d,
              url: p,
              outlet: v,
              title: L,
            })
          );
        if (G instanceof pt) throw new we(G);
        t = G;
      }
      let s = this.applyRedirectCreateUrlTree(
        t,
        this.urlSerializer.parse(t),
        i,
        e
      );
      if (t[0] === '/') throw new we(s);
      return s;
    }
    applyRedirectCreateUrlTree(i, t, e, r) {
      let o = this.createSegmentGroup(i, t.root, e, r);
      return new pt(
        o,
        this.createQueryParams(t.queryParams, this.urlTree.queryParams),
        t.fragment
      );
    }
    createQueryParams(i, t) {
      let e = {};
      return (
        Object.entries(i).forEach(([r, o]) => {
          if (typeof o == 'string' && o[0] === ':') {
            let l = o.substring(1);
            e[r] = t[l];
          } else e[r] = o;
        }),
        e
      );
    }
    createSegmentGroup(i, t, e, r) {
      let o = this.createSegments(i, t.segments, e, r),
        s = {};
      return (
        Object.entries(t.children).forEach(([l, a]) => {
          s[l] = this.createSegmentGroup(i, a, e, r);
        }),
        new S(o, s)
      );
    }
    createSegments(i, t, e, r) {
      return t.map((o) =>
        o.path[0] === ':' ? this.findPosParam(i, o, r) : this.findOrReturn(o, e)
      );
    }
    findPosParam(i, t, e) {
      let r = e[t.path.substring(1)];
      if (!r) throw new T(4001, !1);
      return r;
    }
    findOrReturn(i, t) {
      let e = 0;
      for (let r of t) {
        if (r.path === i.path) return t.splice(e), r;
        e++;
      }
      return i;
    }
  },
  yi = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function Ks(n, i, t, e, r) {
  let o = to(n, i, t);
  return o.matched
    ? ((e = vs(i, e)),
      Ws(e, i, t, r).pipe(I((s) => (s === !0 ? o : g({}, yi)))))
    : y(o);
}
function to(n, i, t) {
  if (i.path === '**') return Ys(t);
  if (i.path === '')
    return i.pathMatch === 'full' && (n.hasChildren() || t.length > 0)
      ? g({}, yi)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: t,
          parameters: {},
          positionalParamSegments: {},
        };
  let r = (i.matcher || Wo)(t, n, i);
  if (!r) return g({}, yi);
  let o = {};
  Object.entries(r.posParams ?? {}).forEach(([l, a]) => {
    o[l] = a.path;
  });
  let s =
    r.consumed.length > 0
      ? g(g({}, o), r.consumed[r.consumed.length - 1].parameters)
      : o;
  return {
    matched: !0,
    consumedSegments: r.consumed,
    remainingSegments: t.slice(r.consumed.length),
    parameters: s,
    positionalParamSegments: r.posParams ?? {},
  };
}
function Ys(n) {
  return {
    matched: !0,
    parameters: n.length > 0 ? Nr(n).parameters : {},
    consumedSegments: n,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Dr(n, i, t, e) {
  return t.length > 0 && Xs(n, t, e)
    ? {
        segmentGroup: new S(i, Qs(e, new S(t, n.children))),
        slicedSegments: [],
      }
    : t.length === 0 && Js(n, t, e)
      ? {
          segmentGroup: new S(n.segments, Zs(n, t, e, n.children)),
          slicedSegments: t,
        }
      : { segmentGroup: new S(n.segments, n.children), slicedSegments: t };
}
function Zs(n, i, t, e) {
  let r = {};
  for (let o of t)
    if (dn(n, i, o) && !e[nt(o)]) {
      let s = new S([], {});
      r[nt(o)] = s;
    }
  return g(g({}, e), r);
}
function Qs(n, i) {
  let t = {};
  t[C] = i;
  for (let e of n)
    if (e.path === '' && nt(e) !== C) {
      let r = new S([], {});
      t[nt(e)] = r;
    }
  return t;
}
function Xs(n, i, t) {
  return t.some((e) => dn(n, i, e) && nt(e) !== C);
}
function Js(n, i, t) {
  return t.some((e) => dn(n, i, e));
}
function dn(n, i, t) {
  return (n.hasChildren() || i.length > 0) && t.pathMatch === 'full'
    ? !1
    : t.path === '';
}
function ta(n, i, t) {
  return i.length === 0 && !n.children[t];
}
var Ci = class {};
function ea(n, i, t, e, r, o, s = 'emptyOnly') {
  return new bi(n, i, t, e, r, s, o).recognize();
}
var na = 31,
  bi = class {
    constructor(i, t, e, r, o, s, l) {
      (this.injector = i),
        (this.configLoader = t),
        (this.rootComponentType = e),
        (this.config = r),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = s),
        (this.urlSerializer = l),
        (this.applyRedirects = new vi(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(i) {
      return new T(4002, `'${i.segmentGroup}'`);
    }
    recognize() {
      let i = Dr(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(i).pipe(
        I(({ children: t, rootSnapshot: e }) => {
          let r = new q(e, t),
            o = new an('', r),
            s = us(e, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (s.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(s)),
            { state: o, tree: s }
          );
        })
      );
    }
    match(i) {
      let t = new Ut(
        [],
        Object.freeze({}),
        Object.freeze(g({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        C,
        this.rootComponentType,
        null,
        {}
      );
      return this.processSegmentGroup(this.injector, this.config, i, C, t).pipe(
        I((e) => ({ children: e, rootSnapshot: t })),
        xt((e) => {
          if (e instanceof we)
            return (this.urlTree = e.urlTree), this.match(e.urlTree.root);
          throw e instanceof Se ? this.noMatchError(e) : e;
        })
      );
    }
    processSegmentGroup(i, t, e, r, o) {
      return e.segments.length === 0 && e.hasChildren()
        ? this.processChildren(i, t, e, o)
        : this.processSegment(i, t, e, e.segments, r, !0, o).pipe(
            I((s) => (s instanceof q ? [s] : []))
          );
    }
    processChildren(i, t, e, r) {
      let o = [];
      for (let s of Object.keys(e.children))
        s === 'primary' ? o.unshift(s) : o.push(s);
      return et(o).pipe(
        qt((s) => {
          let l = e.children[s],
            a = ys(t, s);
          return this.processSegmentGroup(i, a, l, s, r);
        }),
        Ui((s, l) => (s.push(...l), s)),
        En(null),
        ki(),
        Z((s) => {
          if (s === null) return Ft(e);
          let l = eo(s);
          return ia(l), y(l);
        })
      );
    }
    processSegment(i, t, e, r, o, s, l) {
      return et(t).pipe(
        qt((a) =>
          this.processSegmentAgainstRoute(
            a._injector ?? i,
            t,
            a,
            e,
            r,
            o,
            s,
            l
          ).pipe(
            xt((c) => {
              if (c instanceof Se) return y(null);
              throw c;
            })
          )
        ),
        gt((a) => !!a),
        xt((a) => {
          if (Xr(a)) return ta(e, r, o) ? y(new Ci()) : Ft(e);
          throw a;
        })
      );
    }
    processSegmentAgainstRoute(i, t, e, r, o, s, l, a) {
      return nt(e) !== s && (s === C || !dn(r, o, e))
        ? Ft(r)
        : e.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(i, r, e, o, s, a)
          : this.allowRedirects && l
            ? this.expandSegmentAgainstRouteUsingRedirect(i, r, t, e, o, s, a)
            : Ft(r);
    }
    expandSegmentAgainstRouteUsingRedirect(i, t, e, r, o, s, l) {
      let {
        matched: a,
        parameters: c,
        consumedSegments: d,
        positionalParamSegments: p,
        remainingSegments: v,
      } = to(t, r, o);
      if (!a) return Ft(t);
      typeof r.redirectTo == 'string' &&
        r.redirectTo[0] === '/' &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > na && (this.allowRedirects = !1));
      let E = new Ut(
          o,
          c,
          Object.freeze(g({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          Tr(r),
          nt(r),
          r.component ?? r._loadedComponent ?? null,
          r,
          Or(r)
        ),
        A = sn(E, l, this.paramsInheritanceStrategy);
      (E.params = Object.freeze(A.params)), (E.data = Object.freeze(A.data));
      let L = this.applyRedirects.applyRedirectCommands(
        d,
        r.redirectTo,
        p,
        E,
        i
      );
      return this.applyRedirects
        .lineralizeSegments(r, L)
        .pipe(Z((G) => this.processSegment(i, e, t, G.concat(v), s, !1, l)));
    }
    matchSegmentAgainstRoute(i, t, e, r, o, s) {
      let l = Ks(t, e, r, i, this.urlSerializer);
      return (
        e.path === '**' && (t.children = {}),
        l.pipe(
          it((a) =>
            a.matched
              ? ((i = e._injector ?? i),
                this.getChildConfig(i, e, r).pipe(
                  it(({ routes: c }) => {
                    let d = e._loadedInjector ?? i,
                      {
                        parameters: p,
                        consumedSegments: v,
                        remainingSegments: E,
                      } = a,
                      A = new Ut(
                        v,
                        p,
                        Object.freeze(g({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        Tr(e),
                        nt(e),
                        e.component ?? e._loadedComponent ?? null,
                        e,
                        Or(e)
                      ),
                      L = sn(A, s, this.paramsInheritanceStrategy);
                    (A.params = Object.freeze(L.params)),
                      (A.data = Object.freeze(L.data));
                    let { segmentGroup: G, slicedSegments: St } = Dr(
                      t,
                      v,
                      E,
                      c
                    );
                    if (St.length === 0 && G.hasChildren())
                      return this.processChildren(d, c, G, A).pipe(
                        I((De) => new q(A, De))
                      );
                    if (c.length === 0 && St.length === 0)
                      return y(new q(A, []));
                    let Tt = nt(e) === o;
                    return this.processSegment(
                      d,
                      c,
                      G,
                      St,
                      Tt ? C : o,
                      !0,
                      A
                    ).pipe(I((De) => new q(A, De instanceof q ? [De] : [])));
                  })
                ))
              : Ft(t)
          )
        )
      );
    }
    getChildConfig(i, t, e) {
      return t.children
        ? y({ routes: t.children, injector: i })
        : t.loadChildren
          ? t._loadedRoutes !== void 0
            ? y({ routes: t._loadedRoutes, injector: t._loadedInjector })
            : Gs(i, t, e, this.urlSerializer).pipe(
                Z((r) =>
                  r
                    ? this.configLoader.loadChildren(i, t).pipe(
                        U((o) => {
                          (t._loadedRoutes = o.routes),
                            (t._loadedInjector = o.injector);
                        })
                      )
                    : qs(t)
                )
              )
          : y({ routes: [], injector: i });
    }
  };
function ia(n) {
  n.sort((i, t) =>
    i.value.outlet === C
      ? -1
      : t.value.outlet === C
        ? 1
        : i.value.outlet.localeCompare(t.value.outlet)
  );
}
function ra(n) {
  let i = n.value.routeConfig;
  return i && i.path === '';
}
function eo(n) {
  let i = [],
    t = new Set();
  for (let e of n) {
    if (!ra(e)) {
      i.push(e);
      continue;
    }
    let r = i.find((o) => e.value.routeConfig === o.value.routeConfig);
    r !== void 0 ? (r.children.push(...e.children), t.add(r)) : i.push(e);
  }
  for (let e of t) {
    let r = eo(e.children);
    i.push(new q(e.value, r));
  }
  return i.filter((e) => !t.has(e));
}
function Tr(n) {
  return n.data || {};
}
function Or(n) {
  return n.resolve || {};
}
function oa(n, i, t, e, r, o) {
  return Z((s) =>
    ea(n, i, t, e, s.extractedUrl, r, o).pipe(
      I(({ state: l, tree: a }) =>
        P(g({}, s), { targetSnapshot: l, urlAfterRedirects: a })
      )
    )
  );
}
function sa(n, i) {
  return Z((t) => {
    let {
      targetSnapshot: e,
      guards: { canActivateChecks: r },
    } = t;
    if (!r.length) return y(t);
    let o = new Set(r.map((a) => a.route)),
      s = new Set();
    for (let a of o) if (!s.has(a)) for (let c of no(a)) s.add(c);
    let l = 0;
    return et(s).pipe(
      qt((a) =>
        o.has(a)
          ? aa(a, e, n, i)
          : ((a.data = sn(a, a.parent, n).resolve), y(void 0))
      ),
      U(() => l++),
      An(1),
      Z((a) => (l === s.size ? y(t) : ft))
    );
  });
}
function no(n) {
  let i = n.children.map((t) => no(t)).flat();
  return [n, ...i];
}
function aa(n, i, t, e) {
  let r = n.routeConfig,
    o = n._resolve;
  return (
    r?.title !== void 0 && !Kr(r) && (o[Ee] = r.title),
    la(o, n, i, e).pipe(
      I(
        (s) => (
          (n._resolvedData = s), (n.data = sn(n, n.parent, t).resolve), null
        )
      )
    )
  );
}
function la(n, i, t, e) {
  let r = Zn(n);
  if (r.length === 0) return y({});
  let o = {};
  return et(r).pipe(
    Z((s) =>
      ca(n[s], i, t, e).pipe(
        gt(),
        U((l) => {
          if (l instanceof _e) throw ln(new fe(), l);
          o[s] = l;
        })
      )
    ),
    An(1),
    Vi(o),
    xt((s) => (Xr(s) ? ft : zt(s)))
  );
}
function ca(n, i, t, e) {
  let r = Ae(i) ?? e,
    o = Gt(n, r),
    s = o.resolve ? o.resolve(i, t) : ut(r, () => o(i, t));
  return bt(s);
}
function Kn(n) {
  return it((i) => {
    let t = n(i);
    return t ? et(t).pipe(I(() => i)) : y(i);
  });
}
var io = (() => {
    class n {
      buildTitle(t) {
        let e,
          r = t.root;
        for (; r !== void 0; )
          (e = this.getResolvedTitleForRoute(r) ?? e),
            (r = r.children.find((o) => o.outlet === C));
        return e;
      }
      getResolvedTitleForRoute(t) {
        return t.data[Ee];
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)();
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: () => m(ua), providedIn: 'root' });
      }
    }
    return n;
  })(),
  ua = (() => {
    class n extends io {
      constructor(t) {
        super(), (this.title = t);
      }
      updateTitle(t) {
        let e = this.buildTitle(t);
        e !== void 0 && this.title.setTitle(e);
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)(O(Er));
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac, providedIn: 'root' });
      }
    }
    return n;
  })(),
  Ai = new F('', { providedIn: 'root', factory: () => ({}) }),
  da = (() => {
    class n {
      static {
        this.ɵfac = function (e) {
          return new (e || n)();
        };
      }
      static {
        this.ɵcmp = N({
          type: n,
          selectors: [['ng-component']],
          standalone: !0,
          features: [V],
          decls: 1,
          vars: 0,
          template: function (e, r) {
            e & 1 && b(0, 'router-outlet');
          },
          dependencies: [Ie],
          encapsulation: 2,
        });
      }
    }
    return n;
  })();
function Ii(n) {
  let i = n.children && n.children.map(Ii),
    t = i ? P(g({}, n), { children: i }) : g({}, n);
  return (
    !t.component &&
      !t.loadComponent &&
      (i || t.loadChildren) &&
      t.outlet &&
      t.outlet !== C &&
      (t.component = da),
    t
  );
}
var Mi = new F(''),
  ha = (() => {
    class n {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = m(Pn));
      }
      loadComponent(t) {
        if (this.componentLoaders.get(t)) return this.componentLoaders.get(t);
        if (t._loadedComponent) return y(t._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(t);
        let e = bt(t.loadComponent()).pipe(
            I(ro),
            U((o) => {
              this.onLoadEndListener && this.onLoadEndListener(t),
                (t._loadedComponent = o);
            }),
            Te(() => {
              this.componentLoaders.delete(t);
            })
          ),
          r = new _n(e, () => new ct()).pipe(bn());
        return this.componentLoaders.set(t, r), r;
      }
      loadChildren(t, e) {
        if (this.childrenLoaders.get(e)) return this.childrenLoaders.get(e);
        if (e._loadedRoutes)
          return y({ routes: e._loadedRoutes, injector: e._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(e);
        let o = pa(e, this.compiler, t, this.onLoadEndListener).pipe(
            Te(() => {
              this.childrenLoaders.delete(e);
            })
          ),
          s = new _n(o, () => new ct()).pipe(bn());
        return this.childrenLoaders.set(e, s), s;
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)();
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac, providedIn: 'root' });
      }
    }
    return n;
  })();
function pa(n, i, t, e) {
  return bt(n.loadChildren()).pipe(
    I(ro),
    Z((r) =>
      r instanceof nr || Array.isArray(r) ? y(r) : et(i.compileModuleAsync(r))
    ),
    I((r) => {
      e && e(n);
      let o,
        s,
        l = !1;
      return (
        Array.isArray(r)
          ? ((s = r), (l = !0))
          : ((o = r.create(t).injector),
            (s = o.get(Mi, [], { optional: !0, self: !0 }).flat())),
        { routes: s.map(Ii), injector: o }
      );
    })
  );
}
function fa(n) {
  return n && typeof n == 'object' && 'default' in n;
}
function ro(n) {
  return fa(n) ? n.default : n;
}
var Ri = (() => {
    class n {
      static {
        this.ɵfac = function (e) {
          return new (e || n)();
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: () => m(ga), providedIn: 'root' });
      }
    }
    return n;
  })(),
  ga = (() => {
    class n {
      shouldProcessUrl(t) {
        return !0;
      }
      extract(t) {
        return t;
      }
      merge(t, e) {
        return t;
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)();
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac, providedIn: 'root' });
      }
    }
    return n;
  })(),
  ma = new F('');
var va = new F(''),
  ya = (() => {
    class n {
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      constructor() {
        (this.currentNavigation = null),
          (this.currentTransition = null),
          (this.lastSuccessfulNavigation = null),
          (this.events = new ct()),
          (this.transitionAbortSubject = new ct()),
          (this.configLoader = m(ha)),
          (this.environmentInjector = m(Oe)),
          (this.urlSerializer = m(Si)),
          (this.rootContexts = m(un)),
          (this.location = m(je)),
          (this.inputBindingEnabled = m(Ei, { optional: !0 }) !== null),
          (this.titleStrategy = m(io)),
          (this.options = m(Ai, { optional: !0 }) || {}),
          (this.paramsInheritanceStrategy =
            this.options.paramsInheritanceStrategy || 'emptyOnly'),
          (this.urlHandlingStrategy = m(Ri)),
          (this.createViewTransition = m(ma, { optional: !0 })),
          (this.navigationErrorHandler = m(va, { optional: !0 })),
          (this.navigationId = 0),
          (this.afterPreactivation = () => y(void 0)),
          (this.rootComponentType = null);
        let t = (r) => this.events.next(new oi(r)),
          e = (r) => this.events.next(new si(r));
        (this.configLoader.onLoadEndListener = e),
          (this.configLoader.onLoadStartListener = t);
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(t) {
        let e = ++this.navigationId;
        this.transitions?.next(
          P(g(g({}, this.transitions.value), t), { id: e })
        );
      }
      setupNavigations(t, e, r) {
        return (
          (this.transitions = new Y({
            id: 0,
            currentUrlTree: e,
            currentRawUrl: e,
            extractedUrl: this.urlHandlingStrategy.extract(e),
            urlAfterRedirects: this.urlHandlingStrategy.extract(e),
            rawUrl: e,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: he,
            restoredState: null,
            currentSnapshot: r.snapshot,
            targetSnapshot: null,
            currentRouterState: r,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            Ot((o) => o.id !== 0),
            I((o) =>
              P(g({}, o), {
                extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl),
              })
            ),
            it((o) => {
              let s = !1,
                l = !1;
              return y(o).pipe(
                it((a) => {
                  if (this.navigationId > o.id)
                    return (
                      this.cancelNavigationTransition(
                        o,
                        '',
                        K.SupersededByNewNavigation
                      ),
                      ft
                    );
                  (this.currentTransition = o),
                    (this.currentNavigation = {
                      id: a.id,
                      initialUrl: a.rawUrl,
                      extractedUrl: a.extractedUrl,
                      targetBrowserUrl:
                        typeof a.extras.browserUrl == 'string'
                          ? this.urlSerializer.parse(a.extras.browserUrl)
                          : a.extras.browserUrl,
                      trigger: a.source,
                      extras: a.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? P(g({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let c =
                      !t.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    d = a.extras.onSameUrlNavigation ?? t.onSameUrlNavigation;
                  if (!c && d !== 'reload') {
                    let p = '';
                    return (
                      this.events.next(
                        new Rt(
                          a.id,
                          this.urlSerializer.serialize(a.rawUrl),
                          p,
                          ti.IgnoredSameUrlNavigation
                        )
                      ),
                      a.resolve(!1),
                      ft
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))
                    return y(a).pipe(
                      it((p) => {
                        let v = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new ve(
                              p.id,
                              this.urlSerializer.serialize(p.extractedUrl),
                              p.source,
                              p.restoredState
                            )
                          ),
                          v !== this.transitions?.getValue()
                            ? ft
                            : Promise.resolve(p)
                        );
                      }),
                      oa(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        t.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy
                      ),
                      U((p) => {
                        (o.targetSnapshot = p.targetSnapshot),
                          (o.urlAfterRedirects = p.urlAfterRedirects),
                          (this.currentNavigation = P(
                            g({}, this.currentNavigation),
                            { finalUrl: p.urlAfterRedirects }
                          ));
                        let v = new nn(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          this.urlSerializer.serialize(p.urlAfterRedirects),
                          p.targetSnapshot
                        );
                        this.events.next(v);
                      })
                    );
                  if (
                    c &&
                    this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)
                  ) {
                    let {
                        id: p,
                        extractedUrl: v,
                        source: E,
                        restoredState: A,
                        extras: L,
                      } = a,
                      G = new ve(p, this.urlSerializer.serialize(v), E, A);
                    this.events.next(G);
                    let St = zr(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = o =
                        P(g({}, a), {
                          targetSnapshot: St,
                          urlAfterRedirects: v,
                          extras: P(g({}, L), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = v),
                      y(o)
                    );
                  } else {
                    let p = '';
                    return (
                      this.events.next(
                        new Rt(
                          a.id,
                          this.urlSerializer.serialize(a.extractedUrl),
                          p,
                          ti.IgnoredByUrlHandlingStrategy
                        )
                      ),
                      a.resolve(!1),
                      ft
                    );
                  }
                }),
                U((a) => {
                  let c = new ei(
                    a.id,
                    this.urlSerializer.serialize(a.extractedUrl),
                    this.urlSerializer.serialize(a.urlAfterRedirects),
                    a.targetSnapshot
                  );
                  this.events.next(c);
                }),
                I(
                  (a) => (
                    (this.currentTransition = o =
                      P(g({}, a), {
                        guards: As(
                          a.targetSnapshot,
                          a.currentSnapshot,
                          this.rootContexts
                        ),
                      })),
                    o
                  )
                ),
                Fs(this.environmentInjector, (a) => this.events.next(a)),
                U((a) => {
                  if (
                    ((o.guardsResult = a.guardsResult),
                    a.guardsResult && typeof a.guardsResult != 'boolean')
                  )
                    throw ln(this.urlSerializer, a.guardsResult);
                  let c = new ni(
                    a.id,
                    this.urlSerializer.serialize(a.extractedUrl),
                    this.urlSerializer.serialize(a.urlAfterRedirects),
                    a.targetSnapshot,
                    !!a.guardsResult
                  );
                  this.events.next(c);
                }),
                Ot((a) =>
                  a.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(a, '', K.GuardRejected),
                      !1)
                ),
                Kn((a) => {
                  if (a.guards.canActivateChecks.length)
                    return y(a).pipe(
                      U((c) => {
                        let d = new ii(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          this.urlSerializer.serialize(c.urlAfterRedirects),
                          c.targetSnapshot
                        );
                        this.events.next(d);
                      }),
                      it((c) => {
                        let d = !1;
                        return y(c).pipe(
                          sa(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector
                          ),
                          U({
                            next: () => (d = !0),
                            complete: () => {
                              d ||
                                this.cancelNavigationTransition(
                                  c,
                                  '',
                                  K.NoDataFromResolver
                                );
                            },
                          })
                        );
                      }),
                      U((c) => {
                        let d = new ri(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          this.urlSerializer.serialize(c.urlAfterRedirects),
                          c.targetSnapshot
                        );
                        this.events.next(d);
                      })
                    );
                }),
                Kn((a) => {
                  let c = (d) => {
                    let p = [];
                    d.routeConfig?.loadComponent &&
                      !d.routeConfig._loadedComponent &&
                      p.push(
                        this.configLoader.loadComponent(d.routeConfig).pipe(
                          U((v) => {
                            d.component = v;
                          }),
                          I(() => {})
                        )
                      );
                    for (let v of d.children) p.push(...c(v));
                    return p;
                  };
                  return Sn(c(a.targetSnapshot.root)).pipe(En(null), Nt(1));
                }),
                Kn(() => this.afterPreactivation()),
                it(() => {
                  let { currentSnapshot: a, targetSnapshot: c } = o,
                    d = this.createViewTransition?.(
                      this.environmentInjector,
                      a.root,
                      c.root
                    );
                  return d ? et(d).pipe(I(() => o)) : y(o);
                }),
                I((a) => {
                  let c = bs(
                    t.routeReuseStrategy,
                    a.targetSnapshot,
                    a.currentRouterState
                  );
                  return (
                    (this.currentTransition = o =
                      P(g({}, a), { targetRouterState: c })),
                    (this.currentNavigation.targetRouterState = c),
                    o
                  );
                }),
                U(() => {
                  this.events.next(new Ce());
                }),
                Es(
                  this.rootContexts,
                  t.routeReuseStrategy,
                  (a) => this.events.next(a),
                  this.inputBindingEnabled
                ),
                Nt(1),
                U({
                  next: (a) => {
                    (s = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new Mt(
                          a.id,
                          this.urlSerializer.serialize(a.extractedUrl),
                          this.urlSerializer.serialize(a.urlAfterRedirects)
                        )
                      ),
                      this.titleStrategy?.updateTitle(
                        a.targetRouterState.snapshot
                      ),
                      a.resolve(!0);
                  },
                  complete: () => {
                    s = !0;
                  },
                }),
                ji(
                  this.transitionAbortSubject.pipe(
                    U((a) => {
                      throw a;
                    })
                  )
                ),
                Te(() => {
                  !s &&
                    !l &&
                    this.cancelNavigationTransition(
                      o,
                      '',
                      K.SupersededByNewNavigation
                    ),
                    this.currentTransition?.id === o.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                xt((a) => {
                  if (((l = !0), Qr(a)))
                    this.events.next(
                      new ht(
                        o.id,
                        this.urlSerializer.serialize(o.extractedUrl),
                        a.message,
                        a.cancellationCode
                      )
                    ),
                      ws(a)
                        ? this.events.next(
                            new Bt(a.url, a.navigationBehaviorOptions)
                          )
                        : o.resolve(!1);
                  else {
                    let c = new ye(
                      o.id,
                      this.urlSerializer.serialize(o.extractedUrl),
                      a,
                      o.targetSnapshot ?? void 0
                    );
                    try {
                      let d = ut(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(c)
                      );
                      if (d instanceof _e) {
                        let { message: p, cancellationCode: v } = ln(
                          this.urlSerializer,
                          d
                        );
                        this.events.next(
                          new ht(
                            o.id,
                            this.urlSerializer.serialize(o.extractedUrl),
                            p,
                            v
                          )
                        ),
                          this.events.next(
                            new Bt(d.redirectTo, d.navigationBehaviorOptions)
                          );
                      } else {
                        this.events.next(c);
                        let p = t.errorHandler(a);
                        o.resolve(!!p);
                      }
                    } catch (d) {
                      this.options.resolveNavigationPromiseOnError
                        ? o.resolve(!1)
                        : o.reject(d);
                    }
                  }
                  return ft;
                })
              );
            })
          )
        );
      }
      cancelNavigationTransition(t, e, r) {
        let o = new ht(
          t.id,
          this.urlSerializer.serialize(t.extractedUrl),
          e,
          r
        );
        this.events.next(o), t.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let t = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0))
          ),
          e =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          t.toString() !== e?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)();
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac, providedIn: 'root' });
      }
    }
    return n;
  })();
function Ca(n) {
  return n !== he;
}
var ba = (() => {
    class n {
      static {
        this.ɵfac = function (e) {
          return new (e || n)();
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: () => m(_a), providedIn: 'root' });
      }
    }
    return n;
  })(),
  _i = class {
    shouldDetach(i) {
      return !1;
    }
    store(i, t) {}
    shouldAttach(i) {
      return !1;
    }
    retrieve(i) {
      return null;
    }
    shouldReuseRoute(i, t) {
      return i.routeConfig === t.routeConfig;
    }
  },
  _a = (() => {
    class n extends _i {
      static {
        this.ɵfac = (() => {
          let t;
          return function (r) {
            return (t || (t = Zt(n)))(r || n);
          };
        })();
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac, providedIn: 'root' });
      }
    }
    return n;
  })(),
  oo = (() => {
    class n {
      static {
        this.ɵfac = function (e) {
          return new (e || n)();
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: () => m(Sa), providedIn: 'root' });
      }
    }
    return n;
  })(),
  Sa = (() => {
    class n extends oo {
      constructor() {
        super(...arguments),
          (this.location = m(je)),
          (this.urlSerializer = m(Si)),
          (this.options = m(Ai, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || 'replace'),
          (this.urlHandlingStrategy = m(Ri)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || 'deferred'),
          (this.currentUrlTree = new pt()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = zr(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== 'computed'
          ? this.currentPageId
          : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(t) {
        return this.location.subscribe((e) => {
          e.type === 'popstate' && t(e.url, e.state);
        });
      }
      handleRouterEvent(t, e) {
        if (t instanceof ve) this.stateMemento = this.createStateMemento();
        else if (t instanceof Rt) this.rawUrlTree = e.initialUrl;
        else if (t instanceof nn) {
          if (
            this.urlUpdateStrategy === 'eager' &&
            !e.extras.skipLocationChange
          ) {
            let r = this.urlHandlingStrategy.merge(e.finalUrl, e.initialUrl);
            this.setBrowserUrl(e.targetBrowserUrl ?? r, e);
          }
        } else
          t instanceof Ce
            ? ((this.currentUrlTree = e.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                e.finalUrl,
                e.initialUrl
              )),
              (this.routerState = e.targetRouterState),
              this.urlUpdateStrategy === 'deferred' &&
                !e.extras.skipLocationChange &&
                this.setBrowserUrl(e.targetBrowserUrl ?? this.rawUrlTree, e))
            : t instanceof ht &&
                (t.code === K.GuardRejected || t.code === K.NoDataFromResolver)
              ? this.restoreHistory(e)
              : t instanceof ye
                ? this.restoreHistory(e, !0)
                : t instanceof Mt &&
                  ((this.lastSuccessfulId = t.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(t, e) {
        let r = t instanceof pt ? this.urlSerializer.serialize(t) : t;
        if (this.location.isCurrentPathEqualTo(r) || e.extras.replaceUrl) {
          let o = this.browserPageId,
            s = g(g({}, e.extras.state), this.generateNgRouterState(e.id, o));
          this.location.replaceState(r, '', s);
        } else {
          let o = g(
            g({}, e.extras.state),
            this.generateNgRouterState(e.id, this.browserPageId + 1)
          );
          this.location.go(r, '', o);
        }
      }
      restoreHistory(t, e = !1) {
        if (this.canceledNavigationResolution === 'computed') {
          let r = this.browserPageId,
            o = this.currentPageId - r;
          o !== 0
            ? this.location.historyGo(o)
            : this.currentUrlTree === t.finalUrl &&
              o === 0 &&
              (this.resetState(t), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === 'replace' &&
            (e && this.resetState(t), this.resetUrlToCurrentUrlTree());
      }
      resetState(t) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            t.finalUrl ?? this.rawUrlTree
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          '',
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
        );
      }
      generateNgRouterState(t, e) {
        return this.canceledNavigationResolution === 'computed'
          ? { navigationId: t, ɵrouterPageId: e }
          : { navigationId: t };
      }
      static {
        this.ɵfac = (() => {
          let t;
          return function (r) {
            return (t || (t = Zt(n)))(r || n);
          };
        })();
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac, providedIn: 'root' });
      }
    }
    return n;
  })(),
  ue = (function (n) {
    return (
      (n[(n.COMPLETE = 0)] = 'COMPLETE'),
      (n[(n.FAILED = 1)] = 'FAILED'),
      (n[(n.REDIRECTING = 2)] = 'REDIRECTING'),
      n
    );
  })(ue || {});
function wa(n, i) {
  n.events
    .pipe(
      Ot(
        (t) =>
          t instanceof Mt ||
          t instanceof ht ||
          t instanceof ye ||
          t instanceof Rt
      ),
      I((t) =>
        t instanceof Mt || t instanceof Rt
          ? ue.COMPLETE
          : (
                t instanceof ht
                  ? t.code === K.Redirect ||
                    t.code === K.SupersededByNewNavigation
                  : !1
              )
            ? ue.REDIRECTING
            : ue.FAILED
      ),
      Ot((t) => t !== ue.REDIRECTING),
      Nt(1)
    )
    .subscribe(() => {
      i();
    });
}
function Ea(n) {
  throw n;
}
var Aa = {
    paths: 'exact',
    fragment: 'ignored',
    matrixParams: 'ignored',
    queryParams: 'exact',
  },
  Ia = {
    paths: 'subset',
    fragment: 'ignored',
    matrixParams: 'ignored',
    queryParams: 'subset',
  },
  so = (() => {
    class n {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.console = m(Ue)),
          (this.stateManager = m(oo)),
          (this.options = m(Ai, { optional: !0 }) || {}),
          (this.pendingTasks = m(zi)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || 'deferred'),
          (this.navigationTransitions = m(ya)),
          (this.urlSerializer = m(Si)),
          (this.location = m(je)),
          (this.urlHandlingStrategy = m(Ri)),
          (this._events = new ct()),
          (this.errorHandler = this.options.errorHandler || Ea),
          (this.navigated = !1),
          (this.routeReuseStrategy = m(ba)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || 'ignore'),
          (this.config = m(Mi, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!m(Ei, { optional: !0 })),
          (this.eventsSubscription = new xi()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (t) => {
                this.console.warn(t);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let t = this.navigationTransitions.events.subscribe((e) => {
          try {
            let r = this.navigationTransitions.currentTransition,
              o = this.navigationTransitions.currentNavigation;
            if (r !== null && o !== null) {
              if (
                (this.stateManager.handleRouterEvent(e, o),
                e instanceof ht &&
                  e.code !== K.Redirect &&
                  e.code !== K.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (e instanceof Mt) this.navigated = !0;
              else if (e instanceof Bt) {
                let s = e.navigationBehaviorOptions,
                  l = this.urlHandlingStrategy.merge(e.url, r.currentRawUrl),
                  a = g(
                    {
                      browserUrl: r.extras.browserUrl,
                      info: r.extras.info,
                      skipLocationChange: r.extras.skipLocationChange,
                      replaceUrl:
                        r.extras.replaceUrl ||
                        this.urlUpdateStrategy === 'eager' ||
                        Ca(r.source),
                    },
                    s
                  );
                this.scheduleNavigation(l, he, null, a, {
                  resolve: r.resolve,
                  reject: r.reject,
                  promise: r.promise,
                });
              }
            }
            Ra(e) && this._events.next(e);
          } catch (r) {
            this.navigationTransitions.transitionAbortSubject.next(r);
          }
        });
        this.eventsSubscription.add(t);
      }
      resetRootComponentType(t) {
        (this.routerState.root.component = t),
          (this.navigationTransitions.rootComponentType = t);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              he,
              this.stateManager.restoredState()
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (t, e) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(t, 'popstate', e);
              }, 0);
            }
          );
      }
      navigateToSyncWithBrowser(t, e, r) {
        let o = { replaceUrl: !0 },
          s = r?.navigationId ? r : null;
        if (r) {
          let a = g({}, r);
          delete a.navigationId,
            delete a.ɵrouterPageId,
            Object.keys(a).length !== 0 && (o.state = a);
        }
        let l = this.parseUrl(t);
        this.scheduleNavigation(l, e, s, o);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(t) {
        (this.config = t.map(Ii)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(t, e = {}) {
        let {
            relativeTo: r,
            queryParams: o,
            fragment: s,
            queryParamsHandling: l,
            preserveFragment: a,
          } = e,
          c = a ? this.currentUrlTree.fragment : s,
          d = null;
        switch (l ?? this.options.defaultQueryParamsHandling) {
          case 'merge':
            d = g(g({}, this.currentUrlTree.queryParams), o);
            break;
          case 'preserve':
            d = this.currentUrlTree.queryParams;
            break;
          default:
            d = o || null;
        }
        d !== null && (d = this.removeEmptyProps(d));
        let p;
        try {
          let v = r ? r.snapshot : this.routerState.snapshot.root;
          p = Br(v);
        } catch {
          (typeof t[0] != 'string' || t[0][0] !== '/') && (t = []),
            (p = this.currentUrlTree.root);
        }
        return $r(p, t, d, c ?? null);
      }
      navigateByUrl(t, e = { skipLocationChange: !1 }) {
        let r = ge(t) ? t : this.parseUrl(t),
          o = this.urlHandlingStrategy.merge(r, this.rawUrlTree);
        return this.scheduleNavigation(o, he, null, e);
      }
      navigate(t, e = { skipLocationChange: !1 }) {
        return Ma(t), this.navigateByUrl(this.createUrlTree(t, e), e);
      }
      serializeUrl(t) {
        return this.urlSerializer.serialize(t);
      }
      parseUrl(t) {
        try {
          return this.urlSerializer.parse(t);
        } catch {
          return this.urlSerializer.parse('/');
        }
      }
      isActive(t, e) {
        let r;
        if (
          (e === !0 ? (r = g({}, Aa)) : e === !1 ? (r = g({}, Ia)) : (r = e),
          ge(t))
        )
          return Ar(this.currentUrlTree, t, r);
        let o = this.parseUrl(t);
        return Ar(this.currentUrlTree, o, r);
      }
      removeEmptyProps(t) {
        return Object.entries(t).reduce(
          (e, [r, o]) => (o != null && (e[r] = o), e),
          {}
        );
      }
      scheduleNavigation(t, e, r, o, s) {
        if (this.disposed) return Promise.resolve(!1);
        let l, a, c;
        s
          ? ((l = s.resolve), (a = s.reject), (c = s.promise))
          : (c = new Promise((p, v) => {
              (l = p), (a = v);
            }));
        let d = this.pendingTasks.add();
        return (
          wa(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(d));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: e,
            restoredState: r,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: t,
            extras: o,
            resolve: l,
            reject: a,
            promise: c,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          c.catch((p) => Promise.reject(p))
        );
      }
      static {
        this.ɵfac = function (e) {
          return new (e || n)();
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac, providedIn: 'root' });
      }
    }
    return n;
  })();
function Ma(n) {
  for (let i = 0; i < n.length; i++) if (n[i] == null) throw new T(4008, !1);
}
function Ra(n) {
  return !(n instanceof Ce) && !(n instanceof Bt);
}
var Da = new F('');
function ao(n, ...i) {
  return Yt([
    { provide: Mi, multi: !0, useValue: n },
    [],
    { provide: Ct, useFactory: Ta, deps: [so] },
    { provide: ar, multi: !0, useFactory: Oa },
    i.map((t) => t.ɵproviders),
  ]);
}
function Ta(n) {
  return n.routerState.root;
}
function Oa() {
  let n = m(Wi);
  return (i) => {
    let t = n.get(Ln);
    if (i !== t.components[0]) return;
    let e = n.get(so),
      r = n.get(xa);
    n.get(Na) === 1 && e.initialNavigation(),
      n.get(La, null, Mn.Optional)?.setUpPreloading(),
      n.get(Da, null, Mn.Optional)?.init(),
      e.resetRootComponentType(t.componentTypes[0]),
      r.closed || (r.next(), r.complete(), r.unsubscribe());
  };
}
var xa = new F('', { factory: () => new ct() }),
  Na = new F('', { providedIn: 'root', factory: () => 1 });
var La = new F('');
var Pa = '@',
  Fa = (() => {
    class n {
      constructor(t, e, r, o, s) {
        (this.doc = t),
          (this.delegate = e),
          (this.zone = r),
          (this.animationType = o),
          (this.moduleImpl = s),
          (this._rendererFactoryPromise = null),
          (this.scheduler = m(Xi, { optional: !0 })),
          (this.loadingSchedulerFn = m(Va, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        let t = () =>
            this.moduleImpl ?? import('./chunk-PAEESNC6.js').then((r) => r),
          e;
        return (
          this.loadingSchedulerFn
            ? (e = this.loadingSchedulerFn(t))
            : (e = t()),
          e
            .catch((r) => {
              throw new T(5300, !1);
            })
            .then(({ ɵcreateEngine: r, ɵAnimationRendererFactory: o }) => {
              this._engine = r(this.animationType, this.doc);
              let s = new o(this.delegate, this._engine, this.zone);
              return (this.delegate = s), s;
            })
        );
      }
      createRenderer(t, e) {
        let r = this.delegate.createRenderer(t, e);
        if (r.ɵtype === 0) return r;
        typeof r.throwOnSyntheticProps == 'boolean' &&
          (r.throwOnSyntheticProps = !1);
        let o = new Di(r);
        return (
          e?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((s) => {
              let l = s.createRenderer(t, e);
              o.use(l), this.scheduler?.notify(10);
            })
            .catch((s) => {
              o.use(r);
            }),
          o
        );
      }
      begin() {
        this.delegate.begin?.();
      }
      end() {
        this.delegate.end?.();
      }
      whenRenderingDone() {
        return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
      }
      static {
        this.ɵfac = function (e) {
          On();
        };
      }
      static {
        this.ɵprov = w({ token: n, factory: n.ɵfac });
      }
    }
    return n;
  })(),
  Di = class {
    constructor(i) {
      (this.delegate = i), (this.replay = []), (this.ɵtype = 1);
    }
    use(i) {
      if (((this.delegate = i), this.replay !== null)) {
        for (let t of this.replay) t(i);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(i, t) {
      return this.delegate.createElement(i, t);
    }
    createComment(i) {
      return this.delegate.createComment(i);
    }
    createText(i) {
      return this.delegate.createText(i);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(i, t) {
      this.delegate.appendChild(i, t);
    }
    insertBefore(i, t, e, r) {
      this.delegate.insertBefore(i, t, e, r);
    }
    removeChild(i, t, e) {
      this.delegate.removeChild(i, t, e);
    }
    selectRootElement(i, t) {
      return this.delegate.selectRootElement(i, t);
    }
    parentNode(i) {
      return this.delegate.parentNode(i);
    }
    nextSibling(i) {
      return this.delegate.nextSibling(i);
    }
    setAttribute(i, t, e, r) {
      this.delegate.setAttribute(i, t, e, r);
    }
    removeAttribute(i, t, e) {
      this.delegate.removeAttribute(i, t, e);
    }
    addClass(i, t) {
      this.delegate.addClass(i, t);
    }
    removeClass(i, t) {
      this.delegate.removeClass(i, t);
    }
    setStyle(i, t, e, r) {
      this.delegate.setStyle(i, t, e, r);
    }
    removeStyle(i, t, e) {
      this.delegate.removeStyle(i, t, e);
    }
    setProperty(i, t, e) {
      this.shouldReplay(t) && this.replay.push((r) => r.setProperty(i, t, e)),
        this.delegate.setProperty(i, t, e);
    }
    setValue(i, t) {
      this.delegate.setValue(i, t);
    }
    listen(i, t, e) {
      return (
        this.shouldReplay(t) && this.replay.push((r) => r.listen(i, t, e)),
        this.delegate.listen(i, t, e)
      );
    }
    shouldReplay(i) {
      return this.replay !== null && i.startsWith(Pa);
    }
  },
  Va = new F('');
function lo(n = 'animations') {
  return (
    tr('NgAsyncAnimations'),
    Yt([
      {
        provide: xe,
        useFactory: (i, t, e) => new Fa(i, t, e, n),
        deps: [x, qe, st],
      },
      {
        provide: Yi,
        useValue: n === 'noop' ? 'NoopAnimations' : 'BrowserAnimations',
      },
    ])
  );
}
var Dt = class n {
    static isArray(i, t = !0) {
      return Array.isArray(i) && (t || i.length !== 0);
    }
    static isObject(i, t = !0) {
      return (
        typeof i == 'object' &&
        !Array.isArray(i) &&
        i != null &&
        (t || Object.keys(i).length !== 0)
      );
    }
    static equals(i, t, e) {
      return e
        ? this.resolveFieldData(i, e) === this.resolveFieldData(t, e)
        : this.equalsByValue(i, t);
    }
    static equalsByValue(i, t) {
      if (i === t) return !0;
      if (i && t && typeof i == 'object' && typeof t == 'object') {
        var e = Array.isArray(i),
          r = Array.isArray(t),
          o,
          s,
          l;
        if (e && r) {
          if (((s = i.length), s != t.length)) return !1;
          for (o = s; o-- !== 0; )
            if (!this.equalsByValue(i[o], t[o])) return !1;
          return !0;
        }
        if (e != r) return !1;
        var a = this.isDate(i),
          c = this.isDate(t);
        if (a != c) return !1;
        if (a && c) return i.getTime() == t.getTime();
        var d = i instanceof RegExp,
          p = t instanceof RegExp;
        if (d != p) return !1;
        if (d && p) return i.toString() == t.toString();
        var v = Object.keys(i);
        if (((s = v.length), s !== Object.keys(t).length)) return !1;
        for (o = s; o-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, v[o])) return !1;
        for (o = s; o-- !== 0; )
          if (((l = v[o]), !this.equalsByValue(i[l], t[l]))) return !1;
        return !0;
      }
      return i !== i && t !== t;
    }
    static resolveFieldData(i, t) {
      if (i && t) {
        if (this.isFunction(t)) return t(i);
        if (t.indexOf('.') == -1) return i[t];
        {
          let e = t.split('.'),
            r = i;
          for (let o = 0, s = e.length; o < s; ++o) {
            if (r == null) return null;
            r = r[e[o]];
          }
          return r;
        }
      } else return null;
    }
    static isFunction(i) {
      return !!(i && i.constructor && i.call && i.apply);
    }
    static reorderArray(i, t, e) {
      let r;
      i &&
        t !== e &&
        (e >= i.length && ((e %= i.length), (t %= i.length)),
        i.splice(e, 0, i.splice(t, 1)[0]));
    }
    static insertIntoOrderedArray(i, t, e, r) {
      if (e.length > 0) {
        let o = !1;
        for (let s = 0; s < e.length; s++)
          if (this.findIndexInList(e[s], r) > t) {
            e.splice(s, 0, i), (o = !0);
            break;
          }
        o || e.push(i);
      } else e.push(i);
    }
    static findIndexInList(i, t) {
      let e = -1;
      if (t) {
        for (let r = 0; r < t.length; r++)
          if (t[r] == i) {
            e = r;
            break;
          }
      }
      return e;
    }
    static contains(i, t) {
      if (i != null && t && t.length) {
        for (let e of t) if (this.equals(i, e)) return !0;
      }
      return !1;
    }
    static removeAccents(i) {
      return (
        i &&
          (i = i
            .normalize('NFKD')
            .replace(new RegExp('\\p{Diacritic}', 'gu'), '')),
        i
      );
    }
    static isDate(i) {
      return Object.prototype.toString.call(i) === '[object Date]';
    }
    static isEmpty(i) {
      return (
        i == null ||
        i === '' ||
        (Array.isArray(i) && i.length === 0) ||
        (!this.isDate(i) && typeof i == 'object' && Object.keys(i).length === 0)
      );
    }
    static isNotEmpty(i) {
      return !this.isEmpty(i);
    }
    static compare(i, t, e, r = 1) {
      let o = -1,
        s = this.isEmpty(i),
        l = this.isEmpty(t);
      return (
        s && l
          ? (o = 0)
          : s
            ? (o = r)
            : l
              ? (o = -r)
              : typeof i == 'string' && typeof t == 'string'
                ? (o = i.localeCompare(t, e, { numeric: !0 }))
                : (o = i < t ? -1 : i > t ? 1 : 0),
        o
      );
    }
    static sort(i, t, e = 1, r, o = 1) {
      let s = n.compare(i, t, r, e),
        l = e;
      return (n.isEmpty(i) || n.isEmpty(t)) && (l = o === 1 ? e : o), l * s;
    }
    static merge(i, t) {
      if (!(i == null && t == null)) {
        {
          if (
            (i == null || typeof i == 'object') &&
            (t == null || typeof t == 'object')
          )
            return g(g({}, i || {}), t || {});
          if (
            (i == null || typeof i == 'string') &&
            (t == null || typeof t == 'string')
          )
            return [i || '', t || ''].join(' ');
        }
        return t || i;
      }
    }
    static isPrintableCharacter(i = '') {
      return this.isNotEmpty(i) && i.length === 1 && i.match(/\S| /);
    }
    static getItemValue(i, ...t) {
      return this.isFunction(i) ? i(...t) : i;
    }
    static findLastIndex(i, t) {
      let e = -1;
      if (this.isNotEmpty(i))
        try {
          e = i.findLastIndex(t);
        } catch {
          e = i.lastIndexOf([...i].reverse().find(t));
        }
      return e;
    }
    static findLast(i, t) {
      let e;
      if (this.isNotEmpty(i))
        try {
          e = i.findLast(t);
        } catch {
          e = [...i].reverse().find(t);
        }
      return e;
    }
    static deepEquals(i, t) {
      if (i === t) return !0;
      if (i && t && typeof i == 'object' && typeof t == 'object') {
        var e = Array.isArray(i),
          r = Array.isArray(t),
          o,
          s,
          l;
        if (e && r) {
          if (((s = i.length), s != t.length)) return !1;
          for (o = s; o-- !== 0; ) if (!this.deepEquals(i[o], t[o])) return !1;
          return !0;
        }
        if (e != r) return !1;
        var a = i instanceof Date,
          c = t instanceof Date;
        if (a != c) return !1;
        if (a && c) return i.getTime() == t.getTime();
        var d = i instanceof RegExp,
          p = t instanceof RegExp;
        if (d != p) return !1;
        if (d && p) return i.toString() == t.toString();
        var v = Object.keys(i);
        if (((s = v.length), s !== Object.keys(t).length)) return !1;
        for (o = s; o-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, v[o])) return !1;
        for (o = s; o-- !== 0; )
          if (((l = v[o]), !this.deepEquals(i[l], t[l]))) return !1;
        return !0;
      }
      return i !== i && t !== t;
    }
  },
  co = 0;
function uo(n = 'pn_id_') {
  return co++, `${n}${co}`;
}
function ka() {
  let n = [],
    i = (o, s) => {
      let l = n.length > 0 ? n[n.length - 1] : { key: o, value: s },
        a = l.value + (l.key === o ? 0 : s) + 2;
      return n.push({ key: o, value: a }), a;
    },
    t = (o) => {
      n = n.filter((s) => s.value !== o);
    },
    e = () => (n.length > 0 ? n[n.length - 1].value : 0),
    r = (o) => (o && parseInt(o.style.zIndex, 10)) || 0;
  return {
    get: r,
    set: (o, s, l) => {
      s && (s.style.zIndex = String(i(o, l)));
    },
    clear: (o) => {
      o && (t(r(o)), (o.style.zIndex = ''));
    },
    getCurrent: () => e(),
  };
}
var Nc = ka();
var B = (() => {
  class n {
    static STARTS_WITH = 'startsWith';
    static CONTAINS = 'contains';
    static NOT_CONTAINS = 'notContains';
    static ENDS_WITH = 'endsWith';
    static EQUALS = 'equals';
    static NOT_EQUALS = 'notEquals';
    static IN = 'in';
    static LESS_THAN = 'lt';
    static LESS_THAN_OR_EQUAL_TO = 'lte';
    static GREATER_THAN = 'gt';
    static GREATER_THAN_OR_EQUAL_TO = 'gte';
    static BETWEEN = 'between';
    static IS = 'is';
    static IS_NOT = 'isNot';
    static BEFORE = 'before';
    static AFTER = 'after';
    static DATE_IS = 'dateIs';
    static DATE_IS_NOT = 'dateIsNot';
    static DATE_BEFORE = 'dateBefore';
    static DATE_AFTER = 'dateAfter';
  }
  return n;
})();
var ho = (() => {
  class n {
    ripple = !1;
    inputStyle = Ne('outlined');
    overlayOptions = {};
    csp = Ne({ nonce: void 0 });
    filterMatchModeOptions = {
      text: [
        B.STARTS_WITH,
        B.CONTAINS,
        B.NOT_CONTAINS,
        B.ENDS_WITH,
        B.EQUALS,
        B.NOT_EQUALS,
      ],
      numeric: [
        B.EQUALS,
        B.NOT_EQUALS,
        B.LESS_THAN,
        B.LESS_THAN_OR_EQUAL_TO,
        B.GREATER_THAN,
        B.GREATER_THAN_OR_EQUAL_TO,
      ],
      date: [B.DATE_IS, B.DATE_IS_NOT, B.DATE_BEFORE, B.DATE_AFTER],
    };
    translation = {
      startsWith: 'Starts with',
      contains: 'Contains',
      notContains: 'Not contains',
      endsWith: 'Ends with',
      equals: 'Equals',
      notEquals: 'Not equals',
      noFilter: 'No Filter',
      lt: 'Less than',
      lte: 'Less than or equal to',
      gt: 'Greater than',
      gte: 'Greater than or equal to',
      is: 'Is',
      isNot: 'Is not',
      before: 'Before',
      after: 'After',
      dateIs: 'Date is',
      dateIsNot: 'Date is not',
      dateBefore: 'Date is before',
      dateAfter: 'Date is after',
      clear: 'Clear',
      apply: 'Apply',
      matchAll: 'Match All',
      matchAny: 'Match Any',
      addRule: 'Add Rule',
      removeRule: 'Remove Rule',
      accept: 'Yes',
      reject: 'No',
      choose: 'Choose',
      upload: 'Upload',
      cancel: 'Cancel',
      pending: 'Pending',
      fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      chooseYear: 'Choose Year',
      chooseMonth: 'Choose Month',
      chooseDate: 'Choose Date',
      prevDecade: 'Previous Decade',
      nextDecade: 'Next Decade',
      prevYear: 'Previous Year',
      nextYear: 'Next Year',
      prevMonth: 'Previous Month',
      nextMonth: 'Next Month',
      prevHour: 'Previous Hour',
      nextHour: 'Next Hour',
      prevMinute: 'Previous Minute',
      nextMinute: 'Next Minute',
      prevSecond: 'Previous Second',
      nextSecond: 'Next Second',
      am: 'am',
      pm: 'pm',
      dateFormat: 'mm/dd/yy',
      firstDayOfWeek: 0,
      today: 'Today',
      weekHeader: 'Wk',
      weak: 'Weak',
      medium: 'Medium',
      strong: 'Strong',
      passwordPrompt: 'Enter a password',
      emptyMessage: 'No results found',
      searchMessage: '{0} results are available',
      selectionMessage: '{0} items selected',
      emptySelectionMessage: 'No selected item',
      emptySearchMessage: 'No results found',
      emptyFilterMessage: 'No results found',
      aria: {
        trueLabel: 'True',
        falseLabel: 'False',
        nullLabel: 'Not Selected',
        star: '1 star',
        stars: '{star} stars',
        selectAll: 'All items selected',
        unselectAll: 'All items unselected',
        close: 'Close',
        previous: 'Previous',
        next: 'Next',
        navigation: 'Navigation',
        scrollTop: 'Scroll Top',
        moveTop: 'Move Top',
        moveUp: 'Move Up',
        moveDown: 'Move Down',
        moveBottom: 'Move Bottom',
        moveToTarget: 'Move to Target',
        moveToSource: 'Move to Source',
        moveAllToTarget: 'Move All to Target',
        moveAllToSource: 'Move All to Source',
        pageLabel: '{page}',
        firstPageLabel: 'First Page',
        lastPageLabel: 'Last Page',
        nextPageLabel: 'Next Page',
        prevPageLabel: 'Previous Page',
        rowsPerPageLabel: 'Rows per page',
        previousPageLabel: 'Previous Page',
        jumpToPageDropdownLabel: 'Jump to Page Dropdown',
        jumpToPageInputLabel: 'Jump to Page Input',
        selectRow: 'Row Selected',
        unselectRow: 'Row Unselected',
        expandRow: 'Row Expanded',
        collapseRow: 'Row Collapsed',
        showFilterMenu: 'Show Filter Menu',
        hideFilterMenu: 'Hide Filter Menu',
        filterOperator: 'Filter Operator',
        filterConstraint: 'Filter Constraint',
        editRow: 'Row Edit',
        saveEdit: 'Save Edit',
        cancelEdit: 'Cancel Edit',
        listView: 'List View',
        gridView: 'Grid View',
        slide: 'Slide',
        slideNumber: '{slideNumber}',
        zoomImage: 'Zoom Image',
        zoomIn: 'Zoom In',
        zoomOut: 'Zoom Out',
        rotateRight: 'Rotate Right',
        rotateLeft: 'Rotate Left',
        listLabel: 'Option List',
        selectColor: 'Select a color',
        removeLabel: 'Remove',
        browseFiles: 'Browse Files',
        maximizeLabel: 'Maximize',
      },
    };
    zIndex = { modal: 1100, overlay: 1e3, menu: 1e3, tooltip: 1100 };
    translationSource = new ct();
    translationObserver = this.translationSource.asObservable();
    getTranslation(t) {
      return this.translation[t];
    }
    setTranslation(t) {
      (this.translation = g(g({}, this.translation), t)),
        this.translationSource.next(this.translation);
    }
    static ɵfac = function (e) {
      return new (e || n)();
    };
    static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: 'root' });
  }
  return n;
})();
var hn = (() => {
    class n {
      template;
      type;
      name;
      constructor(t) {
        this.template = t;
      }
      getType() {
        return this.name;
      }
      static ɵfac = function (e) {
        return new (e || n)(H(Qi));
      };
      static ɵdir = rt({
        type: n,
        selectors: [['', 'pTemplate', '']],
        inputs: { type: 'type', name: [0, 'pTemplate', 'name'] },
        standalone: !0,
      });
    }
    return n;
  })(),
  Re = (() => {
    class n {
      static ɵfac = function (e) {
        return new (e || n)();
      };
      static ɵmod = X({ type: n });
      static ɵinj = Q({});
    }
    return n;
  })();
var R = (() => {
  class n {
    static zindex = 1e3;
    static calculatedScrollbarWidth = null;
    static calculatedScrollbarHeight = null;
    static browser;
    static addClass(t, e) {
      t && e && (t.classList ? t.classList.add(e) : (t.className += ' ' + e));
    }
    static addMultipleClasses(t, e) {
      if (t && e)
        if (t.classList) {
          let r = e.trim().split(' ');
          for (let o = 0; o < r.length; o++) t.classList.add(r[o]);
        } else {
          let r = e.split(' ');
          for (let o = 0; o < r.length; o++) t.className += ' ' + r[o];
        }
    }
    static removeClass(t, e) {
      t &&
        e &&
        (t.classList
          ? t.classList.remove(e)
          : (t.className = t.className.replace(
              new RegExp('(^|\\b)' + e.split(' ').join('|') + '(\\b|$)', 'gi'),
              ' '
            )));
    }
    static removeMultipleClasses(t, e) {
      t &&
        e &&
        [e]
          .flat()
          .filter(Boolean)
          .forEach((r) => r.split(' ').forEach((o) => this.removeClass(t, o)));
    }
    static hasClass(t, e) {
      return t && e
        ? t.classList
          ? t.classList.contains(e)
          : new RegExp('(^| )' + e + '( |$)', 'gi').test(t.className)
        : !1;
    }
    static siblings(t) {
      return Array.prototype.filter.call(t.parentNode.children, function (e) {
        return e !== t;
      });
    }
    static find(t, e) {
      return Array.from(t.querySelectorAll(e));
    }
    static findSingle(t, e) {
      return this.isElement(t) ? t.querySelector(e) : null;
    }
    static index(t) {
      let e = t.parentNode.childNodes,
        r = 0;
      for (var o = 0; o < e.length; o++) {
        if (e[o] == t) return r;
        e[o].nodeType == 1 && r++;
      }
      return -1;
    }
    static indexWithinGroup(t, e) {
      let r = t.parentNode ? t.parentNode.childNodes : [],
        o = 0;
      for (var s = 0; s < r.length; s++) {
        if (r[s] == t) return o;
        r[s].attributes && r[s].attributes[e] && r[s].nodeType == 1 && o++;
      }
      return -1;
    }
    static appendOverlay(t, e, r = 'self') {
      r !== 'self' && t && e && this.appendChild(t, e);
    }
    static alignOverlay(t, e, r = 'self', o = !0) {
      t &&
        e &&
        (o && (t.style.minWidth = `${n.getOuterWidth(e)}px`),
        r === 'self'
          ? this.relativePosition(t, e)
          : this.absolutePosition(t, e));
    }
    static relativePosition(t, e, r = !0) {
      let o = (Tt) => {
          if (Tt)
            return getComputedStyle(Tt).getPropertyValue('position') ===
              'relative'
              ? Tt
              : o(Tt.parentElement);
        },
        s = t.offsetParent
          ? { width: t.offsetWidth, height: t.offsetHeight }
          : this.getHiddenElementDimensions(t),
        l = e.offsetHeight ?? e.getBoundingClientRect().height,
        a = e.getBoundingClientRect(),
        c = this.getWindowScrollTop(),
        d = this.getWindowScrollLeft(),
        p = this.getViewport(),
        E = o(t)?.getBoundingClientRect() || { top: -1 * c, left: -1 * d },
        A,
        L;
      a.top + l + s.height > p.height
        ? ((A = a.top - E.top - s.height),
          (t.style.transformOrigin = 'bottom'),
          a.top + A < 0 && (A = -1 * a.top))
        : ((A = l + a.top - E.top), (t.style.transformOrigin = 'top'));
      let G = a.left + s.width - p.width,
        St = a.left - E.left;
      s.width > p.width
        ? (L = (a.left - E.left) * -1)
        : G > 0
          ? (L = St - G)
          : (L = a.left - E.left),
        (t.style.top = A + 'px'),
        (t.style.left = L + 'px'),
        r &&
          (t.style.marginTop =
            origin === 'bottom'
              ? 'calc(var(--p-anchor-gutter) * -1)'
              : 'calc(var(--p-anchor-gutter))');
    }
    static absolutePosition(t, e, r = !0) {
      let o = t.offsetParent
          ? { width: t.offsetWidth, height: t.offsetHeight }
          : this.getHiddenElementDimensions(t),
        s = o.height,
        l = o.width,
        a = e.offsetHeight ?? e.getBoundingClientRect().height,
        c = e.offsetWidth ?? e.getBoundingClientRect().width,
        d = e.getBoundingClientRect(),
        p = this.getWindowScrollTop(),
        v = this.getWindowScrollLeft(),
        E = this.getViewport(),
        A,
        L;
      d.top + a + s > E.height
        ? ((A = d.top + p - s),
          (t.style.transformOrigin = 'bottom'),
          A < 0 && (A = p))
        : ((A = a + d.top + p), (t.style.transformOrigin = 'top')),
        d.left + l > E.width
          ? (L = Math.max(0, d.left + v + c - l))
          : (L = d.left + v),
        (t.style.top = A + 'px'),
        (t.style.left = L + 'px'),
        r &&
          (t.style.marginTop =
            origin === 'bottom'
              ? 'calc(var(--p-anchor-gutter) * -1)'
              : 'calc(var(--p-anchor-gutter))');
    }
    static getParents(t, e = []) {
      return t.parentNode === null
        ? e
        : this.getParents(t.parentNode, e.concat([t.parentNode]));
    }
    static getScrollableParents(t) {
      let e = [];
      if (t) {
        let r = this.getParents(t),
          o = /(auto|scroll)/,
          s = (l) => {
            let a = window.getComputedStyle(l, null);
            return (
              o.test(a.getPropertyValue('overflow')) ||
              o.test(a.getPropertyValue('overflowX')) ||
              o.test(a.getPropertyValue('overflowY'))
            );
          };
        for (let l of r) {
          let a = l.nodeType === 1 && l.dataset.scrollselectors;
          if (a) {
            let c = a.split(',');
            for (let d of c) {
              let p = this.findSingle(l, d);
              p && s(p) && e.push(p);
            }
          }
          l.nodeType !== 9 && s(l) && e.push(l);
        }
      }
      return e;
    }
    static getHiddenElementOuterHeight(t) {
      (t.style.visibility = 'hidden'), (t.style.display = 'block');
      let e = t.offsetHeight;
      return (t.style.display = 'none'), (t.style.visibility = 'visible'), e;
    }
    static getHiddenElementOuterWidth(t) {
      (t.style.visibility = 'hidden'), (t.style.display = 'block');
      let e = t.offsetWidth;
      return (t.style.display = 'none'), (t.style.visibility = 'visible'), e;
    }
    static getHiddenElementDimensions(t) {
      let e = {};
      return (
        (t.style.visibility = 'hidden'),
        (t.style.display = 'block'),
        (e.width = t.offsetWidth),
        (e.height = t.offsetHeight),
        (t.style.display = 'none'),
        (t.style.visibility = 'visible'),
        e
      );
    }
    static scrollInView(t, e) {
      let r = getComputedStyle(t).getPropertyValue('borderTopWidth'),
        o = r ? parseFloat(r) : 0,
        s = getComputedStyle(t).getPropertyValue('paddingTop'),
        l = s ? parseFloat(s) : 0,
        a = t.getBoundingClientRect(),
        d =
          e.getBoundingClientRect().top +
          document.body.scrollTop -
          (a.top + document.body.scrollTop) -
          o -
          l,
        p = t.scrollTop,
        v = t.clientHeight,
        E = this.getOuterHeight(e);
      d < 0
        ? (t.scrollTop = p + d)
        : d + E > v && (t.scrollTop = p + d - v + E);
    }
    static fadeIn(t, e) {
      t.style.opacity = 0;
      let r = +new Date(),
        o = 0,
        s = function () {
          (o =
            +t.style.opacity.replace(',', '.') +
            (new Date().getTime() - r) / e),
            (t.style.opacity = o),
            (r = +new Date()),
            +o < 1 &&
              ((window.requestAnimationFrame && requestAnimationFrame(s)) ||
                setTimeout(s, 16));
        };
      s();
    }
    static fadeOut(t, e) {
      var r = 1,
        o = 50,
        s = e,
        l = o / s;
      let a = setInterval(() => {
        (r = r - l),
          r <= 0 && ((r = 0), clearInterval(a)),
          (t.style.opacity = r);
      }, o);
    }
    static getWindowScrollTop() {
      let t = document.documentElement;
      return (window.pageYOffset || t.scrollTop) - (t.clientTop || 0);
    }
    static getWindowScrollLeft() {
      let t = document.documentElement;
      return (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0);
    }
    static matches(t, e) {
      var r = Element.prototype,
        o =
          r.matches ||
          r.webkitMatchesSelector ||
          r.mozMatchesSelector ||
          r.msMatchesSelector ||
          function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
          };
      return o.call(t, e);
    }
    static getOuterWidth(t, e) {
      let r = t.offsetWidth;
      if (e) {
        let o = getComputedStyle(t);
        r += parseFloat(o.marginLeft) + parseFloat(o.marginRight);
      }
      return r;
    }
    static getHorizontalPadding(t) {
      let e = getComputedStyle(t);
      return parseFloat(e.paddingLeft) + parseFloat(e.paddingRight);
    }
    static getHorizontalMargin(t) {
      let e = getComputedStyle(t);
      return parseFloat(e.marginLeft) + parseFloat(e.marginRight);
    }
    static innerWidth(t) {
      let e = t.offsetWidth,
        r = getComputedStyle(t);
      return (e += parseFloat(r.paddingLeft) + parseFloat(r.paddingRight)), e;
    }
    static width(t) {
      let e = t.offsetWidth,
        r = getComputedStyle(t);
      return (e -= parseFloat(r.paddingLeft) + parseFloat(r.paddingRight)), e;
    }
    static getInnerHeight(t) {
      let e = t.offsetHeight,
        r = getComputedStyle(t);
      return (e += parseFloat(r.paddingTop) + parseFloat(r.paddingBottom)), e;
    }
    static getOuterHeight(t, e) {
      let r = t.offsetHeight;
      if (e) {
        let o = getComputedStyle(t);
        r += parseFloat(o.marginTop) + parseFloat(o.marginBottom);
      }
      return r;
    }
    static getHeight(t) {
      let e = t.offsetHeight,
        r = getComputedStyle(t);
      return (
        (e -=
          parseFloat(r.paddingTop) +
          parseFloat(r.paddingBottom) +
          parseFloat(r.borderTopWidth) +
          parseFloat(r.borderBottomWidth)),
        e
      );
    }
    static getWidth(t) {
      let e = t.offsetWidth,
        r = getComputedStyle(t);
      return (
        (e -=
          parseFloat(r.paddingLeft) +
          parseFloat(r.paddingRight) +
          parseFloat(r.borderLeftWidth) +
          parseFloat(r.borderRightWidth)),
        e
      );
    }
    static getViewport() {
      let t = window,
        e = document,
        r = e.documentElement,
        o = e.getElementsByTagName('body')[0],
        s = t.innerWidth || r.clientWidth || o.clientWidth,
        l = t.innerHeight || r.clientHeight || o.clientHeight;
      return { width: s, height: l };
    }
    static getOffset(t) {
      var e = t.getBoundingClientRect();
      return {
        top:
          e.top +
          (window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0),
        left:
          e.left +
          (window.pageXOffset ||
            document.documentElement.scrollLeft ||
            document.body.scrollLeft ||
            0),
      };
    }
    static replaceElementWith(t, e) {
      let r = t.parentNode;
      if (!r) throw "Can't replace element";
      return r.replaceChild(e, t);
    }
    static getUserAgent() {
      if (navigator && this.isClient()) return navigator.userAgent;
    }
    static isIE() {
      var t = window.navigator.userAgent,
        e = t.indexOf('MSIE ');
      if (e > 0) return !0;
      var r = t.indexOf('Trident/');
      if (r > 0) {
        var o = t.indexOf('rv:');
        return !0;
      }
      var s = t.indexOf('Edge/');
      return s > 0;
    }
    static isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
    static isAndroid() {
      return /(android)/i.test(navigator.userAgent);
    }
    static isTouchDevice() {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
    static appendChild(t, e) {
      if (this.isElement(e)) e.appendChild(t);
      else if (e && e.el && e.el.nativeElement)
        e.el.nativeElement.appendChild(t);
      else throw 'Cannot append ' + e + ' to ' + t;
    }
    static removeChild(t, e) {
      if (this.isElement(e)) e.removeChild(t);
      else if (e.el && e.el.nativeElement) e.el.nativeElement.removeChild(t);
      else throw 'Cannot remove ' + t + ' from ' + e;
    }
    static removeElement(t) {
      'remove' in Element.prototype ? t.remove() : t.parentNode.removeChild(t);
    }
    static isElement(t) {
      return typeof HTMLElement == 'object'
        ? t instanceof HTMLElement
        : t &&
            typeof t == 'object' &&
            t !== null &&
            t.nodeType === 1 &&
            typeof t.nodeName == 'string';
    }
    static calculateScrollbarWidth(t) {
      if (t) {
        let e = getComputedStyle(t);
        return (
          t.offsetWidth -
          t.clientWidth -
          parseFloat(e.borderLeftWidth) -
          parseFloat(e.borderRightWidth)
        );
      } else {
        if (this.calculatedScrollbarWidth !== null)
          return this.calculatedScrollbarWidth;
        let e = document.createElement('div');
        (e.className = 'p-scrollbar-measure'), document.body.appendChild(e);
        let r = e.offsetWidth - e.clientWidth;
        return (
          document.body.removeChild(e), (this.calculatedScrollbarWidth = r), r
        );
      }
    }
    static calculateScrollbarHeight() {
      if (this.calculatedScrollbarHeight !== null)
        return this.calculatedScrollbarHeight;
      let t = document.createElement('div');
      (t.className = 'p-scrollbar-measure'), document.body.appendChild(t);
      let e = t.offsetHeight - t.clientHeight;
      return (
        document.body.removeChild(t), (this.calculatedScrollbarWidth = e), e
      );
    }
    static invokeElementMethod(t, e, r) {
      t[e].apply(t, r);
    }
    static clearSelection() {
      if (window.getSelection)
        window.getSelection().empty
          ? window.getSelection().empty()
          : window.getSelection().removeAllRanges &&
            window.getSelection().rangeCount > 0 &&
            window.getSelection().getRangeAt(0).getClientRects().length > 0 &&
            window.getSelection().removeAllRanges();
      else if (document.selection && document.selection.empty)
        try {
          document.selection.empty();
        } catch {}
    }
    static getBrowser() {
      if (!this.browser) {
        let t = this.resolveUserAgent();
        (this.browser = {}),
          t.browser &&
            ((this.browser[t.browser] = !0),
            (this.browser.version = t.version)),
          this.browser.chrome
            ? (this.browser.webkit = !0)
            : this.browser.webkit && (this.browser.safari = !0);
      }
      return this.browser;
    }
    static resolveUserAgent() {
      let t = navigator.userAgent.toLowerCase(),
        e =
          /(chrome)[ \/]([\w.]+)/.exec(t) ||
          /(webkit)[ \/]([\w.]+)/.exec(t) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) ||
          /(msie) ([\w.]+)/.exec(t) ||
          (t.indexOf('compatible') < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)) ||
          [];
      return { browser: e[1] || '', version: e[2] || '0' };
    }
    static isInteger(t) {
      return Number.isInteger
        ? Number.isInteger(t)
        : typeof t == 'number' && isFinite(t) && Math.floor(t) === t;
    }
    static isHidden(t) {
      return !t || t.offsetParent === null;
    }
    static isVisible(t) {
      return t && t.offsetParent != null;
    }
    static isExist(t) {
      return t !== null && typeof t < 'u' && t.nodeName && t.parentNode;
    }
    static focus(t, e) {
      t && document.activeElement !== t && t.focus(e);
    }
    static getFocusableSelectorString(t = '') {
      return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`;
    }
    static getFocusableElements(t, e = '') {
      let r = this.find(t, this.getFocusableSelectorString(e)),
        o = [];
      for (let s of r) {
        let l = getComputedStyle(s);
        this.isVisible(s) &&
          l.display != 'none' &&
          l.visibility != 'hidden' &&
          o.push(s);
      }
      return o;
    }
    static getFocusableElement(t, e = '') {
      let r = this.findSingle(t, this.getFocusableSelectorString(e));
      if (r) {
        let o = getComputedStyle(r);
        if (
          this.isVisible(r) &&
          o.display != 'none' &&
          o.visibility != 'hidden'
        )
          return r;
      }
      return null;
    }
    static getFirstFocusableElement(t, e = '') {
      let r = this.getFocusableElements(t, e);
      return r.length > 0 ? r[0] : null;
    }
    static getLastFocusableElement(t, e) {
      let r = this.getFocusableElements(t, e);
      return r.length > 0 ? r[r.length - 1] : null;
    }
    static getNextFocusableElement(t, e = !1) {
      let r = n.getFocusableElements(t),
        o = 0;
      if (r && r.length > 0) {
        let s = r.indexOf(r[0].ownerDocument.activeElement);
        e
          ? s == -1 || s === 0
            ? (o = r.length - 1)
            : (o = s - 1)
          : s != -1 && s !== r.length - 1 && (o = s + 1);
      }
      return r[o];
    }
    static generateZIndex() {
      return (this.zindex = this.zindex || 999), ++this.zindex;
    }
    static getSelection() {
      return window.getSelection
        ? window.getSelection().toString()
        : document.getSelection
          ? document.getSelection().toString()
          : document.selection
            ? document.selection.createRange().text
            : null;
    }
    static getTargetElement(t, e) {
      if (!t) return null;
      switch (t) {
        case 'document':
          return document;
        case 'window':
          return window;
        case '@next':
          return e?.nextElementSibling;
        case '@prev':
          return e?.previousElementSibling;
        case '@parent':
          return e?.parentElement;
        case '@grandparent':
          return e?.parentElement.parentElement;
        default:
          let r = typeof t;
          if (r === 'string') return document.querySelector(t);
          if (r === 'object' && t.hasOwnProperty('nativeElement'))
            return this.isExist(t.nativeElement) ? t.nativeElement : void 0;
          let s = ((l) => !!(l && l.constructor && l.call && l.apply))(t)
            ? t()
            : t;
          return (s && s.nodeType === 9) || this.isExist(s) ? s : null;
      }
    }
    static isClient() {
      return !!(
        typeof window < 'u' &&
        window.document &&
        window.document.createElement
      );
    }
    static getAttribute(t, e) {
      if (t) {
        let r = t.getAttribute(e);
        return isNaN(r)
          ? r === 'true' || r === 'false'
            ? r === 'true'
            : r
          : +r;
      }
    }
    static calculateBodyScrollbarWidth() {
      return window.innerWidth - document.documentElement.offsetWidth;
    }
    static blockBodyScroll(t = 'p-overflow-hidden') {
      document.body.style.setProperty(
        '--scrollbar-width',
        this.calculateBodyScrollbarWidth() + 'px'
      ),
        this.addClass(document.body, t);
    }
    static unblockBodyScroll(t = 'p-overflow-hidden') {
      document.body.style.removeProperty('--scrollbar-width'),
        this.removeClass(document.body, t);
    }
    static createElement(t, e = {}, ...r) {
      if (t) {
        let o = document.createElement(t);
        return this.setAttributes(o, e), o.append(...r), o;
      }
    }
    static setAttribute(t, e = '', r) {
      this.isElement(t) && r !== null && r !== void 0 && t.setAttribute(e, r);
    }
    static setAttributes(t, e = {}) {
      if (this.isElement(t)) {
        let r = (o, s) => {
          let l = t?.$attrs?.[o] ? [t?.$attrs?.[o]] : [];
          return [s].flat().reduce((a, c) => {
            if (c != null) {
              let d = typeof c;
              if (d === 'string' || d === 'number') a.push(c);
              else if (d === 'object') {
                let p = Array.isArray(c)
                  ? r(o, c)
                  : Object.entries(c).map(([v, E]) =>
                      o === 'style' && (E || E === 0)
                        ? `${v.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${E}`
                        : E
                          ? v
                          : void 0
                    );
                a = p.length ? a.concat(p.filter((v) => !!v)) : a;
              }
            }
            return a;
          }, l);
        };
        Object.entries(e).forEach(([o, s]) => {
          if (s != null) {
            let l = o.match(/^on(.+)/);
            l
              ? t.addEventListener(l[1].toLowerCase(), s)
              : o === 'pBind'
                ? this.setAttributes(t, s)
                : ((s =
                    o === 'class'
                      ? [...new Set(r('class', s))].join(' ').trim()
                      : o === 'style'
                        ? r('style', s).join(';').trim()
                        : s),
                  (t.$attrs = t.$attrs || {}) && (t.$attrs[o] = s),
                  t.setAttribute(o, s));
          }
        });
      }
    }
    static isFocusableElement(t, e = '') {
      return this.isElement(t)
        ? t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`)
        : !1;
    }
  }
  return n;
})();
var pn = (() => {
    class n {
      autofocus = !1;
      focused = !1;
      platformId = m(dt);
      document = m(x);
      host = m(vt);
      ngAfterContentChecked() {
        this.autofocus === !1
          ? this.host.nativeElement.removeAttribute('autofocus')
          : this.host.nativeElement.setAttribute('autofocus', !0),
          this.focused || this.autoFocus();
      }
      ngAfterViewChecked() {
        this.focused || this.autoFocus();
      }
      autoFocus() {
        We(this.platformId) &&
          this.autofocus &&
          setTimeout(() => {
            let t = R.getFocusableElements(this.host?.nativeElement);
            t.length === 0 && this.host.nativeElement.focus(),
              t.length > 0 && t[0].focus(),
              (this.focused = !0);
          });
      }
      static ɵfac = function (e) {
        return new (e || n)();
      };
      static ɵdir = rt({
        type: n,
        selectors: [['', 'pAutoFocus', '']],
        hostAttrs: [1, 'p-element'],
        inputs: { autofocus: [2, 'autofocus', 'autofocus', D] },
        standalone: !0,
        features: [at],
      });
    }
    return n;
  })(),
  po = (() => {
    class n {
      static ɵfac = function (e) {
        return new (e || n)();
      };
      static ɵmod = X({ type: n });
      static ɵinj = Q({});
    }
    return n;
  })();
var ja = ['*'],
  fo = (() => {
    class n {
      label;
      spin = !1;
      styleClass;
      role;
      ariaLabel;
      ariaHidden;
      ngOnInit() {
        this.getAttributes();
      }
      getAttributes() {
        let t = Dt.isEmpty(this.label);
        (this.role = t ? void 0 : 'img'),
          (this.ariaLabel = t ? void 0 : this.label),
          (this.ariaHidden = t);
      }
      getClassNames() {
        return `p-icon ${this.styleClass ? this.styleClass + ' ' : ''}${this.spin ? 'p-icon-spin' : ''}`;
      }
      static ɵfac = function (e) {
        return new (e || n)();
      };
      static ɵcmp = N({
        type: n,
        selectors: [['ng-component']],
        hostAttrs: [1, 'p-element', 'p-icon-wrapper'],
        inputs: {
          label: 'label',
          spin: [2, 'spin', 'spin', D],
          styleClass: 'styleClass',
        },
        standalone: !0,
        features: [at, V],
        ngContentSelectors: ja,
        decls: 1,
        vars: 0,
        template: function (e, r) {
          e & 1 && (Xt(), Jt(0));
        },
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })();
var go = (() => {
  class n extends fo {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + uo() + ')';
    }
    static ɵfac = (() => {
      let t;
      return function (r) {
        return (t || (t = Zt(n)))(r || n);
      };
    })();
    static ɵcmp = N({
      type: n,
      selectors: [['SpinnerIcon']],
      standalone: !0,
      features: [er, V],
      decls: 6,
      vars: 7,
      consts: [
        [
          'width',
          '14',
          'height',
          '14',
          'viewBox',
          '0 0 14 14',
          'fill',
          'none',
          'xmlns',
          'http://www.w3.org/2000/svg',
        ],
        [
          'd',
          'M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z',
          'fill',
          'currentColor',
        ],
        [3, 'id'],
        ['width', '14', 'height', '14', 'fill', 'white'],
      ],
      template: function (e, r) {
        e & 1 &&
          (ot(),
          u(0, 'svg', 0)(1, 'g'),
          b(2, 'path', 1),
          h(),
          u(3, 'defs')(4, 'clipPath', 2),
          b(5, 'rect', 3),
          h()()()),
          e & 2 &&
            (wt(r.getClassNames()),
            $('aria-label', r.ariaLabel)('aria-hidden', r.ariaHidden)(
              'role',
              r.role
            ),
            M(),
            $('clip-path', r.pathId),
            M(3),
            _('id', r.pathId));
      },
      encapsulation: 2,
    });
  }
  return n;
})();
var fn = (() => {
    class n {
      document;
      platformId;
      renderer;
      el;
      zone;
      config;
      constructor(t, e, r, o, s, l) {
        (this.document = t),
          (this.platformId = e),
          (this.renderer = r),
          (this.el = o),
          (this.zone = s),
          (this.config = l);
      }
      animationListener;
      mouseDownListener;
      timeout;
      ngAfterViewInit() {
        We(this.platformId) &&
          this.config &&
          this.config.ripple &&
          this.zone.runOutsideAngular(() => {
            this.create(),
              (this.mouseDownListener = this.renderer.listen(
                this.el.nativeElement,
                'mousedown',
                this.onMouseDown.bind(this)
              ));
          });
      }
      onMouseDown(t) {
        let e = this.getInk();
        if (
          !e ||
          this.document.defaultView?.getComputedStyle(e, null).display ===
            'none'
        )
          return;
        if (
          (R.removeClass(e, 'p-ink-active'), !R.getHeight(e) && !R.getWidth(e))
        ) {
          let l = Math.max(
            R.getOuterWidth(this.el.nativeElement),
            R.getOuterHeight(this.el.nativeElement)
          );
          (e.style.height = l + 'px'), (e.style.width = l + 'px');
        }
        let r = R.getOffset(this.el.nativeElement),
          o =
            t.pageX - r.left + this.document.body.scrollTop - R.getWidth(e) / 2,
          s =
            t.pageY -
            r.top +
            this.document.body.scrollLeft -
            R.getHeight(e) / 2;
        this.renderer.setStyle(e, 'top', s + 'px'),
          this.renderer.setStyle(e, 'left', o + 'px'),
          R.addClass(e, 'p-ink-active'),
          (this.timeout = setTimeout(() => {
            let l = this.getInk();
            l && R.removeClass(l, 'p-ink-active');
          }, 401));
      }
      getInk() {
        let t = this.el.nativeElement.children;
        for (let e = 0; e < t.length; e++)
          if (
            typeof t[e].className == 'string' &&
            t[e].className.indexOf('p-ink') !== -1
          )
            return t[e];
        return null;
      }
      resetInk() {
        let t = this.getInk();
        t && R.removeClass(t, 'p-ink-active');
      }
      onAnimationEnd(t) {
        this.timeout && clearTimeout(this.timeout),
          R.removeClass(t.currentTarget, 'p-ink-active');
      }
      create() {
        let t = this.renderer.createElement('span');
        this.renderer.addClass(t, 'p-ink'),
          this.renderer.appendChild(this.el.nativeElement, t),
          this.renderer.setAttribute(t, 'aria-hidden', 'true'),
          this.renderer.setAttribute(t, 'role', 'presentation'),
          this.animationListener ||
            (this.animationListener = this.renderer.listen(
              t,
              'animationend',
              this.onAnimationEnd.bind(this)
            ));
      }
      remove() {
        let t = this.getInk();
        t &&
          (this.mouseDownListener && this.mouseDownListener(),
          this.animationListener && this.animationListener(),
          (this.mouseDownListener = null),
          (this.animationListener = null),
          R.removeElement(t));
      }
      ngOnDestroy() {
        this.config && this.config.ripple && this.remove();
      }
      static ɵfac = function (e) {
        return new (e || n)(H(x), H(dt), H(xn), H(vt), H(st), H(ho, 8));
      };
      static ɵdir = rt({
        type: n,
        selectors: [['', 'pRipple', '']],
        hostAttrs: [1, 'p-ripple', 'p-element'],
        standalone: !0,
      });
    }
    return n;
  })(),
  mo = (() => {
    class n {
      static ɵfac = function (e) {
        return new (e || n)();
      };
      static ɵmod = X({ type: n });
      static ɵinj = Q({});
    }
    return n;
  })();
var $a = ['*'],
  vo = (n) => ({ class: n });
function Ga(n, i) {
  n & 1 && Ve(0);
}
function Wa(n, i) {
  if ((n & 1 && b(0, 'span', 8), n & 2)) {
    let t = j(3);
    _('ngClass', t.iconClass()),
      $('aria-hidden', !0)('data-pc-section', 'loadingicon');
  }
}
function za(n, i) {
  if ((n & 1 && b(0, 'SpinnerIcon', 9), n & 2)) {
    let t = j(3);
    _('styleClass', t.spinnerIconClass())('spin', !0),
      $('aria-hidden', !0)('data-pc-section', 'loadingicon');
  }
}
function qa(n, i) {
  if (
    (n & 1 &&
      (Pe(0), z(1, Wa, 1, 3, 'span', 6)(2, za, 1, 4, 'SpinnerIcon', 7), Fe()),
    n & 2)
  ) {
    let t = j(2);
    M(), _('ngIf', t.loadingIcon), M(), _('ngIf', !t.loadingIcon);
  }
}
function Ka(n, i) {}
function Ya(n, i) {
  if ((n & 1 && z(0, Ka, 0, 0, 'ng-template', 10), n & 2)) {
    let t = j(2);
    _('ngIf', t.loadingIconTemplate);
  }
}
function Za(n, i) {
  if (
    (n & 1 &&
      (Pe(0), z(1, qa, 3, 2, 'ng-container', 2)(2, Ya, 1, 1, null, 5), Fe()),
    n & 2)
  ) {
    let t = j();
    M(),
      _('ngIf', !t.loadingIconTemplate),
      M(),
      _('ngTemplateOutlet', t.loadingIconTemplate)(
        'ngTemplateOutletContext',
        re(3, vo, t.iconClass())
      );
  }
}
function Qa(n, i) {
  if ((n & 1 && b(0, 'span', 8), n & 2)) {
    let t = j(2);
    _('ngClass', t.iconClass()), $('data-pc-section', 'icon');
  }
}
function Xa(n, i) {}
function Ja(n, i) {
  if ((n & 1 && z(0, Xa, 0, 0, 'ng-template', 10), n & 2)) {
    let t = j(2);
    _('ngIf', !t.icon && t.iconTemplate);
  }
}
function tl(n, i) {
  if (
    (n & 1 && (Pe(0), z(1, Qa, 1, 2, 'span', 6)(2, Ja, 1, 1, null, 5), Fe()),
    n & 2)
  ) {
    let t = j();
    M(),
      _('ngIf', t.icon && !t.iconTemplate),
      M(),
      _('ngTemplateOutlet', t.iconTemplate)(
        'ngTemplateOutletContext',
        re(3, vo, t.iconClass())
      );
  }
}
function el(n, i) {
  if ((n & 1 && (u(0, 'span', 11), f(1), h()), n & 2)) {
    let t = j();
    $('aria-hidden', t.icon && !t.label)('data-pc-section', 'label'),
      M(),
      ie(t.label);
  }
}
function nl(n, i) {
  if ((n & 1 && (u(0, 'span', 8), f(1), h()), n & 2)) {
    let t = j();
    wt(t.badgeClass),
      _('ngClass', t.badgeStyleClass()),
      $('data-pc-section', 'badge'),
      M(),
      ie(t.badge);
  }
}
var _t = {
    button: 'p-button',
    component: 'p-component',
    iconOnly: 'p-button-icon-only',
    disabled: 'p-disabled',
    loading: 'p-button-loading',
    labelOnly: 'p-button-loading-label-only',
  },
  yo = (() => {
    class n {
      el;
      document;
      iconPos = 'left';
      loadingIcon;
      get label() {
        return this._label;
      }
      set label(t) {
        (this._label = t),
          this.initialized &&
            (this.updateLabel(), this.updateIcon(), this.setStyleClass());
      }
      get icon() {
        return this._icon;
      }
      set icon(t) {
        (this._icon = t),
          this.initialized && (this.updateIcon(), this.setStyleClass());
      }
      get loading() {
        return this._loading;
      }
      set loading(t) {
        (this._loading = t),
          this.initialized && (this.updateIcon(), this.setStyleClass());
      }
      severity;
      raised = !1;
      rounded = !1;
      text = !1;
      outlined = !1;
      size = null;
      plain = !1;
      _label;
      _icon;
      _loading = !1;
      initialized;
      get htmlElement() {
        return this.el.nativeElement;
      }
      _internalClasses = Object.values(_t);
      constructor(t, e) {
        (this.el = t), (this.document = e);
      }
      ngAfterViewInit() {
        R.addMultipleClasses(this.htmlElement, this.getStyleClass().join(' ')),
          this.createIcon(),
          this.createLabel(),
          (this.initialized = !0);
      }
      getStyleClass() {
        let t = [_t.button, _t.component];
        return (
          this.icon &&
            !this.label &&
            Dt.isEmpty(this.htmlElement.textContent) &&
            t.push(_t.iconOnly),
          this.loading &&
            (t.push(_t.disabled, _t.loading),
            !this.icon && this.label && t.push(_t.labelOnly),
            this.icon &&
              !this.label &&
              !Dt.isEmpty(this.htmlElement.textContent) &&
              t.push(_t.iconOnly)),
          this.text && t.push('p-button-text'),
          this.severity && t.push(`p-button-${this.severity}`),
          this.plain && t.push('p-button-plain'),
          this.raised && t.push('p-button-raised'),
          this.size && t.push(`p-button-${this.size}`),
          this.outlined && t.push('p-button-outlined'),
          this.rounded && t.push('p-button-rounded'),
          this.size === 'small' && t.push('p-button-sm'),
          this.size === 'large' && t.push('p-button-lg'),
          t
        );
      }
      setStyleClass() {
        let t = this.getStyleClass();
        this.htmlElement.classList.remove(...this._internalClasses),
          this.htmlElement.classList.add(...t);
      }
      createLabel() {
        if (!R.findSingle(this.htmlElement, '.p-button-label') && this.label) {
          let e = this.document.createElement('span');
          this.icon && !this.label && e.setAttribute('aria-hidden', 'true'),
            (e.className = 'p-button-label'),
            e.appendChild(this.document.createTextNode(this.label)),
            this.htmlElement.appendChild(e);
        }
      }
      createIcon() {
        if (
          !R.findSingle(this.htmlElement, '.p-button-icon') &&
          (this.icon || this.loading)
        ) {
          let e = this.document.createElement('span');
          (e.className = 'p-button-icon'),
            e.setAttribute('aria-hidden', 'true');
          let r = this.label ? 'p-button-icon-' + this.iconPos : null;
          r && R.addClass(e, r);
          let o = this.getIconClass();
          o && R.addMultipleClasses(e, o),
            this.htmlElement.insertBefore(e, this.htmlElement.firstChild);
        }
      }
      updateLabel() {
        let t = R.findSingle(this.htmlElement, '.p-button-label');
        if (!this.label) {
          t && this.htmlElement.removeChild(t);
          return;
        }
        t ? (t.textContent = this.label) : this.createLabel();
      }
      updateIcon() {
        let t = R.findSingle(this.htmlElement, '.p-button-icon'),
          e = R.findSingle(this.htmlElement, '.p-button-label');
        t
          ? this.iconPos
            ? (t.className =
                'p-button-icon ' +
                (e ? 'p-button-icon-' + this.iconPos : '') +
                ' ' +
                this.getIconClass())
            : (t.className = 'p-button-icon ' + this.getIconClass())
          : this.createIcon();
      }
      getIconClass() {
        return this.loading
          ? 'p-button-loading-icon pi-spin ' +
              (this.loadingIcon ?? 'pi pi-spinner')
          : this.icon || 'p-hidden';
      }
      ngOnDestroy() {
        this.initialized = !1;
      }
      static ɵfac = function (e) {
        return new (e || n)(H(vt), H(x));
      };
      static ɵdir = rt({
        type: n,
        selectors: [['', 'pButton', '']],
        hostAttrs: [1, 'p-element'],
        inputs: {
          iconPos: 'iconPos',
          loadingIcon: 'loadingIcon',
          label: 'label',
          icon: 'icon',
          loading: 'loading',
          severity: 'severity',
          raised: [2, 'raised', 'raised', D],
          rounded: [2, 'rounded', 'rounded', D],
          text: [2, 'text', 'text', D],
          outlined: [2, 'outlined', 'outlined', D],
          size: 'size',
          plain: [2, 'plain', 'plain', D],
        },
        standalone: !0,
        features: [at],
      });
    }
    return n;
  })(),
  Ti = (() => {
    class n {
      el;
      type = 'button';
      iconPos = 'left';
      icon;
      badge;
      label;
      disabled;
      loading = !1;
      loadingIcon;
      raised = !1;
      rounded = !1;
      text = !1;
      plain = !1;
      severity;
      outlined = !1;
      link = !1;
      tabindex;
      size;
      style;
      styleClass;
      badgeClass;
      ariaLabel;
      autofocus;
      onClick = new J();
      onFocus = new J();
      onBlur = new J();
      contentTemplate;
      loadingIconTemplate;
      iconTemplate;
      templates;
      constructor(t) {
        this.el = t;
      }
      spinnerIconClass() {
        return Object.entries(this.iconClass())
          .filter(([, t]) => !!t)
          .reduce((t, [e]) => t + ` ${e}`, 'p-button-loading-icon');
      }
      iconClass() {
        let t = {
          'p-button-icon': !0,
          'p-button-icon-left': this.iconPos === 'left' && this.label,
          'p-button-icon-right': this.iconPos === 'right' && this.label,
          'p-button-icon-top': this.iconPos === 'top' && this.label,
          'p-button-icon-bottom': this.iconPos === 'bottom' && this.label,
        };
        return (
          this.loading
            ? (t[`p-button-loading-icon pi-spin ${this.loadingIcon ?? ''}`] =
                !0)
            : this.icon && (t[this.icon] = !0),
          t
        );
      }
      get buttonClass() {
        return {
          'p-button p-component': !0,
          'p-button-icon-only':
            (this.icon ||
              this.iconTemplate ||
              this.loadingIcon ||
              this.loadingIconTemplate) &&
            !this.label,
          'p-button-vertical':
            (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label,
          'p-button-loading': this.loading,
          'p-button-loading-label-only':
            this.loading &&
            !this.icon &&
            this.label &&
            !this.loadingIcon &&
            this.iconPos === 'left',
          'p-button-link': this.link,
          [`p-button-${this.severity}`]: this.severity,
          'p-button-raised': this.raised,
          'p-button-rounded': this.rounded,
          'p-button-text': this.text,
          'p-button-outlined': this.outlined,
          'p-button-sm': this.size === 'small',
          'p-button-lg': this.size === 'large',
          'p-button-plain': this.plain,
          [`${this.styleClass}`]: this.styleClass,
        };
      }
      ngAfterContentInit() {
        this.templates?.forEach((t) => {
          switch (t.getType()) {
            case 'content':
              this.contentTemplate = t.template;
              break;
            case 'icon':
              this.iconTemplate = t.template;
              break;
            case 'loadingicon':
              this.loadingIconTemplate = t.template;
              break;
            default:
              this.contentTemplate = t.template;
              break;
          }
        });
      }
      badgeStyleClass() {
        return {
          'p-badge p-component': !0,
          'p-badge-no-gutter': this.badge && String(this.badge).length === 1,
        };
      }
      focus() {
        this.el.nativeElement.firstChild.focus();
      }
      static ɵfac = function (e) {
        return new (e || n)(H(vt));
      };
      static ɵcmp = N({
        type: n,
        selectors: [['p-button']],
        contentQueries: function (e, r, o) {
          if ((e & 1 && te(o, hn, 4), e & 2)) {
            let s;
            ee((s = ne())) && (r.templates = s);
          }
        },
        hostAttrs: [1, 'p-element'],
        hostVars: 2,
        hostBindings: function (e, r) {
          e & 2 && rr('p-disabled', r.disabled);
        },
        inputs: {
          type: 'type',
          iconPos: 'iconPos',
          icon: 'icon',
          badge: 'badge',
          label: 'label',
          disabled: [2, 'disabled', 'disabled', D],
          loading: [2, 'loading', 'loading', D],
          loadingIcon: 'loadingIcon',
          raised: [2, 'raised', 'raised', D],
          rounded: [2, 'rounded', 'rounded', D],
          text: [2, 'text', 'text', D],
          plain: [2, 'plain', 'plain', D],
          severity: 'severity',
          outlined: [2, 'outlined', 'outlined', D],
          link: [2, 'link', 'link', D],
          tabindex: [2, 'tabindex', 'tabindex', He],
          size: 'size',
          style: 'style',
          styleClass: 'styleClass',
          badgeClass: 'badgeClass',
          ariaLabel: 'ariaLabel',
          autofocus: [2, 'autofocus', 'autofocus', D],
        },
        outputs: { onClick: 'onClick', onFocus: 'onFocus', onBlur: 'onBlur' },
        standalone: !0,
        features: [at, V],
        ngContentSelectors: $a,
        decls: 7,
        vars: 14,
        consts: [
          [
            'pRipple',
            '',
            'pAutoFocus',
            '',
            3,
            'click',
            'focus',
            'blur',
            'ngStyle',
            'disabled',
            'ngClass',
            'autofocus',
          ],
          [4, 'ngTemplateOutlet'],
          [4, 'ngIf'],
          ['class', 'p-button-label', 4, 'ngIf'],
          [3, 'ngClass', 'class', 4, 'ngIf'],
          [4, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
          [3, 'ngClass', 4, 'ngIf'],
          [3, 'styleClass', 'spin', 4, 'ngIf'],
          [3, 'ngClass'],
          [3, 'styleClass', 'spin'],
          [3, 'ngIf'],
          [1, 'p-button-label'],
        ],
        template: function (e, r) {
          e & 1 &&
            (Xt(),
            u(0, 'button', 0),
            yt('click', function (s) {
              return r.onClick.emit(s);
            })('focus', function (s) {
              return r.onFocus.emit(s);
            })('blur', function (s) {
              return r.onBlur.emit(s);
            }),
            Jt(1),
            z(2, Ga, 1, 0, 'ng-container', 1)(3, Za, 3, 5, 'ng-container', 2)(
              4,
              tl,
              3,
              5,
              'ng-container',
              2
            )(5, el, 2, 3, 'span', 3)(6, nl, 2, 5, 'span', 4),
            h()),
            e & 2 &&
              (_('ngStyle', r.style)('disabled', r.disabled || r.loading)(
                'ngClass',
                r.buttonClass
              )('autofocus', r.autofocus),
              $('type', r.type)('aria-label', r.ariaLabel)(
                'data-pc-name',
                'button'
              )('data-pc-section', 'root')('tabindex', r.tabindex),
              M(2),
              _('ngTemplateOutlet', r.contentTemplate),
              M(),
              _('ngIf', r.loading),
              M(),
              _('ngIf', !r.loading),
              M(),
              _('ngIf', !r.contentTemplate && r.label),
              M(),
              _('ngIf', !r.contentTemplate && r.badge));
        },
        dependencies: [Be, Ge, $e, Pt, fn, pn, go],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })(),
  Wt = (() => {
    class n {
      static ɵfac = function (e) {
        return new (e || n)();
      };
      static ɵmod = X({ type: n });
      static ɵinj = Q({ imports: [Ti, Re] });
    }
    return n;
  })();
var gn = class n {
  activatedRoute = m(Ct);
  ngOnInit() {
    let i = this.activatedRoute.snapshot.paramMap;
    console.log(i);
  }
  static ɵfac = function (t) {
    return new (t || n)();
  };
  static ɵcmp = N({
    type: n,
    selectors: [['app-home']],
    standalone: !0,
    features: [V],
    decls: 192,
    vars: 2,
    consts: [
      [
        1,
        'flex',
        'flex-col',
        'w-full',
        'h-full',
        'gap-2',
        'overflow-hidden',
        'overflow-y-scroll',
      ],
      [
        1,
        'flex',
        'items-center',
        'justify-center',
        'w-full',
        'h-full',
        'p-4',
        'mx-auto',
        'md:h-full',
        'bg-primary',
      ],
      [
        1,
        'grid',
        'items-end',
        'justify-center',
        'universityImage',
        'h-[35rem]',
        'w-min',
        'md:w-full',
        'flex-col',
        'overflow-hidden',
        'rounded-lg',
        'bg-transparent',
        'bg-cover',
        'bg-center',
      ],
      [1, 'p-6', 'px-4', 'text-center', 'py-14', 'md:px-12'],
      [
        1,
        'p-2',
        'mb-1',
        'text-3xl',
        'font-extrabold',
        'shadow-lg',
        'rounded-xl',
        'bg-white/50',
        'ring-1',
        'ring-black/5',
        'text-primary_text',
      ],
      [1, 'flex', 'items-center', 'justify-center', 'gap-2'],
      ['pButton', '', 'label', 'Learn', 1, 'w-32', 'h-8', 'button_primary'],
      [
        'pButton',
        '',
        'label',
        'Apply Now',
        1,
        'w-32',
        'h-8',
        'button_secondary',
      ],
      [
        'id',
        'features',
        1,
        'relative',
        'block',
        'px-6',
        'py-10',
        'border-t',
        'border-b',
        'md:py-20',
        'md:px-4',
        'border-tertiary',
        'bg-primary',
      ],
      [1, 'max-w-5xl', 'mx-auto', 'text-center'],
      [
        1,
        'block',
        'w-full',
        'text-3xl',
        'font-bold',
        'text-transparent',
        'bg-gradient-to-b',
        'from-tertiary',
        'to-secondary',
        'bg-clip-text',
        'sm:text-4xl',
      ],
      [
        1,
        'w-full',
        'max-w-xl',
        'mx-auto',
        'my-4',
        'font-medium',
        'leading-relaxed',
        'tracking-wide',
        'text-center',
        'bg-transparent',
        'text-tertiary_text',
      ],
      [
        1,
        'relative',
        'z-10',
        'grid',
        'grid-cols-1',
        'gap-10',
        'mx-auto',
        'max-w-7xl',
        'pt-14',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
      ],
      [
        1,
        'px-4',
        'py-8',
        'text-center',
        'border',
        'rounded-md',
        'shadow',
        'border-tertiary',
        'bg-primary',
      ],
      [
        1,
        'flex',
        'items-center',
        'justify-center',
        'w-12',
        'h-12',
        'mx-auto',
        'border',
        'rounded-md',
        'text',
        'border-tertiary',
      ],
      [
        'xmlns',
        'http://www.w3.org/2000/svg',
        'width',
        '24',
        'height',
        '24',
        'viewBox',
        '0 0 24 24',
        'stroke-width',
        '2',
        'stroke',
        'currentColor',
        'fill',
        'none',
        'stroke-linecap',
        'round',
        'stroke-linejoin',
        'round',
        1,
        'icon',
        'icon-tabler',
        'icon-tabler-color-swatch',
      ],
      ['stroke', 'none', 'd', 'M0 0h24v24H0z', 'fill', 'none'],
      ['d', 'M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2'],
      [
        'd',
        'M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9',
      ],
      ['d', 'M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12'],
      ['x1', '17', 'y1', '17', 'x2', '17', 'y2', '17.01'],
      [1, 'mt-6', 'text-tertiary_text'],
      [
        1,
        'my-4',
        'mb-0',
        'font-normal',
        'leading-relaxed',
        'tracking-wide',
        'text-tertiary_text',
      ],
      [
        'xmlns',
        'http://www.w3.org/2000/svg',
        'width',
        '24',
        'height',
        '24',
        'viewBox',
        '0 0 24 24',
        'stroke-width',
        '2',
        'stroke',
        'currentColor',
        'fill',
        'none',
        'stroke-linecap',
        'round',
        'stroke-linejoin',
        'round',
        1,
        'icon',
        'icon-tabler',
        'icon-tabler-tools',
      ],
      ['d', 'M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4'],
      ['x1', '14.5', 'y1', '5.5', 'x2', '18.5', 'y2', '9.5'],
      ['points', '12 8 7 3 3 7 8 12'],
      ['x1', '7', 'y1', '8', 'x2', '5.5', 'y2', '9.5'],
      ['points', '16 12 21 17 17 21 12 16'],
      ['x1', '16', 'y1', '17', 'x2', '14.5', 'y2', '18.5'],
      [
        'xmlns',
        'http://www.w3.org/2000/svg',
        'width',
        '24',
        'height',
        '24',
        'viewBox',
        '0 0 24 24',
        'stroke-width',
        '2',
        'stroke',
        'currentColor',
        'fill',
        'none',
        'stroke-linecap',
        'round',
        'stroke-linejoin',
        'round',
        1,
        'icon',
        'icon-tabler',
        'icon-tabler-bolt',
      ],
      ['points', '13 3 13 10 19 10 11 21 11 14 5 14 13 3'],
      ['id', 'about', 1, 'bg-primary'],
      [1, 'container', 'px-4', 'py-16', 'mx-auto', 'sm:px-6', 'lg:px-8'],
      [1, 'grid', 'items-center', 'grid-cols-1', 'gap-8', 'md:grid-cols-2'],
      [1, 'max-w-lg'],
      [1, 'text-3xl', 'font-extrabold', 'text-gray-900', 'sm:text-4xl'],
      [1, 'mt-4', 'text-lg', 'text-gray-600'],
      [1, 'mt-8'],
      ['href', '#', 1, 'font-medium', 'text-blue-500', 'hover:text-blue-600'],
      [1, 'ml-2'],
      [1, 'w-full', 'h-full', 'md:mt-0'],
      [
        'ngSrc',
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86',
        'alt',
        'About Us Image',
        1,
        'object-cover',
        'rounded-lg',
        'shadow-md',
        3,
        'width',
        'height',
      ],
      ['id', 'contact', 1, 'w-full'],
      [
        'id',
        'map',
        1,
        'relative',
        'md:px-12',
        'h-[300px]',
        'overflow-hidden',
        'bg-cover',
        'bg-[50%]',
        'bg-no-repeat',
      ],
      [
        'src',
        Zi`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus`,
        'width',
        '100%',
        'height',
        '480',
        'allowfullscreen',
        '',
        'loading',
        'lazy',
        2,
        'border',
        '0',
      ],
      [1, 'w-full', 'px-6', 'md:px-12'],
      [
        1,
        'block',
        'rounded-lg',
        'bg-primary',
        'md:py-16',
        'md:px-12',
        '-mt-2',
        'backdrop-blur-[30px]',
        'border',
        'border-gray-300',
      ],
      [1, 'flex', 'flex-wrap'],
      [
        1,
        'w-full',
        'mb-12',
        'shrink-0',
        'grow-0',
        'basis-auto',
        'md:px-3',
        'lg:mb-0',
        'lg:w-5/12',
        'lg:px-6',
      ],
      ['data-te-input-wrapper-init', '', 1, 'relative', 'mb-6'],
      [
        'type',
        'text',
        'id',
        'exampleInput90',
        1,
        'peer',
        'block',
        'min-h-[auto]',
        'w-full',
        'rounded',
        'border-2',
        'bg-transparent',
        'py-[0.32rem]',
        'px-3',
        'leading-[1.6]',
        'outline-none',
        'transition-all',
        'duration-200',
        'ease-linear',
        'focus:placeholder:opacity-100',
        'peer-focus:text-primary',
        'data-[te-input-state-active]:placeholder:opacity-100',
        'motion-reduce:transition-none',
      ],
      [
        'for',
        'exampleInput90',
        1,
        'pointer-events-none',
        'absolute',
        'top-0',
        'left-3',
        'mb-0',
        'max-w-[90%]',
        'origin-[0_0]',
        'truncate',
        'pt-[0.37rem]',
        'leading-[1.6]',
        'text-neutral-500',
        'transition-all',
        'duration-200',
        'ease-out',
        'peer-focus:-translate-y-[0.9rem]',
        'peer-focus:scale-[0.8]',
        'peer-focus:text-primary',
        'peer-data-[te-input-state-active]:-translate-y-[0.9rem]',
        'peer-data-[te-input-state-active]:scale-[0.8]',
        'motion-reduce:transition-none',
      ],
      [
        'type',
        'email',
        'id',
        'exampleInput91',
        1,
        'peer',
        'block',
        'min-h-[auto]',
        'w-full',
        'rounded',
        'border-2',
        'bg-transparent',
        'py-[0.32rem]',
        'px-3',
        'leading-[1.6]',
        'outline-none',
        'transition-all',
        'duration-200',
        'ease-linear',
        'focus:placeholder:opacity-100',
        'peer-focus:text-primary',
        'data-[te-input-state-active]:placeholder:opacity-100',
        'motion-reduce:transition-none',
      ],
      [
        'for',
        'exampleInput91',
        1,
        'pointer-events-none',
        'absolute',
        'top-0',
        'left-3',
        'mb-0',
        'max-w-[90%]',
        'origin-[0_0]',
        'truncate',
        'pt-[0.37rem]',
        'leading-[1.6]',
        'text-neutral-500',
        'transition-all',
        'duration-200',
        'ease-out',
        'peer-focus:-translate-y-[0.9rem]',
        'peer-focus:scale-[0.8]',
        'peer-focus:text-primary',
        'peer-data-[te-input-state-active]:-translate-y-[0.9rem]',
        'peer-data-[te-input-state-active]:scale-[0.8]',
        'motion-reduce:transition-none',
      ],
      [
        'id',
        'exampleFormControlTextarea1',
        'rows',
        '3',
        1,
        'peer',
        'block',
        'min-h-[auto]',
        'w-full',
        'rounded',
        'border-2',
        'bg-transparent',
        'py-[0.32rem]',
        'px-3',
        'leading-[1.6]',
        'outline-none',
        'transition-all',
        'duration-200',
        'ease-linear',
        'focus:placeholder:opacity-100',
        'data-[te-input-state-active]:placeholder:opacity-100',
        'motion-reduce:transition-none',
      ],
      [
        'for',
        'exampleFormControlTextarea1',
        1,
        'pointer-events-none',
        'absolute',
        'top-0',
        'left-3',
        'mb-0',
        'max-w-[90%]',
        'origin-[0_0]',
        'truncate',
        'pt-[0.37rem]',
        'leading-[1.6]',
        'text-neutral-500',
        'transition-all',
        'duration-200',
        'ease-out',
        'peer-focus:-translate-y-[0.9rem]',
        'peer-focus:scale-[0.8]',
        'peer-focus:text-primary',
        'peer-data-[te-input-state-active]:-translate-y-[0.9rem]',
        'peer-data-[te-input-state-active]:scale-[0.8]',
        'motion-reduce:transition-none',
      ],
      [
        1,
        'mb-6',
        'inline-block',
        'min-h-[1.5rem]',
        'justify-center',
        'pl-[1.5rem]',
        'md:flex',
      ],
      [
        'type',
        'checkbox',
        'value',
        '',
        'id',
        'exampleCheck96',
        'checked',
        '',
        1,
        'relative',
        'float-left',
        'mt-[0.15rem]',
        'mr-[6px]',
        '-ml-[1.5rem]',
        'h-[1.125rem]',
        'w-[1.125rem]',
        'appearance-none',
        'rounded-[0.25rem]',
        'border-[0.125rem]',
        'border-solid',
        'border-neutral-300',
        'outline-none',
        'before:pointer-events-none',
        'before:absolute',
        'before:h-[0.875rem]',
        'before:w-[0.875rem]',
        'before:scale-0',
        'before:rounded-full',
        'before:bg-transparent',
        'before:opacity-0',
        'before:shadow-[0px_0px_0px_13px_transparent]',
        "before:content-['']",
        'checked:border-primary',
        'checked:bg-primary',
        'checked:before:opacity-[0.16]',
        'checked:after:absolute',
        'checked:after:ml-[0.25rem]',
        'checked:after:-mt-px',
        'checked:after:block',
        'checked:after:h-[0.8125rem]',
        'checked:after:w-[0.375rem]',
        'checked:after:rotate-45',
        'checked:after:border-[0.125rem]',
        'checked:after:border-t-0',
        'checked:after:border-l-0',
        'checked:after:border-solid',
        'checked:after:border-white',
        'checked:after:bg-transparent',
        "checked:after:content-['']",
        'hover:cursor-pointer',
        'hover:before:opacity-[0.04]',
        'hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)]',
        'focus:shadow-none',
        'focus:transition-[border-color_0.2s]',
        'focus:before:scale-100',
        'focus:before:opacity-[0.12]',
        'focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)]',
        'focus:before:transition-[box-shadow_0.2s,transform_0.2s]',
        'focus:after:absolute',
        'focus:after:z-[1]',
        'focus:after:block',
        'focus:after:h-[0.875rem]',
        'focus:after:w-[0.875rem]',
        'focus:after:rounded-[0.125rem]',
        "focus:after:content-['']",
        'checked:focus:before:scale-100',
        'checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]',
        'checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]',
        'checked:focus:after:ml-[0.25rem]',
        'checked:focus:after:-mt-px',
        'checked:focus:after:h-[0.8125rem]',
        'checked:focus:after:w-[0.375rem]',
        'checked:focus:after:rotate-45',
        'checked:focus:after:rounded-none',
        'checked:focus:after:border-[0.125rem]',
        'checked:focus:after:border-t-0',
        'checked:focus:after:border-l-0',
        'checked:focus:after:border-solid',
        'checked:focus:after:border-white',
        'checked:focus:after:bg-transparent',
      ],
      [
        'for',
        'exampleCheck96',
        1,
        'inline-block',
        'pl-[0.15rem]',
        'hover:cursor-pointer',
      ],
      [
        'type',
        'button',
        1,
        'mb-6',
        'w-full',
        'rounded',
        'bg-sky-500',
        'text-white',
        'px-6',
        'pt-2.5',
        'pb-2',
        'text-xs',
        'font-medium',
        'uppercase',
        'leading-normal',
        'lg:mb-0',
      ],
      [1, 'w-full', 'shrink-0', 'grow-0', 'basis-auto', 'lg:w-7/12'],
      [
        1,
        'w-full',
        'mb-12',
        'shrink-0',
        'grow-0',
        'basis-auto',
        'md:w-6/12',
        'md:px-3',
        'lg:w-full',
        'lg:px-6',
        'xl:w-6/12',
      ],
      [1, 'flex', 'items-start'],
      [1, 'shrink-0'],
      [1, 'inline-block', 'p-4', 'rounded-md', 'bg-sky-200', 'text-primary'],
      [
        'xmlns',
        'http://www.w3.org/2000/svg',
        'fill',
        'none',
        'viewBox',
        '0 0 24 24',
        'stroke-width',
        '2',
        'stroke',
        'currentColor',
        1,
        'w-6',
        'h-6',
      ],
      [
        'stroke-linecap',
        'round',
        'stroke-linejoin',
        'round',
        'd',
        'M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z',
      ],
      [1, 'ml-6', 'grow'],
      [1, 'mb-2', 'font-bold'],
      [1, 'text-sm', 'text-neutral-500'],
      [1, 'srink-0'],
      [
        'xmlns',
        'http://www.w3.org/2000/svg',
        'fill',
        'none',
        'viewBox',
        '0 0 24 24',
        'stroke-width',
        '2',
        'stroke',
        'currentColor',
        1,
        'w-7',
        'h-7',
      ],
      [
        'stroke-linecap',
        'round',
        'stroke-linejoin',
        'round',
        'd',
        'M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z',
      ],
      [
        1,
        'w-full',
        'mb-12',
        'shrink-0',
        'grow-0',
        'basis-auto',
        'md:mb-0',
        'md:w-6/12',
        'md:px-3',
        'lg:mb-12',
        'lg:w-full',
        'lg:px-6',
        'xl:w-6/12',
      ],
      [1, 'flex', 'align-start'],
      [
        'version',
        '1.1',
        'id',
        'Layer_1',
        'xmlns',
        'http://www.w3.org/2000/svg',
        0,
        'xmlns',
        'xlink',
        'http://www.w3.org/1999/xlink',
        'x',
        '0px',
        'y',
        '0px',
        'viewBox',
        '0 0 111.756 122.879',
        'enable-background',
        'new 0 0 111.756 122.879',
        0,
        'xml',
        'space',
        'preserve',
        1,
        'w-7',
        'h-7',
      ],
      [
        'd',
        'M27.953,5.569v96.769h19.792V5.569H37.456H27.953L27.953,5.569z M21.898,105.123V2.785C21.898,1.247,23.254,0,24.926,0 h12.53h13.316C52.443,0,53.8,1.247,53.8,2.785v102.338c0,1.537-1.356,2.783-3.028,2.783H24.926 C23.254,107.906,21.898,106.66,21.898,105.123L21.898,105.123z M13.32,17.704c1.671,0,3.027,1.247,3.027,2.785 s-1.355,2.784-3.027,2.784H7.352c-0.161,0-0.292,0.022-0.39,0.064c-0.129,0.056-0.276,0.166-0.429,0.325 c-0.161,0.167-0.281,0.346-0.353,0.528c-0.083,0.208-0.125,0.465-0.125,0.759v90.803c0,0.287,0.043,0.537,0.125,0.74l0.034,0.092 c0.068,0.135,0.165,0.264,0.284,0.383c0.126,0.125,0.258,0.217,0.39,0.27c0.123,0.051,0.279,0.074,0.466,0.074h97.052 c0.188,0,0.346-0.025,0.467-0.074c0.133-0.053,0.264-0.145,0.389-0.27c3.035-3.035,0.441,1.799,0.441-1.215V24.949 c0-3.667,3.039,2.357-0.477-1.288c-0.143-0.146-0.287-0.254-0.43-0.314c-0.113-0.048-0.246-0.075-0.391-0.075H62.563 c-1.672,0-3.027-1.247-3.027-2.784s1.355-2.785,3.027-2.785h41.842c1.041,0,2.029,0.204,2.943,0.597 c0.895,0.385,1.699,0.945,2.393,1.663c0.664,0.686,1.17,1.468,1.514,2.334c0.332,0.839,0.502,1.726,0.502,2.652v90.803 c0,0.938-0.168,1.826-0.502,2.654c-0.344,0.859-0.865,1.639-1.549,2.324c-0.701,0.703-1.506,1.234-2.398,1.598 c-0.906,0.367-1.879,0.551-2.902,0.551H7.352c-1.022,0-1.995-0.184-2.901-0.551c-0.894-0.363-1.698-0.896-2.399-1.598 c-0.621-0.623-1.107-1.33-1.45-2.107c-0.036-0.07-0.069-0.143-0.099-0.217C0.168,117.574,0,116.684,0,115.752V24.949 c0-0.921,0.17-1.811,0.504-2.652c0.342-0.863,0.849-1.648,1.512-2.334c0.683-0.707,1.488-1.263,2.393-1.652 c0.929-0.401,1.917-0.607,2.943-0.607H13.32L13.32,17.704z M65.902,29.03h27.049c0.803,0,1.566,0.145,2.291,0.431 c0.076,0.03,0.15,0.063,0.223,0.099c0.607,0.269,1.166,0.635,1.666,1.096c0.584,0.533,1.027,1.128,1.326,1.782 c0.047,0.104,0.088,0.21,0.119,0.317c0.225,0.584,0.34,1.189,0.34,1.812v12.611c0,0.744-0.156,1.45-0.459,2.118l-0.004,0.009 l0.004,0.002c-0.291,0.64-0.725,1.224-1.291,1.75c-0.58,0.546-1.227,0.956-1.932,1.231c-0.736,0.287-1.5,0.426-2.283,0.426H65.902 c-0.777,0-1.535-0.14-2.27-0.426c-0.693-0.269-1.33-0.668-1.912-1.198c-0.588-0.539-1.031-1.144-1.326-1.81 c-0.033-0.078-0.063-0.157-0.09-0.235c-0.234-0.605-0.35-1.228-0.35-1.867V34.567c0-0.723,0.146-1.424,0.445-2.099l-0.006-0.002 c0.295-0.666,0.738-1.271,1.326-1.81l0.037-0.032l-0.002-0.001c0.877-0.78,2.039-1.219,2.119-1.244 C64.537,29.147,65.215,29.03,65.902,29.03L65.902,29.03z M93.475,34.599h-28.08v12.547h28.08V34.599L93.475,34.599z M78.877,63.42 c1.072,0,2.01,0.41,2.807,1.207s1.188,1.734,1.188,2.785c0,1.148-0.389,2.104-1.188,2.865c-0.799,0.758-1.734,1.129-2.807,1.129 c-1.129,0-2.084-0.371-2.844-1.129c-0.76-0.762-1.148-1.717-1.148-2.865c0-1.051,0.391-1.988,1.148-2.785 S77.748,63.42,78.877,63.42L78.877,63.42z M90.977,63.42c1.072,0,2.008,0.41,2.805,1.207s1.189,1.734,1.189,2.785 c0,1.148-0.391,2.104-1.189,2.865c-0.799,0.758-1.732,1.129-2.805,1.129c-1.131,0-2.086-0.371-2.846-1.129 c-0.76-0.762-1.148-1.717-1.148-2.865c0-1.051,0.391-1.988,1.148-2.785S89.846,63.42,90.977,63.42L90.977,63.42z M66.662,75.518 c1.15,0,2.105,0.389,2.865,1.148s1.129,1.715,1.129,2.865c0,1.051-0.371,1.988-1.129,2.785s-1.715,1.209-2.865,1.209 c-1.053,0-1.988-0.412-2.785-1.209s-1.209-1.734-1.209-2.785c0-1.15,0.41-2.105,1.209-2.865S65.609,75.518,66.662,75.518 L66.662,75.518z M78.877,75.518c1.072,0,2.008,0.389,2.807,1.148s1.188,1.715,1.188,2.865c0,1.051-0.391,1.988-1.188,2.785 s-1.734,1.209-2.807,1.209c-1.129,0-2.086-0.412-2.844-1.209s-1.148-1.734-1.148-2.785c0-1.15,0.389-2.105,1.148-2.865 S77.748,75.518,78.877,75.518L78.877,75.518z M90.977,75.518c1.072,0,2.006,0.389,2.805,1.148s1.189,1.715,1.189,2.865 c0,1.051-0.393,1.988-1.189,2.785s-1.732,1.209-2.805,1.209c-1.131,0-2.088-0.412-2.846-1.209s-1.148-1.734-1.148-2.785 c0-1.15,0.389-2.105,1.148-2.865S89.846,75.518,90.977,75.518L90.977,75.518z M66.662,87.518c1.15,0,2.107,0.393,2.865,1.189 s1.129,1.773,1.129,2.922c0,1.053-0.369,1.988-1.129,2.787s-1.715,1.207-2.865,1.207c-1.053,0-1.986-0.408-2.785-1.207 s-1.209-1.734-1.209-2.787c0-1.148,0.412-2.125,1.209-2.922S65.609,87.518,66.662,87.518L66.662,87.518z M78.877,87.518 c1.072,0,2.01,0.393,2.807,1.189s1.188,1.773,1.188,2.922c0,1.053-0.389,1.988-1.188,2.787s-1.734,1.207-2.807,1.207 c-1.129,0-2.084-0.408-2.844-1.207s-1.148-1.734-1.148-2.787c0-1.148,0.391-2.125,1.148-2.922S77.748,87.518,78.877,87.518 L78.877,87.518z M90.977,87.518c1.072,0,2.008,0.393,2.805,1.189s1.189,1.773,1.189,2.922c0,1.053-0.391,1.988-1.189,2.787 s-1.732,1.207-2.805,1.207c-1.131,0-2.086-0.408-2.846-1.207s-1.148-1.734-1.148-2.787c0-1.148,0.391-2.125,1.148-2.922 S89.846,87.518,90.977,87.518L90.977,87.518z M78.877,99.617c1.072,0,2.008,0.389,2.807,1.188s1.188,1.734,1.188,2.807 c0,1.129-0.389,2.084-1.188,2.844s-1.734,1.148-2.807,1.148c-1.129,0-2.084-0.389-2.844-1.148s-1.148-1.715-1.148-2.844 c0-1.072,0.389-2.008,1.148-2.807S77.748,99.617,78.877,99.617L78.877,99.617z M66.662,63.42c1.15,0,2.107,0.41,2.865,1.207 s1.129,1.734,1.129,2.785c0,1.148-0.369,2.104-1.129,2.865c-0.76,0.758-1.715,1.129-2.865,1.129c-1.053,0-1.986-0.371-2.785-1.129 c-0.799-0.762-1.209-1.717-1.209-2.865c0-1.051,0.412-1.988,1.209-2.785S65.609,63.42,66.662,63.42L66.662,63.42z',
      ],
      [1, 'text-neutral-500'],
      [
        1,
        'w-full',
        'shrink-0',
        'grow-0',
        'basis-auto',
        'md:w-6/12',
        'md:px-3',
        'lg:w-full',
        'lg:px-6',
        'xl:mb-12',
        'xl:w-6/12',
      ],
      [
        'xmlns',
        'http://www.w3.org/2000/svg',
        'fill',
        'none',
        'viewBox',
        '0 0 24 24',
        'stroke-width',
        '1.5',
        'stroke',
        'currentColor',
        1,
        'w-6',
        'h-6',
      ],
      [
        'stroke-linecap',
        'round',
        'stroke-linejoin',
        'round',
        'd',
        'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
      ],
      [1, 'px-3', 'pt-4', 'bg-gray-100', 'border-t-2', 'lg:px-9'],
      [
        1,
        'grid',
        'gap-10',
        'row-gap-6',
        'mb-8',
        'sm:grid-cols-2',
        'lg:grid-cols-4',
      ],
      [1, 'flex', 'flex-col', 'gap-2', 'text-sm'],
      [1, 'text-base', 'font-bold', 'tracking-wide', 'text-gray-900'],
      ['href', '#'],
      [1, 'flex', 'items-center', 'gap-1', 'px-2'],
      ['href', '#', 1, 'w-full', 'min-w-xl'],
      [
        'ngSrc',
        'https://mcqmate.com/public/images/icons/playstore.svg',
        'alt',
        'Playstore Button',
        'width',
        '80',
        'height',
        '80',
      ],
      [
        'href',
        'https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA',
        1,
        'w-full',
        'min-w-xl',
      ],
      [
        'ngSrc',
        'https://mcqmate.com/public/images/icons/youtube.svg',
        'alt',
        'Youtube Button',
        'width',
        '80',
        'height',
        '80',
      ],
      [1, 'flex'],
      [1, 'mr-1', 'text-gray-800'],
      ['href', '#', 'title', 'send email'],
      [
        1,
        'flex',
        'flex-col-reverse',
        'justify-between',
        'pt-5',
        'pb-10',
        'border-t',
        'lg:flex-row',
      ],
      [1, 'text-sm', 'text-gray-600'],
      [
        1,
        'flex',
        'flex-col',
        'mb-3',
        'space-y-2',
        'lg:mb-0',
        'sm:space-y-0',
        'sm:space-x-5',
        'sm:flex-row',
      ],
      [
        'href',
        '#',
        1,
        'text-sm',
        'text-gray-600',
        'transition-colors',
        'duration-300',
        'hover:text-deep-purple-accent-400',
      ],
    ],
    template: function (t, e) {
      t & 1 &&
        (u(0, 'div', 0)(1, 'section', 1)(2, 'div', 2)(3, 'div', 3)(4, 'h2', 4),
        f(5, ' Guided by Faith, Enriched by Knowledge '),
        h(),
        u(6, 'div', 5),
        b(7, 'p-button', 6)(8, 'p-button', 7),
        h()()()(),
        u(9, 'section', 8)(10, 'div', 9)(11, 'h2', 10),
        f(12, ' Academic Programs '),
        h(),
        u(13, 'p', 11),
        f(
          14,
          ' : Explore our extensive catalog of online courses across various fields, including: '
        ),
        h()(),
        u(15, 'div', 12)(16, 'div', 13)(17, 'div', 14),
        ot(),
        u(18, 'svg', 15),
        b(19, 'path', 16)(20, 'path', 17)(21, 'path', 18)(22, 'path', 19)(
          23,
          'line',
          20
        ),
        h()(),
        mt(),
        u(24, 'h3', 21),
        f(25, 'Bachelor of Islamic Studies'),
        h(),
        u(26, 'p', 22),
        f(
          27,
          "Tailor your landing page's look and feel, from the color scheme to the font size, to the design of the page. "
        ),
        h()(),
        u(28, 'div', 13)(29, 'div', 14),
        ot(),
        u(30, 'svg', 23),
        b(31, 'path', 16)(32, 'path', 24)(33, 'line', 25)(34, 'polyline', 26)(
          35,
          'line',
          27
        )(36, 'polyline', 28)(37, 'line', 29),
        h()(),
        mt(),
        u(38, 'h3', 21),
        f(39, 'Bachelor of Arts in Arabic Language'),
        h(),
        u(40, 'p', 22),
        f(
          41,
          "Tailor your landing page's look and feel, from the color scheme to the font size, to the design of the page. "
        ),
        h()(),
        u(42, 'div', 13)(43, 'div', 14),
        ot(),
        u(44, 'svg', 30),
        b(45, 'path', 16)(46, 'polyline', 31),
        h()(),
        mt(),
        u(47, 'h3', 21),
        f(48, 'Islamic Ethics '),
        h(),
        u(49, 'p', 22),
        f(
          50,
          "Tailor your landing page's look and feel, from the color scheme to the font size, to the design of the page. "
        ),
        h()()()(),
        u(51, 'section', 32)(52, 'div', 33)(53, 'div', 34)(54, 'div', 35)(
          55,
          'h2',
          36
        ),
        f(56, 'About Us'),
        h(),
        u(57, 'p', 37),
        f(
          58,
          'Mission Statement: Our mission is to foster a community of learning that integrates Islamic teachings with modern education, empowering students to contribute positively to society. '
        ),
        h(),
        u(59, 'p', 37),
        f(
          60,
          'Vision: To be a leading institution that promotes academic excellence and Islamic ethics.'
        ),
        h(),
        u(61, 'p', 37),
        f(
          62,
          'History: Established in [Year], [Islamic University Name] has been a pioneer in Islamic education for [Number] years.'
        ),
        h(),
        u(63, 'div', 38)(64, 'a', 39),
        f(65, 'Learn more about us '),
        u(66, 'span', 40),
        f(67, '\u2192'),
        h()()()(),
        u(68, 'div', 41),
        b(69, 'img', 42),
        h()()()(),
        u(70, 'section', 43)(71, 'div', 44),
        b(72, 'iframe', 45),
        h(),
        u(73, 'div', 46)(74, 'div', 47)(75, 'div', 48)(76, 'div', 49)(
          77,
          'form'
        )(78, 'div', 50),
        b(79, 'input', 51),
        u(80, 'label', 52),
        f(81, 'Name '),
        h()(),
        u(82, 'div', 50),
        b(83, 'input', 53),
        u(84, 'label', 54),
        f(85, 'Email address '),
        h()(),
        u(86, 'div', 50),
        b(87, 'textarea', 55),
        u(88, 'label', 56),
        f(89, 'Message'),
        h()(),
        u(90, 'div', 57),
        b(91, 'input', 58),
        u(92, 'label', 59),
        f(93, ' Send me a copy of this message '),
        h()(),
        u(94, 'button', 60),
        f(95, ' Send '),
        h()()(),
        u(96, 'div', 61)(97, 'div', 48)(98, 'div', 62)(99, 'div', 63)(
          100,
          'div',
          64
        )(101, 'div', 65),
        ot(),
        u(102, 'svg', 66),
        b(103, 'path', 67),
        h()()(),
        mt(),
        u(104, 'div', 68)(105, 'p', 69),
        f(106, ' Technical support '),
        h(),
        u(107, 'p', 70),
        f(108, ' example@gmail.com '),
        h(),
        u(109, 'p', 70),
        f(110, ' 1-600-890-4567 '),
        h()()()(),
        u(111, 'div', 62)(112, 'div', 63)(113, 'div', 71)(114, 'div', 65),
        ot(),
        u(115, 'svg', 72),
        b(116, 'path', 73),
        h()()(),
        mt(),
        u(117, 'div', 68)(118, 'p', 69),
        f(119, ' Address '),
        h(),
        u(120, 'p', 70),
        f(121, ' abcd, '),
        b(122, 'br'),
        f(123, ' xyz '),
        b(124, 'br'),
        h()()()(),
        u(125, 'div', 74)(126, 'div', 75)(127, 'div', 64)(128, 'div', 65),
        ot(),
        u(129, 'svg', 76)(130, 'g'),
        b(131, 'path', 77),
        h()()()(),
        mt(),
        u(132, 'div', 68)(133, 'p', 69),
        f(134, 'Land Line'),
        h(),
        u(135, 'p', 78),
        f(136, ' (0421) 431 2030 '),
        h()()()(),
        u(137, 'div', 79)(138, 'div', 75)(139, 'div', 64)(140, 'div', 65),
        ot(),
        u(141, 'svg', 80),
        b(142, 'path', 81),
        h()()(),
        mt(),
        u(143, 'div', 68)(144, 'p', 69),
        f(145, 'Mobile'),
        h(),
        u(146, 'p', 78),
        f(147, ' +91 123456789 '),
        h()()()()()()()()()(),
        u(148, 'footer', 82)(149, 'div', 83)(150, 'div', 84)(151, 'p', 85),
        f(152, 'Popular Courses'),
        h(),
        u(153, 'a', 86),
        f(154, 'UPSC - Union Public Service Commission'),
        h(),
        u(155, 'a', 86),
        f(156, 'General Knowledge'),
        h(),
        u(157, 'a', 86),
        f(158, 'MBA'),
        h(),
        u(159, 'p', 85),
        f(160, 'Popular Topics'),
        h(),
        u(161, 'a', 86),
        f(162, 'Human Resource Management'),
        h(),
        u(163, 'a', 86),
        f(164, 'Operations Management'),
        h(),
        u(165, 'a', 86),
        f(166, 'Marketing Management'),
        h()(),
        u(167, 'div')(168, 'p', 85),
        f(169, 'COMPANY IS ALSO AVAILABLE ON'),
        h(),
        u(170, 'div', 87)(171, 'a', 88),
        b(172, 'img', 89),
        h(),
        u(173, 'a', 90),
        b(174, 'img', 91),
        h()(),
        u(175, 'p', 85),
        f(176, 'Contacts'),
        h(),
        u(177, 'div', 92)(178, 'p', 93),
        f(179, 'Email:'),
        h(),
        u(180, 'a', 94),
        f(181, 'admin@company.com'),
        h()()()(),
        u(182, 'div', 95)(183, 'p', 96),
        f(184, '\xA9 Copyright 2023 Company. All rights reserved.'),
        h(),
        u(185, 'ul', 97)(186, 'li')(187, 'a', 98),
        f(188, 'Privacy & Cookies Policy '),
        h()(),
        u(189, 'li')(190, 'a', 98),
        f(191, 'Disclaimer '),
        h()()()()()()),
        t & 2 && (M(69), _('width', 1200)('height', 800));
    },
    dependencies: [gr, Et, Wt, yo, Ti],
    styles: [
      '.universityImage[_ngcontent-%COMP%]{background-image:var(--universityImage)}',
    ],
  });
};
var Co = new F('');
var rl = {
    '[class.ng-untouched]': 'isUntouched',
    '[class.ng-touched]': 'isTouched',
    '[class.ng-pristine]': 'isPristine',
    '[class.ng-dirty]': 'isDirty',
    '[class.ng-valid]': 'isValid',
    '[class.ng-invalid]': 'isInvalid',
    '[class.ng-pending]': 'isPending',
  },
  Xu = P(g({}, rl), { '[class.ng-submitted]': 'isSubmitted' });
var sl = (n, i, t) => ({
    'p-togglebutton p-button p-component': !0,
    'p-button-icon-only': n,
    'p-highlight': i,
    'p-disabled': t,
  }),
  al = (n, i) => ({
    'p-button-icon': !0,
    'p-button-icon-left': n,
    'p-button-icon-right': i,
  }),
  ll = (n) => ({ $implicit: n });
function cl(n, i) {
  if ((n & 1 && b(0, 'span', 4), n & 2)) {
    let t = j(2);
    wt(t.checked ? t.onIcon : t.offIcon),
      _('ngClass', ke(4, al, t.iconPos === 'left', t.iconPos === 'right')),
      $('data-pc-section', 'icon');
  }
}
function ul(n, i) {
  if ((n & 1 && z(0, cl, 1, 7, 'span', 3), n & 2)) {
    let t = j();
    _('ngIf', t.onIcon || t.offIcon);
  }
}
function dl(n, i) {
  n & 1 && Ve(0);
}
function hl(n, i) {
  if ((n & 1 && z(0, dl, 1, 0, 'ng-container', 5), n & 2)) {
    let t = j();
    _('ngTemplateOutlet', t.iconTemplate)(
      'ngTemplateOutletContext',
      re(2, ll, t.checked)
    );
  }
}
function pl(n, i) {
  if ((n & 1 && (u(0, 'span', 6), f(1), h()), n & 2)) {
    let t = j();
    $('data-pc-section', 'label'),
      M(),
      ie(
        t.checked
          ? t.hasOnLabel
            ? t.onLabel
            : ''
          : t.hasOffLabel
            ? t.offLabel
            : ''
      );
  }
}
var fl = { provide: Co, useExisting: In(() => gl), multi: !0 },
  gl = (() => {
    class n {
      cd;
      onLabel;
      offLabel;
      onIcon;
      offIcon;
      ariaLabel;
      ariaLabelledBy;
      disabled;
      style;
      styleClass;
      inputId;
      tabindex = 0;
      iconPos = 'left';
      autofocus;
      onChange = new J();
      templates;
      iconTemplate;
      checked = !1;
      onModelChange = () => {};
      onModelTouched = () => {};
      constructor(t) {
        this.cd = t;
      }
      ngAfterContentInit() {
        this.templates.forEach((t) => {
          switch (t.getType()) {
            case 'icon':
              this.iconTemplate = t.template;
              break;
            default:
              this.iconTemplate = t.template;
              break;
          }
        });
      }
      toggle(t) {
        this.disabled ||
          ((this.checked = !this.checked),
          this.onModelChange(this.checked),
          this.onModelTouched(),
          this.onChange.emit({ originalEvent: t, checked: this.checked }),
          this.cd.markForCheck());
      }
      onKeyDown(t) {
        switch (t.code) {
          case 'Enter':
            this.toggle(t), t.preventDefault();
            break;
          case 'Space':
            this.toggle(t), t.preventDefault();
            break;
        }
      }
      onBlur() {
        this.onModelTouched();
      }
      writeValue(t) {
        (this.checked = t), this.cd.markForCheck();
      }
      registerOnChange(t) {
        this.onModelChange = t;
      }
      registerOnTouched(t) {
        this.onModelTouched = t;
      }
      setDisabledState(t) {
        (this.disabled = t), this.cd.markForCheck();
      }
      get hasOnLabel() {
        return this.onLabel && this.onLabel.length > 0;
      }
      get hasOffLabel() {
        return this.onLabel && this.onLabel.length > 0;
      }
      static ɵfac = function (e) {
        return new (e || n)(H(Lt));
      };
      static ɵcmp = N({
        type: n,
        selectors: [['p-toggleButton']],
        contentQueries: function (e, r, o) {
          if ((e & 1 && te(o, hn, 4), e & 2)) {
            let s;
            ee((s = ne())) && (r.templates = s);
          }
        },
        hostAttrs: [1, 'p-element'],
        inputs: {
          onLabel: 'onLabel',
          offLabel: 'offLabel',
          onIcon: 'onIcon',
          offIcon: 'offIcon',
          ariaLabel: 'ariaLabel',
          ariaLabelledBy: 'ariaLabelledBy',
          disabled: [2, 'disabled', 'disabled', D],
          style: 'style',
          styleClass: 'styleClass',
          inputId: 'inputId',
          tabindex: [2, 'tabindex', 'tabindex', He],
          iconPos: 'iconPos',
          autofocus: [2, 'autofocus', 'autofocus', D],
        },
        outputs: { onChange: 'onChange' },
        features: [or([fl]), at],
        decls: 4,
        vars: 17,
        consts: [
          [
            'role',
            'switch',
            'pRipple',
            '',
            'pAutoFocus',
            '',
            3,
            'click',
            'keydown',
            'ngClass',
            'ngStyle',
            'autofocus',
          ],
          [3, 'class', 'ngClass'],
          ['class', 'p-button-label', 4, 'ngIf'],
          [3, 'class', 'ngClass', 4, 'ngIf'],
          [3, 'ngClass'],
          [4, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
          [1, 'p-button-label'],
        ],
        template: function (e, r) {
          e & 1 &&
            (u(0, 'div', 0),
            yt('click', function (s) {
              return r.toggle(s);
            })('keydown', function (s) {
              return r.onKeyDown(s);
            }),
            z(1, ul, 1, 1, 'span', 1)(2, hl, 1, 4, 'ng-container')(
              3,
              pl,
              2,
              2,
              'span',
              2
            ),
            h()),
            e & 2 &&
              (wt(r.styleClass),
              _(
                'ngClass',
                sr(
                  13,
                  sl,
                  r.onIcon && r.offIcon && !r.hasOnLabel && !r.hasOffLabel,
                  r.checked,
                  r.disabled
                )
              )('ngStyle', r.style)('autofocus', r.autofocus),
              $('tabindex', r.disabled ? null : r.tabindex)(
                'aria-checked',
                r.checked
              )('aria-labelledby', r.ariaLabelledBy)('aria-label', r.ariaLabel)(
                'data-pc-name',
                'togglebutton'
              )('data-pc-section', 'root'),
              M(),
              Le(r.iconTemplate ? 2 : 1),
              M(2),
              _('ngIf', r.onLabel || r.offLabel));
        },
        dependencies: [Pt, Be, Ge, $e, fn, pn],
        styles: [
          '@layer primeng{.p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default;pointer-events:none}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus, .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:focus   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus, .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:focus   .p-button[_ngcontent-%COMP%]{position:relative;z-index:1}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child), .p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child):hover, .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%], .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%]:hover, .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child), .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child):hover, .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%]:hover{border-right:0 none}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type), .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type), .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type)   .p-button[_ngcontent-%COMP%]{border-radius:0}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type), .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type), .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type), .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type), .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}p-button[iconpos=right][_ngcontent-%COMP%]   spinnericon[_ngcontent-%COMP%]{order:1}}',
        ],
        changeDetection: 0,
      });
    }
    return n;
  })(),
  bo = (() => {
    class n {
      static ɵfac = function (e) {
        return new (e || n)();
      };
      static ɵmod = X({ type: n });
      static ɵinj = Q({ imports: [Et, mo, Re, po, Re] });
    }
    return n;
  })();
var mn = class n {
  document = m(x);
  switchThemes(i) {
    let t = this.document.getElementById('app-theme');
    t && (t.href = i + '.css');
  }
  static ɵfac = function (t) {
    return new (t || n)();
  };
  static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: 'root' });
};
var ml = (n, i) => ({ hidden: n, flex: i });
function vl(n, i) {
  n & 1 && b(0, 'div', 5);
}
function yl(n, i) {
  n & 1 && b(0, 'div', 6);
}
var vn = class n {
  themeService = m(mn);
  currentTheme = 'theme_light';
  isNavbarCollapsed = !1;
  ngOnInit() {
    console.log('hi');
  }
  switchThemes() {
    (this.currentTheme =
      this.currentTheme === 'theme_light' ? 'theme_dark' : 'theme_light'),
      this.themeService.switchThemes(this.currentTheme);
  }
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  static ɵfac = function (t) {
    return new (t || n)();
  };
  static ɵcmp = N({
    type: n,
    selectors: [['app-header']],
    standalone: !0,
    features: [V],
    decls: 23,
    vars: 5,
    consts: [
      [
        1,
        'sticky',
        'z-50',
        'top-0',
        'left-0',
        'right-0',
        'inset-0',
        'py-2',
        'md:py-2.5',
        'bg-secondary',
        'text-primary',
        'min-h-12',
        'md:min-h-16',
        'max-h-16',
      ],
      [1, 'container', 'md:flex', 'md:items-center'],
      [
        1,
        'z-50',
        'flex',
        'items-center',
        'justify-between',
        'px-4',
        'mx-auto',
        'sm:relative',
        'md:block',
      ],
      ['href', '#', 1, 'text-xl', 'font-bold', 'text-primary'],
      [
        'id',
        'navbar-toggle',
        1,
        'flex',
        'items-center',
        'justify-center',
        'object-center',
        'px-3',
        'py-1',
        'rounded',
        'opacity-50',
        'hover:opacity-75',
        'md:hidden',
        3,
        'click',
      ],
      [1, 'w-6', 'h-6', 'icons', 'menuIcon'],
      [1, 'w-6', 'h-6', 'icons', 'menuClose'],
      [
        'id',
        'navbar-collapse',
        1,
        'z-50',
        'flex-col',
        'w-full',
        'mt-3',
        'rig',
        'md:static',
        'md:flex',
        'md:flex-row',
        'md:justify-end',
        'md:ml-auto',
        'md:mt-0',
        'bg-secondary',
        3,
        'ngClass',
      ],
      ['href', '/home', 1, 'nav_button'],
      ['href', '/home/#about', 1, 'nav_button'],
      ['href', '/home/#features', 1, 'nav_button'],
      [1, 'flex', 'nav_button', 3, 'click'],
      ['href', '/home/#contact', 1, 'nav_button'],
      [
        'href',
        '#',
        1,
        'p-2',
        'text-center',
        'text-indigo-600',
        'transition-colors',
        'duration-300',
        'border',
        'border-transparent',
        'rounded',
        'lg:px-4',
        'md:mx-2',
        'hover:bg-indigo-100',
        'hover:text-indigo-700',
      ],
      [
        'href',
        '#',
        1,
        'p-2',
        'mt-1',
        'text-center',
        'text-indigo-600',
        'transition-colors',
        'duration-300',
        'border',
        'border-indigo-600',
        'border-solid',
        'rounded',
        'lg:px-4',
        'md:mx-2',
        'hover:bg-indigo-600',
        'hover:text-white',
        'md:mt-0',
        'md:ml-1',
      ],
    ],
    template: function (t, e) {
      t & 1 &&
        (u(0, 'nav', 0)(1, 'div', 1)(2, 'div', 2)(3, 'a', 3),
        f(4, 'BUGIU'),
        h(),
        u(5, 'button', 4),
        yt('click', function () {
          return e.toggleNavbar();
        }),
        z(6, vl, 1, 0, 'div', 5)(7, yl, 1, 0, 'div', 6),
        h()(),
        u(8, 'div', 7)(9, 'a', 8),
        f(10, 'Home'),
        h(),
        u(11, 'a', 9),
        f(12, 'About'),
        h(),
        u(13, 'a', 10),
        f(14, 'Features'),
        h(),
        u(15, 'button', 11),
        yt('click', function () {
          return e.switchThemes();
        }),
        f(16, 'Theme'),
        h(),
        u(17, 'a', 12),
        f(18, 'Contact'),
        h(),
        u(19, 'a', 13),
        f(20, 'Login'),
        h(),
        u(21, 'a', 14),
        f(22, 'Signup'),
        h()()()()),
        t & 2 &&
          (M(6),
          Le(e.isNavbarCollapsed ? 7 : 6),
          M(2),
          _('ngClass', ke(2, ml, !e.isNavbarCollapsed, e.isNavbarCollapsed)));
    },
    dependencies: [Et, Pt, Wt],
    styles: [
      '.menuIcon[_ngcontent-%COMP%]{background-image:var(--menuIcon)}.menuClose[_ngcontent-%COMP%]{background-image:var(--menuClose)}',
    ],
  });
};
var yn = class n {
  static ɵfac = function (t) {
    return new (t || n)();
  };
  static ɵcmp = N({
    type: n,
    selectors: [['app-layout']],
    standalone: !0,
    features: [V],
    decls: 4,
    vars: 0,
    consts: [
      [1, 'flex', 'flex-col', 'w-screen', 'h-screen'],
      [
        1,
        'md:h-[calc(100vh-4rem)]',
        'h-[calc(100vh-3rem)]',
        'w-full',
        'bg-primary',
      ],
    ],
    template: function (t, e) {
      t & 1 &&
        (u(0, 'div', 0),
        b(1, 'app-header'),
        u(2, 'div', 1),
        b(3, 'router-outlet'),
        h()());
    },
    dependencies: [Ie, Wt, bo, vn],
  });
};
var _o = [
  {
    path: '',
    component: yn,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: gn },
    ],
  },
];
var So = { providers: [lr({ eventCoalescing: !0 }), ao(_o), lo()] };
var Cn = class n {
  title = 'BUGIUFrontend';
  static ɵfac = function (t) {
    return new (t || n)();
  };
  static ɵcmp = N({
    type: n,
    selectors: [['app-root']],
    standalone: !0,
    features: [V],
    decls: 1,
    vars: 0,
    template: function (t, e) {
      t & 1 && b(0, 'router-outlet');
    },
    dependencies: [Ie],
  });
};
wr(Cn, So).catch((n) => console.error(n));
