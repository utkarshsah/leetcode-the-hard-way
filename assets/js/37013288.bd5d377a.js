"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[43006],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>h});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},l=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),c=i(t),k=s,h=c["".concat(o,".").concat(k)]||c[k]||N[k]||m;return t?n.createElement(h,r(r({ref:e},l),{},{components:t})):n.createElement(h,r({ref:e},l))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p[c]="string"==typeof a?a:s,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},78300:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>m,metadata:()=>p,toc:()=>i});var n=t(87462),s=(t(67294),t(3905));const m={description:"Author: @heiheihang, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/move-zeroes/"},r="0283 - Move Zeroes (Easy)",p={unversionedId:"0200-0299/move-zeroes-easy",id:"0200-0299/move-zeroes-easy",title:"0283 - Move Zeroes (Easy)",description:"Author: @heiheihang, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/move-zeroes/",source:"@site/solutions/0200-0299/0283-move-zeroes-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/move-zeroes-easy",permalink:"/solutions/0200-0299/move-zeroes-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0283-move-zeroes-easy.md",tags:[],version:"current",sidebarPosition:283,frontMatter:{description:"Author: @heiheihang, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/move-zeroes/"},sidebar:"tutorialSidebar",previous:{title:"0278 - First Bad Version (Easy)",permalink:"/solutions/0200-0299/first-bad-version-easy"},next:{title:"0286 - Walls and Gates (Medium)",permalink:"/solutions/0200-0299/walls-and-gates-medium"}},o={},i=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two pointers",id:"approach-1-two-pointers",level:2},{value:"Approach 2: Two pointers Optimal",id:"approach-2-two-pointers-optimal",level:2}],l=a=>function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)},c=l("Tabs"),N=l("TabItem"),k=l("SolutionAuthor"),h={toc:i},u="wrapper";function d(a){let{components:e,...t}=a;return(0,s.kt)(u,(0,n.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0283---move-zeroes-easy"},"0283 - Move Zeroes (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/move-zeroes/"},"https://leetcode.com/problems/move-zeroes/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given an integer array ",(0,s.kt)("inlineCode",{parentName:"p"},"nums"),", move all ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),"'s to the end of it while maintaining the relative order of the non-zero elements."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note")," that you must do this in-place without making a copy of the array."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [0,1,0,3,12]\nOutput: [1,3,12,0,0]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [0]\nOutput: [0]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-2^31 <= nums[i] <= 2^31 - 1"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Follow up:")," Could you minimize the total number of operations done?"),(0,s.kt)("h2",{id:"approach-1-two-pointers"},"Approach 1: Two pointers"),(0,s.kt)("p",null,"We need to set two pointers for this problem. The first pointer identifies the current number it is looking at. The second pointer identifies the next un-updated slot for moving the non-zero numbers in."),(0,s.kt)("p",null,"When we see a non-zero element, we put it in the slot pointed by ",(0,s.kt)("inlineCode",{parentName:"p"},"left_pointer"),", and then increment ",(0,s.kt)("inlineCode",{parentName:"p"},"left_pointer"),". When we see a zero, we just skip."),(0,s.kt)("p",null,"At the end, we need to set all the unused slots of ",(0,s.kt)("inlineCode",{parentName:"p"},"nums")," to zero."),(0,s.kt)(c,{mdxType:"Tabs"},(0,s.kt)(N,{value:"py",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'def moveZeroes(self, nums: List[int]) -> None:\n        """\n        Do not return anything, modify nums in-place instead.\n        """\n        #initialize left pointer to keep track of spaces for non-zero elements\n        left_pointer = 0\n        #iterate all numbers in nums\n        for i in range(len(nums)):\n            #we skip if we see a 0\n            if(nums[i] == 0):\n                continue\n            else:\n                #we put the current number to the empty space if its non-zero\n                nums[left_pointer] = nums[i]\n                #as the current position is filled, move to the next one\n                left_pointer += 1\n        \n        #we put zeros to the remaining spots in nums\n        for i in range(left_pointer, len(nums)):\n            nums[i] = 0\n            \n'))),(0,s.kt)(N,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(k,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public void moveZeroes(int[] nums) {\n        if (nums.length == 1) return;\n        int idx = 0;\n        for (int num : nums) {\n            if (num != 0) {\n                nums[idx++] = num;\n            }\n        }\n        while (idx < nums.length) {\n            nums[idx++] = 0;\n        }\n    }\n}\n"))),(0,s.kt)(N,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar moveZeroes = function(nums) {\n    let slow = 0;\n    for (let fast = 0; fast < nums.length; fast++) {\n        if (nums[fast] === 0) {\n            continue;\n        } else {\n            nums[slow] = nums[fast];\n            slow++;\n        }\n    }\n    while (slow < nums.length) {\n        nums[slow] = 0;\n        slow++;\n    }\n};\n")))),(0,s.kt)("h2",{id:"approach-2-two-pointers-optimal"},"Approach 2: Two pointers Optimal"),(0,s.kt)("p",null,"Iterate through numbers and count the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0")))))," occurances, while doing so, if any non-zero number present and if the zero's count more than ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),", shift the current number to current ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"index - count0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"co"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0")))))," count index. This solves the problem in linear time and optimally.  "),(0,s.kt)("p",null,"For example, the given input is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"12"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1, 3, 0, 0, 12]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"12"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),", right now ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"12")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"12")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"12")))))," has to be placed in first ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0")))))," th position. While iterating, we have count ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2")))))," zero's and we are at the last index. Shift ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"12")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"12")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"12")))))," present in current index ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))," to index ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"))))),", apply ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums[i - count0] = nums[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"co"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," and set ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0")))))," in the current index. "),(0,s.kt)(c,{mdxType:"Tabs"},(0,s.kt)(N,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(k,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public void moveZeroes(int[] nums) {\n        if (nums.length == 1) return;\n        int count0 = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] == 0) {\n                count0 += 1;\n            } else if (count0 > 0) {\n                nums[i - count0] = nums[i];\n                nums[i] = 0;\n            }\n        }\n    }\n}\n"))),(0,s.kt)(N,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar moveZeroes = function(nums) {\n    let count_zero = 0;\n    // iterate through array\n    for (i = 0; i < nums.length; i++) {\n        // count the zeros\n        if (nums[i] == 0) count_zero++;\n        // if the current number is not zero and\n        // if zero's count is one or more\n        else if (count_zero > 0) {\n            // swap them\n            nums[i - count_zero] = nums[i];\n            nums[i] = 0\n        }\n    }\n};\n"))),(0,s.kt)(N,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        """\n        Do not return anything, modify nums in-place instead.\n        """\n        count_zero = 0\n        # iterate through array\n        for i in range(len(nums)):\n            # count the zeros\n            if nums[i] == 0:\n                count_zero += 1\n            # if the current number is not 0 and \n            # if zero\'s count is 1 or more\n            elif count_zero > 0:\n                # swap them \n                nums[i - count_zero] = nums[i]\n                nums[i] = 0\n'))),(0,s.kt)(N,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        int countZeros = 0;\n        // iterate through array\n        for (int i = 0; i < nums.size(); i++) {\n            // count zeros\n            if (nums[i] == 0) {\n                countZeros++;\n            // if the current number is not 0\n            // and if zero's count is 1 or more\n            } else if (countZeros > 0) {\n                // swap them\n                nums[i - countZeros] = nums[i];\n                nums[i] = 0;\n            }\n        }\n    }\n};\n")))))}d.isMDXComponent=!0}}]);