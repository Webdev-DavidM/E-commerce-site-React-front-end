(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[14],{112:function(e,t,r){e.exports={editproductcontainer:"AdminEditProduct_editproductcontainer__-7HGn",viewproductbtn:"AdminEditProduct_viewproductbtn__1keID",editproductbtn:"AdminEditProduct_editproductbtn__X-IQt",productmodal:"AdminEditProduct_productmodal__1_gN0",product:"AdminEditProduct_product__1Xq2H",productbtn:"AdminEditProduct_productbtn__2owQS",sizeinput:"AdminEditProduct_sizeinput__MsJWt",smallcontainer:"AdminEditProduct_smallcontainer__2CSn-",sizecontainer:"AdminEditProduct_sizecontainer__2oFZw",submitbtn:"AdminEditProduct_submitbtn__1qqvg",uploadbtn:"AdminEditProduct_uploadbtn__2HCNA",editformcontainer:"AdminEditProduct_editformcontainer___iEOK",gobackbtn:"AdminEditProduct_gobackbtn__1XhHE",dropdown:"AdminEditProduct_dropdown__-Rqya",imagecontainer:"AdminEditProduct_imagecontainer__1Zpxi",imagebtn:"AdminEditProduct_imagebtn__1uc10",imagehover:"AdminEditProduct_imagehover__2766O",error:"AdminEditProduct_error__1bF4x"}},147:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(35),o=r(32),s=r(17),c=r(18),i=r(20),u=r(19),d=r(1),l=r(7),p=r(12),m=r(11),b=r(112),h=r.n(b),j=r(10),g=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).componentDidMount=function(){(0,a.props.getProductFromServer)(a.props.location.pathname.split("/")[3])},a.componentDidUpdate=function(e,t){var r=a.props.product,n=r.name,o=r.price,s=r.brand,c=r.colour,i=r.category,u=r.subcategory,d=r.description;a.props.images===e.images&&a.props.product!==e.product&&void 0!==a.props.product.size&&a.setState({name:n,price:o,brand:s,colour:c,chosenSubCat:u,small:a.props.product.size[0].small,medium:a.props.product.size[0].medium,large:a.props.product.size[0].large,category:i,subcategory:[u],description:d})},a.componentWillUnmount=function(){a.props.clearProduct()},a.handleSubmit=function(e){e.preventDefault(),a.setState({errors:[]});var t=a.props.user;a.setState({errors:[]});var r=!0;if(""===a.state.name&&(a.setState((function(e){return{errors:[].concat(Object(o.a)(e.errors),["Please provide a value for name"])}})),r=!1),""!==a.state.small&&Number.isInteger(parseInt(a.state.small))||(a.setState((function(e){return{errors:[].concat(Object(o.a)(e.errors),["Please provide a value for small"])}})),r=!1),""!==a.state.medium&&Number.isInteger(parseInt(a.state.medium))||(a.setState((function(e){return{errors:[].concat(Object(o.a)(e.errors),["Please provide a value for medium"])}})),r=!1),""!==a.state.large&&Number.isInteger(parseInt(a.state.large))||(a.setState((function(e){return{errors:[].concat(Object(o.a)(e.errors),["Please provide a value for large"])}})),r=!1),""===a.state.colour&&(a.setState((function(e){return{errors:[].concat(Object(o.a)(e.errors),["Please provide a value for colour"])}})),r=!1),0!==a.state.price&&Number.isInteger(parseInt(a.state.price))||(a.setState((function(e){return{errors:[].concat(Object(o.a)(e.errors),["Please provide a value for price"])}})),r=!1),0===a.props.product.images.length&&(a.setState((function(e){return{errors:[].concat(Object(o.a)(e.errors),["Please provide at least one image"])}})),r=!1),""===a.state.brand&&(a.setState((function(e){return{errors:[].concat(Object(o.a)(e.errors),["Please provide a value for brand"])}})),r=!1),""===a.state.category&&(a.setState((function(e){return{errors:[].concat(Object(o.a)(e.errors),["Please provide a value for category"])}})),r=!1),""===a.state.description&&(a.setState((function(e){return{errors:[].concat(Object(o.a)(e.errors),["Please provide a value for description"])}})),r=!1),""===a.state.chosenSubCat&&a.setState((function(e){return{errors:[].concat(Object(o.a)(e.errors),["Please provide a value for subcategory"])}})),r){var n={data:{name:a.state.name,price:a.state.price,brand:a.state.brand,colour:a.state.colour,size:{small:a.state.small,medium:a.state.medium,large:a.state.large},category:a.state.category,subcategory:a.state.chosenSubCat,description:a.state.description},admin:{email:t.email,token:t.token},productId:a.props.product._id};a.props.updateProduct(n)}},a.viewProduct=function(){a.props.history.push("/product/".concat(a.props.product._id)),a.props.closeModal()},a.removeImage=function(e){var t=a.props.user,r=t.email,n=t.token;a.props.deleteImage({index:e,id:a.props.product._id,admin:{email:r,token:n}})},a.updateCat=function(e){if("blank"!==e.target.value){var t=Object.keys(a.props.categories[e.target.value]),r=[];t.forEach((function(t){return[a.props.categories[e.target.value][t].forEach((function(e){return r.push(e)}))]})),console.log(r),a.setState({category:e.target.value,subcategory:r})}},a.updateSubCat=function(e){a.setState({chosenSubCat:e.target.value})},a.handleChange=function(e){if(e.target.files){var t=a.props.user,r=t.email,o=t.token,s=new FormData;s.append("image",e.target.files[0]),a.props.uploadImage({formData:s,id:a.props.product._id,admin:{email:r,token:o}})}else a.setState(Object(n.a)({},e.target.name,e.target.value))},a.editMore=function(){a.props.closeModal(),a.props.history.push("/admin")},a.state={name:"",price:0,imagesToDisplay:[],imagesArrayForMulter:[],brand:"",small:0,medium:0,large:0,size:"",category:"",subcategory:[],chosenSubCat:"",description:"",errors:[],colour:"",showModal:!1},a.initialState=a.state,a}return Object(c.a)(r,[{key:"render",value:function(){var e=this,t=this.props.categories,r=this.props.product,n=this.props.showModal,o=Object.keys(t).map((function(e,t){return Object(a.jsx)("option",{name:"category",value:e,children:e},"category".concat(t))}));return o.unshift(Object(a.jsxs)("option",{defaultValue:!0,value:"blank",children:["-- select an option --"," "]},"blank-option")),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:h.a.editproductcontainer,children:[n&&Object(a.jsx)("div",{className:h.a.productmodal,children:Object(a.jsxs)("div",{className:h.a.product,children:[Object(a.jsxs)("h2",{style:{textAlign:"center",color:"#2c3e50"},children:[" ",Object(a.jsx)("i",{className:"fas fa-check"}),"\xa0Product edited successfully! Would you like to"," "]}),Object(a.jsx)("button",{onClick:function(){return e.viewProduct()},className:h.a.viewproductbtn,children:"View the product in our store"}),Object(a.jsx)("button",{onClick:function(){return e.editMore()},className:h.a.editproductbtn,children:"Edit another product"})]})}),Object(a.jsx)("h4",{children:Object(a.jsxs)("button",{className:h.a.gobackbtn,children:[Object(a.jsx)(l.b,{style:{color:"#ecf0f1"},to:"/admin",children:"Go back"})," "]})}),Object(a.jsx)("h2",{children:"EDIT PRODUCT"}),Object(a.jsxs)("div",{className:h.a.editformcontainer,children:[Object(a.jsxs)("form",{onSubmit:this.handleSubmit,encType:"multipart/form-data",children:[Object(a.jsxs)("label",{children:["Name:",Object(a.jsx)("input",{placeholder:r&&r.name,name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})]}),Object(a.jsxs)("label",{children:["Price",Object(a.jsx)("input",{type:"text",name:"price",value:this.state.price,onChange:function(t){return e.handleChange(t)}})]}),"Please upload the images below",Object(a.jsxs)("label",{htmlFor:"uploadbtn",class:h.a.uploadbtn,children:[" ","Upload Images"]}),Object(a.jsx)("input",{style:{display:"none"},onChange:function(t){return e.handleChange(t)},id:"uploadbtn",type:"file",accept:".jpg, .png,.jpeg",multiple:""}),Object(a.jsx)("div",{className:h.a.imagecontainer,children:0!==r.length&&r.images.map((function(t,r){return Object(a.jsxs)("div",{onClick:function(){return e.removeImage(r)},className:h.a.imagebtn,children:[Object(a.jsx)("div",{className:h.a.imagehover,children:"X"}),Object(a.jsx)("img",{style:{height:"4rem",width:"6rem",padding:"0 0.5rem"},src:"https://my-ecommerce-site-fitness.herokuapp.com/".concat(t),alt:""})]},"image".concat(r))}))}),Object(a.jsxs)("label",{children:["Brand",Object(a.jsx)("input",{type:"text",placeholder:this.props.product&&this.props.product.brand,name:"brand",value:this.state.brand,onChange:function(t){return e.handleChange(t)}})]}),Object(a.jsxs)("label",{children:["Colour",Object(a.jsx)("input",{type:"text",name:"colour",value:this.state.colour,onChange:function(t){return e.handleChange(t)}})]}),Object(a.jsxs)("label",{children:["Stock :",""!==this.state.small&&""!==this.state.medium&&""!==this.state.large?parseInt(this.state.small)+parseInt(this.state.medium)+parseInt(this.state.large):null,Object(a.jsx)("br",{}),"Please enter amounts in each size below",Object(a.jsx)("div",{className:h.a.sizecontainer,children:Object(a.jsxs)("div",{className:h.a.smallcontainer,children:[Object(a.jsx)("span",{children:" Small "}),Object(a.jsx)("input",{className:h.a.sizeinput,type:"text",name:"small",value:this.state.small,onChange:function(t){return e.handleChange(t)}}),Object(a.jsx)("span",{children:" Medium"}),Object(a.jsx)("input",{className:h.a.sizeinput,type:"text",name:"medium",value:this.state.medium,onChange:function(t){return e.handleChange(t)}}),Object(a.jsx)("span",{children:" Large "}),Object(a.jsx)("input",{className:h.a.sizeinput,type:"text",name:"large",value:this.state.large,onChange:function(t){return e.handleChange(t)}})]})})]}),Object(a.jsxs)("label",{children:["Category",Object(a.jsx)("br",{}),Object(a.jsx)("select",{className:h.a.dropdown,value:this.state.category,onChange:function(t){return e.updateCat(t)},children:o})]}),Object(a.jsxs)("label",{children:["Subcategory",Object(a.jsx)("br",{}),Object(a.jsxs)("select",{className:h.a.dropdown,disabled:1===this.state.subcategory.length,value:this.state.chosenSubCat,onChange:function(t){return e.updateSubCat(t)},children:[Object(a.jsx)("option",{value:"blank",children:"-- select an option -- "}),this.state.subcategory.length&&this.state.subcategory.map((function(e,t){return Object(a.jsx)("option",{name:"subcategory",value:e,children:e},"subcategory".concat(t))}))]})]}),Object(a.jsxs)("label",{children:["Description",Object(a.jsx)("textarea",{placeholder:this.props.product&&this.props.product.description,className:h.a.description,type:"textarea",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}})]}),Object(a.jsx)("input",{className:h.a.submitbtn,type:"submit",value:"Submit"})]}),this.state.errors&&this.state.errors.map((function(e,t){return Object(a.jsx)("p",{className:h.a.error,children:e},"error".concat(t))}))]})]})})}}]),r}(d.Component);t.default=Object(m.g)(Object(p.b)((function(e){return{categories:e.products.categories,user:e.user.user,product:e.products.selectedProduct,productCreated:e.products.productCreatedModal,showModal:e.products.productEditedModal,editedProductId:e.products.latestEditedProductId}}),(function(e){return{createNewProduct:function(t){return e(Object(j.i)(t))},closeModal:function(){return e(Object(j.h)())},getProductFromServer:function(t){return e(Object(j.n)(t))},updateProduct:function(t){return e(Object(j.D)(t))},deleteImage:function(t){return e(Object(j.j)(t))},uploadImage:function(t){e(Object(j.F)(t))},clearProduct:function(){return e(Object(j.e)())}}}))(g))}}]);
//# sourceMappingURL=14.d8b5f911.chunk.js.map