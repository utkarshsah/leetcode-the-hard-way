"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[72366],{3905:function(a,e,t){t.d(e,{Zo:function(){return i},kt:function(){return k}});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var o=n.createContext({}),l=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},i=function(a){var e=l(a.components);return n.createElement(o.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,o=a.parentName,i=p(a,["components","mdxType","originalType","parentName"]),c=l(t),k=m,u=c["".concat(o,".").concat(k)]||c[k]||N[k]||s;return t?n.createElement(u,r(r({ref:e},i),{},{components:t})):n.createElement(u,r({ref:e},i))}));function k(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:m,r[1]=p;for(var l=2;l<s;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4383:function(a,e,t){t.r(e),t.d(e,{assets:function(){return N},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n,m=t(87462),s=t(63366),r=(t(67294),t(3905)),p=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/summary-ranges/"},l="0228 - Summary Ranges (Easy)",i={unversionedId:"0200-0299/summary-ranges-easy",id:"0200-0299/summary-ranges-easy",title:"0228 - Summary Ranges (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/summary-ranges/",source:"@site/solutions/0200-0299/0228-summary-ranges-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/summary-ranges-easy",permalink:"/solutions/0200-0299/summary-ranges-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0228-summary-ranges-easy.md",tags:[],version:"current",sidebarPosition:228,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/summary-ranges/"},sidebar:"tutorialSidebar",previous:{title:"0225 - Implement Stack using Queues (Easy)",permalink:"/solutions/0200-0299/implement-stack-using-queues-easy"},next:{title:"0231 - Power of Two (Easy)",permalink:"/solutions/0200-0299/power-of-two-easy"}},N={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iteration",id:"approach-1-iteration",level:2}],k=(n="SolutionAuthor",function(a){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}),u={toc:c};function h(a){var e=a.components,t=(0,s.Z)(a,p);return(0,r.kt)("wrapper",(0,m.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0228---summary-ranges-easy"},"0228 - Summary Ranges (Easy)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/summary-ranges/"},"https://leetcode.com/problems/summary-ranges/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given a ",(0,r.kt)("strong",{parentName:"p"},"sorted unique")," integer array ",(0,r.kt)("inlineCode",{parentName:"p"},"nums"),"."),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"the ",(0,r.kt)("strong",{parentName:"em"},"smallest sorted")," list of ranges that ",(0,r.kt)("strong",{parentName:"em"},"cover all the numbers in the array exactly")),". That is, each element of ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," is covered by exactly one of the ranges, and there is no integer ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," such that ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is in one of the ranges but not in ",(0,r.kt)("inlineCode",{parentName:"p"},"nums"),"."),(0,r.kt)("p",null,"Each range ",(0,r.kt)("inlineCode",{parentName:"p"},"[a,b]")," in the list should be output as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"a->b"')," if ",(0,r.kt)("inlineCode",{parentName:"li"},"a != b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"a"')," if ",(0,r.kt)("inlineCode",{parentName:"li"},"a == b"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: nums = [0,1,2,4,5,7]\nOutput: ["0->2","4->5","7"]\nExplanation: The ranges are:\n[0,2] --\x3e "0->2"\n[4,5] --\x3e "4->5"\n[7,7] --\x3e "7"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: nums = [0,2,3,4,6,8,9]\nOutput: ["0","2->4","6","8->9"]\nExplanation: The ranges are:\n[0,0] --\x3e "0"\n[2,4] --\x3e "2->4"\n[6,6] --\x3e "6"\n[8,9] --\x3e "8->9"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= nums.length <= 20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-2^31 <= nums[i] <= 2^31 - 1")),(0,r.kt)("li",{parentName:"ul"},"All the values of ",(0,r.kt)("inlineCode",{parentName:"li"},"nums")," are ",(0,r.kt)("strong",{parentName:"li"},"unique"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nums")," is sorted in ascending order.")),(0,r.kt)("h2",{id:"approach-1-iteration"},"Approach 1: Iteration"),(0,r.kt)("p",null,"We take a number as an starting point at ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"i")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),", then search for the next ending point ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"j")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j")))))," which satisfies ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"j"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2260"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"j"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums[j] + 1 \\ne nums[j + 1]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mord vbox"},(0,r.kt)("span",{parentName:"span",className:"thinbox"},(0,r.kt)("span",{parentName:"span",className:"rlap"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"inner"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mrel"},"\ue020"))),(0,r.kt)("span",{parentName:"span",className:"fix"}))))),(0,r.kt)("span",{parentName:"span",className:"mrel"},"=")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". If both pointer is not same, then we can push ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums[i]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"))))),"->",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"j"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums[j]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))," to our answer array, else we just push ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums[i]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"))))),"."),(0,r.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    vector<string> summaryRanges(vector<int>& nums) {\n        vector<string> ans;\n        int n = (int) nums.size();\n        for(int i = 0; i < n; i++) {\n            // take nums[i] as a in range [a, b]\n            int a = nums[i];\n            // search for the next ending point\n            while (i != n - 1 && nums[i] + 1 == nums[i + 1]) i++;\n            // take nums[i] as b in range [a, b]\n            int b = nums[i];\n            // output as "a" if a == b\n            if(a == b) ans.push_back(to_string(a));\n            // output as "a->b" if a != b\n            else ans.push_back(to_string(a) + "->" + to_string(b));\n        }\n        return ans;\n    }\n};\n')))}h.isMDXComponent=!0}}]);