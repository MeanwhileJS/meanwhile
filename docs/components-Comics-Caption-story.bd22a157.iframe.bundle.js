"use strict";(self.webpackChunkmeanwhilejs=self.webpackChunkmeanwhilejs||[]).push([[4163],{"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./src/components/Comics/Caption/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>Caption,$:()=>captionVariants});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),utils=__webpack_require__("./src/lib/utils.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Caption=(0,react.forwardRef)((function(_a,ref){var _b=_a.shadow,shadow=void 0===_b?"none":_b,_c=_a.gradiant,gradiant=void 0!==_c&&_c,className=_a.className,_d=_a.asChild,asChild=void 0!==_d&&_d,props=__rest(_a,["shadow","gradiant","className","asChild"]),Comp=asChild?dist.DX:"div";return(0,jsx_runtime.jsx)(Comp,__assign({className:(0,utils.cn)(captionVariants({shadow,gradiant,className})),ref},props))}));Caption.displayName="Caption";try{Caption.displayName="Caption",Caption.__docgenInfo={description:"",displayName:"Caption",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},shadow:{defaultValue:{value:"none"},description:"Box Shadow of the panel.",name:"shadow",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},gradiant:{defaultValue:{value:"false"},description:"Whether Caption should have a white circular gradiant",name:"gradiant",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Comics/Caption/component.tsx#Caption"]={docgenInfo:Caption.__docgenInfo,name:"Caption",path:"src/components/Comics/Caption/component.tsx#Caption"})}catch(__react_docgen_typescript_loader_error){}var captionVariants=(0,__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs").F)(["border-2 border-black p-2 bg-comics-caption font-action-man shadow-comics-caption-shadow max-w-fit"],{variants:{shadow:{none:"","bottom-right":"shadow-[5px_6px_0px_0px_#3F0200]","bottom-left":"shadow-[-5px_6px_0px_0px_#3F0200]","top-right":"shadow-[5px_-6px_0px_0px_#3F0200]","top-left":"shadow-[-5px_-6px_0px_0px_#3F0200]"},gradiant:{true:"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-comics-caption-light",false:""}},defaultVariants:{shadow:"none",gradiant:!1}});try{captionVariants.displayName="captionVariants",captionVariants.__docgenInfo={description:"",displayName:"captionVariants",props:{shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:'"none" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | null | undefined'}},gradiant:{defaultValue:null,description:"",name:"gradiant",required:!1,type:{name:"boolean | null | undefined"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Comics/Caption/variants.tsx#captionVariants"]={docgenInfo:captionVariants.__docgenInfo,name:"captionVariants",path:"src/components/Comics/Caption/variants.tsx#captionVariants"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Comics/Caption/story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Gradiant:()=>Gradiant,Shadow:()=>Shadow,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/Comics/Caption/index.ts").H,tags:["autodoc"]};var Default={args:{className:"text-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Then Iron Man agreed",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{})," I was an Avenger.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"Temporarily."})]})}},Shadow={args:{className:"text-center",shadow:"bottom-left",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Then Iron Man agreed",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{})," I was an Avenger.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"Temporarily."})]})}},Gradiant={args:{gradiant:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Then Iron Man agreed",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{})," I was an Avenger.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"Temporarily."})]})}}}}]);