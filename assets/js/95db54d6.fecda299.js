"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[89400],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,d=c["".concat(l,".").concat(k)]||c[k]||m[k]||p;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<p;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a,r=n(87462),p=n(63366),o=(n(67294),n(3905)),i=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/implement-stack-using-queues"},s="0225 - Implement Stack using Queues (Easy)",u={unversionedId:"0200-0299/implement-stack-using-queues-easy",id:"0200-0299/implement-stack-using-queues-easy",title:"0225 - Implement Stack using Queues (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/implement-stack-using-queues",source:"@site/solutions/0200-0299/0225-implement-stack-using-queues-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/implement-stack-using-queues-easy",permalink:"/solutions/0200-0299/implement-stack-using-queues-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0225-implement-stack-using-queues-easy.md",tags:[],version:"current",sidebarPosition:225,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/implement-stack-using-queues"},sidebar:"tutorialSidebar",previous:{title:"0219 - Contains Duplicate II (Easy)",permalink:"/solutions/0200-0299/contains-duplicate-ii-easy"},next:{title:"0228 - Summary Ranges (Easy)",permalink:"/solutions/0200-0299/summary-ranges-easy"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: 2 Queues",id:"approach-1-2-queues",level:2},{value:"Approach 2: 1 Queue",id:"approach-2-1-queue",level:2}],k=(a="SolutionAuthor",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),d={toc:c};function h(e){var t=e.components,n=(0,p.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0225---implement-stack-using-queues-easy"},"0225 - Implement Stack using Queues (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/implement-stack-using-queues"},"https://leetcode.com/problems/implement-stack-using-queues")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (",(0,o.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pop"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"empty"),")."),(0,o.kt)("p",null,"Implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyStack")," class:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"void push(int x)")," Pushes element x to the top of the stack."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int pop()")," Removes the element on the top of the stack and returns it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int top()")," Returns the element on the top of the stack."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"boolean empty()")," Returns ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," if the stack is empty, ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," otherwise.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must use ",(0,o.kt)("strong",{parentName:"li"},"only")," standard operations of a queue, which means that only ",(0,o.kt)("inlineCode",{parentName:"li"},"push to back"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"peek/pop from front"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"size")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"is empty")," operations are valid."),(0,o.kt)("li",{parentName:"ul"},"Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input\n["MyStack", "push", "push", "top", "pop", "empty"]\n[[], [1], [2], [], [], []]\nOutput\n[null, null, null, 2, 2, false]\n\nExplanation\nMyStack myStack = new MyStack();\nmyStack.push(1);\nmyStack.push(2);\nmyStack.top(); // return 2\nmyStack.pop(); // return 2\nmyStack.empty(); // return False\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= x <= 9")),(0,o.kt)("li",{parentName:"ul"},"At most ",(0,o.kt)("inlineCode",{parentName:"li"},"100")," calls will be made to ",(0,o.kt)("inlineCode",{parentName:"li"},"push"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"pop"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"top"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"empty"),"."),(0,o.kt)("li",{parentName:"ul"},"All the calls to ",(0,o.kt)("inlineCode",{parentName:"li"},"pop")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"top")," are valid.")),(0,o.kt)("h2",{id:"approach-1-2-queues"},"Approach 1: 2 Queues"),(0,o.kt)("p",null,"We can push all elements to one queue. For ",(0,o.kt)("inlineCode",{parentName:"p"},"pop")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," function, we move first ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"n"),(0,o.kt)("mo",{parentName:"mrow"},"\u2212"),(0,o.kt)("mn",{parentName:"mrow"},"1")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n - 1")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,o.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"1")))))," elements to another queue. What's left would be the top element. For ",(0,o.kt)("inlineCode",{parentName:"p"},"pop")," function, we pop the top element as well and swap the queue."),(0,o.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyStack {\npublic:\n    queue<int> q1, q2;\n    MyStack() { }\n    \n    void push(int x) {\n        q1.push(x);\n    }\n    \n    int pop() {\n        while (q1.size() > 1) {\n            int x = q1.front();\n            q1.pop();\n            q2.push(x);\n        }\n        int res = q1.front();\n        q1.pop();\n        swap(q1, q2);\n        return res;\n    }\n    \n    int top() {\n        while (q1.size() > 1) {\n            int x = q1.front();\n            q1.pop();\n            q2.push(x);\n        }\n        return q1.front();\n    }\n    \n    bool empty() {\n        return q1.empty();\n    }\n};\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * MyStack* obj = new MyStack();\n * obj->push(x);\n * int param_2 = obj->pop();\n * int param_3 = obj->top();\n * bool param_4 = obj->empty();\n */\n")),(0,o.kt)("h2",{id:"approach-2-1-queue"},"Approach 2: 1 Queue"),(0,o.kt)("p",null,"For every push, we simply make the order backwards for ",(0,o.kt)("inlineCode",{parentName:"p"},"push")," function. For ",(0,o.kt)("inlineCode",{parentName:"p"},"pop"),"() and ",(0,o.kt)("inlineCode",{parentName:"p"},"top()"),", we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"front()")," to get the top element and return it."),(0,o.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyStack {\npublic:\n    queue<int> q1;\n    MyStack() { }\n    \n    void push(int x) {\n        q1.push(x);\n        for (int i = 1; i < q1.size(); i++) {\n            q1.push(q1.front());\n            q1.pop();\n        }\n    }\n    \n    int pop() {\n        int x = q1.front(); q1.pop();\n        return x;\n    }\n    \n    int top() {\n        return q1.front();\n    }\n    \n    bool empty() {\n        return q1.empty();\n    }\n};\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * MyStack* obj = new MyStack();\n * obj->push(x);\n * int param_2 = obj->pop();\n * int param_3 = obj->top();\n * bool param_4 = obj->empty();\n */\n")))}h.isMDXComponent=!0}}]);