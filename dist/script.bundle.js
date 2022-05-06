(()=>{"use strict";var e={144:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(81),i=a.n(n),l=a(645),s=a.n(l)()(i());s.push([e.id,'body{max-width:1280px;min-height:100vh;padding:0;margin:0 auto;display:flex;flex-direction:column;font-family:Georgia,"Times New Roman",Times,serif}body .title{font-size:24px;color:#d2691e;text-shadow:#fc0 1px 0 10px}body .description{display:flex;flex-direction:column;max-width:800px;color:#351f10;text-shadow:#fc0 1px 0 10px;gap:10px}body .description:nth-child(n){overflow-wrap:break-word}body .textaria{height:200px;width:100%;border:3px solid #aeb8c5;border-radius:10px;font-size:24px}body .wrapper{display:flex;flex-direction:column;align-items:center;align-content:space-between;gap:10px;margin:auto}body .wrapper .row{display:flex;height:50px;gap:10px;width:100%;justify-content:space-between}.button{display:flex;flex-direction:column;max-width:150px;min-width:50px;width:100%;height:50px;background-color:#000;color:#cfbcbc;border-radius:3px;text-align:center;justify-content:center;transition:background 1s}.button__alfabet{background-color:rgba(0,0,0,.822)}.button .text{position:relative;padding:0px 10px;font-size:16px;font-weight:bold;user-select:none !important}.button .text__addition{font-size:12px;left:-14px}.button:hover{cursor:pointer;color:#fff;text-shadow:#e6bb10 1px 0 10px}.button__active{background-color:aqua;color:#1e2727 !important;transition:0s}.button__active:hover{text-shadow:none}',""]);const r=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",n=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),n&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),n&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,n,i,l){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(s[d]=!0)}for(var u=0;u<e.length;u++){var o=[].concat(e[u]);n&&s[o[0]]||(void 0!==l&&(void 0===o[5]||(o[1]="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {").concat(o[1],"}")),o[5]=l),a&&(o[2]?(o[1]="@media ".concat(o[2]," {").concat(o[1],"}"),o[2]=a):o[2]=a),i&&(o[4]?(o[1]="@supports (".concat(o[4],") {").concat(o[1],"}"),o[4]=i):o[4]="".concat(i)),t.push(o))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function a(e){for(var a=-1,n=0;n<t.length;n++)if(t[n].identifier===e){a=n;break}return a}function n(e,n){for(var l={},s=[],r=0;r<e.length;r++){var d=e[r],u=n.base?d[0]+n.base:d[0],o=l[u]||0,c="".concat(u," ").concat(o);l[u]=o+1;var v=a(c),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==v)t[v].references++,t[v].updater(f);else{var p=i(f,n);n.byIndex=r,t.splice(r,0,{identifier:c,updater:p,references:1})}s.push(c)}return s}function i(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,i){var l=n(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<l.length;s++){var r=a(l[s]);t[r].references--}for(var d=n(e,i),u=0;u<l.length;u++){var o=a(l[u]);0===t[o].references&&(t[o].updater(),t.splice(o,1))}l=d}}},569:e=>{var t={};e.exports=function(e,a){var n=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var n="";a.supports&&(n+="@supports (".concat(a.supports,") {")),a.media&&(n+="@media ".concat(a.media," {"));var i=void 0!==a.layer;i&&(n+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),n+=a.css,i&&(n+="}"),a.media&&(n+="}"),a.supports&&(n+="}");var l=a.sourceMap;l&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={id:n,exports:{}};return e[n](l,l.exports,a),l.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e={Backquote:{isAlfabet:!0,en:{desc:"`",value:"`",additionalValue:"~"},ru:{desc:"ё",value:"ё"}},Digit1:{isAlfabet:!0,en:{desc:"1",value:"1",additionalValue:"!"},ru:{desc:"1",value:"1",additionalValue:"!"}},Digit2:{isAlfabet:!0,en:{desc:"2",value:"2",additionalValue:"@"},ru:{desc:"2",value:"2",additionalValue:'"'}},Digit3:{isAlfabet:!0,en:{desc:"3",value:"3",additionalValue:"#"},ru:{desc:"3",value:"3",additionalValue:"№"}},Digit4:{isAlfabet:!0,en:{desc:"4",value:"4",additionalValue:"$"},ru:{desc:"4",value:"5",additionalValue:";"}},Digit5:{isAlfabet:!0,en:{desc:"5",value:"5",additionalValue:"%"},ru:{desc:"5",value:"5",additionalValue:"%"}},Digit6:{isAlfabet:!0,en:{desc:"6",value:"6",additionalValue:"^"},ru:{desc:"6",value:"6",additionalValue:":"}},Digit7:{isAlfabet:!0,en:{desc:"7",value:"7",additionalValue:"&"},ru:{desc:"7",value:"7",additionalValue:"?"}},Digit8:{isAlfabet:!0,en:{desc:"8",value:"8",additionalValue:"*"},ru:{desc:"8",value:"8",additionalValue:"*"}},Digit9:{isAlfabet:!0,en:{desc:"9",value:"9",additionalValue:"("},ru:{desc:"9",value:"9",additionalValue:"("}},Digit0:{isAlfabet:!0,en:{desc:"0",value:"0",additionalValue:")"},ru:{desc:"0",value:"0",additionalValue:")"}},Minus:{isAlfabet:!0,en:{desc:"-",value:"-",additionalValue:"_"},ru:{desc:"-",value:"-",additionalValue:"_"}},Equal:{isAlfabet:!0,en:{desc:"=",value:"=",additionalValue:"+"},ru:{desc:"=",value:"=",additionalValue:"+"}},Backspace:{width:"100px",en:{desc:"&#8592;",value:""},ru:{desc:"&#8592;",value:""}},Tab:{width:"80px",en:{desc:"TAB",value:"    "},ru:{desc:"TAB",value:"    "}},KeyQ:{isAlfabet:!0,en:{desc:"q",value:"q"},ru:{desc:"й",value:"й"}},KeyW:{isAlfabet:!0,en:{desc:"w",value:"w"},ru:{desc:"ц",value:"ц"}},KeyE:{isAlfabet:!0,en:{desc:"e",value:"e"},ru:{desc:"у",value:"у"}},KeyR:{isAlfabet:!0,en:{desc:"r",value:"r"},ru:{desc:"к",value:"к"}},KeyT:{isAlfabet:!0,en:{desc:"t",value:"t"},ru:{desc:"е",value:"е"}},KeyY:{isAlfabet:!0,en:{desc:"y",value:"y"},ru:{desc:"н",value:"н"}},KeyU:{isAlfabet:!0,en:{desc:"u",value:"u"},ru:{desc:"г",value:"г"}},KeyI:{isAlfabet:!0,en:{desc:"i",value:"i"},ru:{desc:"ш",value:"ш"}},KeyO:{isAlfabet:!0,en:{desc:"o",value:"o"},ru:{desc:"щ",value:"щ"}},KeyP:{isAlfabet:!0,en:{desc:"p",value:"p"},ru:{desc:"з",value:"з"}},BracketLeft:{isAlfabet:!0,en:{desc:"[",value:"[",additionalValue:"{"},ru:{desc:"х",value:"х"}},BracketRight:{isAlfabet:!0,en:{desc:"]",value:"]",additionalValue:"}"},ru:{desc:"ъ",value:"ъ"}},Backslash:{isAlfabet:!0,en:{desc:"\\",value:"\\",additionalValue:"|"},ru:{desc:"/",value:"/"}},CapsLock:{width:"100px",isOptinal:!0,en:{desc:"Caps Lock",value:""},ru:{desc:"Caps Lock",value:""}},KeyA:{isAlfabet:!0,en:{desc:"a",value:"a"},ru:{desc:"ф",value:"ф"}},KeyS:{isAlfabet:!0,en:{desc:"s",value:"s"},ru:{desc:"ы",value:"ы"}},KeyD:{isAlfabet:!0,en:{desc:"d",value:"d"},ru:{desc:"в",value:"в"}},KeyF:{isAlfabet:!0,en:{desc:"f",value:"f"},ru:{desc:"а",value:"а"}},KeyG:{isAlfabet:!0,en:{desc:"g",value:"g"},ru:{desc:"п",value:"п"}},KeyH:{isAlfabet:!0,en:{desc:"h",value:"h"},ru:{desc:"р",value:"р"}},KeyJ:{isAlfabet:!0,en:{desc:"j",value:"j"},ru:{desc:"о",value:"о"}},KeyK:{isAlfabet:!0,en:{desc:"k",value:"k"},ru:{desc:"л",value:"л"}},KeyL:{isAlfabet:!0,en:{desc:"l",value:"l"},ru:{desc:"д",value:"д"}},Semicolon:{isAlfabet:!0,en:{desc:";",value:";",additionalValue:":"},ru:{desc:"ж",value:"ж"}},Quote:{isAlfabet:!0,en:{desc:"'",value:"'",additionalValue:'"'},ru:{desc:"э",value:"э"}},Enter:{width:"150px",en:{desc:"Enter",value:"\n"},ru:{desc:"Enter",value:"\n"}},KeyZ:{isAlfabet:!0,en:{desc:"z",value:"z"},ru:{desc:"я",value:"я"}},KeyX:{isAlfabet:!0,en:{desc:"x",value:"x"},ru:{desc:"ч",value:"ч"}},KeyC:{isAlfabet:!0,en:{desc:"c",value:"c"},ru:{desc:"с",value:"с"}},KeyV:{isAlfabet:!0,en:{desc:"v",value:"v"},ru:{desc:"м",value:"м"}},KeyB:{isAlfabet:!0,en:{desc:"b",value:"b"},ru:{desc:"и",value:"и"}},KeyN:{isAlfabet:!0,en:{desc:"n",value:"n"},ru:{desc:"т",value:"т"}},KeyM:{isAlfabet:!0,en:{desc:"m",value:"m"},ru:{desc:"ь",value:"ь"}},Comma:{isAlfabet:!0,en:{desc:",",value:",",additionalValue:"<"},ru:{desc:"б",value:"б"}},Period:{isAlfabet:!0,en:{desc:".",value:".",additionalValue:">"},ru:{desc:"ю",value:"ю"}},Slash:{isAlfabet:!0,en:{desc:"/",value:"/",additionalValue:"?"},ru:{desc:".",value:".",additionalValue:","}},ShiftLeft:{width:"130px",isOptinal:!0,en:{desc:"Shift",value:""},ru:{desc:"Shift",value:""}},ShiftRight:{width:"150px",isOptinal:!0,en:{desc:"Shift",value:""},ru:{desc:"Shift",value:""}},ControlLeft:{isOptinal:!0,en:{desc:"CTRL",value:""},ru:{desc:"CTRL",value:""}},MetaLeft:{isOptinal:!0,en:{desc:"Win",value:""},ru:{desc:"Win",value:""}},AltLeft:{isOptinal:!0,en:{desc:"ALT",value:""},ru:{desc:"ALT",value:""}},Space:{width:"350px",isAlfabet:!0,en:{desc:"________________",value:" "},ru:{desc:"________________",value:" "}},AltRight:{width:"50px",isOptinal:!0,en:{desc:"ALT",value:""},ru:{desc:"ALT",value:""}},ControlRight:{width:"50px",isOptinal:!0,en:{desc:"CTRL",value:""},ru:{desc:"CTRL",value:""}},ArrowUp:{isOptinal:!0,en:{desc:"&#129093;",value:""},ru:{desc:"&#129093;",value:""}},ArrowDown:{isOptinal:!0,en:{desc:"&#129095;",value:""},ru:{desc:"&#129095;",value:""}},ArrowRight:{isOptinal:!0,en:{desc:"&#129094;",value:""},ru:{desc:"&#129094;",value:""}},ArrowLeft:{isOptinal:!0,en:{desc:"&#129092;",value:""},ru:{desc:"&#129092;",value:""}}};var t=a(379),n=a.n(t),i=a(795),l=a.n(i),s=a(569),r=a.n(s),d=a(565),u=a.n(d),o=a(216),c=a.n(o),v=a(589),f=a.n(v),p=a(144),b={};b.styleTagTransform=f(),b.setAttributes=u(),b.insert=r().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=c(),n()(p.Z,b),p.Z&&p.Z.locals&&p.Z.locals;let h="en",y=!1,g=!1,A=!1,m=!1;const x=[],L=document.querySelector("body"),w=t=>{const a=document.createElement("div");if(a.setAttribute("data-type",t),a.classList.add("button"),e[t].width&&(a.style.minWidth=e[t].width),e[t].isAlfabet&&a.classList.add("button__alfabet"),e[t][h].additionalValue){const n=document.createElement("div");n.classList.add("text"),n.classList.add("text__addition"),n.innerHTML=e[t][h].additionalValue,a.append(n)}const n=document.createElement("div");return n.classList.add("text"),n.innerHTML=e[t][h].desc,e[t].isAlfabet&&n.setAttribute("data-main_txt","1"),a.append(n),a},S=e=>{const t=document.createElement("li");return t.innerText=e,t},_=(()=>{const e=document.createElement("div");return e.classList.add("wrapper"),e})(),K=(()=>{const e=document.createElement("textarea");return e.setAttribute("rows","10"),e.setAttribute("autofocus","1"),e.classList.add("textaria"),e})(),T=e=>{document.querySelectorAll("[data-main_txt]").forEach((t=>{t.textContent=e?t.textContent.toUpperCase():t.textContent.toLowerCase()}))},E=()=>{h="en"===h?"ru":"en",document.querySelectorAll(".button").forEach((e=>{e.innerHTML=w(e.getAttribute("data-type")).innerHTML}))};localStorage.getItem("leng")&&(h=localStorage.getItem("leng")),[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"]].forEach((e=>{_.append((e=>{const t=document.createElement("div");return t.classList.add("row"),e.forEach((e=>{const a=w(e);x.push(a),t.append(a)})),t})(e))})),_.prepend(K),_.prepend((()=>{const e=document.createElement("div");return e.classList.add("title"),e.innerText="RSS Виртуальная клавиатура",e})()),_.append((()=>{const e=document.createElement("ul");return e.classList.add("description"),e.append(S("Для переключения языка комбинация: левыe ALT + Shift или Shift + ALT")),e.append(S("Для переключения языка с помощью мыши: нажмите на Shift (ALT), удерживая, переместите курсор на ALT (Shift), нажмите еще раз")),e.append(S("Для набора доп. символов с помощью мыши: нажмите на Shift, удерживая, переместите курсор на выбранную клавишу, нажмите еще раз")),e})()),L.append(_),x.forEach((t=>{t.addEventListener("mousedown",(t=>{x.forEach((e=>{"CapsLock"!==e.getAttribute("data-type")&&(m||e.classList.remove("button__active"))}));const a=t.currentTarget.getAttribute("data-type");"AltLeft"===a&&(A=!0),A&&"ShiftLeft"===a&&(E(),A=!1),g&&"AltLeft"===a&&E(),t.currentTarget.classList.toggle("button__active");let n=e[a][h].value;"CapsLock"===a&&(y=!y),"ShiftLeft"!==a&&"ShiftRight"!==a||(g=m||!m),g&&e[a][h].additionalValue&&(n=e[a][h].additionalValue),(g&&!y||!g&&y)&&(n=n.toUpperCase()),"ShiftLeft"!==a&&"ShiftRight"!==a&&(g=m||!1),T(g&&!y||!g&&y),((e,t)=>{let a=K.selectionStart-("Backspace"===t?1:0);a<0&&(a=0);let n=K.selectionEnd;const i=K.value.substring(0,a)+e+K.value.substring(n);K.value=i,K.focus(),n-="Backspace"===t?1:0,"ArrowLeft"===t&&(n-=1),"ArrowRight"===t&&(n+=1,K.selectionStart=n);const l=K.value.substring(a).indexOf("\n"),s=K.value.substring(0,a).lastIndexOf("\n");if("ArrowDown"===t){if(-1!==l){let e=K.value.substring(a+l+1).indexOf("\n");e=e<0?K.value.length:e+a+l,a=a+l+(a-s),K.selectionStart=a>e+1?e+1:a}n=K.selectionStart}"ArrowUp"===t&&(-1!==s&&(a=K.value.substring(0,s).lastIndexOf("\n")+(a-s),K.selectionStart=a>s?s:a),n=K.selectionStart),n<0&&(n=0),a===n&&(n+=e.length),K.selectionEnd=n})(n,a)})),t.addEventListener("mouseup",(e=>{"CapsLock"!==e.currentTarget.getAttribute("data-type")&&e.currentTarget.classList.remove("button__active"),"ShiftLeft"!==e.currentTarget.getAttribute("data-type")&&(A=!1),"ShiftLeft"!==e.currentTarget.getAttribute("data-type")&&"ShiftRight"!==e.currentTarget.getAttribute("data-type")||(g=m||!1),T(g&&!y||!g&&y),K.focus()}))})),document.addEventListener("keydown",(t=>{e[t.code]&&(t.preventDefault(),"ShiftRight"!==t.code&&"ShiftLeft"!==t.code||(m=!0),document.querySelector(`[data-type=${t.code}]`).dispatchEvent(new Event("mousedown")))})),document.addEventListener("keyup",(t=>{e[t.code]&&(t.preventDefault(),"ShiftRight"!==t.code&&"ShiftLeft"!==t.code||(m=!1),document.querySelector(`[data-type=${t.code}]`).dispatchEvent(new Event("mouseup")))})),window.addEventListener("beforeunload",(()=>{localStorage.setItem("leng",h)}))})()})();