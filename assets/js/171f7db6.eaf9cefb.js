"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[85023],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=o(n),h=r,c=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(c,s(s({ref:t},p),{},{components:n})):a.createElement(c,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,s[1]=m;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56213:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a,r=n(87462),i=n(63366),s=(n(67294),n(3905)),m=["components"],l={description:"Authors: @heiheihang, @wingkwong | https://leetcode.com/problems/smallest-value-of-the-rearranged-number/"},o="2165 - Smallest Value of the Rearranged Number (Medium)",p={unversionedId:"2100-2199/smallest-value-of-the-rearranged-number-medium",id:"2100-2199/smallest-value-of-the-rearranged-number-medium",title:"2165 - Smallest Value of the Rearranged Number (Medium)",description:"Authors: @heiheihang, @wingkwong | https://leetcode.com/problems/smallest-value-of-the-rearranged-number/",source:"@site/solutions/2100-2199/2165-smallest-value-of-the-rearranged-number-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/smallest-value-of-the-rearranged-number-medium",permalink:"/solutions/2100-2199/smallest-value-of-the-rearranged-number-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2165-smallest-value-of-the-rearranged-number-medium.md",tags:[],version:"current",sidebarPosition:2165,frontMatter:{description:"Authors: @heiheihang, @wingkwong | https://leetcode.com/problems/smallest-value-of-the-rearranged-number/"},sidebar:"tutorialSidebar",previous:{title:"2164 - Sort Even and Odd Indices Independently (Easy)",permalink:"/solutions/2100-2199/sort-even-and-odd-indices-independently-easy"},next:{title:"2166 - Design Bitset (Medium)",permalink:"/solutions/2100-2199/design-bitset-medium"}},u={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Conditional",id:"approach-1-conditional",level:2},{value:"Getting the Digits from a Number",id:"getting-the-digits-from-a-number",level:4},{value:"Building Number from Digits",id:"building-number-from-digits",level:4},{value:"Approach 2: Sort and Swap",id:"approach-2-sort-and-swap",level:2}],h=(a="SolutionAuthor",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),c={toc:d};function k(e){var t=e.components,n=(0,i.Z)(e,m);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2165---smallest-value-of-the-rearranged-number-medium"},"2165 - Smallest Value of the Rearranged Number (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/smallest-value-of-the-rearranged-number/"},"https://leetcode.com/problems/smallest-value-of-the-rearranged-number/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given an integer ",(0,s.kt)("inlineCode",{parentName:"p"},"num.")," ",(0,s.kt)("strong",{parentName:"p"},"Rearrange")," the digits of ",(0,s.kt)("inlineCode",{parentName:"p"},"num")," such that its value is ",(0,s.kt)("strong",{parentName:"p"},"minimized")," and it does not contain ",(0,s.kt)("strong",{parentName:"p"},"any")," leading zeros."),(0,s.kt)("p",null,"Return ",(0,s.kt)("em",{parentName:"p"},"the rearranged number with minimal value"),"."),(0,s.kt)("p",null,"Note that the sign of the number does not change after rearranging the digits."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: num = 310\nOutput: 103\nExplanation: The possible arrangements for the digits of 310 are 013, 031, 103, 130, 301, 310. \nThe arrangement with the smallest value that does not contain any leading zeros is 103.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: num = -7605\nOutput: -7650\nExplanation: Some possible arrangements for the digits of -7605 are -7650, -6705, -5076, -0567.\nThe arrangement with the smallest value that does not contain any leading zeros is -7650.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-10^15 <= num <= 10^15"))),(0,s.kt)("h2",{id:"approach-1-conditional"},"Approach 1: Conditional"),(0,s.kt)("p",null,"There are two cases in this problem:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"num")," is positive: we need to rearrange the digits such that they are ",(0,s.kt)("strong",{parentName:"li"},"minimized")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"num")," is negative: we need to rearrange the digits such that they are ",(0,s.kt)("strong",{parentName:"li"},"maximized"))),(0,s.kt)("p",null,"There are some common tools that you will need for this problem:"),(0,s.kt)("h4",{id:"getting-the-digits-from-a-number"},"Getting the Digits from a Number"),(0,s.kt)("p",null,"To get the digits from a number, we need to iterate the number with ",(0,s.kt)("inlineCode",{parentName:"p"},"%10")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"//10")," every time to get the last digit of the number."),(0,s.kt)("p",null,"For example, to get the digits of ",(0,s.kt)("inlineCode",{parentName:"p"},"6403"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Last digit : ",(0,s.kt)("inlineCode",{parentName:"li"},"6403 % 10 = 3")," and we need to remove the last digit by ",(0,s.kt)("inlineCode",{parentName:"li"},"6403 // 10")," now it becomes 640"),(0,s.kt)("li",{parentName:"ul"},"Last digit: ",(0,s.kt)("inlineCode",{parentName:"li"},"640 % 10 = 0")," and we need to remove the last digit by ",(0,s.kt)("inlineCode",{parentName:"li"},"640 // 10")," now it becomes 64"),(0,s.kt)("li",{parentName:"ul"},"Last digit: ",(0,s.kt)("inlineCode",{parentName:"li"},"64 % 10 = 4")," and we need to remove the last digit by ",(0,s.kt)("inlineCode",{parentName:"li"},"64 // 10")," now it becomes 6"),(0,s.kt)("li",{parentName:"ul"},"Last digit: ",(0,s.kt)("inlineCode",{parentName:"li"},"6 % 10 = 6")," and we need to remove the last digit by ",(0,s.kt)("inlineCode",{parentName:"li"},"6 // 10")," now it becomes 0"),(0,s.kt)("li",{parentName:"ul"},"We stop when ",(0,s.kt)("inlineCode",{parentName:"li"},"num")," becomes 0")),(0,s.kt)("h4",{id:"building-number-from-digits"},"Building Number from Digits"),(0,s.kt)("p",null,"To build a number from digits (",(0,s.kt)("inlineCode",{parentName:"p"},"digits = [4,2,5,6]"),", and we want 4256 as a result), we need to accumulate the number in the following way"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"number = number * 10 + new_digit\n")),(0,s.kt)("p",null,"Let's look at the example with ",(0,s.kt)("inlineCode",{parentName:"p"},"digits = [4,2,5,9]"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result = 0")," initially, we perform ",(0,s.kt)("inlineCode",{parentName:"li"},"result = result * 10 + digits[0]"),", we get ",(0,s.kt)("inlineCode",{parentName:"li"},"result = 0 * 10 + 4"),", which results in ",(0,s.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result = 4")," , we perform ",(0,s.kt)("inlineCode",{parentName:"li"},"result = result * 10 + digits[1]"),", we get ",(0,s.kt)("inlineCode",{parentName:"li"},"result = 4*10 + 2"),", which results in ",(0,s.kt)("inlineCode",{parentName:"li"},"42")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result = 42"),", we perform ",(0,s.kt)("inlineCode",{parentName:"li"},"result = result * 10 + digits[2]"),", we get ",(0,s.kt)("inlineCode",{parentName:"li"},"result = 42 * 10 + 5"),", which results in 425"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result = 425,")," we perform ",(0,s.kt)("inlineCode",{parentName:"li"},"result = result * 10 + digits[3]"),", we get ",(0,s.kt)("inlineCode",{parentName:"li"},"result = 425 * 10 + 9"),", which results in 4259.")),(0,s.kt)("p",null,"We first need to get the digits from a number. Then we need to sort them in order."),(0,s.kt)("p",null,"For the ",(0,s.kt)("em",{parentName:"p"},"negative")," case, we need to ",(0,s.kt)("strong",{parentName:"p"},"maximize")," the result, so we reverse the order of the digits. To ",(0,s.kt)("strong",{parentName:"p"},"maximize")," the number, we put the zeros at the end, so we need to perform ",(0,s.kt)("inlineCode",{parentName:"p"},"result = result * 10 ** number_of_zeros")," ",(0,s.kt)("strong",{parentName:"p"},"after")," merging the digits."),(0,s.kt)("p",null,"For the ",(0,s.kt)("em",{parentName:"p"},"positive")," case, we need to ",(0,s.kt)("strong",{parentName:"p"},"minimize")," the result. We need to put the zeros after the first digit to ",(0,s.kt)("strong",{parentName:"p"},"minimize")," the result, so we perform ",(0,s.kt)("inlineCode",{parentName:"p"},"result = digits[0] * 10 ** number_of_zeros")," ",(0,s.kt)("strong",{parentName:"p"},"before")," looking at other digits."),(0,s.kt)("p",null,"And we do not forget to multiply -1 in the negative case before returning."),(0,s.kt)(h,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},' def smallestNumber(self, num: int) -> int:\n        \n        #return 0 if input is 0\n        if(num == 0):\n            return 0\n        \n        #we need to check the sign of num\n        #different approach to handle positive and negative numbers\n        negative = False\n        if(num < 0):\n            negative = True\n            num *= -1\n        \n        #we need to store the digits\n        digits = []\n        \n        #we need to store the number of zeros\n        number_of_zeros = 0\n        \n        #we iterate the digits of num\n        while(num > 0):\n            tmp = num % 10\n            \n            #if it is zero, we store it separately\n            if(tmp == 0):\n                number_of_zeros += 1\n            else:\n                digits.append(tmp)\n            \n            num //= 10\n\n        #we need to get the order of digits by sorting    \n        digits.sort()\n        \n        #handle positive case and negative case separately\n        #negative: maximize the number\n        #positive: minimize the number\n        \n        if(negative):\n            \n            #we need to start from the largest number to maximize the negative case\n            digits.reverse()\n            \n            #we store the result here\n            result = 0\n            \n            # build the number with digits\n            for i in range(len(digits)):\n                \n                #declare new_digit\n                new_digit = digits[i]\n                \n                #push the digits left, new space for new digit\n                result = result * 10\n                \n                #"slide in" the new digit\n                result = result + new_digit\n            \n            #append the zeros at the end\n            result *= 10**number_of_zeros\n            \n            #make it negative \n            result *= -1\n            \n            #return result\n            return result\n        else:\n            \n            #zeros should be placed after the first non-zero digit\n            result = digits[0] * 10**number_of_zeros\n            \n            #similar to above, but we skip the first digit as we have used it already\n            for i in range(1,len(digits)):\n                result = result * 10 + digits[i]\n                \n            #return result\n            return result\n')),(0,s.kt)("h2",{id:"approach-2-sort-and-swap"},"Approach 2: Sort and Swap"),(0,s.kt)("p",null,"If ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"num")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"))))),"is negative, we sort it in descending order to make it greatest value."),(0,s.kt)("p",null,"If ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"num")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," is positive, we sort it in ascending order to make it smallest value. However, it may contain leading zeros. For example,  ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"310")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"310")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"310")))))," would become ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"013")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"013")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"013"))))),". In this case, we simply swap the first digit (i.e. zero) with the first non-zero digit to have the minimal value. In this case, it would be ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"103")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"103")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"103"))))),"."),(0,s.kt)("p",null,"To implement it, we first convert ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"num")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," from long long to string. Sort the string and swap the first digit with the first non-zero digit. If there is no leading zero, it stays as-is. At the end, we convert the string back to long long type and add minus sign if ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"num")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," is negative."),(0,s.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    long long smallestNumber(long long num) {\n        int pos = num >= 0;\n        string s = to_string(abs(num));\n        sort(s.begin(), s.end(), [&](const int x, const int y){\n            return pos ? x < y : x > y;\n        });\n        if (s.size() > 1) swap(s[0], s[s.find_first_not_of('0')]);\n        return pos ? stoll(s) : -stoll(s);\n    }\n};\n")))}k.isMDXComponent=!0}}]);