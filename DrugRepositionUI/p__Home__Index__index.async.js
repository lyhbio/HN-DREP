"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[678],{44525:function(he,A,u){u.r(A),u.d(A,{default:function(){return ue}});var W=u(54306),Z=u.n(W),Y=u(23436),L=u(30847),U=u(29235),E=u(36304),B=u(30010),K=u(74381),J=u(93525),V=u.n(J),Q=u(57213),H=u.n(Q),C=u(28062),X=u(32699),I=u.n(X),z=u(93236),w=u(11412),R=u(79364),O=function(x){K.history.push("/home/dataset-detail?dataset_name=".concat(x))},F=function(x){K.history.push("/home/method-detail?method_name=".concat(x))},P=function(x,t){K.history.push("/home/method-dataset-detail?method_name=".concat(x,"&dataset_name=").concat(t))},l=u(62086),$=function(x){var t=x.data,p=(0,C.Z)(function(o){var d=(o==null?void 0:o.methods)||[],n=(o==null?void 0:o.datasets)||[],i=(o==null?void 0:o.methods_datasets)||[],e=[];return d.forEach(function(a){var s=i.filter(function(r){return r.method_name===a}),h={};n.forEach(function(r){var c=s.find(function(m){return m.dataset_name===r}),D="".concat(r,"-auc"),g="".concat(r,"-aupr"),f="".concat(r,"-f1");h[D]=c==null?void 0:c.auc,h[g]=c==null?void 0:c.aupr,h[f]=c==null?void 0:c.f1}),e.push(H()({method_name:a},h))}),e.sort(),e}),v=(0,C.Z)(function(){return{className:"custom-cell"}}),S=(0,z.useMemo)(function(){var o=[];if(t!=null&&t.datasets.length){var d;o=t==null||(d=t.datasets)===null||d===void 0?void 0:d.map(function(n){return{dataIndex:"dataset_name",title:n,key:n,children:[{title:"auc",dataIndex:"".concat(n,"-auc"),align:"center",width:70,onCell:function(){return v()},render:function(e,a){var s=a["".concat(n,"-auc")];return(0,l.jsx)("span",{id:"".concat(a.method_name,"-link-").concat(n),children:(0,l.jsx)(w.Dh,{value:s,color:(0,R.xe)(s),id:"".concat(a.method_name,"-link-").concat(n)})})}},{title:"aupr",dataIndex:"".concat(n,"-aupr"),align:"center",width:70,onCell:function(){return v()},render:function(e,a){var s=a["".concat(n,"-aupr")];return(0,l.jsx)("span",{id:"".concat(a.method_name,"-link-").concat(n),children:(0,l.jsx)(w.Dh,{value:s,color:(0,R.xe)(s)})})}},{title:"F1",dataIndex:"".concat(n,"-f1"),align:"center",width:70,onCell:function(){return v()},render:function(e,a){var s=a["".concat(n,"-f1")];return(0,l.jsx)("span",{id:"".concat(a.method_name,"-link-").concat(n),children:(0,l.jsx)(w.Dh,{value:s,color:(0,R.xe)(s)})})}}]}})}return[{dataIndex:"method_name",title:"Method_Name",width:120,fixed:"left",onCell:function(){return v()},render:function(i,e){return(0,l.jsx)("div",{id:"".concat(e.method_name),children:i})}}].concat(V()(o))},[t==null?void 0:t.datasets,v]);return(0,l.jsx)(w.oY,{className:"shape-show-container",columns:S,options:!1,bordered:!0,rowKey:function(d){return"".concat(d.dataset_name,"-").concat(d.method_name)},dataSource:p(t),headerTitle:(0,l.jsx)(w.Dh.Group,{}),pagination:{pageSize:22},scroll:{x:1800},search:!1,defaultSize:"middle",onHeaderRow:function(){return{onClick:function(n){var i=n.target,e=i.innerText,a=t==null?void 0:t.datasets.find(function(s){return s===e});a&&O(a)}}},onRow:function(){return{onClick:function(n){console.log(n,"wwww");var i=n.target,e=I().split(i.id,"-link-");if(e.length){var a=Z()(e,2),s=a[0],h=a[1];h?P(s,h):s&&F(s)}console.log(i.id)}}}})},y=u(26986),k=function(x){var t=x.data,p=(0,C.Z)(function(o){var d=(o==null?void 0:o.methods)||[],n=(o==null?void 0:o.datasets)||[],i=(o==null?void 0:o.methods_datasets)||[],e=[];return d.forEach(function(a){var s=i.filter(function(r){return r.method_name===a}),h={};n.forEach(function(r){var c=s.find(function(m){return m.dataset_name===r}),D="".concat(r,"-auc"),g="".concat(r,"-aupr"),f="".concat(r,"-f1");h[D]=c==null?void 0:c.auc,h[g]=c==null?void 0:c.aupr,h[f]=c==null?void 0:c.f1}),e.push(H()({method_name:a},h))}),e.sort(),e}),v=(0,C.Z)(function(o){return{className:"custom-cell",style:{backgroundColor:(0,R.xe)(o)}}}),S=(0,z.useMemo)(function(){var o=[];if(t!=null&&t.datasets.length){var d;o=t==null||(d=t.datasets)===null||d===void 0?void 0:d.map(function(n){return{dataIndex:"dataset_name",title:n,key:n,children:[{title:"auc",dataIndex:"".concat(n,"-auc"),align:"center",width:70,onCell:function(e){var a=e["".concat(n,"-auc")];return v(a)},render:function(e,a){return(0,l.jsx)("div",{id:"".concat(a.method_name,"-link-").concat(n),children:e!==y._l?e:y.iq})}},{title:"aupr",dataIndex:"".concat(n,"-aupr"),align:"center",width:70,onCell:function(e){var a=e["".concat(n,"-aupr")];return v(a)},render:function(e,a){return(0,l.jsx)("div",{id:"".concat(a.method_name,"-link-").concat(n),children:e!==y._l?e:y.iq})}},{title:"F1",dataIndex:"".concat(n,"-f1"),align:"center",width:70,onCell:function(e){var a=e["".concat(n,"-f1")];return v(a)},render:function(e,a){return(0,l.jsx)("div",{id:"".concat(a.method_name,"-link-").concat(n),children:e!==y._l?e:y.iq})}}]}})}return[{dataIndex:"method_name",title:"Method_Name",width:120,fixed:"left",onCell:function(){return{className:"custom-method-cell"}},render:function(i,e){return(0,l.jsx)("div",{id:"".concat(e.method_name),children:i})}}].concat(V()(o))},[t==null?void 0:t.datasets,v]);return(0,l.jsx)(w.oY,{className:"table-show-container",columns:S,options:!1,bordered:!0,rowKey:function(d){return"".concat(d.dataset_name,"-").concat(d.method_name)},dataSource:p(t),pagination:{pageSize:22},scroll:{x:1800,y:356},search:!1,defaultSize:"middle",onHeaderRow:function(){return{onClick:function(n){var i=n.target,e=i.innerText,a=t==null?void 0:t.datasets.find(function(s){return s===e});a&&O(a)}}},onRow:function(){return{onClick:function(n){var i=n.target,e=I().split(i.id,"-link-");if(e.length){var a=Z()(e,2),s=a[0],h=a[1];h?P(s,h):s&&F(s)}}}}})},q=u(20539),_=u(80096),G=u(52914),ee=u(49863),ne=u(58642),te=u(13464),ae=u(35804),fe=u(41198),oe=u(24155),re=u(43125),le=function(x){var t=x.data,p=t.type,v=p===void 0?"auc":p,S=t.methodName,o=t.dataSetName,d=t.value,n=t.color;return(0,l.jsxs)("div",{className:"tool-tip-container",children:[(0,l.jsxs)("div",{className:"list-item",children:[(0,l.jsx)("div",{children:"Method Name"}),(0,l.jsx)("div",{children:S||y._l})]}),(0,l.jsxs)("div",{className:"list-item",children:[(0,l.jsx)("div",{children:"Dataset Name"}),(0,l.jsx)("div",{children:o||y._l})]}),(0,l.jsxs)("div",{className:"list-item",children:[(0,l.jsx)("div",{children:v}),(0,l.jsx)("div",{children:(0,l.jsx)(re.Z,{color:n,text:d||y._l})})]})]})},ie=function(x){var t=x.data,p=(0,z.useRef)(null),v=(0,z.useRef)(),S=(0,E.Z)(y.Tp[0].value),o=Z()(S,2),d=o[0],n=o[1],i=(0,C.Z)(function(){p.current&&(v.current=ae.S1(p.current))}),e=(0,z.useMemo)(function(){var r=y.Tp.find(function(c){return c.value===d});return r},[d]),a=(0,C.Z)(function(r){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:y.Tp[0].value,D=(r==null?void 0:r.methods_datasets)||[],g=[];return D.forEach(function(f){var m=I().findIndex(r==null?void 0:r.methods,function(j){return j===f.method_name}),M=I().findIndex(r==null?void 0:r.datasets,function(j){return j===f.dataset_name});g.push([m,M,f[c]||0])}),g}),s=(0,C.Z)(function(r,c,D){var g=r,f=Z()(g,3),m=f[0],M=f[1],j=f[2],b=c[m],N=D[M];return{value:j,methodName:b,dataSetName:N}}),h=(0,C.Z)(function(r){var c=r.xData,D=r.yData,g=r.zData;if(v.current){var f={tooltip:{formatter:function(M){var j=M,b=s(j.value,c,D),N=b.methodName,de=b.dataSetName,se=b.value,ve=oe.renderToString((0,l.jsx)(le,{data:{methodName:N,dataSetName:de,type:e==null?void 0:e.label,value:se,color:j.color}}));return ve},borderColor:"#fff"},visualMap:{min:Number(I().min(g.map(function(m){return m[2]}))),max:Number(I().max(g.map(function(m){return m[2]}))),inRange:{color:R.NN}},xAxis3D:{type:"category",data:c,name:"Method_Name"},yAxis3D:{type:"category",data:D,name:"Dataset_Name"},zAxis3D:{type:"value",name:e==null?void 0:e.label},grid3D:{boxWidth:200,boxDepth:80,viewControl:{distance:220,beta:10,alpha:2},light:{main:{intensity:1.2,shadow:!0},ambient:{intensity:.3}}},view:{distance:800},series:[{type:"bar3D",data:g.map(function(m){return{value:m}}),shading:"lambert",label:{fontSize:16,borderWidth:1},emphasis:{label:{fontSize:20,color:"#900"},itemStyle:{color:"#900"}}}]};v.current.setOption(f)}});return(0,q.Z)(function(){i()}),(0,_.Z)(function(){v.current&&v.current.dispose()}),(0,G.Z)(function(){var r=(t==null?void 0:t.methods)||[],c=(t==null?void 0:t.datasets)||[],D=a(t,d);h({xData:r,yData:c,zData:D}),v.current&&v.current.on("click",function(g){console.log(g,"qqq");var f=s(g.value,r,c),m=f.methodName,M=f.dataSetName;P(m,M)})},[t,d,v.current]),(0,G.Z)(function(){},[v.current]),(0,ee.Z)("resize",function(){v.current&&v.current.resize()}),(0,l.jsxs)("div",{children:[(0,l.jsx)(ne.Z,{justify:"center",children:(0,l.jsx)(te.ZP.Group,{options:y.Tp,value:d,optionType:"button",buttonStyle:"solid",onChange:function(c){n(c.target.value)}})}),(0,l.jsx)("div",{ref:p,className:"auc-chart-container"})]})},ce=function(){var x=(0,K.useSearchParams)(),t=Z()(x,1),p=t[0],v=p.get("tabKey")||"tabShow",S=(0,U.Z)(B.lc),o=S.data,d=S.loading,n=(0,E.Z)(v),i=Z()(n,2),e=i[0],a=i[1],s=o==null?void 0:o.data;return(0,l.jsx)(Y._z,{loading:d,children:(0,l.jsx)(L.Z,{className:"no-padding-card",tabs:{activeKey:e,items:[{key:"tabShow",label:"TableShow",children:(0,l.jsx)(k,{data:s})},{key:"shapeShow",label:"ShapeShow",children:(0,l.jsx)($,{data:s})},{key:"3dShow",label:"3DShow",children:(0,l.jsx)(ie,{data:s})}],onChange:function(r){K.history.push("/home?tabKey=".concat(r)),a(r)}}})})},ue=ce}}]);
