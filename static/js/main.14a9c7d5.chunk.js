(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{160:function(n,e,t){},170:function(n,e){},172:function(n,e){},182:function(n,e){},184:function(n,e){},211:function(n,e){},213:function(n,e){},214:function(n,e){},219:function(n,e){},221:function(n,e){},227:function(n,e){},229:function(n,e){},248:function(n,e){},260:function(n,e){},263:function(n,e){},267:function(n,e,t){"use strict";t.r(e);var o,a,r,i,c,s,d,p,l,b,x,u,h,j,m,f,g,v,O,w,y=t(4),C=t.n(y),k=t(148),I=t.n(k),D=(t(160),t(14)),P=t(12),H=t(13),z=t(63),S=t(6),F=H.a.div(o||(o=Object(P.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    background-color: var(--uva-orange);\n    color: var(--uva-blue);\n    font-family: var(--header-text);\n    font-size: 34px;\n    font-weight: bold; \n    width: 100%;\n    height: 70px;\n    align-items: center;\n    justify-content: center;\n    z-index: 2;\n\n    @media only screen and (max-width: 700px){\n        p {\n            width: 200px;\n            text-align: center;\n        }\n        height: 100px;\n    }\n"]))),E=H.a.div(a||(a=Object(P.a)(["\n    width: 100px;\n    height: 70px;\n    background-color: var(--uva-blue);\n    position: fixed;\n    left: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n\n    & > a {\n        text-decoration: none;\n        color: white;\n    }\n\n    &::hover{\n\n        background-color: white;\n\n        & > a {\n            color: var(--uva-blue);\n        }\n    }\n\n    @media only screen and (max-width: 700px){\n        height: 100px;\n        width: 100px;\n    }\n    \n"]))),T=function(n){var e=n.links;return Object(S.jsxs)(F,{children:[null===e||void 0===e?void 0:e.map((function(n,e){return Object(S.jsx)(E,{children:Object(S.jsxs)(z.b,{to:n.link,children:[" ",n.text," "]},e)})})),Object(S.jsx)("p",{children:"Hoos Problem"})]})},B=t(153),A=t.n(B),L=t(15),R=H.a.div(r||(r=Object(P.a)(["\n    width: 60%;\n    @media only screen and (max-width: 700px){\n        width: 90%;\n    }\n    border-radius: 10px;\n    box-shadow: 0px 0px 2px grey;\n    margin: auto;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    overflow: hidden;\n    text-align: left;\n    position: relative;\n    padding-bottom: 50px;\n\n    \n"]))),G=H.a.img(i||(i=Object(P.a)(["\n    border-radius: 100px;\n    width: 50px;\n    height: 50px;\n    background-color: #EEEEEE;\n    margin-left: 30px;\n    margin-top: 5px;\n"]))),N=H.a.div(c||(c=Object(P.a)(["\n    width: 100%;\n    background-color: var(--uva-orange);\n    height: 20px;\n"]))),Q=H.a.div(s||(s=Object(P.a)(["\n    display: inline-block;\n    & p {\n        transform: translate(10%, -75%)\n    }\n"]))),V=H.a.div(d||(d=Object(P.a)(["\n    margin-left: 53px;\n    border-left: 5px solid rgba(35, 45, 75, .5);\n    padding-left: 3px;\n    margin-bottom: 15px;\n"]))),M=H.a.button(p||(p=Object(P.a)(["\n    border: none;\n    font-family: var(--header-text);\n    color: var(--uva-blue);\n    background-color: var(--uva-orange);\n    border-radius: 10px;\n    height: 40px;\n    font-size: 24px;\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n\n    &:hover {\n        box-shadow: 0px 0px 3px 0px var(--uva-blue);\n    }\n    \n    &:active {\n        border: 1px inset black; \n    }\n"]))),q=function(n){var e=n.id,t=n.postContent,o=n.postTime,a=n.showButton,r=y.useState(""),i=Object(D.a)(r,2),c=i[0],s=i[1],d=Object(L.g)();y.useEffect((function(){var n="";try{n=A.a.createHash("md5").update(t).digest("hex")}catch(e){console.error("post content hash error: ".concat(t)),console.error(e),n=""}s(n)}),[t]);var p;return Object(S.jsxs)(R,{children:[Object(S.jsx)(N,{}),Object(S.jsx)(G,{src:"https://avatars.dicebear.com/api/bottts/".concat(c,".svg"),alt:"Randomly generated user robot avatar"}),Object(S.jsx)(Q,{children:Object(S.jsxs)("p",{children:["At ",(p=new Date(1e3*o),"".concat(p.getHours(),":").concat(p.getMinutes()," on ").concat(p.getMonth()+1,"/").concat(p.getDate(),"/").concat(p.getFullYear()))]})}),Object(S.jsx)(V,{children:t}),a?Object(S.jsx)(M,{onClick:function(n){d.push("/HoosProblem/post/".concat(e))},children:"Let's Fix It!"}):Object(S.jsx)(S.Fragment,{})]})},J=t(154),K=t(20),X=H.a.div(l||(l=Object(P.a)(["\n    width: 60%;\n    @media only screen and (max-width: 700px){\n        width: 90%;\n    }\n    border-radius: 10px;\n    box-shadow: 0px 0px 2px grey;\n    margin: auto;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    overflow: hidden;\n    text-align: left;\n    position: relative; \n"]))),Y=H.a.textarea(b||(b=Object(P.a)(["\n    width: 90%;\n    margin-right: 5%;\n    margin-left: 5%;\n    margin-top: 15px;\n    height: 70px;\n    border: none;\n    font-family: var(--body-text);\n    outline: none;\n    resize: none;\n    font-size: 18px;\n"]))),U=H.a.button(x||(x=Object(P.a)(["\n    border: none;\n    font-family: var(--header-text);\n    color: var(--uva-blue);\n    background-color: var(--uva-orange);\n    border-radius: 10px;\n    height: 40px;\n    font-size: 24px;\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n\n    &:hover {\n        box-shadow: 0px 0px 3px 0px var(--uva-blue);\n    }\n    \n    &:active {\n        border: 1px inset black; \n    }\n"]))),W=function(n){var e=n.db,t=y.useState(),o=Object(D.a)(t,2),a=o[0],r=o[1],i=y.useRef(null);return Object(S.jsxs)(X,{children:[Object(S.jsx)(Y,{ref:i,placeholder:"Have a problem?",onChange:function(n){r(n.target.value)}}),Object(S.jsx)(U,{onClick:function(n){if(n.preventDefault(),console.log(a),e){if(!a)return void alert("Post must contain content");var t=Object(K.d)(e,"posts"),o=new K.a(Date.now()/1e3,0);Object(K.b)(t,{postContent:a,time:o,upvotes:0,replies:[]}),r(""),i.current&&(i.current.innerText="",i.current.value=""),console.log("post created")}else console.log("not connected to database")},children:"Post!"})]})},Z=H.a.div(u||(u=Object(P.a)(["\n    display: grid;\n    grid-template-columns: 1fr 80% 1fr;\n    @media only screen and (max-width: 700px){\n        grid-template-columns: 1fr 95% 1fr;\n    }\n"]))),$=H.a.div(h||(h=Object(P.a)(["\n    grid-column: 2;\n    /*box-shadow: 0px 0px 5px #888888;*/\n    margin-top: 100px;\n    border-radius: 3px;\n"]))),_=Object(H.b)(j||(j=Object(P.a)(["\n    0% { transform: rotate(0deg); }\n    75% { transform: rotate(280deg); }\n    100% { transform: rotate(360deg); }\n"]))),nn=H.a.div(m||(m=Object(P.a)(["\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border: solid 10px var(--uva-orange);\n    border-bottom-color: var(--uva-blue);\n    animation: 1s linear infinite ",";\n    margin: auto;\n"])),_),en=function(){var n=y.useState(),e=Object(D.a)(n,2),t=e[0],o=e[1],a=y.useState(),r=Object(D.a)(a,2),i=r[0],c=r[1];y.useEffect((function(){Object(J.a)({apiKey:"AIzaSyCLrzhIG7ld1Q5qCVIRPP1P6j9DHNsXL7A",authDomain:"hoosproblem.firebaseapp.com",projectId:"hoosproblem",storageBucket:"hoosproblem.appspot.com",messagingSenderId:"448797692895",appId:"1:448797692895:web:b8ebcd0cb0740bc105aa6a",measurementId:"G-C1CFQGDTVN"});var n=Object(K.f)();o(n);var e=Object(K.d)(n,"posts");Object(K.g)(e,(function(n){var e=[];n.forEach((function(n){var t=n.data();console.log(t.replies),e.push({postContent:t.postContent,time:t.time,id:n.id,replies:t.replies})})),c(e)}))}),[]);return Object(S.jsxs)("div",{children:[Object(S.jsx)(T,{}),Object(S.jsx)(Z,{children:Object(S.jsxs)($,{children:[Object(S.jsx)(W,{db:t}),i?i.sort((function(n,e){return e.time.seconds-n.time.seconds})).map((function(n,e){return Object(S.jsx)(q,{id:n.id,postContent:n.postContent,postTime:n.time.seconds,showButton:!0},e)})):Object(S.jsx)(nn,{})]})})]})},tn=t(23),on=H.a.div(f||(f=Object(P.a)(["\n    width: 60%;\n    @media only screen and (max-width: 700px){\n        width: 90%;\n    }\n    border-radius: 10px;\n    box-shadow: 0px 0px 2px grey;\n    margin: auto;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    overflow: hidden;\n    text-align: left;\n    position: relative; \n"]))),an=H.a.textarea(g||(g=Object(P.a)(["\n    width: 90%;\n    margin-right: 5%;\n    margin-left: 5%;\n    margin-top: 15px;\n    height: 70px;\n    border: none;\n    font-family: var(--body-text);\n    outline: none;\n    resize: none;\n    font-size: 18px;\n"]))),rn=H.a.button(v||(v=Object(P.a)(["\n    border: none;\n    font-family: var(--header-text);\n    color: var(--uva-blue);\n    background-color: var(--uva-orange);\n    border-radius: 10px;\n    height: 40px;\n    font-size: 24px;\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n\n    &:hover {\n        box-shadow: 0px 0px 3px 0px var(--uva-blue);\n    }\n    \n    &:active {\n        border: 1px inset black; \n    }\n"]))),cn=function(n){var e=n.db,t=n.postID,o=y.useState(),a=Object(D.a)(o,2),r=a[0],i=a[1],c=y.useRef(null);return Object(S.jsxs)(on,{children:[Object(S.jsx)(an,{ref:c,placeholder:"Have a comment or solution?",onChange:function(n){i(n.target.value)}}),Object(S.jsx)(rn,{onClick:function(n){if(n.preventDefault(),console.log(r),e){if(!r)return void alert("Reply must contain content");var o=Object(K.e)(e,"posts",t),a=new K.a(Date.now()/1e3,0);Object(K.h)(o,{replies:Object(K.c)({replyContent:r,time:a,upvotes:0})}),c.current&&(c.current.value=""),console.log("reply created")}else console.log("not connected to database")},children:"Reply!"})]})},sn=H.a.div(O||(O=Object(P.a)(["\n    padding-top: 100px;\n"]))),dn=H.a.div(w||(w=Object(P.a)(["\n    font-size: 20px;\n    text-align: left; \n    font-family: var(--header-text);\n    color: var(--uva-blue);\n    margin-left: 15%;\n    @media only screen and (max-width: 700px){\n        margin-left: 5%;\n    }\n"]))),pn=function(n){var e=n.postID,t=y.useState(),o=Object(D.a)(t,2),a=o[0],r=o[1],i=y.useState(),c=Object(D.a)(i,2),s=c[0],d=c[1];return y.useEffect((function(){Object(tn.f)({apiKey:"AIzaSyCLrzhIG7ld1Q5qCVIRPP1P6j9DHNsXL7A",authDomain:"hoosproblem.firebaseapp.com",projectId:"hoosproblem",storageBucket:"hoosproblem.appspot.com",messagingSenderId:"448797692895",appId:"1:448797692895:web:b8ebcd0cb0740bc105aa6a",measurementId:"G-C1CFQGDTVN"});var n=Object(K.f)();d(n),Object(K.g)(Object(K.e)(n,"posts",e),(function(n){var e=n.data();e&&(console.log(e.replies),r({postContent:e.postContent,time:e.time,id:n.id,replies:e.replies}))}),(function(n){console.log(n)}))}),[e]),Object(S.jsxs)(sn,{children:[Object(S.jsx)(T,{links:[{text:"back",link:"/HoosProblem/home"}]}),a?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(dn,{children:"Here's the Problem:"}),Object(S.jsx)(q,{postContent:(null===a||void 0===a?void 0:a.postContent)||"error loading post content",id:null===a||void 0===a?void 0:a.id,postTime:null===a||void 0===a?void 0:a.time.seconds,showButton:!1}),Object(S.jsx)(cn,{postID:e,db:s}),Object(S.jsx)("hr",{}),a.replies.length>0?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(dn,{children:"And this is what Hoos think about what we can do to fix it"}),a.replies.map((function(n,e){return Object(S.jsx)(q,{postContent:n.replyContent,postTime:n.time.seconds,id:n.id,showButton:!1},e)}))]}):Object(S.jsx)(dn,{children:"No one has come up with anything yet, be the first to contribute a solution!"})]}):Object(S.jsx)(S.Fragment,{})]})};var ln=function(){return Object(S.jsx)(z.a,{children:Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(L.d,{children:Object(S.jsx)(L.b,{path:"/HoosProblem/post/:postID",render:function(n){var e=n.match;return Object(S.jsx)(pn,{postID:e.params.postID})}})}),Object(S.jsx)(L.b,{path:"/HoosProblem/home",children:Object(S.jsx)(en,{})}),Object(S.jsx)(L.b,{exact:!0,path:"/",children:Object(S.jsx)(L.a,{to:"/HoosProblem/home"})}),Object(S.jsx)(L.b,{exact:!0,path:"/HoosProblem",children:Object(S.jsx)(L.a,{to:"/HoosProblem/home"})})]})})},bn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,268)).then((function(e){var t=e.getCLS,o=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),o(n),a(n),r(n),i(n)}))};I.a.render(Object(S.jsx)(C.a.StrictMode,{children:Object(S.jsx)(ln,{})}),document.getElementById("root")),bn()}},[[267,1,2]]]);
//# sourceMappingURL=main.14a9c7d5.chunk.js.map