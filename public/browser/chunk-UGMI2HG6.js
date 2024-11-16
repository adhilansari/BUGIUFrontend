var ul = Object.defineProperty,
  cl = Object.defineProperties;
var ll = Object.getOwnPropertyDescriptors;
var en = Object.getOwnPropertySymbols;
var Ji = Object.prototype.hasOwnProperty,
  Xi = Object.prototype.propertyIsEnumerable;
var Ki = (e, t, n) =>
    t in e
      ? ul(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  we = (e, t) => {
    for (var n in (t ||= {})) Ji.call(t, n) && Ki(e, n, t[n]);
    if (en) for (var n of en(t)) Xi.call(t, n) && Ki(e, n, t[n]);
    return e;
  },
  Ce = (e, t) => cl(e, ll(t));
var ay = (e, t) => {
  var n = {};
  for (var r in e) Ji.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && en)
    for (var r of en(e)) t.indexOf(r) < 0 && Xi.call(e, r) && (n[r] = e[r]);
  return n;
};
function dl(e, t) {
  return Object.is(e, t);
}
var R = null,
  tn = !1,
  nn = 1,
  nt = Symbol('SIGNAL');
function b(e) {
  let t = R;
  return (R = e), t;
}
function es() {
  return R;
}
var rn = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function ts(e) {
  if (tn) throw new Error('');
  if (R === null) return;
  R.consumerOnSignalRead(e);
  let t = R.nextProducerIndex++;
  if ((sn(R), t < R.producerNode.length && R.producerNode[t] !== e && At(R))) {
    let n = R.producerNode[t];
    on(n, R.producerIndexOfThis[t]);
  }
  R.producerNode[t] !== e &&
    ((R.producerNode[t] = e),
    (R.producerIndexOfThis[t] = At(R) ? is(e, R, t) : 0)),
    (R.producerLastReadVersion[t] = e.version);
}
function fl() {
  nn++;
}
function pl(e) {
  if (!(At(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === nn)) {
    if (!e.producerMustRecompute(e) && !Tr(e)) {
      (e.dirty = !1), (e.lastCleanEpoch = nn);
      return;
    }
    e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = nn);
  }
}
function ns(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = tn;
  tn = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || hl(n);
  } finally {
    tn = t;
  }
}
function rs() {
  return R?.consumerAllowSignalWrites !== !1;
}
function hl(e) {
  (e.dirty = !0), ns(e), e.consumerMarkedDirty?.(e);
}
function Sr(e) {
  return e && (e.nextProducerIndex = 0), b(e);
}
function os(e, t) {
  if (
    (b(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (At(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        on(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function Tr(e) {
  sn(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (pl(n), r !== n.version)) return !0;
  }
  return !1;
}
function Nr(e) {
  if ((sn(e), At(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      on(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function is(e, t, n) {
  if ((ss(e), e.liveConsumerNode.length === 0 && as(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = is(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function on(e, t) {
  if ((ss(e), e.liveConsumerNode.length === 1 && as(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      on(e.producerNode[r], e.producerIndexOfThis[r]);
  let n = e.liveConsumerNode.length - 1;
  if (
    ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
    (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length)
  ) {
    let r = e.liveConsumerIndexOfThis[t],
      o = e.liveConsumerNode[t];
    sn(o), (o.producerIndexOfThis[r] = t);
  }
}
function At(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function sn(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function ss(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function as(e) {
  return e.producerNode !== void 0;
}
function gl() {
  throw new Error();
}
var us = gl;
function cs() {
  us();
}
function ls(e) {
  us = e;
}
var ml = null;
function ds(e) {
  let t = Object.create(ps);
  t.value = e;
  let n = () => (ts(t), t.value);
  return (n[nt] = t), n;
}
function Ar(e, t) {
  rs() || cs(), e.equal(e.value, t) || ((e.value = t), yl(e));
}
function fs(e, t) {
  rs() || cs(), Ar(e, t(e.value));
}
var ps = Ce(we({}, rn), { equal: dl, value: void 0 });
function yl(e) {
  e.version++, fl(), ns(e), ml?.();
}
function m(e) {
  return typeof e == 'function';
}
function rt(e) {
  let n = e((r) => {
    Error.call(r), (r.stack = new Error().stack);
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var an = rt(
  (e) =>
    function (n) {
      e(this),
        (this.message = n
          ? `${n.length} errors occurred during unsubscription:
${n.map((r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)}`
          : ''),
        (this.name = 'UnsubscriptionError'),
        (this.errors = n);
    }
);
function Ot(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var P = class e {
  constructor(t) {
    (this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: n } = this;
      if (n)
        if (((this._parentage = null), Array.isArray(n)))
          for (let i of n) i.remove(this);
        else n.remove(this);
      let { initialTeardown: r } = this;
      if (m(r))
        try {
          r();
        } catch (i) {
          t = i instanceof an ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            hs(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof an ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new an(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) hs(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers =
          (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }
  _hasParent(t) {
    let { _parentage: n } = this;
    return n === t || (Array.isArray(n) && n.includes(t));
  }
  _addParent(t) {
    let { _parentage: n } = this;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }
  _removeParent(t) {
    let { _parentage: n } = this;
    n === t ? (this._parentage = null) : Array.isArray(n) && Ot(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && Ot(n, t), t instanceof e && t._removeParent(this);
  }
};
P.EMPTY = (() => {
  let e = new P();
  return (e.closed = !0), e;
})();
var Or = P.EMPTY;
function un(e) {
  return (
    e instanceof P ||
    (e && 'closed' in e && m(e.remove) && m(e.add) && m(e.unsubscribe))
  );
}
function hs(e) {
  m(e) ? e() : e.unsubscribe();
}
var oe = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var ot = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = ot;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = ot;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function cn(e) {
  ot.setTimeout(() => {
    let { onUnhandledError: t } = oe;
    if (t) t(e);
    else throw e;
  });
}
function Rt() {}
var gs = Rr('C', void 0, void 0);
function ms(e) {
  return Rr('E', void 0, e);
}
function ys(e) {
  return Rr('N', e, void 0);
}
function Rr(e, t, n) {
  return { kind: e, value: t, error: n };
}
var ke = null;
function it(e) {
  if (oe.useDeprecatedSynchronousErrorHandling) {
    let t = !ke;
    if ((t && (ke = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = ke;
      if (((ke = null), n)) throw r;
    }
  } else e();
}
function Ds(e) {
  oe.useDeprecatedSynchronousErrorHandling &&
    ke &&
    ((ke.errorThrown = !0), (ke.error = e));
}
var Le = class extends P {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), un(t) && t.add(this))
          : (this.destination = Il);
    }
    static create(t, n, r) {
      return new st(t, n, r);
    }
    next(t) {
      this.isStopped ? Pr(ys(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? Pr(ms(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? Pr(gs, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  Dl = Function.prototype.bind;
function Fr(e, t) {
  return Dl.call(e, t);
}
var kr = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          ln(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          ln(r);
        }
      else ln(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          ln(n);
        }
    }
  },
  st = class extends Le {
    constructor(t, n, r) {
      super();
      let o;
      if (m(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && oe.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && Fr(t.next, i),
              error: t.error && Fr(t.error, i),
              complete: t.complete && Fr(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new kr(o);
    }
  };
function ln(e) {
  oe.useDeprecatedSynchronousErrorHandling ? Ds(e) : cn(e);
}
function vl(e) {
  throw e;
}
function Pr(e, t) {
  let { onStoppedNotification: n } = oe;
  n && ot.setTimeout(() => n(e, t));
}
var Il = { closed: !0, next: Rt, error: vl, complete: Rt };
var at = (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
function Y(e) {
  return e;
}
function El(...e) {
  return Lr(e);
}
function Lr(e) {
  return e.length === 0
    ? Y
    : e.length === 1
      ? e[0]
      : function (n) {
          return e.reduce((r, o) => o(r), n);
        };
}
var S = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return (r.source = this), (r.operator = n), r;
    }
    subscribe(n, r, o) {
      let i = Cl(n) ? n : new st(n, r, o);
      return (
        it(() => {
          let { operator: s, source: a } = this;
          i.add(
            s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i)
          );
        }),
        i
      );
    }
    _trySubscribe(n) {
      try {
        return this._subscribe(n);
      } catch (r) {
        n.error(r);
      }
    }
    forEach(n, r) {
      return (
        (r = vs(r)),
        new r((o, i) => {
          let s = new st({
            next: (a) => {
              try {
                n(a);
              } catch (u) {
                i(u), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(n) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(n);
    }
    [at]() {
      return this;
    }
    pipe(...n) {
      return Lr(n)(this);
    }
    toPromise(n) {
      return (
        (n = vs(n)),
        new n((r, o) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => o(s),
            () => r(i)
          );
        })
      );
    }
  }
  return (e.create = (t) => new e(t)), e;
})();
function vs(e) {
  var t;
  return (t = e ?? oe.Promise) !== null && t !== void 0 ? t : Promise;
}
function wl(e) {
  return e && m(e.next) && m(e.error) && m(e.complete);
}
function Cl(e) {
  return (e && e instanceof Le) || (wl(e) && un(e));
}
function jr(e) {
  return m(e?.lift);
}
function E(e) {
  return (t) => {
    if (jr(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError('Unable to lift unknown Observable type');
  };
}
function w(e, t, n, r, o) {
  return new Vr(e, t, n, r, o);
}
var Vr = class extends Le {
  constructor(t, n, r, o, i, s) {
    super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = n
        ? function (a) {
            try {
              n(a);
            } catch (u) {
              t.error(u);
            }
          }
        : super._next),
      (this._error = o
        ? function (a) {
            try {
              o(a);
            } catch (u) {
              t.error(u);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = r
        ? function () {
            try {
              r();
            } catch (a) {
              t.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: n } = this;
      super.unsubscribe(),
        !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};
function Br() {
  return E((e, t) => {
    let n = null;
    e._refCount++;
    let r = w(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        n = null;
        return;
      }
      let o = e._connection,
        i = n;
      (n = null), o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(r), r.closed || (n = e.connect());
  });
}
var $r = class extends S {
  constructor(t, n) {
    super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      jr(t) && (this.lift = t.lift);
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (
      (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    (this._subject = this._connection = null), t?.unsubscribe();
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new P();
      let n = this.getSubject();
      t.add(
        this.source.subscribe(
          w(
            n,
            void 0,
            () => {
              this._teardown(), n.complete();
            },
            (r) => {
              this._teardown(), n.error(r);
            },
            () => this._teardown()
          )
        )
      ),
        t.closed && ((this._connection = null), (t = P.EMPTY));
    }
    return t;
  }
  refCount() {
    return Br()(this);
  }
};
var Is = rt(
  (e) =>
    function () {
      e(this),
        (this.name = 'ObjectUnsubscribedError'),
        (this.message = 'object unsubscribed');
    }
);
var be = (() => {
    class e extends S {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(n) {
        let r = new dn(this, this);
        return (r.operator = n), r;
      }
      _throwIfClosed() {
        if (this.closed) throw new Is();
      }
      next(n) {
        it(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        it(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = n);
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        it(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: n } = this;
            for (; n.length; ) n.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var n;
        return (
          ((n = this.observers) === null || n === void 0 ? void 0 : n.length) >
          0
        );
      }
      _trySubscribe(n) {
        return this._throwIfClosed(), super._trySubscribe(n);
      }
      _subscribe(n) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n)
        );
      }
      _innerSubscribe(n) {
        let { hasError: r, isStopped: o, observers: i } = this;
        return r || o
          ? Or
          : ((this.currentObservers = null),
            i.push(n),
            new P(() => {
              (this.currentObservers = null), Ot(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new S();
        return (n.source = this), n;
      }
    }
    return (e.create = (t, n) => new dn(t, n)), e;
  })(),
  dn = class extends be {
    constructor(t, n) {
      super(), (this.destination = t), (this.source = n);
    }
    next(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    error(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.error) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    complete() {
      var t, n;
      (n =
        (t = this.destination) === null || t === void 0
          ? void 0
          : t.complete) === null ||
        n === void 0 ||
        n.call(t);
    }
    _subscribe(t) {
      var n, r;
      return (r =
        (n = this.source) === null || n === void 0
          ? void 0
          : n.subscribe(t)) !== null && r !== void 0
        ? r
        : Or;
    }
  };
var Ft = class extends be {
  constructor(t) {
    super(), (this._value = t);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let n = super._subscribe(t);
    return !n.closed && t.next(this._value), n;
  }
  getValue() {
    let { hasError: t, thrownError: n, _value: r } = this;
    if (t) throw n;
    return this._throwIfClosed(), r;
  }
  next(t) {
    super.next((this._value = t));
  }
};
var Pt = new S((e) => e.complete());
function Es(e) {
  return e && m(e.schedule);
}
function ws(e) {
  return e[e.length - 1];
}
function Cs(e) {
  return m(ws(e)) ? e.pop() : void 0;
}
function _e(e) {
  return Es(ws(e)) ? e.pop() : void 0;
}
function _s(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function c(l) {
      l.done ? i(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function bs(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
  );
}
function je(e) {
  return this instanceof je ? ((this.v = e), this) : new je(e);
}
function Ms(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var r = n.apply(e, t || []),
    o,
    i = [];
  return (
    (o = Object.create(
      (typeof AsyncIterator == 'function' ? AsyncIterator : Object).prototype
    )),
    a('next'),
    a('throw'),
    a('return', s),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(f) {
    return function (h) {
      return Promise.resolve(h).then(f, d);
    };
  }
  function a(f, h) {
    r[f] &&
      ((o[f] = function (C) {
        return new Promise(function (F, N) {
          i.push([f, C, F, N]) > 1 || u(f, C);
        });
      }),
      h && (o[f] = h(o[f])));
  }
  function u(f, h) {
    try {
      c(r[f](h));
    } catch (C) {
      p(i[0][3], C);
    }
  }
  function c(f) {
    f.value instanceof je
      ? Promise.resolve(f.value.v).then(l, d)
      : p(i[0][2], f);
  }
  function l(f) {
    u('next', f);
  }
  function d(f) {
    u('throw', f);
  }
  function p(f, h) {
    f(h), i.shift(), i.length && u(i[0][0], i[0][1]);
  }
}
function xs(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof bs == 'function' ? bs(e) : e[Symbol.iterator]()),
      (n = {}),
      r('next'),
      r('throw'),
      r('return'),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(i) {
    n[i] =
      e[i] &&
      function (s) {
        return new Promise(function (a, u) {
          (s = e[i](s)), o(a, u, s.done, s.value);
        });
      };
  }
  function o(i, s, a, u) {
    Promise.resolve(u).then(function (c) {
      i({ value: c, done: a });
    }, s);
  }
}
var fn = (e) => e && typeof e.length == 'number' && typeof e != 'function';
function pn(e) {
  return m(e?.then);
}
function hn(e) {
  return m(e[at]);
}
function gn(e) {
  return Symbol.asyncIterator && m(e?.[Symbol.asyncIterator]);
}
function mn(e) {
  return new TypeError(
    `You provided ${e !== null && typeof e == 'object' ? 'an invalid object' : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
  );
}
function bl() {
  return typeof Symbol != 'function' || !Symbol.iterator
    ? '@@iterator'
    : Symbol.iterator;
}
var yn = bl();
function Dn(e) {
  return m(e?.[yn]);
}
function vn(e) {
  return Ms(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield je(n.read());
        if (o) return yield je(void 0);
        yield yield je(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function In(e) {
  return m(e?.getReader);
}
function k(e) {
  if (e instanceof S) return e;
  if (e != null) {
    if (hn(e)) return _l(e);
    if (fn(e)) return Ml(e);
    if (pn(e)) return xl(e);
    if (gn(e)) return Ss(e);
    if (Dn(e)) return Sl(e);
    if (In(e)) return Tl(e);
  }
  throw mn(e);
}
function _l(e) {
  return new S((t) => {
    let n = e[at]();
    if (m(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      'Provided object does not correctly implement Symbol.observable'
    );
  });
}
function Ml(e) {
  return new S((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function xl(e) {
  return new S((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n)
    ).then(null, cn);
  });
}
function Sl(e) {
  return new S((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function Ss(e) {
  return new S((t) => {
    Nl(e, t).catch((n) => t.error(n));
  });
}
function Tl(e) {
  return Ss(vn(e));
}
function Nl(e, t) {
  var n, r, o, i;
  return _s(this, void 0, void 0, function* () {
    try {
      for (n = xs(e); (r = yield n.next()), !r.done; ) {
        let s = r.value;
        if ((t.next(s), t.closed)) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        r && !r.done && (i = n.return) && (yield i.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}
function U(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function En(e, t = 0) {
  return E((n, r) => {
    n.subscribe(
      w(
        r,
        (o) => U(r, e, () => r.next(o), t),
        () => U(r, e, () => r.complete(), t),
        (o) => U(r, e, () => r.error(o), t)
      )
    );
  });
}
function wn(e, t = 0) {
  return E((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function Ts(e, t) {
  return k(e).pipe(wn(t), En(t));
}
function Ns(e, t) {
  return k(e).pipe(wn(t), En(t));
}
function As(e, t) {
  return new S((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Os(e, t) {
  return new S((n) => {
    let r;
    return (
      U(n, t, () => {
        (r = e[yn]()),
          U(
            n,
            t,
            () => {
              let o, i;
              try {
                ({ value: o, done: i } = r.next());
              } catch (s) {
                n.error(s);
                return;
              }
              i ? n.complete() : n.next(o);
            },
            0,
            !0
          );
      }),
      () => m(r?.return) && r.return()
    );
  });
}
function Cn(e, t) {
  if (!e) throw new Error('Iterable cannot be null');
  return new S((n) => {
    U(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      U(
        n,
        t,
        () => {
          r.next().then((o) => {
            o.done ? n.complete() : n.next(o.value);
          });
        },
        0,
        !0
      );
    });
  });
}
function Rs(e, t) {
  return Cn(vn(e), t);
}
function Fs(e, t) {
  if (e != null) {
    if (hn(e)) return Ts(e, t);
    if (fn(e)) return As(e, t);
    if (pn(e)) return Ns(e, t);
    if (gn(e)) return Cn(e, t);
    if (Dn(e)) return Os(e, t);
    if (In(e)) return Rs(e, t);
  }
  throw mn(e);
}
function Me(e, t) {
  return t ? Fs(e, t) : k(e);
}
function Al(...e) {
  let t = _e(e);
  return Me(e, t);
}
function Ol(e, t) {
  let n = m(e) ? e : () => e,
    r = (o) => o.error(n());
  return new S(t ? (o) => t.schedule(r, 0, o) : r);
}
function Rl(e) {
  return !!e && (e instanceof S || (m(e.lift) && m(e.subscribe)));
}
var Ve = rt(
  (e) =>
    function () {
      e(this),
        (this.name = 'EmptyError'),
        (this.message = 'no elements in sequence');
    }
);
function me(e, t) {
  return E((n, r) => {
    let o = 0;
    n.subscribe(
      w(r, (i) => {
        r.next(e.call(t, i, o++));
      })
    );
  });
}
var { isArray: Fl } = Array;
function Pl(e, t) {
  return Fl(t) ? e(...t) : e(t);
}
function Ps(e) {
  return me((t) => Pl(e, t));
}
var { isArray: kl } = Array,
  { getPrototypeOf: Ll, prototype: jl, keys: Vl } = Object;
function ks(e) {
  if (e.length === 1) {
    let t = e[0];
    if (kl(t)) return { args: t, keys: null };
    if (Bl(t)) {
      let n = Vl(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function Bl(e) {
  return e && typeof e == 'object' && Ll(e) === jl;
}
function Ls(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function $l(...e) {
  let t = _e(e),
    n = Cs(e),
    { args: r, keys: o } = ks(e);
  if (r.length === 0) return Me([], t);
  let i = new S(Hl(r, t, o ? (s) => Ls(o, s) : Y));
  return n ? i.pipe(Ps(n)) : i;
}
function Hl(e, t, n = Y) {
  return (r) => {
    js(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let u = 0; u < o; u++)
          js(
            t,
            () => {
              let c = Me(e[u], t),
                l = !1;
              c.subscribe(
                w(
                  r,
                  (d) => {
                    (i[u] = d), l || ((l = !0), a--), a || r.next(n(i.slice()));
                  },
                  () => {
                    --s || r.complete();
                  }
                )
              );
            },
            r
          );
      },
      r
    );
  };
}
function js(e, t, n) {
  e ? U(n, e, t) : t();
}
function Vs(e, t, n, r, o, i, s, a) {
  let u = [],
    c = 0,
    l = 0,
    d = !1,
    p = () => {
      d && !u.length && !c && t.complete();
    },
    f = (C) => (c < r ? h(C) : u.push(C)),
    h = (C) => {
      i && t.next(C), c++;
      let F = !1;
      k(n(C, l++)).subscribe(
        w(
          t,
          (N) => {
            o?.(N), i ? f(N) : t.next(N);
          },
          () => {
            F = !0;
          },
          void 0,
          () => {
            if (F)
              try {
                for (c--; u.length && c < r; ) {
                  let N = u.shift();
                  s ? U(t, s, () => h(N)) : h(N);
                }
                p();
              } catch (N) {
                t.error(N);
              }
          }
        )
      );
    };
  return (
    e.subscribe(
      w(t, f, () => {
        (d = !0), p();
      })
    ),
    () => {
      a?.();
    }
  );
}
function Be(e, t, n = 1 / 0) {
  return m(t)
    ? Be((r, o) => me((i, s) => t(r, i, o, s))(k(e(r, o))), n)
    : (typeof t == 'number' && (n = t), E((r, o) => Vs(r, o, e, n)));
}
function Bs(e = 1 / 0) {
  return Be(Y, e);
}
function $s() {
  return Bs(1);
}
function bn(...e) {
  return $s()(Me(e, _e(e)));
}
function Ul(e) {
  return new S((t) => {
    k(e()).subscribe(t);
  });
}
function kt(e, t) {
  return E((n, r) => {
    let o = 0;
    n.subscribe(w(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function Hs(e) {
  return E((t, n) => {
    let r = null,
      o = !1,
      i;
    (r = t.subscribe(
      w(n, void 0, void 0, (s) => {
        (i = k(e(s, Hs(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
      })
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n));
  });
}
function Us(e, t, n, r, o) {
  return (i, s) => {
    let a = n,
      u = t,
      c = 0;
    i.subscribe(
      w(
        s,
        (l) => {
          let d = c++;
          (u = a ? e(u, l, d) : ((a = !0), l)), r && s.next(u);
        },
        o &&
          (() => {
            a && s.next(u), s.complete();
          })
      )
    );
  };
}
function zl(e, t) {
  return m(t) ? Be(e, t, 1) : Be(e, 1);
}
function Lt(e) {
  return E((t, n) => {
    let r = !1;
    t.subscribe(
      w(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => {
          r || n.next(e), n.complete();
        }
      )
    );
  });
}
function Hr(e) {
  return e <= 0
    ? () => Pt
    : E((t, n) => {
        let r = 0;
        t.subscribe(
          w(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          })
        );
      });
}
function Gl(e) {
  return me(() => e);
}
function _n(e = Wl) {
  return E((t, n) => {
    let r = !1;
    t.subscribe(
      w(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => (r ? n.complete() : n.error(e()))
      )
    );
  });
}
function Wl() {
  return new Ve();
}
function ql(e) {
  return E((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function zs(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? kt((o, i) => e(o, i, r)) : Y,
      Hr(1),
      n ? Lt(t) : _n(() => new Ve())
    );
}
function Ur(e) {
  return e <= 0
    ? () => Pt
    : E((t, n) => {
        let r = [];
        t.subscribe(
          w(
            n,
            (o) => {
              r.push(o), e < r.length && r.shift();
            },
            () => {
              for (let o of r) n.next(o);
              n.complete();
            },
            void 0,
            () => {
              r = null;
            }
          )
        );
      });
}
function Zl(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? kt((o, i) => e(o, i, r)) : Y,
      Ur(1),
      n ? Lt(t) : _n(() => new Ve())
    );
}
function Yl(e, t) {
  return E(Us(e, t, arguments.length >= 2, !0));
}
function Ql(...e) {
  let t = _e(e);
  return E((n, r) => {
    (t ? bn(e, n, t) : bn(e, n)).subscribe(r);
  });
}
function Kl(e, t) {
  return E((n, r) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && r.complete();
    n.subscribe(
      w(
        r,
        (u) => {
          o?.unsubscribe();
          let c = 0,
            l = i++;
          k(e(u, l)).subscribe(
            (o = w(
              r,
              (d) => r.next(t ? t(u, d, l, c++) : d),
              () => {
                (o = null), a();
              }
            ))
          );
        },
        () => {
          (s = !0), a();
        }
      )
    );
  });
}
function Jl(e) {
  return E((t, n) => {
    k(e).subscribe(w(n, () => n.complete(), Rt)), !n.closed && t.subscribe(n);
  });
}
function Xl(e, t, n) {
  let r = m(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? E((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(
          w(
            i,
            (u) => {
              var c;
              (c = r.next) === null || c === void 0 || c.call(r, u), i.next(u);
            },
            () => {
              var u;
              (a = !1),
                (u = r.complete) === null || u === void 0 || u.call(r),
                i.complete();
            },
            (u) => {
              var c;
              (a = !1),
                (c = r.error) === null || c === void 0 || c.call(r, u),
                i.error(u);
            },
            () => {
              var u, c;
              a && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)),
                (c = r.finalize) === null || c === void 0 || c.call(r);
            }
          )
        );
      })
    : Y;
}
var ed = 'https://g.co/ng/security#xss',
  M = class extends Error {
    constructor(t, n) {
      super(xa(t, n)), (this.code = t);
    }
  };
function xa(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ': ' + t : ''}`;
}
function Qt(e) {
  return { toString: e }.toString();
}
var Mn = '__parameters__';
function td(e) {
  return function (...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}
function Sa(e, t, n) {
  return Qt(() => {
    let r = td(t);
    function o(...i) {
      if (this instanceof o) return r.apply(this, i), this;
      let s = new o(...i);
      return (a.annotation = s), a;
      function a(u, c, l) {
        let d = u.hasOwnProperty(Mn)
          ? u[Mn]
          : Object.defineProperty(u, Mn, { value: [] })[Mn];
        for (; d.length <= l; ) d.push(null);
        return (d[l] = d[l] || []).push(s), u;
      }
    }
    return (
      n && (o.prototype = Object.create(n.prototype)),
      (o.prototype.ngMetadataName = e),
      (o.annotationCls = o),
      o
    );
  });
}
var Gs = globalThis;
function T(e) {
  for (let t in e) if (e[t] === T) return t;
  throw Error('Could not find renamed property on target object.');
}
function nd(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function B(e) {
  if (typeof e == 'string') return e;
  if (Array.isArray(e)) return '[' + e.map(B).join(', ') + ']';
  if (e == null) return '' + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return '' + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function ro(e, t) {
  return e == null || e === ''
    ? t === null
      ? ''
      : t
    : t == null || t === ''
      ? e
      : e + ' ' + t;
}
var rd = T({ __forward_ref__: T });
function Ta(e) {
  return (
    (e.__forward_ref__ = Ta),
    (e.toString = function () {
      return B(this());
    }),
    e
  );
}
function V(e) {
  return Na(e) ? e() : e;
}
function Na(e) {
  return (
    typeof e == 'function' && e.hasOwnProperty(rd) && e.__forward_ref__ === Ta
  );
}
function A(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function Aa(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function ur(e) {
  return Ws(e, Oa) || Ws(e, Ra);
}
function $w(e) {
  return ur(e) !== null;
}
function Ws(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function od(e) {
  let t = e && (e[Oa] || e[Ra]);
  return t || null;
}
function qs(e) {
  return e && (e.hasOwnProperty(Zs) || e.hasOwnProperty(id)) ? e[Zs] : null;
}
var Oa = T({ ɵprov: T }),
  Zs = T({ ɵinj: T }),
  Ra = T({ ngInjectableDef: T }),
  id = T({ ngInjectorDef: T }),
  x = class {
    constructor(t, n) {
      (this._desc = t),
        (this.ngMetadataName = 'InjectionToken'),
        (this.ɵprov = void 0),
        typeof n == 'number'
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = A({
              token: this,
              providedIn: n.providedIn || 'root',
              factory: n.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function Fa(e) {
  return e && !!e.ɵproviders;
}
var sd = T({ ɵcmp: T }),
  ad = T({ ɵdir: T }),
  ud = T({ ɵpipe: T }),
  cd = T({ ɵmod: T }),
  Ln = T({ ɵfac: T }),
  Bt = T({ __NG_ELEMENT_ID__: T }),
  Ys = T({ __NG_ENV_ID__: T });
function ei(e) {
  return typeof e == 'string' ? e : e == null ? '' : String(e);
}
function ld(e) {
  return typeof e == 'function'
    ? e.name || e.toString()
    : typeof e == 'object' && e != null && typeof e.type == 'function'
      ? e.type.name || e.type.toString()
      : ei(e);
}
function dd(e, t) {
  let n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
  throw new M(-200, e);
}
function ti(e, t) {
  throw new M(-201, !1);
}
var I = (function (e) {
    return (
      (e[(e.Default = 0)] = 'Default'),
      (e[(e.Host = 1)] = 'Host'),
      (e[(e.Self = 2)] = 'Self'),
      (e[(e.SkipSelf = 4)] = 'SkipSelf'),
      (e[(e.Optional = 8)] = 'Optional'),
      e
    );
  })(I || {}),
  oo;
function Pa() {
  return oo;
}
function J(e) {
  let t = oo;
  return (oo = e), t;
}
function ka(e, t, n) {
  let r = ur(e);
  if (r && r.providedIn == 'root')
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & I.Optional) return null;
  if (t !== void 0) return t;
  ti(e, 'Injector');
}
var fd = {},
  $t = fd,
  io = '__NG_DI_FLAG__',
  jn = 'ngTempTokenPath',
  pd = 'ngTokenPath',
  hd = /\n/gm,
  gd = '\u0275',
  Qs = '__source',
  dt;
function md() {
  return dt;
}
function xe(e) {
  let t = dt;
  return (dt = e), t;
}
function yd(e, t = I.Default) {
  if (dt === void 0) throw new M(-203, !1);
  return dt === null
    ? ka(e, void 0, t)
    : dt.get(e, t & I.Optional ? null : void 0, t);
}
function W(e, t = I.Default) {
  return (Pa() || yd)(V(e), t);
}
function D(e, t = I.Default) {
  return W(e, cr(t));
}
function cr(e) {
  return typeof e > 'u' || typeof e == 'number'
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function so(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = V(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new M(900, !1);
      let o,
        i = I.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          u = Dd(a);
        typeof u == 'number' ? (u === -1 ? (o = a.token) : (i |= u)) : (o = a);
      }
      t.push(W(o, i));
    } else t.push(W(r));
  }
  return t;
}
function La(e, t) {
  return (e[io] = t), (e.prototype[io] = t), e;
}
function Dd(e) {
  return e[io];
}
function vd(e, t, n, r) {
  let o = e[jn];
  throw (
    (t[Qs] && o.unshift(t[Qs]),
    (e.message = Id(
      `
` + e.message,
      o,
      n,
      r
    )),
    (e[pd] = o),
    (e[jn] = null),
    e)
  );
}
function Id(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == gd
      ? e.slice(2)
      : e;
  let o = B(t);
  if (Array.isArray(t)) o = t.map(B).join(' -> ');
  else if (typeof t == 'object') {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ':' + (typeof a == 'string' ? JSON.stringify(a) : B(a)));
      }
    o = `{${i.join(', ')}}`;
  }
  return `${n}${r ? '(' + r + ')' : ''}[${o}]: ${e.replace(
    hd,
    `
  `
  )}`;
}
var Ed = La(Sa('Optional'), 8);
var wd = La(Sa('SkipSelf'), 4);
function pt(e, t) {
  let n = e.hasOwnProperty(Ln);
  return n ? e[Ln] : null;
}
function Cd(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function bd(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function ni(e, t) {
  e.forEach((n) => (Array.isArray(n) ? ni(n, t) : t(n)));
}
function ja(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function Vn(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function _d(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function Md(e, t, n, r) {
  let o = e.length;
  if (o == t) e.push(n, r);
  else if (o === 1) e.push(r, e[0]), (e[0] = n);
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t; ) {
      let i = o - 2;
      (e[o] = e[i]), o--;
    }
    (e[t] = n), (e[t + 1] = r);
  }
}
function ri(e, t, n) {
  let r = Kt(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), Md(e, r, t, n)), r;
}
function zr(e, t) {
  let n = Kt(e, t);
  if (n >= 0) return e[n | 1];
}
function Kt(e, t) {
  return xd(e, t, 1);
}
function xd(e, t, n) {
  let r = 0,
    o = e.length >> n;
  for (; o !== r; ) {
    let i = r + ((o - r) >> 1),
      s = e[i << n];
    if (t === s) return i << n;
    s > t ? (o = i) : (r = i + 1);
  }
  return ~(o << n);
}
var ht = {},
  z = [],
  Bn = new x(''),
  Va = new x('', -1),
  Ba = new x(''),
  $n = class {
    get(t, n = $t) {
      if (n === $t) {
        let r = new Error(`NullInjectorError: No provider for ${B(t)}!`);
        throw ((r.name = 'NullInjectorError'), r);
      }
      return n;
    }
  },
  $a = (function (e) {
    return (e[(e.OnPush = 0)] = 'OnPush'), (e[(e.Default = 1)] = 'Default'), e;
  })($a || {}),
  Ht = (function (e) {
    return (
      (e[(e.Emulated = 0)] = 'Emulated'),
      (e[(e.None = 2)] = 'None'),
      (e[(e.ShadowDom = 3)] = 'ShadowDom'),
      e
    );
  })(Ht || {}),
  Ne = (function (e) {
    return (
      (e[(e.None = 0)] = 'None'),
      (e[(e.SignalBased = 1)] = 'SignalBased'),
      (e[(e.HasDecoratorInputTransform = 2)] = 'HasDecoratorInputTransform'),
      e
    );
  })(Ne || {});
function Sd(e, t, n) {
  let r = e.length;
  for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
    }
    n = o + 1;
  }
}
function ao(e, t, n) {
  let r = 0;
  for (; r < n.length; ) {
    let o = n[r];
    if (typeof o == 'number') {
      if (o !== 0) break;
      r++;
      let i = n[r++],
        s = n[r++],
        a = n[r++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o,
        s = n[++r];
      Nd(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function Td(e) {
  return e === 3 || e === 4 || e === 6;
}
function Nd(e) {
  return e.charCodeAt(0) === 64;
}
function Ut(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        typeof o == 'number'
          ? (n = o)
          : n === 0 ||
            (n === -1 || n === 2
              ? Ks(e, n, o, null, t[++r])
              : Ks(e, n, o, null, null));
      }
    }
  return e;
}
function Ks(e, t, n, r, o) {
  let i = 0,
    s = e.length;
  if (t === -1) s = -1;
  else
    for (; i < e.length; ) {
      let a = e[i++];
      if (typeof a == 'number') {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < e.length; ) {
    let a = e[i];
    if (typeof a == 'number') break;
    if (a === n) {
      if (r === null) {
        o !== null && (e[i + 1] = o);
        return;
      } else if (r === e[i + 1]) {
        e[i + 2] = o;
        return;
      }
    }
    i++, r !== null && i++, o !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), (i = s + 1)),
    e.splice(i++, 0, n),
    r !== null && e.splice(i++, 0, r),
    o !== null && e.splice(i++, 0, o);
}
var Ha = 'ng-template';
function Ad(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == 'string'; o += 2)
      if (t[o] === 'class' && Sd(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (oi(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == 'string'; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function oi(e) {
  return e.type === 4 && e.value !== Ha;
}
function Od(e, t, n) {
  let r = e.type === 4 && !n ? Ha : e.value;
  return t === r;
}
function Rd(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? kd(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let u = t[a];
    if (typeof u == 'number') {
      if (!s && !ie(r) && !ie(u)) return !1;
      if (s && ie(u)) continue;
      (s = !1), (r = u | (r & 1));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (u !== '' && !Od(e, u, n)) || (u === '' && t.length === 1))
        ) {
          if (ie(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !Ad(e, o, u, n)) {
          if (ie(r)) return !1;
          s = !0;
        }
      } else {
        let c = t[++a],
          l = Fd(u, o, oi(e), n);
        if (l === -1) {
          if (ie(r)) return !1;
          s = !0;
          continue;
        }
        if (c !== '') {
          let d;
          if (
            (l > i ? (d = '') : (d = o[l + 1].toLowerCase()), r & 2 && c !== d)
          ) {
            if (ie(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return ie(r) || s;
}
function ie(e) {
  return (e & 1) === 0;
}
function Fd(e, t, n, r) {
  if (t === null) return -1;
  let o = 0;
  if (r || !n) {
    let i = !1;
    for (; o < t.length; ) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == 'string'; ) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return Ld(t, e);
}
function Ua(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (Rd(e, t[r], n)) return !0;
  return !1;
}
function Pd(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function kd(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Td(n)) return t;
  }
  return e.length;
}
function Ld(e, t) {
  let n = e.indexOf(4);
  if (n > -1)
    for (n++; n < e.length; ) {
      let r = e[n];
      if (typeof r == 'number') return -1;
      if (r === t) return n;
      n++;
    }
  return -1;
}
function jd(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function Js(e, t) {
  return e ? ':not(' + t.trim() + ')' : t;
}
function Vd(e) {
  let t = e[0],
    n = 1,
    r = 2,
    o = '',
    i = !1;
  for (; n < e.length; ) {
    let s = e[n];
    if (typeof s == 'string')
      if (r & 2) {
        let a = e[++n];
        o += '[' + s + (a.length > 0 ? '="' + a + '"' : '') + ']';
      } else r & 8 ? (o += '.' + s) : r & 4 && (o += ' ' + s);
    else
      o !== '' && !ie(s) && ((t += Js(i, o)), (o = '')),
        (r = s),
        (i = i || !ie(r));
    n++;
  }
  return o !== '' && (t += Js(i, o)), t;
}
function Bd(e) {
  return e.map(Vd).join(',');
}
function $d(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == 'string')
      o === 2 ? i !== '' && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!ie(o)) break;
      o = i;
    }
    r++;
  }
  return { attrs: t, classes: n };
}
function Hw(e) {
  return Qt(() => {
    let t = Za(e),
      n = Ce(we({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === $a.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || Ht.Emulated,
        styles: e.styles || z,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: '',
      });
    Ya(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = ea(r, !1)), (n.pipeDefs = ea(r, !0)), (n.id = Gd(n)), n
    );
  });
}
function Hd(e) {
  return He(e) || Ga(e);
}
function Ud(e) {
  return e !== null;
}
function za(e) {
  return Qt(() => ({
    type: e.type,
    bootstrap: e.bootstrap || z,
    declarations: e.declarations || z,
    imports: e.imports || z,
    exports: e.exports || z,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function Xs(e, t) {
  if (e == null) return ht;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a = Ne.None;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
        : ((i = o), (s = o)),
        t ? ((n[i] = a !== Ne.None ? [r, a] : r), (t[i] = s)) : (n[i] = r);
    }
  return n;
}
function _t(e) {
  return Qt(() => {
    let t = Za(e);
    return Ya(t), t;
  });
}
function He(e) {
  return e[sd] || null;
}
function Ga(e) {
  return e[ad] || null;
}
function Wa(e) {
  return e[ud] || null;
}
function zd(e) {
  let t = He(e) || Ga(e) || Wa(e);
  return t !== null ? t.standalone : !1;
}
function qa(e, t) {
  let n = e[cd] || null;
  if (!n && t === !0)
    throw new Error(`Type ${B(e)} does not have '\u0275mod' property.`);
  return n;
}
function Za(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputTransforms: null,
    inputConfig: e.inputs || ht,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || z,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: Xs(e.inputs, t),
    outputs: Xs(e.outputs),
    debugInfo: null,
  };
}
function Ya(e) {
  e.features?.forEach((t) => t(e));
}
function ea(e, t) {
  if (!e) return null;
  let n = t ? Wa : Hd;
  return () => (typeof e == 'function' ? e() : e).map((r) => n(r)).filter(Ud);
}
function Gd(e) {
  let t = 0,
    n = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      e.consts,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ].join('|');
  for (let o of n) t = (Math.imul(31, t) + o.charCodeAt(0)) << 0;
  return (t += 2147483648), 'c' + t;
}
function Wd(e) {
  return { ɵproviders: e };
}
function qd(...e) {
  return { ɵproviders: Qa(!0, e), ɵfromNgModule: !0 };
}
function Qa(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    ni(t, (s) => {
      let a = s;
      uo(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && Ka(o, i),
    n
  );
}
function Ka(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    ii(o, (i) => {
      t(i, r);
    });
  }
}
function uo(e, t, n, r) {
  if (((e = V(e)), !e)) return !1;
  let o = null,
    i = qs(e),
    s = !i && He(e);
  if (!i && !s) {
    let u = e.ngModule;
    if (((i = qs(u)), i)) o = u;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if ((r.add(o), s.dependencies)) {
      let u =
        typeof s.dependencies == 'function' ? s.dependencies() : s.dependencies;
      for (let c of u) uo(c, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let c;
      try {
        ni(i.imports, (l) => {
          uo(l, t, n, r) && ((c ||= []), c.push(l));
        });
      } finally {
      }
      c !== void 0 && Ka(c, t);
    }
    if (!a) {
      let c = pt(o) || (() => new o());
      t({ provide: o, useFactory: c, deps: z }, o),
        t({ provide: Ba, useValue: o, multi: !0 }, o),
        t({ provide: Bn, useValue: () => W(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !a) {
      let c = e;
      ii(u, (l) => {
        t(l, c);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function ii(e, t) {
  for (let n of e)
    Fa(n) && (n = n.ɵproviders), Array.isArray(n) ? ii(n, t) : t(n);
}
var Zd = T({ provide: String, useValue: T });
function Ja(e) {
  return e !== null && typeof e == 'object' && Zd in e;
}
function Yd(e) {
  return !!(e && e.useExisting);
}
function Qd(e) {
  return !!(e && e.useFactory);
}
function gt(e) {
  return typeof e == 'function';
}
function Kd(e) {
  return !!e.useClass;
}
var Xa = new x(''),
  An = {},
  Jd = {},
  Gr;
function si() {
  return Gr === void 0 && (Gr = new $n()), Gr;
}
var Ae = class {},
  zt = class extends Ae {
    get destroyed() {
      return this._destroyed;
    }
    constructor(t, n, r, o) {
      super(),
        (this.parent = n),
        (this.source = r),
        (this.scopes = o),
        (this.records = new Map()),
        (this._ngOnDestroyHooks = new Set()),
        (this._onDestroyHooks = []),
        (this._destroyed = !1),
        lo(t, (s) => this.processProvider(s)),
        this.records.set(Va, ut(void 0, this)),
        o.has('environment') && this.records.set(Ae, ut(void 0, this));
      let i = this.records.get(Xa);
      i != null && typeof i.value == 'string' && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(Ba, z, I.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let t = b(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          b(t);
      }
    }
    onDestroy(t) {
      return (
        this.assertNotDestroyed(),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      this.assertNotDestroyed();
      let n = xe(this),
        r = J(void 0),
        o;
      try {
        return t();
      } finally {
        xe(n), J(r);
      }
    }
    get(t, n = $t, r = I.Default) {
      if ((this.assertNotDestroyed(), t.hasOwnProperty(Ys))) return t[Ys](this);
      r = cr(r);
      let o,
        i = xe(this),
        s = J(void 0);
      try {
        if (!(r & I.SkipSelf)) {
          let u = this.records.get(t);
          if (u === void 0) {
            let c = rf(t) && ur(t);
            c && this.injectableDefInScope(c)
              ? (u = ut(co(t), An))
              : (u = null),
              this.records.set(t, u);
          }
          if (u != null) return this.hydrate(t, u);
        }
        let a = r & I.Self ? si() : this.parent;
        return (n = r & I.Optional && n === $t ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === 'NullInjectorError') {
          if (((a[jn] = a[jn] || []).unshift(B(t)), i)) throw a;
          return vd(a, t, 'R3InjectorError', this.source);
        } else throw a;
      } finally {
        J(s), xe(i);
      }
    }
    resolveInjectorInitializers() {
      let t = b(null),
        n = xe(this),
        r = J(void 0),
        o;
      try {
        let i = this.get(Bn, z, I.Self);
        for (let s of i) s();
      } finally {
        xe(n), J(r), b(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(B(r));
      return `R3Injector[${t.join(', ')}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new M(205, !1);
    }
    processProvider(t) {
      t = V(t);
      let n = gt(t) ? t : V(t && t.provide),
        r = ef(t);
      if (!gt(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
          ((o = ut(void 0, An, !0)),
          (o.factory = () => so(o.multi)),
          this.records.set(n, o)),
          (n = t),
          o.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n) {
      let r = b(null);
      try {
        return (
          n.value === An && ((n.value = Jd), (n.value = n.factory())),
          typeof n.value == 'object' &&
            n.value &&
            nf(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        b(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = V(t.providedIn);
      return typeof n == 'string'
        ? n === 'any' || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function co(e) {
  let t = ur(e),
    n = t !== null ? t.factory : pt(e);
  if (n !== null) return n;
  if (e instanceof x) throw new M(204, !1);
  if (e instanceof Function) return Xd(e);
  throw new M(204, !1);
}
function Xd(e) {
  if (e.length > 0) throw new M(204, !1);
  let n = od(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function ef(e) {
  if (Ja(e)) return ut(void 0, e.useValue);
  {
    let t = eu(e);
    return ut(t, An);
  }
}
function eu(e, t, n) {
  let r;
  if (gt(e)) {
    let o = V(e);
    return pt(o) || co(o);
  } else if (Ja(e)) r = () => V(e.useValue);
  else if (Qd(e)) r = () => e.useFactory(...so(e.deps || []));
  else if (Yd(e)) r = () => W(V(e.useExisting));
  else {
    let o = V(e && (e.useClass || e.provide));
    if (tf(e)) r = () => new o(...so(e.deps));
    else return pt(o) || co(o);
  }
  return r;
}
function ut(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function tf(e) {
  return !!e.deps;
}
function nf(e) {
  return (
    e !== null && typeof e == 'object' && typeof e.ngOnDestroy == 'function'
  );
}
function rf(e) {
  return typeof e == 'function' || (typeof e == 'object' && e instanceof x);
}
function lo(e, t) {
  for (let n of e)
    Array.isArray(n) ? lo(n, t) : n && Fa(n) ? lo(n.ɵproviders, t) : t(n);
}
function Uw(e, t) {
  e instanceof zt && e.assertNotDestroyed();
  let n,
    r = xe(e),
    o = J(void 0);
  try {
    return t();
  } finally {
    xe(r), J(o);
  }
}
function of() {
  return Pa() !== void 0 || md() != null;
}
function sf(e) {
  return typeof e == 'function';
}
var ve = 0,
  y = 1,
  g = 2,
  j = 3,
  ue = 4,
  q = 5,
  Gt = 6,
  Hn = 7,
  ce = 8,
  mt = 9,
  ye = 10,
  O = 11,
  Wt = 12,
  ta = 13,
  Mt = 14,
  ee = 15,
  Ue = 16,
  ct = 17,
  De = 18,
  lr = 19,
  tu = 20,
  Se = 21,
  Wr = 22,
  X = 23,
  Q = 25,
  nu = 1;
var ze = 7,
  Un = 8,
  yt = 9,
  G = 10,
  zn = (function (e) {
    return (
      (e[(e.None = 0)] = 'None'),
      (e[(e.HasTransplantedViews = 2)] = 'HasTransplantedViews'),
      e
    );
  })(zn || {});
function Te(e) {
  return Array.isArray(e) && typeof e[nu] == 'object';
}
function Ie(e) {
  return Array.isArray(e) && e[nu] === !0;
}
function ai(e) {
  return (e.flags & 4) !== 0;
}
function dr(e) {
  return e.componentOffset > -1;
}
function fr(e) {
  return (e.flags & 1) === 1;
}
function Oe(e) {
  return !!e.template;
}
function fo(e) {
  return (e[g] & 512) !== 0;
}
var po = class {
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function ru(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
function pr() {
  return ou;
}
function ou(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = uf), af;
}
pr.ngInherit = !0;
function af() {
  let e = su(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === ht) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function uf(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = su(e) || cf(e, { previous: ht, current: null }),
    a = s.current || (s.current = {}),
    u = s.previous,
    c = u[i];
  (a[i] = new po(c && c.currentValue, n, u === ht)), ru(e, t, o, n);
}
var iu = '__ngSimpleChanges__';
function su(e) {
  return e[iu] || null;
}
function cf(e, t) {
  return (e[iu] = t);
}
var na = null;
var le = function (e, t, n) {
    na?.(e, t, n);
  },
  au = 'svg',
  lf = 'math';
function fe(e) {
  for (; Array.isArray(e); ) e = e[ve];
  return e;
}
function uu(e, t) {
  return fe(t[e]);
}
function te(e, t) {
  return fe(t[e.index]);
}
function ui(e, t) {
  return e.data[t];
}
function Pe(e, t) {
  let n = t[e];
  return Te(n) ? n : n[ve];
}
function df(e) {
  return (e[g] & 4) === 4;
}
function ci(e) {
  return (e[g] & 128) === 128;
}
function ff(e) {
  return Ie(e[j]);
}
function Dt(e, t) {
  return t == null ? null : e[t];
}
function cu(e) {
  e[ct] = 0;
}
function lu(e) {
  e[g] & 1024 || ((e[g] |= 1024), ci(e) && gr(e));
}
function pf(e, t) {
  for (; e > 0; ) (t = t[Mt]), e--;
  return t;
}
function hr(e) {
  return !!(e[g] & 9216 || e[X]?.dirty);
}
function ho(e) {
  e[ye].changeDetectionScheduler?.notify(8),
    e[g] & 64 && (e[g] |= 1024),
    hr(e) && gr(e);
}
function gr(e) {
  e[ye].changeDetectionScheduler?.notify(0);
  let t = Ge(e);
  for (; t !== null && !(t[g] & 8192 || ((t[g] |= 8192), !ci(t))); ) t = Ge(t);
}
function du(e, t) {
  if ((e[g] & 256) === 256) throw new M(911, !1);
  e[Se] === null && (e[Se] = []), e[Se].push(t);
}
function hf(e, t) {
  if (e[Se] === null) return;
  let n = e[Se].indexOf(t);
  n !== -1 && e[Se].splice(n, 1);
}
function Ge(e) {
  let t = e[j];
  return Ie(t) ? t[j] : t;
}
var v = { lFrame: Eu(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var fu = !1;
function gf() {
  return v.lFrame.elementDepthCount;
}
function mf() {
  v.lFrame.elementDepthCount++;
}
function yf() {
  v.lFrame.elementDepthCount--;
}
function pu() {
  return v.bindingsEnabled;
}
function hu() {
  return v.skipHydrationRootTNode !== null;
}
function Df(e) {
  return v.skipHydrationRootTNode === e;
}
function vf() {
  v.skipHydrationRootTNode = null;
}
function _() {
  return v.lFrame.lView;
}
function L() {
  return v.lFrame.tView;
}
function H() {
  let e = gu();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function gu() {
  return v.lFrame.currentTNode;
}
function If() {
  let e = v.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function Ke(e, t) {
  let n = v.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function li() {
  return v.lFrame.isParent;
}
function di() {
  v.lFrame.isParent = !1;
}
function mu() {
  return fu;
}
function ra(e) {
  fu = e;
}
function fi() {
  let e = v.lFrame,
    t = e.bindingRootIndex;
  return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
}
function Ef(e) {
  return (v.lFrame.bindingIndex = e);
}
function mr() {
  return v.lFrame.bindingIndex++;
}
function yu(e) {
  let t = v.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function wf() {
  return v.lFrame.inI18n;
}
function Cf(e, t) {
  let n = v.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), go(t);
}
function bf() {
  return v.lFrame.currentDirectiveIndex;
}
function go(e) {
  v.lFrame.currentDirectiveIndex = e;
}
function _f(e) {
  let t = v.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function Du() {
  return v.lFrame.currentQueryIndex;
}
function pi(e) {
  v.lFrame.currentQueryIndex = e;
}
function Mf(e) {
  let t = e[y];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[q] : null;
}
function vu(e, t, n) {
  if (n & I.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & I.Host); )
      if (((o = Mf(i)), o === null || ((i = i[Mt]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let r = (v.lFrame = Iu());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function hi(e) {
  let t = Iu(),
    n = e[y];
  (v.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function Iu() {
  let e = v.lFrame,
    t = e === null ? null : e.child;
  return t === null ? Eu(e) : t;
}
function Eu(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function wu() {
  let e = v.lFrame;
  return (v.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var Cu = wu;
function gi() {
  let e = wu();
  (e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0);
}
function xf(e) {
  return (v.lFrame.contextLView = pf(e, v.lFrame.contextLView))[ce];
}
function Je() {
  return v.lFrame.selectedIndex;
}
function We(e) {
  v.lFrame.selectedIndex = e;
}
function bu() {
  let e = v.lFrame;
  return ui(e.tView, e.selectedIndex);
}
function zw() {
  v.lFrame.currentNamespace = au;
}
function Gw() {
  Sf();
}
function Sf() {
  v.lFrame.currentNamespace = null;
}
function Tf() {
  return v.lFrame.currentNamespace;
}
var _u = !0;
function yr() {
  return _u;
}
function Dr(e) {
  _u = e;
}
function Nf(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = ou(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function vr(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: u,
        ngAfterViewChecked: c,
        ngOnDestroy: l,
      } = i;
    s && (e.contentHooks ??= []).push(-n, s),
      a &&
        ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      u && (e.viewHooks ??= []).push(-n, u),
      c &&
        ((e.viewHooks ??= []).push(n, c), (e.viewCheckHooks ??= []).push(n, c)),
      l != null && (e.destroyHooks ??= []).push(n, l);
  }
}
function On(e, t, n) {
  Mu(e, t, 3, n);
}
function Rn(e, t, n, r) {
  (e[g] & 3) === n && Mu(e, t, n, r);
}
function qr(e, t) {
  let n = e[g];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[g] = n));
}
function Mu(e, t, n, r) {
  let o = r !== void 0 ? e[ct] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let u = o; u < s; u++)
    if (typeof t[u + 1] == 'number') {
      if (((a = t[u]), r != null && a >= r)) break;
    } else
      t[u] < 0 && (e[ct] += 65536),
        (a < i || i == -1) &&
          (Af(e, n, t, u), (e[ct] = (e[ct] & 4294901760) + u + 2)),
        u++;
}
function oa(e, t) {
  le(4, e, t);
  let n = b(null);
  try {
    t.call(e);
  } finally {
    b(n), le(5, e, t);
  }
}
function Af(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[g] >> 14 < e[ct] >> 16 &&
      (e[g] & 3) === t &&
      ((e[g] += 16384), oa(a, i))
    : oa(a, i);
}
var ft = -1,
  qe = class {
    constructor(t, n, r) {
      (this.factory = t),
        (this.resolving = !1),
        (this.canSeeViewProviders = n),
        (this.injectImpl = r);
    }
  };
function Of(e) {
  return e instanceof qe;
}
function Rf(e) {
  return (e.flags & 8) !== 0;
}
function Ff(e) {
  return (e.flags & 16) !== 0;
}
var Zr = {},
  mo = class {
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = cr(r);
      let o = this.injector.get(t, Zr, r);
      return o !== Zr || n === Zr ? o : this.parentInjector.get(t, n, r);
    }
  };
function xu(e) {
  return e !== ft;
}
function Gn(e) {
  return e & 32767;
}
function Pf(e) {
  return e >> 16;
}
function Wn(e, t) {
  let n = Pf(e),
    r = t;
  for (; n > 0; ) (r = r[Mt]), n--;
  return r;
}
var yo = !0;
function ia(e) {
  let t = yo;
  return (yo = e), t;
}
var kf = 256,
  Su = kf - 1,
  Tu = 5,
  Lf = 0,
  de = {};
function jf(e, t, n) {
  let r;
  typeof n == 'string'
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(Bt) && (r = n[Bt]),
    r == null && (r = n[Bt] = Lf++);
  let o = r & Su,
    i = 1 << o;
  t.data[e + (o >> Tu)] |= i;
}
function qn(e, t) {
  let n = Nu(e, t);
  if (n !== -1) return n;
  let r = t[y];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    Yr(r.data, e),
    Yr(t, null),
    Yr(r.blueprint, null));
  let o = mi(e, t),
    i = e.injectorIndex;
  if (xu(o)) {
    let s = Gn(o),
      a = Wn(o, t),
      u = a[y].data;
    for (let c = 0; c < 8; c++) t[i + c] = a[s + c] | u[s + c];
  }
  return (t[i + 8] = o), i;
}
function Yr(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function Nu(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function mi(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = Pu(o)), r === null)) return ft;
    if ((n++, (o = o[Mt]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return ft;
}
function Do(e, t, n) {
  jf(e, t, n);
}
function Au(e, t, n) {
  if (n & I.Optional || e !== void 0) return e;
  ti(t, 'NodeInjector');
}
function Ou(e, t, n, r) {
  if (
    (n & I.Optional && r === void 0 && (r = null), !(n & (I.Self | I.Host)))
  ) {
    let o = e[mt],
      i = J(void 0);
    try {
      return o ? o.get(t, r, n & I.Optional) : ka(t, r, n & I.Optional);
    } finally {
      J(i);
    }
  }
  return Au(r, t, n);
}
function Ru(e, t, n, r = I.Default, o) {
  if (e !== null) {
    if (t[g] & 2048 && !(r & I.Self)) {
      let s = Hf(e, t, n, r, de);
      if (s !== de) return s;
    }
    let i = Fu(e, t, n, r, de);
    if (i !== de) return i;
  }
  return Ou(t, n, r, o);
}
function Fu(e, t, n, r, o) {
  let i = Bf(n);
  if (typeof i == 'function') {
    if (!vu(t, e, r)) return r & I.Host ? Au(o, n, r) : Ou(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & I.Optional))) ti(n);
      else return s;
    } finally {
      Cu();
    }
  } else if (typeof i == 'number') {
    let s = null,
      a = Nu(e, t),
      u = ft,
      c = r & I.Host ? t[ee][q] : null;
    for (
      (a === -1 || r & I.SkipSelf) &&
      ((u = a === -1 ? mi(e, t) : t[a + 8]),
      u === ft || !aa(r, !1)
        ? (a = -1)
        : ((s = t[y]), (a = Gn(u)), (t = Wn(u, t))));
      a !== -1;

    ) {
      let l = t[y];
      if (sa(i, a, l.data)) {
        let d = Vf(a, t, n, s, r, c);
        if (d !== de) return d;
      }
      (u = t[a + 8]),
        u !== ft && aa(r, t[y].data[a + 8] === c) && sa(i, a, t)
          ? ((s = l), (a = Gn(u)), (t = Wn(u, t)))
          : (a = -1);
    }
  }
  return o;
}
function Vf(e, t, n, r, o, i) {
  let s = t[y],
    a = s.data[e + 8],
    u = r == null ? dr(a) && yo : r != s && (a.type & 3) !== 0,
    c = o & I.Host && i === a,
    l = Fn(a, s, n, u, c);
  return l !== null ? Ze(t, s, l, a) : de;
}
function Fn(e, t, n, r, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    u = e.directiveStart,
    c = e.directiveEnd,
    l = i >> 20,
    d = r ? a : a + l,
    p = o ? a + l : c;
  for (let f = d; f < p; f++) {
    let h = s[f];
    if ((f < u && n === h) || (f >= u && h.type === n)) return f;
  }
  if (o) {
    let f = s[u];
    if (f && Oe(f) && f.type === n) return u;
  }
  return null;
}
function Ze(e, t, n, r) {
  let o = e[n],
    i = t.data;
  if (Of(o)) {
    let s = o;
    s.resolving && dd(ld(i[n]));
    let a = ia(s.canSeeViewProviders);
    s.resolving = !0;
    let u,
      c = s.injectImpl ? J(s.injectImpl) : null,
      l = vu(e, r, I.Default);
    try {
      (o = e[n] = s.factory(void 0, i, e, r)),
        t.firstCreatePass && n >= r.directiveStart && Nf(n, i[n], t);
    } finally {
      c !== null && J(c), ia(a), (s.resolving = !1), Cu();
    }
  }
  return o;
}
function Bf(e) {
  if (typeof e == 'string') return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(Bt) ? e[Bt] : void 0;
  return typeof t == 'number' ? (t >= 0 ? t & Su : $f) : t;
}
function sa(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> Tu)] & r);
}
function aa(e, t) {
  return !(e & I.Self) && !(e & I.Host && t);
}
var $e = class {
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return Ru(this._tNode, this._lView, t, cr(r), n);
  }
};
function $f() {
  return new $e(H(), _());
}
function Ww(e) {
  return Qt(() => {
    let t = e.prototype.constructor,
      n = t[Ln] || vo(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[Ln] || vo(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function vo(e) {
  return Na(e)
    ? () => {
        let t = vo(V(e));
        return t && t();
      }
    : pt(e);
}
function Hf(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[g] & 2048 && !(s[g] & 512); ) {
    let a = Fu(i, s, n, r | I.Self, de);
    if (a !== de) return a;
    let u = i.parent;
    if (!u) {
      let c = s[tu];
      if (c) {
        let l = c.get(n, de, r);
        if (l !== de) return l;
      }
      (u = Pu(s)), (s = s[Mt]);
    }
    i = u;
  }
  return o;
}
function Pu(e) {
  let t = e[y],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[q] : null;
}
function ua(e, t = null, n = null, r) {
  let o = ku(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function ku(e, t = null, n = null, r, o = new Set()) {
  let i = [n || z, qd(e)];
  return (
    (r = r || (typeof e == 'object' ? void 0 : B(e))),
    new zt(i, t || si(), r || null, o)
  );
}
var vt = class e {
  static {
    this.THROW_IF_NOT_FOUND = $t;
  }
  static {
    this.NULL = new $n();
  }
  static create(t, n) {
    if (Array.isArray(t)) return ua({ name: '' }, n, t, '');
    {
      let r = t.name ?? '';
      return ua({ name: r }, t.parent, t.providers, r);
    }
  }
  static {
    this.ɵprov = A({ token: e, providedIn: 'any', factory: () => W(Va) });
  }
  static {
    this.__NG_ELEMENT_ID__ = -1;
  }
};
var Uf = new x('');
Uf.__NG_ELEMENT_ID__ = (e) => {
  let t = H();
  if (t === null) throw new M(204, !1);
  if (t.type & 2) return t.value;
  if (e & I.Optional) return null;
  throw new M(204, !1);
};
var zf = 'ngOriginalError';
function Qr(e) {
  return e[zf];
}
var Lu = !0,
  ju = (() => {
    class e {
      static {
        this.__NG_ELEMENT_ID__ = Gf;
      }
      static {
        this.__NG_ENV_ID__ = (n) => n;
      }
    }
    return e;
  })(),
  Io = class extends ju {
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return du(this._lView, t), () => hf(this._lView, t);
    }
  };
function Gf() {
  return new Io(_());
}
var Ir = (() => {
  class e {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new Ft(!1));
    }
    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }
    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let n = this.taskId++;
      return this.pendingTasks.add(n), n;
    }
    remove(n) {
      this.pendingTasks.delete(n),
        this.pendingTasks.size === 0 &&
          this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
    }
    ngOnDestroy() {
      this.pendingTasks.clear(),
        this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
    static {
      this.ɵprov = A({ token: e, providedIn: 'root', factory: () => new e() });
    }
  }
  return e;
})();
var Eo = class extends be {
    constructor(t = !1) {
      super(),
        (this.destroyRef = void 0),
        (this.pendingTasks = void 0),
        (this.__isAsync = t),
        of() &&
          ((this.destroyRef = D(ju, { optional: !0 }) ?? void 0),
          (this.pendingTasks = D(Ir, { optional: !0 }) ?? void 0));
    }
    emit(t) {
      let n = b(null);
      try {
        super.next(t);
      } finally {
        b(n);
      }
    }
    subscribe(t, n, r) {
      let o = t,
        i = n || (() => null),
        s = r;
      if (t && typeof t == 'object') {
        let u = t;
        (o = u.next?.bind(u)),
          (i = u.error?.bind(u)),
          (s = u.complete?.bind(u));
      }
      this.__isAsync &&
        ((i = this.wrapInTimeout(i)),
        o && (o = this.wrapInTimeout(o)),
        s && (s = this.wrapInTimeout(s)));
      let a = super.subscribe({ next: o, error: i, complete: s });
      return t instanceof P && t.add(a), a;
    }
    wrapInTimeout(t) {
      return (n) => {
        let r = this.pendingTasks?.add();
        setTimeout(() => {
          t(n), r !== void 0 && this.pendingTasks?.remove(r);
        });
      };
    }
  },
  ae = Eo;
function Zn(...e) {}
function Vu(e) {
  let t, n;
  function r() {
    e = Zn;
    try {
      n !== void 0 &&
        typeof cancelAnimationFrame == 'function' &&
        cancelAnimationFrame(n),
        t !== void 0 && clearTimeout(t);
    } catch {}
  }
  return (
    (t = setTimeout(() => {
      e(), r();
    })),
    typeof requestAnimationFrame == 'function' &&
      (n = requestAnimationFrame(() => {
        e(), r();
      })),
    () => r()
  );
}
function ca(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = Zn;
    }
  );
}
var yi = 'isAngularZone',
  Yn = yi + '_ID',
  Wf = 0,
  $ = class e {
    constructor(t) {
      (this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new ae(!1)),
        (this.onMicrotaskEmpty = new ae(!1)),
        (this.onStable = new ae(!1)),
        (this.onError = new ae(!1));
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: r = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: i = Lu,
      } = t;
      if (typeof Zone > 'u') throw new M(908, !1);
      Zone.assertZonePatched();
      let s = this;
      (s._nesting = 0),
        (s._outer = s._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
        n &&
          Zone.longStackTraceZoneSpec &&
          (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        (s.shouldCoalesceEventChangeDetection = !o && r),
        (s.shouldCoalesceRunChangeDetection = o),
        (s.callbackScheduled = !1),
        (s.scheduleInRootZone = i),
        Yf(s);
    }
    static isInAngularZone() {
      return typeof Zone < 'u' && Zone.current.get(yi) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new M(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new M(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask('NgZoneEvent: ' + o, t, qf, Zn, Zn);
      try {
        return i.runTask(s, n, r);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, n, r) {
      return this._inner.runGuarded(t, n, r);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  qf = {};
function Di(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function Zf(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    Vu(() => {
      (e.callbackScheduled = !1),
        wo(e),
        (e.isCheckStableRunning = !0),
        Di(e),
        (e.isCheckStableRunning = !1);
    });
  }
  e.scheduleInRootZone
    ? Zone.root.run(() => {
        t();
      })
    : e._outer.run(() => {
        t();
      }),
    wo(e);
}
function Yf(e) {
  let t = () => {
      Zf(e);
    },
    n = Wf++;
  e._inner = e._inner.fork({
    name: 'angular',
    properties: { [yi]: !0, [Yn]: n, [Yn + n]: !0 },
    onInvokeTask: (r, o, i, s, a, u) => {
      if (Qf(u)) return r.invokeTask(i, s, a, u);
      try {
        return la(e), r.invokeTask(i, s, a, u);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && s.type === 'eventTask') ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          da(e);
      }
    },
    onInvoke: (r, o, i, s, a, u, c) => {
      try {
        return la(e), r.invoke(i, s, a, u, c);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !Kf(u) &&
          t(),
          da(e);
      }
    },
    onHasTask: (r, o, i, s) => {
      r.hasTask(i, s),
        o === i &&
          (s.change == 'microTask'
            ? ((e._hasPendingMicrotasks = s.microTask), wo(e), Di(e))
            : s.change == 'macroTask' &&
              (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (r, o, i, s) => (
      r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
    ),
  });
}
function wo(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function la(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function da(e) {
  e._nesting--, Di(e);
}
var Co = class {
  constructor() {
    (this.hasPendingMicrotasks = !1),
      (this.hasPendingMacrotasks = !1),
      (this.isStable = !0),
      (this.onUnstable = new ae()),
      (this.onMicrotaskEmpty = new ae()),
      (this.onStable = new ae()),
      (this.onError = new ae());
  }
  run(t, n, r) {
    return t.apply(n, r);
  }
  runGuarded(t, n, r) {
    return t.apply(n, r);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, r, o) {
    return t.apply(n, r);
  }
};
function Qf(e) {
  return Bu(e, '__ignore_ng_zone__');
}
function Kf(e) {
  return Bu(e, '__scheduler_tick__');
}
function Bu(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
var It = class {
    constructor() {
      this._console = console;
    }
    handleError(t) {
      let n = this._findOriginalError(t);
      this._console.error('ERROR', t),
        n && this._console.error('ORIGINAL ERROR', n);
    }
    _findOriginalError(t) {
      let n = t && Qr(t);
      for (; n && Qr(n); ) n = Qr(n);
      return n || null;
    }
  },
  Jf = new x('', {
    providedIn: 'root',
    factory: () => {
      let e = D($),
        t = D(It);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  });
function Xf() {
  return xt(H(), _());
}
function xt(e, t) {
  return new Ee(te(e, t));
}
var Ee = (() => {
  class e {
    constructor(n) {
      this.nativeElement = n;
    }
    static {
      this.__NG_ELEMENT_ID__ = Xf;
    }
  }
  return e;
})();
function ep(e) {
  return e instanceof Ee ? e.nativeElement : e;
}
function tp() {
  return this._results[Symbol.iterator]();
}
var bo = class e {
  get changes() {
    return (this._changes ??= new ae());
  }
  constructor(t = !1) {
    (this._emitDistinctChangesOnly = t),
      (this.dirty = !0),
      (this._onDirty = void 0),
      (this._results = []),
      (this._changesDetected = !1),
      (this._changes = void 0),
      (this.length = 0),
      (this.first = void 0),
      (this.last = void 0);
    let n = e.prototype;
    n[Symbol.iterator] || (n[Symbol.iterator] = tp);
  }
  get(t) {
    return this._results[t];
  }
  map(t) {
    return this._results.map(t);
  }
  filter(t) {
    return this._results.filter(t);
  }
  find(t) {
    return this._results.find(t);
  }
  reduce(t, n) {
    return this._results.reduce(t, n);
  }
  forEach(t) {
    this._results.forEach(t);
  }
  some(t) {
    return this._results.some(t);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(t, n) {
    this.dirty = !1;
    let r = bd(t);
    (this._changesDetected = !Cd(this._results, r, n)) &&
      ((this._results = r),
      (this.length = r.length),
      (this.last = r[this.length - 1]),
      (this.first = r[0]));
  }
  notifyOnChanges() {
    this._changes !== void 0 &&
      (this._changesDetected || !this._emitDistinctChangesOnly) &&
      this._changes.emit(this);
  }
  onDirty(t) {
    this._onDirty = t;
  }
  setDirty() {
    (this.dirty = !0), this._onDirty?.();
  }
  destroy() {
    this._changes !== void 0 &&
      (this._changes.complete(), this._changes.unsubscribe());
  }
};
function $u(e) {
  return (e.flags & 128) === 128;
}
var Hu = new Map(),
  np = 0;
function rp() {
  return np++;
}
function op(e) {
  Hu.set(e[lr], e);
}
function _o(e) {
  Hu.delete(e[lr]);
}
var fa = '__ngContext__';
function Re(e, t) {
  Te(t) ? ((e[fa] = t[lr]), op(t)) : (e[fa] = t);
}
function Uu(e) {
  return Gu(e[Wt]);
}
function zu(e) {
  return Gu(e[ue]);
}
function Gu(e) {
  for (; e !== null && !Ie(e); ) e = e[ue];
  return e;
}
var Mo;
function qw(e) {
  Mo = e;
}
function ip() {
  if (Mo !== void 0) return Mo;
  if (typeof document < 'u') return document;
  throw new M(210, !1);
}
var Zw = new x('', { providedIn: 'root', factory: () => sp }),
  sp = 'ng',
  ap = new x(''),
  Wu = new x('', { providedIn: 'platform', factory: () => 'unknown' });
var Yw = new x(''),
  Qw = new x('', {
    providedIn: 'root',
    factory: () =>
      ip().body?.querySelector('[ngCspNonce]')?.getAttribute('ngCspNonce') ||
      null,
  }),
  vi = {
    breakpoints: [
      16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,
      3840,
    ],
    placeholderResolution: 30,
    disableImageSizeWarning: !1,
    disableImageLazyLoadWarning: !1,
  },
  qu = new x('', { providedIn: 'root', factory: () => vi });
var up = 'h',
  cp = 'b';
var lp = () => null;
function Ii(e, t, n = !1) {
  return lp(e, t, n);
}
var Zu = !1,
  dp = new x('', { providedIn: 'root', factory: () => Zu });
var xn;
function fp() {
  if (xn === void 0 && ((xn = null), Gs.trustedTypes))
    try {
      xn = Gs.trustedTypes.createPolicy('angular', {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return xn;
}
function pp(e) {
  return fp()?.createScriptURL(e) || e;
}
var xo = class {
  constructor(t) {
    this.changingThisBreaksApplicationSecurity = t;
  }
  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ed})`;
  }
};
function Er(e) {
  return e instanceof xo ? e.changingThisBreaksApplicationSecurity : e;
}
function Kw(e) {
  return pp(e[0]);
}
var hp = /^>|^->|<!--|-->|--!>|<!-$/g,
  gp = /(<|>)/g,
  mp = '\u200B$1\u200B';
function yp(e) {
  return e.replace(hp, (t) => t.replace(gp, mp));
}
function Yu(e) {
  return e instanceof Function ? e() : e;
}
var qt = (function (e) {
    return (
      (e[(e.Important = 1)] = 'Important'),
      (e[(e.DashCase = 2)] = 'DashCase'),
      e
    );
  })(qt || {}),
  Dp;
function Ei(e, t) {
  return Dp(e, t);
}
function lt(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    Ie(r) ? (i = r) : Te(r) && ((s = !0), (r = r[ve]));
    let a = fe(r);
    e === 0 && n !== null
      ? o == null
        ? ec(t, n, a)
        : Kn(t, n, a, o || null, !0)
      : e === 1 && n !== null
        ? Kn(t, n, a, o || null, !0)
        : e === 2
          ? Op(t, a, s)
          : e === 3 && t.destroyNode(a),
      i != null && Fp(t, e, i, n, o);
  }
}
function vp(e, t) {
  return e.createText(t);
}
function Ip(e, t, n) {
  e.setValue(t, n);
}
function Ep(e, t) {
  return e.createComment(yp(t));
}
function Qu(e, t, n) {
  return e.createElement(t, n);
}
function wp(e, t) {
  Ku(e, t), (t[ve] = null), (t[q] = null);
}
function Cp(e, t, n, r, o, i) {
  (r[ve] = o), (r[q] = t), Cr(e, r, n, 1, o, i);
}
function Ku(e, t) {
  t[ye].changeDetectionScheduler?.notify(9), Cr(e, t, t[O], 2, null, null);
}
function bp(e) {
  let t = e[Wt];
  if (!t) return Kr(e[y], e);
  for (; t; ) {
    let n = null;
    if (Te(t)) n = t[Wt];
    else {
      let r = t[G];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[ue] && t !== e; ) Te(t) && Kr(t[y], t), (t = t[j]);
      t === null && (t = e), Te(t) && Kr(t[y], t), (n = t && t[ue]);
    }
    t = n;
  }
}
function _p(e, t, n, r) {
  let o = G + r,
    i = n.length;
  r > 0 && (n[o - 1][ue] = t),
    r < i - G ? ((t[ue] = n[o]), ja(n, G + r, t)) : (n.push(t), (t[ue] = null)),
    (t[j] = n);
  let s = t[Ue];
  s !== null && n !== s && Ju(s, t);
  let a = t[De];
  a !== null && a.insertView(e), ho(t), (t[g] |= 128);
}
function Ju(e, t) {
  let n = e[yt],
    r = t[j];
  if (Te(r)) e[g] |= zn.HasTransplantedViews;
  else {
    let o = r[j][ee];
    t[ee] !== o && (e[g] |= zn.HasTransplantedViews);
  }
  n === null ? (e[yt] = [t]) : n.push(t);
}
function wi(e, t) {
  let n = e[yt],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function Qn(e, t) {
  if (e.length <= G) return;
  let n = G + t,
    r = e[n];
  if (r) {
    let o = r[Ue];
    o !== null && o !== e && wi(o, r), t > 0 && (e[n - 1][ue] = r[ue]);
    let i = Vn(e, G + t);
    wp(r[y], r);
    let s = i[De];
    s !== null && s.detachView(i[y]),
      (r[j] = null),
      (r[ue] = null),
      (r[g] &= -129);
  }
  return r;
}
function Ci(e, t) {
  if (!(t[g] & 256)) {
    let n = t[O];
    n.destroyNode && Cr(e, t, n, 3, null, null), bp(t);
  }
}
function Kr(e, t) {
  if (t[g] & 256) return;
  let n = b(null);
  try {
    (t[g] &= -129),
      (t[g] |= 256),
      t[X] && Nr(t[X]),
      xp(e, t),
      Mp(e, t),
      t[y].type === 1 && t[O].destroy();
    let r = t[Ue];
    if (r !== null && Ie(t[j])) {
      r !== t[j] && wi(r, t);
      let o = t[De];
      o !== null && o.detachView(e);
    }
    _o(t);
  } finally {
    b(n);
  }
}
function Mp(e, t) {
  let n = e.cleanup,
    r = t[Hn];
  if (n !== null)
    for (let i = 0; i < n.length - 1; i += 2)
      if (typeof n[i] == 'string') {
        let s = n[i + 3];
        s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
      } else {
        let s = r[n[i + 1]];
        n[i].call(s);
      }
  r !== null && (t[Hn] = null);
  let o = t[Se];
  if (o !== null) {
    t[Se] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}
function xp(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof qe)) {
        let i = n[r + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              u = i[s + 1];
            le(4, a, u);
            try {
              u.call(a);
            } finally {
              le(5, a, u);
            }
          }
        else {
          le(4, o, i);
          try {
            i.call(o);
          } finally {
            le(5, o, i);
          }
        }
      }
    }
}
function Xu(e, t, n) {
  return Sp(e, t.parent, n);
}
function Sp(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) (t = r), (r = t.parent);
  if (r === null) return n[ve];
  {
    let { componentOffset: o } = r;
    if (o > -1) {
      let { encapsulation: i } = e.data[r.directiveStart + o];
      if (i === Ht.None || i === Ht.Emulated) return null;
    }
    return te(r, n);
  }
}
function Kn(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function ec(e, t, n) {
  e.appendChild(t, n);
}
function pa(e, t, n, r, o) {
  r !== null ? Kn(e, t, n, r, o) : ec(e, t, n);
}
function tc(e, t) {
  return e.parentNode(t);
}
function Tp(e, t) {
  return e.nextSibling(t);
}
function nc(e, t, n) {
  return Ap(e, t, n);
}
function Np(e, t, n) {
  return e.type & 40 ? te(e, n) : null;
}
var Ap = Np,
  ha;
function wr(e, t, n, r) {
  let o = Xu(e, r, t),
    i = t[O],
    s = r.parent || t[q],
    a = nc(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let u = 0; u < n.length; u++) pa(i, o, n[u], a, !1);
    else pa(i, o, n, a, !1);
  ha !== void 0 && ha(i, r, t, n, o);
}
function jt(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return te(t, e);
    if (n & 4) return So(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return jt(e, r);
      {
        let o = e[t.index];
        return Ie(o) ? So(-1, o) : fe(o);
      }
    } else {
      if (n & 128) return jt(e, t.next);
      if (n & 32) return Ei(t, e)() || fe(e[t.index]);
      {
        let r = rc(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = Ge(e[ee]);
          return jt(o, r);
        } else return jt(e, t.next);
      }
    }
  }
  return null;
}
function rc(e, t) {
  if (t !== null) {
    let r = e[ee][q],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function So(e, t) {
  let n = G + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[y].firstChild;
    if (o !== null) return jt(r, o);
  }
  return t[ze];
}
function Op(e, t, n) {
  e.removeChild(null, t, n);
}
function bi(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index],
      u = n.type;
    if (
      (s && t === 0 && (a && Re(fe(a), r), (n.flags |= 2)),
      (n.flags & 32) !== 32)
    )
      if (u & 8) bi(e, t, n.child, r, o, i, !1), lt(t, e, o, a, i);
      else if (u & 32) {
        let c = Ei(n, r),
          l;
        for (; (l = c()); ) lt(t, e, o, l, i);
        lt(t, e, o, a, i);
      } else u & 16 ? oc(e, t, r, n, o, i) : lt(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function Cr(e, t, n, r, o, i) {
  bi(n, r, e.firstChild, t, o, i, !1);
}
function Rp(e, t, n) {
  let r = t[O],
    o = Xu(e, n, t),
    i = n.parent || t[q],
    s = nc(i, n, t);
  oc(r, 0, t, n, o, s);
}
function oc(e, t, n, r, o, i) {
  let s = n[ee],
    u = s[q].projection[r.projection];
  if (Array.isArray(u))
    for (let c = 0; c < u.length; c++) {
      let l = u[c];
      lt(t, e, o, l, i);
    }
  else {
    let c = u,
      l = s[j];
    $u(r) && (c.flags |= 128), bi(e, t, c, l, o, i, !0);
  }
}
function Fp(e, t, n, r, o) {
  let i = n[ze],
    s = fe(n);
  i !== s && lt(t, e, r, i, o);
  for (let a = G; a < n.length; a++) {
    let u = n[a];
    Cr(u[y], u, e, t, r, i);
  }
}
function Pp(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf('-') === -1 ? void 0 : qt.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == 'string' &&
          o.endsWith('!important') &&
          ((o = o.slice(0, -10)), (i |= qt.Important)),
        e.setStyle(n, r, o, i));
  }
}
function kp(e, t, n) {
  e.setAttribute(t, 'style', n);
}
function ic(e, t, n) {
  n === '' ? e.removeAttribute(t, 'class') : e.setAttribute(t, 'class', n);
}
function sc(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && ao(e, t, r),
    o !== null && ic(e, t, o),
    i !== null && kp(e, t, i);
}
var he = {};
function Jw(e = 1) {
  ac(L(), _(), Je() + e, !1);
}
function ac(e, t, n, r) {
  if (!r)
    if ((t[g] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && On(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && Rn(t, i, 0, n);
    }
  We(n);
}
function ne(e, t = I.Default) {
  let n = _();
  if (n === null) return W(e, t);
  let r = H();
  return Ru(r, n, V(e), t);
}
function Xw() {
  let e = 'invalid';
  throw new Error(e);
}
function uc(e, t, n, r, o, i) {
  let s = b(null);
  try {
    let a = null;
    o & Ne.SignalBased && (a = t[r][nt]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      o & Ne.HasDecoratorInputTransform &&
        (i = e.inputTransforms[r].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, n, r) : ru(t, a, r, i);
  } finally {
    b(s);
  }
}
function Lp(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) We(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          Cf(s, i);
          let u = t[i];
          a(2, u);
        }
      }
    } finally {
      We(-1);
    }
}
function br(e, t, n, r, o, i, s, a, u, c, l) {
  let d = t.blueprint.slice();
  return (
    (d[ve] = o),
    (d[g] = r | 4 | 128 | 8 | 64),
    (c !== null || (e && e[g] & 2048)) && (d[g] |= 2048),
    cu(d),
    (d[j] = d[Mt] = e),
    (d[ce] = n),
    (d[ye] = s || (e && e[ye])),
    (d[O] = a || (e && e[O])),
    (d[mt] = u || (e && e[mt]) || null),
    (d[q] = i),
    (d[lr] = rp()),
    (d[Gt] = l),
    (d[tu] = c),
    (d[ee] = t.type == 2 ? e[ee] : d),
    d
  );
}
function St(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) (i = jp(e, t, n, r, o)), wf() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = r), (i.attrs = o);
    let s = If();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return Ke(i, !0), i;
}
function jp(e, t, n, r, o) {
  let i = gu(),
    s = li(),
    a = s ? i : i && i.parent,
    u = (e.data[t] = zp(e, a, n, t, r, o));
  return (
    e.firstChild === null && (e.firstChild = u),
    i !== null &&
      (s
        ? i.child == null && u.parent !== null && (i.child = u)
        : i.next === null && ((i.next = u), (u.prev = i))),
    u
  );
}
function cc(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function lc(e, t, n, r, o) {
  let i = Je(),
    s = r & 2;
  try {
    We(-1), s && t.length > Q && ac(e, t, Q, !1), le(s ? 2 : 0, o), n(r, o);
  } finally {
    We(i), le(s ? 3 : 1, o);
  }
}
function _i(e, t, n) {
  if (ai(t)) {
    let r = b(null);
    try {
      let o = t.directiveStart,
        i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let u = n[s];
          a.contentQueries(1, u, s);
        }
      }
    } finally {
      b(r);
    }
  }
}
function Mi(e, t, n) {
  pu() && (Kp(e, t, n, te(n, t)), (n.flags & 64) === 64 && pc(e, t, n));
}
function xi(e, t, n = te) {
  let r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
      let s = r[i + 1],
        a = s === -1 ? n(t, e) : e[s];
      e[o++] = a;
    }
  }
}
function dc(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = Si(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id
      ))
    : t;
}
function Si(e, t, n, r, o, i, s, a, u, c, l) {
  let d = Q + r,
    p = d + o,
    f = Vp(d, p),
    h = typeof c == 'function' ? c() : c;
  return (f[y] = {
    type: e,
    blueprint: f,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: f.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: p,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == 'function' ? i() : i,
    pipeRegistry: typeof s == 'function' ? s() : s,
    firstChild: null,
    schemas: u,
    consts: h,
    incompleteFirstPass: !1,
    ssrId: l,
  });
}
function Vp(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : he);
  return n;
}
function Bp(e, t, n, r) {
  let i = r.get(dp, Zu) || n === Ht.ShadowDom,
    s = e.selectRootElement(t, i);
  return $p(s), s;
}
function $p(e) {
  Hp(e);
}
var Hp = () => null;
function Up(e, t, n, r) {
  let o = mc(t);
  o.push(n), e.firstCreatePass && yc(e).push(r, o.length - 1);
}
function zp(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    hu() && (a |= 128),
    {
      type: n,
      index: r,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: o,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
function ga(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a,
      u = Ne.None;
    Array.isArray(s) ? ((a = s[0]), (u = s[1])) : (a = s);
    let c = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      c = o[i];
    }
    e === 0 ? ma(r, n, c, a, u) : ma(r, n, c, a);
  }
  return r;
}
function ma(e, t, n, r, o) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : (i = e[n] = [t, r]),
    o !== void 0 && i.push(o);
}
function Gp(e, t, n) {
  let r = t.directiveStart,
    o = t.directiveEnd,
    i = e.data,
    s = t.attrs,
    a = [],
    u = null,
    c = null;
  for (let l = r; l < o; l++) {
    let d = i[l],
      p = n ? n.get(d) : null,
      f = p ? p.inputs : null,
      h = p ? p.outputs : null;
    (u = ga(0, d.inputs, l, u, f)), (c = ga(1, d.outputs, l, c, h));
    let C = u !== null && s !== null && !oi(t) ? uh(u, l, s) : null;
    a.push(C);
  }
  u !== null &&
    (u.hasOwnProperty('class') && (t.flags |= 8),
    u.hasOwnProperty('style') && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = u),
    (t.outputs = c);
}
function Wp(e) {
  return e === 'class'
    ? 'className'
    : e === 'for'
      ? 'htmlFor'
      : e === 'formaction'
        ? 'formAction'
        : e === 'innerHtml'
          ? 'innerHTML'
          : e === 'readonly'
            ? 'readOnly'
            : e === 'tabindex'
              ? 'tabIndex'
              : e;
}
function qp(e, t, n, r, o, i, s, a) {
  let u = te(t, n),
    c = t.inputs,
    l;
  !a && c != null && (l = c[r])
    ? (Ni(e, n, l, r, o), dr(t) && Zp(n, t.index))
    : t.type & 3
      ? ((r = Wp(r)),
        (o = s != null ? s(o, t.value || '', r) : o),
        i.setProperty(u, r, o))
      : t.type & 12;
}
function Zp(e, t) {
  let n = Pe(t, e);
  n[g] & 16 || (n[g] |= 64);
}
function Ti(e, t, n, r) {
  if (pu()) {
    let o = r === null ? null : { '': -1 },
      i = Xp(e, n),
      s,
      a;
    i === null ? (s = a = null) : ([s, a] = i),
      s !== null && fc(e, t, n, s, o, a),
      o && eh(n, r, o);
  }
  n.mergedAttrs = Ut(n.mergedAttrs, n.attrs);
}
function fc(e, t, n, r, o, i) {
  for (let c = 0; c < r.length; c++) Do(qn(n, t), e, r[c].type);
  nh(n, e.data.length, r.length);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1,
    a = !1,
    u = cc(e, t, r.length, null);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    (n.mergedAttrs = Ut(n.mergedAttrs, l.hostAttrs)),
      rh(e, n, t, u, l),
      th(u, l, o),
      l.contentQueries !== null && (n.flags |= 4),
      (l.hostBindings !== null || l.hostAttrs !== null || l.hostVars !== 0) &&
        (n.flags |= 64);
    let d = l.type.prototype;
    !s &&
      (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
      !a &&
        (d.ngOnChanges || d.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (a = !0)),
      u++;
  }
  Gp(e, n, i);
}
function Yp(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    Qp(s) != a && s.push(a), s.push(n, r, i);
  }
}
function Qp(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == 'number' && n < 0) return n;
  }
  return 0;
}
function Kp(e, t, n, r) {
  let o = n.directiveStart,
    i = n.directiveEnd;
  dr(n) && oh(t, n, e.data[o + n.componentOffset]),
    e.firstCreatePass || qn(n, t),
    Re(r, t);
  let s = n.initialInputs;
  for (let a = o; a < i; a++) {
    let u = e.data[a],
      c = Ze(t, e, a, n);
    if ((Re(c, t), s !== null && ah(t, a - o, c, u, n, s), Oe(u))) {
      let l = Pe(n.index, t);
      l[ce] = Ze(t, e, a, n);
    }
  }
}
function pc(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = bf();
  try {
    We(i);
    for (let a = r; a < o; a++) {
      let u = e.data[a],
        c = t[a];
      go(a),
        (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) &&
          Jp(u, c);
    }
  } finally {
    We(-1), go(s);
  }
}
function Jp(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function Xp(e, t) {
  let n = e.directiveRegistry,
    r = null,
    o = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (Ua(t, s.selectors, !1))
        if ((r || (r = []), Oe(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (o = o || new Map()),
              s.findHostDirectiveDefs(s, a, o),
              r.unshift(...a, s);
            let u = a.length;
            To(e, t, u);
          } else r.unshift(s), To(e, t, 0);
        else
          (o = o || new Map()), s.findHostDirectiveDefs?.(s, r, o), r.push(s);
    }
  return r === null ? null : [r, o];
}
function To(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function eh(e, t, n) {
  if (t) {
    let r = (e.localNames = []);
    for (let o = 0; o < t.length; o += 2) {
      let i = n[t[o + 1]];
      if (i == null) throw new M(-301, !1);
      r.push(t[o], i);
    }
  }
}
function th(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    Oe(t) && (n[''] = e);
  }
}
function nh(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function rh(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = pt(o.type, !0)),
    s = new qe(i, Oe(o), ne);
  (e.blueprint[r] = s), (n[r] = s), Yp(e, t, r, cc(e, n, o.hostVars, he), o);
}
function oh(e, t, n) {
  let r = te(t, e),
    o = dc(n),
    i = e[ye].rendererFactory,
    s = 16;
  n.signals ? (s = 4096) : n.onPush && (s = 64);
  let a = _r(
    e,
    br(e, o, null, s, r, t, null, i.createRenderer(r, n), null, null, null)
  );
  e[t.index] = a;
}
function ih(e, t, n, r, o, i) {
  let s = te(e, t);
  sh(t[O], s, i, e.value, n, r, o);
}
function sh(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? ei(i) : s(i, r || '', o);
    e.setAttribute(t, o, a, n);
  }
}
function ah(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let u = s[a++],
        c = s[a++],
        l = s[a++],
        d = s[a++];
      uc(r, n, u, c, l, d);
    }
}
function uh(e, t, n) {
  let r = null,
    o = 0;
  for (; o < n.length; ) {
    let i = n[o];
    if (i === 0) {
      o += 4;
      continue;
    } else if (i === 5) {
      o += 2;
      continue;
    }
    if (typeof i == 'number') break;
    if (e.hasOwnProperty(i)) {
      r === null && (r = []);
      let s = e[i];
      for (let a = 0; a < s.length; a += 3)
        if (s[a] === t) {
          r.push(i, s[a + 1], s[a + 2], n[o + 1]);
          break;
        }
    }
    o += 2;
  }
  return r;
}
function hc(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function gc(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = b(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          pi(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      b(r);
    }
  }
}
function _r(e, t) {
  return e[Wt] ? (e[ta][ue] = t) : (e[Wt] = t), (e[ta] = t), t;
}
function No(e, t, n) {
  pi(0);
  let r = b(null);
  try {
    t(e, n);
  } finally {
    b(r);
  }
}
function mc(e) {
  return (e[Hn] ??= []);
}
function yc(e) {
  return (e.cleanup ??= []);
}
function Dc(e, t) {
  let n = e[mt],
    r = n ? n.get(It, null) : null;
  r && r.handleError(t);
}
function Ni(e, t, n, r, o) {
  for (let i = 0; i < n.length; ) {
    let s = n[i++],
      a = n[i++],
      u = n[i++],
      c = t[s],
      l = e.data[s];
    uc(l, c, r, a, u, o);
  }
}
function ch(e, t, n) {
  let r = uu(t, e);
  Ip(e[O], r, n);
}
function lh(e, t) {
  let n = Pe(t, e),
    r = n[y];
  dh(r, n);
  let o = n[ve];
  o !== null && n[Gt] === null && (n[Gt] = Ii(o, n[mt])), Ai(r, n, n[ce]);
}
function dh(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function Ai(e, t, n) {
  hi(t);
  try {
    let r = e.viewQuery;
    r !== null && No(1, r, n);
    let o = e.template;
    o !== null && lc(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[De]?.finishViewCreation(e),
      e.staticContentQueries && gc(e, t),
      e.staticViewQueries && No(2, e.viewQuery, n);
    let i = e.components;
    i !== null && fh(t, i);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[g] &= -5), gi();
  }
}
function fh(e, t) {
  for (let n = 0; n < t.length; n++) lh(e, t[n]);
}
function Oi(e, t, n, r) {
  let o = b(null);
  try {
    let i = t.tView,
      a = e[g] & 4096 ? 4096 : 16,
      u = br(
        e,
        i,
        n,
        a,
        null,
        t,
        null,
        null,
        r?.injector ?? null,
        r?.embeddedViewInjector ?? null,
        r?.dehydratedView ?? null
      ),
      c = e[t.index];
    u[Ue] = c;
    let l = e[De];
    return l !== null && (u[De] = l.createEmbeddedView(i)), Ai(i, u, n), u;
  } finally {
    b(o);
  }
}
function ph(e, t) {
  let n = G + t;
  if (n < e.length) return e[n];
}
function Jn(e, t) {
  return !t || t.firstChild === null || $u(e);
}
function Ri(e, t, n, r = !0) {
  let o = t[y];
  if ((_p(o, t, e, n), r)) {
    let s = So(n, e),
      a = t[O],
      u = tc(a, e[ze]);
    u !== null && Cp(o, e[q], a, t, u, s);
  }
  let i = t[Gt];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function hh(e, t) {
  let n = Qn(e, t);
  return n !== void 0 && Ci(n[y], n), n;
}
function Xn(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(fe(i)), Ie(i) && gh(i, r);
    let s = n.type;
    if (s & 8) Xn(e, t, n.child, r);
    else if (s & 32) {
      let a = Ei(n, t),
        u;
      for (; (u = a()); ) r.push(u);
    } else if (s & 16) {
      let a = rc(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let u = Ge(t[ee]);
        Xn(u[y], u, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function gh(e, t) {
  for (let n = G; n < e.length; n++) {
    let r = e[n],
      o = r[y].firstChild;
    o !== null && Xn(r[y], r, o, t);
  }
  e[ze] !== e[ve] && t.push(e[ze]);
}
var vc = [];
function mh(e) {
  return e[X] ?? yh(e);
}
function yh(e) {
  let t = vc.pop() ?? Object.create(vh);
  return (t.lView = e), t;
}
function Dh(e) {
  e.lView[X] !== e && ((e.lView = null), vc.push(e));
}
var vh = Ce(we({}, rn), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    gr(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[X] = this;
  },
});
function Ih(e) {
  let t = e[X] ?? Object.create(Eh);
  return (t.lView = e), t;
}
var Eh = Ce(we({}, rn), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    let t = Ge(e.lView);
    for (; t && !Ic(t[y]); ) t = Ge(t);
    t && lu(t);
  },
  consumerOnSignalRead() {
    this.lView[X] = this;
  },
});
function Ic(e) {
  return e.type !== 2;
}
var wh = 100;
function Ec(e, t = !0, n = 0) {
  let r = e[ye],
    o = r.rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    Ch(e, n);
  } catch (s) {
    throw (t && Dc(e, s), s);
  } finally {
    i || (o.end?.(), r.inlineEffectRunner?.flush());
  }
}
function Ch(e, t) {
  let n = mu();
  try {
    ra(!0), Ao(e, t);
    let r = 0;
    for (; hr(e); ) {
      if (r === wh) throw new M(103, !1);
      r++, Ao(e, 1);
    }
  } finally {
    ra(n);
  }
}
function bh(e, t, n, r) {
  let o = t[g];
  if ((o & 256) === 256) return;
  let i = !1,
    s = !1;
  !i && t[ye].inlineEffectRunner?.flush(), hi(t);
  let a = !0,
    u = null,
    c = null;
  i ||
    (Ic(e)
      ? ((c = mh(t)), (u = Sr(c)))
      : es() === null
        ? ((a = !1), (c = Ih(t)), (u = Sr(c)))
        : t[X] && (Nr(t[X]), (t[X] = null)));
  try {
    cu(t), Ef(e.bindingStartIndex), n !== null && lc(e, t, n, 2, r);
    let l = (o & 3) === 3;
    if (!i)
      if (l) {
        let f = e.preOrderCheckHooks;
        f !== null && On(t, f, null);
      } else {
        let f = e.preOrderHooks;
        f !== null && Rn(t, f, 0, null), qr(t, 0);
      }
    if ((s || _h(t), wc(t, 0), e.contentQueries !== null && gc(e, t), !i))
      if (l) {
        let f = e.contentCheckHooks;
        f !== null && On(t, f);
      } else {
        let f = e.contentHooks;
        f !== null && Rn(t, f, 1), qr(t, 1);
      }
    Lp(e, t);
    let d = e.components;
    d !== null && bc(t, d, 0);
    let p = e.viewQuery;
    if ((p !== null && No(2, p, r), !i))
      if (l) {
        let f = e.viewCheckHooks;
        f !== null && On(t, f);
      } else {
        let f = e.viewHooks;
        f !== null && Rn(t, f, 2), qr(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Wr])) {
      for (let f of t[Wr]) f();
      t[Wr] = null;
    }
    i || (t[g] &= -73);
  } catch (l) {
    throw (i || gr(t), l);
  } finally {
    c !== null && (os(c, u), a && Dh(c)), gi();
  }
}
function wc(e, t) {
  for (let n = Uu(e); n !== null; n = zu(n))
    for (let r = G; r < n.length; r++) {
      let o = n[r];
      Cc(o, t);
    }
}
function _h(e) {
  for (let t = Uu(e); t !== null; t = zu(t)) {
    if (!(t[g] & zn.HasTransplantedViews)) continue;
    let n = t[yt];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      lu(o);
    }
  }
}
function Mh(e, t, n) {
  let r = Pe(t, e);
  Cc(r, n);
}
function Cc(e, t) {
  ci(e) && Ao(e, t);
}
function Ao(e, t) {
  let r = e[y],
    o = e[g],
    i = e[X],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && Tr(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[g] &= -9217),
    s)
  )
    bh(r, e, r.template, e[ce]);
  else if (o & 8192) {
    wc(e, 1);
    let a = r.components;
    a !== null && bc(e, a, 1);
  }
}
function bc(e, t, n) {
  for (let r = 0; r < t.length; r++) Mh(e, t[r], n);
}
function Fi(e, t) {
  let n = mu() ? 64 : 1088;
  for (e[ye].changeDetectionScheduler?.notify(t); e; ) {
    e[g] |= n;
    let r = Ge(e);
    if (fo(e) && !r) return e;
    e = r;
  }
  return null;
}
var Ye = class {
    get rootNodes() {
      let t = this._lView,
        n = t[y];
      return Xn(n, t, n.firstChild, []);
    }
    constructor(t, n, r = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = n),
        (this.notifyErrorHandler = r),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[ce];
    }
    set context(t) {
      this._lView[ce] = t;
    }
    get destroyed() {
      return (this._lView[g] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[j];
        if (Ie(t)) {
          let n = t[Un],
            r = n ? n.indexOf(this) : -1;
          r > -1 && (Qn(t, r), Vn(n, r));
        }
        this._attachedToViewContainer = !1;
      }
      Ci(this._lView[y], this._lView);
    }
    onDestroy(t) {
      du(this._lView, t);
    }
    markForCheck() {
      Fi(this._cdRefInjectingView || this._lView, 4);
    }
    detach() {
      this._lView[g] &= -129;
    }
    reattach() {
      ho(this._lView), (this._lView[g] |= 128);
    }
    detectChanges() {
      (this._lView[g] |= 1024), Ec(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new M(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let t = fo(this._lView),
        n = this._lView[Ue];
      n !== null && !t && wi(n, this._lView), Ku(this._lView[y], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new M(902, !1);
      this._appRef = t;
      let n = fo(this._lView),
        r = this._lView[Ue];
      r !== null && !n && Ju(r, this._lView), ho(this._lView);
    }
  },
  Et = (() => {
    class e {
      static {
        this.__NG_ELEMENT_ID__ = Th;
      }
    }
    return e;
  })(),
  xh = Et,
  Sh = class extends xh {
    constructor(t, n, r) {
      super(),
        (this._declarationLView = t),
        (this._declarationTContainer = n),
        (this.elementRef = r);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, n) {
      return this.createEmbeddedViewImpl(t, n);
    }
    createEmbeddedViewImpl(t, n, r) {
      let o = Oi(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new Ye(o);
    }
  };
function Th() {
  return Pi(H(), _());
}
function Pi(e, t) {
  return e.type & 4 ? new Sh(t, e, xt(e, t)) : null;
}
var tC = new RegExp(`^(\\d+)*(${cp}|${up})*(.*)`);
var Nh = () => null;
function er(e, t) {
  return Nh(e, t);
}
var wt = class {},
  ki = new x('', { providedIn: 'root', factory: () => !1 });
var _c = new x(''),
  Mc = new x(''),
  Oo = class {},
  tr = class {};
function Ah(e) {
  let t = Error(`No component factory found for ${B(e)}.`);
  return (t[Oh] = e), t;
}
var Oh = 'ngComponent';
var Ro = class {
    resolveComponentFactory(t) {
      throw Ah(t);
    }
  },
  Ct = class {
    static {
      this.NULL = new Ro();
    }
  },
  nr = class {},
  Jt = (() => {
    class e {
      constructor() {
        this.destroyNode = null;
      }
      static {
        this.__NG_ELEMENT_ID__ = () => Rh();
      }
    }
    return e;
  })();
function Rh() {
  let e = _(),
    t = H(),
    n = Pe(t.index, e);
  return (Te(n) ? n : e)[O];
}
var Fh = (() => {
  class e {
    static {
      this.ɵprov = A({ token: e, providedIn: 'root', factory: () => null });
    }
  }
  return e;
})();
function rr(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == 'number') i = a;
      else if (i == 1) o = ro(o, a);
      else if (i == 2) {
        let u = a,
          c = t[++s];
        r = ro(r, u + ': ' + c + ';');
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o);
}
var or = class extends Ct {
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = He(t);
    return new Zt(n, this.ngModule);
  }
};
function ya(e, t) {
  let n = [];
  for (let r in e) {
    if (!e.hasOwnProperty(r)) continue;
    let o = e[r];
    if (o === void 0) continue;
    let i = Array.isArray(o),
      s = i ? o[0] : o,
      a = i ? o[1] : Ne.None;
    t
      ? n.push({
          propName: s,
          templateName: r,
          isSignal: (a & Ne.SignalBased) !== 0,
        })
      : n.push({ propName: s, templateName: r });
  }
  return n;
}
function Ph(e) {
  let t = e.toLowerCase();
  return t === 'svg' ? au : t === 'math' ? lf : null;
}
var Zt = class extends tr {
    get inputs() {
      let t = this.componentDef,
        n = t.inputTransforms,
        r = ya(t.inputs, !0);
      if (n !== null)
        for (let o of r)
          n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
      return r;
    }
    get outputs() {
      return ya(this.componentDef.outputs, !1);
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = Bd(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, o) {
      let i = b(null);
      try {
        o = o || this.ngModule;
        let s = o instanceof Ae ? o : o?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new mo(t, s) : t,
          u = a.get(nr, null);
        if (u === null) throw new M(407, !1);
        let c = a.get(Fh, null),
          l = a.get(wt, null),
          d = {
            rendererFactory: u,
            sanitizer: c,
            inlineEffectRunner: null,
            changeDetectionScheduler: l,
          },
          p = u.createRenderer(null, this.componentDef),
          f = this.componentDef.selectors[0][0] || 'div',
          h = r
            ? Bp(p, r, this.componentDef.encapsulation, a)
            : Qu(p, f, Ph(f)),
          C = 512;
        this.componentDef.signals
          ? (C |= 4096)
          : this.componentDef.onPush || (C |= 16);
        let F = null;
        h !== null && (F = Ii(h, a, !0));
        let N = Si(0, null, null, 1, 0, null, null, null, null, null, null),
          K = br(null, N, null, C, null, null, d, p, a, null, F);
        hi(K);
        let ge,
          re,
          et = null;
        try {
          let Z = this.componentDef,
            tt,
            xr = null;
          Z.findHostDirectiveDefs
            ? ((tt = []),
              (xr = new Map()),
              Z.findHostDirectiveDefs(Z, tt, xr),
              tt.push(Z))
            : (tt = [Z]);
          let al = kh(K, h);
          (et = Lh(al, h, Z, tt, K, d, p)),
            (re = ui(N, Q)),
            h && Bh(p, Z, h, r),
            n !== void 0 && $h(re, this.ngContentSelectors, n),
            (ge = Vh(et, Z, tt, xr, K, [Hh])),
            Ai(N, K, null);
        } catch (Z) {
          throw (et !== null && _o(et), _o(K), Z);
        } finally {
          gi();
        }
        return new Fo(this.componentType, ge, xt(re, K), K, re);
      } finally {
        b(i);
      }
    }
  },
  Fo = class extends Oo {
    constructor(t, n, r, o, i) {
      super(),
        (this.location = r),
        (this._rootLView = o),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = n),
        (this.hostView = this.changeDetectorRef = new Ye(o, void 0, !1)),
        (this.componentType = t);
    }
    setInput(t, n) {
      let r = this._tNode.inputs,
        o;
      if (r !== null && (o = r[t])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(t) &&
            Object.is(this.previousInputValues.get(t), n))
        )
          return;
        let i = this._rootLView;
        Ni(i[y], i, o, t, n), this.previousInputValues.set(t, n);
        let s = Pe(this._tNode.index, i);
        Fi(s, 1);
      }
    }
    get injector() {
      return new $e(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function kh(e, t) {
  let n = e[y],
    r = Q;
  return (e[r] = t), St(n, r, 2, '#host', null);
}
function Lh(e, t, n, r, o, i, s) {
  let a = o[y];
  jh(r, e, t, s);
  let u = null;
  t !== null && (u = Ii(t, o[mt]));
  let c = i.rendererFactory.createRenderer(t, n),
    l = 16;
  n.signals ? (l = 4096) : n.onPush && (l = 64);
  let d = br(o, dc(n), null, l, o[e.index], e, i, c, null, null, u);
  return (
    a.firstCreatePass && To(a, e, r.length - 1), _r(o, d), (o[e.index] = d)
  );
}
function jh(e, t, n, r) {
  for (let o of e) t.mergedAttrs = Ut(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null &&
    (rr(t, t.mergedAttrs, !0), n !== null && sc(r, n, t));
}
function Vh(e, t, n, r, o, i) {
  let s = H(),
    a = o[y],
    u = te(s, o);
  fc(a, o, s, n, null, r);
  for (let l = 0; l < n.length; l++) {
    let d = s.directiveStart + l,
      p = Ze(o, a, d, s);
    Re(p, o);
  }
  pc(a, o, s), u && Re(u, o);
  let c = Ze(o, a, s.directiveStart + s.componentOffset, s);
  if (((e[ce] = o[ce] = c), i !== null)) for (let l of i) l(c, t);
  return _i(a, s, o), c;
}
function Bh(e, t, n, r) {
  if (r) ao(e, n, ['ng-version', '18.2.11']);
  else {
    let { attrs: o, classes: i } = $d(t.selectors[0]);
    o && ao(e, n, o), i && i.length > 0 && ic(e, n, i.join(' '));
  }
}
function $h(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null ? Array.from(i) : null);
  }
}
function Hh() {
  let e = H();
  vr(_()[y], e);
}
var Tt = (() => {
  class e {
    static {
      this.__NG_ELEMENT_ID__ = Uh;
    }
  }
  return e;
})();
function Uh() {
  let e = H();
  return Sc(e, _());
}
var zh = Tt,
  xc = class extends zh {
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return xt(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new $e(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = mi(this._hostTNode, this._hostLView);
      if (xu(t)) {
        let n = Wn(t, this._hostLView),
          r = Gn(t),
          o = n[y].data[r + 8];
        return new $e(o, n);
      } else return new $e(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = Da(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - G;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == 'number'
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = er(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, Jn(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !sf(t),
        a;
      if (s) a = n;
      else {
        let h = n || {};
        (a = h.index),
          (r = h.injector),
          (o = h.projectableNodes),
          (i = h.environmentInjector || h.ngModuleRef);
      }
      let u = s ? t : new Zt(He(t)),
        c = r || this.parentInjector;
      if (!i && u.ngModule == null) {
        let C = (s ? c : this.parentInjector).get(Ae, null);
        C && (i = C);
      }
      let l = He(u.componentType ?? {}),
        d = er(this._lContainer, l?.id ?? null),
        p = d?.firstChild ?? null,
        f = u.create(c, o, p, i);
      return this.insertImpl(f.hostView, a, Jn(this._hostTNode, d)), f;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (ff(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let u = o[j],
            c = new xc(u, u[q], u[j]);
          c.detach(c.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return Ri(s, o, i, r), t.attachToViewContainerRef(), ja(Jr(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = Da(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = Qn(this._lContainer, n);
      r && (Vn(Jr(this._lContainer), n), Ci(r[y], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = Qn(this._lContainer, n);
      return r && Vn(Jr(this._lContainer), n) != null ? new Ye(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function Da(e) {
  return e[Un];
}
function Jr(e) {
  return e[Un] || (e[Un] = []);
}
function Sc(e, t) {
  let n,
    r = t[e.index];
  return (
    Ie(r) ? (n = r) : ((n = hc(r, t, null, e)), (t[e.index] = n), _r(t, n)),
    Wh(n, t, e, r),
    new xc(n, e, t)
  );
}
function Gh(e, t) {
  let n = e[O],
    r = n.createComment(''),
    o = te(t, e),
    i = tc(n, o);
  return Kn(n, i, r, Tp(n, o), !1), r;
}
var Wh = Yh,
  qh = () => !1;
function Zh(e, t, n) {
  return qh(e, t, n);
}
function Yh(e, t, n, r) {
  if (e[ze]) return;
  let o;
  n.type & 8 ? (o = fe(r)) : (o = Gh(t, n)), (e[ze] = o);
}
var Po = class e {
    constructor(t) {
      (this.queryList = t), (this.matches = null);
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  ko = class e {
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          o = [];
        for (let i = 0; i < r; i++) {
          let s = n.getByIndex(i),
            a = this.queries[s.indexInDeclarationView];
          o.push(a.clone());
        }
        return new e(o);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++)
        Li(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  Lo = class {
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == 'string' ? (this.predicate = rg(t)) : (this.predicate = t);
    }
  },
  jo = class e {
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n);
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t);
    }
    embeddedTView(t) {
      let n = null;
      for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0,
          i = this.getByIndex(r).embeddedTView(t, o);
        i &&
          ((i.indexInDeclarationView = r), n !== null ? n.push(i) : (n = [i]));
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  Vo = class e {
    constructor(t, n = -1) {
      (this.metadata = t),
        (this.matches = null),
        (this.indexInDeclarationView = -1),
        (this.crossesNgTemplate = !1),
        (this._appliesToNextNode = !0),
        (this._declarationNodeIndex = n);
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex,
          r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n; ) r = r.parent;
        return n === (r !== null ? r.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let r = this.metadata.predicate;
      if (Array.isArray(r))
        for (let o = 0; o < r.length; o++) {
          let i = r[o];
          this.matchTNodeWithReadOption(t, n, Qh(n, i)),
            this.matchTNodeWithReadOption(t, n, Fn(n, t, i, !1, !1));
        }
      else
        r === Et
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, Fn(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === Ee || o === Tt || (o === Et && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = Fn(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function Qh(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function Kh(e, t) {
  return e.type & 11 ? xt(e, t) : e.type & 4 ? Pi(e, t) : null;
}
function Jh(e, t, n, r) {
  return n === -1 ? Kh(t, e) : n === -2 ? Xh(e, t, r) : Ze(e, e[y], n, t);
}
function Xh(e, t, n) {
  if (n === Ee) return xt(t, e);
  if (n === Et) return Pi(t, e);
  if (n === Tt) return Sc(t, e);
}
function Tc(e, t, n, r) {
  let o = t[De].queries[r];
  if (o.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let u = 0; s !== null && u < s.length; u += 2) {
      let c = s[u];
      if (c < 0) a.push(null);
      else {
        let l = i[c];
        a.push(Jh(t, l, s[u + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function Bo(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = Tc(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let u = i[a];
      if (u > 0) r.push(s[a / 2]);
      else {
        let c = i[a + 1],
          l = t[-u];
        for (let d = G; d < l.length; d++) {
          let p = l[d];
          p[Ue] === p[j] && Bo(p[y], p, c, r);
        }
        if (l[yt] !== null) {
          let d = l[yt];
          for (let p = 0; p < d.length; p++) {
            let f = d[p];
            Bo(f[y], f, c, r);
          }
        }
      }
    }
  }
  return r;
}
function eg(e, t) {
  return e[De].queries[t].queryList;
}
function tg(e, t, n) {
  let r = new bo((n & 4) === 4);
  return (
    Up(e, t, r, r.destroy), (t[De] ??= new ko()).queries.push(new Po(r)) - 1
  );
}
function ng(e, t, n, r) {
  let o = L();
  if (o.firstCreatePass) {
    let i = H();
    og(o, new Lo(t, n, r), i.index),
      ig(o, e),
      (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return tg(o, _(), n);
}
function rg(e) {
  return e.split(',').map((t) => t.trim());
}
function og(e, t, n) {
  e.queries === null && (e.queries = new jo()), e.queries.track(new Vo(t, n));
}
function ig(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function Li(e, t) {
  return e.queries.getByIndex(t);
}
function sg(e, t) {
  let n = e[y],
    r = Li(n, t);
  return r.crossesNgTemplate ? Bo(n, e, t, []) : Tc(n, e, r, t);
}
var va = new Set();
function Nt(e) {
  va.has(e) ||
    (va.add(e),
    performance?.mark?.('mark_feature_usage', { detail: { feature: e } }));
}
function rC(e, t) {
  Nt('NgSignals');
  let n = ds(e),
    r = n[nt];
  return (
    t?.equal && (r.equal = t.equal),
    (n.set = (o) => Ar(r, o)),
    (n.update = (o) => fs(r, o)),
    (n.asReadonly = ag.bind(n)),
    n
  );
}
function ag() {
  let e = this[nt];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[nt] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function ug(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function cg(e) {
  let t = ug(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if (Oe(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new M(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        (s.inputs = Sn(e.inputs)),
          (s.inputTransforms = Sn(e.inputTransforms)),
          (s.declaredInputs = Sn(e.declaredInputs)),
          (s.outputs = Sn(e.outputs));
        let a = o.hostBindings;
        a && hg(e, a);
        let u = o.viewQuery,
          c = o.contentQueries;
        if (
          (u && fg(e, u),
          c && pg(e, c),
          lg(e, o),
          nd(e.outputs, o.outputs),
          Oe(o) && o.data.animation)
        ) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === cg && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  dg(r);
}
function lg(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    if (
      r !== void 0 &&
      ((e.inputs[n] = r),
      (e.declaredInputs[n] = t.declaredInputs[n]),
      t.inputTransforms !== null)
    ) {
      let o = Array.isArray(r) ? r[0] : r;
      if (!t.inputTransforms.hasOwnProperty(o)) continue;
      (e.inputTransforms ??= {}), (e.inputTransforms[o] = t.inputTransforms[o]);
    }
  }
}
function dg(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = Ut(o.hostAttrs, (n = Ut(n, o.hostAttrs))));
  }
}
function Sn(e) {
  return e === ht ? {} : e === z ? [] : e;
}
function fg(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.viewQuery = t);
}
function pg(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i);
      })
    : (e.contentQueries = t);
}
function hg(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.hostBindings = t);
}
function Nc(e) {
  let t = e.inputConfig,
    n = {};
  for (let r in t)
    if (t.hasOwnProperty(r)) {
      let o = t[r];
      Array.isArray(o) && o[3] && (n[r] = o[3]);
    }
  e.inputTransforms = n;
}
var Fe = class {},
  $o = class {};
var Ho = class extends Fe {
    constructor(t, n, r, o = !0) {
      super(),
        (this.ngModuleType = t),
        (this._parent = n),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new or(this));
      let i = qa(t);
      (this._bootstrapComponents = Yu(i.bootstrap)),
        (this._r3Injector = ku(
          t,
          n,
          [
            { provide: Fe, useValue: this },
            { provide: Ct, useValue: this.componentFactoryResolver },
            ...r,
          ],
          B(t),
          new Set(['environment'])
        )),
        o && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        (this.destroyCbs = null);
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  Uo = class extends $o {
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new Ho(this.moduleType, t, []);
    }
  };
var ir = class extends Fe {
  constructor(t) {
    super(),
      (this.componentFactoryResolver = new or(this)),
      (this.instance = null);
    let n = new zt(
      [
        ...t.providers,
        { provide: Fe, useValue: this },
        { provide: Ct, useValue: this.componentFactoryResolver },
      ],
      t.parent || si(),
      t.debugName,
      new Set(['environment'])
    );
    (this.injector = n),
      t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function gg(e, t, n = null) {
  return new ir({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
function Ac(e) {
  return e !== null && (typeof e == 'function' || typeof e == 'object');
}
function ji(e, t, n) {
  return (e[t] = n);
}
function pe(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function Oc(e, t, n, r) {
  let o = pe(e, t, n);
  return pe(e, t + 1, r) || o;
}
function mg(e, t, n, r, o) {
  let i = Oc(e, t, n, r);
  return pe(e, t + 2, o) || i;
}
function yg(e) {
  return (e.flags & 32) === 32;
}
function Dg(e, t, n, r, o, i, s, a, u) {
  let c = t.consts,
    l = St(t, e, 4, s || null, a || null);
  Ti(t, n, l, Dt(c, u)), vr(t, l);
  let d = (l.tView = Si(
    2,
    l,
    r,
    o,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    c,
    null
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, l), (d.queries = t.queries.embeddedTView(l))),
    l
  );
}
function Rc(e, t, n, r, o, i, s, a, u, c) {
  let l = n + Q,
    d = t.firstCreatePass ? Dg(l, t, e, r, o, i, s, a, u) : t.data[l];
  Ke(d, !1);
  let p = Ig(t, e, d, n);
  yr() && wr(t, e, p, d), Re(p, e);
  let f = hc(p, e, p, d);
  return (
    (e[l] = f),
    _r(e, f),
    Zh(f, d, e),
    fr(d) && Mi(t, e, d),
    u != null && xi(e, d, c),
    d
  );
}
function vg(e, t, n, r, o, i, s, a) {
  let u = _(),
    c = L(),
    l = Dt(c.consts, i);
  return Rc(u, c, e, t, n, r, o, l, s, a), vg;
}
var Ig = Eg;
function Eg(e, t, n, r) {
  return Dr(!0), t[O].createComment('');
}
var Vt = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = 'EarlyRead'),
      (e[(e.Write = 1)] = 'Write'),
      (e[(e.MixedReadWrite = 2)] = 'MixedReadWrite'),
      (e[(e.Read = 3)] = 'Read'),
      e
    );
  })(Vt || {}),
  wg = (() => {
    class e {
      constructor() {
        this.impl = null;
      }
      execute() {
        this.impl?.execute();
      }
      static {
        this.ɵprov = A({
          token: e,
          providedIn: 'root',
          factory: () => new e(),
        });
      }
    }
    return e;
  })(),
  Ia = class e {
    constructor() {
      (this.ngZone = D($)),
        (this.scheduler = D(wt)),
        (this.errorHandler = D(It, { optional: !0 })),
        (this.sequences = new Set()),
        (this.deferredRegistrations = new Set()),
        (this.executing = !1);
    }
    static {
      this.PHASES = [Vt.EarlyRead, Vt.Write, Vt.MixedReadWrite, Vt.Read];
    }
    execute() {
      this.executing = !0;
      for (let t of e.PHASES)
        for (let n of this.sequences)
          if (!(n.erroredOrDestroyed || !n.hooks[t]))
            try {
              n.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                n.hooks[t](n.pipelinedValue)
              );
            } catch (r) {
              (n.erroredOrDestroyed = !0), this.errorHandler?.handleError(r);
            }
      this.executing = !1;
      for (let t of this.sequences)
        t.afterRun(), t.once && (this.sequences.delete(t), t.destroy());
      for (let t of this.deferredRegistrations) this.sequences.add(t);
      this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
        this.deferredRegistrations.clear();
    }
    register(t) {
      this.executing
        ? this.deferredRegistrations.add(t)
        : (this.sequences.add(t), this.scheduler.notify(6));
    }
    unregister(t) {
      this.executing && this.sequences.has(t)
        ? ((t.erroredOrDestroyed = !0),
          (t.pipelinedValue = void 0),
          (t.once = !0))
        : (this.sequences.delete(t), this.deferredRegistrations.delete(t));
    }
    static {
      this.ɵprov = A({ token: e, providedIn: 'root', factory: () => new e() });
    }
  };
function Cg(e, t, n, r) {
  let o = _(),
    i = mr();
  if (pe(o, i, t)) {
    let s = L(),
      a = bu();
    ih(a, o, e, t, n, r);
  }
  return Cg;
}
function bg(e, t, n, r) {
  return pe(e, mr(), n) ? t + ei(n) + r : he;
}
function Tn(e, t) {
  return (e << 17) | (t << 2);
}
function Qe(e) {
  return (e >> 17) & 32767;
}
function _g(e) {
  return (e & 2) == 2;
}
function Mg(e, t) {
  return (e & 131071) | (t << 17);
}
function zo(e) {
  return e | 2;
}
function bt(e) {
  return (e & 131068) >> 2;
}
function Xr(e, t) {
  return (e & -131069) | (t << 2);
}
function xg(e) {
  return (e & 1) === 1;
}
function Go(e) {
  return e | 1;
}
function Sg(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = Qe(s),
    u = bt(s);
  e[r] = n;
  let c = !1,
    l;
  if (Array.isArray(n)) {
    let d = n;
    (l = d[1]), (l === null || Kt(d, l) > 0) && (c = !0);
  } else l = n;
  if (o)
    if (u !== 0) {
      let p = Qe(e[a + 1]);
      (e[r + 1] = Tn(p, a)),
        p !== 0 && (e[p + 1] = Xr(e[p + 1], r)),
        (e[a + 1] = Mg(e[a + 1], r));
    } else
      (e[r + 1] = Tn(a, 0)), a !== 0 && (e[a + 1] = Xr(e[a + 1], r)), (a = r);
  else
    (e[r + 1] = Tn(u, 0)),
      a === 0 ? (a = r) : (e[u + 1] = Xr(e[u + 1], r)),
      (u = r);
  c && (e[r + 1] = zo(e[r + 1])),
    Ea(e, l, r, !0),
    Ea(e, l, r, !1),
    Tg(t, l, e, r, i),
    (s = Tn(a, u)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function Tg(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == 'string' &&
    Kt(i, t) >= 0 &&
    (n[r + 1] = Go(n[r + 1]));
}
function Ea(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? Qe(o) : bt(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let u = e[s],
      c = e[s + 1];
    Ng(u, t) && ((a = !0), (e[s + 1] = r ? Go(c) : zo(c))),
      (s = r ? Qe(c) : bt(c));
  }
  a && (e[n + 1] = r ? zo(o) : Go(o));
}
function Ng(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == 'string'
      ? Kt(e, t) >= 0
      : !1;
}
var se = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function Ag(e) {
  return e.substring(se.key, se.keyEnd);
}
function Og(e) {
  return Rg(e), Fc(e, Pc(e, 0, se.textEnd));
}
function Fc(e, t) {
  let n = se.textEnd;
  return n === t ? -1 : ((t = se.keyEnd = Fg(e, (se.key = t), n)), Pc(e, t, n));
}
function Rg(e) {
  (se.key = 0),
    (se.keyEnd = 0),
    (se.value = 0),
    (se.valueEnd = 0),
    (se.textEnd = e.length);
}
function Pc(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function Fg(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function Pg(e, t, n) {
  let r = _(),
    o = mr();
  if (pe(r, o, t)) {
    let i = L(),
      s = bu();
    qp(i, s, r, e, t, r[O], n, !1);
  }
  return Pg;
}
function Wo(e, t, n, r, o) {
  let i = t.inputs,
    s = o ? 'class' : 'style';
  Ni(e, n, i[s], s, r);
}
function Vi(e, t, n) {
  return kc(e, t, n, !1), Vi;
}
function kg(e, t) {
  return kc(e, t, null, !0), kg;
}
function oC(e) {
  jg(zg, Lg, e, !0);
}
function Lg(e, t) {
  for (let n = Og(t); n >= 0; n = Fc(t, n)) ri(e, Ag(t), !0);
}
function kc(e, t, n, r) {
  let o = _(),
    i = L(),
    s = yu(2);
  if ((i.firstUpdatePass && jc(i, e, s, r), t !== he && pe(o, s, t))) {
    let a = i.data[Je()];
    Vc(i, a, o, o[O], e, (o[s + 1] = Wg(t, n)), r, s);
  }
}
function jg(e, t, n, r) {
  let o = L(),
    i = yu(2);
  o.firstUpdatePass && jc(o, null, i, r);
  let s = _();
  if (n !== he && pe(s, i, n)) {
    let a = o.data[Je()];
    if (Bc(a, r) && !Lc(o, i)) {
      let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
      u !== null && (n = ro(u, n || '')), Wo(o, a, s, n, r);
    } else Gg(o, a, s, s[O], s[i + 1], (s[i + 1] = Ug(e, t, n)), r, i);
  }
}
function Lc(e, t) {
  return t >= e.expandoStartIndex;
}
function jc(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[Je()],
      s = Lc(e, n);
    Bc(i, r) && t === null && !s && (t = !1),
      (t = Vg(o, i, t, r)),
      Sg(o, i, t, n, s, r);
  }
}
function Vg(e, t, n, r) {
  let o = _f(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = eo(null, e, t, n, r)), (n = Yt(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = eo(o, e, t, n, r)), i === null)) {
        let u = Bg(e, t, r);
        u !== void 0 &&
          Array.isArray(u) &&
          ((u = eo(null, e, t, u[1], r)),
          (u = Yt(u, t.attrs, r)),
          $g(e, t, r, u));
      } else i = Hg(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function Bg(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (bt(r) !== 0) return e[Qe(r)];
}
function $g(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[Qe(o)] = r;
}
function Hg(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = Yt(r, s, n);
  }
  return Yt(r, t.attrs, n);
}
function eo(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = Yt(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function Yt(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == 'number'
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ['', e]),
          ri(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function Ug(e, t, n) {
  if (n == null || n === '') return z;
  let r = [],
    o = Er(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == 'object')
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == 'string' && t(r, o);
  return r;
}
function zg(e, t, n) {
  let r = String(t);
  r !== '' && !r.includes(' ') && ri(e, r, n);
}
function Gg(e, t, n, r, o, i, s, a) {
  o === he && (o = z);
  let u = 0,
    c = 0,
    l = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null; ) {
    let p = u < o.length ? o[u + 1] : void 0,
      f = c < i.length ? i[c + 1] : void 0,
      h = null,
      C;
    l === d
      ? ((u += 2), (c += 2), p !== f && ((h = d), (C = f)))
      : d === null || (l !== null && l < d)
        ? ((u += 2), (h = l))
        : ((c += 2), (h = d), (C = f)),
      h !== null && Vc(e, t, n, r, h, C, s, a),
      (l = u < o.length ? o[u] : null),
      (d = c < i.length ? i[c] : null);
  }
}
function Vc(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let u = e.data,
    c = u[a + 1],
    l = xg(c) ? wa(u, t, n, o, bt(c), s) : void 0;
  if (!sr(l)) {
    sr(i) || (_g(c) && (i = wa(u, null, n, o, a, s)));
    let d = uu(Je(), n);
    Pp(r, s, d, o, i);
  }
}
function wa(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let u = e[o],
      c = Array.isArray(u),
      l = c ? u[1] : u,
      d = l === null,
      p = n[o + 1];
    p === he && (p = d ? z : void 0);
    let f = d ? zr(p, r) : l === r ? p : void 0;
    if ((c && !sr(f) && (f = zr(u, r)), sr(f) && ((a = f), s))) return a;
    let h = e[o + 1];
    o = s ? Qe(h) : bt(h);
  }
  if (t !== null) {
    let u = i ? t.residualClasses : t.residualStyles;
    u != null && (a = zr(u, r));
  }
  return a;
}
function sr(e) {
  return e !== void 0;
}
function Wg(e, t) {
  return (
    e == null ||
      e === '' ||
      (typeof t == 'string'
        ? (e = e + t)
        : typeof e == 'object' && (e = B(Er(e)))),
    e
  );
}
function Bc(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function iC(e, t) {
  Nt('NgControlFlow');
  let n = _(),
    r = mr(),
    o = n[r] !== he ? n[r] : -1,
    i = o !== -1 ? Ca(n, Q + o) : void 0,
    s = 0;
  if (pe(n, r, e)) {
    let a = b(null);
    try {
      if ((i !== void 0 && hh(i, s), e !== -1)) {
        let u = Q + e,
          c = Ca(n, u),
          l = qg(n[y], u),
          d = er(c, l.tView.ssrId),
          p = Oi(n, l, t, { dehydratedView: d });
        Ri(c, p, s, Jn(l, d));
      }
    } finally {
      b(a);
    }
  } else if (i !== void 0) {
    let a = ph(i, s);
    a !== void 0 && (a[ce] = t);
  }
}
function Ca(e, t) {
  return e[t];
}
function qg(e, t) {
  return ui(e, t);
}
function Zg(e, t, n, r, o, i) {
  let s = t.consts,
    a = Dt(s, o),
    u = St(t, e, 2, r, a);
  return (
    Ti(t, n, u, Dt(s, i)),
    u.attrs !== null && rr(u, u.attrs, !1),
    u.mergedAttrs !== null && rr(u, u.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, u),
    u
  );
}
function $c(e, t, n, r) {
  let o = _(),
    i = L(),
    s = Q + e,
    a = o[O],
    u = i.firstCreatePass ? Zg(s, i, o, t, n, r) : i.data[s],
    c = Qg(i, o, u, a, t, e);
  o[s] = c;
  let l = fr(u);
  return (
    Ke(u, !0),
    sc(a, c, u),
    !yg(u) && yr() && wr(i, o, c, u),
    gf() === 0 && Re(c, o),
    mf(),
    l && (Mi(i, o, u), _i(i, u, o)),
    r !== null && xi(o, u),
    $c
  );
}
function Hc() {
  let e = H();
  li() ? di() : ((e = e.parent), Ke(e, !1));
  let t = e;
  Df(t) && vf(), yf();
  let n = L();
  return (
    n.firstCreatePass && (vr(n, e), ai(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null &&
      Rf(t) &&
      Wo(n, t, _(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      Ff(t) &&
      Wo(n, t, _(), t.stylesWithoutHost, !1),
    Hc
  );
}
function Yg(e, t, n, r) {
  return $c(e, t, n, r), Hc(), Yg;
}
var Qg = (e, t, n, r, o, i) => (Dr(!0), Qu(r, o, Tf()));
function Kg(e, t, n, r, o) {
  let i = t.consts,
    s = Dt(i, r),
    a = St(t, e, 8, 'ng-container', s);
  s !== null && rr(a, s, !0);
  let u = Dt(i, o);
  return Ti(t, n, a, u), t.queries !== null && t.queries.elementStart(t, a), a;
}
function Uc(e, t, n) {
  let r = _(),
    o = L(),
    i = e + Q,
    s = o.firstCreatePass ? Kg(i, o, r, t, n) : o.data[i];
  Ke(s, !0);
  let a = Xg(o, r, s, e);
  return (
    (r[i] = a),
    yr() && wr(o, r, a, s),
    Re(a, r),
    fr(s) && (Mi(o, r, s), _i(o, s, r)),
    n != null && xi(r, s),
    Uc
  );
}
function zc() {
  let e = H(),
    t = L();
  return (
    li() ? di() : ((e = e.parent), Ke(e, !1)),
    t.firstCreatePass && (vr(t, e), ai(e) && t.queries.elementEnd(e)),
    zc
  );
}
function Jg(e, t, n) {
  return Uc(e, t, n), zc(), Jg;
}
var Xg = (e, t, n, r) => (Dr(!0), Ep(t[O], ''));
var ar = 'en-US';
var em = ar;
function tm(e) {
  typeof e == 'string' && (em = e.toLowerCase().replace(/_/g, '-'));
}
var nm = (e, t, n) => {};
function rm(e, t, n, r) {
  let o = _(),
    i = L(),
    s = H();
  return im(i, o, o[O], s, e, t, r), rm;
}
function om(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[Hn],
          u = o[i + 2];
        return a.length > u ? a[u] : null;
      }
      typeof s == 'string' && (i += 2);
    }
  return null;
}
function im(e, t, n, r, o, i, s) {
  let a = fr(r),
    c = e.firstCreatePass && yc(e),
    l = t[ce],
    d = mc(t),
    p = !0;
  if (r.type & 3 || s) {
    let C = te(r, t),
      F = s ? s(C) : C,
      N = d.length,
      K = s ? (re) => s(fe(re[r.index])) : r.index,
      ge = null;
    if ((!s && a && (ge = om(e, t, o, r.index)), ge !== null)) {
      let re = ge.__ngLastListenerFn__ || ge;
      (re.__ngNextListenerFn__ = i), (ge.__ngLastListenerFn__ = i), (p = !1);
    } else {
      (i = _a(r, t, l, i)), nm(C, o, i);
      let re = n.listen(F, o, i);
      d.push(i, re), c && c.push(o, K, N, N + 1);
    }
  } else i = _a(r, t, l, i);
  let f = r.outputs,
    h;
  if (p && f !== null && (h = f[o])) {
    let C = h.length;
    if (C)
      for (let F = 0; F < C; F += 2) {
        let N = h[F],
          K = h[F + 1],
          et = t[N][K].subscribe(i),
          Z = d.length;
        d.push(i, et), c && c.push(o, r.index, Z, -(Z + 1));
      }
  }
}
function ba(e, t, n, r) {
  let o = b(null);
  try {
    return le(6, t, n), n(r) !== !1;
  } catch (i) {
    return Dc(e, i), !1;
  } finally {
    le(7, t, n), b(o);
  }
}
function _a(e, t, n, r) {
  return function o(i) {
    if (i === Function) return r;
    let s = e.componentOffset > -1 ? Pe(e.index, t) : t;
    Fi(s, 5);
    let a = ba(t, n, r, i),
      u = o.__ngNextListenerFn__;
    for (; u; ) (a = ba(t, n, u, i) && a), (u = u.__ngNextListenerFn__);
    return a;
  };
}
function sC(e = 1) {
  return xf(e);
}
function sm(e, t) {
  let n = null,
    r = Pd(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === '*') {
      n = o;
      continue;
    }
    if (r === null ? Ua(e, i, !0) : jd(r, i)) return o;
  }
  return n;
}
function aC(e) {
  let t = _()[ee][q];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = (t.projection = _d(n, null)),
      o = r.slice(),
      i = t.child;
    for (; i !== null; ) {
      if (i.type !== 128) {
        let s = e ? sm(i, e) : 0;
        s !== null &&
          (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i));
      }
      i = i.next;
    }
  }
}
function uC(e, t = 0, n, r, o, i) {
  let s = _(),
    a = L(),
    u = r ? e + 1 : null;
  u !== null && Rc(s, a, u, r, o, i, null, n);
  let c = St(a, Q + e, 16, null, n || null);
  c.projection === null && (c.projection = t), di();
  let d = !s[Gt] || hu();
  s[ee][q].projection[c.projection] === null && u !== null
    ? am(s, a, u)
    : d && (c.flags & 32) !== 32 && Rp(a, s, c);
}
function am(e, t, n) {
  let r = Q + n,
    o = t.data[r],
    i = e[r],
    s = er(i, o.tView.ssrId),
    a = Oi(e, o, void 0, { dehydratedView: s });
  Ri(i, a, 0, Jn(o, s));
}
function cC(e, t, n, r) {
  ng(e, t, n, r);
}
function lC(e) {
  let t = _(),
    n = L(),
    r = Du();
  pi(r + 1);
  let o = Li(n, r);
  if (e.dirty && df(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = sg(t, r);
      e.reset(i, ep), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function dC() {
  return eg(_(), Du());
}
function fC(e, t = '') {
  let n = _(),
    r = L(),
    o = e + Q,
    i = r.firstCreatePass ? St(r, o, 1, t, null) : r.data[o],
    s = um(r, n, i, t, e);
  (n[o] = s), yr() && wr(r, n, s, i), Ke(i, !1);
}
var um = (e, t, n, r, o) => (Dr(!0), vp(t[O], r));
function cm(e) {
  return Gc('', e, ''), cm;
}
function Gc(e, t, n) {
  let r = _(),
    o = bg(r, e, t, n);
  return o !== he && ch(r, Je(), o), Gc;
}
function lm(e, t, n) {
  let r = L();
  if (r.firstCreatePass) {
    let o = Oe(e);
    qo(n, r.data, r.blueprint, o, !0), qo(t, r.data, r.blueprint, o, !1);
  }
}
function qo(e, t, n, r, o) {
  if (((e = V(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) qo(e[i], t, n, r, o);
  else {
    let i = L(),
      s = _(),
      a = H(),
      u = gt(e) ? e : V(e.provide),
      c = eu(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      p = a.providerIndexes >> 20;
    if (gt(e) || !e.multi) {
      let f = new qe(c, o, ne),
        h = no(u, t, o ? l : l + p, d);
      h === -1
        ? (Do(qn(a, s), i, u),
          to(i, e, t.length),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : ((n[h] = f), (s[h] = f));
    } else {
      let f = no(u, t, l + p, d),
        h = no(u, t, l, l + p),
        C = f >= 0 && n[f],
        F = h >= 0 && n[h];
      if ((o && !F) || (!o && !C)) {
        Do(qn(a, s), i, u);
        let N = pm(o ? fm : dm, n.length, o, r, c);
        !o && F && (n[h].providerFactory = N),
          to(i, e, t.length, 0),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(N),
          s.push(N);
      } else {
        let N = Wc(n[o ? h : f], c, !o && r);
        to(i, e, f > -1 ? f : h, N);
      }
      !o && r && F && n[h].componentProviders++;
    }
  }
}
function to(e, t, n, r) {
  let o = gt(t),
    i = Kd(t);
  if (o || i) {
    let u = (i ? V(t.useClass) : t).prototype.ngOnDestroy;
    if (u) {
      let c = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = c.indexOf(n);
        l === -1 ? c.push(n, [r, u]) : c[l + 1].push(r, u);
      } else c.push(n, u);
    }
  }
}
function Wc(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function no(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function dm(e, t, n, r) {
  return Zo(this.multi, []);
}
function fm(e, t, n, r) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = Ze(n, n[y], this.providerFactory.index, r);
    (i = a.slice(0, s)), Zo(o, i);
    for (let u = s; u < a.length; u++) i.push(a[u]);
  } else (i = []), Zo(o, i);
  return i;
}
function Zo(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function pm(e, t, n, r, o) {
  let i = new qe(e, n, ne);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    Wc(i, o, r && !n),
    i
  );
}
function pC(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => lm(r, o ? o(e) : e, t);
  };
}
var hm = (() => {
  class e {
    constructor(n) {
      (this._injector = n), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let r = Qa(!1, n.type),
          o =
            r.length > 0
              ? gg([r], this._injector, `Standalone[${n.type.name}]`)
              : null;
        this.cachedInjectors.set(n, o);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
    static {
      this.ɵprov = A({
        token: e,
        providedIn: 'environment',
        factory: () => new e(W(Ae)),
      });
    }
  }
  return e;
})();
function hC(e) {
  Nt('NgStandalone'),
    (e.getStandaloneInjector = (t) =>
      t.get(hm).getOrCreateStandaloneInjector(e));
}
function gC(e, t, n, r) {
  return gm(_(), fi(), e, t, n, r);
}
function mC(e, t, n, r, o) {
  return mm(_(), fi(), e, t, n, r, o);
}
function yC(e, t, n, r, o, i) {
  return ym(_(), fi(), e, t, n, r, o, i);
}
function Bi(e, t) {
  let n = e[t];
  return n === he ? void 0 : n;
}
function gm(e, t, n, r, o, i) {
  let s = t + n;
  return pe(e, s, o) ? ji(e, s + 1, i ? r.call(i, o) : r(o)) : Bi(e, s + 1);
}
function mm(e, t, n, r, o, i, s) {
  let a = t + n;
  return Oc(e, a, o, i)
    ? ji(e, a + 2, s ? r.call(s, o, i) : r(o, i))
    : Bi(e, a + 2);
}
function ym(e, t, n, r, o, i, s, a) {
  let u = t + n;
  return mg(e, u, o, i, s)
    ? ji(e, u + 3, a ? r.call(a, o, i, s) : r(o, i, s))
    : Bi(e, u + 3);
}
var DC = (() => {
  class e {
    log(n) {
      console.log(n);
    }
    warn(n) {
      console.warn(n);
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = A({ token: e, factory: e.ɵfac, providedIn: 'platform' });
    }
  }
  return e;
})();
var Dm = new x('');
function $i(e) {
  return !!e && typeof e.then == 'function';
}
function qc(e) {
  return !!e && typeof e.subscribe == 'function';
}
var vm = new x(''),
  Zc = (() => {
    class e {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((n, r) => {
            (this.resolve = n), (this.reject = r);
          })),
          (this.appInits = D(vm, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let o of this.appInits) {
          let i = o();
          if ($i(i)) n.push(i);
          else if (qc(i)) {
            let s = new Promise((a, u) => {
              i.subscribe({ complete: a, error: u });
            });
            n.push(s);
          }
        }
        let r = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(n)
          .then(() => {
            r();
          })
          .catch((o) => {
            this.reject(o);
          }),
          n.length === 0 && r(),
          (this.initialized = !0);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = A({ token: e, factory: e.ɵfac, providedIn: 'root' });
      }
    }
    return e;
  })(),
  Im = new x('');
function Em() {
  ls(() => {
    throw new M(600, !1);
  });
}
function wm(e) {
  return e.isBoundToModule;
}
var Cm = 10;
function bm(e, t, n) {
  try {
    let r = n();
    return $i(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
var Mr = (() => {
  class e {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = D(Jf)),
        (this.afterRenderManager = D(wg)),
        (this.zonelessEnabled = D(ki)),
        (this.dirtyFlags = 0),
        (this.deferredDirtyFlags = 0),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new be()),
        (this.afterTick = new be()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = D(Ir).hasPendingTasks.pipe(me((n) => !n))),
        (this._injector = D(Ae));
    }
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    whenStable() {
      let n;
      return new Promise((r) => {
        n = this.isStable.subscribe({
          next: (o) => {
            o && r();
          },
        });
      }).finally(() => {
        n.unsubscribe();
      });
    }
    get injector() {
      return this._injector;
    }
    bootstrap(n, r) {
      let o = n instanceof tr;
      if (!this._injector.get(Zc).done) {
        let p = !o && zd(n),
          f = !1;
        throw new M(405, f);
      }
      let s;
      o ? (s = n) : (s = this._injector.get(Ct).resolveComponentFactory(n)),
        this.componentTypes.push(s.componentType);
      let a = wm(s) ? void 0 : this._injector.get(Fe),
        u = r || s.selector,
        c = s.create(vt.NULL, [], u, a),
        l = c.location.nativeElement,
        d = c.injector.get(Dm, null);
      return (
        d?.registerApplication(l),
        c.onDestroy(() => {
          this.detachView(c.hostView),
            Pn(this.components, c),
            d?.unregisterApplication(l);
        }),
        this._loadComponent(c),
        c
      );
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick() {
      if (this._runningTick) throw new M(101, !1);
      let n = b(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (r) {
        this.internalErrorHandler(r);
      } finally {
        (this._runningTick = !1), b(n), this.afterTick.next();
      }
    }
    synchronize() {
      let n = null;
      this._injector.destroyed ||
        (n = this._injector.get(nr, null, { optional: !0 })),
        (this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0);
      let r = 0;
      for (; this.dirtyFlags !== 0 && r++ < Cm; ) this.synchronizeOnce(n);
    }
    synchronizeOnce(n) {
      if (
        ((this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0),
        this.dirtyFlags & 7)
      ) {
        let r = !!(this.dirtyFlags & 1);
        (this.dirtyFlags &= -8),
          (this.dirtyFlags |= 8),
          this.beforeRender.next(r);
        for (let { _lView: o, notifyErrorHandler: i } of this._views)
          _m(o, i, r, this.zonelessEnabled);
        if (
          ((this.dirtyFlags &= -5),
          this.syncDirtyFlagsWithViews(),
          this.dirtyFlags & 7)
        )
          return;
      } else n?.begin?.(), n?.end?.();
      this.dirtyFlags & 8 &&
        ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews();
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: n }) => hr(n))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(n) {
      let r = n;
      this._views.push(r), r.attachToAppRef(this);
    }
    detachView(n) {
      let r = n;
      Pn(this._views, r), r.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView), this.tick(), this.components.push(n);
      let r = this._injector.get(Im, []);
      [...this._bootstrapListeners, ...r].forEach((o) => o(n));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._bootstrapListeners = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(n) {
      return (
        this._destroyListeners.push(n), () => Pn(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new M(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = A({ token: e, factory: e.ɵfac, providedIn: 'root' });
    }
  }
  return e;
})();
function Pn(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function _m(e, t, n, r) {
  if (!n && !hr(e)) return;
  Ec(e, t, n && !r ? 0 : 1);
}
var Yo = class {
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  vC = (() => {
    class e {
      compileModuleSync(n) {
        return new Uo(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let r = this.compileModuleSync(n),
          o = qa(n),
          i = Yu(o.declarations).reduce((s, a) => {
            let u = He(a);
            return u && s.push(new Zt(u)), s;
          }, []);
        return new Yo(r, i);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = A({ token: e, factory: e.ɵfac, providedIn: 'root' });
      }
    }
    return e;
  })();
var Mm = (() => {
    class e {
      constructor() {
        (this.zone = D($)),
          (this.changeDetectionScheduler = D(wt)),
          (this.applicationRef = D(Mr));
      }
      initialize() {
        this._onMicrotaskEmptySubscription ||
          (this._onMicrotaskEmptySubscription =
            this.zone.onMicrotaskEmpty.subscribe({
              next: () => {
                this.changeDetectionScheduler.runningTick ||
                  this.zone.run(() => {
                    this.applicationRef.tick();
                  });
              },
            }));
      }
      ngOnDestroy() {
        this._onMicrotaskEmptySubscription?.unsubscribe();
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = A({ token: e, factory: e.ɵfac, providedIn: 'root' });
      }
    }
    return e;
  })(),
  xm = new x('', { factory: () => !1 });
function Yc({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new $(Ce(we({}, Qc()), { scheduleInRootZone: n }))),
    [
      { provide: $, useFactory: e },
      {
        provide: Bn,
        multi: !0,
        useFactory: () => {
          let r = D(Mm, { optional: !0 });
          return () => r.initialize();
        },
      },
      {
        provide: Bn,
        multi: !0,
        useFactory: () => {
          let r = D(Sm);
          return () => {
            r.initialize();
          };
        },
      },
      t === !0 ? { provide: _c, useValue: !0 } : [],
      { provide: Mc, useValue: n ?? Lu },
    ]
  );
}
function IC(e) {
  let t = e?.ignoreChangesOutsideZone,
    n = e?.scheduleInRootZone,
    r = Yc({
      ngZoneFactory: () => {
        let o = Qc(e);
        return (
          (o.scheduleInRootZone = n),
          o.shouldCoalesceEventChangeDetection && Nt('NgZone_CoalesceEvent'),
          new $(o)
        );
      },
      ignoreChangesOutsideZone: t,
      scheduleInRootZone: n,
    });
  return Wd([{ provide: xm, useValue: !0 }, { provide: ki, useValue: !1 }, r]);
}
function Qc(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var Sm = (() => {
  class e {
    constructor() {
      (this.subscription = new P()),
        (this.initialized = !1),
        (this.zone = D($)),
        (this.pendingTasks = D(Ir));
    }
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              $.assertNotInAngularZone(),
                queueMicrotask(() => {
                  n !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(n), (n = null));
                });
            })
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            $.assertInAngularZone(), (n ??= this.pendingTasks.add());
          })
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = A({ token: e, factory: e.ɵfac, providedIn: 'root' });
    }
  }
  return e;
})();
var Tm = (() => {
  class e {
    constructor() {
      (this.appRef = D(Mr)),
        (this.taskService = D(Ir)),
        (this.ngZone = D($)),
        (this.zonelessEnabled = D(ki)),
        (this.disableScheduling = D(_c, { optional: !0 }) ?? !1),
        (this.zoneIsDefined = typeof Zone < 'u' && !!Zone.root.run),
        (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
        (this.subscriptions = new P()),
        (this.angularZoneId = this.zoneIsDefined
          ? this.ngZone._inner?.get(Yn)
          : null),
        (this.scheduleInRootZone =
          !this.zonelessEnabled &&
          this.zoneIsDefined &&
          (D(Mc, { optional: !0 }) ?? !1)),
        (this.cancelScheduledCallback = null),
        (this.useMicrotaskScheduler = !1),
        (this.runningTick = !1),
        (this.pendingRenderTaskId = null),
        this.subscriptions.add(
          this.appRef.afterTick.subscribe(() => {
            this.runningTick || this.cleanup();
          })
        ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          })
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof Co || !this.zoneIsDefined));
    }
    notify(n) {
      if (!this.zonelessEnabled && n === 5) return;
      switch (n) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 7: {
          this.appRef.deferredDirtyFlags |= 8;
          break;
        }
        case 9:
        case 8:
        case 6:
        case 10:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (!this.shouldScheduleTick()) return;
      let r = this.useMicrotaskScheduler ? ca : Vu;
      (this.pendingRenderTaskId = this.taskService.add()),
        this.scheduleInRootZone
          ? (this.cancelScheduledCallback = Zone.root.run(() =>
              r(() => this.tick())
            ))
          : (this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
              r(() => this.tick())
            ));
    }
    shouldScheduleTick() {
      return !(
        this.disableScheduling ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get(Yn + this.angularZoneId))
      );
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      !this.zonelessEnabled &&
        this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let n = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            (this.runningTick = !0), this.appRef._tick();
          },
          void 0,
          this.schedulerTickApplyArgs
        );
      } catch (r) {
        throw (this.taskService.remove(n), r);
      } finally {
        this.cleanup();
      }
      (this.useMicrotaskScheduler = !0),
        ca(() => {
          (this.useMicrotaskScheduler = !1), this.taskService.remove(n);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        ((this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let n = this.pendingRenderTaskId;
        (this.pendingRenderTaskId = null), this.taskService.remove(n);
      }
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = A({ token: e, factory: e.ɵfac, providedIn: 'root' });
    }
  }
  return e;
})();
function Nm() {
  return (typeof $localize < 'u' && $localize.locale) || ar;
}
var Hi = new x('', {
  providedIn: 'root',
  factory: () => D(Hi, I.Optional | I.SkipSelf) || Nm(),
});
var Qo = new x('');
function Nn(e) {
  return !e.moduleRef;
}
function Am(e) {
  let t = Nn(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get($);
  return n.run(() => {
    Nn(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(It, null),
      o;
    if (
      (n.runOutsideAngular(() => {
        o = n.onError.subscribe({
          next: (i) => {
            r.handleError(i);
          },
        });
      }),
      Nn(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(Qo);
      s.add(i),
        t.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else {
      let i = () => e.moduleRef.destroy(),
        s = e.platformInjector.get(Qo);
      s.add(i),
        e.moduleRef.onDestroy(() => {
          Pn(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i);
        });
    }
    return bm(r, n, () => {
      let i = t.get(Zc);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(Hi, ar);
          if ((tm(s || ar), Nn(e))) {
            let a = t.get(Mr);
            return (
              e.rootComponent !== void 0 && a.bootstrap(e.rootComponent), a
            );
          } else return Om(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function Om(e, t) {
  let n = e.injector.get(Mr);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new M(-403, !1);
  t.push(e);
}
var kn = null;
function Rm(e = [], t) {
  return vt.create({
    name: t,
    providers: [
      { provide: Xa, useValue: 'platform' },
      { provide: Qo, useValue: new Set([() => (kn = null)]) },
      ...e,
    ],
  });
}
function Fm(e = []) {
  if (kn) return kn;
  let t = Rm(e);
  return (kn = t), Em(), Pm(t), t;
}
function Pm(e) {
  e.get(ap, null)?.forEach((n) => n());
}
var Ui = (() => {
  class e {
    static {
      this.__NG_ELEMENT_ID__ = km;
    }
  }
  return e;
})();
function km(e) {
  return Lm(H(), _(), (e & 16) === 16);
}
function Lm(e, t, n) {
  if (dr(e) && !n) {
    let r = Pe(e.index, t);
    return new Ye(r, r);
  } else if (e.type & 175) {
    let r = t[ee];
    return new Ye(r, t);
  }
  return null;
}
var Ko = class {
    constructor() {}
    supports(t) {
      return t instanceof Map || Ac(t);
    }
    create() {
      return new Jo();
    }
  },
  Jo = class {
    constructor() {
      (this._records = new Map()),
        (this._mapHead = null),
        (this._appendAfter = null),
        (this._previousMapHead = null),
        (this._changesHead = null),
        (this._changesTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null);
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._changesHead !== null ||
        this._removalsHead !== null
      );
    }
    forEachItem(t) {
      let n;
      for (n = this._mapHead; n !== null; n = n._next) t(n);
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousMapHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachChangedItem(t) {
      let n;
      for (n = this._changesHead; n !== null; n = n._nextChanged) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    diff(t) {
      if (!t) t = new Map();
      else if (!(t instanceof Map || Ac(t))) throw new M(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._mapHead;
      if (
        ((this._appendAfter = null),
        this._forEach(t, (r, o) => {
          if (n && n.key === o)
            this._maybeAddToChanges(n, r),
              (this._appendAfter = n),
              (n = n._next);
          else {
            let i = this._getOrCreateRecordForKey(o, r);
            n = this._insertBeforeOrAppend(n, i);
          }
        }),
        n)
      ) {
        n._prev && (n._prev._next = null), (this._removalsHead = n);
        for (let r = n; r !== null; r = r._nextRemoved)
          r === this._mapHead && (this._mapHead = null),
            this._records.delete(r.key),
            (r._nextRemoved = r._next),
            (r.previousValue = r.currentValue),
            (r.currentValue = null),
            (r._prev = null),
            (r._next = null);
      }
      return (
        this._changesTail && (this._changesTail._nextChanged = null),
        this._additionsTail && (this._additionsTail._nextAdded = null),
        this.isDirty
      );
    }
    _insertBeforeOrAppend(t, n) {
      if (t) {
        let r = t._prev;
        return (
          (n._next = t),
          (n._prev = r),
          (t._prev = n),
          r && (r._next = n),
          t === this._mapHead && (this._mapHead = n),
          (this._appendAfter = t),
          t
        );
      }
      return (
        this._appendAfter
          ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
          : (this._mapHead = n),
        (this._appendAfter = n),
        null
      );
    }
    _getOrCreateRecordForKey(t, n) {
      if (this._records.has(t)) {
        let o = this._records.get(t);
        this._maybeAddToChanges(o, n);
        let i = o._prev,
          s = o._next;
        return (
          i && (i._next = s),
          s && (s._prev = i),
          (o._next = null),
          (o._prev = null),
          o
        );
      }
      let r = new Xo(t);
      return (
        this._records.set(t, r),
        (r.currentValue = n),
        this._addToAdditions(r),
        r
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (
          this._previousMapHead = this._mapHead, t = this._previousMapHead;
          t !== null;
          t = t._next
        )
          t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
          t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
          t.previousValue = t.currentValue;
        (this._changesHead = this._changesTail = null),
          (this._additionsHead = this._additionsTail = null),
          (this._removalsHead = null);
      }
    }
    _maybeAddToChanges(t, n) {
      Object.is(n, t.currentValue) ||
        ((t.previousValue = t.currentValue),
        (t.currentValue = n),
        this._addToChanges(t));
    }
    _addToAdditions(t) {
      this._additionsHead === null
        ? (this._additionsHead = this._additionsTail = t)
        : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
    }
    _addToChanges(t) {
      this._changesHead === null
        ? (this._changesHead = this._changesTail = t)
        : ((this._changesTail._nextChanged = t), (this._changesTail = t));
    }
    _forEach(t, n) {
      t instanceof Map
        ? t.forEach(n)
        : Object.keys(t).forEach((r) => n(t[r], r));
    }
  },
  Xo = class {
    constructor(t) {
      (this.key = t),
        (this.previousValue = null),
        (this.currentValue = null),
        (this._nextPrevious = null),
        (this._next = null),
        (this._prev = null),
        (this._nextAdded = null),
        (this._nextRemoved = null),
        (this._nextChanged = null);
    }
  };
function Ma() {
  return new zi([new Ko()]);
}
var zi = (() => {
  class e {
    static {
      this.ɵprov = A({ token: e, providedIn: 'root', factory: Ma });
    }
    constructor(n) {
      this.factories = n;
    }
    static create(n, r) {
      if (r) {
        let o = r.factories.slice();
        n = n.concat(o);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (r) => e.create(n, r || Ma()),
        deps: [[e, new wd(), new Ed()]],
      };
    }
    find(n) {
      let r = this.factories.find((o) => o.supports(n));
      if (r) return r;
      throw new M(901, !1);
    }
  }
  return e;
})();
function EC(e) {
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e,
      o = Fm(r),
      i = [Yc({}), { provide: wt, useExisting: Tm }, ...(n || [])],
      s = new ir({
        providers: i,
        parent: o,
        debugName: '',
        runEnvironmentInitializers: !1,
      });
    return Am({
      r3Injector: s.injector,
      platformInjector: o,
      rootComponent: t,
    });
  } catch (t) {
    return Promise.reject(t);
  }
}
function Xt(e) {
  return typeof e == 'boolean' ? e : e != null && e !== 'false';
}
function Gi(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
var rl = null;
function Wi() {
  return rl;
}
function ZC(e) {
  rl ??= e;
}
var Kc = class {};
var Yi = new x(''),
  ol = (() => {
    class e {
      historyGo(n) {
        throw new Error('');
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = A({
          token: e,
          factory: () => D(Vm),
          providedIn: 'platform',
        });
      }
    }
    return e;
  })();
var Vm = (() => {
  class e extends ol {
    constructor() {
      super(),
        (this._doc = D(Yi)),
        (this._location = window.location),
        (this._history = window.history);
    }
    getBaseHrefFromDOM() {
      return Wi().getBaseHref(this._doc);
    }
    onPopState(n) {
      let r = Wi().getGlobalEventTarget(this._doc, 'window');
      return (
        r.addEventListener('popstate', n, !1),
        () => r.removeEventListener('popstate', n)
      );
    }
    onHashChange(n) {
      let r = Wi().getGlobalEventTarget(this._doc, 'window');
      return (
        r.addEventListener('hashchange', n, !1),
        () => r.removeEventListener('hashchange', n)
      );
    }
    get href() {
      return this._location.href;
    }
    get protocol() {
      return this._location.protocol;
    }
    get hostname() {
      return this._location.hostname;
    }
    get port() {
      return this._location.port;
    }
    get pathname() {
      return this._location.pathname;
    }
    get search() {
      return this._location.search;
    }
    get hash() {
      return this._location.hash;
    }
    set pathname(n) {
      this._location.pathname = n;
    }
    pushState(n, r, o) {
      this._history.pushState(n, r, o);
    }
    replaceState(n, r, o) {
      this._history.replaceState(n, r, o);
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(n = 0) {
      this._history.go(n);
    }
    getState() {
      return this._history.state;
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = A({
        token: e,
        factory: () => new e(),
        providedIn: 'platform',
      });
    }
  }
  return e;
})();
function il(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let n = 0;
  return (
    e.endsWith('/') && n++,
    t.startsWith('/') && n++,
    n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + '/' + t
  );
}
function Jc(e) {
  let t = e.match(/#|\?|$/),
    n = (t && t.index) || e.length,
    r = n - (e[n - 1] === '/' ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}
function Xe(e) {
  return e && e[0] !== '?' ? '?' + e : e;
}
var Qi = (() => {
    class e {
      historyGo(n) {
        throw new Error('');
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = A({ token: e, factory: () => D($m), providedIn: 'root' });
      }
    }
    return e;
  })(),
  Bm = new x(''),
  $m = (() => {
    class e extends Qi {
      constructor(n, r) {
        super(),
          (this._platformLocation = n),
          (this._removeListenerFns = []),
          (this._baseHref =
            r ??
            this._platformLocation.getBaseHrefFromDOM() ??
            D(Yi).location?.origin ??
            '');
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n)
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(n) {
        return il(this._baseHref, n);
      }
      path(n = !1) {
        let r =
            this._platformLocation.pathname + Xe(this._platformLocation.search),
          o = this._platformLocation.hash;
        return o && n ? `${r}${o}` : r;
      }
      pushState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + Xe(i));
        this._platformLocation.pushState(n, r, s);
      }
      replaceState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + Xe(i));
        this._platformLocation.replaceState(n, r, s);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(W(ol), W(Bm, 8));
        };
      }
      static {
        this.ɵprov = A({ token: e, factory: e.ɵfac, providedIn: 'root' });
      }
    }
    return e;
  })();
var Hm = (() => {
  class e {
    constructor(n) {
      (this._subject = new ae()),
        (this._urlChangeListeners = []),
        (this._urlChangeSubscription = null),
        (this._locationStrategy = n);
      let r = this._locationStrategy.getBaseHref();
      (this._basePath = Gm(Jc(Xc(r)))),
        this._locationStrategy.onPopState((o) => {
          this._subject.emit({
            url: this.path(!0),
            pop: !0,
            state: o.state,
            type: o.type,
          });
        });
    }
    ngOnDestroy() {
      this._urlChangeSubscription?.unsubscribe(),
        (this._urlChangeListeners = []);
    }
    path(n = !1) {
      return this.normalize(this._locationStrategy.path(n));
    }
    getState() {
      return this._locationStrategy.getState();
    }
    isCurrentPathEqualTo(n, r = '') {
      return this.path() == this.normalize(n + Xe(r));
    }
    normalize(n) {
      return e.stripTrailingSlash(zm(this._basePath, Xc(n)));
    }
    prepareExternalUrl(n) {
      return (
        n && n[0] !== '/' && (n = '/' + n),
        this._locationStrategy.prepareExternalUrl(n)
      );
    }
    go(n, r = '', o = null) {
      this._locationStrategy.pushState(o, '', n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Xe(r)), o);
    }
    replaceState(n, r = '', o = null) {
      this._locationStrategy.replaceState(o, '', n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Xe(r)), o);
    }
    forward() {
      this._locationStrategy.forward();
    }
    back() {
      this._locationStrategy.back();
    }
    historyGo(n = 0) {
      this._locationStrategy.historyGo?.(n);
    }
    onUrlChange(n) {
      return (
        this._urlChangeListeners.push(n),
        (this._urlChangeSubscription ??= this.subscribe((r) => {
          this._notifyUrlChangeListeners(r.url, r.state);
        })),
        () => {
          let r = this._urlChangeListeners.indexOf(n);
          this._urlChangeListeners.splice(r, 1),
            this._urlChangeListeners.length === 0 &&
              (this._urlChangeSubscription?.unsubscribe(),
              (this._urlChangeSubscription = null));
        }
      );
    }
    _notifyUrlChangeListeners(n = '', r) {
      this._urlChangeListeners.forEach((o) => o(n, r));
    }
    subscribe(n, r, o) {
      return this._subject.subscribe({ next: n, error: r, complete: o });
    }
    static {
      this.normalizeQueryParams = Xe;
    }
    static {
      this.joinWithSlash = il;
    }
    static {
      this.stripTrailingSlash = Jc;
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)(W(Qi));
      };
    }
    static {
      this.ɵprov = A({ token: e, factory: () => Um(), providedIn: 'root' });
    }
  }
  return e;
})();
function Um() {
  return new Hm(W(Qi));
}
function zm(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === '' || ['/', ';', '?', '#'].includes(n[0]) ? n : t;
}
function Xc(e) {
  return e.replace(/\/index.html$/, '');
}
function Gm(e) {
  if (new RegExp('^(https?:)?//').test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
function YC(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(';')) {
    let r = n.indexOf('='),
      [o, i] = r == -1 ? [n, ''] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var qi = /\s+/,
  el = [],
  QC = (() => {
    class e {
      constructor(n, r) {
        (this._ngEl = n),
          (this._renderer = r),
          (this.initialClasses = el),
          (this.stateMap = new Map());
      }
      set klass(n) {
        this.initialClasses = n != null ? n.trim().split(qi) : el;
      }
      set ngClass(n) {
        this.rawClass = typeof n == 'string' ? n.trim().split(qi) : n;
      }
      ngDoCheck() {
        for (let r of this.initialClasses) this._updateState(r, !0);
        let n = this.rawClass;
        if (Array.isArray(n) || n instanceof Set)
          for (let r of n) this._updateState(r, !0);
        else if (n != null)
          for (let r of Object.keys(n)) this._updateState(r, !!n[r]);
        this._applyStateDiff();
      }
      _updateState(n, r) {
        let o = this.stateMap.get(n);
        o !== void 0
          ? (o.enabled !== r && ((o.changed = !0), (o.enabled = r)),
            (o.touched = !0))
          : this.stateMap.set(n, { enabled: r, changed: !0, touched: !0 });
      }
      _applyStateDiff() {
        for (let n of this.stateMap) {
          let r = n[0],
            o = n[1];
          o.changed
            ? (this._toggleClass(r, o.enabled), (o.changed = !1))
            : o.touched ||
              (o.enabled && this._toggleClass(r, !1), this.stateMap.delete(r)),
            (o.touched = !1);
        }
      }
      _toggleClass(n, r) {
        (n = n.trim()),
          n.length > 0 &&
            n.split(qi).forEach((o) => {
              r
                ? this._renderer.addClass(this._ngEl.nativeElement, o)
                : this._renderer.removeClass(this._ngEl.nativeElement, o);
            });
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(ne(Ee), ne(Jt));
        };
      }
      static {
        this.ɵdir = _t({
          type: e,
          selectors: [['', 'ngClass', '']],
          inputs: { klass: [0, 'class', 'klass'], ngClass: 'ngClass' },
          standalone: !0,
        });
      }
    }
    return e;
  })();
var KC = (() => {
    class e {
      constructor(n, r) {
        (this._viewContainer = n),
          (this._context = new Zi()),
          (this._thenTemplateRef = null),
          (this._elseTemplateRef = null),
          (this._thenViewRef = null),
          (this._elseViewRef = null),
          (this._thenTemplateRef = r);
      }
      set ngIf(n) {
        (this._context.$implicit = this._context.ngIf = n), this._updateView();
      }
      set ngIfThen(n) {
        tl('ngIfThen', n),
          (this._thenTemplateRef = n),
          (this._thenViewRef = null),
          this._updateView();
      }
      set ngIfElse(n) {
        tl('ngIfElse', n),
          (this._elseTemplateRef = n),
          (this._elseViewRef = null),
          this._updateView();
      }
      _updateView() {
        this._context.$implicit
          ? this._thenViewRef ||
            (this._viewContainer.clear(),
            (this._elseViewRef = null),
            this._thenTemplateRef &&
              (this._thenViewRef = this._viewContainer.createEmbeddedView(
                this._thenTemplateRef,
                this._context
              )))
          : this._elseViewRef ||
            (this._viewContainer.clear(),
            (this._thenViewRef = null),
            this._elseTemplateRef &&
              (this._elseViewRef = this._viewContainer.createEmbeddedView(
                this._elseTemplateRef,
                this._context
              )));
      }
      static ngTemplateContextGuard(n, r) {
        return !0;
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(ne(Tt), ne(Et));
        };
      }
      static {
        this.ɵdir = _t({
          type: e,
          selectors: [['', 'ngIf', '']],
          inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' },
          standalone: !0,
        });
      }
    }
    return e;
  })(),
  Zi = class {
    constructor() {
      (this.$implicit = null), (this.ngIf = null);
    }
  };
function tl(e, t) {
  if (!!!(!t || t.createEmbeddedView))
    throw new Error(`${e} must be a TemplateRef, but received '${B(t)}'.`);
}
var JC = (() => {
    class e {
      constructor(n, r, o) {
        (this._ngEl = n),
          (this._differs = r),
          (this._renderer = o),
          (this._ngStyle = null),
          (this._differ = null);
      }
      set ngStyle(n) {
        (this._ngStyle = n),
          !this._differ && n && (this._differ = this._differs.find(n).create());
      }
      ngDoCheck() {
        if (this._differ) {
          let n = this._differ.diff(this._ngStyle);
          n && this._applyChanges(n);
        }
      }
      _setStyle(n, r) {
        let [o, i] = n.split('.'),
          s = o.indexOf('-') === -1 ? void 0 : qt.DashCase;
        r != null
          ? this._renderer.setStyle(
              this._ngEl.nativeElement,
              o,
              i ? `${r}${i}` : r,
              s
            )
          : this._renderer.removeStyle(this._ngEl.nativeElement, o, s);
      }
      _applyChanges(n) {
        n.forEachRemovedItem((r) => this._setStyle(r.key, null)),
          n.forEachAddedItem((r) => this._setStyle(r.key, r.currentValue)),
          n.forEachChangedItem((r) => this._setStyle(r.key, r.currentValue));
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(ne(Ee), ne(zi), ne(Jt));
        };
      }
      static {
        this.ɵdir = _t({
          type: e,
          selectors: [['', 'ngStyle', '']],
          inputs: { ngStyle: 'ngStyle' },
          standalone: !0,
        });
      }
    }
    return e;
  })(),
  XC = (() => {
    class e {
      constructor(n) {
        (this._viewContainerRef = n),
          (this._viewRef = null),
          (this.ngTemplateOutletContext = null),
          (this.ngTemplateOutlet = null),
          (this.ngTemplateOutletInjector = null);
      }
      ngOnChanges(n) {
        if (this._shouldRecreateView(n)) {
          let r = this._viewContainerRef;
          if (
            (this._viewRef && r.remove(r.indexOf(this._viewRef)),
            !this.ngTemplateOutlet)
          ) {
            this._viewRef = null;
            return;
          }
          let o = this._createContextForwardProxy();
          this._viewRef = r.createEmbeddedView(this.ngTemplateOutlet, o, {
            injector: this.ngTemplateOutletInjector ?? void 0,
          });
        }
      }
      _shouldRecreateView(n) {
        return !!n.ngTemplateOutlet || !!n.ngTemplateOutletInjector;
      }
      _createContextForwardProxy() {
        return new Proxy(
          {},
          {
            set: (n, r, o) =>
              this.ngTemplateOutletContext
                ? Reflect.set(this.ngTemplateOutletContext, r, o)
                : !1,
            get: (n, r, o) => {
              if (this.ngTemplateOutletContext)
                return Reflect.get(this.ngTemplateOutletContext, r, o);
            },
          }
        );
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(ne(Tt));
        };
      }
      static {
        this.ɵdir = _t({
          type: e,
          selectors: [['', 'ngTemplateOutlet', '']],
          inputs: {
            ngTemplateOutletContext: 'ngTemplateOutletContext',
            ngTemplateOutlet: 'ngTemplateOutlet',
            ngTemplateOutletInjector: 'ngTemplateOutletInjector',
          },
          standalone: !0,
          features: [pr],
        });
      }
    }
    return e;
  })();
var eb = (() => {
    class e {
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵmod = za({ type: e });
      }
      static {
        this.ɵinj = Aa({});
      }
    }
    return e;
  })(),
  Wm = 'browser',
  qm = 'server';
function tb(e) {
  return e === Wm;
}
function Zm(e) {
  return e === qm;
}
var nl = class {};
var sl = (e) => e.src,
  Ym = new x('', { providedIn: 'root', factory: () => sl });
var Qm = new x('NG_OPTIMIZED_PRELOADED_IMAGES', {
    providedIn: 'root',
    factory: () => new Set(),
  }),
  Km = (() => {
    class e {
      constructor() {
        (this.preloadedImages = D(Qm)), (this.document = D(Yi));
      }
      createPreloadLinkTag(n, r, o, i) {
        if (this.preloadedImages.has(r)) return;
        this.preloadedImages.add(r);
        let s = n.createElement('link');
        n.setAttribute(s, 'as', 'image'),
          n.setAttribute(s, 'href', r),
          n.setAttribute(s, 'rel', 'preload'),
          n.setAttribute(s, 'fetchpriority', 'high'),
          i && n.setAttribute(s, 'imageSizes', i),
          o && n.setAttribute(s, 'imageSrcset', o),
          n.appendChild(this.document.head, s);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = A({ token: e, factory: e.ɵfac, providedIn: 'root' });
      }
    }
    return e;
  })();
var Jm = /^((\s*\d+w\s*(,|$)){1,})$/;
var Xm = [1, 2],
  ey = 640;
var ty = 1920,
  ny = 1080;
var nb = (() => {
  class e {
    constructor() {
      (this.imageLoader = D(Ym)),
        (this.config = ry(D(qu))),
        (this.renderer = D(Jt)),
        (this.imgElement = D(Ee).nativeElement),
        (this.injector = D(vt)),
        (this.isServer = Zm(D(Wu))),
        (this.preloadLinkCreator = D(Km)),
        (this.lcpObserver = null),
        (this._renderedSrc = null),
        (this.priority = !1),
        (this.disableOptimizedSrcset = !1),
        (this.fill = !1);
    }
    ngOnInit() {
      Nt('NgOptimizedImage'),
        this.placeholder && this.removePlaceholderOnLoad(this.imgElement),
        this.setHostAttributes();
    }
    setHostAttributes() {
      this.fill
        ? (this.sizes ||= '100vw')
        : (this.setHostAttribute('width', this.width.toString()),
          this.setHostAttribute('height', this.height.toString())),
        this.setHostAttribute('loading', this.getLoadingBehavior()),
        this.setHostAttribute('fetchpriority', this.getFetchPriority()),
        this.setHostAttribute('ng-img', 'true');
      let n = this.updateSrcAndSrcset();
      this.sizes && this.setHostAttribute('sizes', this.sizes),
        this.isServer &&
          this.priority &&
          this.preloadLinkCreator.createPreloadLinkTag(
            this.renderer,
            this.getRewrittenSrc(),
            n,
            this.sizes
          );
    }
    ngOnChanges(n) {
      if (n.ngSrc && !n.ngSrc.isFirstChange()) {
        let r = this._renderedSrc;
        this.updateSrcAndSrcset(!0);
        let o = this._renderedSrc;
        this.lcpObserver !== null &&
          r &&
          o &&
          r !== o &&
          this.injector.get($).runOutsideAngular(() => {
            this.lcpObserver?.updateImage(r, o);
          });
      }
    }
    callImageLoader(n) {
      let r = n;
      return (
        this.loaderParams && (r.loaderParams = this.loaderParams),
        this.imageLoader(r)
      );
    }
    getLoadingBehavior() {
      return !this.priority && this.loading !== void 0
        ? this.loading
        : this.priority
          ? 'eager'
          : 'lazy';
    }
    getFetchPriority() {
      return this.priority ? 'high' : 'auto';
    }
    getRewrittenSrc() {
      if (!this._renderedSrc) {
        let n = { src: this.ngSrc };
        this._renderedSrc = this.callImageLoader(n);
      }
      return this._renderedSrc;
    }
    getRewrittenSrcset() {
      let n = Jm.test(this.ngSrcset);
      return this.ngSrcset
        .split(',')
        .filter((o) => o !== '')
        .map((o) => {
          o = o.trim();
          let i = n ? parseFloat(o) : parseFloat(o) * this.width;
          return `${this.callImageLoader({ src: this.ngSrc, width: i })} ${o}`;
        })
        .join(', ');
    }
    getAutomaticSrcset() {
      return this.sizes ? this.getResponsiveSrcset() : this.getFixedSrcset();
    }
    getResponsiveSrcset() {
      let { breakpoints: n } = this.config,
        r = n;
      return (
        this.sizes?.trim() === '100vw' && (r = n.filter((i) => i >= ey)),
        r
          .map(
            (i) =>
              `${this.callImageLoader({ src: this.ngSrc, width: i })} ${i}w`
          )
          .join(', ')
      );
    }
    updateSrcAndSrcset(n = !1) {
      n && (this._renderedSrc = null);
      let r = this.getRewrittenSrc();
      this.setHostAttribute('src', r);
      let o;
      return (
        this.ngSrcset
          ? (o = this.getRewrittenSrcset())
          : this.shouldGenerateAutomaticSrcset() &&
            (o = this.getAutomaticSrcset()),
        o && this.setHostAttribute('srcset', o),
        o
      );
    }
    getFixedSrcset() {
      return Xm.map(
        (r) =>
          `${this.callImageLoader({ src: this.ngSrc, width: this.width * r })} ${r}x`
      ).join(', ');
    }
    shouldGenerateAutomaticSrcset() {
      let n = !1;
      return (
        this.sizes || (n = this.width > ty || this.height > ny),
        !this.disableOptimizedSrcset &&
          !this.srcset &&
          this.imageLoader !== sl &&
          !n
      );
    }
    generatePlaceholder(n) {
      let { placeholderResolution: r } = this.config;
      return n === !0
        ? `url(${this.callImageLoader({ src: this.ngSrc, width: r, isPlaceholder: !0 })})`
        : typeof n == 'string'
          ? `url(${n})`
          : null;
    }
    shouldBlurPlaceholder(n) {
      return !n || !n.hasOwnProperty('blur') ? !0 : !!n.blur;
    }
    removePlaceholderOnLoad(n) {
      let r = () => {
          let s = this.injector.get(Ui);
          o(), i(), (this.placeholder = !1), s.markForCheck();
        },
        o = this.renderer.listen(n, 'load', r),
        i = this.renderer.listen(n, 'error', r);
      oy(n, r);
    }
    ngOnDestroy() {}
    setHostAttribute(n, r) {
      this.renderer.setAttribute(this.imgElement, n, r);
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵdir = _t({
        type: e,
        selectors: [['img', 'ngSrc', '']],
        hostVars: 18,
        hostBindings: function (r, o) {
          r & 2 &&
            Vi('position', o.fill ? 'absolute' : null)(
              'width',
              o.fill ? '100%' : null
            )('height', o.fill ? '100%' : null)('inset', o.fill ? '0' : null)(
              'background-size',
              o.placeholder ? 'cover' : null
            )('background-position', o.placeholder ? '50% 50%' : null)(
              'background-repeat',
              o.placeholder ? 'no-repeat' : null
            )(
              'background-image',
              o.placeholder ? o.generatePlaceholder(o.placeholder) : null
            )(
              'filter',
              o.placeholder && o.shouldBlurPlaceholder(o.placeholderConfig)
                ? 'blur(15px)'
                : null
            );
        },
        inputs: {
          ngSrc: [2, 'ngSrc', 'ngSrc', iy],
          ngSrcset: 'ngSrcset',
          sizes: 'sizes',
          width: [2, 'width', 'width', Gi],
          height: [2, 'height', 'height', Gi],
          loading: 'loading',
          priority: [2, 'priority', 'priority', Xt],
          loaderParams: 'loaderParams',
          disableOptimizedSrcset: [
            2,
            'disableOptimizedSrcset',
            'disableOptimizedSrcset',
            Xt,
          ],
          fill: [2, 'fill', 'fill', Xt],
          placeholder: [2, 'placeholder', 'placeholder', sy],
          placeholderConfig: 'placeholderConfig',
          src: 'src',
          srcset: 'srcset',
        },
        standalone: !0,
        features: [Nc, pr],
      });
    }
  }
  return e;
})();
function ry(e) {
  let t = {};
  return (
    e.breakpoints && (t.breakpoints = e.breakpoints.sort((n, r) => n - r)),
    Object.assign({}, vi, e, t)
  );
}
function oy(e, t) {
  e.complete && e.naturalWidth && t();
}
function iy(e) {
  return typeof e == 'string' ? e : Er(e);
}
function sy(e) {
  return typeof e == 'string' && e !== 'true' && e !== 'false' && e !== ''
    ? e
    : Xt(e);
}
export {
  we as a,
  Ce as b,
  ay as c,
  P as d,
  El as e,
  Br as f,
  $r as g,
  be as h,
  Ft as i,
  Pt as j,
  Me as k,
  Al as l,
  Ol as m,
  Rl as n,
  Ve as o,
  me as p,
  $l as q,
  Be as r,
  bn as s,
  Ul as t,
  kt as u,
  Hs as v,
  zl as w,
  Lt as x,
  Hr as y,
  Gl as z,
  ql as A,
  zs as B,
  Ur as C,
  Zl as D,
  Yl as E,
  Ql as F,
  Kl as G,
  Jl as H,
  Xl as I,
  M as J,
  Ta as K,
  A as L,
  Aa as M,
  $w as N,
  x as O,
  I as P,
  W as Q,
  D as R,
  Ht as S,
  Hw as T,
  za as U,
  _t as V,
  Wd as W,
  Xa as X,
  Ae as Y,
  Uw as Z,
  pr as _,
  zw as $,
  Gw as aa,
  Ww as ba,
  vt as ca,
  Ir as da,
  ae as ea,
  $ as fa,
  It as ga,
  Ee as ha,
  qw as ia,
  Zw as ja,
  ap as ka,
  Wu as la,
  Yw as ma,
  Qw as na,
  Kw as oa,
  qt as pa,
  Jw as qa,
  ne as ra,
  Xw as sa,
  Et as ta,
  wt as ua,
  nr as va,
  Jt as wa,
  Tt as xa,
  Nt as ya,
  rC as za,
  cg as Aa,
  Nc as Ba,
  $o as Ca,
  gg as Da,
  vg as Ea,
  Cg as Fa,
  Pg as Ga,
  kg as Ha,
  oC as Ia,
  iC as Ja,
  $c as Ka,
  Hc as La,
  Yg as Ma,
  Uc as Na,
  zc as Oa,
  Jg as Pa,
  rm as Qa,
  sC as Ra,
  aC as Sa,
  uC as Ta,
  cC as Ua,
  lC as Va,
  dC as Wa,
  fC as Xa,
  cm as Ya,
  pC as Za,
  hC as _a,
  gC as $a,
  mC as ab,
  yC as bb,
  DC as cb,
  $i as db,
  Im as eb,
  Mr as fb,
  vC as gb,
  IC as hb,
  Ui as ib,
  EC as jb,
  Xt as kb,
  Gi as lb,
  Wi as mb,
  ZC as nb,
  Kc as ob,
  Yi as pb,
  Hm as qb,
  YC as rb,
  QC as sb,
  KC as tb,
  JC as ub,
  XC as vb,
  eb as wb,
  Wm as xb,
  tb as yb,
  Zm as zb,
  nl as Ab,
  nb as Bb,
};
