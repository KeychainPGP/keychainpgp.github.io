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
    const fi = 1, _i = 2, di = 16, vi = 1, pi = 2, be = Symbol(), fn = "http://www.w3.org/1999/xhtml", xr = !1;
    var Lr = Array.isArray, hi = Array.prototype.indexOf, Rt = Array.prototype.includes, ur = Array.from, gi = Object.defineProperty, Wt = Object.getOwnPropertyDescriptor, yi = Object.getOwnPropertyDescriptors, bi = Object.prototype, mi = Array.prototype, _n = Object.getPrototypeOf, Br = Object.isExtensible;
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
    const me = 2, fr = 4, _r = 8, vn = 1 << 24, nt = 16, Ze = 32, At = 64, kr = 128, Fe = 512, pe = 1024, we = 2048, Ue = 4096, Ce = 8192, st = 16384, Dt = 32768, Lt = 65536, Ur = 1 << 17, pn = 1 << 18, Kt = 1 << 19, ki = 1 << 20, ot = 1 << 25, St = 65536, Er = 1 << 21, Mr = 1 << 22, lt = 1 << 23, Bt = Symbol("$state"), Ei = Symbol(""), yt = new class extends Error {
        name = "StaleReactionError";
        message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
    }, Si = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml");
    function Ti() {
        throw new Error("https://svelte.dev/e/async_derived_orphan");
    }
    function Ai(e, t, r) {
        throw new Error("https://svelte.dev/e/each_key_duplicate");
    }
    function Pi() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
    }
    function Ii() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
    }
    function Oi() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
    }
    function Ri() {
        throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    }
    function Di() {
        throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
    }
    function Li() {
        console.warn("https://svelte.dev/e/select_multiple_invalid_value");
    }
    function Mi() {
        console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
    }
    function hn(e) {
        return e === this.v;
    }
    function Ci(e, t) {
        return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
    }
    function gn(e) {
        return !Ci(e, this.v);
    }
    let Ni = !1, $e = null;
    function Mt(e) {
        $e = e;
    }
    function _t(e, t = !1, r) {
        $e = {
            p: $e,
            i: !1,
            c: null,
            e: null,
            s: e,
            x: null,
            l: null
        };
    }
    function dt(e) {
        var t = $e, r = t.e;
        if (r !== null) {
            t.e = null;
            for (var n of r)lo(n);
        }
        return t.i = !0, $e = t.p, {};
    }
    function yn() {
        return !0;
    }
    let bt = [];
    function bn() {
        var e = bt;
        bt = [], xi(e);
    }
    function Ot(e) {
        if (bt.length === 0 && !Ut) {
            var t = bt;
            queueMicrotask(()=>{
                t === bt && bn();
            });
        }
        bt.push(e);
    }
    function ji() {
        for(; bt.length > 0;)bn();
    }
    function mn(e) {
        var t = Z;
        if (t === null) return B.f |= lt, e;
        if ((t.f & Dt) === 0 && (t.f & fr) === 0) throw e;
        at(e, t);
    }
    function at(e, t) {
        for(; t !== null;){
            if ((t.f & kr) !== 0) {
                if ((t.f & Dt) === 0) throw e;
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
    const zi = -7169;
    function se(e, t) {
        e.f = e.f & zi | t;
    }
    function Cr(e) {
        (e.f & Fe) !== 0 || e.deps === null ? se(e, pe) : se(e, Ue);
    }
    function wn(e) {
        if (e !== null) for (const t of e)(t.f & me) === 0 || (t.f & St) === 0 || (t.f ^= St, wn(t.deps));
    }
    function xn(e, t, r) {
        (e.f & we) !== 0 ? t.add(e) : (e.f & Ue) !== 0 && r.add(e), wn(e.deps), se(e, pe);
    }
    const rr = new Set;
    let H = null, Sr = null, qe = null, Ae = [], dr = null, Tr = !1, Ut = !1;
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
                for (var n of r.d)se(n, we), We(n);
                for (n of r.m)se(n, Ue), We(n);
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
                this.#t.clear(), this.#e === 0 && this.#d(), Sr = this, H = null, $r(n), $r(r), Sr = null, this.#r?.resolve();
            }
            qe = null;
        }
        #c(t, r, n) {
            t.f ^= pe;
            for(var i = t.first; i !== null;){
                var o = i.f, a = (o & (Ze | At)) !== 0, s = a && (o & pe) !== 0, l = s || (o & Ce) !== 0 || this.#i.has(i);
                if (!l && i.fn !== null) {
                    a ? i.f ^= pe : (o & fr) !== 0 ? r.push(i) : er(i) && ((o & nt) !== 0 && this.#n.add(i), zt(i));
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
            r !== be && !this.previous.has(t) && this.previous.set(t, r), (t.f & lt) === 0 && (this.current.set(t, t.v), qe?.set(t, t.v));
        }
        activate() {
            H = this, this.apply();
        }
        deactivate() {
            H === this && (H = null, qe = null);
        }
        flush() {
            if (this.activate(), Ae.length > 0) {
                if (kn(), H !== null && H !== this) return;
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
                var t = qe, r = !0;
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
                            H = i, i.apply();
                            for (const u of Ae)i.#c(u, [], []);
                            i.deactivate();
                        }
                        Ae = n;
                    }
                }
                H = null, qe = t;
            }
            rr.delete(this);
        }
        increment(t) {
            this.#e += 1, t && (this.#o += 1);
        }
        decrement(t) {
            this.#e -= 1, t && (this.#o -= 1), !this.#l && (this.#l = !0, Ot(()=>{
                this.#l = !1, this.#u() ? Ae.length > 0 && this.flush() : this.revive();
            }));
        }
        revive() {
            for (const t of this.#a)this.#n.delete(t), se(t, we), We(t);
            for (const t of this.#n)se(t, Ue), We(t);
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
            if (H === null) {
                const t = H = new ct;
                rr.add(H), Ut || Ot(()=>{
                    H === t && t.flush();
                });
            }
            return H;
        }
        apply() {}
    }
    function Ki(e) {
        var t = Ut;
        Ut = !0;
        try {
            for(var r;;){
                if (ji(), Ae.length === 0 && (H?.flush(), Ae.length === 0)) return dr = null, r;
                kn();
            }
        } finally{
            Ut = t;
        }
    }
    function kn() {
        Tr = !0;
        var e = null;
        try {
            for(var t = 0; Ae.length > 0;){
                var r = ct.ensure();
                if (t++ > 1e3) {
                    var n, i;
                    Fi();
                }
                r.process(Ae), ut.clear();
            }
        } finally{
            Ae = [], Tr = !1, dr = null;
        }
    }
    function Fi() {
        try {
            Pi();
        } catch (e) {
            at(e, dr);
        }
    }
    let Qe = null;
    function $r(e) {
        var t = e.length;
        if (t !== 0) {
            for(var r = 0; r < t;){
                var n = e[r++];
                if ((n.f & (st | Ce)) === 0 && er(n) && (Qe = new Set, zt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Kn(n), Qe?.size > 0)) {
                    ut.clear();
                    for (const i of Qe){
                        if ((i.f & (st | Ce)) !== 0) continue;
                        const o = [
                            i
                        ];
                        let a = i.parent;
                        for(; a !== null;)Qe.has(a) && (Qe.delete(a), o.push(a)), a = a.parent;
                        for(let s = o.length - 1; s >= 0; s--){
                            const l = o[s];
                            (l.f & (st | Ce)) === 0 && zt(l);
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
            (o & me) !== 0 ? En(i, t, r, n) : (o & (Mr | nt)) !== 0 && (o & we) === 0 && Sn(i, t, n) && (se(i, we), We(i));
        }
    }
    function Sn(e, t, r) {
        const n = r.get(e);
        if (n !== void 0) return n;
        if (e.deps !== null) for (const i of e.deps){
            if (Rt.call(t, i)) return !0;
            if ((i.f & me) !== 0 && Sn(i, t, r)) return r.set(i, !0), !0;
        }
        return r.set(e, !1), !1;
    }
    function We(e) {
        var t = dr = e, r = t.b;
        if (r?.is_pending && (e.f & (fr | _r | vn)) !== 0 && (e.f & Dt) === 0) {
            r.defer_effect(e);
            return;
        }
        for(; t.parent !== null;){
            t = t.parent;
            var n = t.f;
            if (Tr && t === Z && (n & nt) !== 0 && (n & pn) === 0 && (n & Dt) !== 0) return;
            if ((n & (At | Ze)) !== 0) {
                if ((n & pe) === 0) return;
                t.f ^= pe;
            }
        }
        Ae.push(t);
    }
    function Tn(e, t) {
        if (!((e.f & Ze) !== 0 && (e.f & pe) !== 0)) {
            (e.f & we) !== 0 ? t.d.push(e) : (e.f & Ue) !== 0 && t.m.push(e), se(e, pe);
            for(var r = e.first; r !== null;)Tn(r, t), r = r.next;
        }
    }
    function Vi(e) {
        let t = 0, r = Tt(0), n;
        return ()=>{
            zr() && (c(r), jn(()=>(t === 0 && (n = Hn(()=>e(()=>$t(r)))), t += 1, ()=>{
                    Ot(()=>{
                        t -= 1, t === 0 && (n?.(), n = void 0, $t(r));
                    });
                })));
        };
    }
    var Gi = Lt | Kt;
    function qi(e, t, r, n) {
        new Wi(e, t, r, n);
    }
    class Wi {
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
        #b = Vi(()=>(this.#_ = Tt(this.#u), ()=>{
                this.#_ = null;
            }));
        constructor(t, r, n, i){
            this.#t = t, this.#e = r, this.#o = (o)=>{
                var a = Z;
                a.b = this, a.f |= kr, n(o);
            }, this.parent = Z.b, this.transform_error = i ?? this.parent?.transform_error ?? ((o)=>o), this.#r = Kr(()=>{
                this.#g();
            }, Gi);
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
            t && (this.is_pending = !0, this.#n = Ke(()=>t(this.#t)), Ot(()=>{
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
                    Gn(this.#a, t);
                    const r = this.#e.pending;
                    this.#n = Ke(()=>r(this.#t));
                } else this.#p();
            } catch (r) {
                this.error(r);
            }
        }
        #p() {
            this.is_pending = !1;
            for (const t of this.#d)se(t, we), We(t);
            for (const t of this.#v)se(t, Ue), We(t);
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
            var r = Z, n = B, i = $e;
            Xe(this.#r), Ge(this.#r), Mt(this.#r.ctx);
            try {
                return t();
            } catch (o) {
                return mn(o), null;
            } finally{
                Xe(r), Ge(n), Mt(i);
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
            this.#y(t), this.#u += t, !(!this.#_ || this.#f) && (this.#f = !0, Ot(()=>{
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
                    Mi();
                    return;
                }
                i = !0, o && Di(), this.#i !== null && kt(this.#i, ()=>{
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
                            var u = Z;
                            u.b = this, u.f |= kr, n(this.#t, ()=>l, ()=>a);
                        });
                    } catch (u) {
                        return at(u, this.#r.parent), null;
                    }
                }));
            };
            Ot(()=>{
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
    function Bi(e, t, r, n) {
        const i = An;
        var o = e.filter((f)=>!f.settled);
        if (r.length === 0 && o.length === 0) {
            n(t.map(i));
            return;
        }
        var a = Z, s = Ui(), l = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((f)=>f.promise)) : null;
        function u(f) {
            s();
            try {
                n(f);
            } catch (h) {
                (a.f & st) === 0 && at(h, a);
            }
            Ar();
        }
        if (r.length === 0) {
            l.then(()=>u(t.map(i)));
            return;
        }
        function d() {
            s(), Promise.all(r.map((f)=>Yi(f))).then((f)=>u([
                    ...t.map(i),
                    ...f
                ])).catch((f)=>at(f, a));
        }
        l ? l.then(d) : d();
    }
    function Ui() {
        var e = Z, t = B, r = $e, n = H;
        return function(o = !0) {
            Xe(e), Ge(t), Mt(r), o && n?.activate();
        };
    }
    function Ar(e = !0) {
        Xe(null), Ge(null), Mt(null), e && H?.deactivate();
    }
    function $i() {
        var e = Z.b, t = H, r = e.is_rendered();
        return e.update_pending_count(1), t.increment(r), ()=>{
            e.update_pending_count(-1), t.decrement(r);
        };
    }
    function An(e) {
        var t = me | we, r = B !== null && (B.f & me) !== 0 ? B : null;
        return Z !== null && (Z.f |= Kt), {
            ctx: $e,
            deps: null,
            effects: null,
            equals: hn,
            f: t,
            fn: e,
            reactions: null,
            rv: 0,
            v: be,
            wv: 0,
            parent: r ?? Z,
            ac: null
        };
    }
    function Yi(e, t, r) {
        Z === null && Ti();
        var i = void 0, o = Tt(be), a = !B, s = new Map;
        return uo(()=>{
            var l = dn();
            i = l.promise;
            try {
                Promise.resolve(e()).then(l.resolve, l.reject).finally(Ar);
            } catch (h) {
                l.reject(h), Ar();
            }
            var u = H;
            if (a) {
                var d = $i();
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
        }), Nn(()=>{
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
    function Hi(e) {
        const t = An(e);
        return t.equals = gn, t;
    }
    function Xi(e) {
        var t = e.effects;
        if (t !== null) {
            e.effects = null;
            for(var r = 0; r < t.length; r += 1)Re(t[r]);
        }
    }
    function Ji(e) {
        for(var t = e.parent; t !== null;){
            if ((t.f & me) === 0) return (t.f & st) === 0 ? t : null;
            t = t.parent;
        }
        return null;
    }
    function Nr(e) {
        var t, r = Z;
        Xe(Ji(e));
        try {
            e.f &= ~St, Xi(e), t = Un(e);
        } finally{
            Xe(r);
        }
        return t;
    }
    function Pn(e) {
        var t = Nr(e);
        if (!e.equals(t) && (e.wv = Wn(), (!H?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
            se(e, pe);
            return;
        }
        jt || (qe !== null ? (zr() || H?.is_fork) && qe.set(e, t) : Cr(e));
    }
    function Zi(e) {
        if (e.effects !== null) for (const t of e.effects)(t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(yt), t.teardown = wi, t.ac = null, Zt(t, 0), Fr(t));
    }
    function In(e) {
        if (e.effects !== null) for (const t of e.effects)t.teardown && zt(t);
    }
    let Pr = new Set;
    const ut = new Map;
    let On = !1;
    function Tt(e, t) {
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
        const r = Tt(e);
        return vo(r), r;
    }
    function Qi(e, t = !1, r = !0) {
        const n = Tt(e);
        return t || (n.equals = gn), n;
    }
    function p(e, t, r = !1) {
        B !== null && (!Be || (B.f & Ur) !== 0) && yn() && (B.f & (me | nt | Mr | Ur)) !== 0 && (Ve === null || !Rt.call(Ve, e)) && Ri();
        let n = r ? rt(t) : t;
        return Ct(e, n);
    }
    function Ct(e, t) {
        if (!e.equals(t)) {
            var r = e.v;
            jt ? ut.set(e, t) : ut.set(e, r), e.v = t;
            var n = ct.ensure();
            if (n.capture(e, r), (e.f & me) !== 0) {
                const i = e;
                (e.f & we) !== 0 && Nr(i), Cr(i);
            }
            e.wv = Wn(), Rn(e, we), Z !== null && (Z.f & pe) !== 0 && (Z.f & (Ze | At)) === 0 && (ze === null ? po([
                e
            ]) : ze.push(e)), !n.is_fork && Pr.size > 0 && !On && eo();
        }
        return t;
    }
    function eo() {
        On = !1;
        for (const e of Pr)(e.f & pe) !== 0 && se(e, Ue), er(e) && zt(e);
        Pr.clear();
    }
    function lr(e, t = 1) {
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
                qe?.delete(l), (a & St) === 0 && (a & Fe && (o.f |= St), Rn(l, Ue));
            } else s && ((a & nt) !== 0 && Qe !== null && Qe.add(o), We(o));
        }
    }
    function rt(e) {
        if (typeof e != "object" || e === null || Bt in e) return e;
        const t = _n(e);
        if (t !== bi && t !== mi) return e;
        var r = new Map, n = Lr(e), i = S(0), o = Et, a = (s)=>{
            if (Et === o) return s();
            var l = B, u = Et;
            Ge(null), Zr(o);
            var d = s();
            return Ge(l), Zr(u), d;
        };
        return n && r.set("length", S(e.length)), new Proxy(e, {
            defineProperty (s, l, u) {
                (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ii();
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
                if (u !== void 0 || Z !== null && (!d || Wt(s, l)?.writable)) {
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
                var N = Reflect.getOwnPropertyDescriptor(s, l);
                if (N?.set && N.set.call(d, u), !h) {
                    if (n && typeof l == "string") {
                        var P = r.get("length"), D = Number(l);
                        Number.isInteger(D) && D >= P.v && p(P, D + 1);
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
                Oi();
            }
        });
    }
    function Yr(e) {
        try {
            if (e !== null && typeof e == "object" && Bt in e) return e[Bt];
        } catch  {}
        return e;
    }
    function to(e, t) {
        return Object.is(Yr(e), Yr(t));
    }
    var Hr, Dn, Ln, Mn;
    function ro() {
        if (Hr === void 0) {
            Hr = window, Dn = /Firefox/.test(navigator.userAgent);
            var e = Element.prototype, t = Node.prototype, r = Text.prototype;
            Ln = Wt(t, "firstChild").get, Mn = Wt(t, "nextSibling").get, Br(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Br(r) && (r.__t = void 0);
        }
    }
    function ft(e = "") {
        return document.createTextNode(e);
    }
    function Nt(e) {
        return Ln.call(e);
    }
    function Qt(e) {
        return Mn.call(e);
    }
    function v(e, t) {
        return Nt(e);
    }
    function et(e, t = !1) {
        {
            var r = Nt(e);
            return r instanceof Comment && r.data === "" ? Qt(r) : r;
        }
    }
    function b(e, t = 1, r = !1) {
        let n = e;
        for(; t--;)n = Qt(n);
        return n;
    }
    function no(e) {
        e.textContent = "";
    }
    function Cn() {
        return !1;
    }
    function io(e, t, r) {
        return document.createElementNS(fn, e, void 0);
    }
    let Xr = !1;
    function oo() {
        Xr || (Xr = !0, document.addEventListener("reset", (e)=>{
            Promise.resolve().then(()=>{
                if (!e.defaultPrevented) for (const t of e.target.elements)t.__on_r?.();
            });
        }, {
            capture: !0
        }));
    }
    function jr(e) {
        var t = B, r = Z;
        Ge(null), Xe(null);
        try {
            return e();
        } finally{
            Ge(t), Xe(r);
        }
    }
    function ao(e, t, r, n = r) {
        e.addEventListener(t, ()=>jr(r));
        const i = e.__on_r;
        i ? e.__on_r = ()=>{
            i(), n(!0);
        } : e.__on_r = ()=>n(!0), oo();
    }
    function so(e, t) {
        var r = t.last;
        r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
    }
    function vt(e, t, r) {
        var n = Z;
        n !== null && (n.f & Ce) !== 0 && (e |= Ce);
        var i = {
            ctx: $e,
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
        else t !== null && We(i);
        var o = i;
        if (r && o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && (o.f & Kt) === 0 && (o = o.first, (e & nt) !== 0 && (e & Lt) !== 0 && o !== null && (o.f |= Lt)), o !== null && (o.parent = n, n !== null && so(o, n), B !== null && (B.f & me) !== 0 && (e & At) === 0)) {
            var a = B;
            (a.effects ??= []).push(o);
        }
        return i;
    }
    function zr() {
        return B !== null && !Be;
    }
    function Nn(e) {
        const t = vt(_r, null, !1);
        return se(t, pe), t.teardown = e, t;
    }
    function lo(e) {
        return vt(fr | ki, e, !1);
    }
    function co(e) {
        ct.ensure();
        const t = vt(At | Kt, e, !0);
        return (r = {})=>new Promise((n)=>{
                r.outro ? kt(t, ()=>{
                    Re(t), n(void 0);
                }) : (Re(t), n(void 0));
            });
    }
    function uo(e) {
        return vt(Mr | Kt, e, !0);
    }
    function jn(e, t = 0) {
        return vt(_r | t, e, !0);
    }
    function R(e, t = [], r = [], n = []) {
        Bi(n, t, r, (i)=>{
            vt(_r, ()=>e(...i.map(c)), !0);
        });
    }
    function Kr(e, t = 0) {
        var r = vt(nt | t, e, !0);
        return r;
    }
    function Ke(e) {
        return vt(Ze | Kt, e, !0);
    }
    function zn(e) {
        var t = e.teardown;
        if (t !== null) {
            const r = jt, n = B;
            Jr(!0), Ge(null);
            try {
                t.call(null);
            } finally{
                Jr(r), Ge(n);
            }
        }
    }
    function Fr(e, t = !1) {
        var r = e.first;
        for(e.first = e.last = null; r !== null;){
            const i = r.ac;
            i !== null && jr(()=>{
                i.abort(yt);
            });
            var n = r.next;
            (r.f & At) !== 0 ? r.parent = null : Re(r, t), r = n;
        }
    }
    function fo(e) {
        for(var t = e.first; t !== null;){
            var r = t.next;
            (t.f & Ze) === 0 && Re(t), t = r;
        }
    }
    function Re(e, t = !0) {
        var r = !1;
        (t || (e.f & pn) !== 0) && e.nodes !== null && e.nodes.end !== null && (_o(e.nodes.start, e.nodes.end), r = !0), Fr(e, t && !r), Zt(e, 0), se(e, st);
        var n = e.nodes && e.nodes.t;
        if (n !== null) for (const o of n)o.stop();
        zn(e);
        var i = e.parent;
        i !== null && i.first !== null && Kn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
    }
    function _o(e, t) {
        for(; e !== null;){
            var r = e === t ? null : Qt(e);
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
                var o = i.next, a = (i.f & Lt) !== 0 || (i.f & Ze) !== 0 && (e.f & nt) !== 0;
                Fn(i, t, a ? r : !1), i = o;
            }
        }
    }
    function Vr(e) {
        Vn(e, !0);
    }
    function Vn(e, t) {
        if ((e.f & Ce) !== 0) {
            e.f ^= Ce, (e.f & pe) === 0 && (se(e, we), We(e));
            for(var r = e.first; r !== null;){
                var n = r.next, i = (r.f & Lt) !== 0 || (r.f & Ze) !== 0;
                Vn(r, i ? t : !1), r = n;
            }
            var o = e.nodes && e.nodes.t;
            if (o !== null) for (const a of o)(a.is_global || t) && a.in();
        }
    }
    function Gn(e, t) {
        if (e.nodes) for(var r = e.nodes.start, n = e.nodes.end; r !== null;){
            var i = r === n ? null : Qt(r);
            t.append(r), r = i;
        }
    }
    let or = !1, jt = !1;
    function Jr(e) {
        jt = e;
    }
    let B = null, Be = !1;
    function Ge(e) {
        B = e;
    }
    let Z = null;
    function Xe(e) {
        Z = e;
    }
    let Ve = null;
    function vo(e) {
        B !== null && (Ve === null ? Ve = [
            e
        ] : Ve.push(e));
    }
    let Pe = null, Le = 0, ze = null;
    function po(e) {
        ze = e;
    }
    let qn = 1, mt = 0, Et = mt;
    function Zr(e) {
        Et = e;
    }
    function Wn() {
        return ++qn;
    }
    function er(e) {
        var t = e.f;
        if ((t & we) !== 0) return !0;
        if (t & me && (e.f &= ~St), (t & Ue) !== 0) {
            for(var r = e.deps, n = r.length, i = 0; i < n; i++){
                var o = r[i];
                if (er(o) && Pn(o), o.wv > e.wv) return !0;
            }
            (t & Fe) !== 0 && qe === null && se(e, pe);
        }
        return !1;
    }
    function Bn(e, t, r = !0) {
        var n = e.reactions;
        if (n !== null && !(Ve !== null && Rt.call(Ve, e))) for(var i = 0; i < n.length; i++){
            var o = n[i];
            (o.f & me) !== 0 ? Bn(o, t, !1) : t === o && (r ? se(o, we) : (o.f & pe) !== 0 && se(o, Ue), We(o));
        }
    }
    function Un(e) {
        var t = Pe, r = Le, n = ze, i = B, o = Ve, a = $e, s = Be, l = Et, u = e.f;
        Pe = null, Le = 0, ze = null, B = (u & (Ze | At)) === 0 ? e : null, Ve = null, Mt(e.ctx), Be = !1, Et = ++mt, e.ac !== null && (jr(()=>{
            e.ac.abort(yt);
        }), e.ac = null);
        try {
            e.f |= Er;
            var d = e.fn, f = d();
            e.f |= Dt;
            var h = e.deps, g = H?.is_fork;
            if (Pe !== null) {
                var _;
                if (g || Zt(e, Le), h !== null && Le > 0) for(h.length = Le + Pe.length, _ = 0; _ < Pe.length; _++)h[Le + _] = Pe[_];
                else e.deps = h = Pe;
                if (zr() && (e.f & Fe) !== 0) for(_ = Le; _ < h.length; _++)(h[_].reactions ??= []).push(e);
            } else !g && h !== null && Le < h.length && (Zt(e, Le), h.length = Le);
            if (yn() && ze !== null && !Be && h !== null && (e.f & (me | Ue | we)) === 0) for(_ = 0; _ < ze.length; _++)Bn(ze[_], e);
            if (i !== null && i !== e) {
                if (mt++, i.deps !== null) for(let w = 0; w < r; w += 1)i.deps[w].rv = mt;
                if (t !== null) for (const w of t)w.rv = mt;
                ze !== null && (n === null ? n = ze : n.push(...ze));
            }
            return (e.f & lt) !== 0 && (e.f ^= lt), f;
        } catch (w) {
            return mn(w);
        } finally{
            e.f ^= Er, Pe = t, Le = r, ze = n, B = i, Ve = o, Mt(a), Be = s, Et = l;
        }
    }
    function ho(e, t) {
        let r = t.reactions;
        if (r !== null) {
            var n = hi.call(r, e);
            if (n !== -1) {
                var i = r.length - 1;
                i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
            }
        }
        if (r === null && (t.f & me) !== 0 && (Pe === null || !Rt.call(Pe, t))) {
            var o = t;
            (o.f & Fe) !== 0 && (o.f ^= Fe, o.f &= ~St), Cr(o), Zi(o), Zt(o, 0);
        }
    }
    function Zt(e, t) {
        var r = e.deps;
        if (r !== null) for(var n = t; n < r.length; n++)ho(e, r[n]);
    }
    function zt(e) {
        var t = e.f;
        if ((t & st) === 0) {
            se(e, pe);
            var r = Z, n = or;
            Z = e, or = !0;
            try {
                (t & (nt | vn)) !== 0 ? fo(e) : Fr(e), zn(e);
                var i = Un(e);
                e.teardown = typeof i == "function" ? i : null, e.wv = qn;
                var o;
                xr && Ni && (e.f & we) !== 0 && e.deps;
            } finally{
                or = n, Z = r;
            }
        }
    }
    async function go() {
        await Promise.resolve(), Ki();
    }
    function c(e) {
        var t = e.f, r = (t & me) !== 0;
        if (B !== null && !Be) {
            var n = Z !== null && (Z.f & st) !== 0;
            if (!n && (Ve === null || !Rt.call(Ve, e))) {
                var i = B.deps;
                if ((B.f & Er) !== 0) e.rv < mt && (e.rv = mt, Pe === null && i !== null && i[Le] === e ? Le++ : Pe === null ? Pe = [
                    e
                ] : Pe.push(e));
                else {
                    (B.deps ??= []).push(e);
                    var o = e.reactions;
                    o === null ? e.reactions = [
                        B
                    ] : Rt.call(o, B) || o.push(B);
                }
            }
        }
        if (jt && ut.has(e)) return ut.get(e);
        if (r) {
            var a = e;
            if (jt) {
                var s = a.v;
                return ((a.f & pe) === 0 && a.reactions !== null || Yn(a)) && (s = Nr(a)), ut.set(a, s), s;
            }
            var l = (a.f & Fe) === 0 && !Be && B !== null && (or || (B.f & Fe) !== 0), u = (a.f & Dt) === 0;
            er(a) && (l && (a.f |= Fe), Pn(a)), l && !u && (In(a), $n(a));
        }
        if (qe?.has(e)) return qe.get(e);
        if ((e.f & lt) !== 0) throw e.v;
        return e.v;
    }
    function $n(e) {
        if (e.f |= Fe, e.deps !== null) for (const t of e.deps)(t.reactions ??= []).push(e), (t.f & me) !== 0 && (t.f & Fe) === 0 && (In(t), $n(t));
    }
    function Yn(e) {
        if (e.v === be) return !0;
        if (e.deps === null) return !1;
        for (const t of e.deps)if (ut.has(t) || (t.f & me) !== 0 && Yn(t)) return !0;
        return !1;
    }
    function Hn(e) {
        var t = Be;
        try {
            return Be = !0, e();
        } finally{
            Be = t;
        }
    }
    const Vt = Symbol("events"), Xn = new Set, Ir = new Set;
    function X(e, t, r) {
        (t[Vt] ??= {})[e] = r;
    }
    function Pt(e) {
        for(var t = 0; t < e.length; t++)Xn.add(e[t]);
        for (var r of Ir)r(e);
    }
    let Qr = null;
    function en(e) {
        var t = this, r = t.ownerDocument, n = e.type, i = e.composedPath?.() || [], o = i[0] || e.target;
        Qr = e;
        var a = 0, s = Qr === e && e[Vt];
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
            gi(e, "currentTarget", {
                configurable: !0,
                get () {
                    return o || r;
                }
            });
            var d = B, f = Z;
            Ge(null), Xe(null);
            try {
                for(var h, g = []; o !== null;){
                    var _ = o.assignedSlot || o.parentNode || o.host || null;
                    try {
                        var w = o[Vt]?.[n];
                        w != null && (!o.disabled || e.target === o) && w.call(o, e);
                    } catch (N) {
                        h ? g.push(N) : h = N;
                    }
                    if (e.cancelBubble || _ === t || _ === null) break;
                    o = _;
                }
                if (h) {
                    for (let N of g)queueMicrotask(()=>{
                        throw N;
                    });
                    throw h;
                }
            } finally{
                e[Vt] = t, delete e.currentTarget, Ge(d), Xe(f);
            }
        }
    }
    const yo = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
        createHTML: (e)=>e
    });
    function bo(e) {
        return yo?.createHTML(e) ?? e;
    }
    function Jn(e) {
        var t = io("template");
        return t.innerHTML = bo(e.replaceAll("<!>", "<!---->")), t.content;
    }
    function cr(e, t) {
        var r = Z;
        r.nodes === null && (r.nodes = {
            start: e,
            end: t,
            a: null,
            t: null
        });
    }
    function I(e, t) {
        var r = (t & vi) !== 0, n = (t & pi) !== 0, i, o = !e.startsWith("<!>");
        return ()=>{
            i === void 0 && (i = Jn(o ? e : "<!>" + e), r || (i = Nt(i)));
            var a = n || Dn ? document.importNode(i, !0) : i.cloneNode(!0);
            if (r) {
                var s = Nt(a), l = a.lastChild;
                cr(s, l);
            } else cr(a, a);
            return a;
        };
    }
    function mo(e, t, r = "svg") {
        var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
        return ()=>{
            if (!o) {
                var a = Jn(i), s = Nt(a);
                o = Nt(s);
            }
            var l = o.cloneNode(!0);
            return cr(l, l), l;
        };
    }
    function Zn(e, t) {
        return mo(e, t, "svg");
    }
    function wo() {
        var e = document.createDocumentFragment(), t = document.createComment(""), r = ft();
        return e.append(t, r), cr(t, r), e;
    }
    function A(e, t) {
        e !== null && e.before(t);
    }
    const xo = [
        "touchstart",
        "touchmove"
    ];
    function ko(e) {
        return xo.includes(e);
    }
    function m(e, t) {
        var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
        r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = `${r}`);
    }
    function Eo(e, t) {
        return So(e, t);
    }
    const nr = new Map;
    function So(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: a = !0, transformError: s }) {
        ro();
        var l = void 0, u = co(()=>{
            var d = r ?? t.appendChild(ft());
            qi(d, {
                pending: ()=>{}
            }, (g)=>{
                _t({});
                var _ = $e;
                o && (_.c = o), i && (n.$$events = i), l = e(g, n) || {}, dt();
            }, s);
            var f = new Set, h = (g)=>{
                for(var _ = 0; _ < g.length; _++){
                    var w = g[_];
                    if (!f.has(w)) {
                        f.add(w);
                        var N = ko(w);
                        for (const E of [
                            t,
                            document
                        ]){
                            var P = nr.get(E);
                            P === void 0 && (P = new Map, nr.set(E, P));
                            var D = P.get(w);
                            D === void 0 ? (E.addEventListener(w, en, {
                                passive: N
                            }), P.set(w, 1)) : P.set(w, D + 1);
                        }
                    }
                }
            };
            return h(ur(Xn)), Ir.add(h), ()=>{
                for (var g of f)for (const N of [
                    t,
                    document
                ]){
                    var _ = nr.get(N), w = _.get(g);
                    --w == 0 ? (N.removeEventListener(g, en), _.delete(g), _.size === 0 && nr.delete(N)) : _.set(g, w);
                }
                Ir.delete(h), d !== r && d.parentNode?.removeChild(d);
            };
        });
        return To.set(l, u), l;
    }
    let To = new WeakMap;
    class Ao {
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
            var t = H;
            if (this.#t.has(t)) {
                var r = this.#t.get(t), n = this.#s.get(r);
                if (n) Vr(n), this.#o.delete(r);
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
                            Gn(a, u), u.append(ft()), this.#e.set(o, {
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
            var n = H, i = Cn();
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
        var n = new Ao(e), i = r ? Lt : 0;
        function o(a, s) {
            n.ensure(a, s);
        }
        Kr(()=>{
            var a = !1;
            t((s, l = 0)=>{
                a = !0, o(l, s);
            }), a || o(!1, null);
        }, i);
    }
    function Po(e, t) {
        return t;
    }
    function Io(e, t, r) {
        for(var n = [], i = t.length, o, a = t.length, s = 0; s < i; s++){
            let f = t[s];
            kt(f, ()=>{
                if (o) {
                    if (o.pending.delete(f), o.done.add(f), o.pending.size === 0) {
                        var h = e.outrogroups;
                        Or(ur(o.done)), h.delete(o), h.size === 0 && (e.outrogroups = null);
                    }
                } else a -= 1;
            }, !1);
        }
        if (a === 0) {
            var l = n.length === 0 && r !== null;
            if (l) {
                var u = r, d = u.parentNode;
                no(d), d.append(u), e.items.clear();
            }
            Or(t, !l);
        } else o = {
            pending: new Set(t),
            done: new Set
        }, (e.outrogroups ??= new Set).add(o);
    }
    function Or(e, t = !0) {
        for(var r = 0; r < e.length; r++)Re(e[r], t);
    }
    var tn;
    function vr(e, t, r, n, i, o = null) {
        var a = e, s = new Map;
        {
            var l = e;
            a = l.appendChild(ft());
        }
        var u = null, d = Hi(()=>{
            var N = r();
            return Lr(N) ? N : N == null ? [] : ur(N);
        }), f, h = !0;
        function g() {
            w.fallback = u, Oo(w, f, a, t, n), u !== null && (f.length === 0 ? (u.f & ot) === 0 ? Vr(u) : (u.f ^= ot, Gt(u, null, a)) : kt(u, ()=>{
                u = null;
            }));
        }
        var _ = Kr(()=>{
            f = c(d);
            for(var N = f.length, P = new Set, D = H, E = Cn(), L = 0; L < N; L += 1){
                var M = f[L], K = n(M, L), q = h ? null : s.get(K);
                q ? (q.v && Ct(q.v, M), q.i && Ct(q.i, L), E && D.unskip_effect(q.e)) : (q = Ro(s, h ? a : tn ??= ft(), M, K, L, i, t, r), h || (q.e.f |= ot), s.set(K, q)), P.add(K);
            }
            if (N === 0 && o && !u && (h ? u = Ke(()=>o(a)) : (u = Ke(()=>o(tn ??= ft())), u.f |= ot)), N > P.size && Ai(), !h) if (E) {
                for (const [Y, Se] of s)P.has(Y) || D.skip_effect(Se.e);
                D.oncommit(g), D.ondiscard(()=>{});
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
        for(; e !== null && (e.f & Ze) === 0;)e = e.next;
        return e;
    }
    function Oo(e, t, r, n, i) {
        var o = t.length, a = e.items, s = Ft(e.effect.first), l, u = null, d = [], f = [], h, g, _, w;
        for(w = 0; w < o; w += 1){
            if (h = t[w], g = i(h, w), _ = a.get(g).e, e.outrogroups !== null) for (const Y of e.outrogroups)Y.pending.delete(_), Y.done.delete(_);
            if ((_.f & ot) !== 0) if (_.f ^= ot, _ === s) Gt(_, null, r);
            else {
                var N = u ? u.next : s;
                _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), it(e, u, _), it(e, _, N), Gt(_, N, r), u = _, d = [], f = [], s = Ft(u.next);
                continue;
            }
            if ((_.f & Ce) !== 0 && Vr(_), _ !== s) {
                if (l !== void 0 && l.has(_)) {
                    if (d.length < f.length) {
                        var P = f[0], D;
                        u = P.prev;
                        var E = d[0], L = d[d.length - 1];
                        for(D = 0; D < d.length; D += 1)Gt(d[D], P, r);
                        for(D = 0; D < f.length; D += 1)l.delete(f[D]);
                        it(e, E.prev, L.next), it(e, u, E), it(e, L, P), s = P, u = L, w -= 1, d = [], f = [];
                    } else l.delete(_), Gt(_, s, r), it(e, _.prev, _.next), it(e, _, u === null ? e.effect.first : u.next), it(e, u, _), u = _;
                    continue;
                }
                for(d = [], f = []; s !== null && s !== _;)(l ??= new Set).add(s), f.push(s), s = Ft(s.next);
                if (s === null) continue;
            }
            (_.f & ot) === 0 && d.push(_), u = _, s = Ft(_.next);
        }
        if (e.outrogroups !== null) {
            for (const Y of e.outrogroups)Y.pending.size === 0 && (Or(ur(Y.done)), e.outrogroups?.delete(Y));
            e.outrogroups.size === 0 && (e.outrogroups = null);
        }
        if (s !== null || l !== void 0) {
            var M = [];
            if (l !== void 0) for (_ of l)(_.f & Ce) === 0 && M.push(_);
            for(; s !== null;)(s.f & Ce) === 0 && s !== e.fallback && M.push(s), s = Ft(s.next);
            var K = M.length;
            if (K > 0) {
                var q = o === 0 ? r : null;
                Io(e, M, q);
            }
        }
    }
    function Ro(e, t, r, n, i, o, a, s) {
        var l = (a & fi) !== 0 ? (a & di) === 0 ? Qi(r, !1, !1) : Tt(r) : null, u = (a & _i) !== 0 ? Tt(i) : null;
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
    const rn = [
        ...` 	
\r\f \v\uFEFF`
    ];
    function Do(e, t, r) {
        var n = e == null ? "" : "" + e;
        if (r) {
            for (var i of Object.keys(r))if (r[i]) n = n ? n + " " + i : i;
            else if (n.length) for(var o = i.length, a = 0; (a = n.indexOf(i, a)) >= 0;){
                var s = a + o;
                (a === 0 || rn.includes(n[a - 1])) && (s === n.length || rn.includes(n[s])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(s + 1) : a = s;
            }
        }
        return n === "" ? null : n;
    }
    function gt(e, t, r, n, i, o) {
        var a = e.__className;
        if (a !== r || a === void 0) {
            var s = Do(r, n, o);
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
            if (!Lr(t)) return Li();
            for (var n of e.options)n.selected = t.includes(nn(n));
            return;
        }
        for (n of e.options){
            var i = nn(n);
            if (to(i, t)) {
                n.selected = !0;
                return;
            }
        }
        (!r || t !== void 0) && (e.selectedIndex = -1);
    }
    function Lo(e) {
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
        }), Nn(()=>{
            t.disconnect();
        });
    }
    function nn(e) {
        return "__value" in e ? e.__value : e.value;
    }
    const Mo = Symbol("is custom element"), Co = Symbol("is html"), No = Si ? "progress" : "PROGRESS";
    function Gr(e, t) {
        var r = qr(e);
        r.value === (r.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== No) || (e.value = t ?? "");
    }
    function jo(e, t) {
        var r = qr(e);
        r.checked !== (r.checked = t ?? void 0) && (e.checked = t);
    }
    function Oe(e, t, r, n) {
        var i = qr(e);
        i[t] !== (i[t] = r) && (t === "loading" && (e[Ei] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && zo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
    }
    function qr(e) {
        return e.__attributes ??= {
            [Mo]: e.nodeName.includes("-"),
            [Co]: e.namespaceURI === fn
        };
    }
    var on = new Map;
    function zo(e) {
        var t = e.getAttribute("is") || e.nodeName, r = on.get(t);
        if (r) return r;
        on.set(t, r = []);
        for(var n, i = e, o = Element.prototype; o !== i;){
            n = yi(i);
            for(var a in n)n[a].set && r.push(a);
            i = _n(i);
        }
        return r;
    }
    function Me(e, t, r = t) {
        var n = new WeakSet;
        ao(e, "input", async (i)=>{
            var o = i ? e.defaultValue : e.value;
            if (o = br(e) ? mr(o) : o, r(o), H !== null && n.add(H), await go(), o !== (o = t())) {
                var a = e.selectionStart, s = e.selectionEnd, l = e.value.length;
                if (e.value = o ?? "", s !== null) {
                    var u = e.value.length;
                    a === s && s === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = a, e.selectionEnd = Math.min(s, u));
                }
            }
        }), Hn(t) == null && e.value && (r(br(e) ? mr(e.value) : e.value), H !== null && n.add(H)), jn(()=>{
            var i = t();
            if (e === document.activeElement) {
                var o = Sr ?? H;
                if (n.has(o)) return;
            }
            br(e) && i === mr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
        });
    }
    function br(e) {
        var t = e.type;
        return t === "number" || t === "range";
    }
    function mr(e) {
        return e === "" ? null : +e;
    }
    const Ko = "modulepreload", Fo = function(e, t) {
        return new URL(e, t).href;
    }, an = {}, ve = function(t, r, n) {
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
                if (d = Fo(d, n), d in an) return;
                an[d] = !0;
                const f = d.endsWith(".css"), h = f ? '[rel="stylesheet"]' : "";
                if (n) for(let _ = a.length - 1; _ >= 0; _--){
                    const w = a[_];
                    if (w.href === d && (!f || w.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${d}"]${h}`)) return;
                const g = document.createElement("link");
                if (g.rel = f ? "stylesheet" : Ko, f || (g.as = "script"), g.crossOrigin = "", g.href = d, l && g.setAttribute("nonce", l), document.head.appendChild(g), f) return new Promise((_, w)=>{
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
    }, Vo = "Browser-based PGP encryption powered by WebAssembly", Go = "All cryptography runs locally in your browser via WebAssembly. No data is sent to any server.", qo = "Loading cryptographic engine...", Wo = "Failed to load WASM module: {error}", Bo = "Encrypt", Uo = "Decrypt", $o = "Sign", Yo = "Verify", Ho = "Keys", Xo = "Encrypt Message", Jo = "Type your message here...", Zo = "Recipients", Qo = "No keys available. Add keys in the Keys tab.", ea = "Encrypt", ta = "Enter a message to encrypt.", ra = "Select at least one recipient key.", na = "(own)", ia = "Decrypt Message", oa = "Paste encrypted PGP message here...", aa = "Passphrase (if key is protected)", sa = "Decrypt", la = "Paste an encrypted PGP message.", ca = "No private keys available. Generate or import a key in the Keys tab.", ua = "Decryption failed. You may not have the correct private key, or the passphrase is wrong.", fa = "Sign Message", _a = "Type your message here...", da = "Passphrase (if key is protected)", va = "Sign", pa = "Enter a message to sign.", ha = "No private keys available. Generate or import a key in the Keys tab.", ga = "Signing failed. Your key may require a passphrase.", ya = "Verify Signature", ba = "Paste signed PGP message here...", ma = "Verify", wa = "Paste a signed PGP message.", xa = "No keys in keyring. Import the signer's public key first.", ka = "Valid Signature", Ea = "Signed by: {name}", Sa = "Verification Failed", Ta = "The signer's key may not be in your keyring.", Aa = "Key Manager", Pa = "Generate", Ia = "Import", Oa = "No keys yet. Generate or import one to get started.", Ra = "(own key)", Da = "(unnamed)", La = "Generate New Key Pair", Ma = "Name", Ca = "Email", Na = "Passphrase (optional)", ja = "Name and email are required.", za = "Cancel", Ka = "Generate", Fa = "Generating...", Va = "Key pair generated!", Ga = "Import Key", qa = "Paste ASCII-armored PGP key...", Wa = "Paste a PGP public or private key.", Ba = "Cancel", Ua = "Import", $a = "Importing...", Ya = "Imported key for {name}.", Ha = "Export", Xa = "Delete", Ja = "Key deleted.", Za = "Public key copied to clipboard.", Qa = "Copy", es = "System", ts = "Light", rs = "Dark", ns = "Skip tutorial", is = "Step {current} of {total}", os = "Next", as = "Back", ss = "Get Started", ls = "Welcome to KeychainPGP", cs = "This quick tutorial will walk you through PGP encryption. You'll create your key pair and decrypt your first secret message.", us = "Create Your Key Pair", fs = "A PGP key pair has two parts: a public key you share with others so they can send you encrypted messages, and a private key you keep secret to decrypt them.", _s = "Generate My Key", ds = "Generating...", vs = "Key pair created and saved!", ps = "Decrypt Your First Message", hs = "We just encrypted a welcome message using your public key. Only your private key can unlock it. Give it a try!", gs = "Decrypt Message", ys = "Message decrypted!", bs = "To exchange encrypted messages with someone, import their public key in the Keys tab. They'll need your public key too.", ms = "You're Ready!", ws = "You've mastered the basics of PGP encryption. Use the tabs above to encrypt, decrypt, sign, and verify messages. Import contacts' public keys in the Keys tab to communicate securely.", xs = `Hello World!

Congratulations! You have successfully decrypted your first PGP message.

This message was encrypted with your public key and could only be decrypted with your private key. This is the foundation of PGP: only the intended recipient can read the message.

Enjoy using KeychainPGP!`, ks = "Language", Es = {
        app_subtitle: Vo,
        app_footer: Go,
        loading: qo,
        loading_error: Wo,
        tab_encrypt: Bo,
        tab_decrypt: Uo,
        tab_sign: $o,
        tab_verify: Yo,
        tab_keys: Ho,
        encrypt_title: Xo,
        encrypt_placeholder: Jo,
        encrypt_recipients: Zo,
        encrypt_no_keys: Qo,
        encrypt_btn: ea,
        encrypt_error_empty: ta,
        encrypt_error_no_recipient: ra,
        encrypt_own_label: na,
        decrypt_title: ia,
        decrypt_placeholder: oa,
        decrypt_passphrase: aa,
        decrypt_btn: sa,
        decrypt_error_empty: la,
        decrypt_error_no_key: ca,
        decrypt_error_failed: ua,
        sign_title: fa,
        sign_placeholder: _a,
        sign_passphrase: da,
        sign_btn: va,
        sign_error_empty: pa,
        sign_error_no_key: ha,
        sign_error_failed: ga,
        verify_title: ya,
        verify_placeholder: ba,
        verify_btn: ma,
        verify_error_empty: wa,
        verify_error_no_keys: xa,
        verify_valid: ka,
        verify_signed_by: Ea,
        verify_failed: Sa,
        verify_signer_not_found: Ta,
        keys_title: Aa,
        keys_generate_btn: Pa,
        keys_import_btn: Ia,
        keys_empty: Oa,
        keys_own_label: Ra,
        keys_unnamed: Da,
        keygen_title: La,
        keygen_name: Ma,
        keygen_email: Ca,
        keygen_passphrase: Na,
        keygen_error_required: ja,
        keygen_cancel: za,
        keygen_submit: Ka,
        keygen_loading: Fa,
        keygen_success: Va,
        import_title: Ga,
        import_placeholder: qa,
        import_error_empty: Wa,
        import_cancel: Ba,
        import_submit: Ua,
        import_loading: $a,
        import_success: Ya,
        key_export_btn: Ha,
        key_delete_btn: Xa,
        key_deleted: Ja,
        key_exported: Za,
        copy_btn: Qa,
        theme_system: es,
        theme_light: ts,
        theme_dark: rs,
        onboarding_skip: ns,
        onboarding_step: is,
        onboarding_next: os,
        onboarding_prev: as,
        onboarding_finish: ss,
        onboarding_welcome_title: ls,
        onboarding_welcome_desc: cs,
        onboarding_gen_title: us,
        onboarding_gen_desc: fs,
        onboarding_gen_btn: _s,
        onboarding_gen_generating: ds,
        onboarding_gen_done: vs,
        onboarding_msg_title: ps,
        onboarding_msg_desc: hs,
        onboarding_msg_decrypt_btn: gs,
        onboarding_msg_decrypted: ys,
        onboarding_msg_tip: bs,
        onboarding_done_title: ms,
        onboarding_done_desc: ws,
        onboarding_secret_message: xs,
        language_label: ks
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
    ], ei = "keychainpgp-locale", pr = Es, ar = new Map;
    ar.set("en", pr);
    let ti = pr, ri = "en";
    const Ss = {
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
    function Ts() {
        return ri;
    }
    function As() {
        const e = localStorage.getItem(ei);
        if (e && Yt.some((i)=>i.code === e)) return e;
        const t = navigator.language, r = Yt.find((i)=>i.code === t);
        if (r) return r.code;
        const n = Yt.find((i)=>t.startsWith(i.code.split("-")[0]));
        return n ? n.code : "en";
    }
    async function ni(e) {
        if (localStorage.setItem(ei, e), !ar.has(e)) {
            const r = Ss[e];
            if (r) {
                const n = await r();
                ar.set(e, n.default);
            }
        }
        ti = ar.get(e) ?? pr, ri = e;
        const t = Yt.find((r)=>r.code === e);
        document.documentElement.setAttribute("dir", t?.dir ?? "ltr"), document.documentElement.setAttribute("lang", e);
    }
    function Ps(e, t) {
        let r = ti[e] ?? pr[e] ?? e;
        if (t) for (const [n, i] of Object.entries(t))r = r.replace(new RegExp(`\\{${n}\\}`, "g"), String(i));
        return r;
    }
    let hr = S(0);
    async function Is() {
        const e = As();
        await ni(e), lr(hr);
    }
    async function Os(e) {
        await ni(e), lr(hr);
    }
    function Rs() {
        return c(hr), Ts();
    }
    function y(e, t) {
        return c(hr), Ps(e, t);
    }
    const Ds = "5";
    typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set).add(Ds);
    function Ls(e, t, r) {
        let n, i;
        try {
            const g = k.__wbindgen_add_to_stack_pointer(-16), _ = ke(e, k.__wbindgen_export, k.__wbindgen_export2), w = he, N = ke(t, k.__wbindgen_export, k.__wbindgen_export2), P = he;
            var o = xt(r) ? 0 : ke(r, k.__wbindgen_export, k.__wbindgen_export2), a = he;
            k.decrypt(g, _, w, N, P, o, a);
            var s = ne().getInt32(g + 0, !0), l = ne().getInt32(g + 4, !0), u = ne().getInt32(g + 8, !0), d = ne().getInt32(g + 12, !0), f = s, h = l;
            if (d) throw f = 0, h = 0, Ie(u);
            return n = f, i = h, wt(f, h);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(n, i, 1);
        }
    }
    function Ms(e, t) {
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
    function Cs(e, t, r) {
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
    function Ns() {
        k.init();
    }
    function js(e) {
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
    function zs(e, t, r) {
        let n, i;
        try {
            const g = k.__wbindgen_add_to_stack_pointer(-16), _ = ke(e, k.__wbindgen_export, k.__wbindgen_export2), w = he, N = ke(t, k.__wbindgen_export, k.__wbindgen_export2), P = he;
            var o = xt(r) ? 0 : ke(r, k.__wbindgen_export, k.__wbindgen_export2), a = he;
            k.sign(g, _, w, N, P, o, a);
            var s = ne().getInt32(g + 0, !0), l = ne().getInt32(g + 4, !0), u = ne().getInt32(g + 8, !0), d = ne().getInt32(g + 12, !0), f = s, h = l;
            if (d) throw f = 0, h = 0, Ie(u);
            return n = f, i = h, wt(f, h);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(n, i, 1);
        }
    }
    function Ks(e, t) {
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
    function Fs() {
        return {
            __proto__: null,
            "./keychainpgp_wasm_bg.js": {
                __proto__: null,
                __wbg_Error_ecbf49c1b9d07c30: function(t, r) {
                    const n = Error(wt(t, r));
                    return oe(n);
                },
                __wbg_String_8564e559799eccda: function(t, r) {
                    const n = String(re(r)), i = ke(n, k.__wbindgen_export, k.__wbindgen_export2), o = he;
                    ne().setInt32(t + 4, o, !0), ne().setInt32(t + 0, i, !0);
                },
                __wbg___wbindgen_is_function_18bea6e84080c016: function(t) {
                    return typeof re(t) == "function";
                },
                __wbg___wbindgen_is_object_8d3fac158b36498d: function(t) {
                    const r = re(t);
                    return typeof r == "object" && r !== null;
                },
                __wbg___wbindgen_is_string_4d5f2c5b2acf65b0: function(t) {
                    return typeof re(t) == "string";
                },
                __wbg___wbindgen_is_undefined_4a711ea9d2e1ef93: function(t) {
                    return re(t) === void 0;
                },
                __wbg___wbindgen_throw_df03e93053e0f4bc: function(t, r) {
                    throw new Error(wt(t, r));
                },
                __wbg_call_85e5437fa1ab109d: function() {
                    return ir(function(t, r, n) {
                        const i = re(t).call(re(r), re(n));
                        return oe(i);
                    }, arguments);
                },
                __wbg_crypto_38df2bab126b63dc: function(t) {
                    const r = re(t).crypto;
                    return oe(r);
                },
                __wbg_error_a6fa202b58aa1cd3: function(t, r) {
                    let n, i;
                    try {
                        n = t, i = r, console.error(wt(t, r));
                    } finally{
                        k.__wbindgen_export4(n, i, 1);
                    }
                },
                __wbg_getRandomValues_c44a50d8cfdaebeb: function() {
                    return ir(function(t, r) {
                        re(t).getRandomValues(re(r));
                    }, arguments);
                },
                __wbg_getTime_487f639f34f38b76: function(t) {
                    return re(t).getTime();
                },
                __wbg_length_5e07cf181b2745fb: function(t) {
                    return re(t).length;
                },
                __wbg_msCrypto_bd5a034af96bcba6: function(t) {
                    const r = re(t).msCrypto;
                    return oe(r);
                },
                __wbg_new_0_bde4b243a7001c8c: function() {
                    return oe(new Date);
                },
                __wbg_new_227d7c05414eb861: function() {
                    const t = new Error;
                    return oe(t);
                },
                __wbg_new_62f131e968c83d75: function() {
                    const t = new Object;
                    return oe(t);
                },
                __wbg_new_66075f8c2ea6575e: function() {
                    const t = new Array;
                    return oe(t);
                },
                __wbg_new_with_length_9b57e4a9683723fa: function(t) {
                    const r = new Uint8Array(t >>> 0);
                    return oe(r);
                },
                __wbg_node_84ea875411254db1: function(t) {
                    const r = re(t).node;
                    return oe(r);
                },
                __wbg_process_44c7a14e11e9f69e: function(t) {
                    const r = re(t).process;
                    return oe(r);
                },
                __wbg_prototypesetcall_d1a7133bc8d83aa9: function(t, r, n) {
                    Uint8Array.prototype.set.call(sn(t, r), re(n));
                },
                __wbg_randomFillSync_6c25eac9869eb53c: function() {
                    return ir(function(t, r) {
                        re(t).randomFillSync(Ie(r));
                    }, arguments);
                },
                __wbg_require_b4edbdcf3e2a1ef0: function() {
                    return ir(function() {
                        const t = module.require;
                        return oe(t);
                    }, arguments);
                },
                __wbg_set_6be42768c690e380: function(t, r, n) {
                    re(t)[Ie(r)] = Ie(n);
                },
                __wbg_set_7bf9e2df46e7632c: function(t, r, n) {
                    re(t)[r >>> 0] = Ie(n);
                },
                __wbg_stack_3b0d974bbf31e44f: function(t, r) {
                    const n = re(r).stack, i = ke(n, k.__wbindgen_export, k.__wbindgen_export2), o = he;
                    ne().setInt32(t + 4, o, !0), ne().setInt32(t + 0, i, !0);
                },
                __wbg_static_accessor_GLOBAL_THIS_6614f2f4998e3c4c: function() {
                    const t = typeof globalThis > "u" ? null : globalThis;
                    return xt(t) ? 0 : oe(t);
                },
                __wbg_static_accessor_GLOBAL_d8e8a2fefe80bc1d: function() {
                    const t = typeof global > "u" ? null : global;
                    return xt(t) ? 0 : oe(t);
                },
                __wbg_static_accessor_SELF_e29eaf7c465526b1: function() {
                    const t = typeof self > "u" ? null : self;
                    return xt(t) ? 0 : oe(t);
                },
                __wbg_static_accessor_WINDOW_66e7ca3eef30585a: function() {
                    const t = typeof window > "u" ? null : window;
                    return xt(t) ? 0 : oe(t);
                },
                __wbg_subarray_f36da54ffa7114f5: function(t, r, n) {
                    const i = re(t).subarray(r >>> 0, n >>> 0);
                    return oe(i);
                },
                __wbg_versions_276b2795b1c6a219: function(t) {
                    const r = re(t).versions;
                    return oe(r);
                },
                __wbindgen_cast_0000000000000001: function(t, r) {
                    const n = sn(t, r);
                    return oe(n);
                },
                __wbindgen_cast_0000000000000002: function(t, r) {
                    const n = wt(t, r);
                    return oe(n);
                },
                __wbindgen_object_clone_ref: function(t) {
                    const r = re(t);
                    return oe(r);
                },
                __wbindgen_object_drop_ref: function(t) {
                    Ie(t);
                }
            }
        };
    }
    function oe(e) {
        Xt === tt.length && tt.push(tt.length + 1);
        const t = Xt;
        return Xt = tt[t], tt[t] = e, t;
    }
    function Vs(e) {
        e < 1028 || (tt[e] = Xt, Xt = e);
    }
    function sn(e, t) {
        return e = e >>> 0, Ht().subarray(e / 1, e / 1 + t);
    }
    let ht = null;
    function ne() {
        return (ht === null || ht.buffer.detached === !0 || ht.buffer.detached === void 0 && ht.buffer !== k.memory.buffer) && (ht = new DataView(k.memory.buffer)), ht;
    }
    function wt(e, t) {
        return e = e >>> 0, qs(e, t);
    }
    let qt = null;
    function Ht() {
        return (qt === null || qt.byteLength === 0) && (qt = new Uint8Array(k.memory.buffer)), qt;
    }
    function re(e) {
        return tt[e];
    }
    function ir(e, t) {
        try {
            return e.apply(this, t);
        } catch (r) {
            k.__wbindgen_export3(oe(r));
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
        const t = re(e);
        return Vs(e), t;
    }
    let sr = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    sr.decode();
    const Gs = 2146435072;
    let wr = 0;
    function qs(e, t) {
        return wr += t, wr >= Gs && (sr = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), sr.decode(), wr = t), sr.decode(Ht().subarray(e, e + t));
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
    function Ws(e, t) {
        return k = e.exports, ht = null, qt = null, k;
    }
    async function Bs(e, t) {
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
    async function Us(e) {
        if (k !== void 0) return k;
        e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("keychainpgp_wasm_bg-gIDSsvO3.wasm", import.meta.url).href, import.meta.url));
        const t = Fs();
        (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
        const { instance: r, module: n } = await Bs(await e, t);
        return Ws(r);
    }
    let ln = !1;
    async function $s() {
        ln || (await Us(), Ns(), ln = !0);
    }
    function ii(e, t, r) {
        return Cs(e, t, r ?? void 0);
    }
    function oi(e, t) {
        return Ms(e, JSON.stringify(t));
    }
    function ai(e, t, r) {
        return Ls(e, t, r ?? void 0);
    }
    function Ys(e, t, r) {
        return zs(e, t, r ?? void 0);
    }
    function Hs(e, t) {
        return Ks(e, t);
    }
    function Rr(e) {
        return js(e);
    }
    const si = "keychainpgp-theme";
    function Xs() {
        return localStorage.getItem(si) ?? "dark";
    }
    function Js(e) {
        localStorage.setItem(si, e), li(e);
    }
    function li(e) {
        document.documentElement.setAttribute("data-theme", e);
        const t = document.querySelector('meta[name="theme-color"]');
        t && t.setAttribute("content", e === "dark" ? "#0f172a" : "#ffffff");
    }
    const ci = "keychainpgp-";
    function Zs(e) {
        return localStorage.getItem(ci + e);
    }
    function Qs(e, t) {
        localStorage.setItem(ci + e, t);
    }
    function el() {
        return Zs("onboarded") === "true";
    }
    function cn() {
        Qs("onboarded", "true");
    }
    const tl = "keychainpgp", rl = 1, Je = "keys", un = "keychainpgp-wrapping-key";
    function gr() {
        return new Promise((e, t)=>{
            const r = indexedDB.open(tl, rl);
            r.onupgradeneeded = ()=>{
                const n = r.result;
                n.objectStoreNames.contains(Je) || n.createObjectStore(Je, {
                    keyPath: "fingerprint"
                });
            }, r.onsuccess = ()=>e(r.result), r.onerror = ()=>t(r.error);
        });
    }
    async function ui() {
        const e = sessionStorage.getItem(un);
        if (e) {
            const n = Uint8Array.from(atob(e), (i)=>i.charCodeAt(0));
            return crypto.subtle.importKey("raw", n, "AES-GCM", !0, [
                "encrypt",
                "decrypt"
            ]);
        }
        const t = await crypto.subtle.generateKey({
            name: "AES-GCM",
            length: 256
        }, !0, [
            "encrypt",
            "decrypt"
        ]), r = await crypto.subtle.exportKey("raw", t);
        return sessionStorage.setItem(un, btoa(String.fromCharCode(...new Uint8Array(r)))), t;
    }
    async function nl(e) {
        const t = await ui(), r = crypto.getRandomValues(new Uint8Array(12)), n = new TextEncoder().encode(e), i = await crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: r
        }, t, n);
        return {
            ciphertext: btoa(String.fromCharCode(...new Uint8Array(i))),
            iv: btoa(String.fromCharCode(...r))
        };
    }
    async function il(e, t) {
        const r = await ui(), n = Uint8Array.from(atob(t), (a)=>a.charCodeAt(0)), i = Uint8Array.from(atob(e), (a)=>a.charCodeAt(0)), o = await crypto.subtle.decrypt({
            name: "AES-GCM",
            iv: n
        }, r, i);
        return new TextDecoder().decode(o);
    }
    async function tr() {
        const e = await gr();
        return new Promise((t, r)=>{
            const o = e.transaction(Je, "readonly").objectStore(Je).getAll();
            o.onsuccess = ()=>t(o.result), o.onerror = ()=>r(o.error);
        });
    }
    async function ol(e) {
        const t = await gr();
        return new Promise((r, n)=>{
            const a = t.transaction(Je, "readonly").objectStore(Je).get(e);
            a.onsuccess = ()=>r(a.result ?? null), a.onerror = ()=>n(a.error);
        });
    }
    async function Dr(e, t, r, n, i) {
        let o = null, a = null;
        if (i) {
            const u = await nl(i);
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
        }, l = await gr();
        return new Promise((u, d)=>{
            const f = l.transaction(Je, "readwrite");
            f.objectStore(Je).put(s), f.oncomplete = ()=>u(), f.onerror = ()=>d(f.error);
        });
    }
    async function Wr(e) {
        const t = await ol(e);
        if (!t?.encryptedSecretKey || !t.iv) return null;
        try {
            return await il(t.encryptedSecretKey, t.iv);
        } catch  {
            return null;
        }
    }
    async function al(e) {
        const t = await gr();
        return new Promise((r, n)=>{
            const i = t.transaction(Je, "readwrite");
            i.objectStore(Je).delete(e), i.oncomplete = ()=>r(), i.onerror = ()=>n(i.error);
        });
    }
    var sl = I("<span></span>"), ll = I('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p>', 1), cl = I('<p class="success svelte-13krnjv"> </p>'), ul = I('<p class="error svelte-13krnjv"> </p>'), fl = I('<div class="wizard-form svelte-13krnjv"><input class="input"/> <input class="input" type="email"/> <input class="input" type="password"/> <!> <button class="btn btn-primary"> </button></div>'), _l = I('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p> <!>', 1), dl = I('<p class="success svelte-13krnjv" style="margin-top: 0.75rem;"> </p> <div class="decrypted-block svelte-13krnjv"> </div>', 1), vl = I('<p class="error svelte-13krnjv" style="margin-top: 0.5rem;"> </p>'), pl = I('<!> <button class="btn btn-primary" style="margin-top: 0.75rem;"> </button>', 1), hl = I('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p> <div class="pgp-block svelte-13krnjv"> </div> <!> <p class="wizard-tip svelte-13krnjv"> </p>', 1), gl = I('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p>', 1), yl = I('<button class="btn"> </button>'), bl = I("<div></div>"), ml = I('<button class="btn btn-primary"> </button>'), wl = I('<button class="btn btn-primary"> </button>'), xl = I('<div class="card wizard svelte-13krnjv"><div class="wizard-header svelte-13krnjv"><div class="wizard-dots svelte-13krnjv"></div> <button class="wizard-skip svelte-13krnjv"> </button></div> <div class="wizard-content svelte-13krnjv"><!></div> <div class="wizard-footer svelte-13krnjv"><!> <!></div></div>');
    function kl(e, t) {
        _t(t, !0);
        const r = 4;
        let n = S(0), i = S(""), o = S(""), a = S(""), s = S(""), l = S(!1), u = S(!1), d = S(""), f = S(""), h = S(""), g = S(""), _ = S(!1), w = S("");
        function N() {
            cn(), t.onDismiss();
        }
        function P() {
            cn(), t.onDismiss();
        }
        function D() {
            c(n) > 0 && lr(n, -1);
        }
        function E() {
            c(n) === 1 && !c(u) || c(n) < r - 1 && lr(n);
        }
        async function L() {
            if (p(s, ""), !c(i).trim() || !c(o).trim()) {
                p(s, y("keygen_error_required"), !0);
                return;
            }
            p(l, !0);
            try {
                const x = ii(c(i), c(o), c(a) || void 0), C = Rr(x.public_key);
                await Dr(x.fingerprint, C.user_ids[0]?.name ?? null, C.user_ids[0]?.email ?? null, x.public_key, x.secret_key), p(d, x.public_key, !0), p(f, x.fingerprint, !0), p(u, !0);
                const V = y("onboarding_secret_message");
                p(h, oi(V, [
                    x.public_key
                ]), !0);
            } catch (x) {
                p(s, String(x), !0);
            } finally{
                p(l, !1);
            }
        }
        async function M() {
            p(w, ""), p(_, !0);
            try {
                const x = await Wr(c(f));
                if (!x) {
                    p(w, "Could not retrieve secret key.");
                    return;
                }
                p(g, ai(c(h), x, c(a) || void 0), !0);
            } catch (x) {
                p(w, String(x), !0);
            } finally{
                p(_, !1);
            }
        }
        var K = xl(), q = v(K), Y = v(q);
        vr(Y, 21, ()=>Array(r), Po, (x, C, V)=>{
            var J = sl();
            let ie;
            R(()=>ie = gt(J, 1, "wizard-dot svelte-13krnjv", null, ie, {
                    active: V === c(n),
                    completed: V < c(n)
                })), A(x, J);
        });
        var Se = b(Y, 2), De = v(Se), F = b(q, 2), T = v(F);
        {
            var j = (x)=>{
                var C = ll(), V = et(C), J = v(V), ie = b(V, 2), de = v(ie);
                R((ge, le)=>{
                    m(J, ge), m(de, le);
                }, [
                    ()=>y("onboarding_welcome_title"),
                    ()=>y("onboarding_welcome_desc")
                ]), A(x, C);
            }, z = (x)=>{
                var C = _l(), V = et(C), J = v(V), ie = b(V, 2), de = v(ie), ge = b(ie, 2);
                {
                    var le = (te)=>{
                        var ce = cl(), Q = v(ce);
                        R((ue)=>m(Q, ue), [
                            ()=>y("onboarding_gen_done")
                        ]), A(te, ce);
                    }, je = (te)=>{
                        var ce = fl(), Q = v(ce), ue = b(Q, 2), fe = b(ue, 2), G = b(fe, 2);
                        {
                            var Ee = (ae)=>{
                                var xe = ul(), It = v(xe);
                                R(()=>m(It, c(s))), A(ae, xe);
                            };
                            $(G, (ae)=>{
                                c(s) && ae(Ee);
                            });
                        }
                        var ye = b(G, 2), Te = v(ye);
                        R((ae, xe, It, yr)=>{
                            Oe(Q, "placeholder", ae), Oe(ue, "placeholder", xe), Oe(fe, "placeholder", It), ye.disabled = c(l), m(Te, yr);
                        }, [
                            ()=>y("keygen_name"),
                            ()=>y("keygen_email"),
                            ()=>y("keygen_passphrase"),
                            ()=>c(l) ? y("onboarding_gen_generating") : y("onboarding_gen_btn")
                        ]), Me(Q, ()=>c(i), (ae)=>p(i, ae)), Me(ue, ()=>c(o), (ae)=>p(o, ae)), Me(fe, ()=>c(a), (ae)=>p(a, ae)), X("click", ye, L), A(te, ce);
                    };
                    $(ge, (te)=>{
                        c(u) ? te(le) : te(je, !1);
                    });
                }
                R((te, ce)=>{
                    m(J, te), m(de, ce);
                }, [
                    ()=>y("onboarding_gen_title"),
                    ()=>y("onboarding_gen_desc")
                ]), A(x, C);
            }, ee = (x)=>{
                var C = hl(), V = et(C), J = v(V), ie = b(V, 2), de = v(ie), ge = b(ie, 2), le = v(ge), je = b(ge, 2);
                {
                    var te = (fe)=>{
                        var G = dl(), Ee = et(G), ye = v(Ee), Te = b(Ee, 2), ae = v(Te);
                        R((xe)=>{
                            m(ye, xe), m(ae, c(g));
                        }, [
                            ()=>y("onboarding_msg_decrypted")
                        ]), A(fe, G);
                    }, ce = (fe)=>{
                        var G = pl(), Ee = et(G);
                        {
                            var ye = (xe)=>{
                                var It = vl(), yr = v(It);
                                R(()=>m(yr, c(w))), A(xe, It);
                            };
                            $(Ee, (xe)=>{
                                c(w) && xe(ye);
                            });
                        }
                        var Te = b(Ee, 2), ae = v(Te);
                        R((xe)=>{
                            Te.disabled = c(_), m(ae, xe);
                        }, [
                            ()=>y("onboarding_msg_decrypt_btn")
                        ]), X("click", Te, M), A(fe, G);
                    };
                    $(je, (fe)=>{
                        c(g) ? fe(te) : fe(ce, !1);
                    });
                }
                var Q = b(je, 2), ue = v(Q);
                R((fe, G, Ee)=>{
                    m(J, fe), m(de, G), m(le, c(h)), m(ue, Ee);
                }, [
                    ()=>y("onboarding_msg_title"),
                    ()=>y("onboarding_msg_desc"),
                    ()=>y("onboarding_msg_tip")
                ]), A(x, C);
            }, _e = (x)=>{
                var C = gl(), V = et(C), J = v(V), ie = b(V, 2), de = v(ie);
                R((ge, le)=>{
                    m(J, ge), m(de, le);
                }, [
                    ()=>y("onboarding_done_title"),
                    ()=>y("onboarding_done_desc")
                ]), A(x, C);
            };
            $(T, (x)=>{
                c(n) === 0 ? x(j) : c(n) === 1 ? x(z, 1) : c(n) === 2 ? x(ee, 2) : c(n) === 3 && x(_e, 3);
            });
        }
        var Ne = b(F, 2), Ye = v(Ne);
        {
            var pt = (x)=>{
                var C = yl(), V = v(C);
                R((J)=>m(V, J), [
                    ()=>y("onboarding_prev")
                ]), X("click", C, D), A(x, C);
            }, He = (x)=>{
                var C = bl();
                A(x, C);
            };
            $(Ye, (x)=>{
                c(n) > 0 ? x(pt) : x(He, !1);
            });
        }
        var O = b(Ye, 2);
        {
            var W = (x)=>{
                var C = ml(), V = v(C);
                R((J)=>{
                    C.disabled = c(n) === 1 && !c(u), m(V, J);
                }, [
                    ()=>y("onboarding_next")
                ]), X("click", C, E), A(x, C);
            }, U = (x)=>{
                var C = wl(), V = v(C);
                R((J)=>m(V, J), [
                    ()=>y("onboarding_finish")
                ]), X("click", C, P), A(x, C);
            };
            $(O, (x)=>{
                c(n) < r - 1 ? x(W) : x(U, !1);
            });
        }
        R((x)=>m(De, x), [
            ()=>y("onboarding_skip")
        ]), X("click", Se, N), A(e, K), dt();
    }
    Pt([
        "click"
    ]);
    var El = I('<p style="font-size: 0.875rem; color: var(--color-text-secondary);"> </p>'), Sl = I('<span style="font-size: 0.75rem; color: var(--color-primary);"> </span>'), Tl = I('<label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border-radius: 0.375rem; border: 1px solid var(--color-border); cursor: pointer; font-size: 0.875rem;"><input type="checkbox"/> <span> </span> <!></label>'), Al = I('<div style="display: flex; flex-direction: column; gap: 0.375rem; max-height: 200px; overflow-y: auto;"></div>'), Pl = I('<p class="error"> </p>'), Il = I('<div style="position: relative;"><textarea class="textarea" readonly="" rows="8"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), Ol = I('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="5"></textarea> <div><p style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;"> </p> <!></div> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Rl(e, t) {
        _t(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S(rt([])), a = S(rt(new Set));
        async function s() {
            p(o, await tr(), !0);
        }
        s();
        function l(F) {
            c(a).has(F) ? c(a).delete(F) : c(a).add(F), p(a, new Set(c(a)), !0);
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
                const F = c(o).filter((T)=>c(a).has(T.fingerprint)).map((T)=>T.publicKey);
                p(n, oi(c(r), F), !0);
            } catch (F) {
                p(i, String(F), !0);
            }
        }
        async function d() {
            await navigator.clipboard.writeText(c(n));
        }
        var f = Ol(), h = v(f), g = v(h), _ = b(h, 2), w = b(_, 2), N = v(w), P = v(N), D = b(N, 2);
        {
            var E = (F)=>{
                var T = El(), j = v(T);
                R((z)=>m(j, z), [
                    ()=>y("encrypt_no_keys")
                ]), A(F, T);
            }, L = (F)=>{
                var T = Al();
                vr(T, 21, ()=>c(o), (j)=>j.fingerprint, (j, z)=>{
                    var ee = Tl();
                    let _e;
                    var Ne = v(ee), Ye = b(Ne, 2), pt = v(Ye), He = b(Ye, 2);
                    {
                        var O = (W)=>{
                            var U = Sl(), x = v(U);
                            R((C)=>m(x, C), [
                                ()=>y("encrypt_own_label")
                            ]), A(W, U);
                        };
                        $(He, (W)=>{
                            c(z).isOwn && W(O);
                        });
                    }
                    R((W, U, x)=>{
                        _e = gt(ee, 1, "svelte-recwdw", null, _e, W), jo(Ne, U), m(pt, x);
                    }, [
                        ()=>({
                                selected: c(a).has(c(z).fingerprint)
                            }),
                        ()=>c(a).has(c(z).fingerprint),
                        ()=>c(z).name ?? c(z).email ?? c(z).fingerprint.slice(-16)
                    ]), X("change", Ne, ()=>l(c(z).fingerprint)), A(j, ee);
                }), A(F, T);
            };
            $(D, (F)=>{
                c(o).length === 0 ? F(E) : F(L, !1);
            });
        }
        var M = b(w, 2), K = v(M), q = b(M, 2);
        {
            var Y = (F)=>{
                var T = Pl(), j = v(T);
                R(()=>m(j, c(i))), A(F, T);
            };
            $(q, (F)=>{
                c(i) && F(Y);
            });
        }
        var Se = b(q, 2);
        {
            var De = (F)=>{
                var T = Il(), j = v(T), z = b(j, 2), ee = v(z);
                R((_e)=>{
                    Gr(j, c(n)), m(ee, _e);
                }, [
                    ()=>y("copy_btn")
                ]), X("click", z, d), A(F, T);
            };
            $(Se, (F)=>{
                c(n) && F(De);
            });
        }
        R((F, T, j, z, ee)=>{
            m(g, F), Oe(_, "placeholder", T), m(P, j), M.disabled = z, m(K, ee);
        }, [
            ()=>y("encrypt_title"),
            ()=>y("encrypt_placeholder"),
            ()=>y("encrypt_recipients"),
            ()=>!c(r).trim() || c(a).size === 0,
            ()=>y("encrypt_btn")
        ]), Me(_, ()=>c(r), (F)=>p(r, F)), X("click", M, u), A(e, f), dt();
    }
    Pt([
        "change",
        "click"
    ]);
    var Dl = I('<p class="error"> </p>'), Ll = I('<div style="position: relative;"><textarea class="textarea" readonly="" rows="6"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), Ml = I('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="8"></textarea> <input type="password" class="input"/> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Cl(e, t) {
        _t(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S("");
        async function a() {
            if (p(o, ""), p(i, ""), !c(r).trim()) {
                p(o, y("decrypt_error_empty"), !0);
                return;
            }
            const L = (await tr()).filter((M)=>M.isOwn);
            if (L.length === 0) {
                p(o, y("decrypt_error_no_key"), !0);
                return;
            }
            for (const M of L){
                const K = await Wr(M.fingerprint);
                if (K) try {
                    p(i, ai(c(r), K, c(n) || void 0), !0);
                    return;
                } catch  {}
            }
            p(o, y("decrypt_error_failed"), !0);
        }
        async function s() {
            await navigator.clipboard.writeText(c(i));
        }
        var l = Ml(), u = v(l), d = v(u), f = b(u, 2), h = b(f, 2), g = b(h, 2), _ = v(g), w = b(g, 2);
        {
            var N = (E)=>{
                var L = Dl(), M = v(L);
                R(()=>m(M, c(o))), A(E, L);
            };
            $(w, (E)=>{
                c(o) && E(N);
            });
        }
        var P = b(w, 2);
        {
            var D = (E)=>{
                var L = Ll(), M = v(L), K = b(M, 2), q = v(K);
                R((Y)=>{
                    Gr(M, c(i)), m(q, Y);
                }, [
                    ()=>y("copy_btn")
                ]), X("click", K, s), A(E, L);
            };
            $(P, (E)=>{
                c(i) && E(D);
            });
        }
        R((E, L, M, K, q)=>{
            m(d, E), Oe(f, "placeholder", L), Oe(h, "placeholder", M), g.disabled = K, m(_, q);
        }, [
            ()=>y("decrypt_title"),
            ()=>y("decrypt_placeholder"),
            ()=>y("decrypt_passphrase"),
            ()=>!c(r).trim(),
            ()=>y("decrypt_btn")
        ]), Me(f, ()=>c(r), (E)=>p(r, E)), Me(h, ()=>c(n), (E)=>p(n, E)), X("click", g, a), A(e, l), dt();
    }
    Pt([
        "click"
    ]);
    var Nl = I('<p class="error"> </p>'), jl = I('<div style="position: relative;"><textarea class="textarea" readonly="" rows="8"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), zl = I('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="5"></textarea> <input type="password" class="input"/> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Kl(e, t) {
        _t(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S("");
        async function a() {
            if (p(o, ""), p(i, ""), !c(r).trim()) {
                p(o, y("sign_error_empty"), !0);
                return;
            }
            const L = (await tr()).filter((M)=>M.isOwn);
            if (L.length === 0) {
                p(o, y("sign_error_no_key"), !0);
                return;
            }
            for (const M of L){
                const K = await Wr(M.fingerprint);
                if (K) try {
                    p(i, Ys(c(r), K, c(n) || void 0), !0);
                    return;
                } catch  {}
            }
            p(o, y("sign_error_failed"), !0);
        }
        async function s() {
            await navigator.clipboard.writeText(c(i));
        }
        var l = zl(), u = v(l), d = v(u), f = b(u, 2), h = b(f, 2), g = b(h, 2), _ = v(g), w = b(g, 2);
        {
            var N = (E)=>{
                var L = Nl(), M = v(L);
                R(()=>m(M, c(o))), A(E, L);
            };
            $(w, (E)=>{
                c(o) && E(N);
            });
        }
        var P = b(w, 2);
        {
            var D = (E)=>{
                var L = jl(), M = v(L), K = b(M, 2), q = v(K);
                R((Y)=>{
                    Gr(M, c(i)), m(q, Y);
                }, [
                    ()=>y("copy_btn")
                ]), X("click", K, s), A(E, L);
            };
            $(P, (E)=>{
                c(i) && E(D);
            });
        }
        R((E, L, M, K, q)=>{
            m(d, E), Oe(f, "placeholder", L), Oe(h, "placeholder", M), g.disabled = K, m(_, q);
        }, [
            ()=>y("sign_title"),
            ()=>y("sign_placeholder"),
            ()=>y("sign_passphrase"),
            ()=>!c(r).trim(),
            ()=>y("sign_btn")
        ]), Me(f, ()=>c(r), (E)=>p(r, E)), Me(h, ()=>c(n), (E)=>p(n, E)), X("click", g, a), A(e, l), dt();
    }
    Pt([
        "click"
    ]);
    var Fl = I('<p class="error"> </p>'), Vl = I('<p style="font-size: 0.75rem; color: var(--color-text-secondary); font-family: var(--color-font-mono);"> </p>'), Gl = I('<div style="padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-success); background: rgba(34, 197, 94, 0.1);"><p class="success" style="font-weight: 600;"> </p> <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.25rem;"> </p> <!></div>'), ql = I('<div style="padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-danger); background: rgba(239, 68, 68, 0.1);"><p class="error" style="font-weight: 600;"> </p> <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.25rem;"> </p></div>'), Wl = I('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="8"></textarea> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Bl(e, t) {
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
            for (const D of P)try {
                const E = Hs(c(r), D.publicKey);
                if (E.valid) {
                    p(n, {
                        valid: !0,
                        fingerprint: E.signer_fingerprint
                    }, !0), p(i, D.name ?? D.email ?? D.fingerprint.slice(-16), !0);
                    return;
                }
            } catch  {}
            p(n, {
                valid: !1,
                fingerprint: null
            }, !0);
        }
        var s = Wl(), l = v(s), u = v(l), d = b(l, 2), f = b(d, 2), h = v(f), g = b(f, 2);
        {
            var _ = (P)=>{
                var D = Fl(), E = v(D);
                R(()=>m(E, c(o))), A(P, D);
            };
            $(g, (P)=>{
                c(o) && P(_);
            });
        }
        var w = b(g, 2);
        {
            var N = (P)=>{
                var D = wo(), E = et(D);
                {
                    var L = (K)=>{
                        var q = Gl(), Y = v(q), Se = v(Y), De = b(Y, 2), F = v(De), T = b(De, 2);
                        {
                            var j = (z)=>{
                                var ee = Vl(), _e = v(ee);
                                R(()=>m(_e, c(n).fingerprint)), A(z, ee);
                            };
                            $(T, (z)=>{
                                c(n).fingerprint && z(j);
                            });
                        }
                        R((z, ee)=>{
                            m(Se, z), m(F, ee);
                        }, [
                            ()=>y("verify_valid"),
                            ()=>y("verify_signed_by", {
                                    name: c(i)
                                })
                        ]), A(K, q);
                    }, M = (K)=>{
                        var q = ql(), Y = v(q), Se = v(Y), De = b(Y, 2), F = v(De);
                        R((T, j)=>{
                            m(Se, T), m(F, j);
                        }, [
                            ()=>y("verify_failed"),
                            ()=>y("verify_signer_not_found")
                        ]), A(K, q);
                    };
                    $(E, (K)=>{
                        c(n).valid ? K(L) : K(M, !1);
                    });
                }
                A(P, D);
            };
            $(w, (P)=>{
                c(n) && P(N);
            });
        }
        R((P, D, E, L)=>{
            m(u, P), Oe(d, "placeholder", D), f.disabled = E, m(h, L);
        }, [
            ()=>y("verify_title"),
            ()=>y("verify_placeholder"),
            ()=>!c(r).trim(),
            ()=>y("verify_btn")
        ]), Me(d, ()=>c(r), (P)=>p(r, P)), X("click", f, a), A(e, s), dt();
    }
    Pt([
        "click"
    ]);
    var Ul = I('<p class="success"> </p>'), $l = I('<p class="error"> </p>'), Yl = I('<div style="display: flex; flex-direction: column; gap: 0.75rem; padding: 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><p style="font-size: 0.875rem; font-weight: 500;"> </p> <input class="input"/> <input class="input"/> <input class="input" type="password"/> <!> <div style="display: flex; gap: 0.5rem; justify-content: flex-end;"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div>'), Hl = I('<p class="error"> </p>'), Xl = I('<div style="display: flex; flex-direction: column; gap: 0.75rem; padding: 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><p style="font-size: 0.875rem; font-weight: 500;"> </p> <textarea class="textarea" rows="6"></textarea> <!> <div style="display: flex; gap: 0.5rem; justify-content: flex-end;"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div>'), Jl = I('<p style="font-size: 0.875rem; color: var(--color-text-secondary); text-align: center; padding: 2rem 0;"> </p>'), Zl = I('<span style="font-size: 0.75rem; color: var(--color-primary); font-weight: normal;"> </span>'), Ql = I('<div class="key-row svelte-1byd03e" style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><div style="min-width: 0; flex: 1;"><p style="font-size: 0.875rem; font-weight: 500;"> <!></p> <p style="font-size: 0.75rem; color: var(--color-text-secondary);"> </p> <p style="font-size: 0.625rem; color: var(--color-text-secondary); font-family: var(--color-font-mono);"> </p></div> <div class="key-actions svelte-1byd03e" style="display: flex; gap: 0.375rem; flex-shrink: 0;"><button class="btn" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button> <button class="btn btn-danger" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div></div>'), ec = I('<div style="display: flex; flex-direction: column; gap: 0.5rem;"></div>'), tc = I('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><div style="display: flex; align-items: center; justify-content: space-between;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <div style="display: flex; gap: 0.5rem;"><button class="btn btn-primary"> </button> <button class="btn"> </button></div></div> <!> <!> <!> <!></div>');
    function rc(e, t) {
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
                const O = ii(c(o), c(a), c(s) || void 0), W = Rr(O.public_key);
                await Dr(O.fingerprint, W.user_ids[0]?.name ?? null, W.user_ids[0]?.email ?? null, O.public_key, O.secret_key), await _(), p(n, !1), p(o, ""), p(a, ""), p(s, ""), p(g, y("keygen_success"), !0), setTimeout(()=>p(g, ""), 3e3);
            } catch (O) {
                p(l, String(O), !0);
            } finally{
                p(u, !1);
            }
        }
        async function N() {
            if (p(f, ""), !c(d).trim()) {
                p(f, y("import_error_empty"), !0);
                return;
            }
            p(h, !0);
            try {
                const O = Rr(c(d)), W = O.user_ids[0]?.name ?? null, U = O.user_ids[0]?.email ?? null, x = O.has_secret_key ? c(d) : null;
                await Dr(O.fingerprint, W, U, c(d), x), await _(), p(i, !1), p(d, ""), p(g, y("import_success", {
                    name: W ?? U ?? O.fingerprint.slice(-16)
                }), !0), setTimeout(()=>p(g, ""), 3e3);
            } catch (O) {
                p(f, String(O), !0);
            } finally{
                p(h, !1);
            }
        }
        async function P(O) {
            await al(O), await _(), p(g, y("key_deleted"), !0), setTimeout(()=>p(g, ""), 3e3);
        }
        async function D(O) {
            await navigator.clipboard.writeText(O.publicKey), p(g, y("key_exported"), !0), setTimeout(()=>p(g, ""), 3e3);
        }
        var E = tc(), L = v(E), M = v(L), K = v(M), q = b(M, 2), Y = v(q), Se = v(Y), De = b(Y, 2), F = v(De), T = b(L, 2);
        {
            var j = (O)=>{
                var W = Ul(), U = v(W);
                R(()=>m(U, c(g))), A(O, W);
            };
            $(T, (O)=>{
                c(g) && O(j);
            });
        }
        var z = b(T, 2);
        {
            var ee = (O)=>{
                var W = Yl(), U = v(W), x = v(U), C = b(U, 2), V = b(C, 2), J = b(V, 2), ie = b(J, 2);
                {
                    var de = (Q)=>{
                        var ue = $l(), fe = v(ue);
                        R(()=>m(fe, c(l))), A(Q, ue);
                    };
                    $(ie, (Q)=>{
                        c(l) && Q(de);
                    });
                }
                var ge = b(ie, 2), le = v(ge), je = v(le), te = b(le, 2), ce = v(te);
                R((Q, ue, fe, G, Ee, ye)=>{
                    m(x, Q), Oe(C, "placeholder", ue), Oe(V, "placeholder", fe), Oe(J, "placeholder", G), m(je, Ee), te.disabled = c(u), m(ce, ye);
                }, [
                    ()=>y("keygen_title"),
                    ()=>y("keygen_name"),
                    ()=>y("keygen_email"),
                    ()=>y("keygen_passphrase"),
                    ()=>y("keygen_cancel"),
                    ()=>c(u) ? y("keygen_loading") : y("keygen_submit")
                ]), Me(C, ()=>c(o), (Q)=>p(o, Q)), Me(V, ()=>c(a), (Q)=>p(a, Q)), Me(J, ()=>c(s), (Q)=>p(s, Q)), X("click", le, ()=>p(n, !1)), X("click", te, w), A(O, W);
            };
            $(z, (O)=>{
                c(n) && O(ee);
            });
        }
        var _e = b(z, 2);
        {
            var Ne = (O)=>{
                var W = Xl(), U = v(W), x = v(U), C = b(U, 2), V = b(C, 2);
                {
                    var J = (te)=>{
                        var ce = Hl(), Q = v(ce);
                        R(()=>m(Q, c(f))), A(te, ce);
                    };
                    $(V, (te)=>{
                        c(f) && te(J);
                    });
                }
                var ie = b(V, 2), de = v(ie), ge = v(de), le = b(de, 2), je = v(le);
                R((te, ce, Q, ue)=>{
                    m(x, te), Oe(C, "placeholder", ce), m(ge, Q), le.disabled = c(h), m(je, ue);
                }, [
                    ()=>y("import_title"),
                    ()=>y("import_placeholder"),
                    ()=>y("import_cancel"),
                    ()=>c(h) ? y("import_loading") : y("import_submit")
                ]), Me(C, ()=>c(d), (te)=>p(d, te)), X("click", de, ()=>p(i, !1)), X("click", le, N), A(O, W);
            };
            $(_e, (O)=>{
                c(i) && O(Ne);
            });
        }
        var Ye = b(_e, 2);
        {
            var pt = (O)=>{
                var W = Jl(), U = v(W);
                R((x)=>m(U, x), [
                    ()=>y("keys_empty")
                ]), A(O, W);
            }, He = (O)=>{
                var W = ec();
                vr(W, 21, ()=>c(r), (U)=>U.fingerprint, (U, x)=>{
                    var C = Ql(), V = v(C), J = v(V), ie = v(J), de = b(ie);
                    {
                        var ge = (ye)=>{
                            var Te = Zl(), ae = v(Te);
                            R((xe)=>m(ae, xe), [
                                ()=>y("keys_own_label")
                            ]), A(ye, Te);
                        };
                        $(de, (ye)=>{
                            c(x).isOwn && ye(ge);
                        });
                    }
                    var le = b(J, 2), je = v(le), te = b(le, 2), ce = v(te), Q = b(V, 2), ue = v(Q), fe = v(ue), G = b(ue, 2), Ee = v(G);
                    R((ye, Te, ae, xe)=>{
                        m(ie, `${ye ?? ""} `), m(je, c(x).email ?? ""), m(ce, Te), m(fe, ae), m(Ee, xe);
                    }, [
                        ()=>c(x).name ?? y("keys_unnamed"),
                        ()=>c(x).fingerprint.slice(-16),
                        ()=>y("key_export_btn"),
                        ()=>y("key_delete_btn")
                    ]), X("click", ue, ()=>D(c(x))), X("click", G, ()=>P(c(x).fingerprint)), A(U, C);
                }), A(O, W);
            };
            $(Ye, (O)=>{
                c(r).length === 0 ? O(pt) : O(He, !1);
            });
        }
        R((O, W, U)=>{
            m(K, O), m(Se, W), m(F, U);
        }, [
            ()=>y("keys_title"),
            ()=>y("keys_generate_btn"),
            ()=>y("keys_import_btn")
        ]), X("click", Y, ()=>{
            p(n, !c(n)), p(i, !1);
        }), X("click", De, ()=>{
            p(i, !c(i)), p(n, !1);
        }), A(e, E), dt();
    }
    Pt([
        "click"
    ]);
    var nc = I('<option class="svelte-1n46o8q"> </option>'), ic = Zn('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'), oc = Zn('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'), ac = I('<div class="card" style="text-align: center;"><p class="error"> </p></div>'), sc = I('<div class="card" style="text-align: center;"><p style="color: var(--color-text-secondary);"> </p></div>'), lc = I('<!> <div class="tabs"><button> </button> <button> </button> <button> </button> <button> </button> <button> </button></div> <!>', 1), cc = I('<header style="text-align: center; margin-bottom: 2rem; position: relative;"><div class="header-controls svelte-1n46o8q"><select class="locale-select svelte-1n46o8q"></select> <button class="theme-toggle svelte-1n46o8q"><!></button></div> <h1 style="font-size: 1.5rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;"><img src="./icon.png" alt="" style="width: 32px; height: 32px; border-radius: 6px;"/> KeychainPGP <span style="color: var(--color-text-secondary); font-weight: 400; font-size: 0.875rem;">Web</span></h1> <p style="color: var(--color-text-secondary); font-size: 0.875rem; margin-top: 0.25rem;"> </p></header> <!> <footer style="text-align: center; margin-top: 3rem; color: var(--color-text-secondary); font-size: 0.75rem;"><p> </p></footer>', 1);
    function uc(e, t) {
        _t(t, !0);
        let r = S(!1), n = S(""), i = S("encrypt"), o = S(rt(Xs())), a = S(!el());
        li(c(o));
        function s() {
            p(o, c(o) === "dark" ? "light" : "dark", !0), Js(c(o));
        }
        function l(T) {
            const j = T.target;
            Os(j.value);
        }
        async function u() {
            try {
                await $s(), p(r, !0);
            } catch (T) {
                p(n, y("loading_error", {
                    error: String(T)
                }), !0);
            }
        }
        u();
        var d = cc(), f = et(d), h = v(f), g = v(h);
        vr(g, 21, ()=>Yt, (T)=>T.code, (T, j)=>{
            var z = nc(), ee = v(z), _e = {};
            R(()=>{
                m(ee, c(j).name), _e !== (_e = c(j).code) && (z.value = (z.__value = c(j).code) ?? "");
            }), A(T, z);
        });
        var _;
        Lo(g);
        var w = b(g, 2), N = v(w);
        {
            var P = (T)=>{
                var j = ic();
                A(T, j);
            }, D = (T)=>{
                var j = oc();
                A(T, j);
            };
            $(N, (T)=>{
                c(o) === "light" ? T(P) : T(D, !1);
            });
        }
        var E = b(h, 4), L = v(E), M = b(f, 2);
        {
            var K = (T)=>{
                var j = ac(), z = v(j), ee = v(z);
                R(()=>m(ee, c(n))), A(T, j);
            }, q = (T)=>{
                var j = sc(), z = v(j), ee = v(z);
                R((_e)=>m(ee, _e), [
                    ()=>y("loading")
                ]), A(T, j);
            }, Y = (T)=>{
                var j = lc(), z = et(j);
                {
                    var ee = (G)=>{
                        kl(G, {
                            onDismiss: ()=>p(a, !1)
                        });
                    };
                    $(z, (G)=>{
                        c(a) && G(ee);
                    });
                }
                var _e = b(z, 2), Ne = v(_e);
                let Ye;
                var pt = v(Ne), He = b(Ne, 2);
                let O;
                var W = v(He), U = b(He, 2);
                let x;
                var C = v(U), V = b(U, 2);
                let J;
                var ie = v(V), de = b(V, 2);
                let ge;
                var le = v(de), je = b(_e, 2);
                {
                    var te = (G)=>{
                        Rl(G, {});
                    }, ce = (G)=>{
                        Cl(G, {});
                    }, Q = (G)=>{
                        Kl(G, {});
                    }, ue = (G)=>{
                        Bl(G, {});
                    }, fe = (G)=>{
                        rc(G, {});
                    };
                    $(je, (G)=>{
                        c(i) === "encrypt" ? G(te) : c(i) === "decrypt" ? G(ce, 1) : c(i) === "sign" ? G(Q, 2) : c(i) === "verify" ? G(ue, 3) : c(i) === "keys" && G(fe, 4);
                    });
                }
                R((G, Ee, ye, Te, ae)=>{
                    Ye = gt(Ne, 1, "tab", null, Ye, {
                        active: c(i) === "encrypt"
                    }), m(pt, G), O = gt(He, 1, "tab", null, O, {
                        active: c(i) === "decrypt"
                    }), m(W, Ee), x = gt(U, 1, "tab", null, x, {
                        active: c(i) === "sign"
                    }), m(C, ye), J = gt(V, 1, "tab", null, J, {
                        active: c(i) === "verify"
                    }), m(ie, Te), ge = gt(de, 1, "tab", null, ge, {
                        active: c(i) === "keys"
                    }), m(le, ae);
                }, [
                    ()=>y("tab_encrypt"),
                    ()=>y("tab_decrypt"),
                    ()=>y("tab_sign"),
                    ()=>y("tab_verify"),
                    ()=>y("tab_keys")
                ]), X("click", Ne, ()=>p(i, "encrypt")), X("click", He, ()=>p(i, "decrypt")), X("click", U, ()=>p(i, "sign")), X("click", V, ()=>p(i, "verify")), X("click", de, ()=>p(i, "keys")), A(T, j);
            };
            $(M, (T)=>{
                c(n) ? T(K) : c(r) ? T(Y, !1) : T(q, 1);
            });
        }
        var Se = b(M, 2), De = v(Se), F = v(De);
        R((T, j, z, ee)=>{
            _ !== (_ = T) && (g.value = (g.__value = T) ?? "", Qn(g, T)), Oe(w, "title", j), m(L, z), m(F, ee);
        }, [
            Rs,
            ()=>c(o) === "light" ? y("theme_light") : y("theme_dark"),
            ()=>y("app_subtitle"),
            ()=>y("app_footer")
        ]), X("change", g, l), X("click", w, s), A(e, d), dt();
    }
    Pt([
        "change",
        "click"
    ]);
    async function fc() {
        await Is(), Eo(uc, {
            target: document.getElementById("app")
        });
    }
    fc();
})();
