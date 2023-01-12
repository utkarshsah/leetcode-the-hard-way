"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[87671],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return N}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),o=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=o(t),N=r,k=u["".concat(i,".").concat(N)]||u[N]||c[N]||m;return t?n.createElement(k,s(s({ref:a},l),{},{components:t})):n.createElement(k,s({ref:a},l))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,s=new Array(m);s[0]=u;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var o=2;o<m;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17073:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n,r=t(87462),m=t(63366),s=(t(67294),t(3905)),p=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-population-year/"},o="1854 - Maximum Population Year (Easy)",l={unversionedId:"1800-1899/maximum-population-year-easy",id:"1800-1899/maximum-population-year-easy",title:"1854 - Maximum Population Year (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-population-year/",source:"@site/solutions/1800-1899/1854-maximum-population-year-easy.md",sourceDirName:"1800-1899",slug:"/1800-1899/maximum-population-year-easy",permalink:"/solutions/1800-1899/maximum-population-year-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1800-1899/1854-maximum-population-year-easy.md",tags:[],version:"current",sidebarPosition:1854,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-population-year/"},sidebar:"tutorialSidebar",previous:{title:"1833 - Maximum Ice Cream Bars (Medium)",permalink:"/solutions/1800-1899/maximum-ice-cream-bars-medium"},next:{title:"1855 - Maximum Distance Between a Pair of Values (Medium)",permalink:"/solutions/1800-1899/maximum-distance-between-a-pair-of-values-medium"}},c={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Line Sweep",id:"approach-1-line-sweep",level:2}],N=(n="SolutionAuthor",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),k={toc:u};function h(e){var a=e.components,t=(0,m.Z)(e,p);return(0,s.kt)("wrapper",(0,r.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"1854---maximum-population-year-easy"},"1854 - Maximum Population Year (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-population-year/"},"https://leetcode.com/problems/maximum-population-year/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given a 2D integer array ",(0,s.kt)("inlineCode",{parentName:"p"},"logs")," where each ",(0,s.kt)("inlineCode",{parentName:"p"},"logs[i] = [birthi, deathi]")," indicates the birth and death years of the ",(0,s.kt)("inlineCode",{parentName:"p"},"ith")," person."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"population")," of some year ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," is the number of people alive during that year. The ",(0,s.kt)("inlineCode",{parentName:"p"},"ith")," person is counted in year ",(0,s.kt)("inlineCode",{parentName:"p"},"x"),"'s population if ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," is in the ",(0,s.kt)("strong",{parentName:"p"},"inclusive")," range ",(0,s.kt)("inlineCode",{parentName:"p"},"[birthi, deathi - 1]"),". Note that the person is ",(0,s.kt)("strong",{parentName:"p"},"not")," counted in the year that they die."),(0,s.kt)("p",null,"Return ",(0,s.kt)("em",{parentName:"p"},"the ",(0,s.kt)("strong",{parentName:"em"},"earliest")," year with the ",(0,s.kt)("strong",{parentName:"em"},"maximum population")),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: logs = [[1993,1999],[2000,2010]]\nOutput: 1993\nExplanation: The maximum population is 1, and 1993 is the earliest year with this population.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: logs = [[1950,1961],[1960,1971],[1970,1981]]\nOutput: 1960\nExplanation: \nThe maximum population is 2, and it had happened in years 1960 and 1970.\nThe earlier year between them is 1960.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= logs.length <= 100")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1950 <= birthi < deathi <= 2050"))),(0,s.kt)("h2",{id:"approach-1-line-sweep"},"Approach 1: Line Sweep"),(0,s.kt)(N,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maximumPopulation(vector<vector<int>>& logs) {\n        vector<int> cnt(2100);\n        for (auto x : logs) {\n            // start: + 1\n            cnt[x[0]]++;\n            // end: - 1\n            cnt[x[1]]--;\n        }\n        // calculate prefix sum\n        partial_sum(cnt.begin(), cnt.end(), cnt.begin());\n        // check the maximum\n        int mx = *max_element(cnt.begin(), cnt.end());\n        // find the first year with the max population\n        for (int i = 1950; i <= 2050; i++) {\n            if (mx == cnt[i]) {\n                return i;\n            }\n        }\n        return -1;\n    }\n};\n")),(0,s.kt)("p",null,"We can further revise it due to the constraint ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1950"),(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"h"),(0,s.kt)("mi",{parentName:"msub"},"i")),(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"h"),(0,s.kt)("mi",{parentName:"msub"},"i")),(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2050")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1950 <= birth_i < death_i <= 2050")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1950"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"bi"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2050"))))),"."),(0,s.kt)(N,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maximumPopulation(vector<vector<int>>& logs) {\n        vector<int> cnt(101);\n        for (auto x : logs) {\n            // start: + 1\n            cnt[x[0] - 1950]++;\n            // end: - 1\n            cnt[x[1] - 1950]--;\n        }\n        // calculate prefix sum\n        partial_sum(cnt.begin(), cnt.end(), cnt.begin());\n        // check the maximum\n        int mx = *max_element(cnt.begin(), cnt.end());\n        // find the first year with the max population\n        for (int i = 0; i <= 100; i++) {\n            if (mx == cnt[i]) {\n                return 1950 + i;\n            }\n        }\n        return -1;\n    }\n};\n")))}h.isMDXComponent=!0}}]);