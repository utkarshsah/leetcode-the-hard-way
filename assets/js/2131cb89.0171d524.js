"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[13725],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>k});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),o=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(i.Provider,{value:e},a.children)},c="mdxType",h={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,i=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),c=o(t),N=s,k=c["".concat(i,".").concat(N)]||c[N]||h[N]||r;return t?n.createElement(k,m(m({ref:e},l),{},{components:t})):n.createElement(k,m({ref:e},l))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,m=new Array(r);m[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p[c]="string"==typeof a?a:s,m[1]=p;for(var o=2;o<r;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},92782:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>m,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=t(87462),s=(t(67294),t(3905));const r={description:"Author: @ColeB2 | https://leetcode.com/problems/set-matrix-zeroes/",tags:["Array","Hash Table","Matrix"]},m="0073 - Set Matrix Zeroes (Medium)",p={unversionedId:"0000-0099/set-matrix-zeroes-medium",id:"0000-0099/set-matrix-zeroes-medium",title:"0073 - Set Matrix Zeroes (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/set-matrix-zeroes/",source:"@site/solutions/0000-0099/0073-set-matrix-zeroes-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/set-matrix-zeroes-medium",permalink:"/solutions/0000-0099/set-matrix-zeroes-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0073-set-matrix-zeroes-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:73,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/set-matrix-zeroes/",tags:["Array","Hash Table","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0072 - Edit Distance (Hard)",permalink:"/solutions/0000-0099/edit-distance-hard"},next:{title:"0074 - Search a 2D Matrix (Medium)",permalink:"/solutions/0000-0099/search-a-2d-matrix-medium"}},i={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Inplace, Constant Space, Iteration.",id:"approach-1-inplace-constant-space-iteration",level:2}],l=a=>function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)},c=l("Tabs"),h=l("TabItem"),N=l("SolutionAuthor"),k={toc:o},u="wrapper";function d(a){let{components:e,...t}=a;return(0,s.kt)(u,(0,n.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0073---set-matrix-zeroes-medium"},"0073 - Set Matrix Zeroes (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/set-matrix-zeroes/"},"https://leetcode.com/problems/set-matrix-zeroes/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given an ",(0,s.kt)("inlineCode",{parentName:"p"},"m x n")," integer matrix ",(0,s.kt)("inlineCode",{parentName:"p"},"matrix"),", if an element is ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),", set its entire row and column to ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),"'s."),(0,s.kt)("p",null,"You must do it ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/In-place_algorithm"},"in place"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]\nOutput: [[1,0,1],[0,0,0],[1,0,1]]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\nOutput: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"m == matrix.length")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"n == matrix[0].length")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 200")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-2^31 <= matrix[i][j] <= 2^31 - 1"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Follow up:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A straightforward solution using ",(0,s.kt)("inlineCode",{parentName:"li"},"O(mn)")," space is probably a bad idea."),(0,s.kt)("li",{parentName:"ul"},"A simple improvement uses ",(0,s.kt)("inlineCode",{parentName:"li"},"O(m + n)")," space, but still not the best solution."),(0,s.kt)("li",{parentName:"ul"},"Could you devise a constant space solution?")),(0,s.kt)("h2",{id:"approach-1-inplace-constant-space-iteration"},"Approach 1: Inplace, Constant Space, Iteration."),(0,s.kt)("p",null,"To save space, we can just iterate over the entire matrix initially, if we ever reach a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),", we can record that in the top row/left column, by rewriting it with a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),". Then we can check the top row, left column at the end, and rewrite all rows/columns that have a top row/left column as ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),"."),(0,s.kt)("p",null,"The edge case you can imagine is how we handle the top left corner. If we have a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0")))))," in the first row/first column and place a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0")))))," in the first row/column, then when we replace all numbers afterwards, we are going to ruin our tracking method."),(0,s.kt)("p",null,"To handle this, we can use a boolean to track if the first row/first column has zeroes, iterate the first/row column, and update the boolean of the first row/column has a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),". From then on, we can do as we described above, just starting at ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," for both the row/column, as we already handled the first row/column."),(0,s.kt)("p",null,"Finally, we can rewrite everything, again starting at ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," for both the row/column, and handling the first row/column at the end, based on the boolean values we found earlier."),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(m * n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),". Where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," is the number of rows, and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is the number of columns. We must iterate over the whole matrix a couple of times."),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),". We can do it in constant extra space, by using the first row/column to track which rows and columns are zeroed out and using boolean values to handle the first row/column."),(0,s.kt)(c,{mdxType:"Tabs"},(0,s.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(N,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'class Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        """\n        Do not return anything, modify matrix in-place instead.\n        """\n        # Track our rows and columns.\n        ROWS, COLS = len(matrix), len(matrix[0])\n        # iterate first column, if any value is 0, set first_col to True.\n        # python any method will set first_row to a boolean, based on\n        # if the condition we provided ever occurs, we can then also\n        # loop through all the values and check.\n        first_row = any(matrix[0][c] == 0 for c in range(COLS))\n        # iterate first row to check for 0\'s, if any value is a 0, then\n        # the first column needs to be zeroed out.\n        first_col = any(matrix[r][0] == 0 for r in range(ROWS))\n        # Note above: Our first row, will be all the values in\n        # the row going horizontally, which means we are checking\n        # the value of each column in row 0, similarly, our first\n        # column will be all the values in the column going vertically,\n        # so we check the value of each row in column 0.\n        \n        # Iterate our matrix, skipping the first row/column\n        for r in range(1, ROWS):\n            for c in range(1, COLS):\n                # found a 0, set the first/row column value to 0\n                if matrix[r][c] == 0:\n                    matrix[r][0] = 0\n                    matrix[0][c] = 0\n        # Set the row/columns to zeroes. Again iterate matrix, skipping\n        # the first row/column\n        for r in range(1, ROWS):\n            for c in range(1, COLS):\n                # if either the first row of any given cell or\n                # the first column of any given cell is 0, we can \n                # set the current cell to 0.\n                if matrix[r][0] == 0 or matrix[0][c] == 0:\n                    matrix[r][c] = 0\n        # Edge cases, if the first row was 0, set all column values in \n        # the top row to 0.\n        if first_row:\n            for c in range(COLS):\n                matrix[0][c] = 0\n        # if first_column contained a 0, set all row values in the left\n        # column to 0.\n        if first_col:\n            for r in range(ROWS):\n                matrix[r][0] = 0\n')))))}d.isMDXComponent=!0}}]);