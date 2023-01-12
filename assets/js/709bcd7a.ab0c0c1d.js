"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[30439],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,h=u["".concat(i,".").concat(k)]||u[k]||l[k]||m;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,o=new Array(m);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<m;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79963:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=a(87462),r=a(63366),m=(a(67294),a(3905)),o=["components"],s={description:"Author: @hirotake111 | https://leetcode.com/problems/maximum-ice-cream-bars/"},i="1833 - Maximum Ice Cream Bars (Medium)",p={unversionedId:"1800-1899/maximum-ice-cream-bars-medium",id:"1800-1899/maximum-ice-cream-bars-medium",title:"1833 - Maximum Ice Cream Bars (Medium)",description:"Author: @hirotake111 | https://leetcode.com/problems/maximum-ice-cream-bars/",source:"@site/solutions/1800-1899/1833-maximum-ice-cream-bars-medium.md",sourceDirName:"1800-1899",slug:"/1800-1899/maximum-ice-cream-bars-medium",permalink:"/solutions/1800-1899/maximum-ice-cream-bars-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1800-1899/1833-maximum-ice-cream-bars-medium.md",tags:[],version:"current",sidebarPosition:1833,frontMatter:{description:"Author: @hirotake111 | https://leetcode.com/problems/maximum-ice-cream-bars/"},sidebar:"tutorialSidebar",previous:{title:"1822 - Sign of the Product of an Array (Easy)",permalink:"/solutions/1800-1899/sign-of-the-product-of-an-array-easy"},next:{title:"1854 - Maximum Population Year (Easy)",permalink:"/solutions/1800-1899/maximum-population-year-easy"}},c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Frequency",id:"approach-1-frequency",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.kt)("div",t)}},k=u("Tabs"),h=u("TabItem"),d=u("SolutionAuthor"),N={toc:l};function b(e){var t=e.components,a=(0,r.Z)(e,o);return(0,m.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"1833---maximum-ice-cream-bars-medium"},"1833 - Maximum Ice Cream Bars (Medium)"),(0,m.kt)("h2",{id:"problem-link"},"Problem Link"),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-ice-cream-bars/"},"https://leetcode.com/problems/maximum-ice-cream-bars/")),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"It is a sweltering summer day, and a boy wants to buy some ice cream bars."),(0,m.kt)("p",null,"At the store, there are ",(0,m.kt)("inlineCode",{parentName:"p"},"n")," ice cream bars. You are given an array ",(0,m.kt)("inlineCode",{parentName:"p"},"costs")," of length ",(0,m.kt)("inlineCode",{parentName:"p"},"n"),", where ",(0,m.kt)("inlineCode",{parentName:"p"},"costs[i]")," is the price of the ",(0,m.kt)("inlineCode",{parentName:"p"},"ith")," ice cream bar in coins. The boy initially has ",(0,m.kt)("inlineCode",{parentName:"p"},"coins")," coins to spend, and he wants to buy as many ice cream bars as possible."),(0,m.kt)("p",null,"Return the maximum number of ice cream bars the boy can buy with ",(0,m.kt)("inlineCode",{parentName:"p"},"coins")," coins."),(0,m.kt)("p",null,"Note: The boy can buy the ice cream bars in any order."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: costs = [1,3,2,4,1], coins = 7\nOutput: 4\nExplanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: costs = [10,6,8,7,7,8], coins = 5\nOutput: 0\nExplanation: The boy cannot afford any of the ice cream bars.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 3:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: costs = [1,6,3,1,2,5], coins = 20\nOutput: 6\nExplanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"costs.length == n")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= costs[i] <= 10^5")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= coins <= 10^8"))),(0,m.kt)("h2",{id:"approach-1-frequency"},"Approach 1: Frequency"),(0,m.kt)("p",null,"Time Complexity: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n + m)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," ",(0,m.kt)("sub",null,"(where ",(0,m.kt)("inlineCode",{parentName:"p"},"n"),": length of costs, ",(0,m.kt)("inlineCode",{parentName:"p"},"m"),": maximum value among ",(0,m.kt)("inlineCode",{parentName:"p"},"costs"),")"),"\nSpace Complexity: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(m)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," ",(0,m.kt)("sub",null,"(where ",(0,m.kt)("inlineCode",{parentName:"p"},"m"),": maximum value among ",(0,m.kt)("inlineCode",{parentName:"p"},"costs"),")")),(0,m.kt)(k,{mdxType:"Tabs"},(0,m.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,m.kt)(d,{name:"@hirotake111",mdxType:"SolutionAuthor"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def maxIceCream(self, costs: List[int], coins: int) -> int:\n        # Fill in the list of frequency\n        # Each index is cost of icecream - so the length must be max(costs) + 1\n        freq = [0] * (max(costs) + 1)\n        answer = 0\n\n        # Count each cost's frequency\n        for cost in costs:\n            freq[cost] += 1\n\n        for cost, amount in enumerate(freq):\n            # If frequency is 0, skip it\n            if freq[cost] == 0:\n                continue\n            # If cost * amount is less than coins,\n            # simply decrease the coins by cost * amount\n            if cost * amount <= coins:\n                coins -= cost * amount\n                answer += amount\n                continue\n            # At this point we can't buy amount * cost\n            # So coins // cost should be the amount of icecream we can buy\n            answer += coins // cost\n            # And don't forget to exit loop (as we can't buy icecreams anymore)\n            break\n\n        return answer\n")))))}b.isMDXComponent=!0}}]);