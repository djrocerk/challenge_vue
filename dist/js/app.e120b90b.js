(function(){"use strict";var t={1894:function(t,e,s){var r=s(6369),o=s(2631),a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("router-view")],1)},i=[],n=s(452),l=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-navbar",{staticClass:"head",staticStyle:{"box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.2)"},attrs:{toggleable:"lg",type:"light",variant:"light"}},[e("b-navbar-brand",{attrs:{href:"#"},on:{click:function(e){return t.$router.push("/")}}},[t._v("Estate Assist")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",{staticClass:"full-name"},[t._v(t._s(t.user.fullName))])]},proxy:!0}])},[e("b-dropdown-item",{attrs:{href:"#"},on:{click:t.logout}},[t._v("Sign Out")])],1)],1)],1)],1)},c=[],d=function(t,e,s,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,s,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(i=(a<3?o(i):a>3?o(e,s,i):o(e,s))||i);return a>3&&i&&Object.defineProperty(e,s,i),i};let u=class extends n.w3{get checksAll(){return this.$store.getters.tasks}get user(){return JSON.parse(localStorage.getItem("user").toString())}logout(){localStorage.clear(),this.$store.dispatch("logout",{}),this.$router.push("/login")}};u=d([n.wA],u);var p=u,f=p,m=s(1001),g=(0,m.Z)(f,l,c,!1,null,"4729447e",null),h=g.exports,v=n.w3.extend({name:"App",components:{Header:h},data:()=>({})}),k=v,b=(0,m.Z)(k,a,i,!1,null,null,null),y=b.exports,_=s(5431);(0,_.z)("/challenge_vue/dist/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var w=s(3822),x=s(2482);class C{constructor(){(0,x.Z)(this,"id",0),(0,x.Z)(this,"username",""),(0,x.Z)(this,"fullName",""),(0,x.Z)(this,"password","")}}r["default"].use(w.ZP);var O=new w.ZP.Store({state:{userLogged:C,tasks:[],task:{},filter:"all"},getters:{tasks(t){return t.tasks},task(t){return t.task},userLogged(t){return t.userLogged}},mutations:{userLogged(t,e){t.userLogged={...e}},setFilter:(t,e)=>t.filter=e,setChecks(t,e){const s=t.tasks.map((t=>({...t,completed:!0})));t.tasks=[...s]},addItem:(t,e)=>{t.tasks=[...t.tasks,e],localStorage.setItem("tasks",JSON.stringify(t.tasks))},editItem(t,{id:e,title:s,description:r,completed:o=!1}){const a=t.tasks.map((t=>t._id===e?{...t,title:s,description:r,completed:o}:t));t.tasks=[...a],localStorage.setItem("tasks",JSON.stringify(t.tasks))},removeItem(t,e){const s=t.tasks.filter((t=>t!==e));t.tasks=s,localStorage.setItem("tasks",JSON.stringify(t.tasks))},getItem(t,e){const s=t.tasks.find((t=>t._id===e));t.task=s},deleteTodoDone(t,e){const s=t.tasks.filter((t=>1==t.completed));console.log(s,"nose")},findTasks(t){t.tasks=JSON.parse(localStorage.getItem("tasks").toString())}},actions:{addItem({commit:t},e){t("addItem",{item:e})},editItem({commit:t},{id:e,title:s,description:r}){t("editItem",{id:e,title:s,description:r})},toggleItem({commit:t},e){t("editItem",{id:e._id,title:e.title,description:e.description,completed:!0})},deleteItem({commit:t},e){t("removeItem",e)},allChecks({commit:t},e){t("setChecks",e)},deleteteTodos({commit:t},e){t("deleteTodoDone",e)},getItem({commit:t},e){t("getItem",e)},userLogged({commit:t},e){t("userLogged",e)},findTasks({commit:t}){t("findTasks")}},modules:{}}),P=s(5996),T=s(9425),I=(s(7024),function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("Header"),e("div",{staticClass:"container mt-5",attrs:{id:"app"}},[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-8 offset-2 mt-3",staticStyle:{border:"1px solid #ddd",padding:"20px","border-radius":"3px","box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.1)"}},[e("Resume"),e("hr"),e("Task"),e("hr"),e("TaskList")],1)])])],1)}),S=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mt-3"},[e("div",{staticClass:"text-center"},[e("img",{attrs:{width:"15%",src:s(2781)}})])])])}],$=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"add-task"},[e("div",{staticClass:"form-inline"},[e("div",{staticClass:"form-group mb-2"},[e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/task/0")}}},[e("b-icon-plus"),t._v(" Add task ")],1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.taskName,expression:"taskName"}],staticClass:"form-control ml-2 block",attrs:{type:"text",placeholder:"Find...",autofocus:""},domProps:{value:t.taskName},on:{keyup:t.filterTask,input:function(e){e.target.composing||(t.taskName=e.target.value)}}})])])])},j=[],Z=function(t,e,s,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,s,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(i=(a<3?o(i):a>3?o(e,s,i):o(e,s))||i);return a>3&&i&&Object.defineProperty(e,s,i),i};let R=class extends n.w3{constructor(...t){super(...t),(0,x.Z)(this,"taskName","")}created(){this.filterTask()}filterTask(){this.$store.commit("setFilter",this.taskName)}};R=Z([n.wA],R);var N=R,A=N,L=(0,m.Z)(A,$,j,!1,null,"25949f54",null),D=L.exports,E=function(){var t=this,e=t._self._c;t._self._setupProxy;return t.filtersTask.length?e("div",t._l(t.filtersTask,(function(t){return e("TaskItem",{key:t._id,staticClass:"exists-tasks",attrs:{task:t}})})),1):e("span",{staticClass:"empty-tasks"},[t._v("No task yet.")])},J=[],F=function(){var t=this,e=t._self._c;t._self._setupProxy;return t.task?e("div",[e("div",{staticClass:"checkbox"},[e("label",{staticClass:"mb-0"},[e("input",{staticClass:"mr-3",attrs:{type:"checkbox",disabled:t.task.completed},domProps:{checked:t.task.completed},on:{change:t.changeItemStatus}}),t._v(" "+t._s(t.task.title)+" ")]),e("button",{staticClass:"btn btn-outline-danger btn-sm float-right ml-2",attrs:{type:"button"},on:{click:t.removeTask}},[e("b-icon-trash")],1),e("button",{staticClass:"btn btn-outline-info btn-sm float-right",attrs:{type:"button"},on:{click:t.showTask}},[e("b-icon-pen")],1)]),e("hr")]):t._e()},M=[],H=function(t,e,s,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,s,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(i=(a<3?o(i):a>3?o(e,s,i):o(e,s))||i);return a>3&&i&&Object.defineProperty(e,s,i),i};let q=class extends n.w3{constructor(...t){super(...t),(0,x.Z)(this,"task",void 0),(0,x.Z)(this,"editing",!1)}editItem(t){const e=t.target.value;if(e){const{task:t}=this;this.$store.dispatch("editItem",{task:t,value:e}),this.editing=!1}else this.removeTask()}showTask(){this.$router.push(`task/${this.task?._id}`)}cancelEdit(t){t.target.value=this.task.title,this.editing=!1}removeTask(){this.$store.dispatch("deleteItem",this.task)}changeItemStatus(){this.$store.dispatch("toggleItem",this.task)}canEdit(){this.task.completed||(this.editing=!0)}};H([(0,n.fI)({required:!0,type:Object})],q.prototype,"task",void 0),q=H([n.wA],q);var z=q,V=z,B=(0,m.Z)(V,F,M,!1,null,"f56aca6c",null),G=B.exports,U=function(t,e,s,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,s,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(i=(a<3?o(i):a>3?o(e,s,i):o(e,s))||i);return a>3&&i&&Object.defineProperty(e,s,i),i};let X=class extends n.w3{get filtersTask(){return console.log("this.$store.getters.tasks: ",this.$store.getters.tasks),this.$store.getters.tasks.filter((t=>-1!==t.title.toLowerCase().indexOf(this.$store.state.filter.toLowerCase())))}changeItemStatus(){this.$store.dispatch("allChecks",this.filtersTask)}created(){this.$store.dispatch("findTasks")}get checksAll(){return this.$store.getters.tasks.filter((t=>!t.completed)).length}};X=U([(0,n.wA)({components:{TaskItem:G}})],X);var K=X,Q=K,W=(0,m.Z)(Q,E,J,!1,null,"4f3e0019",null),Y=W.exports,tt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-4"},[t.totalTasks?e("small",[e("strong",{staticClass:"resume-value"},[t._v(t._s(t.pendingTasks)+"/"+t._s(t.totalTasks)+" task left")])]):t._e(),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar bg-secondary",style:t.progress_style,attrs:{role:"progressbar"}})])])])])},et=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"col-8"},[t._v(" 1. "),e("b",[t._v("Intermediate Steps")]),e("br"),e("small",{staticClass:"text-secondary"},[t._v("These are your inmediate steps to complete")])])}],st=function(t,e,s,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,s,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(i=(a<3?o(i):a>3?o(e,s,i):o(e,s))||i);return a>3&&i&&Object.defineProperty(e,s,i),i};let rt=class extends n.w3{get progress(){return(this.totalTasks-this.pendingTasks)/this.totalTasks*100}get progress_style(){return{width:`${this.progress}%`}}get totalTasks(){return this.$store.getters?.tasks?.length}get pendingTasks(){return this.$store.getters?.tasks?.filter((t=>!t.completed)).length}};rt=st([(0,n.wA)({components:{}})],rt);var ot=rt,at=ot,it=(0,m.Z)(at,tt,et,!1,null,"73b7b93b",null),nt=it.exports,lt=function(t,e,s,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,s,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(i=(a<3?o(i):a>3?o(e,s,i):o(e,s))||i);return a>3&&i&&Object.defineProperty(e,s,i),i};let ct=class extends n.w3{};ct=lt([(0,n.wA)({components:{Task:D,TaskList:Y,Resume:nt,Header:h}})],ct);var dt=ct,ut=dt,pt=(0,m.Z)(ut,I,S,!1,null,"68eb7045",null),ft=pt.exports,mt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 offset-3"},[t.task?e("form",{staticClass:"mt-5",staticStyle:{border:"1px solid #ddd",padding:"20px","border-radius":"3px","box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.1)"}},[t.saved?e("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v(" Task saved successfully! ")]):t._e(),e("div",{staticClass:"form-group"},[e("label",[t._v("Title")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.task.title,expression:"task.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.task.title},on:{input:function(e){e.target.composing||t.$set(t.task,"title",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Description")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"task.description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.task.description},on:{input:function(e){e.target.composing||t.$set(t.task,"description",e.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.update}},[t._v(" Save ")]),e("button",{staticClass:"btn btn-outline-danger ml-2",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/")}}},[t._v(" Return ")])]):t._e()])])])},gt=[];class ht{constructor(t,e,s){(0,x.Z)(this,"_id",void 0),(0,x.Z)(this,"title",void 0),(0,x.Z)(this,"description",void 0),(0,x.Z)(this,"completed",void 0),this._id=t,this.title=e,this.completed=!1,this.description=s}}var vt=ht,kt=s(6236),bt=function(t,e,s,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,s,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(i=(a<3?o(i):a>3?o(e,s,i):o(e,s))||i);return a>3&&i&&Object.defineProperty(e,s,i),i};let yt=class extends n.w3{constructor(...t){super(...t),(0,x.Z)(this,"id",this.$route.params.id),(0,x.Z)(this,"saved",!1),(0,x.Z)(this,"task",new vt("","",""))}created(){if(0===Number(this.id)){const t=kt.V.v4(),e=new vt(t,"","");this.task=e}else this.getTask()}update(){if(0===Number(this.id)){const t=kt.V.v4(),e=new vt(t,this.task.title,this.task.description);this.$store.commit("addItem",e),this.$router.push("/")}else this.$store.dispatch("editItem",this.task);this.saved=!0}getTask(){const t=this.$route.params.id;this.$store.dispatch("getItem",t),this.task=this.$store.getters.task}};yt=bt([(0,n.wA)({components:{}})],yt);var _t=yt,wt=_t,xt=(0,m.Z)(wt,mt,gt,!1,null,"502dd894",null),Ct=xt.exports,Ot=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-4 offset-4 mt-2"},[e("form",{staticStyle:{border:"1px solid #ddd",padding:"20px","border-radius":"3px","box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.1)"}},[t.showError?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" Invalid credentials ")]):t._e(),e("div",{staticClass:"form-group"},[e("label",[t._v("Username")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.model.username,expression:"model.username"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.model.username},on:{input:function(e){e.target.composing||t.$set(t.model,"username",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.model.password,expression:"model.password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.model.password},on:{input:function(e){e.target.composing||t.$set(t.model,"password",e.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.login}},[t._v(" Login ")])])])])])},Pt=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-12 text-center"},[e("img",{staticClass:"text-center",attrs:{width:"200px",src:s(2781)}})])])}],Tt=JSON.parse('[{"id":1,"username":"mperdomo","fullName":"Maria Paula Perdomo Rojas","password":"123.abc"},{"id":2,"username":"droldan","fullName":"Diego Andrés Roldán Lozano","password":"abcde"}]'),It=function(t,e,s,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,s,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(i=(a<3?o(i):a>3?o(e,s,i):o(e,s))||i);return a>3&&i&&Object.defineProperty(e,s,i),i};let St=class extends n.w3{constructor(...t){super(...t),(0,x.Z)(this,"model",{username:"",password:""}),(0,x.Z)(this,"showError",!1)}login(){this.showError=!1;const t=Tt,e=t.find((t=>t.username===this.model.username&&t.password===this.model.password));e?(localStorage.setItem("user",JSON.stringify(e)),this.$store.dispatch("userLogged",e),this.$router.push("/")):this.showError=!0}};St=It([(0,n.wA)({components:{}})],St);var $t=St,jt=$t,Zt=(0,m.Z)(jt,Ot,Pt,!1,null,"1ad8d6ff",null),Rt=Zt.exports;r["default"].use(o.Z);const Nt=[{path:"/",name:"home",component:ft},{path:"/tasks",name:"tasks",redirect:"/"},{path:"/task/:id",name:"task_edit",component:Ct},{path:"/login",name:"login",component:Rt}],At=new o.Z({mode:"history",base:"/challenge_vue/dist/",routes:Nt});At.beforeEach(((t,e,s)=>{"login"!==t.name?localStorage.getItem("user")?s():s({name:"login"}):localStorage.getItem("user")?s({name:"home"}):s()}));var Lt=At;r["default"].use(P.XG7),r["default"].use(T.A7),r["default"].use(o.Z),r["default"].config.productionTip=!1,new r["default"]({store:O,router:Lt,render:t=>t(y)}).$mount("#app")},2781:function(t,e,s){t.exports=s.p+"img/logo.151b5b4c.webp"}},e={};function s(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,r,o,a){if(!r){var i=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],a=t[d][2];for(var n=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(s.O).every((function(t){return s.O[t](r[l])}))?r.splice(l--,1):(n=!1,a<i&&(i=a));if(n){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[r,o,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/challenge_vue/dist/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],n=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in n)s.o(n,o)&&(s.m[o]=n[o]);if(l)var d=l(s)}for(e&&e(r);c<i.length;c++)a=i[c],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(d)},r=self["webpackChunkchallenge_typescript"]=self["webpackChunkchallenge_typescript"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(1894)}));r=s.O(r)})();
//# sourceMappingURL=app.e120b90b.js.map