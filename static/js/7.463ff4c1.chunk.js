(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[7],{126:function(e,t,n){e.exports={maincategory:"MainCategory_maincategory__1Vpwu",categoryheader:"MainCategory_categoryheader__2Ce1W",categorybody:"MainCategory_categorybody__1ntOz",heading:"MainCategory_heading__gA8cf",category:"MainCategory_category__2-NcA",imgcontainer:"MainCategory_imgcontainer__ZtYbm",catoverlay:"MainCategory_catoverlay__3ma2j",catcontainer:"MainCategory_catcontainer__gc-h3"}},127:function(e,t,n){e.exports={carousel:"ImageCarousel_carousel__1e8PX",carouselmoveright:"ImageCarousel_carouselmoveright__3URjr",carouselmoveleft:"ImageCarousel_carouselmoveleft__3v-bi"}},153:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(17),a=n(18),o=n(20),c=n(19),i=n(7),l=n(1),u=n(12),m=n(126),d=n.n(m),g=n(127),h=n.n(g),p=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={currentImageIndex:0,moveright:!1,moveleft:!1},e.carouselInterval=function(){e.moveImage=setInterval((function(){e.setState((function(e){return{moveleft:!e.moveleft,moveright:!e.moveright}}))}),8e3),e.moveButton=setInterval((function(){e.setState({showButton:!0})}),11e3)},e.componentDidMount=function(){e.setState({moveleft:!0}),e.carouselInterval()},e.componentWillUnmount=function(){clearInterval(e.moveButton),clearInterval(e.moveImage)},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state.moveright?h.a.carouselmoveright:"";return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"".concat(h.a.carousel," ").concat(t),children:this.props.url.map((function(t,n){return Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:0===n?Object(r.jsx)("span",{children:e.props.cat.toUpperCase()}):Object(r.jsx)("span",{children:"2021 RANGE IN STOCK"})}),Object(r.jsx)("img",{src:"".concat("/E-commerce-site-React-front-end","/images/").concat(t),alt:""})]},n)}))})})}}]),n}(l.Component),j=n(10),b=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).componentDidMount=function(){e.props.clearOldProducts();var t=e.props.match.url;t=t.substring(1),e.props.getUserProducts(t)},e.componentWillUnmount=function(){e.props.clearOldProducts()},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.categories,s=t.products,a=this.props.match.url,o=n[a=a.substring(1)],c=Object.keys(o),l=[];return"cycle"===a&&l.push("cycle-slide1.jpg","cycle-slide2.png"),"run"===a&&l.push("running-image1.jpg","AsicsGel:image1.jpg"),"swim"===a&&l.push("swimming-image1.jpg","adidas-Beach-Women-Short:image1.jpg"),Object(r.jsxs)("div",{className:d.a.maincategory,children:[Object(r.jsx)(p,{url:l,cat:a}),Object(r.jsxs)("div",{className:d.a.categoryheader,children:[Object(r.jsxs)("p",{children:["DM sports / ",Object(r.jsx)("strong",{children:a})]}),"cycle"===a&&Object(r.jsxs)("p",{children:[" ","Welcome to one of the worlds best online bike shops. Offering sleek road bikes, trail-taming MTBs, agile BMXs, and nimble commuter bikes, our range of tuned and tested bikes is perfect for leisure or professional competition. With the latest bike parts and components from top brands, your bike will be in peak condition. Or choose from incredible bike clothing from the likes of dhb, featuring this season\u2019s cycling shoes, jerseys, bib shorts and much more.'"," "]}),"run"===a&&Object(r.jsxs)("p",{children:[" ","DM sport\u2019s online running shop has an incredible range of running gear and accessories, featuring the best brands and latest equipment for every kind of runner. Our running shoes span pronation-specific running trainers, track shoes, trail shoes, and more. For sports clothing, you\u2019ll find this season\u2019s latest running clothes and compression wear from leading brands, all replete with features and style. The range also sports the latest GPS running watches and running tech such as top running lights. Or browse our running accessories with running backpacks and running bags, nutrition for runners, post run recovery ideas, and a section dedicated to finding the perfect gift for runners."]}),"swim"===a&&Object(r.jsxs)("p",{children:[" ","Immerse yourself in the most comprehensive range of swimwear and swimming accessories you\u2019ll find anywhere with DM sport's dedicated swimshop. Dive into the vast range of mens and womens swimming costumes, wetsuits, swimming shorts, and jammers, from performance grade to club level, and including attractive leisure options. From the latest swimming goggles - ranging from budget to professional - to quality swim bags perfect for quick dips or elite triathlon stages, DM sport\u2019s choice of top brands and exceptional prices makes it an essential stop for all things swim."]})]}),Object(r.jsxs)("div",{className:d.a.categorybody,children:[Object(r.jsx)("aside",{children:c.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:d.a.heading,children:e}),Object(r.jsx)("hr",{}),Object(r.jsx)("ul",{children:o[e].map((function(t,n){return Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{to:"/".concat(a,"/").concat(e,"/").concat(t),children:t})},n)}))})]},t)}))}),Object(r.jsx)("main",{children:Object(r.jsx)("div",{className:d.a.category,children:c.map((function(t,n){return Object(r.jsx)("div",{className:d.a.catcontainer,children:o[t].map((function(n,o){var c=s.filter((function(e){return e.subcategory===n}));return 0!==c.length&&(c=c[0].images[0]),Object(r.jsxs)("div",{className:d.a.imgcontainer,onClick:function(){return e.props.history.push("/".concat(a,"/").concat(t,"/").concat(n))},children:[Object(r.jsx)("img",{src:"https://my-ecommerce-site-fitness.herokuapp.com/".concat(c),alt:""}),Object(r.jsx)("div",{className:d.a.catoverlay,children:Object(r.jsx)("span",{children:n})})]},o)}))},n)}))})})]})]})}}]),n}(l.Component);t.default=Object(u.b)((function(e){return{categories:e.products.categories,products:e.products.products}}),(function(e){return{getUserProducts:function(t){return e(Object(j.o)(t))},clearOldProducts:function(){return e(Object(j.c)())}}}))(b)}}]);
//# sourceMappingURL=7.463ff4c1.chunk.js.map