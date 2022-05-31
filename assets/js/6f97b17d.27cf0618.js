"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8468],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,f=c["".concat(p,".").concat(d)]||c[d]||s[d]||a;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=n(92194),i=["components"],p={description:"Author: @tostream | https://leetcode.com/problems/palindrome-number/"},u="0009 - Palindrome Number (Easy)",m={unversionedId:"0000-0099/palindrome-number-easy",id:"0000-0099/palindrome-number-easy",title:"0009 - Palindrome Number (Easy)",description:"Author: @tostream | https://leetcode.com/problems/palindrome-number/",source:"@site/solutions/0000-0099/0009-palindrome-number-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/palindrome-number-easy",permalink:"/leetcode-the-hard-way/solutions/0000-0099/palindrome-number-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0000-0099/0009-palindrome-number-easy.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Author: @tostream | https://leetcode.com/problems/palindrome-number/"},sidebar:"tutorialSidebar",previous:{title:"0005 - Longest Palindromic Substring (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/longest-palindromic-substring-medium"},next:{title:"0011 - Container With Most Water (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/container-with-most-water-medium"}},s={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Convert to string",id:"approach-1-convert-to-string",level:2},{value:"Approach 2: Calculation",id:"approach-2-calculation",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0009---palindrome-number-easy"},"0009 - Palindrome Number (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/palindrome-number/"},"https://leetcode.com/problems/palindrome-number/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an integer ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),", return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," is palindrome integer."),(0,a.kt)("p",null,"An integer is a ",(0,a.kt)("strong",{parentName:"p"},"palindrome")," when it reads the same backward as forward."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For example, ",(0,a.kt)("inlineCode",{parentName:"li"},"121")," is a palindrome while ",(0,a.kt)("inlineCode",{parentName:"li"},"123")," is not.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: x = 121\nOutput: true\nExplanation: 121 reads as 121 from left to right and from right to left.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: x = -121\nOutput: false\nExplanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: x = 10\nOutput: false\nExplanation: Reads 01 from right to left. Therefore it is not a palindrome.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-2^31 <= x <= 2^31 - 1"))),(0,a.kt)("h2",{id:"approach-1-convert-to-string"},"Approach 1: Convert to string"),(0,a.kt)("p",null,"Convert the integer value to string format and compare it one by one."),(0,a.kt)(l.Z,{names:"@wingkwong",mdxType:"Authors"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        #str: convert to string\n        #[::-1]: read from the end\n        return str(x) == str(x)[::-1]\n")),(0,a.kt)("h2",{id:"approach-2-calculation"},"Approach 2: Calculation"),(0,a.kt)("p",null,"Calculate the reversed number."),(0,a.kt)(l.Z,{names:"@wingkwong",mdxType:"Authors"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        in_num = x\n        reverser = 0\n        while in_num > 0:\n            reverser = reverser * 10 + checker % 10\n            in_num = in_num//10\n        return reverser == x\n")))}f.isMDXComponent=!0},92194:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294);function o(e){var t=e.names.split(",");return r.createElement("div",{className:"author-wrapper"},t.length>1?"Authors":"Author",":",t.map((function(e,t){return r.createElement("span",{key:t,className:"author-tag"},e)})))}}}]);