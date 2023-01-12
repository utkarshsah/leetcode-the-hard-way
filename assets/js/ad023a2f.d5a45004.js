"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9832],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),l=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return t?i.createElement(g,a(a({ref:n},c),{},{components:t})):i.createElement(g,a({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70683:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var i,r=t(87462),o=t(63366),a=(t(67294),t(3905)),p=["components"],u={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/"},l="2383 - Minimum Hours of Training to Win a Competition (Easy)",c={unversionedId:"2300-2399/minimum-hours-of-training-to-win-a-competition-easy",id:"2300-2399/minimum-hours-of-training-to-win-a-competition-easy",title:"2383 - Minimum Hours of Training to Win a Competition (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/",source:"@site/solutions/2300-2399/2383-minimum-hours-of-training-to-win-a-competition-easy.md",sourceDirName:"2300-2399",slug:"/2300-2399/minimum-hours-of-training-to-win-a-competition-easy",permalink:"/solutions/2300-2399/minimum-hours-of-training-to-win-a-competition-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2383-minimum-hours-of-training-to-win-a-competition-easy.md",tags:[],version:"current",sidebarPosition:2383,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/"},sidebar:"tutorialSidebar",previous:{title:"2381 - Shifting Letters II (Medium)",permalink:"/solutions/2300-2399/shifting-letters-ii-medium"},next:{title:"2384 - Largest Palindromic Number (Medium)",permalink:"/solutions/2300-2399/largest-palindromic-number-medium"}},s={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}],d=(i="SolutionAuthor",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),g={toc:m};function y(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2383---minimum-hours-of-training-to-win-a-competition-easy"},"2383 - Minimum Hours of Training to Win a Competition (Easy)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are entering a competition, and are given two ",(0,a.kt)("strong",{parentName:"p"},"positive")," integers ",(0,a.kt)("inlineCode",{parentName:"p"},"initialEnergy")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"initialExperience")," denoting your initial energy and initial experience respectively."),(0,a.kt)("p",null,"You are also given two ",(0,a.kt)("strong",{parentName:"p"},"0-indexed")," integer arrays ",(0,a.kt)("inlineCode",{parentName:"p"},"energy")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"experience"),", both of length ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,a.kt)("p",null,"You will face ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," opponents ",(0,a.kt)("strong",{parentName:"p"},"in order"),". The energy and experience of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," opponent is denoted by ",(0,a.kt)("inlineCode",{parentName:"p"},"energy[i]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"experience[i]")," respectively. When you face an opponent, you need to have both ",(0,a.kt)("strong",{parentName:"p"},"strictly")," greater experience and energy to defeat them and move to the next opponent if available."),(0,a.kt)("p",null,"Defeating the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," opponent ",(0,a.kt)("strong",{parentName:"p"},"increases")," your experience by ",(0,a.kt)("inlineCode",{parentName:"p"},"experience[i]"),", but ",(0,a.kt)("strong",{parentName:"p"},"decreases")," your energy by ",(0,a.kt)("inlineCode",{parentName:"p"},"energy[i]"),"."),(0,a.kt)("p",null,"Before starting the competition, you can train for some number of hours. After each hour of training, you can ",(0,a.kt)("strong",{parentName:"p"},"either")," choose to increase your initial experience by one, or increase your initial energy by one."),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the ",(0,a.kt)("strong",{parentName:"em"},"minimum")," number of training hours required to defeat all"),(0,a.kt)("inlineCode",{parentName:"p"},"n"),(0,a.kt)("em",{parentName:"p"},"opponents"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: initialEnergy = 5, initialExperience = 3, energy = [1,4,3,2], experience = [2,6,3,1]\nOutput: 8\nExplanation: You can increase your energy to 11 after 6 hours of training, and your experience to 5 after 2 hours of training.\nYou face the opponents in the following order:\n- You have more energy and experience than the 0th opponent so you win.\n  Your energy becomes 11 - 1 = 10, and your experience becomes 5 + 2 = 7.\n- You have more energy and experience than the 1st opponent so you win.\n  Your energy becomes 10 - 4 = 6, and your experience becomes 7 + 6 = 13.\n- You have more energy and experience than the 2nd opponent so you win.\n  Your energy becomes 6 - 3 = 3, and your experience becomes 13 + 3 = 16.\n- You have more energy and experience than the 3rd opponent so you win.\n  Your energy becomes 3 - 2 = 1, and your experience becomes 16 + 1 = 17.\nYou did a total of 6 + 2 = 8 hours of training before the competition, so we return 8.\nIt can be proven that no smaller answer exists.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: initialEnergy = 2, initialExperience = 4, energy = [1], experience = [3]\nOutput: 0\nExplanation: You do not need any additional energy or experience to win the competition, so we return 0.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == energy.length == experience.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= initialEnergy, initialExperience, energy[i], experience[i] <= 100"))),(0,a.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minNumberOfHours(int initialEnergy, int initialExperience, vector<int>& energy, vector<int>& experience) {\n        int n = energy.size(), ans = 0;\n        for (int i = 0; i < n; i++) {\n            // if initialEnergy is not enough, then we need to add some training hours\n            if (initialEnergy <= energy[i]) {\n                // + 1 here because we need it to be strictly greater\n                int need = energy[i] - initialEnergy + 1;\n                // ans is the number of training hours\n                ans += need;\n                // since we train, we gain energy\n                initialEnergy += need;\n            }\n            // similarly for experience\n            // if initialExperience is not enough, then we need to add some training hours\n            if (initialExperience <= experience[i]) {\n                // + 1 here because we need it to be strictly greater\n                int need = experience[i] - initialExperience + 1;\n                // ans is the number of training hours\n                ans += need;\n                // since we train, we gain experience\n                initialExperience += need;\n            }\n            // start a competition\n            // increases your experience by experience[i]\n            initialEnergy -= energy[i];\n            // and decreases your energy by energy[i]\n            initialExperience += experience[i];\n        }\n        return ans;\n    }\n};\n")))}y.isMDXComponent=!0}}]);