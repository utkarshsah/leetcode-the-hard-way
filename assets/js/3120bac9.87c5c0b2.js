"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[37104],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=r.createContext({}),l=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=l(n.components);return r.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,p=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),m=l(t),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(k,o(o({ref:e},c),{},{components:t})):r.createElement(k,o({ref:e},c))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s.mdxType="string"==typeof n?n:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35110:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={description:"Author: @wingkwong, @dhanu084, @radojicic23| https://leetcode.com/problems/online-stock-span/",tags:["Stack","Design","Monotonic Stack","Data Stream"]},p="0901 - Online Stock Span (Medium)",l={unversionedId:"0900-0999/online-stock-span-medium",id:"0900-0999/online-stock-span-medium",title:"0901 - Online Stock Span (Medium)",description:"Author: @wingkwong, @dhanu084, @radojicic23| https://leetcode.com/problems/online-stock-span/",source:"@site/solutions/0900-0999/0901-online-stock-span-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/online-stock-span-medium",permalink:"/solutions/0900-0999/online-stock-span-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0901-online-stock-span-medium.md",tags:[{label:"Stack",permalink:"/solutions/tags/stack"},{label:"Design",permalink:"/solutions/tags/design"},{label:"Monotonic Stack",permalink:"/solutions/tags/monotonic-stack"},{label:"Data Stream",permalink:"/solutions/tags/data-stream"}],version:"current",sidebarPosition:901,frontMatter:{description:"Author: @wingkwong, @dhanu084, @radojicic23| https://leetcode.com/problems/online-stock-span/",tags:["Stack","Design","Monotonic Stack","Data Stream"]},sidebar:"tutorialSidebar",previous:{title:"0900 - 0999",permalink:"/solutions/category/0900---0999"},next:{title:"0912 - Sort an Array (Medium)",permalink:"/solutions/0900-0999/sort-an-array-medium"}},c={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Stack",id:"approach-1-stack",level:2},{value:"Approach 2: Segment Tree",id:"approach-2-segment-tree",level:2}],m=function(n){return function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}},d=m("Tabs"),k=m("TabItem"),h=m("SolutionAuthor"),f={toc:u};function g(n){var e=n.components,t=(0,a.Z)(n,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0901---online-stock-span-medium"},"0901 - Online Stock Span (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/online-stock-span/"},"https://leetcode.com/problems/online-stock-span/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Design an algorithm that collects daily price quotes for some stock and returns ",(0,i.kt)("strong",{parentName:"p"},"the span")," of that stock's price for the current day."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"span")," of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For example, if the price of a stock over the next ",(0,i.kt)("inlineCode",{parentName:"li"},"7")," days were ",(0,i.kt)("inlineCode",{parentName:"li"},"[100,80,60,70,60,75,85]"),", then the stock spans would be ",(0,i.kt)("inlineCode",{parentName:"li"},"[1,1,1,2,1,4,6]"),".")),(0,i.kt)("p",null,"Implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"StockSpanner")," class:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StockSpanner()")," Initializes the object of the class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int next(int price)")," Returns the ",(0,i.kt)("strong",{parentName:"li"},"span")," of the stock's price given that today's price is ",(0,i.kt)("inlineCode",{parentName:"li"},"price"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input\n["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]\n[[], [100], [80], [60], [70], [60], [75], [85]]\nOutput\n[null, 1, 1, 1, 2, 1, 4, 6]\n\nExplanation\nStockSpanner stockSpanner = new StockSpanner();\nstockSpanner.next(100); // return 1\nstockSpanner.next(80);  // return 1\nstockSpanner.next(60);  // return 1\nstockSpanner.next(70);  // return 2\nstockSpanner.next(60);  // return 1\nstockSpanner.next(75);  // return 4, because the last 4 prices (including today\'s price of 75) were less than or equal to today\'s price.\nstockSpanner.next(85);  // return 6\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= price <= 10^5")),(0,i.kt)("li",{parentName:"ul"},"At most ",(0,i.kt)("inlineCode",{parentName:"li"},"10^4")," calls will be made to ",(0,i.kt)("inlineCode",{parentName:"li"},"next"),".")),(0,i.kt)("h2",{id:"approach-1-stack"},"Approach 1: Stack"),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(k,{value:"kt",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kt"},"class StockSpanner() {\n    val s = Stack<Pair<Int, Int>>()\n    fun next(price: Int): Int {\n        var res = 1\n        while (!s.isEmpty() && s.peek().first <= price) {\n            res += s.peek().second\n            s.pop()\n        }\n        s.add(Pair(price, res))\n        return res\n    }\n}\n\n/**\n * Your StockSpanner object will be instantiated and called as such:\n * var obj = StockSpanner()\n * var param_1 = obj.next(price)\n */\n"))),(0,i.kt)(k,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)(h,{name:"@dhanu084",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"class StockSpanner:\n\n    def __init__(self):\n        self.span = []\n\n    def next(self, price: int) -> int:\n        '''\n            * if current price is lesser than the last element at\n              stack then it can't expand its span so just return 1\n            * Return 1 as minimum span as each price is greater\n              for current day\n                * eg if span is [(100,1), (80,1)] and current price is 60\n                  then the span will change to [(100,1), (80,1), (60,1)]\n                  and return 1\n                * in tuple (100,1) 100 represents price\n                  and 1 represents its span\n        '''\n        current_span = 1\n        if not self.span or self.span[-1][0] > price:\n            # adding tuples to the span array eg [(75,1),(60,1)]\n            self.span.append((price, 1))\n            return current_span\n        '''\n            * Keep popping the stack if current price is greater\n              than or equal to the top of the span stack\n            * while popping always add the span of the popped item and not 1\n            * Once popped keep in mind to add the (price, current_span) of\n            the current price\n                * eg when span is [(100,1), (80,1), (60,1)]\n                  and current price is 70 then span of 70 will be 1 + span\n                  of the top of stack which is 1from 60 so the span\n                  will be [(100,1), (80,1), (70,2)]\n        '''\n        while self.span and self.span[-1][0] <= price:\n            current_span += self.span.pop()[1]\n        self.span.append((price, current_span))\n\n        return current_span\n")))),(0,i.kt)("h2",{id:"approach-2-segment-tree"},"Approach 2: Segment Tree"),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(k,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// modified from https://wingkwong.github.io/leetcode-the-hard-way/templates/segment-tree\nstruct segtree {\n    vector<long long> sums;\n    int size;\n\n    void init(int n) {\n        size = 1;\n        while (size < n) size *= 2;\n        sums.assign(size * 2, 0LL);\n    }\n\n    void set(int i, int v, int x, int lx, int rx) {\n        if (rx - lx == 1) {\n            sums[x] = v;\n            return;\n        }\n        int m = (lx + rx) / 2;\n        if (i < m) set(i, v, 2 * x + 1, lx, m);\n        else set(i, v, 2 * x + 2, m, rx);\n        sums[x] = max(sums[2 * x + 1], sums[2 * x + 2]);\n    }\n\n    void set(int i, int v) {\n        set(i, v, 0, 0, size);\n    }\n\n    long long sum(int l, int r, int x, int lx, int rx) {\n        if (lx >= r || l >= rx) return 0;\n        if (lx >= l && rx <= r) return sums[x];\n        int m = (lx + rx) / 2;\n        return max(sum(l, r, 2 * x + 1, lx, m), sum(l, r, 2 * x + 2, m, rx));\n    }\n\n    long long sum(int l, int r) {\n        return sum(l, r, 0, 0, size);\n    }\n};\n\nclass StockSpanner {\npublic:\n    int mxN = 1e5;\n    int p = 1;\n    segtree st;\n\n    StockSpanner() {\n        st.init(mxN);\n    }\n\n    int next(int price) {\n        st.set(price, p);\n        return p++ - st.sum(price + 1, mxN);\n    }\n};\n\n/**\n * Your StockSpanner object will be instantiated and called as such:\n * StockSpanner* obj = new StockSpanner();\n * int param_1 = obj->next(price);\n */\n"))),(0,i.kt)(k,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)(h,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var StockSpanner = function() {\n    this.stack = [];\n};\n\n/** \n * @param {number} price\n * @return {number}\n */\nStockSpanner.prototype.next = function(price) {\n    let span = 1;\n    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {\n        span += this.stack[this.stack.length - 1][1];\n        this.stack.pop();\n    }\n    this.stack.push([price, span]);\n    return span;\n};\n\n/** \n * Your StockSpanner object will be instantiated and called as such:\n * var obj = new StockSpanner()\n * var param_1 = obj.next(price)\n */\n")))))}g.isMDXComponent=!0}}]);