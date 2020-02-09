(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=(a(16),a(1)),s=a(2),o=a(4),u=a(3),d=a(5),m=function(e){return e.children},h=(a(17),a(18),a(9)),p=a.n(h),b=(a(19),function(e){return r.a.createElement("div",{className:"Logo",style:{height:e.height}},r.a.createElement("img",{src:p.a,alt:"burgerLogo"}))}),f=(a(20),a(21),function(e){return r.a.createElement("li",{className:"NavigationItem"},r.a.createElement("a",{href:e.link,className:e.active?"active":null},e.children," "))}),E=function(e){return r.a.createElement("ul",{className:"NavigationItems"},r.a.createElement(f,{link:"/",active:!0},"Burger Builder"),r.a.createElement(f,{link:"/"},"checkout"))},g=(a(22),function(e){return r.a.createElement("div",{className:"DrawerToggle",onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),v=function(e){return r.a.createElement("header",{className:"Toolbar"},r.a.createElement(g,{clicked:e.drawerToggleClicked}),r.a.createElement(b,{height:"80%"}),r.a.createElement("nav",{className:"DesktopOnly"},r.a.createElement(E,null)))},k=(a(23),a(24),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),y=function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),r.a.createElement(m,null,r.a.createElement(k,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement(b,{height:"11%"}),r.a.createElement("nav",null,r.a.createElement(E,null))))},w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(v,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(y,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:"Content"},this.props.children))}}]),t}(n.Component),O=a(6),j=a(10),C=(a(25),a(26),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"meat":e=r.a.createElement("div",{className:"Meat"});break;case"cheese":e=r.a.createElement("div",{className:"Cheese"});break;case"salad":e=r.a.createElement("div",{className:"Salad"});break;case"bacon":e=r.a.createElement("div",{className:"Bacon"});break;default:e=null}return e}}]),t}(n.Component)),N=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(j.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(C,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"please start adding ingredients")),r.a.createElement("div",{className:"Burger"},r.a.createElement(C,{type:"bread-top"}),t,r.a.createElement(C,{type:"bread-bottom"}))},S=(a(27),a(28),function(e){return r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label," "),r.a.createElement("button",{className:"Less",disabled:e.disabled,onClick:e.removed},"less"),r.a.createElement("button",{className:"More",onClick:e.added},"More"))}),D=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],H=function(e){return r.a.createElement("div",{className:"BuildControls"},r.a.createElement("p",null,"Current Price : ",r.a.createElement("strong",null," ",e.price.toFixed(2)," ")," "),D.map((function(t){return r.a.createElement(S,{key:t.label,label:t.label,added:function(){return e.addedIngredients(t.type)},removed:function(){return e.removedIngredients(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{onClick:e.ordered,disabled:!e.purchasable,className:"OrderButton"},"ORDER NOW"))},B=(a(29),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show}},{key:"componentWillUpdate",value:function(){console.log("[Modal] willUpdate")}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(k,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:"Modal",style:{opacity:this.props.show?"1":"0",transform:this.props.show?"translateY(0)":"translateY(-100vh)"}},this.props.children))}}]),t}(n.Component)),P=(a(30),function(e){return r.a.createElement("button",{onClick:e.clicked,className:[e.btnType].join(" ")},e.children," ")}),T=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(){console.log("[orderSummary] willUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t)," : ",e.props.ingredients[t])}));return r.a.createElement(m,null,r.a.createElement("h3",null,"Your order"),r.a.createElement("p",null,"A delicious burger with the flowing ingredients"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Total Price : ",r.a.createElement("strong",null,this.props.price.toFixed(2))," "),r.a.createElement("p",null,"Continue to checkout ?"),r.a.createElement(P,{btnType:"Danger",clicked:this.props.Canceled},"Cancel"),r.a.createElement(P,{btnType:"Success",clicked:this.props.continued},"Continue"))}}]),t}(n.Component),I={salad:.4,bacon:.7,cheese:.9,meat:1},M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){alert("you are continue")},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(O.a)({},a.state.ingredients);n[e]=t;var r=I[e],c=a.state.totalPrice+r;a.setState({ingredients:n,totalPrice:c}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(t<=0)return alert("please add ingredients");var n=t-1,r=Object(O.a)({},a.state.ingredients);r[e]=n;var c=I[e],l=a.state.totalPrice-c;a.setState({ingredients:r,totalPrice:l}),a.updatePurchaseState(r)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(O.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement(B,{modalClosed:this.purchaseCancelHandler,show:this.state.purchasing},r.a.createElement(T,{price:this.state.totalPrice,continued:this.purchaseContinueHandler,Canceled:this.purchaseCancelHandler,ingredients:this.state.ingredients})),r.a.createElement(N,{ingredients:this.state.ingredients}),r.a.createElement(H,{addedIngredients:this.addIngredientHandler,removedIngredients:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,price:this.state.totalPrice,ordered:this.purchaseHandler}))}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null,r.a.createElement(M,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.da1573e4.chunk.js.map