"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[70709],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),k=a,h=c["".concat(m,".").concat(k)]||c[k]||l[k]||o;return n?r.createElement(h,p(p({ref:t},u),{},{components:n})):r.createElement(h,p({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return c}});var r,a=n(87462),o=n(63366),p=(n(67294),n(3905)),i=["components"],m={description:"Author: @wingkwong | https://leetcode.com/problems/top-k-frequent-elements/"},s="0347 - Top K Frequent Elements (Medium)",u={unversionedId:"0300-0399/top-k-frequent-elements-medium",id:"0300-0399/top-k-frequent-elements-medium",title:"0347 - Top K Frequent Elements (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/top-k-frequent-elements/",source:"@site/solutions/0300-0399/0347-top-k-frequent-elements-medium.md",sourceDirName:"0300-0399",slug:"/0300-0399/top-k-frequent-elements-medium",permalink:"/solutions/0300-0399/top-k-frequent-elements-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0347-top-k-frequent-elements-medium.md",tags:[],version:"current",sidebarPosition:347,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/top-k-frequent-elements/"},sidebar:"tutorialSidebar",previous:{title:"0346 - Moving Average from Data Stream (Easy)",permalink:"/solutions/0300-0399/moving-average-from-data-stream-easy"},next:{title:"0349 - Intersection of Two Arrays (Easy)",permalink:"/solutions/0300-0399/intersection-of-two-arrays-easy"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Priority Queue",id:"approach-1-priority-queue",level:2}],k=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),h={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"0347---top-k-frequent-elements-medium"},"0347 - Top K Frequent Elements (Medium)"),(0,p.kt)("h2",{id:"problem-link"},"Problem Link"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/top-k-frequent-elements/"},"https://leetcode.com/problems/top-k-frequent-elements/")),(0,p.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,p.kt)("p",null,"Given an integer array ",(0,p.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,p.kt)("inlineCode",{parentName:"p"},"k"),", return ",(0,p.kt)("em",{parentName:"p"},"the")," ",(0,p.kt)("inlineCode",{parentName:"p"},"k")," ",(0,p.kt)("em",{parentName:"p"},"most frequent elements"),". You may return the answer in ",(0,p.kt)("strong",{parentName:"p"},"any order"),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 1:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: nums = [1,1,1,2,2,3], k = 2\nOutput: [1,2]\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 2:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: nums = [1], k = 1\nOutput: [1]\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Constraints:")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"k")," is in the range ",(0,p.kt)("inlineCode",{parentName:"li"},"[1, the number of unique elements in the array]"),"."),(0,p.kt)("li",{parentName:"ul"},"It is ",(0,p.kt)("strong",{parentName:"li"},"guaranteed")," that the answer is ",(0,p.kt)("strong",{parentName:"li"},"unique"),".")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Follow up:")," Your algorithm's time complexity must be better than ",(0,p.kt)("inlineCode",{parentName:"p"},"O(n log n)"),", where n is the array's size."),(0,p.kt)("h2",{id:"approach-1-priority-queue"},"Approach 1: Priority Queue"),(0,p.kt)("p",null,'When you need to solve something started with "Top K ...", priority queue may possibly be the solution.'),(0,p.kt)("p",null,"We use priority queue to sort the input by their frequency and pop the top element when the queue size is greater than ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"k")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),". What's left in the queue would be the top ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"k")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," frequent elements and we just list them out in a reverse order."),(0,p.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        int n = nums.size();\n        if(n == k) return nums;\n        map<int, int> m;\n        // store the frequency of each number\n        for(auto x : nums) m[x]++;\n        // define a custom comparator\n        auto cmp = [&](int x, int y) {\n            return m[x] > m[y];\n        };\n        // init priority queue with a custom comparator\n        priority_queue<int, vector<int>, decltype(cmp)> pq(cmp);\n        // iterate each number\n        for(auto x : m) {\n            // add this number\n            pq.push(x.first);\n            // out of queue size, pop the one with min frequency out\n            if(pq.size() > k) {\n                pq.pop();\n            }\n        }\n        // construct ans\n        vector<int> ans(k);\n        for(int i = k - 1; i >= 0; i--) {\n            ans[i] = pq.top(); \n            pq.pop();\n        }\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0}}]);