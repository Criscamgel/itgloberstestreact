(this.webpackJsonpitgloberstest=this.webpackJsonpitgloberstest||[]).push([[0],{127:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(38),i=n.n(a),r=(n(45),n(3)),l=n(1),o=Object(c.createContext)(),s=function(e){var t=Object(c.useState)(null),n=Object(r.a)(t,2),a=n[0],i=n[1];return Object(l.jsx)(o.Provider,{value:{aerolineaContext:a,setAerolineaContext:i},children:e.children})},u=(n(47),n.p+"static/media/aerolineas.98223859.png"),d=n(8),j=(n(48),n(6)),b=n.n(j),m=n(10),O=Object(c.createContext)(),h=function(e){var t=Object(c.useState)(null),n=Object(r.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(!1),s=Object(r.a)(o,2),u=s[0],d=s[1];return Object(l.jsx)(O.Provider,{value:{datos:a,setDatos:i,showModal:u,setShowModal:d},children:e.children})},x=function(){var e=Object(c.useContext)(O),t=e.setDatos,n=e.setShowModal,a=Object(c.useContext)(o).setAerolineaContext,i=Object(c.useState)({nombre:"",email:"",celular:"",edad:""}),s=Object(r.a)(i,2),u=s[0],j=s[1],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(r.a)(t,2),a=n[0],i=n[1];return[a,function(e){var t=e.target;i(Object(d.a)(Object(d.a)({},a),{},Object(m.a)({},t.name,t.value)))},function(){i(e)}]}({nombre:"",email:"",celular:"",edad:""}),x=Object(r.a)(h,3),v=x[0],f=x[1],p=x[2],g=v.nombre,C=v.email,E=v.celular,S=v.edad,N=function(){t(v),n(!0),console.log(v),a(null),p()},y=function(){var e={};return e.nombre=b.a.isEmpty(g)?"El campo nombre debe estar diligenciado":null,e.email=b.a.isEmpty(C)?"El campo email debe estar diligenciado":null,b.a.isEmpty(C)||(e.email=b.a.isEmail(C)?null:"se ha diligenciado un email invalido"),e.celular=b.a.isEmpty(E)?"El campo celular debe estar diligenciado":null,b.a.isEmpty(E)||(e.celular=b.a.isLength(E.toString(),{min:10,max:10})?null:"El celular diligenciado es invalido, debe contener 10 n\xfameros"),e.edad=b.a.isEmpty(S)?"El campo edad debe estar diligenciado":null,b.a.isEmpty(S)||(e.edad=S<18||S>100?"El campo edad esta fuera del rango permitido":null),j(Object(d.a)({},e)),!Object.values(e).some((function(e){return e}))};return Object(l.jsx)("div",{className:"Formulario",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(),y()&&N()},noValidate:!0,children:[Object(l.jsx)("label",{htmlFor:"",children:"Nombre Completo"}),Object(l.jsx)("input",{type:"text",name:"nombre",value:g,onChange:f,placeholder:"Escribe tu nombre",required:!0}),Object(l.jsx)("small",{children:u.nombre}),Object(l.jsx)("label",{htmlFor:"",children:"Email"}),Object(l.jsx)("input",{type:"text",name:"email",value:C,onChange:f,placeholder:"Escribe tu Email",required:!0}),Object(l.jsx)("small",{children:u.email}),Object(l.jsx)("label",{htmlFor:"",children:"Celular"}),Object(l.jsx)("input",{type:"number",name:"celular",value:E,onChange:f,placeholder:"Escribe tu celular",required:!0}),Object(l.jsx)("small",{children:u.celular}),Object(l.jsx)("label",{htmlFor:"",children:"Edad"}),Object(l.jsx)("input",{type:"number",name:"edad",value:S,onChange:f,placeholder:"Escribe tu edad"}),Object(l.jsx)("small",{children:u.edad}),Object(l.jsx)("button",{type:"submit",children:"Enviar"})]})})},v=function(){var e=Object(c.useContext)(o).aerolineaContext;return Object(l.jsx)("div",{className:"Inicio",children:e?Object(l.jsxs)("div",{className:"conOpcion",children:[Object(l.jsx)("div",{className:"contenidoConOpcion",children:Object(l.jsxs)("p",{children:["\u201cHola, bienvenido, sabemos que quieres viajar con ",Object(l.jsx)("b",{children:e}),", por favor diligencia el siguiente formulario: "]})}),Object(l.jsx)("hr",{}),Object(l.jsx)(x,{})]}):Object(l.jsx)("div",{className:"sinOpcion",children:Object(l.jsxs)("div",{className:"contenidoSinOpcion",children:[Object(l.jsx)("h3",{children:"Escoge una opci\xf3n para comenzar"}),Object(l.jsx)("img",{src:u,alt:""})]})})})},f=Object(c.createContext)(),p=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],i=n[1];return Object(l.jsx)(f.Provider,{value:{showLoader:a,setShowLoader:i},children:e.children})},g=(n(127),function(){var e=Object(c.useContext)(f).showLoader;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:e?"Loader fade-out":"Loader fade-in",children:Object(l.jsx)("div",{className:"loader"})})})}),C=n(14),E=n.n(C),S=n(39),N=n(40),y=n.n(N),w=(n(147),function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useContext)(o).setAerolineaContext,s=Object(c.useContext)(f).setShowLoader;Object(c.useEffect)((function(){u()}),[]);var u=function(){var e=Object(S.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://demo0453307.mockable.io/menu");case 3:t=e.sent,(n=t.data.data)?d(n):s(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("!UPS! Ocurrio un error con el servicio de menus, por favor vuelve a ingresar mas tarde, Error: ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){a(e),setTimeout((function(){s(!0)}),2e3)};return Object(l.jsx)("div",{className:"Menu",children:Object(l.jsx)("ul",{children:n.map((function(e){return Object(l.jsxs)("li",{onClick:function(){i(e.name)},children:[" ",e.name," "]},e.id)}))})})}),F=(n(148),function(){var e=Object(c.useContext)(O).showModal,t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){e&&(i(!0),setTimeout((function(){i(!1)}),5e3))}),[e]),Object(l.jsx)("div",{className:a?"Modal fade-in":"Modal fade-out",children:Object(l.jsxs)("div",{className:"modalContent",children:[Object(l.jsx)("p",{children:"Tu informaci\xf3n fue enviada con \xe9xito, estaremos en contacto contigo"}),Object(l.jsx)("i",{className:"fa fa-check-circle",children:" "})]})})}),L=function(){return Object(l.jsx)(h,{children:Object(l.jsx)(p,{children:Object(l.jsx)(s,{children:Object(l.jsxs)("div",{className:"superContenedor",children:[Object(l.jsxs)("div",{className:"externo",children:[Object(l.jsx)(g,{}),Object(l.jsx)(F,{})]}),Object(l.jsxs)("div",{className:"principal",children:[Object(l.jsx)(w,{}),Object(l.jsx)(v,{})]})]})})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};n(149),n(150);i.a.render(Object(l.jsx)(L,{}),document.getElementById("root")),k()},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){}},[[151,1,2]]]);
//# sourceMappingURL=main.ca434edb.chunk.js.map