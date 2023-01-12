"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[22710],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(t),m=o,w=h["".concat(i,".").concat(m)]||h[m]||u[m]||a;return t?r.createElement(w,l(l({ref:n},p),{},{components:t})):r.createElement(w,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=h;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},91021:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/reverse-vowels-of-a-string/",tags:["Two Pointers","String"]},i="0345 - Reverse Vowels of a String (Easy)",c={unversionedId:"0300-0399/reverse-vowels-of-a-string-easy",id:"0300-0399/reverse-vowels-of-a-string-easy",title:"0345 - Reverse Vowels of a String (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/reverse-vowels-of-a-string/",source:"@site/solutions/0300-0399/0345-reverse-vowels-of-a-string-easy.md",sourceDirName:"0300-0399",slug:"/0300-0399/reverse-vowels-of-a-string-easy",permalink:"/solutions/0300-0399/reverse-vowels-of-a-string-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0345-reverse-vowels-of-a-string-easy.md",tags:[{label:"Two Pointers",permalink:"/solutions/tags/two-pointers"},{label:"String",permalink:"/solutions/tags/string"}],version:"current",sidebarPosition:345,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/reverse-vowels-of-a-string/",tags:["Two Pointers","String"]},sidebar:"tutorialSidebar",previous:{title:"0344 - Reverse String (Easy)",permalink:"/solutions/0300-0399/reverse-string-easy"},next:{title:"0346 - Moving Average from Data Stream (Easy)",permalink:"/solutions/0300-0399/moving-average-from-data-stream-easy"}},p={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two Pointers",id:"approach-1-two-pointers",level:2}],h=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)}},m=h("Tabs"),w=h("TabItem"),d=h("SolutionAuthor"),f={toc:u};function v(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0345---reverse-vowels-of-a-string-easy"},"0345 - Reverse Vowels of a String (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reverse-vowels-of-a-string/"},"https://leetcode.com/problems/reverse-vowels-of-a-string/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given a string ",(0,a.kt)("inlineCode",{parentName:"p"},"s"),", reverse only all the vowels in the string and return it."),(0,a.kt)("p",null,"The vowels are ",(0,a.kt)("inlineCode",{parentName:"p"},"'a'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'e'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'i'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'o'"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"'u'"),", and they can appear in both lower and upper cases, more than once."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "hello"\nOutput: "holle"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "leetcode"\nOutput: "leotcede"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 3 * 105")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," consist of ",(0,a.kt)("strong",{parentName:"li"},"printable ASCII")," characters.")),(0,a.kt)("h2",{id:"approach-1-two-pointers"},"Approach 1: Two Pointers"),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(w,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Time Complexity: O(N)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n    // fun fact: \n    // `Y` and `y` can be a vowel as well. \n    // glad the problem statement defines it well\n    bool isVowel(char c) {\n        // alternatively, we can just check \n        // return c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' || \n        //        c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'\n        c = tolower(c);\n        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';\n    }\n    \n    string reverseVowels(string s) {\n        // `l` is the left pointer to track the vowel character\n        // `r` is the right pointer to track the vowel character\n        int n = s.size(), l = 0, r = n - 1;\n        while (l < r) {\n            // find the index of the first vowel in the given range\n            // alternatively, we can use STL library `find_first_of` in c++\n            while (l < r && !isVowel(s[l])) l++;\n            // find the index of last vowel in the given range\n            // alternatively, we can use STL library `find_last_of` in c++\n            while (r > l && !isVowel(s[r])) r--;\n            // we can swap two vowels only when l < r\n            swap(s[l], s[r]);\n            // since we've processed the character s[l],\n            // we move the left pointer to the right\n            l += 1;\n            // since we've processed the character s[r],\n            // we move the right pointer to the left\n            r -= 1;\n        }\n        return s;\n    }\n};\n"))),(0,a.kt)(w,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'# Time Complexity: O(N)\n# Space Complexity: O(N)\nclass Solution:\n    # fun fact: \n    # `Y` and `y` can be a vowel as well. \n    # glad the problem statement defines it well\n    def reverseVowels(self, s: str) -> str:\n        n = len(s)\n        l, r = 0, n - 1\n        s = list(s)\n        vowels = list("aeiouAEIOU")\n        # `l` is the left pointer to track the vowel character\n        # `r` is the right pointer to track the vowel character\n        while l < r:\n            # find the index of the first vowel in the given range\n            while l < r and s[l] not in vowels:\n                l += 1\n            # find the index of last vowel in the given range\n            while r > l and s[r] not in vowels:\n                r -= 1\n            # swap s[l] and s[r]\n            s[l], s[r] = s[r], s[l]\n            # since we\'ve processed the character s[l],\n            # we move the left pointer to the right\n            l += 1\n            # since we\'ve processed the character s[r],\n            # we move the right pointer to the left\n            r -= 1\n            \n        return "".join(s)\n'))),(0,a.kt)(w,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Time Complexity: O(N)\n// Space Complexity: O(N) due to s.toCharArray()\nclass Solution {\n    // fun fact: \n    // `Y` and `y` can be a vowel as well. \n    // glad the problem statement defines it well\n    boolean isVowel(char c) {\n        // alternatively, we can just check \n        // return c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' || \n        //        c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'\n        c = Character.toLowerCase(c);\n        return switch (c) {\n            case 'a', 'e', 'i', 'o', 'u' -> true;\n            default -> false;\n        };\n    }\n    \n    public String reverseVowels(String s) {\n        // `l` is the left pointer to track the vowel character\n        // `r` is the right pointer to track the vowel character\n        int n = s.length(), l = 0, r = n - 1;\n        char[] ca = s.toCharArray();\n        while (l < r) {\n            // find the index of the first vowel in the given range\n            while (l < r && !isVowel(ca[l])) l++;\n            // find the index of last vowel in the given range\n            while (r > l && !isVowel(ca[r])) r--;\n            // swap ca[l] and ca[r]\n            {\n                char tmp = ca[l];\n                ca[l] = ca[r];\n                ca[r] = tmp;\n            }\n            // since we've processed the character s[l],\n            // we move the left pointer to the right\n            l += 1;\n            // since we've processed the character s[r],\n            // we move the right pointer to the left\n            r -= 1;\n        }\n        return new String(ca);\n    }\n}\n"))),(0,a.kt)(w,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Time Complexity: O(N)\n// Space Complexity: O(N)\n\n// fun fact: \n// `Y` and `y` can be a vowel as well sometimes. \n// glad the problem statement defines it well\nfunc isVowel(c rune) bool {\n    // alternatively, we can just check \n    // return c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' || \n    //        c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'\n    c = unicode.ToLower(c)\n    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'\n}\n\nfunc reverseVowels(s string) string {\n    ss := []rune(s)\n    n := len(ss)\n    l, r := 0, n - 1\n    for l < r {\n        // find the index of the first vowel in the given range\n        for l < r && !isVowel(ss[l]) {\n            l += 1\n        }\n        // find the index of last vowel in the given range\n        for r > l && !isVowel(ss[r]) {\n            r -= 1\n        }\n        // swap ss[l] and ss[r]\n        ss[l], ss[r] = ss[r], ss[l]\n        // since we've processed the character ss[l],\n        // we move the left pointer to the right\n        l += 1\n        // since we've processed the character ss[r],\n        // we move the right pointer to the left\n        r -= 1\n    }\n    return string(ss)\n}\n")))))}v.isMDXComponent=!0}}]);