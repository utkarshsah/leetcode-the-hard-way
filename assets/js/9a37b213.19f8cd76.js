"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/isomorphic-strings/",tags:["Hash Table","String"]},o="0205 - Isomorphic Strings (Easy)",s={unversionedId:"0200-0299/isomorphic-strings-easy",id:"0200-0299/isomorphic-strings-easy",title:"0205 - Isomorphic Strings (Easy)",description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/isomorphic-strings/",source:"@site/solutions/0200-0299/0205-isomorphic-strings-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/isomorphic-strings-easy",permalink:"/solutions/0200-0299/isomorphic-strings-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0205-isomorphic-strings-easy.md",tags:[{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"String",permalink:"/solutions/tags/string"}],version:"current",sidebarPosition:205,frontMatter:{description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/isomorphic-strings/",tags:["Hash Table","String"]},sidebar:"tutorialSidebar",previous:{title:"0204 - Count Primes",permalink:"/solutions/0200-0299/count-primes"},next:{title:"0206 - Reverse Linked List (Easy)",permalink:"/solutions/0200-0299/reverse-linked-list-easy"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=c("Tabs"),u=c("TabItem"),h=c("SolutionAuthor"),d={toc:p},g="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0205---isomorphic-strings-easy"},"0205 - Isomorphic Strings (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/isomorphic-strings/"},"https://leetcode.com/problems/isomorphic-strings/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given two strings ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"t"),", ",(0,a.kt)("em",{parentName:"p"},"determine if they are isomorphic"),"."),(0,a.kt)("p",null,"Two strings ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"t")," are isomorphic if the characters in ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," can be replaced to get ",(0,a.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,a.kt)("p",null,"All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "egg", t = "add"\nOutput: true\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "foo", t = "bar"\nOutput: false\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "paper", t = "title"\nOutput: true\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 5 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"t.length == s.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"t")," consist of any valid ascii character.")),(0,a.kt)("h2",{id:"approach-1-hash-map"},"Approach 1: Hash Map"),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isIsomorphic(string s, string t) {\n        // m1 is used to map s[i] to t[i]\n        // m2 is used to map t[i] to s[i]\n        // example 1:\n        // m1['e'] --\x3e 'a'\n        // m1['g'] --\x3e 'd'\n        // m2['a'] --\x3e 'e'\n        // m2['d'] --\x3e 'g'\n        unordered_map<char, char> m1, m2;\n        for (int i = 0; i < s.size(); i++) {\n            // if s[i] isn't in m1 and t[i] isn't in m2\n            if (!m1.count(s[i]) && !m2.count(t[i])) {\n                // then we can map s[i] to t[i]\n                m1[s[i]] = t[i];\n                // and t[i] to s[i]\n                m2[t[i]] = s[i];\n            } else {\n                // if they are they are isomorphic,\n                // m1[s[i]] should map to t[i], and m2[t[i]] should map to s[i]\n                // we return false here if this condition is not satisfied\n                if (m1[s[i]] != t[i] || m2[t[i]] != s[i]) {\n                    return false;\n                }\n            }\n        }\n        // they are isomorphic\n        return true;\n    }\n};\n"))),(0,a.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(h,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean isIsomorphic(String s, String t) {\n        // ASCII char range, partitioning first half for s and 2nd half for t.\n        // Partition can be done by ascii + 128 (range) for the 2nd half. \n        int[] table = new int[256];\n        for (int i = 0; i < s.length(); i++) {\n            // If the char count from s & t is not match, then return false\n            if (table[s.charAt(i)] != table[t.charAt(i) + 128]) {\n                return false;\n            }\n            // Char similarity found (non matching char, but can help to transform to other char) \n            // so just keeping the index reference\n            table[s.charAt(i)] = table[t.charAt(i) + 128] = i + 1;\n        }\n        return true;\n    }\n}\n"))),(0,a.kt)(u,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)(h,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def isIsomorphic(self, s: str, t: str) -> bool:\n        map1 = {}\n        map2 = {}\n        for i in range(len(s)):\n            if s[i] in map1 and map1[s[i]] != t[i]:\n                return False\n            if t[i] in map2 and map2[t[i]] != s[i]:\n                return False\n            map1[s[i]] = t[i]\n            map2[t[i]] = s[i]\n        return True \n")))))}f.isMDXComponent=!0}}]);