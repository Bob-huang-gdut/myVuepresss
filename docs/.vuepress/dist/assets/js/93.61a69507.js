(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{322:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),a("p",[t._v("提升页面性能优化的方法有哪些：")]),t._m(4),t._m(5),t._m(6),t._m(7),a("p",[t._v("有的人可能会回答local storage 和session storage，其实不是这个。浏览器缓存和存储不是一回事。")]),t._m(8),a("p",[t._v("浏览器第一次打开页面时，缓存是起不了作用的。CDN这一条，一定要说出来。")]),t._m(9),t._m(10),t._m(11),t._m(12),a("p",[t._v("异步加载的方式：（这里不说框架，只说原理）")]),t._m(13),t._m(14),t._m(15),a("p",[t._v("参考链接：")]),t._m(16),t._m(17),a("p",[t._v("通过异步的方式加载defer1.js文件：")]),t._m(18),t._m(19),t._m(20),a("p",[t._v("通过异步的方式加载async1.js文件：")]),t._m(21),t._m(22),t._m(23),a("p",[t._v("代码举例：")]),t._m(24),a("p",[t._v("上方打印的结果是：")]),t._m(25),a("p",[t._v("因为defer的加载是有顺序的，所以两个引入defer文件按顺序执行。如果把引入的文件改为async的方式加载，打印的结果可能是：")]),t._m(26),a("p",[t._v("参考链接：")]),t._m(27),t._m(28),t._m(29),a("p",[t._v("缓存分为：")]),t._m(30),t._m(31),t._m(32),t._m(33),a("p",[t._v("浏览器第一次请求一个资源时，服务器在返回该资源的同时，会把上面这两个属性放在response header中。比如：")]),t._m(34),t._m(35),a("p",[t._v("下面讲一下二者的区别。")]),t._m(36),a("p",[t._v("是较老的强缓存管理 response header。浏览器再次请求这个资源时，先从缓存中寻找，找到这个资源后，拿出它的Expires跟当前的请求时间比较，如果请求时间在Expires的时间之前，就能命中缓存，否则就不行。")]),a("p",[t._v("如果缓存没有命中，浏览器直接从服务器请求资源时，Expires Header在重新请求的时候会被更新。")]),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),a("p",[t._v("当浏览器对某个资源的请求没有命中强缓存（也就是说超出时间了），就会发一个请求到服务器，验证协商缓存是否命中。")]),a("p",[t._v("协商缓存是利用的是两对Header：")]),t._m(43),a("p",[t._v("ETag（Entity Tag）：被请求变量的实体值”。")]),t._m(44),t._m(45),t._m(46),t._m(47),t._m(48),t._m(49),t._m(50),a("p",[t._v("（4）浏览器如果收到304的响应，就会从缓存中加载资源。")]),t._m(51),t._m(52),t._m(53),a("p",[t._v("这一对header就无法解决这种情况。于是，下面这一对header出场了。")]),t._m(54),t._m(55),t._m(56),t._m(57),t._m(58),t._m(59),t._m(60),a("p",[t._v("（4）浏览器如果收到304的响应，就会从缓存中加载资源。")]),a("p",[t._v("提示：如果面试官问你：与浏览器缓存相关的http header有哪些？你能写出来吗？这是一个亮点。")]),a("p",[t._v("参考链接：")]),t._m(61),t._m(62),a("p",[t._v("怎么最快地让用户请求资源。一方面是让资源在传输的过程中变小，另外就是CDN。")]),a("p",[t._v("要注意，浏览器第一次打开页面的时候，浏览器缓存是起不了作任何用的，使用CDN，效果就很明显。")]),t._m(63),a("p",[t._v("通过 DNS 预解析来告诉浏览器未来我们可能从某个特定的 URL 获取资源，当浏览器真正使用到该域中的某个资源时就可以尽快地完成 DNS 解析。")]),t._m(64),a("p",[t._v("你可以通过在服务器端发送 X-DNS-Prefetch-Control 报头。或是在文档中使用值为 http-equiv 的meta标签：")]),t._m(65),t._m(66),t._m(67),a("p",[t._v("如果我们将来可能从 smyhvae.com 获取图片或音频资源，那么可以在文档顶部的 ")]),a("head",[t._v(" 标签中加入以下内容："),a("p"),t._m(68),a("p",[t._v("当我们从该 URL 请求一个资源时，就不再需要等待 DNS 解析的过程。该技术对使用第三方资源特别有用。")]),a("p",[t._v("参考链接：")]),t._m(69),t._m(70),a("p",[t._v("想学习"),a("font",{attrs:{color:"#0000ff"}},[a("strong",[t._v("代码之外的技能")])]),t._v("？不妨关注我的微信公众号："),a("strong",[t._v("千古壹号")]),t._v("（id："),a("code",[t._v("qianguyihao")]),t._v("）。")],1),a("p",[t._v("扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：")]),t._m(71)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_01-页面性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-页面性能优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 01.页面性能优化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("本文最初发表于"),s("a",{attrs:{href:"https://www.cnblogs.com/smyhvae/p/8550195.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("博客园")]),this._v("，并在"),s("a",{attrs:{href:"https://github.com/qianguyihao/Web",target:"_blank",rel:"noopener noreferrer"}},[this._v("GitHub")]),this._v("上持续更新"),s("strong",[this._v("前端的系列文章")]),this._v("。欢迎在GitHub上关注我，一起入门和进阶前端。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("以下是正文。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("1、资源压缩合并，减少http请求")])]),s("li",[s("p",[this._v("2、"),s("strong",[this._v("非核心代码异步加载")]),this._v(" --\x3e 异步加载的方式 --\x3e 异步加载的区别")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果回答出"),s("code",[this._v("非核心代码异步加载")]),this._v("，就会层层深入。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("3、利用浏览器缓存  --\x3e 缓存的分类  --\x3e 缓存的原理")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("缓存")]),this._v("是所有性能优化的方式中最重要的一步，这个一定要答好。【重要】")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("4、使用CDN")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("5、DNS预解析")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一、资源压缩合并，减少http请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、资源压缩合并，减少http请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、资源压缩合并，减少http请求")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("合并图片（css sprites）、CSS和JS文件合并、CSS和JS文件压缩")])]),s("li",[s("p",[this._v("图片较多的页面也可以使用 lazyLoad 等技术进行优化。")])]),s("li",[s("p",[this._v("精灵图等")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二、非核心代码异步加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、非核心代码异步加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 二、非核心代码异步加载")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("动态脚本加载")])]),s("li",[s("p",[this._v("defer")])]),s("li",[s("p",[this._v("async")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"动态脚本加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态脚本加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 动态脚本加载")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用document.createElement创建一个script标签，即"),s("code",[this._v("document.createElement('script')")]),this._v("，然后把这个标签加载到body上面去。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/13cf23a90328",target:"_blank",rel:"noopener noreferrer"}},[this._v("javascript 异步加载")]),this._v("  动态脚本加载的那部分代码，看不太懂。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"defer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defer","aria-hidden":"true"}},[this._v("#")]),this._v(" defer")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./defer1.js"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("defer")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"async"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#async","aria-hidden":"true"}},[this._v("#")]),this._v(" async")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("HTmL5新增特性。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./async1.js"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("async")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"defer和async的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defer和async的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" defer和async的区别")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("defer：在HTML解析完之后才会执行。如果是多个，则按照加载的顺序依次执行。")])]),s("li",[s("p",[this._v("async：在加载完之后立即执行。如果是多个，执行顺序和加载顺序无关。")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("X-UA-Compatible"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ie=edge"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Document"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!--通过异步的方式引入两个外部的js文件--\x3e")]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./defer1.js"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("defer")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./defer2.js"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("defer")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'同步任务'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("同步任务\ndefer1\ndefer2\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("同步任务\nasync2\nasync1\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000006778717",target:"_blank",rel:"noopener noreferrer"}},[this._v("浅谈script标签的defer和async")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"三、利用浏览器缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、利用浏览器缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 三、利用浏览器缓存")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("缓存")]),this._v("：资源文件（比如图片）在"),s("strong",[this._v("本地的硬盘")]),this._v("里存有副本，浏览器下次请求的时候，可能直接从本地磁盘里读取，而不会重新请求图片的url。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("强缓存")])]),s("li",[s("p",[this._v("协商缓存")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"强缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 强缓存")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("强缓存")]),this._v("：不用请求服务器，直接使用本地的缓存。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("强缓存是利用 http 响应头中的**"),s("code",[this._v("Expires")]),s("strong",[this._v("或")]),s("code",[this._v("Cache-Control")]),this._v("**实现的。【重要】")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180310_2310.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("注意")]),this._v("：这两个response header属性可以只启用一个，也可以同时启用。当response header中，Expires和Cache-Control同时存在时，"),s("strong",[this._v("Cache-Control的优先级高于Expires")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("1、"),s("code",[this._v("Expires")])]),this._v("：服务器返回的"),s("strong",[this._v("绝对时间")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("缺点：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("由于"),s("code",[this._v("Expires")]),this._v("是服务器返回的一个绝对时间，存在的问题是：服务器的事件和客户端的事件可能不一致。在服务器时间与客户端时间相差较大时，缓存管理容易出现问题，比如随意修改客户端时间，就能影响缓存命中的结果。所以，在http1.1中，提出了一个新的response header，就是Cache-Control。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2、"),s("code",[this._v("Cache-Control")])]),this._v("：服务器返回的"),s("strong",[this._v("相对时间")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("http1.1中新增的 response header。浏览器第一次请求资源之后，在接下来的相对时间之内，都可以利用本地缓存。超出这个时间之后，则不能命中缓存。重新请求时，"),s("code",[this._v("Cache-Control")]),this._v("会被更新。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 协商缓存")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("协商缓存")]),this._v("：浏览器发现本地有资源的副本，但是不太确定要不要使用，于是去问问服务器。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("第一对："),a("code",[t._v("Last-Modified")]),t._v("、"),a("code",[t._v("If-Modified-Since")])])]),a("li",[a("p",[t._v("第二对："),a("code",[t._v("ETag")]),t._v("、"),a("code",[t._v("If-None-Match")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("1、"),s("code",[this._v("Last-Modified")]),this._v("、"),s("code",[this._v("If-Modified-Since")])]),this._v("。过程如下：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("（1）浏览器第一次请求一个资源，服务器在返回这个资源的同时，会加上"),s("code",[this._v("Last-Modified")]),this._v("这个 response header，这个header表示这该资源在服务器上的最后修改时间：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180311_1715.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("（2）浏览器再次请求这个资源时，会加上"),s("code",[this._v("If-Modified-Since")]),this._v("这个 request header，这个header的值就是上一次返回的"),s("code",[this._v("Last-Modified")]),this._v("的值：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180311_1716.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("（3）服务器收到第二次请求时，会比对浏览器传过来的"),s("code",[this._v("If-Modified-Since")]),this._v("和资源在服务器上的最后修改时间"),s("code",[this._v("Last-Modified")]),this._v("，判断资源是否有变化。如果没有变化则返回304 Not Modified，但不返回资源内容（此时，服务器不会返回 Last-Modified 这个 response header）；如果有变化，就正常返回资源内容（继续重复整个流程）。这是服务器返回304时的response header：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180311_1720.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("缺点：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Last-Modified")]),this._v("、"),s("code",[this._v("If-Modified-Since")]),this._v("一般来说都是非常可靠的，但面临的问题是：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[s("strong",[this._v("服务器上的资源变化了，但是最后的修改时间却没有变化")]),this._v("。")])]),s("li",[s("p",[this._v("如果服务器端在一秒内修改文件两次，但产生的"),s("code",[this._v("Last-Modified")]),this._v("却只有一个值。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2、"),s("code",[this._v("ETag")]),this._v("、"),s("code",[this._v("If-None-Match")])]),this._v("。过程如下：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("（1）浏览器第一次请求一个资源，服务器在返回这个资源的同时，会加上"),s("code",[this._v("ETag")]),this._v("这个 response header，这个header是服务器根据当前请求的资源生成的"),s("strong",[this._v("唯一标识")]),this._v("。这个唯一标识是一个字符串，只要资源有变化这个串就不同，跟最后修改时间无关，所以也就很好地补充了"),s("code",[this._v("Last-Modified")]),this._v("的不足。如下：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180311_1735.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("（2）浏览器再次请求这个资源时，会加上"),s("code",[this._v("If-None-Match")]),this._v("这个 request header，这个header的值就是上一次返回的"),s("code",[this._v("ETag")]),this._v("的值：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180311_1737.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("3）服务器第二次请求时，会对比浏览器传过来的"),s("code",[this._v("If-None-Match")]),this._v("和服务器重新生成的一个新的"),s("code",[this._v("ETag")]),this._v("，判断资源是否有变化。如果没有变化则返回304 Not Modified，但不返回资源内容（此时，由于ETag重新生成过，response header中还会把这个ETag返回，即使这个ETag并无变化）。如果有变化，就正常返回资源内容（继续重复整个流程）。这是服务器返回304时的response header：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180311_1740.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/lyzg/p/5125934.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("浏览器缓存知识小结及应用")]),this._v("[荐]")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"四、使用cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、使用cdn","aria-hidden":"true"}},[this._v("#")]),this._v(" 四、使用CDN")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"五、dns预解析（dns-prefetch）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、dns预解析（dns-prefetch）","aria-hidden":"true"}},[this._v("#")]),this._v(" 五、DNS预解析（dns-prefetch）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("第一步")]),this._v("：打开或关闭DNS预解析")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x-dns-prefetch-control"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("on"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("需要说明的是，在一些高级浏览器中，页面中所有的超链接（"),s("code",[this._v("<a>")]),this._v("标签），默认打开了DNS预解析。但是，如果页面中采用的https协议，很多浏览器是默认关闭了超链接的DNS预解析。如果加了上面这行代码，则表明强制打开浏览器的预解析。（如果你能在面试中把这句话说出来，则一定是你出彩的地方）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("第二步")]),this._v("：对指定的域名进行DNS预解析")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.smyhvae.com/"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://bubkoo.com/2015/11/19/prefetching-preloading-prebrowsing/",target:"_blank",rel:"noopener noreferrer"}},[this._v("前端性能优化 - 资源预加载")]),this._v("[荐]")])]),s("li",[s("p",[s("a",{attrs:{href:"https://www.xuanfengge.com/dns-prefetching-analysis.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("DNS预解析详解")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"我的公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号","aria-hidden":"true"}},[this._v("#")]),this._v(" 我的公众号")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/2016040102.jpg",alt:""}})])}],!1,null,null,null);s.default=n.exports}}]);