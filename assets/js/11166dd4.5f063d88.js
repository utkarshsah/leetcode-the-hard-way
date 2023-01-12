"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[61794],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(t),g=r,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||i;return t?o.createElement(d,s(s({ref:n},c),{},{components:t})):o.createElement(d,s({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54804:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var o,r=t(87462),i=t(63366),s=(t(67294),t(3905)),a=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/"},u="1371 - Find the Longest Substring Containing Vowels in Even Counts (Medium)",c={unversionedId:"1300-1399/find-the-longest-substring-containing-vowels-in-even-counts-medium",id:"1300-1399/find-the-longest-substring-containing-vowels-in-even-counts-medium",title:"1371 - Find the Longest Substring Containing Vowels in Even Counts (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/",source:"@site/solutions/1300-1399/1371-find-the-longest-substring-containing-vowels-in-even-counts-medium.md",sourceDirName:"1300-1399",slug:"/1300-1399/find-the-longest-substring-containing-vowels-in-even-counts-medium",permalink:"/solutions/1300-1399/find-the-longest-substring-containing-vowels-in-even-counts-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1371-find-the-longest-substring-containing-vowels-in-even-counts-medium.md",tags:[],version:"current",sidebarPosition:1371,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/"},sidebar:"tutorialSidebar",previous:{title:"1365 - How Many Numbers Are Smaller Than the Current Number (Easy)",permalink:"/solutions/1300-1399/how-many-numbers-are-smaller-than-the-current-number-easy"},next:{title:"1383 - Maximum Performance of a Team (Hard)",permalink:"/solutions/1300-1399/maximum-performance-of-a-team-hard"}},p={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit-Masking",id:"approach-1-bit-masking",level:2}],g=(o="SolutionAuthor",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),d={toc:m};function h(e){var n=e.components,t=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"1371---find-the-longest-substring-containing-vowels-in-even-counts-medium"},"1371 - Find the Longest Substring Containing Vowels in Even Counts (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/"},"https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given the string ",(0,s.kt)("inlineCode",{parentName:"p"},"s"),", return the size of the longest substring containing each vowel an even number of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "eleetminicoworoep"\nOutput: 13\nExplanation: The longest substring is "leetminicowor" which contains two each of the vowels: e, i and o and zero of the vowels: a and u.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "leetcodeisgreat"\nOutput: 5\nExplanation: The longest substring is "leetc" which contains two e\'s.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "bcbcbc"\nOutput: 6\nExplanation: In this case, the given string "bcbcbc" is the longest because all vowels: a, e, i, o and u appear zero times.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 5 x 10^5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"s")," contains only lowercase English letters.")),(0,s.kt)("h2",{id:"approach-1-bit-masking"},"Approach 1: Bit-Masking"),(0,s.kt)("p",null,"We know that if we toggle a bit even number of times, it would be same as the original. We use the bit to represent if the vowel appears an even number of times or not. Since we only have 5 letters, which only gives 32 possibilities."),(0,s.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findTheLongestSubstring(string s) {\n        unordered_map<char, int> m({\n            { 'a', 0 },\n            { 'e', 1 },\n            { 'i', 2 },\n            { 'o', 3 },\n            { 'u', 4 }\n        });\n        unordered_map<int, int> where({{0, -1}});\n        int ans = 0, mask = 0;\n        for (int i = 0; i < s.size(); i++) {\n            // if it is a vowel, toggle it\n            if (m.count(s[i])) mask ^= (1 << m[s[i]]);\n            // if the mask does not appear before, record the position\n            if (!where.count(mask)) where[mask] = i;\n            // the current position - the previous position\n            ans = max(ans, i - where[mask]);\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);