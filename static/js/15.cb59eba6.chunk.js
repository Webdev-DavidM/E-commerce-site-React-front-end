(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[15],{114:function(t,e,n){t.exports={adminproducts:"Admin_adminproducts__9Z1jq",productmodal:"Admin_productmodal__VvgHI",product:"Admin_product__1vrmw",productbtn:"Admin_productbtn__lAt82",ordersbtn:"Admin_ordersbtn__3mNBw",title:"Admin_title__2fKp3",categorybtns:"Admin_categorybtns__25uVw",createbtn:"Admin_createbtn__1mN7q",logoutbtn:"Admin_logoutbtn__17zy8",editformcontainer:"Admin_editformcontainer__15hb-",productlist:"Admin_productlist__1el2J",productitem:"Admin_productitem__3Nkz0",buttoncontainer:"Admin_buttoncontainer__3C0R5",editbtn:"Admin_editbtn__2jH2I",deletebtn:"Admin_deletebtn__5nkql",continueshoppingbtn:"Admin_continueshoppingbtn__3I7fe"}},141:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(17),o=n(18),s=n(20),i=n(19),d=n(12),a=n(1),u=n(11),l=n(114),p=n.n(l),b=n(24),j=n(10),m=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).componentDidMount=function(){(0,t.props.displayCategory)("cycle")},t.delete=function(e,n){var c={id:e,admin:t.props.user,cat:n};t.props.deleteProd(c)},t.createProduct=function(){t.props.history.push("/admin/create")},t.chosenCategory=function(e){(0,t.props.displayCategory)(e)},t.closeModal=function(){t.props.closeModal()},t.logOut=function(){t.props.logOut(),t.props.history.push("/")},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.categories,r=e.products,o=e.deletedModal,s=Object.keys(n);return Object(c.jsxs)("div",{className:p.a.adminproducts,children:[o&&Object(c.jsx)("div",{className:p.a.productmodal,children:Object(c.jsxs)("div",{className:p.a.product,children:[Object(c.jsxs)("h2",{style:{textAlign:"center"},children:[" ",Object(c.jsx)("i",{className:"fas fa-check"}),"\xa0Product deleted!"]}),Object(c.jsx)("button",{className:p.a.productbtn,onClick:function(){return t.closeModal()},children:"Ok"})]})}),Object(c.jsxs)("header",{className:p.a.title,children:[Object(c.jsx)("p",{children:"ADMIN SECTION"}),Object(c.jsx)("button",{onClick:function(){return t.createProduct()},className:p.a.createbtn,children:"Create product"}),Object(c.jsx)("button",{onClick:function(){return t.props.history.push("/admin-orders")},className:p.a.ordersbtn,children:"View orders"}),Object(c.jsx)("button",{onClick:function(){return t.logOut()},className:p.a.logoutbtn,children:"Log out"})]}),Object(c.jsxs)("div",{className:p.a.categorybtns,children:[Object(c.jsx)("p",{children:"CATEGORIES"}),s.map((function(e){return Object(c.jsx)("button",{onClick:function(){return t.chosenCategory(e)},children:e},e)}))]}),Object(c.jsx)("div",{className:p.a.productlist,children:r.map((function(e,n){return Object(c.jsxs)("div",{className:p.a.productitem,children:[Object(c.jsxs)("span",{children:["Name: ",e.name]}),Object(c.jsxs)("span",{children:["Price: \xa3",e.price]}),Object(c.jsxs)("span",{children:["Category: ",e.subcategory]}),Object(c.jsxs)("span",{children:["Brand: ",e.brand]}),Object(c.jsxs)("div",{className:p.a.buttoncontainer,children:[Object(c.jsx)("button",{onClick:function(){return t.props.history.push("/admin/product/".concat(e._id))},className:p.a.editbtn,children:"Edit"}),Object(c.jsx)("button",{onClick:function(){return t.delete(e._id,e.category)},className:p.a.deletebtn,children:"Delete"})]})]},n)}))})]})}}]),n}(a.Component);e.default=Object(u.g)(Object(d.b)((function(t){return{products:t.products.products,categories:t.products.categories,user:t.user.user,deletedModal:t.products.productDeletedModal,chosenCat:t.products.chosenCategory}}),(function(t){return{displayCategory:function(e){return t(Object(j.o)(e))},logOut:function(){return t(Object(b.b)())},deleteProd:function(e){return t(Object(j.l)(e))},closeModal:function(){return t(Object(j.f)())}}}))(m))}}]);
//# sourceMappingURL=15.cb59eba6.chunk.js.map