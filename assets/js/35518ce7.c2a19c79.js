"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[65041],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?n.createElement(f,l(l({ref:r},s),{},{components:t})):n.createElement(f,l({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99133:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],i={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/n-ary-tree-preorder-traversal/"},p="0589 - N-ary Tree Preorder Traversal (Easy)",u={unversionedId:"0500-0599/n-ary-tree-preorder-traversal-easy",id:"0500-0599/n-ary-tree-preorder-traversal-easy",title:"0589 - N-ary Tree Preorder Traversal (Easy)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/n-ary-tree-preorder-traversal/",source:"@site/solutions/0500-0599/0589-n-ary-tree-preorder-traversal-easy.md",sourceDirName:"0500-0599",slug:"/0500-0599/n-ary-tree-preorder-traversal-easy",permalink:"/solutions/0500-0599/n-ary-tree-preorder-traversal-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0589-n-ary-tree-preorder-traversal-easy.md",tags:[],version:"current",sidebarPosition:589,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/n-ary-tree-preorder-traversal/"},sidebar:"tutorialSidebar",previous:{title:"0581 - Shortest Unsorted Continuous Subarray (Medium)",permalink:"/solutions/0500-0599/shortest-unsorted-continuous-subarray-medium"},next:{title:"0600 - 0699",permalink:"/solutions/category/0600---0699"}},s={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}],d=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)}},m=d("Tabs"),f=d("TabItem"),y=d("SolutionAuthor"),h={toc:c};function v(e){var r=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0589---n-ary-tree-preorder-traversal-easy"},"0589 - N-ary Tree Preorder Traversal (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/n-ary-tree-preorder-traversal/"},"https://leetcode.com/problems/n-ary-tree-preorder-traversal/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," of an n-ary tree, return ",(0,a.kt)("em",{parentName:"p"},"the preorder traversal of its nodes' values"),"."),(0,a.kt)("p",null,"Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,null,3,2,4,null,5,6]\nOutput: [1,3,5,6,2,4]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\nOutput: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,a.kt)("inlineCode",{parentName:"li"},"[0, 10^4]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= Node.val <= 10^4")),(0,a.kt)("li",{parentName:"ul"},"The height of the n-ary tree is less than or equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"1000"),".")),(0,a.kt)("h2",{id:"approach-1-dfs"},"Approach 1: DFS"),(0,a.kt)("p",null,"Straightforward preorder traversal."),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(f,{value:"c++",label:"C++",mdxType:"TabItem"},(0,a.kt)(y,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> ans;\n    void dfs(Node* node) {\n        if (!node) return;\n        ans.push_back(node->val);\n        for (auto x : node->children) dfs(x);\n    }\n    vector<int> preorder(Node* root) {\n        dfs(root);\n        return ans;\n    }\n};\n"))),(0,a.kt)(f,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(y,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""\n# Definition for a Node.\nclass Node:\n    def __init__(self, val=None, children=None):\n        self.val = val\n        self.children = children\n"""\n\nclass Solution:\n    def preorder(self, root: \'Node\') -> List[int]:\n        output = []\n        self.dfs(root, output)\n        return output\n        \n    def dfs(self, root, output):\n        if not root:\n            return \n        output.append(root.val)\n        for child in root.children:\n            self.dfs(child, output)\n'))),(0,a.kt)(f,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)(y,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * // Definition for a Node.\n * function Node(val, children) {\n *    this.val = val;\n *    this.children = children;\n * };\n */\n\n/**\n * @param {Node|null} root\n * @return {number[]}\n */\nvar preorder = function(root) {\n    let output = new Array();\n    dfs(root, output);\n    return output;\n\n    function dfs(root, output) {\n        if (!root) return;\n        output.push(root.val);\n        for (child of root.children) {\n            dfs(child, output);\n        }\n    }\n};\n")))))}v.isMDXComponent=!0}}]);