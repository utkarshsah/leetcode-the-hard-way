"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[69383],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return N}});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var i=n.createContext({}),o=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,i=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),u=o(t),N=m,h=u["".concat(i,".").concat(N)]||u[N]||c[N]||s;return t?n.createElement(h,r(r({ref:e},l),{},{components:t})):n.createElement(h,r({ref:e},l))}));function N(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:m,r[1]=p;for(var o=2;o<s;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},28531:function(a,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return p},kadane2DSuggestedProblems:function(){return N},kadaneSuggestedProblems:function(){return u},metadata:function(){return o},toc:function(){return c}});var n=t(87462),m=t(63366),s=(t(67294),t(3905)),r=["components"],p={title:"Kadane Algorithm",description:"Kadane 1D algorithm finds the maximum sum subarray in an array of integers. Kadane 2D algorithm finds the maximum sum subarray in a 2D array of integers.",hide_table_of_contents:!1,keywords:["leetcode","tutorial","Kadane","algorithm"]},i=void 0,o={unversionedId:"basic-topics/kadane",id:"basic-topics/kadane",title:"Kadane Algorithm",description:"Kadane 1D algorithm finds the maximum sum subarray in an array of integers. Kadane 2D algorithm finds the maximum sum subarray in a 2D array of integers.",source:"@site/tutorials/basic-topics/kadane.md",sourceDirName:"basic-topics",slug:"/basic-topics/kadane",permalink:"/tutorials/basic-topics/kadane",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/kadane.md",tags:[],version:"current",frontMatter:{title:"Kadane Algorithm",description:"Kadane 1D algorithm finds the maximum sum subarray in an array of integers. Kadane 2D algorithm finds the maximum sum subarray in a 2D array of integers.",hide_table_of_contents:!1,keywords:["leetcode","tutorial","Kadane","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Heap (Priority Queue)",permalink:"/tutorials/basic-topics/heap"},next:{title:"Linear Search",permalink:"/tutorials/basic-topics/linear-search"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Algorithm",id:"algorithm",level:2},{value:"Example 1: 0053 - Maximum Subarray",id:"example-1-0053---maximum-subarray",level:2},{value:"Kadane&#39;s 2D Algorithm (Variation)",id:"kadanes-2d-algorithm-variation",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Algorithm",id:"algorithm-1",level:3},{value:"Example 1: 0085 - Maximal Rectangle",id:"example-1-0085---maximal-rectangle",level:3}],u=[{problemName:"152 - Maximum Product Subarray",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/maximum-product-subarray/",solutionLink:""},{problemName:"121 - Best Time to Buy and Sell Stock",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",solutionLink:""},{problemName:"918 - Maximum-sum-circular-subarray",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/maximum-sum-circular-subarray/",solutionLink:""}],N=[{problemName:"363 - Max Sum of Rectangle No Larger Than K",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/",solutionLink:""}],h=function(a){return function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}},k=h("TutorialAuthors"),d=h("Tabs"),g=h("TabItem"),f=h("SolutionAuthor"),b=h("Table"),w={toc:c,kadaneSuggestedProblems:u,kadane2DSuggestedProblems:N};function y(a){var e=a.components,t=(0,m.Z)(a,r);return(0,s.kt)("wrapper",(0,n.Z)({},w,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(k,{names:"@ShivaRapolu01",mdxType:"TutorialAuthors"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Kadane's algorithm is an iterative algorithm in which we search for a maximum sum contiguous subarray within 1D array."),(0,s.kt)("h2",{id:"algorithm"},"Algorithm"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Store the sum of elements of the current subarray found so far. "),(0,s.kt)("li",{parentName:"ol"},"Keep updating the maximum sum of subarray found so far by checking if the current sum is greater than the maximum sum found so far or not."),(0,s.kt)("li",{parentName:"ol"},"If the current sum is less than ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),", then we can neglect the current subarray and start a new subarray from the next element.")),(0,s.kt)("h2",{id:"example-1-0053---maximum-subarray"},"Example 1: ",(0,s.kt)("a",{parentName:"h2",href:"https://leetcode.com/problems/maximum-subarray/"},"0053 - Maximum Subarray")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.\n\nA subarray is a contiguous part of an array.\nInput: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: [4,-1,2,1] has the largest sum = 6.\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"A subarray is a contiguous part of an array maintaining the order of elements. ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1,2,3]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," is a subarray of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"5"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1,2,3,4,5]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," but ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1,3,2]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," & ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"5"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1,3,5]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," are not.")),(0,s.kt)("p",null,"Consider an array of positive integers only, the maximum sum subarray will be the entire array itself. If the array contains negative integers only, then the maximum sum subarray will be the maximum element of the array.\nIt gets tricker when we have both positive and negative numbers. "),(0,s.kt)("p",null,"If the array consists of positive integers(need not be all positive integers). Then there definitely exists a subarray which has positive sum, because I can choose one positive element in worst case and it would be the subarray with positive sum. "),(0,s.kt)("p",null,"The main idea of Kadane's algorithm is to neglect the negative sum subarrays and take maximum among the positive sum subarrays."),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(f,{name:"@ShivaRapolu01",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n      int n = nums.size(); \n      // globalSum is where the maximum sum of subarray is stored\n      // localSum is where the sum of current subarray is stored\n      int globalSum = INT_MIN, localSum = 0;\n      for (int i = 0; i < n; i++) {\n        // add current element to current sum \n        localSum = localSum + nums[i];\n        // if current sum is greater than globalSum, update globalSum\n        if (globalSum < localSum) {\n          globalSum = localSum;\n        }\n        // if upon adding ith element current sum is becoming less than 0\n        // it cannot contribute to the maximum sum subarray so we neglect it \n        // and reset our current sum to 0 to start another subarray freshly\n        if (localSum < 0) {\n          localSum = 0;\n        }\n      }\n      return globalSum;\n    }\n};\n")))),(0,s.kt)(b,{title:"Suggested Problems",data:u,mdxType:"Table"}),(0,s.kt)("h2",{id:"kadanes-2d-algorithm-variation"},"Kadane's 2D Algorithm (Variation)"),(0,s.kt)("h3",{id:"overview-1"},"Overview"),(0,s.kt)("p",null,"We know about Kadane's algorithm which is a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," algorithm that finds the maximum sum of a contiguous subarray in an array. It can be extended to find maximum sum submatrix in a 2D matrix."),(0,s.kt)("h3",{id:"algorithm-1"},"Algorithm"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Any submatrix has ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))," sides so we need ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))," variables to uniquely identify and store the boundaries of the maximum sum submatrix."),(0,s.kt)("li",{parentName:"ol"},"Using the 1D kadane's algorithm we can find the maximum sum subarray in a 1D array and with some modifications we can retrieve the boundaries(starting index and ending index) of this maximum sum subarray."),(0,s.kt)("li",{parentName:"ol"},"We need to convert the submatrix into 1D array in such a way that we can identify the boundaries of maximum sum submatrix. For this we can try fixing the left and right boundaries (finalLeft and finalRight) of the submatrix and then we calculate the cummulative sum in each row and store it as 1D array."),(0,s.kt)("li",{parentName:"ol"},"Now we can apply 1D Kadane's algorithm on this 1D array to find the maximum sum subarray and we retrieve the boundaries of this maximum sum subarray."),(0,s.kt)("li",{parentName:"ol"},"The boundaries retrieved from this 1D Kadane's algorithm are the final Top and FinalBottom boundaries of the maximum sum submatrix in the original 2D matrix.")),(0,s.kt)("p",null,"Consider the below problem statement:"),(0,s.kt)("h3",{id:"example-1-0085---maximal-rectangle"},"Example 1: ",(0,s.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/maximal-rectangle/"},"0085 - Maximal Rectangle")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.              ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},' Input: matrix = [\n  ["1","0","1","0","0"],\n  ["1","0","1","1","1"],\n  ["1","1","1","1","1"],\n  ["1","0","0","1","0"]\n]\nOutput: 6\n')),(0,s.kt)("p",null,"If noticed properly we can see that maximum sum submatrix is the 6. Which is the submatrix enclosed by zero-indexed vertices ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(1,2),(1,4),(2,2),(2,4)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),". "),(0,s.kt)("p",null,"Hint: The problem statement resonates with Kadane's algorithm. The main thing is how to extend the 1D Kadane's algorithm to 2D. General Kadane's algorithm works on a 1D array, so first we need to convert the submatrix into 1D array in such a way that we can uniquely identify the boundaries of maximum sum submatrix. Then we can apply Kadane's algorithm on this 1D array to find the maximum sum subarray."),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(f,{name:"@ShivaRapolu01",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int Kadane(vector<int> arr, int &cursumLeft, int &cursumRight, int n) {\n      // function returns maxiumum sum of subarray and also updates \n      // the left and right indices of the subarray in cursumLeft and  cursumRight respectively\n      int localSum = 0, globalSum = 0;\n      // variable to store the right index of current subarray\n      int localSumRight = 0;\n      // variable to store starting index of intermediate subarrays\n      int localCurStart = 0;\n      for (int i = 0; i < n; ++i) {\n        localSum += arr[i];\n        if (localSum < 0) {\n          localSum = 0;\n          localCurStart = i + 1;\n        } else if (localSum > globalSum) {\n          globalSum = localSum;\n          cursumLeft = localCurStart;\n          cursumRight = i;\n        }\n      }\n      return globalSum;\n    }\n\n\n    int maximalRectangle(vector<vector<char>>& matrix) {\n      int globalMaxSum = 0;\n      // variables to indicate maximum submatrix boundaries\n      int finalLeft, finalRight, finalTop, finalBottom;\n      int rows = matrix.size(); \n      int cols = matrix[0].size(); \n      const int INF = -(rows * cols); \n      // since there can be maximum of rows * cols number of 1's in the matrix \n      // if we encounter 0 in a row in the current submatrix,\n      // our maximum sum submatrix can't contain this row as it should contain only 1's. \n      // as we need to neglect the whole row,\n      // we need erase contributions of 1's in the same row which are before 0 \n      // hence we add INF to temp array before passing it to Kadane's algorithm\n\n      // set the left column\n      for (int left = 0; left < cols; ++left) {\n        vector<int> temp(rows, 0); \n        // temp is used to store sum between current left and right boundaries for every row.\n        \n        // set the right column corresponding to  left\n        for (int right = left; right < cols; ++right) {\n          // calculate sum between current left and right for each row\n          for (int i = 0; i < rows; ++i) {\n            if (matrix[i][right]=='1') {\n              temp[i]+=1;\n            } else {\n              temp[i]+=INF; \n            }\n          }\n          // Find the maximum sum subarray in this created temp array using Kadane's 1D algorithm.\n          int localSum, localSumLeft, localSumRight;\n          localSum = Kadane(temp, localSumLeft, localSumRight, rows);\n          // compare sum with maximum sum so far.\n          // if sum is more, then update globalMaxSum\n          // and also update boundaries of maximum sum submatrix\n          if (localSum > globalMaxSum) {\n            globalMaxSum = localSum;\n            finalLeft = left;\n            finalRight = right;\n            finalTop = localSumLeft;\n            finalBottom = localSumRight;\n          }\n        }\n      }\n      return globalMaxSum; \n    }\n};\n")))),(0,s.kt)(b,{title:"Suggested Problems",data:N,mdxType:"Table"}))}y.isMDXComponent=!0}}]);