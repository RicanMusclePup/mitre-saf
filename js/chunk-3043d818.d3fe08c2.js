(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3043d818"],{"8adc":function(t,e,a){},cc20:function(t,e,a){"use strict";a("8adc");var s=a("58df"),i=a("0789"),o=a("9d26"),l=a("a9ad"),r=a("4e82"),c=a("7560"),n=a("f2e7"),h=a("1c87"),d=a("af2b"),p=a("d9bd");e["a"]=Object(s["a"])(l["a"],d["a"],h["a"],c["a"],Object(r["a"])("chipGroup"),Object(n["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(p["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(i["b"],t)},genClose(){return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:a,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const i=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(i,s),e)}})},eb1e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{staticClass:"px-0 mx-0 pt-1"},[a("v-container",{staticClass:"px-0 pt-5 mt-5",attrs:{fluid:""}},[a("v-row",{staticClass:"py-3",class:1==this.$vuetify.theme.dark?"black":"grey lighten-5",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pt-3 bottom-space",attrs:{md:"12",lg:"10",xs:"12"}},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[t.showLoader?a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"12"}},[a("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):t._e(),a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pa-4",attrs:{cols:"12",md:"12"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-3"},[t.showTeamData?a("v-col",{staticClass:"pa-5 elevation-1",class:1==this.$vuetify.theme.dark?"indigo":"white"},[t._v("\n                                 "+t._s(t.teamData.name)+" Deatils:\n                              ")]):t._e()],1),a("v-row",[t.showTeamData?a("v-col",{staticClass:"pa-5 elevation-1 text-center",class:1==this.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"3"}},[a("v-avatar",{attrs:{size:"120"}},[a("img",{attrs:{src:t.getImgUrl(t.teamData.image),"lazy-src":t.getImgUrl(t.teamData.image),alt:""}})]),a("p",{staticClass:"mt-3 mb-0 google-font mb-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(t.teamData.name))]),a("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"100%"}},[t._v(t._s(t.teamData.designation))]),a("v-chip",{staticClass:"mt-2",attrs:{small:""}},[t._v(t._s(t.teamData.role))]),a("br"),a("br"),t.teamData.active?a("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[t._v("Active")]):a("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[t._v("Not Active")]),a("br"),a("br"),a("br")],1):t._e(),t.showTeamData?a("v-col",{staticClass:"elevation-1 py-5 text-left pa-5",class:1==this.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"9"}},[a("p",{staticClass:"mb-0"},[a("b",[t._v("Bio")])]),a("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[t._v(t._s(t.teamData.bio))]),a("p",{staticClass:"mb-0 mt-3"},[a("b",[t._v("Social Links")])]),a("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},t._l(t.teamData.socialLinks,(function(e,s){return a("span",{key:s,staticClass:"mr-1",staticStyle:{cursor:"pointer"}},[e?a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e,target:"_blank"}},[a("v-chip",{staticStyle:{"text-transform":"uppercase"},attrs:{small:""}},[t._v(t._s(s))])],1):t._e()])})),0)]):t._e()],1)],1)],1)],1),t.userNotFound?a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"elevation-1 pa-3 white"},[a("v-col",[a("h1",{staticClass:"google-font"},[t._v("User "+t._s(t.$route.params.id)+" Not Found")])])],1)],1)],1)],1):t._e()],1)],1)],1)],1)],1)},i=[],o=a("59ca"),l=a.n(o),r=(a("8aa5"),{components:{},data:()=>({snackbarSuccess:!1,userNotFound:!1,showTeamData:!1,showLoader:!0,teamLoader:!0,teamData:[],search:""}),created(){let t=document.querySelector("meta[name=theme-color]");this.$vuetify.theme.dark?t.setAttribute("content","#212121"):t.setAttribute("content","#0277bd"),this.$route.params.id&&this.getTeamData()},methods:{getImgUrl(t){return t.length>0?t:a("72ab")},getTeamData(){this.showLoader=!0,this.showTeamData=!1,this.userNotFound=!1,l.a.firestore().collection("team").doc(this.$route.params.id).get().then(t=>{console.log(t.data()),void 0==t.data()?(this.showLoader=!1,this.showTeamData=!1,this.userNotFound=!0):t.data()?(this.showTeamData=!0,this.showLoader=!1,this.teamData=t.data()):(this.showTeamData=!1,this.showLoader=!1,this.userNotFound=!0)})}}}),c=r,n=a("2877"),h=a("6544"),d=a.n(h),p=a("8212"),m=a("cc20"),u=a("62ad"),v=a("a523"),g=a("a75b"),b=a("490a"),f=a("0fd9"),C=Object(n["a"])(c,s,i,!1,null,"59c0e43a",null);e["default"]=C.exports;d()(C,{VAvatar:p["a"],VChip:m["a"],VCol:u["a"],VContainer:v["a"],VContent:g["a"],VProgressCircular:b["a"],VRow:f["a"]})}}]);