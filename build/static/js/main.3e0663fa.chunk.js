(this["webpackJsonpzehan-baihaqi"]=this["webpackJsonpzehan-baihaqi"]||[]).push([[0],{154:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),i=a(57),j=a.n(i),l=(a(154),a(228)),s=a(48),b=function(){return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("h1",{children:"SD Kutamendalah"}),Object(n.jsxs)("div",{className:"links",children:[Object(n.jsx)(s.b,{to:"/",children:"Home"}),Object(n.jsx)(s.b,{to:"/",children:"About"}),Object(n.jsx)(s.b,{to:"/pendaftar",children:"Cek Pendaftar"}),Object(n.jsx)(s.b,{to:"/create",className:"daftar",children:"Daftar"})]})]})},d=a(242),o=a(221),u=a(222),h=a(241),x=a(240),O=a(256),p=a(255),m=a(132),g=a(238);function v(){return Object(n.jsxs)(x.a,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(p.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var f=Object(m.a)();function y(){return Object(n.jsxs)(g.a,{theme:f,children:[Object(n.jsx)(o.a,{}),Object(n.jsx)("main",{children:Object(n.jsx)(h.a,{sx:{bgcolor:"background.paper",pt:8,pb:6},children:Object(n.jsxs)(O.a,{maxWidth:"sm",children:[Object(n.jsx)(x.a,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:"SD Kutamendala"}),Object(n.jsx)(x.a,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:"Mari Begabung dengan sekolah kita SD Kutamendala"}),Object(n.jsxs)(u.a,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center",children:[Object(n.jsx)(d.a,{variant:"contained",children:Object(n.jsx)(s.b,{to:"/create",style:{color:"white"},children:"Daftar"})}),Object(n.jsx)(d.a,{variant:"outlined",children:Object(n.jsx)(s.b,{to:"/pendaftar",children:"Cek Pendaftar"})})]})]})})}),Object(n.jsxs)(h.a,{sx:{bgcolor:"background.paper",p:6},component:"footer",children:[Object(n.jsx)(x.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(n.jsx)(x.a,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p",children:"Something here to give the footer a purpose!"}),Object(n.jsx)(v,{})]})]})}var k=function(){return Object(n.jsx)("div",{className:"home",children:Object(n.jsx)(y,{})})},S=a(20),C=a(15),P=a(234);function N(){var e=Object(c.useState)(""),t=Object(C.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(""),j=Object(C.a)(i,2),l=j[0],s=j[1];return Object(n.jsxs)(u.a,{component:"form",noValidate:!0,spacing:1,children:[Object(n.jsx)("label",{children:"Tempat Lahir"}),Object(n.jsx)("input",{id:"outlined-basic",label:"Tempat Lahir",variant:"outlined",value:a,onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)(P.a,{spacing:3,value:l,onChange:function(e){return s(e.target.value)},id:"date",label:"Tanggal Lahir",type:"date",defaultValue:"2017-05-24",sx:{width:220},InputLabelProps:{shrink:!0}})]})}var q=function(){var e=Object(c.useState)(""),t=Object(C.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(""),j=Object(C.a)(i,2),l=j[0],s=j[1],b=Object(c.useState)("Perempuan"),d=Object(C.a)(b,2),o=d[0],u=d[1],h=Object(c.useState)(""),x=Object(C.a)(h,2),O=x[0],p=x[1];return Object(n.jsx)("div",{className:"create",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(n.jsx)("h2",{children:" Pendaftaran "}),Object(n.jsx)("label",{children:"Nama Lengkap"}),Object(n.jsx)("input",{type:"text",required:!0,value:a,onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)("input",{required:!0,value:l,onChange:function(e){return s(e.target.value)}}),Object(n.jsx)("label",{children:"Jenis Kelamin"}),Object(n.jsxs)("select",{value:o,onChange:function(e){return u(e.target.value)},children:[Object(n.jsx)("option",{value:"laki-laki",children:"Laki-Laki"}),Object(n.jsx)("option",{value:"Perempuan",children:"Perempuan"})]}),Object(n.jsx)("label",{children:"Tempat dan Tanggal Lahir"}),Object(n.jsx)("br",{}),Object(n.jsx)(N,{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Alamat Tinggal"}),Object(n.jsx)("textarea",{required:!0,value:O,onChange:function(e){return p(e.target.value)}}),Object(n.jsx)("button",{className:"createButton",children:"Add Blog"})]})})},L=a(52),D=a(232),T=a(236);function B(){var e=Object(L.a)(["\n  query MyQuery {\n    pendaftar {\n      domisili\n      id\n      nama\n    }\n  }\n"]);return B=function(){return e},e}var w=Object(D.a)(B()),z=function(){var e=Object(c.useState)(""),t=Object(C.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(""),j=Object(C.a)(i,2),l=j[0],s=j[1],b=Object(c.useState)("Perempuan"),d=Object(C.a)(b,2),o=d[0],u=d[1],h=Object(c.useState)(""),x=Object(C.a)(h,2),O=x[0],p=x[1],m=Object(T.a)(w);m.data,m.loading;return Object(n.jsx)("div",{className:"create",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(n.jsx)("h2",{children:" Edit Pendaftaran "}),Object(n.jsx)("label",{children:"Nama Lengkap"}),Object(n.jsx)("input",{type:"text",required:!0,value:a,onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)("input",{required:!0,value:l,onChange:function(e){return s(e.target.value)}}),Object(n.jsx)("label",{children:"Jenis Kelamin"}),Object(n.jsxs)("select",{value:o,onChange:function(e){return u(e.target.value)},children:[Object(n.jsx)("option",{value:"laki-laki",children:"Laki-Laki"}),Object(n.jsx)("option",{value:"Perempuan",children:"Perempuan"})]}),Object(n.jsx)("label",{children:"Tempat dan Tanggal Lahir"}),Object(n.jsx)("br",{}),Object(n.jsx)(N,{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Alamat Tinggal"}),Object(n.jsx)("textarea",{required:!0,value:O,onChange:function(e){return p(e.target.value)}}),Object(n.jsx)("button",{className:"editButton",children:"Edit Data"})]})})},J=a(244),A=a(246),F=a(245),I=Object(n.jsx)(h.a,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"\u2022"});function K(){return Object(n.jsxs)(J.a,{sx:{minWidth:275},children:[Object(n.jsxs)(F.a,{children:[Object(n.jsx)(x.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),Object(n.jsxs)(x.a,{variant:"h5",component:"div",children:["be",I,"nev",I,"o",I,"lent"]}),Object(n.jsx)(x.a,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),Object(n.jsxs)(x.a,{variant:"body2",children:["well meaning and kindly.",Object(n.jsx)("br",{}),'"a benevolent smile"']})]}),Object(n.jsx)(A.a,{children:Object(n.jsx)(d.a,{size:"small",children:"Learn More"})})]})}a(37),a(249),a(250),a(252),a(248),a(253),a(231),a(251),a(243),a(247),a(113),a(115),a(114),a(112);function M(e,t,a){return{name:e,calories:t,fat:a}}[M("Zehan Baihaqi","semarang",""),M("Badja","Jakarta",""),M("Iklham","Jepang",""),M("Ilham Seteven","Sirabaya",""),M("Human Riza","Jambi",""),M("Honeycomb","pemalang","")].sort((function(e,t){return e.calories<t.calories?-1:1}));var E=function(e){var t=e.data,a=t.id,c=t.nama,r=t.domisili;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:a}),Object(n.jsx)("td",{children:c}),Object(n.jsx)("td",{children:r})]})};function V(){var e=Object(L.a)(["\n  query MyQuery {\n    pendaftar {\n      domisili\n      id\n      nama\n    }\n  }\n"]);return V=function(){return e},e}var R=Object(D.a)(V()),W=function(e){var t=Object(T.a)(R),a=t.data;t.loading;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("table",{cellPadding:"5px",cellSpacing:"0",style:{margin:"auto"},children:[Object(n.jsxs)("thead",{className:"abuabu",children:[Object(n.jsx)("td",{children:"No"}),Object(n.jsx)("td",{children:"Nama"}),Object(n.jsx)("td",{children:"Domisili"})]}),null===a||void 0===a?void 0:a.pendaftar.map((function(t){return Object(n.jsx)(E,{data:t,hapusPengunjung:e.hapusPengunjung},t.id)}))]}),Object(n.jsx)("br",{})]})};var Y=function(){return Object(n.jsx)(s.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(b,{}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)(S.c,{children:[Object(n.jsx)(S.a,{path:"/",exact:!0,children:Object(n.jsx)(k,{})}),Object(n.jsx)(S.a,{path:"/create",exact:!0,children:Object(n.jsx)(q,{})}),Object(n.jsx)(S.a,{path:"/card",exact:!0,children:Object(n.jsx)(K,{})}),Object(n.jsx)(S.a,{path:"/edit",exact:!0,children:Object(n.jsx)(z,{})}),Object(n.jsx)(S.a,{path:"/pendaftar",exact:!0,children:Object(n.jsx)(W,{})})]})})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,259)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},H=a(230),Q=a(233),X=new H.a({uri:"https://bismillahproject.hasura.app/v1/graphql",cache:new Q.a,headers:{"x-hasura-admin-secret":"CxDM2mRAGp2guB8zzXTkpVPy1qqxRScUVQPCVOY0N5bIY8svfqoGKDRv0GX31pbT"}});j.a.render(Object(n.jsx)(l.a,{client:X,children:Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Y,{})})}),document.getElementById("root")),G()}},[[163,1,2]]]);
//# sourceMappingURL=main.3e0663fa.chunk.js.map