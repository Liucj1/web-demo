/*AGENT_VERSION=3.3.9-guoxin.3*/


function _defineProperty(t, e, n) {
	return e in t ? Object.defineProperty(t, e, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : t[e] = n, t
}
function _typeof(t) {
	"@babel/helpers - typeof";
	return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
		return typeof t
	} : function(t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	})(t)
}
window.TINGYUN = function(t, e) {
	if (/(MSIE [0-8].\d+)/.test(navigator.userAgent)) {
		return;
	}
	function n(t) {
		var e = !! t && "length" in t && t.length,
			n = _typeof(t);
		return "function" === n ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
	}
	function r(t, e, r) {
		var a, i = 0;
		if (t) if (n(t)) for (a = t.length; a > i && e.call(t[i], t[i], i) !== !1; i++);
		else for (i in t) if ((r || Object.prototype.hasOwnProperty.call(t, i)) && e.call(t[i], t[i], i) === !1) break;
		return t
	}
	function a(t) {
		var e = !1;
		try {
			/\{\s+\[native code\]/.test(Function.prototype.toString.call(t)) && (e = !0)
		} catch (n) {}
		return e
	}
	function i(t) {
		return JSON.parse(t)
	}
	function o(t) {
		return JSON.stringify(t)
	}
	function s(t) {
		return function(e) {
			return "Array" === t && Array.isArray ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object " + t + "]"
		}
	}
	function c(t) {
		return to(t) && null != t ? "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) || "[" === t.charAt(0) && "]" === t.charAt(t.length - 1) : !1
	}
	function u(t) {
		return c(t) ? new Function("return " + t)() : null
	}
	function f(t, e) {
		switch (_typeof(t)) {
			case "object":
				if (!t) return e === ho ? null : "null";
				if (t instanceof Array) {
					var n = so.call(t);
					return r(n, function(t, e) {
						n[e] = f(t, lo)
					}), "[" + n.join(",") + "]"
				}
				if (t instanceof Date) return t.getTime().toString();
				var a = "";
				return r(t, function(t, e) {
					if (!no(t)) {
						var n = f(t, ho);
						if (n !== vo) {
							var r = f(e, po);
							a += r + ":" + n + ","
						}
					}
				}), a && (a = a.substr(0, a.length - 1)), "{" + a + "}";
			case "string":
				return co + t.replace(uo, "\\$1").replace(fo, "\\n") + co;
			case "number":
				return isNaN(t) ? null : t;
			case "boolean":
				return t;
			case "function":
				return f(t.toString());
			case "undefined":
				return e === ho ? vo : e === lo ? "null" : "undefined";
			default:
				return '"undefined"'
		}
	}
	function l() {
		var t = mo && mo.stringify;
		if (!no(t) || !a(t)) return !1;
		var e = !0;
		try {
			var n = [Boolean, Number, String, Object, Array];
			r(n, function(t) {
				return t.prototype.toJSON ? (e = !1, !1) : void 0
			})
		} catch (i) {}
		return e
	}
	function d() {
		var t = mo && mo.stringify;
		return no(t) && a(t)
	}
	function p() {
		Qi = d() ? i : u, Zi = l() ? o : f
	}
	function h(t) {
		return t && to(t) ? Qi(t) : t
	}
	function v(t, e, n, r) {
		return t.addEventListener(e, n, r)
	}
	function m(t, e, n) {
		return t.attachEvent("on" + e, n)
	}
	function g(t, e) {
		return Function.prototype.apply.apply(t, e)
	}
	function y(t, e) {
		return function() {
			return t.apply(e, arguments)
		}
	}
	function _(t) {
		return yo ? yo(t) : t
	}
	function x(t) {
		var e = arguments.length;
		if (2 > e || !t) return t;
		var n = so.call(arguments, 1);
		return r(n, function(e) {
			r(e, function(e, n) {
				t[n] = e
			})
		}), t
	}
	function b(t, e) {
		for (var n = -1, r = 0, a = null == t ? 0 : t.length, i = []; ++n < a;) {
			var o = t[n];
			e(o, n, t) && (i[r++] = o)
		}
		return i
	}
	function E(t, e) {
		return t ? e ? t.replace(/\{(\w+.?\w+)\}/g, function(t, n) {
			return e[n] || ""
		}).replace(/\{(\d+)\}/g, function(t, n) {
			return e[n] || ""
		}) : t : ""
	}
	function T(t, e, n) {
		var r;
		if (null == t) return -1;
		var a = Object(t),
			i = a.length >>> 0;
		if (0 === i) return -1;
		var o = +n || 0;
		if (Math.abs(o) === 1 / 0 && (o = 0), o >= i) return -1;
		for (r = Math.max(o >= 0 ? o : i - Math.abs(o), 0); i > r;) {
			if (r in a && a[r] === e) return r;
			r++
		}
		return -1
	}
	function S(t, e) {
		var n = null == t ? 0 : t.length;
		if (!n) return -1;
		for (var r = n; r--;) if (t[r] === e) return r;
		return r
	}
	function A(t) {
		return setTimeout(t, 0)
	}
	function w(t) {
		return setTimeout(t, 0, {
			__ty_ignore: !0
		})
	}
	function C() {}
	function O() {
		var t = window && window.performance;
		return t && t.timing && t.timing.navigationStart && t.now ? Math.round(t.timing.navigationStart + t.now()) : +new Date
	}
	function k(t) {
		return function() {
			if (null !== t) {
				var e = t;
				t = null, e.apply(this, arguments)
			}
		}
	}
	function N(t) {
		return t ? to(t) ? t.length : e.ArrayBuffer && t instanceof ArrayBuffer ? t.byteLength : e.Blob && t instanceof Blob ? t.size : t.length ? t.length : 0 : 0
	}
	function P() {
		this.events = {}
	}
	function I(t, e) {
		return setTimeout(t, e || 0, {
			__ty_ignore: !0
		})
	}
	function R(t, e) {
		$u[t] = e
	}
	function D(t) {
		t = t || {}, this._contexts = t.contexts || null, this._name = t.name
	}
	function L() {
		Qu.scope || (Qu.scope = new D({
			name: "ROOT"
		}))
	}
	function j() {
		L(), Qu.scope.setContext.apply(Qu.scope, arguments)
	}
	function H() {
		L(), Qu.scope.setExtraContext.apply(Qu.scope, arguments)
	}
	function q(t, e, n) {
		if (t && e) {
			n || (n = "scope");
			var r = e ? e.getData() : null;
			return r && (t[n] = r), t
		}
	}
	function M(t, e, n) {
		return n || (e === tu ? n = iu : e === eu && (n = ou)), "".concat(t, "_").concat(e || rf, "_").concat(n || af)
	}
	function B(t) {
		if (t && ro(t)) {
			var n = t.type,
				r = t.name,
				a = t.handler,
				i = t.options;
			if (!(null == nf[n] || r && T(nf[n], r) < 0 || !no(a) || i && !ro(i))) {
				var o = M(n, r, i && i.position);
				of[o] || (of[o] = []), of[o].push(t), n === Kc && (r === Qc && e.TINGYUN && e.TINGYUN.inited && z({
					type: Kc,
					name: Qc
				}), r === Zc && Qu.pageLoadEventEnd && z({
					type: Kc,
					name: Zc
				}))
			}
		}
	}
	function U(t, e) {
		B({
			type: Kc,
			name: t,
			handler: e
		})
	}
	function F(t, e, n) {
		B({
			type: Wc,
			name: t,
			handler: e,
			options: n
		})
	}
	function G(t, e) {
		B({
			type: Vc,
			name: t,
			handler: e
		})
	}
	function Y(t) {
		B({
			type: Xc,
			handler: t
		})
	}
	function z(t) {
		var e = t.type,
			n = t.name,
			a = t.hookPostion,
			i = t.args,
			o = M(e, n, a),
			s = {
				exist: !1,
				results: []
			};
		if (of[o]) {
			s.exist = !0;
			var c = t.scope;
			c || (c = new D);
			try {
				r(of[o], function(t) {
					var e = t.handler,
						n = t.options;
					n = n || {};
					var r = x(i || {}, {
						scope: c
					}),
						a = e.call(c, r);
					s.results.push(a)
				})
			} catch (u) {}
		}
		return s
	}
	function J(t, e) {
		return nf[t] && T(nf[t], e) > -1
	}
	function K(t) {
		function e() {}
		return e.prototype = t, new e
	}
	function W() {
		try {
			return e.self !== e.top
		} catch (t) {
			return !1
		}
	}
	function V(t) {
		if ($(), hf = t || {}, vf = sf(hf), x(vf, {
			isGather: !1,
			fp_threshold: Fu,
			fs_threshold: Gu,
			dr_threshold: Yu,
			trace_threshold: zu,
			pvid: bo(),
			ref: uf.URL,
			referrer: uf.referrer,
			v: "3.3.9-guoxin.3",
			av: "3.3.9-guoxin.3",
			ua: (df || {}).userAgent,
			baseInfo: {}
		}), yf = {
			pvid: vf.pvid,
			ref: vf.ref,
			referrer: vf.referrer,
			v: vf.v,
			av: vf.av,
			ua: vf.ua
		}, W() && (yf.ifr = 1), !hf.appKey) {
			var n = e.__ty_app_web_inject_config;
			n && n.appKey && (hf.appKey = n.appKey)
		}
	}
	function X(t) {
		x(yf, t)
	}
	function $() {
		vf = {}, hf = {}
	}
	function Q() {
		return e.navigator.userAgent.substring(0, 256)
	}
	function Z() {
		return xf
	}
	function tt() {
		return e.webkit && e.webkit.messageHandlers && e.webkit.messageHandlers.nbsBrowserAgent && e.webkit.messageHandlers.nbsBrowserAgent.postMessage
	}
	function et() {
		return "undefined" != typeof nbsJsBridge && nbsJsBridge.postMessage
	}
	function nt() {
		return tt() || et()
	}
	function rt(t) {
		return to(t) || (t = Zi(t)), t
	}
	function at(t, e) {
		e = e || C;
		var n = new Image;
		go(n, Co, function() {
			("loaded" == n.readyState || 4 == n.readyState) && e(null)
		}, !1), go(n, To, function() {
			e(null)
		}, !1), go(n, Eo, function() {
			e(Eo)
		}, !1), n.src = t
	}
	function it(t, e) {
		var n = t.url,
			r = t.data,
			a = (t.header, t.callback),
			i = t.method,
			o = t.timeout,
			s = k(a),
			c = new XDomainRequest;
		c[Ro] = !0, i = i || Mu, c.open(i, n), c.onload = function() {
			s(c.responseText), e()
		}, c.onerror = function(t) {
			s(t), e()
		}, o && (c.timeout = o), bf(function() {
			i === Mu ? c.send(rt(r)) : c.send()
		})
	}
	function ot(t, e) {
		var n = t.url,
			r = t.data,
			a = t.header,
			i = t.callback,
			o = t.method,
			s = t.timeout,
			c = k(i),
			u = new ff;
		u[Ro] = !0, u.overrideMimeType && u.overrideMimeType("text/html"), s && (u.timeout = s), u.onreadystatechange = function() {
			4 == u.readyState && (c(u.responseText), e())
		}, u.onerror = function() {
			c(), e()
		};
		try {
			o = o || Mu, u.open(o, n, !0);
			for (var f in a) u.setRequestHeader(f, a[f]);
			o === Mu ? u.send(rt(r)) : u.send()
		} catch (l) {
			e()
		}
	}
	function st(t, e) {
		var n = t.url,
			r = t.data,
			a = (t.header, t.callback),
			i = df.sendBeacon(n, rt(r));
		i && (a && a(), e())
	}
	function ct(t, e) {
		var n = {
			url: t,
			header: {
				"content-type": "text/plain;charset=UTF-8"
			},
			body: rt(e)
		}, r = {
			type: 0,
			params: {
				ri: n
			}
		};
		return rt(r)
	}
	function ut(t, n) {
		var r = t.url,
			a = t.data,
			i = t.callback;
		try {
			e.webkit.messageHandlers.nbsBrowserAgent.postMessage(ct(r, a))
		} catch (o) {}
		i && i(), n()
	}
	function ft(t, e) {
		var n = t.url,
			r = t.data,
			a = t.callback;
		try {
			nbsJsBridge.postMessage(ct(n, r))
		} catch (i) {}
		a && a(), e()
	}
	function lt(t) {
		this.size = t || 100, this.queue = [], this.running = !1
	}
	function dt() {
		Ef = tf = ot, Tf = !1, gf.initiator = Ou
	}
	function pt(t) {
		ef = new lt(t)
	}
	function ht(t) {
		ef.add(t)
	}
	function vt() {
		var t = this;
		t.xhrs = [], t.errs = [], P.call(t)
	}
	function mt() {
		var t = "";
		try {
			t = e.location.protocol
		} catch (n) {}
		return T(Df, t) < 0 && (t = Rf), t
	}
	function gt(t) {
		if (!t) return null;
		var e = t.indexOf(":");
		return e > -1 && (t = t.substring(0, e)), t
	}
	function yt(t) {
		xt(t, Lf)
	}
	function _t(t) {
		xt(t, jf)
	}
	function xt(t, e) {
		var n = "ok";
		return t ? void e.push(t) : n = e.length ? e.join("\n") : n
	}
	function bt(t) {
		try {
			return h(t)
		} catch (e) {
			yt(e && e.message)
		}
		return null
	}
	function Et(t, e, n) {
		if (null == t[e] || eo(t[e])) eo(t[e]) ? t[e].push(n) : t[e] = n;
		else {
			var r = t[e];
			t[e] = [r], t[e].push(n)
		}
	}
	function Tt(t) {
		return t.send_protocol ? t.send_protocol : t.pageProtocol !== If && /^https/i.test(t.pageProtocol) ? Rf : If
	}
	function St(t) {
		if (!t || !to(t)) return "";
		var e, n = t.indexOf("?");
		return n >= 0 && (e = t.substring(n + 1)), e
	}
	function At(t) {
		var e = St(t),
			n = kt(e);
		return {
			queryObj: n,
			queryString: e
		}
	}
	function wt(t) {
		var e = St(t);
		return kt(e)
	}
	function Ct(t) {
		return t && t.indexOf("?") && t.lastIndexOf("=") && t.lastIndexOf("=") > t.indexOf("?") ? wt(t) : {}
	}
	function Ot(t) {
		var e = {};
		return t = t || "", to(t) && t ? e = kt(t) : e
	}
	function kt(t) {
		var e = {};
		return t && r(t.split("&"), function(t) {
			var n = t.split("="),
				r = Nt(n[0]),
				a = Nt(n[1]);
			if (to(a) && window.isNaN(a)) {
				var i = bt(a);
				null != i && (a = i)
			}
			r && null != a && Et(e, r, a)
		}), e
	}
	function Nt(t) {
		try {
			return decodeURIComponent(t)
		} catch (e) {}
		return null
	}
	function Pt(t) {
		var e = [];
		return r(t, function(t, n) {
			var r = _(n) + "=" + _(t);
			e.push(r)
		}), e.join("&")
	}
	function It(t, e) {
		var n = Pt(e);
		return t += (t.indexOf("?") > 0 ? "&" : "?") + n
	}
	function Rt(t, e) {
		return e ? Of + "//" + t : t
	}
	function Dt(t) {
		Of = Tt(t)
	}
	function Lt() {
		e.TINGYUN_RELEASE && e.TINGYUN_RELEASE.id && (vf.releaseId = e.TINGYUN_RELEASE.id)
	}
	function jt(t) {
		t[0] && (yf.sid = t[0]), t[1] && (yf.__s = +t[1])
	}
	function Ht() {
		delete yf.sid, delete yf.__s
	}
	function qt() {
		return vf.sessionMode == yu
	}
	function Mt() {
		var t = kf(uc);
		return t ? t.split(dc) : null
	}
	function Bt(t) {
		t && 3 === t.length && Nf(uc, t.join(dc))
	}
	function Ut() {
		var t = Ft();
		jt(t)
	}
	function Ft() {
		var t = O(),
			e = [bo(), t, t];
		return Bt(e), e
	}
	function Gt() {
		var t = O(),
			e = Mt();
		Yt(e) ? Ut() : (e[2] = t, Bt(e))
	}
	function Yt(t) {
		return !t || 3 !== t.length || O() - +t[2] > lc
	}
	function zt() {
		var t = kf(fc);
		return t ? t : Nf(fc, bo())
	}
	function Jt() {
		return e.TINGYUN && e.TINGYUN.uid ? e.TINGYUN.uid : kf(cc)
	}
	function Kt(t, n) {
		if (null != t) {
			var r = Jt();
			null != r && t !== r && Ut(), e.TINGYUN.uid = t, n && n.noStore || Nf(cc, t)
		}
	}
	function Wt(t) {
		null != t && Nf(fc, t)
	}
	function Vt() {
		var t = {
			did: zt()
		}, e = Jt();
		return e && (t.uid = e), t
	}
	function Xt(t) {
		var e = !0;
		if (t.beacon_config && ro(t.beacon_config)) {
			var n = gt(t.pageProtocol),
				r = n && t.beacon_config[n];
			r && (t.beacon = r, e = !1)
		}
		t.relativeBeaconProtocol = e
	}
	function $t(t) {
		var n = Vt(),
			r = x({
				url: e.location.href
			}, yf, n, t || {}, vf.baseInfo, wf || {});
		return Lt(), vf.releaseId && (r.rid = vf.releaseId), r
	}
	function Qt(t) {
		var e = Zt();
		return t = $t(t), {
			beacon: e,
			query: t
		}
	}
	function Zt() {
		return Rt(vf.beacon, vf.relativeBeaconProtocol)
	}
	function te(t) {
		var e = t.beacon,
			n = t.path,
			r = t.query;
		return It("".concat(e).concat(n), r)
	}
	function ee(t, e) {
		var n = !1;
		return r(t, function(t) {
			var r = e.call(this, t);
			return r ? (n = !0, !1) : !0
		}), n
	}
	function ne() {
		return q({
			type: Qo,
			optCustomParam: Qu.opt_custom_param,
			info: gf
		}, Qu.scope)
	}
	function re(t, e) {
		if (t) {
			qt() && Gt(), e = e || {};
			var n = e.requestInfo;
			n || (n = Qt()), x(n.query, e.query || {}, {
				ps: e.crossPage || t.type === rs && t.subType === ss ? 1 : 0,
				__r: O()
			}), n.path = "/action";
			var a = [e.commonActionInfoMessage ? e.commonActionInfoMessage : ne(), t];
			n.data = a;
			var i = z({
				type: Xc,
				args: n,
				scope: Qu.scope
			});
			if (!i.exist || !ee(i.results, function(t) {
				return t === !1
			})) {
				Hf && (Hf = !1, p());
				try {
					var o = [];
					r(n.data, function(t) {
						var e = ae(t);
						e && o.push(e + Zi(t))
					});
					var s = o.join("\n"),
						c = te(n);
					Af.emit("send", c, s, function() {
						e.cb && e.cb.call(null, t)
					})
				} catch (u) {}
			}
		}
	}
	function ae(t) {
		var e = "";
		return e = t.type === Qo ? hs : t.type === Zo ? us : t.type === ts ? fs : t.type === ns ? ds : t.type === es ? ls : t.type === rs ? ps : t.type === is ? vs : t.type === Tu ? Su : t.type
	}
	function ie(t, e) {
		var n;
		return t && (n = !0, r(t, function() {
			return n = !1
		}, e)), !! n
	}
	function oe() {
		var t = {};
		return r(Bf, function(e) {
			t[e] = {
				current: 0,
				children: 0
			}
		}), t
	}
	function se(t, e) {
		r(t, function(t) {
			t.cid === e.id && (t.items = e.items || [])
		})
	}
	function ce(t, e) {
		r(t, function(t) {
			r(e, function(e) {
				t.cid === e.id && (t.state || (t.state = e.state), t.items = e.items || [])
			})
		}), r(e, function(t) {
			ce(t.items, t.children)
		})
	}
	function ue(t) {
		t = t || {}, this.id = ++Qu.uniqueId, this.parent = t.parent || null, this.children = [], this.name = t.name || "", this.type = t.type || Zo, this.subType = this.type === Zo ? t.subType || "click" : t.subType, this.items = [], this.remain = oe(), this.s = t.s || O(), this.e = null, this.data = t.data, this.state = gs, this.crossPage = t.crossPage || !1, this.callback = t.callback || {}, this.endLock = t.endLock, this.registerTimeout(), this.closed = !1, this.isTimeout = !1, this.cleared = !1, this.stateChanged = !1, this.actionCount = {
			ajax: this.type === ts ? 1 : 0,
			iframe: this.type === ns ? 1 : 0
		}, this.sent = !1, this.sendOptions = {}, this.speBinded = !1, this.spe = null, this.waitingSpeEnd = !1, this.waitingSpeTimer = null, null != this.parent && this.parent.children.push(this), this.eventData = null, this.resource = {
			handler: {},
			statistic: {
				load: {},
				error: {},
				total: {},
				timeout: {}
			},
			record: {
				timeout: [],
				error: []
			}
		}, this._ctx = {}
	}
	function fe(t) {
		jt([t.id, t.startTime]), Uf = t
	}
	function le(t, e, n) {
		if (!qt()) {
			var r = {
				id: t || bo(),
				startTime: O()
			};
			return to(e) && (r.name = e), vf.session_handler && vf.session_handler.create && vf.session_handler.create.call(this, r), fe(r), he(xu, n), r
		}
	}
	function de(t, e) {
		qt() || (he(Eu, e), vf.session_handler && vf.session_handler.end && (!t && Uf && (t = Uf.id), vf.session_handler.end.call(this, t)), Ht(), Uf = null)
	}
	function pe(t) {
		qt() || Uf && ro(t) && he(bu, t)
	}
	function he(t, e) {
		if (Uf) {
			var n = Uf,
				r = n.id,
				a = n.startTime,
				i = n.name,
				o = {
					type: _u,
					id: r,
					time: O(),
					startTime: a
				};
			i && (o.name = i), e && (o.scope = {
				contexts: e
			}), ue.buildImmediateAction(_u, t, o)
		}
	}
	function ve() {
		if (vf.session_handler && vf.session_handler.init) {
			var t;
			try {
				t = vf.session_handler.init.call(null)
			} catch (e) {}
			t && fe(t)
		}
	}
	function me(t) {
		var e = {}, n = {}, r = At(t),
			a = r.queryObj,
			i = r.queryString;
		return a && (e = ge(a, vf.requestParamKeys[jo], vf.requestParamKeys[Ho]), n[qo] = be(a, vf.optCustomParamRules[qo], !0)), {
			requestParams: e,
			optCustomParams: xe(n),
			operaAllParam: i
		}
	}
	function ge(t, e, n) {
		var a = {};
		return t && e && e.length && e.length > 0 && r(e, function(e) {
			var n = t[e];
			null != n && Et(a, e, n)
		}), t && n && n.length && n.length > 0 && r(n, function(e) {
			var n = ye(Go, e),
				r = n(t);
			null != r && Et(a, e, r)
		}), a
	}
	function ye(t, e) {
		var n = t + "." + e;
		if (zf[n]) return zf[n];
		var a = (e || "").split("."),
			i = "";
		e && 0 !== e.indexOf("[") && (i = ".");
		var o = t;
		r(a, function(t, e) {
			0 === e && (o += i), o += t.indexOf("-") > -1 && 0 !== t.indexOf("[") && t.indexOf("]") !== t.length - 1 ? "['" + t + "']" : (e > 0 ? "." : "") + t
		});
		var s;
		try {
			s = new Function(t, "try{return " + o + ";}catch(e){}return null;")
		} catch (c) {
			s = C
		}
		return zf[n] = s, s
	}
	function _e(t) {
		return t += "", t && t.substr(0, 128) || ""
	}
	function xe(t) {
		var e = {};
		return r(t, function(t, n) {
			ie(t) || (e[n] = t)
		}), e
	}
	function be(t, e, n) {
		var a = {};
		return t && e && e.length && e.length > 0 && r(e, function(e) {
			var r = t[e];
			if (null != r) Et(a, e, r);
			else if (n) {
				var i = ye(Go, e);
				r = i(t), null != r && Et(a, e, r)
			}
		}), a
	}
	function Ee(t) {
		Ff && t()
	}
	function Te() {
		Ff = !1
	}
	function Se() {
		Ff = vf.debuggable || !1
	}
	function Ae(t) {
		return t.loadEventEnd || t._end
	}
	function we(e) {
		var n = e.performance || {}, r = n.timing,
			a = r && r.navigationStart ? r.navigationStart : t;
		return {
			performance: n,
			timing: r,
			startTime: a
		}
	}
	function Ce(t, n) {
		var a = we(n),
			i = a.performance,
			o = a.timing,
			s = a.startTime,
			c = 0;
		if (Xu[su] && Xu[su] > 0 ? (c = Xu[su], t.__fp = Wf) : i.getEntriesByName && o ? (c = o.domLoading, r(Xu.resources, function(t) {
			var e = i.getEntriesByName(t);
			if (1 === e.length) {
				var n = e[0].responseEnd;
				n > c && (c = n)
			}
		}), c -= s, t.__fp = $f) : e.TINGYUN && e.TINGYUN[Oc] && (c = e.TINGYUN[Oc] - s, 0 > c && (c = 0), t.__fp = Qf), !c || 0 >= c) {
			if (n.chrome && n.chrome.loadTimes) {
				var u = n.chrome.loadTimes();
				u && u.firstPaintTime && (c = 1e3 * u.firstPaintTime - s, t.__fp = Vf)
			} else o && o.msFirstPaint && (c = o.msFirstPaint - s, t.__fp = Xf);
			(!c || 0 >= c) && (c = 0, t.__fp = Kf)
		}
		return Math.round(c)
	}
	function Oe(t, n) {
		var a = we(n),
			i = a.performance,
			o = a.timing,
			s = a.startTime,
			c = t.fp || 0;
		if (t.__fs = al, Xu[cu]) c = Xu[cu], t.__fs = tl;
		else if (Xu.lcpStopTime) c = Xu.lcpStopTime - s, t.__fs = el;
		else if (ke()) {
			var u = Xu.imageResources || [],
				f = e.innerHeight,
				l = e.innerWidth;
			f || (f = uf.documentElement.clientHeight), l || (l = uf.documentElement.clientWidth);
			var d = [];
			u.length > 0 ? r(u, function(t) {
				Pe(t.element, f, l) && d.push(t)
			}) : no(i.getEntriesByName) && r(uf.querySelectorAll("img"), function(t) {
				Pe(t, f, l) && d.push({
					element: t
				})
			});
			var p = (o.loadEventEnd || Af.loadEventEnd) - s;
			r(d, function(e) {
				if (e.loadTime) {
					var n = e.loadTime - s;
					n > c && (c = n, t.__fs = rl)
				} else if (e.element && e.element.src) {
					var r = i.getEntriesByName(e.element.src);
					if (r.length) {
						var a = r[0],
							o = a.responseEnd;
						a.fetchStart <= p && o > c && (c = o, t.__fs = nl)
					}
				}
			})
		}
		return c <= t.fp && (c = t.fp || 0, t.__fs = al, 0 >= c && (c = 0, t.__fs = Zf)), Math.round(c)
	}
	function ke(t) {
		var e = !0,
			n = uf.createElement("img");
		return n.getBoundingClientRect || (e = !1), e
	}
	function Ne(t) {
		if (!t) return !1;
		if (!vf.fs_resources || 0 === vf.fs_resources.length) return !0;
		var e = !1;
		return r(vf.fs_resources, function(n) {
			return t.indexOf(n) > -1 ? (e = !0, !1) : void 0
		}), e
	}
	function Pe(t, e, n) {
		return t.src && Ne(t.src) && Ie(Re(t), e, n) && !De(t)
	}
	function Ie(t, n, r) {
		if (t) {
			var a = e.pageYOffset,
				i = t.top + (0 === a ? 0 : a || uf.scrollTop || 0) - (uf.clientTop || 0);
			if (i >= n) return !1;
			var o = t.left;
			return o >= 0 && r > o
		}
		return !1
	}
	function Re(t) {
		if (Z()) return no(t.getBoundingClientRect) ? t.getBoundingClientRect() : void 0;
		var e;
		try {
			e = t.getBoundingClientRect ? t.getBoundingClientRect() : void 0
		} catch (n) {}
		return e
	}
	function De(t) {
		return Mf.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : Le(t)
	}
	function Le(t) {
		for (; t && 1 === t.nodeType;) {
			if ("none" === je(t) || "hidden" === t.type) return !0;
			t = t.parentNode
		}
		return !1
	}
	function je(t) {
		return t.style && t.style.display
	}
	function He(t, e) {
		var n = we(e),
			r = n.timing,
			a = n.startTime,
			i = 0;
		r && (i = r[Ss] || r.domInteractive || r.domLoading || i), 0 >= i ? (Af.domContentLoadedEventStart ? (i = Af.domContentLoadedEventStart, t.__dr = sl) : (i = Af._end, t.__dr = cl), 0 >= i && (t.__dr = il)) : t.__dr = ol;
		var o = i - a;
		return 0 > o && (o = 0), Math.round(o)
	}
	function qe(e, n, r) {
		e.loadEventEnd = e.le;
		var a = n.performance && n.performance.timing || {}, i = a.navigationStart || t,
			o = 0;
		if (r && r.hasChildType(ts)) o = O() - i;
		else {
			var s = a.loadEventEnd || Af.loadEventEnd || O(),
				c = 0;
			i > 0 && s > i && (c = s - i);
			var u = [e.fs, e.dr, e.fp, c];
			o = Math.max.apply(null, u)
		}
		return Math.round(o)
	}
	function Me(t, e) {
		var n = t.fp || 0,
			r = we(e),
			a = r.startTime,
			i = O() - a - n;
		return 0 > i && (i = 0), i
	}
	function Be(e) {
		function n(t) {
			return o[t] > 0 ? o[t] - s : 0
		}
		var a = {}, i = e.performance || {}, o = i.timing || {}, s = e.TINGYUN && e.TINGYUN.globalStart || t,
			c = e.TINGYUN && e.TINGYUN.currentAgent || Af;
		if (o) {
			Ee(function() {
				var t = Jf.t = {};
				r(o, function(e, n) {
					no(e) || (t[n] = e)
				}, !0)
			}), s = o.navigationStart, a = {
				ns: s,
				f: n(xs),
				qs: n(bs),
				rs: n(Es),
				re: n(Ts),
				os: n(Ss),
				oe: n(As),
				oi: n(ws),
				oc: n(Cs),
				ls: n(Os),
				le: n(ks),
				tus: n(Ns),
				tue: n(Ps)
			};
			var u = n(Is),
				f = n(Rs),
				l = n(Ds),
				d = n(Ls),
				p = n(js),
				h = n(Hs);
			if (a.cs = p, a.ce = h, a.ds = u, a.de = f, (d - l > 0 || d > 0) && (a.es = l, a.ee = d), 0 == a.le) {
				var v = Ae(c);
				a.ue = v - s
			}
			c && (c._le = a.ue || a.le), o[qs] ? a.sl = n(qs) : a.sl = 0
		} else a = {
			t: s,
			le: Ae(c) - s
		};
		return a.je = c && c.errs && c.errs.length || 0, a
	}
	function Ue(t) {
		if (!t) return {};
		var e = Be(t);
		return e.fp = Ce(e, t), e.dr = He(e, t), e.fs = Oe(e, t), e.le = qe(e, t), Fe(e)
	}
	function Fe(t) {
		var e = {
			f: t.f,
			fp: t.fp,
			fs: t.fs,
			dr: t.dr,
			le: t.le,
			loadEventEnd: t.loadEventEnd,
			je: t.je,
			load: t.load
		};
		return x(e, Qu.pageServerData), Qu.iframeMetric = e, e
	}
	function Ge() {
		Qu.enableLCPObserver = !1;
		try {
			r(Qu.performanceObserver, function(t) {
				t && t.disconnect()
			})
		} catch (t) {}
	}
	function Ye() {
		Xu.lcpStopTime = O(), Qu.enableLCPObserver = !1;
		try {
			var t = Qu.performanceObserver[cu];
			t && t.disconnect()
		} catch (e) {}
	}
	function ze() {
		var t = me(vf.ref);
		Qu.pageUrlInfo = t, Qu.opt_custom_param = t.optCustomParams
	}
	function Je(t, e, n) {
		if (!n) try {
			n = e && window[e] || uf.cookie || ""
		} catch (r) {}
		if (n) {
			var a = n.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
			return a ? a[3] : null
		}
		return null
	}
	function Ke(t, e, n, r, a) {
		var i = t + "=" + e;
		if (n) {
			var o = new Date;
			o.setTime(o.getTime() + 1e3 * n), i += ";expires=" + o.toGMTString()
		}
		r && (i += ";path=" + r), (a || uf).cookie = i
	}
	function We(t) {
		var e, n;
		if (t) if (0 === t.indexOf(Wo)) {
			var r = t.substring(Wo.length);
			try {
				n = fl.decode(r), e = bt(n)
			} catch (a) {}
		} else {
			try {
				n = decodeURIComponent(t), e = bt(n)
			} catch (a) {}
			if (!e) try {
				n = decodeURIComponent(n), e = bt(n)
			} catch (a) {
				yt(a && a.message)
			}
		}
		return e
	}
	function Ve() {
		if (!vf.pageServerData) {
			var t = Xe(),
				e = {};
			t && ro(t) && (e.s_id = t.id, e.s_tname = t.tname, e.s_tid = t.tid, e.s_rid = t.rid, e.s_duration = t.duration, "user" in t && (e.s_user = t.user, Kt(t.user)), "bid" in t && (e.s_bid = _e(t.bid)), "ber" in t && (e.s_ber = t.ber), "isError" in t && (e.s_isError = t.isError)), vf.pageServerData = e
		}
	}
	function Xe() {
		var t = {}, e = Je(zo, Yo);
		return e && (t = We(e), Ke(zo, "", -1e3, "/")), t
	}
	function $e(t) {
		var e = {};
		if (t) {
			var n = [Uc, Fc, Gc, Yc, zc];
			r(t.split(""), function(t, r) {
				e[n[r]] = "1" === t
			})
		}
		return e
	}
	function Qe(t) {
		var e = {};
		return r(t, function(t) {
			t && T(e[t.type] || [], t.key) < 0 && (e[t.type] = e[t.type] || []).push(t.key)
		}), e
	}
	function Ze(t) {
		return en(t, !0)
	}
	function tn(t, e) {
		return t in vf && vf[t] > 0 ? vf[t] : e
	}
	function en(t, e) {
		return t in vf ? 1 == vf[t] : e
	}
	function nn(t, e) {
		return t in vf ? vf[t] : e
	}
	function rn(t) {
		V(t), x(vf, {
			requestParamKeys: Qe(vf.request_param_keys),
			optCustomParamRules: Qe(vf.opt_custom_param_rule),
			corsDomains: nn("cors_domains", []),
			ignoreNoFilePropError: Ze("ignore_err"),
			debuggable: Ze("debug"),
			sessionTimeout: tn("session_timeout", lc),
			collectAllParam: $e(vf.collect_all_param),
			routerEnable: Ze("router_enable"),
			hook_auto_event: Ze("hook_auto_event"),
			hook_timer: en("hook_timer", !1),
			hook_iframe: Ze("hook_iframe"),
			hook_cross_page: Ze("hook_cross_page"),
			hook_inline_event: Ze("hook_inline_event"),
			inline_event_associate_threshold: tn("inline_event_associate_threshold", sc),
			script_event_associate_threshold: tn("script_event_associate_threshold", Jc),
			spaMetricEnable: Ze("spa_metric_enable"),
			lcpEnable: Ze("lcp_enable"),
			pageLoadDelay: tn("page_load_delay", fu),
			resourceWaitTime: tn("resource_wait_time", lu),
			resourceAssociateThreshold: tn("resource_associate_threshold", du),
			eventResources: nn("event_resources", []),
			eventResourcesIgnore: nn("event_resources_ignore", []),
			fs_resources: nn("fs_resources", []),
			sessionMode: nn("session_mode", yu),
			exposeOriginError: Ze("expose_origin_error"),
			ajaxBlacklist: nn("ajax_blacklist", []),
			eventTimeout: tn("event_timeout", $o),
			configLoad: en("config_load", !1),
			configLoadUri: nn("config_load_uri", Hu),
			configLoadInterval: tn("config_load_interval", Lu),
			configLoadTimeout: tn("config_load_timeout", ju),
			console_debug: en("console_debug", !1),
			set_timeout_max_depth: tn("set_timeout_max_depth", Ms),
			mpaas_rpc: Ze("mpaas_rpc"),
			mpaas_rpc_api: nn("mpaas_rpc_api", Bu),
			req_capacity: tn("req_capacity", Uu),
			x_server_switch: Ze("x_server_switch"),
			serverTiming: en("server_timing", !1),
			collect_noajax_hashroute: en("collect_noajax_hashroute", !1),
			upload_timeout_ajax: en("upload_timeout_ajax", !1),
			hook_xhr_setrequestheader: en("hook_xhr_setrequestheader", !0),
			router_event_delay: tn("router_event_delay", kc),
			monitor_dom_mutation: en("monitor_dom_mutation", !0),
			user_action_timeout: tn("user_action_timeout", vc),
			monitorResources: nn("monitor_resources", [])
		});
		var n = vf.apm_headers || [];
		vf.apm_arms && T(vf.apm_headers, Tc) < 0 && n.push(Tc), vf.apmHeaders = n, r(vf.corsDomains, function(t) {
			return "*" === t ? (vf.apmEnableAllCorsDomains = !0, !1) : !0
		}), r(ll, function(t) {
			hf[t] && (vf.baseInfo[t] = hf[t], e[Io][t] = hf[t])
		});
		try {
			vf.baseHref = (document.getElementsByTagName("base")[0] || {}).href
		} catch (a) {}
	}
	function an() {
		if (Se(), vf.appKey && !nt() && dt(), vf.pageProtocol = mt(), Dt(vf), Xt(vf), X(Vt()), qt()) {
			var t = Mt();
			Yt(t) && (t = Ft()), jt(t)
		} else ve();
		Ve(), Lt(), ze()
	}
	function on() {
		return vf
	}
	function sn(t, e, n) {
		t && t.context && t.context.parent && (t.pcid = t.context.parent.id, t.context.parent.updateRemain(1, e), t.context.parent.items.push(t.context.data), n && t.context.parent.children.push(t.context))
	}
	function cn(t) {
		if (!t) return !1;
		var e = vf.eventResources.length > 0,
			n = vf.eventResourcesIgnore.length > 0;
		return e && n ? un(t) && fn(t) : e ? un(t) : n ? fn(t) : !0
	}
	function un(t) {
		var e = !1;
		return r(vf.eventResources, function(n) {
			return t.indexOf(n) > -1 ? (e = !0, !1) : void 0
		}), e
	}
	function fn(t) {
		var e = !0;
		return r(vf.eventResourcesIgnore, function(n) {
			return t.indexOf(n) > -1 ? (e = !1, !1) : void 0
		}), e
	}
	function ln(t) {
		return t && (t.type === rs || t.type === Zo && t.subType !== Xs)
	}
	function dn(t) {
		var e = dl.indexOf(t.nodeName) > -1 && cn(t.src) && !De(t);
		if (e) {
			var n = Qu.recentFinishedAjaxContext;
			if (n && n.data) {
				var a = O(),
					i = a - n.data.end;
				if (i <= vf.resourceAssociateThreshold) {
					var o = ue.getRootContext(n, function(t) {
						return t.type === rs || t.type === Zo && !t.subType === Xs
					});
					o && o.addResource(t, a)
				}
			}
		}
		r(t.childNodes, dn)
	}
	function pn() {
		if (vf.spaMetricEnable && no(window.MutationObserver)) {
			var t = document.getElementsByTagName("body"),
				e = t && t[0];
			if (e) {
				var n = {
					childList: !0,
					subtree: !0
				}, a = function(t) {
					r(t, function(t) {
						r(t.addedNodes, dn)
					})
				};
				try {
					Gf = new MutationObserver(a), Gf.observe(e, n)
				} catch (i) {}
			}
		}
	}
	function hn() {
		var t = uf.getElementsByTagName("img");
		r(t, function(t) {
			t.complete || t[wc] || (t[wc] = !0, go(t, To, function() {
				Xu.imageResources.push({
					loadTime: O(),
					element: t
				})
			}))
		})
	}
	function vn(t) {
		var e = uf.createElement("script");
		e.type = "text/javascript";
		try {
			e.appendChild(uf.createTextNode(t))
		} catch (n) {
			e.text = t
		}
		uf.getElementsByTagName("head")[0].appendChild(e)
	}
	function mn() {
		function t(t) {
			try {
				var e = t.getEntries();
				e && r(e, function(t) {
					t.entryType === cu && Qu.enableLCPObserver ? Xu[cu] = t.renderTime || t.loadTime : t.entryType === su && t.name === uu && (Xu[su] = t.startTime)
				})
			} catch (n) {}
		}
		if (e.PerformanceObserver) {
			var n = [su];
			vf.lcpEnable && n.push(cu);
			var a = [],
				i = e.PerformanceObserver.supportedEntryTypes || [];
			if (r(n, function(t) {
				i.indexOf(t) > -1 && a.push(t)
			}), Ee(function() {
				Jf.et = a
			}), 0 != a.length) try {
				r(a, function(n) {
					Qu.performanceObserver[n] = new e.PerformanceObserver(t), Qu.performanceObserver[n].observe({
						type: n,
						buffered: !0
					})
				})
			} catch (o) {}
		}
	}
	function gn(t) {
		mn(), hl.on(To, k(function() {
			n();
			var e = O();
			Ee(function() {
				Jf.load = e
			}), t.loadEventEnd = e, clearInterval(pl)
		})), r([To, So, Ao, wo], function(t) {
			go(e, t, function(e) {
				Ee(function() {
					(Jf.e[t] || (Jf.e[t] = [])).push(O())
				}), hl.emit(t, e)
			})
		});
		var n = k(function() {
			vf.monitor_dom_mutation && pn();
			var n = O();
			if (Ee(function() {
				Jf.end = n
			}), t.domContentLoadedEventStart = n, Z() && e.performance && e.performance.getEntriesByName) {
				if (!uf.querySelectorAll) return;
				Xu.resources = Xu.resources || [], r(uf.querySelectorAll("head>link,head>script"), function(t) {
					var e;
					"LINK" == t.tagName ? e = t.href : "SCRIPT" != t.tagName || t.defer || t.async || (e = t.src), e && Xu.resources.push(e)
				})
			}
		});
		if (Z() && go(uf, ko, n), go(uf, Co, function(t) {
			uf.readyState === Oo && n()
		}), (!Z() || e.performance && !e.performance.getEntriesByName) && (pl = setInterval(hn, Cc)), !Z()) try {
			vn("if(window.TINGYUN) {window.TINGYUN.".concat(Oc, "=+new Date();}"))
		} catch (a) {}
	}
	function yn(t) {
		return Yf.call(t)
	}
	function _n(t) {
		var e = {}, n = t.split(":");
		if (!n) return e;
		if (1 === n.length) e.filename = n[0], e.lineno = 0, e.colno = 0, e.resolveLevel = Au;
		else if (n.length >= 2) {
			var r, a = n[n.length - 1],
				i = n[n.length - 2],
				o = !isNaN(+a),
				s = !isNaN(+i);
			o && s ? (r = 2, e.lineno = +i, e.colno = +a, e.resolveLevel = Cu) : o ? (r = 1, e.lineno = +a, e.colno = 0, e.resolveLevel = wu) : (r = 0, e.lineno = 0, e.colno = 0, e.resolveLevel = Au), e.filename = (n.slice(0, n.length - r) || []).join(":")
		}
		return e
	}
	function xn(t) {
		if (t && (t = yn(t))) {
			var e;
			if (0 === t.indexOf("at ")) {
				var n = t.indexOf("("),
					r = t.indexOf(")");
				if (n && r) {
					var a = n + 1;
					a > r && (a = r);
					var i = t.substring(a, r);
					i && (e = _n(i))
				}
			} else if (t.indexOf("@") > -1) {
				var o = t.split("@");
				o[1] && (e = _n(o[1]))
			}
			return e
		}
	}
	function bn(t) {
		this.limit = t, this.reset()
	}
	function En(t, e, n, r, a) {
		return String(t) + String(e) + String(n) + String(r) + String(a)
	}
	function Tn(t, e, n, r) {
		return String(t) + String(e) + String(n) + String(r)
	}
	function Sn(t, e, n, r, a, i, o, s) {
		var c = this;
		c.id = t, c.time = O(), c.msg = e, c.lineno = r, c.colno = a, c.filename = n, c.count = 1, c.stack = i && i.stack || "", c.module = o, c.trigger = s || yl, c.error = i, c.fix();
		var u = Tn(e, r, a, o),
			f = xl[u];
		c.ep = f ? 0 : 1, xl[u] = !0, c.fep = 0, c.trace = {}, this.recordFileName()
	}
	function An(e) {
		var n = function(t) {
			var e = [];
			return r(t, function(t) {
				e.push(t.toObject())
			}), e
		}(_l.c);
		if (!n || !n.length) return null;
		var a = {
			fu: ml ? ml : ml++,
			os: parseInt((O() - (Xu.pfStart || t)) / 1e3)
		};
		Vu.ulabel && (a.ulabel = Vu.ulabel), ue.buildImmediateAction(is, null, null, {
			actionOptions: x(a, {
				items: n
			})
		}), _l.reset()
	}
	function wn(t, e, n, a, i, o, s) {
		if (e || !vf.ignoreNoFilePropError) {
			var c = !1;
			if (r(vf.domains, function(t) {
				return c = t.test(e), c ? !1 : void 0
			}), !c) {
				var u = i && i.moduleId,
					f = En(e, t, n, a, u),
					l = _l.get(f);
				l ? l.increase() : (l = new Sn(f, t, e, n, a, i, u, o), _l.add(f, l), Af.errs && Af.errs.push(l));
				var d = l.initTraceInstance();
				l.triggerActionHook(d);
				try {
					d.scope.setContext(s)
				} catch (p) {}
				l.trace[d.id] = {
					time: d.time,
					scope: d.scope
				}
			}
		}
	}
	function Cn() {
		var t = e.onerror;
		e.onerror = function(e, n, r, a, i) {
			return wn(e, n, r, a, i), no(t) ? t.apply(this, arguments) : void 0
		}, e.onerror._ty = !0
	}
	function On() {
		var t = e.onerror;
		t && t._ty || Cn()
	}
	function kn(t, e) {
		if (t) {
			var n = t.message || "",
				a = t.stack,
				i = "",
				o = 0,
				s = 0;
			if (a) {
				var c, u = {}, f = a.split(/\n/);
				r(f, function(t, e) {
					var n = xn(t);
					if (!n) return !0;
					var r = n.resolveLevel;
					if (r === Cu) {
						if (n.filename && n.lineno > 0 && n.colno > 0) return c = n, !1
					} else u[r] || (u[r] = n)
				}), c || (c = u[wu] || u[Au]), c && (i = c.filename, o = c.lineno, s = c.colno)
			}
			wn(n, i, o, s, {
				stack: a
			}, gl, e)
		}
	}
	function Nn() {
		var t = _o();
		return t ? Cn() : go(e, Eo, function(t) {
			var n, r, a, i, o;
			(t instanceof e.Event || e.ErrorEvent && t instanceof e.ErrorEvent) && (n = t.message || t.error && (t.error.message || t.error.constructor.name) || "", r = t.lineno || 0, a = t.colno || 0, i = t.filename || t.error && t.error.filename || t.target && t.target.baseURI || "", o = t.error), wn(n, i, r, a, o)
		}), hl.on([To, So, Ao, wo], function(t) {
			An()
		}).on(To, function() {
			t && bf(On)
		}), setInterval(An, vl, !0)
	}
	function Pn(t) {
		return no(t) ? t.apply(this) : t
	}
	function In(t) {
		if (t && ro(t)) {
			var e = t.name,
				n = t.msg,
				r = t.status,
				a = t.context,
				i = Pn(e),
				o = Pn(n),
				s = Pn(r),
				c = Pn(a),
				u = {
					type: Tu,
					name: i,
					time: O()
				};
			u.name && (o && (u.msg = o), s && (u.status = s), c && ro(c) && (u.scope = {
				contexts: c
			}), ue.buildImmediateAction(Tu, null, u))
		}
	}
	function Rn(t) {
		t = t || {}, this._capacity = t.capacity || 10, this._cache = {}, this._cacheKeys = [], this._size = 0
	}
	function Dn(t, e, n) {
		if (t && n && no(n)) {
			var r = t[e];
			if (!r || !r._wrapped) {
				var a = n(r, e);
				return a && (a._wrapped = !0), t[e] = a, a
			}
		}
	}
	function Ln(t, n) {
		return function(r) {
			if (e[Vo].hook && e[Vo].hook.eventCb && Yn(r)) {
				var a = {
					originalCallback: t,
					eventHandlerType: n
				};
				return e[Vo].hook.eventCb.call(this, arguments, a)
			}
			return t.apply(this, arguments)
		}
	}
	function jn(t, e, n) {
		return n === Tl ? Ln(t, e) : (t.handleEvent = Ln(t.handleEvent, e), t)
	}
	function Hn(t) {
		return no(t)
	}
	function qn(t) {
		return ro(t) && no(t.handleEvent)
	}
	function Mn(t) {
		var e;
		return Hn(t) ? e = Tl : qn(t) && (e = Sl), {
			isValid: t && e,
			listenerType: e
		}
	}
	function Bn(t) {
		return function() {
			var e = arguments[0],
				n = arguments[1],
				r = arguments[2],
				a = !0;
			r && ro(r) && r[Js] && (a = !1);
			var i = Mn(n),
				o = i.isValid,
				s = i.listenerType;
			if (a && El.indexOf(e) > -1 && o) {
				var c;
				if (n[Sc] && n[Sc][this]) c = n[Sc][this];
				else {
					var u = jn(n, $s, s);
					s === Tl && (n[Sc] || (n[Sc] = {}, n[Sc][Ac] = 0), n[Sc][this] = {
						listener: u,
						options: arguments[2]
					}, n[Sc][Ac]++, c = n[Sc][this])
				}
				c && (c.listener && (arguments[1] = c.listener), c.options && (arguments[2] = c.options))
			}
			return t && t.apply(this, arguments)
		}
	}
	function Un(t) {
		return function(e, n) {
			var r;
			try {
				r = t && t.apply(this, arguments)
			} finally {
				try {
					if (n && El.indexOf(e) > -1) {
						var a = n[Sc];
						a && a[this] && a[this].listener && (null != a[this].options ? this.removeEventListener(e, a[this].listener, a[this].options) : this.removeEventListener(e, a[this].listener), a[this] = null, a[Ac]--, a[Ac] <= 0 && (n[Sc] = null, delete n[Sc]))
					}
				} catch (i) {}
			}
			return r
		}
	}
	function Fn() {
		try {
			e.EventTarget && (Dn(e.EventTarget.prototype, "addEventListener", function(t) {
				return Bn(t)
			}), Dn(e.EventTarget.prototype, "removeEventListener", function(t) {
				return Un(t)
			}))
		} catch (t) {}
	}
	function Gn() {
		try {
			if (!Object.getOwnPropertyDescriptor || !Object.defineProperty) return;
			r(El, function(t) {
				var n = "on" + t,
					r = Object.getOwnPropertyDescriptor(e.HTMLElement.prototype, n);
				if (!r) return !0;
				var a = r.get,
					i = r.set;
				return a && i ? void Object.defineProperty(e.HTMLElement.prototype, n, {
					get: function() {
						return a.apply(this, arguments)
					},
					set: function() {
						var t = arguments[0];
						t && (arguments[0] = jn(t, Qs, Tl)), i && i.apply(this, arguments)
					},
					configurable: !0,
					enumerable: !0
				}) : !0
			})
		} catch (t) {}
	}
	function Yn(t) {
		return t && t.target instanceof e.HTMLElement && t.currentTarget instanceof e.HTMLElement
	}
	function zn(t) {
		return !!t.match(zn.regex)
	}
	function Jn(t) {
		return t && t.substr(0, 256) || ""
	}
	function Kn(t) {
		try {
			if (!t) return "";
			for (var e = [], n = t.parentNode, r = function() {
				var r = t.tagName,
					a = void 0;
				a = n.children;
				var i = void 0;
				i = a ? 1 === b(a, function(t) {
					return t.tagName === r
				}).length ? r : "".concat(r, ":nth-child(").concat(1 + T(a, t), ")") : r;
				var o = t.id ? "#".concat(t.id) : "",
					s = t.className;
				to(s) && (s = yn(s));
				var c = "";
				if (s) {
					var u = s.split(" ");
					u && (c = b(u, function(t) {
						return yn(t)
					}).map(function(t) {
						return ".".concat(t)
					}).join(""))
				}
				e.unshift("".concat(i).concat(o).concat(c)), t = n, n = t.parentNode
			}; n;) r();
			return "".concat(e.join(" > ")).toLowerCase()
		} catch (a) {}
	}
	function Wn(t) {
		return null == t.isTrusted && null == t.pointerType ? !1 : !t.isTrusted || null != t.pointerType && !t.pointerType
	}
	function Vn(t, e, n) {
		var r = t.target,
			a = r.nodeName,
			i = r.id,
			o = r.className,
			s = r.title,
			c = r.value,
			u = r.innerText,
			f = a + i,
			l = Wn(t),
			d = {
				type: Zo,
				id: i,
				nodeName: a,
				className: o,
				title: s,
				value: c,
				text: a === nc ? "" : Jn(u),
				path: Kn(t.target),
				trigger: l ? Hc : jc,
				range: qc
			}, p = t[Ks];
		if (p || (p = bo(), t[Ks] = p), d.eventId = p, l) {
			var h = t.timeStamp && O();
			Ol && Math.abs(h - Ol.timestamp) <= vf.script_event_associate_threshold && (d.refId = Ol.eventId)
		} else Ol = {
			timestamp: t.timeStamp && O(),
			eventId: d.eventId
		};
		if (tc === a) {
			var v = t.target.getAttribute("src");
			v && !zn(v) && (d.src = v)
		}
		if (ec === a) {
			var m = t.target.getAttribute("href");
			m && (d.href = m)
		}
		return d.eventHandlerType = e, new ue(x({
			name: f,
			type: Zo,
			subType: t.type || Ws,
			data: d
		}, n))
	}
	function Xn(t, e) {
		Qu.context = Vn(t, e)
	}
	function $n() {
		var t = Qu.context;
		t && t.canEnd() && t.end(), Qu.context = null
	}
	function Qn(t, e) {
		var n = e.originalCallback,
			r = e.eventHandlerType,
			a = t[0],
			i = !(a && a.target && Al.indexOf(a.type) > -1);
		if (!i) try {
			Xn.call(this, a, r)
		} catch (o) {}
		var s;
		try {
			s = n.apply(this, t)
		} finally {
			if (!i) try {
				Qu.context && !Qu.context.canEnd({
					ignoreFields: [es]
				}) && (a[zs] = !0), $n.apply(this)
			} catch (o) {}
		}
		return s
	}
	function Zn() {
		r(Al, function(t) {
			document.addEventListener(t, function(t) {
				wl.length >= Bs && wl.shift(), wl.push(t)
			}, _defineProperty({
				capture: !0
			}, Js, !0))
		})
	}
	function tr(t) {
		try {
			return 13 === (t + "").split(".")[0].length
		} catch (e) {}
		return !1
	}
	function er(n) {
		var r = e.performance && e.performance.timing ? e.performance.timing.navigationStart : t,
			a = n.timeStamp;
		return a = a ? tr(a) ? a : Math.round(n.timeStamp + r) : O()
	}
	function nr(t) {
		var e = b(wl, function(t) {
			return !t[zs]
		}),
			n = e[e.length - 1];
		if (n) {
			var r = er(n);
			if (Math.abs(r - t) < vf.inline_event_associate_threshold) {
				var a;
				return n[Ks] && (a = Cl.get(n[Ks])), a || (a = Vn(n, Zs, {
					s: r
				}), n[Ks] && Cl.put(n[Ks], a)), a
			}
		}
	}
	function rr(t) {
		var e = [];
		try {
			e = b(wl, function(e) {
				return !e[zs] && e.timeStamp === t.timeStamp && t.target.nodeName === e.target.nodeName
			})
		} catch (n) {}
		if (e.length > 0) {
			var r = e[0];
			return Vn(r, Zs, {
				s: er(r)
			})
		}
	}
	function ar() {
		e[Vo].hook && (e[Vo].hook.eventCb = Qn), !e[Vo].listenerHooked && e.HTMLElement && (Fn(), Gn()), vf.hook_inline_event && Zn()
	}
	function ir(t, e) {
		this.flags = 0, no(t.create) && (this.create = t.create, this.flags |= Nl), no(t.before) && (this.before = t.before, this.flags |= Pl), no(t.after) && (this.after = t.after, this.flags |= Il), no(t.error) && (this.error = t.error, this.flags |= Rl), this.data = e
	}
	function or(t, e) {
		if (!Ll) {
			if (!ro(t) || !t) throw new TypeError("callbacks arguments must be an object");
			return Ll = new ir(t, e)
		}
	}
	function sr(t, e) {
		var n = e || Ll.data;
		if (!n && 0 !== (Ll.flags & Nl)) {
			var r = Ll.create(Ll.data);
			void 0 !== r && (n = r)
		}
		return function a() {
			0 !== (Ll.flags & Pl) && Ll.before(this, n);
			var e = a;
			e._ && (e._ = 1);
			var r;
			if (vf.exposeOriginError) try {
				r = t.apply(this, arguments)
			} finally {
				0 !== (Ll.flags & Il) && Ll.after(this, n)
			} else {
				try {
					r = t.apply(this, arguments)
				} catch (i) {
					throw 0 !== (Ll.flags & Rl) && Ll.error(n, i), i
				}
				0 !== (Ll.flags & Il) && Ll.after(this, n)
			}
			return r
		}
	}
	function cr(t) {
		return function() {
			var e;
			try {
				e = t.apply(this, arguments)
			} finally {
				Qu.context = null
			}
			return e
		}
	}
	function ur(t, e) {
		return !Ll || Ll.flags <= 0 ? t : sr(t, e)
	}
	function fr(t, e) {
		return cr(ur(t, e))
	}
	function lr() {
		this.id = null, this.active = null, this._set = []
	}
	function dr() {
		var t = new lr;
		return t.id = or({
			create: function() {
				return t.active
			},
			before: function(e, n) {
				n && t.enter(n)
			},
			after: function(e, n) {
				n && t.exit(n)
			},
			error: function(e, n) {
				if (e) {
					try {
						var r = "moduleId";
						n[r] = e[r]
					} catch (a) {}
					t.exit(e)
				}
			}
		}), t
	}
	function pr() {
		return Hl || (jl = dr(), Hl = !0), jl
	}
	function hr(t) {
		var e = t,
			n = t.xhrs;
		e.hasAjax = n && n.length > 0, delete e.xhrs;
		var r = {
			ss: 1
		};
		t.type === yc && (r.rs = 1), ue.buildImmediateAction(Zo, Xs, {
			type: Zo,
			items: n,
			spe: e
		}, {
			sendOptions: {
				query: r
			}
		})
	}
	function vr(t) {
		if (Fl[t.key]) {
			var e = Fl[t.key];
			if (delete Fl[t.key], e.speBinded) {
				var n = e.setSpe(t);
				n || (!e.isMeaningfulAction() && e.isNoRemain() ? hr(t) : I(function() {
					e.sent || hr(t)
				}, Nc))
			}
		} else hr(t)
	}
	function mr(t) {
		kl && console.warn(t || "Event key required!")
	}
	function gr(t) {
		t = t || {}, this.key = t.key, this.type = t.type || gc, this.timeout = t.timeout || vf.user_action_timeout, this.status = Ml, this.remain = 0, this.xhrs = [], this.s = O(), this.e = null, this.called = this.sent = this.stored = !1, t.debugInfo && (this.debugInfo = t.debugInfo), this.duration = t.duration || 0, this.scope = new D({
			contexts: t.context
		})
	}
	function yr(t) {
		var e = null;
		e = Qu.context ? ue.getRootContext(Qu.context, function(t) {
			return t.type === Zo && t.subType !== Xs
		}) : nr(t.s), null != e && (Fl[t.key] = e, e.speBinded = !0)
	}
	function _r(t) {
		t = t || {};
		var e = t.key;
		if (!e) return new mr;
		if (Ul[e]) return new mr("event " + e + " is executing");
		Ul[e] = !0;
		var n = ql.createContext();
		ql.enter(n);
		var r = new gr(t);
		return r._end = function() {
			var t = this;
			t.sent || t.stored || 0 !== t.remain || !t.called ? t.stored && this.refreshEventAndStore(n) : t.finish().send(n)
		}, r.end = function(t) {
			t = t || {};
			var e = this;
			return e.called ? void(kl && console.warn("Event " + this.key + "has ended or failed!")) : (e.called = !0, ql.exit(n), e.status = null != t.status ? t.status : 1, t.context && ro(t.context) && e.scope.setContext(t.context), void(t.storeEvent || e._end()))
		}, r.finish = function() {
			var t = this;
			return t.e = O(), t.i && clearTimeout(t.i), delete Ul[t.key], t
		}, r.fail = function() {
			this.end({
				status: Bl
			})
		}, r.store = function() {
			this.end({
				storeEvent: !0
			}), this.refreshEventAndStore(n), this.stored = !0
		}, r.type === yc && yr(r), ql.set("event", r), r
	}
	function xr(t) {
		if (e.TINGYUN && e.TINGYUN.inited) {
			var n = kf(pc),
				r = bt(n);
			if (r && r.start && (t = t || {}, !t.key || r.key === t.key)) {
				var a = t.timeout;
				if (a || (a = hc), r.duration = O() - r.start, r.duration > a) return void Pf(pc);
				var i = e.performance && e.performance.timing;
				if (i && i.navigationStart && (i.loadEventEnd || i.loadEventStart) && i.navigationStart - r.start >= 0) {
					var o = {
						method: "GET",
						url: vf.ref,
						status: 200,
						type: ts,
						subType: rs,
						startSpeOffset: i.navigationStart - r.start,
						start: i.navigationStart,
						__spe: 1,
						du: (i.loadEventEnd || i.loadEventStart) - i.navigationStart
					};
					r.xhrs || (r.xhrs = []), r.xhrs.push(o)
				}
				var s = Ml;
				t.status && (s = t.status === xc ? Ml : 0), r.status = s, Pf(pc), vr(r)
			}
		}
	}
	function br(t, e) {
		e.status && e.status === bc ? t.fail() : t.end()
	}
	function Er(t, n) {
		if (!e.TINGYUN || !e.TINGYUN.inited) return new mr("Agent is not inited!");
		t = x({}, {
			type: mc
		}, n ? {
			debugInfo: {
				immediate: !0
			}
		} : {}, t || {});
		var r = _r(t);
		return n ? br(r, t) : t.autoEnd && I(function() {
			br(r, t)
		}, t.endDelay || _c), r
	}
	function Tr(t) {
		return Fl[t]
	}
	function Sr(t, e) {
		if (Fl[t]) {
			var n = Fl[t];
			n.id !== e.id && e.type !== rs && (e.speBinded = !0, Fl[t] = e)
		}
	}
	function Ar(t, n) {
		e.TINGYUN && e.TINGYUN.inited && (n && ro(n) || (n = {}), t && t.beforeEach && t.afterEach && (vf.routerEnable = !1, t.afterEach(function(t) {
			var r = t.fullPath;
			if (r = r ? e.location.origin + r : t.path) {
				var a = {
					key: r,
					type: yc,
					autoEnd: !0,
					endDelay: kc,
					debugInfo: {
						api: Lc
					}
				};
				x(a, n), Er(a)
			}
		})))
	}
	function wr(t, e) {
		if (t) {
			var n = t.split("_"),
				r = n[0],
				a = n[1];
			"ty" === r && a && R(a, {
				timestamp: O(),
				data: e
			})
		}
	}
	function Cr() {
		return {
			get: function(t, e) {
				null == e && (e = C);
				var n = bt(kf(Ru));
				n && n[Du] ? e(n[Du][t]) : e()
			},
			set: function(t, e) {
				var n = bt(kf(Ru));
				n || (n = {}), n[Du] || (n[Du] = {}), n[Du][t] = e, Nf(Ru, Zi(n))
			}
		}
	}
	function Or() {
		return {
			get: function(t, e) {
				e && e()
			},
			set: C
		}
	}
	function kr(t) {
		return vf.configLoad ? t && t.config ? O() - (t.lastUpdate || 0) > 6e4 * vf.configLoadInterval : !0 : !1
	}
	function Nr(t) {
		if (gf.initiator !== Nu && kr(t)) {
			var e = {
				token: vf.token,
				_r: O()
			}, n = "".concat(Zt()).concat(vf.configLoadUri, "?").concat(Pt(e));
			ht({
				url: n,
				method: qu,
				timeout: vf.configLoadTimeout,
				callback: function(t) {
					var e = bt(t);
					if (e) {
						var n = e.code,
							r = e.data;
						200 === n && r && Wl(vf.token, {
							token: vf.token,
							lastUpdate: O(),
							config: r
						})
					}
				}
			})
		}
	}
	function Pr() {
		if (Object.defineProperty) {
			var t = e[Po];
			t && Object.defineProperty(e, Po, {
				get: function() {
					return Vl++ > 0 && e.console && console.warn("window.%s is deprecated, use window.%s instead.", Po, Io), t
				}
			})
		}
	}
	function Ir(t) {
		var e = t;
		return Xl && ($l.setAttribute("href", e), e = $l.href), $l.setAttribute("href", e), {
			href: $l.href,
			protocol: $l.protocol ? $l.protocol.replace(/:$/, "") : "",
			host: $l.host,
			search: $l.search ? $l.search.replace(/^\?/, "") : "",
			hash: $l.hash ? $l.hash.replace(/^#/, "") : "",
			hostname: $l.hostname,
			port: $l.port,
			pathname: "/" === $l.pathname.charAt(0) ? $l.pathname : "/" + $l.pathname
		}
	}
	function Rr(t) {
		var e = !1;
		return vf.corsDomains && r(vf.corsDomains, function(n) {
			return t.indexOf(n) > -1 ? (e = !0, !1) : void 0
		}), e
	}
	function Dr(t) {
		if (!to(t)) return !1;
		if (vf.apmEnableAllCorsDomains) return !0;
		var e = Ir(t);
		return e.protocol === Ql.protocol && e.host === Ql.host || Rr(e.host)
	}
	function Lr() {
		try {
			return bo().substring(0, 16)
		} catch (t) {}
	}
	function jr(t) {
		var e = !1;
		try {
			var n = Dr(t.url);
			if (t.sameOrigin = n, vf.x_server_switch && n) {
				var a = Lr(),
					i = "c=B|" + vf.key;
				if (a && (i += ";x=" + a), t.addHeader(Jo, i), e = !0, t.xTingyunSent = !0, vf.apmHeaders) {
					var o, s = bo().replace(/-/g, "");
					r(vf.apmHeaders, function(n) {
						if (n) {
							var r = t.getHeader(n);
							null == r && (t.addHeader(n, s), e = !0, r = s), o || (o = {}), o[n] = r
						}
					}), t.apms = o
				}
			}
		} catch (c) {}
		return e
	}
	function Hr(t, e) {
		if (!t.context) {
			var n = Qu.context;
			!t.shouldAddToEvent && ln(n) && (n = null), t.context = new ue({
				parent: n,
				name: "".concat(t.url, "-").concat(t.id),
				type: ts,
				subType: e || hu
			})
		}
	}
	function qr(t, e) {
		if (vf.x_server_switch && t.sameOrigin) {
			var n = t.context.data,
				r = t.xTingyunSent ? bt(e(Ko)) : null;
			if (r) {
				if (n.hasServerHeader = !0, n.s_id = r.id, n.s_tname = r.tname, n.s_tid = r.tid, n.s_rid = r.rid, n.s_duration = r.duration, "user" in r) {
					var a = r.user,
						i = a;
					if (null != a && 0 === a.indexOf(Wo)) {
						var o = a.substring(Wo.length);
						try {
							i = fl.decode(o)
						} catch (s) {}
					}
					n.s_user = i, Kt(i)
				}
				"bid" in r && (n.s_bid = _e(r.bid)), "ber" in r && (n.s_ber = r.ber), "isError" in r && (n.s_isError = r.isError)
			} else n.hasServerHeader = !1;
			if (t.apms && (n.apms = t.apms), vf.serverTiming) try {
				var c = e(Ju);
				c && (n.st = c)
			} catch (s) {}
		}
	}
	function Mr(t) {
		var e = t.context.data;
		t.key && (e.__spe = 1)
	}
	function Br(t, e) {
		Qu.context = t.context, Qu.globalAsyncStore = t, Qu.globalAjaxContext = e
	}
	function Ur(t) {
		if (t.context) {
			var e = !1;
			return t.context.setData({
				state: ys
			}), t.context.canEnd() && (t.context.end(), e = !0), t.context.data && t.context.state === _s && vf.upload_timeout_ajax && (t.context.data.brsOnly = !0, ue.buildImmediateAction(ts, "", t.context.data, {
				actionOptions: {
					state: _s
				}
			})), Qu.globalAsyncStore = null, Qu.globalAjaxContext = null, e
		}
	}
	function Fr(t) {
		if (!t || !t.context) return {};
		var e = t.context.data,
			n = {
				method: e.method,
				url: e.url,
				start: e.start,
				end: e.end,
				du: e.du,
				status: e.status
			};
		return t.context.subType === hu ? x(n, {
			err: e.err,
			rec: e.rec,
			send: e.send,
			requestHeader: t.headerRecord
		}) : x(n, {
			requestHeader: t.fetchOptions.headers
		}), n
	}
	function Gr(t) {
		if (t.shouldAddToEvent && null == t.context.parent) {
			var e;
			if (Z() && (e = nr(t.start)), !e && Qu.recordingPageLoadEvent && Qu.pageLoadEvent && (e = Qu.pageLoadEvent, Qu.recordingCpActions && t.context.setData({
				crossPage: !0
			})), !e) {
				var n = ql.get("event");
				n && n.type == yc && n.key === t.key && (e = Tr(n.key))
			}
			if (e) {
				t.context.parent = e, t.context.unregisterTimeout(), sn(t, ts, !0);
				var r = ql.get("event");
				r && r.type == yc && r.key === t.key && Sr(r.key, e)
			}
		}
	}
	function Yr(t) {
		var e = ql.get("event");
		if (e && e.key) {
			if (e.type === yc) {
				var n = Tr(e.key),
					r = ue.getRootContext(t.context, function(t) {
						return t.type === Zo && t.subType !== Xs
					});
				if (n && r && n.id != r.id) return
			}
			t.key = e.key, e.remain++
		}
	}
	function zr(t) {
		var e = !0;
		return r(vf.ajaxBlacklist, function(n) {
			return n && t.indexOf(n) > -1 ? (e = !1, !1) : void 0
		}), e
	}
	function Jr(t, e) {
		t[Po] = e.id, rd[e.id] = e
	}
	function Kr(t) {
		return rd[t[Po]]
	}
	function Wr(t) {
		try {
			rd[t[Po]] = null, delete rd[t[Po]]
		} catch (e) {}
	}
	function Vr(t) {
		return t ? t[Ro] ? !1 : !0 : !1
	}
	function Xr(t) {
		return {
			addHeader: function(e, n) {
				try {
					t.setRequestHeader(e, n)
				} catch (r) {}
			},
			getHeader: function(t) {
				return this.headerRecord[t]
			}
		}
	}
	function $r(t) {
		return function e(n, r) {
			var a = this,
				i = e;
			if (i._ && (i._ = 1), !zr(r) && a && (a[Ro] = !0), Vr(a)) {
				var o = {};
				o.method = n, o.url = r, o.id = Zl.uniqueId++, o.jserror = !1, o.headerRecord = {}, o.scope = new D, o.shouldAddToEvent = cn(r), x(o, Xr(a)), Hr(o), Yr(o), o.context.setData({
					type: ts,
					subType: hu,
					id: o.id,
					cid: o.context.id,
					method: o.method,
					url: o.url,
					state: o.state,
					jserror: o.jserror
				}), sn(o, ts), o.toJSON = function() {}, Jr(a, o)
			}
			try {
				return t.apply(a, arguments)
			} catch (s) {}
			return Z() ? void 0 : g(t, [a, arguments])
		}
	}
	function Qr(t) {
		return function e(n, r) {
			var a = this,
				i = e;
			i._ && (i._ = 1);
			var o;
			if (Vr(a) && (o = Kr(a))) {
				var s = pa(n, vf.optCustomParamRules);
				pf.isGather && (o.wReqHeaderParam || (o.wReqHeaderParam = {}), o.wReqHeaderParam[n] = r), o && s && (o.reqHeaderParam || (o.reqHeaderParam = {}), o.reqHeaderParam[n] = r), o.headerRecord || (o.headerRecord = {}), o.headerRecord[n] = r
			}
			try {
				return t.apply(a, arguments)
			} catch (c) {}
			return Z() ? void 0 : g(t, [a, arguments])
		}
	}
	function Zr(t) {
		return function e(n) {
			var r = this,
				a = e;
			a._ && (a._ = 1);
			var i;
			Vr(r) && (i = Kr(r)) && (i.start = O(), i.reqSize = N(n), i.requestData = n, i.context.setData({
				start: i.start
			}), Gr(i), aa(r, i), jr(i), z({
				type: Wc,
				name: tu,
				hookPostion: au,
				args: {
					target: r
				},
				scope: i.scope
			}));
			try {
				return t.apply(r, arguments)
			} catch (o) {}
			return Z() ? void 0 : g(t, [r, arguments])
		}
	}
	function ta(t, e) {
		r(td, function(n, r) {
			var a = "on" + r;
			t[a] ? Dn(t, a, function(t) {
				return function() {
					return na(e, n, r), no(t) ? t.apply(this, arguments) : void 0
				}
			}) : t[a] = function() {
				na(e, n, r)
			}
		})
	}
	function ea(t, e) {
		r(td, function(n, r) {
			go(t, r, function() {
				na(e, n, r), t && t[oc] === ed && ia(t, e)
			})
		})
	}
	function na(t, e, n) {
		t && (t.errorCode = e, t.errorEvent = n)
	}
	function ra(t, e) {
		if (Z()) {
			var n = t[ed];
			n && !t[ic] && (Dn(t, ed, e), t[ic] = !0, t[oc] = ed)
		}
		var r = t[nd];
		!r || t[ic] || r[ic] || (Dn(t, nd, e), t[ic] = !0, t[oc] = nd)
	}
	function aa(t, e) {
		function n(n) {
			return fr(function a() {
				var r = a;
				r._ && (r._ = 1), ia(t, e);
				var i;
				if (no(n)) {
					var o;
					if (e && 4 == t.readyState && (o = O(), Br(e, t)), vf.exposeOriginError) try {
						i = n.apply(this, arguments)
					} finally {
						e && 4 == t.readyState && (e.cbTime = O() - o)
					} else try {
						i = n.apply(this, arguments)
					} catch (s) {
						throw e && (e.jserror = !0), s
					} finally {
						e && 4 == t.readyState && (e.cbTime = O() - o)
					}
				}
				return i
			}, r)
		}
		var r = ql.getContext();
		ra(t, n);
		try {
			Z() ? ea(t, e) : ta(t, e)
		} catch (a) {}
		if (!t[ic]) {
			var i = fr(function o() {
				var n = o;
				n._ && (n._ = 1), t[ic] || 4 === t.readyState && ia(t, e)
			}, r);
			try {
				Z() ? go(t, Co, i) : (t[nd] = i, t[nd][ic] = !0)
			} catch (a) {
				return
			}
		}
		bf(function() {
			ra(t, n)
		})
	}
	function ia(t, e) {
		if (e && (e.end = O(), e.readyState = t.readyState, 4 == t.readyState)) {
			if (e.callbackEnd) return;
			e.callbackEnd = !0, Z() && delete t[ic], Br(e), e.status = t.status, e.text = oa(t), e.resSize = N(e.text);
			var n = fa(e, t),
				r = Fr(e);
			z({
				type: Wc,
				name: tu,
				hookPostion: iu,
				args: {
					target: t,
					actionData: r
				},
				scope: e.scope
			}), r.st && (n.st = r.st), e.shouldAddToEvent && (Qu.recentFinishedAjaxContext = e.context), Af.xhrs && Af.xhrs.push(n);
			var a = ql.get("event");
			bf(function() {
				ua(e, n);
				var r = Ur(e);
				a && a.key == e.key && (a.xhrs.push(n), 0 === --a.remain && a._end()), r && Wr(t)
			})
		}
	}
	function oa(t) {
		var e = "";
		if ("" == t.responseType || "text" == t.responseType) e = t.responseText;
		else if (t.response) e = t.response;
		else try {
			e = t.responseText
		} catch (n) {}
		return e || ""
	}
	function sa(t) {
		return t.data && "event" === t.data.type ? {
			text: t.data.text,
			path: t.data.path,
			src: t.data.src,
			value: t.data.value,
			href: t.data.href,
			title: t.data.title,
			nodeName: t.data.nodeName,
			items: t.items
		} : t.parent && t.parent.data && "event" === t.parent.data.type ? {
			text: t.parent.data.text,
			path: t.parent.data.path,
			src: t.parent.data.src,
			value: t.parent.data.value,
			href: t.parent.data.href,
			title: t.parent.data.title,
			nodeName: t.parent.data.nodeName,
			items: t.parent.items
		} : t.parent && t.parent.parent ? sa(t.parent) : {
			text: "",
			path: "",
			nodeName: "",
			items: []
		}
	}
	function ca(t) {
		return this.getResponseHeader(t)
	}
	function ua(t, e) {
		t && e && t.jserror && (e.jserror = t.jserror), t.errorCode && !e.err && (e.err = t.errorCode), t.cbTime && !e.cb && (e.cb = t.cbTime), q(e, t.scope)
	}
	function fa(t, n) {
		if (t && t.context && !t.composed) {
			var r = t.status;
			if (pf.isGather) {
				var a = sa(t.context);
				t.wCustom = {
					fromJS: "agent",
					key: vf.key,
					ajaxUrl: t.url,
					items: t.context.items,
					itemsTemp: a && a.items,
					id: t.id,
					url: vf.ref,
					text: a && a.text,
					href: a && a.href,
					title: a && a.title,
					value: a && a.value,
					src: a && a.src,
					xpath: a && a.path,
					nodeName: a && a.nodeName,
					method: t.method,
					urlParams: Ct(vf.ref),
					ajaxUrlParams: Ct(t.url),
					start: t.start,
					requestHeader: t.wReqHeaderParam,
					requestParams: t.requestData,
					responseHeader: n.getAllResponseHeaders() && n.getAllResponseHeaders().split("\n"),
					responseBody: n.response,
					children: []
				}, e.top && e.top.postMessage && e.top.postMessage(Zi(t.wCustom), "*"), delete t.wCustom, delete t.wReqHeaderParam
			}
			x(t.context.data, {
				end: t.end,
				du: r > 0 ? t.end - t.start : 0,
				cb: t.cbTime || 0,
				status: r,
				err: t.errorCode ? t.errorCode : 0,
				rec: t.resSize,
				send: t.reqSize
			});
			var i = t.context.data,
				o = {}, s = me(t.url),
				c = s.optCustomParams;
			o[Mo] = t.reqHeaderParam || {}, o[Bo] = be(va(t.requestData), vf.optCustomParamRules[Bo], !0), o[Uo] = ha(n, vf.optCustomParamRules, Uo);
			var u = bt(t.text);
			u && (o[Fo] = be(u, vf.optCustomParamRules[Fo], !0)), i.opt_custom_param = xe(la(o, c)), qr(t, y(ca, n)), Mr(t);
			var f = {};
			if (vf.collectAllParam[Uc] && s.operaAllParam && (f[Uc] = s.operaAllParam), vf.collectAllParam[Fc] && t.headerRecord && (f[Fc] = t.headerRecord), vf.collectAllParam[Gc] && t.requestData && (f[Gc] = t.requestData), vf.collectAllParam[Yc]) try {
				f[Yc] = ma(n.getAllResponseHeaders())
			} catch (l) {}
			return vf.collectAllParam[zc] && t.text && (f[zc] = t.text), ie(f) || (i.opera_all_param = f), t.composed = !0, i
		}
	}
	function la(t, e) {
		return r(e, function(e, n) {
			t[n] = x({}, t[n] || {}, e || {})
		}), t
	}
	function da(t, e) {
		if (t && t.getResponseHeader) try {
			return t.getResponseHeader(e)
		} catch (n) {}
	}
	function pa(t, e) {
		var n;
		return r(e[Mo], function(e) {
			return t === e ? (n = !0, !1) : void 0
		}), n
	}
	function ha(t, e, n) {
		var a = {};
		return r(e[n || Lo], function(e) {
			var n = da(t, e);
			null != n && Et(a, e, n)
		}), a
	}
	function va(t) {
		var e = bt(t);
		return e || (e = Ot(t)), e
	}
	function ma(t) {
		if (!t) return {};
		var e = t.split(/\r?\n/),
			n = {};
		return r(e, function(t) {
			if (!t) return !0;
			var e = t.indexOf(":");
			if (e > -1) {
				var r = xo(t.substring(0, e)),
					a = xo(t.substring(e + 1));
				r && (n[r] = a)
			}
		}), n
	}
	function ga() {
		var t = ff && ff.prototype;
		t ? (Dn(t, "open", $r), vf.hook_xhr_setrequestheader && Dn(t, "setRequestHeader", Qr), Dn(t, "send", Zr)) : ff && (e.XMLHttpRequest = function() {
			var t = new ff;
			return Dn(t, "open", $r), vf.hook_xhr_setrequestheader && Dn(t, "setRequestHeader", Qr), Dn(t, "send", Zr), t
		})
	}
	function ya(t) {
		t && !t.composed && (x(t.contextData, {
			end: t.end || O()
		}), t.composed = !0)
	}
	function _a() {
		Dn(window, "setTimeout", Ca), Dn(window, "clearTimeout", Oa)
	}
	function xa(t) {
		t.context || (t.context = new ue({
			name: "".concat(t.name, "-").concat(t.id),
			type: es,
			subType: t.name
		}))
	}
	function ba(t) {
		Qu.context = t.context, Qu.globalAsyncStore = t
	}
	function Ea(t) {
		t.context && (t.context.setData({
			state: ys
		}), t.context.canEnd() && t.context.end(), Qu.globalAsyncStore = null)
	}
	function Ta(t) {
		var e = 0,
			n = t.context;
		if (n) {
			var r = n.remain[ts],
				a = n.remain[ns];
			e += r.current + r.children + a.current + a.children
		}
		return e > 0
	}
	function Sa(t) {
		for (var e = 0; null != t && e < vf.set_timeout_max_depth;) e += t.type === es ? 1 : 0, t = t.parent;
		return e < vf.set_timeout_max_depth
	}
	function Aa(t) {
		return function() {
			return ur(t).apply(this, arguments)
		}
	}
	function wa(t, e, n, r) {
		var a = null,
			i = null,
			o = Qu.context,
			s = ue.getRootContext(Qu.context, function(t) {
				return t.type === rs
			});
		return s && (o = null), ro(r) && r[ac] || null == o ? i = Aa(t) : Sa(o) ? (a = {
			id: ad++,
			name: e,
			start: O(),
			delay: n,
			parentContext: o
		}, xa(a), a.contextData = {
			type: es,
			id: a.id,
			cid: a.context.id,
			name: a.name,
			start: a.start,
			delay: a.delay
		}, a.context && a.context.setData(a.contextData), a.parentContext && (a.pcid = a.parentContext.id, a.parentContext.updateRemain(1, es), a.parentContext.items.push(a.contextData)), i = fr(function() {
			var e;
			try {
				ba(a)
			} catch (n) {}
			try {
				t && (e = t.apply(this, arguments))
			} finally {
				try {
					Ta(a) ? (a.end = O(), ya(a), Ea(a)) : a && a.context.removeFromParent()
				} catch (n) {}
			}
			return e
		})) : i = Aa(t), {
			store: a,
			cb: i
		}
	}
	function Ca(t, e) {
		return function(n) {
			var r = so.call(arguments, 0),
				a = null;
			if (!arguments[2] && no(n)) {
				var i = wa(n, e, r[1], r[2]);
				i.cb && (r[0] = i.cb), a = i.store
			}
			var o = t.apply(this, r);
			return a && (id[o] = a), o
		}
	}
	function Oa(t) {
		return function(e) {
			try {
				var n = id[e];
				n && n.context && (n.context.removeFromParent(), id[e] = null)
			} catch (r) {}
			return t.apply(this, arguments)
		}
	}
	function ka(t, e) {
		for (var n = O(), r = e.length - 1; r >= 0; r--) {
			var a = e[r];
			a.type === Zo || a.end || (a.end = n), e[r - 1] && (e[r - 1].items = [a]);
			var i = void 0;
			i = a.start && a.end && a.end - a.start > vf.eventTimeout ? _s : a.type === Zo ? e[r + 1] && e[r + 1].state || ys : ys, a.state = i
		}
		t.data = e[0], t.end = n
	}
	function Na(t) {
		var e = Qu.cpParent;
		if (e) {
			Qu.recordingCpActions = !1;
			var n = e.action,
				r = e.data,
				a = e.commonActionInfo,
				i = e.requestInfo;
			if (n && r && 0 !== r.length) {
				var o = t.context;
				r[r.length - 1].items = [o.eventData.data], ka(n, r), n.data && (n.data.range = Mc);
				var s = x(a || {}, q({
					pageParam: $t(),
					cpOptCustomParam: Qu.opt_custom_param
				}, Qu.scope, "cpScope"));
				o.eventData = n, o.setSendOptions({
					commonActionInfoMessage: s,
					requestInfo: i,
					crossPage: !0
				})
			}
		}
	}
	function Pa(t) {
		if (t) {
			var e = t.action,
				n = t.data;
			e && n && 0 !== n.length && (ka(e, n), re(e))
		}
	}
	function Ia(t) {
		Nf(Us, Zi(t))
	}
	function Ra(t) {
		var e = od++,
			n = t.url || "",
			r = O(),
			a = new ue({
				parent: Qu.context,
				name: "".concat(n, "-").concat(e),
				type: as,
				subType: t.subType || Fs
			}),
			i = {
				type: as,
				subType: a.subType,
				id: e,
				cid: a.id,
				url: n,
				start: r
			};
		a && a.setData(i);
		var o;
		return a.parent && (a.parent.type === ts ? fa(Qu.globalAsyncStore, Qu.globalAjaxContext) : a.parent.type === es && ya(Qu.globalAsyncStore), o = a.collectCrossPageData(), sd = o, t.delayStorage || Ia(o), a.clear(), a = null), {
			storageData: o,
			context: a
		}
	}
	function Da(t) {
		return function() {
			var e = arguments[0],
				n = Ra({
					url: e,
					delayStorage: !0
				}),
				r = n.storageData,
				a = n.context;
			try {
				var i = t.apply(this, arguments);
				if (i) {
					if (!r && a) {
						var o = nr(a.data.start);
						o && (a.parent = o, r = a.collectCrossPageData(), sd = r, a.clear(), a = null)
					}
					Ia(r)
				}
				return i
			} catch (s) {}
			return Z() ? void 0 : g(t, [this, arguments])
		}
	}
	function La() {
		Dn(e, "open", Da)
	}
	function ja() {
		function t(t) {
			return {
				valid: ec === t.target.nodeName && !t.defaultPrevented && t.target.href,
				url: t.target.href,
				subType: Gs
			}
		}
		function e(t) {
			return {
				valid: nc === t.target.nodeName && !t.defaultPrevented && t.target.action,
				url: t.target.action,
				subType: Ys
			}
		}
		r([Ws, Vs], function(n) {
			uf.addEventListener(n, function(r) {
				if (r) {
					var a = n === Ws ? t(r) : e(r);
					if (a.valid) {
						var i = r.timeStamp ? rr(r) : nr(er(r));
						i && (Qu.context = i, Ra({
							subType: a.subType,
							url: a.url
						}), Qu.context = null)
					}
				}
			}, _defineProperty({}, Js, !0))
		})
	}
	function Ha() {
		Pa(sd), sd = null
	}
	function qa() {
		go(uf, Bc, function() {
			"hidden" === uf.visibilityState && Ha()
		}), go(e, wo, function() {
			Ha()
		})
	}
	function Ma() {
		La(), ja(), qa()
	}
	function Ba(t, e, n) {
		if (t && t[e]) try {
			Dn(t, e, n)
		} catch (r) {}
	}
	function Ua(t) {
		t.context.setData(x({
			pvid: t.pvid,
			end: t.end,
			url: t.url
		}, t.iframePageMetric || {}))
	}
	function Fa(t) {
		if (!t.context) {
			var e = Qu.context;
			!t.shouldAddToEvent && ln(e) && (e = null), t.context = new ue({
				parent: e,
				name: "".concat(t.src, "-").concat(t.id),
				type: ns
			})
		}
	}
	function Ga(t) {
		if (!t) return !0;
		var e = !1,
			n = t.substring(0, 100);
		try {
			r(ld, function(t) {
				return n.indexOf(t) > -1 ? (e = !0, !1) : void 0
			})
		} catch (a) {
			e = !0
		}
		return e
	}
	function Ya(t, e, n) {
		function r() {
			try {
				if (a.end = O(), a.sameOrigin && this && this.contentDocument && this.contentWindow) {
					a.sameOrigin = !0, a.url = this.contentDocument.URL;
					var e, n = this.contentWindow[Io],
						i = !1;
					n && (a.pvid = n.pvid || "", no(n.checkHookSupported) && n.checkHookSupported(Kc, Zc) && (i = !0, n.addLifeCycleHook(Zc, function(t) {
						var n = t.iframeMetric;
						e = n, za(a, e)
					}))), i || (e = Ue(this.contentWindow), za(a, e))
				} else a.sameOrigin = !1;
				Ua(a), Ja(a), t.removeEventListener("load", r)
			} catch (o) {}
		}
		if (!Ga(e) && t) {
			n || (n = t.src ? fd : ud);
			var a = {
				id: cd++,
				src: e,
				loadType: n,
				start: O(),
				sameOrigin: Dr(e),
				shouldAddToEvent: cn(e)
			};
			Fa(a), a.context && a.context.setData({
				type: ns,
				loadType: a.loadType,
				id: a.id,
				cid: a.context.id,
				src: a.src,
				start: a.start,
				sameOrigin: a.sameOrigin
			}), sn(a, ns);
			var i;
			null == a.context.parent && a.shouldAddToEvent && Z() && (a.context.parent = nr(a.start), i = a.context.parent), null == a.context.parent && a.shouldAddToEvent && Qu.recordingPageLoadEvent && Qu.pageLoadEvent && (a.context.parent = Qu.pageLoadEvent, i = a.context.parent, Qu.recordingCpActions && (a.context.crossPage = !0)), i && (sn(a, ns, !0), a.context.unregisterTimeout()), t.addEventListener("load", r)
		}
	}
	function za(t, e) {
		t.iframePageMetric = e, Ua(t), Ja(t)
	}
	function Ja(t) {
		t.context && (t.context.setData({
			state: ys
		}), t.context.canEnd() && t.context.end())
	}
	function Ka() {
		function t(t) {
			return function(e) {
				return "IFRAME" === e.nodeName && e.src && Ya(e, e.src, ud), t.apply(this, arguments)
			}
		}
		window.Node && (Ba(window.Node.prototype, "appendChild", t), Ba(window.Node.prototype, "insertBefore", t))
	}
	function Wa() {
		function t() {
			if (uf && uf.body && uf.body.contains && uf.body.contains(this)) {
				var t = arguments[0],
					e = this;
				Ya(e, t)
			}
			return r.apply(this, arguments)
		}
		if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
			var e = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src");
			if (e) {
				var n = e.get,
					r = e.set;
				n && r && Object.defineProperty(HTMLIFrameElement.prototype, "src", {
					get: function() {
						return n.apply(this, arguments)
					},
					set: t,
					enumerable: !0,
					configurable: !0
				})
			}
		}
	}
	function Va() {
		try {
			Ka(), Wa()
		} catch (t) {}
	}
	function Xa() {
		vf.hook_auto_event && ar(), vf.hook_timer && _a(), vf.hook_iframe && Va(), vf.hook_cross_page && Ma()
	}
	function $a(t) {
		var e = !0,
			n = !0;
		t.fetchOptions.headers || (e = !1, t.fetchOptions.headers = {});
		var r = t.fetchOptions.headers;
		io(r) ? x(t, dd.headers) : ro(r) ? x(t, dd.literal) : (n = !1, x(t, dd.notSupport)), t.hasOriginalHeaders = e, t.supportAddHeaders = n
	}
	function Qa(t) {
		return this.headers ? this.headers.get(t) : void 0
	}
	function Za(t, e) {
		if (t && t.context) {
			t.context.setData({
				end: t.end,
				du: t.status > 0 ? t.end - t.start : 0,
				status: t.status
			});
			var n = t.context.data;
			e || (n.err = td.error);
			var a = {}, i = me(t.url);
			i.optCustomParams[qo] && (a[qo] = i.optCustomParams[qo]), a[Mo] = ti(t), e && (a[Uo] = ei(e)), n.opt_custom_param = xe(a), qr(t, y(Qa, e || {})), Mr(t);
			var o = {};
			if (vf.collectAllParam[Uc] && i.operaAllParam && (o[Uc] = i.operaAllParam), vf.collectAllParam[Fc] && t.fetchOptions.headers && (o[Fc] = t.fetchOptions.headers), vf.collectAllParam[Yc] && e && e.headers && no(e.headers.entries)) {
				var s = {};
				r(e.headers, function(t, e) {
					s[e] = t
				}), o[Yc] = s
			}
			return ie(o) || (n.opera_all_param = o), n
		}
	}
	function ti(t) {
		var e = {};
		return r(vf.optCustomParamRules[Mo], function(n) {
			var r = t.getHeader(n);
			null != r && (e[n] = r)
		}), e
	}
	function ei(t) {
		var e = {};
		return r(vf.optCustomParamRules[Uo], function(n) {
			var r = t.headers.get(n);
			null != r && (e[n] = r)
		}), e
	}
	function ni(t) {
		if (!oo(t) && !ro(t)) return null;
		var e = {};
		return t.url && (e.url = t.url), t.method && (e.method = t.method), t.headers && (e.headers = t.headers), e
	}
	function ri(t) {
		var e = {};
		return to(t) ? e.url = t : x(e, ni(t)), e
	}
	function ai(t, e) {
		t && e && oi(t, null)
	}
	function ii(t) {
		return function e() {
			var n = e;
			n._ && (n._ = 1);
			var r = this,
				a = so.call(arguments, 0);
			return new Promise(function(e, n) {
				var i = {};
				if (a && (i = ri(a[0]), a[1])) {
					var o = a[1];
					x(i, ri(o))
				}
				var s, c = zr(i.url);
				if (c) {
					if (s = {
						id: Zl.uniqueId++,
						method: i.method || qu,
						url: i.url,
						start: O(),
						fetchOptions: i,
						shouldAddToEvent: cn(i.url),
						scope: new D
					}, $a(s), s.supportAddHeaders) {
						var u = jr(s);
						if (!s.hasOriginalHeaders && u) try {
							a[1] || (a[1] = {}), a[1].headers = s.fetchOptions.headers
						} catch (f) {
							u = !1
						}
						s.headerAdded = u
					}
					Hr(s, vu), Yr(s), s.context.setData({
						type: ts,
						subType: vu,
						id: s.id,
						cid: s.context.id,
						method: s.method,
						url: s.url,
						start: s.start
					}), sn(s, ts), Gr(s), z({
						type: Wc,
						name: tu,
						hookPostion: au,
						args: {},
						scope: s.scope
					})
				}
				var l;
				try {
					l = t.apply(r, a)
				} catch (f) {
					return ai(s, c), void n(f)
				}
				l.then(fr(function d(t) {
					var n = d;
					n._ && (n._ = 1), t && c && s && oi(s, t), e(t)
				}), fr(function(t) {
					ai(s, c), n(t)
				}))
			})
		}
	}
	function oi(t, e) {
		t.end = O(), t.status = e ? e.status : 0;
		var n = Za(t, e),
			r = Fr(t);
		z({
			type: Wc,
			name: tu,
			hookPostion: iu,
			args: {
				target: e || {},
				actionData: r
			},
			scope: t.scope
		}), r.st && (n.st = r.st), q(n, t.scope), Ur(t);
		var a = ql.get("event");
		a && a.key == t.key && (a.xhrs.push(n), 0 === --a.remain && a._end()), Af.xhrs && Af.xhrs.push(n)
	}
	function si() {
		e.fetch && e.Promise && Z() && Dn(e, "fetch", ii)
	}
	function ci(t) {
		var e = {};
		return r(vf.optCustomParamRules[Mo], function(n) {
			var r = t[n];
			null != r && (e[n] = r)
		}), e
	}
	function ui(t) {
		var e = {};
		return t && eo(t) && t.length > 0 && r(t, function(t) {
			var n = t;
			to(t) && (n = bt(t)), x(e, be(n, vf.optCustomParamRules[Bo], !0))
		}), e
	}
	function fi(t, e, n) {
		if (t && t.context && !t.composed) {
			t.composed = !0;
			var r = bt(e),
				a = {};
			a[Mo] = ci(n.headers || {}), a[Bo] = ui(n.requestData), t.context.setData({
				end: t.end,
				du: t.end - t.start,
				cb: t.cbTime,
				status: 200,
				err: r && null != r.error ? r.error : 0,
				opt_custom_param: xe(a)
			})
		}
	}
	function li(t) {
		return t.context.data
	}
	function di(t, e, n) {
		var r = e;
		return function(e) {
			t.end = O();
			var a, i = O();
			try {
				r && (a = r.apply(this, arguments))
			} finally {
				var o = O();
				t.cbTime = o - i
			}
			fi(t, e, n), z({
				type: Wc,
				name: tu,
				hookPostion: iu,
				args: {
					target: this,
					actionData: li(t)
				},
				scope: t.scope
			}), q(t.context.data, t.scope);
			var s = ql.get("event");
			return s && s.key == t.key && (s.xhrs.push(t.context.data), 0 === --s.remain && s._end()), Ur(t), a
		}
	}
	function pi(t) {
		return function() {
			var e = arguments[0],
				n = arguments[1];
			if ("rpc" === e && n && n.operationType) {
				var r = arguments[2],
					a = vf.mpaas_rpc_api + n.operationType,
					i = {
						id: Zl.uniqueId++,
						url: a,
						method: "",
						start: O(),
						shouldAddToEvent: cn(a),
						scope: new D
					};
				Hr(i, mu), Yr(i), i.context.setData({
					type: ts,
					subType: mu,
					id: i.id,
					cid: i.context.id,
					method: i.method,
					url: i.url,
					start: i.start
				}), sn(i, ts), Gr(i), z({
					type: Wc,
					name: tu,
					hookPostion: au,
					args: {},
					scope: i.scope
				}), arguments[2] = di(i, r, n)
			}
			try {
				return t.apply(self, arguments)
			} catch (o) {}
		}
	}
	function hi() {
		vf.mpaas_rpc && window.AlipayJSBridge && no(window.AlipayJSBridge.call) && Dn(window.AlipayJSBridge, "call", pi)
	}
	function vi(t, e) {
		for (var n = 0, r = 0, a = -1, i = 0; n < t.length;) if (r < e.length && (t[n] === e[r] || "?" === e[r])) n++, r++;
		else if (r < e.length && "*" == e[r]) a = r, i = n, r++;
		else {
			if (-1 == a) return !1;
			r = a + 1, i++, n = i
		}
		for (; r < e.length && "*" == e[r];) r++;
		return r == e.length
	}
	function mi(t, e) {
		return t && e ? e.indexOf("*") < 0 && e.indexOf("?") < 0 ? t === e : vi(t, e) : !1
	}
	function gi(t) {
		var e = t || new Date,
			n = e.getFullYear() + "-",
			r = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-",
			a = e.getDate() + " ";
		return n + r + a
	}
	function yi(n, r) {
		if (!r) try {
			r = e.performance.timing.navigationStart
		} catch (a) {}
		return r || (r = t), Math.round((r || 0) + (n || 0))
	}
	function _i(t, e) {
		if (t[e]) {
			for (var n = t[e].shift(); n && n.sent;) n = t[e].shift();
			return n && !n.sent && n.value ? n : void 0
		}
	}
	function xi(t, e, n) {
		if (n) {
			t[e] || (t[e] = []);
			var r = {
				sent: !1,
				value: n
			};
			return t[e].push(r), r
		}
	}
	function bi(t) {
		if (!t) return !1;
		if (t = Ei(t), !t) return !1;
		var e = !1;
		return r(vf.monitorResources, function(n) {
			return mi(t, n) ? (e = !0, !1) : void 0
		}), e
	}
	function Ei(t) {
		var e = t.indexOf("://");
		return 0 > e ? t : t = t.substring(e + 3)
	}
	function Ti(t) {
		if (!t) return {
			valid: !1
		};
		var e = t.initiatorType,
			n = t.name,
			r = T(pd, e) > -1,
			a = bi(n);
		return {
			url: n,
			valid: r && a
		}
	}
	function Si(t) {
		if (!t || !t.target) return {
			valid: !1
		};
		var e = t.target,
			n = e.src || e.href,
			r = bi(n);
		return {
			url: n,
			valid: r
		}
	}
	function Ai(t) {
		var e = t.url,
			n = t.error,
			r = t.res;
		if (e) {
			var a, i, o, s, c, u;
			r && !n ? (a = yi(r.startTime), o = Math.round(r.duration), i = a + o, s = 200, c = 0, u = r.transferSize || 0) : (a = i = O(), o = 0, s = 0, c = td.error, u = 0);
			var f = {
				type: ts,
				subType: gu,
				method: qu,
				url: e,
				start: a,
				end: i,
				du: o,
				status: s,
				err: c,
				rec: u
			};
			ue.buildImmediateAction(ts, gu, f)
		}
	}
	function wi() {
		new e.PerformanceObserver(function(t) {
			try {
				r(t.getEntries(), function(t) {
					var e = Ti(t),
						n = e.url,
						r = e.valid;
					if (r) {
						var a = _i(vd, n);
						if (a) Ai({
							url: n,
							res: t,
							error: a.value
						}), a.sent = !0;
						else {
							var i = xi(hd, n, t);
							I(function() {
								i.sent || (Ai({
									url: n,
									res: t,
									error: !1
								}), i.sent = !0)
							})
						}
					}
				})
			} catch (e) {}
		}).observe({
			type: "resource",
			buffered: !0
		})
	}
	function Ci() {
		go(uf, "error", function(t) {
			try {
				var e = Si(t),
					n = e.url,
					r = e.valid;
				if (!r) return;
				var a = _i(hd, n);
				if (a) Ai({
					url: n,
					res: a.value,
					error: !0
				}), a.sent = !0;
				else {
					var i = xi(vd, n, !0);
					I(function() {
						i.sent || (Ai({
							url: n,
							error: !0
						}), i.sent = !0)
					})
				}
			} catch (o) {}
		}, !0)
	}
	function Oi() {
		if (0 !== vf.monitorResources.length && e.PerformanceObserver && e.PerformanceObserver.supportedEntryTypes && !(T(e.PerformanceObserver.supportedEntryTypes, "resource") < 0)) try {
			wi(), Ci()
		} catch (t) {}
	}
	function ki() {
		ga(), si(), hi(), Z() && Oi()
	}
	function Ni() {
		if (Z()) {
			var t = 0;
			try {
				t = window.performance.timing.loadEventEnd
			} catch (e) {}
			return t > 0
		}
		return uf.readyState === Oo
	}
	function Pi(t, e) {
		if (Ii()) {
			var n = {
				rm: {},
				em: [],
				cpm: {}
			};
			e && (n.rm.res = e.res || []), t && (n.cpm = t, n.cpm.ul = vf.ref), nbsJsBridge.logJsResult(Zi(n))
		}
	}
	function Ii() {
		return "undefined" != typeof nbsJsBridge && nbsJsBridge.logJsResult
	}
	function Ri(e, n, a) {
		var i = {
			tr: !1,
			tt: _(uf.title),
			charset: uf.characterSet
		};
		Vu.resources && x(i, Vu.resources), Ee(function() {
			Jf.resource = a.resource.statistic, i.debug = Jf
		}), Te();
		var o = Af.errs;
		r(o, function(e, r) {
			var a = e.toObject();
			a.o = a.o - n && n.navigationStart || t, o[r] = a
		}), i.err = o;
		var s, c = "getEntriesByType";
		return e[c] ? s = e[c]("resource") : _t(E(md, [c])), s && (i.tr = !0, i.res = [], r(s, function(t) {
			function e(e) {
				var n = t[e];
				return n > 0 ? n : 0
			}
			var n = t.initiatorType,
				a = t.name,
				o = {
					o: e("startTime"),
					rt: n,
					n: a,
					f: e(xs),
					ds: e(Is),
					de: e(Rs),
					cs: e(js),
					ce: e(Hs),
					sl: e(qs),
					qs: e(bs),
					rs: e(Es),
					re: e(Ts),
					ts: t.transferSize || 0,
					es: t.encodedBodySize || 0
				};
			if (Ku === n || Wu === n) {
				var s = Di(a, n);
				s && (r(s, function(t, e) {
					0 == e.indexOf("s_") && (o[e] = t)
				}), s.st && (o.st = s.st), s.apms && (o.apms = s.apms), o.status = s.status, o.cb = s.cb)
			}
			i.res.push(o)
		})), i
	}
	function Di(t, e) {
		var n, a, i = e;
		return i === Ku && (i = hu), r(Af.xhrs, function(e, r) {
			return t.indexOf(e.url) > -1 && e.subType === i ? (n = e, a = r, !1) : void 0
		}), n && Af.xhrs.splice(a, 1), n
	}
	function Li(t) {
		if (t) {
			var e = t.fetchStart;
			if (e) return e - t.navigationStart
		}
	}
	function ji() {
		var n = {}, a = 0,
			i = e.performance;
		i && i.getEntriesByType && r(i.getEntriesByType("mark") || [], function(t) {
			if (t && t.name && t.startTime && 0 === t.name.indexOf(Xo)) {
				var e = t.name.substring(Xo.length);
				e && (n[e] = Math.round(t.startTime), a += 1)
			}
		});
		var o = i && i.timing ? i.timing.navigationStart : t,
			s = e[Vo] && e[Vo].data,
			c = x({}, s || {}, $u || {});
		return c && i && i.timing && r(c, function(t, e) {
			t && ro(t) && t.timestamp && (n[e] = t.timestamp - o, a += 1)
		}), a > 0 ? n : null
	}
	function Hi(t, e, n) {
		var r = x({}, t || {}, {
			type: rs,
			subType: n || ss
		});
		return Qu.recordingCpActions && (r.crossPage = !0), e && (r.body = e), r
	}
	function qi(t) {
		Qu.recordingPageLoadEvent = !1, Qu.pageLoadEvent && (t && (Qu.pageLoadEvent._ctx.pageClose = !0), Qu.pageLoadEvent.endLock = !1, Qu.pageLoadEvent.end())
	}
	function Mi() {
		if (Qu.recordingPageLoadEvent = !0, Qu.pageLoadEvent = new ue({
			type: rs,
			subType: ss,
			endLock: !0,
			callback: {
				beforeSend: function(t) {
					z({
						type: Vc,
						name: ru,
						args: {
							context: t
						}
					})
				},
				afterSend: function(t) {
					Qu.pageLoadEventEnd = !0, Af.xhrs = Af.errs = null, Ge(), z({
						type: Kc,
						name: Zc,
						args: {
							actionData: t
						}
					})
				}
			}
		}), G(ru, _d), Z()) {
			var t = bt(kf(Us));
			t && t.fromUrl && uf.referrer && t.fromUrl.indexOf(uf.referrer) > -1 && (Qu.recordingCpActions = !0, Qu.cpParent = t, G(ru, Na)), Pf(Us)
		}
		return Ni() && !Qu.pfSent && qi(), hl.on(To, function() {
			var t = 0;
			if (vf.pfDelay && ro(vf.pfDelay)) {
				var e = ji();
				r(vf.pfDelay, function(n, r) {
					(!e || null == e[r]) && ao(n) && n > t && (t = n)
				})
			}
			vf.spaMetricEnable && Qu.pageLoadEvent && !Qu.pageLoadEvent.hasChildType(ts) && vf.pageLoadDelay > t && (t = vf.pageLoadDelay), I(function() {
				qi()
			}, t)
		}).on([So, Ao, wo], xd)
	}
	function Bi(t, e) {
		t && vf.routerEnable && Er({
			key: t,
			autoEnd: !0,
			endDelay: vf.router_event_delay,
			type: yc,
			debugInfo: {
				api: e
			}
		})
	}
	function Ui() {
		r(bd, function(t) {
			Dn(e.history, t, function(n) {
				return function(r, a, i) {
					var o;
					o = n.apply(this, arguments);
					try {
						Bi(e.location.href, t)
					} catch (s) {}
					return o
				}
			})
		}), go(e, Ic, function() {
			Bi(e.location.href, Ic)
		})
	}
	function Fi() {
		go(e, Pc, function() {
			Bi(e.location.href, Pc)
		})
	}
	function Gi() {
		var t = e.history;
		t ? Ui() : Fi()
	}
	function Yi() {
		vf.routerEnable && Gi()
	}
	function zi() {
		if (pt(vf.req_capacity), L(), Z()) try {
			go(e, "message", Vi)
		} catch (t) {}
		gn(Af), Z() && Xa(), Mi(), ki(), Nn(), Yi(), Af._end = O(), Ee(function() {
			Jf._end = Af._end
		}), Pr()
	}
	function Ji() {
		return e[Io] && e[Io].inited
	}
	function Ki(t, n) {
		return x({}, e[Vo].config || {}, t || {}, n || {})
	}
	function Wi(t) {
		var n = {};
		if (no(t)) {
			var r = {};
			t(r), n = r
		} else n = {
			server: t
		};
		e[Vo] || (e[Vo] = {
			hook: {}
		}), Kl(vf.token, function(t) {
			t = t || {};
			var r = Ki(n.server, t.config),
				a = Ji();
			(!a || r.reinit) && (rn(r), an(), !vf.key && !vf.appKey || a || (zi(), e[Io].inited = !0), z({
				type: Kc,
				name: Qc,
				args: {
					firstInit: !a
				}
			}), Nr(t))
		})
	}
	function Vi(t) {
		try {
			var n;
			if (!t || !t.data || 0 !== t.data.indexOf("_TINGYUN")) return;
			if (n = t.data.replace("_TINGYUN", ""), bt(n)) {
				var r = bt(n);
				if ("gather" === r.type && "APM" === r.fromJS && !e[Ec]) {
					pf.isGather = !0;
					var a = t.origin,
						i = uf.getElementsByTagName("head")[0],
						o = uf.createElement("script");
					o.type = "text/javascript", o.src = a + "/assets/lib/gather/path-gather.min.js?version=" + gi(new Date), i.appendChild(o)
				}
			}
		} catch (s) {}
	}
	function Xi(t) {
		if (t && (no(t) || ro(t))) {
			var e = z({
				type: Kc,
				name: $c,
				args: {
					firstInit: !Ji()
				}
			});
			e.exist && ee(e.results, function(t) {
				return t === !1
			}) || Wi(t)
		}
	}
	function $i() {
		return window[Io] && 3 === window[Io].mainVersion ? window[Io] : (Jl.init = Xi, Jl)
	}
	var Qi, Zi, to = s("String"),
		eo = s("Array"),
		no = s("Function"),
		ro = s("Object"),
		ao = s("Number"),
		io = s("Headers"),
		oo = s("Request"),
		so = [].slice,
		co = '"',
		uo = /([\"\\])/g,
		fo = /\n/g,
		lo = "ARRAY",
		po = "OBJECT_KEY",
		ho = "OBJECT_VALUE",
		vo = "__TY_MARK_OBJECT_VALUE_UNDEFINED__",
		mo = e.JSON;
	p();
	var go;
	go = e.addEventListener ? v : m;
	var yo = e.encodeURIComponent,
		_o = function() {
			return !document.addEventListener
		}, xo = String.prototype.trim ? function(t) {
			return null == t ? "" : t.trim()
		} : function(t) {
			return null == t ? "" : t.toString().replace(/^\s+/, "").replace(/\s+$/, "")
		}, bo = (e.location.protocol, function() {
			function t(t) {
				return 0 > t ? NaN : 30 >= t ? 0 | Math.random() * (1 << t) : 53 >= t ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << t - 30)) * (1 << 30) : NaN
			}
			function e(t, e) {
				for (var n = t.toString(16), r = e - n.length, a = "0"; r > 0; r >>>= 1, a += a) 1 & r && (n = a + n);
				return n
			}
			return function(n) {
				return n || (n = ""), e(t(32), 8) + n + e(t(16), 4) + n + e(16384 | t(12), 4) + n + e(32768 | t(14), 4) + n + e(t(48), 12)
			}
		}());
	P.prototype = {
		on: function(t, e) {
			var n = this;
			return to(t) ? (n.events[t] || (n.events[t] = [])).push(e) : eo(t) && r(t, function(t) {
				n.on(t, e)
			}), n
		},
		off: function(t, e) {
			var n = arguments.length,
				r = this;
			if (0 === n) return r.events = {}, r;
			var a = r.events[t];
			if (!a) return r;
			if (1 === n) return r.events[t] = null, r;
			for (var i, o = a.length; o--;) if (i = a[o], i === e) {
				a.splice(o, 1);
				break
			}
			return r
		},
		emit: function(t) {
			var e = [].slice.call(arguments, 1),
				n = this.events[t];
			return n && r(n, function(t) {
				return t.apply(this, e)
			}), this
		},
		unshift: function(t, e) {
			var n = this;
			return (n.events[t] || (n.events[t] = [])).unshift(e), n
		}
	};
	var Eo = "error",
		To = "load",
		So = "unload",
		Ao = "beforeunload",
		wo = "pagehide",
		Co = "readystatechange",
		Oo = "complete",
		ko = "DOMContentLoaded",
		No = "on",
		Po = "_ty_rum",
		Io = "TINGYUN",
		Ro = "__ign",
		Do = "__ty_asyncWrap__",
		Lo = "3",
		jo = "1",
		Ho = "2",
		qo = "1",
		Mo = "2",
		Bo = "3",
		Uo = "4",
		Fo = "5",
		Go = "reqBody",
		Yo = "TINGYUN_COOKIE_VALUE",
		zo = "TINGYUN_DATA",
		Jo = "X-Tingyun",
		Ko = "X-Tingyun-Data",
		Wo = "TY_BASE64",
		Vo = "__TINGYUN",
		Xo = "ty_",
		$o = 6e4,
		Qo = "common",
		Zo = "event",
		ts = "ajax",
		es = "timer",
		ns = "iframe",
		rs = "pf",
		as = "crossPage",
		is = "jsError",
		os = "resource",
		ss = "main",
		cs = "quit",
		us = "e",
		fs = "a",
		ls = "t",
		ds = "i",
		ps = "p",
		hs = "c",
		vs = "j",
		ms = "finish",
		gs = "pending",
		ys = "finish",
		_s = "timeout",
		xs = "fetchStart",
		bs = "requestStart",
		Es = "responseStart",
		Ts = "responseEnd",
		Ss = "domContentLoadedEventStart",
		As = "domContentLoadedEventEnd",
		ws = "domInteractive",
		Cs = "domComplete",
		Os = "loadEventStart",
		ks = "loadEventEnd",
		Ns = "unloadEventStart",
		Ps = "unloadEventEnd",
		Is = "domainLookupStart",
		Rs = "domainLookupEnd",
		Ds = "redirectStart",
		Ls = "redirectEnd",
		js = "connectStart",
		Hs = "connectEnd",
		qs = "secureConnectionStart",
		Ms = 5,
		Bs = 5,
		Us = "__ty_crs_page_events",
		Fs = "window_open",
		Gs = "a_link",
		Ys = "form_submit",
		zs = "__ty_event_patch_tag",
		Js = "__ty_event_patch_disable",
		Ks = "__ty_event_patch_id",
		Ws = "click",
		Vs = "submit",
		Xs = "spe",
		$s = "addEventListener",
		Qs = "onProperty",
		Zs = "inline",
		tc = "IMG",
		ec = "A",
		nc = "FORM",
		rc = 3,
		ac = "__ty_ignore",
		ic = "__ty_xhr_hooked",
		oc = "__ty_xhr_hooked_type",
		sc = 200,
		cc = "TY_USER_ID",
		uc = "TY_SESSION_N_ID",
		fc = "TY_DEVICE_N_ID",
		lc = 18e5,
		dc = "|",
		pc = "__TY_SPE_STORE",
		hc = 6e4,
		vc = 6e5,
		mc = "auto",
		gc = "defined",
		yc = "route",
		_c = 500,
		xc = "success",
		bc = "fail",
		Ec = "TY_path_gather",
		Tc = "EagleEye-TraceID",
		Sc = "__TY_ELEMENT_CB",
		Ac = "__TY_CB_COUNTER",
		wc = "__TY_IMAGE_LOAD_HOOK",
		Cc = 60,
		Oc = "__tagFirstPaintTime",
		kc = 500,
		Nc = 1e4,
		Pc = "hashchange",
		Ic = "popstate",
		Rc = "pushState",
		Dc = "replaceState",
		Lc = "vueRouter",
		jc = "normal",
		Hc = "script",
		qc = "current",
		Mc = "crossPage",
		Bc = "visibilitychange",
		Uc = "URL",
		Fc = "QH",
		Gc = "QB",
		Yc = "RH",
		zc = "RB",
		Jc = 200,
		Kc = "lifecycle",
		Wc = "action",
		Vc = "contextSend",
		Xc = "send",
		$c = "preInit",
		Qc = "init",
		Zc = "pageLoad",
		tu = "ajax",
		eu = "error",
		nu = "userAction",
		ru = "pageLoad",
		au = "ajax_send",
		iu = "ajax_finish",
		ou = "error_trigger",
		su = "paint",
		cu = "largest-contentful-paint",
		uu = "first-contentful-paint",
		fu = 500,
		lu = 1e4,
		du = 100,
		pu = "__ty_resource_load_bind_id",
		hu = "xhr",
		vu = "fetch",
		mu = "mPaaS_rpc",
		gu = "resource",
		yu = "auto",
		_u = "session",
		xu = "start",
		bu = "data",
		Eu = "end",
		Tu = "immediateEvent",
		Su = "event",
		Au = 1,
		wu = 2,
		Cu = 3,
		Ou = "xhr",
		ku = "xdr",
		Nu = "beacon",
		Pu = "messageHandler",
		Iu = "jsBridge",
		Ru = "TINGYUN_STORAGE",
		Du = "AGENT_CONFIG",
		Lu = 60,
		ju = 3e4,
		Hu = "/js-config/config/web-agent",
		qu = "GET",
		Mu = "POST",
		Bu = "http://mgw/",
		Uu = 100,
		Fu = 2e3,
		Gu = 4e3,
		Yu = 4e3,
		zu = 7e3,
		Ju = "Server-Timing",
		Ku = "xmlhttprequest",
		Wu = "fetch",
		Vu = {}, Xu = {
			imageResources: []
		}, $u = {}, Qu = {
			context: null,
			uniqueId: 0,
			actions: [],
			opt_custom_param: {},
			unAssignedEvents: [],
			cpActions: [],
			recordingCpActions: !1,
			cpParent: null,
			cpRemain: {
				ajax: 0,
				iframe: 0
			},
			tryEndCpActionsFailed: !1,
			globalAsyncStore: null,
			globalAjaxContext: null,
			pfSent: !1,
			ajaxUniqueId: 0,
			scope: null,
			performanceObserver: {},
			enableLCPObserver: !0,
			recordingPageLoadEvent: !1,
			recentFinishedAjaxContext: null,
			iframeMetric: {},
			pageLoadEventEnd: !1
		}, Zu = "extra";
	D.prototype.setContext = function(t, e) {
		var n = this;
		t && ro(t) ? r(t, function(t, e) {
			n._mergeContext(e, t)
		}) : this._mergeContext(t, e)
	}, D.prototype.setExtraContext = function(t) {
		this.setContext(Zu, t)
	}, D.prototype.getContext = function(t) {
		return null == t ? this._contexts : null == this._contexts ? null : this._contexts[t]
	}, D.prototype.getData = function() {
		return null == this._contexts ? null : {
			contexts: this._contexts
		}
	}, D.prototype._mergeContext = function(t, e) {
		null != t && null != e && (this._contexts || (this._contexts = {}), ro(this._contexts[t]) && ro(e) ? this._contexts[t] = x(this._contexts[t] || {}, e) : this._contexts[t] = e)
	}, D.prototype.toJSON = function() {};
	var tf, ef, nf = {
		lifecycle: [$c, Qc, Zc],
		action: [tu, eu, nu],
		contextSend: [ru],
		send: []
	}, rf = "default",
		af = "default",
		of = {}, sf = Object.create ? Object.create : K,
		cf = e.Error,
		uf = e.document,
		ff = e.XMLHttpRequest,
		lf = e.location,
		df = e.navigator,
		pf = (e.HTMLElement, {
			isGather: !1
		}),
		hf = {}, vf = {}, mf = {
			info: {}
		}, gf = mf.info,
		yf = {}, _f = function() {
			var t = e.navigator.standalone,
				n = Q().toLowerCase(),
				r = /safari/.test(n),
				a = /iphone|ipod|ipad/.test(n);
			return a && !t && !r
		}, xf = !/(MSIE [0-8].\d+)/.test(Q()) && document.addEventListener,
		bf = Z() ? w : A,
		Ef = at,
		Tf = !1;
	lt.prototype.add = function(t) {
		this.queue.length >= this.size || (this.queue.push(t), this.running || (this.running = !0, this.run()))
	}, lt.prototype.run = function() {
		var t = this,
			e = function() {
				t.queue.length > 0 ? t.run() : t.running = !1
			};
		this.handler(this.queue.shift(), e)
	}, lt.prototype.handler = function(t, e) {
		tf(t, k(function() {
			e()
		}))
	}, df.sendBeacon && (Tf = !0), tt() ? (tf = ut, Tf = !1, gf.initiator = Pu) : et() ? (tf = ft, Tf = !1, gf.initiator = Iu) : e.XDomainRequest ? (tf = it, gf.initiator = ku) : _f() ? dt() : (tf = ot, gf.initiator = Ou), tf || (tf = function(t, e) {
		e()
	}, Tf = !1), go(e, Ao, function(t) {
		Tf && (tf = st, gf.initiator = Nu)
	});
	var Sf = vt.prototype;
	x(Sf, P.prototype);
	var Af = new vt;
	Af.on("send", function(t, e, n) {
		n = n || C, ht({
			url: t,
			data: e,
			callback: n
		})
	});
	var wf = {}, Cf = e.screen;
	Cf && (wf.sh = Cf.height, wf.sw = Cf.width);
	var Of, kf, Nf, Pf, If = "http:",
		Rf = "https:",
		Df = [If, Rf],
		Lf = [],
		jf = [];
	kf = function(t) {
		try {
			return e.localStorage.getItem(t)
		} catch (n) {}
	}, Nf = function(t, n) {
		try {
			e.localStorage.setItem(t, n)
		} catch (r) {}
		return n
	}, Pf = function(t) {
		try {
			e.localStorage.removeItem(t)
		} catch (n) {}
	};
	var Hf = !0,
		qf = function() {
			try {
				var t = bo();
				return e.localStorage.setItem(t, t), e.localStorage.removeItem(t), !0
			} catch (n) {
				return !1
			}
		}(),
		Mf = {};
	Mf.localStorage = qf, Mf.getEntriesByName = e.performance && no(e.performance.getEntriesByName),
	function() {
		function t() {
			var t, f, l = uf.documentElement;
			l.appendChild(c), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = a = s = !1, r = o = !0, e.getComputedStyle && (f = e.getComputedStyle(u), n = "1%" !== (f || {}).top, s = "2px" === (f || {}).marginLeft, a = "4px" === (f || {
				width: "4px"
			}).width, u.style.marginRight = "50%", r = "4px" === (f || {
				marginRight: "4px"
			}).marginRight, t = u.appendChild(uf.createElement("div")), t.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", u.style.width = "1px", o = !parseFloat((e.getComputedStyle(t) || {}).marginRight), u.removeChild(t)), u.style.display = "none", i = 0 === u.getClientRects().length, i && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = u.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", i = 0 === t[0].offsetHeight, i && (t[0].style.display = "", t[1].style.display = "none", i = 0 === t[0].offsetHeight)), l.removeChild(c)
		}
		var n, r, a, i, o, s, c = (uf.documentElement, uf.createElement("div")),
			u = uf.createElement("div");
		u.style && (u.style.cssText = "float:left;opacity:.5", Mf.opacity = "0.5" === u.style.opacity, Mf.cssFloat = !! u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", Mf.clearCloneStyle = "content-box" === u.style.backgroundClip, c = uf.createElement("div"), c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", c.appendChild(u), Mf.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, Mf.reliableHiddenOffsets = function() {
			return null == n && t(), i
		})
	}();
	var Bf = [ts, es, ns, os];
	ue.prototype.end = function(t) {
		var e = this;
		if (this.closed) return void(!this.cleared && vf.console_debug && console.warn("Current context is already closed"));
		if (t && (this.actionCount.ajax += t.actionCount.ajax, this.actionCount.iframe += t.actionCount.iframe, se(this.items, t), this.updateRemain(-1, t.type)), !this.endLock && (this.isNoRemain() || this.isTimeout)) if (this.e = O(), this.closed = !0, this.i && clearTimeout(this.i), this.e - this.s > vf.eventTimeout && (this.isTimeout = !0), this.setState(this.isTimeout ? _s : ys), this.data && (this.data.state = this.state), this.parent) this.parent.end(this);
		else {
			var n;
			this.isTimeout && (this.isRemainMeaningfulAction() || this.isMeaningfulAction()) ? n = this.composeTimeoutActionData() : this.isMeaningfulAction() && (n = this.composeActionData()), n && (this.eventData = n, this.speBinded ? null == this.spe ? (this.waitingSpeEnd = !0, this.waitingSpeTimer = I(function() {
				e.waitingSpeEnd = !1, e.send()
			}, Nc)) : (this.buildEventDataWithSpe(), this.send()) : this.send()), Qu.context = null
		}
	}, ue.prototype.isNoRemain = function(t) {
		t = t || {};
		var e = !0;
		return r(this.remain, function(n, r) {
			if (t.ignoreFields && T(t.ignoreFields, r) > -1) return !0;
			var a = n.current <= 0 && (t.testCurrent ? !0 : n.children <= 0);
			return a ? void 0 : (e = !1, !1)
		}), e
	}, ue.prototype.clear = function() {
		this.closed = !0, this.cleared = !0, this.i && clearTimeout(this.i)
	}, ue.prototype.isMeaningfulAction = function() {
		return this.actionCount.ajax > 0 || this.actionCount.iframe > 0 || this.type === rs
	}, ue.prototype.isRemainMeaningfulAction = function() {
		return this.remain.ajax.current > 0 || this.remain.ajax.children > 0 || this.remain.iframe.current > 0 || this.remain.iframe.children > 0
	}, ue.prototype.timeout = function() {
		this.isTimeout = !0, this.setState(_s), this.end(null, !0)
	}, ue.prototype.setData = function(t) {
		this.data || (this.data = {}), x(this.data, t || {})
	}, ue.prototype.composeActionData = function() {
		return {
			type: this.type,
			subType: this.subType,
			start: this.s,
			end: this.e,
			duration: this.e - this.s > 0 ? this.e - this.s : 0,
			data: x({}, this.data || {}, {
				items: (this.items || []).slice()
			})
		}
	}, ue.prototype.composeTimeoutActionData = function() {
		return this.collectActionDataFromTop(), this.composeActionData()
	}, ue.prototype.collectActionDataFromTop = function() {
		ce(this.items, this.children)
	}, ue.prototype.collectCrossPageData = function(t) {
		if (t || (t = []), this.crossPage = !0, this.data && (this.data.crossPage = !0), t.unshift(this.data), this.parent) return this.parent.collectCrossPageData(t);
		var e = {
			type: this.type,
			subType: this.subType,
			start: this.s
		};
		return (this.isNoRemain() || 1 === this.children.length) && this.clear(), {
			action: e,
			data: t,
			requestInfo: Qt(),
			commonActionInfo: ne(),
			fromUrl: vf.ref
		}
	}, ue.prototype.canEnd = function(t) {
		return !this.closed && this.isNoRemain(x({
			testCurrent: !0
		}, t))
	}, ue.prototype.updateRemain = function(t, e) {
		if (this.remain[e]) {
			e || (e = ts);
			var n = t || 0;
			this.remain[e].current = this.remain[e].current + n;
			for (var r = this.parent; r;) r.remain[e].children = r.remain[e].children + n, r = r.parent
		}
	}, ue.prototype.setState = function(t) {
		return this.stateChanged ? !1 : (this.state = t, this.stateChanged = !0, !0)
	}, ue.prototype.current = function() {
		return Qu.context
	}, ue.prototype.buildEventDataWithSpe = function() {
		if (this.spe && this.eventData && this.eventData.data) {
			var t = this.spe.xhrs;
			this.spe.hasAjax = t && t.length > 0, delete this.spe.xhrs, this.eventData.data.spe = this.spe
		}
	}, ue.prototype.setSpe = function(t) {
		return t ? (this.spe = t, this.waitingSpeEnd && (this.buildEventDataWithSpe(), this.send(), clearTimeout(this.waitingSpeTimer)), this.sent) : void 0
	}, ue.prototype.send = function() {
		if (!this.sent) {
			var t = {};
			null != this.spe && this.speBinded && (t.query = {
				ss: 1
			}, this.spe.type === yc && (t.query.rs = 1)), no(this.callback.beforeSend) && this.callback.beforeSend.call(this, this), no(this.callback.afterSend) && (t.cb = this.callback.afterSend), this.setSendOptions(t), re(this.eventData, this.sendOptions), this.sent = !0
		}
	}, ue.prototype.removeFromParent = function() {
		if (this.parent) {
			var t = this.parent.children.indexOf(this);
			t > -1 && this.parent.children.splice(t, 1);
			var e = this.parent.items.indexOf(this.data);
			e > -1 && this.parent.items.splice(e, 1), this.parent.updateRemain(-1, this.type), this.parent.end()
		}
	}, ue.prototype.addResource = function(t, e) {
		var n = this;
		if (t && !t[pu]) {
			var r = {
				start: e,
				name: t.src || "",
				type: t.nodeName ? t.nodeName.toLowerCase() : "",
				timeout: !1,
				load: !1,
				error: !1,
				finished: !1
			}, a = bo();
			if (t[pu] = a, this.resource.handler[a] = r, this.addResourceStatstic("total", t.src), this.updateRemain(1, os), r.timerId = I(function() {
				var e = n.resource.handler[a];
				e && !e.finished && (n.addResourceStatstic("timeout", t.src), e.timeout = !0, e.finished = !0, n.updateRemain(-1, os), n.end())
			}, vf.resourceWaitTime), r.handler = function(e) {
				e || (e = {
					type: "load"
				});
				var r = n.resource.handler[a];
				if (r && !r.finished) {
					clearTimeout(r.timerId), n.updateRemain(-1, os);
					try {
						n.addResourceStatstic(e.type, t.src), r[e.type] = !0
					} catch (e) {}
					r.finished = !0, n.end()
				}
			}, 0 === r.name.indexOf("data:image/")) return void r.handler();
			t.addEventListener("load", r.handler), t.addEventListener("error", r.handler)
		}
	}, ue.prototype.addResourceStatstic = function(t, e, n) {
		this.resource.statistic[t][e] || (this.resource.statistic[t][e] = 0), this.resource.statistic[t][e] += n || 1
	}, ue.prototype.hasChildType = function(t) {
		var e = !1;
		return r(this.children, function(n) {
			return n.type === t ? (e = !0, !1) : void 0
		}), e
	}, ue.buildImmediateAction = function(t, e, n, r) {
		r = r || {};
		var a = x({
			type: t,
			subType: e,
			state: ms,
			data: n
		}, r.actionOptions || {});
		return a.data && (a.data.state = a.state), r.notSend || re(a, r.sendOptions), a
	}, ue.getRootContext = function(t, e) {
		if (!t && !no(e)) return null;
		for (; t;) {
			if (null == t.parent && e.call(null, t)) return t;
			t = t.parent
		}
		return null
	}, ue.prototype.toJSON = function() {}, ue.prototype.setSendOptions = function(t) {
		this.sendOptions || (this.sendOptions = {}), x(this.sendOptions, t)
	}, ue.prototype.registerTimeout = function() {
		var t = this;
		null == this.parent && this.type !== rs && (this.i = I(function() {
			t.timeout()
		}, vf.eventTimeout))
	}, ue.prototype.unregisterTimeout = function() {
		try {
			clearTimeout(this.i)
		} catch (t) {}
	};
	var Uf, Ff, Gf, Yf, zf = {}, Jf = {
		start: t,
		e: {}
	}, Kf = 0,
		Wf = 1,
		Vf = 2,
		Xf = 3,
		$f = 4,
		Qf = 5,
		Zf = 0,
		tl = 1,
		el = 2,
		nl = 3,
		rl = 4,
		al = 5,
		il = 0,
		ol = 1,
		sl = 2,
		cl = 3,
		ul = e,
		fl = function() {
			var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				e = function(t) {
					for (var e = {}, n = 0, r = t.length; r > n; n++) e[t.charAt(n)] = n;
					return e
				}(t),
				n = String.fromCharCode,
				r = function(t) {
					if (t.length < 2) {
						var e = t.charCodeAt(0);
						return 128 > e ? t : 2048 > e ? n(192 | e >>> 6) + n(128 | 63 & e) : n(224 | e >>> 12 & 15) + n(128 | e >>> 6 & 63) + n(128 | 63 & e)
					}
					var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
					return n(240 | e >>> 18 & 7) + n(128 | e >>> 12 & 63) + n(128 | e >>> 6 & 63) + n(128 | 63 & e)
				}, a = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
				i = function(t) {
					return t.replace(a, r)
				}, o = function(e) {
					var n = [0, 2, 1][e.length % 3],
						r = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0),
						a = [t.charAt(r >>> 18), t.charAt(r >>> 12 & 63), n >= 2 ? "=" : t.charAt(r >>> 6 & 63), n >= 1 ? "=" : t.charAt(63 & r)];
					return a.join("")
				}, s = ul.btoa ? function(t) {
					return ul.btoa(t)
				} : function(t) {
					return t.replace(/[\s\S]{1,3}/g, o)
				}, c = function(t) {
					var e = "[object Uint8Array]" === Object.prototype.toString.call(t);
					return e ? t.toString("base64") : s(i(String(t)))
				}, u = function(t, e) {
					return e ? c(String(t)).replace(/[+\/]/g, function(t) {
						return "+" == t ? "-" : "_"
					}).replace(/=/g, "") : c(t)
				}, f = function(t) {
					return u(t, !0)
				}, l = new RegExp(["[\xc0-\xdf][\x80-\xbf]", "[\xe0-\xef][\x80-\xbf]{2}", "[\xf0-\xf7][\x80-\xbf]{3}"].join("|"), "g"),
				d = function(t) {
					switch (t.length) {
						case 4:
							var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3),
								r = e - 65536;
							return n((r >>> 10) + 55296) + n((1023 & r) + 56320);
						case 3:
							return n((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
						default:
							return n((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
					}
				}, p = function(t) {
					return t.replace(l, d)
				}, h = function(t) {
					var r = t.length,
						a = r % 4,
						i = (r > 0 ? e[t.charAt(0)] << 18 : 0) | (r > 1 ? e[t.charAt(1)] << 12 : 0) | (r > 2 ? e[t.charAt(2)] << 6 : 0) | (r > 3 ? e[t.charAt(3)] : 0),
						o = [n(i >>> 16), n(i >>> 8 & 255), n(255 & i)];
					return o.length -= [0, 0, 2, 1][a], o.join("")
				}, v = ul.atob ? function(t) {
					return ul.atob(t)
				} : function(t) {
					return t.replace(/\S{1,4}/g, h)
				}, m = function(t) {
					return v(String(t).replace(/[^A-Za-z0-9\+\/]/g, ""))
				}, g = function(t) {
					return p(v(t))
				}, y = function(t) {
					return g(String(t).replace(/[-_]/g, function(t) {
						return "-" == t ? "+" : "/"
					}).replace(/[^A-Za-z0-9\+\/]/g, ""))
				};
			return {
				atob: m,
				btoa: s,
				utob: i,
				encode: u,
				encodeURI: f,
				btou: p,
				decode: y
			}
		}(),
		ll = ["id", "key", "appKey", "token"],
		dl = ["IMG", "SCRIPT", "IFRAME"],
		pl = null,
		hl = new P;
	Yf = String.prototype.trim ? String.prototype.trim : function() {
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
	};
	var vl = 1e4,
		ml = 0,
		gl = "report",
		yl = "error";
	bn.prototype = {
		add: function(t, e) {
			this.len > this.limit || this.get(t) || (this.c[t] = e, this.len++)
		},
		get: function(t) {
			return this.c[t]
		},
		reset: function() {
			this.c = {}, this.len = 0
		}
	};
	var _l = new bn(100),
		xl = {}, bl = {};
	Sn.prototype = {
		increase: function() {
			this.recordFileName(), this.count++
		},
		recordFileName: function() {
			var t = this.filename || "_";
			this.fep += bl[t] ? 0 : 1, bl[t] = !0
		},
		fix: function() {
			var t = this,
				e = t.stack;
			if (e && to(e)) {
				e = e.split(/\n/);
				var n = [];
				r(e, function(t, e) {
					-1 == t.indexOf(Do) && n.push(t)
				}), t.stack = n.join("\n")
			}
		},
		getErrorOverview: function() {
			var t = this;
			return {
				o: t.time,
				e: t.msg,
				l: t.lineno,
				c: t.colno,
				r: t.filename,
				ec: t.count,
				s: t.stack,
				m: t.module,
				ep: t.ep,
				fep: t.fep,
				tr: t.trigger
			}
		},
		toObject: function() {
			var t = this.getErrorOverview(),
				e = {};
			return r(this.trace, function(t, n) {
				e[n] = q({
					time: t.time
				}, t.scope)
			}), t.trace = e, t
		},
		initTraceInstance: function() {
			var t = {
				id: bo(),
				time: O(),
				scope: new D
			};
			return t
		},
		triggerActionHook: function(t) {
			if (t) {
				var e = x(this.getErrorOverview(), {
					id: t.id,
					o: t.time
				});
				z({
					type: Wc,
					name: eu,
					args: {
						target: this.error,
						actionData: e
					},
					scope: t.scope
				}), e.id && (t.id = e.id)
			}
		}
	}, Rn.prototype.put = function(t, e) {
		if (this._size >= this._capacity) try {
			var n = this._cacheKeys.shift();
			this._size--, this._cache[n] = null, delete this._cache[n]
		} catch (r) {}
		this._cache[t] = e, this._cacheKeys.push(t), this._size++
	}, Rn.prototype.get = function(t) {
		return this._cache[t]
	};
	var El = [Ws, Vs],
		Tl = 1,
		Sl = 2,
		Al = [Ws, Vs],
		wl = [],
		Cl = new Rn({
			capacity: 20
		}),
		Ol = null;
	zn.regex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;
	var kl = "undefined" != typeof e.console,
		Nl = 1,
		Pl = 2,
		Il = 4,
		Rl = 8,
		Dl = ir.prototype;
	Dl.create = Dl.before = Dl.after = Dl.error = null;
	var Ll;
	lr.prototype = {
		createContext: function() {
			return sf(this.active)
		},
		getContext: function() {
			return this.active
		},
		get: function(t) {
			return this.active ? this.active[t] : void 0
		},
		set: function(t, e) {
			return this.active ? this.active[t] = e : void 0
		},
		enter: function(t) {
			if (!t) throw new cf("context required!");
			this._set.push(this.active), this.active = t
		},
		exit: function(t) {
			if (!t) throw new cf("context required!");
			if (t === this.active) return void(this.active = this._set.pop());
			var e = this._set.lastIndexOf ? this._set.lastIndexOf(t) : S(this._set, t);
			if (0 > e) throw new cf("context not currently entered!");
			this._set.splice(e, 1)
		},
		bind: function(t, e) {
			e || (e = this.active ? this.active : this.createContext());
			var n = this;
			return function() {
				n.enter(e);
				try {
					return t.apply(this, arguments)
				} catch (r) {
					try {
						var a = "moduleId";
						r[a] = e[a]
					} catch (i) {}
					throw r
				} finally {
					n.exit(e)
				}
			}
		}
	};
	var jl, Hl = !1,
		ql = pr(),
		Ml = 1,
		Bl = 0,
		Ul = {}, Fl = {}, Gl = mr.prototype;
	Gl.fail = Gl.end = Gl.store = C;
	var Yl = gr.prototype;
	Yl.end = Yl.finish = Yl.fail = null, Yl.send = function(t) {
		this.sent = !0;
		var e = this.getEventData(t);
		(vf.collect_noajax_hashroute || !(e.debugInfo && e.debugInfo.api === Pc || e.type === yc && e.key.indexOf("#") > -1) || 0 !== e.xhrs.length) && (e.duration >= this.timeout || (z({
			type: Wc,
			name: nu,
			args: {
				actionData: e
			},
			scope: this.scope
		}), q(e, this.scope), vr(e)))
	}, Yl.getEventData = function(t) {
		var e = this,
			n = t.event && t.event.xhrs || [];
		r(n, function(t) {
			t.startSpeOffset = t.start - e.s
		});
		var a = {
			key: e.key,
			start: e.s,
			duration: e.e - e.s,
			status: e.status,
			type: e.type,
			xhrs: n
		};
		return e.duration > 0 && (a.duration = e.duration, a.start = e.e - e.duration), e.type === yc && vf.baseHref && (a.baseHref = vf.baseHref), this.debugInfo && (a.debugInfo = this.debugInfo), a
	}, Yl.refreshEventAndStore = function(t) {
		this.finish();
		var e = this.getEventData(t);
		Nf(pc, Zi(e))
	};
	var zl, Jl = {
		mainVersion: rc,
		version: "3.3.9-guoxin.3",
		key: vf.key,
		pvid: vf.pvid,
		createEvent: Er,
		globalStart: t,
		currentAgent: Af,
		mark: wr,
		wrapVueRouter: Ar,
		setUid: Kt,
		createAutoEvent: Er,
		endStoreEvent: xr,
		captureException: kn,
		setDid: Wt,
		addHook: B,
		addLifeCycleHook: U,
		addActionHook: F,
		addSendHook: Y,
		setContext: j,
		setExtraContext: H,
		stopLCPObserver: Ye,
		checkHookSupported: J,
		newSession: le,
		endSession: de,
		setSessionContext: pe,
		newEvent: In,
		createCustomEvent: In,
		parseQuery: wt,
		JSON: {
			stringify: Zi,
			parse: bt
		},
		newAction: Er,
		getAgentConfig: on,
		util: {
			uuid: bo
		}
	};
	zl = Mf.localStorage ? Cr() : Or();
	var Kl = zl.get,
		Wl = zl.set,
		Vl = 0,
		Xl = /(msie|trident)/i.test(Q()),
		$l = uf.createElement("a"),
		Ql = Ir(lf.href),
		Zl = {
			uniqueId: 0
		}, td = {
			error: 990,
			abort: 905,
			timeout: 903
		}, ed = "onload",
		nd = No + Co,
		rd = {}, ad = 0,
		id = {}, od = 0,
		sd = null,
		cd = 0,
		ud = "load",
		fd = "reload",
		ld = ["__wvjb_queue_message__", "__bridge_loaded__", "guosen://", "talkingdata:"],
		dd = {
			literal: {
				addHeader: function(t, e) {
					this.fetchOptions.headers[t] = e
				},
				getHeader: function(t) {
					return this.fetchOptions.headers[t]
				}
			},
			headers: {
				addHeader: function(t, e) {
					this.fetchOptions.headers.append(t, e)
				},
				getHeader: function(t) {
					return this.fetchOptions.headers.get(t)
				}
			},
			notSupport: {
				addHeader: C,
				getHeader: C
			}
		}, pd = ["css", "link", "script", "img", "other"],
		hd = {}, vd = {}, md = "{0} not support",
		gd = {}, yd = k(function() {
			if (gd.overview) {
				var t = x({}, gd.overview),
					n = Me(t, e);
				t.st = n;
				var r = Hi(t, null, cs);
				ue.buildImmediateAction(rs, cs, r)
			}
		}),
		_d = k(function(t) {
			function n(t) {
				return t ? "1" : "0"
			}
			var a = t.context;
			if (!Qu.pfSent) {
				var i = e.performance,
					o = !! i,
					s = i && i.timing;
				o || _t(E(md, ["pf"]));
				var c = x(Be(e), vf.pageServerData, Vu),
					u = x({
						le: c.le
					}, wf);
				u.fp = Ce(u, e), u.dr = He(u, e), u.fs = Oe(u, e), u.le = qe(u, e, a);
				var f = x(c, u) || {}, l = ji();
				l && r(l, function(t, e) {
					ao(t) && t >= 0 && (f[e] = t)
				});
				var d, p = "",
					h = s ? Li(s) : 0;
				r(["fp", "fs", "dr", "le"], function(t) {
					var e = t;
					"le" === t && (e = "trace"), p += n((h ? f[t] - h : f[t]) >= hf[e + "_threshold"])
				}), o && p.indexOf("1") > -1 && (d = Ri(i, s, a), f.ressize = !(!i || !i.getEntriesByName)), l && (d || (d = {}), d.mark = l), f.trflag = p || "0000", Xu.pfStart = O(), delete f.firstScreenResources, delete f.resources, d || (d = {
					tr: !1,
					tt: _(uf.title),
					charset: uf.characterSet
				});
				var v = Qu.pageUrlInfo || {};
				vf.collectAllParam[Uc] && v.operaAllParam && (d.opera_all_param = {}, d.opera_all_param[Uc] = v.operaAllParam), a._ctx.pageClose && (f.st = Me(u.fp, e)), gd.overview = f;
				var m = Hi(f, d);
				x(a.eventData.data, m);
				try {
					Pi(f, d)
				} catch (g) {}
				Qu.pfSent = !0
			}
		}),
		xd = k(function() {
			Qu.pageLoadEvent && (Qu.pageLoadEvent.closed ? yd() : (qi(!0), Qu.pageLoadEvent.closed || Qu.pageLoadEvent.timeout()))
		}),
		bd = [Rc, Dc],
		Ed = $i();
	return Ed
}(+new Date, window);
window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init(function(ty_rum) {
	ty_rum.server = {
		"beacon": "tyapp.guosen.com.cn:8081",
		"trace_threshold": 7000,
		"x_server_switch": false,
		"dr_threshold": 4000,
		"beacon_config": {
			"file": "https://tyapp.guosen.com.cn:8081",
			"http": "https://tyapp.guosen.com.cn:8081",
			"https": "https://tyapp.guosen.com.cn:8081"
		},
		"ignore_err": false,
		"id": "4Nl_NnGbjwY",
		"key": "avSTa-09vF8",
		"router_enable": true,
		"fp_threshold": 2000,
		"fs_threshold": 4000,
		"token": "b4653929120d400db70bcb0ff2ab348e"
	}
}); /*TY_AGENT_END*/