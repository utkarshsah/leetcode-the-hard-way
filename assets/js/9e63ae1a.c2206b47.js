"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5008],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return u}});var n=t(67294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var i=n.createContext({}),o=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,m=a.originalType,i=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),d=o(t),u=r,N=d["".concat(i,".").concat(u)]||d[u]||c[u]||m;return t?n.createElement(N,s(s({ref:e},l),{},{components:t})):n.createElement(N,s({ref:e},l))}));function u(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var m=t.length,s=new Array(m);s[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:r,s[1]=p;for(var o=2;o<m;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17252:function(a,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var n=t(87462),r=t(63366),m=(t(67294),t(3905)),s=["components"],p={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/combination-sum/"},i="0039 - Combination Sum (Medium)",o={unversionedId:"0000-0099/combination-sum-medium",id:"0000-0099/combination-sum-medium",title:"0039 - Combination Sum (Medium)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/combination-sum/",source:"@site/solutions/0000-0099/0039-combination-sum-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/combination-sum-medium",permalink:"/leetcode-the-hard-way/solutions/0000-0099/combination-sum-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0039-combination-sum-medium.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/combination-sum/"},sidebar:"tutorialSidebar",previous:{title:"0037 - Sudoku Solver (Hard)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/sudoku-solver-hard"},next:{title:"0040 - Combination Sum II (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/combination-sum-ii-medium"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Backtracking",id:"approach-1-backtracking",level:2}],d=function(a){return function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.kt)("div",e)}},u=d("Tabs"),N=d("TabItem"),k=d("SolutionAuthor"),h={toc:c};function g(a){var e=a.components,t=(0,r.Z)(a,s);return(0,m.kt)("wrapper",(0,n.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"0039---combination-sum-medium"},"0039 - Combination Sum (Medium)"),(0,m.kt)("h2",{id:"problem-link"},"Problem Link"),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/combination-sum/"},"https://leetcode.com/problems/combination-sum/")),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"Given an array of ",(0,m.kt)("strong",{parentName:"p"},"distinct")," integers ",(0,m.kt)("inlineCode",{parentName:"p"},"candidates")," and a target integer ",(0,m.kt)("inlineCode",{parentName:"p"},"target"),", return ",(0,m.kt)("em",{parentName:"p"},"a list of all ",(0,m.kt)("strong",{parentName:"em"},"unique combinations")," of")," ",(0,m.kt)("inlineCode",{parentName:"p"},"candidates")," ",(0,m.kt)("em",{parentName:"p"},"where the chosen numbers sum to")," ",(0,m.kt)("inlineCode",{parentName:"p"},"target"),(0,m.kt)("em",{parentName:"p"},".")," You may return the combinations in ",(0,m.kt)("strong",{parentName:"p"},"any order"),"."),(0,m.kt)("p",null,"The ",(0,m.kt)("strong",{parentName:"p"},"same")," number may be chosen from ",(0,m.kt)("inlineCode",{parentName:"p"},"candidates")," an ",(0,m.kt)("strong",{parentName:"p"},"unlimited number of times"),". Two combinations are unique if the frequency of at least one of the chosen numbers is different."),(0,m.kt)("p",null,"It is ",(0,m.kt)("strong",{parentName:"p"},"guaranteed")," that the number of unique combinations that sum up to ",(0,m.kt)("inlineCode",{parentName:"p"},"target")," is less than ",(0,m.kt)("inlineCode",{parentName:"p"},"150")," combinations for the given input."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: candidates = [2,3,6,7], target = 7\nOutput: [[2,2,3],[7]]\nExplanation:\n2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.\n7 is a candidate, and 7 = 7.\nThese are the only two combinations.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: candidates = [2,3,5], target = 8\nOutput: [[2,2,2,2],[2,3,3],[3,5]]\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 3:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: candidates = [2], target = 1\nOutput: [] \n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= candidates.length <= 30")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= candidates[i] <= 200")),(0,m.kt)("li",{parentName:"ul"},"All elements of ",(0,m.kt)("inlineCode",{parentName:"li"},"candidates")," are ",(0,m.kt)("strong",{parentName:"li"},"distinct"),"."),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= target <= 500"))),(0,m.kt)("h2",{id:"approach-1-backtracking"},"Approach 1: Backtracking"),(0,m.kt)("p",null,"We can apply backtracking in this problem."),(0,m.kt)("p",null,"First, we sort the array and build our candidates incrementally. We iterate from starting point and  push each candidate to ",(0,m.kt)("inlineCode",{parentName:"p"},"tmp")," and call ",(0,m.kt)("inlineCode",{parentName:"p"},"backtrack()")," with the updated  ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"t"),(0,m.kt)("mrow",{parentName:"msub"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"w"))),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"t"),(0,m.kt)("mrow",{parentName:"msub"},(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"d"))),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"target_{new} = target_{old} - candidates[i]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02691em"}},"w"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"es"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"))))),"."),(0,m.kt)("p",null,"If we have a valid solution, we push ",(0,m.kt)("inlineCode",{parentName:"p"},"tmp")," to answer and abandon a candidate."),(0,m.kt)(u,{mdxType:"Tabs"},(0,m.kt)(N,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,m.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    void backtrack(vector<int>& candidates, int target, vector<vector<int>>& ans, vector<int>& tmp, int start) {\n        if(target == 0) {\n            ans.push_back(tmp);\n            return;\n        }\n        for(int i = start; i < candidates.size() && target >= candidates[i]; i++){\n            tmp.push_back(candidates[i]);\n            backtrack(candidates, target - candidates[i], ans, tmp, i);\n            tmp.pop_back();\n        }\n    }\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        sort(candidates.begin(), candidates.end());\n        vector<vector<int>> ans;\n        vector<int> tmp;\n        backtrack(candidates, target, ans, tmp, 0);\n        return ans;\n    }\n};\n"))),(0,m.kt)(N,{value:"python",label:"Python",mdxType:"TabItem"},(0,m.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        res = []\n\n        def dfs(i, curr, total):\n            if total == target:\n                res.append(curr.copy())\n                return \n            if i >= len(candidates) or total > target:\n                return \n            curr.append(candidates[i])\n            dfs(i, curr, total + candidates[i])\n            curr.pop()\n            dfs(i + 1, curr, total)\n        \n        dfs(0, [], 0)\n        return res \n")))))}g.isMDXComponent=!0}}]);