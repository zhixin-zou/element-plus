import{g as T,O as B,r as h,o as r,f as F,w as d,a as b,b as e,c as t,i as m,y as n,d as i,t as l,u as a,F as v,H as z,P as w,Q as L,R as N,S as A}from"../app.b23e5cc8.js";const E={class:"demo-color-box-group"},H={class:"value",text:"xs"},O={class:"demo-color-box-group"},P={class:"value",text:"xs"},Q={class:"demo-color-box-group"},R={class:"value",text:"xs"},W={class:"demo-color-box-group"},j=i(" Basic Black "),q=i(" Basic White "),G=e("div",{class:"demo-color-box demo-color-box-other demo-color-box-lite bg-transparent"},[i(" Transparent "),e("div",{class:"value",text:"xs"},"Transparent")],-1),I={class:"value",text:"xs"},eo=T({__name:"neutral-color",setup(U){const u=["page","","overlay"].map(o=>({name:o?`${o[0].toUpperCase()+o.slice(1)} Background`:"Base Background",var:B(w("bg-color",o))})),_=["darker","dark","","light","lighter","extra-light"].map(o=>({name:o?`${o[0].toUpperCase()+o.slice(1)} Border`:"Base Border",var:B(w("border-color",o))})),g=["darker","dark","","light","lighter","extra-light","blank"].map(o=>({name:o?`${o[0].toUpperCase()+o.slice(1)} Fill`:"Base Fill",var:B(w("fill-color",o))})),c=["primary","regular","secondary","placeholder","disabled"].map(o=>({name:`${o[0].toUpperCase()+o.slice(1)} Text`,var:B(w("text-color",o))})),k="#000000",C="#FFFFFF";return(o,S)=>{const $=h("el-col"),D=h("el-row");return r(),F(D,{gutter:12},{default:d(()=>[b($,{span:6,xs:{span:12}},{default:d(()=>[e("div",E,[(r(!0),t(v,null,m(a(c),(s,p)=>(r(),t("div",{key:p,class:"demo-color-box demo-color-box-other",style:n({color:"var(--el-bg-color)",background:s.var.value})},[i(l(s.name)+" ",1),e("div",H,l(s.var.value.toUpperCase()),1)],4))),128))])]),_:1}),b($,{span:6,xs:{span:12}},{default:d(()=>[e("div",O,[(r(!0),t(v,null,m(a(_),(s,p)=>(r(),t("div",{key:p,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:n({background:s.var.value})},[i(l(s.name)+" ",1),e("div",P,l(s.var.value.toUpperCase()),1)],4))),128))])]),_:1}),b($,{span:6,xs:{span:12}},{default:d(()=>[e("div",Q,[(r(!0),t(v,null,m(a(g),(s,p)=>(r(),t("div",{key:p,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:n({background:s.var.value,border:`1px solid ${s.name==="Blank Fill"?"var(--el-border-color-light)":"transparent"}`})},[i(l(s.name)+" ",1),e("div",R,l(s.var.value.toUpperCase()),1)],4))),128))])]),_:1}),b($,{span:6,xs:{span:12}},{default:d(()=>[e("div",W,[e("div",{class:"demo-color-box demo-color-box-other",style:n({background:k})},[j,e("div",{class:"value",text:"xs"},l(k))],4),e("div",{class:"demo-color-box demo-color-box-other",style:n({background:C,color:"#303133",border:"1px solid #eee"})},[q,e("div",{class:"value",text:"xs"},l(C))],4),G,(r(!0),t(v,null,m(a(u),(s,p)=>(r(),t("div",{key:p,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:n({background:s.var.value,border:"1px solid "+(!a(z)||s.name==="Base Background"?"var(--el-border-color-light)":"transparent")})},[i(l(s.name)+" ",1),e("div",I,l(s.var.value.toUpperCase()),1)],4))),128))])]),_:1})]),_:1})}}}),J={class:"value",text:"xs"},K={class:"bg-color-sub"},M=["onClick"],so=T({__name:"secondary-colors",setup(U){const x=["success","warning","danger","info"],u=[3,5,7,8,9].map(_=>`light-${_}`);u.unshift("dark-2");const{copyColor:y}=L();return(_,V)=>{const g=h("el-col"),f=h("el-row");return r(),F(f,{gutter:12},{default:d(()=>[(r(),t(v,null,m(x,(c,k)=>b(g,{key:k,span:6,xs:{span:12}},{default:d(()=>[e("div",{class:"demo-color-box",style:n({background:a(N)(c)})},[i(l(c.charAt(0).toUpperCase()+c.slice(1))+" ",1),e("div",J,l(a(N)(c).toUpperCase()),1),e("div",K,[(r(!0),t(v,null,m(a(u),(C,o)=>(r(),t("div",{key:o,class:"bg-secondary-sub-item transition cursor-pointer hover:shadow",style:n({width:`${100/6}%`,background:`var(--el-color-${c}-`+C+")"}),onClick:S=>a(y)(c+"-"+C)},null,12,M))),128))])],4)]),_:2},1024)),64))]),_:1})}}}),X=i(" Brand Color "),Y={class:"value",text:"xs"},Z=["onClick"],ro=T({__name:"main-color",setup(U){const x=A("--el-color-primary"),u=[3,5,7,8,9].map(_=>`light-${_}`);u.unshift("dark-2");const{copyColor:y}=L();return(_,V)=>{const g=h("el-col"),f=h("el-row");return r(),F(f,{gutter:12},{default:d(()=>[b(g,{span:10,xs:{span:12}},{default:d(()=>[e("div",{class:"demo-color-box",style:n({background:a(x)})},[X,e("div",Y,l(a(x).toUpperCase()),1),e("div",{class:"bg-color-sub",style:n({background:a(x)})},[(r(!0),t(v,null,m(a(u),c=>(r(),t("div",{key:c,class:"bg-blue-sub-item cursor-pointer hover:shadow",style:n({width:`${100/6}%`,background:"var(--el-color-primary-"+c+")"}),onClick:k=>a(y)("primary-"+c)},null,12,Z))),128))],4)],4)]),_:1})]),_:1})}}});export{ro as _,so as a,eo as b};