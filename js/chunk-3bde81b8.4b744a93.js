(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bde81b8"],{1681:function(t,e,a){},a844:function(t,e,a){"use strict";a("1681");var i=a("8654"),n=a("58df");const o=Object(n["a"])(i["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},fdb4:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container",{staticClass:"text-center",attrs:{fluid:""}},[a("notification")],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"text-center",attrs:{md:"8"}},[a("p",[t._v("Logged in as "+t._s(t.userEmail))]),a("v-btn",{staticClass:"mb-3",attrs:{text:""},on:{click:t.logout}},[t._v("Logout")]),a("h3",[t._v("Send Push Notification ")]),a("p",[t._v("* Push Notification will be sent to all registred users")]),a("v-text-field",{attrs:{label:"Title",type:"text",outlined:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-textarea",{attrs:{type:"text",label:"Body",outlined:""},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}}),a("v-btn",{staticClass:"primary mt-3",attrs:{loading:t.isLoading,text:""},on:{click:t.send}},[t._v("Send Push")])],1)],1)],1)},s=[],r=a("dc59"),l={components:{},name:"admin-dashboard",data:()=>({userEmail:"",title:"",body:"",isLoading:!1,isSuccessAlert:!1}),mounted(){r["a"].auth.currentUser?this.userEmail=r["a"].auth.currentUser.email:this.$router.replace("admin")},methods:{send(){r["a"].firestore.collection("apiEnd").get().then(t=>{t.forEach(t=>{let e=t.data().token,a={to:e,notification:{title:this.title,body:this.body,icon:""}};const i={method:"POST",headers:new Headers({Authorization:"key=","Content-Type":"application/json"})};i.body=JSON.stringify(a),fetch("",i).then(t=>t.json()).then(()=>{this.isSuccessAlert=!0}).catch(t=>alert(t))})})},methods:{send(){this.isLoading=!0,r["a"].firestore.collection("apiEnd").get().then(t=>{t.forEach(t=>{let e=t.data().token,a={to:e,notification:{title:this.title,body:{body:this.body,eventID:"devfest",regLink:""},tag:"newEvent",image:""}};const i={method:"POST",headers:new Headers({Authorization:"key=","Content-Type":"application/json"})};i.body=JSON.stringify(a),fetch("",i).then(t=>t.json()).then(()=>{this.isSuccessAlert=!0,this.isLoading=!1}).catch(t=>alert(t))})})},logout(){r["a"].auth.signOut().then(()=>{this.$router.replace("/admin")})}}}},c=l,d=a("2877"),h=a("6544"),u=a.n(h),p=a("8336"),m=a("62ad"),g=a("a523"),f=a("0fd9"),y=a("8654"),b=a("a844"),w=Object(d["a"])(c,o,s,!1,null,null,null),v=w.exports;u()(w,{VBtn:p["a"],VCol:m["a"],VContainer:g["a"],VRow:f["a"],VTextField:y["a"],VTextarea:b["a"]});var x={components:{notification:v},name:"admin-dashboard",data:()=>({userEmail:"",title:"",body:"",isLoading:!1,isSuccessAlert:!1}),mounted(){r["a"].auth.currentUser?this.userEmail=r["a"].auth.currentUser.email:this.$router.replace("admin")},methods:{send(){r["a"].firestore.collection("apiEnd").get().then(t=>{t.forEach(t=>{let e=t.data().token,a={to:e,notification:{title:this.title,body:this.body,icon:"https://dsccu.in/images/icons/android-icon-192x192.png"}};const i={method:"POST",headers:new Headers({Authorization:"key=AAAAJKAFx0g:APA91bG4RFcmV5d3PYgeNSXui0oCgcS8AqnTGe79Zv0X3udydnTnRM0r4EEQlWrpDPmOABVOTBbI3nCuST_3c1Z8yfyIPBwAa4jjoIOrzdocg3lsuJdpo4XIam01_Kk-mKUzaGjsqDep","Content-Type":"application/json"})};i.body=JSON.stringify(a),fetch("https://fcm.googleapis.com/fcm/send",i).then(t=>t.json()).then(()=>{this.isSuccessAlert=!0}).catch(t=>alert(t))})})},logout(){r["a"].auth.signOut().then(()=>{this.$router.replace("/admin")})}}},k=x,A=a("a75b"),S=Object(d["a"])(k,i,n,!1,null,null,null);e["default"]=S.exports;u()(S,{VContainer:g["a"],VContent:A["a"]})}}]);