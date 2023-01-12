"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[96126],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61992:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a,r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks"},u="2279 - Maximum Bags With Full Capacity of Rocks (Medium)",s={unversionedId:"2200-2299/maximum-bags-with-full-capacity-of-rock-medium",id:"2200-2299/maximum-bags-with-full-capacity-of-rock-medium",title:"2279 - Maximum Bags With Full Capacity of Rocks (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks",source:"@site/solutions/2200-2299/2279-maximum-bags-with-full-capacity-of-rock-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/maximum-bags-with-full-capacity-of-rock-medium",permalink:"/solutions/2200-2299/maximum-bags-with-full-capacity-of-rock-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2279-maximum-bags-with-full-capacity-of-rock-medium.md",tags:[],version:"current",sidebarPosition:2279,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks"},sidebar:"tutorialSidebar",previous:{title:"2278 - Percentage of Letter in String (Easy)",permalink:"/solutions/2200-2299/percentage-of-letter-in-string"},next:{title:"2280 - Minimum Lines to Represent a Line Chart (Medium)",permalink:"/solutions/2200-2299/minimum-lines-to-represent-a-line-chart-medium"}},p={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}],f=(a="SolutionAuthor",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),d={toc:m};function k(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2279---maximum-bags-with-full-capacity-of-rocks-medium"},"2279 - Maximum Bags With Full Capacity of Rocks (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks"},"https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You have n bags numbered from 0 to n - 1. You are given two 0-indexed integer arrays capacity and rocks. The ith bag can hold a maximum of capacity","[i]"," rocks and currently contains rocks","[i]"," rocks. You are also given an integer additionalRocks, the number of additional rocks you can place in any of the bags."),(0,i.kt)("p",null,"Return the maximum number of bags that could have full capacity after placing the additional rocks in some bags."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2\nOutput: 3\nExplanation:\nPlace 1 rock in bag 0 and 1 rock in bag 1.\nThe number of rocks in each bag are now [2,3,4,4].\nBags 0, 1, and 2 have full capacity.\nThere are 3 bags at full capacity, so we return 3.\nIt can be shown that it is not possible to have more than 3 bags at full capacity.\nNote that there may be other ways of placing the rocks that result in an answer of 3.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: capacity = [10,2,2], rocks = [2,2,0], additionalRocks = 100\nOutput: 3\nExplanation:\nPlace 8 rocks in bag 0 and 2 rocks in bag 2.\nThe number of rocks in each bag are now [10,2,2].\nBags 0, 1, and 2 have full capacity.\nThere are 3 bags at full capacity, so we return 3.\nIt can be shown that it is not possible to have more than 3 bags at full capacity.\nNote that we did not use all of the additional rocks.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"n == capacity.length == rocks.length"),(0,i.kt)("li",{parentName:"ul"},"1 <= n <= 5 * 10^4"),(0,i.kt)("li",{parentName:"ul"},"1 <= capacity","[i]"," <= 10^9"),(0,i.kt)("li",{parentName:"ul"},"0 <= rocks","[i]"," <= capacity","[i]"),(0,i.kt)("li",{parentName:"ul"},"1 <= additionalRocks <= 10^9")),(0,i.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,i.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maximumBags(vector<int>& capacity, vector<int>& rocks, int additionalRocks) {\n        int n = capacity.size(), ans = 0;\n        vector<int> diff(n);\n        // calculate how many additional rocks it needs for position i\n        for (int i = 0; i < n; i++) diff[i] = capacity[i] - rocks[i];\n        // sort it as we wanna take it greedily\n        sort(diff.begin(), diff.end());\n        for (int i = 0; i < n; i++) {\n            // if we can make it to full capacity, then make it\n            if (additionalRocks >= diff[i]) {\n                additionalRocks -= diff[i];\n                ans += 1;\n            } else {\n                // otherwise, break it as we won't be able to make full capacity for other bags\n                break;\n            }\n        }\n        return ans;\n    }\n};\n")))}k.isMDXComponent=!0}}]);