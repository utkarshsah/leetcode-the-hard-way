"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[33147],{23157:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var a=n(85893),i=n(11151);const l={description:"Author: @wingkwong | https://leetcode.com/problems/path-with-maximum-gold/",tags:["Array","Backtracking","Matrix"]},t="1219 - Path with Maximum Gold (Medium)",m={id:"1200-1299/path-with-maximum-gold-medium",title:"1219 - Path with Maximum Gold (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/path-with-maximum-gold/",source:"@site/solutions/1200-1299/1219-path-with-maximum-gold-medium.md",sourceDirName:"1200-1299",slug:"/1200-1299/path-with-maximum-gold-medium",permalink:"/solutions/1200-1299/path-with-maximum-gold-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1200-1299/1219-path-with-maximum-gold-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Backtracking",permalink:"/solutions/tags/backtracking"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:1219,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/path-with-maximum-gold/",tags:["Array","Backtracking","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"1202 - Smallest String With Swaps (Medium)",permalink:"/solutions/1200-1299/smallest-string-with-swaps-medium"},next:{title:"1232 - Check If It Is a Straight Line (Easy)",permalink:"/solutions/1200-1299/check-if-it-is-a-straight-line-easy"}},r={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS Backtracking",id:"approach-1-dfs-backtracking",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...s.components},{SolutionAuthor:n,TabItem:l,Tabs:t}=e;return n||o("SolutionAuthor",!0),l||o("TabItem",!0),t||o("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"1219---path-with-maximum-gold-medium",children:"1219 - Path with Maximum Gold (Medium)"}),"\n",(0,a.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/path-with-maximum-gold/",children:"https://leetcode.com/problems/path-with-maximum-gold/"})}),"\n",(0,a.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(e.p,{children:["In a gold mine ",(0,a.jsx)(e.code,{children:"grid"})," of size ",(0,a.jsx)(e.code,{children:"m x n"}),", each cell in this mine has an integer representing the amount of gold in that cell, ",(0,a.jsx)(e.code,{children:"0"})," if it is empty."]}),"\n",(0,a.jsx)(e.p,{children:"Return the maximum amount of gold you can collect under the conditions:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Every time you are located in a cell you will collect all the gold in that cell."}),"\n",(0,a.jsx)(e.li,{children:"From your position, you can walk one step to the left, right, up, or down."}),"\n",(0,a.jsx)(e.li,{children:"You can't visit the same cell more than once."}),"\n",(0,a.jsxs)(e.li,{children:["Never visit a cell with ",(0,a.jsx)(e.code,{children:"0"})," gold."]}),"\n",(0,a.jsxs)(e.li,{children:["You can start and stop collecting gold from ",(0,a.jsx)(e.strong,{children:"any"}),"position in the grid that has some gold."]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Input: grid = [[0,6,0],[5,8,7],[0,9,0]]\nOutput: 24\nExplanation:\n[[0,6,0],\n [5,8,7],\n [0,9,0]]\nPath to get the maximum gold, 9 -> 8 -> 7.\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]\nOutput: 28\nExplanation:\n[[1,0,7],\n [2,0,6],\n [3,4,5],\n [0,3,0],\n [9,0,20]]\nPath to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mi,{children:"r"}),(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mi,{children:"d"}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mi,{children:"l"}),(0,a.jsx)(e.mi,{children:"e"}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mi,{children:"t"}),(0,a.jsx)(e.mi,{children:"h"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"m == grid.length"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"=="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(e.span,{className:"mord",children:"."}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})]})]})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mi,{children:"r"}),(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mi,{children:"d"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mi,{children:"l"}),(0,a.jsx)(e.mi,{children:"e"}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mi,{children:"t"}),(0,a.jsx)(e.mi,{children:"h"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"n == grid[i].length"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"=="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(e.span,{className:"mopen",children:"["}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(e.span,{className:"mclose",children:"]"}),(0,a.jsx)(e.span,{className:"mord",children:"."}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})]})]})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"15"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= m, n <= 15"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7335em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"15"})]})]})]})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"0"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mi,{children:"r"}),(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mi,{children:"d"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsx)(e.mi,{children:"j"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"100"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"0 <= grid[i][j] <= 100"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(e.span,{className:"mord",children:"0"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(e.span,{className:"mopen",children:"["}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(e.span,{className:"mclose",children:"]"}),(0,a.jsx)(e.span,{className:"mopen",children:"["}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,a.jsx)(e.span,{className:"mclose",children:"]"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"100"})]})]})]})}),"\n",(0,a.jsxs)(e.li,{children:["There are at most ",(0,a.jsx)(e.strong,{children:"25"})," cells containing gold."]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"approach-1-dfs-backtracking",children:"Approach 1: DFS Backtracking"}),"\n",(0,a.jsxs)(e.p,{children:["Since only at most ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"25"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"25"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"25"})]})})]})," cells containing gold, we can try all the possible paths using backtracking."]}),"\n",(0,a.jsx)(t,{children:(0,a.jsxs)(l,{value:"cpp",label:"C++",children:[(0,a.jsx)(n,{name:"@wingkwong"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int dx[4] = {-1, 0, 1, 0};\n    int dy[4] = {0, -1, 0, 1};\n    int dfs(vector<vector<int>>& grid, int i, int j) {\n        int m = grid.size(), n = grid[0].size();\n        int res = 0, orig = grid[i][j];\n        // mark grid[i][j] as 0 so that we won't visit again in this route\n        grid[i][j] = 0;\n        // try all 4 directions\n        for (int d = 0; d < 4; d++) {\n            // next (i, j)\n            int next_i = i + dx[d], next_j = j + dy[d];\n            // check if next coordinate is still in the grid\n            if (0 <= next_i && next_i < m && 0 <= next_j && next_j < n && grid[next_i][next_j]) {\n                // if so, continue with the next position\n                res = max(res, grid[next_i][next_j] + dfs(grid, next_i, next_j));\n            }\n        }\n        // backtrack\n        grid[i][j] = orig;\n        return res;\n    }\n    int getMaximumGold(vector<vector<int>>& grid) {\n        int m = grid.size(), n = grid[0].size(), ans = 0;\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (grid[i][j]) {\n                    // start from grid[i][j]\n                    ans = max(ans, grid[i][j] + dfs(grid, i, j));\n                }\n            }\n        }\n        return ans;\n    }\n};\n"})})]})})]})}function d(s={}){const{wrapper:e}={...(0,i.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}function o(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,e,n)=>{n.d(e,{Z:()=>m,a:()=>t});var a=n(67294);const i={},l=a.createContext(i);function t(s){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),a.createElement(l.Provider,{value:e},s.children)}}}]);