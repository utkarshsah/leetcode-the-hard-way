"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[29753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,m=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,u=c["".concat(s,".").concat(d)]||c[d]||h[d]||m;return n?a.createElement(u,i(i({ref:t},l),{},{components:n})):a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=n.length,i=new Array(m);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<m;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>m,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const m={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/"},i="2127 - Maximum Employees to Be Invited to a Meeting (Hard)",o={unversionedId:"2100-2199/maximum-employees-to-be-invited-to-a-meeting-hard",id:"2100-2199/maximum-employees-to-be-invited-to-a-meeting-hard",title:"2127 - Maximum Employees to Be Invited to a Meeting (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/",source:"@site/solutions/2100-2199/2127-maximum-employees-to-be-invited-to-a-meeting-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/maximum-employees-to-be-invited-to-a-meeting-hard",permalink:"/solutions/2100-2199/maximum-employees-to-be-invited-to-a-meeting-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2127-maximum-employees-to-be-invited-to-a-meeting-hard.md",tags:[],version:"current",sidebarPosition:2127,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/"},sidebar:"tutorialSidebar",previous:{title:"2122 - Recover the Original Array (Hard)",permalink:"/solutions/2100-2199/recover-the-original-array-hard"},next:{title:"2131 - Longest Palindrome by Concatenating Two Letter Words (Medium)",permalink:"/solutions/2100-2199/longest-palindrome-by-concatenating-two-letter-words-medium"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}],l=(c="SolutionAuthor",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const h={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2127---maximum-employees-to-be-invited-to-a-meeting-hard"},"2127 - Maximum Employees to Be Invited to a Meeting (Hard)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/"},"https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"A company is organizing a meeting and has a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," employees, waiting to be invited. They have arranged for a large ",(0,r.kt)("strong",{parentName:"p"},"circular")," table, capable of seating ",(0,r.kt)("strong",{parentName:"p"},"any number")," of employees."),(0,r.kt)("p",null,"The employees are numbered from ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"n - 1"),". Each employee has a ",(0,r.kt)("strong",{parentName:"p"},"favorite")," person and they will attend the meeting ",(0,r.kt)("strong",{parentName:"p"},"only if")," they can sit next to their favorite person at the table. The favorite person of an employee is ",(0,r.kt)("strong",{parentName:"p"},"not")," themself."),(0,r.kt)("p",null,"Given a ",(0,r.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,r.kt)("inlineCode",{parentName:"p"},"favorite"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"favorite[i]")," denotes the favorite person of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ith")," employee, return ",(0,r.kt)("em",{parentName:"p"},"the ",(0,r.kt)("strong",{parentName:"em"},"maximum number of employees")," that can be invited to the meeting"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/14/ex1.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: favorite = [2,2,1,2]\nOutput: 3\nExplanation:\nThe above figure shows how the company can invite employees 0, 1, and 2, and seat them at the round table.\nAll employees cannot be invited because employee 2 cannot sit beside employees 0, 1, and 3, simultaneously.\nNote that the company can also invite employees 1, 2, and 3, and give them their desired seats.\nThe maximum number of employees that can be invited to the meeting is 3. \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: favorite = [1,2,0]\nOutput: 3\nExplanation: \nEach employee is the favorite person of at least one other employee, and the only way the company can invite them is if they invite every employee.\nThe seating arrangement will be the same as that in the figure given in example 1:\n- Employee 0 will sit between employees 2 and 1.\n- Employee 1 will sit between employees 0 and 2.\n- Employee 2 will sit between employees 1 and 0.\nThe maximum number of employees that can be invited to the meeting is 3.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/14/ex2.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: favorite = [3,0,1,4,1]\nOutput: 4\nExplanation:\nThe above figure shows how the company will invite employees 0, 1, 3, and 4, and seat them at the round table.\nEmployee 2 cannot be invited because the two spots next to their favorite employee 1 are taken.\nSo the company leaves them out of the meeting.\nThe maximum number of employees that can be invited to the meeting is 4.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n == favorite.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2 <= n <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= favorite[i] <= n - 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"favorite[i] != i"))),(0,r.kt)("h2",{id:"approach-1-dfs"},"Approach 1: DFS"),(0,r.kt)("p",null,"If an employee A has a favourite person, let's say employee B, and vice versa. Then we can put them together. Then we can put an employee, let's say C, whose favourite person is A on the left hand side of A. Then put an employee, let's say D, whose favourite person is C next to C. If we do the same thing for employee B, then we can have two ways to extend. Therefore, we can first look for the interdependent nodes, in this case, A & B."),(0,r.kt)("p",null,"Starting from node A and node B, we perform dfs to calculate the maximum nodes of the left chain and the right chain. Then we could invite ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"f"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"h"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"2")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"left+right+2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"))))),"people."),(0,r.kt)("p",null,"However, it would fail for the input ","[","1,2,0] because it will output ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0")))))," instead of ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"3")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"))))),". In this case, we need to take care of the cyclic dependency. We need to run another dfs function for each node and check if there is a cyclic dependency. If the visited node is the entry node, then we know there is a cycle here. Then we could invite them also."),(0,r.kt)("p",null,"The final answer is simple the maximum number of the result of case 1 and case 2."),(0,r.kt)(l,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maximumInvitations(vector<int>& a) {\n        int n = a.size();\n        vector<int> depth(n, -1);\n        vector<vector<int>> inv(n);\n        for (int i = 0 ; i < n; i++) inv[a[i]].push_back(i);\n        // check interdependent nodes + longest left & right chain\n        function<int(int)> dfs = [&](int u) {\n            if (depth[u] != -1) return depth[u];\n            int res = 0;\n            for (int x : inv[u]) res = max(res, dfs(x));\n            return depth[u] = res + 1;\n        };\n        int mx1 = 0, mx2 = 0;\n        for (int i = 0; i < n; i++) {\n            if (depth[i] != -1) continue;\n            if (a[a[i]] == i) {\n                depth[i] = depth[a[i]] = 0;\n                int left = 0, right = 0;\n                for (int x : inv[i])    if (x != a[i]) left  = max(left, dfs(x));\n                for (int x : inv[a[i]]) if (x != a[i]) right = max(right, dfs(x));\n                mx1 += left + right + 2;\n            }\n        }\n        // check cyclic dependency\n        function<tuple<int, int, int>(int)> dfs2 = [&](int u)->tuple<int, int, int> {\n            if (depth[u] != -1) {\n                return { u, depth[u], 0 };\n            }  \n            depth[u] = 0;\n            auto [entry, d, isCyclic] = dfs2(a[u]);\n            if (isCyclic) {\n                return { entry, d, 1 };\n            }\n            depth[u] = d + 1;\n            return {\n                entry,\n                depth[u],\n                u == entry\n            };\n        };\n        \n        for (int i = 0; i < n; i++) {\n            if (depth[i] != -1) continue;\n            auto [entry, d, isCyclic] = dfs2(i);\n            if (isCyclic) {\n                mx2 = max(mx2, d);\n            }\n        }\n        return max(mx1, mx2);\n    }\n};\n")))}u.isMDXComponent=!0}}]);