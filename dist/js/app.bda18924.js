(function(e){function t(t){for(var i,a,s=t[0],u=t[1],c=t[2],d=0,p=[];d<s.length;d++)a=s[d],n[a]&&p.push(n[a][0]),n[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],i=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var i={},n={app:0},o=[];function a(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=i,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(r,i,function(t){return e[t]}.bind(null,i));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"01fa":function(e,t,r){"use strict";var i=r("e2af"),n=r.n(i);n.a},"034f":function(e,t,r){"use strict";var i=r("64a9"),n=r.n(i);n.a},"041d":function(e,t,r){"use strict";var i=r("3605"),n=r.n(i);n.a},3605:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var i=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("|\n    "),r("router-link",{attrs:{to:"register"}},[e._v("Register")]),e._v("|\n    "),r("router-link",{attrs:{to:"login"}},[e._v("Log In")]),e._v("|\n    "),r("router-link",{attrs:{to:"search"}},[e._v("Search")]),e._v("|\n    "),r("router-link",{attrs:{to:"info"}},[e._v("Info")]),r("router-link",{attrs:{to:"route"}},[e._v("Route")])],1),r("router-view")],1)},o=[],a={beforeMount:function(){if(localStorage.getItem("info"))try{var e=JSON.parse(localStorage.getItem("info"));this.$store.dispatch("setInfo",e)}catch(t){localStorage.removeItem("info")}!0===this.$store.state.info.isUserLoggedIn&&!1===this.$store.state.info.isCrawlActive&&this.$router.push("search")}},s=a,u=(r("034f"),r("2877")),c=Object(u["a"])(s,n,o,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,d=r("8c4f"),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Taste Tour")]),i("div",{attrs:{id:"black"}}),i("video",{attrs:{id:"background-vid",autoplay:"",loop:"",muted:"",src:r("f652")},domProps:{muted:!0}}),i("b-button",{attrs:{size:"lg",id:"login"}},[i("router-link",{attrs:{to:"login"}},[e._v("Sign In")])],1),i("b-button",{attrs:{size:"lg",id:"register"}},[i("router-link",{attrs:{to:"register"}},[e._v("Sign Up")])],1)],1)},m=[],f={},v=f,g=(r("b460"),Object(u["a"])(v,p,m,!1,null,"2bc7226c",null));g.options.__file="Home.vue";var h=g.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("h1",[e._v("Sign Up")]),r("form",{attrs:{name:"tastetour",autocomplete:"off"}},[r("b-form-input",{attrs:{type:"email",name:"email",placeholder:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("br"),r("b-form-input",{attrs:{type:"password",name:"password",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("br"),r("b-form-input",{attrs:{type:"text",name:"username",placeholder:"username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),r("br"),r("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}),r("br"),e.$store.state.info.isUserLoggedIn?r("b-button",{attrs:{size:"lg",id:"out"},on:{click:e.logout}},[e._v("Log Out")]):r("b-button",{attrs:{size:"lg",id:"reg"},on:{click:e.register}},[e._v("Register")])],1)},_=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"background-img"}},[i("img",{attrs:{src:r("a700")}})])}],y=(r("96cf"),r("3b8d")),k=r("bc3a"),w=r.n(k),x=function(){return w.a.create({baseURL:"/"})},O={register:function(e){return x().post("register",e)},login:function(e){return x().post("login",e)}},$={data:function(){return{email:"",password:"",username:"",error:null}},methods:{register:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.register({email:this.email,password:this.password,username:this.username});case 3:t=e.sent,this.$store.dispatch("setToken",t.data.token),this.$store.dispatch("setUser",t.data.user),this.email="",this.password="",this.username="",this.$router.push("search"),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),this.error=e.t0.response.data.error;case 15:case"end":return e.stop()}},e,this,[[0,12]])}));function t(){return e.apply(this,arguments)}return t}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.email="",this.password="",this.username=""}}},L=$,T=(r("c896"),Object(u["a"])(L,b,_,!1,null,"75dfc3f4",null));T.options.__file="Register.vue";var j=T.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("h1",[e._v("Sign In")]),r("b-form-input",{attrs:{type:"email",name:"email",placeholder:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("br"),r("b-form-input",{attrs:{type:"password",name:"password",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("br"),r("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}),r("br"),e.$store.state.info.isUserLoggedIn?r("b-button",{attrs:{id:"out"},on:{click:e.logout}},[e._v("Log Out")]):r("b-button",{attrs:{size:"lg",id:"log"},on:{click:e.login}},[e._v("Log In")])],1)},E=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"background-img"}},[i("img",{attrs:{src:r("a700")}})])}],U={data:function(){return{email:"",password:"",error:null}},methods:{login:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.login({email:this.email,password:this.password});case 3:t=e.sent,this.$store.dispatch("setToken",t.data.token),this.$store.dispatch("setUser",t.data.user),this.email="",this.password="",this.$router.push("search"),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),this.error=e.t0.response.data.error;case 14:case"end":return e.stop()}},e,this,[[0,11]])}));function t(){return e.apply(this,arguments)}return t}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.email="",this.password=""}}},q=U,P=(r("01fa"),Object(u["a"])(q,I,E,!1,null,"5bbc10f2",null));P.options.__file="Login.vue";var R=P.exports,S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{attrs:{id:"black"}}),e._m(0),i("h3",{style:e.message},[e._v("Pick Your City")]),i("b-form-input",{attrs:{id:"city",type:"text",name:"city",autocomplete:"off",placeholder:"New York"}}),i("img",{attrs:{id:"cutlery",src:r("6014")}}),i("b-form-input",{attrs:{id:"food",type:"text",name:"food",autocomplete:"off",placeholder:"Pick Your Food"}}),i("h3",{attrs:{id:"price"}},[e._v("Price")]),i("b-form-checkbox-group",{class:{active:e.isActive},attrs:{buttons:"",id:"brand",size:"lg",name:"ds",options:e.options}}),i("b-button",{attrs:{id:"search"}},[e._v("Search")]),i("a",[e._v("Log Out")])],1)},z=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"background-img"}},[i("img",{attrs:{src:r("e5bc")}})])}],A={data:function(){return{options:[{text:"$",value:"$"},{text:"$$",value:"$$"},{text:"$$$",value:"$$$"}]}}},M=A,Z=(r("bb94"),r("6b00"),Object(u["a"])(M,S,z,!1,null,"371642d8",null));Z.options.__file="Search.vue";var C=Z.exports,D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"map-wrapper"}},[r("div",{attrs:{id:"map"}})])}],Y=r("5d73"),B=r.n(Y),J=r("e192"),F=r.n(J),H=r("595b"),G=(r("5118"),{data:function(){return{accessToken:"pk.eyJ1IjoidGhlbm9vZGxlbW9vc2UiLCJhIjoiY2pvdXM4c3ZrMWZnYTNrbW9ic2hmdjV6ZyJ9.-A735y9fU1TdsJ993uIKLA",routeObj:{center:{latitude:"28.542484",longitude:"-81.326371"},places:[{pid:"BERHdYECP9p1axoc3QXcBQ",name:"Mario's Pizza",address:"7213 Curryford Rd",city:"Orlando",region:"FL",price:1,rating:"4.0",numberOfRatings:106,longitude:-81.29118,latitude:28.51681,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"},{pid:"rMdbNLK_JD13_5UkWtNP4g",name:"Muzzarella Pizza and Italian Kitchen",address:"7780 Lake Underhill Rd",city:"Orlando",region:"FL",price:1,rating:"4.5",numberOfRatings:64,longitude:-81.28142,latitude:28.53873,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"},{pid:"snY6Hub4XL7sx9GwjWb2kg",name:"Pizzeria Del-Dio",address:"3210 E Colonial Dr",city:"Orlando",region:"FL",price:1,rating:"4.5",numberOfRatings:141,longitude:-81.3434482134918,latitude:28.5520465549289,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"},{pid:"79OcxliIkgasAEjH2pS01g",name:"Tomasino's Pizza",address:"2612 E Colonial Dr",city:"Orlando",region:"FL",price:1,rating:"4.5",numberOfRatings:194,longitude:-81.3498468,latitude:28.551336,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"},{pid:"iX7R_COA8V-TMZGXOVRAjQ",name:"Lazy Moon Pizza",address:"1011 E Colonial Dr",city:"Orlando",region:"FL",price:1,rating:"4.5",numberOfRatings:297,longitude:-81.365976028836,latitude:28.5534745,searchedBefore:!1,createdAt:"2019-01-03T04:18:08.000Z",updatedAt:"2019-01-03T04:18:08.000Z"}]}}},methods:{map:function(){return F.a.accessToken=this.accessToken,new F.a.Map({container:"map",center:[this.routeObj.center.longitude,this.routeObj.center.latitude],zoom:11.5,style:"mapbox://styles/mapbox/streets-v9"})}},mounted:function(){var e,t,r=this.map(),i=this.routeObj.places,n=[],o=0,a=0;t=i[a];var s=!0,u=!1,c=void 0;try{for(var l,d=B()(i);!(s=(l=d.next()).done);s=!0){var p=l.value;n.push([p.longitude,p.latitude])}}catch(h){u=!0,c=h}finally{try{s||null==d.return||d.return()}finally{if(u)throw c}}function m(){navigator.geolocation?navigator.geolocation.watchPosition(f,v):this.error="Geolocation is not supported by this browser."}function f(r){var i=r.coords,n=H["point"]([i.longitude,i.latitude]),s=H["point"]([t.longitude,t.latitude]),u=.25,c={units:"miles"};e=H["circle"](s,u,c),H["booleanPointInPolygon"](n,e)?0===o&&(console.log("You've made it!"),o=1):1===o?(console.log("You left"),o=0,a++):console.log("You are not there yet")}function v(e){switch(e.code){case e.PERMISSION_DENIED:this.error="User denied the request for Geolocation.";break;case e.POSITION_UNAVAILABLE:this.error="Location information is unavailable.";break;case e.TIMEOUT:this.error="The request to get user location timed out.";break;case e.UNKNOWN_ERROR:this.error="An unknown error occurred.";break}}m();var g={id:"route",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:n}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#fd593f","line-width":4,"line-dasharray":[1,2]}};r.on("load",function(){var e=1,t=!0,n=!1,o=void 0;try{for(var a,s=B()(i);!(t=(a=s.next()).done);t=!0){var u=a.value,c=document.createElement("div");c.textContent=e,c.className="marker",new F.a.Marker(c).setLngLat([u.longitude,u.latitude]).addTo(r),e++}}catch(h){n=!0,o=h}finally{try{t||null==s.return||s.return()}finally{if(n)throw o}}r.addLayer(g)})}}),W=G,X=(r("041d"),Object(u["a"])(W,D,N,!1,null,null,null));X.options.__file="Route.vue";var K=X.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"info-pic-div"}},[r("img",{attrs:{id:"info-pic",src:e.infoPic}}),r("h1",[e._v(e._s(e.name))]),r("div",{attrs:{id:"black"}})]),r("div",{attrs:{id:"rating"}},[r("img",{attrs:{id:"stars",src:e.stars}})]),r("div",{attrs:{id:"container"}},e._l(e.items,function(t){return r("ul",{key:t.key,attrs:{id:"reviews"}},[r("li",[e._v(e._s(t.review))])])}),0)])},Q=[],ee={data:function(){return{infoPic:"https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Lorem Ipsum",stars:"https://img.freepik.com/free-icon/five-points-star_318-1414.jpg?size=338&ext=jpg",items:[{key:1,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{key:2,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{key:3,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{key:4,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{key:5,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]}}},te=ee,re=(r("6241"),Object(u["a"])(te,V,Q,!1,null,"fdaf654c",null));re.options.__file="Info.vue";var ie=re.exports;i["a"].use(d["a"]);var ne=new d["a"]({routes:[{path:"/",name:"home",component:h},{path:"/register",name:"register",component:j},{path:"/login",name:"login",component:R},{path:"/search",name:"search",component:C},{path:"/info",name:"info",component:ie},{path:"/route",name:"route",component:K}]}),oe=r("f499"),ae=r.n(oe),se=r("2f62");i["a"].use(se["a"]);var ue=new se["a"].Store({strict:!0,state:{info:{user:null,token:null,isUserLoggedIn:!1,isCrawlActive:!1}},mutations:{setInfo:function(e,t){e.info=t},setToken:function(e,t){e.info.token=t,e.info.isUserLoggedIn=!!t;var r=ae()(e.info);localStorage.setItem("info",r)},setUser:function(e,t){e.info.user=t;var r=ae()(e.info);localStorage.setItem("info",r)}},actions:{setInfo:function(e,t){var r=e.commit;r("setInfo",t)},setToken:function(e,t){var r=e.commit;r("setToken",t)},setUser:function(e,t){var r=e.commit;r("setUser",t)}}}),ce=r("31bd"),le=r("9f7b");r("ab8b"),r("2dd8");i["a"].use(le["a"]),i["a"].config.productionTip=!1,Object(ce["sync"])(ue,ne),new i["a"]({router:ne,store:ue,render:function(e){return e(l)}}).$mount("#app")},6014:function(e,t,r){e.exports=r.p+"img/cutlery.fdaf0a00.png"},6241:function(e,t,r){"use strict";var i=r("bf88"),n=r.n(i);n.a},6369:function(e,t,r){},"64a9":function(e,t,r){},"6b00":function(e,t,r){"use strict";var i=r("6369"),n=r.n(i);n.a},a700:function(e,t,r){e.exports=r.p+"img/food-resize.d76af7d7.jpg"},b460:function(e,t,r){"use strict";var i=r("f6cd"),n=r.n(i);n.a},bb94:function(e,t,r){"use strict";var i=r("ce3b"),n=r.n(i);n.a},bf88:function(e,t,r){},c896:function(e,t,r){"use strict";var i=r("ccd9"),n=r.n(i);n.a},ccd9:function(e,t,r){},ce3b:function(e,t,r){},e2af:function(e,t,r){},e5bc:function(e,t,r){e.exports=r.p+"img/food2-resize.e6c02a98.jpg"},f652:function(e,t,r){e.exports=r.p+"media/Untitled.31fcb65c.webm"},f6cd:function(e,t,r){}});
//# sourceMappingURL=app.bda18924.js.map