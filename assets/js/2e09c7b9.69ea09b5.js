"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[77958],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=l(a),d=r,u=c["".concat(m,".").concat(d)]||c[d]||h[d]||s;return a?n.createElement(u,o(o({ref:t},i),{},{components:a})):n.createElement(u,o({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},78171:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return h}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],p={description:"Author: @vigneshshiv, @radojicic23, @ColeB2 | https://leetcode.com/problems/maximum-depth-of-binary-tree"},m="0104 - Maximum Depth of Binary Tree (Easy)",l={unversionedId:"0100-0199/maximum-depth-of-binary-tree-easy",id:"0100-0199/maximum-depth-of-binary-tree-easy",title:"0104 - Maximum Depth of Binary Tree (Easy)",description:"Author: @vigneshshiv, @radojicic23, @ColeB2 | https://leetcode.com/problems/maximum-depth-of-binary-tree",source:"@site/solutions/0100-0199/0104-maximum-depth-of-binary-tree-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/maximum-depth-of-binary-tree-easy",permalink:"/solutions/0100-0199/maximum-depth-of-binary-tree-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0104-maximum-depth-of-binary-tree-easy.md",tags:[],version:"current",sidebarPosition:104,frontMatter:{description:"Author: @vigneshshiv, @radojicic23, @ColeB2 | https://leetcode.com/problems/maximum-depth-of-binary-tree"},sidebar:"tutorialSidebar",previous:{title:"0103 -  Binary Tree Zigzag Level Order Traversal (Medium)",permalink:"/solutions/0100-0199/binary-tree-zigzag-level-order-traversal-medium"},next:{title:"0110 - Balanced Binary Tree (Easy)",permalink:"/solutions/0100-0199/balanced-binary-tree-easy"}},i={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Recursive",id:"approach-1-recursive",level:2},{value:"Approach 2: Iterative Depth-First Search",id:"approach-2-iterative-depth-first-search",level:2},{value:"Approach 3: Iterative Breadth-First Search",id:"approach-3-iterative-breadth-first-search",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},d=c("Tabs"),u=c("TabItem"),N=c("SolutionAuthor"),k={toc:h};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0104---maximum-depth-of-binary-tree-easy"},"0104 - Maximum Depth of Binary Tree (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-depth-of-binary-tree"},"https://leetcode.com/problems/maximum-depth-of-binary-tree")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given the ",(0,s.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return ",(0,s.kt)("em",{parentName:"p"},"its maximum depth"),"."),(0,s.kt)("p",null,"A binary tree's ",(0,s.kt)("strong",{parentName:"p"},"maximum depth")," is the number of nodes along the longest path from the root node down to the farthest leaf node."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: root = [3,9,20,null,null,15,7]\nOutput: 3\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: root = [1,null,2]\nOutput: 2\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,s.kt)("inlineCode",{parentName:"li"},"[0, 104]"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100"))),(0,s.kt)("h2",{id:"approach-1-recursive"},"Approach 1: Recursive"),(0,s.kt)("p",null,"Traverse left and right nodes till last, and at every level keep find the maximum between left and right nodes and add 1."),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(N,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n// Time complexity: O(n), where n - # of nodes in the tree\n// Space complexity: O(h), where h - height of the tree from root\nclass Solution {\n    public int maxDepth(TreeNode root) {\n        if (root == null) return 0;\n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n}\n"))),(0,s.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(N,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        if not root:\n            return 0 \n        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))\n"))),(0,s.kt)(u,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)(N,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxDepth = function(root) {\n    if (!root) {\n        return 0;\n    }\n    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))\n};\n")))),(0,s.kt)("h2",{id:"approach-2-iterative-depth-first-search"},"Approach 2: Iterative Depth-First Search"),(0,s.kt)("p",null,"We can solve this iteratively by tracking a global max and using a stack to store our data for each node. What we will store is the node we are processing itself and the depth of that node. Then while traversing, we can update the global max depth on each iteration, and return it at the end."),(0,s.kt)("p",null,"While traversing the tree we can process each node by: "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Updating the global max depth by checking whether the depth of the current node is larger or not, we can do this using the max function. "),(0,s.kt)("li",{parentName:"ol"},"Checking whether it has children nodes, then adding them to the list, making sure the depth of the child node is 1 greater than the current node.")),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," where n is the number of nodes. We have to process each node once."),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(h)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," where h is the height of the tree. Since we are only storing the nodes of the current path we are traversing."),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(N,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        # Early termination, if given none as a root, return early.\n        if not root:\n            return 0\n        # initialize stack with root and starting depth of 1.\n        stack = [(root,1)]\n        # track our global max_depth\n        max_depth = 1\n        # traverse our tree while our stack has values.\n        while stack:\n            # pop off the node and the count of the current depth.\n            node, count = stack.pop()\n            # update the max depth.\n            max_depth = max(count, max_depth)\n            # if the node has a left child\n            if node.left:\n                # add it to the stack, update the depth of the child node.\n                stack.append((node.left, count+1))\n            # if node has right child\n            if node.right:\n                # add it to the stack, update depth of the child node.\n                stack.append((node.right, count+1))\n        # return the max depth we found.\n        return max_depth\n\n")))),(0,s.kt)("h2",{id:"approach-3-iterative-breadth-first-search"},"Approach 3: Iterative Breadth-First Search"),(0,s.kt)("p",null,"We can also use a queue as our main data structure. A queue allows us to traverse the tree 1 level at a time. Meaning instead of updateing the global max depth at each node, we can update it once at each level."),(0,s.kt)("p",null,"While traversing the tree we can process each level by:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Updating the max depth we have reached."),(0,s.kt)("li",{parentName:"ol"},"Running a for loop over the length of the queue. This allows us to process each node currently in the queue, while also adding the children node to the queue."),(0,s.kt)("li",{parentName:"ol"},"During the processing of each node, make sure it has children before adding them to the queue.")),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," where n is the number of nodes. We have to process each node once."),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," where n is the number of nodes, as in a full tree, the last layer will hold ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mfrac"},"n"),(0,s.kt)("mn",{parentName:"mfrac"},"2"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac {n}{2}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0404em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6954em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))," nodes."),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(N,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        # Early termination, given a null root.\n        if not root:\n            return 0\n        # initialize our queue with the root node.\n        q = deque([root])\n        # track a global max depth.\n        max_depth = 0\n        # traverse the tree while nodes exist in the queue.\n        while q:\n            # update the max depth\n            max_depth += 1\n            # traverse each node in the queue. Ex. If the current level has\n            # 4 nodes inside the queue, then we will only loop 4 times, despite\n            # also adding extra nodes to the queue during each loop.\n            for _ in range(len(q)):\n                # pop the node we want to process\n                node = q.popleft()\n                # left child check before adding it to the queue.\n                if node.left:\n                    q.append((node.left))\n                # right child check.\n                if node.right:\n                    q.append((node.right))\n        # return our maximum depth\n        return max_depth\n\n")))))}f.isMDXComponent=!0}}]);