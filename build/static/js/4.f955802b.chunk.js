(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{44:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(50);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},45:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(46);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},46:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},47:function(e,t,a){"use strict";var n=a(17);a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return l}));var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},l=function(e,t){var a,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(t);try{for(i.s();!(a=i.n()).done;){var c=a.value;"REQUIRE"===c.type&&(r=r&&e.trim().length>0),"MINLENGTH"===c.type&&(r=r&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.trim().length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){i.e(l)}finally{i.f()}return r}},50:function(e,t,a){},53:function(e,t,a){"use strict";var n=a(10),r=a(45),i=a(0),c=a.n(i),l=a(47),u=(a(54),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(l.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(n.a)(t,2),r=a[0],l=a[1],o=e.id,s=e.onInput,p=r.value,d=r.isValid;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,d,s]);var f=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},m=function(){l({type:"TOUCH"})},b="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:m,value:r.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:m,value:r.value});return c.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),b,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText))}},54:function(e,t,a){},55:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(10),r=a(46),i=a(45),c=a(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var a=Object(c.useReducer)(l,{inputs:e,isValid:t}),r=Object(n.a)(a,2),i=r[0],u=r[1];return[i,Object(c.useCallback)((function(e,t,a){u({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},56:function(e,t,a){"use strict";var n=a(10),r=a(0),i=a.n(r),c=a(15);a(57);t.a=function(e){var t=Object(r.useState)(),a=Object(n.a)(t,2),l=a[0],u=a[1],o=Object(r.useState)(),s=Object(n.a)(o,2),p=s[0],d=s[1],f=Object(r.useState)(!1),m=Object(n.a)(f,2),b=m[0],v=m[1],O=Object(r.useRef)();Object(r.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){d(e.result)},e.readAsDataURL(l)}}),[l]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{id:e.id,ref:O,style:{display:"none"},type:"file",accept:".jpg, .png, .jpeg",onChange:function(t){var a,n=b;t.target.files&&1===t.target.files.length?(a=t.target.files[0],u(a),v(!0),n=!0):(v(!1),n=!1),e.onInput(e.id,a,n)}})),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview"},p&&i.a.createElement("img",{src:p,alt:"Preview"}),!p&&i.a.createElement("p",null,"Please select an image.")),i.a.createElement(c.a,{type:"button",onClick:function(){O.current.click()}},"SELECT IMAGE")),!b&&i.a.createElement("p",null,e.errorText),b&&i.a.createElement("p",null,e.success))}},57:function(e,t,a){},68:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a.n(n),i=a(49),c=a(45),l=a(10),u=a(0),o=a.n(u),s=a(44),p=a(53),d=a(15),f=a(51),m=a(16),b=a(56),v=a(47),O=a(55),j=a(52),y=a(11);a(68);t.default=function(){var e=Object(u.useContext)(y.a),t=Object(u.useState)(!0),a=Object(l.a)(t,2),n=a[0],E=a[1],h=Object(j.a)(),g=h.isLoading,w=h.error,I=h.sendRequest,T=h.clearError,N=Object(O.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),V=Object(l.a)(N,3),S=V[0],P=V[1],k=V[2],C=function(){var t=Object(i.a)(r.a.mark((function t(a){var i,c,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!n){t.next=13;break}return t.prev=2,t.next=5,I("https://bibek-place-app.herokuapp.com/api/users/login","POST",JSON.stringify({email:S.inputs.email.value,password:S.inputs.password.value}),{"Content-Type":"application/json"});case 5:i=t.sent,e.login(i.userId,i.token),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:t.next=27;break;case 13:return t.prev=13,(c=new FormData).append("email",S.inputs.email.value),c.append("name",S.inputs.name.value),c.append("password",S.inputs.password.value),c.append("image",S.inputs.image.value),t.next=21,I("https://bibek-place-app.herokuapp.com/api/users/signup","POST",c);case 21:l=t.sent,e.login(l.userId,l.token),t.next=27;break;case 25:t.prev=25,t.t1=t.catch(13);case 27:case"end":return t.stop()}}),t,null,[[2,9],[13,25]])})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{error:w,onClear:T}),o.a.createElement(s.a,{className:"authentication"},g&&o.a.createElement(m.a,{asOverlay:!0}),o.a.createElement("h2",null,"Login Required"),o.a.createElement("hr",null),o.a.createElement("form",{onSubmit:C},!n&&o.a.createElement(p.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[Object(v.c)()],errorText:"Please enter a name.",onInput:P}),!n&&o.a.createElement(b.a,{center:!0,id:"image",onInput:P,errorText:"Please provide an image."}),o.a.createElement(p.a,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[Object(v.a)()],errorText:"Please enter a valid email address.",onInput:P}),o.a.createElement(p.a,{element:"input",id:"password",type:"password",label:"Password",validators:[Object(v.b)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:P}),o.a.createElement(d.a,{type:"submit",disabled:!S.isValid},n?"LOGIN":"SIGNUP")),o.a.createElement(d.a,{inverse:!0,onClick:function(){n?k(Object(c.a)(Object(c.a)({},S.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):k(Object(c.a)(Object(c.a)({},S.inputs),{},{name:void 0,image:void 0}),S.inputs.email.isValid&&S.inputs.password.isValid),E((function(e){return!e}))}},"SWITCH TO ",n?"SIGNUP":"LOGIN")))}}}]);
//# sourceMappingURL=4.f955802b.chunk.js.map