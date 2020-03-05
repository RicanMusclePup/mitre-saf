(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9092"],{"30dc":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-content",{class:1==t.$vuetify.theme.dark?"blank":"grey lighten-5"},[e("v-container",{staticClass:"text-center ",attrs:{fluid:""}},[e("v-snackbar",{attrs:{timeout:5e3,bottom:"",right:""},model:{value:t.snackbarSuccess,callback:function(a){t.snackbarSuccess=a},expression:"snackbarSuccess"}},[t._v("\n          Team Member Edited Successfully\n          "),e("v-btn",{attrs:{color:"pink",text:""},on:{click:function(a){t.snackbarSuccess=!1}}},[t._v("\n              Close\n          ")])],1),e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-toolbar",{staticClass:"elevation-1"},[e("router-link",{staticClass:"ma-0 google-font mb-0",staticStyle:{"border-radius":"5px","text-transform":"capitalize","text-decoration":"none"},attrs:{to:"/admin/dashboard/team/",color:1==t.$vuetify.theme.dark?"white":"black"}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-left-thick")]),t._v("\n              Team")],1),t._v("\n               \n              "),e("div",{staticClass:"flex-grow-1"}),t.showTeamData?e("editTeam",{staticClass:"mr-2",attrs:{teamData:t.teamData},on:{editedSuccess:t.editedSuccessFun}}):t._e(),t._v("\n                   \n                  "),t.showTeamData?e("removeTeam",{staticClass:"mr-1",attrs:{teamData:{id:t.$route.params.id,name:t.teamData.name}}}):t._e(),t.showTeamData?e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[e("v-btn",t._g({attrs:{icon:"",target:"_blank"},on:{click:function(a){return t.showPublicURL(t.$route.params.id)}}},s),[e("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-eye")])],1)]}}],null,!1,2902102809)},[e("span",[t._v("Show Public URL")])]):t._e()],1)],1)],1),t.showLoader?e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):t._e(),t.showTeamData?e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pa-1 elevation-1 py-5",class:1==t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{col:"12",md:"3"}},[e("v-avatar",{attrs:{size:"120"}},[e("img",{attrs:{src:t.getImgUrl(t.teamData.image),"lazy-src":t.getImgUrl(t.teamData.image),alt:""}})]),e("p",{staticClass:"mt-3 mb-0 google-font mb-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(t.teamData.name))]),e("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"100%"}},[t._v(t._s(t.teamData.designation))]),e("v-chip",{staticClass:"mt-2",attrs:{small:""}},[t._v(t._s(t.teamData.role))]),e("br"),e("br"),t.teamData.visible?e("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[t._v("Visible")]):e("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[t._v("Not Visible")]),t.teamData.active?e("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[t._v("Active")]):e("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[t._v("Not Active")]),e("br"),e("br"),e("br")],1),e("v-col",{staticClass:"elevation-1 py-5 text-left pa-5",class:1==t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{col:"12",md:"9"}},[e("p",{staticClass:"mb-0"},[e("b",[t._v("Bio")])]),e("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[t._v(t._s(t.teamData.bio))]),e("p",{staticClass:"mb-0 mt-3"},[e("b",[t._v("Email")])]),e("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[t._v(t._s(t.teamData.email))]),e("p",{staticClass:"mb-0 mt-3"},[e("b",[t._v("Mobile")])]),e("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[t._v(t._s(t.teamData.mbnumber))]),e("p",{staticClass:"mb-0 mt-3"},[e("b",[t._v("User ID")])]),e("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[t._v(t._s(t.teamData.id))]),e("p",{staticClass:"mb-0 mt-3"},[e("b",[t._v("Social Links")])]),e("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},t._l(t.teamData.socialLinks,(function(a,s){return e("span",{key:s,staticClass:"mr-1",staticStyle:{cursor:"pointer"}},[a?e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:a,target:"_blank"}},[e("v-chip",{staticStyle:{"text-transform":"uppercase"},attrs:{small:""}},[t._v(t._s(s))])],1):t._e()])})),0)])],1)],1)],1)],1):t._e(),t.userNotFound?e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"elevation-1 pa-3 white"},[e("v-col",[e("h1",[t._v("User Not Found")])])],1)],1)],1)],1):t._e()],1)],1)},o=[],r=e("59ca"),i=e.n(r),c=(e("8aa5"),e("a078"),e("9917")),l=e("42f5"),n={components:{removeTeam:c["a"],editTeam:l["a"]},name:"admin-dashboard",data:()=>({snackbarSuccess:!1,userNotFound:!1,showTeamData:!1,showLoader:!0,teamLoader:!0,search:"",loading:!0,teamData:[],snackbarSuccess:!1}),created(){this.$route.params.id&&this.getTeamData()},mounted(){i.a.auth().currentUser||this.$router.replace("login")},methods:{showPublicURL(t){let a=this.$router.resolve({path:`/team/${t}`});window.open(a.href,"_blank")},editedSuccessFun(){console.log("calls"),this.snackbarSuccess=!0,this.getTeamData()},getTeamData(){this.showLoader=!0,this.showTeamData=!1,this.userNotFound=!1,i.a.firestore().collection("team").doc(this.$route.params.id).get().then(t=>{console.log(t.data()),void 0==t.data()?(this.showLoader=!1,this.showTeamData=!1,this.userNotFound=!0):t.data()?(this.showTeamData=!0,this.showLoader=!1,this.teamData=t.data()):(this.showTeamData=!1,this.showLoader=!1,this.userNotFound=!0)})},showTeam(t){this.$router.replace("/admin/dashboard/team/"+t)},getImgUrl(t){return t.length>0?t:e("72ab")}}},m=n,d=e("2877"),v=e("6544"),u=e.n(v),h=e("8212"),b=e("8336"),g=e("cc20"),p=e("62ad"),f=e("a523"),_=e("a75b"),w=e("132d"),k=e("490a"),C=e("0fd9"),D=e("2db4"),y=e("71d9"),S=e("3a2f"),T=Object(d["a"])(m,s,o,!1,null,null,null);a["default"]=T.exports;u()(T,{VAvatar:h["a"],VBtn:b["a"],VChip:g["a"],VCol:p["a"],VContainer:f["a"],VContent:_["a"],VIcon:w["a"],VProgressCircular:k["a"],VRow:C["a"],VSnackbar:D["a"],VToolbar:y["a"],VTooltip:S["a"]})}}]);