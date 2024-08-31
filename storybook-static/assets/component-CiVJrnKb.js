import{j as t}from"./jsx-runtime-DBEcOq3S.js";import{r as s}from"./index-DtJulBIN.js";import{c as w,u as h}from"./index-CE5k4Bb4.js";import{c as X}from"./index-CtLtbpqE.js";import{c as J}from"./index-P-l_ls5c.js";import{P as Q}from"./index-kfRDelSZ.js";import{c as v,A as Y,C as Z,G as ee,L as oe,I as re,a as ne,R as ae,b as te,d as se,S as de,e as ie,f as pe,g as ce,h as ue,P as le,i as me}from"./index-CIhIF-XF.js";import{u as b}from"./index-xu9aqoQg.js";import{c as l}from"./utils-B06rK7pa.js";import{C as fe}from"./chevron-right-BP5yij6X.js";import{C as we}from"./check-DD0slIy4.js";import{C as ge}from"./circle-Cdvv4Ohh.js";var M="DropdownMenu",[xe,ao]=J(M,[v]),p=v(),[Me,D]=xe(M),N=e=>{const{__scopeDropdownMenu:o,children:r,dir:n,open:a,defaultOpen:i,onOpenChange:u,modal:d=!0}=e,c=p(o),g=s.useRef(null),[m=!1,f]=h({prop:a,defaultProp:i,onChange:u});return t.jsx(Me,{scope:o,triggerId:b(),triggerRef:g,contentId:b(),open:m,onOpenChange:f,onOpenToggle:s.useCallback(()=>f(W=>!W),[f]),modal:d,children:t.jsx(ue,{...c,open:m,onOpenChange:f,dir:n,modal:d,children:r})})};N.displayName=M;var y="DropdownMenuTrigger",_=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,disabled:n=!1,...a}=e,i=D(y,r),u=p(r);return t.jsx(Y,{asChild:!0,...u,children:t.jsx(Q.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":n?"":void 0,disabled:n,...a,ref:X(o,i.triggerRef),onPointerDown:w(e.onPointerDown,d=>{!n&&d.button===0&&d.ctrlKey===!1&&(i.onOpenToggle(),i.open||d.preventDefault())}),onKeyDown:w(e.onKeyDown,d=>{n||(["Enter"," "].includes(d.key)&&i.onOpenToggle(),d.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(d.key)&&d.preventDefault())})})})});_.displayName=y;var be="DropdownMenuPortal",R=e=>{const{__scopeDropdownMenu:o,...r}=e,n=p(o);return t.jsx(le,{...n,...r})};R.displayName=be;var C="DropdownMenuContent",S=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...n}=e,a=D(C,r),i=p(r),u=s.useRef(!1);return t.jsx(Z,{id:a.contentId,"aria-labelledby":a.triggerId,...i,...n,ref:o,onCloseAutoFocus:w(e.onCloseAutoFocus,d=>{var c;u.current||(c=a.triggerRef.current)==null||c.focus(),u.current=!1,d.preventDefault()}),onInteractOutside:w(e.onInteractOutside,d=>{const c=d.detail.originalEvent,g=c.button===0&&c.ctrlKey===!0,m=c.button===2||g;(!a.modal||m)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});S.displayName=C;var he="DropdownMenuGroup",I=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...n}=e,a=p(r);return t.jsx(ee,{...a,...n,ref:o})});I.displayName=he;var ve="DropdownMenuLabel",j=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...n}=e,a=p(r);return t.jsx(oe,{...a,...n,ref:o})});j.displayName=ve;var De="DropdownMenuItem",z=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...n}=e,a=p(r);return t.jsx(re,{...a,...n,ref:o})});z.displayName=De;var Ne="DropdownMenuCheckboxItem",P=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...n}=e,a=p(r);return t.jsx(ne,{...a,...n,ref:o})});P.displayName=Ne;var ye="DropdownMenuRadioGroup",_e=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...n}=e,a=p(r);return t.jsx(ae,{...a,...n,ref:o})});_e.displayName=ye;var Re="DropdownMenuRadioItem",E=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...n}=e,a=p(r);return t.jsx(te,{...a,...n,ref:o})});E.displayName=Re;var Ce="DropdownMenuItemIndicator",O=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...n}=e,a=p(r);return t.jsx(se,{...a,...n,ref:o})});O.displayName=Ce;var Se="DropdownMenuSeparator",A=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...n}=e,a=p(r);return t.jsx(de,{...a,...n,ref:o})});A.displayName=Se;var Ie="DropdownMenuArrow",je=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...n}=e,a=p(r);return t.jsx(ie,{...a,...n,ref:o})});je.displayName=Ie;var ze=e=>{const{__scopeDropdownMenu:o,children:r,open:n,onOpenChange:a,defaultOpen:i}=e,u=p(o),[d=!1,c]=h({prop:n,defaultProp:i,onChange:a});return t.jsx(me,{...u,open:d,onOpenChange:c,children:r})},Pe="DropdownMenuSubTrigger",k=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...n}=e,a=p(r);return t.jsx(pe,{...a,...n,ref:o})});k.displayName=Pe;var Ee="DropdownMenuSubContent",T=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:r,...n}=e,a=p(r);return t.jsx(ce,{...a,...n,ref:o,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});T.displayName=Ee;var Oe=N,Ae=_,G=R,$=S,ke=I,L=j,q=z,K=P,U=E,V=O,B=A,Te=ze,F=k,H=T;const to=Oe,so=Ae,io=ke,po=G,co=Te,Ge=s.forwardRef(({className:e,inset:o,children:r,...n},a)=>t.jsxs(F,{ref:a,className:l("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-100 data-[state=open]:bg-zinc-100 dark:focus:bg-zinc-800 dark:data-[state=open]:bg-zinc-800",o&&"pl-8",e),...n,children:[r,t.jsx(fe,{className:"ml-auto h-4 w-4"})]}));Ge.displayName=F.displayName;const $e=s.forwardRef(({className:e,...o},r)=>t.jsx(H,{ref:r,className:l("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",e),...o}));$e.displayName=H.displayName;const Le=s.forwardRef(({className:e,sideOffset:o=4,...r},n)=>t.jsx(G,{children:t.jsx($,{ref:n,sideOffset:o,className:l("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",e),...r})}));Le.displayName=$.displayName;const qe=s.forwardRef(({className:e,inset:o,...r},n)=>t.jsx(q,{ref:n,className:l("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",o&&"pl-8",e),...r}));qe.displayName=q.displayName;const Ke=s.forwardRef(({className:e,children:o,checked:r,...n},a)=>t.jsxs(K,{ref:a,className:l("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",e),checked:r,...n,children:[t.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:t.jsx(V,{children:t.jsx(we,{className:"h-4 w-4"})})}),o]}));Ke.displayName=K.displayName;const Ue=s.forwardRef(({className:e,children:o,...r},n)=>t.jsxs(U,{ref:n,className:l("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",e),...r,children:[t.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:t.jsx(V,{children:t.jsx(ge,{className:"h-2 w-2 fill-current"})})}),o]}));Ue.displayName=U.displayName;const Ve=s.forwardRef(({className:e,inset:o,...r},n)=>t.jsx(L,{ref:n,className:l("px-2 py-1.5 text-sm font-semibold",o&&"pl-8",e),...r}));Ve.displayName=L.displayName;const Be=s.forwardRef(({className:e,...o},r)=>t.jsx(B,{ref:r,className:l("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800",e),...o}));Be.displayName=B.displayName;const x=({className:e,...o})=>t.jsx("span",{className:l("ml-auto text-xs tracking-widest opacity-60",e),...o});x.displayName="DropdownMenuShortcut";try{x.displayName="DropdownMenuShortcut",x.__docgenInfo={description:"",displayName:"DropdownMenuShortcut",props:{dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"(open: boolean) => void"}},modal:{defaultValue:null,description:"",name:"modal",required:!1,type:{name:"boolean"}}}}}catch{}export{to as D,so as a,Le as b,qe as c,Ve as d,Be as e,Ke as f,io as g,x as h,co as i,Ge as j,po as k,$e as l};