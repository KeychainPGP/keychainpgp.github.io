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
    const di = 1, vi = 2, pi = 16, hi = 1, gi = 2, we = Symbol(), dn = "http://www.w3.org/1999/xhtml", yi = !1;
    var Dr = Array.isArray, bi = Array.prototype.indexOf, Mt = Array.prototype.includes, dr = Array.from, mi = Object.defineProperty, Wt = Object.getOwnPropertyDescriptor, wi = Object.getOwnPropertyDescriptors, xi = Object.prototype, ki = Array.prototype, vn = Object.getPrototypeOf, Ur = Object.isExtensible;
    const Ei = ()=>{};
    function Si(e) {
        for(var t = 0; t < e.length; t++)e[t]();
    }
    function pn() {
        var e, t, r = new Promise((n, i)=>{
            e = n, t = i;
        });
        return {
            promise: r,
            resolve: e,
            reject: t
        };
    }
    const ye = 2, Zt = 4, vr = 8, hn = 1 << 24, ft = 16, Ue = 32, Et = 64, Er = 128, Ke = 512, he = 1024, Ee = 2048, He = 4096, Le = 8192, Be = 16384, Pt = 32768, $r = 1 << 25, Lt = 65536, Yr = 1 << 17, Ti = 1 << 18, Kt = 1 << 19, Ai = 1 << 20, rt = 1 << 25, St = 65536, Sr = 1 << 21, Mr = 1 << 22, st = 1 << 23, Bt = Symbol("$state"), Pi = Symbol(""), Qe = new class extends Error {
        name = "StaleReactionError";
        message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
    }, Ii = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml");
    function Oi() {
        throw new Error("https://svelte.dev/e/async_derived_orphan");
    }
    function Ri(e, t, r) {
        throw new Error("https://svelte.dev/e/each_key_duplicate");
    }
    function Di(e) {
        throw new Error("https://svelte.dev/e/effect_in_teardown");
    }
    function Mi() {
        throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    }
    function Li(e) {
        throw new Error("https://svelte.dev/e/effect_orphan");
    }
    function Ci() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
    }
    function Ni() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
    }
    function ji() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
    }
    function zi() {
        throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    }
    function Ki() {
        throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
    }
    function Vi() {
        console.warn("https://svelte.dev/e/select_multiple_invalid_value");
    }
    function Fi() {
        console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
    }
    function gn(e) {
        return e === this.v;
    }
    function Gi(e, t) {
        return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
    }
    function yn(e) {
        return !Gi(e, this.v);
    }
    let qi = !1, Fe = null;
    function Ct(e) {
        Fe = e;
    }
    function _t(e, t = !1, r) {
        Fe = {
            p: Fe,
            i: !1,
            c: null,
            e: null,
            s: e,
            x: null,
            r: U,
            l: null
        };
    }
    function dt(e) {
        var t = Fe, r = t.e;
        if (r !== null) {
            t.e = null;
            for (var n of r)Kn(n);
        }
        return t.i = !0, Fe = t.p, {};
    }
    function bn() {
        return !0;
    }
    let yt = [];
    function mn() {
        var e = yt;
        yt = [], Si(e);
    }
    function Dt(e) {
        if (yt.length === 0 && !Ut) {
            var t = yt;
            queueMicrotask(()=>{
                t === yt && mn();
            });
        }
        yt.push(e);
    }
    function Wi() {
        for(; yt.length > 0;)mn();
    }
    function wn(e) {
        var t = U;
        if (t === null) return q.f |= st, e;
        if ((t.f & Pt) === 0 && (t.f & Zt) === 0) throw e;
        at(e, t);
    }
    function at(e, t) {
        for(; t !== null;){
            if ((t.f & Er) !== 0) {
                if ((t.f & Pt) === 0) throw e;
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
    const Bi = -7169;
    function _e(e, t) {
        e.f = e.f & Bi | t;
    }
    function Lr(e) {
        (e.f & Ke) !== 0 || e.deps === null ? _e(e, he) : _e(e, He);
    }
    function xn(e) {
        if (e !== null) for (const t of e)(t.f & ye) === 0 || (t.f & St) === 0 || (t.f ^= St, xn(t.deps));
    }
    function kn(e, t, r) {
        (e.f & Ee) !== 0 ? t.add(e) : (e.f & He) !== 0 && r.add(e), xn(e.deps), _e(e, he);
    }
    const it = new Set;
    let Y = null, qe = null, Tr = null, Ut = !1, mr = !1, Rt = null, ar = null;
    var Hr = 0;
    let Ui = 1;
    class ut {
        id = Ui++;
        current = new Map;
        previous = new Map;
        #t = new Set;
        #l = new Set;
        #e = new Map;
        #n = new Map;
        #i = null;
        #r = [];
        #o = new Set;
        #a = new Set;
        #s = new Map;
        is_fork = !1;
        #f = !1;
        #c = new Set;
        #_() {
            return this.is_fork || this.#n.size > 0;
        }
        #v() {
            for (const n of this.#c)for (const i of n.#n.keys()){
                for(var t = !1, r = i; r.parent !== null;){
                    if (this.#s.has(r)) {
                        t = !0;
                        break;
                    }
                    r = r.parent;
                }
                if (!t) return !0;
            }
            return !1;
        }
        skip_effect(t) {
            this.#s.has(t) || this.#s.set(t, {
                d: [],
                m: []
            });
        }
        unskip_effect(t) {
            var r = this.#s.get(t);
            if (r) {
                this.#s.delete(t);
                for (var n of r.d)_e(n, Ee), this.schedule(n);
                for (n of r.m)_e(n, He), this.schedule(n);
            }
        }
        #d() {
            if (Hr++ > 1e3 && (it.delete(this), Yi()), !this.#_()) {
                for (const s of this.#o)this.#a.delete(s), _e(s, Ee), this.schedule(s);
                for (const s of this.#a)_e(s, He), this.schedule(s);
            }
            const t = this.#r;
            this.#r = [], this.apply();
            var r = Rt = [], n = [], i = ar = [];
            for (const s of t)try {
                this.#u(s, r, n);
            } catch (c) {
                throw An(s), c;
            }
            if (Y = null, i.length > 0) {
                var o = ut.ensure();
                for (const s of i)o.schedule(s);
            }
            if (Rt = null, ar = null, this.#_() || this.#v()) {
                this.#p(n), this.#p(r);
                for (const [s, c] of this.#s)Tn(s, c);
            } else {
                this.#e.size === 0 && it.delete(this), this.#o.clear(), this.#a.clear();
                for (const s of this.#t)s(this);
                this.#t.clear(), Xr(n), Xr(r), this.#i?.resolve();
            }
            var a = Y;
            if (this.#r.length > 0) {
                const s = a ??= this;
                s.#r.push(...this.#r.filter((c)=>!s.#r.includes(c)));
            }
            a !== null && (it.add(a), a.#d()), it.has(this) || this.#y();
        }
        #u(t, r, n) {
            t.f ^= he;
            for(var i = t.first; i !== null;){
                var o = i.f, a = (o & (Ue | Et)) !== 0, s = a && (o & he) !== 0, c = s || (o & Le) !== 0 || this.#s.has(i);
                if (!c && i.fn !== null) {
                    a ? i.f ^= he : (o & Zt) !== 0 ? r.push(i) : tr(i) && ((o & ft) !== 0 && this.#a.add(i), zt(i));
                    var l = i.first;
                    if (l !== null) {
                        i = l;
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
        #p(t) {
            for(var r = 0; r < t.length; r += 1)kn(t[r], this.#o, this.#a);
        }
        capture(t, r, n = !1) {
            r !== we && !this.previous.has(t) && this.previous.set(t, r), (t.f & st) === 0 && (this.current.set(t, [
                t.v,
                n
            ]), qe?.set(t, t.v));
        }
        activate() {
            Y = this;
        }
        deactivate() {
            Y = null, qe = null;
        }
        flush() {
            try {
                mr = !0, Y = this, this.#d();
            } finally{
                Hr = 0, Tr = null, Rt = null, ar = null, mr = !1, Y = null, qe = null, lt.clear();
            }
        }
        discard() {
            for (const t of this.#l)t(this);
            this.#l.clear(), it.delete(this);
        }
        #y() {
            for (const l of it){
                var t = l.id < this.id, r = [];
                for (const [f, [d, h]] of this.current){
                    if (l.current.has(f)) {
                        var n = l.current.get(f)[0];
                        if (t && d !== n) l.current.set(f, [
                            d,
                            h
                        ]);
                        else continue;
                    }
                    r.push(f);
                }
                var i = [
                    ...l.current.keys()
                ].filter((f)=>!this.current.has(f));
                if (i.length === 0) t && l.discard();
                else if (r.length > 0) {
                    l.activate();
                    var o = new Set, a = new Map;
                    for (var s of r)En(s, i, o, a);
                    if (l.#r.length > 0) {
                        l.apply();
                        for (var c of l.#r)l.#u(c, [], []);
                        l.#r = [];
                    }
                    l.deactivate();
                }
            }
            for (const l of it)l.#c.has(this) && (l.#c.delete(this), l.#c.size === 0 && !l.#_() && (l.activate(), l.#d()));
        }
        increment(t, r) {
            let n = this.#e.get(r) ?? 0;
            if (this.#e.set(r, n + 1), t) {
                let i = this.#n.get(r) ?? 0;
                this.#n.set(r, i + 1);
            }
        }
        decrement(t, r, n) {
            let i = this.#e.get(r) ?? 0;
            if (i === 1 ? this.#e.delete(r) : this.#e.set(r, i - 1), t) {
                let o = this.#n.get(r) ?? 0;
                o === 1 ? this.#n.delete(r) : this.#n.set(r, o - 1);
            }
            this.#f || n || (this.#f = !0, Dt(()=>{
                this.#f = !1, this.flush();
            }));
        }
        transfer_effects(t, r) {
            for (const n of t)this.#o.add(n);
            for (const n of r)this.#a.add(n);
            t.clear(), r.clear();
        }
        oncommit(t) {
            this.#t.add(t);
        }
        ondiscard(t) {
            this.#l.add(t);
        }
        settled() {
            return (this.#i ??= pn()).promise;
        }
        static ensure() {
            if (Y === null) {
                const t = Y = new ut;
                mr || (it.add(Y), Ut || Dt(()=>{
                    Y === t && t.flush();
                }));
            }
            return Y;
        }
        apply() {
            {
                qe = null;
                return;
            }
        }
        schedule(t) {
            if (Tr = t, t.b?.is_pending && (t.f & (Zt | vr | hn)) !== 0 && (t.f & Pt) === 0) {
                t.b.defer_effect(t);
                return;
            }
            for(var r = t; r.parent !== null;){
                r = r.parent;
                var n = r.f;
                if (Rt !== null && r === U && (q === null || (q.f & ye) === 0)) return;
                if ((n & (Et | Ue)) !== 0) {
                    if ((n & he) === 0) return;
                    r.f ^= he;
                }
            }
            this.#r.push(r);
        }
    }
    function $i(e) {
        var t = Ut;
        Ut = !0;
        try {
            for(var r;;){
                if (Wi(), Y === null) return r;
                Y.flush();
            }
        } finally{
            Ut = t;
        }
    }
    function Yi() {
        try {
            Ci();
        } catch (e) {
            at(e, Tr);
        }
    }
    let Ze = null;
    function Xr(e) {
        var t = e.length;
        if (t !== 0) {
            for(var r = 0; r < t;){
                var n = e[r++];
                if ((n.f & (Be | Le)) === 0 && tr(n) && (Ze = new Set, zt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Gn(n), Ze?.size > 0)) {
                    lt.clear();
                    for (const i of Ze){
                        if ((i.f & (Be | Le)) !== 0) continue;
                        const o = [
                            i
                        ];
                        let a = i.parent;
                        for(; a !== null;)Ze.has(a) && (Ze.delete(a), o.push(a)), a = a.parent;
                        for(let s = o.length - 1; s >= 0; s--){
                            const c = o[s];
                            (c.f & (Be | Le)) === 0 && zt(c);
                        }
                    }
                    Ze.clear();
                }
            }
            Ze = null;
        }
    }
    function En(e, t, r, n) {
        if (!r.has(e) && (r.add(e), e.reactions !== null)) for (const i of e.reactions){
            const o = i.f;
            (o & ye) !== 0 ? En(i, t, r, n) : (o & (Mr | ft)) !== 0 && (o & Ee) === 0 && Sn(i, t, n) && (_e(i, Ee), Cr(i));
        }
    }
    function Sn(e, t, r) {
        const n = r.get(e);
        if (n !== void 0) return n;
        if (e.deps !== null) for (const i of e.deps){
            if (Mt.call(t, i)) return !0;
            if ((i.f & ye) !== 0 && Sn(i, t, r)) return r.set(i, !0), !0;
        }
        return r.set(e, !1), !1;
    }
    function Cr(e) {
        Y.schedule(e);
    }
    function Tn(e, t) {
        if (!((e.f & Ue) !== 0 && (e.f & he) !== 0)) {
            (e.f & Ee) !== 0 ? t.d.push(e) : (e.f & He) !== 0 && t.m.push(e), _e(e, he);
            for(var r = e.first; r !== null;)Tn(r, t), r = r.next;
        }
    }
    function An(e) {
        _e(e, he);
        for(var t = e.first; t !== null;)An(t), t = t.next;
    }
    function Hi(e) {
        let t = 0, r = Tt(0), n;
        return ()=>{
            zr() && (u(r), Vn(()=>(t === 0 && (n = Jn(()=>e(()=>$t(r)))), t += 1, ()=>{
                    Dt(()=>{
                        t -= 1, t === 0 && (n?.(), n = void 0, $t(r));
                    });
                })));
        };
    }
    var Xi = Lt | Kt;
    function Ji(e, t, r, n) {
        new Zi(e, t, r, n);
    }
    class Zi {
        parent;
        is_pending = !1;
        transform_error;
        #t;
        #l = null;
        #e;
        #n;
        #i;
        #r = null;
        #o = null;
        #a = null;
        #s = null;
        #f = 0;
        #c = 0;
        #_ = !1;
        #v = new Set;
        #d = new Set;
        #u = null;
        #p = Hi(()=>(this.#u = Tt(this.#f), ()=>{
                this.#u = null;
            }));
        constructor(t, r, n, i){
            this.#t = t, this.#e = r, this.#n = (o)=>{
                var a = U;
                a.b = this, a.f |= Er, n(o);
            }, this.parent = U.b, this.transform_error = i ?? this.parent?.transform_error ?? ((o)=>o), this.#i = Kr(()=>{
                this.#b();
            }, Xi);
        }
        #y() {
            try {
                this.#r = ze(()=>this.#n(this.#t));
            } catch (t) {
                this.error(t);
            }
        }
        #w(t) {
            const r = this.#e.failed;
            r && (this.#a = ze(()=>{
                r(this.#t, ()=>t, ()=>()=>{});
            }));
        }
        #x() {
            const t = this.#e.pending;
            t && (this.is_pending = !0, this.#o = ze(()=>t(this.#t)), Dt(()=>{
                var r = this.#s = document.createDocumentFragment(), n = ct();
                r.append(n), this.#r = this.#g(()=>ze(()=>this.#n(n))), this.#c === 0 && (this.#t.before(r), this.#s = null, xt(this.#o, ()=>{
                    this.#o = null;
                }), this.#h(Y));
            }));
        }
        #b() {
            try {
                if (this.is_pending = this.has_pending_snippet(), this.#c = 0, this.#f = 0, this.#r = ze(()=>{
                    this.#n(this.#t);
                }), this.#c > 0) {
                    var t = this.#s = document.createDocumentFragment();
                    Gr(this.#r, t);
                    const r = this.#e.pending;
                    this.#o = ze(()=>r(this.#t));
                } else this.#h(Y);
            } catch (r) {
                this.error(r);
            }
        }
        #h(t) {
            this.is_pending = !1, t.transfer_effects(this.#v, this.#d);
        }
        defer_effect(t) {
            kn(t, this.#v, this.#d);
        }
        is_rendered() {
            return !this.is_pending && (!this.parent || this.parent.is_rendered());
        }
        has_pending_snippet() {
            return !!this.#e.pending;
        }
        #g(t) {
            var r = U, n = q, i = Fe;
            Xe(this.#i), Ge(this.#i), Ct(this.#i.ctx);
            try {
                return ut.ensure(), t();
            } catch (o) {
                return wn(o), null;
            } finally{
                Xe(r), Ge(n), Ct(i);
            }
        }
        #m(t, r) {
            if (!this.has_pending_snippet()) {
                this.parent && this.parent.#m(t, r);
                return;
            }
            this.#c += t, this.#c === 0 && (this.#h(r), this.#o && xt(this.#o, ()=>{
                this.#o = null;
            }), this.#s && (this.#t.before(this.#s), this.#s = null));
        }
        update_pending_count(t, r) {
            this.#m(t, r), this.#f += t, !(!this.#u || this.#_) && (this.#_ = !0, Dt(()=>{
                this.#_ = !1, this.#u && Nt(this.#u, this.#f);
            }));
        }
        get_effect_pending() {
            return this.#p(), u(this.#u);
        }
        error(t) {
            var r = this.#e.onerror;
            let n = this.#e.failed;
            if (!r && !n) throw t;
            this.#r && (Re(this.#r), this.#r = null), this.#o && (Re(this.#o), this.#o = null), this.#a && (Re(this.#a), this.#a = null);
            var i = !1, o = !1;
            const a = ()=>{
                if (i) {
                    Fi();
                    return;
                }
                i = !0, o && Ki(), this.#a !== null && xt(this.#a, ()=>{
                    this.#a = null;
                }), this.#g(()=>{
                    this.#b();
                });
            }, s = (c)=>{
                try {
                    o = !0, r?.(c, a), o = !1;
                } catch (l) {
                    at(l, this.#i && this.#i.parent);
                }
                n && (this.#a = this.#g(()=>{
                    try {
                        return ze(()=>{
                            var l = U;
                            l.b = this, l.f |= Er, n(this.#t, ()=>c, ()=>a);
                        });
                    } catch (l) {
                        return at(l, this.#i.parent), null;
                    }
                }));
            };
            Dt(()=>{
                var c;
                try {
                    c = this.transform_error(t);
                } catch (l) {
                    at(l, this.#i && this.#i.parent);
                    return;
                }
                c !== null && typeof c == "object" && typeof c.then == "function" ? c.then(s, (l)=>at(l, this.#i && this.#i.parent)) : s(c);
            });
        }
    }
    function Qi(e, t, r, n) {
        const i = In;
        var o = e.filter((h)=>!h.settled);
        if (r.length === 0 && o.length === 0) {
            n(t.map(i));
            return;
        }
        var a = U, s = eo(), c = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((h)=>h.promise)) : null;
        function l(h) {
            s();
            try {
                n(h);
            } catch (p) {
                (a.f & Be) === 0 && at(p, a);
            }
            ur();
        }
        if (r.length === 0) {
            c.then(()=>l(t.map(i)));
            return;
        }
        var f = Pn();
        function d() {
            Promise.all(r.map((h)=>to(h))).then((h)=>l([
                    ...t.map(i),
                    ...h
                ])).catch((h)=>at(h, a)).finally(()=>f());
        }
        c ? c.then(()=>{
            s(), d(), ur();
        }) : d();
    }
    function eo() {
        var e = U, t = q, r = Fe, n = Y;
        return function(o = !0) {
            Xe(e), Ge(t), Ct(r), o && (e.f & Be) === 0 && (n?.activate(), n?.apply());
        };
    }
    function ur(e = !0) {
        Xe(null), Ge(null), Ct(null), e && Y?.deactivate();
    }
    function Pn() {
        var e = U, t = e.b, r = Y, n = t.is_rendered();
        return t.update_pending_count(1, r), r.increment(n, e), (i = !1)=>{
            t.update_pending_count(-1, r), r.decrement(n, e, i);
        };
    }
    function In(e) {
        var t = ye | Ee, r = q !== null && (q.f & ye) !== 0 ? q : null;
        return U !== null && (U.f |= Kt), {
            ctx: Fe,
            deps: null,
            effects: null,
            equals: gn,
            f: t,
            fn: e,
            reactions: null,
            rv: 0,
            v: we,
            wv: 0,
            parent: r ?? U,
            ac: null
        };
    }
    function to(e, t, r) {
        let n = U;
        n === null && Oi();
        var i = void 0, o = Tt(we), a = !q, s = new Map;
        return bo(()=>{
            var c = U, l = pn();
            i = l.promise;
            try {
                Promise.resolve(e()).then(l.resolve, l.reject).finally(ur);
            } catch (p) {
                l.reject(p), ur();
            }
            var f = Y;
            if (a) {
                if ((c.f & Pt) !== 0) var d = Pn();
                if (n.b.is_rendered()) s.get(f)?.reject(Qe), s.delete(f);
                else {
                    for (const p of s.values())p.reject(Qe);
                    s.clear();
                }
                s.set(f, l);
            }
            const h = (p, _ = void 0)=>{
                if (d) {
                    var x = _ === Qe;
                    d(x);
                }
                if (!(_ === Qe || (c.f & Be) !== 0)) {
                    if (f.activate(), _) o.f |= st, Nt(o, _);
                    else {
                        (o.f & st) !== 0 && (o.f ^= st), Nt(o, p);
                        for (const [j, A] of s){
                            if (s.delete(j), j === f) break;
                            A.reject(Qe);
                        }
                    }
                    f.deactivate();
                }
            };
            l.promise.then(h, (p)=>h(null, p || "unknown"));
        }), zn(()=>{
            for (const c of s.values())c.reject(Qe);
        }), new Promise((c)=>{
            function l(f) {
                function d() {
                    f === i ? c(o) : l(i);
                }
                f.then(d, d);
            }
            l(i);
        });
    }
    function ro(e) {
        const t = In(e);
        return t.equals = yn, t;
    }
    function no(e) {
        var t = e.effects;
        if (t !== null) {
            e.effects = null;
            for(var r = 0; r < t.length; r += 1)Re(t[r]);
        }
    }
    function io(e) {
        for(var t = e.parent; t !== null;){
            if ((t.f & ye) === 0) return (t.f & Be) === 0 ? t : null;
            t = t.parent;
        }
        return null;
    }
    function Nr(e) {
        var t, r = U;
        Xe(io(e));
        try {
            e.f &= ~St, no(e), t = Yn(e);
        } finally{
            Xe(r);
        }
        return t;
    }
    function On(e) {
        var t = e.v, r = Nr(e);
        if (!e.equals(r) && (e.wv = Un(), (!Y?.is_fork || e.deps === null) && (e.v = r, Y?.capture(e, t, !0), e.deps === null))) {
            _e(e, he);
            return;
        }
        At || (qe !== null ? (zr() || Y?.is_fork) && qe.set(e, r) : Lr(e));
    }
    function oo(e) {
        if (e.effects !== null) for (const t of e.effects)(t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Qe), t.teardown = Ei, t.ac = null, Qt(t, 0), Vr(t));
    }
    function Rn(e) {
        if (e.effects !== null) for (const t of e.effects)t.teardown && zt(t);
    }
    let Ar = new Set;
    const lt = new Map;
    let Dn = !1;
    function Tt(e, t) {
        var r = {
            f: 0,
            v: e,
            reactions: null,
            equals: gn,
            rv: 0,
            wv: 0
        };
        return r;
    }
    function S(e, t) {
        const r = Tt(e);
        return xo(r), r;
    }
    function ao(e, t = !1, r = !0) {
        const n = Tt(e);
        return t || (n.equals = yn), n;
    }
    function g(e, t, r = !1) {
        q !== null && (!We || (q.f & Yr) !== 0) && bn() && (q.f & (ye | ft | Mr | Yr)) !== 0 && (Ve === null || !Mt.call(Ve, e)) && zi();
        let n = r ? nt(t) : t;
        return Nt(e, n, ar);
    }
    function Nt(e, t, r = null) {
        if (!e.equals(t)) {
            var n = e.v;
            At ? lt.set(e, t) : lt.set(e, n), e.v = t;
            var i = ut.ensure();
            if (i.capture(e, n), (e.f & ye) !== 0) {
                const o = e;
                (e.f & Ee) !== 0 && Nr(o), qe === null && Lr(o);
            }
            e.wv = Un(), Mn(e, Ee, r), U !== null && (U.f & he) !== 0 && (U.f & (Ue | Et)) === 0 && (je === null ? ko([
                e
            ]) : je.push(e)), !i.is_fork && Ar.size > 0 && !Dn && so();
        }
        return t;
    }
    function so() {
        Dn = !1;
        for (const e of Ar)(e.f & he) !== 0 && _e(e, He), tr(e) && zt(e);
        Ar.clear();
    }
    function fr(e, t = 1) {
        var r = u(e), n = t === 1 ? r++ : r--;
        return g(e, r), n;
    }
    function $t(e) {
        g(e, e.v + 1);
    }
    function Mn(e, t, r) {
        var n = e.reactions;
        if (n !== null) for(var i = n.length, o = 0; o < i; o++){
            var a = n[o], s = a.f, c = (s & Ee) === 0;
            if (c && _e(a, t), (s & ye) !== 0) {
                var l = a;
                qe?.delete(l), (s & St) === 0 && (s & Ke && (a.f |= St), Mn(l, He, r));
            } else if (c) {
                var f = a;
                (s & ft) !== 0 && Ze !== null && Ze.add(f), r !== null ? r.push(f) : Cr(f);
            }
        }
    }
    function nt(e) {
        if (typeof e != "object" || e === null || Bt in e) return e;
        const t = vn(e);
        if (t !== xi && t !== ki) return e;
        var r = new Map, n = Dr(e), i = S(0), o = kt, a = (s)=>{
            if (kt === o) return s();
            var c = q, l = kt;
            Ge(null), tn(o);
            var f = s();
            return Ge(c), tn(l), f;
        };
        return n && r.set("length", S(e.length)), new Proxy(e, {
            defineProperty (s, c, l) {
                (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Ni();
                var f = r.get(c);
                return f === void 0 ? a(()=>{
                    var d = S(l.value);
                    return r.set(c, d), d;
                }) : g(f, l.value, !0), !0;
            },
            deleteProperty (s, c) {
                var l = r.get(c);
                if (l === void 0) {
                    if (c in s) {
                        const f = a(()=>S(we));
                        r.set(c, f), $t(i);
                    }
                } else g(l, we), $t(i);
                return !0;
            },
            get (s, c, l) {
                if (c === Bt) return e;
                var f = r.get(c), d = c in s;
                if (f === void 0 && (!d || Wt(s, c)?.writable) && (f = a(()=>{
                    var p = nt(d ? s[c] : we), _ = S(p);
                    return _;
                }), r.set(c, f)), f !== void 0) {
                    var h = u(f);
                    return h === we ? void 0 : h;
                }
                return Reflect.get(s, c, l);
            },
            getOwnPropertyDescriptor (s, c) {
                var l = Reflect.getOwnPropertyDescriptor(s, c);
                if (l && "value" in l) {
                    var f = r.get(c);
                    f && (l.value = u(f));
                } else if (l === void 0) {
                    var d = r.get(c), h = d?.v;
                    if (d !== void 0 && h !== we) return {
                        enumerable: !0,
                        configurable: !0,
                        value: h,
                        writable: !0
                    };
                }
                return l;
            },
            has (s, c) {
                if (c === Bt) return !0;
                var l = r.get(c), f = l !== void 0 && l.v !== we || Reflect.has(s, c);
                if (l !== void 0 || U !== null && (!f || Wt(s, c)?.writable)) {
                    l === void 0 && (l = a(()=>{
                        var h = f ? nt(s[c]) : we, p = S(h);
                        return p;
                    }), r.set(c, l));
                    var d = u(l);
                    if (d === we) return !1;
                }
                return f;
            },
            set (s, c, l, f) {
                var d = r.get(c), h = c in s;
                if (n && c === "length") for(var p = l; p < d.v; p += 1){
                    var _ = r.get(p + "");
                    _ !== void 0 ? g(_, we) : p in s && (_ = a(()=>S(we)), r.set(p + "", _));
                }
                if (d === void 0) (!h || Wt(s, c)?.writable) && (d = a(()=>S(void 0)), g(d, nt(l)), r.set(c, d));
                else {
                    h = d.v !== we;
                    var x = a(()=>nt(l));
                    g(d, x);
                }
                var j = Reflect.getOwnPropertyDescriptor(s, c);
                if (j?.set && j.set.call(f, l), !h) {
                    if (n && typeof c == "string") {
                        var A = r.get("length"), P = Number(c);
                        Number.isInteger(P) && P >= A.v && g(A, P + 1);
                    }
                    $t(i);
                }
                return !0;
            },
            ownKeys (s) {
                u(i);
                var c = Reflect.ownKeys(s).filter((d)=>{
                    var h = r.get(d);
                    return h === void 0 || h.v !== we;
                });
                for (var [l, f] of r)f.v !== we && !(l in s) && c.push(l);
                return c;
            },
            setPrototypeOf () {
                ji();
            }
        });
    }
    function Jr(e) {
        try {
            if (e !== null && typeof e == "object" && Bt in e) return e[Bt];
        } catch  {}
        return e;
    }
    function lo(e, t) {
        return Object.is(Jr(e), Jr(t));
    }
    var Zr, Ln, Cn, Nn;
    function co() {
        if (Zr === void 0) {
            Zr = window, Ln = /Firefox/.test(navigator.userAgent);
            var e = Element.prototype, t = Node.prototype, r = Text.prototype;
            Cn = Wt(t, "firstChild").get, Nn = Wt(t, "nextSibling").get, Ur(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ur(r) && (r.__t = void 0);
        }
    }
    function ct(e = "") {
        return document.createTextNode(e);
    }
    function jt(e) {
        return Cn.call(e);
    }
    function er(e) {
        return Nn.call(e);
    }
    function v(e, t) {
        return jt(e);
    }
    function et(e, t = !1) {
        {
            var r = jt(e);
            return r instanceof Comment && r.data === "" ? er(r) : r;
        }
    }
    function b(e, t = 1, r = !1) {
        let n = e;
        for(; t--;)n = er(n);
        return n;
    }
    function uo(e) {
        e.textContent = "";
    }
    function jn() {
        return !1;
    }
    function fo(e, t, r) {
        return document.createElementNS(dn, e, void 0);
    }
    let Qr = !1;
    function _o() {
        Qr || (Qr = !0, document.addEventListener("reset", (e)=>{
            Promise.resolve().then(()=>{
                if (!e.defaultPrevented) for (const t of e.target.elements)t.__on_r?.();
            });
        }, {
            capture: !0
        }));
    }
    function jr(e) {
        var t = q, r = U;
        Ge(null), Xe(null);
        try {
            return e();
        } finally{
            Ge(t), Xe(r);
        }
    }
    function vo(e, t, r, n = r) {
        e.addEventListener(t, ()=>jr(r));
        const i = e.__on_r;
        i ? e.__on_r = ()=>{
            i(), n(!0);
        } : e.__on_r = ()=>n(!0), _o();
    }
    function po(e) {
        U === null && (q === null && Li(), Mi()), At && Di();
    }
    function ho(e, t) {
        var r = t.last;
        r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
    }
    function vt(e, t) {
        var r = U;
        r !== null && (r.f & Le) !== 0 && (e |= Le);
        var n = {
            ctx: Fe,
            deps: null,
            nodes: null,
            f: e | Ee | Ke,
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
        if ((e & Zt) !== 0) Rt !== null ? Rt.push(n) : ut.ensure().schedule(n);
        else if (t !== null) {
            try {
                zt(n);
            } catch (a) {
                throw Re(n), a;
            }
            i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && (i.f & Kt) === 0 && (i = i.first, (e & ft) !== 0 && (e & Lt) !== 0 && i !== null && (i.f |= Lt));
        }
        if (i !== null && (i.parent = r, r !== null && ho(i, r), q !== null && (q.f & ye) !== 0 && (e & Et) === 0)) {
            var o = q;
            (o.effects ??= []).push(i);
        }
        return n;
    }
    function zr() {
        return q !== null && !We;
    }
    function zn(e) {
        const t = vt(vr, null);
        return _e(t, he), t.teardown = e, t;
    }
    function go(e) {
        po();
        var t = U.f, r = !q && (t & Ue) !== 0 && (t & Pt) === 0;
        if (r) {
            var n = Fe;
            (n.e ??= []).push(e);
        } else return Kn(e);
    }
    function Kn(e) {
        return vt(Zt | Ai, e);
    }
    function yo(e) {
        ut.ensure();
        const t = vt(Et | Kt, e);
        return (r = {})=>new Promise((n)=>{
                r.outro ? xt(t, ()=>{
                    Re(t), n(void 0);
                }) : (Re(t), n(void 0));
            });
    }
    function bo(e) {
        return vt(Mr | Kt, e);
    }
    function Vn(e, t = 0) {
        return vt(vr | t, e);
    }
    function M(e, t = [], r = [], n = []) {
        Qi(n, t, r, (i)=>{
            vt(vr, ()=>e(...i.map(u)));
        });
    }
    function Kr(e, t = 0) {
        var r = vt(ft | t, e);
        return r;
    }
    function ze(e) {
        return vt(Ue | Kt, e);
    }
    function Fn(e) {
        var t = e.teardown;
        if (t !== null) {
            const r = At, n = q;
            en(!0), Ge(null);
            try {
                t.call(null);
            } finally{
                en(r), Ge(n);
            }
        }
    }
    function Vr(e, t = !1) {
        var r = e.first;
        for(e.first = e.last = null; r !== null;){
            const i = r.ac;
            i !== null && jr(()=>{
                i.abort(Qe);
            });
            var n = r.next;
            (r.f & Et) !== 0 ? r.parent = null : Re(r, t), r = n;
        }
    }
    function mo(e) {
        for(var t = e.first; t !== null;){
            var r = t.next;
            (t.f & Ue) === 0 && Re(t), t = r;
        }
    }
    function Re(e, t = !0) {
        var r = !1;
        (t || (e.f & Ti) !== 0) && e.nodes !== null && e.nodes.end !== null && (wo(e.nodes.start, e.nodes.end), r = !0), _e(e, $r), Vr(e, t && !r), Qt(e, 0);
        var n = e.nodes && e.nodes.t;
        if (n !== null) for (const o of n)o.stop();
        Fn(e), e.f ^= $r, e.f |= Be;
        var i = e.parent;
        i !== null && i.first !== null && Gn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
    }
    function wo(e, t) {
        for(; e !== null;){
            var r = e === t ? null : er(e);
            e.remove(), e = r;
        }
    }
    function Gn(e) {
        var t = e.parent, r = e.prev, n = e.next;
        r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
    }
    function xt(e, t, r = !0) {
        var n = [];
        qn(e, n, !0);
        var i = ()=>{
            r && Re(e), t && t();
        }, o = n.length;
        if (o > 0) {
            var a = ()=>--o || i();
            for (var s of n)s.out(a);
        } else i();
    }
    function qn(e, t, r) {
        if ((e.f & Le) === 0) {
            e.f ^= Le;
            var n = e.nodes && e.nodes.t;
            if (n !== null) for (const s of n)(s.is_global || r) && t.push(s);
            for(var i = e.first; i !== null;){
                var o = i.next, a = (i.f & Lt) !== 0 || (i.f & Ue) !== 0 && (e.f & ft) !== 0;
                qn(i, t, a ? r : !1), i = o;
            }
        }
    }
    function Fr(e) {
        Wn(e, !0);
    }
    function Wn(e, t) {
        if ((e.f & Le) !== 0) {
            e.f ^= Le, (e.f & he) === 0 && (_e(e, Ee), ut.ensure().schedule(e));
            for(var r = e.first; r !== null;){
                var n = r.next, i = (r.f & Lt) !== 0 || (r.f & Ue) !== 0;
                Wn(r, i ? t : !1), r = n;
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
    function en(e) {
        At = e;
    }
    let q = null, We = !1;
    function Ge(e) {
        q = e;
    }
    let U = null;
    function Xe(e) {
        U = e;
    }
    let Ve = null;
    function xo(e) {
        q !== null && (Ve === null ? Ve = [
            e
        ] : Ve.push(e));
    }
    let Pe = null, De = 0, je = null;
    function ko(e) {
        je = e;
    }
    let Bn = 1, bt = 0, kt = bt;
    function tn(e) {
        kt = e;
    }
    function Un() {
        return ++Bn;
    }
    function tr(e) {
        var t = e.f;
        if ((t & Ee) !== 0) return !0;
        if (t & ye && (e.f &= ~St), (t & He) !== 0) {
            for(var r = e.deps, n = r.length, i = 0; i < n; i++){
                var o = r[i];
                if (tr(o) && On(o), o.wv > e.wv) return !0;
            }
            (t & Ke) !== 0 && qe === null && _e(e, he);
        }
        return !1;
    }
    function $n(e, t, r = !0) {
        var n = e.reactions;
        if (n !== null && !(Ve !== null && Mt.call(Ve, e))) for(var i = 0; i < n.length; i++){
            var o = n[i];
            (o.f & ye) !== 0 ? $n(o, t, !1) : t === o && (r ? _e(o, Ee) : (o.f & he) !== 0 && _e(o, He), Cr(o));
        }
    }
    function Yn(e) {
        var t = Pe, r = De, n = je, i = q, o = Ve, a = Fe, s = We, c = kt, l = e.f;
        Pe = null, De = 0, je = null, q = (l & (Ue | Et)) === 0 ? e : null, Ve = null, Ct(e.ctx), We = !1, kt = ++bt, e.ac !== null && (jr(()=>{
            e.ac.abort(Qe);
        }), e.ac = null);
        try {
            e.f |= Sr;
            var f = e.fn, d = f();
            e.f |= Pt;
            var h = e.deps, p = Y?.is_fork;
            if (Pe !== null) {
                var _;
                if (p || Qt(e, De), h !== null && De > 0) for(h.length = De + Pe.length, _ = 0; _ < Pe.length; _++)h[De + _] = Pe[_];
                else e.deps = h = Pe;
                if (zr() && (e.f & Ke) !== 0) for(_ = De; _ < h.length; _++)(h[_].reactions ??= []).push(e);
            } else !p && h !== null && De < h.length && (Qt(e, De), h.length = De);
            if (bn() && je !== null && !We && h !== null && (e.f & (ye | He | Ee)) === 0) for(_ = 0; _ < je.length; _++)$n(je[_], e);
            if (i !== null && i !== e) {
                if (bt++, i.deps !== null) for(let x = 0; x < r; x += 1)i.deps[x].rv = bt;
                if (t !== null) for (const x of t)x.rv = bt;
                je !== null && (n === null ? n = je : n.push(...je));
            }
            return (e.f & st) !== 0 && (e.f ^= st), d;
        } catch (x) {
            return wn(x);
        } finally{
            e.f ^= Sr, Pe = t, De = r, je = n, q = i, Ve = o, Ct(a), We = s, kt = c;
        }
    }
    function Eo(e, t) {
        let r = t.reactions;
        if (r !== null) {
            var n = bi.call(r, e);
            if (n !== -1) {
                var i = r.length - 1;
                i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
            }
        }
        if (r === null && (t.f & ye) !== 0 && (Pe === null || !Mt.call(Pe, t))) {
            var o = t;
            (o.f & Ke) !== 0 && (o.f ^= Ke, o.f &= ~St), Lr(o), oo(o), Qt(o, 0);
        }
    }
    function Qt(e, t) {
        var r = e.deps;
        if (r !== null) for(var n = t; n < r.length; n++)Eo(e, r[n]);
    }
    function zt(e) {
        var t = e.f;
        if ((t & Be) === 0) {
            _e(e, he);
            var r = U, n = sr;
            U = e, sr = !0;
            try {
                (t & (ft | hn)) !== 0 ? mo(e) : Vr(e), Fn(e);
                var i = Yn(e);
                e.teardown = typeof i == "function" ? i : null, e.wv = Bn;
                var o;
                yi && qi && (e.f & Ee) !== 0 && e.deps;
            } finally{
                sr = n, U = r;
            }
        }
    }
    async function So() {
        await Promise.resolve(), $i();
    }
    function u(e) {
        var t = e.f, r = (t & ye) !== 0;
        if (q !== null && !We) {
            var n = U !== null && (U.f & Be) !== 0;
            if (!n && (Ve === null || !Mt.call(Ve, e))) {
                var i = q.deps;
                if ((q.f & Sr) !== 0) e.rv < bt && (e.rv = bt, Pe === null && i !== null && i[De] === e ? De++ : Pe === null ? Pe = [
                    e
                ] : Pe.push(e));
                else {
                    (q.deps ??= []).push(e);
                    var o = e.reactions;
                    o === null ? e.reactions = [
                        q
                    ] : Mt.call(o, q) || o.push(q);
                }
            }
        }
        if (At && lt.has(e)) return lt.get(e);
        if (r) {
            var a = e;
            if (At) {
                var s = a.v;
                return ((a.f & he) === 0 && a.reactions !== null || Xn(a)) && (s = Nr(a)), lt.set(a, s), s;
            }
            var c = (a.f & Ke) === 0 && !We && q !== null && (sr || (q.f & Ke) !== 0), l = (a.f & Pt) === 0;
            tr(a) && (c && (a.f |= Ke), On(a)), c && !l && (Rn(a), Hn(a));
        }
        if (qe?.has(e)) return qe.get(e);
        if ((e.f & st) !== 0) throw e.v;
        return e.v;
    }
    function Hn(e) {
        if (e.f |= Ke, e.deps !== null) for (const t of e.deps)(t.reactions ??= []).push(e), (t.f & ye) !== 0 && (t.f & Ke) === 0 && (Rn(t), Hn(t));
    }
    function Xn(e) {
        if (e.v === we) return !0;
        if (e.deps === null) return !1;
        for (const t of e.deps)if (lt.has(t) || (t.f & ye) !== 0 && Xn(t)) return !0;
        return !1;
    }
    function Jn(e) {
        var t = We;
        try {
            return We = !0, e();
        } finally{
            We = t;
        }
    }
    const Ft = Symbol("events"), Zn = new Set, Pr = new Set;
    function J(e, t, r) {
        (t[Ft] ??= {})[e] = r;
    }
    function It(e) {
        for(var t = 0; t < e.length; t++)Zn.add(e[t]);
        for (var r of Pr)r(e);
    }
    let rn = null;
    function nn(e) {
        var t = this, r = t.ownerDocument, n = e.type, i = e.composedPath?.() || [], o = i[0] || e.target;
        rn = e;
        var a = 0, s = rn === e && e[Ft];
        if (s) {
            var c = i.indexOf(s);
            if (c !== -1 && (t === document || t === window)) {
                e[Ft] = t;
                return;
            }
            var l = i.indexOf(t);
            if (l === -1) return;
            c <= l && (a = c);
        }
        if (o = i[a] || e.target, o !== t) {
            mi(e, "currentTarget", {
                configurable: !0,
                get () {
                    return o || r;
                }
            });
            var f = q, d = U;
            Ge(null), Xe(null);
            try {
                for(var h, p = []; o !== null;){
                    var _ = o.assignedSlot || o.parentNode || o.host || null;
                    try {
                        var x = o[Ft]?.[n];
                        x != null && (!o.disabled || e.target === o) && x.call(o, e);
                    } catch (j) {
                        h ? p.push(j) : h = j;
                    }
                    if (e.cancelBubble || _ === t || _ === null) break;
                    o = _;
                }
                if (h) {
                    for (let j of p)queueMicrotask(()=>{
                        throw j;
                    });
                    throw h;
                }
            } finally{
                e[Ft] = t, delete e.currentTarget, Ge(f), Xe(d);
            }
        }
    }
    const To = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
        createHTML: (e)=>e
    });
    function Ao(e) {
        return To?.createHTML(e) ?? e;
    }
    function Qn(e) {
        var t = fo("template");
        return t.innerHTML = Ao(e.replaceAll("<!>", "<!---->")), t.content;
    }
    function _r(e, t) {
        var r = U;
        r.nodes === null && (r.nodes = {
            start: e,
            end: t,
            a: null,
            t: null
        });
    }
    function R(e, t) {
        var r = (t & hi) !== 0, n = (t & gi) !== 0, i, o = !e.startsWith("<!>");
        return ()=>{
            i === void 0 && (i = Qn(o ? e : "<!>" + e), r || (i = jt(i)));
            var a = n || Ln ? document.importNode(i, !0) : i.cloneNode(!0);
            if (r) {
                var s = jt(a), c = a.lastChild;
                _r(s, c);
            } else _r(a, a);
            return a;
        };
    }
    function Po(e, t, r = "svg") {
        var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
        return ()=>{
            if (!o) {
                var a = Qn(i), s = jt(a);
                o = jt(s);
            }
            var c = o.cloneNode(!0);
            return _r(c, c), c;
        };
    }
    function ei(e, t) {
        return Po(e, t, "svg");
    }
    function Io() {
        var e = document.createDocumentFragment(), t = document.createComment(""), r = ct();
        return e.append(t, r), _r(t, r), e;
    }
    function I(e, t) {
        e !== null && e.before(t);
    }
    const Oo = [
        "touchstart",
        "touchmove"
    ];
    function Ro(e) {
        return Oo.includes(e);
    }
    function m(e, t) {
        var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
        r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = `${r}`);
    }
    function Do(e, t) {
        return Mo(e, t);
    }
    const nr = new Map;
    function Mo(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: a = !0, transformError: s }) {
        co();
        var c = void 0, l = yo(()=>{
            var f = r ?? t.appendChild(ct());
            Ji(f, {
                pending: ()=>{}
            }, (p)=>{
                _t({});
                var _ = Fe;
                o && (_.c = o), i && (n.$$events = i), c = e(p, n) || {}, dt();
            }, s);
            var d = new Set, h = (p)=>{
                for(var _ = 0; _ < p.length; _++){
                    var x = p[_];
                    if (!d.has(x)) {
                        d.add(x);
                        var j = Ro(x);
                        for (const E of [
                            t,
                            document
                        ]){
                            var A = nr.get(E);
                            A === void 0 && (A = new Map, nr.set(E, A));
                            var P = A.get(x);
                            P === void 0 ? (E.addEventListener(x, nn, {
                                passive: j
                            }), A.set(x, 1)) : A.set(x, P + 1);
                        }
                    }
                }
            };
            return h(dr(Zn)), Pr.add(h), ()=>{
                for (var p of d)for (const j of [
                    t,
                    document
                ]){
                    var _ = nr.get(j), x = _.get(p);
                    --x == 0 ? (j.removeEventListener(p, nn), _.delete(p), _.size === 0 && nr.delete(j)) : _.set(p, x);
                }
                Pr.delete(h), f !== r && f.parentNode?.removeChild(f);
            };
        });
        return Lo.set(c, l), c;
    }
    let Lo = new WeakMap;
    class Co {
        anchor;
        #t = new Map;
        #l = new Map;
        #e = new Map;
        #n = new Set;
        #i = !0;
        constructor(t, r = !0){
            this.anchor = t, this.#i = r;
        }
        #r = (t)=>{
            if (this.#t.has(t)) {
                var r = this.#t.get(t), n = this.#l.get(r);
                if (n) Fr(n), this.#n.delete(r);
                else {
                    var i = this.#e.get(r);
                    i && (this.#l.set(r, i.effect), this.#e.delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
                }
                for (const [o, a] of this.#t){
                    if (this.#t.delete(o), o === t) break;
                    const s = this.#e.get(a);
                    s && (Re(s.effect), this.#e.delete(a));
                }
                for (const [o, a] of this.#l){
                    if (o === r || this.#n.has(o)) continue;
                    const s = ()=>{
                        if (Array.from(this.#t.values()).includes(o)) {
                            var l = document.createDocumentFragment();
                            Gr(a, l), l.append(ct()), this.#e.set(o, {
                                effect: a,
                                fragment: l
                            });
                        } else Re(a);
                        this.#n.delete(o), this.#l.delete(o);
                    };
                    this.#i || !n ? (this.#n.add(o), xt(a, s, !1)) : s();
                }
            }
        };
        #o = (t)=>{
            this.#t.delete(t);
            const r = Array.from(this.#t.values());
            for (const [n, i] of this.#e)r.includes(n) || (Re(i.effect), this.#e.delete(n));
        };
        ensure(t, r) {
            var n = Y, i = jn();
            if (r && !this.#l.has(t) && !this.#e.has(t)) if (i) {
                var o = document.createDocumentFragment(), a = ct();
                o.append(a), this.#e.set(t, {
                    effect: ze(()=>r(a)),
                    fragment: o
                });
            } else this.#l.set(t, ze(()=>r(this.anchor)));
            if (this.#t.set(n, t), i) {
                for (const [s, c] of this.#l)s === t ? n.unskip_effect(c) : n.skip_effect(c);
                for (const [s, c] of this.#e)s === t ? n.unskip_effect(c.effect) : n.skip_effect(c.effect);
                n.oncommit(this.#r), n.ondiscard(this.#o);
            } else this.#r(n);
        }
    }
    function X(e, t, r = !1) {
        var n = new Co(e), i = r ? Lt : 0;
        function o(a, s) {
            n.ensure(a, s);
        }
        Kr(()=>{
            var a = !1;
            t((s, c = 0)=>{
                a = !0, o(c, s);
            }), a || o(-1, null);
        }, i);
    }
    function No(e, t) {
        return t;
    }
    function jo(e, t, r) {
        for(var n = [], i = t.length, o, a = t.length, s = 0; s < i; s++){
            let d = t[s];
            xt(d, ()=>{
                if (o) {
                    if (o.pending.delete(d), o.done.add(d), o.pending.size === 0) {
                        var h = e.outrogroups;
                        Ir(e, dr(o.done)), h.delete(o), h.size === 0 && (e.outrogroups = null);
                    }
                } else a -= 1;
            }, !1);
        }
        if (a === 0) {
            var c = n.length === 0 && r !== null;
            if (c) {
                var l = r, f = l.parentNode;
                uo(f), f.append(l), e.items.clear();
            }
            Ir(e, t, !c);
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
    var on;
    function pr(e, t, r, n, i, o = null) {
        var a = e, s = new Map;
        {
            var c = e;
            a = c.appendChild(ct());
        }
        var l = null, f = ro(()=>{
            var P = r();
            return Dr(P) ? P : P == null ? [] : dr(P);
        }), d, h = new Map, p = !0;
        function _(P) {
            (A.effect.f & Be) === 0 && (A.pending.delete(P), A.fallback = l, zo(A, d, a, t, n), l !== null && (d.length === 0 ? (l.f & rt) === 0 ? Fr(l) : (l.f ^= rt, Gt(l, null, a)) : xt(l, ()=>{
                l = null;
            })));
        }
        function x(P) {
            A.pending.delete(P);
        }
        var j = Kr(()=>{
            d = u(f);
            for(var P = d.length, E = new Set, L = Y, C = jn(), z = 0; z < P; z += 1){
                var $ = d[z], W = n($, z), oe = p ? null : s.get(W);
                oe ? (oe.v && Nt(oe.v, $), oe.i && Nt(oe.i, z), C && L.unskip_effect(oe.e)) : (oe = Ko(s, p ? a : on ??= ct(), $, W, z, i, t, r), p || (oe.e.f |= rt), s.set(W, oe)), E.add(W);
            }
            if (P === 0 && o && !l && (p ? l = ze(()=>o(a)) : (l = ze(()=>o(on ??= ct())), l.f |= rt)), P > E.size && Ri(), !p) if (h.set(L, E), C) {
                for (const [Se, K] of s)E.has(Se) || L.skip_effect(K.e);
                L.oncommit(_), L.ondiscard(x);
            } else _(L);
            u(f);
        }), A = {
            effect: j,
            items: s,
            pending: h,
            outrogroups: null,
            fallback: l
        };
        p = !1;
    }
    function Vt(e) {
        for(; e !== null && (e.f & Ue) === 0;)e = e.next;
        return e;
    }
    function zo(e, t, r, n, i) {
        var o = t.length, a = e.items, s = Vt(e.effect.first), c, l = null, f = [], d = [], h, p, _, x;
        for(x = 0; x < o; x += 1){
            if (h = t[x], p = i(h, x), _ = a.get(p).e, e.outrogroups !== null) for (const W of e.outrogroups)W.pending.delete(_), W.done.delete(_);
            if ((_.f & Le) !== 0 && Fr(_), (_.f & rt) !== 0) if (_.f ^= rt, _ === s) Gt(_, null, r);
            else {
                var j = l ? l.next : s;
                _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), ot(e, l, _), ot(e, _, j), Gt(_, j, r), l = _, f = [], d = [], s = Vt(l.next);
                continue;
            }
            if (_ !== s) {
                if (c !== void 0 && c.has(_)) {
                    if (f.length < d.length) {
                        var A = d[0], P;
                        l = A.prev;
                        var E = f[0], L = f[f.length - 1];
                        for(P = 0; P < f.length; P += 1)Gt(f[P], A, r);
                        for(P = 0; P < d.length; P += 1)c.delete(d[P]);
                        ot(e, E.prev, L.next), ot(e, l, E), ot(e, L, A), s = A, l = L, x -= 1, f = [], d = [];
                    } else c.delete(_), Gt(_, s, r), ot(e, _.prev, _.next), ot(e, _, l === null ? e.effect.first : l.next), ot(e, l, _), l = _;
                    continue;
                }
                for(f = [], d = []; s !== null && s !== _;)(c ??= new Set).add(s), d.push(s), s = Vt(s.next);
                if (s === null) continue;
            }
            (_.f & rt) === 0 && f.push(_), l = _, s = Vt(_.next);
        }
        if (e.outrogroups !== null) {
            for (const W of e.outrogroups)W.pending.size === 0 && (Ir(e, dr(W.done)), e.outrogroups?.delete(W));
            e.outrogroups.size === 0 && (e.outrogroups = null);
        }
        if (s !== null || c !== void 0) {
            var C = [];
            if (c !== void 0) for (_ of c)(_.f & Le) === 0 && C.push(_);
            for(; s !== null;)(s.f & Le) === 0 && s !== e.fallback && C.push(s), s = Vt(s.next);
            var z = C.length;
            if (z > 0) {
                var $ = o === 0 ? r : null;
                jo(e, C, $);
            }
        }
    }
    function Ko(e, t, r, n, i, o, a, s) {
        var c = (a & di) !== 0 ? (a & pi) === 0 ? ao(r, !1, !1) : Tt(r) : null, l = (a & vi) !== 0 ? Tt(i) : null;
        return {
            v: c,
            i: l,
            e: ze(()=>(o(t, c ?? r, l ?? i, s), ()=>{
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
    function ot(e, t, r) {
        t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
    }
    const an = [
        ...` 	
\r\f \v\uFEFF`
    ];
    function Vo(e, t, r) {
        var n = e == null ? "" : "" + e;
        if (r) {
            for (var i of Object.keys(r))if (r[i]) n = n ? n + " " + i : i;
            else if (n.length) for(var o = i.length, a = 0; (a = n.indexOf(i, a)) >= 0;){
                var s = a + o;
                (a === 0 || an.includes(n[a - 1])) && (s === n.length || an.includes(n[s])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(s + 1) : a = s;
            }
        }
        return n === "" ? null : n;
    }
    function gt(e, t, r, n, i, o) {
        var a = e.__className;
        if (a !== r || a === void 0) {
            var s = Vo(r, n, o);
            s == null ? e.removeAttribute("class") : e.className = s, e.__className = r;
        } else if (o && i !== o) for(var c in o){
            var l = !!o[c];
            (i == null || l !== !!i[c]) && e.classList.toggle(c, l);
        }
        return o;
    }
    function ti(e, t, r = !1) {
        if (e.multiple) {
            if (t == null) return;
            if (!Dr(t)) return Vi();
            for (var n of e.options)n.selected = t.includes(sn(n));
            return;
        }
        for (n of e.options){
            var i = sn(n);
            if (lo(i, t)) {
                n.selected = !0;
                return;
            }
        }
        (!r || t !== void 0) && (e.selectedIndex = -1);
    }
    function Fo(e) {
        var t = new MutationObserver(()=>{
            ti(e, e.__value);
        });
        t.observe(e, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: [
                "value"
            ]
        }), zn(()=>{
            t.disconnect();
        });
    }
    function sn(e) {
        return "__value" in e ? e.__value : e.value;
    }
    const Go = Symbol("is custom element"), qo = Symbol("is html"), Wo = Ii ? "progress" : "PROGRESS";
    function qr(e, t) {
        var r = Wr(e);
        r.value === (r.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== Wo) || (e.value = t ?? "");
    }
    function Bo(e, t) {
        var r = Wr(e);
        r.checked !== (r.checked = t ?? void 0) && (e.checked = t);
    }
    function Oe(e, t, r, n) {
        var i = Wr(e);
        i[t] !== (i[t] = r) && (t === "loading" && (e[Pi] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Uo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
    }
    function Wr(e) {
        return e.__attributes ??= {
            [Go]: e.nodeName.includes("-"),
            [qo]: e.namespaceURI === dn
        };
    }
    var ln = new Map;
    function Uo(e) {
        var t = e.getAttribute("is") || e.nodeName, r = ln.get(t);
        if (r) return r;
        ln.set(t, r = []);
        for(var n, i = e, o = Element.prototype; o !== i;){
            n = wi(i);
            for(var a in n)n[a].set && r.push(a);
            i = vn(i);
        }
        return r;
    }
    function Me(e, t, r = t) {
        var n = new WeakSet;
        vo(e, "input", async (i)=>{
            var o = i ? e.defaultValue : e.value;
            if (o = wr(e) ? xr(o) : o, r(o), Y !== null && n.add(Y), await So(), o !== (o = t())) {
                var a = e.selectionStart, s = e.selectionEnd, c = e.value.length;
                if (e.value = o ?? "", s !== null) {
                    var l = e.value.length;
                    a === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = a, e.selectionEnd = Math.min(s, l));
                }
            }
        }), Jn(t) == null && e.value && (r(wr(e) ? xr(e.value) : e.value), Y !== null && n.add(Y)), Vn(()=>{
            var i = t();
            if (e === document.activeElement) {
                var o = Y;
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
    const $o = "modulepreload", Yo = function(e, t) {
        return new URL(e, t).href;
    }, cn = {}, pe = function(t, r, n) {
        let i = Promise.resolve();
        if (r && r.length > 0) {
            let l = function(f) {
                return Promise.all(f.map((d)=>Promise.resolve(d).then((h)=>({
                            status: "fulfilled",
                            value: h
                        }), (h)=>({
                            status: "rejected",
                            reason: h
                        }))));
            };
            const a = document.getElementsByTagName("link"), s = document.querySelector("meta[property=csp-nonce]"), c = s?.nonce || s?.getAttribute("nonce");
            i = l(r.map((f)=>{
                if (f = Yo(f, n), f in cn) return;
                cn[f] = !0;
                const d = f.endsWith(".css"), h = d ? '[rel="stylesheet"]' : "";
                if (n) for(let _ = a.length - 1; _ >= 0; _--){
                    const x = a[_];
                    if (x.href === f && (!d || x.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${f}"]${h}`)) return;
                const p = document.createElement("link");
                if (p.rel = d ? "stylesheet" : $o, d || (p.as = "script"), p.crossOrigin = "", p.href = f, c && p.setAttribute("nonce", c), document.head.appendChild(p), d) return new Promise((_, x)=>{
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
    }, Ho = "Browser-based PGP encryption powered by WebAssembly", Xo = "All cryptography runs locally in your browser via WebAssembly. No data is sent to any server.", Jo = "Loading cryptographic engine...", Zo = "Failed to load WASM module: {error}", Qo = "Encrypt", ea = "Decrypt", ta = "Sign", ra = "Verify", na = "Keys", ia = "Encrypt Message", oa = "Type your message here...", aa = "Recipients", sa = "No keys available. Add keys in the Keys tab.", la = "Encrypt", ca = "Enter a message to encrypt.", ua = "Select at least one recipient key.", fa = "(own)", _a = "Decrypt Message", da = "Paste encrypted PGP message here...", va = "Passphrase (if key is protected)", pa = "Decrypt", ha = "Paste an encrypted PGP message.", ga = "No private keys available. Generate or import a key in the Keys tab.", ya = "Decryption failed. You may not have the correct private key, or the passphrase is wrong.", ba = "Sign Message", ma = "Type your message here...", wa = "Passphrase (if key is protected)", xa = "Sign", ka = "Enter a message to sign.", Ea = "No private keys available. Generate or import a key in the Keys tab.", Sa = "Signing failed. Your key may require a passphrase.", Ta = "Verify Signature", Aa = "Paste signed PGP message here...", Pa = "Verify", Ia = "Paste a signed PGP message.", Oa = "No keys in keyring. Import the signer's public key first.", Ra = "Valid Signature", Da = "Signed by: {name}", Ma = "Verification Failed", La = "The signer's key may not be in your keyring.", Ca = "Key Manager", Na = "Generate", ja = "Import", za = "No keys yet. Generate or import one to get started.", Ka = "(own key)", Va = "(unnamed)", Fa = "Generate New Key Pair", Ga = "Name", qa = "Email", Wa = "Passphrase (optional)", Ba = "Name and email are required.", Ua = "Cancel", $a = "Generate", Ya = "Generating...", Ha = "Key pair generated!", Xa = "Import Key", Ja = "Paste ASCII-armored PGP key...", Za = "Paste a PGP public or private key.", Qa = "Cancel", es = "Import", ts = "Importing...", rs = "Imported key for {name}.", ns = "Export", is = "Delete", os = "Key deleted.", as = "Public key copied to clipboard.", ss = "Copy", ls = "System", cs = "Light", us = "Dark", fs = "Skip tutorial", _s = "Step {current} of {total}", ds = "Next", vs = "Back", ps = "Get Started", hs = "Welcome to KeychainPGP", gs = "This quick tutorial will walk you through PGP encryption. You'll create your key pair and decrypt your first secret message.", ys = "Create Your Key Pair", bs = "A PGP key pair has two parts: a public key you share with others so they can send you encrypted messages, and a private key you keep secret to decrypt them.", ms = "Generate My Key", ws = "Generating...", xs = "Key pair created and saved!", ks = "Decrypt Your First Message", Es = "We just encrypted a welcome message using your public key. Only your private key can unlock it. Give it a try!", Ss = "Decrypt Message", Ts = "Message decrypted!", As = "To exchange encrypted messages with someone, import their public key in the Keys tab. They'll need your public key too.", Ps = "You're Ready!", Is = "You've mastered the basics of PGP encryption. Use the tabs above to encrypt, decrypt, sign, and verify messages. Import contacts' public keys in the Keys tab to communicate securely.", Os = `Hello World!

Congratulations! You have successfully decrypted your first PGP message.

This message was encrypted with your public key and could only be decrypted with your private key. This is the foundation of PGP: only the intended recipient can read the message.

Enjoy using KeychainPGP!`, Rs = "Language", Ds = {
        app_subtitle: Ho,
        app_footer: Xo,
        loading: Jo,
        loading_error: Zo,
        tab_encrypt: Qo,
        tab_decrypt: ea,
        tab_sign: ta,
        tab_verify: ra,
        tab_keys: na,
        encrypt_title: ia,
        encrypt_placeholder: oa,
        encrypt_recipients: aa,
        encrypt_no_keys: sa,
        encrypt_btn: la,
        encrypt_error_empty: ca,
        encrypt_error_no_recipient: ua,
        encrypt_own_label: fa,
        decrypt_title: _a,
        decrypt_placeholder: da,
        decrypt_passphrase: va,
        decrypt_btn: pa,
        decrypt_error_empty: ha,
        decrypt_error_no_key: ga,
        decrypt_error_failed: ya,
        sign_title: ba,
        sign_placeholder: ma,
        sign_passphrase: wa,
        sign_btn: xa,
        sign_error_empty: ka,
        sign_error_no_key: Ea,
        sign_error_failed: Sa,
        verify_title: Ta,
        verify_placeholder: Aa,
        verify_btn: Pa,
        verify_error_empty: Ia,
        verify_error_no_keys: Oa,
        verify_valid: Ra,
        verify_signed_by: Da,
        verify_failed: Ma,
        verify_signer_not_found: La,
        keys_title: Ca,
        keys_generate_btn: Na,
        keys_import_btn: ja,
        keys_empty: za,
        keys_own_label: Ka,
        keys_unnamed: Va,
        keygen_title: Fa,
        keygen_name: Ga,
        keygen_email: qa,
        keygen_passphrase: Wa,
        keygen_error_required: Ba,
        keygen_cancel: Ua,
        keygen_submit: $a,
        keygen_loading: Ya,
        keygen_success: Ha,
        import_title: Xa,
        import_placeholder: Ja,
        import_error_empty: Za,
        import_cancel: Qa,
        import_submit: es,
        import_loading: ts,
        import_success: rs,
        key_export_btn: ns,
        key_delete_btn: is,
        key_deleted: os,
        key_exported: as,
        copy_btn: ss,
        theme_system: ls,
        theme_light: cs,
        theme_dark: us,
        onboarding_skip: fs,
        onboarding_step: _s,
        onboarding_next: ds,
        onboarding_prev: vs,
        onboarding_finish: ps,
        onboarding_welcome_title: hs,
        onboarding_welcome_desc: gs,
        onboarding_gen_title: ys,
        onboarding_gen_desc: bs,
        onboarding_gen_btn: ms,
        onboarding_gen_generating: ws,
        onboarding_gen_done: xs,
        onboarding_msg_title: ks,
        onboarding_msg_desc: Es,
        onboarding_msg_decrypt_btn: Ss,
        onboarding_msg_decrypted: Ts,
        onboarding_msg_tip: As,
        onboarding_done_title: Ps,
        onboarding_done_desc: Is,
        onboarding_secret_message: Os,
        language_label: Rs
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
    ], ri = "keychainpgp-locale", hr = Ds, lr = new Map;
    lr.set("en", hr);
    let ni = hr, ii = "en";
    const Ms = {
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
    function Ls() {
        return ii;
    }
    function Cs() {
        const e = localStorage.getItem(ri);
        if (e && Yt.some((i)=>i.code === e)) return e;
        const t = navigator.language, r = Yt.find((i)=>i.code === t);
        if (r) return r.code;
        const n = Yt.find((i)=>t.startsWith(i.code.split("-")[0]));
        return n ? n.code : "en";
    }
    async function oi(e) {
        if (localStorage.setItem(ri, e), !lr.has(e)) {
            const r = Ms[e];
            if (r) {
                const n = await r();
                lr.set(e, n.default);
            }
        }
        ni = lr.get(e) ?? hr, ii = e;
        const t = Yt.find((r)=>r.code === e);
        document.documentElement.setAttribute("dir", t?.dir ?? "ltr"), document.documentElement.setAttribute("lang", e);
    }
    function Ns(e, t) {
        let r = ni[e] ?? hr[e] ?? e;
        if (t) for (const [n, i] of Object.entries(t))r = r.replace(new RegExp(`\\{${n}\\}`, "g"), String(i));
        return r;
    }
    let gr = S(0);
    async function js() {
        const e = Cs();
        await oi(e), fr(gr);
    }
    async function zs(e) {
        await oi(e), fr(gr);
    }
    function Ks() {
        return u(gr), Ls();
    }
    function y(e, t) {
        return u(gr), Ns(e, t);
    }
    const Vs = "5";
    typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set).add(Vs);
    function Fs(e, t, r) {
        let n, i;
        try {
            const p = k.__wbindgen_add_to_stack_pointer(-16), _ = ke(e, k.__wbindgen_export, k.__wbindgen_export2), x = ge, j = ke(t, k.__wbindgen_export, k.__wbindgen_export2), A = ge;
            var o = wt(r) ? 0 : ke(r, k.__wbindgen_export, k.__wbindgen_export2), a = ge;
            k.decrypt(p, _, x, j, A, o, a);
            var s = ne().getInt32(p + 0, !0), c = ne().getInt32(p + 4, !0), l = ne().getInt32(p + 8, !0), f = ne().getInt32(p + 12, !0), d = s, h = c;
            if (f) throw d = 0, h = 0, Ie(l);
            return n = d, i = h, mt(d, h);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(n, i, 1);
        }
    }
    function Gs(e, t) {
        let r, n;
        try {
            const f = k.__wbindgen_add_to_stack_pointer(-16), d = ke(e, k.__wbindgen_export, k.__wbindgen_export2), h = ge, p = ke(t, k.__wbindgen_export, k.__wbindgen_export2), _ = ge;
            k.encrypt(f, d, h, p, _);
            var i = ne().getInt32(f + 0, !0), o = ne().getInt32(f + 4, !0), a = ne().getInt32(f + 8, !0), s = ne().getInt32(f + 12, !0), c = i, l = o;
            if (s) throw c = 0, l = 0, Ie(a);
            return r = c, n = l, mt(c, l);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(r, n, 1);
        }
    }
    function qs(e, t, r) {
        try {
            const c = k.__wbindgen_add_to_stack_pointer(-16), l = ke(e, k.__wbindgen_export, k.__wbindgen_export2), f = ge, d = ke(t, k.__wbindgen_export, k.__wbindgen_export2), h = ge;
            var n = wt(r) ? 0 : ke(r, k.__wbindgen_export, k.__wbindgen_export2), i = ge;
            k.generateKeyPair(c, l, f, d, h, n, i);
            var o = ne().getInt32(c + 0, !0), a = ne().getInt32(c + 4, !0), s = ne().getInt32(c + 8, !0);
            if (s) throw Ie(a);
            return Ie(o);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function Ws() {
        k.init();
    }
    function Bs(e) {
        try {
            const i = k.__wbindgen_add_to_stack_pointer(-16), o = ke(e, k.__wbindgen_export, k.__wbindgen_export2), a = ge;
            k.inspectKey(i, o, a);
            var t = ne().getInt32(i + 0, !0), r = ne().getInt32(i + 4, !0), n = ne().getInt32(i + 8, !0);
            if (n) throw Ie(r);
            return Ie(t);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function Us(e, t, r) {
        let n, i;
        try {
            const p = k.__wbindgen_add_to_stack_pointer(-16), _ = ke(e, k.__wbindgen_export, k.__wbindgen_export2), x = ge, j = ke(t, k.__wbindgen_export, k.__wbindgen_export2), A = ge;
            var o = wt(r) ? 0 : ke(r, k.__wbindgen_export, k.__wbindgen_export2), a = ge;
            k.sign(p, _, x, j, A, o, a);
            var s = ne().getInt32(p + 0, !0), c = ne().getInt32(p + 4, !0), l = ne().getInt32(p + 8, !0), f = ne().getInt32(p + 12, !0), d = s, h = c;
            if (f) throw d = 0, h = 0, Ie(l);
            return n = d, i = h, mt(d, h);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16), k.__wbindgen_export4(n, i, 1);
        }
    }
    function $s(e, t) {
        try {
            const o = k.__wbindgen_add_to_stack_pointer(-16), a = ke(e, k.__wbindgen_export, k.__wbindgen_export2), s = ge, c = ke(t, k.__wbindgen_export, k.__wbindgen_export2), l = ge;
            k.verify(o, a, s, c, l);
            var r = ne().getInt32(o + 0, !0), n = ne().getInt32(o + 4, !0), i = ne().getInt32(o + 8, !0);
            if (i) throw Ie(n);
            return Ie(r);
        } finally{
            k.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function Ys() {
        return {
            __proto__: null,
            "./keychainpgp_wasm_bg.js": {
                __proto__: null,
                __wbg_Error_83742b46f01ce22d: function(t, r) {
                    const n = Error(mt(t, r));
                    return ie(n);
                },
                __wbg_String_8564e559799eccda: function(t, r) {
                    const n = String(ee(r)), i = ke(n, k.__wbindgen_export, k.__wbindgen_export2), o = ge;
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
                    throw new Error(mt(t, r));
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
                        n = t, i = r, console.error(mt(t, r));
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
                    Uint8Array.prototype.set.call(un(t, r), ee(n));
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
                    const n = ee(r).stack, i = ke(n, k.__wbindgen_export, k.__wbindgen_export2), o = ge;
                    ne().setInt32(t + 4, o, !0), ne().setInt32(t + 0, i, !0);
                },
                __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function() {
                    const t = typeof global > "u" ? null : global;
                    return wt(t) ? 0 : ie(t);
                },
                __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function() {
                    const t = typeof globalThis > "u" ? null : globalThis;
                    return wt(t) ? 0 : ie(t);
                },
                __wbg_static_accessor_SELF_f207c857566db248: function() {
                    const t = typeof self > "u" ? null : self;
                    return wt(t) ? 0 : ie(t);
                },
                __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function() {
                    const t = typeof window > "u" ? null : window;
                    return wt(t) ? 0 : ie(t);
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
                    const n = un(t, r);
                    return ie(n);
                },
                __wbindgen_cast_0000000000000002: function(t, r) {
                    const n = mt(t, r);
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
    function Hs(e) {
        e < 1028 || (tt[e] = Xt, Xt = e);
    }
    function un(e, t) {
        return e = e >>> 0, Ht().subarray(e / 1, e / 1 + t);
    }
    let ht = null;
    function ne() {
        return (ht === null || ht.buffer.detached === !0 || ht.buffer.detached === void 0 && ht.buffer !== k.memory.buffer) && (ht = new DataView(k.memory.buffer)), ht;
    }
    function mt(e, t) {
        return e = e >>> 0, Js(e, t);
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
    function wt(e) {
        return e == null;
    }
    function ke(e, t, r) {
        if (r === void 0) {
            const s = Jt.encode(e), c = t(s.length, 1) >>> 0;
            return Ht().subarray(c, c + s.length).set(s), ge = s.length, c;
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
            const s = Ht().subarray(i + a, i + n), c = Jt.encodeInto(e, s);
            a += c.written, i = r(i, n, a, 1) >>> 0;
        }
        return ge = a, i;
    }
    function Ie(e) {
        const t = ee(e);
        return Hs(e), t;
    }
    let cr = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    cr.decode();
    const Xs = 2146435072;
    let kr = 0;
    function Js(e, t) {
        return kr += t, kr >= Xs && (cr = new TextDecoder("utf-8", {
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
    function Zs(e, t) {
        return k = e.exports, ht = null, qt = null, k;
    }
    async function Qs(e, t) {
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
    async function el(e) {
        if (k !== void 0) return k;
        e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("keychainpgp_wasm_bg-Cz-IVVB7.wasm", import.meta.url).href, import.meta.url));
        const t = Ys();
        (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
        const { instance: r, module: n } = await Qs(await e, t);
        return Zs(r);
    }
    let fn = !1;
    async function tl() {
        fn || (await el(), Ws(), fn = !0);
    }
    function ai(e, t, r) {
        return qs(e, t, r ?? void 0);
    }
    function si(e, t) {
        return Gs(e, JSON.stringify(t));
    }
    function li(e, t, r) {
        return Fs(e, t, r ?? void 0);
    }
    function rl(e, t, r) {
        return Us(e, t, r ?? void 0);
    }
    function nl(e, t) {
        return $s(e, t);
    }
    function Or(e) {
        return Bs(e);
    }
    const ci = "keychainpgp-theme";
    function il() {
        return localStorage.getItem(ci) ?? "dark";
    }
    function ol(e) {
        localStorage.setItem(ci, e), ui(e);
    }
    function ui(e) {
        document.documentElement.setAttribute("data-theme", e);
        const t = document.querySelector('meta[name="theme-color"]');
        t && t.setAttribute("content", e === "dark" ? "#0f172a" : "#ffffff");
    }
    const fi = "keychainpgp-";
    function al(e) {
        return localStorage.getItem(fi + e);
    }
    function sl(e, t) {
        localStorage.setItem(fi + e, t);
    }
    function ll() {
        return al("onboarded") === "true";
    }
    function _n() {
        sl("onboarded", "true");
    }
    const cl = "keychainpgp", ul = 1, Je = "keys";
    let or = null;
    function yr() {
        return new Promise((e, t)=>{
            const r = indexedDB.open(cl, ul);
            r.onupgradeneeded = ()=>{
                const n = r.result;
                n.objectStoreNames.contains(Je) || n.createObjectStore(Je, {
                    keyPath: "fingerprint"
                });
            }, r.onsuccess = ()=>e(r.result), r.onerror = ()=>t(r.error);
        });
    }
    async function _i() {
        return or || (or = await crypto.subtle.generateKey({
            name: "AES-GCM",
            length: 256
        }, !1, [
            "encrypt",
            "decrypt"
        ]), or);
    }
    async function fl(e) {
        const t = await _i(), r = crypto.getRandomValues(new Uint8Array(12)), n = await crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: r
        }, t, new Uint8Array(e));
        return {
            ciphertext: btoa(String.fromCharCode(...new Uint8Array(n))),
            iv: btoa(String.fromCharCode(...r))
        };
    }
    async function _l(e, t) {
        const r = await _i(), n = new Uint8Array(Array.from(atob(t), (a)=>a.charCodeAt(0))), i = new Uint8Array(Array.from(atob(e), (a)=>a.charCodeAt(0))), o = await crypto.subtle.decrypt({
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
    async function dl(e) {
        const t = await yr();
        return new Promise((r, n)=>{
            const a = t.transaction(Je, "readonly").objectStore(Je).get(e);
            a.onsuccess = ()=>r(a.result ?? null), a.onerror = ()=>n(a.error);
        });
    }
    async function Rr(e, t, r, n, i) {
        let o = null, a = null;
        if (i) {
            const l = await fl(i);
            o = l.ciphertext, a = l.iv;
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
        }, c = await yr();
        return new Promise((l, f)=>{
            const d = c.transaction(Je, "readwrite");
            d.objectStore(Je).put(s), d.oncomplete = ()=>l(), d.onerror = ()=>f(d.error);
        });
    }
    async function Br(e) {
        const t = await dl(e);
        if (!t?.encryptedSecretKey || !t.iv) return null;
        try {
            return await _l(t.encryptedSecretKey, t.iv);
        } catch  {
            return null;
        }
    }
    async function vl(e) {
        const t = await yr();
        return new Promise((r, n)=>{
            const i = t.transaction(Je, "readwrite");
            i.objectStore(Je).delete(e), i.oncomplete = ()=>r(), i.onerror = ()=>n(i.error);
        });
    }
    var pl = R("<span></span>"), hl = R('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p>', 1), gl = R('<p class="success svelte-13krnjv"> </p>'), yl = R('<p class="error svelte-13krnjv"> </p>'), bl = R('<div class="wizard-form svelte-13krnjv"><input class="input"/> <input class="input" type="email"/> <input class="input" type="password"/> <!> <button class="btn btn-primary"> </button></div>'), ml = R('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p> <!>', 1), wl = R('<p class="success svelte-13krnjv" style="margin-top: 0.75rem;"> </p> <div class="decrypted-block svelte-13krnjv"> </div>', 1), xl = R('<p class="error svelte-13krnjv" style="margin-top: 0.5rem;"> </p>'), kl = R('<!> <button class="btn btn-primary" style="margin-top: 0.75rem;"> </button>', 1), El = R('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p> <div class="pgp-block svelte-13krnjv"> </div> <!> <p class="wizard-tip svelte-13krnjv"> </p>', 1), Sl = R('<h2 class="svelte-13krnjv"> </h2> <p class="svelte-13krnjv"> </p>', 1), Tl = R('<button class="btn"> </button>'), Al = R("<div></div>"), Pl = R('<button class="btn btn-primary"> </button>'), Il = R('<button class="btn btn-primary"> </button>'), Ol = R('<div class="card wizard svelte-13krnjv"><div class="wizard-header svelte-13krnjv"><div class="wizard-dots svelte-13krnjv"></div> <button class="wizard-skip svelte-13krnjv"> </button></div> <div class="wizard-content svelte-13krnjv"><!></div> <div class="wizard-footer svelte-13krnjv"><!> <!></div></div>');
    function Rl(e, t) {
        _t(t, !0);
        const r = 4;
        let n = S(0), i = S(""), o = S(""), a = S(""), s = S(""), c = S(!1), l = S(!1), f = S(""), d = S(""), h = S(""), p = S(""), _ = S(!1), x = S("");
        function j() {
            _n(), t.onDismiss();
        }
        function A() {
            _n(), t.onDismiss();
        }
        function P() {
            u(n) > 0 && fr(n, -1);
        }
        function E() {
            u(n) === 1 && !u(l) || u(n) < r - 1 && fr(n);
        }
        async function L() {
            if (g(s, ""), !u(i).trim() || !u(o).trim()) {
                g(s, y("keygen_error_required"), !0);
                return;
            }
            g(c, !0);
            try {
                const w = ai(u(i), u(o), u(a) || void 0), O = Or(w.public_key);
                await Rr(w.fingerprint, O.user_ids[0]?.name ?? null, O.user_ids[0]?.email ?? null, w.public_key, w.secret_key), g(f, w.public_key, !0), g(d, w.fingerprint, !0), g(l, !0);
                const F = y("onboarding_secret_message");
                g(h, si(F, [
                    w.public_key
                ]), !0);
            } catch (w) {
                g(s, String(w), !0);
            } finally{
                g(c, !1);
            }
        }
        async function C() {
            g(x, ""), g(_, !0);
            let w = null;
            try {
                if (w = await Br(u(d)), !w) {
                    g(x, "Could not retrieve secret key.");
                    return;
                }
                const O = new TextDecoder().decode(w);
                g(p, li(u(h), O, u(a) || void 0), !0);
            } catch (O) {
                g(x, String(O), !0);
            } finally{
                w?.fill(0), g(_, !1);
            }
        }
        var z = Ol(), $ = v(z), W = v($);
        pr(W, 21, ()=>Array(r), No, (w, O, F)=>{
            var Z = pl();
            let ae;
            M(()=>ae = gt(Z, 1, "wizard-dot svelte-13krnjv", null, ae, {
                    active: F === u(n),
                    completed: F < u(n)
                })), I(w, Z);
        });
        var oe = b(W, 2), Se = v(oe), K = b($, 2), T = v(K);
        {
            var N = (w)=>{
                var O = hl(), F = et(O), Z = v(F), ae = b(F, 2), ve = v(ae);
                M((be, le)=>{
                    m(Z, be), m(ve, le);
                }, [
                    ()=>y("onboarding_welcome_title"),
                    ()=>y("onboarding_welcome_desc")
                ]), I(w, O);
            }, V = (w)=>{
                var O = ml(), F = et(O), Z = v(F), ae = b(F, 2), ve = v(ae), be = b(ae, 2);
                {
                    var le = (re)=>{
                        var ce = gl(), Q = v(ce);
                        M((ue)=>m(Q, ue), [
                            ()=>y("onboarding_gen_done")
                        ]), I(re, ce);
                    }, Ne = (re)=>{
                        var ce = bl(), Q = v(ce), ue = b(Q, 2), fe = b(ue, 2), G = b(fe, 2);
                        {
                            var Te = (se)=>{
                                var xe = yl(), Ot = v(xe);
                                M(()=>m(Ot, u(s))), I(se, xe);
                            };
                            X(G, (se)=>{
                                u(s) && se(Te);
                            });
                        }
                        var me = b(G, 2), Ae = v(me);
                        M((se, xe, Ot, br)=>{
                            Oe(Q, "placeholder", se), Oe(ue, "placeholder", xe), Oe(fe, "placeholder", Ot), me.disabled = u(c), m(Ae, br);
                        }, [
                            ()=>y("keygen_name"),
                            ()=>y("keygen_email"),
                            ()=>y("keygen_passphrase"),
                            ()=>u(c) ? y("onboarding_gen_generating") : y("onboarding_gen_btn")
                        ]), Me(Q, ()=>u(i), (se)=>g(i, se)), Me(ue, ()=>u(o), (se)=>g(o, se)), Me(fe, ()=>u(a), (se)=>g(a, se)), J("click", me, L), I(re, ce);
                    };
                    X(be, (re)=>{
                        u(l) ? re(le) : re(Ne, -1);
                    });
                }
                M((re, ce)=>{
                    m(Z, re), m(ve, ce);
                }, [
                    ()=>y("onboarding_gen_title"),
                    ()=>y("onboarding_gen_desc")
                ]), I(w, O);
            }, te = (w)=>{
                var O = El(), F = et(O), Z = v(F), ae = b(F, 2), ve = v(ae), be = b(ae, 2), le = v(be), Ne = b(be, 2);
                {
                    var re = (fe)=>{
                        var G = wl(), Te = et(G), me = v(Te), Ae = b(Te, 2), se = v(Ae);
                        M((xe)=>{
                            m(me, xe), m(se, u(p));
                        }, [
                            ()=>y("onboarding_msg_decrypted")
                        ]), I(fe, G);
                    }, ce = (fe)=>{
                        var G = kl(), Te = et(G);
                        {
                            var me = (xe)=>{
                                var Ot = xl(), br = v(Ot);
                                M(()=>m(br, u(x))), I(xe, Ot);
                            };
                            X(Te, (xe)=>{
                                u(x) && xe(me);
                            });
                        }
                        var Ae = b(Te, 2), se = v(Ae);
                        M((xe)=>{
                            Ae.disabled = u(_), m(se, xe);
                        }, [
                            ()=>y("onboarding_msg_decrypt_btn")
                        ]), J("click", Ae, C), I(fe, G);
                    };
                    X(Ne, (fe)=>{
                        u(p) ? fe(re) : fe(ce, -1);
                    });
                }
                var Q = b(Ne, 2), ue = v(Q);
                M((fe, G, Te)=>{
                    m(Z, fe), m(ve, G), m(le, u(h)), m(ue, Te);
                }, [
                    ()=>y("onboarding_msg_title"),
                    ()=>y("onboarding_msg_desc"),
                    ()=>y("onboarding_msg_tip")
                ]), I(w, O);
            }, de = (w)=>{
                var O = Sl(), F = et(O), Z = v(F), ae = b(F, 2), ve = v(ae);
                M((be, le)=>{
                    m(Z, be), m(ve, le);
                }, [
                    ()=>y("onboarding_done_title"),
                    ()=>y("onboarding_done_desc")
                ]), I(w, O);
            };
            X(T, (w)=>{
                u(n) === 0 ? w(N) : u(n) === 1 ? w(V, 1) : u(n) === 2 ? w(te, 2) : u(n) === 3 && w(de, 3);
            });
        }
        var Ce = b(K, 2), $e = v(Ce);
        {
            var pt = (w)=>{
                var O = Tl(), F = v(O);
                M((Z)=>m(F, Z), [
                    ()=>y("onboarding_prev")
                ]), J("click", O, P), I(w, O);
            }, Ye = (w)=>{
                var O = Al();
                I(w, O);
            };
            X($e, (w)=>{
                u(n) > 0 ? w(pt) : w(Ye, -1);
            });
        }
        var D = b($e, 2);
        {
            var B = (w)=>{
                var O = Pl(), F = v(O);
                M((Z)=>{
                    O.disabled = u(n) === 1 && !u(l), m(F, Z);
                }, [
                    ()=>y("onboarding_next")
                ]), J("click", O, E), I(w, O);
            }, H = (w)=>{
                var O = Il(), F = v(O);
                M((Z)=>m(F, Z), [
                    ()=>y("onboarding_finish")
                ]), J("click", O, A), I(w, O);
            };
            X(D, (w)=>{
                u(n) < r - 1 ? w(B) : w(H, -1);
            });
        }
        M((w)=>m(Se, w), [
            ()=>y("onboarding_skip")
        ]), J("click", oe, j), I(e, z), dt();
    }
    It([
        "click"
    ]);
    var Dl = R('<p style="font-size: 0.875rem; color: var(--color-text-secondary);"> </p>'), Ml = R('<span style="font-size: 0.75rem; color: var(--color-primary);"> </span>'), Ll = R('<label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border-radius: 0.375rem; border: 1px solid var(--color-border); cursor: pointer; font-size: 0.875rem;"><input type="checkbox"/> <span> </span> <!></label>'), Cl = R('<div style="display: flex; flex-direction: column; gap: 0.375rem; max-height: 200px; overflow-y: auto;"></div>'), Nl = R('<p class="error"> </p>'), jl = R('<div style="position: relative;"><textarea class="textarea" readonly="" rows="8"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), zl = R('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="5"></textarea> <div><p style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;"> </p> <!></div> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Kl(e, t) {
        _t(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S(nt([])), a = S(nt(new Set));
        async function s() {
            g(o, await rr(), !0);
        }
        s();
        function c(K) {
            u(a).has(K) ? u(a).delete(K) : u(a).add(K), g(a, new Set(u(a)), !0);
        }
        function l() {
            if (g(i, ""), g(n, ""), !u(r).trim()) {
                g(i, y("encrypt_error_empty"), !0);
                return;
            }
            if (u(a).size === 0) {
                g(i, y("encrypt_error_no_recipient"), !0);
                return;
            }
            try {
                const K = u(o).filter((T)=>u(a).has(T.fingerprint)).map((T)=>T.publicKey);
                g(n, si(u(r), K), !0);
            } catch (K) {
                g(i, String(K), !0);
            }
        }
        async function f() {
            await navigator.clipboard.writeText(u(n));
        }
        var d = zl(), h = v(d), p = v(h), _ = b(h, 2), x = b(_, 2), j = v(x), A = v(j), P = b(j, 2);
        {
            var E = (K)=>{
                var T = Dl(), N = v(T);
                M((V)=>m(N, V), [
                    ()=>y("encrypt_no_keys")
                ]), I(K, T);
            }, L = (K)=>{
                var T = Cl();
                pr(T, 21, ()=>u(o), (N)=>N.fingerprint, (N, V)=>{
                    var te = Ll();
                    let de;
                    var Ce = v(te), $e = b(Ce, 2), pt = v($e), Ye = b($e, 2);
                    {
                        var D = (B)=>{
                            var H = Ml(), w = v(H);
                            M((O)=>m(w, O), [
                                ()=>y("encrypt_own_label")
                            ]), I(B, H);
                        };
                        X(Ye, (B)=>{
                            u(V).isOwn && B(D);
                        });
                    }
                    M((B, H, w)=>{
                        de = gt(te, 1, "svelte-recwdw", null, de, B), Bo(Ce, H), m(pt, w);
                    }, [
                        ()=>({
                                selected: u(a).has(u(V).fingerprint)
                            }),
                        ()=>u(a).has(u(V).fingerprint),
                        ()=>u(V).name ?? u(V).email ?? u(V).fingerprint.slice(-16)
                    ]), J("change", Ce, ()=>c(u(V).fingerprint)), I(N, te);
                }), I(K, T);
            };
            X(P, (K)=>{
                u(o).length === 0 ? K(E) : K(L, -1);
            });
        }
        var C = b(x, 2), z = v(C), $ = b(C, 2);
        {
            var W = (K)=>{
                var T = Nl(), N = v(T);
                M(()=>m(N, u(i))), I(K, T);
            };
            X($, (K)=>{
                u(i) && K(W);
            });
        }
        var oe = b($, 2);
        {
            var Se = (K)=>{
                var T = jl(), N = v(T), V = b(N, 2), te = v(V);
                M((de)=>{
                    qr(N, u(n)), m(te, de);
                }, [
                    ()=>y("copy_btn")
                ]), J("click", V, f), I(K, T);
            };
            X(oe, (K)=>{
                u(n) && K(Se);
            });
        }
        M((K, T, N, V, te)=>{
            m(p, K), Oe(_, "placeholder", T), m(A, N), C.disabled = V, m(z, te);
        }, [
            ()=>y("encrypt_title"),
            ()=>y("encrypt_placeholder"),
            ()=>y("encrypt_recipients"),
            ()=>!u(r).trim() || u(a).size === 0,
            ()=>y("encrypt_btn")
        ]), Me(_, ()=>u(r), (K)=>g(r, K)), J("click", C, l), I(e, d), dt();
    }
    It([
        "change",
        "click"
    ]);
    var Vl = R('<p class="error"> </p>'), Fl = R('<div style="position: relative;"><textarea class="textarea" readonly="" rows="6"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), Gl = R('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="8"></textarea> <input type="password" class="input"/> <button class="btn btn-primary"> </button> <!> <!></div>');
    function ql(e, t) {
        _t(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S("");
        async function a() {
            if (g(o, ""), g(i, ""), !u(r).trim()) {
                g(o, y("decrypt_error_empty"), !0);
                return;
            }
            const L = (await rr()).filter((C)=>C.isOwn);
            if (L.length === 0) {
                g(o, y("decrypt_error_no_key"), !0);
                return;
            }
            for (const C of L){
                const z = await Br(C.fingerprint);
                if (z) try {
                    const $ = new TextDecoder().decode(z);
                    g(i, li(u(r), $, u(n) || void 0), !0);
                    return;
                } catch  {}
            }
            g(o, y("decrypt_error_failed"), !0);
        }
        async function s() {
            await navigator.clipboard.writeText(u(i));
        }
        var c = Gl(), l = v(c), f = v(l), d = b(l, 2), h = b(d, 2), p = b(h, 2), _ = v(p), x = b(p, 2);
        {
            var j = (E)=>{
                var L = Vl(), C = v(L);
                M(()=>m(C, u(o))), I(E, L);
            };
            X(x, (E)=>{
                u(o) && E(j);
            });
        }
        var A = b(x, 2);
        {
            var P = (E)=>{
                var L = Fl(), C = v(L), z = b(C, 2), $ = v(z);
                M((W)=>{
                    qr(C, u(i)), m($, W);
                }, [
                    ()=>y("copy_btn")
                ]), J("click", z, s), I(E, L);
            };
            X(A, (E)=>{
                u(i) && E(P);
            });
        }
        M((E, L, C, z, $)=>{
            m(f, E), Oe(d, "placeholder", L), Oe(h, "placeholder", C), p.disabled = z, m(_, $);
        }, [
            ()=>y("decrypt_title"),
            ()=>y("decrypt_placeholder"),
            ()=>y("decrypt_passphrase"),
            ()=>!u(r).trim(),
            ()=>y("decrypt_btn")
        ]), Me(d, ()=>u(r), (E)=>g(r, E)), Me(h, ()=>u(n), (E)=>g(n, E)), J("click", p, a), I(e, c), dt();
    }
    It([
        "click"
    ]);
    var Wl = R('<p class="error"> </p>'), Bl = R('<div style="position: relative;"><textarea class="textarea" readonly="" rows="8"></textarea> <button class="btn" style="position: absolute; top: 0.5rem; right: 0.5rem; font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div>'), Ul = R('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="5"></textarea> <input type="password" class="input"/> <button class="btn btn-primary"> </button> <!> <!></div>');
    function $l(e, t) {
        _t(t, !0);
        let r = S(""), n = S(""), i = S(""), o = S("");
        async function a() {
            if (g(o, ""), g(i, ""), !u(r).trim()) {
                g(o, y("sign_error_empty"), !0);
                return;
            }
            const L = (await rr()).filter((C)=>C.isOwn);
            if (L.length === 0) {
                g(o, y("sign_error_no_key"), !0);
                return;
            }
            for (const C of L){
                const z = await Br(C.fingerprint);
                if (z) try {
                    g(i, rl(u(r), z, u(n) || void 0), !0);
                    return;
                } catch  {}
            }
            g(o, y("sign_error_failed"), !0);
        }
        async function s() {
            await navigator.clipboard.writeText(u(i));
        }
        var c = Ul(), l = v(c), f = v(l), d = b(l, 2), h = b(d, 2), p = b(h, 2), _ = v(p), x = b(p, 2);
        {
            var j = (E)=>{
                var L = Wl(), C = v(L);
                M(()=>m(C, u(o))), I(E, L);
            };
            X(x, (E)=>{
                u(o) && E(j);
            });
        }
        var A = b(x, 2);
        {
            var P = (E)=>{
                var L = Bl(), C = v(L), z = b(C, 2), $ = v(z);
                M((W)=>{
                    qr(C, u(i)), m($, W);
                }, [
                    ()=>y("copy_btn")
                ]), J("click", z, s), I(E, L);
            };
            X(A, (E)=>{
                u(i) && E(P);
            });
        }
        M((E, L, C, z, $)=>{
            m(f, E), Oe(d, "placeholder", L), Oe(h, "placeholder", C), p.disabled = z, m(_, $);
        }, [
            ()=>y("sign_title"),
            ()=>y("sign_placeholder"),
            ()=>y("sign_passphrase"),
            ()=>!u(r).trim(),
            ()=>y("sign_btn")
        ]), Me(d, ()=>u(r), (E)=>g(r, E)), Me(h, ()=>u(n), (E)=>g(n, E)), J("click", p, a), I(e, c), dt();
    }
    It([
        "click"
    ]);
    var Yl = R('<p class="error"> </p>'), Hl = R('<p style="font-size: 0.75rem; color: var(--color-text-secondary); font-family: var(--color-font-mono);"> </p>'), Xl = R('<div style="padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-success); background: rgba(34, 197, 94, 0.1);"><p class="success" style="font-weight: 600;"> </p> <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.25rem;"> </p> <!></div>'), Jl = R('<div style="padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-danger); background: rgba(239, 68, 68, 0.1);"><p class="error" style="font-weight: 600;"> </p> <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.25rem;"> </p></div>'), Zl = R('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <textarea class="textarea" rows="8"></textarea> <button class="btn btn-primary"> </button> <!> <!></div>');
    function Ql(e, t) {
        _t(t, !0);
        let r = S(""), n = S(null), i = S(""), o = S("");
        async function a() {
            if (g(o, ""), g(n, null), g(i, ""), !u(r).trim()) {
                g(o, y("verify_error_empty"), !0);
                return;
            }
            const A = await rr();
            if (A.length === 0) {
                g(o, y("verify_error_no_keys"), !0);
                return;
            }
            for (const P of A)try {
                const E = nl(u(r), P.publicKey);
                if (E.valid) {
                    g(n, {
                        valid: !0,
                        fingerprint: E.signer_fingerprint
                    }, !0), g(i, P.name ?? P.email ?? P.fingerprint.slice(-16), !0);
                    return;
                }
            } catch  {}
            g(n, {
                valid: !1,
                fingerprint: null
            }, !0);
        }
        var s = Zl(), c = v(s), l = v(c), f = b(c, 2), d = b(f, 2), h = v(d), p = b(d, 2);
        {
            var _ = (A)=>{
                var P = Yl(), E = v(P);
                M(()=>m(E, u(o))), I(A, P);
            };
            X(p, (A)=>{
                u(o) && A(_);
            });
        }
        var x = b(p, 2);
        {
            var j = (A)=>{
                var P = Io(), E = et(P);
                {
                    var L = (z)=>{
                        var $ = Xl(), W = v($), oe = v(W), Se = b(W, 2), K = v(Se), T = b(Se, 2);
                        {
                            var N = (V)=>{
                                var te = Hl(), de = v(te);
                                M(()=>m(de, u(n).fingerprint)), I(V, te);
                            };
                            X(T, (V)=>{
                                u(n).fingerprint && V(N);
                            });
                        }
                        M((V, te)=>{
                            m(oe, V), m(K, te);
                        }, [
                            ()=>y("verify_valid"),
                            ()=>y("verify_signed_by", {
                                    name: u(i)
                                })
                        ]), I(z, $);
                    }, C = (z)=>{
                        var $ = Jl(), W = v($), oe = v(W), Se = b(W, 2), K = v(Se);
                        M((T, N)=>{
                            m(oe, T), m(K, N);
                        }, [
                            ()=>y("verify_failed"),
                            ()=>y("verify_signer_not_found")
                        ]), I(z, $);
                    };
                    X(E, (z)=>{
                        u(n).valid ? z(L) : z(C, -1);
                    });
                }
                I(A, P);
            };
            X(x, (A)=>{
                u(n) && A(j);
            });
        }
        M((A, P, E, L)=>{
            m(l, A), Oe(f, "placeholder", P), d.disabled = E, m(h, L);
        }, [
            ()=>y("verify_title"),
            ()=>y("verify_placeholder"),
            ()=>!u(r).trim(),
            ()=>y("verify_btn")
        ]), Me(f, ()=>u(r), (A)=>g(r, A)), J("click", d, a), I(e, s), dt();
    }
    It([
        "click"
    ]);
    var ec = R('<p class="success"> </p>'), tc = R('<p class="error"> </p>'), rc = R('<div style="display: flex; flex-direction: column; gap: 0.75rem; padding: 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><p style="font-size: 0.875rem; font-weight: 500;"> </p> <input class="input"/> <input class="input"/> <input class="input" type="password"/> <!> <div style="display: flex; gap: 0.5rem; justify-content: flex-end;"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div>'), nc = R('<p class="error"> </p>'), ic = R('<div style="display: flex; flex-direction: column; gap: 0.75rem; padding: 1rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><p style="font-size: 0.875rem; font-weight: 500;"> </p> <textarea class="textarea" rows="6"></textarea> <!> <div style="display: flex; gap: 0.5rem; justify-content: flex-end;"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div>'), oc = R('<p style="font-size: 0.875rem; color: var(--color-text-secondary); text-align: center; padding: 2rem 0;"> </p>'), ac = R('<span style="font-size: 0.75rem; color: var(--color-primary); font-weight: normal;"> </span>'), sc = R('<div class="key-row svelte-1byd03e" style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: 0.5rem;"><div style="min-width: 0; flex: 1;"><p style="font-size: 0.875rem; font-weight: 500;"> <!></p> <p style="font-size: 0.75rem; color: var(--color-text-secondary);"> </p> <p style="font-size: 0.625rem; color: var(--color-text-secondary); font-family: var(--color-font-mono);"> </p></div> <div class="key-actions svelte-1byd03e" style="display: flex; gap: 0.375rem; flex-shrink: 0;"><button class="btn" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button> <button class="btn btn-danger" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;"> </button></div></div>'), lc = R('<div style="display: flex; flex-direction: column; gap: 0.5rem;"></div>'), cc = R('<div class="card" style="display: flex; flex-direction: column; gap: 1rem;"><div style="display: flex; align-items: center; justify-content: space-between;"><h2 style="font-size: 1rem; font-weight: 600;"> </h2> <div style="display: flex; gap: 0.5rem;"><button class="btn btn-primary"> </button> <button class="btn"> </button></div></div> <!> <!> <!> <!></div>');
    function uc(e, t) {
        _t(t, !0);
        let r = S(nt([])), n = S(!1), i = S(!1), o = S(""), a = S(""), s = S(""), c = S(""), l = S(!1), f = S(""), d = S(""), h = S(!1), p = S("");
        async function _() {
            g(r, await rr(), !0);
        }
        _();
        async function x() {
            if (g(c, ""), !u(o).trim() || !u(a).trim()) {
                g(c, y("keygen_error_required"), !0);
                return;
            }
            g(l, !0);
            try {
                const D = ai(u(o), u(a), u(s) || void 0), B = Or(D.public_key);
                await Rr(D.fingerprint, B.user_ids[0]?.name ?? null, B.user_ids[0]?.email ?? null, D.public_key, D.secret_key), await _(), g(n, !1), g(o, ""), g(a, ""), g(s, ""), g(p, y("keygen_success"), !0), setTimeout(()=>g(p, ""), 3e3);
            } catch (D) {
                g(c, String(D), !0);
            } finally{
                g(l, !1);
            }
        }
        async function j() {
            if (g(d, ""), !u(f).trim()) {
                g(d, y("import_error_empty"), !0);
                return;
            }
            g(h, !0);
            try {
                const D = Or(u(f)), B = D.user_ids[0]?.name ?? null, H = D.user_ids[0]?.email ?? null, w = D.has_secret_key ? new TextEncoder().encode(u(f)) : null;
                await Rr(D.fingerprint, B, H, u(f), w), await _(), g(i, !1), g(f, ""), g(p, y("import_success", {
                    name: B ?? H ?? D.fingerprint.slice(-16)
                }), !0), setTimeout(()=>g(p, ""), 3e3);
            } catch (D) {
                g(d, String(D), !0);
            } finally{
                g(h, !1);
            }
        }
        async function A(D) {
            await vl(D), await _(), g(p, y("key_deleted"), !0), setTimeout(()=>g(p, ""), 3e3);
        }
        async function P(D) {
            await navigator.clipboard.writeText(D.publicKey), g(p, y("key_exported"), !0), setTimeout(()=>g(p, ""), 3e3);
        }
        var E = cc(), L = v(E), C = v(L), z = v(C), $ = b(C, 2), W = v($), oe = v(W), Se = b(W, 2), K = v(Se), T = b(L, 2);
        {
            var N = (D)=>{
                var B = ec(), H = v(B);
                M(()=>m(H, u(p))), I(D, B);
            };
            X(T, (D)=>{
                u(p) && D(N);
            });
        }
        var V = b(T, 2);
        {
            var te = (D)=>{
                var B = rc(), H = v(B), w = v(H), O = b(H, 2), F = b(O, 2), Z = b(F, 2), ae = b(Z, 2);
                {
                    var ve = (Q)=>{
                        var ue = tc(), fe = v(ue);
                        M(()=>m(fe, u(c))), I(Q, ue);
                    };
                    X(ae, (Q)=>{
                        u(c) && Q(ve);
                    });
                }
                var be = b(ae, 2), le = v(be), Ne = v(le), re = b(le, 2), ce = v(re);
                M((Q, ue, fe, G, Te, me)=>{
                    m(w, Q), Oe(O, "placeholder", ue), Oe(F, "placeholder", fe), Oe(Z, "placeholder", G), m(Ne, Te), re.disabled = u(l), m(ce, me);
                }, [
                    ()=>y("keygen_title"),
                    ()=>y("keygen_name"),
                    ()=>y("keygen_email"),
                    ()=>y("keygen_passphrase"),
                    ()=>y("keygen_cancel"),
                    ()=>u(l) ? y("keygen_loading") : y("keygen_submit")
                ]), Me(O, ()=>u(o), (Q)=>g(o, Q)), Me(F, ()=>u(a), (Q)=>g(a, Q)), Me(Z, ()=>u(s), (Q)=>g(s, Q)), J("click", le, ()=>g(n, !1)), J("click", re, x), I(D, B);
            };
            X(V, (D)=>{
                u(n) && D(te);
            });
        }
        var de = b(V, 2);
        {
            var Ce = (D)=>{
                var B = ic(), H = v(B), w = v(H), O = b(H, 2), F = b(O, 2);
                {
                    var Z = (re)=>{
                        var ce = nc(), Q = v(ce);
                        M(()=>m(Q, u(d))), I(re, ce);
                    };
                    X(F, (re)=>{
                        u(d) && re(Z);
                    });
                }
                var ae = b(F, 2), ve = v(ae), be = v(ve), le = b(ve, 2), Ne = v(le);
                M((re, ce, Q, ue)=>{
                    m(w, re), Oe(O, "placeholder", ce), m(be, Q), le.disabled = u(h), m(Ne, ue);
                }, [
                    ()=>y("import_title"),
                    ()=>y("import_placeholder"),
                    ()=>y("import_cancel"),
                    ()=>u(h) ? y("import_loading") : y("import_submit")
                ]), Me(O, ()=>u(f), (re)=>g(f, re)), J("click", ve, ()=>g(i, !1)), J("click", le, j), I(D, B);
            };
            X(de, (D)=>{
                u(i) && D(Ce);
            });
        }
        var $e = b(de, 2);
        {
            var pt = (D)=>{
                var B = oc(), H = v(B);
                M((w)=>m(H, w), [
                    ()=>y("keys_empty")
                ]), I(D, B);
            }, Ye = (D)=>{
                var B = lc();
                pr(B, 21, ()=>u(r), (H)=>H.fingerprint, (H, w)=>{
                    var O = sc(), F = v(O), Z = v(F), ae = v(Z), ve = b(ae);
                    {
                        var be = (me)=>{
                            var Ae = ac(), se = v(Ae);
                            M((xe)=>m(se, xe), [
                                ()=>y("keys_own_label")
                            ]), I(me, Ae);
                        };
                        X(ve, (me)=>{
                            u(w).isOwn && me(be);
                        });
                    }
                    var le = b(Z, 2), Ne = v(le), re = b(le, 2), ce = v(re), Q = b(F, 2), ue = v(Q), fe = v(ue), G = b(ue, 2), Te = v(G);
                    M((me, Ae, se, xe)=>{
                        m(ae, `${me ?? ""} `), m(Ne, u(w).email ?? ""), m(ce, Ae), m(fe, se), m(Te, xe);
                    }, [
                        ()=>u(w).name ?? y("keys_unnamed"),
                        ()=>u(w).fingerprint.slice(-16),
                        ()=>y("key_export_btn"),
                        ()=>y("key_delete_btn")
                    ]), J("click", ue, ()=>P(u(w))), J("click", G, ()=>A(u(w).fingerprint)), I(H, O);
                }), I(D, B);
            };
            X($e, (D)=>{
                u(r).length === 0 ? D(pt) : D(Ye, -1);
            });
        }
        M((D, B, H)=>{
            m(z, D), m(oe, B), m(K, H);
        }, [
            ()=>y("keys_title"),
            ()=>y("keys_generate_btn"),
            ()=>y("keys_import_btn")
        ]), J("click", W, ()=>{
            g(n, !u(n)), g(i, !1);
        }), J("click", Se, ()=>{
            g(i, !u(i)), g(n, !1);
        }), I(e, E), dt();
    }
    It([
        "click"
    ]);
    var fc = R('<option class="svelte-1n46o8q"> </option>'), _c = ei('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'), dc = ei('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'), vc = R('<div class="card" style="text-align: center;"><p class="error"> </p></div>'), pc = R('<div class="card" style="text-align: center;"><p style="color: var(--color-text-secondary);"> </p></div>'), hc = R('<!> <div class="tabs"><button> </button> <button> </button> <button> </button> <button> </button> <button> </button></div> <!>', 1), gc = R('<header style="text-align: center; margin-bottom: 2rem; position: relative;"><div class="header-controls svelte-1n46o8q"><a href="https://keychainpgp.org" target="_blank" rel="noopener noreferrer" class="header-link svelte-1n46o8q" title="keychainpgp.org"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></a> <a href="https://github.com/KeychainPGP/keychainpgp" target="_blank" rel="noopener noreferrer" class="header-link svelte-1n46o8q" title="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path></svg></a> <select class="locale-select svelte-1n46o8q"></select> <button class="theme-toggle svelte-1n46o8q"><!></button></div> <h1 style="font-size: 1.5rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;"><img src="./icon.png" alt="" style="width: 32px; height: 32px; border-radius: 6px;"/> KeychainPGP <span style="color: var(--color-text-secondary); font-weight: 400; font-size: 0.875rem;">Web</span></h1> <p style="color: var(--color-text-secondary); font-size: 0.875rem; margin-top: 0.25rem;"> </p></header> <!> <footer style="text-align: center; margin-top: 3rem; color: var(--color-text-secondary); font-size: 0.75rem;"><p> </p></footer>', 1);
    function yc(e, t) {
        _t(t, !0);
        let r = S(!1), n = S(""), i = S("encrypt"), o = S(nt(il())), a = S(!ll());
        go(()=>{
            ui(u(o));
        });
        function s() {
            g(o, u(o) === "dark" ? "light" : "dark", !0), ol(u(o));
        }
        function c(T) {
            const N = T.target;
            zs(N.value);
        }
        async function l() {
            try {
                await tl(), g(r, !0);
            } catch (T) {
                g(n, y("loading_error", {
                    error: String(T)
                }), !0);
            }
        }
        l();
        var f = gc(), d = et(f), h = v(d), p = b(v(h), 4);
        pr(p, 21, ()=>Yt, (T)=>T.code, (T, N)=>{
            var V = fc(), te = v(V), de = {};
            M(()=>{
                m(te, u(N).name), de !== (de = u(N).code) && (V.value = (V.__value = u(N).code) ?? "");
            }), I(T, V);
        });
        var _;
        Fo(p);
        var x = b(p, 2), j = v(x);
        {
            var A = (T)=>{
                var N = _c();
                I(T, N);
            }, P = (T)=>{
                var N = dc();
                I(T, N);
            };
            X(j, (T)=>{
                u(o) === "light" ? T(A) : T(P, -1);
            });
        }
        var E = b(h, 4), L = v(E), C = b(d, 2);
        {
            var z = (T)=>{
                var N = vc(), V = v(N), te = v(V);
                M(()=>m(te, u(n))), I(T, N);
            }, $ = (T)=>{
                var N = pc(), V = v(N), te = v(V);
                M((de)=>m(te, de), [
                    ()=>y("loading")
                ]), I(T, N);
            }, W = (T)=>{
                var N = hc(), V = et(N);
                {
                    var te = (G)=>{
                        Rl(G, {
                            onDismiss: ()=>g(a, !1)
                        });
                    };
                    X(V, (G)=>{
                        u(a) && G(te);
                    });
                }
                var de = b(V, 2), Ce = v(de);
                let $e;
                var pt = v(Ce), Ye = b(Ce, 2);
                let D;
                var B = v(Ye), H = b(Ye, 2);
                let w;
                var O = v(H), F = b(H, 2);
                let Z;
                var ae = v(F), ve = b(F, 2);
                let be;
                var le = v(ve), Ne = b(de, 2);
                {
                    var re = (G)=>{
                        Kl(G, {});
                    }, ce = (G)=>{
                        ql(G, {});
                    }, Q = (G)=>{
                        $l(G, {});
                    }, ue = (G)=>{
                        Ql(G, {});
                    }, fe = (G)=>{
                        uc(G, {});
                    };
                    X(Ne, (G)=>{
                        u(i) === "encrypt" ? G(re) : u(i) === "decrypt" ? G(ce, 1) : u(i) === "sign" ? G(Q, 2) : u(i) === "verify" ? G(ue, 3) : u(i) === "keys" && G(fe, 4);
                    });
                }
                M((G, Te, me, Ae, se)=>{
                    $e = gt(Ce, 1, "tab", null, $e, {
                        active: u(i) === "encrypt"
                    }), m(pt, G), D = gt(Ye, 1, "tab", null, D, {
                        active: u(i) === "decrypt"
                    }), m(B, Te), w = gt(H, 1, "tab", null, w, {
                        active: u(i) === "sign"
                    }), m(O, me), Z = gt(F, 1, "tab", null, Z, {
                        active: u(i) === "verify"
                    }), m(ae, Ae), be = gt(ve, 1, "tab", null, be, {
                        active: u(i) === "keys"
                    }), m(le, se);
                }, [
                    ()=>y("tab_encrypt"),
                    ()=>y("tab_decrypt"),
                    ()=>y("tab_sign"),
                    ()=>y("tab_verify"),
                    ()=>y("tab_keys")
                ]), J("click", Ce, ()=>g(i, "encrypt")), J("click", Ye, ()=>g(i, "decrypt")), J("click", H, ()=>g(i, "sign")), J("click", F, ()=>g(i, "verify")), J("click", ve, ()=>g(i, "keys")), I(T, N);
            };
            X(C, (T)=>{
                u(n) ? T(z) : u(r) ? T(W, -1) : T($, 1);
            });
        }
        var oe = b(C, 2), Se = v(oe), K = v(Se);
        M((T, N, V, te)=>{
            _ !== (_ = T) && (p.value = (p.__value = T) ?? "", ti(p, T)), Oe(x, "title", N), m(L, V), m(K, te);
        }, [
            ()=>Ks(),
            ()=>u(o) === "light" ? y("theme_light") : y("theme_dark"),
            ()=>y("app_subtitle"),
            ()=>y("app_footer")
        ]), J("change", p, c), J("click", x, s), I(e, f), dt();
    }
    It([
        "change",
        "click"
    ]);
    async function bc() {
        await js(), Do(yc, {
            target: document.getElementById("app")
        });
    }
    bc();
})();
