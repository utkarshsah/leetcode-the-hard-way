"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[84810],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>u});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},l=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},c="mdxType",k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),c=i(t),N=s,u=c["".concat(o,".").concat(N)]||c[N]||k[N]||r;return t?n.createElement(u,m(m({ref:e},l),{},{components:t})):n.createElement(u,m({ref:e},l))}));function u(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,m=new Array(r);m[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p[c]="string"==typeof a?a:s,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},32239:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>m,default:()=>h,frontMatter:()=>r,metadata:()=>p,suggestedProblems:()=>l,toc:()=>i});var n=t(87462),s=(t(67294),t(3905));const r={title:"Backtracking",description:"A backtracking algorithm is used to construct a solution recursively by starting with an empty solution and adding solution one by one.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","backtracking","algorithm"]},m=void 0,p={unversionedId:"basic-topics/backtracking",id:"basic-topics/backtracking",title:"Backtracking",description:"A backtracking algorithm is used to construct a solution recursively by starting with an empty solution and adding solution one by one.",source:"@site/tutorials/basic-topics/backtracking.md",sourceDirName:"basic-topics",slug:"/basic-topics/backtracking",permalink:"/tutorials/basic-topics/backtracking",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/backtracking.md",tags:[],version:"current",frontMatter:{title:"Backtracking",description:"A backtracking algorithm is used to construct a solution recursively by starting with an empty solution and adding solution one by one.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","backtracking","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/tutorials/basic-topics/arrays"},next:{title:"Binary Search",permalink:"/tutorials/basic-topics/binary-search"}},o={},i=[{value:"Overview",id:"overview",level:2},{value:"Example: 0046 - Permutations (Medium)",id:"example-0046---permutations-medium",level:2}],l=[{problemName:"0039 - Combination Sum",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/combination-sum/",solutionLink:"../../solutions/0000-0099/combination-sum-medium"},{problemName:"0040 - Combination Sum II",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/combination-sum-ii/",solutionLink:"../../solutions/0000-0099/combination-sum-ii-medium"},{problemName:"0046 - Permutations",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/permutations/",solutionLink:"../../solutions/0000-0099/permutations-medium"},{problemName:"0078 - Subsets",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/subsets/",solutionLink:"../../solutions/0000-0099/subsets-medium"}],c=a=>function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)},k=c("TutorialAuthors"),N=c("Table"),u={toc:i,suggestedProblems:l},d="wrapper";function h(a){let{components:e,...t}=a;return(0,s.kt)(d,(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(k,{names:"@wingkwong",mdxType:"TutorialAuthors"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,'Backtracking is a general algorithmic technique that involves exploring all possible solutions to a problem by incrementally building a solution and then undoing (or "backtracking" on) the choices that lead to dead ends. It is a form of depth-first search and is particularly useful for solving problems that involve searching through a large number of possibilities, such as finding all possible solutions to a problem or finding the one solution that satisfies a set of constraints.'),(0,s.kt)("p",null,"The steps for using backtracking to solve a problem are as follows:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Understand the problem and its requirements by reading the problem statement and examples."),(0,s.kt)("li",{parentName:"ol"},"Develop a recursive algorithm that incrementally builds a solution and backtracks when a dead end is reached."),(0,s.kt)("li",{parentName:"ol"},"Define a base case for the recursion that indicates when a complete solution has been found, and a terminating condition that indicates when to stop the recursion."),(0,s.kt)("li",{parentName:"ol"},"Test the solution on the provided test cases to check if it works correctly and returns the expected output.")),(0,s.kt)("p",null,"Backtracking can be used for various of problems such as:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Generating all possible combinations of a set of items."),(0,s.kt)("li",{parentName:"ul"},"Finding all possible solutions to a problem"),(0,s.kt)("li",{parentName:"ul"},"Finding a specific solution that satisfies a set of constraints."),(0,s.kt)("li",{parentName:"ul"},"Solving puzzles or other combinatorial problems"),(0,s.kt)("li",{parentName:"ul"},"And many more")),(0,s.kt)("p",null,"Backtracking can be very inefficient, especially when the number of possible solutions or the size of the input is large. Therefore, it is important to carefully analyze the problem and develop an efficient backtracking algorithm."),(0,s.kt)("h2",{id:"example-0046---permutations-medium"},"Example: ",(0,s.kt)("a",{parentName:"h2",href:"../../solutions/0000-0099/permutations-medium"},"0046 - Permutations (Medium)")),(0,s.kt)("p",null,"If we have an array ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"s")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," of distinct integers, what are all the possible permutations? If the input is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1,2,3]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),", then the permutations would be ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"[["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]]"))))),". In C++, it is easy to solve this problem by using the built-in STL ",(0,s.kt)("strong",{parentName:"p"},"next_permutation"),". However, we can also solve it using backtracking."),(0,s.kt)("p",null,"The general steps are as follows."),(0,s.kt)("p",null,"1","."," Sort the input array if necessary. However, in this example, sorting is not necessary."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(nums.begin(), nums.end());\n")),(0,s.kt)("p",null,"2","."," Define ",(0,s.kt)("inlineCode",{parentName:"p"},"ans")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"tmp")," where ",(0,s.kt)("inlineCode",{parentName:"p"},"ans")," is the array storing all final permutations and ",(0,s.kt)("inlineCode",{parentName:"p"},"tmp")," is used to store possible permutations at some point."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<vector<int>> ans;\nvector<int> tmp;\n")),(0,s.kt)("p",null,"3","."," Call ",(0,s.kt)("inlineCode",{parentName:"p"},"backtrack()")," function in main"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"backtrack(nums, ans, tmp);\n")),(0,s.kt)("p",null,"4","."," Let's add logic in ",(0,s.kt)("inlineCode",{parentName:"p"},"backtrack()")," function. First we need to define the exit criteria. When should we push ",(0,s.kt)("inlineCode",{parentName:"p"},"tmp")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"ans"),"? If ",(0,s.kt)("inlineCode",{parentName:"p"},"tmp")," already got enough candidates, then we can push ",(0,s.kt)("inlineCode",{parentName:"p"},"tmp")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"ans"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"if ((int) tmp.size() == (int) nums.size()) {\n    ans.push_back(tmp);\n    return;\n}\n")),(0,s.kt)("p",null,"5","."," Iterate each number, check If the candidate has been used or not, skip it if it is already in ",(0,s.kt)("inlineCode",{parentName:"p"},"tmp"),". Otherwise, push it to ",(0,s.kt)("inlineCode",{parentName:"p"},"tmp")," and call ",(0,s.kt)("inlineCode",{parentName:"p"},"backtrack()")," again. After that, remove the previous candidate from ",(0,s.kt)("inlineCode",{parentName:"p"},"tmp")," and move to the next candidate."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"for (auto x : nums) {\n    if (find(tmp.begin(), tmp.end(), x) != tmp.end()) continue;\n    tmp.push_back(x);\n    backtrack(nums, ans, tmp);\n    tmp.pop_back();   \n}\n")),(0,s.kt)(N,{title:"Suggested Problems",data:l,mdxType:"Table"}))}h.isMDXComponent=!0}}]);