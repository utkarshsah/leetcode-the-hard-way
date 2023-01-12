"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[10135],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},47743:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"Graph Theory",description:"Graph Templates",hide_table_of_contents:!1,keywords:["leetcode","template","graph","algorithm","bellman ford","dijkstra","topological sort"]},s=void 0,p={unversionedId:"graph-theory",id:"graph-theory",title:"Graph Theory",description:"Graph Templates",source:"@site/templates/graph-theory.md",sourceDirName:".",slug:"/graph-theory",permalink:"/templates/graph-theory",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/templates/graph-theory.md",tags:[],version:"current",frontMatter:{title:"Graph Theory",description:"Graph Templates",hide_table_of_contents:!1,keywords:["leetcode","template","graph","algorithm","bellman ford","dijkstra","topological sort"]},sidebar:"tutorialSidebar",previous:{title:"Bit Manipulation",permalink:"/templates/bit-manipulation"},next:{title:"Ordered Set and GNU C++ PBDS",permalink:"/templates/ordered-set"}},d={},u=[{value:"Depth First Traversal",id:"depth-first-traversal",level:3},{value:"Preorder traversal",id:"preorder-traversal",level:4},{value:"Inorder traversal",id:"inorder-traversal",level:4},{value:"Postorder traversal",id:"postorder-traversal",level:4},{value:"Breadth First Search",id:"breadth-first-search",level:3},{value:"Bellman Ford Algorithm",id:"bellman-ford-algorithm",level:3},{value:"Dijkstra",id:"dijkstra",level:3},{value:"Topological Sorting",id:"topological-sorting",level:3},{value:"Disjoin Set Union (DSU)",id:"disjoin-set-union-dsu",level:3}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},h=c("Tabs"),m=c("TabItem"),f={toc:u};function v(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"depth-first-traversal"},"Depth First Traversal"),(0,a.kt)("p",null,"Please refer the ",(0,a.kt)("a",{parentName:"p",href:"../tutorials/graph-theory/binary-tree#traversal"},"tutorial")," guide for more details. "),(0,a.kt)("h4",{id:"preorder-traversal"},"Preorder traversal"),(0,a.kt)("p",null,"First visit the root,then traverse the left sub-tree and then traverse the right sub-tree."),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void preorder(TreeNode* node) {\n    if (node == NULL) return;\n    // do something with node.val here\n    preorder(node->left);\n    preorder(node->right);\n}\n"))),(0,a.kt)(m,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"def preorder(node):\n    if(node == None): return\n    # do something with node.val here\n    preorder(node.left)\n    preorder(node.right)\n")))),(0,a.kt)("h4",{id:"inorder-traversal"},"Inorder traversal"),(0,a.kt)("p",null,"First traverse the left sub-tree,then visit the root and then traverse the right sub-tree."),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void inorder(TreeNode* node) {\n    if (node == NULL) return;\n    inorder(node->left);\n    // do something with node.val here\n    inorder(node->right);\n}\n"))),(0,a.kt)(m,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"def inorder(node):\n    if(node == None): return\n    inorder(node.left)\n    # do something with node.val here\n    inorder(node.right)\n")))),(0,a.kt)("h4",{id:"postorder-traversal"},"Postorder traversal"),(0,a.kt)("p",null,"First traverse the left sub-tree,then traverse the right sub-tree and then visit the root."),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void postorder(TreeNode* node) {\n    if (node == NULL) return;\n    postorder(node->left);\n    postorder(node->right);\n    // do something with node.val here\n}\n"))),(0,a.kt)(m,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"def postorder(node):\n    if(node == None): return\n    postorder(node.left)\n    postorder(node.right)\n    # do something with node.val here\n")))),(0,a.kt)("h3",{id:"breadth-first-search"},"Breadth First Search"),(0,a.kt)("p",null,"In Breadth First Search, we explore all the closest nodes first before going one step further."),(0,a.kt)("p",null,"Please refer the ",(0,a.kt)("a",{parentName:"p",href:"../tutorials/graph-theory/breadth-first-search"},"tutorial")," guide for more details. "),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(m,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"def findTargetNode(root, targetValue):\n    if(root is None):\n        return None\n    \n    currentLevel = [root]\n    \n    while(len(level) > 0):\n    \n        nextLevel = []\n        \n        for node in currentLevel:\n            if(node is None):\n                continue\n            if(node.val == targetValue):\n                return node\n                \n            nextLevel.append(node.left)\n            nextLevel.append(node.right)\n       \n        currentLevel = nextLevel\n      \n    return None\n\n")))),(0,a.kt)("h3",{id:"bellman-ford-algorithm"},"Bellman Ford Algorithm"),(0,a.kt)("p",null,"Bellman Ford Algorithm computes shortest paths from a single source vertex to all of the other vertices in a weighted directed graph."),(0,a.kt)("p",null,"Please refer the ",(0,a.kt)("a",{parentName:"p",href:"../tutorials/graph-theory/bellman-ford-algorithm"},"tutorial")," guide for more details. "),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T_a3, typename T_vector>\nvoid bellman_ford(T_a3 &g, T_vector &dist, int src, int mx_edges) {\n    dist[src] = 0;\n    for (int i = 0; i <= mx_edges; i++) {\n        T_vector ndist = dist;\n        for (auto x : g) {\n            auto [from, to, cost] = x;\n            ndist[to] = min(ndist[to], dist[from] + cost);\n        }\n        dist = ndist;\n    }\n}\n")))),(0,a.kt)("h3",{id:"dijkstra"},"Dijkstra"),(0,a.kt)("p",null,"Dijkstra's Algorithm is used to find the shortest paths between nodes in a graph."),(0,a.kt)("p",null,"Please refer the ",(0,a.kt)("a",{parentName:"p",href:"../tutorials/graph-theory/dijkstra"},"tutorial")," guide for more details."),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T_pair, typename T_vector>\nvoid dijkstra(T_pair &g, T_vector &dist, int start) {\n  priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;\n  dist[start] = 0;\n  pq.push({start, 0});\n  while (!pq.empty()) {\n    auto [u_node, u_cost] = pq.top(); pq.pop();\n    if (u_cost > dist[u_node]) continue;\n    for (auto [v_node, v_cost] : g[u_node]) {\n      if (dist[v_node] > dist[u_node] + v_cost) {\n        dist[v_node] = dist[u_node] + v_cost;\n        pq.push({v_node, dist[v_node]});\n      }\n    }\n  }\n}\n")))),(0,a.kt)("h3",{id:"topological-sorting"},"Topological Sorting"),(0,a.kt)("p",null,"Topological Sorting is a linear ordering of its vertices such that for every directed edge (u,v) from vertex u to vertex v, u come before v in the ordering."),(0,a.kt)("p",null,"Please refer the ",(0,a.kt)("a",{parentName:"p",href:"../tutorials/graph-theory/topological-sorting"},"tutorial")," guide for more details."),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct TopologicalSort {\n    int n;\n    vector<int> indegree;\n    vector<int> orders;\n    vector<vector<int>> G;\n    bool isTopologicalSorted = false;\n    \n    TopologicalSort(vector<vector<int>>& g, vector<int>& in) {\n        G = g; vector<vector<int>>\n        n = (int) G.size();\n        indegree = in;\n        \n        int res = 0;\n        queue<int> q;\n        for(int i = 0; i < n; i++) {\n            if(indegree[i] == 0) {\n                q.push(i);\n            }\n        }\n        while(!q.empty()) {\n            auto u = q.front(); q.pop();\n            orders.push_back(u);\n            for(auto v : G[u]) {\n                if(--indegree[v] == 0) {\n                    q.push(v);\n                }\n            }\n            res++;\n        }\n        isTopologicalSorted = res == n;\n    }\n};\n")))),(0,a.kt)("h3",{id:"disjoin-set-union-dsu"},"Disjoin Set Union (DSU)"),(0,a.kt)("p",null,"Disjoint Set Union is a data structure that allows us to combine any two sets into one."),(0,a.kt)("p",null,"Please refer the ",(0,a.kt)("a",{parentName:"p",href:"../tutorials/graph-theory/disjoint-set-union"},"tutorial")," guide for more details."),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class dsu {\n public:\n  vector<int> root, rank;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x);\n    y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n      return true;\n    }\n    return false;\n  }\n};\n")))))}v.isMDXComponent=!0}}]);