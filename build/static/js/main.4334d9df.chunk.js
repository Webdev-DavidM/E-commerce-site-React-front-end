(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[1],{10:function(e,t,r){"use strict";r.d(t,"o",(function(){return d})),r.d(t,"r",(function(){return l})),r.d(t,"n",(function(){return p})),r.d(t,"B",(function(){return b})),r.d(t,"e",(function(){return j})),r.d(t,"c",(function(){return O})),r.d(t,"s",(function(){return h})),r.d(t,"d",(function(){return m})),r.d(t,"t",(function(){return f})),r.d(t,"u",(function(){return g})),r.d(t,"w",(function(){return _})),r.d(t,"x",(function(){return E})),r.d(t,"A",(function(){return S})),r.d(t,"a",(function(){return v})),r.d(t,"E",(function(){return y})),r.d(t,"y",(function(){return x})),r.d(t,"z",(function(){return C})),r.d(t,"v",(function(){return w})),r.d(t,"p",(function(){return T})),r.d(t,"b",(function(){return D})),r.d(t,"k",(function(){return R})),r.d(t,"m",(function(){return N})),r.d(t,"q",(function(){return I})),r.d(t,"C",(function(){return k})),r.d(t,"g",(function(){return L})),r.d(t,"f",(function(){return A})),r.d(t,"h",(function(){return P})),r.d(t,"l",(function(){return U})),r.d(t,"j",(function(){return M})),r.d(t,"F",(function(){return B})),r.d(t,"i",(function(){return F})),r.d(t,"D",(function(){return H}));var n=r(61),c=r(6),a=r.n(c),s=r(2),o=r(15),i=r(13),u=r.n(i),d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"PRODUCTS_REQUESTED"}),t.prev=1,t.next=4,u()("https://my-ecommerce-site-fitness.herokuapp.com/products/".concat(e));case 4:200===(n=t.sent).status&&(c=n.data.map((function(e){if(0===e.reviews.length)return Object(s.a)(Object(s.a)({},e),{},{rating:0});if(1===e.reviews.length)return Object(s.a)(Object(s.a)({},e),{},{rating:e.reviews[0].rating});var t=e.reviews.length,r=e.reviews.reduce((function(e,t){return e+t.rating}),0)/t;return Object(s.a)(Object(s.a)({},e),{},{rating:r})})),r({type:"PRODUCTS_SUCCESS",products:c})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:"PRODUCTS_FAIL",error:t.t0.response});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"ALLPRODUCTS_STARTED"}),e.prev=1,e.next=4,u()("https://my-ecommerce-site-fitness.herokuapp.com/products/all");case 4:200===(r=e.sent).status&&t({type:"ALLPRODUCTS_SUCCESS",products:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"ALLPRODUCTS_FAIL",error:e.t0.response||e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"PRODUCTS_REQUESTED"}),t.prev=1,t.next=4,u()("https://my-ecommerce-site-fitness.herokuapp.com/products/product/".concat(e));case 4:200===(n=t.sent).status&&r({type:"PRODUCT_SUCCESS",product:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:"PRODUCTS_FAIL",error:t.t0.response||t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){var t=e.productId,r=Object(n.a)(e,["productId"]);return function(){var e=Object(o.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"REVIEW_SENT"}),e.prev=1,e.next=4,u()({method:"post",url:"https://my-ecommerce-site-fitness.herokuapp.com/products/review/".concat(t),data:{data:r}});case 4:200===(c=e.sent).status&&n({type:"REVIEW_SUCCESS",product:c.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n({type:"REVIEW_FAIL",error:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},j=function(){return{type:"CLEAR_SELECTED_PRODUCTS"}},O=function(){return{type:"CLEAR_PRODUCTS"}},h=function(e){return{type:"SEARCH_PRODUCTS",searchValue:e}},m=function(){return{type:"CLEAR_REVIEW_STATUS"}},f=function(e){return{type:"CATEGORY_CHOSEN",category:e}},g=function(e){return{type:"SHOW_DROP_DOWN",bool:e}},_=function(e){return{type:"SHOW_SIDE_MENU",bool:e}},E=function(e){return{type:"SHOW_SUB_CATEGORY",bool:e}},S=function(e){return{type:"SUB_CAT_SELECTED",subcat:e}},v=function(e){return{type:"ADD_TO_BASKET",itemInfo:e}},y=function(e,t){return{type:"UPDATE_BASKET",noPos:e,quantity:t}},x=function(e){return{type:"SORT_BY_BEST_REVIEWS",products:e.map((function(e){if(0===e.reviews.length)return Object(s.a)(Object(s.a)({},e),{},{rating:0});if(1===e.reviews.length)return Object(s.a)(Object(s.a)({},e),{},{rating:e.rating});var t=e.reviews.length,r=e.reviews.reduce((function(e,t){return e+t.rating}),0);return Object(s.a)(Object(s.a)({},e),{},{rating:r/t})})).sort((function(e,t){return e.rating<t.rating?1:-1}))}},C=function(e,t){return{type:"FILTER_PRICE_RANGE",lower:e,higher:t}},w=function(){return{type:"FILTERED_IN_STOCK"}},T=function(e){return{type:"FILTERED_BRANDS",brands:e}},D=function(e){return d(),{type:"CHOSEN_BRAND",brand:e}},R=function(e){return{type:"DELETE_ITEM_FROM_BASKET",id:e.id,size:e.size}},N=function(e){return{type:"EMPTY_BASKET"}},I=function(e){return{type:"RESET_ALL_FILTERS",bool:e}},k=function(e){return{type:"UPDATE_PRICE_RANGE",price:e.price,higher:e.higher}},L=function(){return{type:"CLOSE_ADMIN_PRODUCT_MODAL"}},A=function(){return{type:"CLOSE_ADMIN_DELETE_MODAL"}},P=function(){return{type:"CLOSE_ADMIN_EDIT_MODAL"}},U=function(e){var t=e.id,r=e.admin,n=e.cat;return function(){var e=Object(o.a)(a.a.mark((function e(c){var s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"DELETE_PRODUCT"}),e.prev=1,s={headers:{email:r.email,token:r.token}},e.next=5,u.a.delete("https://my-ecommerce-site-fitness.herokuapp.com/adminuser/delete/".concat(t),s);case 5:204===(o=e.sent).status&&(console.log(o.data),c({type:"PRODUCT_DELETED_SUCCESS",productId:o.data._id}),c(d(n))),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.request.response||e.t0.message.response),c({type:"PRODUCTS_DELETED_FAIL",error:e.t0.response||e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},M=function(e){var t=e.index,r=e.id,n=e.admin;return console.log(n.token),function(){var e=Object(o.a)(a.a.mark((function e(c){var s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={headers:{email:n.email,token:n.token,index:t}},e.next=4,u.a.delete("https://my-ecommerce-site-fitness.herokuapp.com/adminuser/deleteimage/".concat(r),s);case 4:201===(o=e.sent).status&&(console.log(o),c(p(r))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.request.response||e.t0.message.response),c({type:"PRODUCTS_DELETED_FAIL",error:e.t0.response||e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},B=function(e){var t=e.formData,r=e.admin,n=e.id;return u.a.post("https://httpbin.org/anything",t).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),console.log(n),function(){var e=Object(o.a)(a.a.mark((function e(c){var s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={headers:{"Content-Type":"multipart/form-data",email:r.email,token:r.token}},e.next=4,u.a.post("https://my-ecommerce-site-fitness.herokuapp.com/adminuser/addimage/".concat(n),t,s);case 4:201===(o=e.sent).status&&(console.log(o),c({type:"PRODUCT_DELETED_SUCCESS",productId:o.data._id}),c(p(n))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.request.response||e.t0.message.response),c({type:"PRODUCTS_DELETED_FAIL",error:e.t0.response||e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},F=function(e){var t=e.admin,r=e.formData;return function(){var e=Object(o.a)(a.a.mark((function e(n){var c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CREATE_PRODUCT"}),e.prev=1,c={headers:{"Content-Type":"multipart/form-data",email:t.email,token:t.token}},e.next=5,u.a.post("https://my-ecommerce-site-fitness.herokuapp.com/adminuser/create",r,c);case 5:201===(s=e.sent).status&&n({type:"PRODUCT_CREATED_SUCCESS",productId:s.data._id}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.request.response||e.t0.message.response),n({type:"PRODUCTS_CREATED_FAIL",error:e.t0.response||e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},H=function(e){var t=e.admin,r=e.data,n=e.productId;return function(){var e=Object(o.a)(a.a.mark((function e(c){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"EDIT_PRODUCT"}),e.prev=1,s={headers:{email:t.email,token:t.token}},e.next=5,u.a.post("https://my-ecommerce-site-fitness.herokuapp.com/adminuser/update/".concat(n),r,s);case 5:204===e.sent.status&&c({type:"PRODUCT_EDIT_SUCCESS",productId:n}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.request.response||e.t0.message.response),c({type:"PRODUCTS_EDITED_FAIL",error:e.t0.response||e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}},24:function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return d})),r.d(t,"a",(function(){return p}));var n=r(6),c=r.n(n),a=r(15),s=r(13),o=r.n(s),i=function(e,t){return function(){var r=Object(a.a)(c.a.mark((function r(n){var a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(l()),r.prev=1,r.next=4,o()({method:"post",url:"https://my-ecommerce-site-fitness.herokuapp.com/users/login",data:{email:e,password:t}});case 4:202===(a=r.sent).status&&(n({type:"LOGIN_SUCCESS",user:a.data}),b(a.data)),401===a.status&&n({type:"LOGIN_FAIL",error:a.data}),r.next=14;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0),r.t0.request&&0===r.t0.request.status&&n({type:"LOGIN_FAIL",error:"Network error, please try again"}),r.t0.request&&401===r.t0.request.status&&n({type:"LOGIN_FAIL",error:"Unauthorised"});case 14:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()},u=function(){return localStorage.removeItem("userInfo"),{type:"USER_LOGGED_OUT"}},d=function(e){var t=e.email,r=e.address,n=e.password,s=e.lastName,i=e.firstName;return function(){var e=Object(a.a)(c.a.mark((function e(a){var u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(l()),e.prev=1,e.next=4,o()({method:"post",url:"https://my-ecommerce-site-fitness.herokuapp.com/users/register",data:{email:t,password:n,firstName:i,lastName:s,address:r,reviews:[]}});case 4:201===(u=e.sent).status&&(console.log(u.data),a({type:"LOGIN_SUCCESS",user:u.data}),b(u.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.request&&0===e.t0.request.status&&a({type:"LOGIN_FAIL",error:"Network error, please try again"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},l=function(){return{type:"LOGIN_STARTED"}},p=function(){var e=null,t=JSON.parse(localStorage.getItem("userInfo"));if(t){var r=(new Date).getTime(),n=Object.entries(t).filter((function(e){return"seconds"===e[0]}));return parseInt(n[0][1])+36e5<parseInt(r)?localStorage.removeItem("userInfo"):e=t,e}},b=function(e){localStorage.setItem("userInfo",JSON.stringify(e))}},26:function(e,t,r){e.exports={landingpage:"LandingPage_landingpage__1iu_j",title2:"LandingPage_title2__1sZp1",mainimagedesktop:"LandingPage_mainimagedesktop__JYoUa",running:"LandingPage_running__3KYBq",swimming:"LandingPage_swimming___Du1A",cycling:"LandingPage_cycling__1rmui",catdetailsrunning:"LandingPage_catdetailsrunning__2wJsu",catdetailsswimming:"LandingPage_catdetailsswimming__1iHId",catdetailscycling:"LandingPage_catdetailscycling__1jP-c"}},4:function(e,t,r){e.exports={navbar:"NavBar_navbar__3L-WI",user:"NavBar_user__3iNNw",admin:"NavBar_admin__2yTRL",cart:"NavBar_cart__3X5Br",searchitem:"NavBar_searchitem__38Pze",logo:"NavBar_logo__2b9K_",search:"NavBar_search__27muG",results:"NavBar_results__2BT58",searchicon:"NavBar_searchicon__37RA9",cartdesktop:"NavBar_cartdesktop__--zPI",menu:"NavBar_menu__35aKG",store:"NavBar_store__1WRDm",links:"NavBar_links__VaUPB",categorylinks:"NavBar_categorylinks__25Tg4",sidemenu:"NavBar_sidemenu__ZDTA6",closebutton:"NavBar_closebutton__1kh64",sidecategories:"NavBar_sidecategories__eaHBo",sidesubcategories:"NavBar_sidesubcategories__2OaXd",categoryItem:"NavBar_categoryItem__2B6Yz",categoryItemMove:"NavBar_categoryItemMove__2rkby",dropdown:"NavBar_dropdown__HEr5k",categories:"NavBar_categories__hVmMN",subcategories:"NavBar_subcategories__7D0zJ",categoryImage:"NavBar_categoryImage__bQaQA"}},53:function(e,t,r){e.exports={shopbutton:"ShopButton_shopbutton__2O7W3"}},94:function(e,t,r){},95:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),a=r(28),s=r.n(a),o=r(17),i=r(18),u=r(20),d=r(19),l=r(7),p=r(11),b=r(26),j=r.n(b),O=r(53),h=r.n(O),m=function(e){var t=e.url,r=e.name;return Object(n.jsx)("div",{className:h.a.shopbutton,children:Object(n.jsxs)(l.b,{to:"".concat(t),children:[r," "]})})},f=function(){return Object(n.jsxs)("div",{className:j.a.landingpage,children:[Object(n.jsxs)("header",{children:["THE UK'S ",Object(n.jsx)("span",{children:"\xa0 NO.1 \xa0"})," ONLINE FITNESS STORE"]}),Object(n.jsx)("div",{className:j.a.mainimagedesktop,children:Object(n.jsx)("img",{src:"".concat("/E-commerce-site-React-front-end","/images/swimming-landing-page.jpg"),alt:"Woman on a bike riding"})}),Object(n.jsxs)("header",{className:j.a.title2,children:[Object(n.jsxs)("strong",{children:["DM Sports ",Object(n.jsx)("span",{children:" + \xa0"})]}),"NEXT DAY DELIVERY AND FREE RETURNS FOR ONLY \xa0"," ",Object(n.jsx)("strong",{children:"\xa39.99"}),Object(n.jsx)("div",{children:Object(n.jsx)(m,{url:"/run",name:"SHOP NOW",width:"8rem"})})]}),Object(n.jsxs)("div",{className:j.a.running,children:[Object(n.jsxs)("div",{className:j.a.catdetailsrunning,children:[" ",Object(n.jsx)("p",{children:"RUN"}),Object(n.jsx)(m,{url:"/run",name:"SHOP"})]}),Object(n.jsx)("img",{src:"".concat("/E-commerce-site-React-front-end","/images/landing-page-run1.jpg"),alt:"Man running and red running jacket"})]}),Object(n.jsxs)("div",{className:j.a.cycling,children:[Object(n.jsx)("img",{src:"".concat("/E-commerce-site-React-front-end","/images/landing-page-cycle1.jpg"),alt:"cyclist and de rosa bike"}),Object(n.jsxs)("div",{className:j.a.catdetailscycling,children:[" ",Object(n.jsx)("p",{children:"CYCLE"}),Object(n.jsx)(m,{url:"/cycle",name:"SHOP"})]})]}),Object(n.jsxs)("div",{className:j.a.swimming,children:[Object(n.jsxs)("div",{className:j.a.catdetailsswimming,children:[" ",Object(n.jsx)("p",{children:"SWIM"}),Object(n.jsx)(m,{url:"/swim",name:"SHOP"})]}),Object(n.jsx)("img",{src:"".concat("/E-commerce-site-React-front-end","/images/landing-page-swim1.jpg"),alt:"woman swimming and a swim suit"})]})]})},g=r(38),_=r(108),E=r(12),S=r(4),v=r.n(S),y=function(){return Object(n.jsx)("div",{className:v.a.logo,children:Object(n.jsx)(l.c,{to:"/",children:Object(n.jsx)("img",{src:"https://webdev-davidm.github.io/E-commerce-front-end/images/logo.png",alt:"DM sports logo"})})})},x=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this.props,t=e.basketValue,r=e.basketNumber,c=t().Total,a=0!==r.length&&Object(n.jsxs)("span",{children:["\xa0",c,"\xa0\xa0(",r,")"]});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:v.a.cartdesktop,style:{width:"5rem",height:"2rem",color:"#2980b9"},children:Object(n.jsxs)(l.b,{to:"/shopping-basket",color:"red",children:[Object(n.jsx)("i",{className:"fas fa-shopping-cart",style:{width:"0.9rem",height:"0.9rem"},children:" "}),a]})}),Object(n.jsxs)("div",{className:v.a.cart,style:{width:"1.5rem",height:"1.5rem"},children:[" ",Object(n.jsx)(l.b,{to:"/shopping-basket",children:Object(n.jsx)("i",{color:"#2980b9",className:"fas fa-shopping-cart",style:{width:"100%",height:"100%"},children:" "})})," ",Object(n.jsx)("span",{children:r})]})]})}}]),r}(c.Component),C=Object(E.b)((function(e){return{basketNumber:e.products.basket.length,basketValue:function(){var t=0;return 0!==e.products.basket.length&&(t=e.products.basket.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}))),{Total:t}}}}))(x),w=r(10),T=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={showResults:!1,input:""},e.componentDidMount=function(){e.props.getProducts()},e.userInput=function(t){e.setState((function(e){return{showResults:!0,input:t.target.value}})),t.target.value.length>1&&e.props.search(t.target.value),0===t.target.value.length&&(e.props.getProducts(),e.setState({showResults:!1})),e.state.input.length>t.target.value.length&&e.props.search(t.target.value)},e.selectedItem=function(t){e.setState({showResults:!1,input:""}),e.props.history.push("/product/".concat(t))},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:v.a.search,children:[Object(n.jsx)("input",{disabled:!this.props.products,autoComplete:"off",value:this.state.input,onChange:function(t){return e.userInput(t)}}),Object(n.jsxs)("div",{className:v.a.searchicon,children:[Object(n.jsx)("i",{className:"fas fa-search "})," "]}),Object(n.jsx)(_.a,{in:this.state.showResults,timeout:500,classNames:"searchresultsdropdown",unmountOnExit:!0,children:Object(n.jsxs)("div",{className:v.a.results,children:[" ",this.props.products?0!==Object.keys(this.props.products)&&this.props.products.map((function(t,r){return Object(n.jsxs)("div",{className:v.a.searchitem,onClick:function(){return e.selectedItem(t._id)},children:[t.name,Object(n.jsx)("hr",{})]},r)})):null]})})]})})}}]),r}(c.Component),D=Object(p.g)(Object(E.b)((function(e){return{products:e.products.searchProducts}}),(function(e){return{getProducts:function(){return e(Object(w.r)())},search:function(t){return e(Object(w.s)(t))}}}))(T)),R=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).goToCategory=function(t){e.props.showDropDown(!1),e.props.history.push("".concat(e.props.chosenCategory,"/").concat(e.props.chosenSubCategory,"/").concat(t))},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.showSubCat,c=t.subCatToShow,a=t.showSubCategory,s=t.showDropDown,o=this.props,i=o.categories,u=o.chosenCategory,d=o.chosenSubCategory,p=Object.keys(i[u]);return Object(n.jsxs)("div",{className:v.a.dropdown,onMouseEnter:function(){return e.props.mouseEnter()},onMouseLeave:function(){return s(!1)},children:[Object(n.jsx)("div",{className:v.a.categories,children:p.map((function(e){var t=d===e?v.a.categoryItemMove:"";return Object(n.jsxs)("div",{className:"".concat(v.a.categoryItem," ").concat(t," "),onMouseEnter:function(e){c(e.target.textContent),r(!0)},children:[e,Object(n.jsx)("i",{className:"fas fa-arrow-right ".concat(t)})]},e)}))}),Object(n.jsx)("div",{className:v.a.subcategories,children:a?i[u][d].map((function(e,t){return Object(n.jsx)("div",{children:Object(n.jsx)(l.b,{to:"/".concat(u,"/").concat(d,"/").concat(e),children:e})},t)})):null})]})}}]),r}(c.Component),N=Object(p.g)(Object(E.b)((function(e){return{categories:e.products.categories,chosenCategory:e.products.chosenCategory,chosenSubCategory:e.products.chosenSubCategory,showSubCategory:e.products.showSubCategory}}),(function(e){return{showSubCat:function(t){return e(Object(w.x)(t))},subCatToShow:function(t){return e(Object(w.A)(t))},showDropDown:function(t){return e(Object(w.u)(t))}}}))(R)),I=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).goToCategory=function(t){e.props.showSideMenu(!1),e.props.history.push("".concat(e.props.chosenCategory,"/").concat(e.props.chosenSubCategory,"/").concat(t))},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.showSubCat,c=t.subCatToShow,a=t.showSideMenu,s=this.props,o=s.categories,i=s.chosenCategory,u=s.chosenSubCategory,d=s.showSubCategory,l=Object.keys(o[i]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:v.a.sidemenu,onMouseLeave:function(){return a(!1)},children:[Object(n.jsx)("div",{className:v.a.maincats}),Object(n.jsx)("div",{className:v.a.sidecategories,children:l.map((function(e,t){var a=u===e?v.a.categoryItemMove:"";return Object(n.jsxs)("div",{className:"".concat(v.a.categoryItem," ").concat(a," "),onClick:function(e){c(e.target.textContent),r(!0)},children:[e,Object(n.jsx)("i",{className:"fas fa-arrow-right ".concat(a)})]},t)}))}),Object(n.jsx)("div",{className:v.a.sidesubcategories,children:d?o[i][u].map((function(t){return Object(n.jsx)("div",{onClick:function(){return e.goToCategory(t)},children:t},t)})):null}),Object(n.jsx)("div",{className:v.a.closebutton,onClick:function(){return a(!1)},style:{width:"1.6rem",height:"1.6rem"},children:Object(n.jsx)("i",{className:"fas fa-window-close",style:{width:"inherit",height:"inherit",backgroundColor:"white"}})})]})})}}]),r}(c.Component),k=Object(p.g)(Object(E.b)((function(e){return{categories:e.products.categories,chosenCategory:e.products.chosenCategory,chosenSubCategory:e.products.chosenSubCategory,showSubCategory:e.products.showSubCategory}}),(function(e){return{showSubCat:function(t){return e(Object(w.x)(t))},subCatToShow:function(t){return e(Object(w.A)(t))},showSideMenu:function(t){return e(Object(w.w)(t))}}}))(I)),L=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.showDrop,c=t.showSide,a=t.showSubCat,s=t.signedIn,o=this.props,i=o.chosenCategory,u=o.showDropDown,d=o.showSideMenu,p=o.clearProds,b=o.getNewProducts;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:v.a.navbar,children:[Object(n.jsx)(y,{size:"2rem"}),Object(n.jsx)("div",{className:v.a.user,onMouseEnter:function(){return d(!0)},style:{width:"1.3rem",height:"1.3rem",color:"#ecf0f1"},children:" "}),Object(n.jsx)(D,{}),Object(n.jsx)("div",{className:v.a.user,onClick:function(){s?e.props.history.push("/account"):e.props.history.push("/sign-in")},style:{width:"1.3rem",height:"1.3rem",color:"#ecf0f1",marginLeft:"auto"},children:Object(n.jsx)("i",{className:"fas fa-user",style:{width:"100%",height:"100%"}})}),s&&this.props.admin?Object(n.jsx)(l.b,{className:v.a.admin,to:"/admin",children:"Admin"}):null,Object(n.jsx)(C,{}),Object(n.jsx)("div",{className:v.a.links,children:s?this.props.admin?Object(n.jsx)(l.b,{to:"/admin",children:"Admin"}):Object(n.jsx)(l.b,{to:"/account",children:"Your Account"}):Object(n.jsx)(l.b,{to:"/sign-in",children:"Sign in"})})]})}),Object(n.jsxs)("div",{className:v.a.categorylinks,children:[Object(n.jsx)(l.b,{onClick:function(){a(!1),u(!0),d(!0),i("cycle"),p(),b("cycle")},onMouseLeave:function(){return e.props.mouseEnter&&u(!1)},to:"/cycle",children:"CYCLE"}),Object(n.jsx)(l.b,{onClick:function(e){a(!1),i("run"),u(!0),d(!0),p(),b("run")},onMouseLeave:function(){return e.props.mouseEnter&&u(!1)},to:"/run",children:"RUN"}),Object(n.jsx)(l.b,{onClick:function(){a(!1),u(!0),d(!0),i("swim"),p(),b("swim")},onMouseLeave:function(){return e.props.mouseEnter&&u(!1)},to:"/swim",children:"SWIM"})]}),Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)(g.a,{query:"(min-width: 768px)",render:function(){return Object(n.jsx)(_.a,{in:r,timeout:300,classNames:"menufade",unmountOnExit:!0,children:Object(n.jsx)(N,{mouseEnter:function(){return u(!0)},mouseLeave:function(){return u(!1)},closeMain:e.closeDropMenu})})}})}),Object(n.jsx)(g.a,{query:"(max-width: 768px)",render:function(){return Object(n.jsx)(_.a,{in:c,timeout:300,classNames:"sidemenu",unmountOnExit:!0,children:Object(n.jsx)(k,{})})}})]})}}]),r}(c.Component),A=Object(p.g)(Object(E.b)((function(e){return{showSide:e.products.showSideMenu,showDrop:e.products.showDropDownMenu,signedIn:e.user.signedIn,admin:e.user.user.admin,products:e.products.products}}),(function(e){return{showSubCat:function(t){return e(Object(w.x)(t))},chosenCategory:function(t){return e(Object(w.t)(t))},showDropDown:function(t){return e(Object(w.u)(t))},showSideMenu:function(t){return e(Object(w.w)(t))},clearProds:function(){return e(w.c)},getNewProducts:function(t){return e(Object(w.o)(t))}}}))(L)),P=r(107),U=r(24),M=function(e){var t=e.component;return Object(U.a)()?Object(n.jsx)(t,{}):Object(n.jsx)(p.a,{to:"/"})},B=function(e){var t=e.component,r=Object(U.a)();return r&&r.admin?Object(n.jsx)(t,{}):Object(n.jsx)(p.a,{to:"/"})},F=(r(94),Object(c.lazy)((function(){return r.e(9).then(r.bind(null,140))}))),H=Object(c.lazy)((function(){return r.e(15).then(r.bind(null,141))})),W=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,142))})),z=Object(c.lazy)((function(){return r.e(16).then(r.bind(null,143))})),G=Object(c.lazy)((function(){return r.e(17).then(r.bind(null,144))})),V=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,151))})),q=Object(c.lazy)((function(){return r.e(8).then(r.bind(null,152))})),Y=Object(c.lazy)((function(){return r.e(7).then(r.bind(null,153))})),K=Object(c.lazy)((function(){return r.e(12).then(r.bind(null,145))})),J=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,150))})),Q=Object(c.lazy)((function(){return r.e(11).then(r.bind(null,146))})),X=Object(c.lazy)((function(){return r.e(14).then(r.bind(null,147))})),Z=Object(c.lazy)((function(){return r.e(13).then(r.bind(null,148))})),$=Object(c.lazy)((function(){return r.e(6).then(r.bind(null,149))})),ee=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={showArrowToTop:!1,userTokenExpired:!1},e.componentDidUpdate=function(t){t.userSignedIn&&(!Object(U.a)()&&e.props.user.signedIn&&(e.setState({userTokenExpired:!0}),e.props.logOut(),Object.keys(localStorage).forEach((function(e){!0===/^item/.test(e)&&localStorage.removeItem(e)})),e.props.clearBasket()))},e.tokenExpired=function(){e.setState({userTokenExpired:!0})},e.componentDidMount=function(){window.addEventListener("scroll",(function(){window.scrollY>122&&e.setState({showArrowToTop:!0}),window.innerHeight-122<window.innerHeight-window.scrollY&&e.setState({showArrowToTop:!1})}));var t=e.props,r=t.basket,n=t.addBasket;0!==r.length&&(Object.keys(localStorage).map((function(e){return"userInfo"!==e&&localStorage.removeItem("".concat(e))})),r.map((function(e,t){return localStorage.setItem("item".concat(t),JSON.stringify(e))})));var c=Object(U.a)();c&&e.props.addAuthenticateduserToRedux(c);var a=Object.keys(localStorage).filter((function(e){return!0===/^item/.test(e)}));0===r.length&&a&&a.map((function(e){var t=JSON.parse(localStorage.getItem(e));return n(t)}))},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"App",children:[this.props.loadingUser||this.props.loadingProducts||this.props.loadingOrders?Object(n.jsx)("div",{className:"generic-loading-container",children:Object(n.jsx)(P.a,{style:{color:"#f1c40f",size:"4rem"}})}):null,this.state.userTokenExpired&&Object(n.jsx)("div",{className:"signin-modal",children:Object(n.jsxs)("div",{className:"signin-popup",children:[Object(n.jsx)("span",{children:"Your logged in session has expired, please log back in"}),Object(n.jsx)("button",{className:"closebtn",onClick:function(){return e.setState({userTokenExpired:!1})},children:"Ok"})]})}),Object(n.jsxs)(l.a,{basename:"".concat("/E-commerce-site-React-front-end"),children:[Object(n.jsx)(A,{}),Object(n.jsx)(c.Suspense,{fallback:Object(n.jsx)("div",{className:"spinner-container",children:Object(n.jsx)(P.a,{style:{color:"#f1c40f",size:"4rem"}})}),children:Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{exact:!0,path:"/",component:f}),Object(n.jsx)(p.b,{exact:!0,path:"/sign-in",component:z}),Object(n.jsx)(p.b,{exact:!0,path:"/sign-up/:email",component:G}),Object(n.jsx)(p.b,{exact:!0,path:"/run",component:Y}),Object(n.jsx)(p.b,{exact:!0,path:"/cycle",component:Y}),Object(n.jsx)(p.b,{exact:!0,path:"/swim",component:Y}),Object(n.jsx)(p.b,{exact:!0,path:"/product/:id",component:V}),Object(n.jsx)(p.b,{exact:!0,path:"/shopping-basket",component:q}),Object(n.jsx)(M,{exact:!0,path:"/account",component:F}),Object(n.jsx)(M,{exact:!0,path:"/check-out",component:$}),Object(n.jsx)(p.b,{exact:!0,path:"/order/:id",render:function(){return Object(U.a)()?Object(n.jsx)(Q,{}):Object(n.jsx)(p.a,{to:"/"})}}),Object(n.jsx)(B,{exact:!0,path:"/admin",component:H}),Object(n.jsx)(B,{exact:!0,path:"/admin/create",component:Z}),Object(n.jsx)(p.b,{exact:!0,path:"/admin/product/:id",render:function(){var e=Object(U.a)();if(e&&e.admin)return Object(n.jsx)(X,{});p.a}}),Object(n.jsx)(B,{exact:!0,path:"/admin-orders",component:W}),Object(n.jsx)(p.b,{exact:!0,path:"/:category/:type/:subcat",component:J}),Object(n.jsx)(p.b,{component:K})]})})]})]}),Object(n.jsx)(_.a,{in:this.state.showArrowToTop,onClick:function(){return window.scrollTo(0,0)},timeout:500,classNames:"menuarrow",unmountOnExit:!0,children:Object(n.jsx)("div",{className:"menuarrow",children:Object(n.jsx)("i",{className:"fas fa-arrow-circle-up"})})})]})}}]),r}(c.Component),te=Object(E.b)((function(e){return{loadingUser:e.user.loading,loadingProducts:e.products.loading,loadingOrders:e.orders.loading,adminUser:e.user.user.admin,userSignedIn:e.user.signedIn,basket:e.products.basket,user:e.user}}),(function(e){return{logOut:function(){return e(Object(U.b)())},addAuthenticateduserToRedux:function(t){return e({type:"LOGIN_SUCCESS",user:t})},addBasket:function(t){return e(Object(w.a)(t))},clearBasket:function(){return e(Object(w.m)())}}}))(ee),re=r(30),ne=r(2),ce={user:{firstName:null,lastName:null,id:null,token:"",admin:null},error:null,loading:!1,signedIn:!1};var ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_STARTED":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!0});case"USER_LOGGED_OUT":return Object(ne.a)(Object(ne.a)({},e),{},{signedIn:!1,admin:!1});case"LOGIN_SUCCESS":return Object(ne.a)(Object(ne.a)({},e),{},{user:t.user,loading:!1,signedIn:!0,error:null});case"LOGIN_FAIL":return Object(ne.a)(Object(ne.a)({},e),{},{error:t.error,loading:!1});default:return e}},se=r(35),oe=r(32),ie={loading:!1,products:[],showDropDownMenu:!1,showSideMenu:!1,chosenCategory:"cycle",showSubCategory:!1,chosenSubCategory:"bikes",selectedProduct:[],basket:[],basketValue:0,filteredBrands:[],reviewError:null,reviewSuccess:null,searchProducts:null,serverError:null,globalFilterReset:!1,filterStock:!1,filterBrand:!1,filterPrice:!1,filterLowerPrice:0,filterHigherPrice:0,filterReview:!1,productCreatedModal:!1,productDeletedModal:!1,productEditedModal:!1,latestCreatedProductId:"",latestEditedProductId:"",categories:{cycle:{bikes:["Mountain bikes","Hybrid bikes","Road bikes"],helmets:["Helmets","Protection"]},run:{clothing:["Tops","Legwear","Jackets"],footwear:["Running Shoes","Trail Shoes"]},swim:{shorts:["Swimming shorts","Swimming briefs"],swimsuits:["One piece","Two piece"]}}};var ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_PRODUCTS":return Object(ne.a)(Object(ne.a)({},e),{},{products:[]});case"ALLPRODUCTS_SUCCESS":return Object(ne.a)(Object(ne.a)({},e),{},{searchProducts:t.products});case"PRODUCTS_REQUESTED":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!0});case"PRODUCTS_SUCCESS":return Object(ne.a)(Object(ne.a)({},e),{},{products:t.products,loading:!1});case"PRODUCT_SUCCESS":return Object(ne.a)(Object(ne.a)({},e),{},{selectedProduct:t.product,loading:!1});case"SEARCH_PRODUCTS":var r=e.searchProducts.filter((function(e){return e.name.toLowerCase().includes(t.searchValue.toLowerCase())}));return Object(ne.a)(Object(ne.a)({},e),{},{searchProducts:r});case"PRODUCTS_FAIL":case"ALLPRODUCTS_FAIL":return Object(ne.a)(Object(ne.a)({},e),{},{serverError:t.error,loading:!1});case"CATEGORY_CHOSEN":return Object(ne.a)(Object(ne.a)({},e),{},{chosenCategory:t.category});case"SHOW_DROP_DOWN":return Object(ne.a)(Object(ne.a)({},e),{},{showDropDownMenu:t.bool});case"SHOW_SIDE_MENU":return Object(ne.a)(Object(ne.a)({},e),{},{showSideMenu:t.bool});case"SHOW_SUB_CATEGORY":return Object(ne.a)(Object(ne.a)({},e),{},{showSubCategory:t.bool});case"CHOSEN_PRODUCT":var n=e.products.filter((function(e){return e._id===t.id}));return Object(ne.a)(Object(ne.a)({},e),{},{selectedProduct:n[0]});case"SUB_CAT_SELECTED":return Object(ne.a)(Object(ne.a)({},e),{},{chosenSubCategory:t.subcat});case"CLEAR_SELECTED_PRODUCTS":return Object(ne.a)(Object(ne.a)({},e),{},{selectedProduct:[]});case"FILTERED_BRANDS":return Object(ne.a)(Object(ne.a)({},e),{},{filteredBrands:t.brands});case"CHOSEN_BRAND":console.log(t);var c=Object(oe.a)(e.products),a=c.filter((function(e){return e.brand===t.brand}));return Object(ne.a)(Object(ne.a)({},e),{},{products:a,filterBrand:t.brand});case"RESET_ALL_FILTERS":return console.log(t.bool),t.bool?Object(ne.a)(Object(ne.a)({},e),{},{globalFilterReset:t.bool,filterStock:!1,filterBrand:!1,filterPrice:!1,filterReview:!1,filterHigherPrice:0,filterLowerPrice:0}):Object(ne.a)(Object(ne.a)({},e),{},{globalFilterReset:t.bool});case"FILTERED_IN_STOCK":var s=e.products.filter((function(e){return 0!==e.stock}));return Object(ne.a)(Object(ne.a)({},e),{},{products:s,filterStock:!0});case"SORT_BY_BEST_REVIEWS":return Object(ne.a)(Object(ne.a)({},e),{},{products:t.products,filterReview:!0});case"CLEAR_REVIEW_FILTER":return Object(ne.a)(Object(ne.a)({},e),{},{products:t.products});case"UPDATE_PRICE_RANGE":return!0===t.higher?Object(ne.a)(Object(ne.a)({},e),{},{filterHigherPrice:t.price}):Object(ne.a)(Object(ne.a)({},e),{},{filterLowerPrice:t.price});case"FILTER_PRICE_RANGE":var o=e.products.filter((function(e){return e.price>=t.lower&e.price<=t.higher}));return Object(ne.a)(Object(ne.a)({},e),{},{products:o,filterPrice:!0});case"UPDATE_BASKET":var i=Object(oe.a)(e.basket);return i[t.noPos].quantity=t.quantity,Object(ne.a)(Object(ne.a)({},e),{},{basket:i});case"EMPTY_BASKET":return Object(ne.a)(Object(ne.a)({},e),{},{basket:[]});case"DELETE_ITEM_FROM_BASKET":var u=Object(oe.a)(e.basket),d=u.findIndex((function(e){return e.id===t.id&&e.size===t.size}));return u.splice(d,1),Object(ne.a)(Object(ne.a)({},e),{},{basket:u});case"ADD_TO_BASKET":var l=Object(oe.a)(e.basket);l.push(t.itemInfo);var p=0===e.basket.length?t.itemInfo.price:t.itemInfo.price+e.basket.reduce((function(e,t){return e+t.price*t.quantity}),t.itemInfo.price);return Object(ne.a)(Object(ne.a)({},e),{},{basket:l,basketValue:p});case"CLEAR_REVIEW_STATUS":return Object(ne.a)(Object(ne.a)({},e),{},{reviewError:null,reviewSuccess:null});case"REVIEW_SENT":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!0,reviewError:null});case"REVIEW_SUCCESS":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!1,reviewSuccess:!0});case"REVIEW_FAIL":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!1,reviewError:t.error,reviewSuccess:!1});case"CREATE_PRODUCT":case"EDIT_PRODUCT":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!0});case"PRODUCT_CREATED_SUCCESS":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!1,productCreatedModal:!0,latestCreatedProductId:t.productId});case"PRODUCT_EDIT_SUCCESS":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!1,productEditedModal:!0,latestEditedProductId:t.productId});case"CLOSE_ADMIN_PRODUCT_MODAL":return Object(ne.a)(Object(ne.a)({},e),{},{productCreatedModal:!1});case"UPDATE_PRODUCT_IN_REDUX_STATE":var b=t.key,j=t.value;return Object(ne.a)(Object(ne.a)(Object(ne.a)({},e),e.selectedProduct),{},Object(se.a)({},b,j));case"DELETE_PRODUCT":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!0});case"PRODUCT_DELETED_SUCCESS":return Object(ne.a)(Object(ne.a)({},e),{},{productDeletedModal:!0,loading:!1});case"CLOSE_ADMIN_DELETE_MODAL":return Object(ne.a)(Object(ne.a)({},e),{},{productDeletedModal:!1,chosenCategory:t.category});case"CLOSE_ADMIN_EDIT_MODAL":return Object(ne.a)(Object(ne.a)({},e),{},{productEditedModal:!1});default:return e}},de={loading:!1,orders:[],order:null,showOrdersModal:!1,errors:null};var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORDER_SENT":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!0});case"ORDER_SUCCESS":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!1,showOrdersModal:!0,errors:null});case"ORDER_LIST_RECEIVED":case"ADMIN_ALL_USER_ORDERS_SUCCESS":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!1,orders:t.orders});case"ORDER_FAIL":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!1,showOrdersModal:!0,errors:"Network error, please try again"});case"INDIVDUAL_ORDER_SUCCESS":return Object(ne.a)(Object(ne.a)({},e),{},{loading:!1,order:t.order[0]});case"CLOSE_MODAL":return Object(ne.a)(Object(ne.a)({},e),{},{showOrdersModal:!1,error:null});default:return e}},pe=r(59),be=r(60),je=Object(re.combineReducers)({user:ae,products:ue,orders:le}),Oe=Object(re.createStore)(je,Object(pe.composeWithDevTools)(Object(re.applyMiddleware)(be.a)));s.a.render(Object(n.jsx)(E.a,{store:Oe,children:Object(n.jsx)(te,{})}),document.getElementById("root"))}},[[95,2,3]]]);
//# sourceMappingURL=main.4334d9df.chunk.js.map