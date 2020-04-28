(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1eacf58"],{"262f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{md:"12",sm:"12",cols:"12"}},[a("p",{staticClass:"google-font",staticStyle:{color:"#1a73e8","font-weight":"350","font-size":"200%"}},[t._t("title")],2),t._t("subtitle")],2)],1)],1)},r=[],i=a("2877"),s=a("6544"),o=a.n(s),c=a("62ad"),l=a("a523"),h=a("0fd9"),u={},g=Object(i["a"])(u,n,r,!1,null,null,null);e["a"]=g.exports;o()(g,{VCol:c["a"],VContainer:l["a"],VRow:h["a"]})},4458:function(t,e,a){},"4f7f":function(t,e,a){"use strict";var n=a("c26b"),r=a("b39a"),i="Set";t.exports=a("e0b8")(i,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return n.def(r(this,i),t=0===t?0:t,t)}},n)},"72ca":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",{staticClass:"pa-0"},t._l(t.categorized,(function(e){return n("v-card",{key:e,staticClass:"ma-2",attrs:{outlined:""}},[n("v-row",{attrs:{align:"center",dense:"","no-gutters":"",justify:"start"}},[n("v-col",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndUp,expression:"$vuetify.breakpoint.smAndUp"}],attrs:{cols:"2"}},[n("h2",{staticClass:"font-weight-bold ma-2 pa-2 break-word justify-center text-center google-font",class:{"subtitle-2":t.$vuetify.breakpoint.mdAndDown}},[t._v(t._s(e))])]),n("v-col",{attrs:{cols:"10"}},[n("v-container",[n("v-row",{attrs:{dense:"","no-gutters":"",align:"center",justify:"start"}},[n("v-col",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.xs,expression:"$vuetify.breakpoint.xs"}],attrs:{cols:"auto"}},[n("h2",{staticClass:"font-weight-bold subtitle-2 ma-2 pa-2 break-word justify-center text-left google-font"},[t._v(t._s(e))])]),n("v-col",{attrs:{cols:"auto"}},t._l(t.getByCategory(t.profiles,[e]),(function(e,r){return n("v-chip",{key:e.category+e.longName+r,staticClass:"google-font break-word ma-2 pa-2 text-none",attrs:{href:e.link,target:"_blank",label:"",outlined:""}},[n("v-img",{directives:[{name:"show",rawName:"v-show",value:e.svg,expression:"entry.svg"}],staticClass:"mr-2",staticStyle:{"max-width":"14px","max-height":"14px"},attrs:{src:a("57ae")("./"+e.svg+".svg"),"svg-inline":"",contain:""}}),t._v("\n                "+t._s(e.shortName)+"\n              ")],1)})),1)],1)],1)],1)],1)],1)})),1)},r=[],i=(a("1c4c"),a("ac6a"),a("5df3"),a("4f7f"),a("55dd"),a("a481"),{props:{profiles:Array},data:function(){return{fab:!1}},methods:{make_linkable:function(t){return t.replace(/\s+/g,"-").toLowerCase()},onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>200}},toTop:function(){this.$vuetify.goTo(0)},getByCategory:function(t,e){var a,n,r=[];for(a=0;a<t.length;a++)for(n=0;n<t[a].category.length;n++)t[a].category[n]==e&&r.push(t[a]);return r.sort((function(t,e){return t["shortName"]>e["shortName"]?1:t["shortName"]<e["shortName"]?-1:0}))}},computed:{moveForBottomNavStyle:function(){return this.$vuetify.breakpoint.smAndDown?"z-index: 10; bottom: 60px":""},categorized:function(){var t,e,a=new Set;for(t=0;t<this.profiles.length;t++)for(e=0;e<this.profiles[t].category.length;e++)a.add(this.profiles[t].category[e]);return Array.from(a)}}}),s=i,o=(a("d830"),a("2877")),c=a("6544"),l=a.n(c),h=a("b0af"),u=a("cc20"),g=a("62ad"),p=a("a523"),m=a("a75b"),d=a("adda"),f=a("0fd9"),v=Object(o["a"])(s,n,r,!1,null,"4c3c7f17",null);e["a"]=v.exports;l()(v,{VCard:h["a"],VChip:u["a"],VCol:g["a"],VContainer:p["a"],VContent:m["a"],VImg:d["a"],VRow:f["a"]})},"8adc":function(t,e,a){},"9d33":function(t){t.exports=JSON.parse('{"hardening":[{"shortName":"Windows 2016 STIG","longName":"Windows 2016 r2 STIG","link":"https://github.com/mitre/chef-stig-windows-server-2016-v1r4-hardening","svg":"chef-2","category":["Operating Systems"]},{"shortName":"Windows 2012 STIG","longName":"Windows 2012 r2 STIG","link":"https://github.com/mitre/chef-stig-windows-2012-v2r12-memberserver-hardening","svg":"chef-2","category":["Operating Systems"]},{"shortName":"Ubuntu 16.04 STIG","longName":"Ubuntu 16.04 STIG","link":"https://github.com/mitre/chef-canonical-ubuntu-16.04-lts-stig-hardening","svg":"chef-2","category":["Operating Systems"]},{"shortName":"Red Hat 7 STIG","longName":"Red Hat Enterprise 7 Linux STIG","link":"https://github.com/mitre/ansible-rhel7-stig-hardening","svg":"ansible","category":["Operating Systems"]},{"shortName":"Red Hat 7 STIG","longName":"Red Hat Enterprise 7 Linux STIG","link":"https://github.com/USGS-CIDA/stig","svg":"chef-2","category":["Operating Systems"]},{"shortName":"Docker CIS Benchmark","longName":"Docker CIS Benchmark","link":"https://github.com/mitre/ansible-cis-docker-ce-hardening","svg":"ansible","category":["Application Logic"]},{"shortName":"Docker CIS Benchmark","longName":"Docker CIS Benchmark","link":"https://github.com/mitre/chef-cis-docker-ce-hardening","svg":"chef-2","category":["Application Logic"]},{"shortName":"Tomcat CIS Benchmark","longName":"Tomcat CIS Benchmark","link":"https://github.com/mitre/ansible-cis-tomcat-hardening","svg":"ansible","category":["Web Servers"]},{"shortName":"Tomcat CIS Benchmark","longName":"Tomcat CIS Benchmark","link":"https://github.com/mitre/chef-cis-tomcat-hardening","svg":"chef-2","category":["Web Servers"]},{"shortName":"NGINX [WIP]","longName":"NGINX [Work-In-Progress]","link":"https://github.com/mitre/chef-nginx-hardening","svg":"chef-2","category":["Web Servers"]},{"shortName":"IIS Sites STIG","longName":"IIS Sites STIG","link":"https://github.com/mitre/chef-iis-site-hardening","svg":"chef-2","category":["Web Servers"]},{"shortName":"IIS Server STIG","longName":"IIS Server STIG","link":"https://github.com/mitre/chef-iis-85-hardening","svg":"chef-2","category":["Web Servers"]},{"shortName":"AWS CIS Benchmark","longName":"AWS Foundations CIS Benchmark","link":"https://github.com/mitre/cis-aws-foundations-hardening","svg":"terraform","category":["Cloud Service Providers"]},{"shortName":"MongoDB STIG","longName":"MongoDB Enterprise STIG","link":"https://github.com/mitre/chef-stig-mongodb-enterprise-advanced-hardening","svg":"chef-2","category":["Databases"]},{"shortName":"DRAFT: VMWARE VCSA 6.7 STIG","longName":"VMware vCenter Server Appliance 6.7 STIG","link":"https://github.com/mitre/chef-stig-mongodb-enterprise-advanced-hardening","svg":"ansible","category":["Platform"]}]}')},bfa4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{staticClass:"pa-0"},[a("v-container",{staticClass:"pa-0 mt-2",attrs:{fluid:""}},[a("v-row",{staticClass:"py-0 my-0",class:1==this.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"py-3 my-0",attrs:{md:"12",lg:"10",xs:"12"}},[a("Header",[a("h3",{attrs:{slot:"title"},slot:"title"},[t._v("Hardening")])])],1)],1)],1),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"py-0 my-0",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"py-3 my-0",attrs:{md:"12",lg:"10",xs:"12"}},[a("div",{staticClass:"ma-2 pa-2 google-font"},[a("p",[t._v("\n            These open-source community-based hardening baselines help to securely configure common system components. MITRE is helping to provide stewardship over these hardening baselines, hosted here and at other community vendor sites. If you are interested in new hardening baselines, please contact us at\n            "),a("a",{attrs:{href:t.mail_link}},[t._v(t._s(t.db.communityEmail))]),t._v(".\n          ")]),a("profileTemplateCompact",{attrs:{profiles:t.hardening.hardening}})],1)])],1)],1)],1)},r=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("72ca"),o=a("262f"),c=a("9d33"),l=a("d67c"),h=a("2f62");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={components:{profileTemplateCompact:s["a"],Header:o["a"]},data:function(){return{hardening:c,db:l}},computed:{mail_link:function(){return"mailto:"+l.communityEmail},showCompact:function(){return this.$store.state.isCompact}},methods:g({},Object(h["c"])(["toggleCompact"]),{},Object(h["b"])(["isCompactGetter"]))},m=p,d=a("2877"),f=a("6544"),v=a.n(f),b=a("62ad"),y=a("a523"),C=a("a75b"),k=a("0fd9"),S=Object(d["a"])(m,n,r,!1,null,null,null);e["default"]=S.exports;v()(S,{VCol:b["a"],VContainer:y["a"],VContent:C["a"],VRow:k["a"]})},cc20:function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var n=a("768b"),r=a("bd86"),i=(a("8adc"),a("58df")),s=a("0789"),o=a("9d26"),c=a("a9ad"),l=a("4e82"),h=a("7560"),u=a("f2e7"),g=a("1c87"),p=a("af2b"),m=a("d9bd");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]=Object(i["a"])(c["a"],p["a"],g["a"],h["a"],Object(l["a"])("chipGroup"),Object(u["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return f({"v-chip":!0},g["a"].options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(g["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(n["a"])(e,2),r=a[0],i=a[1];t.$attrs.hasOwnProperty(r)&&Object(m["a"])(r,i,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(s["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),n=a.tag,r=a.data;r.attrs=f({},r.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:r.attrs.tabindex}),r.directives.push({name:"show",value:this.active}),r=this.setBackgroundColor(this.color,r);var i=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(i,r),e)}})},d830:function(t,e,a){"use strict";var n=a("4458"),r=a.n(n);r.a}}]);