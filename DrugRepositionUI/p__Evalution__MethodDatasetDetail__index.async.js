"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[556],{69440:function(p,n,r){r.r(n);var c=r(54306),m=r.n(c),o=r(36930),l=r(715),M=r(74897),D=r(29235),i=r(96031),O=r(30010),E=r(98432),u=r(62086),_=function(){var C,j,R,S,A=(0,M.useSearchParams)(),d=m()(A,1),t=d[0],a=t.get("dataset_name")||"LAGCN",s=t.get("method_name")||"ANMF",f=(0,D.Z)(function(){return(0,O.HR)({dataset_name:a,method_name:s})}),g=f.data,P=f.loading,e=g==null?void 0:g.data;return(0,u.jsxs)(o._z,{loading:P,backIcon:(0,u.jsx)(E.Z,{}),onBack:M.history.back,title:"".concat(s," Performence ON ").concat(a),children:[(0,u.jsx)(l.Z,{className:"mb-md",title:"Method_info",bordered:!0,headerBordered:!0,extra:(0,u.jsx)(i.Le,{value:e==null?void 0:e.ref_id,refDataSource:e==null?void 0:e.references}),children:(0,u.jsx)(i.j0,{dataSource:e})}),(0,u.jsx)(l.Z,{className:"mb-md",title:"Dataset_info",bordered:!0,headerBordered:!0,extra:(0,u.jsx)(i.Le,{value:e!=null&&(C=e.datasets)!==null&&C!==void 0&&C.length?e==null?void 0:e.datasets[0].ref_id:void 0,refDataSource:e==null?void 0:e.references}),children:(0,u.jsx)(i.ho,{dataSource:e!=null&&(j=e.datasets)!==null&&j!==void 0&&j.length?e==null?void 0:e.datasets[0]:void 0})}),(0,u.jsx)(l.Z,{className:"mb-md",title:"Perfermence_result",bordered:!0,headerBordered:!0,children:(0,u.jsx)(i.y8,{dataSource:e!=null&&(R=e.datasets)!==null&&R!==void 0&&R.length?e==null?void 0:e.datasets[0]:void 0})}),(0,u.jsx)(l.Z,{title:"Method predict result",className:"mb-md",headerBordered:!0,children:(0,u.jsx)(i.J,{dataset_name:a,method_name:s})}),e!=null&&(S=e.references)!==null&&S!==void 0&&S.length?(0,u.jsx)(l.Z,{children:(0,u.jsx)(i.Rl,{dataSource:e==null?void 0:e.references})}):null]})};n.default=_},97361:function(p,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=r;function r(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},84174:function(p,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=r;function r(c,m){if(!c)return!1;if(c.contains)return c.contains(m);for(var o=m;o;){if(o===c)return!0;o=o.parentNode}return!1}},50517:function(p,n,r){var c=r(37019).default;Object.defineProperty(n,"__esModule",{value:!0}),n.clearContainerCache=S,n.injectCSS=h,n.removeCSS=j,n.updateCSS=A;var m=c(r(97361)),o=c(r(84174)),l="data-rc-order",M="data-rc-priority",D="rc-util-key",i=new Map;function O(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=d.mark;return t?t.startsWith("data-")?t:"data-".concat(t):D}function E(d){if(d.attachTo)return d.attachTo;var t=document.querySelector("head");return t||document.body}function u(d){return d==="queue"?"prependQueue":d?"prepend":"append"}function _(d){return Array.from((i.get(d)||d).children).filter(function(t){return t.tagName==="STYLE"})}function h(d){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(0,m.default)())return null;var a=t.csp,s=t.prepend,f=t.priority,g=f===void 0?0:f,P=u(s),e=P==="prependQueue",v=document.createElement("style");v.setAttribute(l,P),e&&g&&v.setAttribute(M,"".concat(g)),a!=null&&a.nonce&&(v.nonce=a==null?void 0:a.nonce),v.innerHTML=d;var b=E(t),T=b.firstChild;if(s){if(e){var y=_(b).filter(function(N){if(!["prepend","prependQueue"].includes(N.getAttribute(l)))return!1;var I=Number(N.getAttribute(M)||0);return g>=I});if(y.length)return b.insertBefore(v,y[y.length-1].nextSibling),v}b.insertBefore(v,T)}else b.appendChild(v);return v}function C(d){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=E(t);return _(a).find(function(s){return s.getAttribute(O(t))===d})}function j(d){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=C(d,t);if(a){var s=E(t);s.removeChild(a)}}function R(d,t){var a=i.get(d);if(!a||!(0,o.default)(document,a)){var s=h("",t),f=s.parentNode;i.set(d,f),d.removeChild(s)}}function S(){i.clear()}function A(d,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=E(a);R(s,a);var f=C(t,a);if(f){var g,P;if((g=a.csp)!==null&&g!==void 0&&g.nonce&&f.nonce!==((P=a.csp)===null||P===void 0?void 0:P.nonce)){var e;f.nonce=(e=a.csp)===null||e===void 0?void 0:e.nonce}return f.innerHTML!==d&&(f.innerHTML=d),f}var v=h(d,a);return v.setAttribute(O(a),t),v}},29038:function(p,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getShadowRoot=m,n.inShadow=c;function r(o){var l;return o==null||(l=o.getRootNode)===null||l===void 0?void 0:l.call(o)}function c(o){return r(o)instanceof ShadowRoot}function m(o){return c(o)?r(o):null}},99504:function(p,n){Object.defineProperty(n,"__esModule",{value:!0}),n.call=D,n.default=void 0,n.note=l,n.noteOnce=O,n.preMessage=void 0,n.resetWarned=M,n.warning=o,n.warningOnce=i;var r={},c=[],m=function(_){c.push(_)};n.preMessage=m;function o(u,_){if(!1)var h}function l(u,_){if(!1)var h}function M(){r={}}function D(u,_,h){!_&&!r[h]&&(u(!1,h),r[h]=!0)}function i(u,_){D(o,u,_)}function O(u,_){D(l,u,_)}i.preMessage=m,i.resetWarned=M,i.noteOnce=O;var E=i;n.default=E}}]);
