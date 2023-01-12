"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[15019],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69942:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r,a=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/richest-customer-wealth/",tags:["Array","Matrix"]},u="1672 - Richest Customer Wealth (Easy)",c={unversionedId:"1600-1699/richest-customer-wealth-easy",id:"1600-1699/richest-customer-wealth-easy",title:"1672 - Richest Customer Wealth (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/richest-customer-wealth/",source:"@site/solutions/1600-1699/1672-richest-customer-wealth-easy.md",sourceDirName:"1600-1699",slug:"/1600-1699/richest-customer-wealth-easy",permalink:"/solutions/1600-1699/richest-customer-wealth-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1600-1699/1672-richest-customer-wealth-easy.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:1672,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/richest-customer-wealth/",tags:["Array","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"1662 - Check If Two String Arrays are Equivalent (Easy)",permalink:"/solutions/1600-1699/check-if-two-string-arrays-are-equivalent-easy"},next:{title:"1679 - Max Number of K-Sum Pairs (Medium)",permalink:"/solutions/1600-1699/max-number-of-k-sum-pairs-medium"}},p={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Max Row Sum",id:"approach-1-max-row-sum",level:2},{value:"Approach 2: Max Row Sum (STL)",id:"approach-2-max-row-sum-stl",level:2}],h=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),d={toc:m};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1672---richest-customer-wealth-easy"},"1672 - Richest Customer Wealth (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/richest-customer-wealth"},"https://leetcode.com/problems/richest-customer-wealth")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given an ",(0,i.kt)("inlineCode",{parentName:"p"},"m x n")," integer grid ",(0,i.kt)("inlineCode",{parentName:"p"},"accounts")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"accounts[i][j]")," is the amount of money the ",(0,i.kt)("inlineCode",{parentName:"p"},"i-th")," customer has in the ",(0,i.kt)("inlineCode",{parentName:"p"},"j-th")," bank. Return ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"wealth")," that the richest customer has.")),(0,i.kt)("p",null,"A customer's ",(0,i.kt)("strong",{parentName:"p"},"wealth")," is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum ",(0,i.kt)("strong",{parentName:"p"},"wealth"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: accounts = [[1,2,3],[3,2,1]]\nOutput: 6\nExplanation:\n1st customer has wealth = 1 + 2 + 3 = 6\n2nd customer has wealth = 3 + 2 + 1 = 6\nBoth customers are considered the richest with a wealth of 6 each, so return 6.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: accounts = [[1,5],[7,3],[3,5]]\nOutput: 10\nExplanation: \n1st customer has wealth = 6\n2nd customer has wealth = 10 \n3rd customer has wealth = 8\nThe 2nd customer is the richest with a wealth of 10.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]\nOutput: 17\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m == accounts.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n == accounts[i].length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 50")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= accounts[i][j] <= 100"))),(0,i.kt)("h2",{id:"approach-1-max-row-sum"},"Approach 1: Max Row Sum"),(0,i.kt)("p",null,"Given a ",(0,i.kt)("inlineCode",{parentName:"p"},"m x n")," grid, we need to find the maximum row sum. We iterate each row and define ",(0,i.kt)("inlineCode",{parentName:"p"},"wealth = 0"),", then iterate each column, add each ",(0,i.kt)("inlineCode",{parentName:"p"},"accounts[i][j]")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"wealth"),". After that, update the answer if the wealth for the current row is greater than the current maximum sum."),(0,i.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maximumWealth(vector<vector<int>>& accounts) {\n        int ans = 0, n = accounts.size(), m = accounts[0].size();\n        for (int i = 0; i < n; i++) {\n            int wealth = 0;\n            for (int j = 0; j < m; j++) {\n                wealth += accounts[i][j];\n            }\n            ans = max(ans, wealth);\n        }\n        return ans;\n    }\n};\n")),(0,i.kt)("p",null,"Actually we don't need to define ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"j")," if we write in the following style."),(0,i.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maximumWealth(vector<vector<int>>& accounts) {\n        int ans = 0;\n        for (auto x : accounts) {\n            int wealth = 0;\n            for (auto y : x) wealth += y;\n            ans = max(ans, wealth);\n        }\n        return ans;\n    }\n};\n")),(0,i.kt)("h2",{id:"approach-2-max-row-sum-stl"},"Approach 2: Max Row Sum (STL)"),(0,i.kt)("p",null,"Same idea as approach 1 but it is using STL."),(0,i.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maximumWealth(vector<vector<int>>& accounts) {\n        int ans = 0;\n        for (auto x : accounts) {\n            ans = max(ans, accumulate(x.begin(), x.end(), 0));\n        }\n        return ans;\n    }\n}\n")))}k.isMDXComponent=!0}}]);