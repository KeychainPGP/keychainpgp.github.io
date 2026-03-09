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
    const fi = 1, _i = 2, di = 16, vi = 1, pi = 2, we = Symbol(), _n = "http://www.w3.org/1999/xhtml", hi = !1;
    var Dr = Array.isArray, gi = Array.prototype.indexOf, Dt = Array.prototype.includes, dr = Array.from, yi = Object.defineProperty, Wt = Object.getOwnPropertyDescriptor, bi = Object.getOwnPropertyDescriptors, mi = Object.prototype, wi = Array.prototype, dn = Object.getPrototypeOf, Ur = Object.isExtensible;
    const xi = ()=>{};
    function ki(e) {
        for(var t = 0; t < e.length; t++)e[t]();
    }
    function vn() {
        var e, t, r = new Promise((n, i)=>{
            e = n, t = i;
        });
        return {
            promise: r,
            resolve: e,
            reject: t
        };
    }
    const ye = 2, Zt = 4, vr = 8, pn = 1 << 24, ut = 16, Ue = 32, kt = 64, Er = 128, Ke = 512, he = 1024, xe = 2048, $e = 4096, Le = 8192, Be = 16384, Tt = 32768, Mt = 65536, $r = 1 << 17, Ei = 1 << 18, zt = 1 << 19, Si = 1 << 20, rt = 1 << 25, Et = 65536, Sr = 1 << 21, Mr = 1 << 22, at = 1 << 23, Bt = Symbol("$state"), Ai = Symbol(""), Qe = new class extends Error {
        name = "StaleReactionError";
        message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
    }, Ti = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml");
    function Pi() {
        throw new Error("https://svelte.dev/e/async_derived_orphan");
    }
    function Ii(e, t, r) {
        throw new Error("https://svelte.dev/e/each_key_duplicate");
    }
    function Oi(e) {
        throw new Error("https://svelte.dev/e/effect_in_teardown");
    }
    function Ri() {
        throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    }
    function Di(e) {
        throw new Error("https://svelte.dev/e/effect_orphan");
    }
    function Mi() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
    }
    function Li() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
    }
    function Ci() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
    }
    function Ni() {
        throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    }
    function ji() {
        throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
    }
    function zi() {
        console.warn("https://svelte.dev/e/select_multiple_invalid_value");
    }
    function Ki() {
        console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
    }
    function hn(e) {
        return e === this.v;
    }
    function Fi(e, t) {
        return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
    }
    function gn(e) {
        return !Fi(e, this.v);
    }
    let Vi = !1, Ve = null;
    function Lt(e) {
        Ve = e;
    }
    function ft(e, t = !1, r) {
        Ve = {
            p: Ve,
            i: !1,
            c: null,
            e: null,
            s: e,
            x: null,
            l: null
        };
    }
    function _t(e) {
        var t = Ve, r = t.e;
        if (r !== null) {
            t.e = null;
            for (var n of r)jn(n);
        }
        return t.i = !0, Ve = t.p, {};
    }
    function yn() {
        return !0;
    }
    let gt = [];
    function bn() {
        var e = gt;
        gt = [], ki(e);
    }
    function Rt(e) {
        if (gt.length === 0 && !Ut) {
            var t = gt;
            queueMicrotask(()=>{
                t === gt && bn();
            });
        }
        gt.push(e);
    }
    function Gi() {
        for(; gt.length > 0;)bn();
    }
    function mn(e) {
        var t = Y;
        if (t === null) return q.f |= at, e;
        if ((t.f & Tt) === 0 && (t.f & Zt) === 0) throw e;
        ot(e, t);
    }
    function ot(e, t) {
        for(; t !== null;){
            if ((t.f & Er) !== 0) {
                if ((t.f & Tt) === 0) throw e;
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
    const qi = -7169;
    function le(e, t) {
        e.f = e.f & qi | t;
    }
    function Lr(e) {
        (e.f & Ke) !== 0 || e.deps === null ? le(e, he) : le(e, $e);
    }
    function wn(e) {
        if (e !== null) for (const t of e)(t.f & ye) === 0 || (t.f & Et) === 0 || (t.f ^= Et, wn(t.deps));
    }
    function xn(e, t, r) {
        (e.f & xe) !== 0 ? t.add(e) : (e.f & $e) !== 0 && r.add(e), wn(e.deps), le(e, he);
    }
    const Kt = new Set;
    let U = null, qe = null, Ar = null, Ut = !1, mr = !1, Ot = null, ar = null;
    var Yr = 0;
    let Wi = 1;
    class ct {
        id = Wi++;
        current = new Map;
        previous = new Map;
        #e = new Set;
        #l = new Set;
        #t = 0;
        #s = 0;
        #r = null;
        #n = [];
        #i = new Set;
        #o = new Set;
        #a = new Map;
        is_fork = !1;
        #c = !1;
        #u() {
            return this.is_fork || this.#s > 0;
        }
        skip_effect(t) {
            this.#a.has(t) || this.#a.set(t, {
                d: [],
                m: []
            });
        }
        unskip_effect(t) {
            var r = this.#a.get(t);
            if (r) {
                this.#a.delete(t);
                for (var n of r.d)le(n, xe), this.schedule(n);
                for (n of r.m)le(n, $e), this.schedule(n);
            }
        }
        #_() {
            Yr++ > 1e3 && Ui();
            const t = this.#n;
            this.#n = [], this.apply();
            var r = Ot = [], n = [], i = ar = [];
            for (const s of t)this.#d(s, r, n);
            if (U = null, i.length > 0) {
                var o = ct.ensure();
                for (const s of i)o.schedule(s);
            }
            if (Ot = null, ar = null, this.#u()) {
                this.#v(n), this.#v(r);
                for (const [s, l] of this.#a)Sn(s, l);
            } else {
                this.#i.clear(), this.#o.clear();
                for (const s of this.#e)s(this);
                this.#e.clear(), Hr(n), Hr(r), this.#t === 0 && this.#f(), this.#r?.resolve();
            }
            var a = U;
            a !== null && (Kt.add(a), a.#_());
        }
        #d(t, r, n) {
            t.f ^= he;
            for(var i = t.first; i !== null;){
                var o = i.f, a = (o & (Ue | kt)) !== 0, s = a && (o & he) !== 0, l = s || (o & Le) !== 0 || this.#a.has(i);
                if (!l && i.fn !== null) {
                    a ? i.f ^= he : (o & Zt) !== 0 ? r.push(i) : tr(i) && ((o & ut) !== 0 && this.#o.add(i), jt(i));
                    var u = i.first;
                    if (u !== null) {
                        i = u;
                        continue;
                    }
                }
                for(; i !== null;){
                    var f = i.next;
                    if (f !== null) {
                        i = f;
                        break;
                    }
                    i = i.parent;
                }
            }
        }
        #v(t) {
            for(var r = 0; r < t.length; r += 1)xn(t[r], this.#i, this.#o);
        }
        capture(t, r) {
            r !== we && !this.previous.has(t) && this.previous.set(t, r), (t.f & at) === 0 && (this.current.set(t, t.v), qe?.set(t, t.v));
        }
        activate() {
            U = this;
        }
        deactivate() {
            U = null, qe = null;
        }
        flush() {
            try {
                if (mr = !0, U = this, !this.#u()) {
                    for (const t of this.#i)this.#o.delete(t), le(t, xe), this.schedule(t);
                    for (const t of this.#o)le(t, $e), this.schedule(t);
                }
                this.#_();
            } finally{
                Yr = 0, Ar = null, Ot = null, ar = null, mr = !1, U = null, qe = null, st.clear();
            }
        }
        discard() {
            for (const t of this.#l)t(this);
            this.#l.clear();
        }
        #f() {
            if (Kt.size > 1) {
                this.previous.clear();
                var t = U, r = qe, n = !0;
                for (const i of Kt){
                    if (i === this) {
                        n = !1;
                        continue;
                    }
                    const o = [];
                    for (const [s, l] of this.current){
                        if (i.current.has(s)) if (n && l !== i.current.get(s)) i.current.set(s, l);
                        else continue;
                        o.push(s);
                    }
                    if (o.length === 0) continue;
                    const a = [
                        ...i.current.keys()
                    ].filter((s)=>!this.current.has(s));
                    if (a.length > 0) {
                        i.activate();
                        const s = new Set, l = new Map;
                        for (const u of o)kn(u, a, s, l);
                        if (i.#n.length > 0) {
                            i.apply();
                            for (const u of i.#n)i.#d(u, [], []);
                        }
                        i.deactivate();
                    }
                }
                U = t, qe = r;
            }
            this.#a.clear(), Kt.delete(this);
        }
        increment(t) {
            this.#t += 1, t && (this.#s += 1);
        }
        decrement(t, r) {
            this.#t -= 1, t && (this.#s -= 1), !(this.#c || r) && (this.#c = !0, Rt(()=>{
                this.#c = !1, this.flush();
            }));
        }
        oncommit(t) {
            this.#e.add(t);
        }
        ondiscard(t) {
            this.#l.add(t);
        }
        settled() {
            return (this.#r ??= vn()).promise;
        }
        static ensure() {
            if (U === null) {
                const t = U = new ct;
                mr || (Kt.add(U), Ut || Rt(()=>{
                    U === t && t.flush();
                }));
            }
            return U;
        }
        apply() {}
        schedule(t) {
            if (Ar = t, t.b?.is_pending && (t.f & (Zt | vr | pn)) !== 0 && (t.f & Tt) === 0) {
                t.b.defer_effect(t);
                return;
            }
            for(var r = t; r.parent !== null;){
                r = r.parent;
                var n = r.f;
                if (Ot !== null && r === Y && (q === null || (q.f & ye) === 0)) return;
                if ((n & (kt | Ue)) !== 0) {
                    if ((n & he) === 0) return;
                    r.f ^= he;
                }
            }
            this.#n.push(r);
        }
    }
    function Bi(e) {
        var t = Ut;
        Ut = !0;
        try {
            for(var r;;){
                if (Gi(), U === null) return r;
                U.flush();
            }
        } finally{
            Ut = t;
        }
    }
    function Ui() {
        try {
            Mi();
        } catch (e) {
            ot(e, Ar);
        }
    }
    let Ze = null;
    function Hr(e) {
        var t = e.length;
        if (t !== 0) {
            for(var r = 0; r < t;){
                var n = e[r++];
                if ((n.f & (Be | Le)) === 0 && tr(n) && (Ze = new Set, jt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Fn(n), Ze?.size > 0)) {
                    st.clear();
                    for (const i of Ze){
                        if ((i.f & (Be | Le)) !== 0) continue;
                        const o = [
                            i
                        ];
                        let a = i.parent;
                        for(; a !== null;)Ze.has(a) && (Ze.delete(a), o.push(a)), a = a.parent;
                        for(let s = o.length - 1; s >= 0; s--){
                            const l = o[s];
                            (l.f & (Be | Le)) === 0 && jt(l);
                        }
                    }
                    Ze.clear();
                }
            }
            Ze = null;
        }
    }
    function kn(e, t, r, n) {
        if (!r.has(e) && (r.add(e), e.reactions !== null)) for (const i of e.reactions){
            const o = i.f;
            (o & ye) !== 0 ? kn(i, t, r, n) : (o & (Mr | ut)) !== 0 && (o & xe) === 0 && En(i, t, n) && (le(i, xe), Cr(i));
        }
    }
    function En(e, t, r) {
        const n = r.get(e);
        if (n !== void 0) return n;
        if (e.deps !== null) for (const i of e.deps){
            if (Dt.call(t, i)) return !0;
            if ((i.f & ye) !== 0 && En(i, t, r)) return r.set(i, !0), !0;
        }
        return r.set(e, !1), !1;
    }
    function Cr(e) {
        U.schedule(e);
    }
    function Sn(e, t) {
        if (!((e.f & Ue) !== 0 && (e.f & he) !== 0)) {
            (e.f & xe) !== 0 ? t.d.push(e) : (e.f & $e) !== 0 && t.m.push(e), le(e, he);
            for(var r = e.first; r !== null;)Sn(r, t), r = r.next;
        }
    }
    function $i(e) {
        let t = 0, r = St(0), n;
        return ()=>{
            zr() && (c(r), zn(()=>(t === 0 && (n = Hn(()=>e(()=>$t(r)))), t += 1, ()=>{
                    Rt(()=>{
                        t -= 1, t === 0 && (n?.(), n = void 0, $t(r));
                    });
                })));
        };
    }
    var Yi = Mt | zt;
    function Hi(e, t, r, n) {
        new Xi(e, t, r, n);
    }
    class Xi {
        parent;
        is_pending = !1;
        transform_error;
        #e;
        #l = null;
        #t;
        #s;
        #r;
        #n = null;
        #i = null;
        #o = null;
        #a = null;
        #c = 0;
        #u = 0;
        #_ = !1;
        #d = new Set;
        #v = new Set;
        #f = null;
        #b = $i(()=>(this.#f = St(this.#c), ()=>{
                this.#f = null;
            }));
        constructor(t, r, n, i){
            this.#e = t, this.#t = r, this.#s = (o)=>{
                var a = Y;
                a.b = this, a.f |= Er, n(o);
            }, this.parent = Y.b, this.transform_error = i ?? this.parent?.transform_error ?? ((o)=>o), this.#r = Kr(()=>{
                this.#g();
            }, Yi);
        }
        #m() {
            try {
                this.#n = ze(()=>this.#s(this.#e));
            } catch (t) {
                this.error(t);
            }
        }
        #w(t) {
            const r = this.#t.failed;
            r && (this.#o = ze(()=>{
                r(this.#e, ()=>t, ()=>()=>{});
            }));
        }
        #x() {
            const t = this.#t.pending;
            if (t) {
                this.is_pending = !0, this.#i = ze(()=>t(this.#e));
                var r = U;
                Rt(()=>{
                    var n = this.#a = document.createDocumentFragment(), i = lt();
                    n.append(i), this.#n = this.#h(()=>ze(()=>this.#s(i))), this.#u === 0 && (this.#e.before(n), this.#a = null, wt(this.#i, ()=>{
                        this.#i = null;
                    }), this.#p(r));
                });
            }
        }
        #g() {
            var t = U;
            try {
                if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#c = 0, this.#n = ze(()=>{
                    this.#s(this.#e);
                }), this.#u > 0) {
                    var r = this.#a = document.createDocumentFragment();
                    Gr(this.#n, r);
                    const n = this.#t.pending;
                    this.#i = ze(()=>n(this.#e));
                } else this.#p(t);
            } catch (n) {
                this.error(n);
            }
        }
        #p(t) {
            this.is_pending = !1;
            for (const r of this.#d)le(r, xe), t.schedule(r);
            for (const r of this.#v)le(r, $e), t.schedule(r);
            this.#d.clear(), this.#v.clear();
        }
        defer_effect(t) {
            xn(t, this.#d, this.#v);
        }
        is_rendered() {
            return !this.is_pending && (!this.parent || this.parent.is_rendered());
        }
        has_pending_snippet() {
            return !!this.#t.pending;
        }
        #h(t) {
            var r = Y, n = q, i = Ve;
            Xe(this.#r), Ge(this.#r), Lt(this.#r.ctx);
            try {
                return ct.ensure(), t();
            } catch (o) {
                return mn(o), null;
            } finally{
                Xe(r), Ge(n), Lt(i);
            }
        }
        #y(t, r) {
            if (!this.has_pending_snippet()) {
                this.parent && this.parent.#y(t, r);
                return;
            }
            this.#u += t, this.#u === 0 && (this.#p(r), this.#i && wt(this.#i, ()=>{
                this.#i = null;
            }), this.#a && (this.#e.before(this.#a), this.#a = null));
        }
        update_pending_count(t, r) {
            this.#y(t, r), this.#c += t, !(!this.#f || this.#_) && (this.#_ = !0, Rt(()=>{
                this.#_ = !1, this.#f && Ct(this.#f, this.#c);
            }));
        }
        get_effect_pending() {
            return this.#b(), c(this.#f);
        }
        error(t) {
            var r = this.#t.onerror;
            let n = this.#t.failed;
            if (!r && !n) throw t;
            this.#n && (Re(this.#n), this.#n = null), this.#i && (Re(this.#i), this.#i = null), this.#o && (Re(this.#o), this.#o = null);
            var i = !1, o = !1;
            const a = ()=>{
                if (i) {
                    Ki();
                    return;
                }
                i = !0, o && ji(), this.#o !== null && wt(this.#o, ()=>{
                    this.#o = null;
                }), this.#h(()=>{
                    this.#g();
                });
            }, s = (l)=>{
                try {
                    o = !0, r?.(l, a), o = !1;
                } catch (u) {
                    ot(u, this.#r && this.#r.parent);
                }
                n && (this.#o = this.#h(()=>{
                    try {
                        return ze(()=>{
                            var u = Y;
                            u.b = this, u.f |= Er, n(this.#e, ()=>l, ()=>a);
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
    function Ji(e, t, r, n) {
        const i = Tn;
        var o = e.filter((g)=>!g.settled);
        if (r.length === 0 && o.length === 0) {
            n(t.map(i));
            return;
        }
        var a = Y, s = Zi(), l = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((g)=>g.promise)) : null;
        function u(g) {
            s();
            try {
                n(g);
            } catch (p) {
                (a.f & Be) === 0 && ot(p, a);
            }
            ur();
        }
        if (r.length === 0) {
            l.then(()=>u(t.map(i)));
            return;
        }
        var f = An();
        function d() {
            Promise.all(r.map((g)=>Qi(g))).then((g)=>u([
                    ...t.map(i),
                    ...g
                ])).catch((g)=>ot(g, a)).finally(()=>f());
        }
        l ? l.then(()=>{
            s(), d(), ur();
        }) : d();
    }
    function Zi() {
        var e = Y, t = q, r = Ve, n = U;
        return function(o = !0) {
            Xe(e), Ge(t), Lt(r), o && (e.f & Be) === 0 && (n?.activate(), n?.apply());
        };
    }
    function ur(e = !0) {
        Xe(null), Ge(null), Lt(null), e && U?.deactivate();
    }
    function An() {
        var e = Y.b, t = U, r = e.is_rendered();
        return e.update_pending_count(1, t), t.increment(r), (n = !1)=>{
            e.update_pending_count(-1, t), t.decrement(r, n);
        };
    }
    function Tn(e) {
        var t = ye | xe, r = q !== null && (q.f & ye) !== 0 ? q : null;
        return Y !== null && (Y.f |= zt), {
            ctx: Ve,
            deps: null,
            effects: null,
            equals: hn,
            f: t,
            fn: e,
            reactions: null,
            rv: 0,
            v: we,
            wv: 0,
            parent: r ?? Y,
            ac: null
        };
    }
    function Qi(e, t, r) {
        let n = Y;
        n === null && Pi();
        var i = void 0, o = St(we), a = !q, s = new Map;
        return go(()=>{
            var l = Y, u = vn();
            i = u.promise;
            try {
                Promise.resolve(e()).then(u.resolve, u.reject).finally(ur);
            } catch (p) {
                u.reject(p), ur();
            }
            var f = U;
            if (a) {
                if ((l.f & Tt) !== 0) var d = An();
                if (n.b.is_rendered()) s.get(f)?.reject(Qe), s.delete(f);
                else {
                    for (const p of s.values())p.reject(Qe);
                    s.clear();
                }
                s.set(f, u);
            }
            const g = (p, _ = void 0)=>{
                if (d) {
                    var x = _ === Qe;
                    d(x);
                }
                if (!(_ === Qe || (l.f & Be) !== 0)) {
                    if (f.activate(), _) o.f |= at, Ct(o, _);
                    else {
                        (o.f & at) !== 0 && (o.f ^= at), Ct(o, p);
                        for (const [j, T] of s){
                            if (s.delete(j), j === f) break;
                            T.reject(Qe);
                        }
                    }
                    f.deactivate();
                }
            };
            u.promise.then(g, (p)=>g(null, p || "unknown"));
        }), Nn(()=>{
            for (const l of s.values())l.reject(Qe);
        }), new Promise((l)=>{
            function u(f) {
                function d() {
                    f === i ? l(o) : u(i);
                }
                f.then(d, d);
            }
            u(i);
        });
    }
    function eo(e) {
        const t = Tn(e);
        return t.equals = gn, t;
    }
    function to(e) {
        var t = e.effects;
        if (t !== null) {
            e.effects = null;
            for(var r = 0; r < t.length; r += 1)Re(t[r]);
        }
    }
    function ro(e) {
        for(var t = e.parent; t !== null;){
            if ((t.f & ye) === 0) return (t.f & Be) === 0 ? t : null;
            t = t.parent;
        }
        return null;
    }
    function Nr(e) {
        var t, r = Y;
        Xe(ro(e));
        try {
            e.f &= ~Et, to(e), t = Un(e);
        } finally{
            Xe(r);
        }
        return t;
    }
    function Pn(e) {
        var t = Nr(e);
        if (!e.equals(t) && (e.wv = Wn(), (!U?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
            le(e, he);
            return;
        }
        At || (qe !== null ? (zr() || U?.is_fork) && qe.set(e, t) : Lr(e));
    }
    function no(e) {
        if (e.effects !== null) for (const t of e.effects)(t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Qe), t.teardown = xi, t.ac = null, Qt(t, 0), Fr(t));
    }
    function In(e) {
        if (e.effects !== null) for (const t of e.effects)t.teardown && jt(t);
    }
    let Tr = new Set;
    const st = new Map;
    let On = !1;
    function St(e, t) {
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
        const r = St(e);
        return mo(r), r;
    }
    function io(e, t = !1, r = !0) {
        const n = St(e);
        return t || (n.equals = gn), n;
    }
    function h(e, t, r = !1) {
        q !== null && (!We || (q.f & $r) !== 0) && yn() && (q.f & (ye | ut | Mr | $r)) !== 0 && (Fe === null || !Dt.call(Fe, e)) && Ni();
        let n = r ? nt(t) : t;
        return Ct(e, n, ar);
    }
    function Ct(e, t, r = null) {
        if (!e.equals(t)) {
            var n = e.v;
            At ? st.set(e, t) : st.set(e, n), e.v = t;
            var i = ct.ensure();
            if (i.capture(e, n), (e.f & ye) !== 0) {
                const o = e;
                (e.f & xe) !== 0 && Nr(o), Lr(o);
            }
            e.wv = Wn(), Rn(e, xe, r), Y !== null && (Y.f & he) !== 0 && (Y.f & (Ue | kt)) === 0 && (je === null ? wo([
                e
            ]) : je.push(e)), !i.is_fork && Tr.size > 0 && !On && oo();
        }
        return t;
    }
    function oo() {
        On = !1;
        for (const e of Tr)(e.f & he) !== 0 && le(e, $e), tr(e) && jt(e);
        Tr.clear();
    }
    function fr(e, t = 1) {
        var r = c(e), n = t === 1 ? r++ : r--;
        return h(e, r), n;
    }
    function $t(e) {
        h(e, e.v + 1);
    }
    function Rn(e, t, r) {
        var n = e.reactions;
        if (n !== null) for(var i = n.length, o = 0; o < i; o++){
            var a = n[o], s = a.f, l = (s & xe) === 0;
            if (l && le(a, t), (s & ye) !== 0) {
                var u = a;
                qe?.delete(u), (s & Et) === 0 && (s & Ke && (a.f |= Et), Rn(u, $e, r));
            } else if (l) {
                var f = a;
                (s & ut) !== 0 && Ze !== null && Ze.add(f), r !== null ? r.push(f) : Cr(f);
            }
        }
    }
    function nt(e) {
        if (typeof e != "object" || e === null || Bt in e) return e;
        const t = dn(e);
        if (t !== mi && t !== wi) return e;
        var r = new Map, n = Dr(e), i = S(0), o = xt, a = (s)=>{
            if (xt === o) return s();
            var l = q, u = xt;
            Ge(null), en(o);
            var f = s();
            return Ge(l), en(u), f;
        };
        return n && r.set("length", S(e.length)), new Proxy(e, {
            defineProperty (s, l, u) {
                (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Li();
                var f = r.get(l);
                return f === void 0 ? a(()=>{
                    var d = S(u.value);
                    return r.set(l, d), d;
                }) : h(f, u.value, !0), !0;
            },
            deleteProperty (s, l) {
                var u = r.get(l);
                if (u === void 0) {
                    if (l in s) {
                        const f = a(()=>S(we));
                        r.set(l, f), $t(i);
                    }
                } else h(u, we), $t(i);
                return !0;
            },
            get (s, l, u) {
                if (l === Bt) return e;
                var f = r.get(l), d = l in s;
                if (f === void 0 && (!d || Wt(s, l)?.writable) && (f = a(()=>{
                    var p = nt(d ? s[l] : we), _ = S(p);
                    return _;
                }), r.set(l, f)), f !== void 0) {
                    var g = c(f);
                    return g === we ? void 0 : g;
                }
                return Reflect.get(s, l, u);
            },
            getOwnPropertyDescriptor (s, l) {
                var u = Reflect.getOwnPropertyDescriptor(s, l);
                if (u && "value" in u) {
                    var f = r.get(l);
                    f && (u.value = c(f));
                } else if (u === void 0) {
                    var d = r.get(l), g = d?.v;
                    if (d !== void 0 && g !== we) return {
                        enumerable: !0,
                        configurable: !0,
                        value: g,
                        writable: !0
                    };
                }
                return u;
            },
            has (s, l) {
                if (l === Bt) return !0;
                var u = r.get(l), f = u !== void 0 && u.v !== we || Reflect.has(s, l);
                if (u !== void 0 || Y !== null && (!f || Wt(s, l)?.writable)) {
                    u === void 0 && (u = a(()=>{
                        var g = f ? nt(s[l]) : we, p = S(g);
                        return p;
                    }), r.set(l, u));
                    var d = c(u);
                    if (d === we) return !1;
                }
                return f;
            },
            set (s, l, u, f) {
                var d = r.get(l), g = l in s;
                if (n && l === "length") for(var p = u; p < d.v; p += 1){
                    var _ = r.get(p + "");
                    _ !== void 0 ? h(_, we) : p in s && (_ = a(()=>S(we)), r.set(p + "", _));
                }
                if (d === void 0) (!g || Wt(s, l)?.writable) && (d = a(()=>S(void 0)), h(d, nt(u)), r.set(l, d));
                else {
                    g = d.v !== we;
                    var x = a(()=>nt(u));
                    h(d, x);
                }
                var j = Reflect.getOwnPropertyDescriptor(s, l);
                if (j?.set && j.set.call(f, u), !g) {
                    if (n && typeof l == "string") {
                        var T = r.get("length"), P = Number(l);
                        Number.isInteger(P) && P >= T.v && h(T, P + 1);
                    }
                    $t(i);
                }
                return !0;
            },
            ownKeys (s) {
                c(i);
                var l = Reflect.ownKeys(s).filter((d)=>{
                    var g = r.get(d);
                    return g === void 0 || g.v !== we;
                });
                for (var [u, f] of r)f.v !== we && !(u in s) && l.push(u);
                return l;
            },
            setPrototypeOf () {
                Ci();
            }
        });
    }
    function Xr(e) {
        try {
            if (e !== null && typeof e == "object" && Bt in e) return e[Bt];
        } catch  {}
        return e;
    }
    function ao(e, t) {
        return Object.is(Xr(e), Xr(t));
    }
    var Jr, Dn, Mn, Ln;
    function so() {
        if (Jr === void 0) {
            Jr = window, Dn = /Firefox/.test(navigator.userAgent);
            var e = Element.prototype, t = Node.prototype, r = Text.prototype;
            Mn = Wt(t, "firstChild").get, Ln = Wt(t, "nextSibling").get, Ur(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ur(r) && (r.__t = void 0);
        }
    }
    function lt(e = "") {
        return document.createTextNode(e);
    }
    function Nt(e) {
        return Mn.call(e);
    }
    function er(e) {
        return Ln.call(e);
    }
    function v(e, t) {
        return Nt(e);
    }
    function et(e, t = !1) {
        {
            var r = Nt(e);
            return r instanceof Comment && r.data === "" ? er(r) : r;
        }
    }
    function b(e, t = 1, r = !1) {
        let n = e;
        for(; t--;)n = er(n);
        return n;
    }
    function lo(e) {
        e.textContent = "";
    }
    function Cn() {
        return !1;
    }
    function co(e, t, r) {
        return document.createElementNS(_n, e, void 0);
    }
    let Zr = !1;
    function uo() {
        Zr || (Zr = !0, document.addEventListener("reset", (e)=>{
            Promise.resolve().then(()=>{
                if (!e.defaultPrevented) for (const t of e.target.elements)t.__on_r?.();
            });
        }, {
            capture: !0
        }));
    }
    function jr(e) {
        var t = q, r = Y;
        Ge(null), Xe(null);
        try {
            return e();
        } finally{
            Ge(t), Xe(r);
        }
    }
    function fo(e, t, r, n = r) {
        e.addEventListener(t, ()=>jr(r));
        const i = e.__on_r;
        i ? e.__on_r = ()=>{
            i(), n(!0);
        } : e.__on_r = ()=>n(!0), uo();
    }
    function _o(e) {
        Y === null && (q === null && Di(), Ri()), At && Oi();
    }
    function vo(e, t) {
        var r = t.last;
        r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
    }
    function dt(e, t) {
        var r = Y;
        r !== null && (r.f & Le) !== 0 && (e |= Le);
        var n = {
            ctx: Ve,
            deps: null,
            nodes: null,
            f: e | xe | Ke,
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
        if ((e & Zt) !== 0) Ot !== null ? Ot.push(n) : ct.ensure().schedule(n);
        else if (t !== null) {
            try {
                jt(n);
            } catch (a) {
                throw Re(n), a;
            }
            i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && (i.f & zt) === 0 && (i = i.first, (e & ut) !== 0 && (e & Mt) !== 0 && i !== null && (i.f |= Mt));
        }
        if (i !== null && (i.parent = r, r !== null && vo(i, r), q !== null && (q.f & ye) !== 0 && (e & kt) === 0)) {
            var o = q;
            (o.effects ??= []).push(i);
        }
        return n;
    }
    function zr() {
        return q !== null && !We;
    }
    function Nn(e) {
        const t = dt(vr, null);
        return le(t, he), t.teardown = e, t;
    }
    function po(e) {
        _o();
        var t = Y.f, r = !q && (t & Ue) !== 0 && (t & Tt) === 0;
        if (r) {
            var n = Ve;
            (n.e ??= []).push(e);
        } else return jn(e);
    }
    function jn(e) {
        return dt(Zt | Si, e);
    }
    function ho(e) {
        ct.ensure();
        const t = dt(kt | zt, e);
        return (r = {})=>new Promise((n)=>{
                r.outro ? wt(t, ()=>{
                    Re(t), n(void 0);
                }) : (Re(t), n(void 0));
            });
    }
    function go(e) {
        return dt(Mr | zt, e);
    }
    function zn(e, t = 0) {
        return dt(vr | t, e);
    }
    function M(e, t = [], r = [], n = []) {
        Ji(n, t, r, (i)=>{
            dt(vr, ()=>e(...i.map(c)));
        });
    }
    function Kr(e, t = 0) {
        var r = dt(ut | t, e);
        return r;
    }
    function ze(e) {
        return dt(Ue | zt, e);
    }
    function Kn(e) {
        var t = e.teardown;
        if (t !== null) {
            const r = At, n = q;
            Qr(!0), Ge(null);
            try {
                t.call(null);
            } finally{
                Qr(r), Ge(n);
            }
        }
    }
    function Fr(e, t = !1) {
        var r = e.first;
        for(e.first = e.last = null; r !== null;){
            const i = r.ac;
            i !== null && jr(()=>{
                i.abort(Qe);
            });
            var n = r.next;
            (r.f & kt) !== 0 ? r.parent = null : Re(r, t), r = n;
        }
    }
    function yo(e) {
        for(var t = e.first; t !== null;){
            var r = t.next;
            (t.f & Ue) === 0 && Re(t), t = r;
        }
    }
    function Re(e, t = !0) {
        var r = !1;
        (t || (e.f & Ei) !== 0) && e.nodes !== null && e.nodes.end !== null && (bo(e.nodes.start, e.nodes.end), r = !0), Fr(e, t && !r), Qt(e, 0), le(e, Be);
        var n = e.nodes && e.nodes.t;
        if (n !== null) for (const o of n)o.stop();
        Kn(e);
        var i = e.parent;
        i !== null && i.first !== null && Fn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
    }
    function bo(e, t) {
        for(; e !== null;){
            var r = e === t ? null : er(e);
            e.remove(), e = r;
        }
    }
    function Fn(e) {
        var t = e.parent, r = e.prev, n = e.next;
        r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
    }
    function wt(e, t, r = !0) {
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
        if ((e.f & Le) === 0) {
            e.f ^= Le;
            var n = e.nodes && e.nodes.t;
            if (n !== null) for (const s of n)(s.is_global || r) && t.push(s);
            for(var i = e.first; i !== null;){
                var o = i.next, a = (i.f & Mt) !== 0 || (i.f & Ue) !== 0 && (e.f & ut) !== 0;
                Vn(i, t, a ? r : !1), i = o;
            }
        }
    }
    function Vr(e) {
        Gn(e, !0);
    }
    function Gn(e, t) {
        if ((e.f & Le) !== 0) {
            e.f ^= Le, (e.f & he) === 0 && (le(e, xe), ct.ensure().schedule(e));
            for(var r = e.first; r !== null;){
                var n = r.next, i = (r.f & Mt) !== 0 || (r.f & Ue) !== 0;
                Gn(r, i ? t : !1), r = n;
            }
            var o = e.nodes && e.nodes.t;
            if (o !== null) for (const a of o)(a.is_global || t) && a.in();
        }
    }
    function Gr(e, t) {
        if (e.nodes) for(var r = e.nodes.start, n = e.nodes.end; r !== null;){
            var i = r === n ? null : er(r);
            t.append(r), r = i;
        }
    }
    let sr = !1, At = !1;
    function Qr(e) {
        At = e;
    }
    let q = null, We = !1;
    function Ge(e) {
        q = e;
    }
    let Y = null;
    function Xe(e) {
        Y = e;
    }
    let Fe = null;
    function mo(e) {
        q !== null && (Fe === null ? Fe = [
            e
        ] : Fe.push(e));
    }
    let Pe = null, De = 0, je = null;
    function wo(e) {
        je = e;
    }
    let qn = 1, yt = 0, xt = yt;
    function en(e) {
        xt = e;
    }
    function Wn() {
        return ++qn;
    }
    function tr(e) {
        var t = e.f;
        if ((t & xe) !== 0) return !0;
        if (t & ye && (e.f &= ~Et), (t & $e) !== 0) {
            for(var r = e.deps, n = r.length, i = 0; i < n; i++){
                var o = r[i];
                if (tr(o) && Pn(o), o.wv > e.wv) return !0;
            }
            (t & Ke) !== 0 && qe === null && le(e, he);
        }
        return !1;
    }
    function Bn(e, t, r = !0) {
        var n = e.reactions;
        if (n !== null && !(Fe !== null && Dt.call(Fe, e))) for(var i = 0; i < n.length; i++){
            var o = n[i];
            (o.f & ye) !== 0 ? Bn(o, t, !1) : t === o && (r ? le(o, xe) : (o.f & he) !== 0 && le(o, $e), Cr(o));
        }
    }
    function Un(e) {
        var t = Pe, r = De, n = je, i = q, o = Fe, a = Ve, s = We, l = xt, u = e.f;
        Pe = null, De = 0, je = null, q = (u & (Ue | kt)) === 0 ? e : null, Fe = null, Lt(e.ctx), We = !1, xt = ++yt, e.ac !== null && (jr(()=>{
            e.ac.abort(Qe);
        }), e.ac = null);
        try {
            e.f |= Sr;
            var f = e.fn, d = f();
            e.f |= Tt;
            var g = e.deps, p = U?.is_fork;
            if (Pe !== null) {
                var _;
                if (p || Qt(e, De), g !== null && De > 0) for(g.length = De + Pe.length, _ = 0; _ < Pe.length; _++)g[De + _] = Pe[_];
                else e.deps = g = Pe;
                if (zr() && (e.f & Ke) !== 0) for(_ = De; _ < g.length; _++)(g[_].reactions ??= []).push(e);
            } else !p && g !== null && De < g.length && (Qt(e, De), g.length = De);
            if (yn() && je !== null && !We && g !== null && (e.f & (ye | $e | xe)) === 0) for(_ = 0; _ < je.length; _++)Bn(je[_], e);
            if (i !== null && i !== e) {
                if (yt++, i.deps !== null) for(let x = 0; x < r; x += 1)i.deps[x].rv = yt;
                if (t !== null) for (const x of t)x.rv = yt;
                je !== null && (n === null ? n = je : n.push(...je));
            }
            return (e.f & at) !== 0 && (e.f ^= at), d;
        } catch (x) {
            return mn(x);
        } finally{
            e.f ^= Sr, Pe = t, De = r, je = n, q = i, Fe = o, Lt(a), We = s, xt = l;
        }
    }
    function xo(e, t) {
        let r = t.reactions;
        if (r !== null) {
            var n = gi.call(r, e);
            if (n !== -1) {
                var i = r.length - 1;
                i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
            }
        }
        if (r === null && (t.f & ye) !== 0 && (Pe === null || !Dt.call(Pe, t))) {
            var o = t;
            (o.f & Ke) !== 0 && (o.f ^= Ke, o.f &= ~Et), Lr(o), no(o), Qt(o, 0);
        }
    }
    function Qt(e, t) {
        var r = e.deps;
        if (r !== null) for(var n = t; n < r.length; n++)xo(e, r[n]);
    }
    function jt(e) {
        var t = e.f;
        if ((t & Be) === 0) {
            le(e, he);
            var r = Y, n = sr;
            Y = e, sr = !0;
            try {
                (t & (ut | pn)) !== 0 ? yo(e) : Fr(e), Kn(e);
                var i = Un(e);
                e.teardown = typeof i == "function" ? i : null, e.wv = qn;
                var o;
                hi && Vi && (e.f & xe) !== 0 && e.deps;
            } finally{
                sr = n, Y = r;
            }
        }
    }
    async function ko() {
        await Promise.resolve(), Bi();
    }
    function c(e) {
        var t = e.f, r = (t & ye) !== 0;
        if (q !== null && !We) {
            var n = Y !== null && (Y.f & Be) !== 0;
            if (!n && (Fe === null || !Dt.call(Fe, e))) {
                var i = q.deps;
                if ((q.f & Sr) !== 0) e.rv < yt && (e.rv = yt, Pe === null && i !== null && i[De] === e ? De++ : Pe === null ? Pe = [
                    e
                ] : Pe.push(e));
                else {
                    (q.deps ??= []).push(e);
                    var o = e.reactions;
                    o === null ? e.reactions = [
                        q
                    ] : Dt.call(o, q) || o.push(q);
                }
            }
        }
        if (At && st.has(e)) return st.get(e);
        if (r) {
            var a = e;
            if (At) {
                var s = a.v;
                return ((a.f & he) === 0 && a.reactions !== null || Yn(a)) && (s = Nr(a)), st.set(a, s), s;
            }
            var l = (a.f & Ke) === 0 && !We && q !== null && (sr || (q.f & Ke) !== 0), u = (a.f & Tt) === 0;
            tr(a) && (l && (a.f |= Ke), Pn(a)), l && !u && (In(a), $n(a));
        }
        if (qe?.has(e)) return qe.get(e);
        if ((e.f & at) !== 0) throw e.v;
        return e.v;
    }
    function $n(e) {
        if (e.f |= Ke, e.deps !== null) for (const t of e.deps)(t.reactions ??= []).push(e), (t.f & ye) !== 0 && (t.f & Ke) === 0 && (In(t), $n(t));
    }
    function Yn(e) {
        if (e.v === we) return !0;
        if (e.deps === null) return !1;
        for (const t of e.deps)if (st.has(t) || (t.f & ye) !== 0 && Yn(t)) return !0;
        return !1;
    }
    function Hn(e) {
        var t = We;
        try {
            return We = !0, e();
        } finally{
            We = t;
        }
    }
    const Vt = Symbol("events"), Xn = new Set, Pr = new Set;
    function J(e, t, r) {
        (t[Vt] ??= {})[e] = r;
    }
    function Pt(e) {
        for(var t = 0; t < e.length; t++)Xn.add(e[t]);
        for (var r of Pr)r(e);
    }
    let tn = null;
    function rn(e) {
        var t = this, r = t.ownerDocument, n = e.type, i = e.composedPath?.() || [], o = i[0] || e.target;
        tn = e;
        var a = 0, s = tn === e && e[Vt];
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
            var f = q, d = Y;
            Ge(null), Xe(null);
            try {
                for(var g, p = []; o !== null;){
                    var _ = o.assignedSlot || o.parentNode || o.host || null;
                    try {
                        var x = o[Vt]?.[n];
                        x != null && (!o.disabled || e.target === o) && x.call(o, e);
                    } catch (j) {
                        g ? p.push(j) : g = j;
                    }
                    if (e.cancelBubble || _ === t || _ === null) break;
                    o = _;
                }
                if (g) {
                    for (let j of p)queueMicrotask(()=>{
                        throw j;
                    });
                    throw g;
                }
            } finally{
                e[Vt] = t, delete e.currentTarget, Ge(f), Xe(d);
            }
        }
    }
    const Eo = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
        createHTML: (e)=>e
    });
    function So(e) {
        return Eo?.createHTML(e) ?? e;
    }
    function Jn(e) {
        var t = co("template");
        return t.innerHTML = So(e.replaceAll("<!>", "<!---->")), t.content;
    }
    function _r(e, t) {
        var r = Y;
        r.nodes === null && (r.nodes = {
            start: e,
            end: t,
            a: null,
            t: null
        });
    }
    function R(e, t) {
        var r = (t & vi) !== 0, n = (t & pi) !== 0, i, o = !e.startsWith("<!>");
        return ()=>{
            i === void 0 && (i = Jn(o ? e : "<!>" + e), r || (i = Nt(i)));
            var a = n || Dn ? document.importNode(i, !0) : i.cloneNode(!0);
            if (r) {
                var s = Nt(a), l = a.lastChild;
                _r(s, l);
            } else _r(a, a);
            return a;
        };
    }
    function Ao(e, t, r = "svg") {
        var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
        return ()=>{
            if (!o) {
                var a = Jn(i), s = Nt(a);
                o = Nt(s);
            }
            var l = o.cloneNode(!0);
            return _r(l, l), l;
        };
    }
    function Zn(e, t) {
        return Ao(e, t, "svg");
    }
    function To() {
        var e = document.createDocumentFragment(), t = document.createComment(""), r = lt();
        return e.append(t, r), _r(t, r), e;
    }
    function I(e, t) {
        e !== null && e.before(t);
    }
    const Po = [
        "touchstart",
        "touchmove"
    ];
    function Io(e) {
        return Po.includes(e);
    }
    function m(e, t) {
        var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
        r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = `${r}`);
    }
    function Oo(e, t) {
        return Ro(e, t);
    }
    const nr = new Map;
    function Ro(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: a = !0, transformError: s }) {
        so();
        var l = void 0, u = ho(()=>{
            var f = r ?? t.appendChild(lt());
            Hi(f, {
                pending: ()=>{}
            }, (p)=>{
                ft({});
                var _ = Ve;
                o && (_.c = o), i && (n.$$events = i), l = e(p, n) || {}, _t();
            }, s);
            var d = new Set, g = (p)=>{
                for(var _ = 0; _ < p.length; _++){
                    var x = p[_];
                    if (!d.has(x)) {
                        d.add(x);
                        var j = Io(x);
                        for (const E of [
                            t,
                            document
                        ]){
                            var T = nr.get(E);
                            T === void 0 && (T = new Map, nr.set(E, T));
                            var P = T.get(x);
                            P === void 0 ? (E.addEventListener(x, rn, {
                                passive: j
                            }), T.set(x, 1)) : T.set(x, P + 1);
                        }
                    }
                }
            };
            return g(dr(Xn)), Pr.add(g), ()=>{
                for (var p of d)for (const j of [
                    t,
                    document
                ]){
                    var _ = nr.get(j), x = _.get(p);
                    --x == 0 ? (j.removeEventListener(p, rn), _.delete(p), _.size === 0 && nr.delete(j)) : _.set(p, x);
                }
                Pr.delete(g), f !== r && f.parentNode?.removeChild(f);
            };
        });
        return Do.set(l, u), l;
    }
    let Do = new WeakMap;
    class Mo {
        anchor;
        #e = new Map;
        #l = new Map;
        #t = new Map;
        #s = new Set;
        #r = !0;
        constructor(t, r = !0){
            this.anchor = t, this.#r = r;
        }
        #n = (t)=>{
            if (this.#e.has(t)) {
                var r = this.#e.get(t), n = this.#l.get(r);
                if (n) Vr(n), this.#s.delete(r);
                else {
                    var i = this.#t.get(r);
                    i && (this.#l.set(r, i.effect), this.#t.delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
                }
                for (const [o, a] of this.#e){
                    if (this.#e.delete(o), o === t) break;
                    const s = this.#t.get(a);
                    s && (Re(s.effect), this.#t.delete(a));
                }
                for (const [o, a] of this.#l){
                    if (o === r || this.#s.has(o)) continue;
                    const s = ()=>{
                        if (Array.from(this.#e.values()).includes(o)) {
                            var u = document.createDocumentFragment();
                            Gr(a, u), u.append(lt()), this.#t.set(o, {
                                effect: a,
                                fragment: u
                            });
                        } else Re(a);
                        this.#s.delete(o), this.#l.delete(o);
                    };
                    this.#r || !n ? (this.#s.add(o), wt(a, s, !1)) : s();
                }
            }
        };
        #i = (t)=>{
            this.#e.delete(t);
            const r = Array.from(this.#e.values());
            for (const [n, i] of this.#t)r.includes(n) || (Re(i.effect), this.#t.delete(n));
        };
        ensure(t, r) {
            var n = U, i = Cn();
            if (r && !this.#l.has(t) && !this.#t.has(t)) if (i) {
                var o = document.createDocumentFragment(), a = lt();
                o.append(a), this.#t.set(t, {
                    effect: ze(()=>r(a)),
                    fragment: o
                });
            } else this.#l.set(t, ze(()=>r(this.anchor)));
            if (this.#e.set(n, t), i) {
                for (const [s, l] of this.#l)s === t ? n.unskip_effect(l) : n.skip_effect(l);
                for (const [s, l] of this.#t)s === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
                n.oncommit(this.#n), n.ondiscard(this.#i);
            } else this.#n(n);
        }
    }
    function X(e, t, r = !1) {
        var n = new Mo(e), i = r ? Mt : 0;
        function o(a, s) {
            n.ensure(a, s);
        }
        Kr(()=>{
            var a = !1;
            t((s, l = 0)=>{
                a = !0, o(l, s);
            }), a || o(-1, null);
        }, i);
    }
    function Lo(e, t) {
        return t;
    }
    function Co(e, t, r) {
        for(var n = [], i = t.length, o, a = t.length, s = 0; s < i; s++){
            let d = t[s];
            wt(d, ()=>{
                if (o) {
                    if (o.pending.delete(d), o.done.add(d), o.pending.size === 0) {
                        var g = e.outrogroups;
                        Ir(e, dr(o.done)), g.delete(o), g.size === 0 && (e.outrogroups = null);
                    }
                } else a -= 1;
            }, !1);
        }
        if (a === 0) {
            var l = n.length === 0 && r !== null;
            if (l) {
                var u = r, f = u.parentNode;
                lo(f), f.append(u), e.items.clear();
            }
            Ir(e, t, !l);
        } else o = {
            pending: new Set(t),
            done: new Set
        }, (e.outrogroups ??= new Set).add(o);
    }
    function Ir(e, t, r = !0) {
        var n;
        if (e.pending.size > 0) {
            n = new Set;
            for (const a of e.pending.values())for (const s of a)n.add(e.items.get(s).e);
        }
        for(var i = 0; i < t.length; i++){
            var o = t[i];
            if (n?.has(o)) {
                o.f |= rt;
                const a = document.createDocumentFragment();
                Gr(o, a);
            } else Re(t[i], r);
        }
    }
    var nn;
    function pr(e, t, r, n, i, o = null) {
        var a = e, s = new Map;
        {
            var l = e;
            a = l.appendChild(lt());
        }
        var u = null, f = eo(()=>{
            var P = r();
            return Dr(P) ? P : P == null ? [] : dr(P);
        }), d, g = new Map, p = !0;
        function _(P) {
            (T.effect.f & Be) === 0 && (T.pending.delete(P), T.fallback = u, No(T, d, a, t, n), u !== null && (d.length === 0 ? (u.f & rt) === 0 ? Vr(u) : (u.f ^= rt, Gt(u, null, a)) : wt(u, ()=>{
                u = null;
            })));
        }
        function x(P) {
            T.pending.delete(P);
        }
        var j = Kr(()=>{
            d = c(f);
            for(var P = d.length, E = new Set, L = U, C = Cn(), z = 0; z < P; z += 1){
                var $ = d[z], W = n($, z), oe = p ? null : s.get(W);
                oe ? (oe.v && Ct(oe.v, $), oe.i && Ct(oe.i, z), C && L.unskip_effect(oe.e)) : (oe = jo(s, p ? a : nn ??= lt(), $, W, z, i, t, r), p || (oe.e.f |= rt), s.set(W, oe)), E.add(W);
            }
            if (P === 0 && o && !u && (p ? u = ze(()=>o(a)) : (u = ze(()=>o(nn ??= lt())), u.f |= rt)), P > E.size && Ii(), !p) if (g.set(L, E), C) {
                for (const [Se, K] of s)E.has(Se) || L.skip_effect(K.e);
                L.oncommit(_), L.ondiscard(x);
            } else _(L);
            c(f);
        }), T = {
            effect: j,
            items: s,
            pending: g,
            outrogroups: null,
            fallback: u
        };
        p = !1;
    }
    function Ft(e) {
        for(; e !== null && (e.f & Ue) === 0;)e = e.next;
        return e;
    }
    function No(e, t, r, n, i) {
        var o = t.length, a = e.items, s = Ft(e.effect.first), l, u = null, f = [], d = [], g, p, _, x;
        for(x = 0; x < o; x += 1){
            if (g = t[x], p = i(g, x), _ = a.get(p).e, e.outrogroups !== null) for (const W of e.outrogroups)W.pending.delete(_), W.done.delete(_);
            if ((_.f & rt) !== 0) if (_.f ^= rt, _ === s) Gt(_, null, r);
            else {
                var j = u ? u.next : s;
                _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), it(e, u, _), it(e, _, j), Gt(_, j, r), u = _, f = [], d = [], s = Ft(u.next);
                continue;
            }
            if ((_.f & Le) !== 0 && Vr(_), _ !== s) {
                if (l !== void 0 && l.has(_)) {
                    if (f.length < d.length) {
                        var T = d[0], P;
                        u = T.prev;
                        var E = f[0], L = f[f.length - 1];
                        for(P = 0; P < f.length; P += 1)Gt(f[P], T, r);
                        for(P = 0; P < d.length; P += 1)l.delete(d[P]);
                        it(e, E.prev, L.next), it(e, u, E), it(e, L, T), s = T, u = L, x -= 1, f = [], d = [];
                    } else l.delete(_), Gt(_, s, r), it(e, _.prev, _.next), it(e, _, u === null ? e.effect.first : u.next), it(e, u, _), u = _;
                    continue;
                }
                for(f = [], d = []; s !== null && s !== _;)(l ??= new Set).add(s), d.push(s), s = Ft(s.next);
                if (s === null) continue;
            }
            (_.f & rt) === 0 && f.push(_), u = _, s = Ft(_.next);
        }
        if (e.outrogroups !== null) {
            for (const W of e.outrogroups)W.pending.size === 0 && (Ir(e, dr(W.done)), e.outrogroups?.delete(W));
            e.outrogroups.size === 0 && (e.outrogroups = null);
        }
        if (s !== null || l !== void 0) {
            var C = [];
            if (l !== void 0) for (_ of l)(_.f & Le) === 0 && C.push(_);
            for(; s !== null;)(s.f & Le) === 0 && s !== e.fallback && C.push(s), s = Ft(s.next);
            var z = C.length;
            if (z > 0) {
                var $ = o === 0 ? r : null;
                Co(e, C, $);
            }
        }
    }
    function jo(e, t, r, n, i, o, a, s) {
        var l = (a & fi) !== 0 ? (a & di) === 0 ? io(r, !1, !1) : St(r) : null, u = (a & _i) !== 0 ? St(i) : null;
        return {
            v: l,
            i: u,
            e: ze(()=>(o(t, l ?? r, u ?? i, s), ()=>{
                    e.delete(n);
                }))
        };
    }
    function Gt(e, t, r) {
        if (e.nodes) for(var n = e.nodes.start, i = e.nodes.end, o = t && (t.f & rt) === 0 ? t.nodes.start : r; n !== null;){
            var a = er(n);
            if (o.before(n), n === i) return;
            n = a;
        }
    }
    function it(e, t, r) {
        t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
    }
    const on = [
        ...` 	
\r\f \v\uFEFF`
    ];
    function zo(e, t, r) {
        var n = e == null ? "" : "" + e;
        if (r) {
            for (var i of Object.keys(r))if (r[i]) n = n ? n + " " + i : i;
            else if (n.length) for(var o = i.length, a = 0; (a = n.indexOf(i, a)) >= 0;){
                var s = a + o;
                (a === 0 || on.includes(n[a - 1])) && (s === n.length || on.includes(n[s])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(s + 1) : a = s;
            }
        }
        return n === "" ? null : n;
    }
    function ht(e, t, r, n, i, o) {
        var a = e.__className;
        if (a !== r || a === void 0) {
            var s = zo(r, n, o);
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
            if (!Dr(t)) return zi();
            for (var n of e.options)n.selected = t.includes(an(n));
            return;
        }
        for (n of e.options){
            var i = an(n);
            if (ao(i, t)) {
                n.selected = !0;
                return;
            }
        }
        (!r || t !== void 0) && (e.selectedIndex = -1);
    }
    function Ko(e) {
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
    function an(e) {
        return "__value" in e ? e.__value : e.value;
    }
    const Fo = Symbol("is custom element"), Vo = Symbol("is html"), Go = Ti ? "progress" : "PROGRESS";
    function qr(e, t) {
        var r = Wr(e);
        r.value === (r.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== Go) || (e.value = t ?? "");
    }
    function qo(e, t) {
        var r = Wr(e);
        r.checked !== (r.checked = t ?? void 0) && (e.checked = t);
    }
    function Oe(e, t, r, n) {
        var i = Wr(e);
        i[t] !== (i[t] = r) && (t === "loading" && (e[Ai] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Wo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
    }
    function Wr(e) {
        return e.__attributes ??= {
            [Fo]: e.nodeName.includes("-"),
            [Vo]: e.namespaceURI === _n
        };
    }
    var sn = new Map;
    function Wo(e) {
        var t = e.getAttribute("is") || e.nodeName, r = sn.get(t);
        if (r) return r;
        sn.set(t, r = []);
        for(var n, i = e, o = Element.prototype; o !== i;){
            n = bi(i);
            for(var a in n)n[a].set && r.push(a);
            i = dn(i);
        }
        return r;
    }
    function Me(e, t, r = t) {
        var n = new WeakSet;
        fo(e, "input", async (i)=>{
            var o = i ? e.defaultValue : e.value;
            if (o = wr(e) ? xr(o) : o, r(o), U !== null && n.add(U), await ko(), o !== (o = t())) {
                var a = e.selectionStart, s = e.selectionEnd, l = e.value.length;
                if (e.value = o ?? "", s !== null) {
                    var u = e.value.length;
                    a === s && s === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = a, e.selectionEnd = Math.min(s, u));
                }
            }
        }), Hn(t) == null && e.value && (r(wr(e) ? xr(e.value) : e.value), U !== null && n.add(U)), zn(()=>{
            var i = t();
            if (e === document.activeElement) {
                var o = U;
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
    const Bo = "modulepreload", Uo = function(e, t) {
        return new URL(e, t).href;
    }, ln = {}, pe = function(t, r, n) {
        let i = Promise.resolve();
        if (r && r.length > 0) {
            let u = function(f) {
                return Promise.all(f.map((d)=>Promise.resolve(d).then((g)=>({
                            status: "fulfilled",
                            value: g
                        }), (g)=>({
                            status: "rejected",
                            reason: g
                        }))));
            };
            const a = document.getElementsByTagName("link"), s = document.querySelector("meta[property=csp-nonce]"), l = s?.nonce || s?.getAttribute("nonce");
            i = u(r.map((f)=>{
                if (f = Uo(f, n), f in ln) return;
                ln[f] = !0;
                const d = f.endsWith(".css"), g = d ? '[rel="stylesheet"]' : "";
                if (n) for(let _ = a.length - 1; _ >= 0; _--){
                    const x = a[_];
                    if (x.href === f && (!d || x.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${f}"]${g}`)) return;
                const p = document.createElement("link");
                if (p.rel = d ? "stylesheet" : Bo, d || (p.as = "script"), p.crossOrigin = "", p.href = f, l && p.setAttribute("nonce", l), document.head.appendChild(p), d) return new Promise((_, x)=>{
                    p.addEventListener("load", _), p.addEventListener("error", ()=>x(new Error(`Unable to preload CSS for ${f}`)));
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
    }, $o = "Browser-based PGP encryption powered by WebAssembly", Yo = "All cryptography runs locally in your browser via WebAssembly. No data is sent to any server.", Ho = "Loading cryptographic engine...", Xo = "Failed to load WASM module: {error}", Jo = "Encrypt", Zo = "Decrypt", Qo = "Sign", ea = "Verify", ta = "Keys", ra = "Encrypt Message", na = "Type your message here...", ia = "Recipients", oa = "No keys available. Add keys in the Keys tab.", aa = "Encrypt", sa = "Enter a message to encrypt.", la = "Select at least one recipient key.", ca = "(own)", ua = "Decrypt Message", fa = "Paste encrypted PGP message here...", _a = "Passphrase (if key is protected)", da = "Decrypt", va = "Paste an encrypted PGP message.", pa = "No private keys available. Generate or import a key in the Keys tab.", ha = "Decryption failed. You may not have the correct private key, or the passphrase is wrong.", ga = "Sign Message", ya = "Type your message here...", ba = "Passphrase (if key is protected)", ma = "Sign", wa = "Enter a message to sign.", xa = "No private keys available. Generate or import a key in the Keys tab.", ka = "Signing failed. Your key may require a passphrase.", Ea = "Verify Signature", Sa = "Paste signed PGP message here...", Aa = "Verify", Ta = "Paste a signed PGP message.", Pa = "No keys in keyring. Import the signer's public key first.", Ia = "Valid Signature", Oa = "Signed by: {name}", Ra = "Verification Failed", Da = "The signer's key may not be in your keyring.", Ma = "Key Manager", La = "Generate", Ca = "Import", Na = "No keys yet. Generate or import one to get started.", ja = "(own key)", za = "(unnamed)", Ka = "Generate New Key Pair", Fa = "Name", Va = "Email", Ga = "Passphrase (optional)", qa = "Name and email are required.", Wa = "Cancel", Ba = "Generate", Ua = "Generating...", $a = "Key pair generated!", Ya = "Import Key", Ha = "Paste ASCII-armored PGP key...", Xa = "Paste a PGP public or private key.", Ja = "Cancel", Za = "Import", Qa = "Importing...", es = "Imported key for {name}.", ts = "Export", rs = "Delete", ns = "Key deleted.", is = "Public key copied to clipboard.", os = "Copy", as = "System", ss = "Light", ls = "Dark", cs = "Skip tutorial", us = "Step {current} of {total}", fs = "Next", _s = "Back", ds = "Get Started", vs = "Welcome to KeychainPGP", ps = "This quick tutorial will walk you through PGP encryption. You'll create your key pair and decrypt your first secret message.", hs = "Create Your Key Pair", gs = "A PGP key pair has two parts: a public key you share with others so they can send you encrypted messages, and a private key you keep secret to decrypt them.", ys = "Generate My Key", bs = "Generating...", ms = "Key pair created and saved!", ws = "Decrypt Your First Message", xs = "We just encrypted a welcome message using your public key. Only your private key can unlock it. Give it a try!", ks = "Decrypt Message", Es = "Message decrypted!", Ss = "To exchange encrypted messages with someone, import their public key in the Keys tab. They'll need your public key too.", As = "You're Ready!", Ts = "You've mastered the basics of PGP encryption. Use the tabs above to encrypt, decrypt, sign, and verify messages. Import contacts' public keys in the Keys tab to communicate securely.", Ps = `Hello World!

Congratulations! You have successfully decrypted your first PGP message.

This message was encrypted with your public key and could only be decrypted with your private key. This is the foundation of PGP: only the intended recipient can read the message.

Enjoy using KeychainPGP!`, Is = "Language", Os = {
        app_subtitle: $o,
        app_footer: Yo,
        loading: Ho,
        loading_error: Xo,
        tab_encrypt: Jo,
        tab_decrypt: Zo,
        tab_sign: Qo,
        tab_verify: ea,
        tab_keys: ta,
        encrypt_title: ra,
        encrypt_placeholder: na,
        encrypt_recipients: ia,
        encrypt_no_keys: oa,
        encrypt_btn: aa,
        encrypt_error_empty: sa,
        encrypt_error_no_recipient: la,
        encrypt_own_label: ca,
        decrypt_title: ua,
        decrypt_placeholder: fa,
        decrypt_passphrase: _a,
        decrypt_btn: da,
        decrypt_error_empty: va,
        decrypt_error_no_key: pa,
        decrypt_error_failed: ha,
        sign_title: ga,
        sign_placeholder: ya,
        sign_passphrase: ba,
        sign_btn: ma,
        sign_error_empty: wa,
        sign_error_no_key: xa,
        sign_error_failed: ka,
        verify_title: Ea,
        verify_placeholder: Sa,
        verify_btn: Aa,
        verify_error_empty: Ta,
        verify_error_no_keys: Pa,
        verify_valid: Ia,
        verify_signed_by: Oa,
        verify_failed: Ra,
        verify_signer_not_found: Da,
        keys_title: Ma,
        keys_generate_btn: La,
        keys_import_btn: Ca,
        keys_empty: Na,
        keys_own_label: ja,
        keys_unnamed: za,
        keygen_title: Ka,
        keygen_name: Fa,
        keygen_email: Va,
        keygen_passphrase: Ga,
        keygen_error_required: qa,
        keygen_cancel: Wa,
        keygen_submit: Ba,
        keygen_loading: Ua,
        keygen_success: $a,
        import_title: Ya,
        import_placeholder: Ha,
        import_error_empty: Xa,
        import_cancel: Ja,
        import_submit: Za,
        import_loading: Qa,
        import_success: es,
        key_export_btn: ts,
        key_delete_btn: rs,
        key_deleted: ns,
        key_exported: is,
        copy_btn: os,
        theme_system: as,
        theme_light: ss,
        theme_dark: ls,
        onboarding_skip: cs,
        onboarding_step: us,
        onboarding_next: fs,
        onboarding_prev: _s,
        onboarding_finish: ds,
        onboarding_welcome_title: vs,
        onboarding_welcome_desc: ps,
        onboarding_gen_title: hs,
        onboarding_gen_desc: gs,
        onboarding_gen_btn: ys,
        onboarding_gen_generating: bs,
        onboarding_gen_done: ms,
        onboarding_msg_title: ws,
        onboarding_msg_desc: xs,
        onboarding_msg_decrypt_btn: ks,
        onboarding_msg_decrypted: Es,
        onboarding_msg_tip: Ss,
        onboarding_done_title: As,
        onboarding_done_desc: Ts,
        onboarding_secret_message: Ps,
        language_label: Is
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
    ], ei = "keychainpgp-locale", hr = Os, lr = new Map;
    lr.set("en", hr);
    let ti = hr, ri = "en";
    const Rs = {
        fr: ()=>pe(()=>import("./fr-CfjqoM1F.js"), [], import.meta.url),
        de: ()=>pe(()=>import("./de-DxD4XyV-.js"), [], import.meta.url),
        es: ()=>pe(()=>import("./es-7R_VjyRd.js"), [], import.meta.url),
        it: ()=>pe(()=>import("./it-DqmU6PgP.js"), [], import.meta.url),
        nl: ()=>pe(()=>import("./nl-W7XEwzl6.js"), [], import.meta.url),
        "pt-BR": ()=>pe(()=>import("./pt-BR-DaH3uH7i.js"), [], import.meta.url),
        "pt-PT": ()=>pe(()=>import("./pt-PT-BES1bHB2.js"), [], import.meta.url),
        ru: ()=>pe(()=>import("./ru-BjgaLkPb.js"), [], import.meta.url),
        uk: ()=>pe(()=>import("./uk-bxbr8Rsn.js"), [], import.meta.url),
        pl: ()=>pe(()=>import("./pl-nv_NhuJh.js"), [], import.meta.url),
        tr: ()=>pe(()=>import("./tr-BUadaJlD.js"), [], import.meta.url),
        "zh-CN": ()=>pe(()=>import("./zh-CN-BKMmO_Bv.js"), [], import.meta.url),
        "zh-TW": ()=>pe(()=>import("./zh-TW-Dp0Ea4o4.js"), [], import.meta.url),
        ja: ()=>pe(()=>import("./ja-CKLlzbQ3.js"), [], import.meta.url),
        ko: ()=>pe(()=>import("./ko-B9avDbJf.js"), [], import.meta.url),
        ar: ()=>pe(()=>import("./ar-C4ugHzxd.js"), [], import.meta.url),
        he: ()=>pe(()=>import("./he-BNfmwO3P.js"), [], import.meta.url),
        hi: ()=>pe(()=>import("./hi-Df80B2ak.js"), [], import.meta.url),
        th: ()=>pe(()=>import("./th-C86g4naZ.js"), [], import.meta.url)
    };
    function Ds() {
        return ri;
    }
    function Ms() {
        const e = localStorage.getItem(ei);
        if (e && Yt.some((i)=>i.code === e)) return e;
        const t = navigator.language, r = Yt.find((i)=>i.code === t);
        if (r) return r.code;
        const n = Yt.find((i)=>t.startsWith(i.code.split("-")[0]));
        return n ? n.code : "en";
    }
    async function ni(e) {
        if (localStorage.setItem(ei, e), !lr.has(e)) {
            const r = Rs[e];
            if (r) {
                const n = await r();
                lr.set(e, n.default);
            }
        }
        ti = lr.get(e) ?? hr, ri = e;
        const t = Yt.find((r)=>r.code === e);
        document.documentElement.setAttribute("dir", t?.dir ?? "ltr"), document.documentElement.setAttribute("lang", e);
    }
    function Ls(e, t) {
        let r = ti[e] ?? hr[e] ?? e;
        if (t) for (const [n, i] of Object.entries(t))r = r.replace(new RegExp(`\\{${n}\\}`, "g"), String(i));
        return r;
    }
    let gr = S(0);
    async function Cs() {
        const e = Ms();
        await ni(e), fr(gr);
    }
    async function Ns(e) {
        await ni(e), fr(gr);
    }
    function js() {
        return c(gr), Ds();
    }
    function y(e, t) {
        return c(gr), Ls(e, t);
    }
    const zs = "5";
    typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set).add(zs);
    function Ks(e, t, r) {
        let n, i;
        try {
            const p = k.__wbindgen_add_to_stack_pointer(-16), _ = Ee(e, k.__wbindgen_export, k.__wbindgen_export2), x = ge, j = Ee(t, k.__wbindgen_export, k.__wbindgen_export2), T = ge;
            var o = mt(r) ? 0 : Ee(r, k.__wbindgen_export, k.__wbindgen_export2), a = ge;
            k.decrypt(p, _, x, j, T, o, a);
            var s = ne().getInt32(p + 0, !0), l = ne().getInt32(p + 4, !0), u = ne().getInt32(p + 8, !0), f = ne().getInt32(p + 12, !0), d = s, g = l;
            if (f) throw d = 0, g = 0, Ie(u);
            return n = d, i = g, bt(d, g);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(n, i, 1);
        }
    }
    function Fs(e, t) {
        let r, n;
        try {
            const f = k.__wbindgen_add_to_stack_pointer(-16), d = Ee(e, k.__wbindgen_export, k.__wbindgen_export2), g = ge, p = Ee(t, k.__wbindgen_export, k.__wbindgen_export2), _ = ge;
            k.encrypt(f, d, g, p, _);
            var i = ne().getInt32(f + 0, !0), o = ne().getInt32(f + 4, !0), a = ne().getInt32(f + 8, !0), s = ne().getInt32(f + 12, !0), l = i, u = o;
            if (s) throw l = 0, u = 0, Ie(a);
            return r = l, n = u, bt(l, u);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(r, n, 1);
        }
    }
    function Vs(e, t, r) {
        try {
            const l = k.__wbindgen_add_to_stack_pointer(-16), u = Ee(e, k.__wbindgen_export, k.__wbindgen_export2), f = ge, d = Ee(t, k.__wbindgen_export, k.__wbindgen_export2), g = ge;
            var n = mt(r) ? 0 : Ee(r, k.__wbindgen_export, k.__wbindgen_export2), i = ge;
            k.generateKeyPair(l, u, f, d, g, n, i);
            var o = ne().getInt32(l + 0, !0), a = ne().getInt32(l + 4, !0), s = ne().getInt32(l + 8, !0);
            if (s) throw Ie(a);
            return Ie(o);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function Gs() {
        k.init();
    }
    function qs(e) {
        try {
            const i = k.__wbindgen_add_to_stack_pointer(-16), o = Ee(e, k.__wbindgen_export, k.__wbindgen_export2), a = ge;
            k.inspectKey(i, o, a);
            var t = ne().getInt32(i + 0, !0), r = ne().getInt32(i + 4, !0), n = ne().getInt32(i + 8, !0);
            if (n) throw Ie(r);
            return Ie(t);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function Ws(e, t, r) {
        let n, i;
        try {
            const p = k.__wbindgen_add_to_stack_pointer(-16), _ = Ee(e, k.__wbindgen_export, k.__wbindgen_export2), x = ge, j = Ee(t, k.__wbindgen_export, k.__wbindgen_export2), T = ge;
            var o = mt(r) ? 0 : Ee(r, k.__wbindgen_export, k.__wbindgen_export2), a = ge;
            k.sign(p, _, x, j, T, o, a);
            var s = ne().getInt32(p + 0, !0), l = ne().getInt32(p + 4, !0), u = ne().getInt32(p + 8, !0), f = ne().getInt32(p + 12, !0), d = s, g = l;
            if (f) throw d = 0, g = 0, Ie(u);
            return n = d, i = g, bt(d, g);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(n, i, 1);
        }
    }
    function Bs(e, t) {
        try {
            const o = k.__wbindgen_add_to_stack_pointer(-16), a = Ee(e, k.__wbindgen_export, k.__wbindgen_export2), s = ge, l = Ee(t, k.__wbindgen_export, k.__wbindgen_export2), u = ge;
            k.verify(o, a, s, l, u);
            var r = ne().getInt32(o + 0, !0), n = ne().getInt32(o + 4, !0), i = ne().getInt32(o + 8, !0);
            if (i) throw Ie(n);
            return Ie(r);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function Us() {
        return {
            __proto__: null,
            "./keychainpgp_wasm_bg.js": {
                __proto__: null,
                __wbg_Error_83742b46f01ce22d: function(t, r) {
                    const n = Error(bt(t, r));
                    return ie(n);
                },
                __wbg_String_8564e559799eccda: function(t, r) {
                    const n = String(ee(r)), i = Ee(n, k.__wbindgen_export, k.__wbindgen_export2), o = ge;
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
                    throw new Error(bt(t, r));
                },
                __wbg_call_2d781c1f4d5c0ef8: function() {
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
                        n = t, i = r, console.error(bt(t, r));
                    } finally{
                        k.__wbindgen_export4(n, i, 1);
                    }
                },
                __wbg_from_4bdf88943703fd48: function(t) {
                    const r = Array.from(ee(t));
                    return ie(r);
                },
                __wbg_getRandomValues_c44a50d8cfdaebeb: function() {
                    return ir(function(t, r) {
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
                    Uint8Array.prototype.set.call(cn(t, r), ee(n));
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
                __wbg_set_282384002438957f: function(t, r, n) {
                    ee(t)[r >>> 0] = Ie(n);
                },
                __wbg_set_6be42768c690e380: function(t, r, n) {
                    ee(t)[Ie(r)] = Ie(n);
                },
                __wbg_stack_3b0d974bbf31e44f: function(t, r) {
                    const n = ee(r).stack, i = Ee(n, k.__wbindgen_export, k.__wbindgen_export2), o = ge;
                    ne().setInt32(t + 4, o, !0), ne().setInt32(t + 0, i, !0);
                },
                __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function() {
                    const t = typeof global > "u" ? null : global;
                    return mt(t) ? 0 : ie(t);
                },
                __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function() {
                    const t = typeof globalThis > "u" ? null : globalThis;
                    return mt(t) ? 0 : ie(t);
                },
                __wbg_static_accessor_SELF_f207c857566db248: function() {
                    const t = typeof self > "u" ? null : self;
                    return mt(t) ? 0 : ie(t);
                },
                __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function() {
                    const t = typeof window > "u" ? null : window;
                    return mt(t) ? 0 : ie(t);
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
                    const n = cn(t, r);
                    return ie(n);
                },
                __wbindgen_cast_0000000000000002: function(t, r) {
                    const n = bt(t, r);
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
    function $s(e) {
        e < 1028 || (tt[e] = Xt, Xt = e);
    }
    function cn(e, t) {
        return e = e >>> 0, Ht().subarray(e / 1, e / 1 + t);
    }
    let pt = null;
    function ne() {
        return (pt === null || pt.buffer.detached === !0 || pt.buffer.detached === void 0 && pt.buffer !== k.memory.buffer) && (pt = new DataView(k.memory.buffer)), pt;
    }
    function bt(e, t) {
        return e = e >>> 0, Hs(e, t);
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
    function mt(e) {
        return e == null;
    }
    function Ee(e, t, r) {
        if (r === void 0) {
            const s = Jt.encode(e), l = t(s.length, 1) >>> 0;
            return Ht().subarray(l, l + s.length).set(s), ge = s.length, l;
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
        return ge = a, i;
    }
    function Ie(e) {
        const t = ee(e);
        return $s(e), t;
    }
    let cr = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    cr.decode();
    const Ys = 2146435072;
    let kr = 0;
    function Hs(e, t) {
        return kr += t, kr >= Ys && (cr = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), cr.decode(), kr = t), cr.decode(Ht().subarray(e, e + t));
    }
    const Jt = new TextEncoder;
    "encodeInto" in Jt || (Jt.encodeInto = function(e, t) {
        const r = Jt.encode(e);
        return t.set(r), {
            read: e.length,
            written: r.length
        };
    });
    let ge = 0, k;
    function Xs(e, t) {
        return k = e.exports, pt = null, qt = null, k;
    }
    async function Js(e, t) {
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
    async function Zs(e) {
        if (k !== void 0) return k;
        e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("keychainpgp_wasm_bg-CLouvAE8.wasm", import.meta.url).href, import.meta.url));
        const t = Us();
        (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
        const { instance: r, module: n } = await Js(await e, t);
        return Xs(r);
    }
    let un = !1;
    async function Qs() {
        un || (await Zs(), Gs(), un = !0);
    }
    function ii(e, t, r) {
        return Vs(e, t, r ?? void 0);
    }
    function oi(e, t) {
        return Fs(e, JSON.stringify(t));
    }
    function ai(e, t, r) {
        return Ks(e, t, r ?? void 0);
    }
    function el(e, t, r) {
        return Ws(e, t, r ?? void 0);
    }
    function tl(e, t) {
        return Bs(e, t);
    }
    function Or(e) {
        return qs(e);
    }
    const si = "keychainpgp-theme";
    function rl() {
        return localStorage.getItem(si) ?? "dark";
    }
    function nl(e) {
        localStorage.setItem(si, e), li(e);
    }
    function li(e) {
        document.documentElement.setAttribute("data-theme", e);
        const t = document.querySelector('meta[name="theme-color"]');
        t && t.setAttribute("content", e === "dark" ? "#0f172a" : "#ffffff");
    }
    const ci = "keychainpgp-";
    function il(e) {
        return localStorage.getItem(ci + e);
    }
    function ol(e, t) {
        localStorage.setItem(ci + e, t);
    }
    function al() {
        return il("onboarded") === "true";
    }
    function fn() {
        ol("onboarded", "true");
    }
    const sl = "keychainpgp", ll = 1, Je = "keys";
    let or = null;
    function yr() {
        return new Promise((e, t)=>{
            const r = indexedDB.open(sl, ll);
            r.onupgradeneeded = ()=>{
                const n = r.result;
                n.objectStoreNames.contains(Je) || n.createObjectStore(Je, {
                    keyPath: "fingerprint"
                });
            }, r.onsuccess = ()=>e(r.result), r.onerror = ()=>t(r.error);
        });
    }
    async function ui() {
        return or || (or = await crypto.subtle.generateKey({
            name: "AES-GCM",
            length: 256
        }, !1, [
            "encrypt",
            "decrypt"
        ]), or);
    }
    async function cl(e) {
        const t = await ui(), r = crypto.getRandomValues(new Uint8Array(12)), n = await crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: r
        }, t, new Uint8Array(e));
        return {
            ciphertext: btoa(String.fromCharCode(...new Uint8Array(n))),
            iv: btoa(String.fromCharCode(...r))
        };
    }
    async function ul(e, t) {
        const r = await ui(), n = new Uint8Array(Array.from(atob(t), (a)=>a.charCodeAt(0))), i = new Uint8Array(Array.from(atob(e), (a)=>a.charCodeAt(0))), o = await crypto.subtle.decrypt({
            name: "AES-GCM",
            iv: n
        }, r, i);
        return new Uint8Array(o);
    }
    async function rr() {
        const e = await yr();
        return new Promise((t, r)=>{
            const o = e.transaction(Je, "readonly").objectStore(Je).getAll();
            o.onsuccess = ()=>t(o.result), o.onerror = ()=>r(o.error);
        });
    }
    async function fl(e) {
        const t = await yr();
        return new Promise((r, n)=>{
            const a = t.transaction(Je, "readonly").objectStore(Je).get(e);
            a.onsuccess = ()=>r(a.result ?? null), a.onerror = ()=>n(a.error);
        });
    }
    async function Rr(e, t, r, n, i) {
        let o = null, a = null;
        if (i) {
            const u = await cl(i);
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
        return new Promise((u, f)=>{
            const d = l.transaction(Je, "readwrite");
            d.objectStore(Je).put(s), d.oncomplete = ()=>u(), d.onerror = ()=>f(d.error);
        });
    }
    async function Br(e) {
        const t = await fl(e);
        if (!t?.encryptedSecretKey || !t.iv) return null;
        try {
            return await ul(t.encryptedSecretKey, t.iv);
        } catch  {
            return null;
        }
    }
    async function _l(e) {
        const t = await yr();
        return new Promise((r, n)=>{
            const i = t.transaction(Je, "readwrite");
            i.objectStore(Je).delete(e), i.oncomplete = ()=>r(), i.onerror = ()=>n(i.error);
        });
    }
    var dl = R("<span></span>"), vl = R('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p>', 1), pl = R('<p class="success svelte-13krnjv"> </p>'), hl = R('<p class="error svelte-13krnjv"> </p>'), gl = R('<div class="wizard-form svelte-13krnjv"><input class="input"/> <input class="input" type="email"/> <input class="input" type="password"/> <!> <button class="btn btn-primary"> </button></div>'), yl = R('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p> <!>', 1), bl = R('<p class="success svelte-13krnjv" style="margin-top: 0.75rem;"> </p> <div class="decrypted-block svelte-13krnjv"> </div>', 1), ml = R('<p class="error svelte-13krnjv" style="margin-top: 0.5rem;"> </p>'), wl = R('<!> <button class="btn btn-primary" style="margin-top: 0.75rem;"> </button>', 1), xl = R('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p> <div class="pgp-block svelte-13krnjv"> </div> <!> <p class="wizard-tip svelte-13krnjv"> </p>', 1), kl = R('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p>', 1), El = R('<button class="btn"> </button>'), Sl = R("<div></div>"), Al = R('<button class="btn btn-primary"> </button>'), Tl = R('<button class="btn btn-primary"> </button>'), Pl = R('<div class="card wizard svelte-13krnjv"><div class="wizard-header svelte-13krnjv"><div class="wizard-dots svelte-13krnjv"></div> <button class="wizard-skip svelte-13krnjv"> </button></div> <div class="wizard-content svelte-13krnjv"><!></div> <div class="wizard-footer svelte-13krnjv"><!> <!></div></div>');
    function Il(e, t) {
        ft(t, !0);
        const r = 4;
        let n = S(0), i = S(""), o = S(""), a = S(""), s = S(""), l = S(!1), u = S(!1), f = S(""), d = S(""), g = S(""), p = S(""), _ = S(!1), x = S("");
        function j() {
            fn(), t.onDismiss();
        }
        function T() {
            fn(), t.onDismiss();
        }
        function P() {
            c(n) > 0 && fr(n, -1);
        }
        function E() {
            c(n) === 1 && !c(u) || c(n) < r - 1 && fr(n);
        }
        async function L() {
            if (h(s, ""), !c(i).trim() || !c(o).trim()) {
                h(s, y("keygen_error_required"), !0);
                return;
            }
            h(l, !0);
            try {
                const w = ii(c(i), c(o), c(a) || void 0), O = Or(w.public_key);
                await Rr(w.fingerprint, O.user_ids[0]?.name ?? null, O.user_ids[0]?.email ?? null, w.public_key, w.secret_key), h(f, w.public_key, !0), h(d, w.fingerprint, !0), h(u, !0);
                const V = y("onboarding_secret_message");
                h(g, oi(V, [
                    w.public_key
                ]), !0);
            } catch (w) {
                h(s, String(w), !0);
            } finally{
                h(l, !1);
            }
        }
        async function C() {
            h(x, ""), h(_, !0);
            let w = null;
            try {
                if (w = await Br(c(d)), !w) {
                    h(x, "Could not retrieve secret key.");
                    return;
                }
                const O = new TextDecoder().decode(w);
                h(p, ai(c(g), O, c(a) || void 0), !0);
            } catch (O) {
                h(x, String(O), !0);
            } finally{
                w?.fill(0), h(_, !1);
            }
        }
        var z = Pl(), $ = v(z), W = v($);
        pr(W, 21, ()=>Array(r), Lo, (w, O, V)=>{
            var Z = dl();
            let ae;
            M(()=>ae = ht(Z, 1, "wizard-dot svelte-13krnjv", null, ae, {
                    active: V === c(n),
                    completed: V < c(n)
                })), I(w, Z);
        });
        var oe = b(W, 2), Se = v(oe), K = b($, 2), A = v(K);
        {
            var N = (w)=>{
                var O = vl(), V = et(O), Z = v(V), ae = b(V, 2), ve = v(ae);
                M((be, ce)=>{
                    m(Z, be), m(ve, ce);
                }, [
                    ()=>y("onboarding_welcome_title"),
                    ()=>y("onboarding_welcome_desc")
                ]), I(w, O);
            }, F = (w)=>{
                var O = yl(), V = et(O), Z = v(V), ae = b(V, 2), ve = v(ae), be = b(ae, 2);
                {
                    var ce = (re)=>{
                        var ue = pl(), Q = v(ue);
                        M((fe)=>m(Q, fe), [
                            ()=>y("onboarding_gen_done")
                        ]), I(re, ue);
                    }, Ne = (re)=>{
                        var ue = gl(), Q = v(ue), fe = b(Q, 2), _e = b(fe, 2), G = b(_e, 2);
                        {
                            var Ae = (se)=>{
                                var ke = hl(), It = v(ke);
                                M(()=>m(It, c(s))), I(se, ke);
                            };
                            X(G, (se)=>{
                                c(s) && se(Ae);
                            });
                        }
                        var me = b(G, 2), Te = v(me);
                        M((se, ke, It, br)=>{
                            Oe(Q, "placeholder", se), Oe(fe, "placeholder", ke), Oe(_e, "placeholder", It), me.disabled = c(l), m(Te, br);
                        }, [
                            ()=>y("keygen_name"),
                            ()=>y("keygen_email"),
                            ()=>y("keygen_passphrase"),
                            ()=>c(l) ? y("onboarding_gen_generating") : y("onboarding_gen_btn")
                        ]), Me(Q, ()=>c(i), (se)=>h(i, se)), Me(fe, ()=>c(o), (se)=>h(o, se)), Me(_e, ()=>c(a), (se)=>h(a, se)), J("click", me, L), I(re, ue);
                    };
                    X(be, (re)=>{
                        c(u) ? re(ce) : re(Ne, -1);
                    });
                }
                M((re, ue)=>{
                    m(Z, re), m(ve, ue);
                }, [
                    ()=>y("onboarding_gen_title"),
                    ()=>y("onboarding_gen_desc")
                ]), I(w, O);
            }, te = (w)=>{
                var O = xl(), V = et(O), Z = v(V), ae = b(V, 2), ve = v(ae), be = b(ae, 2), ce = v(be), Ne = b(be, 2);
                {
                    var re = (_e)=>{
                        var G = bl(), Ae = et(G), me = v(Ae), Te = b(Ae, 2), se = v(Te);
                        M((ke)=>{
                            m(me, ke), m(se, c(p));
                        }, [
                            ()=>y("onboarding_msg_decrypted")
                        ]), I(_e, G);
                    }, ue = (_e)=>{
                        var G = wl(), Ae = et(G);
                        {
                            var me = (ke)=>{
                                var It = ml(), br = v(It);
                                M(()=>m(br, c(x))), I(ke, It);
                            };
                            X(Ae, (ke)=>{
                                c(x) && ke(me);
                            });
                        }
                        var Te = b(Ae, 2), se = v(Te);
                        M((ke)=>{
                            Te.disabled = c(_), m(se, ke);
                        }, [
                            ()=>y("onboarding_msg_decrypt_btn")
                        ]), J("click", Te, C), I(_e, G);
                    };
                    X(Ne, (_e)=>{
                        c(p) ? _e(re) : _e(ue, -1);
                    });
                }
                var Q = b(Ne, 2), fe = v(Q);
                M((_e, G, Ae)=>{
                    m(Z, _e), m(ve, G), m(ce, c(g)), m(fe, Ae);
                }, [
                    ()=>y("onboarding_msg_title"),
                    ()=>y("onboarding_msg_desc"),
                    ()=>y("onboarding_msg_tip")
                ]), I(w, O);
            }, de = (w)=>{
                var O = kl(), V = et(O), Z = v(V), ae = b(V, 2), ve = v(ae);
                M((be, ce)=>{
                    m(Z, be), m(ve, ce);
                }, [
                    ()=>y("onboarding_done_title"),
                    ()=>y("onboarding_done_desc")
                ]), I(w, O);
            };
            X(A, (w)=>{
                c(n) === 0 ? w(N) : c(n) === 1 ? w(F, 1) : c(n) === 2 ? w(te, 2) : c(n) === 3 && w(de, 3);
            });
        }
        var Ce = b(K, 2), Ye = v(Ce);
        {
            var vt = (w)=>{
                var O = El(), V = v(O);
                M((Z)=>m(V, Z), [
                    ()=>y("onboarding_prev")
                ]), J("click", O, P), I(w, O);
            }, He = (w)=>{
                var O = Sl();
                I(w, O);
            };
            X(Ye, (w)=>{
                c(n) > 0 ? w(vt) : w(He, -1);
            });
        }
        var D = b(Ye, 2);
        {
            var B = (w)=>{
                var O = Al(), V = v(O);
                M((Z)=>{
                    O.disabled = c(n) === 1 && !c(u), m(V, Z);
                }, [
                    ()=>y("onboarding_next")
                ]), J("click", O, E), I(w, O);
            }, H = (w)=>{
                var O = Tl(), V = v(O);
                M((Z)=>m(V, Z), [
                    ()=>y("onboarding_finish")
                ]), J("click", O, T), I(w, O);
            };
            X(D, (w)=>{
                c(n) < r - 1 ? w(B) : w(H, -1);
            });
        }
        M((w)=>m(Se, w), [
            ()=>y("onboarding_skip")
        ]), J("click", oe, j), I(e, z), _t();
    }
    Pt([
        "click"
    ]);
    var Ol = R('<p style="font-size: 0.875rem; color: var(--color-text-secondary);"> </p>'), Rl = R('<span style="font-size: 0.75rem; color: var(--color-primary);"> </span>'), Dl = R('<label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border-radius: 0.375rem; border: 1px solid var(--color-border); cursor: pointer; font-size: 0.875rem;"><input type="checkbox"/> <span> </span> <!></label>'), Ml = R('<div style="display: flex; flex-direction: column; gap: 0.375rem; max-height: 200px; overflow-y: auto;"></div>'), Ll = R('<p class="error"> </p>'), Cl = R('<div style="position: relative;"><textarea class="textarea" readonly="" rows="8"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), Nl = R('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="5"></textarea> <div><p style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;"> </p> <!></div> <button class="btn btn-primary"> </button> <!> <!></div>');
    function jl(e, t) {
        ft(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S(nt([])), a = S(nt(new Set));
        async function s() {
            h(o, await rr(), !0);
        }
        s();
        function l(K) {
            c(a).has(K) ? c(a).delete(K) : c(a).add(K), h(a, new Set(c(a)), !0);
        }
        function u() {
            if (h(i, ""), h(n, ""), !c(r).trim()) {
                h(i, y("encrypt_error_empty"), !0);
                return;
            }
            if (c(a).size === 0) {
                h(i, y("encrypt_error_no_recipient"), !0);
                return;
            }
            try {
                const K = c(o).filter((A)=>c(a).has(A.fingerprint)).map((A)=>A.publicKey);
                h(n, oi(c(r), K), !0);
            } catch (K) {
                h(i, String(K), !0);
            }
        }
        async function f() {
            await navigator.clipboard.writeText(c(n));
        }
        var d = Nl(), g = v(d), p = v(g), _ = b(g, 2), x = b(_, 2), j = v(x), T = v(j), P = b(j, 2);
        {
            var E = (K)=>{
                var A = Ol(), N = v(A);
                M((F)=>m(N, F), [
                    ()=>y("encrypt_no_keys")
                ]), I(K, A);
            }, L = (K)=>{
                var A = Ml();
                pr(A, 21, ()=>c(o), (N)=>N.fingerprint, (N, F)=>{
                    var te = Dl();
                    let de;
                    var Ce = v(te), Ye = b(Ce, 2), vt = v(Ye), He = b(Ye, 2);
                    {
                        var D = (B)=>{
                            var H = Rl(), w = v(H);
                            M((O)=>m(w, O), [
                                ()=>y("encrypt_own_label")
                            ]), I(B, H);
                        };
                        X(He, (B)=>{
                            c(F).isOwn && B(D);
                        });
                    }
                    M((B, H, w)=>{
                        de = ht(te, 1, "svelte-recwdw", null, de, B), qo(Ce, H), m(vt, w);
                    }, [
                        ()=>({
                                selected: c(a).has(c(F).fingerprint)
                            }),
                        ()=>c(a).has(c(F).fingerprint),
                        ()=>c(F).name ?? c(F).email ?? c(F).fingerprint.slice(-16)
                    ]), J("change", Ce, ()=>l(c(F).fingerprint)), I(N, te);
                }), I(K, A);
            };
            X(P, (K)=>{
                c(o).length === 0 ? K(E) : K(L, -1);
            });
        }
        var C = b(x, 2), z = v(C), $ = b(C, 2);
        {
            var W = (K)=>{
                var A = Ll(), N = v(A);
                M(()=>m(N, c(i))), I(K, A);
            };
            X($, (K)=>{
                c(i) && K(W);
            });
        }
        var oe = b($, 2);
        {
            var Se = (K)=>{
                var A = Cl(), N = v(A), F = b(N, 2), te = v(F);
                M((de)=>{
                    qr(N, c(n)), m(te, de);
                }, [
                    ()=>y("copy_btn")
                ]), J("click", F, f), I(K, A);
            };
            X(oe, (K)=>{
                c(n) && K(Se);
            });
        }
        M((K, A, N, F, te)=>{
            m(p, K), Oe(_, "placeholder", A), m(T, N), C.disabled = F, m(z, te);
        }, [
            ()=>y("encrypt_title"),
            ()=>y("encrypt_placeholder"),
            ()=>y("encrypt_recipients"),
            ()=>!c(r).trim() || c(a).size === 0,
            ()=>y("encrypt_btn")
        ]), Me(_, ()=>c(r), (K)=>h(r, K)), J("click", C, u), I(e, d), _t();
    }
    Pt([
        "change",
        "click"
    ]);
    var zl = R('<p class="error"> </p>'), Kl = R('<div style="position: relative;"><textarea class="textarea" readonly="" rows="6"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), Fl = R('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="8"></textarea> <input type="password" class="input"/> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Vl(e, t) {
        ft(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S("");
        async function a() {
            if (h(o, ""), h(i, ""), !c(r).trim()) {
                h(o, y("decrypt_error_empty"), !0);
                return;
            }
            const L = (await rr()).filter((C)=>C.isOwn);
            if (L.length === 0) {
                h(o, y("decrypt_error_no_key"), !0);
                return;
            }
            for (const C of L){
                const z = await Br(C.fingerprint);
                if (z) try {
                    const $ = new TextDecoder().decode(z);
                    h(i, ai(c(r), $, c(n) || void 0), !0);
                    return;
                } catch  {}
            }
            h(o, y("decrypt_error_failed"), !0);
        }
        async function s() {
            await navigator.clipboard.writeText(c(i));
        }
        var l = Fl(), u = v(l), f = v(u), d = b(u, 2), g = b(d, 2), p = b(g, 2), _ = v(p), x = b(p, 2);
        {
            var j = (E)=>{
                var L = zl(), C = v(L);
                M(()=>m(C, c(o))), I(E, L);
            };
            X(x, (E)=>{
                c(o) && E(j);
            });
        }
        var T = b(x, 2);
        {
            var P = (E)=>{
                var L = Kl(), C = v(L), z = b(C, 2), $ = v(z);
                M((W)=>{
                    qr(C, c(i)), m($, W);
                }, [
                    ()=>y("copy_btn")
                ]), J("click", z, s), I(E, L);
            };
            X(T, (E)=>{
                c(i) && E(P);
            });
        }
        M((E, L, C, z, $)=>{
            m(f, E), Oe(d, "placeholder", L), Oe(g, "placeholder", C), p.disabled = z, m(_, $);
        }, [
            ()=>y("decrypt_title"),
            ()=>y("decrypt_placeholder"),
            ()=>y("decrypt_passphrase"),
            ()=>!c(r).trim(),
            ()=>y("decrypt_btn")
        ]), Me(d, ()=>c(r), (E)=>h(r, E)), Me(g, ()=>c(n), (E)=>h(n, E)), J("click", p, a), I(e, l), _t();
    }
    Pt([
        "click"
    ]);
    var Gl = R('<p class="error"> </p>'), ql = R('<div style="position: relative;"><textarea class="textarea" readonly="" rows="8"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), Wl = R('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="5"></textarea> <input type="password" class="input"/> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Bl(e, t) {
        ft(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S("");
        async function a() {
            if (h(o, ""), h(i, ""), !c(r).trim()) {
                h(o, y("sign_error_empty"), !0);
                return;
            }
            const L = (await rr()).filter((C)=>C.isOwn);
            if (L.length === 0) {
                h(o, y("sign_error_no_key"), !0);
                return;
            }
            for (const C of L){
                const z = await Br(C.fingerprint);
                if (z) try {
                    h(i, el(c(r), z, c(n) || void 0), !0);
                    return;
                } catch  {}
            }
            h(o, y("sign_error_failed"), !0);
        }
        async function s() {
            await navigator.clipboard.writeText(c(i));
        }
        var l = Wl(), u = v(l), f = v(u), d = b(u, 2), g = b(d, 2), p = b(g, 2), _ = v(p), x = b(p, 2);
        {
            var j = (E)=>{
                var L = Gl(), C = v(L);
                M(()=>m(C, c(o))), I(E, L);
            };
            X(x, (E)=>{
                c(o) && E(j);
            });
        }
        var T = b(x, 2);
        {
            var P = (E)=>{
                var L = ql(), C = v(L), z = b(C, 2), $ = v(z);
                M((W)=>{
                    qr(C, c(i)), m($, W);
                }, [
                    ()=>y("copy_btn")
                ]), J("click", z, s), I(E, L);
            };
            X(T, (E)=>{
                c(i) && E(P);
            });
        }
        M((E, L, C, z, $)=>{
            m(f, E), Oe(d, "placeholder", L), Oe(g, "placeholder", C), p.disabled = z, m(_, $);
        }, [
            ()=>y("sign_title"),
            ()=>y("sign_placeholder"),
            ()=>y("sign_passphrase"),
            ()=>!c(r).trim(),
            ()=>y("sign_btn")
        ]), Me(d, ()=>c(r), (E)=>h(r, E)), Me(g, ()=>c(n), (E)=>h(n, E)), J("click", p, a), I(e, l), _t();
    }
    Pt([
        "click"
    ]);
    var Ul = R('<p class="error"> </p>'), $l = R('<p style="font-size: 0.75rem; color: var(--color-text-secondary); font-family: var(--color-font-mono);"> </p>'), Yl = R('<div style="padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-success); background: rgba(34, 197, 94, 0.1);"><p class="success" style="font-weight: 600;"> </p> <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.25rem;"> </p> <!></div>'), Hl = R('<div style="padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-danger); background: rgba(239, 68, 68, 0.1);"><p class="error" style="font-weight: 600;"> </p> <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.25rem;"> </p></div>'), Xl = R('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="8"></textarea> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Jl(e, t) {
        ft(t, !0);
        let r = S(""), n = S(null), i = S(""), o = S("");
        async function a() {
            if (h(o, ""), h(n, null), h(i, ""), !c(r).trim()) {
                h(o, y("verify_error_empty"), !0);
                return;
            }
            const T = await rr();
            if (T.length === 0) {
                h(o, y("verify_error_no_keys"), !0);
                return;
            }
            for (const P of T)try {
                const E = tl(c(r), P.publicKey);
                if (E.valid) {
                    h(n, {
                        valid: !0,
                        fingerprint: E.signer_fingerprint
                    }, !0), h(i, P.name ?? P.email ?? P.fingerprint.slice(-16), !0);
                    return;
                }
            } catch  {}
            h(n, {
                valid: !1,
                fingerprint: null
            }, !0);
        }
        var s = Xl(), l = v(s), u = v(l), f = b(l, 2), d = b(f, 2), g = v(d), p = b(d, 2);
        {
            var _ = (T)=>{
                var P = Ul(), E = v(P);
                M(()=>m(E, c(o))), I(T, P);
            };
            X(p, (T)=>{
                c(o) && T(_);
            });
        }
        var x = b(p, 2);
        {
            var j = (T)=>{
                var P = To(), E = et(P);
                {
                    var L = (z)=>{
                        var $ = Yl(), W = v($), oe = v(W), Se = b(W, 2), K = v(Se), A = b(Se, 2);
                        {
                            var N = (F)=>{
                                var te = $l(), de = v(te);
                                M(()=>m(de, c(n).fingerprint)), I(F, te);
                            };
                            X(A, (F)=>{
                                c(n).fingerprint && F(N);
                            });
                        }
                        M((F, te)=>{
                            m(oe, F), m(K, te);
                        }, [
                            ()=>y("verify_valid"),
                            ()=>y("verify_signed_by", {
                                    name: c(i)
                                })
                        ]), I(z, $);
                    }, C = (z)=>{
                        var $ = Hl(), W = v($), oe = v(W), Se = b(W, 2), K = v(Se);
                        M((A, N)=>{
                            m(oe, A), m(K, N);
                        }, [
                            ()=>y("verify_failed"),
                            ()=>y("verify_signer_not_found")
                        ]), I(z, $);
                    };
                    X(E, (z)=>{
                        c(n).valid ? z(L) : z(C, -1);
                    });
                }
                I(T, P);
            };
            X(x, (T)=>{
                c(n) && T(j);
            });
        }
        M((T, P, E, L)=>{
            m(u, T), Oe(f, "placeholder", P), d.disabled = E, m(g, L);
        }, [
            ()=>y("verify_title"),
            ()=>y("verify_placeholder"),
            ()=>!c(r).trim(),
            ()=>y("verify_btn")
        ]), Me(f, ()=>c(r), (T)=>h(r, T)), J("click", d, a), I(e, s), _t();
    }
    Pt([
        "click"
    ]);
    var Zl = R('<p class="success"> </p>'), Ql = R('<p class="error"> </p>'), ec = R('<div style="display: flex; flex-direction: column; gap: 0.75rem; padding: 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><p style="font-size: 0.875rem; font-weight: 500;"> </p> <input class="input"/> <input class="input"/> <input class="input" type="password"/> <!> <div style="display: flex; gap: 0.5rem; justify-content: flex-end;"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div>'), tc = R('<p class="error"> </p>'), rc = R('<div style="display: flex; flex-direction: column; gap: 0.75rem; padding: 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><p style="font-size: 0.875rem; font-weight: 500;"> </p> <textarea class="textarea" rows="6"></textarea> <!> <div style="display: flex; gap: 0.5rem; justify-content: flex-end;"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div>'), nc = R('<p style="font-size: 0.875rem; color: var(--color-text-secondary); text-align: center; padding: 2rem 0;"> </p>'), ic = R('<span style="font-size: 0.75rem; color: var(--color-primary); font-weight: normal;"> </span>'), oc = R('<div class="key-row svelte-1byd03e" style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><div style="min-width: 0; flex: 1;"><p style="font-size: 0.875rem; font-weight: 500;"> <!></p> <p style="font-size: 0.75rem; color: var(--color-text-secondary);"> </p> <p style="font-size: 0.625rem; color: var(--color-text-secondary); font-family: var(--color-font-mono);"> </p></div> <div class="key-actions svelte-1byd03e" style="display: flex; gap: 0.375rem; flex-shrink: 0;"><button class="btn" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button> <button class="btn btn-danger" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div></div>'), ac = R('<div style="display: flex; flex-direction: column; gap: 0.5rem;"></div>'), sc = R('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><div style="display: flex; align-items: center; justify-content: space-between;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <div style="display: flex; gap: 0.5rem;"><button class="btn btn-primary"> </button> <button class="btn"> </button></div></div> <!> <!> <!> <!></div>');
    function lc(e, t) {
        ft(t, !0);
        let r = S(nt([])), n = S(!1), i = S(!1), o = S(""), a = S(""), s = S(""), l = S(""), u = S(!1), f = S(""), d = S(""), g = S(!1), p = S("");
        async function _() {
            h(r, await rr(), !0);
        }
        _();
        async function x() {
            if (h(l, ""), !c(o).trim() || !c(a).trim()) {
                h(l, y("keygen_error_required"), !0);
                return;
            }
            h(u, !0);
            try {
                const D = ii(c(o), c(a), c(s) || void 0), B = Or(D.public_key);
                await Rr(D.fingerprint, B.user_ids[0]?.name ?? null, B.user_ids[0]?.email ?? null, D.public_key, D.secret_key), await _(), h(n, !1), h(o, ""), h(a, ""), h(s, ""), h(p, y("keygen_success"), !0), setTimeout(()=>h(p, ""), 3e3);
            } catch (D) {
                h(l, String(D), !0);
            } finally{
                h(u, !1);
            }
        }
        async function j() {
            if (h(d, ""), !c(f).trim()) {
                h(d, y("import_error_empty"), !0);
                return;
            }
            h(g, !0);
            try {
                const D = Or(c(f)), B = D.user_ids[0]?.name ?? null, H = D.user_ids[0]?.email ?? null, w = D.has_secret_key ? new TextEncoder().encode(c(f)) : null;
                await Rr(D.fingerprint, B, H, c(f), w), await _(), h(i, !1), h(f, ""), h(p, y("import_success", {
                    name: B ?? H ?? D.fingerprint.slice(-16)
                }), !0), setTimeout(()=>h(p, ""), 3e3);
            } catch (D) {
                h(d, String(D), !0);
            } finally{
                h(g, !1);
            }
        }
        async function T(D) {
            await _l(D), await _(), h(p, y("key_deleted"), !0), setTimeout(()=>h(p, ""), 3e3);
        }
        async function P(D) {
            await navigator.clipboard.writeText(D.publicKey), h(p, y("key_exported"), !0), setTimeout(()=>h(p, ""), 3e3);
        }
        var E = sc(), L = v(E), C = v(L), z = v(C), $ = b(C, 2), W = v($), oe = v(W), Se = b(W, 2), K = v(Se), A = b(L, 2);
        {
            var N = (D)=>{
                var B = Zl(), H = v(B);
                M(()=>m(H, c(p))), I(D, B);
            };
            X(A, (D)=>{
                c(p) && D(N);
            });
        }
        var F = b(A, 2);
        {
            var te = (D)=>{
                var B = ec(), H = v(B), w = v(H), O = b(H, 2), V = b(O, 2), Z = b(V, 2), ae = b(Z, 2);
                {
                    var ve = (Q)=>{
                        var fe = Ql(), _e = v(fe);
                        M(()=>m(_e, c(l))), I(Q, fe);
                    };
                    X(ae, (Q)=>{
                        c(l) && Q(ve);
                    });
                }
                var be = b(ae, 2), ce = v(be), Ne = v(ce), re = b(ce, 2), ue = v(re);
                M((Q, fe, _e, G, Ae, me)=>{
                    m(w, Q), Oe(O, "placeholder", fe), Oe(V, "placeholder", _e), Oe(Z, "placeholder", G), m(Ne, Ae), re.disabled = c(u), m(ue, me);
                }, [
                    ()=>y("keygen_title"),
                    ()=>y("keygen_name"),
                    ()=>y("keygen_email"),
                    ()=>y("keygen_passphrase"),
                    ()=>y("keygen_cancel"),
                    ()=>c(u) ? y("keygen_loading") : y("keygen_submit")
                ]), Me(O, ()=>c(o), (Q)=>h(o, Q)), Me(V, ()=>c(a), (Q)=>h(a, Q)), Me(Z, ()=>c(s), (Q)=>h(s, Q)), J("click", ce, ()=>h(n, !1)), J("click", re, x), I(D, B);
            };
            X(F, (D)=>{
                c(n) && D(te);
            });
        }
        var de = b(F, 2);
        {
            var Ce = (D)=>{
                var B = rc(), H = v(B), w = v(H), O = b(H, 2), V = b(O, 2);
                {
                    var Z = (re)=>{
                        var ue = tc(), Q = v(ue);
                        M(()=>m(Q, c(d))), I(re, ue);
                    };
                    X(V, (re)=>{
                        c(d) && re(Z);
                    });
                }
                var ae = b(V, 2), ve = v(ae), be = v(ve), ce = b(ve, 2), Ne = v(ce);
                M((re, ue, Q, fe)=>{
                    m(w, re), Oe(O, "placeholder", ue), m(be, Q), ce.disabled = c(g), m(Ne, fe);
                }, [
                    ()=>y("import_title"),
                    ()=>y("import_placeholder"),
                    ()=>y("import_cancel"),
                    ()=>c(g) ? y("import_loading") : y("import_submit")
                ]), Me(O, ()=>c(f), (re)=>h(f, re)), J("click", ve, ()=>h(i, !1)), J("click", ce, j), I(D, B);
            };
            X(de, (D)=>{
                c(i) && D(Ce);
            });
        }
        var Ye = b(de, 2);
        {
            var vt = (D)=>{
                var B = nc(), H = v(B);
                M((w)=>m(H, w), [
                    ()=>y("keys_empty")
                ]), I(D, B);
            }, He = (D)=>{
                var B = ac();
                pr(B, 21, ()=>c(r), (H)=>H.fingerprint, (H, w)=>{
                    var O = oc(), V = v(O), Z = v(V), ae = v(Z), ve = b(ae);
                    {
                        var be = (me)=>{
                            var Te = ic(), se = v(Te);
                            M((ke)=>m(se, ke), [
                                ()=>y("keys_own_label")
                            ]), I(me, Te);
                        };
                        X(ve, (me)=>{
                            c(w).isOwn && me(be);
                        });
                    }
                    var ce = b(Z, 2), Ne = v(ce), re = b(ce, 2), ue = v(re), Q = b(V, 2), fe = v(Q), _e = v(fe), G = b(fe, 2), Ae = v(G);
                    M((me, Te, se, ke)=>{
                        m(ae, `${me ?? ""} `), m(Ne, c(w).email ?? ""), m(ue, Te), m(_e, se), m(Ae, ke);
                    }, [
                        ()=>c(w).name ?? y("keys_unnamed"),
                        ()=>c(w).fingerprint.slice(-16),
                        ()=>y("key_export_btn"),
                        ()=>y("key_delete_btn")
                    ]), J("click", fe, ()=>P(c(w))), J("click", G, ()=>T(c(w).fingerprint)), I(H, O);
                }), I(D, B);
            };
            X(Ye, (D)=>{
                c(r).length === 0 ? D(vt) : D(He, -1);
            });
        }
        M((D, B, H)=>{
            m(z, D), m(oe, B), m(K, H);
        }, [
            ()=>y("keys_title"),
            ()=>y("keys_generate_btn"),
            ()=>y("keys_import_btn")
        ]), J("click", W, ()=>{
            h(n, !c(n)), h(i, !1);
        }), J("click", Se, ()=>{
            h(i, !c(i)), h(n, !1);
        }), I(e, E), _t();
    }
    Pt([
        "click"
    ]);
    var cc = R('<option class="svelte-1n46o8q"> </option>'), uc = Zn('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'), fc = Zn('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'), _c = R('<div class="card" style="text-align: center;"><p class="error"> </p></div>'), dc = R('<div class="card" style="text-align: center;"><p style="color: var(--color-text-secondary);"> </p></div>'), vc = R('<!> <div class="tabs"><button> </button> <button> </button> <button> </button> <button> </button> <button> </button></div> <!>', 1), pc = R('<header style="text-align: center; margin-bottom: 2rem; position: relative;"><div class="header-controls svelte-1n46o8q"><a href="https://keychainpgp.org" target="_blank" rel="noopener noreferrer" class="header-link svelte-1n46o8q" title="keychainpgp.org"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></a> <a href="https://github.com/KeychainPGP/keychainpgp" target="_blank" rel="noopener noreferrer" class="header-link svelte-1n46o8q" title="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path></svg></a> <select class="locale-select svelte-1n46o8q"></select> <button class="theme-toggle svelte-1n46o8q"><!></button></div> <h1 style="font-size: 1.5rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;"><img src="./icon.png" alt="" style="width: 32px; height: 32px; border-radius: 6px;"/> KeychainPGP <span style="color: var(--color-text-secondary); font-weight: 400; font-size: 0.875rem;">Web</span></h1> <p style="color: var(--color-text-secondary); font-size: 0.875rem; margin-top: 0.25rem;"> </p></header> <!> <footer style="text-align: center; margin-top: 3rem; color: var(--color-text-secondary); font-size: 0.75rem;"><p> </p></footer>', 1);
    function hc(e, t) {
        ft(t, !0);
        let r = S(!1), n = S(""), i = S("encrypt"), o = S(nt(rl())), a = S(!al());
        po(()=>{
            li(c(o));
        });
        function s() {
            h(o, c(o) === "dark" ? "light" : "dark", !0), nl(c(o));
        }
        function l(A) {
            const N = A.target;
            Ns(N.value);
        }
        async function u() {
            try {
                await Qs(), h(r, !0);
            } catch (A) {
                h(n, y("loading_error", {
                    error: String(A)
                }), !0);
            }
        }
        u();
        var f = pc(), d = et(f), g = v(d), p = b(v(g), 4);
        pr(p, 21, ()=>Yt, (A)=>A.code, (A, N)=>{
            var F = cc(), te = v(F), de = {};
            M(()=>{
                m(te, c(N).name), de !== (de = c(N).code) && (F.value = (F.__value = c(N).code) ?? "");
            }), I(A, F);
        });
        var _;
        Ko(p);
        var x = b(p, 2), j = v(x);
        {
            var T = (A)=>{
                var N = uc();
                I(A, N);
            }, P = (A)=>{
                var N = fc();
                I(A, N);
            };
            X(j, (A)=>{
                c(o) === "light" ? A(T) : A(P, -1);
            });
        }
        var E = b(g, 4), L = v(E), C = b(d, 2);
        {
            var z = (A)=>{
                var N = _c(), F = v(N), te = v(F);
                M(()=>m(te, c(n))), I(A, N);
            }, $ = (A)=>{
                var N = dc(), F = v(N), te = v(F);
                M((de)=>m(te, de), [
                    ()=>y("loading")
                ]), I(A, N);
            }, W = (A)=>{
                var N = vc(), F = et(N);
                {
                    var te = (G)=>{
                        Il(G, {
                            onDismiss: ()=>h(a, !1)
                        });
                    };
                    X(F, (G)=>{
                        c(a) && G(te);
                    });
                }
                var de = b(F, 2), Ce = v(de);
                let Ye;
                var vt = v(Ce), He = b(Ce, 2);
                let D;
                var B = v(He), H = b(He, 2);
                let w;
                var O = v(H), V = b(H, 2);
                let Z;
                var ae = v(V), ve = b(V, 2);
                let be;
                var ce = v(ve), Ne = b(de, 2);
                {
                    var re = (G)=>{
                        jl(G, {});
                    }, ue = (G)=>{
                        Vl(G, {});
                    }, Q = (G)=>{
                        Bl(G, {});
                    }, fe = (G)=>{
                        Jl(G, {});
                    }, _e = (G)=>{
                        lc(G, {});
                    };
                    X(Ne, (G)=>{
                        c(i) === "encrypt" ? G(re) : c(i) === "decrypt" ? G(ue, 1) : c(i) === "sign" ? G(Q, 2) : c(i) === "verify" ? G(fe, 3) : c(i) === "keys" && G(_e, 4);
                    });
                }
                M((G, Ae, me, Te, se)=>{
                    Ye = ht(Ce, 1, "tab", null, Ye, {
                        active: c(i) === "encrypt"
                    }), m(vt, G), D = ht(He, 1, "tab", null, D, {
                        active: c(i) === "decrypt"
                    }), m(B, Ae), w = ht(H, 1, "tab", null, w, {
                        active: c(i) === "sign"
                    }), m(O, me), Z = ht(V, 1, "tab", null, Z, {
                        active: c(i) === "verify"
                    }), m(ae, Te), be = ht(ve, 1, "tab", null, be, {
                        active: c(i) === "keys"
                    }), m(ce, se);
                }, [
                    ()=>y("tab_encrypt"),
                    ()=>y("tab_decrypt"),
                    ()=>y("tab_sign"),
                    ()=>y("tab_verify"),
                    ()=>y("tab_keys")
                ]), J("click", Ce, ()=>h(i, "encrypt")), J("click", He, ()=>h(i, "decrypt")), J("click", H, ()=>h(i, "sign")), J("click", V, ()=>h(i, "verify")), J("click", ve, ()=>h(i, "keys")), I(A, N);
            };
            X(C, (A)=>{
                c(n) ? A(z) : c(r) ? A(W, -1) : A($, 1);
            });
        }
        var oe = b(C, 2), Se = v(oe), K = v(Se);
        M((A, N, F, te)=>{
            _ !== (_ = A) && (p.value = (p.__value = A) ?? "", Qn(p, A)), Oe(x, "title", N), m(L, F), m(K, te);
        }, [
            js,
            ()=>c(o) === "light" ? y("theme_light") : y("theme_dark"),
            ()=>y("app_subtitle"),
            ()=>y("app_footer")
        ]), J("change", p, l), J("click", x, s), I(e, f), _t();
    }
    Pt([
        "change",
        "click"
    ]);
    async function gc() {
        await Cs(), Oo(hc, {
            target: document.getElementById("app")
        });
    }
    gc();
})();
