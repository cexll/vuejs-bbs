(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(s,e,t){"use strict";t.r(e);var o=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("Message",{attrs:{show:s.msgShow,type:s.msgType,msg:s.msg},on:{"update:show":function(e){s.msgShow=e}}})],1)},n=[],a=(t("b0c0"),{name:"Home",data:function(){return{msg:"",msgType:"",msgShow:!1}},beforeRouteEnter:function(s,e,t){var o=e.name,n=s.params.logout;t((function(s){if(s.$store.state.auth)switch(o){case"Register":s.$message.show("注册成功");break;case"Login":s.$message.show("登录成功");break}else n&&s.$message.show("操作成功")}))},computed:{auth:function(){return this.$store.state.auth}},watch:{auth:function(s){s||this.$message.show("操作成功")}},methods:{showMsg:function(s){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" success";this.msg=s,this.msgType=e,this.msgShow=!0}}}),h=a,u=t("2877"),c=Object(u["a"])(h,o,n,!1,null,"210c8bdb",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.d83a4a1f.js.map