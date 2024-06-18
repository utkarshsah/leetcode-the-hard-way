"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[65656],{37015:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=n(85893),t=n(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/check-if-grid-satisfies-conditions/",tags:["Array","Matrix"]},a="3142 - Check if Grid Satisfies Conditions (Easy)",l={id:"3100-3199/check-if-grid-satisfies-conditions-easy",title:"3142 - Check if Grid Satisfies Conditions (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/check-if-grid-satisfies-conditions/",source:"@site/solutions/3100-3199/3142-check-if-grid-satisfies-conditions-easy.md",sourceDirName:"3100-3199",slug:"/3100-3199/check-if-grid-satisfies-conditions-easy",permalink:"/solutions/3100-3199/check-if-grid-satisfies-conditions-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/3100-3199/3142-check-if-grid-satisfies-conditions-easy.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:3142,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/check-if-grid-satisfies-conditions/",tags:["Array","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"3100 - 3199",permalink:"/solutions/category/3100---3199"}},c={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}];function d(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:n,TabItem:r,Tabs:a}=s;return n||m("SolutionAuthor",!0),r||m("TabItem",!0),a||m("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"3142---check-if-grid-satisfies-conditions-easy",children:"3142 - Check if Grid Satisfies Conditions (Easy)"}),"\n",(0,i.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://leetcode.com/problems/check-if-grid-satisfies-conditions/",children:"https://leetcode.com/problems/check-if-grid-satisfies-conditions/"})}),"\n",(0,i.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(s.p,{children:["You are given a 2D matrix ",(0,i.jsx)(s.code,{children:"grid"})," of size ",(0,i.jsx)(s.code,{children:"m x n"}),". You need to check if each cell ",(0,i.jsx)(s.code,{children:"grid[i][j]"})," is:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Equal to the cell below it, i.e. ",(0,i.jsx)(s.code,{children:"grid[i][j] == grid[i + 1][j]"})," (if it exists)."]}),"\n",(0,i.jsxs)(s.li,{children:["Different from the cell to its right, i.e. ",(0,i.jsx)(s.code,{children:"grid[i][j] != grid[i][j + 1]"})," (if it exists)."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Return ",(0,i.jsx)(s.code,{children:"true"})," if ",(0,i.jsx)(s.strong,{children:"all"})," the cells satisfy these conditions, otherwise, return ",(0,i.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Input:"})," grid = [[1,0,2],[1,0,2]]"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Output:"})," true"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Explanation:"})}),"\n",(0,i.jsx)(s.p,{children:"All the cells in the grid satisfy the conditions."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Input:"})," grid = [[1,1,1],[0,0,0]]"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Output:"})," false"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Explanation:"})}),"\n",(0,i.jsx)(s.p,{children:"All cells in the first row are equal."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 3:"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Input:"})," grid = [[1],[2],[3]]"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Output:"})," false"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Explanation:"})}),"\n",(0,i.jsx)(s.p,{children:"Cells in the first column have different values."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"1 <= n, m <= 10"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"0 <= grid[i][j] <= 9"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"approach-1-brute-force",children:"Approach 1: Brute Force"}),"\n",(0,i.jsx)(s.p,{children:"Iterate over each cell to check if the conditions can be satisified."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Time Complexity: ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"O"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mo,{children:"\u2217"}),(0,i.jsx)(s.mi,{children:"m"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n * m)"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})]})]})," where ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"n"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," is the number of rows and ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"m"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"m"})]})})]})," is the number of columns"]}),"\n",(0,i.jsxs)(s.li,{children:["Space Complexity: ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"O"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n"]}),"\n",(0,i.jsx)(a,{children:(0,i.jsxs)(r,{value:"py",label:"Python",children:[(0,i.jsx)(n,{name:"@wingkwong"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def satisfiesConditions(self, grid: List[List[int]]) -> bool:\n        n, m = len(grid), len(grid[0])\n        for i in range(n):\n            for j in range(m):\n                if i < n - 1 and grid[i][j] != grid[i + 1][j]: return False\n                if j < m - 1 and grid[i][j] == grid[i][j + 1]: return False\n        return True\n"})})]})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function m(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>a});var i=n(67294);const t={},r=i.createContext(t);function a(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);