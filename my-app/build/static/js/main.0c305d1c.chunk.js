(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":1,"name":"Bob","Email":"bob@gmail.com","City":"Ottawa"},{"id":2,"name":"Tim","Email":"Tim@gmail.com","City":"Halifax"},{"id":3,"name":"Cale","Email":"cale@gmail.com","City":"Vancouver"},{"id":4,"name":"Vishva","Email":"Vishva@gmail.com","City":"Rajkot"},{"id":5,"name":"Monika","Email":"monika@gmail.com","City":"Rajkot"}]')},24:function(e,t,a){},25:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(16),s=a.n(i),l=a(5),r=(a(24),a.p+"static/media/logo.e322f1a6.svg"),d=(a(25),a(0));function j(e){return Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:r,className:"App-logo",alt:"React logo"}),Object(d.jsx)("h1",{children:"User List"}),Object(d.jsx)("h3",{children:Object(d.jsx)(l.b,{className:"active",to:{pathname:"/add"},children:"New Item "})})]})}var o=a(2),m=a(11),b=a(6),u=a(10);a(35);function h(e){var t=e.item,a=e.save,n=e.change,c=e.noChange;return Object(d.jsxs)("form",{className:"editUserForm",children:[Object(d.jsxs)("div",{className:"inputData",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("label",{children:"Name:"}),Object(d.jsx)("input",{className:"editUserName",name:"name",type:"text",id:"name",onChange:n,defaultValue:t.name})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("label",{children:"Email:"}),Object(d.jsx)("input",{className:"editUserEmail",name:"Email",type:"email",id:"Email",onChange:n,defaultValue:t.Email})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("label",{children:"City:"}),Object(d.jsx)("input",{className:"editUserCity",name:"City",type:"text",id:"City",onChange:n,defaultValue:t.City})]})]}),Object(d.jsxs)("div",{className:"formButton",children:[Object(d.jsx)("button",{className:"saveButton",onClick:a,children:"Save"}),Object(d.jsx)("button",{className:"cancelButton",onClick:c,children:"Cancel"})]})]})}a(36);function O(e){var t=JSON.parse(localStorage.getItem("dudh0004"));t||localStorage.setItem("dudh0004",JSON.stringify(u));var a=Object(n.useState)(t),c=Object(b.a)(a,2),i=c[0],s=c[1],l=Object(n.useState)(t),r=Object(b.a)(l,2),j=r[0],o=r[1],O=Object(n.useState)(0),x=Object(b.a)(O,2),g=x[0],p=x[1],f=!1;function v(e){f=!0,p(e.target.id)}function N(e){var t=e.target.id,a=i.filter((function(e){return e.id!=t}));s(a),localStorage.setItem("dudh0004",JSON.stringify(a))}var C=function(e){e.preventDefault(),s(Object(m.a)(i)),console.log(i),localStorage.setItem("dudh0004",JSON.stringify(i)),console.log("localstorage updated"),p(0)},y=function(e){j.map((function(t){t.id==g&&(console.log("matching element: ",t),console.log("".concat(e.target.name," : ").concat(e.target.value)),t[e.target.name]=e.target.value)})),o(j)},E=function(e){var t=document.getElementById("name").defaultValue,a=document.getElementById("Email").defaultValue,n=document.getElementById("City").defaultValue,c=i.findIndex((function(e){return e.id==g}));(i=i[c]).name=t,i.Email=a,i.City=n,p(0)};return Object(d.jsx)("div",{className:"main",children:Object(d.jsx)("div",{children:i.map((function(e){return Object(d.jsx)(d.Fragment,{children:0==g&&!f||e.id!=g?Object(d.jsxs)("div",{className:"data",id:e.id,children:[Object(d.jsxs)("div",{className:"paragraph",children:[Object(d.jsxs)("p",{className:e.id,children:[Object(d.jsx)("strong",{children:"Name: "}),e.name]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Email: "}),e.Email]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"City: "}),e.City]})]}),Object(d.jsxs)("div",{className:"button",children:[Object(d.jsx)("button",{className:"editButton",id:e.id,onClick:v,children:"Edit"}),Object(d.jsx)("button",{className:"deleteButton",id:e.id,onClick:N,children:"Delete"})]})]}):Object(d.jsx)(h,{item:e,save:C,change:y,noChange:E})})}))})})}var x=a(19),g=a(41);a(37);function p(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("dudh0004"))),t=Object(b.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({name:"",Email:"",City:""}),s=Object(b.a)(i,2),r=s[0],j=s[1],o=function(e){e.preventDefault();var t=e.target.getAttribute("name"),a=e.target.value,n=Object(x.a)({},r);n[t]=a,j(n)};return Object(d.jsxs)("form",{className:"newUserForm",children:[Object(d.jsx)("legend",{children:"Add New User"}),Object(d.jsxs)("div",{className:"mainSection",children:[Object(d.jsxs)("div",{className:"inputSection",children:[Object(d.jsxs)("div",{className:"newUserName",children:[Object(d.jsx)("label",{children:"Name:"}),Object(d.jsx)("input",{type:"text",name:"name",onChange:o,placeholder:"Enter Name",required:!0})]}),Object(d.jsxs)("div",{className:"newUserEmail",children:[Object(d.jsx)("label",{children:"Email:"}),Object(d.jsx)("input",{type:"email",name:"Email",onChange:o,placeholder:"Enter Email",required:!0})]}),Object(d.jsxs)("div",{className:"newUserCity",children:[Object(d.jsx)("label",{children:"City:"}),Object(d.jsx)("input",{type:"text",name:"City",onChange:o,placeholder:"Enter City",required:!0})]})]}),Object(d.jsxs)("div",{className:"buttonSection",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("button",{onClick:function(e){var t={id:Object(g.a)(),name:r.name,Email:r.Email,City:r.City},n=[].concat(Object(m.a)(a),[t]);u.push(t),c(n),console.log(n),localStorage.setItem("dudh0004",JSON.stringify(n))},className:"saveButton",children:"Save"})}),Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("button",{className:"cancelButton",children:"Cancel"})})]})]})]})}a(38);var f=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)(j,{})}),Object(d.jsx)("main",{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",exact:!0,children:Object(d.jsx)(O,{})}),Object(d.jsx)(o.a,{path:"/add",children:Object(d.jsx)(p,{})})]})})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(l.a,{hashType:"hashbang",children:Object(d.jsx)(f,{})})}),document.getElementById("root")),v()}},[[39,1,2]]]);
//# sourceMappingURL=main.0c305d1c.chunk.js.map