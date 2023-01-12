"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4423],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(t),p=a,h=c["".concat(s,".").concat(p)]||c[p]||d[p]||i;return t?r.createElement(h,o(o({ref:n},m),{},{components:t})):r.createElement(h,o({ref:n},m))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},88032:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={description:"Author: @wingkwong, @iraycd | https://leetcode.com/problems/find-original-array-from-doubled-array/",tags:["Array","Hash Table","Greedy","Sorting"]},s="2007 - Find Original Array From Doubled Array (Medium)",u={unversionedId:"2000-2099/find-original-array-from-doubled-array-medium",id:"2000-2099/find-original-array-from-doubled-array-medium",title:"2007 - Find Original Array From Doubled Array (Medium)",description:"Author: @wingkwong, @iraycd | https://leetcode.com/problems/find-original-array-from-doubled-array/",source:"@site/solutions/2000-2099/2007-find-original-array-from-doubled-array-medium.md",sourceDirName:"2000-2099",slug:"/2000-2099/find-original-array-from-doubled-array-medium",permalink:"/solutions/2000-2099/find-original-array-from-doubled-array-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2000-2099/2007-find-original-array-from-doubled-array-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"Greedy",permalink:"/solutions/tags/greedy"},{label:"Sorting",permalink:"/solutions/tags/sorting"}],version:"current",sidebarPosition:2007,frontMatter:{description:"Author: @wingkwong, @iraycd | https://leetcode.com/problems/find-original-array-from-doubled-array/",tags:["Array","Hash Table","Greedy","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"2000 - 2099",permalink:"/solutions/category/2000---2099"},next:{title:"2017 - Grid Game (Medium)",permalink:"/solutions/2000-2099/grid-game-medium"}},m={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting + Hashmap",id:"approach-1-sorting--hashmap",level:2}],c=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}},p=c("Tabs"),h=c("TabItem"),g=c("SolutionAuthor"),f={toc:d};function y(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2007---find-original-array-from-doubled-array-medium"},"2007 - Find Original Array From Doubled Array (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-original-array-from-doubled-array/"},"https://leetcode.com/problems/find-original-array-from-doubled-array/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"An integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"original")," is transformed into a ",(0,i.kt)("strong",{parentName:"p"},"doubled")," array ",(0,i.kt)("inlineCode",{parentName:"p"},"changed")," by appending ",(0,i.kt)("strong",{parentName:"p"},"twice the value")," of every element in ",(0,i.kt)("inlineCode",{parentName:"p"},"original"),", and then randomly ",(0,i.kt)("strong",{parentName:"p"},"shuffling")," the resulting array."),(0,i.kt)("p",null,"Given an array ",(0,i.kt)("inlineCode",{parentName:"p"},"changed"),", return ",(0,i.kt)("inlineCode",{parentName:"p"},"original"),(0,i.kt)("em",{parentName:"p"},"if"),(0,i.kt)("inlineCode",{parentName:"p"},"changed"),(0,i.kt)("em",{parentName:"p"},"is a ",(0,i.kt)("strong",{parentName:"em"},"doubled")," array. If"),(0,i.kt)("inlineCode",{parentName:"p"},"changed"),(0,i.kt)("em",{parentName:"p"},"is not a ",(0,i.kt)("strong",{parentName:"em"},"doubled")," array, return an empty array. The elements in")," ",(0,i.kt)("inlineCode",{parentName:"p"},"original")," ",(0,i.kt)("em",{parentName:"p"},"may be returned in ",(0,i.kt)("strong",{parentName:"em"},"any")," order"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: changed = [1,3,4,2,6,8]\nOutput: [1,3,4]\nExplanation: One possible original array could be [1,3,4]:\n- Twice the value of 1 is 1 * 2 = 2.\n- Twice the value of 3 is 3 * 2 = 6.\n- Twice the value of 4 is 4 * 2 = 8.\nOther original arrays could be [4,3,1] or [3,1,4].\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: changed = [6,3,0,1]\nOutput: []\nExplanation: changed is not a doubled array.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: changed = [1]\nOutput: []\nExplanation: changed is not a doubled array.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= changed.length <= 105")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= changed[i] <= 105"))),(0,i.kt)("h2",{id:"approach-1-sorting--hashmap"},"Approach 1: Sorting + Hashmap"),(0,i.kt)(p,{mdxType:"Tabs"},(0,i.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Time Complexity: O(N + NlogN)\n// Space Complexity: O(N)\n// where N is the number of elements in `changed` \nclass Solution {\npublic:\n    // hashmap approach\n    vector<int> findOriginalArray(vector<int>& changed) {\n        // if the length of the input is odd, then return {}\n        // because doubled array must have even length\n        if (changed.size() & 1) return {};\n        // count the frequency of each number\n        unordered_map<int, int> m;\n        for (auto x: changed) m[x]++;\n        vector<int> ans;\n        // sort in ascending order\n        sort(changed.begin(), changed.end());\n        // keep the unique elements only in changed\n        // think of test cases like [0,0,0,0]\n        // alternatively you can handle it like\n        // - check if the frequency of 0 is odd, if so, return {}\n        // - push `0` `m[0] / 2` times to ans\n        changed.erase(unique(changed.begin(), changed.end()), changed.end());\n        // so that we can iterate `changed` from smallest to largest\n        for (auto x : changed) {\n            // if the number of m[x] is greater than than m[x * 2]\n            // then there would be some m[x] left\n            // therefore, return {} here as changed is not a doubled array\n            if (m[x] > m[x * 2]) return {};\n            for (int i = 0; i < m[x]; i++) {\n                // otherwise, we put the element `x` `m[x]` times to ans\n                ans.push_back(x);\n                // at the same time we decrease the count of m[x * 2] by 1\n                // we don't need to decrease m[x] by 1 as we won't use it again\n                m[x * 2] -= 1;\n            }\n        }\n        return ans;\n    }\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Time Complexity: O(N + KlogK)\n// Space Complexity: O(N)\n// where N is the number of elements in `changed` \n// and K is the number of elements in `uniqueNumbers`\nclass Solution {\npublic:\n    // hashmap approach\n    vector<int> findOriginalArray(vector<int>& changed) {\n        // if the length of the input is odd, then return {}\n        // because doubled array must have even length\n        if (changed.size() & 1) return {};\n        // count the frequency of each number\n        unordered_map<int, int> m;\n        for (auto x: changed) m[x]++;\n        vector<int> ans;\n        vector<int> uniqueNumbers;\n        // push all unuque numbers to `uniqueNumbers`\n        for (auto x : m) uniqueNumbers.push_back(x.first);\n        // sort in ascending order\n        sort(uniqueNumbers.begin(), uniqueNumbers.end());\n        // so that we can iterate `changed` from smallest to largest\n        for (auto x : uniqueNumbers) {\n            // if the number of m[x] is greater than than m[x * 2]\n            // then there would be some m[x] left\n            // therefore, return {} here as changed is not a doubled array\n            if (m[x] > m[x * 2]) return {};\n            for (int i = 0; i < m[x]; i++) {\n                // otherwise, we put the element `x` `m[x]` times to ans\n                ans.push_back(x);\n                // at the same time we decrease the count of m[x * 2] by 1\n                // we don't need to decrease m[x] by 1 as we won't use it again\n                m[x * 2] -= 1;\n            }\n        }\n        return ans;\n    }\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Time Complexity: O(NlogN)\n// Space Complexity: O(N)\n// where N is the number of elements in `changed` \nclass Solution {\npublic:\n    // multiset approach\n    vector<int> findOriginalArray(vector<int>& changed) {\n        // if the length of the input is odd, then return {}\n        // because doubled array must have even length\n        if (changed.size() & 1) return {};\n        vector<int> ans;\n        // put all the elements to a multiset\n        multiset<int> s(changed.begin(), changed.end());\n        // keep doing the following logic when there is an element in the multiset\n        while (s.size()) {\n            // get the smallest element\n            int smallest = *s.begin();\n            ans.push_back(smallest);\n            // remove the smallest element in multiset\n            s.erase(s.begin());\n            // if the doubled value of smallest doesn't exist in the multiset\n            // then return {}\n            if (s.find(smallest * 2) == s.end()) return {};\n            // otherwise we can remove its doubled element\n            else s.erase(s.find(smallest * 2));   \n        }\n        return ans;\n    }\n};\n"))),(0,i.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Time Complexity: O(NlogN)\n# Space Complextiy O(N)\n# where N is the number of elements in `changed` \nclass Solution:\n    def findOriginalArray(self, changed):\n        # use Counter to count the frequency of each element in `changed`\n        cnt, ans = Counter(changed), []\n        # if the length of the input is odd, then return []\n        # because doubled array must have even length\n        if len(changed) % 2: return []\n        # sort in ascending order\n        for x in sorted(cnt.keys()):\n            # if the number of cnt[x] is greater than than cnt[x * 2]\n            # then there would be some cnt[x] left\n            # therefore, return [] here as changed is not a doubled array\n            if cnt[x] > cnt[x * 2]: return []\n            # handle cases like [0,0,0,0]\n            if x == 0:\n                # similarly, odd length -> return []\n                if cnt[x] % 2:\n                    return []\n                else: \n                    # add `0` `cnt[x] // 2` times \n                    ans += [0] * (cnt[x] // 2)\n            else:\n                # otherwise, we put the element `x` `cnt[x]` times to ans\n                ans += [x] * cnt[x]\n            cnt[2 * x] -= cnt[x]\n        return ans\n"))),(0,i.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    // counting sort approach\n    public int[] findOriginalArray(int[] changed) {\n        int n = changed.length, j = 0;\n        // if the length of the input is odd, then return []\n        // because doubled array must have even length\n        if (n % 2 == 1) return new int[]{};\n        int[] ans = new int[n / 2];\n        // alternatively, you can find the max number in `changed`\n        // then use new int[2 * mx + 1]\n        int[] cnt = new int[200005];\n        // count the frequency of each number\n        for (int x : changed) cnt[x] += 1;\n        // iterate from 0 to max number\n        for (int i = 0; i < 200005; i++) {\n            // check if the count of number i is greater than 0\n            if (cnt[i] > 0) {\n                // number i exists, decrease by 1\n                cnt[i] -= 1;\n                // look for the doubled value\n                if (cnt[i * 2] > 0) {\n                    // doubled value exists, decrease by 1\n                    cnt[i * 2] -= 1;\n                    // add this number to ans\n                    ans[j++] = i--;\n                } else {\n                    // cannot pair up, return []\n                    return new int[]{};\n                }\n            }\n        }\n        return ans;\n    }\n}\n"))),(0,i.kt)(h,{value:"go",label:"Go",mdxType:"TabItem"},(0,i.kt)(g,{name:"@iraycd",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// 1. Mapping the numbers with repetitions.\n// 2. Sort them in ascending order\n// 3. Subtract the doubled from the maps and make the original item 0.\n// 4. Checking if everything is 0.\n\nfunc findOriginalArray(changed []int) []int {\n    // As every number has double, if it's odd, directly return empty.\n    isOdd := len(changed) & 1\n    if(isOdd == 1){\n        return []int{}\n    }\n    \n    // Converting everything to a map, counting the repetitions.\n    changedMap := make(map[int]int)\n    for _, elem := range changed {\n        if _, ok:= changedMap[elem]; ok {\n            changedMap[elem] = changedMap[elem] +1 \n        }else {\n            changedMap[elem] = 1;\n        }\n    }\n    \n    // Creating a unique set of all the repetitions.\n    // Sorting the set/unique array in ascending order as we can easily remove the elements.\n    var set []int\n    for key := range changedMap {\n        set = append(set, key)\n    }\n    sort.Ints(set)\n\n    \n    var original []int;\n    for _, elem := range set {\n        if _, ok:= changedMap[elem*2]; ok {\n            x := changedMap[elem]\n            y := changedMap[elem*2]\n            if(elem == 0){  // In the case of [0,0,0,0] the array has to be [0,0]\n                x = x/2\n            }\n            // We append by the repetitions.\n            for i := 0; i < x; i++ {\n               original = append(original, elem)\n            }\n            // In the case of [2,1,2,4,2,4] we have 2s more than 1s. so we subtract 2s from 1s.\n            changedMap[elem*2] = y - x; \n            changedMap[elem] = 0;\n        }\n    }\n    \n    // Only if all the changedMap has 0 elements in them we make we consider they are all doubled.\n    for _, elem := range changedMap {\n        if (elem != 0){\n            return []int{}\n        }\n    }\n    \n    return original\n}\n")))))}y.isMDXComponent=!0}}]);