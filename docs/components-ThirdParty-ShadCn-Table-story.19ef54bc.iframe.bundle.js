"use strict";(self.webpackChunkmadroxjs=self.webpackChunkmadroxjs||[]).push([[4400],{"./src/components/ThirdParty/ShadCn/Table/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>Table,BF:()=>TableBody,r6:()=>TableCaption,nA:()=>TableCell,Gg:()=>TableFooter,nd:()=>TableHead,A0:()=>TableHeader,Hj:()=>TableRow});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/lib/utils.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Table=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)("div",{className:"relative w-full overflow-auto",children:(0,jsx_runtime.jsx)("table",__assign({ref,className:(0,utils.cn)("w-full caption-bottom text-sm",className)},props))})}));Table.displayName="Table";var TableHeader=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)("thead",__assign({ref,className:(0,utils.cn)("[&_tr]:border-b",className)},props))}));TableHeader.displayName="TableHeader";var TableBody=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)("tbody",__assign({ref,className:(0,utils.cn)("[&_tr:last-child]:border-0",className)},props))}));TableBody.displayName="TableBody";var TableFooter=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)("tfoot",__assign({ref,className:(0,utils.cn)("border-t bg-zinc-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-zinc-800/50",className)},props))}));TableFooter.displayName="TableFooter";var TableRow=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)("tr",__assign({ref,className:(0,utils.cn)("border-b transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800",className)},props))}));TableRow.displayName="TableRow";var TableHead=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)("th",__assign({ref,className:(0,utils.cn)("h-12 px-4 text-left align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400",className)},props))}));TableHead.displayName="TableHead";var TableCell=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)("td",__assign({ref,className:(0,utils.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",className)},props))}));TableCell.displayName="TableCell";var TableCaption=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)("caption",__assign({ref,className:(0,utils.cn)("mt-4 text-sm text-zinc-500 dark:text-zinc-400",className)},props))}));TableCaption.displayName="TableCaption";try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Table/component.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/ThirdParty/ShadCn/Table/component.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ThirdParty/ShadCn/Table/story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThirdParty/ShadCn/Table/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_2__.XI,parameters:{docs:{subtitle:"A responsive table component.",description:{component:"[ShadCn Documentation](https://ui.shadcn.com/docs/components/table)"}}},args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()}};var Default={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.r6,{children:"A list of your recent invoices."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A0,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.Hj,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.nd,{className:"w-[100px]",children:"Invoice"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.nd,{children:"Status"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.nd,{children:"Method"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.nd,{className:"text-right",children:"Amount"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.BF,{children:[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}].map((function(invoice){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.Hj,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.nA,{className:"font-medium",children:invoice.invoice}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.nA,{children:invoice.paymentStatus}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.nA,{children:invoice.paymentMethod}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.nA,{className:"text-right",children:invoice.totalAmount})]},invoice.invoice)}))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Gg,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.Hj,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.nA,{colSpan:3,children:"Total"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.nA,{className:"text-right",children:"$2,500.00"})]})})]})}}}}]);