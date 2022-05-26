(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{578:function(t,s,a){"use strict";a.r(s);var e=a(22),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),a("h2",{attrs:{id:"基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[t._v("#")]),t._v(" 基本语法")]),t._v(" "),a("p",[a("code",[t._v("Promise")]),t._v(" 对象的构造器（constructor)语法：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" promise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// executor ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("传递给 "),a("code",[t._v("new Promise")]),t._v(" 的函数被称为 "),a("strong",[t._v("executor")]),t._v(",它的参数 "),a("code",[t._v("resolve")]),t._v(" 和 "),a("code",[t._v("reject")]),t._v(" 是由 "),a("code",[t._v("JavaScript")]),t._v(" 自身提供的回调。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("resolve(value)")]),t._v(" — 如果任务成功完成并带有结果 "),a("code",[t._v("value")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("reject(error)")]),t._v(" — 如果出现了 error，"),a("code",[t._v("error")]),t._v("即为 error 对象。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),a("p",[t._v("executor 会自动运行并尝试执行一项工作。尝试结束后，如果成功则调用 "),a("code",[t._v("resolve")]),t._v("，如果出现 error 则调用 "),a("code",[t._v("reject")])]),t._v(" "),a("p",[t._v("由 "),a("code",[t._v("new Promise")]),t._v(" 构造器返回的 "),a("code",[t._v("promise")]),t._v(" 对象具有以下内部属性：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("state")]),t._v(" — 最初是"),a("code",[t._v('"pending"')]),t._v("，然后在 "),a("code",[t._v("resolve")]),t._v(" 被调用时变为 "),a("code",[t._v('"fulfilled"')]),t._v("，或者在 "),a("code",[t._v("reject")]),t._v(" 被调用时变为 "),a("code",[t._v('"rejected"')]),t._v("。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("result")]),t._v(" — 最初是 "),a("code",[t._v("undefined")]),t._v("，然后在 "),a("code",[t._v("resolve(value)")]),t._v(" 被调用时变为 "),a("code",[t._v("value")]),t._v("，或者在 "),a("code",[t._v("reject(error)")]),t._v(" 被调用时变为 "),a("code",[t._v("error")]),t._v("。")])])])]),t._v(" "),a("p",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"246",viewBox:"0 0 512 246"}},[a("defs",[a("style",[t._v("@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}")])]),a("g",{attrs:{id:"promise",fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"}},[a("g",{attrs:{id:"promise-resolve-reject.svg"}},[a("path",{attrs:{id:"Rectangle-1",fill:"#FFF9EB",stroke:"#E8C48E","stroke-width":"2",d:"M1 91h182v70H1z"}}),a("text",{attrs:{id:"new-Promise(executor",fill:"#707175","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal"}},[a("tspan",{attrs:{x:"2",y:"82"}},[t._v("new Promise(executor)")])]),a("text",{attrs:{id:'state:-"pending"-res',fill:"#8A704D","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal"}},[a("tspan",{attrs:{x:"13",y:"115.432"}},[t._v('state: "pending"')]),t._v(" "),a("tspan",{attrs:{x:"13",y:"135.432"}},[t._v("result: undefined")])]),a("path",{attrs:{id:"Line",fill:"#EE6B47","fill-rule":"nonzero",d:"M196.51 134.673l.908.419 103.284 47.574 2.51-5.45L313 189.433l-15.644.5 2.509-5.45-103.283-47.574-.909-.418.837-1.817z"}}),a("path",{attrs:{id:"Line-Copy",fill:"#EE6B47","fill-rule":"nonzero",d:"M297.38 56L313 57l-10.173 11.896-2.335-5.528-103.103 43.553-.921.39-.778-1.843.92-.39 103.104-43.552-2.334-5.527z"}}),a("text",{attrs:{id:"resolve(value)",fill:"#EE6B47","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal",transform:"rotate(-23 244.39 72.63)"}},[a("tspan",{attrs:{x:"185.59",y:"77.13"}},[t._v("resolve(value)")])]),a("text",{attrs:{id:"reject(error)",fill:"#EE6B47","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal",transform:"rotate(25 251.634 150.64)"}},[a("tspan",{attrs:{x:"197.034",y:"155.141"}},[t._v("reject(error)")])]),a("path",{attrs:{id:"Rectangle-1-Copy",fill:"#FFF9EB",stroke:"#7ED321","stroke-width":"2",d:"M323 10h182v64H323z"}}),a("text",{attrs:{id:'state:-"fulfilled"-r',fill:"#417505","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal"}},[a("tspan",{attrs:{x:"338",y:"34.432"}},[t._v('state: "fulfilled"')]),t._v(" "),a("tspan",{attrs:{x:"338",y:"54.432"}},[t._v("result: value")])]),a("path",{attrs:{id:"Rectangle-1-Copy-3",fill:"#FCDFE1",stroke:"#C74A6C","stroke-width":"2",d:"M323 177h182v64H323z"}}),a("text",{attrs:{id:'state:-"rejected"-re',fill:"#727155","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal"}},[a("tspan",{attrs:{x:"338",y:"201.432"}},[t._v('state: "rejected"')]),t._v(" "),a("tspan",{attrs:{x:"338",y:"221.432"}},[t._v("result: error")])])])])])]),t._v(" "),a("h2",{attrs:{id:"promise链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise链"}},[t._v("#")]),t._v(" Promise链")]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v(".then")]),t._v("（或 "),a("code",[t._v("catch/finally")]),t._v(" 都可以）处理程序（handler）返回一个 promise，那么链的其余部分将会等待，直到它状态变为 settled。当它被 settled 后，其 result（或 error）将被进一步传递下去")]),t._v(" "),a("p",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"659",height:"350",viewBox:"0 0 659 350"}},[a("defs",[a("style",[t._v("@import url(https://fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic%7CPT+Mono);@font-face{font-family:'PT Mono';font-weight:700;font-style:normal;src:local('PT MonoBold'),url(/font/PTMonoBold.woff2) format('woff2'),url(/font/PTMonoBold.woff) format('woff'),url(/font/PTMonoBold.ttf) format('truetype')}")])]),a("g",{attrs:{id:"promise",fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"}},[a("g",{attrs:{id:"promise-handler-variants.svg"}},[a("path",{attrs:{id:"Line-Copy",fill:"#EE6B47","fill-rule":"nonzero",d:"M488.231 187.396l1.187.918 38.367 29.68 4.895-6.328 9.215 19.14-20.84-4.112 4.894-6.327-38.367-29.68-1.186-.918 1.835-2.373z"}}),a("path",{attrs:{id:"Line-Copy-3",fill:"#EE6B47","fill-rule":"nonzero",d:"M345 188v28h8l-9.5 19-9.5-19h8v-28h3z"}}),a("path",{attrs:{id:"Line-Copy-2",fill:"#EE6B47","fill-rule":"nonzero",d:"M212.769 187.396l1.835 2.373-1.186.917-38.368 29.681 4.895 6.327-20.84 4.112 9.215-19.14 4.894 6.328 38.368-29.68 1.187-.918z"}}),a("text",{attrs:{id:"return-value",fill:"#8A704D","font-family":"PTMono-Regular, PT Mono","font-size":"13","font-weight":"normal"}},[a("tspan",{attrs:{x:"128",y:"173"}},[t._v("return value")])]),a("text",{attrs:{id:"return-promise",fill:"#8A704D","font-family":"PTMono-Regular, PT Mono","font-size":"13","font-weight":"normal"}},[a("tspan",{attrs:{x:"447",y:"173"}},[t._v("return promise")])]),a("text",{attrs:{id:"throw-error",fill:"#8A704D","font-family":"PTMono-Regular, PT Mono","font-size":"13","font-weight":"normal"}},[a("tspan",{attrs:{x:"301",y:"173"}},[t._v("throw error")])]),a("path",{attrs:{id:"Rectangle-1-Copy",fill:"#FFF9EB",stroke:"#7ED321","stroke-width":"2",d:"M20 264h178v64H20z"}}),a("text",{attrs:{id:'state:-"fulfilled"-r',fill:"#417505","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal"}},[a("tspan",{attrs:{x:"35",y:"288"}},[t._v('state: "fulfilled"')]),t._v(" "),a("tspan",{attrs:{x:"35",y:"308"}},[t._v("result: value")])]),a("path",{attrs:{id:"Rectangle-1-Copy-3",fill:"#FCDFE1",stroke:"#C74A6C","stroke-width":"2",d:"M255 264h178v64H255z"}}),a("text",{attrs:{id:'state:-"rejected"-re',fill:"#727155","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal"}},[a("tspan",{attrs:{x:"268",y:"288"}},[t._v('state: "rejected"')]),t._v(" "),a("tspan",{attrs:{x:"268",y:"308"}},[t._v("result: error")])]),a("g",{attrs:{id:"noun_88566_cc-copy",fill:"#9B9B9B",transform:"translate(562 258)"}},[a("path",{attrs:{id:"Shape",d:"M22.79 35.592c0-.623-.016-1.362-.124-2.127a8.177 8.177 0 00-.54-1.99 8.223 8.223 0 00-.51-1.017c-.281-.479-1.7-2.14-5.061-5.927-.305-.343-.522-.588-.602-.68l-.251-.29a9.726 9.726 0 01-.324-.394 5.058 5.058 0 01-.092-.127 2.775 2.775 0 01-.253-.413 1.28 1.28 0 01-.126-.365 3.533 3.533 0 01-.013-.478v-.055c.003-.193.007-.363.037-.491a1.13 1.13 0 01.159-.339c.112-.176.234-.362.363-.524.124-.155.255-.306.395-.466l.105-.12c.08-.093.297-.337.6-.679 3.362-3.788 4.781-5.45 5.063-5.93.201-.342.373-.684.51-1.017.262-.632.444-1.301.54-1.99.108-.765.123-1.505.124-2.127.002-1.015.001-2.61 0-3.735.026-.11.043-.223.043-.339 0-2.451-5.837-3.774-11.328-3.774C6.013.198.176 1.52.176 3.972c0 .113.017.223.041.331 0 1.126-.002 2.726 0 3.743.001.585.016 1.356.124 2.127.097.69.279 1.359.54 1.99.138.334.31.676.51 1.017.282.48 1.702 2.142 5.064 5.93.303.342.52.586.6.678l.1.115c.141.162.275.315.4.472.128.161.25.347.363.524.086.135.136.242.159.339.03.128.034.291.037.49v.054c.003.177.005.344-.013.48a1.27 1.27 0 01-.126.364c-.057.12-.135.247-.253.414a5.104 5.104 0 01-.248.322c-.055.067-.112.133-.167.197l-.168.19c-5.322 5.985-5.643 6.53-5.748 6.71-.2.34-.372.682-.51 1.016-.261.631-.443 1.3-.54 1.99-.108.771-.123 1.542-.124 2.127-.002 1.121 0 2.953 0 4.074 0 2.881 5.851 4.194 11.288 4.194 5.436 0 11.287-1.313 11.287-4.194l-.001-.556v-3.518zm-1.534 4.073v.03c-.084.768-3.4 2.487-9.751 2.487-6.435 0-9.753-1.764-9.753-2.517-.001-1.12-.003-2.95 0-4.07 0-.559.014-1.22.106-1.876.075-.538.217-1.06.42-1.552.108-.26.244-.53.403-.8.09-.148.755-1.047 5.558-6.45l.183-.205a11.968 11.968 0 00.39-.477l.122-.166c.11-.156.272-.394.403-.67a2.98 2.98 0 00.282-.898c.035-.267.032-.52.03-.744l-.002-.052a3.98 3.98 0 00-.084-.883 2.832 2.832 0 00-.387-.882 7.688 7.688 0 00-.465-.667c-.147-.185-.3-.36-.446-.527l-.097-.112c-.082-.095-.303-.344-.612-.692-3.018-3.4-4.658-5.309-4.874-5.67a6.52 6.52 0 01-.404-.801 6.383 6.383 0 01-.42-1.552c-.092-.657-.106-1.317-.107-1.877v-2.08c2.105 1.169 6.008 1.784 9.753 1.784 3.744 0 7.647-.615 9.753-1.783l-.001 2.08c-.001.56-.015 1.22-.107 1.876a6.372 6.372 0 01-.42 1.552c-.108.26-.243.529-.403.801-.217.361-1.857 2.27-4.875 5.67-.31.348-.53.597-.612.692l-.102.117c-.145.166-.295.339-.442.522a7.74 7.74 0 00-.464.667c-.192.3-.319.589-.387.883a3.969 3.969 0 00-.085.883v.054c-.003.222-.007.474.028.74.049.37.177.674.283.898.13.277.292.515.403.672a7.37 7.37 0 00.511.641l.255.293c.082.095.304.344.614.694 3.017 3.4 4.656 5.306 4.872 5.667.16.273.296.543.404.801.203.493.345 1.015.42 1.553.092.656.105 1.316.107 1.876.002 1.12 0 2.95 0 4.07z"}}),a("path",{attrs:{id:"Shape",d:"M19.628 36.874a9.407 9.407 0 00-.207-.248A9.837 9.837 0 0018.4 35.57a7.998 7.998 0 00-1.168-.828 15.982 15.982 0 00-2.672-1.24c-.227-.082-.453-.163-.678-.25-.24-.093-.484-.177-.712-.301a2.65 2.65 0 01-.508-.36 3.594 3.594 0 01-.696-.877c-.204-.355-.399-.764-.462-1.18-.064.417-.259.825-.463 1.18-.19.33-.421.628-.696.877-.155.14-.327.261-.507.36-.228.124-.473.208-.712.3-.225.088-.452.17-.678.251a16.014 16.014 0 00-2.672 1.24 8 8 0 00-1.168.828c-.37.319-.7.683-1.021 1.057a9.445 9.445 0 00-.434.545c-.085.116-.163.24-.218.377 0 1.508 3.834 2.731 8.564 2.731s8.563-1.223 8.563-2.731h.01a1.704 1.704 0 00-.217-.377c-.074-.1-.15-.2-.227-.297zM10.492 18.391c.11.105.214.234.308.385.167.266.308.585.423.937a5.7 5.7 0 01.28 1.262 5.7 5.7 0 01.281-1.262c.115-.352.256-.671.423-.937.094-.15.198-.28.308-.385.138-.133.286-.223.432-.322.136-.093.274-.18.411-.268.28-.178.557-.372.829-.596.269-.223.535-.46.793-.729.248-.258.487-.548.709-.885.224-.34.424-.73.62-1.13a12.019 12.019 0 00.262-.582c.052-.124.1-.257.133-.403 0-1.612-2.327-2.919-5.197-2.919s-5.198 1.307-5.198 2.919h-.006c.033.147.08.279.132.403a9.943 9.943 0 00.263.582c.195.4.396.79.62 1.13.221.337.46.627.709.885.258.269.524.507.793.729.271.224.548.418.829.596.137.088.274.175.41.268.147.1.295.188.433.322z"}})]),a("text",{attrs:{id:"...with-the-result-o",fill:"#8A704D","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal"}},[a("tspan",{attrs:{x:"494",y:"323"}},[t._v("...with the result")]),t._v(" "),a("tspan",{attrs:{x:"494",y:"338"}},[t._v("of the new promise...")])]),a("path",{attrs:{id:"Rectangle-1-Copy-2",fill:"#FFF9EB",stroke:"#E8C48E","stroke-width":"2",d:"M248 34h191v64H248z"}}),a("text",{attrs:{id:'state:-"pending"-res',fill:"#8A704D","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal"}},[a("tspan",{attrs:{x:"272",y:"58"}},[t._v('state: "pending"')]),t._v(" "),a("tspan",{attrs:{x:"272",y:"78"}},[t._v("result: undefined")])]),a("text",{attrs:{id:"the-call-of-.then(ha",fill:"#8A704D","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal"}},[a("tspan",{attrs:{x:"125",y:"15"}},[t._v("the call of .then(handler) always returns a promise:")])]),a("text",{attrs:{id:"if-handler-ends-with",fill:"#EE6B47","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal"}},[a("tspan",{attrs:{x:"255",y:"132"}},[t._v("if handler ends with…")])]),a("text",{attrs:{id:"that-promise-settles",fill:"#EE6B47","font-family":"PTMono-Regular, PT Mono","font-size":"14","font-weight":"normal"}},[a("tspan",{attrs:{x:"234",y:"252"}},[t._v("that promise settles with:")])])])])])]),t._v(" "),a("h2",{attrs:{id:"使用-promise-进行错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-promise-进行错误处理"}},[t._v("#")]),t._v(" 使用 promise 进行错误处理")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v(".catch")]),t._v(" 处理 promise 中的各种 error：在 reject() 调用中的，或者在处理程序（handler）中抛出的（thrown）error。")])]),t._v(" "),a("li",[a("p",[t._v("我们应该将 "),a("code",[t._v(".catch")]),t._v(" 准确地放到我们想要处理 error，并知道如何处理这些 error 的地方。处理程序应该分析 error（可以自定义 error 类来帮助分析）并再次抛出未知的 error（可能它们是编程错误）。")])]),t._v(" "),a("li",[a("p",[t._v("如果没有办法从 error 中恢复的话，不使用 "),a("code",[t._v(".catch")]),t._v(" 也可以。")])])]),t._v(" "),a("p",[t._v("在任何情况下我们都应该有 unhandledrejection 事件处理程序（用于浏览器，以及其他环境的模拟），以跟踪未处理的 error 并告知用户（可能还有我们的服务器）有关信息，以使我们的应用程序永远不会“死掉”")])]),t._v(" "),a("h2",{attrs:{id:"promise-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-api"}},[t._v("#")]),t._v(" Promise API")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),a("p",[t._v("Promise 类有 5 种静态方法：")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("Promise.all(promises)")]),t._v(" —— 等待所有 promise 都 resolve 时，返回存放它们结果的数组。如果给定的任意一个 promise 为 reject，那么它就会变成 "),a("code",[t._v("Promise.all")]),t._v(" 的 error，所有其他 promise 的结果都会被忽略。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Promise.allSettled(promises)")]),t._v("（ES2020 新增方法）—— 等待所有 promise 都 settle 时，并以包含以下内容的对象数组的形式返回它们的结果：")])])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("status")]),t._v(": "),a("code",[t._v('"fulfilled"')]),t._v(" 或 "),a("code",[t._v('"rejected"')])]),t._v(" "),a("li",[a("code",[t._v("value")]),t._v("（如果 fulfilled）或 "),a("code",[t._v("reason")]),t._v("（如果 rejected）。")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[a("code",[t._v("Promise.race(promises)")]),t._v(" —— 等待第一个 settle 的 promise，并将其 result/error 作为结果。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Promise.resolve(value)")]),t._v(" —— 使用给定 value 创建一个 resolved 的 promise。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Promise.reject(error)")]),t._v(" —— 使用给定 error 创建一个 rejected 的 promise。\n这五个方法中，Promise.all 可能是在实战中使用最多的")])])])]),t._v(" "),a("h2",{attrs:{id:"微任务队列-microtask-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微任务队列-microtask-queue"}},[t._v("#")]),t._v(" 微任务队列（Microtask queue）")]),t._v(" "),a("p",[t._v("异步任务需要适当的管理。为此，ECMA 标准规定了一个内部队列 "),a("code",[t._v("PromiseJobs")]),t._v("，通常被称为“微任务队列（microtask queue）”（ES8 术语）。")]),t._v(" "),a("p",[t._v("如 规范 中所述：")]),t._v(" "),a("ul",[a("li",[t._v("队列（queue）是先进先出的：首先进入队列的任务会首先运行。")]),t._v(" "),a("li",[t._v("只有在 JavaScript 引擎中没有其它任务在运行时，才开始执行任务队列中的任务。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),a("p",[t._v("Promise 处理始终是异步的，因为所有 promise 行为都会通过内部的 “promise jobs” 队列，也被称为“微任务队列”（ES8 术语）。")]),t._v(" "),a("p",[t._v("因此，.then/catch/finally 处理程序（handler）总是在当前代码完成后才会被调用。")]),t._v(" "),a("p",[t._v("如果我们需要确保一段代码在 .then/catch/finally 之后被执行，我们可以将它添加到链式调用的 .then 中。")])]),t._v(" "),a("h2",{attrs:{id:"async-await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[t._v("#")]),t._v(" Async/await")]),t._v(" "),a("h3",{attrs:{id:"async-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-function"}},[t._v("#")]),t._v(" async function")]),t._v(" "),a("p",[t._v("语法：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("在函数前面的 “async” 这个单词表达了一个简单的事情：即这个函数总是返回一个 promise。其他值将自动被包装在一个 resolved 的 promise 中。")])]),t._v(" "),a("h3",{attrs:{id:"await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#await"}},[t._v("#")]),t._v(" await")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" promise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"done!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// await 只在 async 函数内工作")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等待，直到 promise resolve ")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "done!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),a("p",[t._v("函数前面的关键字 "),a("code",[t._v("async")]),t._v(" 有两个作用：")]),t._v(" "),a("ol",[a("li",[t._v("让这个函数总是返回一个 promise。")]),t._v(" "),a("li",[t._v("允许在该函数内使用 "),a("code",[t._v("await。")])])]),t._v(" "),a("p",[t._v("Promise 前的关键字 await 使 JavaScript 引擎等待该 promise settle，然后：")]),t._v(" "),a("ol",[a("li",[t._v("如果有 error，就会抛出异常 — 就像那里调用了 throw error 一样。")]),t._v(" "),a("li",[t._v("否则，就返回结果。\n这两个关键字一起提供了一个很好的用来编写异步代码的框架，这种代码易于阅读也易于编写。")])]),t._v(" "),a("p",[t._v("有了 "),a("code",[t._v("async/await")]),t._v(" 之后，我们就几乎不需要使用 "),a("code",[t._v("promise.then/catch")]),t._v("，但是不要忘了它们是基于 promise 的，因为有些时候（例如在最外层作用域）我们不得不使用这些方法。并且，当我们需要同时等待需要任务时，"),a("code",[t._v("Promise.all")]),t._v(" 是很好用的。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://no-such-url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError: failed to fetch")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);