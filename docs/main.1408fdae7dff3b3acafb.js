(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.d({},{L:()=>y});var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var n,o,r;return n=t,r=[{key:"fromJson",value:function(e){var n=e.tarea,o=e.id,r=e.completado,a=e.creado,i=new t(n);return i.id=o,i.completado=r,i.creado=a,i}}],(o=[{key:"imprimirTodo",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}])&&e(n.prototype,o),r&&e(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cargarLocalStorade()}var e,r,i;return e=t,r=[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.guargarLocalStorage(),console.log(this.todos),console.log(t.imprimirTodo())}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),this.guargarLocalStorage()}},{key:"marcarCompletado",value:function(t){var e,n=o(this.todos);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r.id==t){r.completado=!r.completado,this.guargarLocalStorage();break}}}catch(t){n.e(t)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(t){return 1!=t.completado})),this.guargarLocalStorage()}},{key:"guargarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorade",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(n.fromJson)}},{key:"countPendientes",value:function(){var t,e=0,n=o(this.todos);try{for(n.s();!(t=n.n()).done;)1!=t.value.completado&&e++}catch(t){n.e(t)}finally{n.f()}return e}}],r&&a(e.prototype,r),i&&a(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var u=document.querySelector(".todo-list"),s=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=(document.querySelector(".filters"),document.querySelectorAll(".filtro")),m=document.querySelector("#count"),v=function(t){var e='\n    <li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n\t\t<div class="view">\n\t\t\t<input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n\t\t\t<label>").concat(t.tarea,'</label>\n\t\t\t<button class="destroy"></button>\n\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t</li>'),n=document.createElement("div");return n.innerHTML=e,u.append(n.firstElementChild),n.firstElementChild};s.addEventListener("keyup",(function(t){if(13===t.keyCode&&s.value.length>0){console.log(s.value);var e=new n(s.value);y.nuevoTodo(e),v(e),s.value="",m.textContent=y.countPendientes()}})),u.addEventListener("click",(function(t){var e=t.target.localName,n=t.target.parentElement.parentElement,o=n.getAttribute("data-id");e.includes("input")?(y.marcarCompletado(o),n.classList.toggle("completed"),m.textContent=y.countPendientes()):e.includes("button")&&(y.eliminarTodo(o),u.removeChild(n),m.textContent=y.countPendientes()),console.log(n)})),d.addEventListener("click",(function(t){y.eliminarCompletados();for(var e=u.children.length-1;e>=0;e--){var n=u.children[e];n.classList.contains("completed")&&u.removeChild(n)}console.log(y),m.textContent=y.countPendientes()})),addEventListener("click",(function(t){var e=t.target.text;if(e){f.forEach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var n,o=l(u.children);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.classList.remove("hidden");var a=r.classList.contains("completed");switch(e){case"Pendientes":a&&r.classList.add("hidden");break;case"Completados":a||r.classList.add("hidden")}}}catch(t){o.e(t)}finally{o.f()}}}));var y=new i;y.todos.forEach(v),console.log(y.todos)})();