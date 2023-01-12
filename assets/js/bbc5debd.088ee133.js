"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[99006],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h=i.createContext({}),p=function(e){var t=i.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(h.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,h=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,u=c["".concat(h,".").concat(g)]||c[g]||m[g]||r;return n?i.createElement(u,o(o({ref:t},s),{},{components:n})):i.createElement(u,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var h in t)hasOwnProperty.call(t,h)&&(l[h]=t[h]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24367:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/trapping-rain-water/",tags:["Array","Two Pointers","Dynamic Programming","Stack","Monotonic Stack"]},h="0042 - Trapping Rain Water (Hard)",p={unversionedId:"0000-0099/trapping-rain-water-hard",id:"0000-0099/trapping-rain-water-hard",title:"0042 - Trapping Rain Water (Hard)",description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/trapping-rain-water/",source:"@site/solutions/0000-0099/0042-trapping-rain-water-hard.md",sourceDirName:"0000-0099",slug:"/0000-0099/trapping-rain-water-hard",permalink:"/solutions/0000-0099/trapping-rain-water-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0042-trapping-rain-water-hard.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Two Pointers",permalink:"/solutions/tags/two-pointers"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Stack",permalink:"/solutions/tags/stack"},{label:"Monotonic Stack",permalink:"/solutions/tags/monotonic-stack"}],version:"current",sidebarPosition:42,frontMatter:{description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/trapping-rain-water/",tags:["Array","Two Pointers","Dynamic Programming","Stack","Monotonic Stack"]},sidebar:"tutorialSidebar",previous:{title:"0040 - Combination Sum II (Medium)",permalink:"/solutions/0000-0099/combination-sum-ii-medium"},next:{title:"0046 - Permutations (Medium)",permalink:"/solutions/0000-0099/permutations-medium"}},s={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2},{value:"Approach 2: Two Pointers",id:"approach-2-two-pointers",level:2},{value:"Approach 3: Monotonic Stack",id:"approach-3-monotonic-stack",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},g=c("Tabs"),u=c("TabItem"),d=c("SolutionAuthor"),f={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0042---trapping-rain-water-hard"},"0042 - Trapping Rain Water (Hard)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/trapping-rain-water/"},"https://leetcode.com/problems/trapping-rain-water/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," non-negative integers representing an elevation map where the width of each bar is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", compute how much water it can trap after raining."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6\nExplanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: height = [4,2,0,3,2,5]\nOutput: 9\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n == height.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 2 * 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= height[i] <= 10^5"))),(0,r.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,r.kt)(g,{mdxType:"Tabs"},(0,r.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Time Complexity: O(N)\n// Space Complexity: O(N)\n// where N is the length of height\nclass Solution {\npublic:\n    int trap(vector<int>& height) {\n        int ans = 0, n = height.size();\n        // dp1[i]: the max height of bar from the left till position i\n        // dp2[i]: the max height of bar from the right till position i\n        vector<int> dp1(n), dp2(n);\n        // let's build dp1 first\n        dp1[0] = height[0];\n        // for each position i,\n        // if the current height is greater than the max height, then dp1[i] will be height[i]\n        // else dp1[i] will be taking the previous result, i.e. dp1[i - 1]\n        for (int i = 1; i < n; i++) dp1[i] = max(dp1[i - 1], height[i]);\n        // build dp2 in a similar way\n        dp2[n - 1] = height[n - 1];\n        // for each position i,\n        // if the current height is greater than the max height,\n        // then dp2[i] will be height[i]\n        // else dp2[i] will be taking the previous result, i.e. dp2[i + 1]\n        for (int i = n - 2; i >= 0; i--) dp2[i] = max(dp2[i + 1], height[i]);\n        // then iterate the heights and take the minimum of dp1[i] and dp2[i]\n        // why minimum? because that is the max height a bar can hold. (water will overflow)\n        // then we substract height[i] from the min\n        // if min(dp1[i], dp2[i]) is 2 and height[i] is 2, then no water is being trapped\n        // if min(dp1[i], dp2[i]) is 2 and height[i] is 0, then 2 units of water are being trapped\n        for (int i = 1; i < n - 1; i++) ans += min(dp1[i], dp2[i]) - height[i];\n        return ans;\n    }\n};\n")))),(0,r.kt)("h2",{id:"approach-2-two-pointers"},"Approach 2: Two Pointers"),(0,r.kt)(g,{mdxType:"Tabs"},(0,r.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Time Complexity: O(N)\n// Space Complexity: O(1)\nclass Solution {\n    public int trap(int[] height) {\n        int i = 0, j = height.length - 1, ans = 0, mx = 0, mi = 0;\n        // two pointers\n        // pointer i from the left\n        // pointer j from the right\n        while (i <= j) {\n            // take the min height\n            mi = Math.min(height[i], height[j]);\n            // find the max min height\n            mx = Math.max(mx, mi);\n            // the units of water being tapped is the diffence between max height and min height\n            ans += mx - mi;\n            // move the pointer i if height[i] is smaller\n            if (height[i] < height[j]) i++;\n            // else move pointer j\n            else j--;\n        }\n        return ans;\n    }\n}\n")),(0,r.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Time Complexity: O(N)\n// Space Complexity: O(N)\nclass Solution {\n    public int trap(int[] height) {\n        int i = 0, j = height.length - 1;\n        int level = 0, water = 0;\n        while (i < j) {\n            // Get the minium height and change the index depends on height\n            int lower = height[height[i] < height[j] ? i++ : j--];\n            // Highest peak gives total area to calculate water\n            level = Math.max(level, lower);\n            // How much water can hold from the recently calculated height\n            water += level - lower;\n        }\n        return water;\n    }\n}\n"))),(0,r.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Time Complexity: O(N)\n# Space Complexity: O(1)\nclass Solution:\n    def trap(self, height: List[int]) -> int:\n        i, j, ans, mx, mi = 0, len(height) - 1, 0, 0, 0\n        # two pointers\n        # pointer i from the left\n        # pointer j from the right\n        while i <= j:\n            # take the min height\n            mi = min(height[i], height[j])\n            # find the max min height\n            mx = max(mx, mi)\n            # the units of water being tapped is the diffence between max height and min height\n            ans += mx - mi\n            # move the pointer i if height[i] is smaller\n            if height[i] < height[j]: i += 1\n            # else move pointer j\n            else: j -= 1\n        return ans\n")))),(0,r.kt)("h2",{id:"approach-3-monotonic-stack"},"Approach 3: Monotonic Stack"),(0,r.kt)("p",null,"Monotonic stacks are generally used for solving questions of the type - next greater element, next smaller element, previous greater element and previous smaller element. "),(0,r.kt)("p",null,"This problem one of the problem of solving with the previous heights with the current height."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Keep adding the index (referenced to height) into stack, if the current height is higher the last added one (Stack Top)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once we find there's a downward slop, means this is starting position to trap water fill (hold the water).\nSo keep calculating water trap area with the height and the index. Since we need to find the height and width of water area, indices are required to find the width (the same is maintained in the stack).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Keep repeating the process until the we reach last or there's no higher height to calculate the water fill (Stack is empty)."))),(0,r.kt)(g,{mdxType:"Tabs"},(0,r.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Time Complexity: O(N)\n// Space Complexity: O(N)\nclass Solution {\n    public int trap(int[] height) {\n        int water = 0;\n        Stack<Integer> stack = new Stack<>();\n        for (int i = 0; i < height.length; i++) {\n            while (!stack.isEmpty() && height[stack.peek()] <= height[i]) {\n                int j = stack.pop();\n                if (!stack.isEmpty()) {\n                    int h = Math.min(height[stack.peek()], height[i]) - height[j];\n                    int w = i - (stack.peek() + 1);\n                    water += (h * w);\n                }\n            }\n            stack.push(i);\n        }\n        return water;\n    }\n}\n"))),(0,r.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(d,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Time Complexity: O(N)\n# Space Complexity: O(N)\nclass Solution:\n    def trap(self, height: List[int]) -> int:\n        # Utilize a monotonic decreasing stack, meaning everything in the stack\n        # will be ordered from tallest to shortest, and any incoming element\n        # taller than the top of the stack, has the potential to trap water.\n        # Note. We can only trap water if their are at least 2 items on the stack.\n        # 1 to provide the space to be filled, and 1 to the left of it to provide\n        # a boundary to hold the water.\n        stack = []\n        total_water = 0\n        # loop through height -> tracking right wall x coord, and right wall height.\n        for right_x, right_h in enumerate(height):\n            # stack exists & incoming wall height > top of the stacks wall height.\n            while stack and stack[-1][1] < right_h:\n                # get the floor of the area to be filled, to prevent double \n                # filling already filled holes or filling an area that should be a wall.\n                _,floor = stack.pop()                  \n                # Empty stack means no left wall to trap water, so water runs off.\n                if stack:\n                    # left wall x pos, left wall height.\n                    left_x, left_h = stack[-1]\n                    # distance between both walls.\n                    w = (right_x-left_x)-1\n                    # height of area to be filled.   \n                    h = min(left_h, right_h) - floor\n                    # water created\n                    water = w*h\n                    #add water to total water variable.\n                    total_water += water\n            # Add incoming wall to the stack.\n            stack.append((right_x,right_h)) \n        return total_water\n")))))}k.isMDXComponent=!0}}]);