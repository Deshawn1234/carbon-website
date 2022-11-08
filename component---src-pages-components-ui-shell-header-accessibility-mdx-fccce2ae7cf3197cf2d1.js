"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[67009],{28399:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(67294),i=t(88650),s=t.n(i),o=t(1597),c=t(80304),r=t(94656),l=t(75900),d=t.n(l);var p=e=>{let{title:a,theme:t,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var m=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:i}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:c,branch:r}=t||i,l=`${s}/edit/${r}${c}/src/pages${a}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},g=t(56328),b=t(51721);let h=function(e){function a(){return e.apply(this,arguments)||this}return(0,b.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,i=t.split("/").filter(Boolean).slice(-1)[0],c=a.map((e=>{const a=s()(e,{lower:!0,strict:!0}),c=a===i,r=new RegExp(`${i}/?(#.*)?$`),l=t.replace(r,a);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":c},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${l}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},a}(n.Component);var A=h,u=t(17680),y=t(75387),f=t(50041);var k=e=>{let{date:a}=e;const t=new Date(a);return a?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:a,children:t,location:i,Title:l}=e;const{frontmatter:d={},relativePagePath:b,titleType:h}=a,{tabs:f,title:w,theme:v,description:x,keywords:E,date:C}=d,{interiorTheme:N}=(0,y.Z)(),{site:{pathPrefix:R}}=(0,o.useStaticQuery)("2456312558"),T=R?i.pathname.replace(R,""):i.pathname,L=f?T.split("/").filter(Boolean).slice(-1)[0]||s()(f[0],{lower:!0}):"",I=v||N;return n.createElement(r.Z,{tabs:f,homepage:!1,theme:I,pageTitle:w,pageDescription:x,pageKeywords:E,titleType:h},n.createElement(p,{title:l?n.createElement(l,null):w,label:"label",tabs:f,theme:I}),f&&n.createElement(A,{title:w,slug:T,tabs:f,currentTab:L}),n.createElement(u.Z,{padded:!0},t,n.createElement(m,{relativePagePath:b}),n.createElement(k,{date:C})),n.createElement(g.Z,{pageContext:a,location:i,slug:T,tabs:f,currentTab:L}),n.createElement(c.Z,null))}},36989:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return c},default:function(){return u}});var n=t(45987),i=(t(67294),t(64983)),s=t(28399);t(74164);const o=["components"],c={},r=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",a)},l=r("PageDescription"),d=r("AnchorLinks"),p=r("AnchorLink"),m=r("Row"),g=r("Column"),b=r("Caption"),h={_frontmatter:c},A=s.Z;function u(e){let{components:a}=e,t=(0,n.Z)(e,o);return(0,i.kt)(A,Object.assign({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Design annotations are needed for specific instances shown below, but for the\nstandard UI shell header component, Carbon already incorporates accessibility.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(p,{mdxType:"AnchorLink"},"What Carbon provides"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Design recommendations"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Development considerations")),(0,i.kt)("h2",null,"What Carbon provides"),(0,i.kt)("p",null,"The Carbon header bakes in keyboard interaction, including a\nskip-to-main-content mechanism. Carbon also supports assistive technologies such\nas screen readers by setting labeling and page structure."),(0,i.kt)("h3",null,"Keyboard interaction"),(0,i.kt)("p",null,"Each element in the header can be reached by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab")," key. A “Skip to main\ncontent” link appears when a keyboard user first tabs into the page. Links and\nicons are activated by ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),". Icons can also be activated by ",(0,i.kt)("inlineCode",{parentName:"p"},"Space"),"."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjklEQVQoz1VPX0hTcRQ+++edpTld2QRbdzK7TpGFMXBzmzGJ0rFkG0J/QDKEkKSoh/Cpt4rMwoiewsfUpCyopx5670HmnAzddLtON/yzuvPOe52N7cTvTqQOfHzfd87h4xzwmcZlbnpM2a1/QfXQo1SP4bnKARPgNj5T9NCj6iv6pypEhHsNLAw3RAHKAPrp71CmBbhF/wBST84hDDWEAKoBwG96Db2NL6GLHpHLoUnRQg2oW6iB8lb1YLkCGEWH7j7VdXZEbdXfVjrODKvOG13yzvqHVGNrncxZ/4C6YOiV2/SDSnv9sIoxGWXgbRq3uOmxu9cMM8fgsOKvsBz+qYAPlYgoI/rbZVQRfmfFMsKxm6UZ+eLTRVTB9bY3l3yNbx93d/Q7m0zMtMnUPN3MmL8yDDNlNpundDrdpKZKO1utqZmpqtLMnKw5PVtRefx9rbbuS2VlxaS2urY0O6H5cEqrm4Ubxo/gaXsEd4YGuzyeq+j3+9Hn86LX68W+vj602+1os9nQarVie3u75C0WCzo7nRLbHWR+OHPYET5P/CQnw6/0b9fe3h6KovhHEMS8KJYgCEKe5/l8Npv9D6RHwHFcPsNlJJ1KpfLA87xcFEXIZrMujuOQZdlCMpksbmxs4ObmJm5tbeH29vYRr6+vSzqVSiHZFwQBySH7+/uYTqcRdnd35blcTgokjfn5+UIwGCwGAgEMBoPEYygUkjgcDuPi4iIuLCzg3NycpA8ODqTAXC6HOzs7pUBBEAi7MpkMxuPxQiKRKJJLyJWJRIL0jjQB0QQsy0ogvbW1NUwmk6VA8jLP89LL4XC4EIlEitFoFJeXlzESiUhYWlqS/OrqKq6srGAsFkOyQzxh4knwX4bB1JDTCsiEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of header keyboard interaction",title:"example of header keyboard interaction",src:"/static/0b0bf45ba8bad74a7d0e1cc3d16d8b6e/3cbba/header-accessibility-1.png",srcSet:["/static/0b0bf45ba8bad74a7d0e1cc3d16d8b6e/7fc1e/header-accessibility-1.png 288w","/static/0b0bf45ba8bad74a7d0e1cc3d16d8b6e/a5df1/header-accessibility-1.png 576w","/static/0b0bf45ba8bad74a7d0e1cc3d16d8b6e/3cbba/header-accessibility-1.png 1152w","/static/0b0bf45ba8bad74a7d0e1cc3d16d8b6e/92c65/header-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Pressing the Tab key reveals a 'Skip to main' link and then moves between other header elements."))),(0,i.kt)("h3",null,"Regions"),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABxklEQVQoz62Jy04TYRiGn1LkRwRk084/88/hL6WdHkwLNFIZFopt1KCghWjAIES3nhpXHqKAEOPOIorBnXfgJZBZeg9mdsYbcI1hegeEN3nyfu/3wGmnJJvMqldctd/gGWVUOoudHjsxtPxOYrHQSTbkNhzB4b8X/DnaoNIGemBgHrxHgAEz7wAF1oPunzq4D4EsBG8BF1gq7XL3wh5Na4fROVh/Nkf7/T2KwXkYAqeSJDc1SJ8Bkw0Z9/G2yglSecjXBxlQXddvAq3Cp/JScfdpw9xyPGf0u58r/irkS4eOrUMjZYbKckNbeaFMW6HrZOI+3sp0Qkva8W0aKnQdHUpDhaxMfKmt1Q+2rzk7Oc/1fvp+4W+lUv2tPR2lU+nIdb1Iax1JaUbZ7FgkDRlldCaybSdG60xkml1nSjNiefwrqxe/cd3+QP3s636YFeCLMm2xWvkhamdeihLPxYLeExbropXdF3kei2BwQ8wMbQqfJ+Km04ndvPdZcH9yP7F26aD3hvMRf/gWPWhgGCUCgtwK+txlrL5pJuw7jFCl5i1iJKfIjTRjZG+dqlqI3bh9G2pqmaa9SdPeomhdIW9N41vBiTn1/Adt+XKXldopLAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of header keyboard interaction",title:"example of header keyboard interaction",src:"/static/cc141c28981cf4371f574135a8c12265/3cbba/header-accessibility-2.png",srcSet:["/static/cc141c28981cf4371f574135a8c12265/7fc1e/header-accessibility-2.png 288w","/static/cc141c28981cf4371f574135a8c12265/a5df1/header-accessibility-2.png 576w","/static/cc141c28981cf4371f574135a8c12265/3cbba/header-accessibility-2.png 1152w","/static/cc141c28981cf4371f574135a8c12265/92c65/header-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Carbon applies a header region around the whole UI shell header."))),(0,i.kt)("h3",null,"Labeling"),(0,i.kt)("p",null,"Carbon provides default names for each icon-only button in the header, and these\nnames are revealed on hover or focus. Interactions for some header components\nare covered under other component topics such as\n",(0,i.kt)("a",{parentName:"p",href:"/components/search/usage"},"search"),",\n",(0,i.kt)("a",{parentName:"p",href:"/components/notifications/usage"},"notifications"),", and the\n",(0,i.kt)("a",{parentName:"p",href:"components/UI-shell-right-panel/usage/#switcher"},"UI shell right panel switcher"),"."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAB2UlEQVQoz2NgwAP8lPsY/FX6GPxV+xn8VPqY/FX7mczZ6xmCNCYwBWlMYPZR7GWEqYEDUVFRvBgEXFSLGEM0pzCAsAPDWoYwnalgHKQ6jcFNuZLRW62FQUxMDGIgiIEPWyjEMMVoL2UIUOvzC1DvD7Pir2IP1poQEaw1MddXuUcrUHkGQ4DyJEYnJyeIgSIiIngxEy8Dg4VyBEOc8bzEGMO5OQwM/xkSzObnxJvO7YnRWarnrpfDEGzawGRsYgT38m68WEx0l4iI6B4xKcE1opL8qxQVFXeLSvKvFJPiXyYlLXFQRlq+RE5ehkFKRpzJDxSW4uLidwlhUVHRu7Kycg/kZOUfyipInpeTk7srryB7RVJW5KawFGeRppIJg7qCEUug+gQGosH///8Z9i95zuCv2pfuKd8p5qPUbRqo3l8TqD6hyE+5T8BXCRrbKioqeLGysjKDmp4k2NAAxzSGWNOZGbFGc8XjzWdbxlvMaowxmV4erDVRKFhrIkO43hRGBklJSYJYTEKIQUhImMHG2JMh1mQWQ6LRSoZ403kMcWazGaKNZjAEafaDcZjuZOK86ynbDfby5MpdDDGm05kjDKYwxJnPYIy3mMkSYzKdJUR7EgMIh+tPYQAAFAaUHZI2DiEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"annotation showing search, help, notification and app switcher icons",title:"annotation showing search, help, notification and app switcher icons",src:"/static/2dda9953a68f183fc66b7fc0f697a4c3/3cbba/header-accessibility-3.png",srcSet:["/static/2dda9953a68f183fc66b7fc0f697a4c3/7fc1e/header-accessibility-3.png 288w","/static/2dda9953a68f183fc66b7fc0f697a4c3/a5df1/header-accessibility-3.png 576w","/static/2dda9953a68f183fc66b7fc0f697a4c3/3cbba/header-accessibility-3.png 1152w","/static/2dda9953a68f183fc66b7fc0f697a4c3/92c65/header-accessibility-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Carbon provides default names for its icon-only components and reveals them on hover or focus."))),(0,i.kt)("h2",null,"Design recommendations"),(0,i.kt)("p",null,"For every product, there should be a one-time design exercise to annotate the UI\nshell keyboard interaction. This is an important step to carry out, since header\nfunctionality and component names vary significantly between products, even\nthough they appear similar until interacted with. Annotating expected behavior\nincreases consistent implementation. Where the product does not deviate from the\nstandard Carbon implementation, it can merely be annotated that the behaviour\nmatches what is in the ‘How Carbon works’ section."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtklEQVQoz62RO0/bUBiG3yTKP/Alxsc+MbLj3mKS49hDaGHMf4hKM4WtI3WcVkQEKQIk1IF2bH9Ch24lQyvB0I1gpCIcrC5IXTogUcSYyo6I5F42XunV833n8uo7OsB/FLDO1FUve1Lzc4Ht506cbi5gnVxQ9WJmAttHYHfSF3meT1kQhISx3j14mjljL3Fqd6d2X+GUdfGt6uPcWcf7RyuZPzOSgFs1Gg30ej0MBgO8cVvZG3cHR5W1x8fMWx0xr3Vc81ujyovWaGFt9cj2Fq7cLey5z7KiKKJer8OyLIDjuFmg4zhoNptot9vAPeB1pYlocWM3XN68Hj/pX4TLmz/HS/2LcKn/63tt/flbtgI8nE7IGEOpVMLseQAyiqLsGYZxYJrmJ0LIkOO4fSorX3RVO6QSObxP9a90jhzEvTInfy4UCvuyLA8FQRjGlCRpiHjc20BVVT+YpvnDsqwxpTTieT4iijImVA15UQjpvHbGiUKoFGkoE3JOCIk0TYtEUUwY96kPmkwmKaf2ti+n/Dj563yq1nX9nwGxyuXyrCaEJCwWiwnz+XziWIZhzNYgSdKd+s71G1QRoaYmJp3ZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Annotated header region stating 'Header functionality, roles and names match Carbon defaults'",title:"Annotated header region stating 'Header functionality, roles and names match Carbon defaults'",src:"/static/ce3e5d3d2319d938f65f3320d1438c74/3cbba/header-accessibility-4.png",srcSet:["/static/ce3e5d3d2319d938f65f3320d1438c74/7fc1e/header-accessibility-4.png 288w","/static/ce3e5d3d2319d938f65f3320d1438c74/a5df1/header-accessibility-4.png 576w","/static/ce3e5d3d2319d938f65f3320d1438c74/3cbba/header-accessibility-4.png 1152w","/static/ce3e5d3d2319d938f65f3320d1438c74/92c65/header-accessibility-4.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Annotate the header, even if your design matches the default Carbon UI shell header behavior."))),(0,i.kt)("p",null,"Once a product-specific header annotation exists, individual product pages only\nneed to annotate the header if something differs."),(0,i.kt)("p",null,"Where the header deviates from the default Carbon behavior or labeling, it\nshould be annotated. Such annotations could call out different labels for icons\nor indicate interaction changes such as keyboard navigation."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1ElEQVQoz61RzWsTQRx9W5JTEjAhu8mumYRkdyb7kbjasum6JSpCST0E1JvHXFOIH5dqG4R6LQTRs3jvwUPxonspiB4lJkowYfEk/gXS48pONBAt4sEHD97w3u/xmxngHzA6v4Ox28d4fQ+j1fsrHy/2Y+PGbmyo31350nuOrwdHGLI787AoikuUJOkPLcsyIAHPVjvCZG0XE+8hJo0+PrF7uHbOQ6FSQkw+w7N86BdarRZ6vR4GgwHXmUyG+2cVBY+bHeFk/QDDCzvtkbu3/cF5sP2e3b4ezTUMW7jlbAqe5wHZbHZR6DgO2u02ut0uXNdFOp3mPt+wIePJRgezjf3D6aVHJ9Pm/vfpWv/o6tYmFFlGxTZQr9fnV/4JgRDyVFXVN7quvyKE+KIocsqy7FuW5Vd1/XXdMI9tZr6zdeutpRvHjFKfUuqXSiVfURQfuVxuUVgsFl9omvbNtu1ZuVwOJEniVBQlsCwrME0z0E1jVqHa54gq1WaMsYBSGkR5Qkiw9JthGC7xNI/rGy8Rbh0ivDlG88rlZV/TtFMLItRqNaiqyjOpVArJZBKJRALVahWUUs7Ii3LxeHw+FD3435jP51EoFMAYW5RE+vczIYRn/zt+AHcYmD4k313HAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"an annotation stating the search bar is persistently expanded",title:"an annotation stating the search bar is persistently expanded",src:"/static/4cd2eaf689a1da2624a64d9428d1ffc0/3cbba/header-accessibility-5.png",srcSet:["/static/4cd2eaf689a1da2624a64d9428d1ffc0/7fc1e/header-accessibility-5.png 288w","/static/4cd2eaf689a1da2624a64d9428d1ffc0/a5df1/header-accessibility-5.png 576w","/static/4cd2eaf689a1da2624a64d9428d1ffc0/3cbba/header-accessibility-5.png 1152w","/static/4cd2eaf689a1da2624a64d9428d1ffc0/92c65/header-accessibility-5.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Annotate if the design modifies the default keyboard or component interaction."))),(0,i.kt)("h2",null,"Development considerations"),(0,i.kt)("p",null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Carbon uses the HTML 5 ",(0,i.kt)("inlineCode",{parentName:"li"},"header")," component instead of an ARIA landmark to set\nthe region."),(0,i.kt)("li",{parentName:"ul"},"Carbon includes the “Skip to main content” link as the first item on the page\nwith a ",(0,i.kt)("inlineCode",{parentName:"li"},'tabindex="0"'),", but hides it through CSS until it receives focus.")))}u.isMDXComponent=!0}}]);