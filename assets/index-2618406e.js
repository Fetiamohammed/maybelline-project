(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
function Xn(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let r = 0; r < s.length; r++) n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function Zn(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = le(s) ? zo(s) : Zn(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else {
    if (le(e)) return e;
    if (ne(e)) return e;
  }
}
const Oo = /;(?![^(]*\))/g,
  Mo = /:([^]+)/,
  Ao = /\/\*.*?\*\//gs;
function zo(e) {
  const t = {};
  return (
    e
      .replace(Ao, "")
      .split(Oo)
      .forEach((n) => {
        if (n) {
          const s = n.split(Mo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Gn(e) {
  let t = "";
  if (le(e)) t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = Gn(e[n]);
      s && (t += s + " ");
    }
  else if (ne(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Io =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  So = Xn(Io);
function pr(e) {
  return !!e || e === "";
}
const To = (e) =>
    le(e)
      ? e
      : e == null
      ? ""
      : F(e) || (ne(e) && (e.toString === vr || !N(e.toString)))
      ? JSON.stringify(e, mr, 2)
      : String(e),
  mr = (e, t) =>
    t && t.__v_isRef
      ? mr(e, t.value)
      : vt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          ),
        }
      : gr(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ne(t) && !F(t) && !br(t)
      ? String(t)
      : t,
  ee = {},
  _t = [],
  Oe = () => {},
  $o = () => !1,
  Ho = /^on[^a-z]/,
  pn = (e) => Ho.test(e),
  es = (e) => e.startsWith("onUpdate:"),
  de = Object.assign,
  ts = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  jo = Object.prototype.hasOwnProperty,
  V = (e, t) => jo.call(e, t),
  F = Array.isArray,
  vt = (e) => mn(e) === "[object Map]",
  gr = (e) => mn(e) === "[object Set]",
  N = (e) => typeof e == "function",
  le = (e) => typeof e == "string",
  ns = (e) => typeof e == "symbol",
  ne = (e) => e !== null && typeof e == "object",
  _r = (e) => ne(e) && N(e.then) && N(e.catch),
  vr = Object.prototype.toString,
  mn = (e) => vr.call(e),
  Fo = (e) => mn(e).slice(8, -1),
  br = (e) => mn(e) === "[object Object]",
  ss = (e) =>
    le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  sn = Xn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  gn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Lo = /-(\w)/g,
  wt = gn((e) => e.replace(Lo, (t, n) => (n ? n.toUpperCase() : ""))),
  No = /\B([A-Z])/g,
  Mt = gn((e) => e.replace(No, "-$1").toLowerCase()),
  yr = gn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Cn = gn((e) => (e ? `on${yr(e)}` : "")),
  Dt = (e, t) => !Object.is(e, t),
  Pn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  cn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  ko = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Rs;
const Bo = () =>
  Rs ||
  (Rs =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let Re;
class wr {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Re),
      !t && Re && (this.index = (Re.scopes || (Re.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Re;
      try {
        return (Re = this), t();
      } finally {
        Re = n;
      }
    }
  }
  on() {
    Re = this;
  }
  off() {
    Re = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Do(e) {
  return new wr(e);
}
function Uo(e, t = Re) {
  t && t.active && t.effects.push(e);
}
function Ko() {
  return Re;
}
const rs = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Er = (e) => (e.w & Ge) > 0,
  xr = (e) => (e.n & Ge) > 0,
  Vo = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ge;
  },
  Wo = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        Er(r) && !xr(r) ? r.delete(e) : (t[n++] = r),
          (r.w &= ~Ge),
          (r.n &= ~Ge);
      }
      t.length = n;
    }
  },
  jn = new WeakMap();
let jt = 0,
  Ge = 1;
const Fn = 30;
let Ce;
const ct = Symbol(""),
  Ln = Symbol("");
class os {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Uo(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Ce,
      n = Xe;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Ce),
        (Ce = this),
        (Xe = !0),
        (Ge = 1 << ++jt),
        jt <= Fn ? Vo(this) : Cs(this),
        this.fn()
      );
    } finally {
      jt <= Fn && Wo(this),
        (Ge = 1 << --jt),
        (Ce = this.parent),
        (Xe = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ce === this
      ? (this.deferStop = !0)
      : this.active &&
        (Cs(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Cs(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Xe = !0;
const Rr = [];
function At() {
  Rr.push(Xe), (Xe = !1);
}
function zt() {
  const e = Rr.pop();
  Xe = e === void 0 ? !0 : e;
}
function ge(e, t, n) {
  if (Xe && Ce) {
    let s = jn.get(e);
    s || jn.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = rs())), Cr(r);
  }
}
function Cr(e, t) {
  let n = !1;
  jt <= Fn ? xr(e) || ((e.n |= Ge), (n = !Er(e))) : (n = !e.has(Ce)),
    n && (e.add(Ce), Ce.deps.push(e));
}
function Ke(e, t, n, s, r, o) {
  const i = jn.get(e);
  if (!i) return;
  let u = [];
  if (t === "clear") u = [...i.values()];
  else if (n === "length" && F(e)) {
    const c = Number(s);
    i.forEach((d, f) => {
      (f === "length" || f >= c) && u.push(d);
    });
  } else
    switch ((n !== void 0 && u.push(i.get(n)), t)) {
      case "add":
        F(e)
          ? ss(n) && u.push(i.get("length"))
          : (u.push(i.get(ct)), vt(e) && u.push(i.get(Ln)));
        break;
      case "delete":
        F(e) || (u.push(i.get(ct)), vt(e) && u.push(i.get(Ln)));
        break;
      case "set":
        vt(e) && u.push(i.get(ct));
        break;
    }
  if (u.length === 1) u[0] && Nn(u[0]);
  else {
    const c = [];
    for (const d of u) d && c.push(...d);
    Nn(rs(c));
  }
}
function Nn(e, t) {
  const n = F(e) ? e : [...e];
  for (const s of n) s.computed && Ps(s);
  for (const s of n) s.computed || Ps(s);
}
function Ps(e, t) {
  (e !== Ce || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const qo = Xn("__proto__,__v_isRef,__isVue"),
  Pr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(ns)
  ),
  Yo = is(),
  Qo = is(!1, !0),
  Jo = is(!0),
  Os = Xo();
function Xo() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = W(this);
        for (let o = 0, i = this.length; o < i; o++) ge(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(W)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        At();
        const s = W(this)[t].apply(this, n);
        return zt(), s;
      };
    }),
    e
  );
}
function Zo(e) {
  const t = W(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
function is(e = !1, t = !1) {
  return function (s, r, o) {
    if (r === "__v_isReactive") return !e;
    if (r === "__v_isReadonly") return e;
    if (r === "__v_isShallow") return t;
    if (r === "__v_raw" && o === (e ? (t ? pi : Ir) : t ? zr : Ar).get(s))
      return s;
    const i = F(s);
    if (!e) {
      if (i && V(Os, r)) return Reflect.get(Os, r, o);
      if (r === "hasOwnProperty") return Zo;
    }
    const u = Reflect.get(s, r, o);
    return (ns(r) ? Pr.has(r) : qo(r)) || (e || ge(s, "get", r), t)
      ? u
      : fe(u)
      ? i && ss(r)
        ? u
        : u.value
      : ne(u)
      ? e
        ? Sr(u)
        : Qt(u)
      : u;
  };
}
const Go = Or(),
  ei = Or(!0);
function Or(e = !1) {
  return function (n, s, r, o) {
    let i = n[s];
    if (Et(i) && fe(i) && !fe(r)) return !1;
    if (
      !e &&
      (!un(r) && !Et(r) && ((i = W(i)), (r = W(r))), !F(n) && fe(i) && !fe(r))
    )
      return (i.value = r), !0;
    const u = F(n) && ss(s) ? Number(s) < n.length : V(n, s),
      c = Reflect.set(n, s, r, o);
    return (
      n === W(o) && (u ? Dt(r, i) && Ke(n, "set", s, r) : Ke(n, "add", s, r)), c
    );
  };
}
function ti(e, t) {
  const n = V(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Ke(e, "delete", t, void 0), s;
}
function ni(e, t) {
  const n = Reflect.has(e, t);
  return (!ns(t) || !Pr.has(t)) && ge(e, "has", t), n;
}
function si(e) {
  return ge(e, "iterate", F(e) ? "length" : ct), Reflect.ownKeys(e);
}
const Mr = { get: Yo, set: Go, deleteProperty: ti, has: ni, ownKeys: si },
  ri = {
    get: Jo,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  oi = de({}, Mr, { get: Qo, set: ei }),
  ls = (e) => e,
  _n = (e) => Reflect.getPrototypeOf(e);
function Xt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = W(e),
    o = W(t);
  n || (t !== o && ge(r, "get", t), ge(r, "get", o));
  const { has: i } = _n(r),
    u = s ? ls : n ? as : Ut;
  if (i.call(r, t)) return u(e.get(t));
  if (i.call(r, o)) return u(e.get(o));
  e !== r && e.get(t);
}
function Zt(e, t = !1) {
  const n = this.__v_raw,
    s = W(n),
    r = W(e);
  return (
    t || (e !== r && ge(s, "has", e), ge(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function Gt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ge(W(e), "iterate", ct), Reflect.get(e, "size", e)
  );
}
function Ms(e) {
  e = W(e);
  const t = W(this);
  return _n(t).has.call(t, e) || (t.add(e), Ke(t, "add", e, e)), this;
}
function As(e, t) {
  t = W(t);
  const n = W(this),
    { has: s, get: r } = _n(n);
  let o = s.call(n, e);
  o || ((e = W(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return (
    n.set(e, t), o ? Dt(t, i) && Ke(n, "set", e, t) : Ke(n, "add", e, t), this
  );
}
function zs(e) {
  const t = W(this),
    { has: n, get: s } = _n(t);
  let r = n.call(t, e);
  r || ((e = W(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && Ke(t, "delete", e, void 0), o;
}
function Is() {
  const e = W(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Ke(e, "clear", void 0, void 0), n;
}
function en(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      u = W(i),
      c = t ? ls : e ? as : Ut;
    return (
      !e && ge(u, "iterate", ct), i.forEach((d, f) => s.call(r, c(d), c(f), o))
    );
  };
}
function tn(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = W(r),
      i = vt(o),
      u = e === "entries" || (e === Symbol.iterator && i),
      c = e === "keys" && i,
      d = r[e](...s),
      f = n ? ls : t ? as : Ut;
    return (
      !t && ge(o, "iterate", c ? Ln : ct),
      {
        next() {
          const { value: h, done: p } = d.next();
          return p
            ? { value: h, done: p }
            : { value: u ? [f(h[0]), f(h[1])] : f(h), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function qe(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function ii() {
  const e = {
      get(o) {
        return Xt(this, o);
      },
      get size() {
        return Gt(this);
      },
      has: Zt,
      add: Ms,
      set: As,
      delete: zs,
      clear: Is,
      forEach: en(!1, !1),
    },
    t = {
      get(o) {
        return Xt(this, o, !1, !0);
      },
      get size() {
        return Gt(this);
      },
      has: Zt,
      add: Ms,
      set: As,
      delete: zs,
      clear: Is,
      forEach: en(!1, !0),
    },
    n = {
      get(o) {
        return Xt(this, o, !0);
      },
      get size() {
        return Gt(this, !0);
      },
      has(o) {
        return Zt.call(this, o, !0);
      },
      add: qe("add"),
      set: qe("set"),
      delete: qe("delete"),
      clear: qe("clear"),
      forEach: en(!0, !1),
    },
    s = {
      get(o) {
        return Xt(this, o, !0, !0);
      },
      get size() {
        return Gt(this, !0);
      },
      has(o) {
        return Zt.call(this, o, !0);
      },
      add: qe("add"),
      set: qe("set"),
      delete: qe("delete"),
      clear: qe("clear"),
      forEach: en(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = tn(o, !1, !1)),
        (n[o] = tn(o, !0, !1)),
        (t[o] = tn(o, !1, !0)),
        (s[o] = tn(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [li, ci, ui, fi] = ii();
function cs(e, t) {
  const n = t ? (e ? fi : ui) : e ? ci : li;
  return (s, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(V(n, r) && r in s ? n : s, r, o);
}
const ai = { get: cs(!1, !1) },
  di = { get: cs(!1, !0) },
  hi = { get: cs(!0, !1) },
  Ar = new WeakMap(),
  zr = new WeakMap(),
  Ir = new WeakMap(),
  pi = new WeakMap();
function mi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function gi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mi(Fo(e));
}
function Qt(e) {
  return Et(e) ? e : us(e, !1, Mr, ai, Ar);
}
function _i(e) {
  return us(e, !1, oi, di, zr);
}
function Sr(e) {
  return us(e, !0, ri, hi, Ir);
}
function us(e, t, n, s, r) {
  if (!ne(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = gi(e);
  if (i === 0) return e;
  const u = new Proxy(e, i === 2 ? s : n);
  return r.set(e, u), u;
}
function bt(e) {
  return Et(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Et(e) {
  return !!(e && e.__v_isReadonly);
}
function un(e) {
  return !!(e && e.__v_isShallow);
}
function Tr(e) {
  return bt(e) || Et(e);
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function fs(e) {
  return cn(e, "__v_skip", !0), e;
}
const Ut = (e) => (ne(e) ? Qt(e) : e),
  as = (e) => (ne(e) ? Sr(e) : e);
function $r(e) {
  Xe && Ce && ((e = W(e)), Cr(e.dep || (e.dep = rs())));
}
function Hr(e, t) {
  e = W(e);
  const n = e.dep;
  n && Nn(n);
}
function fe(e) {
  return !!(e && e.__v_isRef === !0);
}
function jr(e) {
  return Fr(e, !1);
}
function vi(e) {
  return Fr(e, !0);
}
function Fr(e, t) {
  return fe(e) ? e : new bi(e, t);
}
class bi {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : W(t)),
      (this._value = n ? t : Ut(t));
  }
  get value() {
    return $r(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || un(t) || Et(t);
    (t = n ? t : W(t)),
      Dt(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Ut(t)), Hr(this));
  }
}
function De(e) {
  return fe(e) ? e.value : e;
}
const yi = {
  get: (e, t, n) => De(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return fe(r) && !fe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Lr(e) {
  return bt(e) ? e : new Proxy(e, yi);
}
var Nr;
class wi {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Nr] = !1),
      (this._dirty = !0),
      (this.effect = new os(t, () => {
        this._dirty || ((this._dirty = !0), Hr(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = W(this);
    return (
      $r(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
Nr = "__v_isReadonly";
function Ei(e, t, n = !1) {
  let s, r;
  const o = N(e);
  return (
    o ? ((s = e), (r = Oe)) : ((s = e.get), (r = e.set)),
    new wi(s, r, o || !r, n)
  );
}
function Ze(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    vn(o, t, n);
  }
  return r;
}
function Me(e, t, n, s) {
  if (N(e)) {
    const o = Ze(e, t, n, s);
    return (
      o &&
        _r(o) &&
        o.catch((i) => {
          vn(i, t, n);
        }),
      o
    );
  }
  const r = [];
  for (let o = 0; o < e.length; o++) r.push(Me(e[o], t, n, s));
  return r;
}
function vn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      u = n;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let f = 0; f < d.length; f++) if (d[f](e, i, u) === !1) return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Ze(c, null, 10, [e, i, u]);
      return;
    }
  }
  xi(e, n, r, s);
}
function xi(e, t, n, s = !0) {
  console.error(e);
}
let Kt = !1,
  kn = !1;
const ue = [];
let Fe = 0;
const yt = [];
let Be = null,
  it = 0;
const kr = Promise.resolve();
let ds = null;
function Br(e) {
  const t = ds || kr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ri(e) {
  let t = Fe + 1,
    n = ue.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    Vt(ue[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function hs(e) {
  (!ue.length || !ue.includes(e, Kt && e.allowRecurse ? Fe + 1 : Fe)) &&
    (e.id == null ? ue.push(e) : ue.splice(Ri(e.id), 0, e), Dr());
}
function Dr() {
  !Kt && !kn && ((kn = !0), (ds = kr.then(Kr)));
}
function Ci(e) {
  const t = ue.indexOf(e);
  t > Fe && ue.splice(t, 1);
}
function Pi(e) {
  F(e)
    ? yt.push(...e)
    : (!Be || !Be.includes(e, e.allowRecurse ? it + 1 : it)) && yt.push(e),
    Dr();
}
function Ss(e, t = Kt ? Fe + 1 : 0) {
  for (; t < ue.length; t++) {
    const n = ue[t];
    n && n.pre && (ue.splice(t, 1), t--, n());
  }
}
function Ur(e) {
  if (yt.length) {
    const t = [...new Set(yt)];
    if (((yt.length = 0), Be)) {
      Be.push(...t);
      return;
    }
    for (Be = t, Be.sort((n, s) => Vt(n) - Vt(s)), it = 0; it < Be.length; it++)
      Be[it]();
    (Be = null), (it = 0);
  }
}
const Vt = (e) => (e.id == null ? 1 / 0 : e.id),
  Oi = (e, t) => {
    const n = Vt(e) - Vt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Kr(e) {
  (kn = !1), (Kt = !0), ue.sort(Oi);
  const t = Oe;
  try {
    for (Fe = 0; Fe < ue.length; Fe++) {
      const n = ue[Fe];
      n && n.active !== !1 && Ze(n, null, 14);
    }
  } finally {
    (Fe = 0),
      (ue.length = 0),
      Ur(),
      (Kt = !1),
      (ds = null),
      (ue.length || yt.length) && Kr();
  }
}
function Mi(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ee;
  let r = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in s) {
    const f = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: h, trim: p } = s[f] || ee;
    p && (r = n.map((y) => (le(y) ? y.trim() : y))), h && (r = n.map(ko));
  }
  let u,
    c = s[(u = Cn(t))] || s[(u = Cn(wt(t)))];
  !c && o && (c = s[(u = Cn(Mt(t)))]), c && Me(c, e, 6, r);
  const d = s[u + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[u]) return;
    (e.emitted[u] = !0), Me(d, e, 6, r);
  }
}
function Vr(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    u = !1;
  if (!N(e)) {
    const c = (d) => {
      const f = Vr(d, t, !0);
      f && ((u = !0), de(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !o && !u
    ? (ne(e) && s.set(e, null), null)
    : (F(o) ? o.forEach((c) => (i[c] = null)) : de(i, o),
      ne(e) && s.set(e, i),
      i);
}
function bn(e, t) {
  return !e || !pn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      V(e, t[0].toLowerCase() + t.slice(1)) || V(e, Mt(t)) || V(e, t));
}
let me = null,
  yn = null;
function fn(e) {
  const t = me;
  return (me = e), (yn = (e && e.type.__scopeId) || null), t;
}
function Wr(e) {
  yn = e;
}
function qr() {
  yn = null;
}
function ie(e, t = me, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && ks(-1);
    const o = fn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      fn(o), s._d && ks(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function On(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: u,
    attrs: c,
    emit: d,
    render: f,
    renderCache: h,
    data: p,
    setupState: y,
    ctx: O,
    inheritAttrs: z,
  } = e;
  let L, A;
  const j = fn(e);
  try {
    if (n.shapeFlag & 4) {
      const q = r || s;
      (L = je(f.call(q, q, h, o, y, p, O))), (A = c);
    } else {
      const q = t;
      (L = je(
        q.length > 1 ? q(o, { attrs: c, slots: u, emit: d }) : q(o, null)
      )),
        (A = t.props ? c : Ai(c));
    }
  } catch (q) {
    (Nt.length = 0), vn(q, e, 1), (L = X(xt));
  }
  let $ = L;
  if (A && z !== !1) {
    const q = Object.keys(A),
      { shapeFlag: ce } = $;
    q.length && ce & 7 && (i && q.some(es) && (A = zi(A, i)), ($ = Rt($, A)));
  }
  return (
    n.dirs && (($ = Rt($)), ($.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ($.transition = n.transition),
    (L = $),
    fn(j),
    L
  );
}
const Ai = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || pn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  zi = (e, t) => {
    const n = {};
    for (const s in e) (!es(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Ii(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: u, patchFlag: c } = t,
    d = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? Ts(s, i, d) : !!i;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const p = f[h];
        if (i[p] !== s[p] && !bn(d, p)) return !0;
      }
    }
  } else
    return (r || u) && (!u || !u.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? Ts(s, i, d)
        : !0
      : !!i;
  return !1;
}
function Ts(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !bn(n, o)) return !0;
  }
  return !1;
}
function Si({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Ti = (e) => e.__isSuspense;
function $i(e, t) {
  t && t.pendingBranch
    ? F(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Pi(e);
}
function rn(e, t) {
  if (oe) {
    let n = oe.provides;
    const s = oe.parent && oe.parent.provides;
    s === n && (n = oe.provides = Object.create(s)), (n[e] = t);
  }
}
function Ue(e, t, n = !1) {
  const s = oe || me;
  if (s) {
    const r =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && N(t) ? t.call(s.proxy) : t;
  }
}
const nn = {};
function on(e, t, n) {
  return Yr(e, t, n);
}
function Yr(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = ee
) {
  const u = Ko() === (oe == null ? void 0 : oe.scope) ? oe : null;
  let c,
    d = !1,
    f = !1;
  if (
    (fe(e)
      ? ((c = () => e.value), (d = un(e)))
      : bt(e)
      ? ((c = () => e), (s = !0))
      : F(e)
      ? ((f = !0),
        (d = e.some(($) => bt($) || un($))),
        (c = () =>
          e.map(($) => {
            if (fe($)) return $.value;
            if (bt($)) return gt($);
            if (N($)) return Ze($, u, 2);
          })))
      : N(e)
      ? t
        ? (c = () => Ze(e, u, 2))
        : (c = () => {
            if (!(u && u.isUnmounted)) return h && h(), Me(e, u, 3, [p]);
          })
      : (c = Oe),
    t && s)
  ) {
    const $ = c;
    c = () => gt($());
  }
  let h,
    p = ($) => {
      h = A.onStop = () => {
        Ze($, u, 4);
      };
    },
    y;
  if (qt)
    if (
      ((p = Oe),
      t ? n && Me(t, u, 3, [c(), f ? [] : void 0, p]) : c(),
      r === "sync")
    ) {
      const $ = Pl();
      y = $.__watcherHandles || ($.__watcherHandles = []);
    } else return Oe;
  let O = f ? new Array(e.length).fill(nn) : nn;
  const z = () => {
    if (A.active)
      if (t) {
        const $ = A.run();
        (s || d || (f ? $.some((q, ce) => Dt(q, O[ce])) : Dt($, O))) &&
          (h && h(),
          Me(t, u, 3, [$, O === nn ? void 0 : f && O[0] === nn ? [] : O, p]),
          (O = $));
      } else A.run();
  };
  z.allowRecurse = !!t;
  let L;
  r === "sync"
    ? (L = z)
    : r === "post"
    ? (L = () => pe(z, u && u.suspense))
    : ((z.pre = !0), u && (z.id = u.uid), (L = () => hs(z)));
  const A = new os(c, L);
  t
    ? n
      ? z()
      : (O = A.run())
    : r === "post"
    ? pe(A.run.bind(A), u && u.suspense)
    : A.run();
  const j = () => {
    A.stop(), u && u.scope && ts(u.scope.effects, A);
  };
  return y && y.push(j), j;
}
function Hi(e, t, n) {
  const s = this.proxy,
    r = le(e) ? (e.includes(".") ? Qr(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  N(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = oe;
  Ct(this);
  const u = Yr(r, o.bind(s), n);
  return i ? Ct(i) : ut(), u;
}
function Qr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function gt(e, t) {
  if (!ne(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), fe(e))) gt(e.value, t);
  else if (F(e)) for (let n = 0; n < e.length; n++) gt(e[n], t);
  else if (gr(e) || vt(e))
    e.forEach((n) => {
      gt(n, t);
    });
  else if (br(e)) for (const n in e) gt(e[n], t);
  return e;
}
function Jr(e) {
  return N(e) ? { setup: e, name: e.name } : e;
}
const Ft = (e) => !!e.type.__asyncLoader,
  Xr = (e) => e.type.__isKeepAlive;
function ji(e, t) {
  Zr(e, "a", t);
}
function Fi(e, t) {
  Zr(e, "da", t);
}
function Zr(e, t, n = oe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((wn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      Xr(r.parent.vnode) && Li(s, t, n, r), (r = r.parent);
  }
}
function Li(e, t, n, s) {
  const r = wn(t, e, s, !0);
  Gr(() => {
    ts(s[t], r);
  }, n);
}
function wn(e, t, n = oe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          At(), Ct(n);
          const u = Me(t, n, e, i);
          return ut(), zt(), u;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Ve =
    (e) =>
    (t, n = oe) =>
      (!qt || e === "sp") && wn(e, (...s) => t(...s), n),
  Ni = Ve("bm"),
  ki = Ve("m"),
  Bi = Ve("bu"),
  Di = Ve("u"),
  Ui = Ve("bum"),
  Gr = Ve("um"),
  Ki = Ve("sp"),
  Vi = Ve("rtg"),
  Wi = Ve("rtc");
function qi(e, t = oe) {
  wn("ec", e, t);
}
function st(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const u = r[i];
    o && (u.oldValue = o[i].value);
    let c = u.dir[s];
    c && (At(), Me(c, n, 8, [e.el, u, e, t]), zt());
  }
}
const Yi = Symbol();
function Mn(e, t, n = {}, s, r) {
  if (me.isCE || (me.parent && Ft(me.parent) && me.parent.isCE))
    return t !== "default" && (n.name = t), X("slot", n, s && s());
  let o = e[t];
  o && o._c && (o._d = !1), ze();
  const i = o && eo(o(n)),
    u = hl(
      be,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (s ? s() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !r && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    u
  );
}
function eo(e) {
  return e.some((t) =>
    dn(t) ? !(t.type === xt || (t.type === be && !eo(t.children))) : !0
  )
    ? e
    : null;
}
const Bn = (e) => (e ? (ao(e) ? _s(e) || e.proxy : Bn(e.parent)) : null),
  Lt = de(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Bn(e.parent),
    $root: (e) => Bn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ps(e),
    $forceUpdate: (e) => e.f || (e.f = () => hs(e.update)),
    $nextTick: (e) => e.n || (e.n = Br.bind(e.proxy)),
    $watch: (e) => Hi.bind(e),
  }),
  An = (e, t) => e !== ee && !e.__isScriptSetup && V(e, t),
  Qi = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: u,
        appContext: c,
      } = e;
      let d;
      if (t[0] !== "$") {
        const y = i[t];
        if (y !== void 0)
          switch (y) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (An(s, t)) return (i[t] = 1), s[t];
          if (r !== ee && V(r, t)) return (i[t] = 2), r[t];
          if ((d = e.propsOptions[0]) && V(d, t)) return (i[t] = 3), o[t];
          if (n !== ee && V(n, t)) return (i[t] = 4), n[t];
          Dn && (i[t] = 0);
        }
      }
      const f = Lt[t];
      let h, p;
      if (f) return t === "$attrs" && ge(e, "get", t), f(e);
      if ((h = u.__cssModules) && (h = h[t])) return h;
      if (n !== ee && V(n, t)) return (i[t] = 4), n[t];
      if (((p = c.config.globalProperties), V(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return An(r, t)
        ? ((r[t] = n), !0)
        : s !== ee && V(s, t)
        ? ((s[t] = n), !0)
        : V(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i
    ) {
      let u;
      return (
        !!n[i] ||
        (e !== ee && V(e, i)) ||
        An(t, i) ||
        ((u = o[0]) && V(u, i)) ||
        V(s, i) ||
        V(Lt, i) ||
        V(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : V(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let Dn = !0;
function Ji(e) {
  const t = ps(e),
    n = e.proxy,
    s = e.ctx;
  (Dn = !1), t.beforeCreate && $s(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: u,
    provide: c,
    inject: d,
    created: f,
    beforeMount: h,
    mounted: p,
    beforeUpdate: y,
    updated: O,
    activated: z,
    deactivated: L,
    beforeDestroy: A,
    beforeUnmount: j,
    destroyed: $,
    unmounted: q,
    render: ce,
    renderTracked: _e,
    renderTriggered: Ie,
    errorCaptured: Ne,
    serverPrefetch: ft,
    expose: Se,
    inheritAttrs: We,
    components: Te,
    directives: at,
    filters: tt,
  } = t;
  if ((d && Xi(d, s, null, e.appContext.config.unwrapInjectedRef), i))
    for (const Z in i) {
      const Q = i[Z];
      N(Q) && (s[Z] = Q.bind(n));
    }
  if (r) {
    const Z = r.call(n, n);
    ne(Z) && (e.data = Qt(Z));
  }
  if (((Dn = !0), o))
    for (const Z in o) {
      const Q = o[Z],
        we = N(Q) ? Q.bind(n, n) : N(Q.get) ? Q.get.bind(n, n) : Oe,
        nt = !N(Q) && N(Q.set) ? Q.set.bind(n) : Oe,
        Ee = ye({ get: we, set: nt });
      Object.defineProperty(s, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => Ee.value,
        set: (he) => (Ee.value = he),
      });
    }
  if (u) for (const Z in u) to(u[Z], s, n, Z);
  if (c) {
    const Z = N(c) ? c.call(n) : c;
    Reflect.ownKeys(Z).forEach((Q) => {
      rn(Q, Z[Q]);
    });
  }
  f && $s(f, e, "c");
  function se(Z, Q) {
    F(Q) ? Q.forEach((we) => Z(we.bind(n))) : Q && Z(Q.bind(n));
  }
  if (
    (se(Ni, h),
    se(ki, p),
    se(Bi, y),
    se(Di, O),
    se(ji, z),
    se(Fi, L),
    se(qi, Ne),
    se(Wi, _e),
    se(Vi, Ie),
    se(Ui, j),
    se(Gr, q),
    se(Ki, ft),
    F(Se))
  )
    if (Se.length) {
      const Z = e.exposed || (e.exposed = {});
      Se.forEach((Q) => {
        Object.defineProperty(Z, Q, {
          get: () => n[Q],
          set: (we) => (n[Q] = we),
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === Oe && (e.render = ce),
    We != null && (e.inheritAttrs = We),
    Te && (e.components = Te),
    at && (e.directives = at);
}
function Xi(e, t, n = Oe, s = !1) {
  F(e) && (e = Un(e));
  for (const r in e) {
    const o = e[r];
    let i;
    ne(o)
      ? "default" in o
        ? (i = Ue(o.from || r, o.default, !0))
        : (i = Ue(o.from || r))
      : (i = Ue(o)),
      fe(i) && s
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (u) => (i.value = u),
          })
        : (t[r] = i);
  }
}
function $s(e, t, n) {
  Me(F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function to(e, t, n, s) {
  const r = s.includes(".") ? Qr(n, s) : () => n[s];
  if (le(e)) {
    const o = t[e];
    N(o) && on(r, o);
  } else if (N(e)) on(r, e.bind(n));
  else if (ne(e))
    if (F(e)) e.forEach((o) => to(o, t, n, s));
    else {
      const o = N(e.handler) ? e.handler.bind(n) : t[e.handler];
      N(o) && on(r, o, e);
    }
}
function ps(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    u = o.get(t);
  let c;
  return (
    u
      ? (c = u)
      : !r.length && !n && !s
      ? (c = t)
      : ((c = {}), r.length && r.forEach((d) => an(c, d, i, !0)), an(c, t, i)),
    ne(t) && o.set(t, c),
    c
  );
}
function an(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && an(e, o, n, !0), r && r.forEach((i) => an(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const u = Zi[i] || (n && n[i]);
      e[i] = u ? u(e[i], t[i]) : t[i];
    }
  return e;
}
const Zi = {
  data: Hs,
  props: ot,
  emits: ot,
  methods: ot,
  computed: ot,
  beforeCreate: ae,
  created: ae,
  beforeMount: ae,
  mounted: ae,
  beforeUpdate: ae,
  updated: ae,
  beforeDestroy: ae,
  beforeUnmount: ae,
  destroyed: ae,
  unmounted: ae,
  activated: ae,
  deactivated: ae,
  errorCaptured: ae,
  serverPrefetch: ae,
  components: ot,
  directives: ot,
  watch: el,
  provide: Hs,
  inject: Gi,
};
function Hs(e, t) {
  return t
    ? e
      ? function () {
          return de(
            N(e) ? e.call(this, this) : e,
            N(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Gi(e, t) {
  return ot(Un(e), Un(t));
}
function Un(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ot(e, t) {
  return e ? de(de(Object.create(null), e), t) : t;
}
function el(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = de(Object.create(null), e);
  for (const s in t) n[s] = ae(e[s], t[s]);
  return n;
}
function tl(e, t, n, s = !1) {
  const r = {},
    o = {};
  cn(o, xn, 1), (e.propsDefaults = Object.create(null)), no(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : _i(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o);
}
function nl(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    u = W(r),
    [c] = e.propsOptions;
  let d = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let p = f[h];
        if (bn(e.emitsOptions, p)) continue;
        const y = t[p];
        if (c)
          if (V(o, p)) y !== o[p] && ((o[p] = y), (d = !0));
          else {
            const O = wt(p);
            r[O] = Kn(c, u, O, y, e, !1);
          }
        else y !== o[p] && ((o[p] = y), (d = !0));
      }
    }
  } else {
    no(e, t, r, o) && (d = !0);
    let f;
    for (const h in u)
      (!t || (!V(t, h) && ((f = Mt(h)) === h || !V(t, f)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[f] !== void 0) &&
            (r[h] = Kn(c, u, h, void 0, e, !0))
          : delete r[h]);
    if (o !== u) for (const h in o) (!t || !V(t, h)) && (delete o[h], (d = !0));
  }
  d && Ke(e, "set", "$attrs");
}
function no(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    u;
  if (t)
    for (let c in t) {
      if (sn(c)) continue;
      const d = t[c];
      let f;
      r && V(r, (f = wt(c)))
        ? !o || !o.includes(f)
          ? (n[f] = d)
          : ((u || (u = {}))[f] = d)
        : bn(e.emitsOptions, c) ||
          ((!(c in s) || d !== s[c]) && ((s[c] = d), (i = !0)));
    }
  if (o) {
    const c = W(n),
      d = u || ee;
    for (let f = 0; f < o.length; f++) {
      const h = o[f];
      n[h] = Kn(r, c, h, d[h], e, !V(d, h));
    }
  }
  return i;
}
function Kn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const u = V(i, "default");
    if (u && s === void 0) {
      const c = i.default;
      if (i.type !== Function && N(c)) {
        const { propsDefaults: d } = r;
        n in d ? (s = d[n]) : (Ct(r), (s = d[n] = c.call(null, t)), ut());
      } else s = c;
    }
    i[0] &&
      (o && !u ? (s = !1) : i[1] && (s === "" || s === Mt(n)) && (s = !0));
  }
  return s;
}
function so(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    u = [];
  let c = !1;
  if (!N(e)) {
    const f = (h) => {
      c = !0;
      const [p, y] = so(h, t, !0);
      de(i, p), y && u.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!o && !c) return ne(e) && s.set(e, _t), _t;
  if (F(o))
    for (let f = 0; f < o.length; f++) {
      const h = wt(o[f]);
      js(h) && (i[h] = ee);
    }
  else if (o)
    for (const f in o) {
      const h = wt(f);
      if (js(h)) {
        const p = o[f],
          y = (i[h] = F(p) || N(p) ? { type: p } : Object.assign({}, p));
        if (y) {
          const O = Ns(Boolean, y.type),
            z = Ns(String, y.type);
          (y[0] = O > -1),
            (y[1] = z < 0 || O < z),
            (O > -1 || V(y, "default")) && u.push(h);
        }
      }
    }
  const d = [i, u];
  return ne(e) && s.set(e, d), d;
}
function js(e) {
  return e[0] !== "$";
}
function Fs(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ls(e, t) {
  return Fs(e) === Fs(t);
}
function Ns(e, t) {
  return F(t) ? t.findIndex((n) => Ls(n, e)) : N(t) && Ls(t, e) ? 0 : -1;
}
const ro = (e) => e[0] === "_" || e === "$stable",
  ms = (e) => (F(e) ? e.map(je) : [je(e)]),
  sl = (e, t, n) => {
    if (t._n) return t;
    const s = ie((...r) => ms(t(...r)), n);
    return (s._c = !1), s;
  },
  oo = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (ro(r)) continue;
      const o = e[r];
      if (N(o)) t[r] = sl(r, o, s);
      else if (o != null) {
        const i = ms(o);
        t[r] = () => i;
      }
    }
  },
  io = (e, t) => {
    const n = ms(t);
    e.slots.default = () => n;
  },
  rl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = W(t)), cn(t, "_", n)) : oo(t, (e.slots = {}));
    } else (e.slots = {}), t && io(e, t);
    cn(e.slots, xn, 1);
  },
  ol = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = ee;
    if (s.shapeFlag & 32) {
      const u = t._;
      u
        ? n && u === 1
          ? (o = !1)
          : (de(r, t), !n && u === 1 && delete r._)
        : ((o = !t.$stable), oo(t, r)),
        (i = t);
    } else t && (io(e, t), (i = { default: 1 }));
    if (o) for (const u in r) !ro(u) && !(u in i) && delete r[u];
  };
function lo() {
  return {
    app: null,
    config: {
      isNativeTag: $o,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let il = 0;
function ll(e, t) {
  return function (s, r = null) {
    N(s) || (s = Object.assign({}, s)), r != null && !ne(r) && (r = null);
    const o = lo(),
      i = new Set();
    let u = !1;
    const c = (o.app = {
      _uid: il++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Ol,
      get config() {
        return o.config;
      },
      set config(d) {},
      use(d, ...f) {
        return (
          i.has(d) ||
            (d && N(d.install)
              ? (i.add(d), d.install(c, ...f))
              : N(d) && (i.add(d), d(c, ...f))),
          c
        );
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), c;
      },
      component(d, f) {
        return f ? ((o.components[d] = f), c) : o.components[d];
      },
      directive(d, f) {
        return f ? ((o.directives[d] = f), c) : o.directives[d];
      },
      mount(d, f, h) {
        if (!u) {
          const p = X(s, r);
          return (
            (p.appContext = o),
            f && t ? t(p, d) : e(p, d, h),
            (u = !0),
            (c._container = d),
            (d.__vue_app__ = c),
            _s(p.component) || p.component.proxy
          );
        }
      },
      unmount() {
        u && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, f) {
        return (o.provides[d] = f), c;
      },
    });
    return c;
  };
}
function Vn(e, t, n, s, r = !1) {
  if (F(e)) {
    e.forEach((p, y) => Vn(p, t && (F(t) ? t[y] : t), n, s, r));
    return;
  }
  if (Ft(s) && !r) return;
  const o = s.shapeFlag & 4 ? _s(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: u, r: c } = e,
    d = t && t.r,
    f = u.refs === ee ? (u.refs = {}) : u.refs,
    h = u.setupState;
  if (
    (d != null &&
      d !== c &&
      (le(d)
        ? ((f[d] = null), V(h, d) && (h[d] = null))
        : fe(d) && (d.value = null)),
    N(c))
  )
    Ze(c, u, 12, [i, f]);
  else {
    const p = le(c),
      y = fe(c);
    if (p || y) {
      const O = () => {
        if (e.f) {
          const z = p ? (V(h, c) ? h[c] : f[c]) : c.value;
          r
            ? F(z) && ts(z, o)
            : F(z)
            ? z.includes(o) || z.push(o)
            : p
            ? ((f[c] = [o]), V(h, c) && (h[c] = f[c]))
            : ((c.value = [o]), e.k && (f[e.k] = c.value));
        } else
          p
            ? ((f[c] = i), V(h, c) && (h[c] = i))
            : y && ((c.value = i), e.k && (f[e.k] = i));
      };
      i ? ((O.id = -1), pe(O, n)) : O();
    }
  }
}
const pe = $i;
function cl(e) {
  return ul(e);
}
function ul(e, t) {
  const n = Bo();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: u,
      createComment: c,
      setText: d,
      setElementText: f,
      parentNode: h,
      nextSibling: p,
      setScopeId: y = Oe,
      insertStaticContent: O,
    } = e,
    z = (
      l,
      a,
      m,
      g = null,
      v = null,
      E = null,
      C = !1,
      w = null,
      x = !!a.dynamicChildren
    ) => {
      if (l === a) return;
      l && !Tt(l, a) && ((g = R(l)), he(l, v, E, !0), (l = null)),
        a.patchFlag === -2 && ((x = !1), (a.dynamicChildren = null));
      const { type: b, ref: S, shapeFlag: M } = a;
      switch (b) {
        case En:
          L(l, a, m, g);
          break;
        case xt:
          A(l, a, m, g);
          break;
        case zn:
          l == null && j(a, m, g, C);
          break;
        case be:
          Te(l, a, m, g, v, E, C, w, x);
          break;
        default:
          M & 1
            ? ce(l, a, m, g, v, E, C, w, x)
            : M & 6
            ? at(l, a, m, g, v, E, C, w, x)
            : (M & 64 || M & 128) && b.process(l, a, m, g, v, E, C, w, x, K);
      }
      S != null && v && Vn(S, l && l.ref, E, a || l, !a);
    },
    L = (l, a, m, g) => {
      if (l == null) s((a.el = u(a.children)), m, g);
      else {
        const v = (a.el = l.el);
        a.children !== l.children && d(v, a.children);
      }
    },
    A = (l, a, m, g) => {
      l == null ? s((a.el = c(a.children || "")), m, g) : (a.el = l.el);
    },
    j = (l, a, m, g) => {
      [l.el, l.anchor] = O(l.children, a, m, g, l.el, l.anchor);
    },
    $ = ({ el: l, anchor: a }, m, g) => {
      let v;
      for (; l && l !== a; ) (v = p(l)), s(l, m, g), (l = v);
      s(a, m, g);
    },
    q = ({ el: l, anchor: a }) => {
      let m;
      for (; l && l !== a; ) (m = p(l)), r(l), (l = m);
      r(a);
    },
    ce = (l, a, m, g, v, E, C, w, x) => {
      (C = C || a.type === "svg"),
        l == null ? _e(a, m, g, v, E, C, w, x) : ft(l, a, v, E, C, w, x);
    },
    _e = (l, a, m, g, v, E, C, w) => {
      let x, b;
      const { type: S, props: M, shapeFlag: T, transition: H, dirs: B } = l;
      if (
        ((x = l.el = i(l.type, E, M && M.is, M)),
        T & 8
          ? f(x, l.children)
          : T & 16 &&
            Ne(l.children, x, null, g, v, E && S !== "foreignObject", C, w),
        B && st(l, null, g, "created"),
        Ie(x, l, l.scopeId, C, g),
        M)
      ) {
        for (const J in M)
          J !== "value" &&
            !sn(J) &&
            o(x, J, null, M[J], E, l.children, g, v, P);
        "value" in M && o(x, "value", null, M.value),
          (b = M.onVnodeBeforeMount) && He(b, g, l);
      }
      B && st(l, null, g, "beforeMount");
      const G = (!v || (v && !v.pendingBranch)) && H && !H.persisted;
      G && H.beforeEnter(x),
        s(x, a, m),
        ((b = M && M.onVnodeMounted) || G || B) &&
          pe(() => {
            b && He(b, g, l), G && H.enter(x), B && st(l, null, g, "mounted");
          }, v);
    },
    Ie = (l, a, m, g, v) => {
      if ((m && y(l, m), g)) for (let E = 0; E < g.length; E++) y(l, g[E]);
      if (v) {
        let E = v.subTree;
        if (a === E) {
          const C = v.vnode;
          Ie(l, C, C.scopeId, C.slotScopeIds, v.parent);
        }
      }
    },
    Ne = (l, a, m, g, v, E, C, w, x = 0) => {
      for (let b = x; b < l.length; b++) {
        const S = (l[b] = w ? Qe(l[b]) : je(l[b]));
        z(null, S, a, m, g, v, E, C, w);
      }
    },
    ft = (l, a, m, g, v, E, C) => {
      const w = (a.el = l.el);
      let { patchFlag: x, dynamicChildren: b, dirs: S } = a;
      x |= l.patchFlag & 16;
      const M = l.props || ee,
        T = a.props || ee;
      let H;
      m && rt(m, !1),
        (H = T.onVnodeBeforeUpdate) && He(H, m, a, l),
        S && st(a, l, m, "beforeUpdate"),
        m && rt(m, !0);
      const B = v && a.type !== "foreignObject";
      if (
        (b
          ? Se(l.dynamicChildren, b, w, m, g, B, E)
          : C || Q(l, a, w, null, m, g, B, E, !1),
        x > 0)
      ) {
        if (x & 16) We(w, a, M, T, m, g, v);
        else if (
          (x & 2 && M.class !== T.class && o(w, "class", null, T.class, v),
          x & 4 && o(w, "style", M.style, T.style, v),
          x & 8)
        ) {
          const G = a.dynamicProps;
          for (let J = 0; J < G.length; J++) {
            const re = G[J],
              xe = M[re],
              ht = T[re];
            (ht !== xe || re === "value") &&
              o(w, re, xe, ht, v, l.children, m, g, P);
          }
        }
        x & 1 && l.children !== a.children && f(w, a.children);
      } else !C && b == null && We(w, a, M, T, m, g, v);
      ((H = T.onVnodeUpdated) || S) &&
        pe(() => {
          H && He(H, m, a, l), S && st(a, l, m, "updated");
        }, g);
    },
    Se = (l, a, m, g, v, E, C) => {
      for (let w = 0; w < a.length; w++) {
        const x = l[w],
          b = a[w],
          S =
            x.el && (x.type === be || !Tt(x, b) || x.shapeFlag & 70)
              ? h(x.el)
              : m;
        z(x, b, S, null, g, v, E, C, !0);
      }
    },
    We = (l, a, m, g, v, E, C) => {
      if (m !== g) {
        if (m !== ee)
          for (const w in m)
            !sn(w) && !(w in g) && o(l, w, m[w], null, C, a.children, v, E, P);
        for (const w in g) {
          if (sn(w)) continue;
          const x = g[w],
            b = m[w];
          x !== b && w !== "value" && o(l, w, b, x, C, a.children, v, E, P);
        }
        "value" in g && o(l, "value", m.value, g.value);
      }
    },
    Te = (l, a, m, g, v, E, C, w, x) => {
      const b = (a.el = l ? l.el : u("")),
        S = (a.anchor = l ? l.anchor : u(""));
      let { patchFlag: M, dynamicChildren: T, slotScopeIds: H } = a;
      H && (w = w ? w.concat(H) : H),
        l == null
          ? (s(b, m, g), s(S, m, g), Ne(a.children, m, S, v, E, C, w, x))
          : M > 0 && M & 64 && T && l.dynamicChildren
          ? (Se(l.dynamicChildren, T, m, v, E, C, w),
            (a.key != null || (v && a === v.subTree)) && co(l, a, !0))
          : Q(l, a, m, S, v, E, C, w, x);
    },
    at = (l, a, m, g, v, E, C, w, x) => {
      (a.slotScopeIds = w),
        l == null
          ? a.shapeFlag & 512
            ? v.ctx.activate(a, m, g, C, x)
            : tt(a, m, g, v, E, C, x)
          : It(l, a, x);
    },
    tt = (l, a, m, g, v, E, C) => {
      const w = (l.component = bl(l, g, v));
      if ((Xr(l) && (w.ctx.renderer = K), yl(w), w.asyncDep)) {
        if ((v && v.registerDep(w, se), !l.el)) {
          const x = (w.subTree = X(xt));
          A(null, x, a, m);
        }
        return;
      }
      se(w, l, a, m, v, E, C);
    },
    It = (l, a, m) => {
      const g = (a.component = l.component);
      if (Ii(l, a, m))
        if (g.asyncDep && !g.asyncResolved) {
          Z(g, a, m);
          return;
        } else (g.next = a), Ci(g.update), g.update();
      else (a.el = l.el), (g.vnode = a);
    },
    se = (l, a, m, g, v, E, C) => {
      const w = () => {
          if (l.isMounted) {
            let { next: S, bu: M, u: T, parent: H, vnode: B } = l,
              G = S,
              J;
            rt(l, !1),
              S ? ((S.el = B.el), Z(l, S, C)) : (S = B),
              M && Pn(M),
              (J = S.props && S.props.onVnodeBeforeUpdate) && He(J, H, S, B),
              rt(l, !0);
            const re = On(l),
              xe = l.subTree;
            (l.subTree = re),
              z(xe, re, h(xe.el), R(xe), l, v, E),
              (S.el = re.el),
              G === null && Si(l, re.el),
              T && pe(T, v),
              (J = S.props && S.props.onVnodeUpdated) &&
                pe(() => He(J, H, S, B), v);
          } else {
            let S;
            const { el: M, props: T } = a,
              { bm: H, m: B, parent: G } = l,
              J = Ft(a);
            if (
              (rt(l, !1),
              H && Pn(H),
              !J && (S = T && T.onVnodeBeforeMount) && He(S, G, a),
              rt(l, !0),
              M && k)
            ) {
              const re = () => {
                (l.subTree = On(l)), k(M, l.subTree, l, v, null);
              };
              J
                ? a.type.__asyncLoader().then(() => !l.isUnmounted && re())
                : re();
            } else {
              const re = (l.subTree = On(l));
              z(null, re, m, g, l, v, E), (a.el = re.el);
            }
            if ((B && pe(B, v), !J && (S = T && T.onVnodeMounted))) {
              const re = a;
              pe(() => He(S, G, re), v);
            }
            (a.shapeFlag & 256 ||
              (G && Ft(G.vnode) && G.vnode.shapeFlag & 256)) &&
              l.a &&
              pe(l.a, v),
              (l.isMounted = !0),
              (a = m = g = null);
          }
        },
        x = (l.effect = new os(w, () => hs(b), l.scope)),
        b = (l.update = () => x.run());
      (b.id = l.uid), rt(l, !0), b();
    },
    Z = (l, a, m) => {
      a.component = l;
      const g = l.vnode.props;
      (l.vnode = a),
        (l.next = null),
        nl(l, a.props, g, m),
        ol(l, a.children, m),
        At(),
        Ss(),
        zt();
    },
    Q = (l, a, m, g, v, E, C, w, x = !1) => {
      const b = l && l.children,
        S = l ? l.shapeFlag : 0,
        M = a.children,
        { patchFlag: T, shapeFlag: H } = a;
      if (T > 0) {
        if (T & 128) {
          nt(b, M, m, g, v, E, C, w, x);
          return;
        } else if (T & 256) {
          we(b, M, m, g, v, E, C, w, x);
          return;
        }
      }
      H & 8
        ? (S & 16 && P(b, v, E), M !== b && f(m, M))
        : S & 16
        ? H & 16
          ? nt(b, M, m, g, v, E, C, w, x)
          : P(b, v, E, !0)
        : (S & 8 && f(m, ""), H & 16 && Ne(M, m, g, v, E, C, w, x));
    },
    we = (l, a, m, g, v, E, C, w, x) => {
      (l = l || _t), (a = a || _t);
      const b = l.length,
        S = a.length,
        M = Math.min(b, S);
      let T;
      for (T = 0; T < M; T++) {
        const H = (a[T] = x ? Qe(a[T]) : je(a[T]));
        z(l[T], H, m, null, v, E, C, w, x);
      }
      b > S ? P(l, v, E, !0, !1, M) : Ne(a, m, g, v, E, C, w, x, M);
    },
    nt = (l, a, m, g, v, E, C, w, x) => {
      let b = 0;
      const S = a.length;
      let M = l.length - 1,
        T = S - 1;
      for (; b <= M && b <= T; ) {
        const H = l[b],
          B = (a[b] = x ? Qe(a[b]) : je(a[b]));
        if (Tt(H, B)) z(H, B, m, null, v, E, C, w, x);
        else break;
        b++;
      }
      for (; b <= M && b <= T; ) {
        const H = l[M],
          B = (a[T] = x ? Qe(a[T]) : je(a[T]));
        if (Tt(H, B)) z(H, B, m, null, v, E, C, w, x);
        else break;
        M--, T--;
      }
      if (b > M) {
        if (b <= T) {
          const H = T + 1,
            B = H < S ? a[H].el : g;
          for (; b <= T; )
            z(null, (a[b] = x ? Qe(a[b]) : je(a[b])), m, B, v, E, C, w, x), b++;
        }
      } else if (b > T) for (; b <= M; ) he(l[b], v, E, !0), b++;
      else {
        const H = b,
          B = b,
          G = new Map();
        for (b = B; b <= T; b++) {
          const ve = (a[b] = x ? Qe(a[b]) : je(a[b]));
          ve.key != null && G.set(ve.key, b);
        }
        let J,
          re = 0;
        const xe = T - B + 1;
        let ht = !1,
          ws = 0;
        const St = new Array(xe);
        for (b = 0; b < xe; b++) St[b] = 0;
        for (b = H; b <= M; b++) {
          const ve = l[b];
          if (re >= xe) {
            he(ve, v, E, !0);
            continue;
          }
          let $e;
          if (ve.key != null) $e = G.get(ve.key);
          else
            for (J = B; J <= T; J++)
              if (St[J - B] === 0 && Tt(ve, a[J])) {
                $e = J;
                break;
              }
          $e === void 0
            ? he(ve, v, E, !0)
            : ((St[$e - B] = b + 1),
              $e >= ws ? (ws = $e) : (ht = !0),
              z(ve, a[$e], m, null, v, E, C, w, x),
              re++);
        }
        const Es = ht ? fl(St) : _t;
        for (J = Es.length - 1, b = xe - 1; b >= 0; b--) {
          const ve = B + b,
            $e = a[ve],
            xs = ve + 1 < S ? a[ve + 1].el : g;
          St[b] === 0
            ? z(null, $e, m, xs, v, E, C, w, x)
            : ht && (J < 0 || b !== Es[J] ? Ee($e, m, xs, 2) : J--);
        }
      }
    },
    Ee = (l, a, m, g, v = null) => {
      const { el: E, type: C, transition: w, children: x, shapeFlag: b } = l;
      if (b & 6) {
        Ee(l.component.subTree, a, m, g);
        return;
      }
      if (b & 128) {
        l.suspense.move(a, m, g);
        return;
      }
      if (b & 64) {
        C.move(l, a, m, K);
        return;
      }
      if (C === be) {
        s(E, a, m);
        for (let M = 0; M < x.length; M++) Ee(x[M], a, m, g);
        s(l.anchor, a, m);
        return;
      }
      if (C === zn) {
        $(l, a, m);
        return;
      }
      if (g !== 2 && b & 1 && w)
        if (g === 0) w.beforeEnter(E), s(E, a, m), pe(() => w.enter(E), v);
        else {
          const { leave: M, delayLeave: T, afterLeave: H } = w,
            B = () => s(E, a, m),
            G = () => {
              M(E, () => {
                B(), H && H();
              });
            };
          T ? T(E, B, G) : G();
        }
      else s(E, a, m);
    },
    he = (l, a, m, g = !1, v = !1) => {
      const {
        type: E,
        props: C,
        ref: w,
        children: x,
        dynamicChildren: b,
        shapeFlag: S,
        patchFlag: M,
        dirs: T,
      } = l;
      if ((w != null && Vn(w, null, m, l, !0), S & 256)) {
        a.ctx.deactivate(l);
        return;
      }
      const H = S & 1 && T,
        B = !Ft(l);
      let G;
      if ((B && (G = C && C.onVnodeBeforeUnmount) && He(G, a, l), S & 6))
        _(l.component, m, g);
      else {
        if (S & 128) {
          l.suspense.unmount(m, g);
          return;
        }
        H && st(l, null, a, "beforeUnmount"),
          S & 64
            ? l.type.remove(l, a, m, v, K, g)
            : b && (E !== be || (M > 0 && M & 64))
            ? P(b, a, m, !1, !0)
            : ((E === be && M & 384) || (!v && S & 16)) && P(x, a, m),
          g && dt(l);
      }
      ((B && (G = C && C.onVnodeUnmounted)) || H) &&
        pe(() => {
          G && He(G, a, l), H && st(l, null, a, "unmounted");
        }, m);
    },
    dt = (l) => {
      const { type: a, el: m, anchor: g, transition: v } = l;
      if (a === be) {
        Jt(m, g);
        return;
      }
      if (a === zn) {
        q(l);
        return;
      }
      const E = () => {
        r(m), v && !v.persisted && v.afterLeave && v.afterLeave();
      };
      if (l.shapeFlag & 1 && v && !v.persisted) {
        const { leave: C, delayLeave: w } = v,
          x = () => C(m, E);
        w ? w(l.el, E, x) : x();
      } else E();
    },
    Jt = (l, a) => {
      let m;
      for (; l !== a; ) (m = p(l)), r(l), (l = m);
      r(a);
    },
    _ = (l, a, m) => {
      const { bum: g, scope: v, update: E, subTree: C, um: w } = l;
      g && Pn(g),
        v.stop(),
        E && ((E.active = !1), he(C, l, a, m)),
        w && pe(w, a),
        pe(() => {
          l.isUnmounted = !0;
        }, a),
        a &&
          a.pendingBranch &&
          !a.isUnmounted &&
          l.asyncDep &&
          !l.asyncResolved &&
          l.suspenseId === a.pendingId &&
          (a.deps--, a.deps === 0 && a.resolve());
    },
    P = (l, a, m, g = !1, v = !1, E = 0) => {
      for (let C = E; C < l.length; C++) he(l[C], a, m, g, v);
    },
    R = (l) =>
      l.shapeFlag & 6
        ? R(l.component.subTree)
        : l.shapeFlag & 128
        ? l.suspense.next()
        : p(l.anchor || l.el),
    I = (l, a, m) => {
      l == null
        ? a._vnode && he(a._vnode, null, null, !0)
        : z(a._vnode || null, l, a, null, null, null, m),
        Ss(),
        Ur(),
        (a._vnode = l);
    },
    K = {
      p: z,
      um: he,
      m: Ee,
      r: dt,
      mt: tt,
      mc: Ne,
      pc: Q,
      pbc: Se,
      n: R,
      o: e,
    };
  let te, k;
  return (
    t && ([te, k] = t(K)), { render: I, hydrate: te, createApp: ll(I, te) }
  );
}
function rt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function co(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (F(s) && F(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let u = r[o];
      u.shapeFlag & 1 &&
        !u.dynamicChildren &&
        ((u.patchFlag <= 0 || u.patchFlag === 32) &&
          ((u = r[o] = Qe(r[o])), (u.el = i.el)),
        n || co(i, u)),
        u.type === En && (u.el = i.el);
    }
}
function fl(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, u;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const d = e[s];
    if (d !== 0) {
      if (((r = n[n.length - 1]), e[r] < d)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (u = (o + i) >> 1), e[n[u]] < d ? (o = u + 1) : (i = u);
      d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
const al = (e) => e.__isTeleport,
  be = Symbol(void 0),
  En = Symbol(void 0),
  xt = Symbol(void 0),
  zn = Symbol(void 0),
  Nt = [];
let Pe = null;
function ze(e = !1) {
  Nt.push((Pe = e ? null : []));
}
function dl() {
  Nt.pop(), (Pe = Nt[Nt.length - 1] || null);
}
let Wt = 1;
function ks(e) {
  Wt += e;
}
function uo(e) {
  return (
    (e.dynamicChildren = Wt > 0 ? Pe || _t : null),
    dl(),
    Wt > 0 && Pe && Pe.push(e),
    e
  );
}
function Le(e, t, n, s, r, o) {
  return uo(D(e, t, n, s, r, o, !0));
}
function hl(e, t, n, s, r) {
  return uo(X(e, t, n, s, r, !0));
}
function dn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const xn = "__vInternal",
  fo = ({ key: e }) => e ?? null,
  ln = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? le(e) || fe(e) || N(e)
        ? { i: me, r: e, k: t, f: !!n }
        : e
      : null;
function D(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === be ? 0 : 1,
  i = !1,
  u = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fo(t),
    ref: t && ln(t),
    scopeId: yn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: me,
  };
  return (
    u
      ? (gs(c, n), o & 128 && e.normalize(c))
      : n && (c.shapeFlag |= le(n) ? 8 : 16),
    Wt > 0 &&
      !i &&
      Pe &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      Pe.push(c),
    c
  );
}
const X = pl;
function pl(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Yi) && (e = xt), dn(e))) {
    const u = Rt(e, t, !0);
    return (
      n && gs(u, n),
      Wt > 0 &&
        !o &&
        Pe &&
        (u.shapeFlag & 6 ? (Pe[Pe.indexOf(e)] = u) : Pe.push(u)),
      (u.patchFlag |= -2),
      u
    );
  }
  if ((Rl(e) && (e = e.__vccOpts), t)) {
    t = ml(t);
    let { class: u, style: c } = t;
    u && !le(u) && (t.class = Gn(u)),
      ne(c) && (Tr(c) && !F(c) && (c = de({}, c)), (t.style = Zn(c)));
  }
  const i = le(e) ? 1 : Ti(e) ? 128 : al(e) ? 64 : ne(e) ? 4 : N(e) ? 2 : 0;
  return D(e, t, n, s, r, i, o, !0);
}
function ml(e) {
  return e ? (Tr(e) || xn in e ? de({}, e) : e) : null;
}
function Rt(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    u = t ? gl(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && fo(u),
    ref:
      t && t.ref ? (n && r ? (F(r) ? r.concat(ln(t)) : [r, ln(t)]) : ln(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== be ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Rt(e.ssContent),
    ssFallback: e.ssFallback && Rt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function U(e = " ", t = 0) {
  return X(En, null, e, t);
}
function je(e) {
  return e == null || typeof e == "boolean"
    ? X(xt)
    : F(e)
    ? X(be, null, e.slice())
    : typeof e == "object"
    ? Qe(e)
    : X(En, null, String(e));
}
function Qe(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Rt(e);
}
function gs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (F(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), gs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(xn in t)
        ? (t._ctx = me)
        : r === 3 &&
          me &&
          (me.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    N(t)
      ? ((t = { default: t, _ctx: me }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [U(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function gl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Gn([t.class, s.class]));
      else if (r === "style") t.style = Zn([t.style, s.style]);
      else if (pn(r)) {
        const o = t[r],
          i = s[r];
        i &&
          o !== i &&
          !(F(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function He(e, t, n, s = null) {
  Me(e, t, 7, [n, s]);
}
const _l = lo();
let vl = 0;
function bl(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || _l,
    o = {
      uid: vl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new wr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: so(s, r),
      emitsOptions: Vr(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ee,
      inheritAttrs: s.inheritAttrs,
      ctx: ee,
      data: ee,
      props: ee,
      attrs: ee,
      slots: ee,
      refs: ee,
      setupState: ee,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Mi.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let oe = null;
const Ct = (e) => {
    (oe = e), e.scope.on();
  },
  ut = () => {
    oe && oe.scope.off(), (oe = null);
  };
function ao(e) {
  return e.vnode.shapeFlag & 4;
}
let qt = !1;
function yl(e, t = !1) {
  qt = t;
  const { props: n, children: s } = e.vnode,
    r = ao(e);
  tl(e, n, r, t), rl(e, s);
  const o = r ? wl(e, t) : void 0;
  return (qt = !1), o;
}
function wl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = fs(new Proxy(e.ctx, Qi)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? xl(e) : null);
    Ct(e), At();
    const o = Ze(s, e, 0, [e.props, r]);
    if ((zt(), ut(), _r(o))) {
      if ((o.then(ut, ut), t))
        return o
          .then((i) => {
            Bs(e, i, t);
          })
          .catch((i) => {
            vn(i, e, 0);
          });
      e.asyncDep = o;
    } else Bs(e, o, t);
  } else ho(e, t);
}
function Bs(e, t, n) {
  N(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ne(t) && (e.setupState = Lr(t)),
    ho(e, n);
}
let Ds;
function ho(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ds && !s.render) {
      const r = s.template || ps(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: u, compilerOptions: c } = s,
          d = de(de({ isCustomElement: o, delimiters: u }, i), c);
        s.render = Ds(r, d);
      }
    }
    e.render = s.render || Oe;
  }
  Ct(e), At(), Ji(e), zt(), ut();
}
function El(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ge(e, "get", "$attrs"), t[n];
    },
  });
}
function xl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = El(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function _s(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Lr(fs(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Lt) return Lt[n](e);
        },
        has(t, n) {
          return n in t || n in Lt;
        },
      }))
    );
}
function Rl(e) {
  return N(e) && "__vccOpts" in e;
}
const ye = (e, t) => Ei(e, t, qt);
function po(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? ne(t) && !F(t)
      ? dn(t)
        ? X(e, null, [t])
        : X(e, t)
      : X(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && dn(n) && (n = [n]),
      X(e, t, n));
}
const Cl = Symbol(""),
  Pl = () => Ue(Cl),
  Ol = "3.2.47",
  Ml = "http://www.w3.org/2000/svg",
  lt = typeof document < "u" ? document : null,
  Us = lt && lt.createElement("template"),
  Al = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? lt.createElementNS(Ml, e)
        : lt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => lt.createTextNode(e),
    createComment: (e) => lt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => lt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        Us.innerHTML = s ? `<svg>${e}</svg>` : e;
        const u = Us.content;
        if (s) {
          const c = u.firstChild;
          for (; c.firstChild; ) u.appendChild(c.firstChild);
          u.removeChild(c);
        }
        t.insertBefore(u, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function zl(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Il(e, t, n) {
  const s = e.style,
    r = le(n);
  if (n && !r) {
    if (t && !le(t)) for (const o in t) n[o] == null && Wn(s, o, "");
    for (const o in n) Wn(s, o, n[o]);
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (s.display = o);
  }
}
const Ks = /\s*!important$/;
function Wn(e, t, n) {
  if (F(n)) n.forEach((s) => Wn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Sl(e, t);
    Ks.test(n)
      ? e.setProperty(Mt(s), n.replace(Ks, ""), "important")
      : (e[s] = n);
  }
}
const Vs = ["Webkit", "Moz", "ms"],
  In = {};
function Sl(e, t) {
  const n = In[t];
  if (n) return n;
  let s = wt(t);
  if (s !== "filter" && s in e) return (In[t] = s);
  s = yr(s);
  for (let r = 0; r < Vs.length; r++) {
    const o = Vs[r] + s;
    if (o in e) return (In[t] = o);
  }
  return t;
}
const Ws = "http://www.w3.org/1999/xlink";
function Tl(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Ws, t.slice(6, t.length))
      : e.setAttributeNS(Ws, t, n);
  else {
    const o = So(t);
    n == null || (o && !pr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function $l(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), (e[t] = n ?? "");
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const c = n ?? "";
    (e.value !== c || e.tagName === "OPTION") && (e.value = c),
      n == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = pr(n))
      : n == null && c === "string"
      ? ((n = ""), (u = !0))
      : c === "number" && ((n = 0), (u = !0));
  }
  try {
    e[t] = n;
  } catch {}
  u && e.removeAttribute(t);
}
function Hl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function jl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Fl(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [u, c] = Ll(t);
    if (s) {
      const d = (o[t] = Bl(s, r));
      Hl(e, u, d, c);
    } else i && (jl(e, u, i, c), (o[t] = void 0));
  }
}
const qs = /(?:Once|Passive|Capture)$/;
function Ll(e) {
  let t;
  if (qs.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(qs)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Mt(e.slice(2)), t];
}
let Sn = 0;
const Nl = Promise.resolve(),
  kl = () => Sn || (Nl.then(() => (Sn = 0)), (Sn = Date.now()));
function Bl(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Me(Dl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = kl()), n;
}
function Dl(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Ys = /^on[a-z]/,
  Ul = (e, t, n, s, r = !1, o, i, u, c) => {
    t === "class"
      ? zl(e, s, r)
      : t === "style"
      ? Il(e, n, s)
      : pn(t)
      ? es(t) || Fl(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Kl(e, t, s, r)
        )
      ? $l(e, t, s, o, i, u, c)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Tl(e, t, s, r));
  };
function Kl(e, t, n, s) {
  return s
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && Ys.test(t) && N(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (Ys.test(t) && le(n))
    ? !1
    : t in e;
}
const Vl = de({ patchProp: Ul }, Al);
let Qs;
function Wl() {
  return Qs || (Qs = cl(Vl));
}
const ql = (...e) => {
  const t = Wl().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = Yl(s);
      if (!r) return;
      const o = t._component;
      !N(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = "");
      const i = n(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Yl(e) {
  return le(e) ? document.querySelector(e) : e;
}
var Ql = !1;
/*!
 * pinia v2.0.30
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Jl = Symbol();
var Js;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(Js || (Js = {}));
function Xl() {
  const e = Do(!0),
    t = e.run(() => jr({}));
  let n = [],
    s = [];
  const r = fs({
    install(o) {
      (r._a = o),
        o.provide(Jl, r),
        (o.config.globalProperties.$pinia = r),
        s.forEach((i) => n.push(i)),
        (s = []);
    },
    use(o) {
      return !this._a && !Ql ? s.push(o) : n.push(o), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return r;
}
const Zl = "/maybelline-project/assets/logo-da9b9095.svg";
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const mt = typeof window < "u";
function Gl(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Y = Object.assign;
function Tn(e, t) {
  const n = {};
  for (const s in t) {
    const r = t[s];
    n[s] = Ae(r) ? r.map(e) : e(r);
  }
  return n;
}
const kt = () => {},
  Ae = Array.isArray,
  ec = /\/$/,
  tc = (e) => e.replace(ec, "");
function $n(e, t, n = "/") {
  let s,
    r = {},
    o = "",
    i = "";
  const u = t.indexOf("#");
  let c = t.indexOf("?");
  return (
    u < c && u >= 0 && (c = -1),
    c > -1 &&
      ((s = t.slice(0, c)),
      (o = t.slice(c + 1, u > -1 ? u : t.length)),
      (r = e(o))),
    u > -1 && ((s = s || t.slice(0, u)), (i = t.slice(u, t.length))),
    (s = oc(s ?? t, n)),
    { fullPath: s + (o && "?") + o + i, path: s, query: r, hash: i }
  );
}
function nc(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Xs(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function sc(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    s > -1 &&
    s === r &&
    Pt(t.matched[s], n.matched[r]) &&
    mo(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Pt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function mo(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!rc(e[n], t[n])) return !1;
  return !0;
}
function rc(e, t) {
  return Ae(e) ? Zs(e, t) : Ae(t) ? Zs(t, e) : e === t;
}
function Zs(e, t) {
  return Ae(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function oc(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    s = e.split("/");
  let r = n.length - 1,
    o,
    i;
  for (o = 0; o < s.length; o++)
    if (((i = s[o]), i !== "."))
      if (i === "..") r > 1 && r--;
      else break;
  return (
    n.slice(0, r).join("/") +
    "/" +
    s.slice(o - (o === s.length ? 1 : 0)).join("/")
  );
}
var Yt;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Yt || (Yt = {}));
var Bt;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Bt || (Bt = {}));
function ic(e) {
  if (!e)
    if (mt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), tc(e);
}
const lc = /^[^#]+#/;
function cc(e, t) {
  return e.replace(lc, "#") + t;
}
function uc(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const Rn = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function fc(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = uc(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Gs(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const qn = new Map();
function ac(e, t) {
  qn.set(e, t);
}
function dc(e) {
  const t = qn.get(e);
  return qn.delete(e), t;
}
let hc = () => location.protocol + "//" + location.host;
function go(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let u = r.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = r.slice(u);
    return c[0] !== "/" && (c = "/" + c), Xs(c, "");
  }
  return Xs(n, e) + s + r;
}
function pc(e, t, n, s) {
  let r = [],
    o = [],
    i = null;
  const u = ({ state: p }) => {
    const y = go(e, location),
      O = n.value,
      z = t.value;
    let L = 0;
    if (p) {
      if (((n.value = y), (t.value = p), i && i === O)) {
        i = null;
        return;
      }
      L = z ? p.position - z.position : 0;
    } else s(y);
    r.forEach((A) => {
      A(n.value, O, {
        delta: L,
        type: Yt.pop,
        direction: L ? (L > 0 ? Bt.forward : Bt.back) : Bt.unknown,
      });
    });
  };
  function c() {
    i = n.value;
  }
  function d(p) {
    r.push(p);
    const y = () => {
      const O = r.indexOf(p);
      O > -1 && r.splice(O, 1);
    };
    return o.push(y), y;
  }
  function f() {
    const { history: p } = window;
    p.state && p.replaceState(Y({}, p.state, { scroll: Rn() }), "");
  }
  function h() {
    for (const p of o) p();
    (o = []),
      window.removeEventListener("popstate", u),
      window.removeEventListener("beforeunload", f);
  }
  return (
    window.addEventListener("popstate", u),
    window.addEventListener("beforeunload", f),
    { pauseListeners: c, listen: d, destroy: h }
  );
}
function er(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Rn() : null,
  };
}
function mc(e) {
  const { history: t, location: n } = window,
    s = { value: go(e, n) },
    r = { value: t.state };
  r.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(c, d, f) {
    const h = e.indexOf("#"),
      p =
        h > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(h)) + c
          : hc() + e + c;
    try {
      t[f ? "replaceState" : "pushState"](d, "", p), (r.value = d);
    } catch (y) {
      console.error(y), n[f ? "replace" : "assign"](p);
    }
  }
  function i(c, d) {
    const f = Y({}, t.state, er(r.value.back, c, r.value.forward, !0), d, {
      position: r.value.position,
    });
    o(c, f, !0), (s.value = c);
  }
  function u(c, d) {
    const f = Y({}, r.value, t.state, { forward: c, scroll: Rn() });
    o(f.current, f, !0);
    const h = Y({}, er(s.value, c, null), { position: f.position + 1 }, d);
    o(c, h, !1), (s.value = c);
  }
  return { location: s, state: r, push: u, replace: i };
}
function gc(e) {
  e = ic(e);
  const t = mc(e),
    n = pc(e, t.state, t.location, t.replace);
  function s(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const r = Y(
    { location: "", base: e, go: s, createHref: cc.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  );
}
function _c(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function _o(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ye = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  vo = Symbol("");
var tr;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(tr || (tr = {}));
function Ot(e, t) {
  return Y(new Error(), { type: e, [vo]: !0 }, t);
}
function ke(e, t) {
  return e instanceof Error && vo in e && (t == null || !!(e.type & t));
}
const nr = "[^/]+?",
  vc = { sensitive: !1, strict: !1, start: !0, end: !0 },
  bc = /[.+*?^${}()[\]/\\]/g;
function yc(e, t) {
  const n = Y({}, vc, t),
    s = [];
  let r = n.start ? "^" : "";
  const o = [];
  for (const d of e) {
    const f = d.length ? [] : [90];
    n.strict && !d.length && (r += "/");
    for (let h = 0; h < d.length; h++) {
      const p = d[h];
      let y = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        h || (r += "/"), (r += p.value.replace(bc, "\\$&")), (y += 40);
      else if (p.type === 1) {
        const { value: O, repeatable: z, optional: L, regexp: A } = p;
        o.push({ name: O, repeatable: z, optional: L });
        const j = A || nr;
        if (j !== nr) {
          y += 10;
          try {
            new RegExp(`(${j})`);
          } catch (q) {
            throw new Error(
              `Invalid custom RegExp for param "${O}" (${j}): ` + q.message
            );
          }
        }
        let $ = z ? `((?:${j})(?:/(?:${j}))*)` : `(${j})`;
        h || ($ = L && d.length < 2 ? `(?:/${$})` : "/" + $),
          L && ($ += "?"),
          (r += $),
          (y += 20),
          L && (y += -8),
          z && (y += -20),
          j === ".*" && (y += -50);
      }
      f.push(y);
    }
    s.push(f);
  }
  if (n.strict && n.end) {
    const d = s.length - 1;
    s[d][s[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function u(d) {
    const f = d.match(i),
      h = {};
    if (!f) return null;
    for (let p = 1; p < f.length; p++) {
      const y = f[p] || "",
        O = o[p - 1];
      h[O.name] = y && O.repeatable ? y.split("/") : y;
    }
    return h;
  }
  function c(d) {
    let f = "",
      h = !1;
    for (const p of e) {
      (!h || !f.endsWith("/")) && (f += "/"), (h = !1);
      for (const y of p)
        if (y.type === 0) f += y.value;
        else if (y.type === 1) {
          const { value: O, repeatable: z, optional: L } = y,
            A = O in d ? d[O] : "";
          if (Ae(A) && !z)
            throw new Error(
              `Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`
            );
          const j = Ae(A) ? A.join("/") : A;
          if (!j)
            if (L)
              p.length < 2 &&
                (f.endsWith("/") ? (f = f.slice(0, -1)) : (h = !0));
            else throw new Error(`Missing required param "${O}"`);
          f += j;
        }
    }
    return f || "/";
  }
  return { re: i, score: s, keys: o, parse: u, stringify: c };
}
function wc(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Ec(e, t) {
  let n = 0;
  const s = e.score,
    r = t.score;
  for (; n < s.length && n < r.length; ) {
    const o = wc(s[n], r[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (sr(s)) return 1;
    if (sr(r)) return -1;
  }
  return r.length - s.length;
}
function sr(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const xc = { type: 0, value: "" },
  Rc = /[a-zA-Z0-9_]/;
function Cc(e) {
  if (!e) return [[]];
  if (e === "/") return [[xc]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(y) {
    throw new Error(`ERR (${n})/"${d}": ${y}`);
  }
  let n = 0,
    s = n;
  const r = [];
  let o;
  function i() {
    o && r.push(o), (o = []);
  }
  let u = 0,
    c,
    d = "",
    f = "";
  function h() {
    d &&
      (n === 0
        ? o.push({ type: 0, value: d })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (c === "*" || c === "+") &&
            t(
              `A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: d,
            regexp: f,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : t("Invalid state to consume buffer"),
      (d = ""));
  }
  function p() {
    d += c;
  }
  for (; u < e.length; ) {
    if (((c = e[u++]), c === "\\" && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (d && h(), i()) : c === ":" ? (h(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = s);
        break;
      case 1:
        c === "("
          ? (n = 2)
          : Rc.test(c)
          ? p()
          : (h(), (n = 0), c !== "*" && c !== "?" && c !== "+" && u--);
        break;
      case 2:
        c === ")"
          ? f[f.length - 1] == "\\"
            ? (f = f.slice(0, -1) + c)
            : (n = 3)
          : (f += c);
        break;
      case 3:
        h(), (n = 0), c !== "*" && c !== "?" && c !== "+" && u--, (f = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), h(), i(), r;
}
function Pc(e, t, n) {
  const s = yc(Cc(e.path), n),
    r = Y(s, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Oc(e, t) {
  const n = [],
    s = new Map();
  t = ir({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(f) {
    return s.get(f);
  }
  function o(f, h, p) {
    const y = !p,
      O = Mc(f);
    O.aliasOf = p && p.record;
    const z = ir(t, f),
      L = [O];
    if ("alias" in f) {
      const $ = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const q of $)
        L.push(
          Y({}, O, {
            components: p ? p.record.components : O.components,
            path: q,
            aliasOf: p ? p.record : O,
          })
        );
    }
    let A, j;
    for (const $ of L) {
      const { path: q } = $;
      if (h && q[0] !== "/") {
        const ce = h.record.path,
          _e = ce[ce.length - 1] === "/" ? "" : "/";
        $.path = h.record.path + (q && _e + q);
      }
      if (
        ((A = Pc($, h, z)),
        p
          ? p.alias.push(A)
          : ((j = j || A),
            j !== A && j.alias.push(A),
            y && f.name && !or(A) && i(f.name)),
        O.children)
      ) {
        const ce = O.children;
        for (let _e = 0; _e < ce.length; _e++)
          o(ce[_e], A, p && p.children[_e]);
      }
      (p = p || A),
        ((A.record.components && Object.keys(A.record.components).length) ||
          A.record.name ||
          A.record.redirect) &&
          c(A);
    }
    return j
      ? () => {
          i(j);
        }
      : kt;
  }
  function i(f) {
    if (_o(f)) {
      const h = s.get(f);
      h &&
        (s.delete(f),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(i),
        h.alias.forEach(i));
    } else {
      const h = n.indexOf(f);
      h > -1 &&
        (n.splice(h, 1),
        f.record.name && s.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function u() {
    return n;
  }
  function c(f) {
    let h = 0;
    for (
      ;
      h < n.length &&
      Ec(f, n[h]) >= 0 &&
      (f.record.path !== n[h].record.path || !bo(f, n[h]));

    )
      h++;
    n.splice(h, 0, f), f.record.name && !or(f) && s.set(f.record.name, f);
  }
  function d(f, h) {
    let p,
      y = {},
      O,
      z;
    if ("name" in f && f.name) {
      if (((p = s.get(f.name)), !p)) throw Ot(1, { location: f });
      (z = p.record.name),
        (y = Y(
          rr(
            h.params,
            p.keys.filter((j) => !j.optional).map((j) => j.name)
          ),
          f.params &&
            rr(
              f.params,
              p.keys.map((j) => j.name)
            )
        )),
        (O = p.stringify(y));
    } else if ("path" in f)
      (O = f.path),
        (p = n.find((j) => j.re.test(O))),
        p && ((y = p.parse(O)), (z = p.record.name));
    else {
      if (((p = h.name ? s.get(h.name) : n.find((j) => j.re.test(h.path))), !p))
        throw Ot(1, { location: f, currentLocation: h });
      (z = p.record.name),
        (y = Y({}, h.params, f.params)),
        (O = p.stringify(y));
    }
    const L = [];
    let A = p;
    for (; A; ) L.unshift(A.record), (A = A.parent);
    return { name: z, path: O, params: y, matched: L, meta: zc(L) };
  }
  return (
    e.forEach((f) => o(f)),
    {
      addRoute: o,
      resolve: d,
      removeRoute: i,
      getRoutes: u,
      getRecordMatcher: r,
    }
  );
}
function rr(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function Mc(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Ac(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function Ac(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "boolean" ? n : n[s];
  return t;
}
function or(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function zc(e) {
  return e.reduce((t, n) => Y(t, n.meta), {});
}
function ir(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function bo(e, t) {
  return t.children.some((n) => n === e || bo(e, n));
}
const yo = /#/g,
  Ic = /&/g,
  Sc = /\//g,
  Tc = /=/g,
  $c = /\?/g,
  wo = /\+/g,
  Hc = /%5B/g,
  jc = /%5D/g,
  Eo = /%5E/g,
  Fc = /%60/g,
  xo = /%7B/g,
  Lc = /%7C/g,
  Ro = /%7D/g,
  Nc = /%20/g;
function vs(e) {
  return encodeURI("" + e)
    .replace(Lc, "|")
    .replace(Hc, "[")
    .replace(jc, "]");
}
function kc(e) {
  return vs(e).replace(xo, "{").replace(Ro, "}").replace(Eo, "^");
}
function Yn(e) {
  return vs(e)
    .replace(wo, "%2B")
    .replace(Nc, "+")
    .replace(yo, "%23")
    .replace(Ic, "%26")
    .replace(Fc, "`")
    .replace(xo, "{")
    .replace(Ro, "}")
    .replace(Eo, "^");
}
function Bc(e) {
  return Yn(e).replace(Tc, "%3D");
}
function Dc(e) {
  return vs(e).replace(yo, "%23").replace($c, "%3F");
}
function Uc(e) {
  return e == null ? "" : Dc(e).replace(Sc, "%2F");
}
function hn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Kc(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < s.length; ++r) {
    const o = s[r].replace(wo, " "),
      i = o.indexOf("="),
      u = hn(i < 0 ? o : o.slice(0, i)),
      c = i < 0 ? null : hn(o.slice(i + 1));
    if (u in t) {
      let d = t[u];
      Ae(d) || (d = t[u] = [d]), d.push(c);
    } else t[u] = c;
  }
  return t;
}
function lr(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (((n = Bc(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ae(s) ? s.map((o) => o && Yn(o)) : [s && Yn(s)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function Vc(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = Ae(s)
        ? s.map((r) => (r == null ? null : "" + r))
        : s == null
        ? s
        : "" + s);
  }
  return t;
}
const Wc = Symbol(""),
  cr = Symbol(""),
  bs = Symbol(""),
  Co = Symbol(""),
  Qn = Symbol("");
function $t() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s);
        r > -1 && e.splice(r, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function Je(e, t, n, s, r) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () =>
    new Promise((i, u) => {
      const c = (h) => {
          h === !1
            ? u(Ot(4, { from: n, to: t }))
            : h instanceof Error
            ? u(h)
            : _c(h)
            ? u(Ot(2, { from: t, to: h }))
            : (o &&
                s.enterCallbacks[r] === o &&
                typeof h == "function" &&
                o.push(h),
              i());
        },
        d = e.call(s && s.instances[r], t, n, c);
      let f = Promise.resolve(d);
      e.length < 3 && (f = f.then(c)), f.catch((h) => u(h));
    });
}
function Hn(e, t, n, s) {
  const r = [];
  for (const o of e)
    for (const i in o.components) {
      let u = o.components[i];
      if (!(t !== "beforeRouteEnter" && !o.instances[i]))
        if (qc(u)) {
          const d = (u.__vccOpts || u)[t];
          d && r.push(Je(d, n, s, o, i));
        } else {
          let c = u();
          r.push(() =>
            c.then((d) => {
              if (!d)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${o.path}"`)
                );
              const f = Gl(d) ? d.default : d;
              o.components[i] = f;
              const p = (f.__vccOpts || f)[t];
              return p && Je(p, n, s, o, i)();
            })
          );
        }
    }
  return r;
}
function qc(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function ur(e) {
  const t = Ue(bs),
    n = Ue(Co),
    s = ye(() => t.resolve(De(e.to))),
    r = ye(() => {
      const { matched: c } = s.value,
        { length: d } = c,
        f = c[d - 1],
        h = n.matched;
      if (!f || !h.length) return -1;
      const p = h.findIndex(Pt.bind(null, f));
      if (p > -1) return p;
      const y = fr(c[d - 2]);
      return d > 1 && fr(f) === y && h[h.length - 1].path !== y
        ? h.findIndex(Pt.bind(null, c[d - 2]))
        : p;
    }),
    o = ye(() => r.value > -1 && Jc(n.params, s.value.params)),
    i = ye(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        mo(n.params, s.value.params)
    );
  function u(c = {}) {
    return Qc(c)
      ? t[De(e.replace) ? "replace" : "push"](De(e.to)).catch(kt)
      : Promise.resolve();
  }
  return {
    route: s,
    href: ye(() => s.value.href),
    isActive: o,
    isExactActive: i,
    navigate: u,
  };
}
const Yc = Jr({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: ur,
    setup(e, { slots: t }) {
      const n = Qt(ur(e)),
        { options: s } = Ue(bs),
        r = ye(() => ({
          [ar(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [ar(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : po(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              o
            );
      };
    },
  }),
  Jn = Yc;
function Qc(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Jc(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n];
    if (typeof s == "string") {
      if (s !== r) return !1;
    } else if (!Ae(r) || r.length !== s.length || s.some((o, i) => o !== r[i]))
      return !1;
  }
  return !0;
}
function fr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const ar = (e, t, n) => e ?? t ?? n,
  Xc = Jr({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Ue(Qn),
        r = ye(() => e.route || s.value),
        o = Ue(cr, 0),
        i = ye(() => {
          let d = De(o);
          const { matched: f } = r.value;
          let h;
          for (; (h = f[d]) && !h.components; ) d++;
          return d;
        }),
        u = ye(() => r.value.matched[i.value]);
      rn(
        cr,
        ye(() => i.value + 1)
      ),
        rn(Wc, u),
        rn(Qn, r);
      const c = jr();
      return (
        on(
          () => [c.value, u.value, e.name],
          ([d, f, h], [p, y, O]) => {
            f &&
              ((f.instances[h] = d),
              y &&
                y !== f &&
                d &&
                d === p &&
                (f.leaveGuards.size || (f.leaveGuards = y.leaveGuards),
                f.updateGuards.size || (f.updateGuards = y.updateGuards))),
              d &&
                f &&
                (!y || !Pt(f, y) || !p) &&
                (f.enterCallbacks[h] || []).forEach((z) => z(d));
          },
          { flush: "post" }
        ),
        () => {
          const d = r.value,
            f = e.name,
            h = u.value,
            p = h && h.components[f];
          if (!p) return dr(n.default, { Component: p, route: d });
          const y = h.props[f],
            O = y
              ? y === !0
                ? d.params
                : typeof y == "function"
                ? y(d)
                : y
              : null,
            L = po(
              p,
              Y({}, O, t, {
                onVnodeUnmounted: (A) => {
                  A.component.isUnmounted && (h.instances[f] = null);
                },
                ref: c,
              })
            );
          return dr(n.default, { Component: L, route: d }) || L;
        }
      );
    },
  });
function dr(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Po = Xc;
function Zc(e) {
  const t = Oc(e.routes, e),
    n = e.parseQuery || Kc,
    s = e.stringifyQuery || lr,
    r = e.history,
    o = $t(),
    i = $t(),
    u = $t(),
    c = vi(Ye);
  let d = Ye;
  mt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const f = Tn.bind(null, (_) => "" + _),
    h = Tn.bind(null, Uc),
    p = Tn.bind(null, hn);
  function y(_, P) {
    let R, I;
    return (
      _o(_) ? ((R = t.getRecordMatcher(_)), (I = P)) : (I = _), t.addRoute(I, R)
    );
  }
  function O(_) {
    const P = t.getRecordMatcher(_);
    P && t.removeRoute(P);
  }
  function z() {
    return t.getRoutes().map((_) => _.record);
  }
  function L(_) {
    return !!t.getRecordMatcher(_);
  }
  function A(_, P) {
    if (((P = Y({}, P || c.value)), typeof _ == "string")) {
      const l = $n(n, _, P.path),
        a = t.resolve({ path: l.path }, P),
        m = r.createHref(l.fullPath);
      return Y(l, a, {
        params: p(a.params),
        hash: hn(l.hash),
        redirectedFrom: void 0,
        href: m,
      });
    }
    let R;
    if ("path" in _) R = Y({}, _, { path: $n(n, _.path, P.path).path });
    else {
      const l = Y({}, _.params);
      for (const a in l) l[a] == null && delete l[a];
      (R = Y({}, _, { params: h(_.params) })), (P.params = h(P.params));
    }
    const I = t.resolve(R, P),
      K = _.hash || "";
    I.params = f(p(I.params));
    const te = nc(s, Y({}, _, { hash: kc(K), path: I.path })),
      k = r.createHref(te);
    return Y(
      { fullPath: te, hash: K, query: s === lr ? Vc(_.query) : _.query || {} },
      I,
      { redirectedFrom: void 0, href: k }
    );
  }
  function j(_) {
    return typeof _ == "string" ? $n(n, _, c.value.path) : Y({}, _);
  }
  function $(_, P) {
    if (d !== _) return Ot(8, { from: P, to: _ });
  }
  function q(_) {
    return Ie(_);
  }
  function ce(_) {
    return q(Y(j(_), { replace: !0 }));
  }
  function _e(_) {
    const P = _.matched[_.matched.length - 1];
    if (P && P.redirect) {
      const { redirect: R } = P;
      let I = typeof R == "function" ? R(_) : R;
      return (
        typeof I == "string" &&
          ((I = I.includes("?") || I.includes("#") ? (I = j(I)) : { path: I }),
          (I.params = {})),
        Y(
          { query: _.query, hash: _.hash, params: "path" in I ? {} : _.params },
          I
        )
      );
    }
  }
  function Ie(_, P) {
    const R = (d = A(_)),
      I = c.value,
      K = _.state,
      te = _.force,
      k = _.replace === !0,
      l = _e(R);
    if (l)
      return Ie(
        Y(j(l), {
          state: typeof l == "object" ? Y({}, K, l.state) : K,
          force: te,
          replace: k,
        }),
        P || R
      );
    const a = R;
    a.redirectedFrom = P;
    let m;
    return (
      !te &&
        sc(s, I, R) &&
        ((m = Ot(16, { to: a, from: I })), nt(I, I, !0, !1)),
      (m ? Promise.resolve(m) : ft(a, I))
        .catch((g) => (ke(g) ? (ke(g, 2) ? g : we(g)) : Z(g, a, I)))
        .then((g) => {
          if (g) {
            if (ke(g, 2))
              return Ie(
                Y({ replace: k }, j(g.to), {
                  state: typeof g.to == "object" ? Y({}, K, g.to.state) : K,
                  force: te,
                }),
                P || a
              );
          } else g = We(a, I, !0, k, K);
          return Se(a, I, g), g;
        })
    );
  }
  function Ne(_, P) {
    const R = $(_, P);
    return R ? Promise.reject(R) : Promise.resolve();
  }
  function ft(_, P) {
    let R;
    const [I, K, te] = Gc(_, P);
    R = Hn(I.reverse(), "beforeRouteLeave", _, P);
    for (const l of I)
      l.leaveGuards.forEach((a) => {
        R.push(Je(a, _, P));
      });
    const k = Ne.bind(null, _, P);
    return (
      R.push(k),
      pt(R)
        .then(() => {
          R = [];
          for (const l of o.list()) R.push(Je(l, _, P));
          return R.push(k), pt(R);
        })
        .then(() => {
          R = Hn(K, "beforeRouteUpdate", _, P);
          for (const l of K)
            l.updateGuards.forEach((a) => {
              R.push(Je(a, _, P));
            });
          return R.push(k), pt(R);
        })
        .then(() => {
          R = [];
          for (const l of _.matched)
            if (l.beforeEnter && !P.matched.includes(l))
              if (Ae(l.beforeEnter))
                for (const a of l.beforeEnter) R.push(Je(a, _, P));
              else R.push(Je(l.beforeEnter, _, P));
          return R.push(k), pt(R);
        })
        .then(
          () => (
            _.matched.forEach((l) => (l.enterCallbacks = {})),
            (R = Hn(te, "beforeRouteEnter", _, P)),
            R.push(k),
            pt(R)
          )
        )
        .then(() => {
          R = [];
          for (const l of i.list()) R.push(Je(l, _, P));
          return R.push(k), pt(R);
        })
        .catch((l) => (ke(l, 8) ? l : Promise.reject(l)))
    );
  }
  function Se(_, P, R) {
    for (const I of u.list()) I(_, P, R);
  }
  function We(_, P, R, I, K) {
    const te = $(_, P);
    if (te) return te;
    const k = P === Ye,
      l = mt ? history.state : {};
    R &&
      (I || k
        ? r.replace(_.fullPath, Y({ scroll: k && l && l.scroll }, K))
        : r.push(_.fullPath, K)),
      (c.value = _),
      nt(_, P, R, k),
      we();
  }
  let Te;
  function at() {
    Te ||
      (Te = r.listen((_, P, R) => {
        if (!Jt.listening) return;
        const I = A(_),
          K = _e(I);
        if (K) {
          Ie(Y(K, { replace: !0 }), I).catch(kt);
          return;
        }
        d = I;
        const te = c.value;
        mt && ac(Gs(te.fullPath, R.delta), Rn()),
          ft(I, te)
            .catch((k) =>
              ke(k, 12)
                ? k
                : ke(k, 2)
                ? (Ie(k.to, I)
                    .then((l) => {
                      ke(l, 20) &&
                        !R.delta &&
                        R.type === Yt.pop &&
                        r.go(-1, !1);
                    })
                    .catch(kt),
                  Promise.reject())
                : (R.delta && r.go(-R.delta, !1), Z(k, I, te))
            )
            .then((k) => {
              (k = k || We(I, te, !1)),
                k &&
                  (R.delta && !ke(k, 8)
                    ? r.go(-R.delta, !1)
                    : R.type === Yt.pop && ke(k, 20) && r.go(-1, !1)),
                Se(I, te, k);
            })
            .catch(kt);
      }));
  }
  let tt = $t(),
    It = $t(),
    se;
  function Z(_, P, R) {
    we(_);
    const I = It.list();
    return (
      I.length ? I.forEach((K) => K(_, P, R)) : console.error(_),
      Promise.reject(_)
    );
  }
  function Q() {
    return se && c.value !== Ye
      ? Promise.resolve()
      : new Promise((_, P) => {
          tt.add([_, P]);
        });
  }
  function we(_) {
    return (
      se ||
        ((se = !_),
        at(),
        tt.list().forEach(([P, R]) => (_ ? R(_) : P())),
        tt.reset()),
      _
    );
  }
  function nt(_, P, R, I) {
    const { scrollBehavior: K } = e;
    if (!mt || !K) return Promise.resolve();
    const te =
      (!R && dc(Gs(_.fullPath, 0))) ||
      ((I || !R) && history.state && history.state.scroll) ||
      null;
    return Br()
      .then(() => K(_, P, te))
      .then((k) => k && fc(k))
      .catch((k) => Z(k, _, P));
  }
  const Ee = (_) => r.go(_);
  let he;
  const dt = new Set(),
    Jt = {
      currentRoute: c,
      listening: !0,
      addRoute: y,
      removeRoute: O,
      hasRoute: L,
      getRoutes: z,
      resolve: A,
      options: e,
      push: q,
      replace: ce,
      go: Ee,
      back: () => Ee(-1),
      forward: () => Ee(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: u.add,
      onError: It.add,
      isReady: Q,
      install(_) {
        const P = this;
        _.component("RouterLink", Jn),
          _.component("RouterView", Po),
          (_.config.globalProperties.$router = P),
          Object.defineProperty(_.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => De(c),
          }),
          mt &&
            !he &&
            c.value === Ye &&
            ((he = !0), q(r.location).catch((K) => {}));
        const R = {};
        for (const K in Ye) R[K] = ye(() => c.value[K]);
        _.provide(bs, P), _.provide(Co, Qt(R)), _.provide(Qn, c);
        const I = _.unmount;
        dt.add(_),
          (_.unmount = function () {
            dt.delete(_),
              dt.size < 1 &&
                ((d = Ye),
                Te && Te(),
                (Te = null),
                (c.value = Ye),
                (he = !1),
                (se = !1)),
              I();
          });
      },
    };
  return Jt;
}
function pt(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function Gc(e, t) {
  const n = [],
    s = [],
    r = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const u = t.matched[i];
    u && (e.matched.find((d) => Pt(d, u)) ? s.push(u) : n.push(u));
    const c = e.matched[i];
    c && (t.matched.find((d) => Pt(d, c)) || r.push(c));
  }
  return [n, s, r];
}
const et = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  eu = (e) => (Wr("data-v-94d0abdb"), (e = e()), qr(), e),
  tu = { class: "greetings" },
  nu = { class: "green" },
  su = eu(() =>
    D(
      "h3",
      null,
      [
        U(" You’ve successfully created a project with "),
        D(
          "a",
          { href: "https://vitejs.dev/", target: "_blank", rel: "noopener" },
          "Vite"
        ),
        U(" + "),
        D(
          "a",
          { href: "https://vuejs.org/", target: "_blank", rel: "noopener" },
          "Vue 3"
        ),
        U(". "),
      ],
      -1
    )
  ),
  ru = {
    __name: "HelloWorld",
    props: { msg: { type: String, required: !0 } },
    setup(e) {
      return (t, n) => (ze(), Le("div", tu, [D("h1", nu, To(e.msg), 1), su]));
    },
  },
  ou = et(ru, [["__scopeId", "data-v-94d0abdb"]]);
const iu = (e) => (Wr("data-v-2f3d23c4"), (e = e()), qr(), e),
  lu = iu(() =>
    D(
      "img",
      { alt: "Vue logo", class: "logo", src: Zl, width: "125", height: "125" },
      null,
      -1
    )
  ),
  cu = { class: "wrapper" },
  uu = {
    __name: "App",
    setup(e) {
      return (t, n) => (
        ze(),
        Le(
          be,
          null,
          [
            D("header", null, [
              lu,
              D("div", cu, [
                X(ou, { msg: "You did it!" }),
                D("nav", null, [
                  X(
                    De(Jn),
                    { to: "/" },
                    { default: ie(() => [U("Home")]), _: 1 }
                  ),
                  X(
                    De(Jn),
                    { to: "/about" },
                    { default: ie(() => [U("About")]), _: 1 }
                  ),
                ]),
              ]),
            ]),
            X(De(Po)),
          ],
          64
        )
      );
    },
  },
  fu = et(uu, [["__scopeId", "data-v-2f3d23c4"]]),
  au = "modulepreload",
  du = function (e) {
    return "/maybelline-project/" + e;
  },
  hr = {},
  hu = function (t, n, s) {
    if (!n || n.length === 0) return t();
    const r = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = du(o)), o in hr)) return;
        hr[o] = !0;
        const i = o.endsWith(".css"),
          u = i ? '[rel="stylesheet"]' : "";
        if (s)
          for (let f = r.length - 1; f >= 0; f--) {
            const h = r[f];
            if (h.href === o && (!i || h.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${u}`)) return;
        const d = document.createElement("link");
        if (
          ((d.rel = i ? "stylesheet" : au),
          i || ((d.as = "script"), (d.crossOrigin = "")),
          (d.href = o),
          document.head.appendChild(d),
          i)
        )
          return new Promise((f, h) => {
            d.addEventListener("load", f),
              d.addEventListener("error", () =>
                h(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    ).then(() => t());
  };
const pu = {},
  mu = { class: "item" },
  gu = { class: "details" };
function _u(e, t) {
  return (
    ze(),
    Le("div", mu, [
      D("i", null, [Mn(e.$slots, "icon", {}, void 0, !0)]),
      D("div", gu, [
        D("h3", null, [Mn(e.$slots, "heading", {}, void 0, !0)]),
        Mn(e.$slots, "default", {}, void 0, !0),
      ]),
    ])
  );
}
const Ht = et(pu, [
    ["render", _u],
    ["__scopeId", "data-v-cf6bc0bd"],
  ]),
  vu = {},
  bu = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "17",
    fill: "currentColor",
  },
  yu = D(
    "path",
    {
      d: "M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z",
    },
    null,
    -1
  ),
  wu = [yu];
function Eu(e, t) {
  return ze(), Le("svg", bu, wu);
}
const xu = et(vu, [["render", Eu]]),
  Ru = {},
  Cu = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    role: "img",
    class: "iconify iconify--mdi",
    width: "24",
    height: "24",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 24 24",
  },
  Pu = D(
    "path",
    {
      d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  Ou = [Pu];
function Mu(e, t) {
  return ze(), Le("svg", Cu, Ou);
}
const Au = et(Ru, [["render", Mu]]),
  zu = {},
  Iu = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "20",
    fill: "currentColor",
  },
  Su = D(
    "path",
    {
      d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z",
    },
    null,
    -1
  ),
  Tu = [Su];
function $u(e, t) {
  return ze(), Le("svg", Iu, Tu);
}
const Hu = et(zu, [["render", $u]]),
  ju = {},
  Fu = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
  },
  Lu = D(
    "path",
    {
      d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z",
    },
    null,
    -1
  ),
  Nu = [Lu];
function ku(e, t) {
  return ze(), Le("svg", Fu, Nu);
}
const Bu = et(ju, [["render", ku]]),
  Du = {},
  Uu = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
  },
  Ku = D(
    "path",
    {
      d: "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z",
    },
    null,
    -1
  ),
  Vu = [Ku];
function Wu(e, t) {
  return ze(), Le("svg", Uu, Vu);
}
const qu = et(Du, [["render", Wu]]),
  Yu = D(
    "a",
    { href: "https://vuejs.org/", target: "_blank", rel: "noopener" },
    "official documentation",
    -1
  ),
  Qu = D(
    "a",
    {
      href: "https://vitejs.dev/guide/features.html",
      target: "_blank",
      rel: "noopener",
    },
    "Vite",
    -1
  ),
  Ju = D(
    "a",
    {
      href: "https://code.visualstudio.com/",
      target: "_blank",
      rel: "noopener",
    },
    "VSCode",
    -1
  ),
  Xu = D(
    "a",
    {
      href: "https://github.com/johnsoncodehk/volar",
      target: "_blank",
      rel: "noopener",
    },
    "Volar",
    -1
  ),
  Zu = D(
    "a",
    { href: "https://www.cypress.io/", target: "_blank", rel: "noopener" },
    "Cypress",
    -1
  ),
  Gu = D(
    "a",
    { href: "https://on.cypress.io/component", target: "_blank" },
    "Cypress Component Testing",
    -1
  ),
  ef = D("br", null, null, -1),
  tf = D("code", null, "README.md", -1),
  nf = D(
    "a",
    { href: "https://pinia.vuejs.org/", target: "_blank", rel: "noopener" },
    "Pinia",
    -1
  ),
  sf = D(
    "a",
    { href: "https://router.vuejs.org/", target: "_blank", rel: "noopener" },
    "Vue Router",
    -1
  ),
  rf = D(
    "a",
    {
      href: "https://test-utils.vuejs.org/",
      target: "_blank",
      rel: "noopener",
    },
    "Vue Test Utils",
    -1
  ),
  of = D(
    "a",
    {
      href: "https://github.com/vuejs/devtools",
      target: "_blank",
      rel: "noopener",
    },
    "Vue Dev Tools",
    -1
  ),
  lf = D(
    "a",
    {
      href: "https://github.com/vuejs/awesome-vue",
      target: "_blank",
      rel: "noopener",
    },
    "Awesome Vue",
    -1
  ),
  cf = D(
    "a",
    { href: "https://chat.vuejs.org", target: "_blank", rel: "noopener" },
    "Vue Land",
    -1
  ),
  uf = D(
    "a",
    {
      href: "https://stackoverflow.com/questions/tagged/vue.js",
      target: "_blank",
      rel: "noopener",
    },
    "StackOverflow",
    -1
  ),
  ff = D(
    "a",
    { href: "https://news.vuejs.org", target: "_blank", rel: "noopener" },
    "our mailing list",
    -1
  ),
  af = D(
    "a",
    { href: "https://twitter.com/vuejs", target: "_blank", rel: "noopener" },
    "@vuejs",
    -1
  ),
  df = D(
    "a",
    { href: "https://vuejs.org/sponsor/", target: "_blank", rel: "noopener" },
    "becoming a sponsor",
    -1
  ),
  hf = {
    __name: "TheWelcome",
    setup(e) {
      return (t, n) => (
        ze(),
        Le(
          be,
          null,
          [
            X(Ht, null, {
              icon: ie(() => [X(xu)]),
              heading: ie(() => [U("Documentation")]),
              default: ie(() => [
                U(" Vue’s "),
                Yu,
                U(
                  " provides you with all information you need to get started. "
                ),
              ]),
              _: 1,
            }),
            X(Ht, null, {
              icon: ie(() => [X(Au)]),
              heading: ie(() => [U("Tooling")]),
              default: ie(() => [
                U(" This project is served and bundled with "),
                Qu,
                U(". The recommended IDE setup is "),
                Ju,
                U(" + "),
                Xu,
                U(
                  ". If you need to test your components and web pages, check out "
                ),
                Zu,
                U(" and "),
                Gu,
                U(". "),
                ef,
                U(" More instructions are available in "),
                tf,
                U(". "),
              ]),
              _: 1,
            }),
            X(Ht, null, {
              icon: ie(() => [X(Hu)]),
              heading: ie(() => [U("Ecosystem")]),
              default: ie(() => [
                U(" Get official tools and libraries for your project: "),
                nf,
                U(", "),
                sf,
                U(", "),
                rf,
                U(", and "),
                of,
                U(". If you need more resources, we suggest paying "),
                lf,
                U(" a visit. "),
              ]),
              _: 1,
            }),
            X(Ht, null, {
              icon: ie(() => [X(Bu)]),
              heading: ie(() => [U("Community")]),
              default: ie(() => [
                U(" Got stuck? Ask your question on "),
                cf,
                U(", our official Discord server, or "),
                uf,
                U(". You should also subscribe to "),
                ff,
                U(" and follow the official "),
                af,
                U(" twitter account for latest news in the Vue world. "),
              ]),
              _: 1,
            }),
            X(Ht, null, {
              icon: ie(() => [X(qu)]),
              heading: ie(() => [U("Support Vue")]),
              default: ie(() => [
                U(
                  " As an independent project, Vue relies on community backing for its sustainability. You can help us by "
                ),
                df,
                U(". "),
              ]),
              _: 1,
            }),
          ],
          64
        )
      );
    },
  },
  pf = {
    __name: "HomeView",
    setup(e) {
      return (t, n) => (ze(), Le("main", null, [X(hf)]));
    },
  },
  mf = Zc({
    history: gc("/maybelline-project"),
    routes: [
      { path: "/", name: "home", component: pf },
      {
        path: "/about",
        name: "about",
        component: () =>
          hu(
            () => import("./AboutView-5e15560b.js"),
            ["assets/AboutView-5e15560b.js", "assets/AboutView-4d995ba2.css"]
          ),
      },
    ],
  });
const ys = ql(fu);
ys.use(Xl());
ys.use(mf);
ys.mount("#app");
export { et as _, D as a, Le as c, ze as o };
