(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528],{7386:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demos",function(){return s(8150)}])},8418:function(e,a,s){"use strict";function l(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var s=[],l=!0,n=!1,c=void 0;try{for(var i,r=e[Symbol.iterator]();!(l=(i=r.next()).done)&&(s.push(i.value),!a||s.length!==a);l=!0);}catch(t){n=!0,c=t}finally{try{l||null==r.return||r.return()}finally{if(n)throw c}}return s}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.default=void 0;var n,c=(n=s(7294))&&n.__esModule?n:{default:n},i=s(6273),r=s(387),t=s(7190);var d={};function o(e,a,s,l){if(e&&i.isLocalURL(a)){e.prefetch(a,s,l).catch((function(e){0}));var n=l&&"undefined"!==typeof l.locale?l.locale:e&&e.locale;d[a+"%"+s+(n?"%"+n:"")]=!0}}var f=function(e){var a,s=!1!==e.prefetch,n=r.useRouter(),f=c.default.useMemo((function(){var a=l(i.resolveHref(n,e.href,!0),2),s=a[0],c=a[1];return{href:s,as:e.as?i.resolveHref(n,e.as):c||s}}),[n,e.href,e.as]),x=f.href,m=f.as,j=e.children,h=e.replace,u=e.shallow,g=e.scroll,N=e.locale;"string"===typeof j&&(j=c.default.createElement("a",null,j));var p=(a=c.default.Children.only(j))&&"object"===typeof a&&a.ref,v=l(t.useIntersection({rootMargin:"200px"}),2),w=v[0],y=v[1],b=c.default.useCallback((function(e){w(e),p&&("function"===typeof p?p(e):"object"===typeof p&&(p.current=e))}),[p,w]);c.default.useEffect((function(){var e=y&&s&&i.isLocalURL(x),a="undefined"!==typeof N?N:n&&n.locale,l=d[x+"%"+m+(a?"%"+a:"")];e&&!l&&o(n,x,m,{locale:a})}),[m,x,y,N,s,n]);var k={ref:b,onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,a,s,l,n,c,r,t){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(s))&&(e.preventDefault(),null==r&&l.indexOf("#")>=0&&(r=!1),a[n?"replace":"push"](s,l,{shallow:c,locale:t,scroll:r}))}(e,n,x,m,h,u,g,N)},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),i.isLocalURL(x)&&o(n,x,m,{priority:!0})}};if(e.passHref||"a"===a.type&&!("href"in a.props)){var I="undefined"!==typeof N?N:n&&n.locale,_=n&&n.isLocaleDomain&&i.getDomainLocale(m,I,n&&n.locales,n&&n.domainLocales);k.href=_||i.addBasePath(i.addLocale(m,I,n&&n.defaultLocale))}return c.default.cloneElement(a,k)};a.default=f},7190:function(e,a,s){"use strict";function l(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var s=[],l=!0,n=!1,c=void 0;try{for(var i,r=e[Symbol.iterator]();!(l=(i=r.next()).done)&&(s.push(i.value),!a||s.length!==a);l=!0);}catch(t){n=!0,c=t}finally{try{l||null==r.return||r.return()}finally{if(n)throw c}}return s}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(e){var a=e.rootMargin,s=e.disabled||!i,t=n.useRef(),d=l(n.useState(!1),2),o=d[0],f=d[1],x=n.useCallback((function(e){t.current&&(t.current(),t.current=void 0),s||o||e&&e.tagName&&(t.current=function(e,a,s){var l=function(e){var a=e.rootMargin||"",s=r.get(a);if(s)return s;var l=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var a=l.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;a&&s&&a(s)}))}),e);return r.set(a,s={id:a,observer:n,elements:l}),s}(s),n=l.id,c=l.observer,i=l.elements;return i.set(e,a),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),r.delete(n))}}(e,(function(e){return e&&f(e)}),{rootMargin:a}))}),[s,a,o]);return n.useEffect((function(){if(!i&&!o){var e=c.requestIdleCallback((function(){return f(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[o]),[x,o]};var n=s(7294),c=s(9311),i="undefined"!==typeof IntersectionObserver;var r=new Map},8150:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return d}});var l=s(5893),n=s(5988),c=s(7294),i=s(9008),r=s(1664),t=function(){var e,a=document.querySelectorAll(".gallery"),s=document.querySelector(".filtering"),l=document.querySelectorAll(".filtering");if(a.length>=1&&a.forEach((function(a){e=new Isotope(a,{itemSelector:".items"})})),s){s.addEventListener("click",(function(a){if(matchesSelector(a.target,"span")){var s=a.target.getAttribute("data-filter");s=s,e.arrange({filter:s})}}));for(var n=0,c=l.length;n<c;n++){var i=l[n];i.addEventListener("click",(function(e){matchesSelector(e.target,"span")}))}}},d=function(){return c.useEffect((function(){document.querySelector("body").classList.add("index3"),setTimeout((function(){window.Isotope&&t()}),1e3)}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.default,{children:(0,l.jsx)("link",{rel:"stylesheet",href:"/assets/css/style.css",className:"jsx-96a17a9900096f0e"})}),(0,l.jsx)(n.default,{id:"96a17a9900096f0e",children:'.works-header.jsx-96a17a9900096f0e {min-height:85vh;\nposition:relative}\n.works-header.jsx-96a17a9900096f0e:after {content:"";\nposition:absolute;\ntop:50px;\nleft:50px;\nright:50px;\nbottom:50px;\nbackground:#999;\nopacity:0.2}\n.works-header.jsx-96a17a9900096f0e:before {background:#000}\n.masonery.jsx-96a17a9900096f0e .container-fluid.jsx-96a17a9900096f0e {padding:0 80px}\n.masonery.jsx-96a17a9900096f0e .item-img.jsx-96a17a9900096f0e {position:relative;\nbox-shadow:0px 5px 10px rgba(50, 50, 50, 0.2);\nbackground:#333;\npadding:15px;\nborder-radius:5px}\n.masonery.jsx-96a17a9900096f0e .item-img.jsx-96a17a9900096f0e img.jsx-96a17a9900096f0e {border-radius:10px;\noverflow:hidden}\n.masonery.jsx-96a17a9900096f0e .gallery.jsx-96a17a9900096f0e .items.jsx-96a17a9900096f0e {padding:0 40px;\nmargin-top:80px;\ntext-align:center}\n.masonery.jsx-96a17a9900096f0e .gallery.jsx-96a17a9900096f0e .items.jsx-96a17a9900096f0e h6.jsx-96a17a9900096f0e {margin:25px 0 15px;\nfont-size:17px;\nfont-weight:400;\nfont-family:"Jost", sans-serif;\ntext-align:center}\n.masonery.jsx-96a17a9900096f0e .item-img.jsx-96a17a9900096f0e .new.jsx-96a17a9900096f0e {padding:10px 30px;\nbackground:#75dab4;\nposition:absolute;\ntop:0;\nleft:-60px;\nwidth:200px;\n-webkit-transform:rotate(-30deg);\n-moz-transform:rotate(-30deg);\n-ms-transform:rotate(-30deg);\ntransform:rotate(-30deg);\nfont-size:13px}'}),(0,l.jsx)("header",{"data-background":"",style:{backgroundImage:"url(/demos/bg.png)"},"data-overlay-dark":"6",className:"jsx-96a17a9900096f0e works-header fixed-slider hfixd valign bg-img",children:(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e container",children:(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e row justify-content-center",children:(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-12 static text-center",children:(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e capt mt-50",children:(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e parlx",children:[(0,l.jsx)("h1",{className:"jsx-96a17a9900096f0e mb-10",children:"Archo Template"}),(0,l.jsx)("p",{className:"jsx-96a17a9900096f0e ls10 text-u",children:"Creative Architecture Interior Template."})]})})})})})}),(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e main-content",children:[(0,l.jsx)("section",{className:"jsx-96a17a9900096f0e masonery section-padding pt-50 sub-bg",children:(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e container-fluid",children:(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e row",children:(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e gallery full-width",children:[(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/home1",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/01.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Home Light"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/home2",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/02.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Interiors Light"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/home3",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/03.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Architecture Light"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/home7",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/4.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Home Default"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/home7Asker",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/4.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Home Default Asker"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/home4",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/1.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Architecture Studio"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/home5",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/2.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Creative Architecture"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/about",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/5.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"About Us"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/work1",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/6.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Works 2 Column"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/home6",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/3.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Interior Agency"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/work2",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/7.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Works 3 Column"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/work3",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/8.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Works 4 Column"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)(r.default,{href:"/contact",children:(0,l.jsx)("a",{target:"_blank",className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:[(0,l.jsx)("img",{src:"/demos/9.png",alt:"image",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e cont",children:(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Contact Us"})})]})})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:(0,l.jsx)("img",{src:"/demos/more.png",alt:"image",className:"jsx-96a17a9900096f0e"})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:(0,l.jsx)("img",{src:"/demos/more.png",alt:"image",className:"jsx-96a17a9900096f0e"})})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4 col-md-6 items",children:(0,l.jsx)("div",{"data-wow-delay":".4s",className:"jsx-96a17a9900096f0e item-img wow fadeInUp",children:(0,l.jsx)("img",{src:"/demos/more.png",alt:"image",className:"jsx-96a17a9900096f0e"})})})]})})})}),(0,l.jsx)("footer",{className:"jsx-96a17a9900096f0e",children:(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e container",children:(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e row",children:[(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4",children:(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e item md-mb50",children:[(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e title",children:(0,l.jsx)("h5",{className:"jsx-96a17a9900096f0e",children:"Contact Us"})}),(0,l.jsxs)("ul",{className:"jsx-96a17a9900096f0e",children:[(0,l.jsxs)("li",{className:"jsx-96a17a9900096f0e",children:[(0,l.jsx)("span",{className:"jsx-96a17a9900096f0e icon pe-7s-map-marker"}),(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e cont",children:[(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Officeal Address"}),(0,l.jsx)("p",{className:"jsx-96a17a9900096f0e",children:"504 White St . Dawsonville, GA 30534 , New York"})]})]}),(0,l.jsxs)("li",{className:"jsx-96a17a9900096f0e",children:[(0,l.jsx)("span",{className:"jsx-96a17a9900096f0e icon pe-7s-mail"}),(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e cont",children:[(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Email Us"}),(0,l.jsx)("p",{className:"jsx-96a17a9900096f0e",children:"support@gmail.com"})]})]}),(0,l.jsxs)("li",{className:"jsx-96a17a9900096f0e",children:[(0,l.jsx)("span",{className:"jsx-96a17a9900096f0e icon pe-7s-call"}),(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e cont",children:[(0,l.jsx)("h6",{className:"jsx-96a17a9900096f0e",children:"Call Us"}),(0,l.jsx)("p",{className:"jsx-96a17a9900096f0e",children:"+87986451666"})]})]})]})]})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4",children:(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e item md-mb50",children:[(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e title",children:(0,l.jsx)("h5",{className:"jsx-96a17a9900096f0e",children:"Recent News"})}),(0,l.jsxs)("ul",{className:"jsx-96a17a9900096f0e",children:[(0,l.jsxs)("li",{className:"jsx-96a17a9900096f0e",children:[(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e img",children:(0,l.jsx)("img",{src:"/assets/img/blog/1.jpg",alt:"",className:"jsx-96a17a9900096f0e"})}),(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e sm-post",children:[(0,l.jsx)("p",{className:"jsx-96a17a9900096f0e",children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."}),(0,l.jsx)("span",{className:"jsx-96a17a9900096f0e date",children:"14 Jan 2022"})]})]}),(0,l.jsxs)("li",{className:"jsx-96a17a9900096f0e",children:[(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e img",children:(0,l.jsx)("img",{src:"/assets/img/blog/2.jpg",alt:"",className:"jsx-96a17a9900096f0e"})}),(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e sm-post",children:[(0,l.jsx)("p",{className:"jsx-96a17a9900096f0e",children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."}),(0,l.jsx)("span",{className:"jsx-96a17a9900096f0e date",children:"14 Jan 2022"})]})]}),(0,l.jsx)("li",{className:"jsx-96a17a9900096f0e",children:(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e subscribe",children:[(0,l.jsx)("input",{type:"text",placeholder:"Type Your Email",className:"jsx-96a17a9900096f0e"}),(0,l.jsx)("span",{className:"jsx-96a17a9900096f0e subs pe-7s-paper-plane"})]})})]})]})}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e col-lg-4",children:(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e item",children:[(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e logo",children:(0,l.jsx)("img",{src:"/assets/img/logo-light.png",alt:"",className:"jsx-96a17a9900096f0e"})}),(0,l.jsxs)("div",{className:"jsx-96a17a9900096f0e social",children:[(0,l.jsx)(r.default,{href:"#",children:(0,l.jsx)("a",{className:"jsx-96a17a9900096f0e",children:(0,l.jsx)("i",{className:"jsx-96a17a9900096f0e fab fa-facebook-f"})})}),(0,l.jsx)(r.default,{href:"#",children:(0,l.jsx)("a",{className:"jsx-96a17a9900096f0e",children:(0,l.jsx)("i",{className:"jsx-96a17a9900096f0e fab fa-twitter"})})}),(0,l.jsx)(r.default,{href:"#",children:(0,l.jsx)("a",{className:"jsx-96a17a9900096f0e",children:(0,l.jsx)("i",{className:"jsx-96a17a9900096f0e fab fa-instagram"})})}),(0,l.jsx)(r.default,{href:"#",children:(0,l.jsx)("a",{className:"jsx-96a17a9900096f0e",children:(0,l.jsx)("i",{className:"jsx-96a17a9900096f0e fab fa-youtube"})})})]}),(0,l.jsx)("div",{className:"jsx-96a17a9900096f0e copy-right",children:(0,l.jsxs)("p",{className:"jsx-96a17a9900096f0e",children:["\xa9 2022, Arch Template. Made with passion by",(0,l.jsx)(r.default,{href:"#",children:"ThemesCamp"}),"."]})})]})})]})})})]})]})}},1664:function(e,a,s){e.exports=s(8418)},7884:function(e,a,s){"use strict";a.default=t;var l,n=(l=s(7294))&&l.__esModule?l:{default:l},c=s(8122),i=s(9035);var r=n.default.useInsertionEffect||n.default.useLayoutEffect;function t(e){var a=(0,c.useStyleRegistry)();return a?"undefined"===typeof window?(a.add(e),null):(r((function(){return a.add(e),function(){a.remove(e)}}),[e.id,String(e.dynamic)]),null):null}t.dynamic=function(e){return e.map((function(e){var a=e[0],s=e[1];return(0,i.computeId)(a,s)})).join(" ")}},5988:function(e,a,s){e.exports=s(7884)}},function(e){e.O(0,[774,888,179],(function(){return a=7386,e(e.s=a);var a}));var a=e.O();_N_E=a}]);