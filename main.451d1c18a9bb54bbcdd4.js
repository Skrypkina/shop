(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(o,e,t){"use strict";t.r(e);t("Sm8t");const n=document.querySelectorAll("[ data-slides ]"),s=document.querySelector("[ data-prev ]"),l=document.querySelector("[ data-next ]"),c=document.querySelectorAll("[ data-dots ]");s.addEventListener("click",(function(){clearInterval(a),r.showPrevSlide()})),l.addEventListener("click",(function(){clearInterval(a),r.showNextSlide()}));const r=new class{constructor(o){this.slideArray=o.slideArr,this.dotArray=o.dotArr,this.currentIdx=o.currentIdx}hide(){this.slideArray[this.currentIdx].style.display="block",this.dotArray[this.currentIdx].classList.add("active"),this.slideArray.forEach(o=>{o!==this.slideArray[this.currentIdx]&&(o.style.display="none")})}showNextSlide(){this.dotArray[this.currentIdx].classList.remove("active"),this.slideArray.forEach(o=>o.style.display="none"),this.currentIdx++,this.currentIdx>this.slideArray.length-1&&(this.currentIdx=0),this.slideArray[this.currentIdx].style.display="block",this.dotArray[this.currentIdx].classList.add("active")}showPrevSlide(){this.dotArray[this.currentIdx].classList.remove("active"),this.slideArray.forEach(o=>o.style.display="none"),this.currentIdx--,this.currentIdx<0&&(this.currentIdx=r.slideArray.length-1),this.slideArray[this.currentIdx].style.display="block",this.dotArray[this.currentIdx].classList.add("active")}showSlides(){return setInterval(()=>{this.showNextSlide()},3e3)}}({slideArr:[...n],dotArr:[...c],currentIdx:0});r.hide();const a=r.showSlides();const{name:i,age:g,projects:{dicegame:d}}={name:"Kally",age:24,projects:{dicegame:"lalala"}};const h=[{name:"Mark",city:"New York"},{name:"Den",city:"Kiev"},{name:"Alex",city:"Dnepr"}];for(const o of h){const{name:e,city:t}=o;console.log(`${e} lives in ${t}`)}new class extends class{constructor(o,e){this.name=o,this.country=e}getPlayerInfo(){console.log(`${this.name} was born in ${this.country}`)}}{constructor(o,e,t){super(o,e),this.age=t}getPlayerAge(){console.log(`${this.name} is ${this.age} years old and knows how to play tennis`)}}("Ronaldo","Spain",38);new Promise((o,e)=>{setTimeout(()=>{o("user is Den, email is Den@co.il")},3e3)}),fetch("https://jsonplaceholder.typicode.com/comments",{method:"POST",body:JSON.stringify({postId:500,name:"Den",email:"Den@co.il"})}).then(o=>{if(o.ok)return o.json();throw new Error("Error while fetching "+o.statusText)});!async function(){const o=await fetch("https://jsonplaceholder.typicode.com/comments/1").then(o=>{if(o.ok)return o.json();throw new Error("Error while fetching "+o.statusText)});console.log(o)}();const u=new Set([1,1,1,1,2,2,2]);u.add(5).add(9),u.delete(5),console.log(u.size),console.log(u.has(1)),u.clear(),console.log(u.size);let y=0;!function(...o){y=o.reduce((o,e)=>o+e,0)}(2,4,7),console.log(y);const{x:m,y:p,z:f}={x:3,y:4.5,z:8};console.log(m,p,f);const[w,,,x]=[1,2,3,4];console.log(w,x);console.log(function(o){const[,,...e]=o;return e}(["potato","onians","tomato","cucamber"]));console.log(((o,e,t)=>({name:o,age:e,gender:t}))("den",35,"male"));var b;console.log("no"),b="function scope",b="block scope",console.log("block scope",b),console.log("function scope",b),console.log(+(.4+.2).toFixed(2)),console.log(Math.sqrt(25));const A=Math.pow(2,4);var $,S;console.log(A),console.log(Math.abs(-42)),console.log(Math.max(2,6,44)),console.log(Math.min(2,6,44)),console.log(Math.floor(4.9)),console.log(Math.trunc(4.9)),console.log(Math.ceil(4.9)),console.log(Math.round(4.9)),Math.random(),console.log(($=3,S=8,Math.floor(Math.random()*(S-$+1)+$)));function j(o,e,t){return console.log(o),console.log(e),console.log(t),t>40&&(t="not yet"),`${o[0]} ${e}${o[1]} ${t}`}console.log("Larysa".toUpperCase()),console.log("Larysa".toLowerCase()),console.log("Larysa".charAt(3)),console.log("Larysa".indexOf("ry")),console.log("Larysa".startsWith("L")),console.log("Larysa".endsWith("y"));const k=j`name: ${"Larysa"}, age: ${35}`,I=j`name: ${"Den"}, age: ${42}`;console.log(k),console.log(I);const v={name:"Ben",age:26};for(let o in v)v.hasOwnProperty(o)&&console.log(o),console.log(v[o]);const L={logKeys(){console.info(Object.keys(this)),console.log(this)},logWithParams(o=!1,e=!1,t=!1){o&&console.log("--------top---------"),Object.keys(this).forEach((o,t,n)=>{console.log(`${o} : ${this[o]}`),e&&t!==n.length-1&&console.log("--------------------")}),t&&console.log("--------bottom---------")}};function P(){console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)}L.logKeys.call(v),L.logWithParams.call(v,!0,!0,!0),L.logWithParams.apply(v,[!0,!0,!0]),console.dir(s.textContent);function D(o,e){return function(...t){e.apply(o,t)}}D({name:"Den",age:26,job:"frontend",logPersons:P},P)(),D({name:"Ben",age:36,job:"full stack"},P)();class M extends class{constructor(o){this.$el=document.querySelector(o)}hide(){this.$el.style.display="none"}show(){this.$el.style.display="block"}}{constructor(o){super(o.selector),this.$el.style.width=this.$el.style.height=o.size+"px",this.$el.style.backgroundColor=o.color}}const E=new M({selector:"#box1",size:100,color:"red"});E.hide(),E.show();new class extends M{constructor(o){super(o),this.$el.style.borderRadius="50%"}}({selector:"#circle",size:90,color:"green"});(async function(){try{await(o=2e3,new Promise(e=>setTimeout(()=>{e()},o)));const e=await fetch("https://jsonplaceholder.typicode.com/todos/");return await e.json()}catch(o){console.error(o)}finally{console.log("выполнится в любом случае, даже если произошла ошибка")}var o})().then(o=>console.log(o));const T=new Proxy({name:"Larysa",age:44,job:"frontend"},{get:(o,e)=>(console.log("getting prop:"+e),o[e]),set(o,e,t){if(e in o)return o[e]=t;throw new Error(`There is not ${e} in ${o}`)},has:(o,e)=>["name","age","job"].includes(e),deleteProperty:(o,e)=>(delete o[e],!0)});console.log(T.name),T.age=40,console.log(T),console.log("name"in T),delete T.age,console.log(T);const O=o=>console.log("Log: "+o);O("Hello");new Proxy(O,{apply(o,e,t){console.log("calling fn")}})("text");new Proxy(class{constructor(o,e){this.name=o,this.age=e}},{construct:(o,e)=>(console.log("construct ..."),new Proxy(o(...e),{get:(o,e)=>(console.log("getting "+e),o[e])}))});const W=function*(){yield"h",yield"e",yield"l",yield"l",yield"o"}();console.log(W.next()),console.log(W.next()),console.log(W.next()),console.log(W.next()),console.log(W.next()),console.log(W.next());const N=function*(o=10){for(let e=0;e<o;e++)yield e}(7);console.log(N.next()),console.log(N.next());for(let o of function*(o=10){for(let e=0;e<o;e++)yield e}(6))console.log(o);const z={name:"Larysa",age:44,ocupation:"frontend"},q=Object.entries(z),C=new Map(q);console.log(C),console.log(C.get("ocupation")),C.set("newField",42).set(z,"this is object").set(NaN,"is it NaN?"),C.delete("ocupation"),console.log(C.has("ocupation")),console.log(C.size);const K=[...C];console.log(K);const J=Object.fromEntries(C.entries());console.log(J);const B=[{name:"Denis"},{name:"Daryna"},{name:"Alex"}],F=new Map;var Q;F.set(B[0],new Date).set(B[1],new Date((new Date).getTime()+6e4)).set(B[1],new Date((new Date).getTime()+3e5)),console.log((Q=B[1],F.get(Q)));const R=new Set([1,2,3,3,4,5,5,6]);console.log(R),function(o){new Set(o)}([1,2,3,3,3,4,4,4,5,5,5,6,6,6]);let H={name:"Weakmap"};const U=new WeakMap([[H,"obj data"]]);console.log(U),console.log(U.has(H)),console.log(U.get(H)),H=null,console.log(U.get(H));const Y=new WeakMap;function G(o){return Y.has(o)||Y.set(o,Date.now()),Y.get(o)}let V={name:"Lena"};G(V),G({name:"Alex"}),console.log(Y),V=null,console.log(Y);const X=[{name:"Den"},{name:"Ben"},{name:"Ashray"}],Z=new WeakSet;Z.add(X[0]).add(X[1]),console.log(Z),X.splice(1,1),console.log(Z.has(X[0])),console.log(Z.has(X[1]));(function(o,e,t=null){const n={"Content-Type":"application/json"};return t?fetch(e,{method:o,body:JSON.stringify(t),headers:n}).then(o=>{if(o.ok)return o.json();throw new Error(error.statusText)}):fetch(e).then(o=>{if(o.ok)return o.json();throw new Error(error.statusText)})})("POST","https://jsonplaceholder.typicode.com/users",{name:"Larysa",age:44}).then(o=>console.log(o)).catch(o=>console.log(o));const _={city:"Kiev",job:"frontend",getAddress(){console.log(`I am ${this.job} dev`,this)},toString(){return Object.keys(this).filter(o=>"toString"!==o&&"getAddress"!==o).map(o=>this[o]).join(" ")}};console.log(_.toString());console.log(function(...o){return o.reduce((o,e)=>o+e,0)}(1,3,4));const oo=Symbol("demo"),eo=Symbol("demo");console.log(oo===eo);const to={name:"Denis",[oo]:"meta"};for(let o in to)console.log(o);console.log(!0),console.log(!0),console.log(!0),console.log(0==[]),console.log(0=={}),console.log(!0),console.log(""==[]),console.log(""=={}),console.log(0==[]),console.log(0=={}),console.log(!1);const no=function(o){return function(e){return o+e}}(5);console.log(no(2))},Sm8t:function(o,e,t){}},[["QfWi",1]]]);
//# sourceMappingURL=main.451d1c18a9bb54bbcdd4.js.map