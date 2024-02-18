"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34],{63777:function(z,t,e){e.r(t),e.d(t,{default:function(){return Ne}});var c=e(93525),j=e.n(c),u=e(25359),C=e.n(u),E=e(57213),O=e.n(E),y=e(49811),H=e.n(y),T=e(54306),s=e.n(T),f=e(52510),v=e.n(f),Q=e(36930),V=e(715),k=e(32487),Y=e(74897),N=e(36304),i=e(90181),a=e(28062),o=e(45817),h=e(52914),m=e(80096),D=e(20022),R=e(85800),x=e(51511),g=e(49144),M=e(76293),q=e(52787),b=e(93236),L=e(89082),W=e(57350),d=e(78679),ee=e(30010),Oe=e(26986),De=e(79101),Pe=e(31807),ne=e(35986),ae=e(30015),Ae=e(32699),te=e.n(Ae),r=e(62086),Te=function(U){var B=U.onClear,$=U.text;return(0,r.jsxs)(ne.Z,{justify:"space-between",children:[(0,r.jsxs)(M.Z,{children:[(0,r.jsx)(De.Z,{style:{fontSize:"16px"}}),(0,r.jsxs)(ae.Z.Text,{children:["Search For: ",$||Oe._l]})]}),(0,r.jsx)(Pe.Z,{style:{fontSize:"16px"},onClick:function(w){w.stopPropagation(),te().isFunction(B)&&B()}})]})},Re=e(68921),xe=function(U){var B=U.onClear;return(0,r.jsxs)(ne.Z,{justify:"space-between",align:"middle",className:"mb-xs",children:[(0,r.jsx)(ae.Z.Link,{style:{fontSize:"16px"},children:"Recent"}),(0,r.jsx)(Re.ZP,{type:"primary",ghost:!0,onClick:function(){te().isFunction(B)&&B()},children:"clear all"})]})},X,J,Me="SEARCH_HISTORY_CACHE",re=(X={},v()(X,d.rZ.disease,[]),v()(X,d.rZ.drug,[]),X),Ee=(J={},v()(J,d.rZ.drug,[{id:"DB00006",name:"Bivalirudin",key:"DB00006"},{id:"DB00006",name:"Bivalirudin",key:"Bivalirudin"}]),v()(J,d.rZ.disease,[{id:"100300",name:"ADAMS-OLIVER SYNDROME 1; AOS1",key:"100300"},{id:"D014983",name:"Xeroderma Pigmentosum",key:"D014983"},{id:"C0004096",name:"Asthma",key:"C0004096"}]),J),He=function(){var U=(0,Y.useSearchParams)(),B=s()(U,1),$=B[0],oe=(0,N.Z)(""),w=s()(oe,2),P=w[0],ue=w[1],Le=(0,N.Z)(!1),se=s()(Le,2),Be=se[0],de=se[1],Ie=(0,i.Z)(Me,{defaultValue:re}),le=s()(Ie,2),ce=le[0],Z=ce===void 0?re:ce,fe=le[1],Fe=$.get("type")||d.rZ.drug,be=(0,N.Z)(Fe),ve=s()(be,2),S=ve[0],Ue=ve[1],ze=(0,N.Z)([]),ge=s()(ze,2),G=ge[0],Ye=ge[1],We=(0,N.Z)(!1),he=s()(We,2),me=he[0],Se=he[1],Ge=(0,a.Z)(function(n){ue(n)}),Ke=(0,a.Z)(function(n){Y.history.push("/predict?type=".concat(n.target.value)),Ue(n.target.value),ue("")}),_=(0,a.Z)(function(n){Y.history.push("/predict/detail?type=".concat(S,"&id=").concat(n.value,"&name=").concat(n.label))}),Ce=(0,a.Z)(function(n,l){var p=function(I){Z[d.rZ[n]].includes(I)||Z[d.rZ[n]].unshift(I)};Z[d.rZ[n]]&&(Z[d.rZ[n]].length<10||Z[d.rZ[n]].pop(),p(l)),fe(Z)}),Qe=(0,o.Z)(function(){var n=H()(C()().mark(function l(p,K){var I,pe,je;return C()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(I=[],Se(!0),p!==d.rZ.drug){A.next=7;break}return A.next=5,(0,ee.bY)({keywords:K});case 5:pe=A.sent,I=pe.data.map(function(F){return O()(O()({},F),{},{label:F.drug_name,value:F.drugbank_id})});case 7:if(p!==d.rZ.disease){A.next=12;break}return A.next=10,(0,ee.X)({keywords:K});case 10:je=A.sent,I=je.data.map(function(F){return O()(O()({},F),{},{label:F.disease_name,value:F.disease_id})});case 12:Se(!1),Ye(I);case 14:case"end":return A.stop()}},l)}));return function(l,p){return n.apply(this,arguments)}}(),{wait:500}),Ve=Qe.run,ye=(0,a.Z)(function(){G.length===1?_(G[0]):de(!0),Ce(S,P)}),Xe=(0,b.useMemo)(function(){return W.oq.drugCommonColumns},[]),Je=(0,b.useMemo)(function(){return j()(W.mS.diseaseIdsColumns)},[]),Ze=(0,a.Z)(function(n,l){(0,L.xb)(l)?Z[n]=[]:Z[n]=Z[n].filter(function(p){return p!==l}),fe(O()({},Z))});return(0,h.Z)(function(){(0,L.xb)(P)||Ve(S,P),Be&&de(!1)},[P,S]),(0,m.Z)(function(){(0,L.xb)(P)||Ce(S,P)}),(0,r.jsxs)(Q._z,{subTitle:"Predicting drug-disease associations by integrating all evaluated methods",children:[(0,r.jsx)(V.Z,{title:"Quick Search",bordered:!0,headerBordered:!0,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mb-md",children:(0,r.jsxs)(D.ZP.Group,{buttonStyle:"solid",value:S,onChange:Ke,children:[(0,r.jsx)(D.ZP.Button,{value:d.rZ.drug,children:"Drug"}),(0,r.jsx)(D.ZP.Button,{value:d.rZ.disease,children:"Disease"})]})}),(0,r.jsx)(R.Z,{spinning:me,children:(0,r.jsx)("div",{children:(0,r.jsx)(x.Z,{style:{width:"50%"},onChange:Ge,value:P,options:Z[d.rZ[S]].length>0?[{label:(0,r.jsx)(xe,{onClear:function(){Ze(S)}}),options:Z[d.rZ[S]].map(function(n,l){return{label:(0,r.jsx)(Te,{onClear:function(){Ze(S,n)},text:n}),key:l,value:n}})}]:[],onSelect:function(l){var p=G.find(function(K){return K.value===l});p&&_(p)},onKeyUp:function(l){l.keyCode===13&&ye()},children:(0,r.jsx)(g.Z.Search,{size:"large",allowClear:!0,placeholder:S===d.rZ.drug?"search for DrugBank ID or Drug name (EX: DB00006 or Bivalirudin)":"search for MeSH ID / OMIM ID / DO ID / MedGen ID / Disease name / Synonyms",enterButton:!0,onSearch:ye})})})}),(0,r.jsxs)(M.Z,{className:"mt-xl",children:["Try",Ee[S].map(function(n){return(0,r.jsx)("div",{style:{cursor:"pointer",fontSize:"14px",backgroundColor:"#D6E3F6",color:"#006eff",padding:"4px 10px",borderRadius:"4px"},onClick:function(){_({label:n.name,value:n.id})},children:n.key},n.key)})]})]})}),(0,L.xb)(P)?null:(0,r.jsx)(V.Z,{title:"Search Suggest",bordered:!0,headerBordered:!0,className:"mt-md",loading:me?(0,r.jsx)(k.uk,{type:"list"}):null,children:G.length>=1?(0,r.jsx)(W.oY,{customSticky:!1,search:!1,options:!1,pagination:{pageSize:16,showSizeChanger:!1,hideOnSinglePage:!0},rowKey:function(l){return JSON.stringify(l)},dataSource:G,columns:S===d.rZ.drug?Xe:Je}):(0,r.jsx)(q.ZP,{status:"warning",title:"Sorry",subTitle:'We could not find anything in the Platform database that matches "'.concat(P,'"')})})]})},Ne=He},97361:function(z,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},84174:function(z,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=e;function e(c,j){if(!c)return!1;if(c.contains)return c.contains(j);for(var u=j;u;){if(u===c)return!0;u=u.parentNode}return!1}},50517:function(z,t,e){var c=e(37019).default;Object.defineProperty(t,"__esModule",{value:!0}),t.clearContainerCache=Y,t.injectCSS=v,t.removeCSS=V,t.updateCSS=N;var j=c(e(97361)),u=c(e(84174)),C="data-rc-order",E="data-rc-priority",O="rc-util-key",y=new Map;function H(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=i.mark;return a?a.startsWith("data-")?a:"data-".concat(a):O}function T(i){if(i.attachTo)return i.attachTo;var a=document.querySelector("head");return a||document.body}function s(i){return i==="queue"?"prependQueue":i?"prepend":"append"}function f(i){return Array.from((y.get(i)||i).children).filter(function(a){return a.tagName==="STYLE"})}function v(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(0,j.default)())return null;var o=a.csp,h=a.prepend,m=a.priority,D=m===void 0?0:m,R=s(h),x=R==="prependQueue",g=document.createElement("style");g.setAttribute(C,R),x&&D&&g.setAttribute(E,"".concat(D)),o!=null&&o.nonce&&(g.nonce=o==null?void 0:o.nonce),g.innerHTML=i;var M=T(a),q=M.firstChild;if(h){if(x){var b=f(M).filter(function(L){if(!["prepend","prependQueue"].includes(L.getAttribute(C)))return!1;var W=Number(L.getAttribute(E)||0);return D>=W});if(b.length)return M.insertBefore(g,b[b.length-1].nextSibling),g}M.insertBefore(g,q)}else M.appendChild(g);return g}function Q(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=T(a);return f(o).find(function(h){return h.getAttribute(H(a))===i})}function V(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=Q(i,a);if(o){var h=T(a);h.removeChild(o)}}function k(i,a){var o=y.get(i);if(!o||!(0,u.default)(document,o)){var h=v("",a),m=h.parentNode;y.set(i,m),i.removeChild(h)}}function Y(){y.clear()}function N(i,a){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},h=T(o);k(h,o);var m=Q(a,o);if(m){var D,R;if((D=o.csp)!==null&&D!==void 0&&D.nonce&&m.nonce!==((R=o.csp)===null||R===void 0?void 0:R.nonce)){var x;m.nonce=(x=o.csp)===null||x===void 0?void 0:x.nonce}return m.innerHTML!==i&&(m.innerHTML=i),m}var g=v(i,o);return g.setAttribute(H(o),a),g}},29038:function(z,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getShadowRoot=j,t.inShadow=c;function e(u){var C;return u==null||(C=u.getRootNode)===null||C===void 0?void 0:C.call(u)}function c(u){return e(u)instanceof ShadowRoot}function j(u){return c(u)?e(u):null}},99504:function(z,t){Object.defineProperty(t,"__esModule",{value:!0}),t.call=O,t.default=void 0,t.note=C,t.noteOnce=H,t.preMessage=void 0,t.resetWarned=E,t.warning=u,t.warningOnce=y;var e={},c=[],j=function(f){c.push(f)};t.preMessage=j;function u(s,f){if(!1)var v}function C(s,f){if(!1)var v}function E(){e={}}function O(s,f,v){!f&&!e[v]&&(s(!1,v),e[v]=!0)}function y(s,f){O(u,s,f)}function H(s,f){O(C,s,f)}y.preMessage=j,y.resetWarned=E,y.noteOnce=H;var T=y;t.default=T}}]);