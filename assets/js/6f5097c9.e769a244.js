(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2941],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),b=i,m=p["".concat(u,".").concat(b)]||p[b]||d[b]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4017:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=["components"],c={id:"tribute-daos",title:"tributeDaos"},u={unversionedId:"schema/queries/tribute-daos",id:"schema/queries/tribute-daos",isDocsHomePage:!1,title:"tributeDaos",description:"No description",source:"@site/docs/schema/queries/tribute-daos.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/tribute-daos",permalink:"/tribute-contracts/docs/schema/queries/tribute-daos",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/schema/queries/tribute-daos.mdx",version:"current",frontMatter:{id:"tribute-daos",title:"tributeDaos"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"tributeDaos(\n  skip: Int = 0\n  first: Int = 100\n  orderBy: TributeDao_orderBy\n  orderDirection: OrderDirection\n  where: TributeDao_filter\n  block: Block_height\n): [TributeDao!]!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"skip"},(0,o.kt)("inlineCode",{parentName:"h4"},"skip")),(0,o.kt)("h4",{id:"first"},(0,o.kt)("inlineCode",{parentName:"h4"},"first")),(0,o.kt)("h4",{id:"orderby-tributedao_orderby"},(0,o.kt)("inlineCode",{parentName:"h4"},"orderBy")," (","[",(0,o.kt)("inlineCode",{parentName:"h4"},"TributeDao_orderBy"),"]"),(0,o.kt)("h4",{id:"orderdirection-orderdirection"},(0,o.kt)("inlineCode",{parentName:"h4"},"orderDirection")," (","[",(0,o.kt)("inlineCode",{parentName:"h4"},"OrderDirection"),"]"),(0,o.kt)("h4",{id:"where-tributedao_filter"},(0,o.kt)("inlineCode",{parentName:"h4"},"where")," (","[",(0,o.kt)("inlineCode",{parentName:"h4"},"TributeDao_filter"),"]"),(0,o.kt)("h4",{id:"block-block_height"},(0,o.kt)("inlineCode",{parentName:"h4"},"block")," (","[",(0,o.kt)("inlineCode",{parentName:"h4"},"Block_height"),"]"),(0,o.kt)("p",null,"The block at which the query should be executed. Can either be an ",(0,o.kt)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",(0,o.kt)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"tributedao"},"[",(0,o.kt)("inlineCode",{parentName:"h4"},"TributeDao"),"]"))}d.isMDXComponent=!0}}]);