(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[11],{109:function(e,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"e",(function(){return u})),t.d(r,"c",(function(){return d})),t.d(r,"d",(function(){return l})),t.d(r,"a",(function(){return p}));var s=t(6),n=t.n(s),a=t(15),i=t(13),c=t.n(i),o=function(e){var r=e.admin;return console.log(r),function(){var e=Object(a.a)(n.a.mark((function e(t){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"ORDER_SENT"}),e.prev=1,e.next=4,c()({method:"get",url:"https://my-ecommerce-site-fitness.herokuapp.com/adminuser/allorders",headers:{token:r.token,email:r.email}});case 4:200===(s=e.sent).status&&(console.log(s.data),t({type:"ADMIN_ALL_USER_ORDERS_SUCCESS",orders:s.data})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.request&&0===e.t0.request.status&&t({type:"ORDER_FAIL",error:"Network error, please try again"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()},u=function(e){return function(){var r=Object(a.a)(n.a.mark((function r(t){var s;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t({type:"ORDER_SENT"}),r.prev=1,r.next=4,c()({method:"post",url:"https://my-ecommerce-site-fitness.herokuapp.com/orders/new-order",data:{orderInfo:e},headers:{token:e.token}});case 4:201===(s=r.sent).status&&t({type:"ORDER_SUCCESS",products:s.data}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),r.t0.request&&0===r.t0.request.status&&t({type:"ORDER_FAIL",error:"Network error, please try again"});case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()},d=function(e){return function(){var r=Object(a.a)(n.a.mark((function r(t){var s,a;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=JSON.parse(localStorage.getItem("userInfo")),t({type:"ORDER_SENT"}),r.prev=2,r.next=5,c()({method:"get",url:"https://my-ecommerce-site-fitness.herokuapp.com/orders/order/".concat(e),headers:{token:s.token,userId:s.id}});case 5:200===(a=r.sent).status&&t({type:"INDIVDUAL_ORDER_SUCCESS",order:a.data}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),t({type:"ORDER_FAIL",error:r.t0.response.data});case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}()},l=function(e){var r=e.token,t=e.user;return function(){var e=Object(a.a)(n.a.mark((function e(s){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"ORDER_SENT"}),e.prev=1,e.next=4,c()({method:"get",url:"https://my-ecommerce-site-fitness.herokuapp.com/orders/".concat(t),headers:{token:r}});case 4:200===(a=e.sent).status&&s({type:"ORDER_LIST_RECEIVED",orders:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:"ORDER_FAIL",error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()},p=function(){return{type:"CLOSE_MODAL"}}},137:function(e,r,t){e.exports={heading:"OrderDetails_heading__1IQky",orderscontainer:"OrderDetails_orderscontainer__3ZvNv",shippingpaymentcontainer:"OrderDetails_shippingpaymentcontainer__peVSw",submitreviewbtn:"OrderDetails_submitreviewbtn__3NjGc",reviewbtn:"OrderDetails_reviewbtn__1u5Ft",reviewcontainer:"OrderDetails_reviewcontainer__2a6D1",itemdetails:"OrderDetails_itemdetails__2G89A",review:"OrderDetails_review__2FFrq",reviewfail:"OrderDetails_reviewfail__3WdDX",reviewsuccess:"OrderDetails_reviewsuccess__NEOD5",gobackbtn:"OrderDetails_gobackbtn__vm0xt",orderitemscontainer:"OrderDetails_orderitemscontainer__2hY96",star:"OrderDetails_star__jIlB6",imagecontainer:"OrderDetails_imagecontainer__eP52I",hr:"OrderDetails_hr__2y_WG",status:"OrderDetails_status__1iNBE",ordersummarycontainer:"OrderDetails_ordersummarycontainer__1fcE2",details:"OrderDetails_details__NYox4"}},146:function(e,r,t){"use strict";t.r(r),t.d(r,"mapStateToProps",(function(){return h})),t.d(r,"mapDispatchToProps",(function(){return O}));var s=t(0),n=t(17),a=t(18),i=t(20),c=t(19),o=t(1),u=t(12),d=t(11),l=t(137),p=t.n(l),m=t(109),v=t(10),j=function(e){Object(i.a)(t,e);var r=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=r.call.apply(r,[this].concat(a))).state={rating:0,review:"",stars:[1,2,3,4,5],reviewInProgress:!1,productToReviewIndex:0,error:null},e.componentDidMount=function(){var r=e.props.match.params.id;console.log(r),(0,e.props.getOrder)(r)},e.componentWillUnmount=function(){e.setState({error:null}),e.props.clearStatus()},e.startReview=function(r){e.props.clearStatus(),e.setState({rating:0,review:"",reviewInProgress:!0,productToReviewIndex:r,error:null})},e.submitReview=function(){var r=e.props,t=r.submitUserReview,s=r.order;(console.log(s.user._id),""!==e.state.review&&0!==e.state.rating)?(e.setState({error:null,reviewInProgress:!1}),t({productId:s.orderItems[e.state.productToReviewIndex].item,userId:s.user._id,firstName:s.user.firstName,rating:e.state.rating,comment:e.state.review})):e.setState({error:"Please giving a star rating and review"})},e}return Object(a.a)(t,[{key:"render",value:function(){var e=this,r=this.props.order;return console.log(this.props.error),Object(s.jsx)(s.Fragment,{children:null!==r&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("span",{className:p.a.gobackbtn,onClick:function(){return e.props.history.goBack()},children:"Go back"}),Object(s.jsxs)("h2",{className:p.a.heading,children:["Order ",r._id]}),Object(s.jsxs)("div",{className:p.a.orderscontainer,children:[Object(s.jsxs)("div",{className:p.a.shippingpaymentcontainer,children:[Object(s.jsx)("h3",{children:"SHIPPING"}),Object(s.jsx)("div",{className:p.a.status,children:r.status}),Object(s.jsx)("div",{className:p.a.hr}),Object(s.jsx)("h3",{children:"PAYMENT"}),Object(s.jsx)("span",{children:"Method: Paypal"}),Object(s.jsx)("div",{className:p.a.status,children:"Paid"})]}),Object(s.jsxs)("div",{className:p.a.orderitemscontainer,children:[Object(s.jsx)("h2",{children:"Order Items"}),r.orderItems.map((function(r,t){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:p.a.itemdetails,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:p.a.details,children:r.name}),Object(s.jsxs)("span",{className:p.a.details,children:["\xa0:\xa0quantity\xa0",r.qty," x \xa3",r.price," ","= \xa3",r.price*r.qty]}),e.props.reviewSuccess&&e.state.productToReviewIndex===t?Object(s.jsx)("p",{className:p.a.reviewsuccess,children:"Reviewed successfully"}):null,e.props.error&&e.state.productToReviewIndex===t?Object(s.jsx)("p",{className:p.a.reviewfail,children:e.props.error}):null]}),!e.state.reviewInProgress&&Object(s.jsx)("span",{className:p.a.reviewbtn,onClick:function(){return e.startReview(t)},children:"Submit a review"})]}),e.state.reviewInProgress&&e.state.productToReviewIndex===t&&Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:p.a.reviewcontainer,children:[Object(s.jsx)("div",{children:"Rating"}),Object(s.jsx)("div",{children:e.state.stars.map((function(r){var t=e.state.rating>=r?{color:"#f1c40f"}:null;return Object(s.jsx)("span",{className:p.a.star,onClick:function(){return e.setState({rating:r})},style:t,children:Object(s.jsx)("i",{className:"fas fa-star"})})}))}),Object(s.jsx)("div",{children:"Review"}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{onChange:function(r){return e.setState({review:r.target.value})},value:e.state.review,className:p.a.review,type:"textarea"})}),Object(s.jsx)("span",{className:p.a.submitreviewbtn,onClick:function(){return e.submitReview()},children:"Submit your review"}),e.state.error&&Object(s.jsx)("span",{className:p.a.submitreviewbtn,style:{backgroundColor:"#e74c3c"},children:e.state.error})]})})]})}))]}),Object(s.jsxs)("div",{className:p.a.ordersummarycontainer,children:[Object(s.jsx)("h3",{children:"ORDER SUMMARY"}),Object(s.jsxs)("span",{children:["Items: \xa3",r.total]}),Object(s.jsx)("span",{children:"Delivery: \xa349"}),Object(s.jsxs)("span",{children:["Total \xa3",r.total+49]}),Object(s.jsxs)("span",{children:["Name: ",r.user.firstName," ",r.user.lastName]}),Object(s.jsxs)("span",{children:["Email: ",r.user.email]}),Object(s.jsxs)("span",{children:["Address: ",r.user.address]})]})]})]})})}}]),t}(o.Component),h=function(e){return{order:e.orders.order,error:e.products.reviewError,reviewSuccess:e.products.reviewSuccess}},O=function(e){return{getOrder:function(r){return e(Object(m.c)(r))},submitUserReview:function(r){return e(Object(v.B)(r))},clearStatus:function(){return e(Object(v.d)())}}};r.default=Object(d.g)(Object(u.b)(h,O)(j))}}]);
//# sourceMappingURL=11.f08c4eed.chunk.js.map