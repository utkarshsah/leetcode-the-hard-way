"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[56038],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=i.createContext({}),u=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,b=s["".concat(m,".").concat(d)]||s[d]||l[d]||a;return n?i.createElement(b,o(o({ref:t},p),{},{components:n})):i.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},37253:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return s}});var i,r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],m={description:"Author: @wingkwong | https://leetcode.com/problems/combination-sum-ii/"},u="0040 - Combination Sum II (Medium)",p={unversionedId:"0000-0099/combination-sum-ii-medium",id:"0000-0099/combination-sum-ii-medium",title:"0040 - Combination Sum II (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/combination-sum-ii/",source:"@site/solutions/0000-0099/0040-combination-sum-ii-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/combination-sum-ii-medium",permalink:"/solutions/0000-0099/combination-sum-ii-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0040-combination-sum-ii-medium.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/combination-sum-ii/"},sidebar:"tutorialSidebar",previous:{title:"0039 - Combination Sum (Medium)",permalink:"/solutions/0000-0099/combination-sum-medium"},next:{title:"0042 - Trapping Rain Water (Hard)",permalink:"/solutions/0000-0099/trapping-rain-water-hard"}},l={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Backtracking",id:"approach-1-backtracking",level:2}],d=(i="SolutionAuthor",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),b={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0040---combination-sum-ii-medium"},"0040 - Combination Sum II (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/combination-sum-ii/"},"https://leetcode.com/problems/combination-sum-ii/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given a collection of candidate numbers (",(0,o.kt)("inlineCode",{parentName:"p"},"candidates"),") and a target number (",(0,o.kt)("inlineCode",{parentName:"p"},"target"),"), find all unique combinations in ",(0,o.kt)("inlineCode",{parentName:"p"},"candidates")," where the candidate numbers sum to ",(0,o.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,o.kt)("p",null,"Each number in ",(0,o.kt)("inlineCode",{parentName:"p"},"candidates")," may only be used ",(0,o.kt)("strong",{parentName:"p"},"once")," in the combination."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The solution set must not contain duplicate combinations."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: candidates = [10,1,2,7,6,1,5], target = 8\nOutput: \n[\n[1,1,6],\n[1,2,5],\n[1,7],\n[2,6]\n]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: candidates = [2,5,2,1,2], target = 5\nOutput: \n[\n[1,2,2],\n[5]\n]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= candidates.length <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= candidates[i] <= 50")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= target <= 30"))),(0,o.kt)("h2",{id:"approach-1-backtracking"},"Approach 1: Backtracking"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"combination-sum-medium"},"0039 - Combination Sum (Medium)"),", the only difference is each number can be used once in the combination. To avoid overcounting, we can simply add ",(0,o.kt)("inlineCode",{parentName:"p"},"i != start && candidates[i] == candidates[i - 1].")),(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    void backtrack(vector<int>& candidates, int target, vector<vector<int>>& ans, vector<int>& tmp, int start) {\n        if(target == 0) {\n            ans.push_back(tmp);\n            return;\n        }\n        for(int i = start; i < candidates.size() && target >= candidates[i]; i++){\n            if(i != start && candidates[i] == candidates[i - 1]) continue;\n            tmp.push_back(candidates[i]);\n            backtrack(candidates, target - candidates[i], ans, tmp, i + 1);\n            tmp.pop_back();\n        }\n    }\n    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {\n        sort(candidates.begin(), candidates.end());\n        vector<vector<int>> ans;\n        vector<int> tmp;\n        backtrack(candidates, target, ans, tmp, 0);\n        return ans;\n    }\n};\n")))}k.isMDXComponent=!0}}]);