"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34939],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),i=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=i(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=i(a),h=r,d=c["".concat(m,".").concat(h)]||c[h]||u[h]||s;return a?n.createElement(d,o(o({ref:t},l),{},{components:a})):n.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},63070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const s={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/"},o="1269 - Number of Ways to Stay in the Same Place After Some Steps (Hard)",p={unversionedId:"1200-1299/number-of-ways-to-stay-in-the-same-place-after-some-steps-hard",id:"1200-1299/number-of-ways-to-stay-in-the-same-place-after-some-steps-hard",title:"1269 - Number of Ways to Stay in the Same Place After Some Steps (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/",source:"@site/solutions/1200-1299/1269-number-of-ways-to-stay-in-the-same-place-after-some-steps-hard.md",sourceDirName:"1200-1299",slug:"/1200-1299/number-of-ways-to-stay-in-the-same-place-after-some-steps-hard",permalink:"/solutions/1200-1299/number-of-ways-to-stay-in-the-same-place-after-some-steps-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1200-1299/1269-number-of-ways-to-stay-in-the-same-place-after-some-steps-hard.md",tags:[],version:"current",sidebarPosition:1269,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/"},sidebar:"tutorialSidebar",previous:{title:"1259 - Handshakes That Don't Cross (Hard)",permalink:"/solutions/1200-1299/handshakes-that-dont-cross-hard"},next:{title:"1281 - Subtract the Product and Sum of Digits of an Integer (Easy)",permalink:"/solutions/1200-1299/subtract-the-product-and-sum-of-digits-of-an-integer-easy"}},m={},i=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}],l=(c="SolutionAuthor",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const u={toc:i},h="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1269---number-of-ways-to-stay-in-the-same-place-after-some-steps-hard"},"1269 - Number of Ways to Stay in the Same Place After Some Steps (Hard)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/"},"https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You have a pointer at index ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," in an array of size ",(0,r.kt)("inlineCode",{parentName:"p"},"arrLen"),". At each step, you can move 1 position to the left, 1 position to the right in the array, or stay in the same place (The pointer should not be placed outside the array at any time)."),(0,r.kt)("p",null,"Given two integers ",(0,r.kt)("inlineCode",{parentName:"p"},"steps")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"arrLen"),", return the number of ways such that your pointer still at index ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," after ",(0,r.kt)("strong",{parentName:"p"},"exactly")," ",(0,r.kt)("inlineCode",{parentName:"p"},"steps")," steps. Since the answer may be too large, return it ",(0,r.kt)("strong",{parentName:"p"},"modulo")," ",(0,r.kt)("inlineCode",{parentName:"p"},"109 + 7"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: steps = 3, arrLen = 2\nOutput: 4\nExplanation: There are 4 differents ways to stay at index 0 after 3 steps.\nRight, Left, Stay\nStay, Right, Left\nRight, Stay, Left\nStay, Stay, Stay\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: steps = 2, arrLen = 4\nOutput: 2\nExplanation: There are 2 differents ways to stay at index 0 after 2 steps\nRight, Left\nStay, Stay\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: steps = 4, arrLen = 2\nOutput: 8\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= steps <= 500")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= arrLen <= 10^6"))),(0,r.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,r.kt)("p",null,"The first observation is that the computational complexity does not depend on ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"L"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"arrLen")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"rr"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),". Instead, it is all about steps. If we have ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," steps, we can only walk at most ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mn",{parentName:"mrow"},"2")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n / 2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/2")))))," steps to the left or the right. Therefore, we can use DFS with memoization to find out the answer."),(0,r.kt)(l,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int numWays(int steps, int arrLen) {\n        int M = 1e9 + 7;\n        // dp[i][j]: how many ways to reach i-th pos using j steps\n        vector<vector<int>> dp(steps / 2 + 1, vector<int>(steps + 1, -1));\n        function<long long(int,int)> dfs = [&](int pos, int steps) -> long long {\n            // if we walk outside the array or use all the steps\n            // then return 0\n            if (pos < 0 || pos > arrLen - 1 || pos > steps) return 0;\n            // if we use all the steps, return 1 only if pos is 0\n            if (steps == 0) return pos == 0;\n            // if it has been calculated, return directly\n            if (dp[pos][steps] != -1) return dp[pos][steps];\n            // memoize it\n            return dp[pos][steps] = (\n                // move to the left\n                dfs(pos - 1, steps - 1) % M + \n                // stay at current position\n                dfs(pos, steps - 1) % M + \n                // move to the right\n                dfs(pos + 1, steps - 1) % M\n            ) % M;\n        };\n        return dfs(0, steps);\n    }\n};\n")),(0,r.kt)(l,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def numWays(self, steps: int, arrLen: int) -> int:\n        M = 10 ** 9 + 7\n        @lru_cache(None)\n        def dfs(pos, steps):\n            # if we walk outside the array or use all the steps\n            # then return 0\n            if pos < 0 or pos > steps or pos > arrLen - 1: return 0\n            # if we use all the steps, return 1 only if pos is 0\n            if steps == 0: return pos == 0\n            return (\n                # move to the left\n                dfs(pos - 1, steps - 1) +\n                # stay at current position\n                dfs(pos, steps - 1) +\n                # move to the right\n                dfs(pos + 1, steps - 1) \n            ) % M\n        return dfs(0, steps)\n")))}d.isMDXComponent=!0}}]);