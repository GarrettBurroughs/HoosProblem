(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{149:function(n,t,e){},150:function(n,t,e){},157:function(n,t){},159:function(n,t){},169:function(n,t){},171:function(n,t){},198:function(n,t){},200:function(n,t){},201:function(n,t){},206:function(n,t){},208:function(n,t){},214:function(n,t){},216:function(n,t){},235:function(n,t){},247:function(n,t){},250:function(n,t){},254:function(n,t,e){"use strict";e.r(t);var o,a,r,i,c,s,d,p,b,u,l,x,f,h=e(8),g=e.n(h),j=e(138),m=e.n(j),v=(e(149),e(150),e(13)),O=e(15),w=e(16),y=e(11),C=w.a.div(o||(o=Object(O.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    background-color: var(--uva-orange);\n    color: var(--uva-blue);\n    font-family: var(--header-text);\n    font-size: 34px;\n    font-weight: bold; \n    width: 100%;\n    height: 70px;\n    align-items: center;\n    justify-content: center;\n    z-index: 2;\n\n"]))),k=function(){return Object(y.jsx)(C,{children:"Hoos Problem"})},E=e(142),I=e.n(E),D=w.a.div(a||(a=Object(O.a)(["\n    width: 60%;\n    @media only screen and (max-width: 700px){\n        width: 90%;\n    }\n    border-radius: 10px;\n    box-shadow: 0px 0px 2px grey;\n    margin: auto;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    overflow: hidden;\n    text-align: left;\n    \n"]))),P=w.a.img(r||(r=Object(O.a)(["\n    border-radius: 100px;\n    width: 50px;\n    height: 50px;\n    background-color: #EEEEEE;\n    margin-left: 30px;\n    margin-top: 5px;\n"]))),S=w.a.div(i||(i=Object(O.a)(["\n    width: 100%;\n    background-color: var(--uva-orange);\n    height: 20px;\n"]))),z=w.a.div(c||(c=Object(O.a)(["\n    display: inline-block;\n    & p {\n        transform: translate(10%, -75%)\n    }\n"]))),F=w.a.div(s||(s=Object(O.a)(["\n    margin-left: 53px;\n    border-left: 5px solid rgba(35, 45, 75, .5);\n    padding-left: 3px;\n    margin-bottom: 15px;\n"]))),T=function(n){var t=n.postContent,e=n.postTime,o=h.useState(""),a=Object(v.a)(o,2),r=a[0],i=a[1];h.useEffect((function(){var n="";try{n=I.a.createHash("md5").update(t).digest("hex")}catch(e){console.error("post content hash error: ".concat(t)),console.error(e),n=""}i(n)}),[t]);var c;return Object(y.jsxs)(D,{children:[Object(y.jsx)(S,{}),Object(y.jsx)(P,{src:"https://avatars.dicebear.com/api/bottts/".concat(r,".svg"),alt:"Randomly generated user robot avatar"}),Object(y.jsx)(z,{children:Object(y.jsxs)("p",{children:["At ",(c=new Date(1e3*e),"".concat(c.getHours(),":").concat(c.getMinutes()," on ").concat(c.getMonth()+1,"/").concat(c.getDate(),"/").concat(c.getFullYear()))]})}),Object(y.jsx)(F,{children:t})]})},H=e(143),A=e(27),L=w.a.div(d||(d=Object(O.a)(["\n    width: 60%;\n    @media only screen and (max-width: 700px){\n        width: 90%;\n    }\n    border-radius: 10px;\n    box-shadow: 0px 0px 2px grey;\n    margin: auto;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    overflow: hidden;\n    text-align: left;\n    position: relative; \n"]))),B=w.a.textarea(p||(p=Object(O.a)(["\n    width: 90%;\n    margin-right: 5%;\n    margin-left: 5%;\n    margin-top: 15px;\n    height: 70px;\n    border: none;\n    font-family: var(--body-text);\n    outline: none;\n    resize: none;\n    font-size: 18px;\n"]))),G=w.a.button(b||(b=Object(O.a)(["\n    border: none;\n    font-family: var(--header-text);\n    color: var(--uva-blue);\n    background-color: var(--uva-orange);\n    border-radius: 10px;\n    height: 40px;\n    width: 70px;\n    font-size: 24px;\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n\n    &:hover {\n        box-shadow: 0px 0px 3px 0px var(--uva-blue);\n    }\n    \n    &:active {\n        border: 1px inset black; \n    }\n"]))),M=function(n){var t=n.db,e=h.useState(),o=Object(v.a)(e,2),a=o[0],r=o[1],i=h.useRef(null);return Object(y.jsxs)(L,{children:[Object(y.jsx)(B,{ref:i,placeholder:"Have a problem?",onChange:function(n){r(n.target.value)}}),Object(y.jsx)(G,{onClick:function(n){if(n.preventDefault(),console.log(a),t){if(!a)return void alert("Post must contain content");var e=Object(A.c)(t,"posts"),o=new A.a(Date.now()/1e3,0);Object(A.b)(e,{postContent:a,time:o,upvotes:0}),r(""),i.current&&(i.current.innerText="",i.current.value=""),console.log("post created")}else console.log("not connected to database")},children:"Post!"})]})},N=w.a.div(u||(u=Object(O.a)(["\n    display: grid;\n    grid-template-columns: 1fr 80% 1fr;\n    @media only screen and (max-width: 700px){\n        grid-template-columns: 1fr 95% 1fr;\n    }\n"]))),R=w.a.div(l||(l=Object(O.a)(["\n    grid-column: 2;\n    /*box-shadow: 0px 0px 5px #888888;*/\n    margin-top: 100px;\n    border-radius: 3px;\n"]))),J=Object(w.b)(x||(x=Object(O.a)(["\n    0% { transform: rotate(0deg); }\n    75% { transform: rotate(280deg); }\n    100% { transform: rotate(360deg); }\n"]))),Q=w.a.div(f||(f=Object(O.a)(["\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border: solid 10px var(--uva-orange);\n    border-bottom-color: var(--uva-blue);\n    animation: 1s linear infinite ",";\n    margin: auto;\n"])),J),V=function(){var n=h.useState(),t=Object(v.a)(n,2),e=t[0],o=t[1],a=h.useState(),r=Object(v.a)(a,2),i=r[0],c=r[1];h.useEffect((function(){Object(H.a)({apiKey:"AIzaSyCLrzhIG7ld1Q5qCVIRPP1P6j9DHNsXL7A",authDomain:"hoosproblem.firebaseapp.com",projectId:"hoosproblem",storageBucket:"hoosproblem.appspot.com",messagingSenderId:"448797692895",appId:"1:448797692895:web:b8ebcd0cb0740bc105aa6a",measurementId:"G-C1CFQGDTVN"});var n=Object(A.d)();o(n);var t=Object(A.c)(n,"posts");Object(A.e)(t,(function(n){var t=[];n.forEach((function(n){var e=n.data();t.push({postContent:e.postContent,time:e.time})})),c(t)}))}),[]);return Object(y.jsxs)("div",{children:[Object(y.jsx)(k,{}),Object(y.jsx)(N,{children:Object(y.jsxs)(R,{children:[Object(y.jsx)(M,{db:e}),i?i.sort((function(n,t){return t.time.seconds-n.time.seconds})).map((function(n,t){return Object(y.jsx)(T,{postContent:n.postContent,postTime:n.time.seconds},t)})):Object(y.jsx)(Q,{})]})})]})};var q=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(V,{})})},K=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,255)).then((function(t){var e=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;e(n),o(n),a(n),r(n),i(n)}))};m.a.render(Object(y.jsx)(g.a.StrictMode,{children:Object(y.jsx)(q,{})}),document.getElementById("root")),K()}},[[254,1,2]]]);
//# sourceMappingURL=main.e04d591d.chunk.js.map