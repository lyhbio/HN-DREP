"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[989],{9989:function(ve,K,n){n.d(K,{y8:function(){return oe},dK:function(){return re},oY:function(){return ie},ho:function(){return de},mQ:function(){return Ze},mS:function(){return Ce},oq:function(){return Re},m5:function(){return le},j0:function(){return me},Cn:function(){return Oe},J:function(){return Ge},Le:function(){return ye},Rl:function(){return We},Dh:function(){return fe}});var V=n(25359),d=n.n(V),G=n(49811),j=n.n(G),E=n(57213),y=n.n(E),X=n(54306),L=n.n(X),O=n(74897),ne=n(84875),q=n.n(ne),ue=n(32699),ee=n.n(ue),se=n(78679),F=n(30010),Y=n(93236),t=n(62086),f=O.styled.div(function(l){return function(){var e=l.theme;return{fontSize:e.fontSizeLG,borderRight:"1px solid ".concat(e.colorBorder),paddingRight:e.marginLG,marginRight:e.marginLG}}}),D=O.styled.div(function(){return function(){return{width:"100%"}}});function T(l){var e=theme.useToken,r=e(),u=r.token,o=l.dataSource,s=o===void 0?[]:o,m=l.currentAlphName,S=l.platformType,b=useRef(null),x=useSafeState([]),v=_slicedToArray(x,2),p=v[0],g=v[1],i=useMemoizedFn(function(c){var h=[],C=[];h=c.map(function(A){return{name:A,firstLater:_.upperFirst(A).slice(0,1)}});var Z=_.groupBy(h,"firstLater");return Object.keys(Z).forEach(function(A){C.push({name:A,list:Z[A]})}),C}),I=useMemoizedFn(function(c,h,C){var Z=p.map(function(A){var R=_objectSpread({},A);return R.name===c&&(R.list=R.list.map(function(P){var w=_objectSpread({},P);return P.name===h&&(w=_objectSpread(_objectSpread({},w),C)),w})),R});g(Z)}),N=useMemoizedFn(function(){var c=_asyncToGenerator(_regeneratorRuntime().mark(function h(C){var Z,A,R;return _regeneratorRuntime().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:w.t0=S,w.next=w.t0===PlatformDataTypeEnum.METHOD?3:w.t0===PlatformDataTypeEnum.DATASET?8:13;break;case 3:return w.next=5,getMethodService({method_name:C});case 5:return A=w.sent,Z=A.data,w.abrupt("break",13);case 8:return w.next=10,getDatasetService({dataset_name:C});case 10:return R=w.sent,Z=R.data,w.abrupt("break",13);case 13:return w.abrupt("return",Z);case 14:case"end":return w.stop()}},h)}));return function(h){return c.apply(this,arguments)}}()),M=useMemoizedFn(function(){var c=_asyncToGenerator(_regeneratorRuntime().mark(function h(C,Z){return _regeneratorRuntime().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:I(C.name,Z.name,{expand:!Z.expand});case 1:case"end":return R.stop()}},h)}));return function(h,C){return c.apply(this,arguments)}}());useDeepCompareEffect(function(){g(i(s))},[s]),useDeepCompareEffect(function(){_.isNil(m)||I(_.upperFirst(m).slice(0,1),m,{active:!0,expand:!0})},[m]);var B=_jsxs("div",{className:"alph-index-container",ref:b,children:[_jsx(f,{theme:u,className:"alph-index-list",children:_jsx(Anchor,{affix:!1,direction:"vertical",items:p.map(function(c){return{key:c.name,href:"#".concat(c.name),title:c.name,className:"alph-index-item"}})})}),_jsx(D,{children:p==null?void 0:p.map(function(c){return _jsxs("div",{id:c.name,style:{marginBottom:u.margin},children:[_jsx(Typography.Title,{level:5,children:c.name}),_jsx(Row,{className:"alph-index-content",gutter:16,style:{marginBottom:u.margin},children:c.list.map(function(h){return _jsx(Col,{md:24,xl:24,xxl:12,style:{marginBottom:u.margin},children:_jsx(ProCard,{title:h.name,className:classNames(h.expand||h.active?"alph-pro-card-expand":""),headerBordered:!0,collapsible:!0,defaultCollapsed:!0,collapsed:!h.expand,onCollapse:function(Z){return console.log(Z)},extra:_jsx(RightOutlined,{className:"extra-expand-container",rotate:h.expand?90:void 0,onClick:function(){M(c,h)}}),children:h.expand?_jsx(_Fragment,{children:S===PlatformDataTypeEnum.METHOD?_jsx(MethodItem,{bordered:!1,column:1,methodName:h.name}):_jsx(DatasetItem,{bordered:!1,column:1,datasetName:h.name})}):null})},"".concat(h.name,"-").concat(c.name))})})]},c.name)})})]});return B}var a=n(26986),k=n(56954),he=n(71498),J=n(92277),oe=function(e){var r=e.dataSource;return(0,t.jsxs)(he.Z,{gutter:16,className:"mt-md",children:[(0,t.jsx)(J.Z,y()(y()({},a.f),{},{children:(0,t.jsx)(k.vY,{title:"auc",className:"comp-auc-aupr-description",bordered:!0,dataSource:r,column:1,columns:[{dataIndex:"auc",title:"auc",render:function(o){return o||a.iq}},{dataIndex:"auc_curve",title:"auc curve",render:function(o,s){return(0,t.jsx)(re,{src:s.auc_curve,width:240})}}]})})),(0,t.jsx)(J.Z,y()(y()({},a.f),{},{children:(0,t.jsx)(k.vY,{className:"comp-auc-aupr-description",bordered:!0,title:"aupr",dataSource:r,column:1,columns:[{dataIndex:"aupr",title:"aupr",render:function(o){return o||a.iq}},{dataIndex:"aupr_curve",title:"aupr curve",render:function(o,s){return(0,t.jsx)(re,{src:s.aupr_curve,width:240})}}]})})),(0,t.jsx)(J.Z,y()(y()({},a.f),{},{children:(0,t.jsx)(k.vY,{title:"F1",className:"comp-auc-aupr-description",bordered:!0,dataSource:r,column:1,columns:[{dataIndex:"f1",title:"F1",render:function(o){return o||a.iq}}]})}))]})},be=n(12342),te=n.n(be),$=n(36304),je=n(96924),pe=n(49863),z=n(52914),ge=n(59430),U=n(79364),Te=["src"],re=function(e){var r=e.src,u=te()(e,Te),o=(0,$.Z)(!1),s=L()(o,2),m=s[0],S=s[1],b=(0,$.Z)(!1),x=L()(b,2),v=x[0],p=x[1],g=(0,Y.useRef)(null),i=(0,je.Z)(function(){g.current&&(0,U.Ug)(g.current)&&S(!0)},{wait:200}),I=i.run;return(0,pe.Z)("scroll",function(){m||I()}),(0,z.Z)(function(){I()},[r]),(0,t.jsx)("div",{ref:g,children:(0,t.jsx)(ge.Z,y()({src:m?r:a.E1,width:160,height:160,preview:!v,placeholder:!0,fallback:a.E1,onError:function(){p(!0)},loading:"lazy"},u))})},Se=n(94507),we=n(45817),Ne=n(20539),Ee=["className","scroll"],ie=function(e){var r=e.className,u=e.scroll,o=u===void 0?{}:u,s=te()(e,Ee),m=(0,Y.useRef)(null),S=(0,$.Z)(0),b=L()(S,2),x=b[0],v=b[1],p=(0,we.Z)(function(){var i=m.current,I=i==null?void 0:i.querySelector(".custom-pro-table-container .ant-table-tbody");if(I){var N=I==null?void 0:I.getBoundingClientRect(),M=N.top,B=window.innerHeight||document.documentElement.clientHeight;console.log(M,B);var c=B-M-100;v(c)}},{wait:100}),g=p.run;return(0,Ne.Z)(function(){g()}),(0,pe.Z)("resize",function(){g()}),(0,t.jsx)("div",{ref:m,children:(0,t.jsx)(Se.Z,y()(y()({className:q()("custom-pro-table-container",r),search:!1,ghost:!0},s),{},{scroll:y()(y()({x:"max-content"},o),{},{y:x})}))})},Q=n(28062),H=n(3249),Ae=["dataSource","showAucApr","showMemoryTime","datasetName"],xe=[{dataIndex:"dataset_name",title:"Dataset Name",render:function(e){return e&&(0,t.jsx)(H.Z.Link,{href:"evalution/dataset-detail?dataset_name=".concat(e),children:e})}},{dataIndex:"drug_num",title:"Numbers of drug"},{dataIndex:"disease_num",title:"Numbers of disease"},{dataIndex:"drug_disease_associations",title:"Numbers of drug-disease associations"}],de=function(e){var r=e.dataSource,u=e.showAucApr,o=u===void 0?!1:u,s=e.showMemoryTime,m=s===void 0?!1:s,S=e.datasetName,b=te()(e,Ae),x=(0,$.Z)(),v=L()(x,2),p=v[0],g=v[1],i=(0,$.Z)(!1),I=L()(i,2),N=I[0],M=I[1],B=(0,Q.Z)(function(){var c=j()(d()().mark(function h(C){var Z,A;return d()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(!C){P.next=8;break}return M(!0),P.next=4,(0,F.Ur)({dataset_name:C});case 4:Z=P.sent,A=Z.data,g(A),M(!1);case 8:case"end":return P.stop()}},h)}));return function(h){return c.apply(this,arguments)}}());return(0,z.Z)(function(){(0,U.xb)(r)?(0,U.xb)(S)||B(S):g(r)},[r,S]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k.vY,y()({size:"small",column:a.eO,dataSource:p,loading:N,bordered:!0,columns:xe},b)),o?(0,t.jsx)(oe,{dataSource:r}):null,m?(0,t.jsx)(le,{dataSource:r}):null]})};de.columns=xe;var Me=n(65854),Ie=n.n(Me),Ze=function(e){var r=Object.assign({},(Ie()(e),e));return(0,t.jsx)(ie,y()({request:F.hM,columns:de.columns},r))},Ce=function(e){var r=e.dataSource,u=e.diseaseId,o=(0,$.Z)(),s=L()(o,2),m=s[0],S=s[1],b=function(){var x=j()(d()().mark(function v(p){var g,i;return d()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,(0,F.rW)(p);case 2:g=N.sent,i=g.data,S(i);case 5:case"end":return N.stop()}},v)}));return function(p){return x.apply(this,arguments)}}();return(0,z.Z)(function(){S(r)},[e.dataSource]),(0,z.Z)(function(){console.log(u,"diseaseId"),u&&b(u)},[u]),(0,t.jsx)(k.vY,{size:"small",column:a.eO,dataSource:m,bordered:!0,columns:[{dataIndex:"disease_name",title:"DiseaseName"},{dataIndex:"diseasebank_id",title:"OMIM ID"},{dataIndex:"type",title:"MeSH ID"},{dataIndex:"synonyms",title:"DO ID"},{dataIndex:"brand_names",title:"MedGen ID"},{dataIndex:"weight",title:"Synonyms"},{dataIndex:"chemical_formula",title:"Categories"},{dataIndex:"atc_codes",title:"Definition"}]})},Re=function(e){var r=e.dataSource,u=e.drugId,o=(0,$.Z)(),s=L()(o,2),m=s[0],S=s[1],b=function(){var v=j()(d()().mark(function p(g){var i,I;return d()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,(0,F.kp)(g);case 2:i=M.sent,I=i.data,S(I);case 5:case"end":return M.stop()}},p)}));return function(g){return v.apply(this,arguments)}}();(0,z.Z)(function(){S(r)},[e.dataSource]),(0,z.Z)(function(){console.log(u,"drugId"),u&&b(u)},[u]);var x=(0,Q.Z)(function(v){var p=document.getElementById("container-3d"),g={backgroundColor:"white"};if(p&&v){var i=$3Dmol.createViewer(p,g);i.addModel(v,"sdf"),i.addUnitCell(),i.setStyle({stick:{radius:.15,colorscheme:"chain"},sphere:{radius:.35}}),i.zoomTo(),i.render()}});return(0,Y.useLayoutEffect)(function(){m!=null&&m.d3_structure&&setTimeout(function(){x(m==null?void 0:m.d3_structure)},200)}),(0,t.jsx)(k.vY,{size:"small",column:a.eO,dataSource:m,bordered:!0,columns:[{dataIndex:"drug_name",title:"DrugName"},{dataIndex:"drugbank_id",title:"DrugBankID"},{dataIndex:"type",title:"Type"},{dataIndex:"synonyms",title:"Synonyms"},{dataIndex:"brand_names",title:"Brand Name"},{dataIndex:"weight",title:"Weight"},{dataIndex:"d2_structure",title:"2D Structure",render:function(p,g){var i=(0,U.xb)(g.n2d_structure)?a._l:(0,t.jsx)(ge.Z,{className:"container-2d",fallback:a.E1,src:"data:image/png;base64,".concat(g.n2d_structure)});return i}},{dataIndex:"d3_structure",title:"3D Structure",render:function(p,g){var i=(0,U.xb)(g.n3d_conformer)?a._l:(0,t.jsx)("div",{id:"container-3d"});return i}},{dataIndex:"chemical_formula",title:"Chemical Formula"},{dataIndex:"atc_codes",title:"ATC Codes"},{dataIndex:"smiles",title:"Smiles"},{dataIndex:"targets",title:"Target"}]})},le=function(e){var r=e.dataSource;return(0,t.jsxs)(he.Z,{gutter:16,className:"mt-md",children:[(0,t.jsx)(J.Z,y()(y()({},a.f),{},{children:(0,t.jsx)(k.vY,{title:"time",className:"comp-memory-time-description",bordered:!0,dataSource:r,column:1,columns:[{dataIndex:"time_human",title:"time",render:function(o){return o||a.iq}}]})})),(0,t.jsx)(J.Z,y()(y()({},a.f),{},{children:(0,t.jsx)(k.vY,{title:"memory",className:"comp-memory-time-description",bordered:!0,dataSource:r,column:1,columns:[{dataIndex:"memory_human",title:"memory",render:function(o){return o||a.iq}}]})}))]})},ae=n(78362),Le=["dataSource","showAucApr","showMemoryTime","hideEvalutionData","methodName"],ce=[{dataIndex:"method_name",title:"Method Name",fixed:"left",width:120,render:function(e){return e?(0,t.jsx)(H.Z.Link,{href:"/evalution/method-detail?method_name=".concat(e),children:e}):a._l}},{dataIndex:"languages",title:"Languages",width:100,ellipsis:!0},{dataIndex:"category",title:"Category",width:100,ellipsis:!0},{dataIndex:"algorithms",title:"Algorithms",width:100,ellipsis:!0},{dataIndex:"network",title:"Network",width:100,ellipsis:!0},{dataIndex:"overall",title:"overall",width:300,render:function(e){return(0,t.jsx)(ae.Z,{steps:10,size:15,percent:Number(e)*100,format:function(){return e}})}},{dataIndex:"performance",title:"performance",width:300,render:function(e){return(0,t.jsx)(ae.Z,{steps:10,size:15,percent:Number(e)*100,format:function(){return e}})}},{dataIndex:"scalability",title:"scalability",width:300,render:function(e){return(0,t.jsx)(ae.Z,{steps:10,size:15,percent:Number(e)*100,format:function(){return e}})}},{dataIndex:"usability",title:"usability",width:300,render:function(e){return(0,t.jsx)(ae.Z,{steps:10,size:15,percent:Number(e)*100,format:function(){return e}})}},{dataIndex:"code_address",title:"code_address",width:100,ellipsis:!0,render:function(e,r){return(0,t.jsx)(H.Z.Link,{href:r.code_address,target:"_blank",children:r.code_address})}},{dataIndex:"description",title:"description",ellipsis:!0,width:100},{dataIndex:"dataset_used",title:"dataset_used in paper",width:100,ellipsis:!0},{dataIndex:"dois",title:"dois",width:100,ellipsis:!0,render:function(e,r){return(0,t.jsx)(ye,{refAttr:"dois",value:r==null?void 0:r.ref_id,refDataSource:r==null?void 0:r.references})}},{dataIndex:"workflow",title:"workflow",fixed:"right",render:function(e,r){return(0,t.jsx)(re,{src:r.workflow})}}],me=function(e){var r=e.dataSource,u=e.showAucApr,o=u===void 0?!1:u,s=e.showMemoryTime,m=s===void 0?!1:s,S=e.hideEvalutionData,b=S===void 0?!1:S,x=e.methodName,v=te()(e,Le),p=(0,$.Z)(),g=L()(p,2),i=g[0],I=g[1],N=(0,$.Z)(!1),M=L()(N,2),B=M[0],c=M[1],h=Object.values(se.SR),C=(0,Y.useMemo)(function(){var A=ce;return b&&(A=ce.filter(function(R){return!h.includes(R.dataIndex)})),A},[h,b]),Z=(0,Q.Z)(function(){var A=j()(d()().mark(function R(P){var w,_e;return d()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:if(!P){W.next=8;break}return c(!0),W.next=4,(0,F.HR)({method_name:P});case 4:w=W.sent,_e=w.data,I(_e),c(!1);case 8:case"end":return W.stop()}},R)}));return function(R){return A.apply(this,arguments)}}());return(0,z.Z)(function(){(0,U.xb)(r)?(0,U.xb)(x)||Z(x):I(r)},[r,x]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k.vY,y()({bordered:!0,size:"small",loading:B,column:a.eO,dataSource:i,columns:C},v)),o?(0,t.jsx)(oe,{dataSource:r}):null,m?(0,t.jsx)(le,{dataSource:r}):null]})};me.columns=ce;var Oe=function(e){var r=Object.assign({},(Ie()(e),e));return(0,t.jsx)(ie,y()({request:F.l9,columns:me.columns},r))},Pe=n(95859),$e=Pe.Z.useToken,Be=O.styled.div(function(l){return function(){var e=l.theme;return{border:"1px solid ".concat(e.colorBorder),height:"400px",overflowY:"auto",padding:e.margin}}}),Fe=O.styled.div(function(l){return function(){var e=l.theme,r=l.itemType;return{color:r==="selected"?e.colorPrimary:e.colorText,marginBottom:e.marginXS,cursor:"pointer"}}}),Ke=function(e){var r=$e(),u=r.token,o=e.dataSource,s=o===void 0?[]:o,m=e.onSelected,S=useSafeState(),b=_slicedToArray(S,2),x=b[0],v=b[1],p=useMemoizedFn(function(i){v(i),_.isFunction(m)&&m(i)}),g=useMemo(function(){var i=s.map(function(I){var N={label:"",value:""};return _.isObject(I)?N=I:N={label:I,value:I},N});return i},[s]);return _jsx(Be,{theme:u,children:g.map(function(i){return _jsx(Fe,{onClick:function(){p(i)},theme:u,itemType:(x==null?void 0:x.value)===i.value?"selected":"",children:i.label},i.value)})})},ke=n(93525),ze=n.n(ke),Ue=n(78956),Ge=function(e){var r=e.dataset_name,u=e.method_name,o=e.methods,s=e.datasets,m=(0,$.Z)(),S=L()(m,2),b=S[0],x=S[1],v=(0,$.Z)(),p=L()(v,2),g=p[0],i=p[1],I=(o==null?void 0:o.map(function(c){return c.method_name}))||(s==null?void 0:s.map(function(c){return c.dataset_name}))||[],N=["ALL"].concat(ze()(I)),M=(0,Y.useMemo)(function(){return[{dataIndex:"drugbank_id",title:"DrugBankID"},{dataIndex:"drug_name",title:"DrugName"},{dataIndex:"disease_id",title:"DiseaseID"},{dataIndex:"disease_name",title:"DiseaseName"},{dataIndex:"score",title:"Score"}]},[]),B=(0,Q.Z)(function(c){var h=c==="ALL"?void 0:c;o!=null&&o.length&&i(h),s!=null&&s.length&&x(h)});return(0,z.Z)(function(){x(r)},[r]),(0,z.Z)(function(){i(u)},[u]),(0,t.jsxs)(t.Fragment,{children:[I&&I.length?(0,t.jsx)(Ue.Z,{onChange:B,items:N.map(function(c){return{key:c,label:c}})}):null,(0,t.jsx)(Se.Z,{request:F.cB,params:{dataset_name:b,method_name:g},rowKey:function(h){return"".concat(h.drug_name,"-").concat(h.drugbank_id,"-").concat(h.disease_id)},columns:M,options:!1,search:!1})]})},Ye=n(55048),ye=function(e){var r=e.value,u=e.refDataSource,o=e.refAttr,s=o===void 0?"ref_id":o,m=ee().findIndex(u,function(x){return x.ref_id===r}),S=ee().find(u,function(x){return x.ref_id===r}),b=function(){var v=null;if(!(0,U.xb)(r)&&r)switch(s){case"ref_id":v=(0,t.jsx)(Ye.Z,{direction:"horizontal",items:[{key:r,href:"#".concat(r),title:(0,t.jsx)(H.Z.Text,{className:"link-text",children:"\u3010".concat(m+1,"\u3011")})}]});break;default:v=S?S[s]:null}return v||a._l};return b()},He=n(78374),De=n(95699),We=function(e){var r=e.dataSource,u=r===void 0?[]:r;return(0,t.jsx)(He.Z,{dataSource:u,renderItem:function(s,m){return(0,t.jsx)("div",{id:s.ref_id,className:"mb-md",children:(0,t.jsxs)(De.Z,{size:4,children:[(0,t.jsx)(H.Z.Text,{children:"\u3010".concat(m+1,"\u3011")}),(0,t.jsx)(H.Z.Link,{href:s.url,target:"_blank",strong:!0,children:s.title})]})})}})},fe=function(e){var r=e.value,u=r===void 0?0:r,o=e.color,s=e.showValue,m=s===void 0?!1:s,S=e.id,b=(0,U.xe)(Number(u)),x=(0,Q.Z)(function(v){var p="shape-value-circle-container";return v&&Number(v)>.8&&Number(v)<1?p="shape-value-oval-container":Number(v)>=1&&(p="shape-value-square-container"),p});return(0,t.jsxs)("div",{className:"shape-value-parent-container",id:S,children:[(0,t.jsx)("div",{id:S,style:{width:"".concat(Number(u)*20,"px"),height:"".concat(Number(u)*20,"px"),backgroundColor:o||b},className:q()("shape-value-container",x(u))}),m?(0,t.jsx)("div",{className:"shape-value-text",children:u}):null]})};fe.Group=function(){var l=Array.from({length:10},function(r,u){return u+1}),e=(0,t.jsx)(De.Z,{size:16,children:l.map(function(r){var u=r/10;return(0,t.jsx)(fe,{value:u,showValue:!0},r)})});return e}},78679:function(ve,K,n){n.d(K,{A:function(){return E},SR:function(){return y},fW:function(){return X},gF:function(){return L}});var V=n(52510),d=n.n(V),G,j,E;(function(O){O.METHOD="method",O.DATASET="dataset"})(E||(E={}));var y;(function(O){O.OVERALL="overall",O.SCALABILITY="scalability",O.USABILITY="usability",O.PERFORMANCE="performance"})(y||(y={}));var X=(G={},d()(G,E.METHOD,"Method_Name"),d()(G,E.DATASET,"Dataset_Name"),G),L=(j={},d()(j,y.OVERALL,"Overall"),d()(j,y.SCALABILITY,"Scalability"),d()(j,y.USABILITY,"Usability"),d()(j,y.PERFORMANCE,"Performance"),j)},30010:function(ve,K,n){n.d(K,{HR:function(){return X},Ur:function(){return y},X:function(){return q},bY:function(){return ne},cB:function(){return O},dt:function(){return ue},hM:function(){return Y},kp:function(){return ee},l9:function(){return F},lc:function(){return L},rW:function(){return se}});var V=n(25359),d=n.n(V),G=n(49811),j=n.n(G),E=n(74897),y=function(){var t=j()(d()().mark(function f(D){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/v1/dataset",{method:"GET",params:D}));case 1:case"end":return a.stop()}},f)}));return function(D){return t.apply(this,arguments)}}(),X=function(){var t=j()(d()().mark(function f(D){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/v1/method",{method:"GET",params:D}));case 1:case"end":return a.stop()}},f)}));return function(D){return t.apply(this,arguments)}}(),L=function(){var t=j()(d()().mark(function f(){return d()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",(0,E.request)("/v1/method-dataset",{method:"GET"}));case 1:case"end":return T.stop()}},f)}));return function(){return t.apply(this,arguments)}}(),O=function(){var t=j()(d()().mark(function f(D){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/v1/search",{method:"GET",params:D}));case 1:case"end":return a.stop()}},f)}));return function(D){return t.apply(this,arguments)}}(),ne=function(){var t=j()(d()().mark(function f(D){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/v1/drug/suggest",{method:"GET",params:D}));case 1:case"end":return a.stop()}},f)}));return function(D){return t.apply(this,arguments)}}(),q=function(){var t=j()(d()().mark(function f(D){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/v1/disease/suggest",{method:"GET",params:D}));case 1:case"end":return a.stop()}},f)}));return function(D){return t.apply(this,arguments)}}(),ue=function(){var t=j()(d()().mark(function f(D){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/v1/statistics",{method:"GET",params:D}));case 1:case"end":return a.stop()}},f)}));return function(D){return t.apply(this,arguments)}}(),ee=function(){var t=j()(d()().mark(function f(D){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/v1/drug/".concat(D)));case 1:case"end":return a.stop()}},f)}));return function(D){return t.apply(this,arguments)}}(),se=function(){var t=j()(d()().mark(function f(D){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.request)("/v1/disease/".concat(D)));case 1:case"end":return a.stop()}},f)}));return function(D){return t.apply(this,arguments)}}(),F=function(){var t=j()(d()().mark(function f(){return d()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",(0,E.request)("/v1/methods"));case 1:case"end":return T.stop()}},f)}));return function(){return t.apply(this,arguments)}}(),Y=function(){var t=j()(d()().mark(function f(){return d()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",(0,E.request)("/v1/datasets"));case 1:case"end":return T.stop()}},f)}));return function(){return t.apply(this,arguments)}}()}}]);
