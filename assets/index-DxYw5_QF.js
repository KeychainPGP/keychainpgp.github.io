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
    const _i = 1, di = 2, vi = 16, pi = 1, hi = 2, be = Symbol(), fn = "http://www.w3.org/1999/xhtml", kr = !1;
    var Mr = Array.isArray, gi = Array.prototype.indexOf, Lt = Array.prototype.includes, fr = Array.from, yi = Object.defineProperty, Wt = Object.getOwnPropertyDescriptor, bi = Object.getOwnPropertyDescriptors, mi = Object.prototype, wi = Array.prototype, _n = Object.getPrototypeOf, Ur = Object.isExtensible;
    const xi = ()=>{};
    function ki(e) {
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
    const me = 2, _r = 4, dr = 8, vn = 1 << 24, nt = 16, Ye = 32, It = 64, Er = 128, Fe = 512, pe = 1024, we = 2048, $e = 4096, Ne = 8192, st = 16384, St = 32768, Mt = 65536, $r = 1 << 17, pn = 1 << 18, Kt = 1 << 19, Ei = 1 << 20, ot = 1 << 25, Tt = 65536, Sr = 1 << 21, Nr = 1 << 22, lt = 1 << 23, Bt = Symbol("$state"), Si = Symbol(""), yt = new class extends Error {
        name = "StaleReactionError";
        message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
    }, Ti = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml");
    function Ai() {
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
    function Ni() {
        throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    }
    function Ci() {
        throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
    }
    function ji() {
        console.warn("https://svelte.dev/e/select_multiple_invalid_value");
    }
    function zi() {
        console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
    }
    function hn(e) {
        return e === this.v;
    }
    function Ki(e, t) {
        return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
    }
    function gn(e) {
        return !Ki(e, this.v);
    }
    let Fi = !1, Ge = null;
    function Nt(e) {
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
            for (var n of r)jn(n);
        }
        return t.i = !0, Ge = t.p, {};
    }
    function yn() {
        return !0;
    }
    let bt = [];
    function bn() {
        var e = bt;
        bt = [], ki(e);
    }
    function Dt(e) {
        if (bt.length === 0 && !Ut) {
            var t = bt;
            queueMicrotask(()=>{
                t === bt && bn();
            });
        }
        bt.push(e);
    }
    function Vi() {
        for(; bt.length > 0;)bn();
    }
    function mn(e) {
        var t = Y;
        if (t === null) return W.f |= lt, e;
        if ((t.f & St) === 0 && (t.f & _r) === 0) throw e;
        at(e, t);
    }
    function at(e, t) {
        for(; t !== null;){
            if ((t.f & Er) !== 0) {
                if ((t.f & St) === 0) throw e;
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
    function Cr(e) {
        (e.f & Fe) !== 0 || e.deps === null ? se(e, pe) : se(e, $e);
    }
    function wn(e) {
        if (e !== null) for (const t of e)(t.f & me) === 0 || (t.f & Tt) === 0 || (t.f ^= Tt, wn(t.deps));
    }
    function xn(e, t, r) {
        (e.f & we) !== 0 ? t.add(e) : (e.f & $e) !== 0 && r.add(e), wn(e.deps), se(e, pe);
    }
    const rr = new Set;
    let X = null, Tr = null, We = null, Ae = [], vr = null, Ar = !1, Ut = !1;
    class ct {
        current = new Map;
        previous = new Map;
        #t = new Set;
        #s = new Set;
        #e = 0;
        #o = 0;
        #r = null;
        #a = new Set;
        #n = new Set;
        #i = new Map;
        is_fork = !1;
        #l = !1;
        #u() {
            return this.is_fork || this.#o > 0;
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
            Ae = [], this.apply();
            var r = [], n = [];
            for (const i of t)this.#c(i, r, n);
            if (this.#u()) {
                this.#f(n), this.#f(r);
                for (const [i, o] of this.#i)Tn(i, o);
            } else {
                for (const i of this.#t)i();
                this.#t.clear(), this.#e === 0 && this.#d(), Tr = this, X = null, Yr(n), Yr(r), Tr = null, this.#r?.resolve();
            }
            We = null;
        }
        #c(t, r, n) {
            t.f ^= pe;
            for(var i = t.first; i !== null;){
                var o = i.f, a = (o & (Ye | It)) !== 0, s = a && (o & pe) !== 0, l = s || (o & Ne) !== 0 || this.#i.has(i);
                if (!l && i.fn !== null) {
                    a ? i.f ^= pe : (o & _r) !== 0 ? r.push(i) : er(i) && ((o & nt) !== 0 && this.#n.add(i), zt(i));
                    var u = i.first;
                    if (u !== null) {
                        i = u;
                        continue;
                    }
                }
                for(; i !== null;){
                    var d = i.next;
                    if (d !== null) {
                        i = d;
                        break;
                    }
                    i = i.parent;
                }
            }
        }
        #f(t) {
            for(var r = 0; r < t.length; r += 1)xn(t[r], this.#a, this.#n);
        }
        capture(t, r) {
            r !== be && !this.previous.has(t) && this.previous.set(t, r), (t.f & lt) === 0 && (this.current.set(t, t.v), We?.set(t, t.v));
        }
        activate() {
            X = this, this.apply();
        }
        deactivate() {
            X === this && (X = null, We = null);
        }
        flush() {
            if (this.activate(), Ae.length > 0) {
                if (kn(), X !== null && X !== this) return;
            } else this.#e === 0 && this.process([]);
            this.deactivate();
        }
        discard() {
            for (const t of this.#s)t(this);
            this.#s.clear();
        }
        #d() {
            if (rr.size > 1) {
                this.previous.clear();
                var t = We, r = !0;
                for (const i of rr){
                    if (i === this) {
                        r = !1;
                        continue;
                    }
                    const o = [];
                    for (const [s, l] of this.current){
                        if (i.current.has(s)) if (r && l !== i.current.get(s)) i.current.set(s, l);
                        else continue;
                        o.push(s);
                    }
                    if (o.length === 0) continue;
                    const a = [
                        ...i.current.keys()
                    ].filter((s)=>!this.current.has(s));
                    if (a.length > 0) {
                        var n = Ae;
                        Ae = [];
                        const s = new Set, l = new Map;
                        for (const u of o)En(u, a, s, l);
                        if (Ae.length > 0) {
                            X = i, i.apply();
                            for (const u of Ae)i.#c(u, [], []);
                            i.deactivate();
                        }
                        Ae = n;
                    }
                }
                X = null, We = t;
            }
            rr.delete(this);
        }
        increment(t) {
            this.#e += 1, t && (this.#o += 1);
        }
        decrement(t) {
            this.#e -= 1, t && (this.#o -= 1), !this.#l && (this.#l = !0, Dt(()=>{
                this.#l = !1, this.#u() ? Ae.length > 0 && this.flush() : this.revive();
            }));
        }
        revive() {
            for (const t of this.#a)this.#n.delete(t), se(t, we), Be(t);
            for (const t of this.#n)se(t, $e), Be(t);
            this.flush();
        }
        oncommit(t) {
            this.#t.add(t);
        }
        ondiscard(t) {
            this.#s.add(t);
        }
        settled() {
            return (this.#r ??= dn()).promise;
        }
        static ensure() {
            if (X === null) {
                const t = X = new ct;
                rr.add(X), Ut || Dt(()=>{
                    X === t && t.flush();
                });
            }
            return X;
        }
        apply() {}
    }
    function qi(e) {
        var t = Ut;
        Ut = !0;
        try {
            for(var r;;){
                if (Vi(), Ae.length === 0 && (X?.flush(), Ae.length === 0)) return vr = null, r;
                kn();
            }
        } finally{
            Ut = t;
        }
    }
    function kn() {
        Ar = !0;
        var e = null;
        try {
            for(var t = 0; Ae.length > 0;){
                var r = ct.ensure();
                if (t++ > 1e3) {
                    var n, i;
                    Wi();
                }
                r.process(Ae), ut.clear();
            }
        } finally{
            Ae = [], Ar = !1, vr = null;
        }
    }
    function Wi() {
        try {
            Di();
        } catch (e) {
            at(e, vr);
        }
    }
    let Qe = null;
    function Yr(e) {
        var t = e.length;
        if (t !== 0) {
            for(var r = 0; r < t;){
                var n = e[r++];
                if ((n.f & (st | Ne)) === 0 && er(n) && (Qe = new Set, zt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Fn(n), Qe?.size > 0)) {
                    ut.clear();
                    for (const i of Qe){
                        if ((i.f & (st | Ne)) !== 0) continue;
                        const o = [
                            i
                        ];
                        let a = i.parent;
                        for(; a !== null;)Qe.has(a) && (Qe.delete(a), o.push(a)), a = a.parent;
                        for(let s = o.length - 1; s >= 0; s--){
                            const l = o[s];
                            (l.f & (st | Ne)) === 0 && zt(l);
                        }
                    }
                    Qe.clear();
                }
            }
            Qe = null;
        }
    }
    function En(e, t, r, n) {
        if (!r.has(e) && (r.add(e), e.reactions !== null)) for (const i of e.reactions){
            const o = i.f;
            (o & me) !== 0 ? En(i, t, r, n) : (o & (Nr | nt)) !== 0 && (o & we) === 0 && Sn(i, t, n) && (se(i, we), Be(i));
        }
    }
    function Sn(e, t, r) {
        const n = r.get(e);
        if (n !== void 0) return n;
        if (e.deps !== null) for (const i of e.deps){
            if (Lt.call(t, i)) return !0;
            if ((i.f & me) !== 0 && Sn(i, t, r)) return r.set(i, !0), !0;
        }
        return r.set(e, !1), !1;
    }
    function Be(e) {
        var t = vr = e, r = t.b;
        if (r?.is_pending && (e.f & (_r | dr | vn)) !== 0 && (e.f & St) === 0) {
            r.defer_effect(e);
            return;
        }
        for(; t.parent !== null;){
            t = t.parent;
            var n = t.f;
            if (Ar && t === Y && (n & nt) !== 0 && (n & pn) === 0 && (n & St) !== 0) return;
            if ((n & (It | Ye)) !== 0) {
                if ((n & pe) === 0) return;
                t.f ^= pe;
            }
        }
        Ae.push(t);
    }
    function Tn(e, t) {
        if (!((e.f & Ye) !== 0 && (e.f & pe) !== 0)) {
            (e.f & we) !== 0 ? t.d.push(e) : (e.f & $e) !== 0 && t.m.push(e), se(e, pe);
            for(var r = e.first; r !== null;)Tn(r, t), r = r.next;
        }
    }
    function Bi(e) {
        let t = 0, r = At(0), n;
        return ()=>{
            Kr() && (c(r), zn(()=>(t === 0 && (n = Xn(()=>e(()=>$t(r)))), t += 1, ()=>{
                    Dt(()=>{
                        t -= 1, t === 0 && (n?.(), n = void 0, $t(r));
                    });
                })));
        };
    }
    var Ui = Mt | Kt;
    function $i(e, t, r, n) {
        new Yi(e, t, r, n);
    }
    class Yi {
        parent;
        is_pending = !1;
        transform_error;
        #t;
        #s = null;
        #e;
        #o;
        #r;
        #a = null;
        #n = null;
        #i = null;
        #l = null;
        #u = 0;
        #c = 0;
        #f = !1;
        #d = new Set;
        #v = new Set;
        #_ = null;
        #b = Bi(()=>(this.#_ = At(this.#u), ()=>{
                this.#_ = null;
            }));
        constructor(t, r, n, i){
            this.#t = t, this.#e = r, this.#o = (o)=>{
                var a = Y;
                a.b = this, a.f |= Er, n(o);
            }, this.parent = Y.b, this.transform_error = i ?? this.parent?.transform_error ?? ((o)=>o), this.#r = Fr(()=>{
                this.#g();
            }, Ui);
        }
        #m() {
            try {
                this.#a = Ke(()=>this.#o(this.#t));
            } catch (t) {
                this.error(t);
            }
        }
        #w(t) {
            const r = this.#e.failed;
            r && (this.#i = Ke(()=>{
                r(this.#t, ()=>t, ()=>()=>{});
            }));
        }
        #x() {
            const t = this.#e.pending;
            t && (this.is_pending = !0, this.#n = Ke(()=>t(this.#t)), Dt(()=>{
                var r = this.#l = document.createDocumentFragment(), n = ft();
                r.append(n), this.#a = this.#h(()=>(ct.ensure(), Ke(()=>this.#o(n)))), this.#c === 0 && (this.#t.before(r), this.#l = null, kt(this.#n, ()=>{
                    this.#n = null;
                }), this.#p());
            }));
        }
        #g() {
            try {
                if (this.is_pending = this.has_pending_snippet(), this.#c = 0, this.#u = 0, this.#a = Ke(()=>{
                    this.#o(this.#t);
                }), this.#c > 0) {
                    var t = this.#l = document.createDocumentFragment();
                    qn(this.#a, t);
                    const r = this.#e.pending;
                    this.#n = Ke(()=>r(this.#t));
                } else this.#p();
            } catch (r) {
                this.error(r);
            }
        }
        #p() {
            this.is_pending = !1;
            for (const t of this.#d)se(t, we), Be(t);
            for (const t of this.#v)se(t, $e), Be(t);
            this.#d.clear(), this.#v.clear();
        }
        defer_effect(t) {
            xn(t, this.#d, this.#v);
        }
        is_rendered() {
            return !this.is_pending && (!this.parent || this.parent.is_rendered());
        }
        has_pending_snippet() {
            return !!this.#e.pending;
        }
        #h(t) {
            var r = Y, n = W, i = Ge;
            Je(this.#r), qe(this.#r), Nt(this.#r.ctx);
            try {
                return t();
            } catch (o) {
                return mn(o), null;
            } finally{
                Je(r), qe(n), Nt(i);
            }
        }
        #y(t) {
            if (!this.has_pending_snippet()) {
                this.parent && this.parent.#y(t);
                return;
            }
            this.#c += t, this.#c === 0 && (this.#p(), this.#n && kt(this.#n, ()=>{
                this.#n = null;
            }), this.#l && (this.#t.before(this.#l), this.#l = null));
        }
        update_pending_count(t) {
            this.#y(t), this.#u += t, !(!this.#_ || this.#f) && (this.#f = !0, Dt(()=>{
                this.#f = !1, this.#_ && Ct(this.#_, this.#u);
            }));
        }
        get_effect_pending() {
            return this.#b(), c(this.#_);
        }
        error(t) {
            var r = this.#e.onerror;
            let n = this.#e.failed;
            if (!r && !n) throw t;
            this.#a && (Re(this.#a), this.#a = null), this.#n && (Re(this.#n), this.#n = null), this.#i && (Re(this.#i), this.#i = null);
            var i = !1, o = !1;
            const a = ()=>{
                if (i) {
                    zi();
                    return;
                }
                i = !0, o && Ci(), this.#i !== null && kt(this.#i, ()=>{
                    this.#i = null;
                }), this.#h(()=>{
                    ct.ensure(), this.#g();
                });
            }, s = (l)=>{
                try {
                    o = !0, r?.(l, a), o = !1;
                } catch (u) {
                    at(u, this.#r && this.#r.parent);
                }
                n && (this.#i = this.#h(()=>{
                    ct.ensure();
                    try {
                        return Ke(()=>{
                            var u = Y;
                            u.b = this, u.f |= Er, n(this.#t, ()=>l, ()=>a);
                        });
                    } catch (u) {
                        return at(u, this.#r.parent), null;
                    }
                }));
            };
            Dt(()=>{
                var l;
                try {
                    l = this.transform_error(t);
                } catch (u) {
                    at(u, this.#r && this.#r.parent);
                    return;
                }
                l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(s, (u)=>at(u, this.#r && this.#r.parent)) : s(l);
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
                (a.f & st) === 0 && at(h, a);
            }
            Pr();
        }
        if (r.length === 0) {
            l.then(()=>u(t.map(i)));
            return;
        }
        function d() {
            s(), Promise.all(r.map((f)=>Zi(f))).then((f)=>u([
                    ...t.map(i),
                    ...f
                ])).catch((f)=>at(f, a));
        }
        l ? l.then(d) : d();
    }
    function Xi() {
        var e = Y, t = W, r = Ge, n = X;
        return function(o = !0) {
            Je(e), qe(t), Nt(r), o && n?.activate();
        };
    }
    function Pr(e = !0) {
        Je(null), qe(null), Nt(null), e && X?.deactivate();
    }
    function Ji() {
        var e = Y.b, t = X, r = e.is_rendered();
        return e.update_pending_count(1), t.increment(r), ()=>{
            e.update_pending_count(-1), t.decrement(r);
        };
    }
    function An(e) {
        var t = me | we, r = W !== null && (W.f & me) !== 0 ? W : null;
        return Y !== null && (Y.f |= Kt), {
            ctx: Ge,
            deps: null,
            effects: null,
            equals: hn,
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
        Y === null && Ai();
        var i = void 0, o = At(be), a = !W, s = new Map;
        return ho(()=>{
            var l = dn();
            i = l.promise;
            try {
                Promise.resolve(e()).then(l.resolve, l.reject).finally(Pr);
            } catch (h) {
                l.reject(h), Pr();
            }
            var u = X;
            if (a) {
                var d = Ji();
                s.get(u)?.reject(yt), s.delete(u), s.set(u, l);
            }
            const f = (h, g = void 0)=>{
                if (u.activate(), g) g !== yt && (o.f |= lt, Ct(o, g));
                else {
                    (o.f & lt) !== 0 && (o.f ^= lt), Ct(o, h);
                    for (const [_, w] of s){
                        if (s.delete(_), _ === u) break;
                        w.reject(yt);
                    }
                }
                d && d();
            };
            l.promise.then(f, (h)=>f(null, h || "unknown"));
        }), Cn(()=>{
            for (const l of s.values())l.reject(yt);
        }), new Promise((l)=>{
            function u(d) {
                function f() {
                    d === i ? l(o) : u(i);
                }
                d.then(f, f);
            }
            u(i);
        });
    }
    function Qi(e) {
        const t = An(e);
        return t.equals = gn, t;
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
            if ((t.f & me) === 0) return (t.f & st) === 0 ? t : null;
            t = t.parent;
        }
        return null;
    }
    function jr(e) {
        var t, r = Y;
        Je(to(e));
        try {
            e.f &= ~Tt, eo(e), t = $n(e);
        } finally{
            Je(r);
        }
        return t;
    }
    function Pn(e) {
        var t = jr(e);
        if (!e.equals(t) && (e.wv = Bn(), (!X?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
            se(e, pe);
            return;
        }
        Pt || (We !== null ? (Kr() || X?.is_fork) && We.set(e, t) : Cr(e));
    }
    function ro(e) {
        if (e.effects !== null) for (const t of e.effects)(t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(yt), t.teardown = xi, t.ac = null, Zt(t, 0), Vr(t));
    }
    function In(e) {
        if (e.effects !== null) for (const t of e.effects)t.teardown && zt(t);
    }
    let Ir = new Set;
    const ut = new Map;
    let On = !1;
    function At(e, t) {
        var r = {
            f: 0,
            v: e,
            reactions: null,
            equals: hn,
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
        return t || (n.equals = gn), n;
    }
    function p(e, t, r = !1) {
        W !== null && (!Ue || (W.f & $r) !== 0) && yn() && (W.f & (me | nt | Nr | $r)) !== 0 && (Ve === null || !Lt.call(Ve, e)) && Ni();
        let n = r ? rt(t) : t;
        return Ct(e, n);
    }
    function Ct(e, t) {
        if (!e.equals(t)) {
            var r = e.v;
            Pt ? ut.set(e, t) : ut.set(e, r), e.v = t;
            var n = ct.ensure();
            if (n.capture(e, r), (e.f & me) !== 0) {
                const i = e;
                (e.f & we) !== 0 && jr(i), Cr(i);
            }
            e.wv = Bn(), Rn(e, we), Y !== null && (Y.f & pe) !== 0 && (Y.f & (Ye | It)) === 0 && (ze === null ? mo([
                e
            ]) : ze.push(e)), !n.is_fork && Ir.size > 0 && !On && io();
        }
        return t;
    }
    function io() {
        On = !1;
        for (const e of Ir)(e.f & pe) !== 0 && se(e, $e), er(e) && zt(e);
        Ir.clear();
    }
    function cr(e, t = 1) {
        var r = c(e), n = t === 1 ? r++ : r--;
        return p(e, r), n;
    }
    function $t(e) {
        p(e, e.v + 1);
    }
    function Rn(e, t) {
        var r = e.reactions;
        if (r !== null) for(var n = r.length, i = 0; i < n; i++){
            var o = r[i], a = o.f, s = (a & we) === 0;
            if (s && se(o, t), (a & me) !== 0) {
                var l = o;
                We?.delete(l), (a & Tt) === 0 && (a & Fe && (o.f |= Tt), Rn(l, $e));
            } else s && ((a & nt) !== 0 && Qe !== null && Qe.add(o), Be(o));
        }
    }
    function rt(e) {
        if (typeof e != "object" || e === null || Bt in e) return e;
        const t = _n(e);
        if (t !== mi && t !== wi) return e;
        var r = new Map, n = Mr(e), i = S(0), o = Et, a = (s)=>{
            if (Et === o) return s();
            var l = W, u = Et;
            qe(null), Qr(o);
            var d = s();
            return qe(l), Qr(u), d;
        };
        return n && r.set("length", S(e.length)), new Proxy(e, {
            defineProperty (s, l, u) {
                (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Li();
                var d = r.get(l);
                return d === void 0 ? a(()=>{
                    var f = S(u.value);
                    return r.set(l, f), f;
                }) : p(d, u.value, !0), !0;
            },
            deleteProperty (s, l) {
                var u = r.get(l);
                if (u === void 0) {
                    if (l in s) {
                        const d = a(()=>S(be));
                        r.set(l, d), $t(i);
                    }
                } else p(u, be), $t(i);
                return !0;
            },
            get (s, l, u) {
                if (l === Bt) return e;
                var d = r.get(l), f = l in s;
                if (d === void 0 && (!f || Wt(s, l)?.writable) && (d = a(()=>{
                    var g = rt(f ? s[l] : be), _ = S(g);
                    return _;
                }), r.set(l, d)), d !== void 0) {
                    var h = c(d);
                    return h === be ? void 0 : h;
                }
                return Reflect.get(s, l, u);
            },
            getOwnPropertyDescriptor (s, l) {
                var u = Reflect.getOwnPropertyDescriptor(s, l);
                if (u && "value" in u) {
                    var d = r.get(l);
                    d && (u.value = c(d));
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
                if (l === Bt) return !0;
                var u = r.get(l), d = u !== void 0 && u.v !== be || Reflect.has(s, l);
                if (u !== void 0 || Y !== null && (!d || Wt(s, l)?.writable)) {
                    u === void 0 && (u = a(()=>{
                        var h = d ? rt(s[l]) : be, g = S(h);
                        return g;
                    }), r.set(l, u));
                    var f = c(u);
                    if (f === be) return !1;
                }
                return d;
            },
            set (s, l, u, d) {
                var f = r.get(l), h = l in s;
                if (n && l === "length") for(var g = u; g < f.v; g += 1){
                    var _ = r.get(g + "");
                    _ !== void 0 ? p(_, be) : g in s && (_ = a(()=>S(be)), r.set(g + "", _));
                }
                if (f === void 0) (!h || Wt(s, l)?.writable) && (f = a(()=>S(void 0)), p(f, rt(u)), r.set(l, f));
                else {
                    h = f.v !== be;
                    var w = a(()=>rt(u));
                    p(f, w);
                }
                var C = Reflect.getOwnPropertyDescriptor(s, l);
                if (C?.set && C.set.call(d, u), !h) {
                    if (n && typeof l == "string") {
                        var P = r.get("length"), L = Number(l);
                        Number.isInteger(L) && L >= P.v && p(P, L + 1);
                    }
                    $t(i);
                }
                return !0;
            },
            ownKeys (s) {
                c(i);
                var l = Reflect.ownKeys(s).filter((f)=>{
                    var h = r.get(f);
                    return h === void 0 || h.v !== be;
                });
                for (var [u, d] of r)d.v !== be && !(u in s) && l.push(u);
                return l;
            },
            setPrototypeOf () {
                Mi();
            }
        });
    }
    function Hr(e) {
        try {
            if (e !== null && typeof e == "object" && Bt in e) return e[Bt];
        } catch  {}
        return e;
    }
    function oo(e, t) {
        return Object.is(Hr(e), Hr(t));
    }
    var Xr, Dn, Ln, Mn;
    function ao() {
        if (Xr === void 0) {
            Xr = window, Dn = /Firefox/.test(navigator.userAgent);
            var e = Element.prototype, t = Node.prototype, r = Text.prototype;
            Ln = Wt(t, "firstChild").get, Mn = Wt(t, "nextSibling").get, Ur(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ur(r) && (r.__t = void 0);
        }
    }
    function ft(e = "") {
        return document.createTextNode(e);
    }
    function jt(e) {
        return Ln.call(e);
    }
    function Qt(e) {
        return Mn.call(e);
    }
    function v(e, t) {
        return jt(e);
    }
    function et(e, t = !1) {
        {
            var r = jt(e);
            return r instanceof Comment && r.data === "" ? Qt(r) : r;
        }
    }
    function b(e, t = 1, r = !1) {
        let n = e;
        for(; t--;)n = Qt(n);
        return n;
    }
    function so(e) {
        e.textContent = "";
    }
    function Nn() {
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
        Y === null && (W === null && Ri(), Oi()), Pt && Ii();
    }
    function _o(e, t) {
        var r = t.last;
        r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
    }
    function vt(e, t, r) {
        var n = Y;
        n !== null && (n.f & Ne) !== 0 && (e |= Ne);
        var i = {
            ctx: Ge,
            deps: null,
            nodes: null,
            f: e | we | Fe,
            first: null,
            fn: t,
            last: null,
            next: null,
            parent: n,
            b: n && n.b,
            prev: null,
            teardown: null,
            wv: 0,
            ac: null
        };
        if (r) try {
            zt(i);
        } catch (s) {
            throw Re(i), s;
        }
        else t !== null && Be(i);
        var o = i;
        if (r && o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && (o.f & Kt) === 0 && (o = o.first, (e & nt) !== 0 && (e & Mt) !== 0 && o !== null && (o.f |= Mt)), o !== null && (o.parent = n, n !== null && _o(o, n), W !== null && (W.f & me) !== 0 && (e & It) === 0)) {
            var a = W;
            (a.effects ??= []).push(o);
        }
        return i;
    }
    function Kr() {
        return W !== null && !Ue;
    }
    function Cn(e) {
        const t = vt(dr, null, !1);
        return se(t, pe), t.teardown = e, t;
    }
    function vo(e) {
        fo();
        var t = Y.f, r = !W && (t & Ye) !== 0 && (t & St) === 0;
        if (r) {
            var n = Ge;
            (n.e ??= []).push(e);
        } else return jn(e);
    }
    function jn(e) {
        return vt(_r | Ei, e, !1);
    }
    function po(e) {
        ct.ensure();
        const t = vt(It | Kt, e, !0);
        return (r = {})=>new Promise((n)=>{
                r.outro ? kt(t, ()=>{
                    Re(t), n(void 0);
                }) : (Re(t), n(void 0));
            });
    }
    function ho(e) {
        return vt(Nr | Kt, e, !0);
    }
    function zn(e, t = 0) {
        return vt(dr | t, e, !0);
    }
    function D(e, t = [], r = [], n = []) {
        Hi(n, t, r, (i)=>{
            vt(dr, ()=>e(...i.map(c)), !0);
        });
    }
    function Fr(e, t = 0) {
        var r = vt(nt | t, e, !0);
        return r;
    }
    function Ke(e) {
        return vt(Ye | Kt, e, !0);
    }
    function Kn(e) {
        var t = e.teardown;
        if (t !== null) {
            const r = Pt, n = W;
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
            (r.f & It) !== 0 ? r.parent = null : Re(r, t), r = n;
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
        (t || (e.f & pn) !== 0) && e.nodes !== null && e.nodes.end !== null && (yo(e.nodes.start, e.nodes.end), r = !0), Vr(e, t && !r), Zt(e, 0), se(e, st);
        var n = e.nodes && e.nodes.t;
        if (n !== null) for (const o of n)o.stop();
        Kn(e);
        var i = e.parent;
        i !== null && i.first !== null && Fn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
    }
    function yo(e, t) {
        for(; e !== null;){
            var r = e === t ? null : Qt(e);
            e.remove(), e = r;
        }
    }
    function Fn(e) {
        var t = e.parent, r = e.prev, n = e.next;
        r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
    }
    function kt(e, t, r = !0) {
        var n = [];
        Vn(e, n, !0);
        var i = ()=>{
            r && Re(e), t && t();
        }, o = n.length;
        if (o > 0) {
            var a = ()=>--o || i();
            for (var s of n)s.out(a);
        } else i();
    }
    function Vn(e, t, r) {
        if ((e.f & Ne) === 0) {
            e.f ^= Ne;
            var n = e.nodes && e.nodes.t;
            if (n !== null) for (const s of n)(s.is_global || r) && t.push(s);
            for(var i = e.first; i !== null;){
                var o = i.next, a = (i.f & Mt) !== 0 || (i.f & Ye) !== 0 && (e.f & nt) !== 0;
                Vn(i, t, a ? r : !1), i = o;
            }
        }
    }
    function Gr(e) {
        Gn(e, !0);
    }
    function Gn(e, t) {
        if ((e.f & Ne) !== 0) {
            e.f ^= Ne, (e.f & pe) === 0 && (se(e, we), Be(e));
            for(var r = e.first; r !== null;){
                var n = r.next, i = (r.f & Mt) !== 0 || (r.f & Ye) !== 0;
                Gn(r, i ? t : !1), r = n;
            }
            var o = e.nodes && e.nodes.t;
            if (o !== null) for (const a of o)(a.is_global || t) && a.in();
        }
    }
    function qn(e, t) {
        if (e.nodes) for(var r = e.nodes.start, n = e.nodes.end; r !== null;){
            var i = r === n ? null : Qt(r);
            t.append(r), r = i;
        }
    }
    let ar = !1, Pt = !1;
    function Zr(e) {
        Pt = e;
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
    let Wn = 1, mt = 0, Et = mt;
    function Qr(e) {
        Et = e;
    }
    function Bn() {
        return ++Wn;
    }
    function er(e) {
        var t = e.f;
        if ((t & we) !== 0) return !0;
        if (t & me && (e.f &= ~Tt), (t & $e) !== 0) {
            for(var r = e.deps, n = r.length, i = 0; i < n; i++){
                var o = r[i];
                if (er(o) && Pn(o), o.wv > e.wv) return !0;
            }
            (t & Fe) !== 0 && We === null && se(e, pe);
        }
        return !1;
    }
    function Un(e, t, r = !0) {
        var n = e.reactions;
        if (n !== null && !(Ve !== null && Lt.call(Ve, e))) for(var i = 0; i < n.length; i++){
            var o = n[i];
            (o.f & me) !== 0 ? Un(o, t, !1) : t === o && (r ? se(o, we) : (o.f & pe) !== 0 && se(o, $e), Be(o));
        }
    }
    function $n(e) {
        var t = Pe, r = Le, n = ze, i = W, o = Ve, a = Ge, s = Ue, l = Et, u = e.f;
        Pe = null, Le = 0, ze = null, W = (u & (Ye | It)) === 0 ? e : null, Ve = null, Nt(e.ctx), Ue = !1, Et = ++mt, e.ac !== null && (zr(()=>{
            e.ac.abort(yt);
        }), e.ac = null);
        try {
            e.f |= Sr;
            var d = e.fn, f = d();
            e.f |= St;
            var h = e.deps, g = X?.is_fork;
            if (Pe !== null) {
                var _;
                if (g || Zt(e, Le), h !== null && Le > 0) for(h.length = Le + Pe.length, _ = 0; _ < Pe.length; _++)h[Le + _] = Pe[_];
                else e.deps = h = Pe;
                if (Kr() && (e.f & Fe) !== 0) for(_ = Le; _ < h.length; _++)(h[_].reactions ??= []).push(e);
            } else !g && h !== null && Le < h.length && (Zt(e, Le), h.length = Le);
            if (yn() && ze !== null && !Ue && h !== null && (e.f & (me | $e | we)) === 0) for(_ = 0; _ < ze.length; _++)Un(ze[_], e);
            if (i !== null && i !== e) {
                if (mt++, i.deps !== null) for(let w = 0; w < r; w += 1)i.deps[w].rv = mt;
                if (t !== null) for (const w of t)w.rv = mt;
                ze !== null && (n === null ? n = ze : n.push(...ze));
            }
            return (e.f & lt) !== 0 && (e.f ^= lt), f;
        } catch (w) {
            return mn(w);
        } finally{
            e.f ^= Sr, Pe = t, Le = r, ze = n, W = i, Ve = o, Nt(a), Ue = s, Et = l;
        }
    }
    function wo(e, t) {
        let r = t.reactions;
        if (r !== null) {
            var n = gi.call(r, e);
            if (n !== -1) {
                var i = r.length - 1;
                i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
            }
        }
        if (r === null && (t.f & me) !== 0 && (Pe === null || !Lt.call(Pe, t))) {
            var o = t;
            (o.f & Fe) !== 0 && (o.f ^= Fe, o.f &= ~Tt), Cr(o), ro(o), Zt(o, 0);
        }
    }
    function Zt(e, t) {
        var r = e.deps;
        if (r !== null) for(var n = t; n < r.length; n++)wo(e, r[n]);
    }
    function zt(e) {
        var t = e.f;
        if ((t & st) === 0) {
            se(e, pe);
            var r = Y, n = ar;
            Y = e, ar = !0;
            try {
                (t & (nt | vn)) !== 0 ? go(e) : Vr(e), Kn(e);
                var i = $n(e);
                e.teardown = typeof i == "function" ? i : null, e.wv = Wn;
                var o;
                kr && Fi && (e.f & we) !== 0 && e.deps;
            } finally{
                ar = n, Y = r;
            }
        }
    }
    async function xo() {
        await Promise.resolve(), qi();
    }
    function c(e) {
        var t = e.f, r = (t & me) !== 0;
        if (W !== null && !Ue) {
            var n = Y !== null && (Y.f & st) !== 0;
            if (!n && (Ve === null || !Lt.call(Ve, e))) {
                var i = W.deps;
                if ((W.f & Sr) !== 0) e.rv < mt && (e.rv = mt, Pe === null && i !== null && i[Le] === e ? Le++ : Pe === null ? Pe = [
                    e
                ] : Pe.push(e));
                else {
                    (W.deps ??= []).push(e);
                    var o = e.reactions;
                    o === null ? e.reactions = [
                        W
                    ] : Lt.call(o, W) || o.push(W);
                }
            }
        }
        if (Pt && ut.has(e)) return ut.get(e);
        if (r) {
            var a = e;
            if (Pt) {
                var s = a.v;
                return ((a.f & pe) === 0 && a.reactions !== null || Hn(a)) && (s = jr(a)), ut.set(a, s), s;
            }
            var l = (a.f & Fe) === 0 && !Ue && W !== null && (ar || (W.f & Fe) !== 0), u = (a.f & St) === 0;
            er(a) && (l && (a.f |= Fe), Pn(a)), l && !u && (In(a), Yn(a));
        }
        if (We?.has(e)) return We.get(e);
        if ((e.f & lt) !== 0) throw e.v;
        return e.v;
    }
    function Yn(e) {
        if (e.f |= Fe, e.deps !== null) for (const t of e.deps)(t.reactions ??= []).push(e), (t.f & me) !== 0 && (t.f & Fe) === 0 && (In(t), Yn(t));
    }
    function Hn(e) {
        if (e.v === be) return !0;
        if (e.deps === null) return !1;
        for (const t of e.deps)if (ut.has(t) || (t.f & me) !== 0 && Hn(t)) return !0;
        return !1;
    }
    function Xn(e) {
        var t = Ue;
        try {
            return Ue = !0, e();
        } finally{
            Ue = t;
        }
    }
    const Vt = Symbol("events"), Jn = new Set, Or = new Set;
    function J(e, t, r) {
        (t[Vt] ??= {})[e] = r;
    }
    function Ot(e) {
        for(var t = 0; t < e.length; t++)Jn.add(e[t]);
        for (var r of Or)r(e);
    }
    let en = null;
    function tn(e) {
        var t = this, r = t.ownerDocument, n = e.type, i = e.composedPath?.() || [], o = i[0] || e.target;
        en = e;
        var a = 0, s = en === e && e[Vt];
        if (s) {
            var l = i.indexOf(s);
            if (l !== -1 && (t === document || t === window)) {
                e[Vt] = t;
                return;
            }
            var u = i.indexOf(t);
            if (u === -1) return;
            l <= u && (a = l);
        }
        if (o = i[a] || e.target, o !== t) {
            yi(e, "currentTarget", {
                configurable: !0,
                get () {
                    return o || r;
                }
            });
            var d = W, f = Y;
            qe(null), Je(null);
            try {
                for(var h, g = []; o !== null;){
                    var _ = o.assignedSlot || o.parentNode || o.host || null;
                    try {
                        var w = o[Vt]?.[n];
                        w != null && (!o.disabled || e.target === o) && w.call(o, e);
                    } catch (C) {
                        h ? g.push(C) : h = C;
                    }
                    if (e.cancelBubble || _ === t || _ === null) break;
                    o = _;
                }
                if (h) {
                    for (let C of g)queueMicrotask(()=>{
                        throw C;
                    });
                    throw h;
                }
            } finally{
                e[Vt] = t, delete e.currentTarget, qe(d), Je(f);
            }
        }
    }
    const ko = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
        createHTML: (e)=>e
    });
    function Eo(e) {
        return ko?.createHTML(e) ?? e;
    }
    function Zn(e) {
        var t = lo("template");
        return t.innerHTML = Eo(e.replaceAll("<!>", "<!---->")), t.content;
    }
    function ur(e, t) {
        var r = Y;
        r.nodes === null && (r.nodes = {
            start: e,
            end: t,
            a: null,
            t: null
        });
    }
    function O(e, t) {
        var r = (t & pi) !== 0, n = (t & hi) !== 0, i, o = !e.startsWith("<!>");
        return ()=>{
            i === void 0 && (i = Zn(o ? e : "<!>" + e), r || (i = jt(i)));
            var a = n || Dn ? document.importNode(i, !0) : i.cloneNode(!0);
            if (r) {
                var s = jt(a), l = a.lastChild;
                ur(s, l);
            } else ur(a, a);
            return a;
        };
    }
    function So(e, t, r = "svg") {
        var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
        return ()=>{
            if (!o) {
                var a = Zn(i), s = jt(a);
                o = jt(s);
            }
            var l = o.cloneNode(!0);
            return ur(l, l), l;
        };
    }
    function Qn(e, t) {
        return So(e, t, "svg");
    }
    function To() {
        var e = document.createDocumentFragment(), t = document.createComment(""), r = ft();
        return e.append(t, r), ur(t, r), e;
    }
    function A(e, t) {
        e !== null && e.before(t);
    }
    const Ao = [
        "touchstart",
        "touchmove"
    ];
    function Po(e) {
        return Ao.includes(e);
    }
    function m(e, t) {
        var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
        r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = `${r}`);
    }
    function Io(e, t) {
        return Oo(e, t);
    }
    const nr = new Map;
    function Oo(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: a = !0, transformError: s }) {
        ao();
        var l = void 0, u = po(()=>{
            var d = r ?? t.appendChild(ft());
            $i(d, {
                pending: ()=>{}
            }, (g)=>{
                _t({});
                var _ = Ge;
                o && (_.c = o), i && (n.$$events = i), l = e(g, n) || {}, dt();
            }, s);
            var f = new Set, h = (g)=>{
                for(var _ = 0; _ < g.length; _++){
                    var w = g[_];
                    if (!f.has(w)) {
                        f.add(w);
                        var C = Po(w);
                        for (const E of [
                            t,
                            document
                        ]){
                            var P = nr.get(E);
                            P === void 0 && (P = new Map, nr.set(E, P));
                            var L = P.get(w);
                            L === void 0 ? (E.addEventListener(w, tn, {
                                passive: C
                            }), P.set(w, 1)) : P.set(w, L + 1);
                        }
                    }
                }
            };
            return h(fr(Jn)), Or.add(h), ()=>{
                for (var g of f)for (const C of [
                    t,
                    document
                ]){
                    var _ = nr.get(C), w = _.get(g);
                    --w == 0 ? (C.removeEventListener(g, tn), _.delete(g), _.size === 0 && nr.delete(C)) : _.set(g, w);
                }
                Or.delete(h), d !== r && d.parentNode?.removeChild(d);
            };
        });
        return Ro.set(l, u), l;
    }
    let Ro = new WeakMap;
    class Do {
        anchor;
        #t = new Map;
        #s = new Map;
        #e = new Map;
        #o = new Set;
        #r = !0;
        constructor(t, r = !0){
            this.anchor = t, this.#r = r;
        }
        #a = ()=>{
            var t = X;
            if (this.#t.has(t)) {
                var r = this.#t.get(t), n = this.#s.get(r);
                if (n) Gr(n), this.#o.delete(r);
                else {
                    var i = this.#e.get(r);
                    i && (this.#s.set(r, i.effect), this.#e.delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
                }
                for (const [o, a] of this.#t){
                    if (this.#t.delete(o), o === t) break;
                    const s = this.#e.get(a);
                    s && (Re(s.effect), this.#e.delete(a));
                }
                for (const [o, a] of this.#s){
                    if (o === r || this.#o.has(o)) continue;
                    const s = ()=>{
                        if (Array.from(this.#t.values()).includes(o)) {
                            var u = document.createDocumentFragment();
                            qn(a, u), u.append(ft()), this.#e.set(o, {
                                effect: a,
                                fragment: u
                            });
                        } else Re(a);
                        this.#o.delete(o), this.#s.delete(o);
                    };
                    this.#r || !n ? (this.#o.add(o), kt(a, s, !1)) : s();
                }
            }
        };
        #n = (t)=>{
            this.#t.delete(t);
            const r = Array.from(this.#t.values());
            for (const [n, i] of this.#e)r.includes(n) || (Re(i.effect), this.#e.delete(n));
        };
        ensure(t, r) {
            var n = X, i = Nn();
            if (r && !this.#s.has(t) && !this.#e.has(t)) if (i) {
                var o = document.createDocumentFragment(), a = ft();
                o.append(a), this.#e.set(t, {
                    effect: Ke(()=>r(a)),
                    fragment: o
                });
            } else this.#s.set(t, Ke(()=>r(this.anchor)));
            if (this.#t.set(n, t), i) {
                for (const [s, l] of this.#s)s === t ? n.unskip_effect(l) : n.skip_effect(l);
                for (const [s, l] of this.#e)s === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
                n.oncommit(this.#a), n.ondiscard(this.#n);
            } else this.#a();
        }
    }
    function $(e, t, r = !1) {
        var n = new Do(e), i = r ? Mt : 0;
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
                        Rr(fr(o.done)), h.delete(o), h.size === 0 && (e.outrogroups = null);
                    }
                } else a -= 1;
            }, !1);
        }
        if (a === 0) {
            var l = n.length === 0 && r !== null;
            if (l) {
                var u = r, d = u.parentNode;
                so(d), d.append(u), e.items.clear();
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
    function pr(e, t, r, n, i, o = null) {
        var a = e, s = new Map;
        {
            var l = e;
            a = l.appendChild(ft());
        }
        var u = null, d = Qi(()=>{
            var C = r();
            return Mr(C) ? C : C == null ? [] : fr(C);
        }), f, h = !0;
        function g() {
            w.fallback = u, No(w, f, a, t, n), u !== null && (f.length === 0 ? (u.f & ot) === 0 ? Gr(u) : (u.f ^= ot, Gt(u, null, a)) : kt(u, ()=>{
                u = null;
            }));
        }
        var _ = Fr(()=>{
            f = c(d);
            for(var C = f.length, P = new Set, L = X, E = Nn(), M = 0; M < C; M += 1){
                var N = f[M], K = n(N, M), F = h ? null : s.get(K);
                F ? (F.v && Ct(F.v, N), F.i && Ct(F.i, M), E && L.unskip_effect(F.e)) : (F = Co(s, h ? a : rn ??= ft(), N, K, M, i, t, r), h || (F.e.f |= ot), s.set(K, F)), P.add(K);
            }
            if (C === 0 && o && !u && (h ? u = Ke(()=>o(a)) : (u = Ke(()=>o(rn ??= ft())), u.f |= ot)), C > P.size && Pi(), !h) if (E) {
                for (const [H, Se] of s)P.has(H) || L.skip_effect(Se.e);
                L.oncommit(g), L.ondiscard(()=>{});
            } else g();
            c(d);
        }), w = {
            effect: _,
            items: s,
            outrogroups: null,
            fallback: u
        };
        h = !1;
    }
    function Ft(e) {
        for(; e !== null && (e.f & Ye) === 0;)e = e.next;
        return e;
    }
    function No(e, t, r, n, i) {
        var o = t.length, a = e.items, s = Ft(e.effect.first), l, u = null, d = [], f = [], h, g, _, w;
        for(w = 0; w < o; w += 1){
            if (h = t[w], g = i(h, w), _ = a.get(g).e, e.outrogroups !== null) for (const H of e.outrogroups)H.pending.delete(_), H.done.delete(_);
            if ((_.f & ot) !== 0) if (_.f ^= ot, _ === s) Gt(_, null, r);
            else {
                var C = u ? u.next : s;
                _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), it(e, u, _), it(e, _, C), Gt(_, C, r), u = _, d = [], f = [], s = Ft(u.next);
                continue;
            }
            if ((_.f & Ne) !== 0 && Gr(_), _ !== s) {
                if (l !== void 0 && l.has(_)) {
                    if (d.length < f.length) {
                        var P = f[0], L;
                        u = P.prev;
                        var E = d[0], M = d[d.length - 1];
                        for(L = 0; L < d.length; L += 1)Gt(d[L], P, r);
                        for(L = 0; L < f.length; L += 1)l.delete(f[L]);
                        it(e, E.prev, M.next), it(e, u, E), it(e, M, P), s = P, u = M, w -= 1, d = [], f = [];
                    } else l.delete(_), Gt(_, s, r), it(e, _.prev, _.next), it(e, _, u === null ? e.effect.first : u.next), it(e, u, _), u = _;
                    continue;
                }
                for(d = [], f = []; s !== null && s !== _;)(l ??= new Set).add(s), f.push(s), s = Ft(s.next);
                if (s === null) continue;
            }
            (_.f & ot) === 0 && d.push(_), u = _, s = Ft(_.next);
        }
        if (e.outrogroups !== null) {
            for (const H of e.outrogroups)H.pending.size === 0 && (Rr(fr(H.done)), e.outrogroups?.delete(H));
            e.outrogroups.size === 0 && (e.outrogroups = null);
        }
        if (s !== null || l !== void 0) {
            var N = [];
            if (l !== void 0) for (_ of l)(_.f & Ne) === 0 && N.push(_);
            for(; s !== null;)(s.f & Ne) === 0 && s !== e.fallback && N.push(s), s = Ft(s.next);
            var K = N.length;
            if (K > 0) {
                var F = o === 0 ? r : null;
                Mo(e, N, F);
            }
        }
    }
    function Co(e, t, r, n, i, o, a, s) {
        var l = (a & _i) !== 0 ? (a & vi) === 0 ? no(r, !1, !1) : At(r) : null, u = (a & di) !== 0 ? At(i) : null;
        return {
            v: l,
            i: u,
            e: Ke(()=>(o(t, l ?? r, u ?? i, s), ()=>{
                    e.delete(n);
                }))
        };
    }
    function Gt(e, t, r) {
        if (e.nodes) for(var n = e.nodes.start, i = e.nodes.end, o = t && (t.f & ot) === 0 ? t.nodes.start : r; n !== null;){
            var a = Qt(n);
            if (o.before(n), n === i) return;
            n = a;
        }
    }
    function it(e, t, r) {
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
    function ei(e, t, r = !1) {
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
            ei(e, e.__value);
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
    const Ko = Symbol("is custom element"), Fo = Symbol("is html"), Vo = Ti ? "progress" : "PROGRESS";
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
            n = bi(i);
            for(var a in n)n[a].set && r.push(a);
            i = _n(i);
        }
        return r;
    }
    function Me(e, t, r = t) {
        var n = new WeakSet;
        uo(e, "input", async (i)=>{
            var o = i ? e.defaultValue : e.value;
            if (o = mr(e) ? wr(o) : o, r(o), X !== null && n.add(X), await xo(), o !== (o = t())) {
                var a = e.selectionStart, s = e.selectionEnd, l = e.value.length;
                if (e.value = o ?? "", s !== null) {
                    var u = e.value.length;
                    a === s && s === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = a, e.selectionEnd = Math.min(s, u));
                }
            }
        }), Xn(t) == null && e.value && (r(mr(e) ? wr(e.value) : e.value), X !== null && n.add(X)), zn(()=>{
            var i = t();
            if (e === document.activeElement) {
                var o = Tr ?? X;
                if (n.has(o)) return;
            }
            mr(e) && i === wr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
        });
    }
    function mr(e) {
        var t = e.type;
        return t === "number" || t === "range";
    }
    function wr(e) {
        return e === "" ? null : +e;
    }
    const Wo = "modulepreload", Bo = function(e, t) {
        return new URL(e, t).href;
    }, sn = {}, ve = function(t, r, n) {
        let i = Promise.resolve();
        if (r && r.length > 0) {
            let u = function(d) {
                return Promise.all(d.map((f)=>Promise.resolve(f).then((h)=>({
                            status: "fulfilled",
                            value: h
                        }), (h)=>({
                            status: "rejected",
                            reason: h
                        }))));
            };
            const a = document.getElementsByTagName("link"), s = document.querySelector("meta[property=csp-nonce]"), l = s?.nonce || s?.getAttribute("nonce");
            i = u(r.map((d)=>{
                if (d = Bo(d, n), d in sn) return;
                sn[d] = !0;
                const f = d.endsWith(".css"), h = f ? '[rel="stylesheet"]' : "";
                if (n) for(let _ = a.length - 1; _ >= 0; _--){
                    const w = a[_];
                    if (w.href === d && (!f || w.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${d}"]${h}`)) return;
                const g = document.createElement("link");
                if (g.rel = f ? "stylesheet" : Wo, f || (g.as = "script"), g.crossOrigin = "", g.href = d, l && g.setAttribute("nonce", l), document.head.appendChild(g), f) return new Promise((_, w)=>{
                    g.addEventListener("load", _), g.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${d}`)));
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
    }, Uo = "Browser-based PGP encryption powered by WebAssembly", $o = "All cryptography runs locally in your browser via WebAssembly. No data is sent to any server.", Yo = "Loading cryptographic engine...", Ho = "Failed to load WASM module: {error}", Xo = "Encrypt", Jo = "Decrypt", Zo = "Sign", Qo = "Verify", ea = "Keys", ta = "Encrypt Message", ra = "Type your message here...", na = "Recipients", ia = "No keys available. Add keys in the Keys tab.", oa = "Encrypt", aa = "Enter a message to encrypt.", sa = "Select at least one recipient key.", la = "(own)", ca = "Decrypt Message", ua = "Paste encrypted PGP message here...", fa = "Passphrase (if key is protected)", _a = "Decrypt", da = "Paste an encrypted PGP message.", va = "No private keys available. Generate or import a key in the Keys tab.", pa = "Decryption failed. You may not have the correct private key, or the passphrase is wrong.", ha = "Sign Message", ga = "Type your message here...", ya = "Passphrase (if key is protected)", ba = "Sign", ma = "Enter a message to sign.", wa = "No private keys available. Generate or import a key in the Keys tab.", xa = "Signing failed. Your key may require a passphrase.", ka = "Verify Signature", Ea = "Paste signed PGP message here...", Sa = "Verify", Ta = "Paste a signed PGP message.", Aa = "No keys in keyring. Import the signer's public key first.", Pa = "Valid Signature", Ia = "Signed by: {name}", Oa = "Verification Failed", Ra = "The signer's key may not be in your keyring.", Da = "Key Manager", La = "Generate", Ma = "Import", Na = "No keys yet. Generate or import one to get started.", Ca = "(own key)", ja = "(unnamed)", za = "Generate New Key Pair", Ka = "Name", Fa = "Email", Va = "Passphrase (optional)", Ga = "Name and email are required.", qa = "Cancel", Wa = "Generate", Ba = "Generating...", Ua = "Key pair generated!", $a = "Import Key", Ya = "Paste ASCII-armored PGP key...", Ha = "Paste a PGP public or private key.", Xa = "Cancel", Ja = "Import", Za = "Importing...", Qa = "Imported key for {name}.", es = "Export", ts = "Delete", rs = "Key deleted.", ns = "Public key copied to clipboard.", is = "Copy", os = "System", as = "Light", ss = "Dark", ls = "Skip tutorial", cs = "Step {current} of {total}", us = "Next", fs = "Back", _s = "Get Started", ds = "Welcome to KeychainPGP", vs = "This quick tutorial will walk you through PGP encryption. You'll create your key pair and decrypt your first secret message.", ps = "Create Your Key Pair", hs = "A PGP key pair has two parts: a public key you share with others so they can send you encrypted messages, and a private key you keep secret to decrypt them.", gs = "Generate My Key", ys = "Generating...", bs = "Key pair created and saved!", ms = "Decrypt Your First Message", ws = "We just encrypted a welcome message using your public key. Only your private key can unlock it. Give it a try!", xs = "Decrypt Message", ks = "Message decrypted!", Es = "To exchange encrypted messages with someone, import their public key in the Keys tab. They'll need your public key too.", Ss = "You're Ready!", Ts = "You've mastered the basics of PGP encryption. Use the tabs above to encrypt, decrypt, sign, and verify messages. Import contacts' public keys in the Keys tab to communicate securely.", As = `Hello World!

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
        verify_error_empty: Ta,
        verify_error_no_keys: Aa,
        verify_valid: Pa,
        verify_signed_by: Ia,
        verify_failed: Oa,
        verify_signer_not_found: Ra,
        keys_title: Da,
        keys_generate_btn: La,
        keys_import_btn: Ma,
        keys_empty: Na,
        keys_own_label: Ca,
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
        onboarding_done_desc: Ts,
        onboarding_secret_message: As,
        language_label: Ps
    }, Yt = [
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
    ], ti = "keychainpgp-locale", hr = Is, sr = new Map;
    sr.set("en", hr);
    let ri = hr, ni = "en";
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
        return ni;
    }
    function Ds() {
        const e = localStorage.getItem(ti);
        if (e && Yt.some((i)=>i.code === e)) return e;
        const t = navigator.language, r = Yt.find((i)=>i.code === t);
        if (r) return r.code;
        const n = Yt.find((i)=>t.startsWith(i.code.split("-")[0]));
        return n ? n.code : "en";
    }
    async function ii(e) {
        if (localStorage.setItem(ti, e), !sr.has(e)) {
            const r = Os[e];
            if (r) {
                const n = await r();
                sr.set(e, n.default);
            }
        }
        ri = sr.get(e) ?? hr, ni = e;
        const t = Yt.find((r)=>r.code === e);
        document.documentElement.setAttribute("dir", t?.dir ?? "ltr"), document.documentElement.setAttribute("lang", e);
    }
    function Ls(e, t) {
        let r = ri[e] ?? hr[e] ?? e;
        if (t) for (const [n, i] of Object.entries(t))r = r.replace(new RegExp(`\\{${n}\\}`, "g"), String(i));
        return r;
    }
    let gr = S(0);
    async function Ms() {
        const e = Ds();
        await ii(e), cr(gr);
    }
    async function Ns(e) {
        await ii(e), cr(gr);
    }
    function Cs() {
        return c(gr), Rs();
    }
    function y(e, t) {
        return c(gr), Ls(e, t);
    }
    const js = "5";
    typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set).add(js);
    function zs(e, t, r) {
        let n, i;
        try {
            const g = k.__wbindgen_add_to_stack_pointer(-16), _ = ke(e, k.__wbindgen_export, k.__wbindgen_export2), w = he, C = ke(t, k.__wbindgen_export, k.__wbindgen_export2), P = he;
            var o = xt(r) ? 0 : ke(r, k.__wbindgen_export, k.__wbindgen_export2), a = he;
            k.decrypt(g, _, w, C, P, o, a);
            var s = ne().getInt32(g + 0, !0), l = ne().getInt32(g + 4, !0), u = ne().getInt32(g + 8, !0), d = ne().getInt32(g + 12, !0), f = s, h = l;
            if (d) throw f = 0, h = 0, Ie(u);
            return n = f, i = h, wt(f, h);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(n, i, 1);
        }
    }
    function Ks(e, t) {
        let r, n;
        try {
            const d = k.__wbindgen_add_to_stack_pointer(-16), f = ke(e, k.__wbindgen_export, k.__wbindgen_export2), h = he, g = ke(t, k.__wbindgen_export, k.__wbindgen_export2), _ = he;
            k.encrypt(d, f, h, g, _);
            var i = ne().getInt32(d + 0, !0), o = ne().getInt32(d + 4, !0), a = ne().getInt32(d + 8, !0), s = ne().getInt32(d + 12, !0), l = i, u = o;
            if (s) throw l = 0, u = 0, Ie(a);
            return r = l, n = u, wt(l, u);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(r, n, 1);
        }
    }
    function Fs(e, t, r) {
        try {
            const l = k.__wbindgen_add_to_stack_pointer(-16), u = ke(e, k.__wbindgen_export, k.__wbindgen_export2), d = he, f = ke(t, k.__wbindgen_export, k.__wbindgen_export2), h = he;
            var n = xt(r) ? 0 : ke(r, k.__wbindgen_export, k.__wbindgen_export2), i = he;
            k.generateKeyPair(l, u, d, f, h, n, i);
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
            const g = k.__wbindgen_add_to_stack_pointer(-16), _ = ke(e, k.__wbindgen_export, k.__wbindgen_export2), w = he, C = ke(t, k.__wbindgen_export, k.__wbindgen_export2), P = he;
            var o = xt(r) ? 0 : ke(r, k.__wbindgen_export, k.__wbindgen_export2), a = he;
            k.sign(g, _, w, C, P, o, a);
            var s = ne().getInt32(g + 0, !0), l = ne().getInt32(g + 4, !0), u = ne().getInt32(g + 8, !0), d = ne().getInt32(g + 12, !0), f = s, h = l;
            if (d) throw f = 0, h = 0, Ie(u);
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
                __wbg_Error_4577686b3a6d9b3a: function(t, r) {
                    const n = Error(wt(t, r));
                    return ie(n);
                },
                __wbg_String_8564e559799eccda: function(t, r) {
                    const n = String(ee(r)), i = ke(n, k.__wbindgen_export, k.__wbindgen_export2), o = he;
                    ne().setInt32(t + 4, o, !0), ne().setInt32(t + 0, i, !0);
                },
                __wbg___wbindgen_is_function_d633e708baf0d146: function(t) {
                    return typeof ee(t) == "function";
                },
                __wbg___wbindgen_is_object_4b3de556756ee8a8: function(t) {
                    const r = ee(t);
                    return typeof r == "object" && r !== null;
                },
                __wbg___wbindgen_is_string_7debe47dc1e045c2: function(t) {
                    return typeof ee(t) == "string";
                },
                __wbg___wbindgen_is_undefined_c18285b9fc34cb7d: function(t) {
                    return ee(t) === void 0;
                },
                __wbg___wbindgen_throw_39bc967c0e5a9b58: function(t, r) {
                    throw new Error(wt(t, r));
                },
                __wbg_call_08ad0d89caa7cb79: function() {
                    return ir(function(t, r, n) {
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
                __wbg_from_d7e888a2e9063b32: function(t) {
                    const r = Array.from(ee(t));
                    return ie(r);
                },
                __wbg_getRandomValues_c44a50d8cfdaebeb: function() {
                    return ir(function(t, r) {
                        ee(t).getRandomValues(ee(r));
                    }, arguments);
                },
                __wbg_getTime_9429d05129287418: function(t) {
                    return ee(t).getTime();
                },
                __wbg_length_5855c1f289dfffc1: function(t) {
                    return ee(t).length;
                },
                __wbg_msCrypto_bd5a034af96bcba6: function(t) {
                    const r = ee(t).msCrypto;
                    return ie(r);
                },
                __wbg_new_09959f7b4c92c246: function(t) {
                    const r = new Uint8Array(ee(t));
                    return ie(r);
                },
                __wbg_new_0_a719938e6f92ddf4: function() {
                    return ie(new Date);
                },
                __wbg_new_227d7c05414eb861: function() {
                    const t = new Error;
                    return ie(t);
                },
                __wbg_new_cbee8c0d5c479eac: function() {
                    const t = new Array;
                    return ie(t);
                },
                __wbg_new_ed69e637b553a997: function() {
                    const t = new Object;
                    return ie(t);
                },
                __wbg_new_with_length_c8449d782396d344: function(t) {
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
                __wbg_prototypesetcall_f034d444741426c3: function(t, r, n) {
                    Uint8Array.prototype.set.call(ln(t, r), ee(n));
                },
                __wbg_randomFillSync_6c25eac9869eb53c: function() {
                    return ir(function(t, r) {
                        ee(t).randomFillSync(Ie(r));
                    }, arguments);
                },
                __wbg_require_b4edbdcf3e2a1ef0: function() {
                    return ir(function() {
                        const t = module.require;
                        return ie(t);
                    }, arguments);
                },
                __wbg_set_4c81cfb5dc3a333c: function(t, r, n) {
                    ee(t)[r >>> 0] = Ie(n);
                },
                __wbg_set_6be42768c690e380: function(t, r, n) {
                    ee(t)[Ie(r)] = Ie(n);
                },
                __wbg_stack_3b0d974bbf31e44f: function(t, r) {
                    const n = ee(r).stack, i = ke(n, k.__wbindgen_export, k.__wbindgen_export2), o = he;
                    ne().setInt32(t + 4, o, !0), ne().setInt32(t + 0, i, !0);
                },
                __wbg_static_accessor_GLOBAL_THIS_14325d8cca34bb77: function() {
                    const t = typeof globalThis > "u" ? null : globalThis;
                    return xt(t) ? 0 : ie(t);
                },
                __wbg_static_accessor_GLOBAL_f3a1e69f9c5a7e8e: function() {
                    const t = typeof global > "u" ? null : global;
                    return xt(t) ? 0 : ie(t);
                },
                __wbg_static_accessor_SELF_50cdb5b517789aca: function() {
                    const t = typeof self > "u" ? null : self;
                    return xt(t) ? 0 : ie(t);
                },
                __wbg_static_accessor_WINDOW_d6c4126e4c244380: function() {
                    const t = typeof window > "u" ? null : window;
                    return xt(t) ? 0 : ie(t);
                },
                __wbg_subarray_7ad5f01d4a9c1c4d: function(t, r, n) {
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
        Xt === tt.length && tt.push(tt.length + 1);
        const t = Xt;
        return Xt = tt[t], tt[t] = e, t;
    }
    function Us(e) {
        e < 1028 || (tt[e] = Xt, Xt = e);
    }
    function ln(e, t) {
        return e = e >>> 0, Ht().subarray(e / 1, e / 1 + t);
    }
    let ht = null;
    function ne() {
        return (ht === null || ht.buffer.detached === !0 || ht.buffer.detached === void 0 && ht.buffer !== k.memory.buffer) && (ht = new DataView(k.memory.buffer)), ht;
    }
    function wt(e, t) {
        return e = e >>> 0, Ys(e, t);
    }
    let qt = null;
    function Ht() {
        return (qt === null || qt.byteLength === 0) && (qt = new Uint8Array(k.memory.buffer)), qt;
    }
    function ee(e) {
        return tt[e];
    }
    function ir(e, t) {
        try {
            return e.apply(this, t);
        } catch (r) {
            k.__wbindgen_export3(ie(r));
        }
    }
    let tt = new Array(1024).fill(void 0);
    tt.push(void 0, null, !0, !1);
    let Xt = tt.length;
    function xt(e) {
        return e == null;
    }
    function ke(e, t, r) {
        if (r === void 0) {
            const s = Jt.encode(e), l = t(s.length, 1) >>> 0;
            return Ht().subarray(l, l + s.length).set(s), he = s.length, l;
        }
        let n = e.length, i = t(n, 1) >>> 0;
        const o = Ht();
        let a = 0;
        for(; a < n; a++){
            const s = e.charCodeAt(a);
            if (s > 127) break;
            o[i + a] = s;
        }
        if (a !== n) {
            a !== 0 && (e = e.slice(a)), i = r(i, n, n = a + e.length * 3, 1) >>> 0;
            const s = Ht().subarray(i + a, i + n), l = Jt.encodeInto(e, s);
            a += l.written, i = r(i, n, a, 1) >>> 0;
        }
        return he = a, i;
    }
    function Ie(e) {
        const t = ee(e);
        return Us(e), t;
    }
    let lr = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    lr.decode();
    const $s = 2146435072;
    let xr = 0;
    function Ys(e, t) {
        return xr += t, xr >= $s && (lr = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), lr.decode(), xr = t), lr.decode(Ht().subarray(e, e + t));
    }
    const Jt = new TextEncoder;
    "encodeInto" in Jt || (Jt.encodeInto = function(e, t) {
        const r = Jt.encode(e);
        return t.set(r), {
            read: e.length,
            written: r.length
        };
    });
    let he = 0, k;
    function Hs(e, t) {
        return k = e.exports, ht = null, qt = null, k;
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
        e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("keychainpgp_wasm_bg-DF543aH-.wasm", import.meta.url).href, import.meta.url));
        const t = Bs();
        (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
        const { instance: r, module: n } = await Xs(await e, t);
        return Hs(r);
    }
    let cn = !1;
    async function Zs() {
        cn || (await Js(), Vs(), cn = !0);
    }
    function oi(e, t, r) {
        return Fs(e, t, r ?? void 0);
    }
    function ai(e, t) {
        return Ks(e, JSON.stringify(t));
    }
    function si(e, t, r) {
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
    const li = "keychainpgp-theme";
    function tl() {
        return localStorage.getItem(li) ?? "dark";
    }
    function rl(e) {
        localStorage.setItem(li, e), ci(e);
    }
    function ci(e) {
        document.documentElement.setAttribute("data-theme", e);
        const t = document.querySelector('meta[name="theme-color"]');
        t && t.setAttribute("content", e === "dark" ? "#0f172a" : "#ffffff");
    }
    const ui = "keychainpgp-";
    function nl(e) {
        return localStorage.getItem(ui + e);
    }
    function il(e, t) {
        localStorage.setItem(ui + e, t);
    }
    function ol() {
        return nl("onboarded") === "true";
    }
    function un() {
        il("onboarded", "true");
    }
    const al = "keychainpgp", sl = 1, Ze = "keys";
    let or = null;
    function yr() {
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
    async function fi() {
        return or || (or = await crypto.subtle.generateKey({
            name: "AES-GCM",
            length: 256
        }, !1, [
            "encrypt",
            "decrypt"
        ]), or);
    }
    async function ll(e) {
        const t = await fi(), r = crypto.getRandomValues(new Uint8Array(12)), n = await crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: r
        }, t, e);
        return {
            ciphertext: btoa(String.fromCharCode(...new Uint8Array(n))),
            iv: btoa(String.fromCharCode(...r))
        };
    }
    async function cl(e, t) {
        const r = await fi(), n = Uint8Array.from(atob(t), (a)=>a.charCodeAt(0)), i = Uint8Array.from(atob(e), (a)=>a.charCodeAt(0)), o = await crypto.subtle.decrypt({
            name: "AES-GCM",
            iv: n
        }, r, i);
        return new Uint8Array(o);
    }
    async function tr() {
        const e = await yr();
        return new Promise((t, r)=>{
            const o = e.transaction(Ze, "readonly").objectStore(Ze).getAll();
            o.onsuccess = ()=>t(o.result), o.onerror = ()=>r(o.error);
        });
    }
    async function ul(e) {
        const t = await yr();
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
        }, l = await yr();
        return new Promise((u, d)=>{
            const f = l.transaction(Ze, "readwrite");
            f.objectStore(Ze).put(s), f.oncomplete = ()=>u(), f.onerror = ()=>d(f.error);
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
        const t = await yr();
        return new Promise((r, n)=>{
            const i = t.transaction(Ze, "readwrite");
            i.objectStore(Ze).delete(e), i.oncomplete = ()=>r(), i.onerror = ()=>n(i.error);
        });
    }
    var _l = O("<span></span>"), dl = O('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p>', 1), vl = O('<p class="success svelte-13krnjv"> </p>'), pl = O('<p class="error svelte-13krnjv"> </p>'), hl = O('<div class="wizard-form svelte-13krnjv"><input class="input"/> <input class="input" type="email"/> <input class="input" type="password"/> <!> <button class="btn btn-primary"> </button></div>'), gl = O('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p> <!>', 1), yl = O('<p class="success svelte-13krnjv" style="margin-top: 0.75rem;"> </p> <div class="decrypted-block svelte-13krnjv"> </div>', 1), bl = O('<p class="error svelte-13krnjv" style="margin-top: 0.5rem;"> </p>'), ml = O('<!> <button class="btn btn-primary" style="margin-top: 0.75rem;"> </button>', 1), wl = O('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p> <div class="pgp-block svelte-13krnjv"> </div> <!> <p class="wizard-tip svelte-13krnjv"> </p>', 1), xl = O('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p>', 1), kl = O('<button class="btn"> </button>'), El = O("<div></div>"), Sl = O('<button class="btn btn-primary"> </button>'), Tl = O('<button class="btn btn-primary"> </button>'), Al = O('<div class="card wizard svelte-13krnjv"><div class="wizard-header svelte-13krnjv"><div class="wizard-dots svelte-13krnjv"></div> <button class="wizard-skip svelte-13krnjv"> </button></div> <div class="wizard-content svelte-13krnjv"><!></div> <div class="wizard-footer svelte-13krnjv"><!> <!></div></div>');
    function Pl(e, t) {
        _t(t, !0);
        const r = 4;
        let n = S(0), i = S(""), o = S(""), a = S(""), s = S(""), l = S(!1), u = S(!1), d = S(""), f = S(""), h = S(""), g = S(""), _ = S(!1), w = S("");
        function C() {
            un(), t.onDismiss();
        }
        function P() {
            un(), t.onDismiss();
        }
        function L() {
            c(n) > 0 && cr(n, -1);
        }
        function E() {
            c(n) === 1 && !c(u) || c(n) < r - 1 && cr(n);
        }
        async function M() {
            if (p(s, ""), !c(i).trim() || !c(o).trim()) {
                p(s, y("keygen_error_required"), !0);
                return;
            }
            p(l, !0);
            try {
                const x = oi(c(i), c(o), c(a) || void 0), I = Dr(x.public_key);
                await Lr(x.fingerprint, I.user_ids[0]?.name ?? null, I.user_ids[0]?.email ?? null, x.public_key, x.secret_key), p(d, x.public_key, !0), p(f, x.fingerprint, !0), p(u, !0);
                const G = y("onboarding_secret_message");
                p(h, ai(G, [
                    x.public_key
                ]), !0);
            } catch (x) {
                p(s, String(x), !0);
            } finally{
                p(l, !1);
            }
        }
        async function N() {
            p(w, ""), p(_, !0);
            let x = null;
            try {
                if (x = await Br(c(f)), !x) {
                    p(w, "Could not retrieve secret key.");
                    return;
                }
                const I = new TextDecoder().decode(x);
                p(g, si(c(h), I, c(a) || void 0), !0);
            } catch (I) {
                p(w, String(I), !0);
            } finally{
                x?.fill(0), p(_, !1);
            }
        }
        var K = Al(), F = v(K), H = v(F);
        pr(H, 21, ()=>Array(r), Lo, (x, I, G)=>{
            var Z = _l();
            let oe;
            D(()=>oe = gt(Z, 1, "wizard-dot svelte-13krnjv", null, oe, {
                    active: G === c(n),
                    completed: G < c(n)
                })), A(x, Z);
        });
        var Se = b(H, 2), De = v(Se), V = b(F, 2), T = v(V);
        {
            var j = (x)=>{
                var I = dl(), G = et(I), Z = v(G), oe = b(G, 2), de = v(oe);
                D((ge, le)=>{
                    m(Z, ge), m(de, le);
                }, [
                    ()=>y("onboarding_welcome_title"),
                    ()=>y("onboarding_welcome_desc")
                ]), A(x, I);
            }, z = (x)=>{
                var I = gl(), G = et(I), Z = v(G), oe = b(G, 2), de = v(oe), ge = b(oe, 2);
                {
                    var le = (re)=>{
                        var ce = vl(), Q = v(ce);
                        D((ue)=>m(Q, ue), [
                            ()=>y("onboarding_gen_done")
                        ]), A(re, ce);
                    }, je = (re)=>{
                        var ce = hl(), Q = v(ce), ue = b(Q, 2), fe = b(ue, 2), q = b(fe, 2);
                        {
                            var Ee = (ae)=>{
                                var xe = pl(), Rt = v(xe);
                                D(()=>m(Rt, c(s))), A(ae, xe);
                            };
                            $(q, (ae)=>{
                                c(s) && ae(Ee);
                            });
                        }
                        var ye = b(q, 2), Te = v(ye);
                        D((ae, xe, Rt, br)=>{
                            Oe(Q, "placeholder", ae), Oe(ue, "placeholder", xe), Oe(fe, "placeholder", Rt), ye.disabled = c(l), m(Te, br);
                        }, [
                            ()=>y("keygen_name"),
                            ()=>y("keygen_email"),
                            ()=>y("keygen_passphrase"),
                            ()=>c(l) ? y("onboarding_gen_generating") : y("onboarding_gen_btn")
                        ]), Me(Q, ()=>c(i), (ae)=>p(i, ae)), Me(ue, ()=>c(o), (ae)=>p(o, ae)), Me(fe, ()=>c(a), (ae)=>p(a, ae)), J("click", ye, M), A(re, ce);
                    };
                    $(ge, (re)=>{
                        c(u) ? re(le) : re(je, !1);
                    });
                }
                D((re, ce)=>{
                    m(Z, re), m(de, ce);
                }, [
                    ()=>y("onboarding_gen_title"),
                    ()=>y("onboarding_gen_desc")
                ]), A(x, I);
            }, te = (x)=>{
                var I = wl(), G = et(I), Z = v(G), oe = b(G, 2), de = v(oe), ge = b(oe, 2), le = v(ge), je = b(ge, 2);
                {
                    var re = (fe)=>{
                        var q = yl(), Ee = et(q), ye = v(Ee), Te = b(Ee, 2), ae = v(Te);
                        D((xe)=>{
                            m(ye, xe), m(ae, c(g));
                        }, [
                            ()=>y("onboarding_msg_decrypted")
                        ]), A(fe, q);
                    }, ce = (fe)=>{
                        var q = ml(), Ee = et(q);
                        {
                            var ye = (xe)=>{
                                var Rt = bl(), br = v(Rt);
                                D(()=>m(br, c(w))), A(xe, Rt);
                            };
                            $(Ee, (xe)=>{
                                c(w) && xe(ye);
                            });
                        }
                        var Te = b(Ee, 2), ae = v(Te);
                        D((xe)=>{
                            Te.disabled = c(_), m(ae, xe);
                        }, [
                            ()=>y("onboarding_msg_decrypt_btn")
                        ]), J("click", Te, N), A(fe, q);
                    };
                    $(je, (fe)=>{
                        c(g) ? fe(re) : fe(ce, !1);
                    });
                }
                var Q = b(je, 2), ue = v(Q);
                D((fe, q, Ee)=>{
                    m(Z, fe), m(de, q), m(le, c(h)), m(ue, Ee);
                }, [
                    ()=>y("onboarding_msg_title"),
                    ()=>y("onboarding_msg_desc"),
                    ()=>y("onboarding_msg_tip")
                ]), A(x, I);
            }, _e = (x)=>{
                var I = xl(), G = et(I), Z = v(G), oe = b(G, 2), de = v(oe);
                D((ge, le)=>{
                    m(Z, ge), m(de, le);
                }, [
                    ()=>y("onboarding_done_title"),
                    ()=>y("onboarding_done_desc")
                ]), A(x, I);
            };
            $(T, (x)=>{
                c(n) === 0 ? x(j) : c(n) === 1 ? x(z, 1) : c(n) === 2 ? x(te, 2) : c(n) === 3 && x(_e, 3);
            });
        }
        var Ce = b(V, 2), He = v(Ce);
        {
            var pt = (x)=>{
                var I = kl(), G = v(I);
                D((Z)=>m(G, Z), [
                    ()=>y("onboarding_prev")
                ]), J("click", I, L), A(x, I);
            }, Xe = (x)=>{
                var I = El();
                A(x, I);
            };
            $(He, (x)=>{
                c(n) > 0 ? x(pt) : x(Xe, !1);
            });
        }
        var R = b(He, 2);
        {
            var B = (x)=>{
                var I = Sl(), G = v(I);
                D((Z)=>{
                    I.disabled = c(n) === 1 && !c(u), m(G, Z);
                }, [
                    ()=>y("onboarding_next")
                ]), J("click", I, E), A(x, I);
            }, U = (x)=>{
                var I = Tl(), G = v(I);
                D((Z)=>m(G, Z), [
                    ()=>y("onboarding_finish")
                ]), J("click", I, P), A(x, I);
            };
            $(R, (x)=>{
                c(n) < r - 1 ? x(B) : x(U, !1);
            });
        }
        D((x)=>m(De, x), [
            ()=>y("onboarding_skip")
        ]), J("click", Se, C), A(e, K), dt();
    }
    Ot([
        "click"
    ]);
    var Il = O('<p style="font-size: 0.875rem; color: var(--color-text-secondary);"> </p>'), Ol = O('<span style="font-size: 0.75rem; color: var(--color-primary);"> </span>'), Rl = O('<label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border-radius: 0.375rem; border: 1px solid var(--color-border); cursor: pointer; font-size: 0.875rem;"><input type="checkbox"/> <span> </span> <!></label>'), Dl = O('<div style="display: flex; flex-direction: column; gap: 0.375rem; max-height: 200px; overflow-y: auto;"></div>'), Ll = O('<p class="error"> </p>'), Ml = O('<div style="position: relative;"><textarea class="textarea" readonly="" rows="8"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), Nl = O('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="5"></textarea> <div><p style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;"> </p> <!></div> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Cl(e, t) {
        _t(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S(rt([])), a = S(rt(new Set));
        async function s() {
            p(o, await tr(), !0);
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
                const V = c(o).filter((T)=>c(a).has(T.fingerprint)).map((T)=>T.publicKey);
                p(n, ai(c(r), V), !0);
            } catch (V) {
                p(i, String(V), !0);
            }
        }
        async function d() {
            await navigator.clipboard.writeText(c(n));
        }
        var f = Nl(), h = v(f), g = v(h), _ = b(h, 2), w = b(_, 2), C = v(w), P = v(C), L = b(C, 2);
        {
            var E = (V)=>{
                var T = Il(), j = v(T);
                D((z)=>m(j, z), [
                    ()=>y("encrypt_no_keys")
                ]), A(V, T);
            }, M = (V)=>{
                var T = Dl();
                pr(T, 21, ()=>c(o), (j)=>j.fingerprint, (j, z)=>{
                    var te = Rl();
                    let _e;
                    var Ce = v(te), He = b(Ce, 2), pt = v(He), Xe = b(He, 2);
                    {
                        var R = (B)=>{
                            var U = Ol(), x = v(U);
                            D((I)=>m(x, I), [
                                ()=>y("encrypt_own_label")
                            ]), A(B, U);
                        };
                        $(Xe, (B)=>{
                            c(z).isOwn && B(R);
                        });
                    }
                    D((B, U, x)=>{
                        _e = gt(te, 1, "svelte-recwdw", null, _e, B), Go(Ce, U), m(pt, x);
                    }, [
                        ()=>({
                                selected: c(a).has(c(z).fingerprint)
                            }),
                        ()=>c(a).has(c(z).fingerprint),
                        ()=>c(z).name ?? c(z).email ?? c(z).fingerprint.slice(-16)
                    ]), J("change", Ce, ()=>l(c(z).fingerprint)), A(j, te);
                }), A(V, T);
            };
            $(L, (V)=>{
                c(o).length === 0 ? V(E) : V(M, !1);
            });
        }
        var N = b(w, 2), K = v(N), F = b(N, 2);
        {
            var H = (V)=>{
                var T = Ll(), j = v(T);
                D(()=>m(j, c(i))), A(V, T);
            };
            $(F, (V)=>{
                c(i) && V(H);
            });
        }
        var Se = b(F, 2);
        {
            var De = (V)=>{
                var T = Ml(), j = v(T), z = b(j, 2), te = v(z);
                D((_e)=>{
                    qr(j, c(n)), m(te, _e);
                }, [
                    ()=>y("copy_btn")
                ]), J("click", z, d), A(V, T);
            };
            $(Se, (V)=>{
                c(n) && V(De);
            });
        }
        D((V, T, j, z, te)=>{
            m(g, V), Oe(_, "placeholder", T), m(P, j), N.disabled = z, m(K, te);
        }, [
            ()=>y("encrypt_title"),
            ()=>y("encrypt_placeholder"),
            ()=>y("encrypt_recipients"),
            ()=>!c(r).trim() || c(a).size === 0,
            ()=>y("encrypt_btn")
        ]), Me(_, ()=>c(r), (V)=>p(r, V)), J("click", N, u), A(e, f), dt();
    }
    Ot([
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
            const M = (await tr()).filter((N)=>N.isOwn);
            if (M.length === 0) {
                p(o, y("decrypt_error_no_key"), !0);
                return;
            }
            for (const N of M){
                const K = await Br(N.fingerprint);
                if (K) try {
                    const F = new TextDecoder().decode(K);
                    p(i, si(c(r), F, c(n) || void 0), !0);
                    return;
                } catch  {}
            }
            p(o, y("decrypt_error_failed"), !0);
        }
        async function s() {
            await navigator.clipboard.writeText(c(i));
        }
        var l = Kl(), u = v(l), d = v(u), f = b(u, 2), h = b(f, 2), g = b(h, 2), _ = v(g), w = b(g, 2);
        {
            var C = (E)=>{
                var M = jl(), N = v(M);
                D(()=>m(N, c(o))), A(E, M);
            };
            $(w, (E)=>{
                c(o) && E(C);
            });
        }
        var P = b(w, 2);
        {
            var L = (E)=>{
                var M = zl(), N = v(M), K = b(N, 2), F = v(K);
                D((H)=>{
                    qr(N, c(i)), m(F, H);
                }, [
                    ()=>y("copy_btn")
                ]), J("click", K, s), A(E, M);
            };
            $(P, (E)=>{
                c(i) && E(L);
            });
        }
        D((E, M, N, K, F)=>{
            m(d, E), Oe(f, "placeholder", M), Oe(h, "placeholder", N), g.disabled = K, m(_, F);
        }, [
            ()=>y("decrypt_title"),
            ()=>y("decrypt_placeholder"),
            ()=>y("decrypt_passphrase"),
            ()=>!c(r).trim(),
            ()=>y("decrypt_btn")
        ]), Me(f, ()=>c(r), (E)=>p(r, E)), Me(h, ()=>c(n), (E)=>p(n, E)), J("click", g, a), A(e, l), dt();
    }
    Ot([
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
            const M = (await tr()).filter((N)=>N.isOwn);
            if (M.length === 0) {
                p(o, y("sign_error_no_key"), !0);
                return;
            }
            for (const N of M){
                const K = await Br(N.fingerprint);
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
        var l = ql(), u = v(l), d = v(u), f = b(u, 2), h = b(f, 2), g = b(h, 2), _ = v(g), w = b(g, 2);
        {
            var C = (E)=>{
                var M = Vl(), N = v(M);
                D(()=>m(N, c(o))), A(E, M);
            };
            $(w, (E)=>{
                c(o) && E(C);
            });
        }
        var P = b(w, 2);
        {
            var L = (E)=>{
                var M = Gl(), N = v(M), K = b(N, 2), F = v(K);
                D((H)=>{
                    qr(N, c(i)), m(F, H);
                }, [
                    ()=>y("copy_btn")
                ]), J("click", K, s), A(E, M);
            };
            $(P, (E)=>{
                c(i) && E(L);
            });
        }
        D((E, M, N, K, F)=>{
            m(d, E), Oe(f, "placeholder", M), Oe(h, "placeholder", N), g.disabled = K, m(_, F);
        }, [
            ()=>y("sign_title"),
            ()=>y("sign_placeholder"),
            ()=>y("sign_passphrase"),
            ()=>!c(r).trim(),
            ()=>y("sign_btn")
        ]), Me(f, ()=>c(r), (E)=>p(r, E)), Me(h, ()=>c(n), (E)=>p(n, E)), J("click", g, a), A(e, l), dt();
    }
    Ot([
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
            const P = await tr();
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
        var s = Hl(), l = v(s), u = v(l), d = b(l, 2), f = b(d, 2), h = v(f), g = b(f, 2);
        {
            var _ = (P)=>{
                var L = Bl(), E = v(L);
                D(()=>m(E, c(o))), A(P, L);
            };
            $(g, (P)=>{
                c(o) && P(_);
            });
        }
        var w = b(g, 2);
        {
            var C = (P)=>{
                var L = To(), E = et(L);
                {
                    var M = (K)=>{
                        var F = $l(), H = v(F), Se = v(H), De = b(H, 2), V = v(De), T = b(De, 2);
                        {
                            var j = (z)=>{
                                var te = Ul(), _e = v(te);
                                D(()=>m(_e, c(n).fingerprint)), A(z, te);
                            };
                            $(T, (z)=>{
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
                        ]), A(K, F);
                    }, N = (K)=>{
                        var F = Yl(), H = v(F), Se = v(H), De = b(H, 2), V = v(De);
                        D((T, j)=>{
                            m(Se, T), m(V, j);
                        }, [
                            ()=>y("verify_failed"),
                            ()=>y("verify_signer_not_found")
                        ]), A(K, F);
                    };
                    $(E, (K)=>{
                        c(n).valid ? K(M) : K(N, !1);
                    });
                }
                A(P, L);
            };
            $(w, (P)=>{
                c(n) && P(C);
            });
        }
        D((P, L, E, M)=>{
            m(u, P), Oe(d, "placeholder", L), f.disabled = E, m(h, M);
        }, [
            ()=>y("verify_title"),
            ()=>y("verify_placeholder"),
            ()=>!c(r).trim(),
            ()=>y("verify_btn")
        ]), Me(d, ()=>c(r), (P)=>p(r, P)), J("click", f, a), A(e, s), dt();
    }
    Ot([
        "click"
    ]);
    var Jl = O('<p class="success"> </p>'), Zl = O('<p class="error"> </p>'), Ql = O('<div style="display: flex; flex-direction: column; gap: 0.75rem; padding: 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><p style="font-size: 0.875rem; font-weight: 500;"> </p> <input class="input"/> <input class="input"/> <input class="input" type="password"/> <!> <div style="display: flex; gap: 0.5rem; justify-content: flex-end;"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div>'), ec = O('<p class="error"> </p>'), tc = O('<div style="display: flex; flex-direction: column; gap: 0.75rem; padding: 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><p style="font-size: 0.875rem; font-weight: 500;"> </p> <textarea class="textarea" rows="6"></textarea> <!> <div style="display: flex; gap: 0.5rem; justify-content: flex-end;"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div>'), rc = O('<p style="font-size: 0.875rem; color: var(--color-text-secondary); text-align: center; padding: 2rem 0;"> </p>'), nc = O('<span style="font-size: 0.75rem; color: var(--color-primary); font-weight: normal;"> </span>'), ic = O('<div class="key-row svelte-1byd03e" style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><div style="min-width: 0; flex: 1;"><p style="font-size: 0.875rem; font-weight: 500;"> <!></p> <p style="font-size: 0.75rem; color: var(--color-text-secondary);"> </p> <p style="font-size: 0.625rem; color: var(--color-text-secondary); font-family: var(--color-font-mono);"> </p></div> <div class="key-actions svelte-1byd03e" style="display: flex; gap: 0.375rem; flex-shrink: 0;"><button class="btn" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button> <button class="btn btn-danger" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div></div>'), oc = O('<div style="display: flex; flex-direction: column; gap: 0.5rem;"></div>'), ac = O('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><div style="display: flex; align-items: center; justify-content: space-between;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <div style="display: flex; gap: 0.5rem;"><button class="btn btn-primary"> </button> <button class="btn"> </button></div></div> <!> <!> <!> <!></div>');
    function sc(e, t) {
        _t(t, !0);
        let r = S(rt([])), n = S(!1), i = S(!1), o = S(""), a = S(""), s = S(""), l = S(""), u = S(!1), d = S(""), f = S(""), h = S(!1), g = S("");
        async function _() {
            p(r, await tr(), !0);
        }
        _();
        async function w() {
            if (p(l, ""), !c(o).trim() || !c(a).trim()) {
                p(l, y("keygen_error_required"), !0);
                return;
            }
            p(u, !0);
            try {
                const R = oi(c(o), c(a), c(s) || void 0), B = Dr(R.public_key);
                await Lr(R.fingerprint, B.user_ids[0]?.name ?? null, B.user_ids[0]?.email ?? null, R.public_key, R.secret_key), await _(), p(n, !1), p(o, ""), p(a, ""), p(s, ""), p(g, y("keygen_success"), !0), setTimeout(()=>p(g, ""), 3e3);
            } catch (R) {
                p(l, String(R), !0);
            } finally{
                p(u, !1);
            }
        }
        async function C() {
            if (p(f, ""), !c(d).trim()) {
                p(f, y("import_error_empty"), !0);
                return;
            }
            p(h, !0);
            try {
                const R = Dr(c(d)), B = R.user_ids[0]?.name ?? null, U = R.user_ids[0]?.email ?? null, x = R.has_secret_key ? new TextEncoder().encode(c(d)) : null;
                await Lr(R.fingerprint, B, U, c(d), x), await _(), p(i, !1), p(d, ""), p(g, y("import_success", {
                    name: B ?? U ?? R.fingerprint.slice(-16)
                }), !0), setTimeout(()=>p(g, ""), 3e3);
            } catch (R) {
                p(f, String(R), !0);
            } finally{
                p(h, !1);
            }
        }
        async function P(R) {
            await fl(R), await _(), p(g, y("key_deleted"), !0), setTimeout(()=>p(g, ""), 3e3);
        }
        async function L(R) {
            await navigator.clipboard.writeText(R.publicKey), p(g, y("key_exported"), !0), setTimeout(()=>p(g, ""), 3e3);
        }
        var E = ac(), M = v(E), N = v(M), K = v(N), F = b(N, 2), H = v(F), Se = v(H), De = b(H, 2), V = v(De), T = b(M, 2);
        {
            var j = (R)=>{
                var B = Jl(), U = v(B);
                D(()=>m(U, c(g))), A(R, B);
            };
            $(T, (R)=>{
                c(g) && R(j);
            });
        }
        var z = b(T, 2);
        {
            var te = (R)=>{
                var B = Ql(), U = v(B), x = v(U), I = b(U, 2), G = b(I, 2), Z = b(G, 2), oe = b(Z, 2);
                {
                    var de = (Q)=>{
                        var ue = Zl(), fe = v(ue);
                        D(()=>m(fe, c(l))), A(Q, ue);
                    };
                    $(oe, (Q)=>{
                        c(l) && Q(de);
                    });
                }
                var ge = b(oe, 2), le = v(ge), je = v(le), re = b(le, 2), ce = v(re);
                D((Q, ue, fe, q, Ee, ye)=>{
                    m(x, Q), Oe(I, "placeholder", ue), Oe(G, "placeholder", fe), Oe(Z, "placeholder", q), m(je, Ee), re.disabled = c(u), m(ce, ye);
                }, [
                    ()=>y("keygen_title"),
                    ()=>y("keygen_name"),
                    ()=>y("keygen_email"),
                    ()=>y("keygen_passphrase"),
                    ()=>y("keygen_cancel"),
                    ()=>c(u) ? y("keygen_loading") : y("keygen_submit")
                ]), Me(I, ()=>c(o), (Q)=>p(o, Q)), Me(G, ()=>c(a), (Q)=>p(a, Q)), Me(Z, ()=>c(s), (Q)=>p(s, Q)), J("click", le, ()=>p(n, !1)), J("click", re, w), A(R, B);
            };
            $(z, (R)=>{
                c(n) && R(te);
            });
        }
        var _e = b(z, 2);
        {
            var Ce = (R)=>{
                var B = tc(), U = v(B), x = v(U), I = b(U, 2), G = b(I, 2);
                {
                    var Z = (re)=>{
                        var ce = ec(), Q = v(ce);
                        D(()=>m(Q, c(f))), A(re, ce);
                    };
                    $(G, (re)=>{
                        c(f) && re(Z);
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
                ]), Me(I, ()=>c(d), (re)=>p(d, re)), J("click", de, ()=>p(i, !1)), J("click", le, C), A(R, B);
            };
            $(_e, (R)=>{
                c(i) && R(Ce);
            });
        }
        var He = b(_e, 2);
        {
            var pt = (R)=>{
                var B = rc(), U = v(B);
                D((x)=>m(U, x), [
                    ()=>y("keys_empty")
                ]), A(R, B);
            }, Xe = (R)=>{
                var B = oc();
                pr(B, 21, ()=>c(r), (U)=>U.fingerprint, (U, x)=>{
                    var I = ic(), G = v(I), Z = v(G), oe = v(Z), de = b(oe);
                    {
                        var ge = (ye)=>{
                            var Te = nc(), ae = v(Te);
                            D((xe)=>m(ae, xe), [
                                ()=>y("keys_own_label")
                            ]), A(ye, Te);
                        };
                        $(de, (ye)=>{
                            c(x).isOwn && ye(ge);
                        });
                    }
                    var le = b(Z, 2), je = v(le), re = b(le, 2), ce = v(re), Q = b(G, 2), ue = v(Q), fe = v(ue), q = b(ue, 2), Ee = v(q);
                    D((ye, Te, ae, xe)=>{
                        m(oe, `${ye ?? ""} `), m(je, c(x).email ?? ""), m(ce, Te), m(fe, ae), m(Ee, xe);
                    }, [
                        ()=>c(x).name ?? y("keys_unnamed"),
                        ()=>c(x).fingerprint.slice(-16),
                        ()=>y("key_export_btn"),
                        ()=>y("key_delete_btn")
                    ]), J("click", ue, ()=>L(c(x))), J("click", q, ()=>P(c(x).fingerprint)), A(U, I);
                }), A(R, B);
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
        ]), J("click", H, ()=>{
            p(n, !c(n)), p(i, !1);
        }), J("click", De, ()=>{
            p(i, !c(i)), p(n, !1);
        }), A(e, E), dt();
    }
    Ot([
        "click"
    ]);
    var lc = O('<option class="svelte-1n46o8q"> </option>'), cc = Qn('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'), uc = Qn('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'), fc = O('<div class="card" style="text-align: center;"><p class="error"> </p></div>'), _c = O('<div class="card" style="text-align: center;"><p style="color: var(--color-text-secondary);"> </p></div>'), dc = O('<!> <div class="tabs"><button> </button> <button> </button> <button> </button> <button> </button> <button> </button></div> <!>', 1), vc = O('<header style="text-align: center; margin-bottom: 2rem; position: relative;"><div class="header-controls svelte-1n46o8q"><select class="locale-select svelte-1n46o8q"></select> <button class="theme-toggle svelte-1n46o8q"><!></button></div> <h1 style="font-size: 1.5rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;"><img src="./icon.png" alt="" style="width: 32px; height: 32px; border-radius: 6px;"/> KeychainPGP <span style="color: var(--color-text-secondary); font-weight: 400; font-size: 0.875rem;">Web</span></h1> <p style="color: var(--color-text-secondary); font-size: 0.875rem; margin-top: 0.25rem;"> </p></header> <!> <footer style="text-align: center; margin-top: 3rem; color: var(--color-text-secondary); font-size: 0.75rem;"><p> </p></footer>', 1);
    function pc(e, t) {
        _t(t, !0);
        let r = S(!1), n = S(""), i = S("encrypt"), o = S(rt(tl())), a = S(!ol());
        vo(()=>{
            ci(c(o));
        });
        function s() {
            p(o, c(o) === "dark" ? "light" : "dark", !0), rl(c(o));
        }
        function l(T) {
            const j = T.target;
            Ns(j.value);
        }
        async function u() {
            try {
                await Zs(), p(r, !0);
            } catch (T) {
                p(n, y("loading_error", {
                    error: String(T)
                }), !0);
            }
        }
        u();
        var d = vc(), f = et(d), h = v(f), g = v(h);
        pr(g, 21, ()=>Yt, (T)=>T.code, (T, j)=>{
            var z = lc(), te = v(z), _e = {};
            D(()=>{
                m(te, c(j).name), _e !== (_e = c(j).code) && (z.value = (z.__value = c(j).code) ?? "");
            }), A(T, z);
        });
        var _;
        zo(g);
        var w = b(g, 2), C = v(w);
        {
            var P = (T)=>{
                var j = cc();
                A(T, j);
            }, L = (T)=>{
                var j = uc();
                A(T, j);
            };
            $(C, (T)=>{
                c(o) === "light" ? T(P) : T(L, !1);
            });
        }
        var E = b(h, 4), M = v(E), N = b(f, 2);
        {
            var K = (T)=>{
                var j = fc(), z = v(j), te = v(z);
                D(()=>m(te, c(n))), A(T, j);
            }, F = (T)=>{
                var j = _c(), z = v(j), te = v(z);
                D((_e)=>m(te, _e), [
                    ()=>y("loading")
                ]), A(T, j);
            }, H = (T)=>{
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
                var _e = b(z, 2), Ce = v(_e);
                let He;
                var pt = v(Ce), Xe = b(Ce, 2);
                let R;
                var B = v(Xe), U = b(Xe, 2);
                let x;
                var I = v(U), G = b(U, 2);
                let Z;
                var oe = v(G), de = b(G, 2);
                let ge;
                var le = v(de), je = b(_e, 2);
                {
                    var re = (q)=>{
                        Cl(q, {});
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
                D((q, Ee, ye, Te, ae)=>{
                    He = gt(Ce, 1, "tab", null, He, {
                        active: c(i) === "encrypt"
                    }), m(pt, q), R = gt(Xe, 1, "tab", null, R, {
                        active: c(i) === "decrypt"
                    }), m(B, Ee), x = gt(U, 1, "tab", null, x, {
                        active: c(i) === "sign"
                    }), m(I, ye), Z = gt(G, 1, "tab", null, Z, {
                        active: c(i) === "verify"
                    }), m(oe, Te), ge = gt(de, 1, "tab", null, ge, {
                        active: c(i) === "keys"
                    }), m(le, ae);
                }, [
                    ()=>y("tab_encrypt"),
                    ()=>y("tab_decrypt"),
                    ()=>y("tab_sign"),
                    ()=>y("tab_verify"),
                    ()=>y("tab_keys")
                ]), J("click", Ce, ()=>p(i, "encrypt")), J("click", Xe, ()=>p(i, "decrypt")), J("click", U, ()=>p(i, "sign")), J("click", G, ()=>p(i, "verify")), J("click", de, ()=>p(i, "keys")), A(T, j);
            };
            $(N, (T)=>{
                c(n) ? T(K) : c(r) ? T(H, !1) : T(F, 1);
            });
        }
        var Se = b(N, 2), De = v(Se), V = v(De);
        D((T, j, z, te)=>{
            _ !== (_ = T) && (g.value = (g.__value = T) ?? "", ei(g, T)), Oe(w, "title", j), m(M, z), m(V, te);
        }, [
            Cs,
            ()=>c(o) === "light" ? y("theme_light") : y("theme_dark"),
            ()=>y("app_subtitle"),
            ()=>y("app_footer")
        ]), J("change", g, l), J("click", w, s), A(e, d), dt();
    }
    Ot([
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
