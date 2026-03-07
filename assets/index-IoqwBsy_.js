(async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);
        new MutationObserver((i)=>{
            for (const o of i)if (o.type === "childList") for (const a of o.addedNodes)a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function r(i) {
            const o = {};
            return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
        }
        function n(i) {
            if (i.ep) return;
            i.ep = !0;
            const o = r(i);
            fetch(i.href, o);
        }
    })();
    const fi = 1, _i = 2, di = 16, vi = 1, pi = 2, be = Symbol(), fn = "http://www.w3.org/1999/xhtml", Er = !1;
    var Mr = Array.isArray, hi = Array.prototype.indexOf, Dt = Array.prototype.includes, vr = Array.from, gi = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, yi = Object.getOwnPropertyDescriptors, bi = Object.prototype, mi = Array.prototype, _n = Object.getPrototypeOf, Ur = Object.isExtensible;
    const wi = ()=>{};
    function xi(e) {
        for(var t = 0; t < e.length; t++)e[t]();
    }
    function dn() {
        var e, t, r = new Promise((n, i)=>{
            e = n, t = i;
        });
        return {
            promise: r,
            resolve: e,
            reject: t
        };
    }
    const me = 2, tr = 4, Qt = 8, vn = 1 << 24, ft = 16, Ye = 32, Pt = 64, Sr = 128, Fe = 512, pe = 1024, we = 2048, $e = 4096, Ce = 8192, at = 16384, Kt = 32768, Lt = 65536, $r = 1 << 17, ki = 1 << 18, Ft = 1 << 19, Ei = 1 << 20, it = 1 << 25, St = 65536, Ar = 1 << 21, Cr = 1 << 22, st = 1 << 23, Ut = Symbol("$state"), Si = Symbol(""), yt = new class extends Error {
        name = "StaleReactionError";
        message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
    }, Ai = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml");
    function Ti() {
        throw new Error("https://svelte.dev/e/async_derived_orphan");
    }
    function Pi(e, t, r) {
        throw new Error("https://svelte.dev/e/each_key_duplicate");
    }
    function Ii(e) {
        throw new Error("https://svelte.dev/e/effect_in_teardown");
    }
    function Oi() {
        throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    }
    function Ri(e) {
        throw new Error("https://svelte.dev/e/effect_orphan");
    }
    function Di() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
    }
    function Li() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
    }
    function Mi() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
    }
    function Ci() {
        throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    }
    function Ni() {
        throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
    }
    function ji() {
        console.warn("https://svelte.dev/e/select_multiple_invalid_value");
    }
    function zi() {
        console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
    }
    function pn(e) {
        return e === this.v;
    }
    function Ki(e, t) {
        return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
    }
    function hn(e) {
        return !Ki(e, this.v);
    }
    let Fi = !1, Ge = null;
    function Mt(e) {
        Ge = e;
    }
    function _t(e, t = !1, r) {
        Ge = {
            p: Ge,
            i: !1,
            c: null,
            e: null,
            s: e,
            x: null,
            l: null
        };
    }
    function dt(e) {
        var t = Ge, r = t.e;
        if (r !== null) {
            t.e = null;
            for (var n of r)Nn(n);
        }
        return t.i = !0, Ge = t.p, {};
    }
    function gn() {
        return !0;
    }
    let bt = [];
    function yn() {
        var e = bt;
        bt = [], xi(e);
    }
    function Rt(e) {
        if (bt.length === 0 && !$t) {
            var t = bt;
            queueMicrotask(()=>{
                t === bt && yn();
            });
        }
        bt.push(e);
    }
    function Vi() {
        for(; bt.length > 0;)yn();
    }
    function bn(e) {
        var t = Y;
        if (t === null) return W.f |= st, e;
        if ((t.f & Kt) === 0 && (t.f & tr) === 0) throw e;
        ot(e, t);
    }
    function ot(e, t) {
        for(; t !== null;){
            if ((t.f & Sr) !== 0) {
                if ((t.f & Kt) === 0) throw e;
                try {
                    t.b.error(e);
                    return;
                } catch (r) {
                    e = r;
                }
            }
            t = t.parent;
        }
        throw e;
    }
    const Gi = -7169;
    function se(e, t) {
        e.f = e.f & Gi | t;
    }
    function Nr(e) {
        (e.f & Fe) !== 0 || e.deps === null ? se(e, pe) : se(e, $e);
    }
    function mn(e) {
        if (e !== null) for (const t of e)(t.f & me) === 0 || (t.f & St) === 0 || (t.f ^= St, mn(t.deps));
    }
    function wn(e, t, r) {
        (e.f & we) !== 0 ? t.add(e) : (e.f & $e) !== 0 && r.add(e), mn(e.deps), se(e, pe);
    }
    const or = new Set;
    let Z = null, Tr = null, We = null, Te = [], pr = null, $t = !1, Ct = null;
    class lt {
        current = new Map;
        previous = new Map;
        #e = new Set;
        #s = new Set;
        #t = 0;
        #a = 0;
        #r = null;
        #o = new Set;
        #n = new Set;
        #i = new Map;
        is_fork = !1;
        #l = !1;
        #u() {
            return this.is_fork || this.#a > 0;
        }
        skip_effect(t) {
            this.#i.has(t) || this.#i.set(t, {
                d: [],
                m: []
            });
        }
        unskip_effect(t) {
            var r = this.#i.get(t);
            if (r) {
                this.#i.delete(t);
                for (var n of r.d)se(n, we), Be(n);
                for (n of r.m)se(n, $e), Be(n);
            }
        }
        process(t) {
            Te = [], this.apply();
            var r = Ct = [], n = [];
            for (const i of t)this.#c(i, r, n);
            if (Ct = null, this.#u()) {
                this.#f(n), this.#f(r);
                for (const [i, o] of this.#i)Sn(i, o);
            } else {
                Tr = this, Z = null;
                for (const i of this.#e)i(this);
                this.#e.clear(), this.#t === 0 && this.#_(), Yr(n), Yr(r), this.#o.clear(), this.#n.clear(), Tr = null, this.#r?.resolve();
            }
            We = null;
        }
        #c(t, r, n) {
            t.f ^= pe;
            for(var i = t.first; i !== null;){
                var o = i.f, a = (o & (Ye | Pt)) !== 0, s = a && (o & pe) !== 0, l = s || (o & Ce) !== 0 || this.#i.has(i);
                if (!l && i.fn !== null) {
                    a ? i.f ^= pe : (o & tr) !== 0 ? r.push(i) : nr(i) && ((o & ft) !== 0 && this.#n.add(i), zt(i));
                    var u = i.first;
                    if (u !== null) {
                        i = u;
                        continue;
                    }
                }
                for(; i !== null;){
                    var _ = i.next;
                    if (_ !== null) {
                        i = _;
                        break;
                    }
                    i = i.parent;
                }
            }
        }
        #f(t) {
            for(var r = 0; r < t.length; r += 1)wn(t[r], this.#o, this.#n);
        }
        capture(t, r) {
            r !== be && !this.previous.has(t) && this.previous.set(t, r), (t.f & st) === 0 && (this.current.set(t, t.v), We?.set(t, t.v));
        }
        activate() {
            Z = this, this.apply();
        }
        deactivate() {
            Z === this && (Z = null, We = null);
        }
        flush() {
            if (Te.length > 0) Z = this, xn();
            else if (this.#t === 0 && !this.is_fork) {
                for (const t of this.#e)t(this);
                this.#e.clear(), this.#_(), this.#r?.resolve();
            }
            this.deactivate();
        }
        discard() {
            for (const t of this.#s)t(this);
            this.#s.clear();
        }
        #_() {
            if (or.size > 1) {
                this.previous.clear();
                var t = Z, r = We, n = !0;
                for (const o of or){
                    if (o === this) {
                        n = !1;
                        continue;
                    }
                    const a = [];
                    for (const [l, u] of this.current){
                        if (o.current.has(l)) if (n && u !== o.current.get(l)) o.current.set(l, u);
                        else continue;
                        a.push(l);
                    }
                    if (a.length === 0) continue;
                    const s = [
                        ...o.current.keys()
                    ].filter((l)=>!this.current.has(l));
                    if (s.length > 0) {
                        var i = Te;
                        Te = [];
                        const l = new Set, u = new Map;
                        for (const _ of a)kn(_, s, l, u);
                        if (Te.length > 0) {
                            Z = o, o.apply();
                            for (const _ of Te)o.#c(_, [], []);
                            o.deactivate();
                        }
                        Te = i;
                    }
                }
                Z = t, We = r;
            }
            this.#i.clear(), or.delete(this);
        }
        increment(t) {
            this.#t += 1, t && (this.#a += 1);
        }
        decrement(t) {
            this.#t -= 1, t && (this.#a -= 1), !this.#l && (this.#l = !0, Rt(()=>{
                this.#l = !1, this.#u() ? Te.length > 0 && this.flush() : this.revive();
            }));
        }
        revive() {
            for (const t of this.#o)this.#n.delete(t), se(t, we), Be(t);
            for (const t of this.#n)se(t, $e), Be(t);
            this.flush();
        }
        oncommit(t) {
            this.#e.add(t);
        }
        ondiscard(t) {
            this.#s.add(t);
        }
        settled() {
            return (this.#r ??= dn()).promise;
        }
        static ensure() {
            if (Z === null) {
                const t = Z = new lt;
                or.add(Z), $t || Rt(()=>{
                    Z === t && t.flush();
                });
            }
            return Z;
        }
        apply() {}
    }
    function qi(e) {
        var t = $t;
        $t = !0;
        try {
            for(var r;;){
                if (Vi(), Te.length === 0 && (Z?.flush(), Te.length === 0)) return pr = null, r;
                xn();
            }
        } finally{
            $t = t;
        }
    }
    function xn() {
        var e = null;
        try {
            for(var t = 0; Te.length > 0;){
                var r = lt.ensure();
                if (t++ > 1e3) {
                    var n, i;
                    Wi();
                }
                r.process(Te), ct.clear();
            }
        } finally{
            Te = [], pr = null, Ct = null;
        }
    }
    function Wi() {
        try {
            Di();
        } catch (e) {
            ot(e, pr);
        }
    }
    let Qe = null;
    function Yr(e) {
        var t = e.length;
        if (t !== 0) {
            for(var r = 0; r < t;){
                var n = e[r++];
                if ((n.f & (at | Ce)) === 0 && nr(n) && (Qe = new Set, zt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Kn(n), Qe?.size > 0)) {
                    ct.clear();
                    for (const i of Qe){
                        if ((i.f & (at | Ce)) !== 0) continue;
                        const o = [
                            i
                        ];
                        let a = i.parent;
                        for(; a !== null;)Qe.has(a) && (Qe.delete(a), o.push(a)), a = a.parent;
                        for(let s = o.length - 1; s >= 0; s--){
                            const l = o[s];
                            (l.f & (at | Ce)) === 0 && zt(l);
                        }
                    }
                    Qe.clear();
                }
            }
            Qe = null;
        }
    }
    function kn(e, t, r, n) {
        if (!r.has(e) && (r.add(e), e.reactions !== null)) for (const i of e.reactions){
            const o = i.f;
            (o & me) !== 0 ? kn(i, t, r, n) : (o & (Cr | ft)) !== 0 && (o & we) === 0 && En(i, t, n) && (se(i, we), Be(i));
        }
    }
    function En(e, t, r) {
        const n = r.get(e);
        if (n !== void 0) return n;
        if (e.deps !== null) for (const i of e.deps){
            if (Dt.call(t, i)) return !0;
            if ((i.f & me) !== 0 && En(i, t, r)) return r.set(i, !0), !0;
        }
        return r.set(e, !1), !1;
    }
    function Be(e) {
        var t = pr = e, r = t.b;
        if (r?.is_pending && (e.f & (tr | Qt | vn)) !== 0 && (e.f & Kt) === 0) {
            r.defer_effect(e);
            return;
        }
        for(; t.parent !== null;){
            t = t.parent;
            var n = t.f;
            if (Ct !== null && t === Y && (e.f & Qt) === 0) return;
            if ((n & (Pt | Ye)) !== 0) {
                if ((n & pe) === 0) return;
                t.f ^= pe;
            }
        }
        Te.push(t);
    }
    function Sn(e, t) {
        if (!((e.f & Ye) !== 0 && (e.f & pe) !== 0)) {
            (e.f & we) !== 0 ? t.d.push(e) : (e.f & $e) !== 0 && t.m.push(e), se(e, pe);
            for(var r = e.first; r !== null;)Sn(r, t), r = r.next;
        }
    }
    function Bi(e) {
        let t = 0, r = At(0), n;
        return ()=>{
            Kr() && (c(r), jn(()=>(t === 0 && (n = Hn(()=>e(()=>Yt(r)))), t += 1, ()=>{
                    Rt(()=>{
                        t -= 1, t === 0 && (n?.(), n = void 0, Yt(r));
                    });
                })));
        };
    }
    var Ui = Lt | Ft;
    function $i(e, t, r, n) {
        new Yi(e, t, r, n);
    }
    class Yi {
        parent;
        is_pending = !1;
        transform_error;
        #e;
        #s = null;
        #t;
        #a;
        #r;
        #o = null;
        #n = null;
        #i = null;
        #l = null;
        #u = 0;
        #c = 0;
        #f = !1;
        #_ = new Set;
        #v = new Set;
        #d = null;
        #b = Bi(()=>(this.#d = At(this.#u), ()=>{
                this.#d = null;
            }));
        constructor(t, r, n, i){
            this.#e = t, this.#t = r, this.#a = (o)=>{
                var a = Y;
                a.b = this, a.f |= Sr, n(o);
            }, this.parent = Y.b, this.transform_error = i ?? this.parent?.transform_error ?? ((o)=>o), this.#r = Fr(()=>{
                this.#g();
            }, Ui);
        }
        #m() {
            try {
                this.#o = Ke(()=>this.#a(this.#e));
            } catch (t) {
                this.error(t);
            }
        }
        #w(t) {
            const r = this.#t.failed;
            r && (this.#i = Ke(()=>{
                r(this.#e, ()=>t, ()=>()=>{});
            }));
        }
        #x() {
            const t = this.#t.pending;
            t && (this.is_pending = !0, this.#n = Ke(()=>t(this.#e)), Rt(()=>{
                var r = this.#l = document.createDocumentFragment(), n = ut();
                r.append(n), this.#o = this.#h(()=>(lt.ensure(), Ke(()=>this.#a(n)))), this.#c === 0 && (this.#e.before(r), this.#l = null, kt(this.#n, ()=>{
                    this.#n = null;
                }), this.#p());
            }));
        }
        #g() {
            try {
                if (this.is_pending = this.has_pending_snippet(), this.#c = 0, this.#u = 0, this.#o = Ke(()=>{
                    this.#a(this.#e);
                }), this.#c > 0) {
                    var t = this.#l = document.createDocumentFragment();
                    Gn(this.#o, t);
                    const r = this.#t.pending;
                    this.#n = Ke(()=>r(this.#e));
                } else this.#p();
            } catch (r) {
                this.error(r);
            }
        }
        #p() {
            this.is_pending = !1;
            for (const t of this.#_)se(t, we), Be(t);
            for (const t of this.#v)se(t, $e), Be(t);
            this.#_.clear(), this.#v.clear();
        }
        defer_effect(t) {
            wn(t, this.#_, this.#v);
        }
        is_rendered() {
            return !this.is_pending && (!this.parent || this.parent.is_rendered());
        }
        has_pending_snippet() {
            return !!this.#t.pending;
        }
        #h(t) {
            var r = Y, n = W, i = Ge;
            Je(this.#r), qe(this.#r), Mt(this.#r.ctx);
            try {
                return t();
            } catch (o) {
                return bn(o), null;
            } finally{
                Je(r), qe(n), Mt(i);
            }
        }
        #y(t) {
            if (!this.has_pending_snippet()) {
                this.parent && this.parent.#y(t);
                return;
            }
            this.#c += t, this.#c === 0 && (this.#p(), this.#n && kt(this.#n, ()=>{
                this.#n = null;
            }), this.#l && (this.#e.before(this.#l), this.#l = null));
        }
        update_pending_count(t) {
            this.#y(t), this.#u += t, !(!this.#d || this.#f) && (this.#f = !0, Rt(()=>{
                this.#f = !1, this.#d && Nt(this.#d, this.#u);
            }));
        }
        get_effect_pending() {
            return this.#b(), c(this.#d);
        }
        error(t) {
            var r = this.#t.onerror;
            let n = this.#t.failed;
            if (!r && !n) throw t;
            this.#o && (Re(this.#o), this.#o = null), this.#n && (Re(this.#n), this.#n = null), this.#i && (Re(this.#i), this.#i = null);
            var i = !1, o = !1;
            const a = ()=>{
                if (i) {
                    zi();
                    return;
                }
                i = !0, o && Ni(), this.#i !== null && kt(this.#i, ()=>{
                    this.#i = null;
                }), this.#h(()=>{
                    lt.ensure(), this.#g();
                });
            }, s = (l)=>{
                try {
                    o = !0, r?.(l, a), o = !1;
                } catch (u) {
                    ot(u, this.#r && this.#r.parent);
                }
                n && (this.#i = this.#h(()=>{
                    lt.ensure();
                    try {
                        return Ke(()=>{
                            var u = Y;
                            u.b = this, u.f |= Sr, n(this.#e, ()=>l, ()=>a);
                        });
                    } catch (u) {
                        return ot(u, this.#r.parent), null;
                    }
                }));
            };
            Rt(()=>{
                var l;
                try {
                    l = this.transform_error(t);
                } catch (u) {
                    ot(u, this.#r && this.#r.parent);
                    return;
                }
                l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(s, (u)=>ot(u, this.#r && this.#r.parent)) : s(l);
            });
        }
    }
    function Hi(e, t, r, n) {
        const i = An;
        var o = e.filter((f)=>!f.settled);
        if (r.length === 0 && o.length === 0) {
            n(t.map(i));
            return;
        }
        var a = Y, s = Xi(), l = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((f)=>f.promise)) : null;
        function u(f) {
            s();
            try {
                n(f);
            } catch (h) {
                (a.f & at) === 0 && ot(h, a);
            }
            Pr();
        }
        if (r.length === 0) {
            l.then(()=>u(t.map(i)));
            return;
        }
        function _() {
            s(), Promise.all(r.map((f)=>Zi(f))).then((f)=>u([
                    ...t.map(i),
                    ...f
                ])).catch((f)=>ot(f, a));
        }
        l ? l.then(_) : _();
    }
    function Xi() {
        var e = Y, t = W, r = Ge, n = Z;
        return function(o = !0) {
            Je(e), qe(t), Mt(r), o && n?.activate();
        };
    }
    function Pr(e = !0) {
        Je(null), qe(null), Mt(null), e && Z?.deactivate();
    }
    function Ji() {
        var e = Y.b, t = Z, r = e.is_rendered();
        return e.update_pending_count(1), t.increment(r), ()=>{
            e.update_pending_count(-1), t.decrement(r);
        };
    }
    function An(e) {
        var t = me | we, r = W !== null && (W.f & me) !== 0 ? W : null;
        return Y !== null && (Y.f |= Ft), {
            ctx: Ge,
            deps: null,
            effects: null,
            equals: pn,
            f: t,
            fn: e,
            reactions: null,
            rv: 0,
            v: be,
            wv: 0,
            parent: r ?? Y,
            ac: null
        };
    }
    function Zi(e, t, r) {
        Y === null && Ti();
        var i = void 0, o = At(be), a = !W, s = new Map;
        return ho(()=>{
            var l = dn();
            i = l.promise;
            try {
                Promise.resolve(e()).then(l.resolve, l.reject).finally(Pr);
            } catch (h) {
                l.reject(h), Pr();
            }
            var u = Z;
            if (a) {
                var _ = Ji();
                s.get(u)?.reject(yt), s.delete(u), s.set(u, l);
            }
            const f = (h, g = void 0)=>{
                if (u.activate(), g) g !== yt && (o.f |= st, Nt(o, g));
                else {
                    (o.f & st) !== 0 && (o.f ^= st), Nt(o, h);
                    for (const [d, w] of s){
                        if (s.delete(d), d === u) break;
                        w.reject(yt);
                    }
                }
                _ && _();
            };
            l.promise.then(f, (h)=>f(null, h || "unknown"));
        }), Cn(()=>{
            for (const l of s.values())l.reject(yt);
        }), new Promise((l)=>{
            function u(_) {
                function f() {
                    _ === i ? l(o) : u(i);
                }
                _.then(f, f);
            }
            u(i);
        });
    }
    function Qi(e) {
        const t = An(e);
        return t.equals = hn, t;
    }
    function eo(e) {
        var t = e.effects;
        if (t !== null) {
            e.effects = null;
            for(var r = 0; r < t.length; r += 1)Re(t[r]);
        }
    }
    function to(e) {
        for(var t = e.parent; t !== null;){
            if ((t.f & me) === 0) return (t.f & at) === 0 ? t : null;
            t = t.parent;
        }
        return null;
    }
    function jr(e) {
        var t, r = Y;
        Je(to(e));
        try {
            e.f &= ~St, eo(e), t = Un(e);
        } finally{
            Je(r);
        }
        return t;
    }
    function Tn(e) {
        var t = jr(e);
        if (!e.equals(t) && (e.wv = Wn(), (!Z?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
            se(e, pe);
            return;
        }
        Tt || (We !== null ? (Kr() || Z?.is_fork) && We.set(e, t) : Nr(e));
    }
    function ro(e) {
        if (e.effects !== null) for (const t of e.effects)(t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(yt), t.teardown = wi, t.ac = null, er(t, 0), Vr(t));
    }
    function Pn(e) {
        if (e.effects !== null) for (const t of e.effects)t.teardown && zt(t);
    }
    let Ir = new Set;
    const ct = new Map;
    let In = !1;
    function At(e, t) {
        var r = {
            f: 0,
            v: e,
            reactions: null,
            equals: pn,
            rv: 0,
            wv: 0
        };
        return r;
    }
    function S(e, t) {
        const r = At(e);
        return bo(r), r;
    }
    function no(e, t = !1, r = !0) {
        const n = At(e);
        return t || (n.equals = hn), n;
    }
    function p(e, t, r = !1) {
        W !== null && (!Ue || (W.f & $r) !== 0) && gn() && (W.f & (me | ft | Cr | $r)) !== 0 && (Ve === null || !Dt.call(Ve, e)) && Ci();
        let n = r ? rt(t) : t;
        return Nt(e, n);
    }
    function Nt(e, t) {
        if (!e.equals(t)) {
            var r = e.v;
            Tt ? ct.set(e, t) : ct.set(e, r), e.v = t;
            var n = lt.ensure();
            if (n.capture(e, r), (e.f & me) !== 0) {
                const i = e;
                (e.f & we) !== 0 && jr(i), Nr(i);
            }
            e.wv = Wn(), On(e, we), Y !== null && (Y.f & pe) !== 0 && (Y.f & (Ye | Pt)) === 0 && (ze === null ? mo([
                e
            ]) : ze.push(e)), !n.is_fork && Ir.size > 0 && !In && io();
        }
        return t;
    }
    function io() {
        In = !1;
        for (const e of Ir)(e.f & pe) !== 0 && se(e, $e), nr(e) && zt(e);
        Ir.clear();
    }
    function _r(e, t = 1) {
        var r = c(e), n = t === 1 ? r++ : r--;
        return p(e, r), n;
    }
    function Yt(e) {
        p(e, e.v + 1);
    }
    function On(e, t) {
        var r = e.reactions;
        if (r !== null) for(var n = r.length, i = 0; i < n; i++){
            var o = r[i], a = o.f, s = (a & we) === 0;
            if (s && se(o, t), (a & me) !== 0) {
                var l = o;
                We?.delete(l), (a & St) === 0 && (a & Fe && (o.f |= St), On(l, $e));
            } else s && ((a & ft) !== 0 && Qe !== null && Qe.add(o), Be(o));
        }
    }
    function rt(e) {
        if (typeof e != "object" || e === null || Ut in e) return e;
        const t = _n(e);
        if (t !== bi && t !== mi) return e;
        var r = new Map, n = Mr(e), i = S(0), o = Et, a = (s)=>{
            if (Et === o) return s();
            var l = W, u = Et;
            qe(null), Qr(o);
            var _ = s();
            return qe(l), Qr(u), _;
        };
        return n && r.set("length", S(e.length)), new Proxy(e, {
            defineProperty (s, l, u) {
                (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Li();
                var _ = r.get(l);
                return _ === void 0 ? a(()=>{
                    var f = S(u.value);
                    return r.set(l, f), f;
                }) : p(_, u.value, !0), !0;
            },
            deleteProperty (s, l) {
                var u = r.get(l);
                if (u === void 0) {
                    if (l in s) {
                        const _ = a(()=>S(be));
                        r.set(l, _), Yt(i);
                    }
                } else p(u, be), Yt(i);
                return !0;
            },
            get (s, l, u) {
                if (l === Ut) return e;
                var _ = r.get(l), f = l in s;
                if (_ === void 0 && (!f || Bt(s, l)?.writable) && (_ = a(()=>{
                    var g = rt(f ? s[l] : be), d = S(g);
                    return d;
                }), r.set(l, _)), _ !== void 0) {
                    var h = c(_);
                    return h === be ? void 0 : h;
                }
                return Reflect.get(s, l, u);
            },
            getOwnPropertyDescriptor (s, l) {
                var u = Reflect.getOwnPropertyDescriptor(s, l);
                if (u && "value" in u) {
                    var _ = r.get(l);
                    _ && (u.value = c(_));
                } else if (u === void 0) {
                    var f = r.get(l), h = f?.v;
                    if (f !== void 0 && h !== be) return {
                        enumerable: !0,
                        configurable: !0,
                        value: h,
                        writable: !0
                    };
                }
                return u;
            },
            has (s, l) {
                if (l === Ut) return !0;
                var u = r.get(l), _ = u !== void 0 && u.v !== be || Reflect.has(s, l);
                if (u !== void 0 || Y !== null && (!_ || Bt(s, l)?.writable)) {
                    u === void 0 && (u = a(()=>{
                        var h = _ ? rt(s[l]) : be, g = S(h);
                        return g;
                    }), r.set(l, u));
                    var f = c(u);
                    if (f === be) return !1;
                }
                return _;
            },
            set (s, l, u, _) {
                var f = r.get(l), h = l in s;
                if (n && l === "length") for(var g = u; g < f.v; g += 1){
                    var d = r.get(g + "");
                    d !== void 0 ? p(d, be) : g in s && (d = a(()=>S(be)), r.set(g + "", d));
                }
                if (f === void 0) (!h || Bt(s, l)?.writable) && (f = a(()=>S(void 0)), p(f, rt(u)), r.set(l, f));
                else {
                    h = f.v !== be;
                    var w = a(()=>rt(u));
                    p(f, w);
                }
                var N = Reflect.getOwnPropertyDescriptor(s, l);
                if (N?.set && N.set.call(_, u), !h) {
                    if (n && typeof l == "string") {
                        var P = r.get("length"), L = Number(l);
                        Number.isInteger(L) && L >= P.v && p(P, L + 1);
                    }
                    Yt(i);
                }
                return !0;
            },
            ownKeys (s) {
                c(i);
                var l = Reflect.ownKeys(s).filter((f)=>{
                    var h = r.get(f);
                    return h === void 0 || h.v !== be;
                });
                for (var [u, _] of r)_.v !== be && !(u in s) && l.push(u);
                return l;
            },
            setPrototypeOf () {
                Mi();
            }
        });
    }
    function Hr(e) {
        try {
            if (e !== null && typeof e == "object" && Ut in e) return e[Ut];
        } catch  {}
        return e;
    }
    function oo(e, t) {
        return Object.is(Hr(e), Hr(t));
    }
    var Xr, Rn, Dn, Ln;
    function ao() {
        if (Xr === void 0) {
            Xr = window, Rn = /Firefox/.test(navigator.userAgent);
            var e = Element.prototype, t = Node.prototype, r = Text.prototype;
            Dn = Bt(t, "firstChild").get, Ln = Bt(t, "nextSibling").get, Ur(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ur(r) && (r.__t = void 0);
        }
    }
    function ut(e = "") {
        return document.createTextNode(e);
    }
    function jt(e) {
        return Dn.call(e);
    }
    function rr(e) {
        return Ln.call(e);
    }
    function v(e, t) {
        return jt(e);
    }
    function et(e, t = !1) {
        {
            var r = jt(e);
            return r instanceof Comment && r.data === "" ? rr(r) : r;
        }
    }
    function b(e, t = 1, r = !1) {
        let n = e;
        for(; t--;)n = rr(n);
        return n;
    }
    function so(e) {
        e.textContent = "";
    }
    function Mn() {
        return !1;
    }
    function lo(e, t, r) {
        return document.createElementNS(fn, e, void 0);
    }
    let Jr = !1;
    function co() {
        Jr || (Jr = !0, document.addEventListener("reset", (e)=>{
            Promise.resolve().then(()=>{
                if (!e.defaultPrevented) for (const t of e.target.elements)t.__on_r?.();
            });
        }, {
            capture: !0
        }));
    }
    function zr(e) {
        var t = W, r = Y;
        qe(null), Je(null);
        try {
            return e();
        } finally{
            qe(t), Je(r);
        }
    }
    function uo(e, t, r, n = r) {
        e.addEventListener(t, ()=>zr(r));
        const i = e.__on_r;
        i ? e.__on_r = ()=>{
            i(), n(!0);
        } : e.__on_r = ()=>n(!0), co();
    }
    function fo(e) {
        Y === null && (W === null && Ri(), Oi()), Tt && Ii();
    }
    function _o(e, t) {
        var r = t.last;
        r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
    }
    function vt(e, t) {
        var r = Y;
        r !== null && (r.f & Ce) !== 0 && (e |= Ce);
        var n = {
            ctx: Ge,
            deps: null,
            nodes: null,
            f: e | we | Fe,
            first: null,
            fn: t,
            last: null,
            next: null,
            parent: r,
            b: r && r.b,
            prev: null,
            teardown: null,
            wv: 0,
            ac: null
        }, i = n;
        if ((e & tr) !== 0) Ct !== null ? Ct.push(n) : Be(n);
        else if (t !== null) {
            try {
                zt(n);
            } catch (a) {
                throw Re(n), a;
            }
            i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && (i.f & Ft) === 0 && (i = i.first, (e & ft) !== 0 && (e & Lt) !== 0 && i !== null && (i.f |= Lt));
        }
        if (i !== null && (i.parent = r, r !== null && _o(i, r), W !== null && (W.f & me) !== 0 && (e & Pt) === 0)) {
            var o = W;
            (o.effects ??= []).push(i);
        }
        return n;
    }
    function Kr() {
        return W !== null && !Ue;
    }
    function Cn(e) {
        const t = vt(Qt, null);
        return se(t, pe), t.teardown = e, t;
    }
    function vo(e) {
        fo();
        var t = Y.f, r = !W && (t & Ye) !== 0 && (t & Kt) === 0;
        if (r) {
            var n = Ge;
            (n.e ??= []).push(e);
        } else return Nn(e);
    }
    function Nn(e) {
        return vt(tr | Ei, e);
    }
    function po(e) {
        lt.ensure();
        const t = vt(Pt | Ft, e);
        return (r = {})=>new Promise((n)=>{
                r.outro ? kt(t, ()=>{
                    Re(t), n(void 0);
                }) : (Re(t), n(void 0));
            });
    }
    function ho(e) {
        return vt(Cr | Ft, e);
    }
    function jn(e, t = 0) {
        return vt(Qt | t, e);
    }
    function D(e, t = [], r = [], n = []) {
        Hi(n, t, r, (i)=>{
            vt(Qt, ()=>e(...i.map(c)));
        });
    }
    function Fr(e, t = 0) {
        var r = vt(ft | t, e);
        return r;
    }
    function Ke(e) {
        return vt(Ye | Ft, e);
    }
    function zn(e) {
        var t = e.teardown;
        if (t !== null) {
            const r = Tt, n = W;
            Zr(!0), qe(null);
            try {
                t.call(null);
            } finally{
                Zr(r), qe(n);
            }
        }
    }
    function Vr(e, t = !1) {
        var r = e.first;
        for(e.first = e.last = null; r !== null;){
            const i = r.ac;
            i !== null && zr(()=>{
                i.abort(yt);
            });
            var n = r.next;
            (r.f & Pt) !== 0 ? r.parent = null : Re(r, t), r = n;
        }
    }
    function go(e) {
        for(var t = e.first; t !== null;){
            var r = t.next;
            (t.f & Ye) === 0 && Re(t), t = r;
        }
    }
    function Re(e, t = !0) {
        var r = !1;
        (t || (e.f & ki) !== 0) && e.nodes !== null && e.nodes.end !== null && (yo(e.nodes.start, e.nodes.end), r = !0), Vr(e, t && !r), er(e, 0), se(e, at);
        var n = e.nodes && e.nodes.t;
        if (n !== null) for (const o of n)o.stop();
        zn(e);
        var i = e.parent;
        i !== null && i.first !== null && Kn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
    }
    function yo(e, t) {
        for(; e !== null;){
            var r = e === t ? null : rr(e);
            e.remove(), e = r;
        }
    }
    function Kn(e) {
        var t = e.parent, r = e.prev, n = e.next;
        r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
    }
    function kt(e, t, r = !0) {
        var n = [];
        Fn(e, n, !0);
        var i = ()=>{
            r && Re(e), t && t();
        }, o = n.length;
        if (o > 0) {
            var a = ()=>--o || i();
            for (var s of n)s.out(a);
        } else i();
    }
    function Fn(e, t, r) {
        if ((e.f & Ce) === 0) {
            e.f ^= Ce;
            var n = e.nodes && e.nodes.t;
            if (n !== null) for (const s of n)(s.is_global || r) && t.push(s);
            for(var i = e.first; i !== null;){
                var o = i.next, a = (i.f & Lt) !== 0 || (i.f & Ye) !== 0 && (e.f & ft) !== 0;
                Fn(i, t, a ? r : !1), i = o;
            }
        }
    }
    function Gr(e) {
        Vn(e, !0);
    }
    function Vn(e, t) {
        if ((e.f & Ce) !== 0) {
            e.f ^= Ce, (e.f & pe) === 0 && (se(e, we), Be(e));
            for(var r = e.first; r !== null;){
                var n = r.next, i = (r.f & Lt) !== 0 || (r.f & Ye) !== 0;
                Vn(r, i ? t : !1), r = n;
            }
            var o = e.nodes && e.nodes.t;
            if (o !== null) for (const a of o)(a.is_global || t) && a.in();
        }
    }
    function Gn(e, t) {
        if (e.nodes) for(var r = e.nodes.start, n = e.nodes.end; r !== null;){
            var i = r === n ? null : rr(r);
            t.append(r), r = i;
        }
    }
    let cr = !1, Tt = !1;
    function Zr(e) {
        Tt = e;
    }
    let W = null, Ue = !1;
    function qe(e) {
        W = e;
    }
    let Y = null;
    function Je(e) {
        Y = e;
    }
    let Ve = null;
    function bo(e) {
        W !== null && (Ve === null ? Ve = [
            e
        ] : Ve.push(e));
    }
    let Pe = null, Le = 0, ze = null;
    function mo(e) {
        ze = e;
    }
    let qn = 1, mt = 0, Et = mt;
    function Qr(e) {
        Et = e;
    }
    function Wn() {
        return ++qn;
    }
    function nr(e) {
        var t = e.f;
        if ((t & we) !== 0) return !0;
        if (t & me && (e.f &= ~St), (t & $e) !== 0) {
            for(var r = e.deps, n = r.length, i = 0; i < n; i++){
                var o = r[i];
                if (nr(o) && Tn(o), o.wv > e.wv) return !0;
            }
            (t & Fe) !== 0 && We === null && se(e, pe);
        }
        return !1;
    }
    function Bn(e, t, r = !0) {
        var n = e.reactions;
        if (n !== null && !(Ve !== null && Dt.call(Ve, e))) for(var i = 0; i < n.length; i++){
            var o = n[i];
            (o.f & me) !== 0 ? Bn(o, t, !1) : t === o && (r ? se(o, we) : (o.f & pe) !== 0 && se(o, $e), Be(o));
        }
    }
    function Un(e) {
        var t = Pe, r = Le, n = ze, i = W, o = Ve, a = Ge, s = Ue, l = Et, u = e.f;
        Pe = null, Le = 0, ze = null, W = (u & (Ye | Pt)) === 0 ? e : null, Ve = null, Mt(e.ctx), Ue = !1, Et = ++mt, e.ac !== null && (zr(()=>{
            e.ac.abort(yt);
        }), e.ac = null);
        try {
            e.f |= Ar;
            var _ = e.fn, f = _();
            e.f |= Kt;
            var h = e.deps, g = Z?.is_fork;
            if (Pe !== null) {
                var d;
                if (g || er(e, Le), h !== null && Le > 0) for(h.length = Le + Pe.length, d = 0; d < Pe.length; d++)h[Le + d] = Pe[d];
                else e.deps = h = Pe;
                if (Kr() && (e.f & Fe) !== 0) for(d = Le; d < h.length; d++)(h[d].reactions ??= []).push(e);
            } else !g && h !== null && Le < h.length && (er(e, Le), h.length = Le);
            if (gn() && ze !== null && !Ue && h !== null && (e.f & (me | $e | we)) === 0) for(d = 0; d < ze.length; d++)Bn(ze[d], e);
            if (i !== null && i !== e) {
                if (mt++, i.deps !== null) for(let w = 0; w < r; w += 1)i.deps[w].rv = mt;
                if (t !== null) for (const w of t)w.rv = mt;
                ze !== null && (n === null ? n = ze : n.push(...ze));
            }
            return (e.f & st) !== 0 && (e.f ^= st), f;
        } catch (w) {
            return bn(w);
        } finally{
            e.f ^= Ar, Pe = t, Le = r, ze = n, W = i, Ve = o, Mt(a), Ue = s, Et = l;
        }
    }
    function wo(e, t) {
        let r = t.reactions;
        if (r !== null) {
            var n = hi.call(r, e);
            if (n !== -1) {
                var i = r.length - 1;
                i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
            }
        }
        if (r === null && (t.f & me) !== 0 && (Pe === null || !Dt.call(Pe, t))) {
            var o = t;
            (o.f & Fe) !== 0 && (o.f ^= Fe, o.f &= ~St), Nr(o), ro(o), er(o, 0);
        }
    }
    function er(e, t) {
        var r = e.deps;
        if (r !== null) for(var n = t; n < r.length; n++)wo(e, r[n]);
    }
    function zt(e) {
        var t = e.f;
        if ((t & at) === 0) {
            se(e, pe);
            var r = Y, n = cr;
            Y = e, cr = !0;
            try {
                (t & (ft | vn)) !== 0 ? go(e) : Vr(e), zn(e);
                var i = Un(e);
                e.teardown = typeof i == "function" ? i : null, e.wv = qn;
                var o;
                Er && Fi && (e.f & we) !== 0 && e.deps;
            } finally{
                cr = n, Y = r;
            }
        }
    }
    async function xo() {
        await Promise.resolve(), qi();
    }
    function c(e) {
        var t = e.f, r = (t & me) !== 0;
        if (W !== null && !Ue) {
            var n = Y !== null && (Y.f & at) !== 0;
            if (!n && (Ve === null || !Dt.call(Ve, e))) {
                var i = W.deps;
                if ((W.f & Ar) !== 0) e.rv < mt && (e.rv = mt, Pe === null && i !== null && i[Le] === e ? Le++ : Pe === null ? Pe = [
                    e
                ] : Pe.push(e));
                else {
                    (W.deps ??= []).push(e);
                    var o = e.reactions;
                    o === null ? e.reactions = [
                        W
                    ] : Dt.call(o, W) || o.push(W);
                }
            }
        }
        if (Tt && ct.has(e)) return ct.get(e);
        if (r) {
            var a = e;
            if (Tt) {
                var s = a.v;
                return ((a.f & pe) === 0 && a.reactions !== null || Yn(a)) && (s = jr(a)), ct.set(a, s), s;
            }
            var l = (a.f & Fe) === 0 && !Ue && W !== null && (cr || (W.f & Fe) !== 0), u = (a.f & Kt) === 0;
            nr(a) && (l && (a.f |= Fe), Tn(a)), l && !u && (Pn(a), $n(a));
        }
        if (We?.has(e)) return We.get(e);
        if ((e.f & st) !== 0) throw e.v;
        return e.v;
    }
    function $n(e) {
        if (e.f |= Fe, e.deps !== null) for (const t of e.deps)(t.reactions ??= []).push(e), (t.f & me) !== 0 && (t.f & Fe) === 0 && (Pn(t), $n(t));
    }
    function Yn(e) {
        if (e.v === be) return !0;
        if (e.deps === null) return !1;
        for (const t of e.deps)if (ct.has(t) || (t.f & me) !== 0 && Yn(t)) return !0;
        return !1;
    }
    function Hn(e) {
        var t = Ue;
        try {
            return Ue = !0, e();
        } finally{
            Ue = t;
        }
    }
    const Gt = Symbol("events"), Xn = new Set, Or = new Set;
    function X(e, t, r) {
        (t[Gt] ??= {})[e] = r;
    }
    function It(e) {
        for(var t = 0; t < e.length; t++)Xn.add(e[t]);
        for (var r of Or)r(e);
    }
    let en = null;
    function tn(e) {
        var t = this, r = t.ownerDocument, n = e.type, i = e.composedPath?.() || [], o = i[0] || e.target;
        en = e;
        var a = 0, s = en === e && e[Gt];
        if (s) {
            var l = i.indexOf(s);
            if (l !== -1 && (t === document || t === window)) {
                e[Gt] = t;
                return;
            }
            var u = i.indexOf(t);
            if (u === -1) return;
            l <= u && (a = l);
        }
        if (o = i[a] || e.target, o !== t) {
            gi(e, "currentTarget", {
                configurable: !0,
                get () {
                    return o || r;
                }
            });
            var _ = W, f = Y;
            qe(null), Je(null);
            try {
                for(var h, g = []; o !== null;){
                    var d = o.assignedSlot || o.parentNode || o.host || null;
                    try {
                        var w = o[Gt]?.[n];
                        w != null && (!o.disabled || e.target === o) && w.call(o, e);
                    } catch (N) {
                        h ? g.push(N) : h = N;
                    }
                    if (e.cancelBubble || d === t || d === null) break;
                    o = d;
                }
                if (h) {
                    for (let N of g)queueMicrotask(()=>{
                        throw N;
                    });
                    throw h;
                }
            } finally{
                e[Gt] = t, delete e.currentTarget, qe(_), Je(f);
            }
        }
    }
    const ko = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
        createHTML: (e)=>e
    });
    function Eo(e) {
        return ko?.createHTML(e) ?? e;
    }
    function Jn(e) {
        var t = lo("template");
        return t.innerHTML = Eo(e.replaceAll("<!>", "<!---->")), t.content;
    }
    function dr(e, t) {
        var r = Y;
        r.nodes === null && (r.nodes = {
            start: e,
            end: t,
            a: null,
            t: null
        });
    }
    function O(e, t) {
        var r = (t & vi) !== 0, n = (t & pi) !== 0, i, o = !e.startsWith("<!>");
        return ()=>{
            i === void 0 && (i = Jn(o ? e : "<!>" + e), r || (i = jt(i)));
            var a = n || Rn ? document.importNode(i, !0) : i.cloneNode(!0);
            if (r) {
                var s = jt(a), l = a.lastChild;
                dr(s, l);
            } else dr(a, a);
            return a;
        };
    }
    function So(e, t, r = "svg") {
        var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
        return ()=>{
            if (!o) {
                var a = Jn(i), s = jt(a);
                o = jt(s);
            }
            var l = o.cloneNode(!0);
            return dr(l, l), l;
        };
    }
    function Zn(e, t) {
        return So(e, t, "svg");
    }
    function Ao() {
        var e = document.createDocumentFragment(), t = document.createComment(""), r = ut();
        return e.append(t, r), dr(t, r), e;
    }
    function T(e, t) {
        e !== null && e.before(t);
    }
    const To = [
        "touchstart",
        "touchmove"
    ];
    function Po(e) {
        return To.includes(e);
    }
    function m(e, t) {
        var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
        r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = `${r}`);
    }
    function Io(e, t) {
        return Oo(e, t);
    }
    const ar = new Map;
    function Oo(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: a = !0, transformError: s }) {
        ao();
        var l = void 0, u = po(()=>{
            var _ = r ?? t.appendChild(ut());
            $i(_, {
                pending: ()=>{}
            }, (g)=>{
                _t({});
                var d = Ge;
                o && (d.c = o), i && (n.$$events = i), l = e(g, n) || {}, dt();
            }, s);
            var f = new Set, h = (g)=>{
                for(var d = 0; d < g.length; d++){
                    var w = g[d];
                    if (!f.has(w)) {
                        f.add(w);
                        var N = Po(w);
                        for (const E of [
                            t,
                            document
                        ]){
                            var P = ar.get(E);
                            P === void 0 && (P = new Map, ar.set(E, P));
                            var L = P.get(w);
                            L === void 0 ? (E.addEventListener(w, tn, {
                                passive: N
                            }), P.set(w, 1)) : P.set(w, L + 1);
                        }
                    }
                }
            };
            return h(vr(Xn)), Or.add(h), ()=>{
                for (var g of f)for (const N of [
                    t,
                    document
                ]){
                    var d = ar.get(N), w = d.get(g);
                    --w == 0 ? (N.removeEventListener(g, tn), d.delete(g), d.size === 0 && ar.delete(N)) : d.set(g, w);
                }
                Or.delete(h), _ !== r && _.parentNode?.removeChild(_);
            };
        });
        return Ro.set(l, u), l;
    }
    let Ro = new WeakMap;
    class Do {
        anchor;
        #e = new Map;
        #s = new Map;
        #t = new Map;
        #a = new Set;
        #r = !0;
        constructor(t, r = !0){
            this.anchor = t, this.#r = r;
        }
        #o = (t)=>{
            if (this.#e.has(t)) {
                var r = this.#e.get(t), n = this.#s.get(r);
                if (n) Gr(n), this.#a.delete(r);
                else {
                    var i = this.#t.get(r);
                    i && (this.#s.set(r, i.effect), this.#t.delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
                }
                for (const [o, a] of this.#e){
                    if (this.#e.delete(o), o === t) break;
                    const s = this.#t.get(a);
                    s && (Re(s.effect), this.#t.delete(a));
                }
                for (const [o, a] of this.#s){
                    if (o === r || this.#a.has(o)) continue;
                    const s = ()=>{
                        if (Array.from(this.#e.values()).includes(o)) {
                            var u = document.createDocumentFragment();
                            Gn(a, u), u.append(ut()), this.#t.set(o, {
                                effect: a,
                                fragment: u
                            });
                        } else Re(a);
                        this.#a.delete(o), this.#s.delete(o);
                    };
                    this.#r || !n ? (this.#a.add(o), kt(a, s, !1)) : s();
                }
            }
        };
        #n = (t)=>{
            this.#e.delete(t);
            const r = Array.from(this.#e.values());
            for (const [n, i] of this.#t)r.includes(n) || (Re(i.effect), this.#t.delete(n));
        };
        ensure(t, r) {
            var n = Z, i = Mn();
            if (r && !this.#s.has(t) && !this.#t.has(t)) if (i) {
                var o = document.createDocumentFragment(), a = ut();
                o.append(a), this.#t.set(t, {
                    effect: Ke(()=>r(a)),
                    fragment: o
                });
            } else this.#s.set(t, Ke(()=>r(this.anchor)));
            if (this.#e.set(n, t), i) {
                for (const [s, l] of this.#s)s === t ? n.unskip_effect(l) : n.skip_effect(l);
                for (const [s, l] of this.#t)s === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
                n.oncommit(this.#o), n.ondiscard(this.#n);
            } else this.#o(n);
        }
    }
    function $(e, t, r = !1) {
        var n = new Do(e), i = r ? Lt : 0;
        function o(a, s) {
            n.ensure(a, s);
        }
        Fr(()=>{
            var a = !1;
            t((s, l = 0)=>{
                a = !0, o(l, s);
            }), a || o(!1, null);
        }, i);
    }
    function Lo(e, t) {
        return t;
    }
    function Mo(e, t, r) {
        for(var n = [], i = t.length, o, a = t.length, s = 0; s < i; s++){
            let f = t[s];
            kt(f, ()=>{
                if (o) {
                    if (o.pending.delete(f), o.done.add(f), o.pending.size === 0) {
                        var h = e.outrogroups;
                        Rr(vr(o.done)), h.delete(o), h.size === 0 && (e.outrogroups = null);
                    }
                } else a -= 1;
            }, !1);
        }
        if (a === 0) {
            var l = n.length === 0 && r !== null;
            if (l) {
                var u = r, _ = u.parentNode;
                so(_), _.append(u), e.items.clear();
            }
            Rr(t, !l);
        } else o = {
            pending: new Set(t),
            done: new Set
        }, (e.outrogroups ??= new Set).add(o);
    }
    function Rr(e, t = !0) {
        for(var r = 0; r < e.length; r++)Re(e[r], t);
    }
    var rn;
    function hr(e, t, r, n, i, o = null) {
        var a = e, s = new Map;
        {
            var l = e;
            a = l.appendChild(ut());
        }
        var u = null, _ = Qi(()=>{
            var N = r();
            return Mr(N) ? N : N == null ? [] : vr(N);
        }), f, h = !0;
        function g() {
            w.fallback = u, Co(w, f, a, t, n), u !== null && (f.length === 0 ? (u.f & it) === 0 ? Gr(u) : (u.f ^= it, qt(u, null, a)) : kt(u, ()=>{
                u = null;
            }));
        }
        var d = Fr(()=>{
            f = c(_);
            for(var N = f.length, P = new Set, L = Z, E = Mn(), M = 0; M < N; M += 1){
                var C = f[M], K = n(C, M), F = h ? null : s.get(K);
                F ? (F.v && Nt(F.v, C), F.i && Nt(F.i, M), E && L.unskip_effect(F.e)) : (F = No(s, h ? a : rn ??= ut(), C, K, M, i, t, r), h || (F.e.f |= it), s.set(K, F)), P.add(K);
            }
            if (N === 0 && o && !u && (h ? u = Ke(()=>o(a)) : (u = Ke(()=>o(rn ??= ut())), u.f |= it)), N > P.size && Pi(), !h) if (E) {
                for (const [H, Se] of s)P.has(H) || L.skip_effect(Se.e);
                L.oncommit(g), L.ondiscard(()=>{});
            } else g();
            c(_);
        }), w = {
            effect: d,
            items: s,
            outrogroups: null,
            fallback: u
        };
        h = !1;
    }
    function Vt(e) {
        for(; e !== null && (e.f & Ye) === 0;)e = e.next;
        return e;
    }
    function Co(e, t, r, n, i) {
        var o = t.length, a = e.items, s = Vt(e.effect.first), l, u = null, _ = [], f = [], h, g, d, w;
        for(w = 0; w < o; w += 1){
            if (h = t[w], g = i(h, w), d = a.get(g).e, e.outrogroups !== null) for (const H of e.outrogroups)H.pending.delete(d), H.done.delete(d);
            if ((d.f & it) !== 0) if (d.f ^= it, d === s) qt(d, null, r);
            else {
                var N = u ? u.next : s;
                d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), nt(e, u, d), nt(e, d, N), qt(d, N, r), u = d, _ = [], f = [], s = Vt(u.next);
                continue;
            }
            if ((d.f & Ce) !== 0 && Gr(d), d !== s) {
                if (l !== void 0 && l.has(d)) {
                    if (_.length < f.length) {
                        var P = f[0], L;
                        u = P.prev;
                        var E = _[0], M = _[_.length - 1];
                        for(L = 0; L < _.length; L += 1)qt(_[L], P, r);
                        for(L = 0; L < f.length; L += 1)l.delete(f[L]);
                        nt(e, E.prev, M.next), nt(e, u, E), nt(e, M, P), s = P, u = M, w -= 1, _ = [], f = [];
                    } else l.delete(d), qt(d, s, r), nt(e, d.prev, d.next), nt(e, d, u === null ? e.effect.first : u.next), nt(e, u, d), u = d;
                    continue;
                }
                for(_ = [], f = []; s !== null && s !== d;)(l ??= new Set).add(s), f.push(s), s = Vt(s.next);
                if (s === null) continue;
            }
            (d.f & it) === 0 && _.push(d), u = d, s = Vt(d.next);
        }
        if (e.outrogroups !== null) {
            for (const H of e.outrogroups)H.pending.size === 0 && (Rr(vr(H.done)), e.outrogroups?.delete(H));
            e.outrogroups.size === 0 && (e.outrogroups = null);
        }
        if (s !== null || l !== void 0) {
            var C = [];
            if (l !== void 0) for (d of l)(d.f & Ce) === 0 && C.push(d);
            for(; s !== null;)(s.f & Ce) === 0 && s !== e.fallback && C.push(s), s = Vt(s.next);
            var K = C.length;
            if (K > 0) {
                var F = o === 0 ? r : null;
                Mo(e, C, F);
            }
        }
    }
    function No(e, t, r, n, i, o, a, s) {
        var l = (a & fi) !== 0 ? (a & di) === 0 ? no(r, !1, !1) : At(r) : null, u = (a & _i) !== 0 ? At(i) : null;
        return {
            v: l,
            i: u,
            e: Ke(()=>(o(t, l ?? r, u ?? i, s), ()=>{
                    e.delete(n);
                }))
        };
    }
    function qt(e, t, r) {
        if (e.nodes) for(var n = e.nodes.start, i = e.nodes.end, o = t && (t.f & it) === 0 ? t.nodes.start : r; n !== null;){
            var a = rr(n);
            if (o.before(n), n === i) return;
            n = a;
        }
    }
    function nt(e, t, r) {
        t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
    }
    const nn = [
        ...` 	
\r\f \v\uFEFF`
    ];
    function jo(e, t, r) {
        var n = e == null ? "" : "" + e;
        if (r) {
            for (var i of Object.keys(r))if (r[i]) n = n ? n + " " + i : i;
            else if (n.length) for(var o = i.length, a = 0; (a = n.indexOf(i, a)) >= 0;){
                var s = a + o;
                (a === 0 || nn.includes(n[a - 1])) && (s === n.length || nn.includes(n[s])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(s + 1) : a = s;
            }
        }
        return n === "" ? null : n;
    }
    function gt(e, t, r, n, i, o) {
        var a = e.__className;
        if (a !== r || a === void 0) {
            var s = jo(r, n, o);
            s == null ? e.removeAttribute("class") : e.className = s, e.__className = r;
        } else if (o && i !== o) for(var l in o){
            var u = !!o[l];
            (i == null || u !== !!i[l]) && e.classList.toggle(l, u);
        }
        return o;
    }
    function Qn(e, t, r = !1) {
        if (e.multiple) {
            if (t == null) return;
            if (!Mr(t)) return ji();
            for (var n of e.options)n.selected = t.includes(on(n));
            return;
        }
        for (n of e.options){
            var i = on(n);
            if (oo(i, t)) {
                n.selected = !0;
                return;
            }
        }
        (!r || t !== void 0) && (e.selectedIndex = -1);
    }
    function zo(e) {
        var t = new MutationObserver(()=>{
            Qn(e, e.__value);
        });
        t.observe(e, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: [
                "value"
            ]
        }), Cn(()=>{
            t.disconnect();
        });
    }
    function on(e) {
        return "__value" in e ? e.__value : e.value;
    }
    const Ko = Symbol("is custom element"), Fo = Symbol("is html"), Vo = Ai ? "progress" : "PROGRESS";
    function qr(e, t) {
        var r = Wr(e);
        r.value === (r.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== Vo) || (e.value = t ?? "");
    }
    function Go(e, t) {
        var r = Wr(e);
        r.checked !== (r.checked = t ?? void 0) && (e.checked = t);
    }
    function Oe(e, t, r, n) {
        var i = Wr(e);
        i[t] !== (i[t] = r) && (t === "loading" && (e[Si] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && qo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
    }
    function Wr(e) {
        return e.__attributes ??= {
            [Ko]: e.nodeName.includes("-"),
            [Fo]: e.namespaceURI === fn
        };
    }
    var an = new Map;
    function qo(e) {
        var t = e.getAttribute("is") || e.nodeName, r = an.get(t);
        if (r) return r;
        an.set(t, r = []);
        for(var n, i = e, o = Element.prototype; o !== i;){
            n = yi(i);
            for(var a in n)n[a].set && r.push(a);
            i = _n(i);
        }
        return r;
    }
    function Me(e, t, r = t) {
        var n = new WeakSet;
        uo(e, "input", async (i)=>{
            var o = i ? e.defaultValue : e.value;
            if (o = wr(e) ? xr(o) : o, r(o), Z !== null && n.add(Z), await xo(), o !== (o = t())) {
                var a = e.selectionStart, s = e.selectionEnd, l = e.value.length;
                if (e.value = o ?? "", s !== null) {
                    var u = e.value.length;
                    a === s && s === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = a, e.selectionEnd = Math.min(s, u));
                }
            }
        }), Hn(t) == null && e.value && (r(wr(e) ? xr(e.value) : e.value), Z !== null && n.add(Z)), jn(()=>{
            var i = t();
            if (e === document.activeElement) {
                var o = Tr ?? Z;
                if (n.has(o)) return;
            }
            wr(e) && i === xr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
        });
    }
    function wr(e) {
        var t = e.type;
        return t === "number" || t === "range";
    }
    function xr(e) {
        return e === "" ? null : +e;
    }
    const Wo = "modulepreload", Bo = function(e, t) {
        return new URL(e, t).href;
    }, sn = {}, ve = function(t, r, n) {
        let i = Promise.resolve();
        if (r && r.length > 0) {
            let u = function(_) {
                return Promise.all(_.map((f)=>Promise.resolve(f).then((h)=>({
                            status: "fulfilled",
                            value: h
                        }), (h)=>({
                            status: "rejected",
                            reason: h
                        }))));
            };
            const a = document.getElementsByTagName("link"), s = document.querySelector("meta[property=csp-nonce]"), l = s?.nonce || s?.getAttribute("nonce");
            i = u(r.map((_)=>{
                if (_ = Bo(_, n), _ in sn) return;
                sn[_] = !0;
                const f = _.endsWith(".css"), h = f ? '[rel="stylesheet"]' : "";
                if (n) for(let d = a.length - 1; d >= 0; d--){
                    const w = a[d];
                    if (w.href === _ && (!f || w.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${_}"]${h}`)) return;
                const g = document.createElement("link");
                if (g.rel = f ? "stylesheet" : Wo, f || (g.as = "script"), g.crossOrigin = "", g.href = _, l && g.setAttribute("nonce", l), document.head.appendChild(g), f) return new Promise((d, w)=>{
                    g.addEventListener("load", d), g.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${_}`)));
                });
            }));
        }
        function o(a) {
            const s = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (s.payload = a, window.dispatchEvent(s), !s.defaultPrevented) throw a;
        }
        return i.then((a)=>{
            for (const s of a || [])s.status === "rejected" && o(s.reason);
            return t().catch(o);
        });
    }, Uo = "Browser-based PGP encryption powered by WebAssembly", $o = "All cryptography runs locally in your browser via WebAssembly. No data is sent to any server.", Yo = "Loading cryptographic engine...", Ho = "Failed to load WASM module: {error}", Xo = "Encrypt", Jo = "Decrypt", Zo = "Sign", Qo = "Verify", ea = "Keys", ta = "Encrypt Message", ra = "Type your message here...", na = "Recipients", ia = "No keys available. Add keys in the Keys tab.", oa = "Encrypt", aa = "Enter a message to encrypt.", sa = "Select at least one recipient key.", la = "(own)", ca = "Decrypt Message", ua = "Paste encrypted PGP message here...", fa = "Passphrase (if key is protected)", _a = "Decrypt", da = "Paste an encrypted PGP message.", va = "No private keys available. Generate or import a key in the Keys tab.", pa = "Decryption failed. You may not have the correct private key, or the passphrase is wrong.", ha = "Sign Message", ga = "Type your message here...", ya = "Passphrase (if key is protected)", ba = "Sign", ma = "Enter a message to sign.", wa = "No private keys available. Generate or import a key in the Keys tab.", xa = "Signing failed. Your key may require a passphrase.", ka = "Verify Signature", Ea = "Paste signed PGP message here...", Sa = "Verify", Aa = "Paste a signed PGP message.", Ta = "No keys in keyring. Import the signer's public key first.", Pa = "Valid Signature", Ia = "Signed by: {name}", Oa = "Verification Failed", Ra = "The signer's key may not be in your keyring.", Da = "Key Manager", La = "Generate", Ma = "Import", Ca = "No keys yet. Generate or import one to get started.", Na = "(own key)", ja = "(unnamed)", za = "Generate New Key Pair", Ka = "Name", Fa = "Email", Va = "Passphrase (optional)", Ga = "Name and email are required.", qa = "Cancel", Wa = "Generate", Ba = "Generating...", Ua = "Key pair generated!", $a = "Import Key", Ya = "Paste ASCII-armored PGP key...", Ha = "Paste a PGP public or private key.", Xa = "Cancel", Ja = "Import", Za = "Importing...", Qa = "Imported key for {name}.", es = "Export", ts = "Delete", rs = "Key deleted.", ns = "Public key copied to clipboard.", is = "Copy", os = "System", as = "Light", ss = "Dark", ls = "Skip tutorial", cs = "Step {current} of {total}", us = "Next", fs = "Back", _s = "Get Started", ds = "Welcome to KeychainPGP", vs = "This quick tutorial will walk you through PGP encryption. You'll create your key pair and decrypt your first secret message.", ps = "Create Your Key Pair", hs = "A PGP key pair has two parts: a public key you share with others so they can send you encrypted messages, and a private key you keep secret to decrypt them.", gs = "Generate My Key", ys = "Generating...", bs = "Key pair created and saved!", ms = "Decrypt Your First Message", ws = "We just encrypted a welcome message using your public key. Only your private key can unlock it. Give it a try!", xs = "Decrypt Message", ks = "Message decrypted!", Es = "To exchange encrypted messages with someone, import their public key in the Keys tab. They'll need your public key too.", Ss = "You're Ready!", As = "You've mastered the basics of PGP encryption. Use the tabs above to encrypt, decrypt, sign, and verify messages. Import contacts' public keys in the Keys tab to communicate securely.", Ts = `Hello World!

Congratulations! You have successfully decrypted your first PGP message.

This message was encrypted with your public key and could only be decrypted with your private key. This is the foundation of PGP: only the intended recipient can read the message.

Enjoy using KeychainPGP!`, Ps = "Language", Is = {
        app_subtitle: Uo,
        app_footer: $o,
        loading: Yo,
        loading_error: Ho,
        tab_encrypt: Xo,
        tab_decrypt: Jo,
        tab_sign: Zo,
        tab_verify: Qo,
        tab_keys: ea,
        encrypt_title: ta,
        encrypt_placeholder: ra,
        encrypt_recipients: na,
        encrypt_no_keys: ia,
        encrypt_btn: oa,
        encrypt_error_empty: aa,
        encrypt_error_no_recipient: sa,
        encrypt_own_label: la,
        decrypt_title: ca,
        decrypt_placeholder: ua,
        decrypt_passphrase: fa,
        decrypt_btn: _a,
        decrypt_error_empty: da,
        decrypt_error_no_key: va,
        decrypt_error_failed: pa,
        sign_title: ha,
        sign_placeholder: ga,
        sign_passphrase: ya,
        sign_btn: ba,
        sign_error_empty: ma,
        sign_error_no_key: wa,
        sign_error_failed: xa,
        verify_title: ka,
        verify_placeholder: Ea,
        verify_btn: Sa,
        verify_error_empty: Aa,
        verify_error_no_keys: Ta,
        verify_valid: Pa,
        verify_signed_by: Ia,
        verify_failed: Oa,
        verify_signer_not_found: Ra,
        keys_title: Da,
        keys_generate_btn: La,
        keys_import_btn: Ma,
        keys_empty: Ca,
        keys_own_label: Na,
        keys_unnamed: ja,
        keygen_title: za,
        keygen_name: Ka,
        keygen_email: Fa,
        keygen_passphrase: Va,
        keygen_error_required: Ga,
        keygen_cancel: qa,
        keygen_submit: Wa,
        keygen_loading: Ba,
        keygen_success: Ua,
        import_title: $a,
        import_placeholder: Ya,
        import_error_empty: Ha,
        import_cancel: Xa,
        import_submit: Ja,
        import_loading: Za,
        import_success: Qa,
        key_export_btn: es,
        key_delete_btn: ts,
        key_deleted: rs,
        key_exported: ns,
        copy_btn: is,
        theme_system: os,
        theme_light: as,
        theme_dark: ss,
        onboarding_skip: ls,
        onboarding_step: cs,
        onboarding_next: us,
        onboarding_prev: fs,
        onboarding_finish: _s,
        onboarding_welcome_title: ds,
        onboarding_welcome_desc: vs,
        onboarding_gen_title: ps,
        onboarding_gen_desc: hs,
        onboarding_gen_btn: gs,
        onboarding_gen_generating: ys,
        onboarding_gen_done: bs,
        onboarding_msg_title: ms,
        onboarding_msg_desc: ws,
        onboarding_msg_decrypt_btn: xs,
        onboarding_msg_decrypted: ks,
        onboarding_msg_tip: Es,
        onboarding_done_title: Ss,
        onboarding_done_desc: As,
        onboarding_secret_message: Ts,
        language_label: Ps
    }, Ht = [
        {
            code: "en",
            name: "English",
            dir: "ltr"
        },
        {
            code: "fr",
            name: "Français",
            dir: "ltr"
        },
        {
            code: "de",
            name: "Deutsch",
            dir: "ltr"
        },
        {
            code: "es",
            name: "Español",
            dir: "ltr"
        },
        {
            code: "it",
            name: "Italiano",
            dir: "ltr"
        },
        {
            code: "nl",
            name: "Nederlands",
            dir: "ltr"
        },
        {
            code: "pt-BR",
            name: "Português (Brasil)",
            dir: "ltr"
        },
        {
            code: "pt-PT",
            name: "Português (Portugal)",
            dir: "ltr"
        },
        {
            code: "ru",
            name: "Русский",
            dir: "ltr"
        },
        {
            code: "uk",
            name: "Українська",
            dir: "ltr"
        },
        {
            code: "pl",
            name: "Polski",
            dir: "ltr"
        },
        {
            code: "tr",
            name: "Türkçe",
            dir: "ltr"
        },
        {
            code: "zh-CN",
            name: "简体中文",
            dir: "ltr"
        },
        {
            code: "zh-TW",
            name: "繁體中文",
            dir: "ltr"
        },
        {
            code: "ja",
            name: "日本語",
            dir: "ltr"
        },
        {
            code: "ko",
            name: "한국어",
            dir: "ltr"
        },
        {
            code: "ar",
            name: "العربية",
            dir: "rtl"
        },
        {
            code: "he",
            name: "עברית",
            dir: "rtl"
        },
        {
            code: "hi",
            name: "हिन्दी",
            dir: "ltr"
        },
        {
            code: "th",
            name: "ไทย",
            dir: "ltr"
        }
    ], ei = "keychainpgp-locale", gr = Is, ur = new Map;
    ur.set("en", gr);
    let ti = gr, ri = "en";
    const Os = {
        fr: ()=>ve(()=>import("./fr-CfjqoM1F.js"), [], import.meta.url),
        de: ()=>ve(()=>import("./de-DxD4XyV-.js"), [], import.meta.url),
        es: ()=>ve(()=>import("./es-7R_VjyRd.js"), [], import.meta.url),
        it: ()=>ve(()=>import("./it-DqmU6PgP.js"), [], import.meta.url),
        nl: ()=>ve(()=>import("./nl-W7XEwzl6.js"), [], import.meta.url),
        "pt-BR": ()=>ve(()=>import("./pt-BR-DaH3uH7i.js"), [], import.meta.url),
        "pt-PT": ()=>ve(()=>import("./pt-PT-BES1bHB2.js"), [], import.meta.url),
        ru: ()=>ve(()=>import("./ru-BjgaLkPb.js"), [], import.meta.url),
        uk: ()=>ve(()=>import("./uk-bxbr8Rsn.js"), [], import.meta.url),
        pl: ()=>ve(()=>import("./pl-nv_NhuJh.js"), [], import.meta.url),
        tr: ()=>ve(()=>import("./tr-BUadaJlD.js"), [], import.meta.url),
        "zh-CN": ()=>ve(()=>import("./zh-CN-BKMmO_Bv.js"), [], import.meta.url),
        "zh-TW": ()=>ve(()=>import("./zh-TW-Dp0Ea4o4.js"), [], import.meta.url),
        ja: ()=>ve(()=>import("./ja-CKLlzbQ3.js"), [], import.meta.url),
        ko: ()=>ve(()=>import("./ko-B9avDbJf.js"), [], import.meta.url),
        ar: ()=>ve(()=>import("./ar-C4ugHzxd.js"), [], import.meta.url),
        he: ()=>ve(()=>import("./he-BNfmwO3P.js"), [], import.meta.url),
        hi: ()=>ve(()=>import("./hi-Df80B2ak.js"), [], import.meta.url),
        th: ()=>ve(()=>import("./th-C86g4naZ.js"), [], import.meta.url)
    };
    function Rs() {
        return ri;
    }
    function Ds() {
        const e = localStorage.getItem(ei);
        if (e && Ht.some((i)=>i.code === e)) return e;
        const t = navigator.language, r = Ht.find((i)=>i.code === t);
        if (r) return r.code;
        const n = Ht.find((i)=>t.startsWith(i.code.split("-")[0]));
        return n ? n.code : "en";
    }
    async function ni(e) {
        if (localStorage.setItem(ei, e), !ur.has(e)) {
            const r = Os[e];
            if (r) {
                const n = await r();
                ur.set(e, n.default);
            }
        }
        ti = ur.get(e) ?? gr, ri = e;
        const t = Ht.find((r)=>r.code === e);
        document.documentElement.setAttribute("dir", t?.dir ?? "ltr"), document.documentElement.setAttribute("lang", e);
    }
    function Ls(e, t) {
        let r = ti[e] ?? gr[e] ?? e;
        if (t) for (const [n, i] of Object.entries(t))r = r.replace(new RegExp(`\\{${n}\\}`, "g"), String(i));
        return r;
    }
    let yr = S(0);
    async function Ms() {
        const e = Ds();
        await ni(e), _r(yr);
    }
    async function Cs(e) {
        await ni(e), _r(yr);
    }
    function Ns() {
        return c(yr), Rs();
    }
    function y(e, t) {
        return c(yr), Ls(e, t);
    }
    const js = "5";
    typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set).add(js);
    function zs(e, t, r) {
        let n, i;
        try {
            const g = k.__wbindgen_add_to_stack_pointer(-16), d = ke(e, k.__wbindgen_export, k.__wbindgen_export2), w = he, N = ke(t, k.__wbindgen_export, k.__wbindgen_export2), P = he;
            var o = xt(r) ? 0 : ke(r, k.__wbindgen_export, k.__wbindgen_export2), a = he;
            k.decrypt(g, d, w, N, P, o, a);
            var s = ne().getInt32(g + 0, !0), l = ne().getInt32(g + 4, !0), u = ne().getInt32(g + 8, !0), _ = ne().getInt32(g + 12, !0), f = s, h = l;
            if (_) throw f = 0, h = 0, Ie(u);
            return n = f, i = h, wt(f, h);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(n, i, 1);
        }
    }
    function Ks(e, t) {
        let r, n;
        try {
            const _ = k.__wbindgen_add_to_stack_pointer(-16), f = ke(e, k.__wbindgen_export, k.__wbindgen_export2), h = he, g = ke(t, k.__wbindgen_export, k.__wbindgen_export2), d = he;
            k.encrypt(_, f, h, g, d);
            var i = ne().getInt32(_ + 0, !0), o = ne().getInt32(_ + 4, !0), a = ne().getInt32(_ + 8, !0), s = ne().getInt32(_ + 12, !0), l = i, u = o;
            if (s) throw l = 0, u = 0, Ie(a);
            return r = l, n = u, wt(l, u);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(r, n, 1);
        }
    }
    function Fs(e, t, r) {
        try {
            const l = k.__wbindgen_add_to_stack_pointer(-16), u = ke(e, k.__wbindgen_export, k.__wbindgen_export2), _ = he, f = ke(t, k.__wbindgen_export, k.__wbindgen_export2), h = he;
            var n = xt(r) ? 0 : ke(r, k.__wbindgen_export, k.__wbindgen_export2), i = he;
            k.generateKeyPair(l, u, _, f, h, n, i);
            var o = ne().getInt32(l + 0, !0), a = ne().getInt32(l + 4, !0), s = ne().getInt32(l + 8, !0);
            if (s) throw Ie(a);
            return Ie(o);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function Vs() {
        k.init();
    }
    function Gs(e) {
        try {
            const i = k.__wbindgen_add_to_stack_pointer(-16), o = ke(e, k.__wbindgen_export, k.__wbindgen_export2), a = he;
            k.inspectKey(i, o, a);
            var t = ne().getInt32(i + 0, !0), r = ne().getInt32(i + 4, !0), n = ne().getInt32(i + 8, !0);
            if (n) throw Ie(r);
            return Ie(t);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function qs(e, t, r) {
        let n, i;
        try {
            const g = k.__wbindgen_add_to_stack_pointer(-16), d = ke(e, k.__wbindgen_export, k.__wbindgen_export2), w = he, N = ke(t, k.__wbindgen_export, k.__wbindgen_export2), P = he;
            var o = xt(r) ? 0 : ke(r, k.__wbindgen_export, k.__wbindgen_export2), a = he;
            k.sign(g, d, w, N, P, o, a);
            var s = ne().getInt32(g + 0, !0), l = ne().getInt32(g + 4, !0), u = ne().getInt32(g + 8, !0), _ = ne().getInt32(g + 12, !0), f = s, h = l;
            if (_) throw f = 0, h = 0, Ie(u);
            return n = f, i = h, wt(f, h);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(n, i, 1);
        }
    }
    function Ws(e, t) {
        try {
            const o = k.__wbindgen_add_to_stack_pointer(-16), a = ke(e, k.__wbindgen_export, k.__wbindgen_export2), s = he, l = ke(t, k.__wbindgen_export, k.__wbindgen_export2), u = he;
            k.verify(o, a, s, l, u);
            var r = ne().getInt32(o + 0, !0), n = ne().getInt32(o + 4, !0), i = ne().getInt32(o + 8, !0);
            if (i) throw Ie(n);
            return Ie(r);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function Bs() {
        return {
            __proto__: null,
            "./keychainpgp_wasm_bg.js": {
                __proto__: null,
                __wbg_Error_83742b46f01ce22d: function(t, r) {
                    const n = Error(wt(t, r));
                    return ie(n);
                },
                __wbg_String_8564e559799eccda: function(t, r) {
                    const n = String(ee(r)), i = ke(n, k.__wbindgen_export, k.__wbindgen_export2), o = he;
                    ne().setInt32(t + 4, o, !0), ne().setInt32(t + 0, i, !0);
                },
                __wbg___wbindgen_is_function_3c846841762788c1: function(t) {
                    return typeof ee(t) == "function";
                },
                __wbg___wbindgen_is_object_781bc9f159099513: function(t) {
                    const r = ee(t);
                    return typeof r == "object" && r !== null;
                },
                __wbg___wbindgen_is_string_7ef6b97b02428fae: function(t) {
                    return typeof ee(t) == "string";
                },
                __wbg___wbindgen_is_undefined_52709e72fb9f179c: function(t) {
                    return ee(t) === void 0;
                },
                __wbg___wbindgen_throw_6ddd609b62940d55: function(t, r) {
                    throw new Error(wt(t, r));
                },
                __wbg_call_2d781c1f4d5c0ef8: function() {
                    return sr(function(t, r, n) {
                        const i = ee(t).call(ee(r), ee(n));
                        return ie(i);
                    }, arguments);
                },
                __wbg_crypto_38df2bab126b63dc: function(t) {
                    const r = ee(t).crypto;
                    return ie(r);
                },
                __wbg_error_a6fa202b58aa1cd3: function(t, r) {
                    let n, i;
                    try {
                        n = t, i = r, console.error(wt(t, r));
                    } finally{
                        k.__wbindgen_export4(n, i, 1);
                    }
                },
                __wbg_from_4bdf88943703fd48: function(t) {
                    const r = Array.from(ee(t));
                    return ie(r);
                },
                __wbg_getRandomValues_c44a50d8cfdaebeb: function() {
                    return sr(function(t, r) {
                        ee(t).getRandomValues(ee(r));
                    }, arguments);
                },
                __wbg_getTime_1dad7b5386ddd2d9: function(t) {
                    return ee(t).getTime();
                },
                __wbg_length_ea16607d7b61445b: function(t) {
                    return ee(t).length;
                },
                __wbg_msCrypto_bd5a034af96bcba6: function(t) {
                    const r = ee(t).msCrypto;
                    return ie(r);
                },
                __wbg_new_0_1dcafdf5e786e876: function() {
                    return ie(new Date);
                },
                __wbg_new_227d7c05414eb861: function() {
                    const t = new Error;
                    return ie(t);
                },
                __wbg_new_5f486cdf45a04d78: function(t) {
                    const r = new Uint8Array(ee(t));
                    return ie(r);
                },
                __wbg_new_a70fbab9066b301f: function() {
                    const t = new Array;
                    return ie(t);
                },
                __wbg_new_ab79df5bd7c26067: function() {
                    const t = new Object;
                    return ie(t);
                },
                __wbg_new_with_length_825018a1616e9e55: function(t) {
                    const r = new Uint8Array(t >>> 0);
                    return ie(r);
                },
                __wbg_node_84ea875411254db1: function(t) {
                    const r = ee(t).node;
                    return ie(r);
                },
                __wbg_process_44c7a14e11e9f69e: function(t) {
                    const r = ee(t).process;
                    return ie(r);
                },
                __wbg_prototypesetcall_d62e5099504357e6: function(t, r, n) {
                    Uint8Array.prototype.set.call(ln(t, r), ee(n));
                },
                __wbg_randomFillSync_6c25eac9869eb53c: function() {
                    return sr(function(t, r) {
                        ee(t).randomFillSync(Ie(r));
                    }, arguments);
                },
                __wbg_require_b4edbdcf3e2a1ef0: function() {
                    return sr(function() {
                        const t = module.require;
                        return ie(t);
                    }, arguments);
                },
                __wbg_set_282384002438957f: function(t, r, n) {
                    ee(t)[r >>> 0] = Ie(n);
                },
                __wbg_set_6be42768c690e380: function(t, r, n) {
                    ee(t)[Ie(r)] = Ie(n);
                },
                __wbg_stack_3b0d974bbf31e44f: function(t, r) {
                    const n = ee(r).stack, i = ke(n, k.__wbindgen_export, k.__wbindgen_export2), o = he;
                    ne().setInt32(t + 4, o, !0), ne().setInt32(t + 0, i, !0);
                },
                __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function() {
                    const t = typeof global > "u" ? null : global;
                    return xt(t) ? 0 : ie(t);
                },
                __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function() {
                    const t = typeof globalThis > "u" ? null : globalThis;
                    return xt(t) ? 0 : ie(t);
                },
                __wbg_static_accessor_SELF_f207c857566db248: function() {
                    const t = typeof self > "u" ? null : self;
                    return xt(t) ? 0 : ie(t);
                },
                __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function() {
                    const t = typeof window > "u" ? null : window;
                    return xt(t) ? 0 : ie(t);
                },
                __wbg_subarray_a068d24e39478a8a: function(t, r, n) {
                    const i = ee(t).subarray(r >>> 0, n >>> 0);
                    return ie(i);
                },
                __wbg_versions_276b2795b1c6a219: function(t) {
                    const r = ee(t).versions;
                    return ie(r);
                },
                __wbindgen_cast_0000000000000001: function(t, r) {
                    const n = ln(t, r);
                    return ie(n);
                },
                __wbindgen_cast_0000000000000002: function(t, r) {
                    const n = wt(t, r);
                    return ie(n);
                },
                __wbindgen_object_clone_ref: function(t) {
                    const r = ee(t);
                    return ie(r);
                },
                __wbindgen_object_drop_ref: function(t) {
                    Ie(t);
                }
            }
        };
    }
    function ie(e) {
        Jt === tt.length && tt.push(tt.length + 1);
        const t = Jt;
        return Jt = tt[t], tt[t] = e, t;
    }
    function Us(e) {
        e < 1028 || (tt[e] = Jt, Jt = e);
    }
    function ln(e, t) {
        return e = e >>> 0, Xt().subarray(e / 1, e / 1 + t);
    }
    let ht = null;
    function ne() {
        return (ht === null || ht.buffer.detached === !0 || ht.buffer.detached === void 0 && ht.buffer !== k.memory.buffer) && (ht = new DataView(k.memory.buffer)), ht;
    }
    function wt(e, t) {
        return e = e >>> 0, Ys(e, t);
    }
    let Wt = null;
    function Xt() {
        return (Wt === null || Wt.byteLength === 0) && (Wt = new Uint8Array(k.memory.buffer)), Wt;
    }
    function ee(e) {
        return tt[e];
    }
    function sr(e, t) {
        try {
            return e.apply(this, t);
        } catch (r) {
            k.__wbindgen_export3(ie(r));
        }
    }
    let tt = new Array(1024).fill(void 0);
    tt.push(void 0, null, !0, !1);
    let Jt = tt.length;
    function xt(e) {
        return e == null;
    }
    function ke(e, t, r) {
        if (r === void 0) {
            const s = Zt.encode(e), l = t(s.length, 1) >>> 0;
            return Xt().subarray(l, l + s.length).set(s), he = s.length, l;
        }
        let n = e.length, i = t(n, 1) >>> 0;
        const o = Xt();
        let a = 0;
        for(; a < n; a++){
            const s = e.charCodeAt(a);
            if (s > 127) break;
            o[i + a] = s;
        }
        if (a !== n) {
            a !== 0 && (e = e.slice(a)), i = r(i, n, n = a + e.length * 3, 1) >>> 0;
            const s = Xt().subarray(i + a, i + n), l = Zt.encodeInto(e, s);
            a += l.written, i = r(i, n, a, 1) >>> 0;
        }
        return he = a, i;
    }
    function Ie(e) {
        const t = ee(e);
        return Us(e), t;
    }
    let fr = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    fr.decode();
    const $s = 2146435072;
    let kr = 0;
    function Ys(e, t) {
        return kr += t, kr >= $s && (fr = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), fr.decode(), kr = t), fr.decode(Xt().subarray(e, e + t));
    }
    const Zt = new TextEncoder;
    "encodeInto" in Zt || (Zt.encodeInto = function(e, t) {
        const r = Zt.encode(e);
        return t.set(r), {
            read: e.length,
            written: r.length
        };
    });
    let he = 0, k;
    function Hs(e, t) {
        return k = e.exports, ht = null, Wt = null, k;
    }
    async function Xs(e, t) {
        if (typeof Response == "function" && e instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming == "function") try {
                return await WebAssembly.instantiateStreaming(e, t);
            } catch (i) {
                if (e.ok && r(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", i);
                else throw i;
            }
            const n = await e.arrayBuffer();
            return await WebAssembly.instantiate(n, t);
        } else {
            const n = await WebAssembly.instantiate(e, t);
            return n instanceof WebAssembly.Instance ? {
                instance: n,
                module: e
            } : n;
        }
        function r(n) {
            switch(n){
                case "basic":
                case "cors":
                case "default":
                    return !0;
            }
            return !1;
        }
    }
    async function Js(e) {
        if (k !== void 0) return k;
        e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("keychainpgp_wasm_bg-CLouvAE8.wasm", import.meta.url).href, import.meta.url));
        const t = Bs();
        (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
        const { instance: r, module: n } = await Xs(await e, t);
        return Hs(r);
    }
    let cn = !1;
    async function Zs() {
        cn || (await Js(), Vs(), cn = !0);
    }
    function ii(e, t, r) {
        return Fs(e, t, r ?? void 0);
    }
    function oi(e, t) {
        return Ks(e, JSON.stringify(t));
    }
    function ai(e, t, r) {
        return zs(e, t, r ?? void 0);
    }
    function Qs(e, t, r) {
        return qs(e, t, r ?? void 0);
    }
    function el(e, t) {
        return Ws(e, t);
    }
    function Dr(e) {
        return Gs(e);
    }
    const si = "keychainpgp-theme";
    function tl() {
        return localStorage.getItem(si) ?? "dark";
    }
    function rl(e) {
        localStorage.setItem(si, e), li(e);
    }
    function li(e) {
        document.documentElement.setAttribute("data-theme", e);
        const t = document.querySelector('meta[name="theme-color"]');
        t && t.setAttribute("content", e === "dark" ? "#0f172a" : "#ffffff");
    }
    const ci = "keychainpgp-";
    function nl(e) {
        return localStorage.getItem(ci + e);
    }
    function il(e, t) {
        localStorage.setItem(ci + e, t);
    }
    function ol() {
        return nl("onboarded") === "true";
    }
    function un() {
        il("onboarded", "true");
    }
    const al = "keychainpgp", sl = 1, Ze = "keys";
    let lr = null;
    function br() {
        return new Promise((e, t)=>{
            const r = indexedDB.open(al, sl);
            r.onupgradeneeded = ()=>{
                const n = r.result;
                n.objectStoreNames.contains(Ze) || n.createObjectStore(Ze, {
                    keyPath: "fingerprint"
                });
            }, r.onsuccess = ()=>e(r.result), r.onerror = ()=>t(r.error);
        });
    }
    async function ui() {
        return lr || (lr = await crypto.subtle.generateKey({
            name: "AES-GCM",
            length: 256
        }, !1, [
            "encrypt",
            "decrypt"
        ]), lr);
    }
    async function ll(e) {
        const t = await ui(), r = crypto.getRandomValues(new Uint8Array(12)), n = await crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: r
        }, t, new Uint8Array(e));
        return {
            ciphertext: btoa(String.fromCharCode(...new Uint8Array(n))),
            iv: btoa(String.fromCharCode(...r))
        };
    }
    async function cl(e, t) {
        const r = await ui(), n = new Uint8Array(Array.from(atob(t), (a)=>a.charCodeAt(0))), i = new Uint8Array(Array.from(atob(e), (a)=>a.charCodeAt(0))), o = await crypto.subtle.decrypt({
            name: "AES-GCM",
            iv: n
        }, r, i);
        return new Uint8Array(o);
    }
    async function ir() {
        const e = await br();
        return new Promise((t, r)=>{
            const o = e.transaction(Ze, "readonly").objectStore(Ze).getAll();
            o.onsuccess = ()=>t(o.result), o.onerror = ()=>r(o.error);
        });
    }
    async function ul(e) {
        const t = await br();
        return new Promise((r, n)=>{
            const a = t.transaction(Ze, "readonly").objectStore(Ze).get(e);
            a.onsuccess = ()=>r(a.result ?? null), a.onerror = ()=>n(a.error);
        });
    }
    async function Lr(e, t, r, n, i) {
        let o = null, a = null;
        if (i) {
            const u = await ll(i);
            o = u.ciphertext, a = u.iv;
        }
        const s = {
            fingerprint: e,
            name: t,
            email: r,
            publicKey: n,
            encryptedSecretKey: o,
            iv: a,
            isOwn: i !== null,
            addedAt: Date.now()
        }, l = await br();
        return new Promise((u, _)=>{
            const f = l.transaction(Ze, "readwrite");
            f.objectStore(Ze).put(s), f.oncomplete = ()=>u(), f.onerror = ()=>_(f.error);
        });
    }
    async function Br(e) {
        const t = await ul(e);
        if (!t?.encryptedSecretKey || !t.iv) return null;
        try {
            return await cl(t.encryptedSecretKey, t.iv);
        } catch  {
            return null;
        }
    }
    async function fl(e) {
        const t = await br();
        return new Promise((r, n)=>{
            const i = t.transaction(Ze, "readwrite");
            i.objectStore(Ze).delete(e), i.oncomplete = ()=>r(), i.onerror = ()=>n(i.error);
        });
    }
    var _l = O("<span></span>"), dl = O('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p>', 1), vl = O('<p class="success svelte-13krnjv"> </p>'), pl = O('<p class="error svelte-13krnjv"> </p>'), hl = O('<div class="wizard-form svelte-13krnjv"><input class="input"/> <input class="input" type="email"/> <input class="input" type="password"/> <!> <button class="btn btn-primary"> </button></div>'), gl = O('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p> <!>', 1), yl = O('<p class="success svelte-13krnjv" style="margin-top: 0.75rem;"> </p> <div class="decrypted-block svelte-13krnjv"> </div>', 1), bl = O('<p class="error svelte-13krnjv" style="margin-top: 0.5rem;"> </p>'), ml = O('<!> <button class="btn btn-primary" style="margin-top: 0.75rem;"> </button>', 1), wl = O('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p> <div class="pgp-block svelte-13krnjv"> </div> <!> <p class="wizard-tip svelte-13krnjv"> </p>', 1), xl = O('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p>', 1), kl = O('<button class="btn"> </button>'), El = O("<div></div>"), Sl = O('<button class="btn btn-primary"> </button>'), Al = O('<button class="btn btn-primary"> </button>'), Tl = O('<div class="card wizard svelte-13krnjv"><div class="wizard-header svelte-13krnjv"><div class="wizard-dots svelte-13krnjv"></div> <button class="wizard-skip svelte-13krnjv"> </button></div> <div class="wizard-content svelte-13krnjv"><!></div> <div class="wizard-footer svelte-13krnjv"><!> <!></div></div>');
    function Pl(e, t) {
        _t(t, !0);
        const r = 4;
        let n = S(0), i = S(""), o = S(""), a = S(""), s = S(""), l = S(!1), u = S(!1), _ = S(""), f = S(""), h = S(""), g = S(""), d = S(!1), w = S("");
        function N() {
            un(), t.onDismiss();
        }
        function P() {
            un(), t.onDismiss();
        }
        function L() {
            c(n) > 0 && _r(n, -1);
        }
        function E() {
            c(n) === 1 && !c(u) || c(n) < r - 1 && _r(n);
        }
        async function M() {
            if (p(s, ""), !c(i).trim() || !c(o).trim()) {
                p(s, y("keygen_error_required"), !0);
                return;
            }
            p(l, !0);
            try {
                const x = ii(c(i), c(o), c(a) || void 0), I = Dr(x.public_key);
                await Lr(x.fingerprint, I.user_ids[0]?.name ?? null, I.user_ids[0]?.email ?? null, x.public_key, x.secret_key), p(_, x.public_key, !0), p(f, x.fingerprint, !0), p(u, !0);
                const G = y("onboarding_secret_message");
                p(h, oi(G, [
                    x.public_key
                ]), !0);
            } catch (x) {
                p(s, String(x), !0);
            } finally{
                p(l, !1);
            }
        }
        async function C() {
            p(w, ""), p(d, !0);
            let x = null;
            try {
                if (x = await Br(c(f)), !x) {
                    p(w, "Could not retrieve secret key.");
                    return;
                }
                const I = new TextDecoder().decode(x);
                p(g, ai(c(h), I, c(a) || void 0), !0);
            } catch (I) {
                p(w, String(I), !0);
            } finally{
                x?.fill(0), p(d, !1);
            }
        }
        var K = Tl(), F = v(K), H = v(F);
        hr(H, 21, ()=>Array(r), Lo, (x, I, G)=>{
            var J = _l();
            let oe;
            D(()=>oe = gt(J, 1, "wizard-dot svelte-13krnjv", null, oe, {
                    active: G === c(n),
                    completed: G < c(n)
                })), T(x, J);
        });
        var Se = b(H, 2), De = v(Se), V = b(F, 2), A = v(V);
        {
            var j = (x)=>{
                var I = dl(), G = et(I), J = v(G), oe = b(G, 2), de = v(oe);
                D((ge, le)=>{
                    m(J, ge), m(de, le);
                }, [
                    ()=>y("onboarding_welcome_title"),
                    ()=>y("onboarding_welcome_desc")
                ]), T(x, I);
            }, z = (x)=>{
                var I = gl(), G = et(I), J = v(G), oe = b(G, 2), de = v(oe), ge = b(oe, 2);
                {
                    var le = (re)=>{
                        var ce = vl(), Q = v(ce);
                        D((ue)=>m(Q, ue), [
                            ()=>y("onboarding_gen_done")
                        ]), T(re, ce);
                    }, je = (re)=>{
                        var ce = hl(), Q = v(ce), ue = b(Q, 2), fe = b(ue, 2), q = b(fe, 2);
                        {
                            var Ee = (ae)=>{
                                var xe = pl(), Ot = v(xe);
                                D(()=>m(Ot, c(s))), T(ae, xe);
                            };
                            $(q, (ae)=>{
                                c(s) && ae(Ee);
                            });
                        }
                        var ye = b(q, 2), Ae = v(ye);
                        D((ae, xe, Ot, mr)=>{
                            Oe(Q, "placeholder", ae), Oe(ue, "placeholder", xe), Oe(fe, "placeholder", Ot), ye.disabled = c(l), m(Ae, mr);
                        }, [
                            ()=>y("keygen_name"),
                            ()=>y("keygen_email"),
                            ()=>y("keygen_passphrase"),
                            ()=>c(l) ? y("onboarding_gen_generating") : y("onboarding_gen_btn")
                        ]), Me(Q, ()=>c(i), (ae)=>p(i, ae)), Me(ue, ()=>c(o), (ae)=>p(o, ae)), Me(fe, ()=>c(a), (ae)=>p(a, ae)), X("click", ye, M), T(re, ce);
                    };
                    $(ge, (re)=>{
                        c(u) ? re(le) : re(je, !1);
                    });
                }
                D((re, ce)=>{
                    m(J, re), m(de, ce);
                }, [
                    ()=>y("onboarding_gen_title"),
                    ()=>y("onboarding_gen_desc")
                ]), T(x, I);
            }, te = (x)=>{
                var I = wl(), G = et(I), J = v(G), oe = b(G, 2), de = v(oe), ge = b(oe, 2), le = v(ge), je = b(ge, 2);
                {
                    var re = (fe)=>{
                        var q = yl(), Ee = et(q), ye = v(Ee), Ae = b(Ee, 2), ae = v(Ae);
                        D((xe)=>{
                            m(ye, xe), m(ae, c(g));
                        }, [
                            ()=>y("onboarding_msg_decrypted")
                        ]), T(fe, q);
                    }, ce = (fe)=>{
                        var q = ml(), Ee = et(q);
                        {
                            var ye = (xe)=>{
                                var Ot = bl(), mr = v(Ot);
                                D(()=>m(mr, c(w))), T(xe, Ot);
                            };
                            $(Ee, (xe)=>{
                                c(w) && xe(ye);
                            });
                        }
                        var Ae = b(Ee, 2), ae = v(Ae);
                        D((xe)=>{
                            Ae.disabled = c(d), m(ae, xe);
                        }, [
                            ()=>y("onboarding_msg_decrypt_btn")
                        ]), X("click", Ae, C), T(fe, q);
                    };
                    $(je, (fe)=>{
                        c(g) ? fe(re) : fe(ce, !1);
                    });
                }
                var Q = b(je, 2), ue = v(Q);
                D((fe, q, Ee)=>{
                    m(J, fe), m(de, q), m(le, c(h)), m(ue, Ee);
                }, [
                    ()=>y("onboarding_msg_title"),
                    ()=>y("onboarding_msg_desc"),
                    ()=>y("onboarding_msg_tip")
                ]), T(x, I);
            }, _e = (x)=>{
                var I = xl(), G = et(I), J = v(G), oe = b(G, 2), de = v(oe);
                D((ge, le)=>{
                    m(J, ge), m(de, le);
                }, [
                    ()=>y("onboarding_done_title"),
                    ()=>y("onboarding_done_desc")
                ]), T(x, I);
            };
            $(A, (x)=>{
                c(n) === 0 ? x(j) : c(n) === 1 ? x(z, 1) : c(n) === 2 ? x(te, 2) : c(n) === 3 && x(_e, 3);
            });
        }
        var Ne = b(V, 2), He = v(Ne);
        {
            var pt = (x)=>{
                var I = kl(), G = v(I);
                D((J)=>m(G, J), [
                    ()=>y("onboarding_prev")
                ]), X("click", I, L), T(x, I);
            }, Xe = (x)=>{
                var I = El();
                T(x, I);
            };
            $(He, (x)=>{
                c(n) > 0 ? x(pt) : x(Xe, !1);
            });
        }
        var R = b(He, 2);
        {
            var B = (x)=>{
                var I = Sl(), G = v(I);
                D((J)=>{
                    I.disabled = c(n) === 1 && !c(u), m(G, J);
                }, [
                    ()=>y("onboarding_next")
                ]), X("click", I, E), T(x, I);
            }, U = (x)=>{
                var I = Al(), G = v(I);
                D((J)=>m(G, J), [
                    ()=>y("onboarding_finish")
                ]), X("click", I, P), T(x, I);
            };
            $(R, (x)=>{
                c(n) < r - 1 ? x(B) : x(U, !1);
            });
        }
        D((x)=>m(De, x), [
            ()=>y("onboarding_skip")
        ]), X("click", Se, N), T(e, K), dt();
    }
    It([
        "click"
    ]);
    var Il = O('<p style="font-size: 0.875rem; color: var(--color-text-secondary);"> </p>'), Ol = O('<span style="font-size: 0.75rem; color: var(--color-primary);"> </span>'), Rl = O('<label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border-radius: 0.375rem; border: 1px solid var(--color-border); cursor: pointer; font-size: 0.875rem;"><input type="checkbox"/> <span> </span> <!></label>'), Dl = O('<div style="display: flex; flex-direction: column; gap: 0.375rem; max-height: 200px; overflow-y: auto;"></div>'), Ll = O('<p class="error"> </p>'), Ml = O('<div style="position: relative;"><textarea class="textarea" readonly="" rows="8"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), Cl = O('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="5"></textarea> <div><p style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;"> </p> <!></div> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Nl(e, t) {
        _t(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S(rt([])), a = S(rt(new Set));
        async function s() {
            p(o, await ir(), !0);
        }
        s();
        function l(V) {
            c(a).has(V) ? c(a).delete(V) : c(a).add(V), p(a, new Set(c(a)), !0);
        }
        function u() {
            if (p(i, ""), p(n, ""), !c(r).trim()) {
                p(i, y("encrypt_error_empty"), !0);
                return;
            }
            if (c(a).size === 0) {
                p(i, y("encrypt_error_no_recipient"), !0);
                return;
            }
            try {
                const V = c(o).filter((A)=>c(a).has(A.fingerprint)).map((A)=>A.publicKey);
                p(n, oi(c(r), V), !0);
            } catch (V) {
                p(i, String(V), !0);
            }
        }
        async function _() {
            await navigator.clipboard.writeText(c(n));
        }
        var f = Cl(), h = v(f), g = v(h), d = b(h, 2), w = b(d, 2), N = v(w), P = v(N), L = b(N, 2);
        {
            var E = (V)=>{
                var A = Il(), j = v(A);
                D((z)=>m(j, z), [
                    ()=>y("encrypt_no_keys")
                ]), T(V, A);
            }, M = (V)=>{
                var A = Dl();
                hr(A, 21, ()=>c(o), (j)=>j.fingerprint, (j, z)=>{
                    var te = Rl();
                    let _e;
                    var Ne = v(te), He = b(Ne, 2), pt = v(He), Xe = b(He, 2);
                    {
                        var R = (B)=>{
                            var U = Ol(), x = v(U);
                            D((I)=>m(x, I), [
                                ()=>y("encrypt_own_label")
                            ]), T(B, U);
                        };
                        $(Xe, (B)=>{
                            c(z).isOwn && B(R);
                        });
                    }
                    D((B, U, x)=>{
                        _e = gt(te, 1, "svelte-recwdw", null, _e, B), Go(Ne, U), m(pt, x);
                    }, [
                        ()=>({
                                selected: c(a).has(c(z).fingerprint)
                            }),
                        ()=>c(a).has(c(z).fingerprint),
                        ()=>c(z).name ?? c(z).email ?? c(z).fingerprint.slice(-16)
                    ]), X("change", Ne, ()=>l(c(z).fingerprint)), T(j, te);
                }), T(V, A);
            };
            $(L, (V)=>{
                c(o).length === 0 ? V(E) : V(M, !1);
            });
        }
        var C = b(w, 2), K = v(C), F = b(C, 2);
        {
            var H = (V)=>{
                var A = Ll(), j = v(A);
                D(()=>m(j, c(i))), T(V, A);
            };
            $(F, (V)=>{
                c(i) && V(H);
            });
        }
        var Se = b(F, 2);
        {
            var De = (V)=>{
                var A = Ml(), j = v(A), z = b(j, 2), te = v(z);
                D((_e)=>{
                    qr(j, c(n)), m(te, _e);
                }, [
                    ()=>y("copy_btn")
                ]), X("click", z, _), T(V, A);
            };
            $(Se, (V)=>{
                c(n) && V(De);
            });
        }
        D((V, A, j, z, te)=>{
            m(g, V), Oe(d, "placeholder", A), m(P, j), C.disabled = z, m(K, te);
        }, [
            ()=>y("encrypt_title"),
            ()=>y("encrypt_placeholder"),
            ()=>y("encrypt_recipients"),
            ()=>!c(r).trim() || c(a).size === 0,
            ()=>y("encrypt_btn")
        ]), Me(d, ()=>c(r), (V)=>p(r, V)), X("click", C, u), T(e, f), dt();
    }
    It([
        "change",
        "click"
    ]);
    var jl = O('<p class="error"> </p>'), zl = O('<div style="position: relative;"><textarea class="textarea" readonly="" rows="6"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), Kl = O('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="8"></textarea> <input type="password" class="input"/> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Fl(e, t) {
        _t(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S("");
        async function a() {
            if (p(o, ""), p(i, ""), !c(r).trim()) {
                p(o, y("decrypt_error_empty"), !0);
                return;
            }
            const M = (await ir()).filter((C)=>C.isOwn);
            if (M.length === 0) {
                p(o, y("decrypt_error_no_key"), !0);
                return;
            }
            for (const C of M){
                const K = await Br(C.fingerprint);
                if (K) try {
                    const F = new TextDecoder().decode(K);
                    p(i, ai(c(r), F, c(n) || void 0), !0);
                    return;
                } catch  {}
            }
            p(o, y("decrypt_error_failed"), !0);
        }
        async function s() {
            await navigator.clipboard.writeText(c(i));
        }
        var l = Kl(), u = v(l), _ = v(u), f = b(u, 2), h = b(f, 2), g = b(h, 2), d = v(g), w = b(g, 2);
        {
            var N = (E)=>{
                var M = jl(), C = v(M);
                D(()=>m(C, c(o))), T(E, M);
            };
            $(w, (E)=>{
                c(o) && E(N);
            });
        }
        var P = b(w, 2);
        {
            var L = (E)=>{
                var M = zl(), C = v(M), K = b(C, 2), F = v(K);
                D((H)=>{
                    qr(C, c(i)), m(F, H);
                }, [
                    ()=>y("copy_btn")
                ]), X("click", K, s), T(E, M);
            };
            $(P, (E)=>{
                c(i) && E(L);
            });
        }
        D((E, M, C, K, F)=>{
            m(_, E), Oe(f, "placeholder", M), Oe(h, "placeholder", C), g.disabled = K, m(d, F);
        }, [
            ()=>y("decrypt_title"),
            ()=>y("decrypt_placeholder"),
            ()=>y("decrypt_passphrase"),
            ()=>!c(r).trim(),
            ()=>y("decrypt_btn")
        ]), Me(f, ()=>c(r), (E)=>p(r, E)), Me(h, ()=>c(n), (E)=>p(n, E)), X("click", g, a), T(e, l), dt();
    }
    It([
        "click"
    ]);
    var Vl = O('<p class="error"> </p>'), Gl = O('<div style="position: relative;"><textarea class="textarea" readonly="" rows="8"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), ql = O('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="5"></textarea> <input type="password" class="input"/> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Wl(e, t) {
        _t(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S("");
        async function a() {
            if (p(o, ""), p(i, ""), !c(r).trim()) {
                p(o, y("sign_error_empty"), !0);
                return;
            }
            const M = (await ir()).filter((C)=>C.isOwn);
            if (M.length === 0) {
                p(o, y("sign_error_no_key"), !0);
                return;
            }
            for (const C of M){
                const K = await Br(C.fingerprint);
                if (K) try {
                    p(i, Qs(c(r), K, c(n) || void 0), !0);
                    return;
                } catch  {}
            }
            p(o, y("sign_error_failed"), !0);
        }
        async function s() {
            await navigator.clipboard.writeText(c(i));
        }
        var l = ql(), u = v(l), _ = v(u), f = b(u, 2), h = b(f, 2), g = b(h, 2), d = v(g), w = b(g, 2);
        {
            var N = (E)=>{
                var M = Vl(), C = v(M);
                D(()=>m(C, c(o))), T(E, M);
            };
            $(w, (E)=>{
                c(o) && E(N);
            });
        }
        var P = b(w, 2);
        {
            var L = (E)=>{
                var M = Gl(), C = v(M), K = b(C, 2), F = v(K);
                D((H)=>{
                    qr(C, c(i)), m(F, H);
                }, [
                    ()=>y("copy_btn")
                ]), X("click", K, s), T(E, M);
            };
            $(P, (E)=>{
                c(i) && E(L);
            });
        }
        D((E, M, C, K, F)=>{
            m(_, E), Oe(f, "placeholder", M), Oe(h, "placeholder", C), g.disabled = K, m(d, F);
        }, [
            ()=>y("sign_title"),
            ()=>y("sign_placeholder"),
            ()=>y("sign_passphrase"),
            ()=>!c(r).trim(),
            ()=>y("sign_btn")
        ]), Me(f, ()=>c(r), (E)=>p(r, E)), Me(h, ()=>c(n), (E)=>p(n, E)), X("click", g, a), T(e, l), dt();
    }
    It([
        "click"
    ]);
    var Bl = O('<p class="error"> </p>'), Ul = O('<p style="font-size: 0.75rem; color: var(--color-text-secondary); font-family: var(--color-font-mono);"> </p>'), $l = O('<div style="padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-success); background: rgba(34, 197, 94, 0.1);"><p class="success" style="font-weight: 600;"> </p> <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.25rem;"> </p> <!></div>'), Yl = O('<div style="padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-danger); background: rgba(239, 68, 68, 0.1);"><p class="error" style="font-weight: 600;"> </p> <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.25rem;"> </p></div>'), Hl = O('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="8"></textarea> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Xl(e, t) {
        _t(t, !0);
        let r = S(""), n = S(null), i = S(""), o = S("");
        async function a() {
            if (p(o, ""), p(n, null), p(i, ""), !c(r).trim()) {
                p(o, y("verify_error_empty"), !0);
                return;
            }
            const P = await ir();
            if (P.length === 0) {
                p(o, y("verify_error_no_keys"), !0);
                return;
            }
            for (const L of P)try {
                const E = el(c(r), L.publicKey);
                if (E.valid) {
                    p(n, {
                        valid: !0,
                        fingerprint: E.signer_fingerprint
                    }, !0), p(i, L.name ?? L.email ?? L.fingerprint.slice(-16), !0);
                    return;
                }
            } catch  {}
            p(n, {
                valid: !1,
                fingerprint: null
            }, !0);
        }
        var s = Hl(), l = v(s), u = v(l), _ = b(l, 2), f = b(_, 2), h = v(f), g = b(f, 2);
        {
            var d = (P)=>{
                var L = Bl(), E = v(L);
                D(()=>m(E, c(o))), T(P, L);
            };
            $(g, (P)=>{
                c(o) && P(d);
            });
        }
        var w = b(g, 2);
        {
            var N = (P)=>{
                var L = Ao(), E = et(L);
                {
                    var M = (K)=>{
                        var F = $l(), H = v(F), Se = v(H), De = b(H, 2), V = v(De), A = b(De, 2);
                        {
                            var j = (z)=>{
                                var te = Ul(), _e = v(te);
                                D(()=>m(_e, c(n).fingerprint)), T(z, te);
                            };
                            $(A, (z)=>{
                                c(n).fingerprint && z(j);
                            });
                        }
                        D((z, te)=>{
                            m(Se, z), m(V, te);
                        }, [
                            ()=>y("verify_valid"),
                            ()=>y("verify_signed_by", {
                                    name: c(i)
                                })
                        ]), T(K, F);
                    }, C = (K)=>{
                        var F = Yl(), H = v(F), Se = v(H), De = b(H, 2), V = v(De);
                        D((A, j)=>{
                            m(Se, A), m(V, j);
                        }, [
                            ()=>y("verify_failed"),
                            ()=>y("verify_signer_not_found")
                        ]), T(K, F);
                    };
                    $(E, (K)=>{
                        c(n).valid ? K(M) : K(C, !1);
                    });
                }
                T(P, L);
            };
            $(w, (P)=>{
                c(n) && P(N);
            });
        }
        D((P, L, E, M)=>{
            m(u, P), Oe(_, "placeholder", L), f.disabled = E, m(h, M);
        }, [
            ()=>y("verify_title"),
            ()=>y("verify_placeholder"),
            ()=>!c(r).trim(),
            ()=>y("verify_btn")
        ]), Me(_, ()=>c(r), (P)=>p(r, P)), X("click", f, a), T(e, s), dt();
    }
    It([
        "click"
    ]);
    var Jl = O('<p class="success"> </p>'), Zl = O('<p class="error"> </p>'), Ql = O('<div style="display: flex; flex-direction: column; gap: 0.75rem; padding: 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><p style="font-size: 0.875rem; font-weight: 500;"> </p> <input class="input"/> <input class="input"/> <input class="input" type="password"/> <!> <div style="display: flex; gap: 0.5rem; justify-content: flex-end;"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div>'), ec = O('<p class="error"> </p>'), tc = O('<div style="display: flex; flex-direction: column; gap: 0.75rem; padding: 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><p style="font-size: 0.875rem; font-weight: 500;"> </p> <textarea class="textarea" rows="6"></textarea> <!> <div style="display: flex; gap: 0.5rem; justify-content: flex-end;"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div>'), rc = O('<p style="font-size: 0.875rem; color: var(--color-text-secondary); text-align: center; padding: 2rem 0;"> </p>'), nc = O('<span style="font-size: 0.75rem; color: var(--color-primary); font-weight: normal;"> </span>'), ic = O('<div class="key-row svelte-1byd03e" style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><div style="min-width: 0; flex: 1;"><p style="font-size: 0.875rem; font-weight: 500;"> <!></p> <p style="font-size: 0.75rem; color: var(--color-text-secondary);"> </p> <p style="font-size: 0.625rem; color: var(--color-text-secondary); font-family: var(--color-font-mono);"> </p></div> <div class="key-actions svelte-1byd03e" style="display: flex; gap: 0.375rem; flex-shrink: 0;"><button class="btn" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button> <button class="btn btn-danger" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div></div>'), oc = O('<div style="display: flex; flex-direction: column; gap: 0.5rem;"></div>'), ac = O('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><div style="display: flex; align-items: center; justify-content: space-between;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <div style="display: flex; gap: 0.5rem;"><button class="btn btn-primary"> </button> <button class="btn"> </button></div></div> <!> <!> <!> <!></div>');
    function sc(e, t) {
        _t(t, !0);
        let r = S(rt([])), n = S(!1), i = S(!1), o = S(""), a = S(""), s = S(""), l = S(""), u = S(!1), _ = S(""), f = S(""), h = S(!1), g = S("");
        async function d() {
            p(r, await ir(), !0);
        }
        d();
        async function w() {
            if (p(l, ""), !c(o).trim() || !c(a).trim()) {
                p(l, y("keygen_error_required"), !0);
                return;
            }
            p(u, !0);
            try {
                const R = ii(c(o), c(a), c(s) || void 0), B = Dr(R.public_key);
                await Lr(R.fingerprint, B.user_ids[0]?.name ?? null, B.user_ids[0]?.email ?? null, R.public_key, R.secret_key), await d(), p(n, !1), p(o, ""), p(a, ""), p(s, ""), p(g, y("keygen_success"), !0), setTimeout(()=>p(g, ""), 3e3);
            } catch (R) {
                p(l, String(R), !0);
            } finally{
                p(u, !1);
            }
        }
        async function N() {
            if (p(f, ""), !c(_).trim()) {
                p(f, y("import_error_empty"), !0);
                return;
            }
            p(h, !0);
            try {
                const R = Dr(c(_)), B = R.user_ids[0]?.name ?? null, U = R.user_ids[0]?.email ?? null, x = R.has_secret_key ? new TextEncoder().encode(c(_)) : null;
                await Lr(R.fingerprint, B, U, c(_), x), await d(), p(i, !1), p(_, ""), p(g, y("import_success", {
                    name: B ?? U ?? R.fingerprint.slice(-16)
                }), !0), setTimeout(()=>p(g, ""), 3e3);
            } catch (R) {
                p(f, String(R), !0);
            } finally{
                p(h, !1);
            }
        }
        async function P(R) {
            await fl(R), await d(), p(g, y("key_deleted"), !0), setTimeout(()=>p(g, ""), 3e3);
        }
        async function L(R) {
            await navigator.clipboard.writeText(R.publicKey), p(g, y("key_exported"), !0), setTimeout(()=>p(g, ""), 3e3);
        }
        var E = ac(), M = v(E), C = v(M), K = v(C), F = b(C, 2), H = v(F), Se = v(H), De = b(H, 2), V = v(De), A = b(M, 2);
        {
            var j = (R)=>{
                var B = Jl(), U = v(B);
                D(()=>m(U, c(g))), T(R, B);
            };
            $(A, (R)=>{
                c(g) && R(j);
            });
        }
        var z = b(A, 2);
        {
            var te = (R)=>{
                var B = Ql(), U = v(B), x = v(U), I = b(U, 2), G = b(I, 2), J = b(G, 2), oe = b(J, 2);
                {
                    var de = (Q)=>{
                        var ue = Zl(), fe = v(ue);
                        D(()=>m(fe, c(l))), T(Q, ue);
                    };
                    $(oe, (Q)=>{
                        c(l) && Q(de);
                    });
                }
                var ge = b(oe, 2), le = v(ge), je = v(le), re = b(le, 2), ce = v(re);
                D((Q, ue, fe, q, Ee, ye)=>{
                    m(x, Q), Oe(I, "placeholder", ue), Oe(G, "placeholder", fe), Oe(J, "placeholder", q), m(je, Ee), re.disabled = c(u), m(ce, ye);
                }, [
                    ()=>y("keygen_title"),
                    ()=>y("keygen_name"),
                    ()=>y("keygen_email"),
                    ()=>y("keygen_passphrase"),
                    ()=>y("keygen_cancel"),
                    ()=>c(u) ? y("keygen_loading") : y("keygen_submit")
                ]), Me(I, ()=>c(o), (Q)=>p(o, Q)), Me(G, ()=>c(a), (Q)=>p(a, Q)), Me(J, ()=>c(s), (Q)=>p(s, Q)), X("click", le, ()=>p(n, !1)), X("click", re, w), T(R, B);
            };
            $(z, (R)=>{
                c(n) && R(te);
            });
        }
        var _e = b(z, 2);
        {
            var Ne = (R)=>{
                var B = tc(), U = v(B), x = v(U), I = b(U, 2), G = b(I, 2);
                {
                    var J = (re)=>{
                        var ce = ec(), Q = v(ce);
                        D(()=>m(Q, c(f))), T(re, ce);
                    };
                    $(G, (re)=>{
                        c(f) && re(J);
                    });
                }
                var oe = b(G, 2), de = v(oe), ge = v(de), le = b(de, 2), je = v(le);
                D((re, ce, Q, ue)=>{
                    m(x, re), Oe(I, "placeholder", ce), m(ge, Q), le.disabled = c(h), m(je, ue);
                }, [
                    ()=>y("import_title"),
                    ()=>y("import_placeholder"),
                    ()=>y("import_cancel"),
                    ()=>c(h) ? y("import_loading") : y("import_submit")
                ]), Me(I, ()=>c(_), (re)=>p(_, re)), X("click", de, ()=>p(i, !1)), X("click", le, N), T(R, B);
            };
            $(_e, (R)=>{
                c(i) && R(Ne);
            });
        }
        var He = b(_e, 2);
        {
            var pt = (R)=>{
                var B = rc(), U = v(B);
                D((x)=>m(U, x), [
                    ()=>y("keys_empty")
                ]), T(R, B);
            }, Xe = (R)=>{
                var B = oc();
                hr(B, 21, ()=>c(r), (U)=>U.fingerprint, (U, x)=>{
                    var I = ic(), G = v(I), J = v(G), oe = v(J), de = b(oe);
                    {
                        var ge = (ye)=>{
                            var Ae = nc(), ae = v(Ae);
                            D((xe)=>m(ae, xe), [
                                ()=>y("keys_own_label")
                            ]), T(ye, Ae);
                        };
                        $(de, (ye)=>{
                            c(x).isOwn && ye(ge);
                        });
                    }
                    var le = b(J, 2), je = v(le), re = b(le, 2), ce = v(re), Q = b(G, 2), ue = v(Q), fe = v(ue), q = b(ue, 2), Ee = v(q);
                    D((ye, Ae, ae, xe)=>{
                        m(oe, `${ye ?? ""} `), m(je, c(x).email ?? ""), m(ce, Ae), m(fe, ae), m(Ee, xe);
                    }, [
                        ()=>c(x).name ?? y("keys_unnamed"),
                        ()=>c(x).fingerprint.slice(-16),
                        ()=>y("key_export_btn"),
                        ()=>y("key_delete_btn")
                    ]), X("click", ue, ()=>L(c(x))), X("click", q, ()=>P(c(x).fingerprint)), T(U, I);
                }), T(R, B);
            };
            $(He, (R)=>{
                c(r).length === 0 ? R(pt) : R(Xe, !1);
            });
        }
        D((R, B, U)=>{
            m(K, R), m(Se, B), m(V, U);
        }, [
            ()=>y("keys_title"),
            ()=>y("keys_generate_btn"),
            ()=>y("keys_import_btn")
        ]), X("click", H, ()=>{
            p(n, !c(n)), p(i, !1);
        }), X("click", De, ()=>{
            p(i, !c(i)), p(n, !1);
        }), T(e, E), dt();
    }
    It([
        "click"
    ]);
    var lc = O('<option class="svelte-1n46o8q"> </option>'), cc = Zn('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'), uc = Zn('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'), fc = O('<div class="card" style="text-align: center;"><p class="error"> </p></div>'), _c = O('<div class="card" style="text-align: center;"><p style="color: var(--color-text-secondary);"> </p></div>'), dc = O('<!> <div class="tabs"><button> </button> <button> </button> <button> </button> <button> </button> <button> </button></div> <!>', 1), vc = O('<header style="text-align: center; margin-bottom: 2rem; position: relative;"><div class="header-controls svelte-1n46o8q"><a href="https://keychainpgp.org" target="_blank" rel="noopener noreferrer" class="header-link svelte-1n46o8q" title="keychainpgp.org"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></a> <a href="https://github.com/KeychainPGP/keychainpgp" target="_blank" rel="noopener noreferrer" class="header-link svelte-1n46o8q" title="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path></svg></a> <select class="locale-select svelte-1n46o8q"></select> <button class="theme-toggle svelte-1n46o8q"><!></button></div> <h1 style="font-size: 1.5rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;"><img src="./icon.png" alt="" style="width: 32px; height: 32px; border-radius: 6px;"/> KeychainPGP <span style="color: var(--color-text-secondary); font-weight: 400; font-size: 0.875rem;">Web</span></h1> <p style="color: var(--color-text-secondary); font-size: 0.875rem; margin-top: 0.25rem;"> </p></header> <!> <footer style="text-align: center; margin-top: 3rem; color: var(--color-text-secondary); font-size: 0.75rem;"><p> </p></footer>', 1);
    function pc(e, t) {
        _t(t, !0);
        let r = S(!1), n = S(""), i = S("encrypt"), o = S(rt(tl())), a = S(!ol());
        vo(()=>{
            li(c(o));
        });
        function s() {
            p(o, c(o) === "dark" ? "light" : "dark", !0), rl(c(o));
        }
        function l(A) {
            const j = A.target;
            Cs(j.value);
        }
        async function u() {
            try {
                await Zs(), p(r, !0);
            } catch (A) {
                p(n, y("loading_error", {
                    error: String(A)
                }), !0);
            }
        }
        u();
        var _ = vc(), f = et(_), h = v(f), g = b(v(h), 4);
        hr(g, 21, ()=>Ht, (A)=>A.code, (A, j)=>{
            var z = lc(), te = v(z), _e = {};
            D(()=>{
                m(te, c(j).name), _e !== (_e = c(j).code) && (z.value = (z.__value = c(j).code) ?? "");
            }), T(A, z);
        });
        var d;
        zo(g);
        var w = b(g, 2), N = v(w);
        {
            var P = (A)=>{
                var j = cc();
                T(A, j);
            }, L = (A)=>{
                var j = uc();
                T(A, j);
            };
            $(N, (A)=>{
                c(o) === "light" ? A(P) : A(L, !1);
            });
        }
        var E = b(h, 4), M = v(E), C = b(f, 2);
        {
            var K = (A)=>{
                var j = fc(), z = v(j), te = v(z);
                D(()=>m(te, c(n))), T(A, j);
            }, F = (A)=>{
                var j = _c(), z = v(j), te = v(z);
                D((_e)=>m(te, _e), [
                    ()=>y("loading")
                ]), T(A, j);
            }, H = (A)=>{
                var j = dc(), z = et(j);
                {
                    var te = (q)=>{
                        Pl(q, {
                            onDismiss: ()=>p(a, !1)
                        });
                    };
                    $(z, (q)=>{
                        c(a) && q(te);
                    });
                }
                var _e = b(z, 2), Ne = v(_e);
                let He;
                var pt = v(Ne), Xe = b(Ne, 2);
                let R;
                var B = v(Xe), U = b(Xe, 2);
                let x;
                var I = v(U), G = b(U, 2);
                let J;
                var oe = v(G), de = b(G, 2);
                let ge;
                var le = v(de), je = b(_e, 2);
                {
                    var re = (q)=>{
                        Nl(q, {});
                    }, ce = (q)=>{
                        Fl(q, {});
                    }, Q = (q)=>{
                        Wl(q, {});
                    }, ue = (q)=>{
                        Xl(q, {});
                    }, fe = (q)=>{
                        sc(q, {});
                    };
                    $(je, (q)=>{
                        c(i) === "encrypt" ? q(re) : c(i) === "decrypt" ? q(ce, 1) : c(i) === "sign" ? q(Q, 2) : c(i) === "verify" ? q(ue, 3) : c(i) === "keys" && q(fe, 4);
                    });
                }
                D((q, Ee, ye, Ae, ae)=>{
                    He = gt(Ne, 1, "tab", null, He, {
                        active: c(i) === "encrypt"
                    }), m(pt, q), R = gt(Xe, 1, "tab", null, R, {
                        active: c(i) === "decrypt"
                    }), m(B, Ee), x = gt(U, 1, "tab", null, x, {
                        active: c(i) === "sign"
                    }), m(I, ye), J = gt(G, 1, "tab", null, J, {
                        active: c(i) === "verify"
                    }), m(oe, Ae), ge = gt(de, 1, "tab", null, ge, {
                        active: c(i) === "keys"
                    }), m(le, ae);
                }, [
                    ()=>y("tab_encrypt"),
                    ()=>y("tab_decrypt"),
                    ()=>y("tab_sign"),
                    ()=>y("tab_verify"),
                    ()=>y("tab_keys")
                ]), X("click", Ne, ()=>p(i, "encrypt")), X("click", Xe, ()=>p(i, "decrypt")), X("click", U, ()=>p(i, "sign")), X("click", G, ()=>p(i, "verify")), X("click", de, ()=>p(i, "keys")), T(A, j);
            };
            $(C, (A)=>{
                c(n) ? A(K) : c(r) ? A(H, !1) : A(F, 1);
            });
        }
        var Se = b(C, 2), De = v(Se), V = v(De);
        D((A, j, z, te)=>{
            d !== (d = A) && (g.value = (g.__value = A) ?? "", Qn(g, A)), Oe(w, "title", j), m(M, z), m(V, te);
        }, [
            Ns,
            ()=>c(o) === "light" ? y("theme_light") : y("theme_dark"),
            ()=>y("app_subtitle"),
            ()=>y("app_footer")
        ]), X("change", g, l), X("click", w, s), T(e, _), dt();
    }
    It([
        "change",
        "click"
    ]);
    async function hc() {
        await Ms(), Io(pc, {
            target: document.getElementById("app")
        });
    }
    hc();
})();
