"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[874],{12836:function(be,Y,n){n.r(Y),n.d(Y,{default:function(){return pe}});var X=n(52510),K=n.n(X),$=n(54306),A=n.n($),I=n(715),Q=n(36930),R=n(74897),L=n(36304),q=n(88384),M=n(30015),w=n(76293),_=n.p+"static/usability.ffc0027d.png",d=n(78679),W=n(30010),ee=n(57213),U=n.n(ee),ae=n(93525),H=n.n(ae),O=n(93236),p=n(89082),T=n(57350),e=n(62086),te=function(){var l=T.j0.columns.filter(function(h){return h.dataIndex==="method_name"}),a=(0,O.useMemo)(function(){return[].concat(H()(l),H()((0,p.cp)()))},[l]);return(0,e.jsx)(T.oY,{columns:a,request:function(o,j){return(0,W.l9)(U()(U()({},o),{},{sort:j}))},rowKey:function(o){return o.method_name},options:!1,pagination:{pageSize:22}})},ne=function(){return(0,e.jsx)(I.Z,{children:(0,e.jsx)(te,{})})},z=n(28062),re=n(84875),oe=n.n(re),le=n(32699),N=n.n(le),E=n(26986),G=function(l){R.history.push("/evaluation/dataset-detail?dataset_name=".concat(l))},k=function(l){R.history.push("/evaluation/method-detail?method_name=".concat(l))},V=function(l,a){R.history.push("/evaluation/method-dataset-detail?method_name=".concat(l,"&dataset_name=").concat(a))},F=function(l){var a=l.data,h=l.valueEnum,o=h===void 0?d.kW:h,j=l.showHeaderTitle,x=j===void 0?!0:j,i=Object.values(o),f=(0,z.Z)(function(u,m){var r=(0,p.Nz)(a,m),c=(0,p.MN)(r),t=(0,p.ao)(r);return{className:"custom-cell",style:{backgroundColor:(0,p.xe)(u,c,t)}}}),g=(0,O.useMemo)(function(){var u=[];if(a!=null&&a.datasets.length){var m;u=a==null||(m=a.datasets)===null||m===void 0?void 0:m.map(function(r){return{dataIndex:"dataset_name",title:(0,e.jsx)(M.Z.Link,{children:r}),key:r,children:i.map(function(c){var t=c;return{title:(0,p.r)(t,o),dataIndex:"".concat(r,"-").concat(c),align:"center",width:110,onCell:function(v){var y=v["".concat(r,"-").concat(c)],S=c;return f(y,S)},render:function(v,y){var S=v;if(N().isEqual(Object.values(o),Object.values(d.K))){var D=c,Z="".concat(r,"-").concat(d.YH[D]);S=y[Z]}if(N().isEqual(Object.values(o),Object.values(d.Fi))){var b=c,P="".concat(r,"-").concat(d.vy[b]);S=y[P]}return(0,e.jsx)("div",{id:"".concat(y.method_name,"-link-").concat(r),className:"custom-cell-render",children:(0,p.xb)(S)?E.iq:S})}}})}})}return[{dataIndex:"method_name",title:"Method Name",width:120,fixed:"left",align:"center",onCell:function(){return{className:"custom-method-cell"}},render:function(c,t){return(0,e.jsx)(M.Z.Link,{id:"".concat(t.method_name),children:c})}}].concat(H()(u))},[a==null?void 0:a.datasets,f,i,o]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T.oY,{className:oe()("table-show-container",i.length<=1?"hide-table-children-table-container":""),columns:g,options:!1,bordered:!0,ghost:!0,rowKey:function(m){return JSON.stringify(m)},dataSource:(0,p.MF)(o,a),pagination:!1,search:!1,defaultSize:"middle",onHeaderRow:function(){return{onClick:function(r){var c=r.target,t=c.innerText,s=a==null?void 0:a.datasets.find(function(v){return v===t});s&&G(s)}}},onRow:function(){return{onClick:function(r){var c=r.target,t=N().split(c.id,"-link-");if(t.length){var s=A()(t,2),v=s[0],y=s[1];y?V(v,y):v&&k(v)}}}}}),x?(0,e.jsx)(M.Z.Text,{children:"EMPTY_DESCRIPTION"}):null]})},ie=function(l){var a=l.data,h=(0,z.Z)(function(){return{className:"custom-cell"}}),o=(0,O.useMemo)(function(){var j=[];if(a!=null&&a.datasets.length){var x;j=a==null||(x=a.datasets)===null||x===void 0?void 0:x.map(function(i){return{dataIndex:"dataset_name",title:(0,e.jsx)(M.Z.Link,{children:i}),key:i,children:Object.values(d.kW).map(function(f){var g=f;return{title:(0,p.r)(g,d.kW),dataIndex:"".concat(i,"-auc"),align:"center",width:70,onCell:function(){return h()},render:function(m,r){var c=r["".concat(i,"-").concat(g)],t=(0,p.Nz)(a,g),s=(0,p.MN)(t),v=(0,p.ao)(t);return(0,e.jsx)("span",{id:"".concat(r.method_name,"-link-").concat(i),className:"custom-cell-render",children:(0,e.jsx)(T.Dh,{value:c,color:(0,p.xe)(c,s,v),id:"".concat(r.method_name,"-link-").concat(i)},"".concat(r.method_name,"-link-").concat(i))})}}})}})}return[{dataIndex:"method_name",title:"Method Name",width:120,fixed:"left",align:"center",onCell:function(){return h()},render:function(f,g){return(0,e.jsx)(M.Z.Link,{id:"".concat(g.method_name),children:f})}}].concat(H()(j))},[a,h]);return(0,e.jsx)(T.oY,{className:"shape-show-container",columns:o,options:!1,bordered:!0,rowKey:function(x){return"".concat(x.dataset_name,"-").concat(x.method_name)},dataSource:(0,p.MF)(d.kW,a),pagination:{pageSize:22},scroll:{x:1800},search:!1,defaultSize:"middle",onHeaderRow:function(){return{onClick:function(i){var f=i.target,g=f.innerText,u=a==null?void 0:a.datasets.find(function(m){return m===g});u&&G(u)}}},onRow:function(){return{style:{cursor:"pointer"},onClick:function(i){var f=i.target,g=N().split(f.id,"-link-");if(g.length){var u=A()(g,2),m=u[0],r=u[1];r?V(m,r):m&&k(m)}console.log(f.id)}}}})},se=n(20539),ue=n(80096),J=n(52914),ce=n(49863),de=n(35986),ve=n(20022),he=n(35804),Ne=n(41198),me=n(24155),fe=n(66735),xe=function(l){var a=l.data,h=a.type,o=h===void 0?"auc":h,j=a.methodName,x=a.dataSetName,i=a.value,f=a.color;return(0,e.jsxs)("div",{className:"tool-tip-container",children:[(0,e.jsxs)("div",{className:"list-item",children:[(0,e.jsx)("div",{children:"Method Name"}),(0,e.jsx)("div",{children:j||E._l})]}),(0,e.jsxs)("div",{className:"list-item",children:[(0,e.jsx)("div",{children:"Dataset Name"}),(0,e.jsx)("div",{children:x||E._l})]}),(0,e.jsxs)("div",{className:"list-item",children:[(0,e.jsx)("div",{children:o}),(0,e.jsx)("div",{children:(0,e.jsx)(fe.Z,{color:f,text:i||E._l})})]})]})},ge=function(l){var a=l.data,h=(0,O.useRef)(null),o=(0,O.useRef)(),j=(0,L.Z)(E.Tp[0].value),x=A()(j,2),i=x[0],f=x[1],g=(0,z.Z)(function(){h.current&&(o.current=he.S1(h.current))}),u=(0,O.useMemo)(function(){var t=E.Tp.find(function(s){return s.value===i});return t},[i]),m=(0,z.Z)(function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E.Tp[0].value,v=(t==null?void 0:t.methods_datasets)||[],y=[];return v.forEach(function(S){var D=N().findIndex(t==null?void 0:t.methods,function(b){return b===S.method_name}),Z=N().findIndex(t==null?void 0:t.datasets,function(b){return b===S.dataset_name});y.push([D,Z,S[s]||0])}),y}),r=(0,z.Z)(function(t,s,v){var y=t,S=A()(y,3),D=S[0],Z=S[1],b=S[2],P=s[D],B=v[Z];return{value:b,methodName:P,dataSetName:B}}),c=(0,z.Z)(function(t){var s=t.xData,v=t.yData,y=t.zData;if(o.current){var S={tooltip:{formatter:function(Z){var b=Z,P=r(b.value,s,v),B=P.methodName,De=P.dataSetName,Te=P.value,Ce=me.renderToString((0,e.jsx)(xe,{data:{methodName:B,dataSetName:De,type:u==null?void 0:u.label,value:Te,color:b.color}}));return Ce},borderColor:"#fff"},visualMap:{min:Number(N().min(y.map(function(D){return D[2]}))),max:Number(N().max(y.map(function(D){return D[2]}))),top:"20%",inRange:{color:N().cloneDeep(p.NN).reverse()}},xAxis3D:{type:"category",data:s,name:d.fW[d.A.METHOD]},yAxis3D:{type:"category",data:v,name:d.fW[d.A.DATASET]},zAxis3D:{type:"value",name:u==null?void 0:u.label},grid3D:{top:-60,boxWidth:200,boxDepth:80,viewControl:{distance:220,beta:10,alpha:2},light:{main:{intensity:1.2,shadow:!0},ambient:{intensity:.3}}},view:{distance:800},series:[{type:"bar3D",data:y.map(function(D){return{value:D}}),shading:"lambert",label:{fontSize:16,borderWidth:1},emphasis:{label:{fontSize:20,color:"#900"},itemStyle:{color:"#900"}}}]};o.current.setOption(S)}});return(0,se.Z)(function(){g()}),(0,ue.Z)(function(){o.current&&o.current.dispose()}),(0,J.Z)(function(){var t=(a==null?void 0:a.methods)||[],s=(a==null?void 0:a.datasets)||[],v=m(a,i);c({xData:t,yData:s,zData:v}),o.current&&o.current.on("click",function(y){var S=r(y.value,t,s),D=S.methodName,Z=S.dataSetName;V(D,Z)})},[a,i,o.current]),(0,J.Z)(function(){},[o.current]),(0,ce.Z)("resize",function(){o.current&&o.current.resize()}),(0,e.jsxs)("div",{children:[(0,e.jsx)(de.Z,{justify:"center",children:(0,e.jsx)(ve.ZP.Group,{options:E.Tp,value:i,optionType:"button",buttonStyle:"solid",onChange:function(s){f(s.target.value)}})}),(0,e.jsx)("div",{ref:h,className:"auc-chart-container"})]})},ye=function(l){var a=l.data,h=(0,R.useSearchParams)(),o=A()(h,1),j=o[0],x=j.get("performanceKey")||"tabShow",i=(0,L.Z)(x),f=A()(i,2),g=f[0],u=f[1],m=function(c){var t=void 0;switch(c){case"tabShow":t=(0,e.jsxs)(w.Z,{size:"large",children:[(0,e.jsx)(T.Dh.Bar,{isReverse:!0}),(0,e.jsx)(T.Dh.NA,{})]});break;case"shapeShow":t=(0,e.jsx)(T.Dh.Group,{});break}return t};return(0,e.jsx)(I.Z,{className:"no-padding-card",tabs:{activeKey:g,tabBarExtraContent:m(g),items:[{key:"tabShow",label:"TableShow",children:(0,e.jsx)(F,{data:a})},{key:"shapeShow",label:"ShapeShow",children:(0,e.jsx)(ie,{data:a})},{key:"3dShow",label:"3DShow",children:(0,e.jsx)(ge,{data:a})}],onChange:function(c){R.history.push("/evaluation?tabKey=performance&performanceKey=".concat(c)),u(c)}}})},Se=function(l){var a=l.data;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(I.Z,{title:"".concat(d.yY[d.K.TIME]," Usage"),ghost:!0,extra:(0,e.jsxs)(w.Z,{size:"large",children:[(0,e.jsx)(T.Dh.Bar,{}),(0,e.jsx)(T.Dh.NA,{})]}),headStyle:{paddingInline:0},children:(0,e.jsx)(F,{data:a,valueEnum:d.K,showHeaderTitle:!1})}),(0,e.jsx)(I.Z,{ghost:!0,title:"".concat(d.mX[d.Fi.MEMORY]," Usage"),extra:(0,e.jsxs)(w.Z,{size:"large",children:[(0,e.jsx)(T.Dh.Bar,{}),(0,e.jsx)(T.Dh.NA,{})]}),headStyle:{paddingInline:0},children:(0,e.jsx)(F,{data:a,valueEnum:d.Fi,showHeaderTitle:!1})})]})},je=function(){var l,a=(0,R.useRequest)(W.lc),h=a.data,o=a.loading,j=(0,R.useSearchParams)(),x=A()(j,1),i=x[0],f=i.get("tabKey")||d.SR.OVERALL,g=(0,L.Z)(f),u=A()(g,2),m=u[0],r=u[1],c=(l={},K()(l,d.SR.OVERALL,(0,e.jsx)(ne,{})),K()(l,d.SR.PERFORMANCE,(0,e.jsx)(ye,{data:h})),K()(l,d.SR.SCALABILITY,(0,e.jsx)(Se,{data:h})),K()(l,d.SR.USABILITY,(0,e.jsx)(I.Z,{children:(0,e.jsx)(q.Z,{src:_,preview:!1,width:"".concat(764*1.6,"px"),height:"".concat(948*1.6,"px")})})),l);return(0,e.jsx)(Q._z,{loading:o,subTitle:"Evaluating the Performance(AUC, AUPR, F1), Scalability and Usability of heterogeneous network-based drug repositioning methods",children:(0,e.jsx)(I.Z,{headerBordered:!0,title:(0,e.jsx)(M.Z.Title,{level:5,children:(0,e.jsxs)(w.Z,{size:4,children:[(0,e.jsx)("span",{children:" Our evaluation workflow is available at:"}),(0,e.jsx)(M.Z.Link,{href:"https://github.com/lyhbio/HN-DRES",target:"_blank",children:"https://github.com/lyhbio/HN-DRES"})]})}),tabs:{activeKey:m,tabPosition:"left",items:Object.keys(d.gF).map(function(t){var s=t;return{label:d.gF[s],key:s,children:c[s]}}),onChange:function(s){var v=s;R.history.push("/evaluation?tabKey=".concat(v)),r(v)}}})})},pe=je}}]);
