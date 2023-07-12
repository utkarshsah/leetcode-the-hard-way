"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[46681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,d=c["".concat(l,".").concat(u)]||c[u]||h[u]||a;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={description:"Author: @wingkwong | https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/",tags:["Array","Breadth-First Search","Matrix"]},o="1293 - Shortest Path in a Grid with Obstacles Elimination (Hard)",s={unversionedId:"1200-1299/shortest-path-in-a-grid-with-obstacles-elimination-hard",id:"1200-1299/shortest-path-in-a-grid-with-obstacles-elimination-hard",title:"1293 - Shortest Path in a Grid with Obstacles Elimination (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/",source:"@site/solutions/1200-1299/1293-shortest-path-in-a-grid-with-obstacles-elimination-hard.md",sourceDirName:"1200-1299",slug:"/1200-1299/shortest-path-in-a-grid-with-obstacles-elimination-hard",permalink:"/solutions/1200-1299/shortest-path-in-a-grid-with-obstacles-elimination-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1200-1299/1293-shortest-path-in-a-grid-with-obstacles-elimination-hard.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:1293,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/",tags:["Array","Breadth-First Search","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"1281 - Subtract the Product and Sum of Digits of an Integer (Easy)",permalink:"/solutions/1200-1299/subtract-the-product-and-sum-of-digits-of-an-integer-easy"},next:{title:"1299 - Replace Elements with Greatest Element on Right Side",permalink:"/solutions/1200-1299/replace-elements-with-greatest-element-on-right-side-easy"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=m("Tabs"),h=m("TabItem"),u=m("SolutionAuthor"),d={toc:p},g="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1293---shortest-path-in-a-grid-with-obstacles-elimination-hard"},"1293 - Shortest Path in a Grid with Obstacles Elimination (Hard)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/"},"https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given an ",(0,i.kt)("inlineCode",{parentName:"p"},"m x n")," integer matrix ",(0,i.kt)("inlineCode",{parentName:"p"},"grid")," where each cell is either ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," (empty) or ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," (obstacle). You can move up, down, left, or right from and to an empty cell in ",(0,i.kt)("strong",{parentName:"p"},"one step"),"."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the minimum number of ",(0,i.kt)("strong",{parentName:"em"},"steps")," to walk from the upper left corner"),(0,i.kt)("inlineCode",{parentName:"p"},"(0, 0)"),(0,i.kt)("em",{parentName:"p"},"to the lower right corner"),(0,i.kt)("inlineCode",{parentName:"p"},"(m - 1, n - 1)"),"*given that you can eliminate ",(0,i.kt)("strong",{parentName:"p"},"at most*"),(0,i.kt)("inlineCode",{parentName:"p"},"k"),(0,i.kt)("em",{parentName:"p"},"obstacles"),". If it is not possible to find such walk return ",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1\nOutput: 6\nExplanation: \nThe shortest path without eliminating any obstacle is 10.\nThe shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1\nOutput: -1\nExplanation: We need to eliminate at least two obstacles to find such a walk.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m == grid.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n == grid[i].length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 40")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= k <= m * n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grid[i][j]")," is either ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," ",(0,i.kt)("strong",{parentName:"li"},"or")," ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grid[0][0] == grid[m - 1][n - 1] == 0"))),(0,i.kt)("h2",{id:"approach-1-bfs"},"Approach 1: BFS"),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // 4 directions \n    const int dx[4] = { -1, 0, 0, 1 }, dy[4] = { 0, -1, 1, 0 };\n    // if you are working on 8 directions, then you can use\n    // const int dx[8]= { -1, 0, 0, 1, -1, -1, 1, 1 },\n    //           dy[8]= { 0, 1, -1, 0, -1, 1, -1, 1 };\n    \n    int shortestPath(vector<vector<int>>& grid, int k) {\n        int m = grid.size(), n = grid[0].size(), steps = 0;\n        vector<vector<int>> remains(m, vector<int>(n, INT_MIN));\n        // we have a queue storing {x, y, k} \n        // where x and y are coordinate \n        // and r is remain number of obstacles you can remove\n        queue<array<int, 3>> q;\n        // we start at (0, 0) with k\n        q.push({0, 0, k});\n        // at the beginning, you can eliminate at most k obstacles\n        remains[0][0] = k;\n        // BFS\n        while (!q.empty()) {\n            for (int it = q.size(); it > 0; it--) {\n                auto cur = q.front(); q.pop();\n                // if we reach the lower right corner (m - 1, n - 1)\n                // then return the minimum number of steps\n                if (cur[0] == m - 1 && cur[1] == n - 1) return steps;\n                // otherwise we can try 4 directions (up, down, left and right)\n                for (int i = 0; i < 4; i++) {\n                    // given we have at (x, y), we can move to (next_x, next_y)\n                    int next_x = cur[0] + dx[i], next_y = cur[1] + dy[i];\n                    // however, first we need to make sure (next_x, next_y) is within the grid\n                    if(next_x < 0 || next_x >= m || next_y < 0 || next_y >= n) continue;\n                    // then, we check if we can eliminate an obstacle and move there\n                    int remain = cur[2] - grid[next_x][next_y];\n                    // we can only do that when `remain` is greater or equal to 0\n                    // and the target remaining k must be less than the current remaining k\n                    if(remain >= 0 && remains[next_x][next_y] < remain) {\n                        // push to the queue for further process\n                        q.push({next_x, next_y, remain});\n                        // update the remaining k\n                        remains[next_x][next_y] = remain;\n                    }\n                }\n            }\n            // increase step count\n            steps += 1;\n        }\n        // if we reach here, \n        // then it means it is not possible to find such walk \n        return -1;\n    }\n};\n\n")))))}k.isMDXComponent=!0}}]);