"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[79971],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(t),d=i,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return t?r.createElement(g,a(a({ref:n},s),{},{components:t})):r.createElement(g,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},748:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/flip-string-to-monotone-increasing/",tags:["String","Dynamic Programming"]},p="0926 - Flip String to Monotone Increasing (Medium)",m={unversionedId:"0900-0999/flip-string-to-monotone-increasing-medium",id:"0900-0999/flip-string-to-monotone-increasing-medium",title:"0926 - Flip String to Monotone Increasing (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/flip-string-to-monotone-increasing/",source:"@site/solutions/0900-0999/0926-flip-string-to-monotone-increasing-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/flip-string-to-monotone-increasing-medium",permalink:"/solutions/0900-0999/flip-string-to-monotone-increasing-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0926-flip-string-to-monotone-increasing-medium.md",tags:[{label:"String",permalink:"/solutions/tags/string"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:926,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/flip-string-to-monotone-increasing/",tags:["String","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"0918 - Maximum Sum Circular Subarray (Medium)",permalink:"/solutions/0900-0999/maximum-sum-circular-subarray-medium"},next:{title:"0936 - Stamping The Sequence (Hard)",permalink:"/solutions/0900-0999/stamping-the-sequence-hard"}},s={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}],u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)}},d=u("Tabs"),g=u("TabItem"),f=u("SolutionAuthor"),k={toc:c};function h(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0926---flip-string-to-monotone-increasing-medium"},"0926 - Flip String to Monotone Increasing (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/flip-string-to-monotone-increasing/"},"https://leetcode.com/problems/flip-string-to-monotone-increasing/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"A binary string is monotone increasing if it consists of some number of ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"'s (possibly none), followed by some number of ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"'s (also possibly none)."),(0,o.kt)("p",null,"You are given a binary string ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),". You can flip ",(0,o.kt)("inlineCode",{parentName:"p"},"s[i]")," changing it from ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," or from ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the minimum number of flips to make"),(0,o.kt)("inlineCode",{parentName:"p"},"s"),(0,o.kt)("em",{parentName:"p"},"monotone increasing"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "00110"\nOutput: 1\nExplanation: We flip the last digit to get 00111.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "010110"\nOutput: 2\nExplanation: We flip to get 011111, or alternatively 000111.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "00011000"\nOutput: 2\nExplanation: We flip to get 00000000.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s[i]")," is either ",(0,o.kt)("inlineCode",{parentName:"li"},"'0'")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"'1'"),".")),(0,o.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,o.kt)("p",null,"Let ",(0,o.kt)("inlineCode",{parentName:"p"},"dp[i]")," be the min flips to make ",(0,o.kt)("inlineCode",{parentName:"p"},"[0, i)")," monotone increasing. Starting from ",(0,o.kt)("inlineCode",{parentName:"p"},"i = 1"),", if ",(0,o.kt)("inlineCode",{parentName:"p"},"s[i] = 1"),", we check the previous character ",(0,o.kt)("inlineCode",{parentName:"p"},"s[i - 1]"),". If it is ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"11..."),"), then it is monotone increasing already, so",(0,o.kt)("inlineCode",{parentName:"p"},"dp[i] = dp[i - 1]"),". However, if ",(0,o.kt)("inlineCode",{parentName:"p"},"s[i - 1] = 0")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"10..."),"), then we have two choices - we either flip this zero to make like ",(0,o.kt)("inlineCode",{parentName:"p"},"11...")," or we flip all the ones before this zero (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"00..."),"). Therefore, we can see the DP transition here."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if ",(0,o.kt)("inlineCode",{parentName:"li"},"s[i - 1]")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),", then ",(0,o.kt)("inlineCode",{parentName:"li"},"dp[i] = dp[i - 1]")),(0,o.kt)("li",{parentName:"ul"},"else ",(0,o.kt)("inlineCode",{parentName:"li"},"dp[i] = min(dp[i - 1] + 1, cnt1)"))),(0,o.kt)("p",null,"since ",(0,o.kt)("inlineCode",{parentName:"p"},"dp[i]")," is always based on ",(0,o.kt)("inlineCode",{parentName:"p"},"dp[i - 1]"),", we can space-optimize it using two variables - ",(0,o.kt)("inlineCode",{parentName:"p"},"cnt0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cnt1")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"cnt0")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"dp[i]")," at index ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cnt1")," is the number of 1s."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if (s[i] == 0) cnt0 = min(cnt0 + 1, cnt1);\nelse cnt1 += 1;\n")),(0,o.kt)("p",null,"which is essentially same as "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if (s[i] == 0) cnt0 += 1;\nelse cnt1 += 1;\ncnt0 = min(cnt0, cnt1);\n")),(0,o.kt)("p",null,"Alternatively, we can count the max of ",(0,o.kt)("inlineCode",{parentName:"p"},"cnt0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cnt1")," and return ",(0,o.kt)("inlineCode",{parentName:"p"},"s.size() - cnt1"),"."),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minFlipsMonoIncr(string s) {\n        // counters to count numbers of 0s and 1s\n        int cnt0 = 0, cnt1 = 0;\n        // for each character\n        for(auto x : s) {\n            // we count the number of zeros\n            if (x == '0') cnt0++;\n            // or the number of ones\n            else cnt1++;\n            // we can either flip all ones to zeros \n            // e.g. [111]0000 -> [000]0000\n            // or we can just flip the current zero\n            // e.g. 001[0] -> 001[1]\n            cnt0 = min(cnt0, cnt1);\n        }\n        return cnt0;\n    }\n};\n"))),(0,o.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int minFlipsMonoIncr(String s) {\n        // counters to count numbers of 0s and 1s\n        int cnt0 = 0, cnt1 = 0;\n        // for each character\n        for (char x : s.toCharArray()) {\n            // we count the number of zeros\n            if (x == '0') cnt0 += 1;\n            // of the number of ones\n            else cnt1 += 1;\n            // we can either flip all ones to zeros \n            // e.g. [111]0000 -> [000]0000\n            // or we can just flip the current zero\n            // e.g. 001[0] -> 001[1]\n            cnt0 = Math.min(cnt0, cnt1);\n        }\n        return cnt0;\n    }\n}\n\n"))),(0,o.kt)(g,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def minFlipsMonoIncr(self, s: str) -> int:\n        # counters to count numbers of 0s and 1s\n        cnt0, cnt1 = 0, 0\n        # for each character\n        for x in s:\n            # we count the number of zeros\n            if x == '0':\n                cnt0 += 1\n            # or the number of ones\n            else:\n                cnt1 += 1\n            # we can either flip all ones to zeros \n            # e.g. [111]0000 -> [000]0000\n            # or we can just flip the current zero\n            # e.g. 001[0] -> 001[1]\n            cnt0 = min(cnt0, cnt1)\n        return cnt0\n"))),(0,o.kt)(g,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,o.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rs"},"impl Solution {\n    pub fn min_flips_mono_incr(s: String) -> i32 {\n        // counters to count numbers of 0s and 1s\n        let mut cnt0 = 0;\n        let mut cnt1 = 0;\n        // for each character\n        for x in s.chars() {\n            // we count the number of zeros\n            if x == '0' {\n                cnt0 += 1;\n            }\n            // or the number of ones\n            else {\n                cnt1 += 1;\n            }\n            // we can either flip all ones to zeros \n            // e.g. [111]0000 -> [000]0000\n            // or we can just flip the current zero\n            // e.g. 001[0] -> 001[1]\n            cnt0 = cnt0.min(cnt1);\n        }\n        cnt0\n    }\n}\n")))))}h.isMDXComponent=!0}}]);