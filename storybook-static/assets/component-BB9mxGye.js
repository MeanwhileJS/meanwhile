import{j as L}from"./jsx-runtime-DBEcOq3S.js";import{r,R as yt}from"./index-DtJulBIN.js";import{_ as T}from"./extends-CF3RwP-h.js";import{r as Qe,w as Ct}from"./index-BqTDQIm7.js";import{a as wt,_ as G,b as xt}from"./tslib.es6-DxypUvgU.js";import{c as St,a as Rt,f as Nt,z as Pt,s as kt,b as Dt,e as Ot,h as It}from"./index-Ba7Bx0Xc.js";import{c as W}from"./utils-B06rK7pa.js";import"./component-fJfiw3LJ.js";import{c as Tt}from"./createLucideIcon-uFt_cLfz.js";/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=Tt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var Be=1,_t=.9,Ft=.8,Lt=.17,he=.1,be=.999,Mt=.9999,Ut=.99,Bt=/[\\\/_+.#"@\[\(\{&]/,Vt=/[\\\/_+.#"@\[\(\{&]/g,jt=/[\s-]/,et=/[\s-]/g;function xe(e,n,t,o,a,c,i){if(c===n.length)return a===e.length?Be:Ut;var l=`${a},${c}`;if(i[l]!==void 0)return i[l];for(var f=o.charAt(c),u=t.indexOf(f,a),d=0,m,$,h,w;u>=0;)m=xe(e,n,t,o,u+1,c+1,i),m>d&&(u===a?m*=Be:Bt.test(e.charAt(u-1))?(m*=Ft,h=e.slice(a,u-1).match(Vt),h&&a>0&&(m*=Math.pow(be,h.length))):jt.test(e.charAt(u-1))?(m*=_t,w=e.slice(a,u-1).match(et),w&&a>0&&(m*=Math.pow(be,w.length))):(m*=Lt,a>0&&(m*=Math.pow(be,u-a))),e.charAt(u)!==n.charAt(c)&&(m*=Mt)),(m<he&&t.charAt(u-1)===o.charAt(c+1)||o.charAt(c+1)===o.charAt(c)&&t.charAt(u-1)!==o.charAt(c))&&($=xe(e,n,t,o,u+1,c+2,i),$*he>m&&(m=$*he)),m>d&&(d=m),u=t.indexOf(f,u+1);return i[l]=d,d}function Ve(e){return e.toLowerCase().replace(et," ")}function zt(e,n,t){return e=t&&t.length>0?`${e+" "+t.join(" ")}`:e,xe(e,n,Ve(e),Ve(n),0,0,{})}function J(e,n,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e==null||e(a),t===!1||!a.defaultPrevented)return n==null?void 0:n(a)}}function Kt(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function tt(...e){return n=>e.forEach(t=>Kt(t,n))}function oe(...e){return r.useCallback(tt(...e),e)}function Wt(e,n=[]){let t=[];function o(c,i){const l=r.createContext(i),f=t.length;t=[...t,i];function u(m){const{scope:$,children:h,...w}=m,v=($==null?void 0:$[e][f])||l,b=r.useMemo(()=>w,Object.values(w));return r.createElement(v.Provider,{value:b},h)}function d(m,$){const h=($==null?void 0:$[e][f])||l,w=r.useContext(h);if(w)return w;if(i!==void 0)return i;throw new Error(`\`${m}\` must be used within \`${c}\``)}return u.displayName=c+"Provider",[u,d]}const a=()=>{const c=t.map(i=>r.createContext(i));return function(l){const f=(l==null?void 0:l[e])||c;return r.useMemo(()=>({[`__scope${e}`]:{...l,[e]:f}}),[l,f])}};return a.scopeName=e,[o,qt(a,...n)]}function qt(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const o=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(c){const i=o.reduce((l,{useScope:f,scopeName:u})=>{const m=f(c)[`__scope${u}`];return{...l,...m}},{});return r.useMemo(()=>({[`__scope${n.scopeName}`]:i}),[i])}};return t.scopeName=n.scopeName,t}const Se=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{},Ht=yt.useId||(()=>{});let Xt=0;function ge(e){const[n,t]=r.useState(Ht());return Se(()=>{e||t(o=>o??String(Xt++))},[e]),e||(n?`radix-${n}`:"")}function j(e){const n=r.useRef(e);return r.useEffect(()=>{n.current=e}),r.useMemo(()=>(...t)=>{var o;return(o=n.current)===null||o===void 0?void 0:o.call(n,...t)},[])}function Yt({prop:e,defaultProp:n,onChange:t=()=>{}}){const[o,a]=Gt({defaultProp:n,onChange:t}),c=e!==void 0,i=c?e:o,l=j(t),f=r.useCallback(u=>{if(c){const m=typeof u=="function"?u(e):u;m!==e&&l(m)}else a(u)},[c,e,a,l]);return[i,f]}function Gt({defaultProp:e,onChange:n}){const t=r.useState(e),[o]=t,a=r.useRef(o),c=j(n);return r.useEffect(()=>{a.current!==o&&(c(o),a.current=o)},[o,a,c]),t}const Ie=r.forwardRef((e,n)=>{const{children:t,...o}=e,a=r.Children.toArray(t),c=a.find(Jt);if(c){const i=c.props.children,l=a.map(f=>f===c?r.Children.count(i)>1?r.Children.only(null):r.isValidElement(i)?i.props.children:null:f);return r.createElement(Re,T({},o,{ref:n}),r.isValidElement(i)?r.cloneElement(i,void 0,l):null)}return r.createElement(Re,T({},o,{ref:n}),t)});Ie.displayName="Slot";const Re=r.forwardRef((e,n)=>{const{children:t,...o}=e;return r.isValidElement(t)?r.cloneElement(t,{...Qt(o,t.props),ref:n?tt(n,t.ref):t.ref}):r.Children.count(t)>1?r.Children.only(null):null});Re.displayName="SlotClone";const Zt=({children:e})=>r.createElement(r.Fragment,null,e);function Jt(e){return r.isValidElement(e)&&e.type===Zt}function Qt(e,n){const t={...n};for(const o in n){const a=e[o],c=n[o];/^on[A-Z]/.test(o)?a&&c?t[o]=(...l)=>{c(...l),a(...l)}:a&&(t[o]=a):o==="style"?t[o]={...a,...c}:o==="className"&&(t[o]=[a,c].filter(Boolean).join(" "))}return{...e,...t}}const en=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],_=en.reduce((e,n)=>{const t=r.forwardRef((o,a)=>{const{asChild:c,...i}=o,l=c?Ie:n;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(l,T({},i,{ref:a}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function tn(e,n){e&&Qe.flushSync(()=>e.dispatchEvent(n))}function nn(e,n=globalThis==null?void 0:globalThis.document){const t=j(e);r.useEffect(()=>{const o=a=>{a.key==="Escape"&&t(a)};return n.addEventListener("keydown",o),()=>n.removeEventListener("keydown",o)},[t,n])}const Ne="dismissableLayer.update",rn="dismissableLayer.pointerDownOutside",on="dismissableLayer.focusOutside";let je;const an=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),cn=r.forwardRef((e,n)=>{var t;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:i,onInteractOutside:l,onDismiss:f,...u}=e,d=r.useContext(an),[m,$]=r.useState(null),h=(t=m==null?void 0:m.ownerDocument)!==null&&t!==void 0?t:globalThis==null?void 0:globalThis.document,[,w]=r.useState({}),v=oe(n,S=>$(S)),b=Array.from(d.layers),[y]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),D=b.indexOf(y),x=m?b.indexOf(m):-1,R=d.layersWithOutsidePointerEventsDisabled.size>0,C=x>=D,P=ln(S=>{const F=S.target,H=[...d.branches].some(U=>U.contains(F));!C||H||(c==null||c(S),l==null||l(S),S.defaultPrevented||f==null||f())},h),k=sn(S=>{const F=S.target;[...d.branches].some(U=>U.contains(F))||(i==null||i(S),l==null||l(S),S.defaultPrevented||f==null||f())},h);return nn(S=>{x===d.layers.size-1&&(a==null||a(S),!S.defaultPrevented&&f&&(S.preventDefault(),f()))},h),r.useEffect(()=>{if(m)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(je=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(m)),d.layers.add(m),ze(),()=>{o&&d.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=je)}},[m,h,o,d]),r.useEffect(()=>()=>{m&&(d.layers.delete(m),d.layersWithOutsidePointerEventsDisabled.delete(m),ze())},[m,d]),r.useEffect(()=>{const S=()=>w({});return document.addEventListener(Ne,S),()=>document.removeEventListener(Ne,S)},[]),r.createElement(_.div,T({},u,{ref:v,style:{pointerEvents:R?C?"auto":"none":void 0,...e.style},onFocusCapture:J(e.onFocusCapture,k.onFocusCapture),onBlurCapture:J(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:J(e.onPointerDownCapture,P.onPointerDownCapture)}))});function ln(e,n=globalThis==null?void 0:globalThis.document){const t=j(e),o=r.useRef(!1),a=r.useRef(()=>{});return r.useEffect(()=>{const c=l=>{if(l.target&&!o.current){let u=function(){nt(rn,t,f,{discrete:!0})};const f={originalEvent:l};l.pointerType==="touch"?(n.removeEventListener("click",a.current),a.current=u,n.addEventListener("click",a.current,{once:!0})):u()}else n.removeEventListener("click",a.current);o.current=!1},i=window.setTimeout(()=>{n.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(i),n.removeEventListener("pointerdown",c),n.removeEventListener("click",a.current)}},[n,t]),{onPointerDownCapture:()=>o.current=!0}}function sn(e,n=globalThis==null?void 0:globalThis.document){const t=j(e),o=r.useRef(!1);return r.useEffect(()=>{const a=c=>{c.target&&!o.current&&nt(on,t,{originalEvent:c},{discrete:!1})};return n.addEventListener("focusin",a),()=>n.removeEventListener("focusin",a)},[n,t]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function ze(){const e=new CustomEvent(Ne);document.dispatchEvent(e)}function nt(e,n,t,{discrete:o}){const a=t.originalEvent.target,c=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&a.addEventListener(e,n,{once:!0}),o?tn(a,c):a.dispatchEvent(c)}const $e="focusScope.autoFocusOnMount",Ee="focusScope.autoFocusOnUnmount",Ke={bubbles:!1,cancelable:!0},un=r.forwardRef((e,n)=>{const{loop:t=!1,trapped:o=!1,onMountAutoFocus:a,onUnmountAutoFocus:c,...i}=e,[l,f]=r.useState(null),u=j(a),d=j(c),m=r.useRef(null),$=oe(n,v=>f(v)),h=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(o){let v=function(x){if(h.paused||!l)return;const R=x.target;l.contains(R)?m.current=R:M(m.current,{select:!0})},b=function(x){if(h.paused||!l)return;const R=x.relatedTarget;R!==null&&(l.contains(R)||M(m.current,{select:!0}))},y=function(x){if(document.activeElement===document.body)for(const C of x)C.removedNodes.length>0&&M(l)};document.addEventListener("focusin",v),document.addEventListener("focusout",b);const D=new MutationObserver(y);return l&&D.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",b),D.disconnect()}}},[o,l,h.paused]),r.useEffect(()=>{if(l){qe.add(h);const v=document.activeElement;if(!l.contains(v)){const y=new CustomEvent($e,Ke);l.addEventListener($e,u),l.dispatchEvent(y),y.defaultPrevented||(dn(hn(rt(l)),{select:!0}),document.activeElement===v&&M(l))}return()=>{l.removeEventListener($e,u),setTimeout(()=>{const y=new CustomEvent(Ee,Ke);l.addEventListener(Ee,d),l.dispatchEvent(y),y.defaultPrevented||M(v??document.body,{select:!0}),l.removeEventListener(Ee,d),qe.remove(h)},0)}}},[l,u,d,h]);const w=r.useCallback(v=>{if(!t&&!o||h.paused)return;const b=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,y=document.activeElement;if(b&&y){const D=v.currentTarget,[x,R]=fn(D);x&&R?!v.shiftKey&&y===R?(v.preventDefault(),t&&M(x,{select:!0})):v.shiftKey&&y===x&&(v.preventDefault(),t&&M(R,{select:!0})):y===D&&v.preventDefault()}},[t,o,h.paused]);return r.createElement(_.div,T({tabIndex:-1},i,{ref:$,onKeyDown:w}))});function dn(e,{select:n=!1}={}){const t=document.activeElement;for(const o of e)if(M(o,{select:n}),document.activeElement!==t)return}function fn(e){const n=rt(e),t=We(n,e),o=We(n.reverse(),e);return[t,o]}function rt(e){const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const a=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||a?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n}function We(e,n){for(const t of e)if(!mn(t,{upTo:n}))return t}function mn(e,{upTo:n}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n!==void 0&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function vn(e){return e instanceof HTMLInputElement&&"select"in e}function M(e,{select:n=!1}={}){if(e&&e.focus){const t=document.activeElement;e.focus({preventScroll:!0}),e!==t&&vn(e)&&n&&e.select()}}const qe=pn();function pn(){let e=[];return{add(n){const t=e[0];n!==t&&(t==null||t.pause()),e=He(e,n),e.unshift(n)},remove(n){var t;e=He(e,n),(t=e[0])===null||t===void 0||t.resume()}}}function He(e,n){const t=[...e],o=t.indexOf(n);return o!==-1&&t.splice(o,1),t}function hn(e){return e.filter(n=>n.tagName!=="A")}const bn=r.forwardRef((e,n)=>{var t;const{container:o=globalThis==null||(t=globalThis.document)===null||t===void 0?void 0:t.body,...a}=e;return o?Ct.createPortal(r.createElement(_.div,T({},a,{ref:n})),o):null});function gn(e,n){return r.useReducer((t,o)=>{const a=n[t][o];return a??t},e)}const ue=e=>{const{present:n,children:t}=e,o=$n(n),a=typeof t=="function"?t({present:o.isPresent}):r.Children.only(t),c=oe(o.ref,a.ref);return typeof t=="function"||o.isPresent?r.cloneElement(a,{ref:c}):null};ue.displayName="Presence";function $n(e){const[n,t]=r.useState(),o=r.useRef({}),a=r.useRef(e),c=r.useRef("none"),i=e?"mounted":"unmounted",[l,f]=gn(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const u=le(o.current);c.current=l==="mounted"?u:"none"},[l]),Se(()=>{const u=o.current,d=a.current;if(d!==e){const $=c.current,h=le(u);e?f("MOUNT"):h==="none"||(u==null?void 0:u.display)==="none"?f("UNMOUNT"):f(d&&$!==h?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,f]),Se(()=>{if(n){const u=m=>{const h=le(o.current).includes(m.animationName);m.target===n&&h&&Qe.flushSync(()=>f("ANIMATION_END"))},d=m=>{m.target===n&&(c.current=le(o.current))};return n.addEventListener("animationstart",d),n.addEventListener("animationcancel",u),n.addEventListener("animationend",u),()=>{n.removeEventListener("animationstart",d),n.removeEventListener("animationcancel",u),n.removeEventListener("animationend",u)}}else f("ANIMATION_END")},[n,f]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:r.useCallback(u=>{u&&(o.current=getComputedStyle(u)),t(u)},[])}}function le(e){return(e==null?void 0:e.animationName)||"none"}let ye=0;function En(){r.useEffect(()=>{var e,n;const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=t[0])!==null&&e!==void 0?e:Xe()),document.body.insertAdjacentElement("beforeend",(n=t[1])!==null&&n!==void 0?n:Xe()),ye++,()=>{ye===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(o=>o.remove()),ye--}},[])}function Xe(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var ot=St(),Ce=function(){},de=r.forwardRef(function(e,n){var t=r.useRef(null),o=r.useState({onScrollCapture:Ce,onWheelCapture:Ce,onTouchMoveCapture:Ce}),a=o[0],c=o[1],i=e.forwardProps,l=e.children,f=e.className,u=e.removeScrollBar,d=e.enabled,m=e.shards,$=e.sideCar,h=e.noIsolation,w=e.inert,v=e.allowPinchZoom,b=e.as,y=b===void 0?"div":b,D=wt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),x=$,R=Rt([t,n]),C=G(G({},D),a);return r.createElement(r.Fragment,null,d&&r.createElement(x,{sideCar:ot,removeScrollBar:u,shards:m,noIsolation:h,inert:w,setCallbacks:c,allowPinchZoom:!!v,lockRef:t}),i?r.cloneElement(r.Children.only(l),G(G({},C),{ref:R})):r.createElement(y,G({},C,{className:f,ref:R}),l))});de.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};de.classNames={fullWidth:Nt,zeroRight:Pt};var Pe=!1;if(typeof window<"u")try{var ie=Object.defineProperty({},"passive",{get:function(){return Pe=!0,!0}});window.addEventListener("test",ie,ie),window.removeEventListener("test",ie,ie)}catch{Pe=!1}var X=Pe?{passive:!1}:!1,yn=function(e){return e.tagName==="TEXTAREA"},at=function(e,n){var t=window.getComputedStyle(e);return t[n]!=="hidden"&&!(t.overflowY===t.overflowX&&!yn(e)&&t[n]==="visible")},Cn=function(e){return at(e,"overflowY")},wn=function(e){return at(e,"overflowX")},Ye=function(e,n){var t=n;do{typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&(t=t.host);var o=ct(e,t);if(o){var a=lt(e,t),c=a[1],i=a[2];if(c>i)return!0}t=t.parentNode}while(t&&t!==document.body);return!1},xn=function(e){var n=e.scrollTop,t=e.scrollHeight,o=e.clientHeight;return[n,t,o]},Sn=function(e){var n=e.scrollLeft,t=e.scrollWidth,o=e.clientWidth;return[n,t,o]},ct=function(e,n){return e==="v"?Cn(n):wn(n)},lt=function(e,n){return e==="v"?xn(n):Sn(n)},Rn=function(e,n){return e==="h"&&n==="rtl"?-1:1},Nn=function(e,n,t,o,a){var c=Rn(e,window.getComputedStyle(n).direction),i=c*o,l=t.target,f=n.contains(l),u=!1,d=i>0,m=0,$=0;do{var h=lt(e,l),w=h[0],v=h[1],b=h[2],y=v-b-c*w;(w||y)&&ct(e,l)&&(m+=y,$+=w),l=l.parentNode}while(!f&&l!==document.body||f&&(n.contains(l)||n===l));return(d&&(m===0||!a)||!d&&($===0||!a))&&(u=!0),u},se=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ge=function(e){return[e.deltaX,e.deltaY]},Ze=function(e){return e&&"current"in e?e.current:e},Pn=function(e,n){return e[0]===n[0]&&e[1]===n[1]},kn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Dn=0,Y=[];function On(e){var n=r.useRef([]),t=r.useRef([0,0]),o=r.useRef(),a=r.useState(Dn++)[0],c=r.useState(function(){return kt()})[0],i=r.useRef(e);r.useEffect(function(){i.current=e},[e]),r.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var v=xt([e.lockRef.current],(e.shards||[]).map(Ze),!0).filter(Boolean);return v.forEach(function(b){return b.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),v.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var l=r.useCallback(function(v,b){if("touches"in v&&v.touches.length===2)return!i.current.allowPinchZoom;var y=se(v),D=t.current,x="deltaX"in v?v.deltaX:D[0]-y[0],R="deltaY"in v?v.deltaY:D[1]-y[1],C,P=v.target,k=Math.abs(x)>Math.abs(R)?"h":"v";if("touches"in v&&k==="h"&&P.type==="range")return!1;var S=Ye(k,P);if(!S)return!0;if(S?C=k:(C=k==="v"?"h":"v",S=Ye(k,P)),!S)return!1;if(!o.current&&"changedTouches"in v&&(x||R)&&(o.current=C),!C)return!0;var F=o.current||C;return Nn(F,b,v,F==="h"?x:R,!0)},[]),f=r.useCallback(function(v){var b=v;if(!(!Y.length||Y[Y.length-1]!==c)){var y="deltaY"in b?Ge(b):se(b),D=n.current.filter(function(C){return C.name===b.type&&C.target===b.target&&Pn(C.delta,y)})[0];if(D&&D.should){b.cancelable&&b.preventDefault();return}if(!D){var x=(i.current.shards||[]).map(Ze).filter(Boolean).filter(function(C){return C.contains(b.target)}),R=x.length>0?l(b,x[0]):!i.current.noIsolation;R&&b.cancelable&&b.preventDefault()}}},[]),u=r.useCallback(function(v,b,y,D){var x={name:v,delta:b,target:y,should:D};n.current.push(x),setTimeout(function(){n.current=n.current.filter(function(R){return R!==x})},1)},[]),d=r.useCallback(function(v){t.current=se(v),o.current=void 0},[]),m=r.useCallback(function(v){u(v.type,Ge(v),v.target,l(v,e.lockRef.current))},[]),$=r.useCallback(function(v){u(v.type,se(v),v.target,l(v,e.lockRef.current))},[]);r.useEffect(function(){return Y.push(c),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:$}),document.addEventListener("wheel",f,X),document.addEventListener("touchmove",f,X),document.addEventListener("touchstart",d,X),function(){Y=Y.filter(function(v){return v!==c}),document.removeEventListener("wheel",f,X),document.removeEventListener("touchmove",f,X),document.removeEventListener("touchstart",d,X)}},[]);var h=e.removeScrollBar,w=e.inert;return r.createElement(r.Fragment,null,w?r.createElement(c,{styles:kn(a)}):null,h?r.createElement(Dt,{gapMode:"margin"}):null)}const In=Ot(ot,On);var it=r.forwardRef(function(e,n){return r.createElement(de,G({},e,{ref:n,sideCar:In}))});it.classNames=de.classNames;const st="Dialog",[ut,wr]=Wt(st),[Tn,q]=ut(st),An=e=>{const{__scopeDialog:n,children:t,open:o,defaultOpen:a,onOpenChange:c,modal:i=!0}=e,l=r.useRef(null),f=r.useRef(null),[u=!1,d]=Yt({prop:o,defaultProp:a,onChange:c});return r.createElement(Tn,{scope:n,triggerRef:l,contentRef:f,contentId:ge(),titleId:ge(),descriptionId:ge(),open:u,onOpenChange:d,onOpenToggle:r.useCallback(()=>d(m=>!m),[d]),modal:i},t)},dt="DialogPortal",[_n,ft]=ut(dt,{forceMount:void 0}),Fn=e=>{const{__scopeDialog:n,forceMount:t,children:o,container:a}=e,c=q(dt,n);return r.createElement(_n,{scope:n,forceMount:t},r.Children.map(o,i=>r.createElement(ue,{present:t||c.open},r.createElement(bn,{asChild:!0,container:a},i))))},ke="DialogOverlay",Ln=r.forwardRef((e,n)=>{const t=ft(ke,e.__scopeDialog),{forceMount:o=t.forceMount,...a}=e,c=q(ke,e.__scopeDialog);return c.modal?r.createElement(ue,{present:o||c.open},r.createElement(Mn,T({},a,{ref:n}))):null}),Mn=r.forwardRef((e,n)=>{const{__scopeDialog:t,...o}=e,a=q(ke,t);return r.createElement(it,{as:Ie,allowPinchZoom:!0,shards:[a.contentRef]},r.createElement(_.div,T({"data-state":vt(a.open)},o,{ref:n,style:{pointerEvents:"auto",...o.style}})))}),ne="DialogContent",Un=r.forwardRef((e,n)=>{const t=ft(ne,e.__scopeDialog),{forceMount:o=t.forceMount,...a}=e,c=q(ne,e.__scopeDialog);return r.createElement(ue,{present:o||c.open},c.modal?r.createElement(Bn,T({},a,{ref:n})):r.createElement(Vn,T({},a,{ref:n})))}),Bn=r.forwardRef((e,n)=>{const t=q(ne,e.__scopeDialog),o=r.useRef(null),a=oe(n,t.contentRef,o);return r.useEffect(()=>{const c=o.current;if(c)return It(c)},[]),r.createElement(mt,T({},e,{ref:a,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:J(e.onCloseAutoFocus,c=>{var i;c.preventDefault(),(i=t.triggerRef.current)===null||i===void 0||i.focus()}),onPointerDownOutside:J(e.onPointerDownOutside,c=>{const i=c.detail.originalEvent,l=i.button===0&&i.ctrlKey===!0;(i.button===2||l)&&c.preventDefault()}),onFocusOutside:J(e.onFocusOutside,c=>c.preventDefault())}))}),Vn=r.forwardRef((e,n)=>{const t=q(ne,e.__scopeDialog),o=r.useRef(!1),a=r.useRef(!1);return r.createElement(mt,T({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:c=>{var i;if((i=e.onCloseAutoFocus)===null||i===void 0||i.call(e,c),!c.defaultPrevented){var l;o.current||(l=t.triggerRef.current)===null||l===void 0||l.focus(),c.preventDefault()}o.current=!1,a.current=!1},onInteractOutside:c=>{var i,l;(i=e.onInteractOutside)===null||i===void 0||i.call(e,c),c.defaultPrevented||(o.current=!0,c.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const f=c.target;((l=t.triggerRef.current)===null||l===void 0?void 0:l.contains(f))&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&a.current&&c.preventDefault()}}))}),mt=r.forwardRef((e,n)=>{const{__scopeDialog:t,trapFocus:o,onOpenAutoFocus:a,onCloseAutoFocus:c,...i}=e,l=q(ne,t),f=r.useRef(null),u=oe(n,f);return En(),r.createElement(r.Fragment,null,r.createElement(un,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:a,onUnmountAutoFocus:c},r.createElement(cn,T({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":vt(l.open)},i,{ref:u,onDismiss:()=>l.onOpenChange(!1)}))),!1)});function vt(e){return e?"open":"closed"}const jn=An,zn=Fn,Kn=Ln,Wn=Un;var te='[cmdk-group=""]',we='[cmdk-group-items=""]',qn='[cmdk-group-heading=""]',Te='[cmdk-item=""]',Je=`${Te}:not([aria-disabled="true"])`,De="cmdk-item-select",V="data-value",Hn=(e,n,t)=>zt(e,n,t),pt=r.createContext(void 0),ae=()=>r.useContext(pt),ht=r.createContext(void 0),Ae=()=>r.useContext(ht),bt=r.createContext(void 0),gt=r.forwardRef((e,n)=>{let t=Z(()=>{var s,g;return{search:"",value:(g=(s=e.value)!=null?s:e.defaultValue)!=null?g:"",filtered:{count:0,items:new Map,groups:new Set}}}),o=Z(()=>new Set),a=Z(()=>new Map),c=Z(()=>new Map),i=Z(()=>new Set),l=$t(e),{label:f,children:u,value:d,onValueChange:m,filter:$,shouldFilter:h,loop:w,disablePointerSelection:v=!1,vimBindings:b=!0,...y}=e,D=r.useId(),x=r.useId(),R=r.useId(),C=r.useRef(null),P=or();z(()=>{if(d!==void 0){let s=d.trim();t.current.value=s,k.emit()}},[d]),z(()=>{P(6,_e)},[]);let k=r.useMemo(()=>({subscribe:s=>(i.current.add(s),()=>i.current.delete(s)),snapshot:()=>t.current,setState:(s,g,E)=>{var p,N,O;if(!Object.is(t.current[s],g)){if(t.current[s]=g,s==="search")me(),H(),P(1,U);else if(s==="value"&&(E||P(5,_e),((p=l.current)==null?void 0:p.value)!==void 0)){let A=g??"";(O=(N=l.current).onValueChange)==null||O.call(N,A);return}k.emit()}},emit:()=>{i.current.forEach(s=>s())}}),[]),S=r.useMemo(()=>({value:(s,g,E)=>{var p;g!==((p=c.current.get(s))==null?void 0:p.value)&&(c.current.set(s,{value:g,keywords:E}),t.current.filtered.items.set(s,F(g,E)),P(2,()=>{H(),k.emit()}))},item:(s,g)=>(o.current.add(s),g&&(a.current.has(g)?a.current.get(g).add(s):a.current.set(g,new Set([s]))),P(3,()=>{me(),H(),t.current.value||U(),k.emit()}),()=>{c.current.delete(s),o.current.delete(s),t.current.filtered.items.delete(s);let E=Q();P(4,()=>{me(),(E==null?void 0:E.getAttribute("id"))===s&&U(),k.emit()})}),group:s=>(a.current.has(s)||a.current.set(s,new Set),()=>{c.current.delete(s),a.current.delete(s)}),filter:()=>l.current.shouldFilter,label:f||e["aria-label"],disablePointerSelection:v,listId:D,inputId:R,labelId:x,listInnerRef:C}),[]);function F(s,g){var E,p;let N=(p=(E=l.current)==null?void 0:E.filter)!=null?p:Hn;return s?N(s,t.current.search,g):0}function H(){if(!t.current.search||l.current.shouldFilter===!1)return;let s=t.current.filtered.items,g=[];t.current.filtered.groups.forEach(p=>{let N=a.current.get(p),O=0;N.forEach(A=>{let B=s.get(A);O=Math.max(B,O)}),g.push([p,O])});let E=C.current;ee().sort((p,N)=>{var O,A;let B=p.getAttribute("id"),ce=N.getAttribute("id");return((O=s.get(ce))!=null?O:0)-((A=s.get(B))!=null?A:0)}).forEach(p=>{let N=p.closest(we);N?N.appendChild(p.parentElement===N?p:p.closest(`${we} > *`)):E.appendChild(p.parentElement===E?p:p.closest(`${we} > *`))}),g.sort((p,N)=>N[1]-p[1]).forEach(p=>{let N=C.current.querySelector(`${te}[${V}="${encodeURIComponent(p[0])}"]`);N==null||N.parentElement.appendChild(N)})}function U(){let s=ee().find(E=>E.getAttribute("aria-disabled")!=="true"),g=s==null?void 0:s.getAttribute(V);k.setState("value",g||void 0)}function me(){var s,g,E,p;if(!t.current.search||l.current.shouldFilter===!1){t.current.filtered.count=o.current.size;return}t.current.filtered.groups=new Set;let N=0;for(let O of o.current){let A=(g=(s=c.current.get(O))==null?void 0:s.value)!=null?g:"",B=(p=(E=c.current.get(O))==null?void 0:E.keywords)!=null?p:[],ce=F(A,B);t.current.filtered.items.set(O,ce),ce>0&&N++}for(let[O,A]of a.current)for(let B of A)if(t.current.filtered.items.get(B)>0){t.current.filtered.groups.add(O);break}t.current.filtered.count=N}function _e(){var s,g,E;let p=Q();p&&(((s=p.parentElement)==null?void 0:s.firstChild)===p&&((E=(g=p.closest(te))==null?void 0:g.querySelector(qn))==null||E.scrollIntoView({block:"nearest"})),p.scrollIntoView({block:"nearest"}))}function Q(){var s;return(s=C.current)==null?void 0:s.querySelector(`${Te}[aria-selected="true"]`)}function ee(){var s;return Array.from((s=C.current)==null?void 0:s.querySelectorAll(Je))}function ve(s){let g=ee()[s];g&&k.setState("value",g.getAttribute(V))}function pe(s){var g;let E=Q(),p=ee(),N=p.findIndex(A=>A===E),O=p[N+s];(g=l.current)!=null&&g.loop&&(O=N+s<0?p[p.length-1]:N+s===p.length?p[0]:p[N+s]),O&&k.setState("value",O.getAttribute(V))}function Fe(s){let g=Q(),E=g==null?void 0:g.closest(te),p;for(;E&&!p;)E=s>0?nr(E,te):rr(E,te),p=E==null?void 0:E.querySelector(Je);p?k.setState("value",p.getAttribute(V)):pe(s)}let Le=()=>ve(ee().length-1),Me=s=>{s.preventDefault(),s.metaKey?Le():s.altKey?Fe(1):pe(1)},Ue=s=>{s.preventDefault(),s.metaKey?ve(0):s.altKey?Fe(-1):pe(-1)};return r.createElement(_.div,{ref:n,tabIndex:-1,...y,"cmdk-root":"",onKeyDown:s=>{var g;if((g=y.onKeyDown)==null||g.call(y,s),!s.defaultPrevented)switch(s.key){case"n":case"j":{b&&s.ctrlKey&&Me(s);break}case"ArrowDown":{Me(s);break}case"p":case"k":{b&&s.ctrlKey&&Ue(s);break}case"ArrowUp":{Ue(s);break}case"Home":{s.preventDefault(),ve(0);break}case"End":{s.preventDefault(),Le();break}case"Enter":if(!s.nativeEvent.isComposing&&s.keyCode!==229){s.preventDefault();let E=Q();if(E){let p=new Event(De);E.dispatchEvent(p)}}}}},r.createElement("label",{"cmdk-label":"",htmlFor:S.inputId,id:S.labelId,style:cr},f),fe(e,s=>r.createElement(ht.Provider,{value:k},r.createElement(pt.Provider,{value:S},s))))}),Xn=r.forwardRef((e,n)=>{var t,o;let a=r.useId(),c=r.useRef(null),i=r.useContext(bt),l=ae(),f=$t(e),u=(o=(t=f.current)==null?void 0:t.forceMount)!=null?o:i==null?void 0:i.forceMount;z(()=>{if(!u)return l.item(a,i==null?void 0:i.id)},[u]);let d=Et(a,c,[e.value,e.children,c],e.keywords),m=Ae(),$=K(P=>P.value&&P.value===d.current),h=K(P=>u||l.filter()===!1?!0:P.search?P.filtered.items.get(a)>0:!0);r.useEffect(()=>{let P=c.current;if(!(!P||e.disabled))return P.addEventListener(De,w),()=>P.removeEventListener(De,w)},[h,e.onSelect,e.disabled]);function w(){var P,k;v(),(k=(P=f.current).onSelect)==null||k.call(P,d.current)}function v(){m.setState("value",d.current,!0)}if(!h)return null;let{disabled:b,value:y,onSelect:D,forceMount:x,keywords:R,...C}=e;return r.createElement(_.div,{ref:re([c,n]),...C,id:a,"cmdk-item":"",role:"option","aria-disabled":!!b,"aria-selected":!!$,"data-disabled":!!b,"data-selected":!!$,onPointerMove:b||l.disablePointerSelection?void 0:v,onClick:b?void 0:w},e.children)}),Yn=r.forwardRef((e,n)=>{let{heading:t,children:o,forceMount:a,...c}=e,i=r.useId(),l=r.useRef(null),f=r.useRef(null),u=r.useId(),d=ae(),m=K(h=>a||d.filter()===!1?!0:h.search?h.filtered.groups.has(i):!0);z(()=>d.group(i),[]),Et(i,l,[e.value,e.heading,f]);let $=r.useMemo(()=>({id:i,forceMount:a}),[a]);return r.createElement(_.div,{ref:re([l,n]),...c,"cmdk-group":"",role:"presentation",hidden:m?void 0:!0},t&&r.createElement("div",{ref:f,"cmdk-group-heading":"","aria-hidden":!0,id:u},t),fe(e,h=>r.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":t?u:void 0},r.createElement(bt.Provider,{value:$},h))))}),Gn=r.forwardRef((e,n)=>{let{alwaysRender:t,...o}=e,a=r.useRef(null),c=K(i=>!i.search);return!t&&!c?null:r.createElement(_.div,{ref:re([a,n]),...o,"cmdk-separator":"",role:"separator"})}),Zn=r.forwardRef((e,n)=>{let{onValueChange:t,...o}=e,a=e.value!=null,c=Ae(),i=K(d=>d.search),l=K(d=>d.value),f=ae(),u=r.useMemo(()=>{var d;let m=(d=f.listInnerRef.current)==null?void 0:d.querySelector(`${Te}[${V}="${encodeURIComponent(l)}"]`);return m==null?void 0:m.getAttribute("id")},[]);return r.useEffect(()=>{e.value!=null&&c.setState("search",e.value)},[e.value]),r.createElement(_.input,{ref:n,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":f.listId,"aria-labelledby":f.labelId,"aria-activedescendant":u,id:f.inputId,type:"text",value:a?e.value:i,onChange:d=>{a||c.setState("search",d.target.value),t==null||t(d.target.value)}})}),Jn=r.forwardRef((e,n)=>{let{children:t,label:o="Suggestions",...a}=e,c=r.useRef(null),i=r.useRef(null),l=ae();return r.useEffect(()=>{if(i.current&&c.current){let f=i.current,u=c.current,d,m=new ResizeObserver(()=>{d=requestAnimationFrame(()=>{let $=f.offsetHeight;u.style.setProperty("--cmdk-list-height",$.toFixed(1)+"px")})});return m.observe(f),()=>{cancelAnimationFrame(d),m.unobserve(f)}}},[]),r.createElement(_.div,{ref:re([c,n]),...a,"cmdk-list":"",role:"listbox","aria-label":o,id:l.listId},fe(e,f=>r.createElement("div",{ref:re([i,l.listInnerRef]),"cmdk-list-sizer":""},f)))}),Qn=r.forwardRef((e,n)=>{let{open:t,onOpenChange:o,overlayClassName:a,contentClassName:c,container:i,...l}=e;return r.createElement(jn,{open:t,onOpenChange:o},r.createElement(zn,{container:i},r.createElement(Kn,{"cmdk-overlay":"",className:a}),r.createElement(Wn,{"aria-label":e.label,"cmdk-dialog":"",className:c},r.createElement(gt,{ref:n,...l}))))}),er=r.forwardRef((e,n)=>K(t=>t.filtered.count===0)?r.createElement(_.div,{ref:n,...e,"cmdk-empty":"",role:"presentation"}):null),tr=r.forwardRef((e,n)=>{let{progress:t,children:o,label:a="Loading...",...c}=e;return r.createElement(_.div,{ref:n,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,"aria-label":a},fe(e,i=>r.createElement("div",{"aria-hidden":!0},i)))}),I=Object.assign(gt,{List:Jn,Item:Xn,Input:Zn,Group:Yn,Separator:Gn,Dialog:Qn,Empty:er,Loading:tr});function nr(e,n){let t=e.nextElementSibling;for(;t;){if(t.matches(n))return t;t=t.nextElementSibling}}function rr(e,n){let t=e.previousElementSibling;for(;t;){if(t.matches(n))return t;t=t.previousElementSibling}}function $t(e){let n=r.useRef(e);return z(()=>{n.current=e}),n}var z=typeof window>"u"?r.useEffect:r.useLayoutEffect;function Z(e){let n=r.useRef();return n.current===void 0&&(n.current=e()),n}function re(e){return n=>{e.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})}}function K(e){let n=Ae(),t=()=>e(n.snapshot());return r.useSyncExternalStore(n.subscribe,t,t)}function Et(e,n,t,o=[]){let a=r.useRef(),c=ae();return z(()=>{var i;let l=(()=>{var u;for(let d of t){if(typeof d=="string")return d.trim();if(typeof d=="object"&&"current"in d)return d.current?(u=d.current.textContent)==null?void 0:u.trim():a.current}})(),f=o.map(u=>u.trim());c.value(e,l,f),(i=n.current)==null||i.setAttribute(V,l),a.current=l}),a}var or=()=>{let[e,n]=r.useState(),t=Z(()=>new Map);return z(()=>{t.current.forEach(o=>o()),t.current=new Map},[e]),(o,a)=>{t.current.set(o,a),n({})}};function ar(e){let n=e.type;return typeof n=="function"?n(e.props):"render"in n?n.render(e.props):e}function fe({asChild:e,children:n},t){return e&&r.isValidElement(n)?r.cloneElement(ar(n),{ref:n.ref},t(n.props.children)):t(n)}var cr={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const lr=r.forwardRef(({className:e,...n},t)=>L.jsx(I,{ref:t,className:W("flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50",e),...n}));lr.displayName=I.displayName;const ir=r.forwardRef(({className:e,...n},t)=>L.jsxs("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[L.jsx(At,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),L.jsx(I.Input,{ref:t,className:W("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-zinc-400",e),...n})]}));ir.displayName=I.Input.displayName;const sr=r.forwardRef(({className:e,...n},t)=>L.jsx(I.List,{ref:t,className:W("max-h-[300px] overflow-y-auto overflow-x-hidden",e),...n}));sr.displayName=I.List.displayName;const ur=r.forwardRef((e,n)=>L.jsx(I.Empty,{ref:n,className:"py-6 text-center text-sm",...e}));ur.displayName=I.Empty.displayName;const dr=r.forwardRef(({className:e,...n},t)=>L.jsx(I.Group,{ref:t,className:W("overflow-hidden p-1 text-zinc-950 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-zinc-500 dark:text-zinc-50 dark:[&_[cmdk-group-heading]]:text-zinc-400",e),...n}));dr.displayName=I.Group.displayName;const fr=r.forwardRef(({className:e,...n},t)=>L.jsx(I.Separator,{ref:t,className:W("-mx-1 h-px bg-zinc-200 dark:bg-zinc-800",e),...n}));fr.displayName=I.Separator.displayName;const mr=r.forwardRef(({className:e,...n},t)=>L.jsx(I.Item,{ref:t,className:W("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-zinc-100 aria-selected:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:aria-selected:bg-zinc-800 dark:aria-selected:text-zinc-50",e),...n}));mr.displayName=I.Item.displayName;const Oe=({className:e,...n})=>L.jsx("span",{className:W("ml-auto text-xs tracking-widest text-zinc-500 dark:text-zinc-400",e),...n});Oe.displayName="CommandShortcut";try{Oe.displayName="CommandShortcut",Oe.__docgenInfo={description:"",displayName:"CommandShortcut",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Optional controlled state of the selected command menu item.",name:"value",required:!1,type:{name:"string"}},filter:{defaultValue:null,description:"Custom filter function for whether each command menu item should matches the given search query.\nIt should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.\nBy default, uses the `command-score` library.",name:"filter",required:!1,type:{name:"(value: string, search: string, keywords?: string[]) => number"}},label:{defaultValue:null,description:"Accessible label for this command menu. Not shown visibly.",name:"label",required:!1,type:{name:"string"}},shouldFilter:{defaultValue:null,description:"Optionally set to `false` to turn off the automatic filtering and sorting.\nIf `false`, you must conditionally render valid items based on the search query yourself.",name:"shouldFilter",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"Event handler called when the selected item of the menu changes.",name:"onValueChange",required:!1,type:{name:"(value: string) => void"}},loop:{defaultValue:null,description:"Optionally set to `true` to turn on looping around when using the arrow keys.",name:"loop",required:!1,type:{name:"boolean"}},disablePointerSelection:{defaultValue:null,description:"Optionally set to `true` to disable selection via pointer events.",name:"disablePointerSelection",required:!1,type:{name:"boolean"}},vimBindings:{defaultValue:null,description:"Set to `false` to disable ctrl+n/j/p/k shortcuts. Defaults to `true`.",name:"vimBindings",required:!1,type:{name:"boolean"}}}}}catch{}export{lr as C,At as S,ir as a,sr as b,ur as c,dr as d,mr as e,fr as f,Oe as g};