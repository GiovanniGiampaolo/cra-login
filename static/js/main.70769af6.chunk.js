(this["webpackJsonpcra-login"]=this["webpackJsonpcra-login"]||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),i=n.n(c),s=(n(63),n(9)),l=n.n(s),o=(n(67),n(31)),r=(n(68),n(21)),j=n(11),d=n(108),b=n(102),u={username:"superadmin@dstech.it",password:"password123"},m="Francesco Totti nasce a Roma il 27 settembre 1976. Dimostra sin da piccolo grande confidenza con la sfera di cuoio. La sua prima squadra \xe8 la Fortitudo, piccola societ\xe0 del quartiere San Giovanni, dove vive la famiglia. Dalla Fortitudo di Trill\xf2, Francesco passa alla Smit Trastevere, alla corte di Pergolati e Paolucci.";function h(e){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(b.a,{variant:"h5",className:"col-12 text-center pb-4 font-weight-bold",children:"Benvenuto nel tuo profilo!"}),Object(a.jsx)(b.a,{className:"col-12 mb-4 text-justify",variant:"body1",children:m}),Object(a.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center",children:[Object(a.jsx)(d.a,{onClick:function(){sessionStorage.removeItem("Jwt"),e.setUserAuth(!1)},className:"col-6 mb-2",style:{backgroundColor:"#bf3535",color:"white"},children:"Logout"}),Object(a.jsx)(d.a,{className:"col-6",style:{backgroundColor:"#d67b1f",color:"white"},children:Object(a.jsx)(r.b,{className:"link-no-style",to:"/compose",children:"Compose"})})]})]})}function x(){return Object(a.jsxs)("div",{className:"d-flex flex-column align-items-center justify-items-center",children:[Object(a.jsx)(b.a,{className:"col-12 mb-2 text-justify",variant:"body1",children:"Devi loggarti per vedere questa porzione"}),Object(a.jsx)(r.b,{to:"/",children:Object(a.jsx)(d.a,{fullWidth:!0,style:{backgroundColor:"#bf3535",color:"white"},children:"Back to Login"})})]})}var O=n(107),f=n(38),p={title:"Il Capitano",description:m};function g(){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(b.a,{className:"col-12 mb-4 font-weight-bold",variant:"h5",children:"Genera la tua pagina dinamicamente"}),Object(a.jsx)(f.a,{initialValues:p,onSubmit:function(e){window.sessionStorage.setItem("preview",JSON.stringify(e)),window.open("/preview","_blank")},children:function(e){return Object(a.jsxs)("form",{style:{display:"flex",flexDirection:"column",alignItems:"center"},onSubmit:e.handleSubmit,children:[Object(a.jsx)(O.a,{className:"col-8 mb-4",variant:"outlined",id:"title",name:"title",label:"Title",value:e.values.title,onChange:e.handleChange}),Object(a.jsx)(O.a,{className:"col-12 mb-4",variant:"outlined",id:"description",name:"description",label:"Dynamic text",multiline:!0,placeholder:"Write here text",value:e.values.description,onChange:e.handleChange}),Object(a.jsx)(d.a,{className:"col-8 mb-2",color:"primary",variant:"contained",type:"submit",children:"Preview"}),Object(a.jsx)(d.a,{className:"col-8",color:"secondary",variant:"contained",children:Object(a.jsx)(r.b,{className:"link-no-style",to:"/profile",children:"Go back to profile"})})]})}})]})}function v(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){var e=window.sessionStorage.getItem("preview");s(JSON.parse(e))}),[]);return Object(a.jsxs)(i.a.Fragment,{children:[n&&Object(a.jsx)(b.a,{className:"col-12 font-weight-bold text-center mb-2",variant:"h5",children:n.title}),n&&Object(a.jsx)(b.a,{className:"col-12 mb-4 text-justify",variant:"body1",children:n.description}),Object(a.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(a.jsx)(d.a,{variant:"outlined",onClick:function(){window.sessionStorage.removeItem("preview"),window.close()},style:{backgroundColor:"#386dbe",color:"white"},children:"Go back"})})]})}function w(e){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(b.a,{variant:"h5",className:"col-12 pb-4 text-center font-weight-bold",children:"Login into our React app!"}),Object(a.jsx)(f.a,{initialValues:u,onSubmit:function(t){e.setUserAuth(!0)},children:function(e){return Object(a.jsxs)("form",{style:{display:"flex",flexDirection:"column",alignItems:"center"},onSubmit:e.handleSubmit,children:[Object(a.jsx)(O.a,{className:"col-8 pb-4",variant:"outlined",id:"username",name:"username",label:"Username",value:e.values.username,onChange:e.handleChange}),Object(a.jsx)(O.a,{className:"col-8 pb-4",variant:"outlined",id:"password",name:"password",label:"Password",type:"password",value:e.values.password,onChange:e.handleChange}),Object(a.jsx)(d.a,{color:"primary",className:"col-6",variant:"contained",type:"submit",children:"login"})]})}})]})}var y=n(106);var N=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],l=Object(c.useState)(!1),d=Object(o.a)(l,2),b=d[0],u=d[1],m=Object(c.useState)("no jwt"),O=Object(o.a)(m,2),f=O[0],p=O[1];return Object(c.useEffect)((function(){window.sessionStorage.getItem("preview")&&u(!b)}),[]),Object(c.useEffect)((function(){console.log("isUserAutherticated =>",n,f)}),[n,f]),Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(r.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"row mb-5",children:[Object(a.jsx)(r.b,{className:"col-md-6 col-12 align-content-center text-center link-no-style",to:"/",children:Object(a.jsx)("h2",{style:{color:"white"},children:"Login"})}),Object(a.jsx)(r.b,{className:"col-md-6 col-12 align-content-center text-center link-no-style",to:"/profile",children:Object(a.jsx)("h2",{style:{color:"white"},children:"Profile"})})]}),Object(a.jsx)(y.a,{className:"row container align-content-center justify-content-center flex-column p-5 w-auto",style:{maxWidth:600},children:Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{path:"/",exact:!0,children:Object(a.jsx)(w,{setUserAuth:s,setJwt:p})}),Object(a.jsx)(j.b,{path:"/profile",exact:!0,children:n?Object(a.jsx)(h,{setUserAuth:s}):Object(a.jsx)(x,{})}),Object(a.jsx)(j.b,{path:"/compose",children:Object(a.jsx)(g,{})}),Object(a.jsx)(j.b,{path:"/preview",children:Object(a.jsx)(v,{})}),n?Object(a.jsx)(j.a,{to:"/profile"}):Object(a.jsx)(j.a,{to:"/"}),b&&Object(a.jsx)(j.a,{to:"/preview"})]})})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),S()}},[[74,1,2]]]);
//# sourceMappingURL=main.70769af6.chunk.js.map