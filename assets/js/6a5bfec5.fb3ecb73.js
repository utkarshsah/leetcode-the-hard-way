"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[37476],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=m(n),h=r,d=c["".concat(o,".").concat(h)]||c[h]||u[h]||s;return n?a.createElement(d,i(i({ref:t},l),{},{components:n})):a.createElement(d,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<s;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38828:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var a,r=n(87462),s=n(63366),i=(n(67294),n(3905)),p=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/"},m="2231 -  Largest Number After Digit Swaps by Parity (Easy)",l={unversionedId:"2200-2299/largest-number-after-digit-swaps-by-parity-easy",id:"2200-2299/largest-number-after-digit-swaps-by-parity-easy",title:"2231 -  Largest Number After Digit Swaps by Parity (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/",source:"@site/solutions/2200-2299/2231-largest-number-after-digit-swaps-by-parity-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/largest-number-after-digit-swaps-by-parity-easy",permalink:"/leetcode-the-hard-way/solutions/2200-2299/largest-number-after-digit-swaps-by-parity-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2231-largest-number-after-digit-swaps-by-parity-easy.md",tags:[],version:"current",sidebarPosition:2231,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/"},sidebar:"tutorialSidebar",previous:{title:"2229 - Check if an Array is Consecutive (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/check-if-an-array-is-consecutive-easy"},next:{title:"2232 -  Minimize Result by Adding Parentheses to Expression (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimize-result-by-adding-parentheses-to-expression-medium"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2},{value:"Approach 2: Swapping",id:"approach-2-swapping",level:2}],h=(a="SolutionAuthor",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),d={toc:c};function g(e){var t=e.components,n=(0,s.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2231----largest-number-after-digit-swaps-by-parity-easy"},"2231 -  Largest Number After Digit Swaps by Parity (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/"},"https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given a positive integer ",(0,i.kt)("inlineCode",{parentName:"p"},"num"),". You may swap any two digits of ",(0,i.kt)("inlineCode",{parentName:"p"},"num")," that have the same ",(0,i.kt)("strong",{parentName:"p"},"parity")," (i.e. both odd digits or both even digits)."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"largest")," possible value of")," ",(0,i.kt)("inlineCode",{parentName:"p"},"num")," ",(0,i.kt)("em",{parentName:"p"},"after ",(0,i.kt)("strong",{parentName:"em"},"any")," number of swaps.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: num = 1234\nOutput: 3412\nExplanation: Swap the digit 3 with the digit 1, this results in the number 3214.\nSwap the digit 2 with the digit 4, this results in the number 3412.\nNote that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.\nAlso note that we may not swap the digit 4 with the digit 1 since they are of different parities.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: num = 65875\nOutput: 87655\nExplanation: Swap the digit 8 with the digit 6, this results in the number 85675.\nSwap the first digit 5 with the digit 7, this results in the number 87655.\nNote that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= num <= 10^9"))),(0,i.kt)("h2",{id:"approach-1-sorting"},"Approach 1: Sorting"),(0,i.kt)("p",null,"Put all digits with the same parity together. Sort them. Build the result."),(0,i.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int largestInteger(int num) {\n        int tmp = num;\n        vector<int> odd, even;\n        // iterate each digit \n        // and put the digit to the corresponding parity vector\n        while (tmp) {\n            int d = tmp % 10;\n            if (d % 2 == 0) even.push_back(d);\n            else odd.push_back(d);\n            tmp /= 10;\n        }\n        // sort both vectors\n        sort(even.begin(), even.end());\n        sort(odd.begin(),odd.end());\n        // build the ans\n        int ans = 0, i = 0, j = 0, k = 0;\n        while (num) {\n            int d = num % 10;\n            ans = (d % 2 == 0 ? even[j++] : odd[i++]) * pow(10, k++) + ans;\n            num /= 10;\n        }\n        return ans;\n    }\n};\n")),(0,i.kt)("h2",{id:"approach-2-swapping"},"Approach 2: Swapping"),(0,i.kt)("p",null,"We cast the number as a string. Compare each pair the number and check its parity. If they have the same parity and ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"s"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,i.kt)("mi",{parentName:"mrow"},"i"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[i]")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"["),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,i.kt)("span",{parentName:"span",className:"mclose"},"]")))))," is smaller, then swap it with ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"s"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,i.kt)("mi",{parentName:"mrow"},"j"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[j]")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"["),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,i.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". Return the value as integer."),(0,i.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int largestInteger(int num) {\n        string s = to_string(num);\n        int n = s.size();\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                if (\n                    // 1. check if they hv the same parity \n                    !((s[i] ^ s[j]) & 1) && \n                    // 2. check if it's worth swapping\n                    s[i] < s[j]\n                ) {\n                    swap(s[i], s[j]);\n                }\n            }\n        }\n        return stoi(s);\n    }\n};\n")))}g.isMDXComponent=!0}}]);