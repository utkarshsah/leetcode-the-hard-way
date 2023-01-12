"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34869],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return k}});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},l=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),c=i(t),k=s,h=c["".concat(o,".").concat(k)]||c[k]||N[k]||m;return t?n.createElement(h,r(r({ref:e},l),{},{components:t})):n.createElement(h,r({ref:e},l))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},31870:function(a,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return o},default:function(){return b},frontMatter:function(){return p},metadata:function(){return i},suggestedProblems:function(){return c},toc:function(){return N}});var n=t(87462),s=t(63366),m=(t(67294),t(3905)),r=["components"],p={title:"Tim Sort",description:"Timsort is a fast stable sorting algorithm based upon insertion sort and merge sort.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","sorting","algorithm","tim sort"]},o=void 0,i={unversionedId:"basic-topics/sorting/tim-sort",id:"basic-topics/sorting/tim-sort",title:"Tim Sort",description:"Timsort is a fast stable sorting algorithm based upon insertion sort and merge sort.",source:"@site/tutorials/basic-topics/sorting/tim-sort.md",sourceDirName:"basic-topics/sorting",slug:"/basic-topics/sorting/tim-sort",permalink:"/tutorials/basic-topics/sorting/tim-sort",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/sorting/tim-sort.md",tags:[],version:"current",frontMatter:{title:"Tim Sort",description:"Timsort is a fast stable sorting algorithm based upon insertion sort and merge sort.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","sorting","algorithm","tim sort"]},sidebar:"tutorialSidebar",previous:{title:"Selection Sort",permalink:"/tutorials/basic-topics/sorting/selection-sort"},next:{title:"Time Complexity",permalink:"/tutorials/basic-topics/time-complexity"}},l={},N=[{value:"Overview",id:"overview",level:2},{value:"Algorithm",id:"algorithm",level:2},{value:"Example: 0287 - Find The Duplicate Number",id:"example-0287---find-the-duplicate-number",level:2},{value:"Pseudocode",id:"pseudocode",level:3},{value:"Dry Run",id:"dry-run",level:3},{value:"Complexity",id:"complexity",level:2}],c=[{problemName:"0075 - Sort Colors",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/sort-colors/",solutionLink:"../../../solutions/0000-0099/sort-colors-medium"},{problemName:"0268 - Missing Number",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/missing-number/",solutionLink:"../../../solutions/0200-0299/missing-number-easy"},{problemName:"0448 - Find All Numbers Disappeared In An Array",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",solutionLink:""}],k=function(a){return function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.kt)("div",e)}},h=k("TutorialAuthors"),u=k("Contributors"),g=k("Tabs"),d=k("TabItem"),w=k("SolutionAuthor"),y=k("Table"),f={toc:N,suggestedProblems:c};function b(a){var e=a.components,t=(0,s.Z)(a,r);return(0,m.kt)("wrapper",(0,n.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)(h,{names:"@Bobliuuu",mdxType:"TutorialAuthors"}),(0,m.kt)(u,{names:"@wingkwong",mdxType:"Contributors"}),(0,m.kt)("h2",{id:"overview"},"Overview"),(0,m.kt)("p",null,"Timsort is a fast stable sorting algorithm based upon both ",(0,m.kt)("a",{parentName:"p",href:"/tutorials/basic-topics/sorting/insertion-sort"},"insertion sort")," and ",(0,m.kt)("a",{parentName:"p",href:"/tutorials/basic-topics/sorting/merge-sort"},"merge sort"),". The algorithm was first created by Tim Peters in 2002, and is now being used in Python's ",(0,m.kt)("inlineCode",{parentName:"p"},"sort()")," and Java's ",(0,m.kt)("inlineCode",{parentName:"p"},"Arrays.sort()"),".\nThe reason this algorithm is so fast is because it leverages the benefits of both merge sort and insertion sort. Let's see how it works!"),(0,m.kt)("h2",{id:"algorithm"},"Algorithm"),(0,m.kt)("p",null,"Timsort works by first splitting an array into ",(0,m.kt)("strong",{parentName:"p"},"runs"),". A ",(0,m.kt)("strong",{parentName:"p"},"run")," is a subarray of data spliced from the original array.\nThese runs are generated using merge sort (each run has a standard size of 32-64, to split the array into small enough pieces for insertion sort to be fast on each one), and insertion sort is used to sort each run. Finally, merge sort combines these sorted arrays together recursively. "),(0,m.kt)("p",null,"Basically, to run timsort: "),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"We split the array into runs."),(0,m.kt)("li",{parentName:"ul"},"For each run, run insertion sort to sort that section."),(0,m.kt)("li",{parentName:"ul"},"Merge runs together one by one using merge sort, by comparing values in each sorted list and combining them. ")),(0,m.kt)("p",null,"This algorithm works because each run is sorted using insertion sort, and merge sort makes sure that each subarray is merged to the original array in the correct position. "),(0,m.kt)("h2",{id:"example-0287---find-the-duplicate-number"},"Example: ",(0,m.kt)("a",{parentName:"h2",href:"https://leetcode.com/problems/find-the-duplicate-number/"},"0287 - Find The Duplicate Number")),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"An array of integers in the range ","[1, n]"," is given, where one integer is repeated. We have to find this repeated number.")),(0,m.kt)("p",null,(0,m.kt)("em",{parentName:"p"},"Naive Approach"),": Using a Hashmap or a frequency array, we can store the number of times each element comes up. We then return an array by looping through the frequency array finding the value that appears twice. However, this requires ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," space complexity, and the problem requires us to have ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," space complexity. "),(0,m.kt)("p",null,"For this sort of problem, we can use timsort to lower our space complexity! "),(0,m.kt)("h3",{id:"pseudocode"},"Pseudocode"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"Sort the array using timsort"),(0,m.kt)("li",{parentName:"ul"},"Loop through the array"),(0,m.kt)("li",{parentName:"ul"},"If two values are the same, then that value must be repeated. Return that value. ")),(0,m.kt)("h3",{id:"dry-run"},"Dry Run"),(0,m.kt)("p",null,"Let's do a dry run of timsort with the array ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mn",{parentName:"mrow"},"5"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"4"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"6"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"7"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"4"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[5, 4, 3, 1, 2, 6, 7, 4]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord"},"5"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"7"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"))))),", and a run size of ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"))))),". "),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"Each run is sorted using insertion sort. The array becomes ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mn",{parentName:"mrow"},"4"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"5"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"6"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"4"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"7"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[4, 5, 1, 3, 2, 6, 4, 7]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"5"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"7"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". "),(0,m.kt)("li",{parentName:"ul"},"The merges happen using recursion. We first attempt to split the array into two parts, down the middle. "),(0,m.kt)("li",{parentName:"ul"},"First, the left part is merged, meaning the first two runs are merged. Then the array becomes ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"4"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"5"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"6"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"4"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"7"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1, 3, 4, 5, 2, 6, 4, 7]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"5"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"7"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". "),(0,m.kt)("li",{parentName:"ul"},"Then, the right part is merged, meaning the next two runs are merged. The the array becomes ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"4"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"5"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"4"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"6"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"7"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1, 3, 4, 5, 2, 4, 6, 7]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"5"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"7"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". "),(0,m.kt)("li",{parentName:"ul"},"Finally, the entire array is merged. The array is finally sorted: ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"4"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"4"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"5"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"6"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"7"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1, 2, 3, 4, 4, 5, 6, 7]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"5"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"7"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"))))),".")),(0,m.kt)(g,{mdxType:"Tabs"},(0,m.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,m.kt)(w,{name:"@Bobliuuu",mdxType:"SolutionAuthor"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // initalize the size of each run\n    const int RUN = 32; \n    void insertionSort(vector<int>& nums, int left, int right) {\n        for (int i = left; i <= right; i++) {\n            int tmp = nums[i];\n            int j = i - 1;\n            while (j >= left && nums[j] > tmp) {\n                nums[j + 1] = nums[j];\n                j--;\n            }\n            nums[j + 1] = tmp;\n        }\n    }\n\n    void merge(vector<int>& nums, int left, int mid, int right) {\n        // maintain the two previous lists \n        vector<int> lt, rt;\n        int lenlt = mid - left + 1, lenrt = right - mid;\n        for (int i = 0; i < lenlt; i++) {\n            lt.push_back(nums[left + i]);\n        }\n        for (int i = 0; i < lenrt; i++) {\n            rt.push_back(nums[mid + 1 + i]);\n        }\n        // start recreating the correct list, putting the smaller one each time \n        int i = 0, j = 0, k = left;\n        while (i < lenlt && j < lenrt) {\n            if (lt[i] <= rt[j]) {\n                nums[k] = lt[i];\n                i++;\n            } else {\n                nums[k] = rt[j];\n                j++;\n            }\n            k++;\n        }\n        while (i < lenlt) {\n            nums[k] = lt[i];\n            k++; i++;\n        }\n        while (j < lenrt) {\n            nums[k] = rt[j];\n            k++; j++;\n        }\n    }\n    void timSort(vector<int>& nums) {\n        int n = nums.size();\n        // insertion sort on each run\n        for (int i = 0; i < n; i += RUN) {\n            insertionSort(nums, i, min((i + RUN-1), (n - 1))); \n        }\n        for (int size = RUN; size < n; size = 2 * size) {\n            for (int left = 0; left < n; left += 2 * size) {\n                // determine indices for each run for merging\n                int mid = left + size - 1, right = min((left + 2 * size - 1), (n - 1));\n                // merge the two runs if needed\n                if (mid < right) {\n                // use recursion to merge the array\n                    merge(nums, left, mid, right);\n                }\n            }\n        }\n    }\n    int findDuplicate(vector<int>& nums) {\n        // use timsort to sort the array\n        timSort(nums); \n        for (int i = 0; i < nums.size() - 1; i++) {\n            // return the duplicate if found\n            if (nums[i] == nums[i + 1]) {\n                return nums[i];\n            }\n        }\n        return 0;\n    }\n};\n")))),(0,m.kt)("h2",{id:"complexity"},"Complexity"),(0,m.kt)("p",null,"The time complexity of this program is ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n log n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),", since the merging takes ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"logn")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," steps, and merges ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," values each time. "),(0,m.kt)("p",null,"The space complexity of this program is ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),", since we don't need any extra space other than our original array. "),(0,m.kt)(y,{title:"Suggested Problems",data:c,mdxType:"Table"}))}b.isMDXComponent=!0}}]);