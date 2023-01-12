"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[87907],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return b}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=p(t),b=i,d=s["".concat(u,".").concat(b)]||s[b]||m[b]||l;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=s;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},77408:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r,i=t(87462),l=t(63366),o=(t(67294),t(3905)),a=["components"],u={description:"Author: @wingkwong | https://leetcode.com/problems/ugly-number-iii/"},p="1201 - Ugly Number III (Medium)",c={unversionedId:"1200-1299/ugly-number-iii-medium",id:"1200-1299/ugly-number-iii-medium",title:"1201 - Ugly Number III (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/ugly-number-iii/",source:"@site/solutions/1200-1299/1201-ugly-number-iii-medium.md",sourceDirName:"1200-1299",slug:"/1200-1299/ugly-number-iii-medium",permalink:"/solutions/1200-1299/ugly-number-iii-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1200-1299/1201-ugly-number-iii-medium.md",tags:[],version:"current",sidebarPosition:1201,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/ugly-number-iii/"},sidebar:"tutorialSidebar",previous:{title:"1200 - 1299",permalink:"/solutions/category/1200---1299"},next:{title:"1202 - Smallest String With Swaps (Medium)",permalink:"/solutions/1200-1299/smallest-string-with-swaps-medium"}},m={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Inclusive-Exclusive + Binary Search",id:"approach-1-inclusive-exclusive--binary-search",level:2}],b=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),d={toc:s};function g(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1201---ugly-number-iii-medium"},"1201 - Ugly Number III (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/ugly-number-iii/"},"https://leetcode.com/problems/ugly-number-iii/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"ugly number")," is a positive integer that is divisible by ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"b"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"c"),"."),(0,o.kt)("p",null,"Given four integers ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"b"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"c"),", return the ",(0,o.kt)("inlineCode",{parentName:"p"},"nth")," ",(0,o.kt)("strong",{parentName:"p"},"ugly number"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 3, a = 2, b = 3, c = 5\nOutput: 4\nExplanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 4, a = 2, b = 3, c = 4\nOutput: 6\nExplanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 5, a = 2, b = 11, c = 13\nOutput: 10\nExplanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n, a, b, c <= 10^9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= a * b * c <= 10^18")),(0,o.kt)("li",{parentName:"ul"},"It is guaranteed that the result will be in range ",(0,o.kt)("inlineCode",{parentName:"li"},"[1, 2 * 10^9]"),".")),(0,o.kt)("h2",{id:"approach-1-inclusive-exclusive--binary-search"},"Approach 1: Inclusive-Exclusive + Binary Search"),(0,o.kt)(b,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int ok(long long n, long long a, long long b, long long c) {\n        // numbers (1 to n) divisble by a = n / a\n        // numbers (1 to n) divisble by b = n / b\n        // numbers (1 to n) divisble by c = n / c\n        // exclude overlapping counts for a and b = n / lcm(a, b)\n        // exclude overlapping counts for b and c = n / lcm(b, c)\n        // exclude overlapping counts for a and c = n / lcm(a, c)\n        // include those covered by all a, b and c = n / lcm(a, lcm(b, c))  \n        \n        // Set theory Formula: \n        // a + b + c - a \u2229 c - a \u2229 b - b \u2229 c + a \u2229 b \u2229 c\n        return (int) n / a + n / b + n / c \n        - n / lcm(a, b)\n        - n / lcm(b, c)\n        - n / lcm(a, c)\n        + n / lcm(a, lcm(b, c));\n    }\n    \n    int nthUglyNumber(int n, int a, int b, int c) {\n        // init possible range [1, 2 * 10 ^ 9]\n        int l = 1, r = 2e9;\n        while (l < r) {\n            // get the middle one\n            // for even number of elements, take the lower one\n            int m = l + (r - l) / 2;\n            // exclude m\n            if (n > ok(m, a, b, c)) l = m + 1;\n            // include m\n            else r = m;\n        }\n        return l;\n    }\n};\n")))}g.isMDXComponent=!0}}]);