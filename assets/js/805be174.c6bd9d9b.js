"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[19507],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,d=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12398:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a,r=n(87462),i=n(63366),o=(n(67294),n(3905)),m=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/path-with-minimum-effort/"},l="1631 - Path With Minimum Effort (Medium)",p={unversionedId:"1600-1699/path-with-minimum-effort-medium",id:"1600-1699/path-with-minimum-effort-medium",title:"1631 - Path With Minimum Effort (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/path-with-minimum-effort/",source:"@site/solutions/1600-1699/1631-path-with-minimum-effort-medium.md",sourceDirName:"1600-1699",slug:"/1600-1699/path-with-minimum-effort-medium",permalink:"/solutions/1600-1699/path-with-minimum-effort-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1600-1699/1631-path-with-minimum-effort-medium.md",tags:[],version:"current",sidebarPosition:1631,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/path-with-minimum-effort/"},sidebar:"tutorialSidebar",previous:{title:"1600 - 1699",permalink:"/solutions/category/1600---1699"},next:{title:"1633 - Smallest String With A Given Numeric Value (Medium)",permalink:"/solutions/1600-1699/smallest-string-with-a-given-numeric-value-medium"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS + Binary Search",id:"approach-1-dfs--binary-search",level:2}],h=(a="SolutionAuthor",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),d={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,m);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1631---path-with-minimum-effort-medium"},"1631 - Path With Minimum Effort (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/path-with-minimum-effort/"},"https://leetcode.com/problems/path-with-minimum-effort/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are a hiker preparing for an upcoming hike. You are given ",(0,o.kt)("inlineCode",{parentName:"p"},"heights"),", a 2D array of size ",(0,o.kt)("inlineCode",{parentName:"p"},"rows x columns"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"heights[row][col]")," represents the height of cell ",(0,o.kt)("inlineCode",{parentName:"p"},"(row, col)"),". You are situated in the top-left cell, ",(0,o.kt)("inlineCode",{parentName:"p"},"(0, 0)"),", and you hope to travel to the bottom-right cell, ",(0,o.kt)("inlineCode",{parentName:"p"},"(rows-1, columns-1)")," (i.e., ",(0,o.kt)("strong",{parentName:"p"},"0-indexed"),"). You can move ",(0,o.kt)("strong",{parentName:"p"},"up"),", ",(0,o.kt)("strong",{parentName:"p"},"down"),", ",(0,o.kt)("strong",{parentName:"p"},"left"),", or ",(0,o.kt)("strong",{parentName:"p"},"right"),", and you wish to find a route that requires the minimum ",(0,o.kt)("strong",{parentName:"p"},"effort"),"."),(0,o.kt)("p",null,"A route's ",(0,o.kt)("strong",{parentName:"p"},"effort")," is the ",(0,o.kt)("strong",{parentName:"p"},"maximum absolute difference")," in heights between two consecutive cells of the route."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the minimum ",(0,o.kt)("strong",{parentName:"em"},"effort")," required to travel from the top-left cell to the bottom-right cell.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/10/04/ex1.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: heights = [[1,2,2],[3,8,2],[5,3,5]]\nOutput: 2\nExplanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.\nThis is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/10/04/ex2.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: heights = [[1,2,3],[3,8,4],[5,3,5]]\nOutput: 1\nExplanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/10/04/ex3.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]\nOutput: 0\nExplanation: This route does not require any effort. \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rows == heights.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"columns == heights[i].length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= rows, columns <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= heights[i][j] <= 10^6"))),(0,o.kt)("h2",{id:"approach-1-dfs--binary-search"},"Approach 1: DFS + Binary Search"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use Binary Search to look for the possible absolute difference ",(0,o.kt)("span",{parentName:"li",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"k")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))),(0,o.kt)("li",{parentName:"ul"},"Use DFS to walk the grid to see if the destination can be reached given ",(0,o.kt)("span",{parentName:"li",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"k")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),".")),(0,o.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int dirx[4] = { -1, 0, 0, 1 };\n    int diry[4] = { 0, 1, -1, 0 };\n    void dfs(vector<vector<int>>& heights, vector<vector<int>>& vis, int i, int j, int mid) {\n        vis[i][j] = 1;\n        for(int d = 0; d < 4; d++) {\n            int x = i + dirx[d], y = j + diry[d];\n            if(x < 0 || x >= heights.size() || y < 0 || y >= heights[0].size() || vis[x][y]) continue;\n            // if it is out of the target mid, then skip\n            if(abs(heights[i][j] - heights[x][y]) > mid) continue;\n            dfs(heights, vis, x, y, mid);\n        }\n    }\n    \n    int minimumEffortPath(vector<vector<int>>& heights) {\n        int m = (int) heights.size(), n = m ? (int) heights[0].size() : 0;\n        // init possible range\n        int l = 0, r = 1e6;\n        while(l < r) {\n            // get the middle one\n            // for even number of elements, take the lower one\n            int mid = l + (r - l) / 2;\n            vector<vector<int>> vis(m, vector<int>(n, 0));\n            // call dfs to check if the dist can be reached or not\n            dfs(heights, vis, 0, 0, mid);\n            // exclude m\n            if(!vis[m - 1][n - 1]) l = mid + 1;\n            // include m\n            else r = mid;\n        }\n        return l;\n    }\n};\n")))}f.isMDXComponent=!0}}]);