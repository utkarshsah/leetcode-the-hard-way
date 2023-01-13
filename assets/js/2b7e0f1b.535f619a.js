"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[96126],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,o(o({ref:e},s),{},{components:n})):a.createElement(f,o({ref:e},s))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:i,o[1]=c;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61992:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],c={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks"},l="2279 - Maximum Bags With Full Capacity of Rocks (Medium)",u={unversionedId:"2200-2299/maximum-bags-with-full-capacity-of-rock-medium",id:"2200-2299/maximum-bags-with-full-capacity-of-rock-medium",title:"2279 - Maximum Bags With Full Capacity of Rocks (Medium)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks",source:"@site/solutions/2200-2299/2279-maximum-bags-with-full-capacity-of-rock-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/maximum-bags-with-full-capacity-of-rock-medium",permalink:"/solutions/2200-2299/maximum-bags-with-full-capacity-of-rock-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2279-maximum-bags-with-full-capacity-of-rock-medium.md",tags:[],version:"current",sidebarPosition:2279,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks"},sidebar:"tutorialSidebar",previous:{title:"2278 - Percentage of Letter in String (Easy)",permalink:"/solutions/2200-2299/percentage-of-letter-in-string"},next:{title:"2280 - Minimum Lines to Represent a Line Chart (Medium)",permalink:"/solutions/2200-2299/minimum-lines-to-represent-a-line-chart-medium"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}],m=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}},d=m("Tabs"),f=m("TabItem"),k=m("SolutionAuthor"),y={toc:p};function h(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2279---maximum-bags-with-full-capacity-of-rocks-medium"},"2279 - Maximum Bags With Full Capacity of Rocks (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks"},"https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You have n bags numbered from 0 to n - 1. You are given two 0-indexed integer arrays capacity and rocks. The ith bag can hold a maximum of capacity","[i]"," rocks and currently contains rocks","[i]"," rocks. You are also given an integer additionalRocks, the number of additional rocks you can place in any of the bags."),(0,r.kt)("p",null,"Return the maximum number of bags that could have full capacity after placing the additional rocks in some bags."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2\nOutput: 3\nExplanation:\nPlace 1 rock in bag 0 and 1 rock in bag 1.\nThe number of rocks in each bag are now [2,3,4,4].\nBags 0, 1, and 2 have full capacity.\nThere are 3 bags at full capacity, so we return 3.\nIt can be shown that it is not possible to have more than 3 bags at full capacity.\nNote that there may be other ways of placing the rocks that result in an answer of 3.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: capacity = [10,2,2], rocks = [2,2,0], additionalRocks = 100\nOutput: 3\nExplanation:\nPlace 8 rocks in bag 0 and 2 rocks in bag 2.\nThe number of rocks in each bag are now [10,2,2].\nBags 0, 1, and 2 have full capacity.\nThere are 3 bags at full capacity, so we return 3.\nIt can be shown that it is not possible to have more than 3 bags at full capacity.\nNote that we did not use all of the additional rocks.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"n == capacity.length == rocks.length"),(0,r.kt)("li",{parentName:"ul"},"1 <= n <= 5 * 10^4"),(0,r.kt)("li",{parentName:"ul"},"1 <= capacity","[i]"," <= 10^9"),(0,r.kt)("li",{parentName:"ul"},"0 <= rocks","[i]"," <= capacity","[i]"),(0,r.kt)("li",{parentName:"ul"},"1 <= additionalRocks <= 10^9")),(0,r.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maximumBags(vector<int>& capacity, vector<int>& rocks, int additionalRocks) {\n        int n = capacity.size(), ans = 0;\n        vector<int> diff(n);\n        // calculate how many additional rocks it needs for position i\n        for (int i = 0; i < n; i++) diff[i] = capacity[i] - rocks[i];\n        // sort it as we wanna take it greedily\n        sort(diff.begin(), diff.end());\n        for (int i = 0; i < n; i++) {\n            // if we can make it to full capacity, then make it\n            if (additionalRocks >= diff[i]) {\n                additionalRocks -= diff[i];\n                ans += 1;\n            } else {\n                // otherwise, break it as we won't be able to make full capacity for other bags\n                break;\n            }\n        }\n        return ans;\n    }\n};\n"))),(0,r.kt)(f,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:\n        for i in range(len(capacity)):\n            capacity[i] -= rocks[i]\n        \n        capacity.sort()\n        count = 0\n        while count < len(capacity) and additionalRocks - capacity[count] >= 0:\n            additionalRocks -= capacity[count]\n            count += 1\n        return count \n")))))}h.isMDXComponent=!0}}]);