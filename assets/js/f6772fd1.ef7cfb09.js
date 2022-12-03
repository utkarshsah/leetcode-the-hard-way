"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[18617],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21922:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/",tags:["Array","String"]},s="1662 - Check If Two String Arrays are Equivalent (Easy)",c={unversionedId:"1600-1699/check-if-two-string-arrays-are-equivalent-easy",id:"1600-1699/check-if-two-string-arrays-are-equivalent-easy",title:"1662 - Check If Two String Arrays are Equivalent (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/",source:"@site/solutions/1600-1699/1662-check-if-two-string-arrays-are-equivalent-easy.md",sourceDirName:"1600-1699",slug:"/1600-1699/check-if-two-string-arrays-are-equivalent-easy",permalink:"/leetcode-the-hard-way/solutions/1600-1699/check-if-two-string-arrays-are-equivalent-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1600-1699/1662-check-if-two-string-arrays-are-equivalent-easy.md",tags:[{label:"Array",permalink:"/leetcode-the-hard-way/solutions/tags/array"},{label:"String",permalink:"/leetcode-the-hard-way/solutions/tags/string"}],version:"current",sidebarPosition:1662,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/",tags:["Array","String"]},sidebar:"tutorialSidebar",previous:{title:"1657 - Determine If Two Strings Are Close (Medium)",permalink:"/leetcode-the-hard-way/solutions/1600-1699/define-if-two-strings-are-close-medium"},next:{title:"1672 - Richest Customer Wealth (Easy)",permalink:"/leetcode-the-hard-way/solutions/1600-1699/richest-customer-wealth-easy"}},p={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two Pointers",id:"approach-1-two-pointers",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},m=d("Tabs"),h=d("TabItem"),w=d("SolutionAuthor"),f={toc:u};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1662---check-if-two-string-arrays-are-equivalent-easy"},"1662 - Check If Two String Arrays are Equivalent (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/"},"https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given two string arrays ",(0,o.kt)("inlineCode",{parentName:"p"},"word1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"word2"),", return",(0,o.kt)("inlineCode",{parentName:"p"},"true"),(0,o.kt)("em",{parentName:"p"},"if the two arrays ",(0,o.kt)("strong",{parentName:"em"},"represent")," the same string, and"),(0,o.kt)("inlineCode",{parentName:"p"},"false"),(0,o.kt)("em",{parentName:"p"},"otherwise.")),(0,o.kt)("p",null,"A string is ",(0,o.kt)("strong",{parentName:"p"},"represented")," by an array if the array elements concatenated ",(0,o.kt)("strong",{parentName:"p"},"in order")," forms the string."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: word1 = ["ab", "c"], word2 = ["a", "bc"]\nOutput: true\nExplanation:\nword1 represents string "ab" + "c" -> "abc"\nword2 represents string "a" + "bc" -> "abc"\nThe strings are the same, so return true.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: word1 = ["a", "cb"], word2 = ["ab", "c"]\nOutput: false\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]\nOutput: true\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= word1.length, word2.length <= 103")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= word1[i].length, word2[i].length <= 103")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= sum(word1[i].length), sum(word2[i].length) <= 103")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"word1[i]")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"word2[i]")," consist of lowercase letters.")),(0,o.kt)("h2",{id:"approach-1-two-pointers"},"Approach 1: Two Pointers"),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(w,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // intuition: \n    // we can combine all words together as `s1` and `s2` and then compare,\n    // based on the above idea, we can simulate it by using two pointers \n    // to check if a character in one word matches that in another word\n    // if we've processed one character, then we move to another character in the same word\n    // if we've processed one word, then we move to the next word\n    // if they are equivalent, both word pointers should be pointing at the end\n    bool arrayStringsAreEqual(vector<string>& word1, vector<string>& word2) {\n        int n = word1.size(), m = word2.size();\n        // pointer to the words in word1 and word2\n        int i = 0, j = 0;\n        // pointer to the character in `word1[i]` and `word2[j]`\n        int x = 0, y = 0;\n        while (i < n && j < m) {\n            // if both character doesn't match, then return false\n            // remember to increase the pointer x and y \n            // otherwise, it will cause TLE\n            if (word1[i][x++] != word2[j][y++]) return false;\n            // reach the end of the current word\n            // move to another word\n            // reset the pointer to 0 for the new word\n            if (x == word1[i].size()) i += 1, x = 0;\n            if (y == word2[j].size()) j += 1, y = 0;\n        }\n        // if they are equivalent, word pointers would be at position n and m \n        return i == n && j == m;\n    }\n};\n")))))}y.isMDXComponent=!0}}]);