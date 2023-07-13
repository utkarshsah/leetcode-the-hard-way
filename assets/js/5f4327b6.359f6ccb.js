"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[30969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,h=c["".concat(i,".").concat(d)]||c[d]||u[d]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<s;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const s={description:"Author: @dhanu084 | https://leetcode.com/problems/bulls-and-cows/",tags:["Hashmap"]},o="0299 - Bulls and Cows (Medium)",l={unversionedId:"0200-0299/bulls-and-cows-medium",id:"0200-0299/bulls-and-cows-medium",title:"0299 - Bulls and Cows (Medium)",description:"Author: @dhanu084 | https://leetcode.com/problems/bulls-and-cows/",source:"@site/solutions/0200-0299/0299-bulls-and-cows-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/bulls-and-cows-medium",permalink:"/solutions/0200-0299/bulls-and-cows-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0299-bulls-and-cows-medium.md",tags:[{label:"Hashmap",permalink:"/solutions/tags/hashmap"}],version:"current",sidebarPosition:299,frontMatter:{description:"Author: @dhanu084 | https://leetcode.com/problems/bulls-and-cows/",tags:["Hashmap"]},sidebar:"tutorialSidebar",previous:{title:"0298 - Binary Tree Longest Consecutive Sequence (Medium)",permalink:"/solutions/0200-0299/binary-tree-longest-consecutive-sequence-medium"},next:{title:"0300 - 0399",permalink:"/solutions/category/0300---0399"}},i={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hashmap",id:"approach-1-hashmap",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("Tabs"),u=p("TabItem"),d=p("SolutionAuthor"),h={toc:m},b="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0299---bulls-and-cows-medium"},"0299 - Bulls and Cows (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/bulls-and-cows/"},"https://leetcode.com/problems/bulls-and-cows/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are playing the Bulls and Cows game with your friend."),(0,r.kt)("p",null,"You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:"),(0,r.kt)("p",null,'The number of "bulls", which are digits in the guess that are in the correct position.\nThe number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.\nGiven the secret number secret and your friend\'s guess guess, return the hint for your friend\'s guess.'),(0,r.kt)("p",null,'The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: secret = "1807", guess = "7810"\nOutput: "1A3B"\nExplanation: Bulls are connected with a \'|\' and cows are underlined:\n"1807"\n  |\n"7810"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: secret = "1123", guess = "0111"\nOutput: "1A1B"\nExplanation: Bulls are connected with a \'|\' and cows are underlined:\n"1123"        "1123"\n  |      or     |\n"0111"        "0111"\nNote that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 <= secret.length, guess.length <= 1000"),(0,r.kt)("li",{parentName:"ul"},"secret.length == guess.length"),(0,r.kt)("li",{parentName:"ul"},"secret and guess consist of digits only.")),(0,r.kt)("h2",{id:"approach-1-hashmap"},"Approach 1: Hashmap"),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("p",null,"Space Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(u,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(d,{name:"@dhanu084",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def getHint(self, secret: str, guess: str) -> str:\n        '''\n             Counter is an unordered collection where\n             elements are stored as Dict keys and their\n             count as dict value\n        '''\n        secret_freq = Counter(secret)\n        bulls = cows = 0\n        n = len(secret)\n\n        for i in range(n):\n            '''\n                if letter and position matches with secret increase\n                the bulls count and decrease the frequency of the\n                matched number to handle duplicates\n            '''\n            if secret[i] == guess[i]:\n                bulls += 1\n                secret_freq[secret[i]] -= 1\n\n        for i in range(n):\n            '''\n                if guessed letter is present in guess\n                with frequency greater than 0 and if itsn't a bull\n                only then increase cows count\n            '''\n            if guess[i] in secret_freq and secret_freq[guess[i]] > 0 and guess[i] != secret[i]:\n                cows += 1\n                secret_freq[guess[i]] -= 1\n\n        return f'{bulls}A{cows}B'\n")))))}k.isMDXComponent=!0}}]);