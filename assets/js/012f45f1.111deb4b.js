"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[61563],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),f=a,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||o;return t?r.createElement(d,u(u({ref:n},p),{},{components:t})):r.createElement(d,u({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},35925:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r,a=t(87462),o=t(63366),u=(t(67294),t(3905)),i=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/",tags:["Hash Map"]},s="1748 - Sum of Unique Elements (Easy)",p={unversionedId:"1700-1799/sum-of-unique-elements-easy",id:"1700-1799/sum-of-unique-elements-easy",title:"1748 - Sum of Unique Elements (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/",source:"@site/solutions/1700-1799/1748-sum-of-unique-elements-easy.md",sourceDirName:"1700-1799",slug:"/1700-1799/sum-of-unique-elements-easy",permalink:"/solutions/1700-1799/sum-of-unique-elements-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1700-1799/1748-sum-of-unique-elements-easy.md",tags:[{label:"Hash Map",permalink:"/solutions/tags/hash-map"}],version:"current",sidebarPosition:1748,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/",tags:["Hash Map"]},sidebar:"tutorialSidebar",previous:{title:"1706 - Where Will the Ball Fall (Medium)",permalink:"/solutions/1700-1799/where-will-the-ball-fall-medium"},next:{title:"1751 - Maximum Number of Events That Can Be Attended II (Hard)",permalink:"/solutions/1700-1799/maximum-number-of-events-that-can-be-attended-ii-hard"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}],f=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,u.kt)("div",e)}),d={toc:c};function h(e){var n=e.components,t=(0,o.Z)(e,i);return(0,u.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"1748---sum-of-unique-elements-easy"},"1748 - Sum of Unique Elements (Easy)"),(0,u.kt)("h2",{id:"problem-link"},"Problem Link"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/"},"https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/")),(0,u.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,u.kt)("p",null,"You are given an integer array ",(0,u.kt)("inlineCode",{parentName:"p"},"nums"),". The unique elements of an array are the elements that appear ",(0,u.kt)("strong",{parentName:"p"},"exactly once")," in the array."),(0,u.kt)("p",null,"Return ",(0,u.kt)("em",{parentName:"p"},"the ",(0,u.kt)("strong",{parentName:"em"},"sum")," of all the unique elements of")," ",(0,u.kt)("inlineCode",{parentName:"p"},"nums"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example 1:")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,2]\nOutput: 4\nExplanation: The unique elements are [1,3], and the sum is 4.\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example 2:")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"Input: nums = [1,1,1,1,1]\nOutput: 0\nExplanation: There are no unique elements, and the sum is 0.\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example 3:")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,4,5]\nOutput: 15\nExplanation: The unique elements are [1,2,3,4,5], and the sum is 15.\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Constraints:")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 100")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 100"))),(0,u.kt)("h2",{id:"approach-1-hash-map"},"Approach 1: Hash Map"),(0,u.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int sumOfUnique(vector<int>& nums) {\n        unordered_map<int, int> m;\n        int ans = 0;\n        // use hash map to count the frequency of each number\n        for(int x : nums) m[x]++;\n        // unique number would have frequency of 1\n        for(auto x : m) {\n            if(x.second == 1) {\n                ans += x.first;\n            }\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);