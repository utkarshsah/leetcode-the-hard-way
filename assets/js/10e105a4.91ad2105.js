"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[18041],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return k}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),h=i(t),k=r,u=h["".concat(p,".").concat(k)]||h[k]||c[k]||s;return t?n.createElement(u,o(o({ref:a},l),{},{components:t})):n.createElement(u,o({ref:a},l))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=h;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var i=2;i<s;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},36361:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return p},default:function(){return w},frontMatter:function(){return m},metadata:function(){return i},toc:function(){return c}});var n=t(87462),r=t(63366),s=(t(67294),t(3905)),o=["components"],m={description:"Author: @ColeB2 | https://leetcode.com/problems/evaluate-reverse-polish-notation/",tags:["Array","Math","Stack"]},p="0150 - Evaluate Reverse Polish Notation (Medium)",i={unversionedId:"0100-0199/evaluate-reverse-olish-notation-medium",id:"0100-0199/evaluate-reverse-olish-notation-medium",title:"0150 - Evaluate Reverse Polish Notation (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/evaluate-reverse-polish-notation/",source:"@site/solutions/0100-0199/0150-evaluate-reverse-olish-notation-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/evaluate-reverse-olish-notation-medium",permalink:"/solutions/0100-0199/evaluate-reverse-olish-notation-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0150-evaluate-reverse-olish-notation-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Math",permalink:"/solutions/tags/math"},{label:"Stack",permalink:"/solutions/tags/stack"}],version:"current",sidebarPosition:150,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/evaluate-reverse-polish-notation/",tags:["Array","Math","Stack"]},sidebar:"tutorialSidebar",previous:{title:"0148 - Sort List (Medium)",permalink:"/solutions/0100-0199/sort-list-medium"},next:{title:"0155 - Min Stack (Medium)",permalink:"/solutions/0100-0199/min-stack-medium"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Stack",id:"approach-1-stack",level:2}],h=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)}},k=h("Tabs"),u=h("TabItem"),N=h("SolutionAuthor"),d={toc:c};function w(e){var a=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0150---evaluate-reverse-polish-notation-medium"},"0150 - Evaluate Reverse Polish Notation (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/evaluate-reverse-polish-notation/"},"https://leetcode.com/problems/evaluate-reverse-polish-notation/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Evaluate the value of an arithmetic expression in ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reverse_Polish_notation"},"Reverse Polish Notation"),"."),(0,s.kt)("p",null,"Valid operators are ",(0,s.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"*"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"/"),". Each operand may be an integer or another expression."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note")," that division between two integers should truncate toward zero."),(0,s.kt)("p",null,"It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: tokens = ["2","1","+","3","*"]\nOutput: 9\nExplanation: ((2 + 1) * 3) = 9\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: tokens = ["4","13","5","/","+"]\nOutput: 6\nExplanation: (4 + (13 / 5)) = 6\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]\nOutput: 22\nExplanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5\n= ((10 * (6 / (12 * -11))) + 17) + 5\n= ((10 * (6 / -132)) + 17) + 5\n= ((10 * 0) + 17) + 5\n= (0 + 17) + 5\n= 17 + 5\n= 22\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= tokens.length <= 10^4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"tokens[i]")," is either an operator: ",(0,s.kt)("inlineCode",{parentName:"li"},'"+"'),", ",(0,s.kt)("inlineCode",{parentName:"li"},'"-"'),", ",(0,s.kt)("inlineCode",{parentName:"li"},'"*"'),", or ",(0,s.kt)("inlineCode",{parentName:"li"},'"/"'),", or an integer in the range ",(0,s.kt)("inlineCode",{parentName:"li"},"[-200, 200]"),".")),(0,s.kt)("h2",{id:"approach-1-stack"},"Approach 1: Stack"),(0,s.kt)("p",null,"We need to understand that Reverse Polish Notation aka postfix notation, is a notation where the operators follow the operands. Meaning when we iterate through ",(0,s.kt)("inlineCode",{parentName:"p"},"tokens")," we are going to reach at least 2 numbers before we reach an operator. Example: ",(0,s.kt)("inlineCode",{parentName:"p"},'["2","1","+"]')," This also resembles how a stack works, so by placing numbers in a stack, we will have access to the last 2 numbers that entered the stack, so that we can pop them off to perform the operation whenever we reach the operator."),(0,s.kt)("p",null,"The main problem to solve is now that we know we need to use a stack, but in which order do we handle our operations? For addition and multiplication, the order won't matter, but for subtraction and division, there is a difference depending on which number subtracts from which, or which is the dividend. By analyzing the examples we can see that the first number that gets popped off the stack appears to be our ",(0,s.kt)("inlineCode",{parentName:"p"},"y")," value, and the second appears to be our ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," value in any expression ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x / y")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord"},"/"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," or ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x - y")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),"."),(0,s.kt)("p",null,"Example: if our stack looks like: ",(0,s.kt)("inlineCode",{parentName:"p"},"[4,2]"),", and our token is ",(0,s.kt)("inlineCode",{parentName:"p"},"/"),". The expression should be analyzed as y=2, x=4 as we pop off the y first then the x, which will give us an answer of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4/2=2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4/2"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2")))))," and not ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"0.5")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2/4=0.5")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2/4"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0.5")))))," which would truncate towards 0 as 0."),(0,s.kt)("p",null,"Note: We can also significantly improve readability by utilizing a hash map, and lambda functions to map our operators to the operations they perform, instead of nesting a bunch of if/else clauses. But we could also utilize if/else, or switch cases, then for each case, ",(0,s.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"*"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"/"),", perform the required operation/function utilizing the top 2 numbers from the stack as the parameters."),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," where n is the length of the input, tokens."),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," for our stack, which will depend on the length of the input, tokens."),(0,s.kt)(k,{mdxType:"Tabs"},(0,s.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(N,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'class Solution:\n    def evalRPN(self, tokens: List[str]) -> int:\n        # First we initialize our hash map which will map our\n        # operators directly to the operations they perform.\n        # We also utilize lambda functions, which are just anonymous,\n        # nameless function.\n        # "+" maps to function which takes params x,y and adds them.\n        # "-" maps to function which takes params x,y and subtracts them.\n        # "*" maps to function which takes params x,y and multiplies them.\n        # "/" maps to function which takes params x,y and divides them.\n        # Note "/" utilizes regular division, but converts the float to an \n        # int to handle the requirement of needing to truncate towards 0.\n        ops = {\n            "+": lambda x, y : (x + y),\n            "-": lambda x, y : (x - y),\n            "*": lambda x, y : (x * y),\n            "/": lambda x, y : int(x/y)\n        }\n        # initialize an empty stack.\n        stack = []\n        # Loop through each token in tokens, O(n) time, where n is the number of tokens.\n        for token in tokens:\n            # Check if our token is in our ops hash map. O(1) to check.\n            if token in ops:\n                # It is, then we pop, remembering the order of y first, then x.\n                y,x = stack.pop(), stack.pop()\n                # solve our answer, by calling our lambda function by first\n                # accessing the value of our hash map the same way we would any \n                # hash map, then, since we know it will return a function, to supply\n                # the parameters that the function will need, which we know is x,y.\n                answer = ops[token](x,y)\n                # remember to append the answer to the stack.\n                stack.append(answer)\n            # If token is NOT a operator, but a number, add the token to the stack.\n            # Remember that we are reading through an array of strings, so \n            # we will convert to an integer first here, to prevent having to convert\n            # later when we need to pop it off.\n            else:\n                stack.append(int(token))\n        # Our stack should be empty except for the answer, so we can return that\n        # value that is left in the stack.\n        return stack[-1]\n')))))}w.isMDXComponent=!0}}]);