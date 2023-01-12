"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[62573],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),h=r,d=c["".concat(i,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83699:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],s={description:"Author: @dhanu084, @vigneshshiv | https://leetcode.com/problems/validate-binary-search-tree/"},i="0098 - Validate Binary Search Tree (Medium)",m={unversionedId:"0000-0099/validate-binary-search-tree-medium",id:"0000-0099/validate-binary-search-tree-medium",title:"0098 - Validate Binary Search Tree (Medium)",description:"Author: @dhanu084, @vigneshshiv | https://leetcode.com/problems/validate-binary-search-tree/",source:"@site/solutions/0000-0099/0098-validate-binary-search-tree-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/validate-binary-search-tree-medium",permalink:"/solutions/0000-0099/validate-binary-search-tree-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0098-validate-binary-search-tree-medium.md",tags:[],version:"current",sidebarPosition:98,frontMatter:{description:"Author: @dhanu084, @vigneshshiv | https://leetcode.com/problems/validate-binary-search-tree/"},sidebar:"tutorialSidebar",previous:{title:"0094 - Binary Tree Inorder Traversal (Easy)",permalink:"/solutions/0000-0099/binary-tree-inorder-traversal-easy"},next:{title:"0100 - 0199",permalink:"/solutions/category/0100---0199"}},p={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Preorder Traversal",id:"approach-1-preorder-traversal",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},h=c("Tabs"),d=c("TabItem"),f=c("SolutionAuthor"),k={toc:u};function v(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0098---validate-binary-search-tree-medium"},"0098 - Validate Binary Search Tree (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/validate-binary-search-tree/"},"https://leetcode.com/problems/validate-binary-search-tree/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given the root of a binary tree, determine if it is a valid binary search tree (BST)."),(0,o.kt)("p",null,"A valid BST is defined as follows:"),(0,o.kt)("p",null,"The left\nsubtree\nof a node contains only nodes with keys less than the node's key.\nThe right subtree of a node contains only nodes with keys greater than the node's key.\nBoth the left and right subtrees must also be binary search trees."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [2,1,3]\nOutput: true\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [5,1,4,null,null,3,6]\nOutput: false\nExplanation: The root node's value is 5 but its right child's value is 4.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ","[1, 104]","."),(0,o.kt)("li",{parentName:"ul"},"-231 <= Node.val <= 231 - 1")),(0,o.kt)("h2",{id:"approach-1-preorder-traversal"},"Approach 1: Preorder Traversal"),(0,o.kt)("p",null,"Time Complexity: ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"n"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,o.kt)("p",null,"Space Complexity: ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"n"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))," for recursive stack space"),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(d,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{name:"@dhanu084",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n\n        def validate(root, left, right):\n            if root is None:\n                return True\n\n            # Validate the condition for each subtree\n            if root.val <= left or root.val >= right:\n                return False\n\n            # all subtrees left of root should be less than right so pass root.val as right\n            left = validate(root.left, left, root.val)\n            # all subtrees right of root should be greater than right so pass root.val as left\n            right = validate(root.right, root.val, right)\n\n            # only if left and right subtrees are valid return true\n            return left and right\n\n        # pass -inf as the left minimum and inf as right maximum initially\n        return validate(root, -inf, inf)\n"))),(0,o.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(f,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public boolean isValidBST(TreeNode root) {\n        if (root == null) return true;\n        return checkBST(root, null, null);\n    }\n    \n    public boolean checkBST(TreeNode root, Integer min, Integer max) {\n        if (root == null) return true;\n        // Check the node value with it's parent\n        // If node is left, then value should be less than or equal to it's parent\n        // If node is right, then value should be greater than or equal to it's parent\n        if ((min != null && root.val <= min) || (max != null && root.val >= max)) {\n            return false;\n        }\n        return checkBST(root.left, min, root.val) && checkBST(root.right, root.val, max);\n    }\n}\n")))))}v.isMDXComponent=!0}}]);