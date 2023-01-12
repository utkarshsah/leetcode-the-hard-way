"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[14719],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return c}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=i(t),c=s,d=k["".concat(l,".").concat(c)]||k[c]||N[c]||r;return t?n.createElement(d,m(m({ref:a},o),{},{components:t})):n.createElement(d,m({ref:a},o))}));function c(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=k;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:s,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},39844:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return N}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),m=["components"],p={description:"Author: @wingkwong, @rahulvarma5297, @radojicic23 | https://leetcode.com/problems/merge-k-sorted-lists/",tags:["Linked List","Divide and Conquer","Heap (Priority Queue)","Merge Sort"]},l="0023 - Merge k Sorted Lists (Hard)",i={unversionedId:"0000-0099/merge-k-sorted-lists-hard",id:"0000-0099/merge-k-sorted-lists-hard",title:"0023 - Merge k Sorted Lists (Hard)",description:"Author: @wingkwong, @rahulvarma5297, @radojicic23 | https://leetcode.com/problems/merge-k-sorted-lists/",source:"@site/solutions/0000-0099/0023-merge-k-sorted-lists-hard.md",sourceDirName:"0000-0099",slug:"/0000-0099/merge-k-sorted-lists-hard",permalink:"/solutions/0000-0099/merge-k-sorted-lists-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0023-merge-k-sorted-lists-hard.md",tags:[{label:"Linked List",permalink:"/solutions/tags/linked-list"},{label:"Divide and Conquer",permalink:"/solutions/tags/divide-and-conquer"},{label:"Heap (Priority Queue)",permalink:"/solutions/tags/heap-priority-queue"},{label:"Merge Sort",permalink:"/solutions/tags/merge-sort"}],version:"current",sidebarPosition:23,frontMatter:{description:"Author: @wingkwong, @rahulvarma5297, @radojicic23 | https://leetcode.com/problems/merge-k-sorted-lists/",tags:["Linked List","Divide and Conquer","Heap (Priority Queue)","Merge Sort"]},sidebar:"tutorialSidebar",previous:{title:"0022 - Generate Parentheses (Medium)",permalink:"/solutions/0000-0099/generate-parentheses-medium"},next:{title:"0024 - Swap Nodes in Pairs (Medium)",permalink:"/solutions/0000-0099/swap-nodes-in-pairs-medium"}},o={},N=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Divide and Conquer",id:"approach-1-divide-and-conquer",level:2}],k=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}},c=k("Tabs"),d=k("TabItem"),u=k("SolutionAuthor"),h={toc:N};function g(e){var a=e.components,t=(0,s.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0023---merge-k-sorted-lists-hard"},"0023 - Merge k Sorted Lists (Hard)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/merge-k-sorted-lists/"},"https://leetcode.com/problems/merge-k-sorted-lists/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," linked-lists ",(0,r.kt)("inlineCode",{parentName:"p"},"lists"),", each linked-list is sorted in ascending order."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Merge all the linked-lists into one sorted linked-list and return it.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]\nExplanation: The linked-lists are:\n[\n  1->4->5,\n  1->3->4,\n  2->6\n]\nmerging them into one sorted list:\n1->1->2->3->4->4->5->6\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: lists = []\nOutput: []\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: lists = [[]]\nOutput: []\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k == lists.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= k <= 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= lists[i].length <= 500")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-10^4 <= lists[i][j] <= 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lists[i]")," is sorted in ",(0,r.kt)("strong",{parentName:"li"},"ascending order"),"."),(0,r.kt)("li",{parentName:"ul"},"The sum of ",(0,r.kt)("inlineCode",{parentName:"li"},"lists[i].length")," won't exceed ",(0,r.kt)("inlineCode",{parentName:"li"},"10^4"),".")),(0,r.kt)("h2",{id:"approach-1-divide-and-conquer"},"Approach 1: Divide and Conquer"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is recommended to solve ",(0,r.kt)("a",{parentName:"p",href:"merge-two-sorted-lists-easy"},"0021 - Merge Two Sorted Lists (Easy)")," first.")),(0,r.kt)("p",null,"We can directly use the solution from ",(0,r.kt)("a",{parentName:"p",href:"merge-two-sorted-lists-easy"},"0021 - Merge Two Sorted Lists (Easy)")," to solve this problem because merging K sorted lists is same as merging two sorted lists ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"g"),(0,r.kt)("mn",{parentName:"msub"},"2")),(0,r.kt)("mi",{parentName:"mrow"},"k")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"log_2k")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," times."),(0,r.kt)("p",null,"The idea is to merge the ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"k")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," lists into ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mn",{parentName:"mrow"},"2")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k / 2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/2"))))),", then ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mn",{parentName:"mrow"},"4")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k / 4")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/4"))))),", ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mn",{parentName:"mrow"},"8")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k / 8")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/8")))))," and so on. Therefore, we merge the pairs",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"2"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mn",{parentName:"mrow"},"3"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"4"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mn",{parentName:"mrow"},"5"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"6"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mn",{parentName:"mrow"},"7"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(0, 1), (2,3), (4,5),(6,7)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"4"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"5"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"6"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"7"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", then ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mn",{parentName:"mrow"},"2"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"4"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mn",{parentName:"mrow"},"6"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(0, 2), (4,6)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"4"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"6"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", then ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mn",{parentName:"mrow"},"4"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(0, 4)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"4"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," and get the final result."),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode *mergeKLists(vector<ListNode*> &lists) {\n        if (lists.size() == 0) return nullptr;\n        while (lists.size() > 1) {\n            vector<ListNode *> nlists;\n            for (int i = 0; i < lists.size(); i += 2) {\n                ListNode* l = lists[i];\n                ListNode* r = i + 1 < lists.size() ? lists[i + 1] : nullptr;\n                ListNode* merged = mergeTwoLists(l, r);\n                nlists.push_back(merged);\n            }\n            lists = nlists;\n        }\n        return lists[0];\n    }\n\n    // Solution from 0021 - Merge Two Sorted Lists (Easy)\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        if (list1 == nullptr) return list2;\n        else if (list2 == nullptr) return list1;\n        else if (list1->val < list2->val) {\n            list1->next = mergeTwoLists(list1->next, list2);\n            return list1;\n        } else {\n            list2->next = mergeTwoLists(list2->next, list1);\n            return list2;\n        }\n    }\n};\n"))),(0,r.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(u,{name:"@rahulvarma5297",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        int len = lists.length;\n        if (len == 0) {\n            return null;\n        }\n\n        return mergeKLists(lists, 0, len - 1);\n    }\n\n    public ListNode mergeKLists(ListNode[] lists, int start, int end) {\n        if (end - start == 0) {\n            return lists[start];\n        }\n        if (end - start == 1) {\n            return mergeLists(lists[start], lists[end]);\n        }\n        int mid = start + ((end - start) / 2);\n        ListNode listA = mergeKLists(lists, start, mid);\n        ListNode listB = mergeKLists(lists, mid + 1, end);\n        return mergeLists(listA, listB);\n    }\n\n    public ListNode mergeLists(ListNode listA, ListNode listB) {\n        if (listA == null) {\n            return listB;\n        }\n        if (listB == null) {\n            return listA;\n        }\n        if (listA.val < listB.val) {\n            listA.next = mergeLists(listA.next, listB);\n            return listA;\n        } else {\n            listB.next = mergeLists(listA, listB.next);\n            return listB;\n        }\n    }\n}\n"))),(0,r.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(u,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n        # edgecases: if length is 0 and lists is None\n        if not lists or len(lists) == 0:\n            return None\n        # take pairs of LL and merge them each time and \n        # keep doing it until there is one LL remaining \n        while len(lists) > 1: \n            merged_lists = []\n            # iterate through each of these lists\n            for i in range(0, len(lists), 2): \n                l1 = lists[i]\n                # make sure if i + 1 is in bounds because l2 might be out of bound \n                # maybe we can have odd number of lists \n                l2 = lists[i + 1] if (i + 1) < len(lists) else None \n                # merge them together and add to merged lists\n                merged_lists.append(self.mergeLists(l1, l2)) \n            # update lists variable\n            lists = merged_lists\n            # keep doing that until there is one list\n        return lists[0]\n            \n    # solution from 0021 - Merge Two Sorted Lists (Easy)         \n    def mergeLists(self, l1, l2):\n        dymmy = ListNode()\n        tail = dymmy\n        \n        while l1 and l2:\n            if l1.val < l2.val:\n                tail.next = l1\n                l1 = l1.next\n            else:\n                tail.next = l2\n                l2 = l2.next\n            tail = tail.next\n            \n        if l1:\n            tail.next = l1\n        elif l2:\n            tail.next = l2\n        \n        return dymmy.next\n")))))}g.isMDXComponent=!0}}]);