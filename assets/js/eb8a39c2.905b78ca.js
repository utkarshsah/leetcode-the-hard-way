"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[20748],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return N}});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),h=l(t),N=m,k=h["".concat(i,".").concat(N)]||h[N]||c[N]||s;return t?n.createElement(k,r(r({ref:e},o),{},{components:t})):n.createElement(k,r({ref:e},o))}));function N(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=h;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:m,r[1]=p;for(var l=2;l<s;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},58078:function(a,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return h}});var n,m=t(87462),s=t(63366),r=(t(67294),t(3905)),p=["components"],i={description:"Author: @heiheihang | https://leetcode.com/problems/minimum-time-to-finish-the-race/"},l="2188 - Minimum Time to Finish the Race (Hard)",o={unversionedId:"2100-2199/minimum-time-to-finish-the-race-hard",id:"2100-2199/minimum-time-to-finish-the-race-hard",title:"2188 - Minimum Time to Finish the Race (Hard)",description:"Author: @heiheihang | https://leetcode.com/problems/minimum-time-to-finish-the-race/",source:"@site/solutions/2100-2199/2188-minimum-time-to-finish-the-race-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/minimum-time-to-finish-the-race-hard",permalink:"/solutions/2100-2199/minimum-time-to-finish-the-race-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2188-minimum-time-to-finish-the-race-hard.md",tags:[],version:"current",sidebarPosition:2188,frontMatter:{description:"Author: @heiheihang | https://leetcode.com/problems/minimum-time-to-finish-the-race/"},sidebar:"tutorialSidebar",previous:{title:"2187 - Minimum Time to Complete Trips (Medium)",permalink:"/solutions/2100-2199/minimum-time-to-complete-trips-medium"},next:{title:"2190 - Most Frequent Number Following Key In an Array (Easy)",permalink:"/solutions/2100-2199/most-frequent-number-following-key-in-an-array-easy"}},c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP",id:"approach-1-dp",level:2}],N=(n="SolutionAuthor",function(a){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}),k={toc:h};function d(a){var e=a.components,t=(0,s.Z)(a,p);return(0,r.kt)("wrapper",(0,m.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2188---minimum-time-to-finish-the-race-hard"},"2188 - Minimum Time to Finish the Race (Hard)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-time-to-finish-the-race/"},"https://leetcode.com/problems/minimum-time-to-finish-the-race/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given a ",(0,r.kt)("strong",{parentName:"p"},"0-indexed")," 2D integer array ",(0,r.kt)("inlineCode",{parentName:"p"},"tires")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"tires[i] = [fi, ri]")," indicates that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ith")," tire can finish its ",(0,r.kt)("inlineCode",{parentName:"p"},"xth")," successive lap in ",(0,r.kt)("inlineCode",{parentName:"p"},"fi * ri(x-1)")," seconds."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For example, if ",(0,r.kt)("inlineCode",{parentName:"li"},"fi = 3")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ri = 2"),", then the tire would finish its ",(0,r.kt)("inlineCode",{parentName:"li"},"1st")," lap in ",(0,r.kt)("inlineCode",{parentName:"li"},"3")," seconds, its ",(0,r.kt)("inlineCode",{parentName:"li"},"2nd")," lap in ",(0,r.kt)("inlineCode",{parentName:"li"},"3 * 2 = 6")," seconds, its ",(0,r.kt)("inlineCode",{parentName:"li"},"3rd")," lap in ",(0,r.kt)("inlineCode",{parentName:"li"},"3 * 22 = 12")," seconds, etc.")),(0,r.kt)("p",null,"You are also given an integer ",(0,r.kt)("inlineCode",{parentName:"p"},"changeTime")," and an integer ",(0,r.kt)("inlineCode",{parentName:"p"},"numLaps"),"."),(0,r.kt)("p",null,"The race consists of ",(0,r.kt)("inlineCode",{parentName:"p"},"numLaps")," laps and you may start the race with ",(0,r.kt)("strong",{parentName:"p"},"any")," tire. You have an ",(0,r.kt)("strong",{parentName:"p"},"unlimited")," supply of each tire and after every lap, you may ",(0,r.kt)("strong",{parentName:"p"},"change")," to any given tire (including the current tire type) if you wait ",(0,r.kt)("inlineCode",{parentName:"p"},"changeTime")," seconds."),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"the ",(0,r.kt)("strong",{parentName:"em"},"minimum")," time to finish the race.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: tires = [[2,3],[3,4]], changeTime = 5, numLaps = 4\nOutput: 21\nExplanation: \nLap 1: Start with tire 0 and finish the lap in 2 seconds.\nLap 2: Continue with tire 0 and finish the lap in 2 * 3 = 6 seconds.\nLap 3: Change tires to a new tire 0 for 5 seconds and then finish the lap in another 2 seconds.\nLap 4: Continue with tire 0 and finish the lap in 2 * 3 = 6 seconds.\nTotal time = 2 + 6 + 5 + 2 + 6 = 21 seconds.\nThe minimum time to complete the race is 21 seconds.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: tires = [[1,10],[2,2],[3,4]], changeTime = 6, numLaps = 5\nOutput: 25\nExplanation: \nLap 1: Start with tire 1 and finish the lap in 2 seconds.\nLap 2: Continue with tire 1 and finish the lap in 2 * 2 = 4 seconds.\nLap 3: Change tires to a new tire 1 for 6 seconds and then finish the lap in another 2 seconds.\nLap 4: Continue with tire 1 and finish the lap in 2 * 2 = 4 seconds.\nLap 5: Change tires to tire 0 for 6 seconds then finish the lap in another 1 second.\nTotal time = 2 + 4 + 6 + 2 + 4 + 6 + 1 = 25 seconds.\nThe minimum time to complete the race is 25 seconds. \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= tires.length <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tires[i].length == 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= fi, changeTime <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2 <= ri <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= numLaps <= 1000"))),(0,r.kt)("h2",{id:"approach-1-dp"},"Approach 1: DP"),(0,r.kt)("p",null,"The general approach is to store the minimum time required to travel each lap. We must make the following observation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To travel ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," laps, we must use the same tire for ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," laps, or we can use the set of tires used to travel ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," laps and another set of tires used to travel ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"b")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," laps such that ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mi",{parentName:"mrow"},"b"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a+b=n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),"."),(0,r.kt)("li",{parentName:"ul"},"Before we can find an optimal set of tires to travel ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," laps, we can only consider using the same tire to travel ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1")))))," to ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," laps")),(0,r.kt)("p",null,"We can now break this problem into 2 parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find the shortest time to travel ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," laps when we can only use 1 tire at a time"),(0,r.kt)("li",{parentName:"ol"},"Find the shortest time to travel ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," laps by potentially choosing the time needed to travel ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," laps and the time needed to travel ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"b")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," laps such that we can travel ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," laps with ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"b"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"h"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"e")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"time(a)+time(b)+changeTime")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"im"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"im"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"han"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"im"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"))))))),(0,r.kt)("p",null,"The first part is straightforward as we only need to iterate each tire for ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"L"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"s")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"numLaps")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," times. However, we need some optimizations to stop iterating when the following condition is met"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"f_i * (r_i) ^ n >= time[(n+1)//2] + time[(n+1)//2] + changeTime\n")),(0,r.kt)("p",null,"Notice that the above condition is not optimally the upper bound, but it is good enough to break the loop. We know that we can stop here because using the same tire increases exponentially, and further combining previous sets of tires increases linearly."),(0,r.kt)("p",null,"The second part involves looking for a combination of laps for each lap. For example, if we want to find the minimum time for running 9 laps, we need to find the following"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dp[1] + dp[8] + changeTime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dp[2] + dp[7] + changeTime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dp[3] + dp[6] + changeTime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dp[4] + dp[5] + changeTime"))),(0,r.kt)("p",null,"Of course, if there exists a tire running 9 laps in a row that is fast than the above, we keep it."),(0,r.kt)("p",null,"A small optimisation here is that instead of generating repeating pairs (","[","1,8] and ","[","8,1]), we can cut each loop by half."),(0,r.kt)("p",null,"Here is a dry run of the following test case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tires = [2,3], [3,3], [3, 2], changeTime = 5, numLaps = 6\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/168303953-913d229c-ce49-4480-8810-a7b397856140.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/168303969-2225c532-7582-4940-ab0f-5a76a3662e60.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/168303988-5ec8284a-8690-4702-a363-a14a2f963cd9.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/168304003-39cee495-675e-4b33-b813-4fd1ee280ea8.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/168304019-dfb9f067-4556-44e8-9c2e-c19e42f8415c.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/168304028-cf195b2c-3e05-4736-b950-a0c5851fcc20.png",alt:"image"})),(0,r.kt)(N,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def minimumFinishTime(self, tires: List[List[int]], changeTime: int, numLaps: int) -> int:\n\n    # initialize DP Array\n    # it keeps track of the shortest time needed to finish each lap\n    dp = [float('inf')] * (numLaps + 1)\n\n    # initialize the shortest time needed to finish each lap with 1 tire only\n    for f, r in tires:\n\n        # initialize the finishing time\n        time = f\n\n        # initialize the number of laps\n        cnt = 1\n\n        # hard upper limit is numLaps\n        while(cnt <= numLaps):\n\n            # a terminating condition if continually running the same lap is slower\n            if(dp[(cnt + 1) // 2] * 2 + changeTime <= time):\n                dp[cnt] = min(dp[(cnt + 1) // 2] * 2 + changeTime, dp[cnt])\n                break\n            else:\n                # update the shortest time needed to finish cnt laps\n                dp[cnt] = min(dp[cnt], time)\n\n            # update finishing time and number of laps\n            time += f * (r ** (cnt))\n            cnt += 1\n\n    # check for all small + big = i\n    for i in range(2, numLaps+1):\n        for j in range(1, i // 2 + 1):\n\n            small = j\n            big = i - j\n\n            # remember to add changeTime if we combine two previous sets of tires\n            dp[i] = min(dp[i], dp[small] + dp[big] + changeTime)\n\n    return dp[-1]\n\n")))}d.isMDXComponent=!0}}]);