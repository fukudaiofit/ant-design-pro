(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[619],{8212:function(ae,N,r){"use strict";r.d(N,{Z:function(){return E}});var d=r(28991),u=r(67294),e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},V=e,Z=r(27029),v=function(W,ne){return u.createElement(Z.Z,(0,d.Z)((0,d.Z)({},W),{},{ref:ne,icon:V}))};v.displayName="EditOutlined";var E=u.forwardRef(v)},70347:function(){},47828:function(){},91894:function(ae,N,r){"use strict";r.d(N,{Z:function(){return st}});var d=r(22122),u=r(96156),e=r(67294),V=r(94184),Z=r.n(V),v=r(53124),E=function(i,y){var C={};for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&y.indexOf(c)<0&&(C[c]=i[c]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,c=Object.getOwnPropertySymbols(i);p<c.length;p++)y.indexOf(c[p])<0&&Object.prototype.propertyIsEnumerable.call(i,c[p])&&(C[c[p]]=i[c[p]]);return C},D=function(y){var C=y.prefixCls,c=y.className,p=y.hoverable,le=p===void 0?!0:p,oe=E(y,["prefixCls","className","hoverable"]);return e.createElement(v.C,null,function(ie){var me=ie.getPrefixCls,ge=me("card",C),X=Z()("".concat(ge,"-grid"),c,(0,u.Z)({},"".concat(ge,"-grid-hoverable"),le));return e.createElement("div",(0,d.Z)({},oe,{className:X}))})},W=D,ne=function(i,y){var C={};for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&y.indexOf(c)<0&&(C[c]=i[c]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,c=Object.getOwnPropertySymbols(i);p<c.length;p++)y.indexOf(c[p])<0&&Object.prototype.propertyIsEnumerable.call(i,c[p])&&(C[c[p]]=i[c[p]]);return C},pe=function(y){return e.createElement(v.C,null,function(C){var c=C.getPrefixCls,p=y.prefixCls,le=y.className,oe=y.avatar,ie=y.title,me=y.description,ge=ne(y,["prefixCls","className","avatar","title","description"]),X=c("card",p),Ne=Z()("".concat(X,"-meta"),le),Oe=oe?e.createElement("div",{className:"".concat(X,"-meta-avatar")},oe):null,Se=ie?e.createElement("div",{className:"".concat(X,"-meta-title")},ie):null,Le=me?e.createElement("div",{className:"".concat(X,"-meta-description")},me):null,De=Se||Le?e.createElement("div",{className:"".concat(X,"-meta-detail")},Se,Le):null;return e.createElement("div",(0,d.Z)({},ge,{className:Ne}),Oe,De)})},Q=pe,h=r(98423),re=r(51752),P=r(97647),k=r(33860),ye=function(i,y){var C={};for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&y.indexOf(c)<0&&(C[c]=i[c]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,c=Object.getOwnPropertySymbols(i);p<c.length;p++)y.indexOf(c[p])<0&&Object.prototype.propertyIsEnumerable.call(i,c[p])&&(C[c[p]]=i[c[p]]);return C};function ot(i){var y=i.map(function(C,c){return e.createElement("li",{style:{width:"".concat(100/i.length,"%")},key:"action-".concat(c)},e.createElement("span",null,C))});return y}var it=e.forwardRef(function(i,y){var C,c,p=e.useContext(v.E_),le=p.getPrefixCls,oe=p.direction,ie=e.useContext(P.Z),me=function(Ke){var se;(se=i.onTabChange)===null||se===void 0||se.call(i,Ke)},ge=function(){var Ke;return e.Children.forEach(i.children,function(se){se&&se.type&&se.type===W&&(Ke=!0)}),Ke},X=i.prefixCls,Ne=i.className,Oe=i.extra,Se=i.headStyle,Le=Se===void 0?{}:Se,De=i.bodyStyle,ut=De===void 0?{}:De,Ze=i.title,Je=i.loading,We=i.bordered,dt=We===void 0?!0:We,Ve=i.size,Qe=i.type,Pe=i.cover,we=i.actions,ce=i.tabList,ke=i.children,Xe=i.activeTabKey,ft=i.defaultActiveTabKey,vt=i.tabBarExtraContent,pt=i.hoverable,Ye=i.tabProps,yt=Ye===void 0?{}:Ye,Ie=ye(i,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),R=le("card",X),mt=e.createElement(k.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},ke),_e=Xe!==void 0,Ae=(0,d.Z)((0,d.Z)({},yt),(C={},(0,u.Z)(C,_e?"activeKey":"defaultActiveKey",_e?Xe:ft),(0,u.Z)(C,"tabBarExtraContent",vt),C)),qe,et=ce&&ce.length?e.createElement(re.Z,(0,d.Z)({size:"large"},Ae,{className:"".concat(R,"-head-tabs"),onChange:me}),ce.map(function(Re){return e.createElement(re.Z.TabPane,{tab:Re.tab,disabled:Re.disabled,key:Re.key})})):null;(Ze||Oe||et)&&(qe=e.createElement("div",{className:"".concat(R,"-head"),style:Le},e.createElement("div",{className:"".concat(R,"-head-wrapper")},Ze&&e.createElement("div",{className:"".concat(R,"-head-title")},Ze),Oe&&e.createElement("div",{className:"".concat(R,"-extra")},Oe)),et));var gt=Pe?e.createElement("div",{className:"".concat(R,"-cover")},Pe):null,Et=e.createElement("div",{className:"".concat(R,"-body"),style:ut},Je?mt:ke),Ct=we&&we.length?e.createElement("ul",{className:"".concat(R,"-actions")},ot(we)):null,ht=(0,h.Z)(Ie,["onTabChange"]),tt=Ve||ie,bt=Z()(R,(c={},(0,u.Z)(c,"".concat(R,"-loading"),Je),(0,u.Z)(c,"".concat(R,"-bordered"),dt),(0,u.Z)(c,"".concat(R,"-hoverable"),pt),(0,u.Z)(c,"".concat(R,"-contain-grid"),ge()),(0,u.Z)(c,"".concat(R,"-contain-tabs"),ce&&ce.length),(0,u.Z)(c,"".concat(R,"-").concat(tt),tt),(0,u.Z)(c,"".concat(R,"-type-").concat(Qe),!!Qe),(0,u.Z)(c,"".concat(R,"-rtl"),oe==="rtl"),c),Ne);return e.createElement("div",(0,d.Z)({ref:y},ht,{className:bt}),qe,gt,Et,Ct)}),ct=it,Ue=ct;Ue.Grid=W,Ue.Meta=Q;var st=Ue},58024:function(ae,N,r){"use strict";var d=r(38663),u=r.n(d),e=r(70347),V=r.n(e),Z=r(18106),v=r(71748)},97272:function(ae,N,r){"use strict";r.d(N,{Z:function(){return Ht}});var d=r(22122),u=r(96156),e=r(67294),V=r(94184),Z=r.n(V),v=r(42550),E=r(53124),D=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l},W=function(n,l){var a=n.prefixCls,o=n.component,g=o===void 0?"article":o,x=n.className,b=n["aria-label"],$=n.setContentRef,j=n.children,w=D(n,["prefixCls","component","className","aria-label","setContentRef","children"]),G=e.useContext(E.E_),F=G.getPrefixCls,ee=G.direction,L=l;$&&(L=(0,v.sQ)(l,$));var Y=g,J=F("typography",a),T=Z()(J,(0,u.Z)({},"".concat(J,"-rtl"),ee==="rtl"),x);return e.createElement(Y,(0,d.Z)({className:T,"aria-label":b,ref:L},w),j)},ne=e.forwardRef(W);ne.displayName="Typography";var pe=ne,Q=pe,h=r(90484),re=r(98423),P=r(28481),k=r(76632),ye=r(50344),ot=r(20640),it=r.n(ot),ct=r(8212),Ue=r(79508),st=r(99165),i=r(48717),y=r(8410),C=r(42051),c=r(34952),p=r(79370),le=r(61580),oe=r(15105),ie=r(28991),me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},ge=me,X=r(27029),Ne=function(n,l){return e.createElement(X.Z,(0,ie.Z)((0,ie.Z)({},n),{},{ref:l,icon:ge}))};Ne.displayName="EnterOutlined";var Oe=e.forwardRef(Ne),Se=r(94418),Le=r(96159),De=function(n){var l=n.prefixCls,a=n["aria-label"],o=n.className,g=n.style,x=n.direction,b=n.maxLength,$=n.autoSize,j=$===void 0?!0:$,w=n.value,G=n.onSave,F=n.onCancel,ee=n.onEnd,L=n.component,Y=n.enterIcon,J=Y===void 0?e.createElement(Oe,null):Y,T=e.useRef(),B=e.useRef(!1),te=e.useRef(),I=e.useState(w),Te=(0,P.Z)(I,2),ue=Te[0],Me=Te[1];e.useEffect(function(){Me(w)},[w]),e.useEffect(function(){if(T.current&&T.current.resizableTextArea){var S=T.current.resizableTextArea.textArea;S.focus();var M=S.value.length;S.setSelectionRange(M,M)}},[]);var Ee=function(M){var K=M.target;Me(K.value.replace(/[\n\r]/g,""))},O=function(){B.current=!0},_=function(){B.current=!1},q=function(M){var K=M.keyCode;B.current||(te.current=K)},Ce=function(){G(ue.trim())},$e=function(M){var K=M.keyCode,Ge=M.ctrlKey,Be=M.altKey,de=M.metaKey,z=M.shiftKey;te.current===K&&!B.current&&!Ge&&!Be&&!de&&!z&&(K===oe.Z.ENTER?(Ce(),ee==null||ee()):K===oe.Z.ESC&&F())},he=function(){Ce()},je=L?"".concat(l,"-").concat(L):"",A=Z()(l,"".concat(l,"-edit-content"),(0,u.Z)({},"".concat(l,"-rtl"),x==="rtl"),o,je);return e.createElement("div",{className:A,style:g},e.createElement(Se.Z,{ref:T,maxLength:b,value:ue,onChange:Ee,onKeyDown:q,onKeyUp:$e,onCompositionStart:O,onCompositionEnd:_,onBlur:he,"aria-label":a,rows:1,autoSize:j}),J!==null?(0,Le.Tm)(J,{className:"".concat(l,"-edit-content-confirm")}):null)},ut=De;function Ze(t,n){return e.useMemo(function(){var l=!!t;return[l,(0,d.Z)((0,d.Z)({},n),l&&(0,h.Z)(t)==="object"?t:null)]},[t])}var Je=function(t,n){var l=e.useRef(!1);e.useEffect(function(){l.current?t():l.current=!0},n)};function We(t){var n=(0,h.Z)(t);return n==="string"||n==="number"}function dt(t){var n=0;return t.forEach(function(l){We(l)?n+=String(l).length:n+=1}),n}function Ve(t,n){for(var l=0,a=[],o=0;o<t.length;o+=1){if(l===n)return a;var g=t[o],x=We(g),b=x?String(g).length:1,$=l+b;if($>n){var j=n-l;return a.push(String(g).slice(0,j)),a}a.push(g),l=$}return t}var Qe=0,Pe=1,we=2,ce=3,ke=4,Xe=function(n){var l=n.enabledMeasure,a=n.children,o=n.text,g=n.width,x=n.rows,b=n.onEllipsis,$=e.useState([0,0,0]),j=(0,P.Z)($,2),w=j[0],G=j[1],F=e.useState(Qe),ee=(0,P.Z)(F,2),L=ee[0],Y=ee[1],J=(0,P.Z)(w,3),T=J[0],B=J[1],te=J[2],I=e.useState(0),Te=(0,P.Z)(I,2),ue=Te[0],Me=Te[1],Ee=e.useRef(null),O=e.useRef(null),_=e.useMemo(function(){return(0,ye.Z)(o)},[o]),q=e.useMemo(function(){return dt(_)},[_]),Ce=e.useMemo(function(){return!l||L!==ce?a(_,!1):a(Ve(_,B),B<q)},[l,L,a,_,B,q]);(0,y.Z)(function(){l&&g&&q&&(Y(Pe),G([0,Math.ceil(q/2),q]))},[l,g,o,q,x]),(0,y.Z)(function(){var A;L===Pe&&Me(((A=Ee.current)===null||A===void 0?void 0:A.offsetHeight)||0)},[L]),(0,y.Z)(function(){var A,S;if(ue){if(L===Pe){var M=((A=O.current)===null||A===void 0?void 0:A.offsetHeight)||0,K=x*ue;M<=K?(Y(ke),b(!1)):Y(we)}else if(L===we)if(T!==te){var Ge=((S=O.current)===null||S===void 0?void 0:S.offsetHeight)||0,Be=x*ue,de=T,z=te;T===te-1?z=T:Ge<=Be?de=B:z=B;var xt=Math.ceil((de+z)/2);G([de,xt,z])}else Y(ce),b(!0)}},[L,T,te,x,ue]);var $e={width:g,whiteSpace:"normal",margin:0,padding:0},he=function(S,M,K){return e.createElement("span",{"aria-hidden":!0,ref:M,style:(0,d.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},K)},S)},je=function(S,M){var K=Ve(_,S);return he(a(K,!0),M,$e)};return e.createElement(e.Fragment,null,Ce,l&&L!==ce&&L!==ke&&e.createElement(e.Fragment,null,he("lg",Ee,{wordBreak:"keep-all",whiteSpace:"nowrap"}),L===Pe?he(a(_,!1),O,$e):je(B,O)))},ft=Xe,vt=function(n){var l=n.title,a=n.enabledEllipsis,o=n.isEllipsis,g=n.children;return!l||!a?g:e.createElement(le.Z,{title:l,visible:o?void 0:!1},g)},pt=vt,Ye=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l};function yt(t,n){var l=t.mark,a=t.code,o=t.underline,g=t.delete,x=t.strong,b=t.keyboard,$=t.italic,j=n;function w(G,F){!G||(j=e.createElement(F,{},j))}return w(x,"strong"),w(o,"u"),w(g,"del"),w(a,"code"),w(l,"mark"),w(b,"kbd"),w($,"i"),j}function Ie(t,n,l){return t===!0||t===void 0?n:t||l&&n}function R(t){return Array.isArray(t)?t:[t]}var mt="...",_e=e.forwardRef(function(t,n){var l=t.prefixCls,a=t.className,o=t.style,g=t.type,x=t.disabled,b=t.children,$=t.ellipsis,j=t.editable,w=t.copyable,G=t.component,F=t.title,ee=Ye(t,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),L=e.useContext(E.E_),Y=L.getPrefixCls,J=L.direction,T=(0,C.E)("Text")[0],B=e.useRef(null),te=e.useRef(null),I=Y("typography",l),Te=(0,re.Z)(ee,["mark","code","delete","underline","strong","keyboard","italic"]),ue=Ze(j),Me=(0,P.Z)(ue,2),Ee=Me[0],O=Me[1],_=(0,k.Z)(!1,{value:O.editing}),q=(0,P.Z)(_,2),Ce=q[0],$e=q[1],he=O.triggerType,je=he===void 0?["icon"]:he,A=function(s){var f;s&&((f=O.onStart)===null||f===void 0||f.call(O)),$e(s)};Je(function(){var m;Ce||(m=te.current)===null||m===void 0||m.focus()},[Ce]);var S=function(s){s==null||s.preventDefault(),A(!0)},M=function(s){var f;(f=O.onChange)===null||f===void 0||f.call(O,s),A(!1)},K=function(){var s;(s=O.onCancel)===null||s===void 0||s.call(O),A(!1)},Ge=Ze(w),Be=(0,P.Z)(Ge,2),de=Be[0],z=Be[1],xt=e.useState(!1),Ot=(0,P.Z)(xt,2),at=Ot[0],St=Ot[1],Zt=e.useRef(),Pt={};z.format&&(Pt.format=z.format);var Rt=function(){clearTimeout(Zt.current)},Gt=function(s){var f;s==null||s.preventDefault(),s==null||s.stopPropagation(),it()(z.text||String(b)||"",Pt),St(!0),Rt(),Zt.current=setTimeout(function(){St(!1)},3e3),(f=z.onCopy)===null||f===void 0||f.call(z,s)};e.useEffect(function(){return Rt},[]);var Ft=e.useState(!1),Tt=(0,P.Z)(Ft,2),Mt=Tt[0],Jt=Tt[1],Vt=e.useState(!1),Nt=(0,P.Z)(Vt,2),Lt=Nt[0],Qt=Nt[1],Xt=e.useState(!1),Dt=(0,P.Z)(Xt,2),Yt=Dt[0],_t=Dt[1],qt=e.useState(!1),wt=(0,P.Z)(qt,2),It=wt[0],ea=wt[1],ta=e.useState(!1),At=(0,P.Z)(ta,2),Kt=At[0],aa=At[1],na=Ze($,{expandable:!1}),$t=(0,P.Z)(na,2),be=$t[0],U=$t[1],fe=be&&!Yt,jt=U.rows,ze=jt===void 0?1:jt,nt=e.useMemo(function(){return!fe||U.suffix!==void 0||U.onEllipsis||U.expandable||Ee||de},[fe,U,Ee,de]);(0,y.Z)(function(){be&&!nt&&(Jt((0,p.G)("webkitLineClamp")),Qt((0,p.G)("textOverflow")))},[nt,be]);var ve=e.useMemo(function(){return nt?!1:ze===1?Lt:Mt},[nt,Lt,Mt]),Bt=fe&&(ve?Kt:It),ra=fe&&ze===1&&ve,rt=fe&&ze>1&&ve,la=function(s){var f;_t(!0),(f=U.onExpand)===null||f===void 0||f.call(U,s)},oa=e.useState(0),zt=(0,P.Z)(oa,2),ia=zt[0],ca=zt[1],sa=function(s){var f=s.offsetWidth;ca(f)},ua=function(s){var f;ea(s),It!==s&&((f=U.onEllipsis)===null||f===void 0||f.call(U,s))};e.useEffect(function(){var m=B.current;if(be&&ve&&m){var s=rt?m.offsetHeight<m.scrollHeight:m.offsetWidth<m.scrollWidth;Kt!==s&&aa(s)}},[be,ve,b,rt]);var lt=U.tooltip===!0?b:U.tooltip,Ut=e.useMemo(function(){var m=function(f){return["string","number"].includes((0,h.Z)(f))};if(!(!be||ve)){if(m(b))return b;if(m(F))return F;if(m(lt))return lt}},[be,ve,F,lt,Bt]);if(Ce)return e.createElement(ut,{value:typeof b=="string"?b:"",onSave:M,onCancel:K,onEnd:O.onEnd,prefixCls:I,className:a,style:o,direction:J,component:G,maxLength:O.maxLength,autoSize:O.autoSize,enterIcon:O.enterIcon});var da=function(){var s=U.expandable,f=U.symbol;if(!s)return null;var H;return f?H=f:H=T.expand,e.createElement("a",{key:"expand",className:"".concat(I,"-expand"),onClick:la,"aria-label":T.expand},H)},fa=function(){if(!!Ee){var s=O.icon,f=O.tooltip,H=(0,ye.Z)(f)[0]||T.edit,xe=typeof H=="string"?H:"";return je.includes("icon")?e.createElement(le.Z,{key:"edit",title:f===!1?"":H},e.createElement(c.Z,{ref:te,className:"".concat(I,"-edit"),onClick:S,"aria-label":xe},s||e.createElement(ct.Z,{role:"button"}))):null}},va=function(){if(!!de){var s=z.tooltips,f=z.icon,H=R(s),xe=R(f),Fe=at?Ie(H[1],T.copied):Ie(H[0],T.copy),ma=at?T.copied:T.copy,ga=typeof Fe=="string"?Fe:ma;return e.createElement(le.Z,{key:"copy",title:Fe},e.createElement(c.Z,{className:Z()("".concat(I,"-copy"),at&&"".concat(I,"-copy-success")),onClick:Gt,"aria-label":ga},at?Ie(xe[1],e.createElement(Ue.Z,null),!0):Ie(xe[0],e.createElement(st.Z,null),!0)))}},pa=function(s){return[s&&da(),fa(),va()]},ya=function(s){return[s&&e.createElement("span",{"aria-hidden":!0,key:"ellipsis"},mt),U.suffix,pa(s)]};return e.createElement(i.Z,{onResize:sa,disabled:!fe||ve},function(m){var s;return e.createElement(pt,{title:lt,enabledEllipsis:fe,isEllipsis:Bt},e.createElement(Q,(0,d.Z)({className:Z()((s={},(0,u.Z)(s,"".concat(I,"-").concat(g),g),(0,u.Z)(s,"".concat(I,"-disabled"),x),(0,u.Z)(s,"".concat(I,"-ellipsis"),be),(0,u.Z)(s,"".concat(I,"-single-line"),fe&&ze===1),(0,u.Z)(s,"".concat(I,"-ellipsis-single-line"),ra),(0,u.Z)(s,"".concat(I,"-ellipsis-multiple-line"),rt),s),a),style:(0,d.Z)((0,d.Z)({},o),{WebkitLineClamp:rt?ze:void 0}),component:G,ref:(0,v.sQ)(m,B,n),direction:J,onClick:je.includes("text")?S:null,"aria-label":Ut,title:F},Te),e.createElement(ft,{enabledMeasure:fe&&!ve,text:b,rows:ze,width:ia,onEllipsis:ua},function(f,H){var xe=f;f.length&&H&&Ut&&(xe=e.createElement("span",{key:"show-content","aria-hidden":!0},xe));var Fe=yt(t,e.createElement(e.Fragment,null,xe,ya(H)));return Fe})))})}),Ae=_e,qe=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l},et=function(n,l){var a=n.ellipsis,o=qe(n,["ellipsis"]),g=e.useMemo(function(){return a&&(0,h.Z)(a)==="object"?(0,re.Z)(a,["expandable","rows"]):a},[a]);return e.createElement(Ae,(0,d.Z)({ref:l},o,{ellipsis:g,component:"span"}))},gt=e.forwardRef(et),Et=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l},Ct=function(n,l){var a=n.ellipsis,o=n.rel,g=Et(n,["ellipsis","rel"]),x=e.useRef(null);e.useImperativeHandle(l,function(){return x.current});var b=(0,d.Z)((0,d.Z)({},g),{rel:o===void 0&&g.target==="_blank"?"noopener noreferrer":o});return delete b.navigate,e.createElement(Ae,(0,d.Z)({},b,{ref:x,ellipsis:!!a,component:"a"}))},ht=e.forwardRef(Ct),tt=r(93355),bt=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l},Re=(0,tt.a)(1,2,3,4,5),Ke=function(n,l){var a=n.level,o=a===void 0?1:a,g=bt(n,["level"]),x;return Re.indexOf(o)!==-1?x="h".concat(o):x="h1",e.createElement(Ae,(0,d.Z)({ref:l},g,{component:x}))},se=e.forwardRef(Ke),Wt=function(n,l){return e.createElement(Ae,(0,d.Z)({ref:l},n,{component:"div"}))},kt=e.forwardRef(Wt),He=Q;He.Text=gt,He.Link=ht,He.Title=se,He.Paragraph=kt;var Ht=He},402:function(ae,N,r){"use strict";var d=r(38663),u=r.n(d),e=r(47828),V=r.n(e),Z=r(22385),v=r(47673)},20640:function(ae,N,r){"use strict";var d=r(11742),u={"text/plain":"Text","text/html":"Url",default:"Text"},e="Copy to clipboard: #{key}, Enter";function V(v){var E=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return v.replace(/#{\s*key\s*}/g,E)}function Z(v,E){var D,W,ne,pe,Q,h,re=!1;E||(E={}),D=E.debug||!1;try{ne=d(),pe=document.createRange(),Q=document.getSelection(),h=document.createElement("span"),h.textContent=v,h.style.all="unset",h.style.position="fixed",h.style.top=0,h.style.clip="rect(0, 0, 0, 0)",h.style.whiteSpace="pre",h.style.webkitUserSelect="text",h.style.MozUserSelect="text",h.style.msUserSelect="text",h.style.userSelect="text",h.addEventListener("copy",function(k){if(k.stopPropagation(),E.format)if(k.preventDefault(),typeof k.clipboardData=="undefined"){D&&console.warn("unable to use e.clipboardData"),D&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var ye=u[E.format]||u.default;window.clipboardData.setData(ye,v)}else k.clipboardData.clearData(),k.clipboardData.setData(E.format,v);E.onCopy&&(k.preventDefault(),E.onCopy(k.clipboardData))}),document.body.appendChild(h),pe.selectNodeContents(h),Q.addRange(pe);var P=document.execCommand("copy");if(!P)throw new Error("copy command was unsuccessful");re=!0}catch(k){D&&console.error("unable to copy using execCommand: ",k),D&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(E.format||"text",v),E.onCopy&&E.onCopy(window.clipboardData),re=!0}catch(ye){D&&console.error("unable to copy using clipboardData: ",ye),D&&console.error("falling back to prompt"),W=V("message"in E?E.message:e),window.prompt(W,v)}}finally{Q&&(typeof Q.removeRange=="function"?Q.removeRange(pe):Q.removeAllRanges()),h&&document.body.removeChild(h),ne()}return re}ae.exports=Z},79370:function(ae,N,r){"use strict";r.d(N,{G:function(){return V}});var d=r(98924),u=function(v){if((0,d.Z)()&&window.document.documentElement){var E=Array.isArray(v)?v:[v],D=window.document.documentElement;return E.some(function(W){return W in D.style})}return!1},e=function(v,E){if(!u(v))return!1;var D=document.createElement("div"),W=D.style[v];return D.style[v]=E,D.style[v]!==W};function V(Z,v){return!Array.isArray(Z)&&v!==void 0?e(Z,v):u(Z)}},11742:function(ae){ae.exports=function(){var N=document.getSelection();if(!N.rangeCount)return function(){};for(var r=document.activeElement,d=[],u=0;u<N.rangeCount;u++)d.push(N.getRangeAt(u));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return N.removeAllRanges(),function(){N.type==="Caret"&&N.removeAllRanges(),N.rangeCount||d.forEach(function(e){N.addRange(e)}),r&&r.focus()}}}}]);
