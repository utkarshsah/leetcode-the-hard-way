"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[27692],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={description:"Author: @wingkwong, @lonyehan | https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",tags:["Hash Table","Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},s="0987 - Vertical Order Traversal of a Binary Tree (Hard)",d={unversionedId:"0900-0999/vertical-order-traversal-of-a-binary-tree-hard",id:"0900-0999/vertical-order-traversal-of-a-binary-tree-hard",title:"0987 - Vertical Order Traversal of a Binary Tree (Hard)",description:"Author: @wingkwong, @lonyehan | https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",source:"@site/solutions/0900-0999/0987-vertical-order-traversal-of-a-binary-tree-hard.md",sourceDirName:"0900-0999",slug:"/0900-0999/vertical-order-traversal-of-a-binary-tree-hard",permalink:"/solutions/0900-0999/vertical-order-traversal-of-a-binary-tree-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0987-vertical-order-traversal-of-a-binary-tree-hard.md",tags:[{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:987,frontMatter:{description:"Author: @wingkwong, @lonyehan | https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",tags:["Hash Table","Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0985 - Sum of Even Numbers After Queries (Medium)",permalink:"/solutions/0900-0999/sum-of-even-numbers-after-queries.medium"},next:{title:"0990 - Satisfiability of Equality Equations (Medium)",permalink:"/solutions/0900-0999/satisfiability-of-equality-equations-medium"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}],p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},m=p("Tabs"),h=p("TabItem"),f=p("SolutionAuthor"),b={toc:c};function v(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0987---vertical-order-traversal-of-a-binary-tree-hard"},"0987 - Vertical Order Traversal of a Binary Tree (Hard)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/"},"https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, calculate the ",(0,a.kt)("strong",{parentName:"p"},"vertical order traversal")," of the binary tree."),(0,a.kt)("p",null,"For each node at position ",(0,a.kt)("inlineCode",{parentName:"p"},"(row, col)"),", its left and right children will be at positions ",(0,a.kt)("inlineCode",{parentName:"p"},"(row + 1, col - 1)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"(row + 1, col + 1)")," respectively. The root of the tree is at ",(0,a.kt)("inlineCode",{parentName:"p"},"(0, 0)"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"vertical order traversal")," of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values."),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the ",(0,a.kt)("strong",{parentName:"em"},"vertical order traversal")," of the binary tree"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [3,9,20,null,null,15,7]\nOutput: [[9],[3,15],[20],[7]]\nExplanation:\nColumn -1: Only node 9 is in this column.\nColumn 0: Nodes 3 and 15 are in this column in that order from top to bottom.\nColumn 1: Only node 20 is in this column.\nColumn 2: Only node 7 is in this column.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,2,3,4,5,6,7]\nOutput: [[4],[2],[1,5,6],[3],[7]]\nExplanation:\nColumn -2: Only node 4 is in this column.\nColumn -1: Only node 2 is in this column.\nColumn 0: Nodes 1, 5, and 6 are in this column.\n          1 is at the top, so it comes first.\n          5 and 6 are at the same position (2, 0), so we order them by their value, 5 before 6.\nColumn 1: Only node 3 is in this column.\nColumn 2: Only node 7 is in this column.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,2,3,4,6,5,7]\nOutput: [[4],[2],[1,5,6],[3],[7]]\nExplanation:\nThis case is the exact same as example 2, but with nodes 5 and 6 swapped.\nNote that the solution remains the same since 5 and 6 are in the same location and should be ordered by their values.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,a.kt)("inlineCode",{parentName:"li"},"[1, 1000]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= Node.val <= 1000"))),(0,a.kt)("h2",{id:"approach-1-dfs"},"Approach 1: DFS"),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n     void dfs(TreeNode* root, int col, int row, map<int, map<int, multiset<int>>>& nodes) {\n        // if root is nullptr, then skip it\n        if (!root) return;\n         \n        // insert the current node value to corresponding row and grouped by col.\n        // see above diagram for better understanding\n        // for example, \n        // we add node 1 to nodes[0][0]\n        // we add node 5 to nodes[0][2]. \n        // we add node 6 to nodes[0][2]\n        nodes[col][row].insert(root -> val);\n         \n        // then we perform pre order traversal\n        // see https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/binary-tree#pre-order\n        // for more understanding on tree traversals\n        // dfs on left sub tree\n        dfs(root-> left, col - 1, row + 1, nodes);\n        // dfs on right sub tree\n        dfs(root-> right, col + 1, row + 1, nodes);\n    }\n    \n    vector<vector<int>> verticalTraversal(TreeNode* root) {\n        // init ans - store the final ans\n        vector<vector<int>> ans;\n        // nodes is used to store the node values grouped by column \n        // see above diagram for better understanding\n        // use multiset here as the value could be same\n        // use map here to take care of the order\n        map<int, map<int, multiset<int>>> nodes;\n        // dfs starting from the root of the tree\n        dfs(root, 0, 0, nodes);\n        // for each column in nodes\n        for (auto column : nodes) {\n            // init col - store the node values for all rows at the current column \n            vector<int> col;\n            // for each row at the current column, we append all the node values to col\n            // for example: column idx = 0, we add row = 0 (node 1) and row = 2 (node 5 & node 6)\n            for (auto rows : column.second) {\n                // we can use `insert` to add all elelments to a vector\n                // instead of adding them one by one\n                col.insert(col.end(), rows.second.begin(), rows.second.end());\n            }\n            // we've processed this col, add it to ans\n            ans.push_back(col);\n        }\n        // return final ans\n        return ans;\n    }\n};\n"))),(0,a.kt)(h,{value:"cs",label:"C#",mdxType:"TabItem"},(0,a.kt)(f,{name:"@lonyehan",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class Solution {\n    public IList<IList<int>> VerticalTraversal(TreeNode root) {\n        Dictionary<int, PriorityQueue<int, double>> dict = new Dictionary<int, PriorityQueue<int, double>>();\n        \n        DFS(root, dict);\n        \n        List<IList<int>> result = new List<IList<int>>();\n        foreach(var v in dict.Keys.OrderBy(x => x)){\n            List<int> temp = new List<int>();\n            while(dict[v].Count != 0){\n                temp.Add(dict[v].Dequeue());\n            }\n            result.Add(temp);\n        }\n        return result;\n    }\n    \n    public void DFS(TreeNode node, Dictionary<int, PriorityQueue<int, double>> dict, int row = 0, int col = 0){\n        if(node == null) return;\n        \n        DFS(node.left, dict, row + 1, col - 1);\n        \n        if(!dict.ContainsKey(col)){\n            dict[col] = new PriorityQueue<int, double>();\n            dict[col].Enqueue(node.val, row + 0.00001 * node.val);\n        }\n        else{\n            dict[col].Enqueue(node.val, row + 0.00001 * node.val);\n        }\n        \n        DFS(node.right, dict, row + 1, col + 1);\n    }\n}\n")))))}v.isMDXComponent=!0}}]);