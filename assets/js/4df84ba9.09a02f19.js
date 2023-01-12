"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[93003],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=m(t),u=i,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var m=2;m<l;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78480:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return N},frontMatter:function(){return r},metadata:function(){return m},toc:function(){return c}});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),o=["components"],r={description:"Author: @heiheihang, @ColeB2 | https://leetcode.com/problems/min-stack/"},s="0155 - Min Stack (Medium)",m={unversionedId:"0100-0199/min-stack-medium",id:"0100-0199/min-stack-medium",title:"0155 - Min Stack (Medium)",description:"Author: @heiheihang, @ColeB2 | https://leetcode.com/problems/min-stack/",source:"@site/solutions/0100-0199/0155-min-stack-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/min-stack-medium",permalink:"/solutions/0100-0199/min-stack-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0155-min-stack-medium.md",tags:[],version:"current",sidebarPosition:155,frontMatter:{description:"Author: @heiheihang, @ColeB2 | https://leetcode.com/problems/min-stack/"},sidebar:"tutorialSidebar",previous:{title:"0150 - Evaluate Reverse Polish Notation (Medium)",permalink:"/solutions/0100-0199/evaluate-reverse-olish-notation-medium"},next:{title:"0165 - Compare Version Numbers (Medium)",permalink:"/solutions/0100-0199/compare-version-numbers-medium"}},p={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Implementation",id:"approach-1-implementation",level:2},{value:"Approach 2: Singly Linked List",id:"approach-2-singly-linked-list",level:2}],d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",n)}},u=d("Tabs"),h=d("TabItem"),k=d("SolutionAuthor"),f={toc:c};function N(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"0155---min-stack-medium"},"0155 - Min Stack (Medium)"),(0,l.kt)("h2",{id:"problem-link"},"Problem Link"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/min-stack/"},"https://leetcode.com/problems/min-stack/")),(0,l.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,l.kt)("p",null,"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time."),(0,l.kt)("p",null,"Implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"MinStack")," class:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MinStack()")," initializes the stack object."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void push(int val)")," pushes the element ",(0,l.kt)("inlineCode",{parentName:"li"},"val")," onto the stack."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void pop()")," removes the element on the top of the stack."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int top()")," gets the top element of the stack."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int getMin()")," retrieves the minimum element in the stack.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input\n["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]\n\nOutput\n[null,null,null,null,-3,null,0,-2]\n\nExplanation\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin(); // return -3\nminStack.pop();\nminStack.top();    // return 0\nminStack.getMin(); // return -2\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constraints:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-2^31 <= val <= 2^31 - 1")),(0,l.kt)("li",{parentName:"ul"},"Methods ",(0,l.kt)("inlineCode",{parentName:"li"},"pop"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"top")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"getMin")," operations will always be called on ",(0,l.kt)("strong",{parentName:"li"},"non-empty")," stacks."),(0,l.kt)("li",{parentName:"ul"},"At most ",(0,l.kt)("inlineCode",{parentName:"li"},"3 * 104")," calls will be made to ",(0,l.kt)("inlineCode",{parentName:"li"},"push"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"pop"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"getMin"),".")),(0,l.kt)("h2",{id:"approach-1-implementation"},"Approach 1: Implementation"),(0,l.kt)("p",null,"The general approach is to keep track of the ",(0,l.kt)("inlineCode",{parentName:"p"},"current_min")," at each level of the stack."),(0,l.kt)("p",null,"When we add a new element to the stack, we need to check if the new element is smaller than ",(0,l.kt)("inlineCode",{parentName:"p"},"current_min"),". If yes, we need to update the value. We also need to attach a label of ",(0,l.kt)("inlineCode",{parentName:"p"},"current_min")," when we ",(0,l.kt)("inlineCode",{parentName:"p"},"push"),", so we can keep track of the smallest element ",(0,l.kt)("strong",{parentName:"p"},"BEFORE")," that entry."),(0,l.kt)("p",null,"Similarly, when we ",(0,l.kt)("inlineCode",{parentName:"p"},"pop")," an element from the stack, we need to update ",(0,l.kt)("inlineCode",{parentName:"p"},"current_min"),". A simple example is that the last element in the stack is the smallest. When we ",(0,l.kt)("inlineCode",{parentName:"p"},"pop")," that element, ",(0,l.kt)("inlineCode",{parentName:"p"},"current_min")," is still not updated. Hence, we need to set ",(0,l.kt)("inlineCode",{parentName:"p"},"current_min")," to the new last element's label."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"getMin")," are very straightforward implementations."),(0,l.kt)(u,{mdxType:"Tabs"},(0,l.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)(k,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class MinStack:\n\n    def __init__(self):\n        \n        #initialize stack\n        self.stack = []\n        \n        #we need to have a label to keep track of the current smallest number\n        self.current_min = None\n        \n    def push(self, val: int) -> None:\n        \n        #update current_min if new value is smaller\n        if(self.current_min == None or val < self.current_min):\n            self.current_min = val\n        \n        #besides adding val, we also need to add current_min to keep track of current_min\n        self.stack.append([val, self.current_min])\n        \n\n    def pop(self) -> None:\n        \n        #remove last element\n        self.stack.pop()\n        \n        #update current_min after popping\n        if(self.stack):\n            self.current_min = self.stack[-1][1]\n        else:\n            self.current_min = None\n\n    def top(self) -> int:\n        \n        #if stack is not empty, return the last element's value (not label)\n        if(self.stack):\n            return self.stack[-1][0]\n\n    def getMin(self) -> int:\n        \n        #return current_min\n        if(self.stack):\n            return self.current_min\n\n")))),(0,l.kt)("h2",{id:"approach-2-singly-linked-list"},"Approach 2: Singly Linked List"),(0,l.kt)("p",null,"We can also implement a Min Stack using a singly linked list. It will use a similar approach to approach 1, but instead of using arrays, with array values to track current and minimum value at each level of the stack, we will use list nodes. The list nodes will have 3 attributes, a value, ",(0,l.kt)("inlineCode",{parentName:"p"},"val")," a minimum value, ",(0,l.kt)("inlineCode",{parentName:"p"},"min_val"),", and a pointer to the node next to it, ",(0,l.kt)("inlineCode",{parentName:"p"},"next_node"),". To make out linked list work more like a stack, we need to track the head of the linked list and only insert and pop on the head side of our linked list."),(0,l.kt)("p",null,"We can take some liberties to simplify it, as the question states that all ",(0,l.kt)("inlineCode",{parentName:"p"},"pop"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"getMin")," calls will be done on non-empty stacks, we can ignore error checkings, and just return the value we need from the top of the stack, or pop in those cases."),(0,l.kt)("p",null,"Time Complexity: ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mn",{parentName:"mrow"},"1"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},"1"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))," for each method implemented."),(0,l.kt)("p",null,"Space Complexity: ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))," n is the number of items we put onto the stack. "),(0,l.kt)(u,{mdxType:"Tabs"},(0,l.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)(k,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"class ListNode:\n    # Create our own singly linked list, using classes to create\n    # list nodes. They will have a value, val, a minimum value,\n    # min_val and a pointer to the next node, next_node/self.next.\n    # Note: we use next_node in init as next is a python keyword, and\n    # it is good practice to not overwrite python's keywords.\n    # A singly linked list works, by having node objects that contain data,\n    # and a pointer to point to the next node. The tail will point to None,\n    # signalling the end of the list. We will also need a variable of some\n    # kind to track the head of our linked list. Inside our MinStack,\n    # we will use self.head.\n    def __init__(self, val, min_val, next_node=None):\n        self.val = val\n        self.min_val = min_val\n        self.next = next_node\n\nclass MinStack:\n    # Whether you use a linked list like this solution or an array\n    # the trick for implementing a min stack is using the idea that\n    # we can use a little bit extra space to track the minimum value\n    # as we push each element onto the stack. That way we don't need\n    # to use O(n) time to search for the min, we can check it in \n    # constant time.\n    def __init__(self):\n        # No values, so we will initialize the head of our linked\n        # list as None to signal that.\n        self.head = None\n        \n\n    def push(self, val: int) -> None:\n        # Time: O(1)\n        # get the min value to add to our stack\n        min_val = min(val, self.head.min_val) if self.head else val\n        # create the node using val, min_val, and head as next_node.\n        node = ListNode(val, min_val, next_node=self.head)\n        # make sure to make the node we created the new head, to\n        # make it the 'top' node, of the stack, and 'push' the other\n        # nodes down below it.\n        self.head = node\n        \n    def pop(self) -> None:\n        # Time: O(1)\n        # only called on non-empty stacks, so we can just\n        # set the current head to head.next, as we know\n        # there will always be a current head node.\n        # Ex. headNode -> 2ndNode\n        #     move pointer---^\n        # we will have no way to go back and access headNode\n        # python will handle the removal of our head node, and\n        # our the new head of our stack will be the 2ndNode.\n        self.head = self.head.next\n\n    def top(self) -> int:\n        # Time: O(1)\n        # only called on non-empty stacks, we can just\n        # return head.val, since we know there will always\n        # be a head node with a value we can return.\n        return self.head.val\n        \n\n    def getMin(self) -> int:\n        # Time: O(1)\n        # only called on non-empty stacks, we can just\n        # return head.min_val, since we know there will\n        # always be a head node with a min_value we can return.\n        return self.head.min_val\n")))))}N.isMDXComponent=!0}}]);