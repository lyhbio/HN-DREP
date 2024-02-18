(self.webpackChunk=self.webpackChunk||[]).push([[231],{20539:function(m,R,f){"use strict";var i=f(93236),l=f(49937),P=f(70510),T=function(C){P.Z&&((0,l.mf)(C)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof C,'".'))),(0,i.useEffect)(function(){C==null||C()},[])};R.Z=T},29235:function(m,R,f){"use strict";f.d(R,{Z:function(){return Be}});var i=f(23230),l=f(93236),P=function(e){return function(n,r){var t=(0,l.useRef)(!1);e(function(){return function(){t.current=!1}},[]),e(function(){if(!t.current)t.current=!0;else return n()},r)}},T=null,C=P(l.useEffect),x=function(e,n){var r=n.manual,t=n.ready,a=t===void 0?!0:t,o=n.defaultParams,s=o===void 0?[]:o,v=n.refreshDeps,c=v===void 0?[]:v,u=n.refreshDepsAction,g=(0,l.useRef)(!1);return g.current=!1,C(function(){!r&&a&&(g.current=!0,e.run.apply(e,(0,i.ev)([],(0,i.CR)(s),!1)))},[a]),C(function(){g.current||r||(g.current=!0,u?u():e.refresh())},(0,i.ev)([],(0,i.CR)(c),!1)),{onBefore:function(){if(!a)return{stopNow:!0}}}};x.onInit=function(e){var n=e.ready,r=n===void 0?!0:n,t=e.manual;return{loading:!t&&r}};var J=x,Q=f(10672);function V(e,n){var r=(0,l.useRef)({deps:n,obj:void 0,initialized:!1}).current;return(r.initialized===!1||!(0,Q.Z)(r.deps,n))&&(r.deps=n,r.obj=e(),r.initialized=!0),r.obj}var H=f(80096),S=new Map,X=function(e,n,r){var t=S.get(e);t!=null&&t.timer&&clearTimeout(t.timer);var a=void 0;n>-1&&(a=setTimeout(function(){S.delete(e)},n)),S.set(e,(0,i.pi)((0,i.pi)({},r),{timer:a}))},Y=function(e){return S.get(e)},He=function(e){if(e){var n=Array.isArray(e)?e:[e];n.forEach(function(r){return S.delete(r)})}else S.clear()},W=new Map,$=function(e){return W.get(e)},q=function(e,n){W.set(e,n),n.then(function(r){return W.delete(e),r}).catch(function(){W.delete(e)})},w={},_=function(e,n){w[e]&&w[e].forEach(function(r){return r(n)})},j=function(e,n){return w[e]||(w[e]=[]),w[e].push(n),function(){var t=w[e].indexOf(n);w[e].splice(t,1)}},k=function(e,n){var r=n.cacheKey,t=n.cacheTime,a=t===void 0?5*60*1e3:t,o=n.staleTime,s=o===void 0?0:o,v=n.setCache,c=n.getCache,u=(0,l.useRef)(),g=(0,l.useRef)(),h=function(d,p){v?v(p):X(d,a,p),_(d,p.data)},b=function(d,p){return p===void 0&&(p=[]),c?c(p):Y(d)};return V(function(){if(r){var d=b(r);d&&Object.hasOwnProperty.call(d,"data")&&(e.state.data=d.data,e.state.params=d.params,(s===-1||new Date().getTime()-d.time<=s)&&(e.state.loading=!1)),u.current=j(r,function(p){e.setState({data:p})})}},[]),(0,H.Z)(function(){var d;(d=u.current)===null||d===void 0||d.call(u)}),r?{onBefore:function(d){var p=b(r,d);return!p||!Object.hasOwnProperty.call(p,"data")?{}:s===-1||new Date().getTime()-p.time<=s?{loading:!1,data:p==null?void 0:p.data,error:void 0,returnNow:!0}:{data:p==null?void 0:p.data,error:void 0}},onRequest:function(d,p){var y=$(r);return y&&y!==g.current?{servicePromise:y}:(y=d.apply(void 0,(0,i.ev)([],(0,i.CR)(p),!1)),g.current=y,q(r,y),{servicePromise:y})},onSuccess:function(d,p){var y;r&&((y=u.current)===null||y===void 0||y.call(u),h(r,{data:d,params:p,time:new Date().getTime()}),u.current=j(r,function(L){e.setState({data:L})}))},onMutate:function(d){var p;r&&((p=u.current)===null||p===void 0||p.call(u),h(r,{data:d,params:e.state.params,time:new Date().getTime()}),u.current=j(r,function(y){e.setState({data:y})}))}}:{}},ee=k,ne=f(66292),re=f.n(ne),te=function(e,n){var r=n.debounceWait,t=n.debounceLeading,a=n.debounceTrailing,o=n.debounceMaxWait,s=(0,l.useRef)(),v=(0,l.useMemo)(function(){var c={};return t!==void 0&&(c.leading=t),a!==void 0&&(c.trailing=a),o!==void 0&&(c.maxWait=o),c},[t,a,o]);return(0,l.useEffect)(function(){if(r){var c=e.runAsync.bind(e);return s.current=re()(function(u){u()},r,v),e.runAsync=function(){for(var u=[],g=0;g<arguments.length;g++)u[g]=arguments[g];return new Promise(function(h,b){var d;(d=s.current)===null||d===void 0||d.call(s,function(){c.apply(void 0,(0,i.ev)([],(0,i.CR)(u),!1)).then(h).catch(b)})})},function(){var u;(u=s.current)===null||u===void 0||u.cancel(),e.runAsync=c}}},[r,v]),r?{onCancel:function(){var c;(c=s.current)===null||c===void 0||c.cancel()}}:{}},ue=te,ie=function(e,n){var r=n.loadingDelay,t=n.ready,a=(0,l.useRef)();if(!r)return{};var o=function(){a.current&&clearTimeout(a.current)};return{onBefore:function(){return o(),t!==!1&&(a.current=setTimeout(function(){e.setState({loading:!0})},r)),{loading:!1}},onFinally:function(){o()},onCancel:function(){o()}}},ae=ie,F=f(28814);function U(){return F.Z?document.visibilityState!=="hidden":!0}var O=[];function oe(e){return O.push(e),function(){var r=O.indexOf(e);O.splice(r,1)}}if(F.Z){var se=function(){if(U())for(var e=0;e<O.length;e++){var n=O[e];n()}};window.addEventListener("visibilitychange",se,!1)}var ce=oe,fe=function(e,n){var r=n.pollingInterval,t=n.pollingWhenHidden,a=t===void 0?!0:t,o=n.pollingErrorRetryCount,s=o===void 0?-1:o,v=(0,l.useRef)(),c=(0,l.useRef)(),u=(0,l.useRef)(0),g=function(){var h;v.current&&clearTimeout(v.current),(h=c.current)===null||h===void 0||h.call(c)};return C(function(){r||g()},[r]),r?{onBefore:function(){g()},onError:function(){u.current+=1},onSuccess:function(){u.current=0},onFinally:function(){s===-1||s!==-1&&u.current<=s?v.current=setTimeout(function(){!a&&!U()?c.current=ce(function(){e.refresh()}):e.refresh()},r):u.current=0},onCancel:function(){g()}}:{}},le=fe;function ve(e,n){var r=!1;return function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];r||(r=!0,e.apply(void 0,(0,i.ev)([],(0,i.CR)(t),!1)),setTimeout(function(){r=!1},n))}}function de(){return F.Z&&typeof navigator.onLine!="undefined"?navigator.onLine:!0}var D=[];function pe(e){return D.push(e),function(){var r=D.indexOf(e);r>-1&&D.splice(r,1)}}if(F.Z){var I=function(){if(!(!U()||!de()))for(var e=0;e<D.length;e++){var n=D[e];n()}};window.addEventListener("visibilitychange",I,!1),window.addEventListener("focus",I,!1)}var he=pe,ge=function(e,n){var r=n.refreshOnWindowFocus,t=n.focusTimespan,a=t===void 0?5e3:t,o=(0,l.useRef)(),s=function(){var v;(v=o.current)===null||v===void 0||v.call(o)};return(0,l.useEffect)(function(){if(r){var v=ve(e.refresh.bind(e),a);o.current=he(function(){v()})}return function(){s()}},[r,a]),(0,H.Z)(function(){s()}),{}},me=ge,be=function(e,n){var r=n.retryInterval,t=n.retryCount,a=(0,l.useRef)(),o=(0,l.useRef)(0),s=(0,l.useRef)(!1);return t?{onBefore:function(){s.current||(o.current=0),s.current=!1,a.current&&clearTimeout(a.current)},onSuccess:function(){o.current=0},onError:function(){if(o.current+=1,t===-1||o.current<=t){var v=r!=null?r:Math.min(1e3*Math.pow(2,o.current),3e4);a.current=setTimeout(function(){s.current=!0,e.refresh()},v)}else o.current=0},onCancel:function(){o.current=0,a.current&&clearTimeout(a.current)}}:{}},ye=be,Re=f(38209),Pe=f.n(Re),Ce=function(e,n){var r=n.throttleWait,t=n.throttleLeading,a=n.throttleTrailing,o=(0,l.useRef)(),s={};return t!==void 0&&(s.leading=t),a!==void 0&&(s.trailing=a),(0,l.useEffect)(function(){if(r){var v=e.runAsync.bind(e);return o.current=Pe()(function(c){c()},r,s),e.runAsync=function(){for(var c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];return new Promise(function(g,h){var b;(b=o.current)===null||b===void 0||b.call(o,function(){v.apply(void 0,(0,i.ev)([],(0,i.CR)(c),!1)).then(g).catch(h)})})},function(){var c;e.runAsync=v,(c=o.current)===null||c===void 0||c.cancel()}}},[r,t,a]),r?{onCancel:function(){var v;(v=o.current)===null||v===void 0||v.cancel()}}:{}},Te=Ce,we=f(55297),M=f(28062),Ae=f(20539),Ee=function(){var e=(0,i.CR)((0,l.useState)({}),2),n=e[1];return(0,l.useCallback)(function(){return n({})},[])},xe=Ee,Se=f(70510),Me=f(49937),Oe=function(){function e(n,r,t,a){a===void 0&&(a={}),this.serviceRef=n,this.options=r,this.subscribe=t,this.initState=a,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=(0,i.pi)((0,i.pi)((0,i.pi)({},this.state),{loading:!r.manual}),a)}return e.prototype.setState=function(n){n===void 0&&(n={}),this.state=(0,i.pi)((0,i.pi)({},this.state),n),this.subscribe()},e.prototype.runPluginHandler=function(n){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];var a=this.pluginImpls.map(function(o){var s;return(s=o[n])===null||s===void 0?void 0:s.call.apply(s,(0,i.ev)([o],(0,i.CR)(r),!1))}).filter(Boolean);return Object.assign.apply(Object,(0,i.ev)([{}],(0,i.CR)(a),!1))},e.prototype.runAsync=function(){for(var n,r,t,a,o,s,v,c,u,g,h=[],b=0;b<arguments.length;b++)h[b]=arguments[b];return(0,i.mG)(this,void 0,void 0,function(){var d,p,y,L,N,K,z,B,A,E,G;return(0,i.Jh)(this,function(Z){switch(Z.label){case 0:if(this.count+=1,d=this.count,p=this.runPluginHandler("onBefore",h),y=p.stopNow,L=y===void 0?!1:y,N=p.returnNow,K=N===void 0?!1:N,z=(0,i._T)(p,["stopNow","returnNow"]),L)return[2,new Promise(function(){})];if(this.setState((0,i.pi)({loading:!0,params:h},z)),K)return[2,Promise.resolve(z.data)];(r=(n=this.options).onBefore)===null||r===void 0||r.call(n,h),Z.label=1;case 1:return Z.trys.push([1,3,,4]),B=this.runPluginHandler("onRequest",this.serviceRef.current,h).servicePromise,B||(B=(G=this.serviceRef).current.apply(G,(0,i.ev)([],(0,i.CR)(h),!1))),[4,B];case 2:return A=Z.sent(),d!==this.count?[2,new Promise(function(){})]:(this.setState({data:A,error:void 0,loading:!1}),(a=(t=this.options).onSuccess)===null||a===void 0||a.call(t,A,h),this.runPluginHandler("onSuccess",A,h),(s=(o=this.options).onFinally)===null||s===void 0||s.call(o,h,A,void 0),d===this.count&&this.runPluginHandler("onFinally",h,A,void 0),[2,A]);case 3:if(E=Z.sent(),d!==this.count)return[2,new Promise(function(){})];throw this.setState({error:E,loading:!1}),(c=(v=this.options).onError)===null||c===void 0||c.call(v,E,h),this.runPluginHandler("onError",E,h),(g=(u=this.options).onFinally)===null||g===void 0||g.call(u,h,void 0,E),d===this.count&&this.runPluginHandler("onFinally",h,void 0,E),E;case 4:return[2]}})})},e.prototype.run=function(){for(var n=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this.runAsync.apply(this,(0,i.ev)([],(0,i.CR)(r),!1)).catch(function(a){n.options.onError||console.error(a)})},e.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},e.prototype.refresh=function(){this.run.apply(this,(0,i.ev)([],(0,i.CR)(this.state.params||[]),!1))},e.prototype.refreshAsync=function(){return this.runAsync.apply(this,(0,i.ev)([],(0,i.CR)(this.state.params||[]),!1))},e.prototype.mutate=function(n){var r=(0,Me.mf)(n)?n(this.state.data):n;this.runPluginHandler("onMutate",r),this.setState({data:r})},e}(),De=Oe;function Ze(e,n,r){n===void 0&&(n={}),r===void 0&&(r=[]);var t=n.manual,a=t===void 0?!1:t,o=(0,i._T)(n,["manual"]);Se.Z&&n.defaultParams&&!Array.isArray(n.defaultParams)&&console.warn("expected defaultParams is array, got ".concat(typeof n.defaultParams));var s=(0,i.pi)({manual:a},o),v=(0,we.Z)(e),c=xe(),u=V(function(){var g=r.map(function(h){var b;return(b=h==null?void 0:h.onInit)===null||b===void 0?void 0:b.call(h,s)}).filter(Boolean);return new De(v,s,c,Object.assign.apply(Object,(0,i.ev)([{}],(0,i.CR)(g),!1)))},[]);return u.options=s,u.pluginImpls=r.map(function(g){return g(u,s)}),(0,Ae.Z)(function(){if(!a){var g=u.state.params||n.defaultParams||[];u.run.apply(u,(0,i.ev)([],(0,i.CR)(g),!1))}}),(0,H.Z)(function(){u.cancel()}),{loading:u.state.loading,data:u.state.data,error:u.state.error,params:u.state.params||[],cancel:(0,M.Z)(u.cancel.bind(u)),refresh:(0,M.Z)(u.refresh.bind(u)),refreshAsync:(0,M.Z)(u.refreshAsync.bind(u)),run:(0,M.Z)(u.run.bind(u)),runAsync:(0,M.Z)(u.runAsync.bind(u)),mutate:(0,M.Z)(u.mutate.bind(u))}}var We=Ze;function Fe(e,n,r){return We(e,n,(0,i.ev)((0,i.ev)([],(0,i.CR)(r||[]),!1),[ue,ae,le,me,Te,J,ee,ye],!1))}var Le=Fe,Be=Le},10672:function(m,R,f){"use strict";f.d(R,{Z:function(){return i}});function i(l,P){if(l===P)return!0;for(var T=0;T<l.length;T++)if(!Object.is(l[T],P[T]))return!1;return!0}},28814:function(m,R){"use strict";var f=!!(typeof window!="undefined"&&window.document&&window.document.createElement);R.Z=f},30006:function(m,R,f){var i=f(25705);function l(P){if(Array.isArray(P))return i(P)}m.exports=l,m.exports.__esModule=!0,m.exports.default=m.exports},16660:function(m){function R(f){if(typeof Symbol!="undefined"&&f[Symbol.iterator]!=null||f["@@iterator"]!=null)return Array.from(f)}m.exports=R,m.exports.__esModule=!0,m.exports.default=m.exports},95848:function(m){function R(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}m.exports=R,m.exports.__esModule=!0,m.exports.default=m.exports},93525:function(m,R,f){var i=f(30006),l=f(16660),P=f(41442),T=f(95848);function C(x){return i(x)||l(x)||P(x)||T()}m.exports=C,m.exports.__esModule=!0,m.exports.default=m.exports}}]);
