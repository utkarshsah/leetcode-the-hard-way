"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3845],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=l(t),k=s,u=N["".concat(i,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(u,r(r({ref:e},o),{},{components:t})):n.createElement(u,r({ref:e},o))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var l=2;l<m;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},20200:function(a,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return N}});var n,s=t(87462),m=t(63366),r=(t(67294),t(3905)),p=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/water-and-jug-problem"},l="0365 - Water and Jug Problem (Medium)",o={unversionedId:"0300-0399/water-and-jug-problem-medium",id:"0300-0399/water-and-jug-problem-medium",title:"0365 - Water and Jug Problem (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/water-and-jug-problem",source:"@site/solutions/0300-0399/0365-water-and-jug-problem-medium.md",sourceDirName:"0300-0399",slug:"/0300-0399/water-and-jug-problem-medium",permalink:"/solutions/0300-0399/water-and-jug-problem-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0365-water-and-jug-problem-medium.md",tags:[],version:"current",sidebarPosition:365,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/water-and-jug-problem"},sidebar:"tutorialSidebar",previous:{title:"0355 - Design Twitter (Medium)",permalink:"/solutions/0300-0399/design-twitter-medium"},next:{title:"0367 - Valid Perfect Square (Easy)",permalink:"/solutions/0300-0399/valid-perfect-square-easy"}},c={},N=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: B\xe9zout&#39;s identity",id:"approach-1-b\xe9zouts-identity",level:2}],k=(n="SolutionAuthor",function(a){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}),u={toc:N};function h(a){var e=a.components,t=(0,m.Z)(a,p);return(0,r.kt)("wrapper",(0,s.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0365---water-and-jug-problem-medium"},"0365 - Water and Jug Problem (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/water-and-jug-problem"},"https://leetcode.com/problems/water-and-jug-problem")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given two jugs with capacities ",(0,r.kt)("inlineCode",{parentName:"p"},"jug1Capacity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jug2Capacity")," liters. There is an infinite amount of water supply available. Determine whether it is possible to measure exactly ",(0,r.kt)("inlineCode",{parentName:"p"},"targetCapacity")," liters using these two jugs."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"targetCapacity")," liters of water are measurable, you must have ",(0,r.kt)("inlineCode",{parentName:"p"},"targetCapacity")," liters of water contained ",(0,r.kt)("strong",{parentName:"p"},"within one or both buckets")," by the end."),(0,r.kt)("p",null,"Operations allowed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fill any of the jugs with water."),(0,r.kt)("li",{parentName:"ul"},"Empty any of the jugs."),(0,r.kt)("li",{parentName:"ul"},"Pour water from one jug into another till the other jug is completely full, or the first jug itself is empty.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4\nOutput: true\nExplanation: The famous Die Hard example \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5\nOutput: false\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3\nOutput: true \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= jug1Capacity, jug2Capacity, targetCapacity <= 10^6"))),(0,r.kt)("h2",{id:"approach-1-b\xe9zouts-identity"},"Approach 1: B\xe9zout's identity"),(0,r.kt)("p",null,"It's obvious that it is impossible to measure if the target capacity ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"z")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z")))))," is greater than the total capacity of jug ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and jug ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"y")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),". Otherwise, we can express it as a linear combination of ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"y")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," and check if ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"z")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z")))))," is a linear combination of ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"y")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),". In order to do so, ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"z")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z")))))," has to be a multiple of the gcd of ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"y")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),"."),(0,r.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool canMeasureWater(int x, int y, int z) {\n        // impossible case\n        if (x + y < z) return false;\n        // check if z is a multiple of GCD(x, y) \n        return z % gcd(x, y) == 0;\n    }\n};\n")))}h.isMDXComponent=!0}}]);