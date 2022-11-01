"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[77481],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,d=c["".concat(l,".").concat(u)]||c[u]||h[u]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13974:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return w},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],m={description:"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/container-with-most-water/"},l="0011 - Container With Most Water (Medium)",s={unversionedId:"0000-0099/container-with-most-water-medium",id:"0000-0099/container-with-most-water-medium",title:"0011 - Container With Most Water (Medium)",description:"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/container-with-most-water/",source:"@site/solutions/0000-0099/0011-container-with-most-water-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/container-with-most-water-medium",permalink:"/leetcode-the-hard-way/solutions/0000-0099/container-with-most-water-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0011-container-with-most-water-medium.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{description:"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/container-with-most-water/"},sidebar:"tutorialSidebar",previous:{title:"0009 - Palindrome Number (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/palindrome-number-easy"},next:{title:"0014 - Longest Common Prefix (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/longest-common-prefix-easy"}},p={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two Pointers",id:"approach-1-two-pointers",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},u=c("Tabs"),d=c("TabItem"),k=c("SolutionAuthor"),g={toc:h};function w(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0011---container-with-most-water-medium"},"0011 - Container With Most Water (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/container-with-most-water/"},"https://leetcode.com/problems/container-with-most-water/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," of length ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),". There are ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," vertical lines drawn such that the two endpoints of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ith")," line are ",(0,i.kt)("inlineCode",{parentName:"p"},"(i, 0)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"(i, height[i])"),"."),(0,i.kt)("p",null,"Find two lines that together with the x-axis form a container, such that the container contains the most water."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the maximum amount of water a container can store"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notice")," that you may not slant the container."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49\nExplanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: height = [1,1]\nOutput: 1\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n == height.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2 <= n <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= height[i] <= 10^4"))),(0,i.kt)("h2",{id:"approach-1-two-pointers"},"Approach 1: Two Pointers"),(0,i.kt)("p",null,"We know that the area is ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"w"),(0,i.kt)("mi",{parentName:"mrow"},"i"),(0,i.kt)("mi",{parentName:"mrow"},"d"),(0,i.kt)("mi",{parentName:"mrow"},"t"),(0,i.kt)("mi",{parentName:"mrow"},"h"),(0,i.kt)("mo",{parentName:"mrow"},"\u2217"),(0,i.kt)("mi",{parentName:"mrow"},"h"),(0,i.kt)("mi",{parentName:"mrow"},"e"),(0,i.kt)("mi",{parentName:"mrow"},"i"),(0,i.kt)("mi",{parentName:"mrow"},"g"),(0,i.kt)("mi",{parentName:"mrow"},"h"),(0,i.kt)("mi",{parentName:"mrow"},"t")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"width * height")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),". Given two lines with different heights, we should only take the minimum one and the width is simply their distance. We use two pointers to track the lines, every time we calculate the area and move either one line. If the left line is shorter, then move the left one because we want to keep the maximum one, and vice versa."),(0,i.kt)(u,{mdxType:"Tabs"},(0,i.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        int ans = 0, l = 0, r = height.size() - 1;\n        while (l < r) {\n            // calculate the current area\n            ans = max(ans, min(height[l], height[r]) * (r - l));\n            // keep the max one and move the min one\n            if (height[l] < height[r]) l++;\n            else r--;\n        }\n        return ans;\n    }\n};\n"))),(0,i.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(k,{name:"@ganajayant",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int maxArea(int[] height) {\n        int max = 0;\n        int i = 0;\n        int j = height.length - 1;\n        while (i < j) {\n            int leasth = Math.min(height[i], height[j]);\n            int width = (j - i);\n            if (max < leasth * width) {\n                max = leasth * width;\n            }\n            if (height[i] > height[j]) {\n                j--;\n            } else {\n                i++;\n            }\n        }\n        return max;\n    }\n}\n"))),(0,i.kt)(d,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)(k,{name:"@MithunPrabhu777",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const maxArea = (height) => {\n    let [left, right, max] = [0, height.length - 1, 0];\n\n    while (left < right) {\n        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));\n        if (height[right] > height[left]) {\n            left += 1;\n        } else {\n            right -= 1;\n        }\n    }\n\n    return max;\n};\n")))))}w.isMDXComponent=!0}}]);