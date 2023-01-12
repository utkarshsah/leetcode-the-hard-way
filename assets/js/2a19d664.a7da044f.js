"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[58231],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,f=m["".concat(u,".").concat(h)]||m[h]||d[h]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11568:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-nodes-with-value-one/"},u="2445 - Number of Nodes With Value One (Medium)",s={unversionedId:"2400-2499/number-of-nodes-with-value-one-medium",id:"2400-2499/number-of-nodes-with-value-one-medium",title:"2445 - Number of Nodes With Value One (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-nodes-with-value-one/",source:"@site/solutions/2400-2499/2445-number-of-nodes-with-value-one-medium.md",sourceDirName:"2400-2499",slug:"/2400-2499/number-of-nodes-with-value-one-medium",permalink:"/solutions/2400-2499/number-of-nodes-with-value-one-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2445-number-of-nodes-with-value-one-medium.md",tags:[],version:"current",sidebarPosition:2445,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-nodes-with-value-one/"},sidebar:"tutorialSidebar",previous:{title:"2441 - Largest Positive Integer That Exists With Its Negative (Easy)",permalink:"/solutions/2400-2499/largest-positive-integer-that-exists-with-its-negative-easy"},next:{title:"2461 - Maximum Sum of Distinct Subarrays With Length K (Medium)",permalink:"/solutions/2400-2499/maximum-sum-of-distinct-subarrays-with-length-k-medium"}},p={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},h=m("Tabs"),f=m("TabItem"),c=m("SolutionAuthor"),b={toc:d};function v(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2445---number-of-nodes-with-value-one-medium"},"2445 - Number of Nodes With Value One (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/number-of-nodes-with-value-one/"},"https://leetcode.com/problems/number-of-nodes-with-value-one/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"There is an ",(0,i.kt)("strong",{parentName:"p"},"undirected")," connected tree with ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," nodes labeled from ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"n - 1")," edges. You are given the integer ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),". The parent node of a node with a label ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," is the node with the label ",(0,i.kt)("inlineCode",{parentName:"p"},"floor (v / 2)"),". The root of the tree is the node with the label ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For example, if ",(0,i.kt)("inlineCode",{parentName:"li"},"n = 7"),", then the node with the label ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," has the node with the label ",(0,i.kt)("inlineCode",{parentName:"li"},"floor(3 / 2) = 1")," as its parent, and the node with the label ",(0,i.kt)("inlineCode",{parentName:"li"},"7")," has the node with the label ",(0,i.kt)("inlineCode",{parentName:"li"},"floor(7 / 2) = 3")," as its parent.")),(0,i.kt)("p",null,"You are also given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"queries"),". Initially, every node has a value ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," on it. For each query ",(0,i.kt)("inlineCode",{parentName:"p"},"queries[i]"),", you should flip all values in the subtree of the node with the label ",(0,i.kt)("inlineCode",{parentName:"p"},"queries[i]"),"."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the total number of nodes with the value"),(0,i.kt)("inlineCode",{parentName:"p"},"1"),(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"after processing all the queries")),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flipping the value of a node means that the node with the value ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," and vice versa."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"floor(x)")," is equivalent to rounding ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," down to the nearest integer.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 5 , queries = [1,2,5]\nOutput: 3\nExplanation: The diagram above shows the tree structure and its status after performing the queries. The blue node represents the value 0, and the red node represents the value 1.\nAfter processing the queries, there are three red nodes (nodes with value 1): 1, 3, and 5.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 3, queries = [2,3,3]\nOutput: 1\nExplanation: The diagram above shows the tree structure and its status after performing the queries. The blue node represents the value 0, and the red node represents the value 1.\nAfter processing the queries, there are one red node (node with value 1): 2.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10 ^ 5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= queries.length <= 10 ^ 5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= queries[i] <= n"))),(0,i.kt)("h2",{id:"approach-1-dfs"},"Approach 1: DFS"),(0,i.kt)(h,{mdxType:"Tabs"},(0,i.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int numberOfNodes(int n, vector<int>& queries) {\n        // f[i] = 1 means we need to flip all values in the subtree of the node i\n        vector<int> f(n + 1);\n        // if we flip the node even times, the value would be same as the original value\n        // e.g. 0 (original value) -> 1 -> 0\n        // if we flip the node odd times, the value would be the the opposite of the original value\n        // e.g.  0 (original value) -> 1 -> 0 -> 1\n        // therefore, we can first process the queries to obtain the final flips\n        for (auto q : queries) f[q] ^= 1;\n        function<int(int, int)> dfs = [&](int u, int v) {\n            // u is the current node label\n            // if u is greater than n, then return 0\n            if (u > n) return 0;\n            // do we need to flip the node u? \n            // we flip the value if f[u] is 1\n            v ^= f[u];\n            // the result would be the value of u, i.e. v \n            // plus the result of the left subtree, i.e dfs(u * 2, v)\n            // plus the result of the right subtree, i.e. dfs(u * 2 + 1, v)\n            return v + dfs(u * 2, v) + dfs(u * 2 + 1, v);\n        };\n        // we start from node 1 with inital value 0\n        return dfs(1, 0);\n    }\n};\n")))))}v.isMDXComponent=!0}}]);