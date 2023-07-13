"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[82989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(n),c=o,k=d["".concat(p,".").concat(c)]||d[c]||h[c]||s;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const s={description:"Author: @ColeB2 | https://leetcode.com/problems/copy-list-with-random-pointer/",tags:["Hash Table","Linked List"]},r="0138 - Copy List with Random Pointer (Medium)",i={unversionedId:"0100-0199/copy-list-with-random-pointer-medium",id:"0100-0199/copy-list-with-random-pointer-medium",title:"0138 - Copy List with Random Pointer (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/copy-list-with-random-pointer/",source:"@site/solutions/0100-0199/0138-copy-list-with-random-pointer-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/copy-list-with-random-pointer-medium",permalink:"/solutions/0100-0199/copy-list-with-random-pointer-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0138-copy-list-with-random-pointer-medium.md",tags:[{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"Linked List",permalink:"/solutions/tags/linked-list"}],version:"current",sidebarPosition:138,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/copy-list-with-random-pointer/",tags:["Hash Table","Linked List"]},sidebar:"tutorialSidebar",previous:{title:"0136 - Single Number (Easy)",permalink:"/solutions/0100-0199/single-number-easy"},next:{title:"0139 - Word Break (Medium)",permalink:"/solutions/0100-0199/word-break-medium"}},p={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: 2 Passes",id:"approach-1-2-passes",level:2},{value:"Approach 2: Single Pass",id:"approach-2-single-pass",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=m("Tabs"),h=m("TabItem"),c=m("SolutionAuthor"),k={toc:l},N="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(N,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0138---copy-list-with-random-pointer-medium"},"0138 - Copy List with Random Pointer (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/copy-list-with-random-pointer/"},"https://leetcode.com/problems/copy-list-with-random-pointer/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"A linked list of length ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," is given such that each node contains an additional random pointer, which could point to any node in the list, or ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",null,"Construct a deep copy of the list. The ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object_copying#Deep_copy"},"deep copy")," should consist of exactly ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," ",(0,o.kt)("strong",{parentName:"p"},"brand new")," nodes, where each new node has its value set to the value of its corresponding original node. Both the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"random")," pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. ",(0,o.kt)("strong",{parentName:"p"},"None of the pointers in the new list should point to nodes in the original list"),"."),(0,o.kt)("p",null,"For example, if there are two nodes ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," in the original list, where ",(0,o.kt)("inlineCode",{parentName:"p"},"X.random --\x3e Y"),", then for the corresponding two nodes x and y in the copied list, ",(0,o.kt)("inlineCode",{parentName:"p"},"x.random --\x3e y"),"."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the head of the copied linked list"),"."),(0,o.kt)("p",null,"The linked list is represented in the input/output as a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," nodes. Each node is represented as a pair of ",(0,o.kt)("inlineCode",{parentName:"p"},"[val, random_index]")," where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"val"),": an integer representing Node.val"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"random_index"),": the index of the node (range from ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"n-1"),") that the ",(0,o.kt)("inlineCode",{parentName:"li"},"random")," pointer points to, or ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," if it does not point to any node.")),(0,o.kt)("p",null,"Your code will ",(0,o.kt)("strong",{parentName:"p"},"only")," be given the ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," of the original linked list."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/12/18/e1.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\nOutput: [[7,null],[13,0],[11,4],[10,2],[1,0]]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/12/18/e2.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: head = [[1,1],[2,1]]\nOutput: [[1,1],[2,1]]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/12/18/e3.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: head = [[3,null],[3,0],[3,null]]\nOutput: [[3,null],[3,0],[3,null]]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= n <= 1000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-10^4 <= Node.val <= 10^4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node.random")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," or is pointing to some node in the linked list.")),(0,o.kt)("h2",{id:"approach-1-2-passes"},"Approach 1: 2 Passes"),(0,o.kt)("p",null,"We can break this problem down into 2 easy steps. "),(0,o.kt)("p",null,"Step 1 is to loop through the linked list and make a copy of each node, we will place the nodes into a hash map with the original node as the key and the created node as the value. We do this for ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mn",{parentName:"mrow"},"1"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord"},"1"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))," access later."),(0,o.kt)("p",null,"Step 2 is to loop through the linked list a second time, this time knowing that all the nodes have been created, we can access the nodes inside our hash map, and then set our pointers."),(0,o.kt)("p",null,"Time Complexity: ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"n"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))," we are going to do 2 passes through our linked list of size n."),(0,o.kt)("p",null,"Space Complexity: ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"n"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))," we need to create a hash map of size n, to map each node to."),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(c,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'"""\n# Definition for a Node.\nclass Node:\n    def __init__(self, x: int, next: \'Node\' = None, random: \'Node\' = None):\n        self.val = int(x)\n        self.next = next\n        self.random = random\n"""\nclass Solution:\n    def copyRandomList(self, head: "Node") -> "Node":\n        # Base case, return early\n        if not head:\n            return head\n        # Hash map, default with None for when we reach a null node.\n        # {key:value} --\x3e {original_node: copy_node}\n        original_to_copy = {None: None}\n        # node variable to loop through each node in the linked list\n        node = head\n        # while our node exists, ie. we haven\'t reached the end.\n        while node:\n            # create a copy node, using the original linked lists value\n            copy = Node(node.val)\n            # put the copied node into our hash map\n            original_to_copy[node] = copy\n            # move forward in our linked list\n            node = node.next\n        # node variable to loop through each node in the linked list\n        node = head\n        # while our node exists, ie. we haven\'t reached the end.\n        while node:\n            # get the copy, next and random nodes we created in the above loop.\n            copy = original_to_copy[node]\n            nxt = original_to_copy[node.next]\n            random = original_to_copy[node.random]\n            # set the next, and random for our copied node to proper nodes.\n            copy.next, copy.random = nxt, random\n            # more vorward in our linked list\n            node = node.next\n        # return head of our linked list. Since it exists in hash map, we can\n        # retrieve it using the original head as the key.\n        return original_to_copy[head]\n')))),(0,o.kt)("h2",{id:"approach-2-single-pass"},"Approach 2: Single Pass"),(0,o.kt)("p",null,"Now a slightly trickier approach, is it possible to do the above in a single pass? Of course. To do that though, we are going to have to be careful to make sure we are reusing any node that has already been created, and creating nodes that don't exist. That can simply be done though by using a hash map again for ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mn",{parentName:"mrow"},"1"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord"},"1"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))," access to see if the node exists, and then creating the node if it doesn't exist."),(0,o.kt)("p",null,"We can do all this, by making sure at each iteration of our loop through the list that all nodes exists and then setting the pointers."),(0,o.kt)("p",null,"To do that, we check if the node as been created before, if not create it and put it in the hash map, with the key as the original node, and the value as the created node. Note that we are looping only through valid nodes, so while for our current node we don't need to check if it is a null node, we will have to handle null node cases for our next and random nodes."),(0,o.kt)("p",null,"Time Complexity: ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"n"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))," we are going to do a single pass through all nodes in the linked list."),(0,o.kt)("p",null,"Space Complexity: ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"n"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))," we need to create a hash map of size n, to map each node to."),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(c,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"\"\"\"\n# Definition for a Node.\nclass Node:\n    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):\n        self.val = int(x)\n        self.next = next\n        self.random = random\n\"\"\"\n\nclass Solution:\n    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':\n        # Base case, given empty head\n        if not head:\n            return head\n        # Create our hash map for O(1) access\n        # {key:value} --\x3e {original_node: copy_node}\n        original_to_copy = {}\n        # Set a node variable to loop through all the nodes in linked list.\n        node = head\n        while node:\n            #Get/Create current node.\n            if node in original_to_copy:\n                # Node exists, get the node\n                n = original_to_copy[node]\n            else:\n                # node doesn't exist, create it, add to the hash map.\n                n = Node(node.val)\n                original_to_copy[node] = n\n            #Get/Create node.next. Default it to None to handle the case in which\n            # the node actually is a null node.\n            nxt = None\n            if node.next in original_to_copy:\n                # Next copy exists, get the node\n                nxt = original_to_copy[node.next]\n            elif node.next:\n                # next copy doesn't exist, create it and add it to the hash map.\n                nxt = Node(node.next.val)\n                original_to_copy[node.next] = nxt\n            #Get/Create node.random. Default it to None to handle the case in which\n            # the node actually is a null node.\n            rand = None\n            if node.random in original_to_copy:\n                # random copy exists, get the node.\n                rand = original_to_copy[node.random]\n            elif node.random:\n                # random copy doesn't exist, create it and add it to the hash map.\n                rand = Node(node.random.val)\n                original_to_copy[node.random] = rand\n            # Got/Created all our nodes, now set the pointers\n            n.next = nxt\n            n.random = rand\n            # move our pointer up.\n            node = node.next\n        # return head of our linked list. Since it exists in the hash map, we can\n        # retrieve it using the original head as the key.\n        return original_to_copy[head]\n")))))}u.isMDXComponent=!0}}]);