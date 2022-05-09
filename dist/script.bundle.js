(()=>{"use strict";var e={144:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(537),n=a.n(i),s=a(645),r=a.n(s)()(n());r.push([e.id,'body{max-width:1280px;min-height:100vh;padding:0;margin:0 auto;display:flex;flex-direction:column;font-family:Georgia,"Times New Roman",Times,serif}body .title{font-size:24px;color:#d2691e;text-shadow:#fc0 1px 0 10px}body .description{display:flex;flex-direction:column;max-width:800px;color:#351f10;text-shadow:#fc0 1px 0 10px;gap:10px}body .description:nth-child(n){overflow-wrap:break-word}body .textaria{height:200px;width:100%;border:3px solid #aeb8c5;border-radius:10px;font-size:24px}body .wrapper{display:flex;flex-direction:column;align-items:center;align-content:space-between;gap:10px;margin:auto}body .wrapper .row{display:flex;height:50px;gap:10px;width:100%;justify-content:space-between}.button{display:flex;flex-direction:column;max-width:150px;min-width:50px;width:100%;height:50px;background-color:#000;color:#cfbcbc;border-radius:3px;text-align:center;justify-content:center;transition:background 1s}.button__alfabet{background-color:rgba(0,0,0,.822)}.button .text{position:relative;padding:0px 10px;font-size:16px;font-weight:bold;user-select:none !important}.button .text__addition{font-size:12px;left:-14px}.button:hover{cursor:pointer;color:#fff;text-shadow:#e6bb10 1px 0 10px}.button__active{background-color:aqua;color:#1e2727 !important;transition:0s}.button__active:hover{text-shadow:none}',"",{version:3,sources:["webpack://./src/styles/main.scss"],names:[],mappings:"AAAA,KACI,gBAAA,CACA,gBAAA,CAEA,SAAA,CACA,aAAA,CAEA,YAAA,CACA,qBAAA,CAEA,iDAAA,CAEA,YACI,cAAA,CACA,aAAA,CACA,2BAAA,CAGJ,kBACI,YAAA,CACA,qBAAA,CAEA,eAAA,CACA,aAAA,CACA,2BAAA,CACA,QAAA,CAEA,+BACI,wBAAA,CAIR,eACI,YAAA,CACA,UAAA,CACA,wBAAA,CACA,kBAAA,CACA,cAAA,CAGJ,cACI,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,2BAAA,CACA,QAAA,CAEA,WAAA,CAEA,mBACI,YAAA,CAEA,WAAA,CACA,QAAA,CAEA,UAAA,CACA,6BAAA,CAKZ,QACI,YAAA,CACA,qBAAA,CAEA,eAAA,CACA,cAAA,CACA,UAAA,CAEA,WAAA,CACA,qBAAA,CACA,aAAA,CACA,iBAAA,CACA,iBAAA,CAEA,sBAAA,CA4BA,wBAAA,CA1BA,iBACI,iCAAA,CAGJ,cACI,iBAAA,CAEA,gBAAA,CAEA,cAAA,CACA,gBAAA,CAEA,2BAAA,CAEA,wBACI,cAAA,CACA,UAAA,CAIR,cACI,cAAA,CACA,UAAA,CACA,8BAAA,CAKJ,gBACI,qBAAA,CACA,wBAAA,CACA,aAAA,CAEA,sBACI,gBAAA",sourcesContent:["body {\n    max-width: 1280px;\n    min-height: 100vh;\n\n    padding: 0;\n    margin: 0 auto;\n    \n    display: flex;\n    flex-direction: column;\n\n    font-family: Georgia, 'Times New Roman', Times, serif;\n\n    .title {\n        font-size: 24px;\n        color: chocolate;\n        text-shadow: #FC0 1px 0 10px;\n    }\n\n    .description {\n        display: flex;\n        flex-direction: column;\n        \n        max-width: 800px;\n        color: rgb(53, 31, 16);\n        text-shadow: #FC0 1px 0 10px;\n        gap: 10px;\n\n        &:nth-child(n) {\n            overflow-wrap: break-word;\n        }\n    }\n\n    .textaria {\n        height: 200px;\n        width: 100%;\n        border: 3px solid #aeb8c5;\n        border-radius: 10px;\n        font-size: 24px;\n    }\n\n    .wrapper {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        align-content: space-between;\n        gap: 10px;\n                \n        margin: auto;\n\n        .row {\n            display: flex;\n            \n            height: 50px;\n            gap: 10px;\n            \n            width: 100%;\n            justify-content: space-between;\n        }\n    }\n}\n\n.button {\n    display: flex;\n    flex-direction: column;\n    \n    max-width: 150px;\n    min-width: 50px;\n    width: 100%;\n\n    height: 50px;\n    background-color: black;\n    color: rgb(207, 188, 188);\n    border-radius: 3px;\n    text-align: center;\n    \n    justify-content: center;\n\n    &__alfabet {\n        background-color: rgba(0, 0, 0, 0.822);\n    }\n\n    .text {\n        position: relative;\n        \n        padding: 0px 10px;\n\n        font-size: 16px;\n        font-weight: bold;\n\n        user-select: none !important; \n\n        &__addition {\n            font-size: 12px;\n            left: -14px;\n        }\n    }\n\n    &:hover {\n        cursor: pointer;\n        color: #ffffff;\n        text-shadow: rgb(230, 187, 16) 1px 0 10px;\n    }\n    \n    transition: background 1s;\n\n    &__active {\n        background-color: aqua;\n        color: rgb(30, 39, 39) !important;\n        transition: 0s;\n\n        &:hover {\n            text-shadow: none;\n        }\n    }\n}"],sourceRoot:""}]);const c=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",i=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),i&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),i&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,i,n,s){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(r[o]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&r[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),a&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=a):d[2]=a),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},537:e=>{e.exports=function(e){var t=e[1],a=e[3];if(!a)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(n," */"),r=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([s]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function a(e){for(var a=-1,i=0;i<t.length;i++)if(t[i].identifier===e){a=i;break}return a}function i(e,i){for(var s={},r=[],c=0;c<e.length;c++){var o=e[c],l=i.base?o[0]+i.base:o[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var A=a(u),h={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==A)t[A].references++,t[A].updater(h);else{var p=n(h,i);i.byIndex=c,t.splice(c,0,{identifier:u,updater:p,references:1})}r.push(u)}return r}function n(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,n){var s=i(e=e||[],n=n||{});return function(e){e=e||[];for(var r=0;r<s.length;r++){var c=a(s[r]);t[c].references--}for(var o=i(e,n),l=0;l<s.length;l++){var d=a(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=o}}},569:e=>{var t={};e.exports=function(e,a){var i=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var i="";a.supports&&(i+="@supports (".concat(a.supports,") {")),a.media&&(i+="@media ".concat(a.media," {"));var n=void 0!==a.layer;n&&(i+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),i+=a.css,n&&(i+="}"),a.media&&(i+="}"),a.supports&&(i+="}");var s=a.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={id:i,exports:{}};return e[i](s,s.exports,a),s.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=class{constructor(e,t,a){this.type=e,this.property=t,this.data=a}createButton(){const e=document.createElement("div");if(e.setAttribute("data-type",this.type),e.classList.add("button"),this.property.width&&(e.style.minWidth=this.property.width),this.property.isAlfabet&&e.classList.add("button__alfabet"),this.data.additionalValue){const t=document.createElement("div");t.classList.add("text"),t.classList.add("text__addition"),t.innerHTML=this.data.additionalValue,e.append(t)}const t=document.createElement("div");return t.classList.add("text"),t.innerHTML=this.data.desc,this.property.isAlfabet&&t.setAttribute("data-main_txt","1"),e.append(t),e}};var t=a(379),i=a.n(t),n=a(795),s=a.n(n),r=a(569),c=a.n(r),o=a(565),l=a.n(o),d=a(216),u=a.n(d),A=a(589),h=a.n(A),p=a(144),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=u(),i()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;let v="en";const g=document.querySelector("body"),b=e=>{const t=document.createElement("li");return t.innerText=e,t};localStorage.getItem("leng")&&(v=localStorage.getItem("leng"));const x=(()=>{const e=document.createElement("div");return e.classList.add("wrapper"),e})(),C=new class{constructor(){this.textAria=document.createElement("textarea"),this.textAria.setAttribute("rows","10"),this.textAria.setAttribute("autofocus","1"),this.textAria.classList.add("textaria")}getElement(){return this.textAria}setFocus(){this.textAria.focus()}changeTexAria=(e,t)=>{let a=this.textAria.selectionStart-("Backspace"===t?1:0);a<0&&(a=0);let i=this.textAria.selectionEnd;const{value:n}=this.textAria,s=n.substring(0,a)+e+n.substring(i);this.textAria.value=s,this.textAria.focus(),i-="Backspace"===t?1:0,"ArrowLeft"===t&&(i-=1),"ArrowRight"===t&&(i+=1,this.textAria.selectionStart=i);const r=this.textAria.value.substring(a).indexOf("\n"),c=this.textAria.value.substring(0,a).lastIndexOf("\n");if("ArrowDown"===t){if(-1!==r){let e=this.textAria.value.substring(a+r+1).indexOf("\n");e=e<0?this.textAria.value.length:e+a+r,a=a+r+(a-c),this.textAria.selectionStart=a>e+1?e+1:a}i=this.textAria.selectionStart}"ArrowUp"===t&&(-1!==c&&(a=this.textAria.value.substring(0,c).lastIndexOf("\n")+(a-c),this.textAria.selectionStart=a>c?c:a),i=this.textAria.selectionStart),i<0&&(i=0),a===i&&(i+=e.length),this.textAria.selectionEnd=i}},y=new class{constructor(e,t,a){this.dataKeys=t,this.leng=a,this.rows=e,this.buttons=[],this.isActiveCapsLock=!1,this.isActiveShift=!1,this.isActiveAlt=!1,this.isActiveShiftForce=!1}changeLanguage(){this.leng="en"===this.leng?"ru":"en",document.querySelectorAll(".button").forEach((t=>{const a=t.getAttribute("data-type");t.innerHTML=new e(a,{width:this.dataKeys[a].width,isAlfabet:this.dataKeys[a].isAlfabet},this.dataKeys[a][this.leng]).createButton().innerHTML}))}resetSelectedButtons(){this.buttons.forEach((e=>{"CapsLock"!==e.getAttribute("data-type")&&(this.isActiveShiftForce||e.classList.remove("button__active"))}))}changeCase(e){return document.querySelectorAll("[data-main_txt]").forEach((t=>{t.textContent=e?t.textContent.toUpperCase():t.textContent.toLowerCase()})),this}addListeners(e){this.buttons.forEach((t=>{t.addEventListener("mousedown",(t=>{this.resetSelectedButtons();const a=t.currentTarget.getAttribute("data-type");"AltLeft"===a&&(this.isActiveAlt=!0),this.isActiveAlt&&"ShiftLeft"===a&&(this.changeLanguage(),this.isActiveAlt=!1),this.isActiveShift&&"AltLeft"===a&&this.changeLanguage(),t.currentTarget.classList.toggle("button__active");let i=this.dataKeys[a][this.leng].value;"CapsLock"===a&&(this.isActiveCapsLock=!this.isActiveCapsLock),"ShiftLeft"!==a&&"ShiftRight"!==a||(this.isActiveShift=this.isActiveShiftForce||!this.isActiveShiftForce),this.isActiveShift&&this.dataKeys[a][this.leng].additionalValue&&(i=this.dataKeys[a][this.leng].additionalValue),(this.isActiveShift&&!this.isActiveCapsLock||!this.isActiveShift&&this.isActiveCapsLock)&&(i=i.toUpperCase()),"ShiftLeft"!==a&&"ShiftRight"!==a&&(this.isActiveShift=this.isActiveShiftForce||!1);const n=this.isActiveShift&&!this.isActiveCapsLock||!this.isActiveShift&&this.isActiveCapsLock;this.changeCase(n),e.changeTexAria(i,a)})),t.addEventListener("mouseup",(t=>{"CapsLock"!==t.currentTarget.getAttribute("data-type")&&t.currentTarget.classList.remove("button__active"),"ShiftLeft"!==t.currentTarget.getAttribute("data-type")&&(this.isActiveAlt=!1),"ShiftLeft"!==t.currentTarget.getAttribute("data-type")&&"ShiftRight"!==t.currentTarget.getAttribute("data-type")||(this.isActiveShift=this.isActiveShiftForce||!1);const a=this.isActiveShift&&!this.isActiveCapsLock||!this.isActiveShift&&this.isActiveCapsLock;this.changeCase(a),e.setFocus()}))})),document.addEventListener("keydown",(e=>{this.dataKeys[e.code]&&(e.preventDefault(),"ShiftRight"!==e.code&&"ShiftLeft"!==e.code||(this.isActiveShiftForce=!0),document.querySelector(`[data-type=${e.code}]`).dispatchEvent(new Event("mousedown")))})),document.addEventListener("keyup",(e=>{this.dataKeys[e.code]&&(e.preventDefault(),"ShiftRight"!==e.code&&"ShiftLeft"!==e.code||(this.isActiveShiftForce=!1),document.querySelector(`[data-type=${e.code}]`).dispatchEvent(new Event("mouseup")))}))}getRow(t){const a=document.createElement("div");return a.classList.add("row"),t.forEach((t=>{const i=new e(t,{width:this.dataKeys[t].width,isAlfabet:this.dataKeys[t].isAlfabet},this.dataKeys[t][this.leng]).createButton();this.buttons.push(i),a.append(i)})),a}createRows(e,t){return this.rows.forEach((t=>{e.append(this.getRow(t))})),this.addListeners(t),this}getLenguage(){return this.leng}}([["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"]],{Backquote:{isAlfabet:!0,en:{desc:"`",value:"`",additionalValue:"~"},ru:{desc:"ё",value:"ё"}},Digit1:{isAlfabet:!0,en:{desc:"1",value:"1",additionalValue:"!"},ru:{desc:"1",value:"1",additionalValue:"!"}},Digit2:{isAlfabet:!0,en:{desc:"2",value:"2",additionalValue:"@"},ru:{desc:"2",value:"2",additionalValue:'"'}},Digit3:{isAlfabet:!0,en:{desc:"3",value:"3",additionalValue:"#"},ru:{desc:"3",value:"3",additionalValue:"№"}},Digit4:{isAlfabet:!0,en:{desc:"4",value:"4",additionalValue:"$"},ru:{desc:"4",value:"5",additionalValue:";"}},Digit5:{isAlfabet:!0,en:{desc:"5",value:"5",additionalValue:"%"},ru:{desc:"5",value:"5",additionalValue:"%"}},Digit6:{isAlfabet:!0,en:{desc:"6",value:"6",additionalValue:"^"},ru:{desc:"6",value:"6",additionalValue:":"}},Digit7:{isAlfabet:!0,en:{desc:"7",value:"7",additionalValue:"&"},ru:{desc:"7",value:"7",additionalValue:"?"}},Digit8:{isAlfabet:!0,en:{desc:"8",value:"8",additionalValue:"*"},ru:{desc:"8",value:"8",additionalValue:"*"}},Digit9:{isAlfabet:!0,en:{desc:"9",value:"9",additionalValue:"("},ru:{desc:"9",value:"9",additionalValue:"("}},Digit0:{isAlfabet:!0,en:{desc:"0",value:"0",additionalValue:")"},ru:{desc:"0",value:"0",additionalValue:")"}},Minus:{isAlfabet:!0,en:{desc:"-",value:"-",additionalValue:"_"},ru:{desc:"-",value:"-",additionalValue:"_"}},Equal:{isAlfabet:!0,en:{desc:"=",value:"=",additionalValue:"+"},ru:{desc:"=",value:"=",additionalValue:"+"}},Backspace:{width:"100px",en:{desc:"&#8592;",value:""},ru:{desc:"&#8592;",value:""}},Tab:{width:"80px",en:{desc:"TAB",value:"    "},ru:{desc:"TAB",value:"    "}},KeyQ:{isAlfabet:!0,en:{desc:"q",value:"q"},ru:{desc:"й",value:"й"}},KeyW:{isAlfabet:!0,en:{desc:"w",value:"w"},ru:{desc:"ц",value:"ц"}},KeyE:{isAlfabet:!0,en:{desc:"e",value:"e"},ru:{desc:"у",value:"у"}},KeyR:{isAlfabet:!0,en:{desc:"r",value:"r"},ru:{desc:"к",value:"к"}},KeyT:{isAlfabet:!0,en:{desc:"t",value:"t"},ru:{desc:"е",value:"е"}},KeyY:{isAlfabet:!0,en:{desc:"y",value:"y"},ru:{desc:"н",value:"н"}},KeyU:{isAlfabet:!0,en:{desc:"u",value:"u"},ru:{desc:"г",value:"г"}},KeyI:{isAlfabet:!0,en:{desc:"i",value:"i"},ru:{desc:"ш",value:"ш"}},KeyO:{isAlfabet:!0,en:{desc:"o",value:"o"},ru:{desc:"щ",value:"щ"}},KeyP:{isAlfabet:!0,en:{desc:"p",value:"p"},ru:{desc:"з",value:"з"}},BracketLeft:{isAlfabet:!0,en:{desc:"[",value:"[",additionalValue:"{"},ru:{desc:"х",value:"х"}},BracketRight:{isAlfabet:!0,en:{desc:"]",value:"]",additionalValue:"}"},ru:{desc:"ъ",value:"ъ"}},Backslash:{isAlfabet:!0,en:{desc:"\\",value:"\\",additionalValue:"|"},ru:{desc:"/",value:"/"}},CapsLock:{width:"100px",isOptinal:!0,en:{desc:"Caps Lock",value:""},ru:{desc:"Caps Lock",value:""}},KeyA:{isAlfabet:!0,en:{desc:"a",value:"a"},ru:{desc:"ф",value:"ф"}},KeyS:{isAlfabet:!0,en:{desc:"s",value:"s"},ru:{desc:"ы",value:"ы"}},KeyD:{isAlfabet:!0,en:{desc:"d",value:"d"},ru:{desc:"в",value:"в"}},KeyF:{isAlfabet:!0,en:{desc:"f",value:"f"},ru:{desc:"а",value:"а"}},KeyG:{isAlfabet:!0,en:{desc:"g",value:"g"},ru:{desc:"п",value:"п"}},KeyH:{isAlfabet:!0,en:{desc:"h",value:"h"},ru:{desc:"р",value:"р"}},KeyJ:{isAlfabet:!0,en:{desc:"j",value:"j"},ru:{desc:"о",value:"о"}},KeyK:{isAlfabet:!0,en:{desc:"k",value:"k"},ru:{desc:"л",value:"л"}},KeyL:{isAlfabet:!0,en:{desc:"l",value:"l"},ru:{desc:"д",value:"д"}},Semicolon:{isAlfabet:!0,en:{desc:";",value:";",additionalValue:":"},ru:{desc:"ж",value:"ж"}},Quote:{isAlfabet:!0,en:{desc:"'",value:"'",additionalValue:'"'},ru:{desc:"э",value:"э"}},Enter:{width:"150px",en:{desc:"Enter",value:"\n"},ru:{desc:"Enter",value:"\n"}},KeyZ:{isAlfabet:!0,en:{desc:"z",value:"z"},ru:{desc:"я",value:"я"}},KeyX:{isAlfabet:!0,en:{desc:"x",value:"x"},ru:{desc:"ч",value:"ч"}},KeyC:{isAlfabet:!0,en:{desc:"c",value:"c"},ru:{desc:"с",value:"с"}},KeyV:{isAlfabet:!0,en:{desc:"v",value:"v"},ru:{desc:"м",value:"м"}},KeyB:{isAlfabet:!0,en:{desc:"b",value:"b"},ru:{desc:"и",value:"и"}},KeyN:{isAlfabet:!0,en:{desc:"n",value:"n"},ru:{desc:"т",value:"т"}},KeyM:{isAlfabet:!0,en:{desc:"m",value:"m"},ru:{desc:"ь",value:"ь"}},Comma:{isAlfabet:!0,en:{desc:",",value:",",additionalValue:"<"},ru:{desc:"б",value:"б"}},Period:{isAlfabet:!0,en:{desc:".",value:".",additionalValue:">"},ru:{desc:"ю",value:"ю"}},Slash:{isAlfabet:!0,en:{desc:"/",value:"/",additionalValue:"?"},ru:{desc:".",value:".",additionalValue:","}},ShiftLeft:{width:"130px",isOptinal:!0,en:{desc:"Shift",value:""},ru:{desc:"Shift",value:""}},ShiftRight:{width:"150px",isOptinal:!0,en:{desc:"Shift",value:""},ru:{desc:"Shift",value:""}},ControlLeft:{isOptinal:!0,en:{desc:"CTRL",value:""},ru:{desc:"CTRL",value:""}},MetaLeft:{isOptinal:!0,en:{desc:"Win",value:""},ru:{desc:"Win",value:""}},AltLeft:{isOptinal:!0,en:{desc:"ALT",value:""},ru:{desc:"ALT",value:""}},Space:{width:"350px",isAlfabet:!0,en:{desc:"________________",value:" "},ru:{desc:"________________",value:" "}},AltRight:{width:"50px",isOptinal:!0,en:{desc:"ALT",value:""},ru:{desc:"ALT",value:""}},ControlRight:{width:"50px",isOptinal:!0,en:{desc:"CTRL",value:""},ru:{desc:"CTRL",value:""}},ArrowUp:{isOptinal:!0,en:{desc:"&#129093;",value:""},ru:{desc:"&#129093;",value:""}},ArrowDown:{isOptinal:!0,en:{desc:"&#129095;",value:""},ru:{desc:"&#129095;",value:""}},ArrowRight:{isOptinal:!0,en:{desc:"&#129094;",value:""},ru:{desc:"&#129094;",value:""}},ArrowLeft:{isOptinal:!0,en:{desc:"&#129092;",value:""},ru:{desc:"&#129092;",value:""}}},v).createRows(x,C);x.prepend(C.getElement()),x.prepend((()=>{const e=document.createElement("div");return e.classList.add("title"),e.innerText="RSS Виртуальная клавиатура",e})()),x.append((()=>{const e=document.createElement("ul");return e.classList.add("description"),e.append(b("Для переключения языка комбинация: левыe ALT + Shift или Shift + ALT")),e.append(b("Для переключения языка с помощью мыши: нажмите на Shift (ALT), удерживая, переместите курсор на ALT (Shift), нажмите еще раз")),e.append(b("Для набора доп. символов с помощью мыши: нажмите на Shift, удерживая, переместите курсор на выбранную клавишу, нажмите еще раз")),e})()),g.append(x),window.addEventListener("beforeunload",(()=>{localStorage.setItem("leng",y.getLenguage())}))})()})();
//# sourceMappingURL=script.bundle.js.map