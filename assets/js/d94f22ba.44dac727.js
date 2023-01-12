"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[13617],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9774:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var i,r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/build-a-matrix-with-conditions/"},d="2392 - Build a Matrix With Conditions (Hard)",p={unversionedId:"2300-2399/build-a-matrix-with-conditions-hard",id:"2300-2399/build-a-matrix-with-conditions-hard",title:"2392 - Build a Matrix With Conditions (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/build-a-matrix-with-conditions/",source:"@site/solutions/2300-2399/2392-build-a-matrix-with-conditions-hard.md",sourceDirName:"2300-2399",slug:"/2300-2399/build-a-matrix-with-conditions-hard",permalink:"/solutions/2300-2399/build-a-matrix-with-conditions-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2392-build-a-matrix-with-conditions-hard.md",tags:[],version:"current",sidebarPosition:2392,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/build-a-matrix-with-conditions/"},sidebar:"tutorialSidebar",previous:{title:"2384 - Largest Palindromic Number (Medium)",permalink:"/solutions/2300-2399/largest-palindromic-number-medium"},next:{title:"2400 - 2499",permalink:"/solutions/category/2400---2499"}},c={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Kahn&#39;s Algorithm",id:"approach-1-kahns-algorithm",level:2}],m=(i="SolutionAuthor",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),h={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2392---build-a-matrix-with-conditions-hard"},"2392 - Build a Matrix With Conditions (Hard)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given a ",(0,a.kt)("strong",{parentName:"p"},"positive")," integer ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),". You are also given:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a 2D integer array ",(0,a.kt)("inlineCode",{parentName:"li"},"rowConditions")," of size ",(0,a.kt)("inlineCode",{parentName:"li"},"n")," where ",(0,a.kt)("inlineCode",{parentName:"li"},"rowConditions[i] = [abovei, belowi]"),", and"),(0,a.kt)("li",{parentName:"ul"},"a 2D integer array ",(0,a.kt)("inlineCode",{parentName:"li"},"colConditions")," of size ",(0,a.kt)("inlineCode",{parentName:"li"},"m")," where ",(0,a.kt)("inlineCode",{parentName:"li"},"colConditions[i] = [lefti, righti]"),".")),(0,a.kt)("p",null,"The two arrays contain integers from ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,a.kt)("p",null,"You have to build a ",(0,a.kt)("inlineCode",{parentName:"p"},"k x k")," matrix that contains each of the numbers from ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," ",(0,a.kt)("strong",{parentName:"p"},"exactly once"),". The remaining cells should have the value ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("p",null,"The matrix should also satisfy the following conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number ",(0,a.kt)("inlineCode",{parentName:"li"},"abovei")," should appear in a ",(0,a.kt)("strong",{parentName:"li"},"row")," that is strictly ",(0,a.kt)("strong",{parentName:"li"},"above")," the row at which the number ",(0,a.kt)("inlineCode",{parentName:"li"},"belowi")," appears for all ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"n - 1"),"."),(0,a.kt)("li",{parentName:"ul"},"The number ",(0,a.kt)("inlineCode",{parentName:"li"},"lefti")," should appear in a ",(0,a.kt)("strong",{parentName:"li"},"column")," that is strictly ",(0,a.kt)("strong",{parentName:"li"},"left")," of the column at which the number ",(0,a.kt)("inlineCode",{parentName:"li"},"righti")," appears for all ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"m - 1"),".")),(0,a.kt)("p",null,"Return ",(0,a.kt)("strong",{parentName:"p"},"*any")," matrix that satisfies the conditions*. If no answer exists, return an empty matrix."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]\nOutput: [[3,0,0],[0,0,1],[0,2,0]]\nExplanation: The diagram above shows a valid example of a matrix that satisfies all the conditions.\nThe row conditions are the following:\n- Number 1 is in row 1, and number 2 is in row 2, so 1 is above 2 in the matrix.\n- Number 3 is in row 0, and number 2 is in row 2, so 3 is above 2 in the matrix.\nThe column conditions are the following:\n- Number 2 is in column 1, and number 1 is in column 2, so 2 is left of 1 in the matrix.\n- Number 3 is in column 0, and number 2 is in column 1, so 3 is left of 2 in the matrix.\nNote that there may be multiple correct answers.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: k = 3, rowConditions = [[1,2],[2,3],[3,1],[2,3]], colConditions = [[2,1]]\nOutput: []\nExplanation: From the first two conditions, 3 has to be below 1 but the third conditions needs 3 to be above 1 to be satisfied.\nNo matrix can satisfy all the conditions, so we return the empty matrix.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2 <= k <= 400")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= rowConditions.length, colConditions.length <= 104")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rowConditions[i].length == colConditions[i].length == 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= abovei, belowi, lefti, righti <= k")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"abovei != belowi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lefti != righti"))),(0,a.kt)("h2",{id:"approach-1-kahns-algorithm"},"Approach 1: Kahn's Algorithm"),(0,a.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // there is at least one vertex in the \u201cgraph\u201d with an \u201cin-degree\u201d of 0. \n    // if all vertices in the \u201cgraph\u201d have non-zero \u201cin-degree\u201d, \n    // then all vertices need at least one vertex as a predecessor. \n    // In this case, no vertex can serve as the starting vertex.\n    template<typename T_vector, typename T_vector_vector>\n      T_vector kahn(int n, T_vector_vector &edges){\n          vector<int> ordering, indegree(n, 0);\n          vector<vector<int> > g(n);\n          for (auto e : edges) {\n            --e[0], --e[1];\n            indegree[e[1]]++;\n            g[e[0]].push_back(e[1]);\n          }\n          queue<int> q;\n          for (int i = 0; i < n; i++) if (indegree[i] == 0) q.push(i);\n          int visited = 0;\n          while (!q.empty()) {\n            int u = q.front(); q.pop();\n            ordering.push_back(u);\n            visited++;\n            for (auto v : g[u]) {\n              if (--indegree[v] == 0) q.push(v);\n            }\n          }\n          if (visited != n) return T_vector{};\n          return ordering;\n      }\n    \n    // the idea is to topologically sort rowConditions & colConditions\n    // then build the final matrix based on the order if possible\n    vector<vector<int>> buildMatrix(int k, vector<vector<int>>& rowConditions, vector<vector<int>>& colConditions) {\n        vector<vector<int>> ans(k, vector<int>(k));\n        // in example 1, rowOrders would be [1, 3, 2]\n        vector<int> rowOrders = kahn<vector<int>>(k, rowConditions);\n        // in example 1, colOrders would be [3, 2, 1]\n        vector<int> colOrders = kahn<vector<int>>(k, colConditions);\n        // since we need to map to a `k x k` matrix, \n        // we need to make sure that both got exact k elements\n        if ((int) rowOrders.size() == k && (int) colOrders.size() == k) {\n            // used to map the index of the given row / col value\n            // i.e. given the value, which row / col idx should it belong to\n            vector<int> rowIdx(k), colIdx(k);\n            for (int i = 0; i < k; i++) rowIdx[rowOrders[i]] = i, colIdx[colOrders[i]] = i;\n            // update the final matrix\n            for (int i = 0; i < k; i++) ans[rowIdx[i]][colIdx[i]] = i + 1;\n            return ans;\n        }\n        // else we don't have a matrix that satisfies the conditions\n        return vector<vector<int>>{};\n    }\n};\n")))}k.isMDXComponent=!0}}]);