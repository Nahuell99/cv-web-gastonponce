var A={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H;function ee(){if(H)return r;H=1;var l=Symbol.for("react.element"),p=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),R=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),P=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,V={};function v(e,t,n){this.props=e,this.context=t,this.refs=V,this.updater=n||q}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function D(){}D.prototype=v.prototype;function j(e,t,n){this.props=e,this.context=t,this.refs=V,this.updater=n||q}var I=j.prototype=new D;I.constructor=j,T(I,v.prototype),I.isPureReactComponent=!0;var N=Array.isArray,U=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function G(e,t,n){var u,o={},i=null,a=null;if(t!=null)for(u in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)U.call(t,u)&&!F.hasOwnProperty(u)&&(o[u]=t[u]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),y=0;y<s;y++)c[y]=arguments[y+2];o.children=c}if(e&&e.defaultProps)for(u in s=e.defaultProps,s)o[u]===void 0&&(o[u]=s[u]);return{$$typeof:l,type:e,key:i,ref:a,props:o,_owner:O.current}}function Q(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function L(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function X(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var z=/\/+/g;function M(e,t){return typeof e=="object"&&e!==null&&e.key!=null?X(""+e.key):t.toString(36)}function S(e,t,n,u,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case l:case p:a=!0}}if(a)return a=e,o=o(a),e=u===""?"."+M(a,0):u,N(o)?(n="",e!=null&&(n=e.replace(z,"$&/")+"/"),S(o,t,n,"",function(y){return y})):o!=null&&(L(o)&&(o=Q(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(z,"$&/")+"/")+e)),t.push(o)),1;if(a=0,u=u===""?".":u+":",N(e))for(var s=0;s<e.length;s++){i=e[s];var c=u+M(i,s);a+=S(i,t,n,c,o)}else if(c=J(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=u+M(i,s++),a+=S(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function b(e,t,n){if(e==null)return e;var u=[],o=0;return S(e,u,"","",function(i){return t.call(n,i,o++)}),u}function Y(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var f={current:null},x={transition:null},Z={ReactCurrentDispatcher:f,ReactCurrentBatchConfig:x,ReactCurrentOwner:O};function B(){throw Error("act(...) is not supported in production builds of React.")}return r.Children={map:b,forEach:function(e,t,n){b(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return b(e,function(){t++}),t},toArray:function(e){return b(e,function(t){return t})||[]},only:function(e){if(!L(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=v,r.Fragment=d,r.Profiler=_,r.PureComponent=j,r.StrictMode=h,r.Suspense=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,r.act=B,r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=T({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=O.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)U.call(t,c)&&!F.hasOwnProperty(c)&&(u[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)u.children=n;else if(1<c){s=Array(c);for(var y=0;y<c;y++)s[y]=arguments[y+2];u.children=s}return{$$typeof:l,type:e.type,key:o,ref:i,props:u,_owner:a}},r.createContext=function(e){return e={$$typeof:R,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:m,_context:e},e.Consumer=e},r.createElement=G,r.createFactory=function(e){var t=G.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:E,render:e}},r.isValidElement=L,r.lazy=function(e){return{$$typeof:$,_payload:{_status:-1,_result:e},_init:Y}},r.memo=function(e,t){return{$$typeof:C,type:e,compare:t===void 0?null:t}},r.startTransition=function(e){var t=x.transition;x.transition={};try{e()}finally{x.transition=t}},r.unstable_act=B,r.useCallback=function(e,t){return f.current.useCallback(e,t)},r.useContext=function(e){return f.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return f.current.useDeferredValue(e)},r.useEffect=function(e,t){return f.current.useEffect(e,t)},r.useId=function(){return f.current.useId()},r.useImperativeHandle=function(e,t,n){return f.current.useImperativeHandle(e,t,n)},r.useInsertionEffect=function(e,t){return f.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return f.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return f.current.useMemo(e,t)},r.useReducer=function(e,t,n){return f.current.useReducer(e,t,n)},r.useRef=function(e){return f.current.useRef(e)},r.useState=function(e){return f.current.useState(e)},r.useSyncExternalStore=function(e,t,n){return f.current.useSyncExternalStore(e,t,n)},r.useTransition=function(){return f.current.useTransition()},r.version="18.3.1",r}var W;function te(){return W||(W=1,A.exports=ee()),A.exports}var k=te();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),K=(...l)=>l.filter((p,d,h)=>!!p&&p.trim()!==""&&h.indexOf(p)===d).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ne={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=k.forwardRef(({color:l="currentColor",size:p=24,strokeWidth:d=2,absoluteStrokeWidth:h,className:_="",children:m,iconNode:R,...E},g)=>k.createElement("svg",{ref:g,...ne,width:p,height:p,stroke:l,strokeWidth:h?Number(d)*24/Number(p):d,className:K("lucide",_),...E},[...R.map(([C,$])=>k.createElement(C,$)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(l,p)=>{const d=k.forwardRef(({className:h,..._},m)=>k.createElement(oe,{ref:m,iconNode:p,className:K(`lucide-${re(l)}`,h),..._}));return d.displayName=`${l}`,d};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=w("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=w("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=w("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=w("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=w("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);export{ue as G,ie as I,se as L,ae as M,k as a,ce as b,te as r};
