(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4461)}])},4461:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var a=s(5893),l=s(8951),n=s(7294),i=s(1664),r=s.n(i),c=s(1163);function d(){var e,t,s;let{data:i}=(0,l.i)("https://linkcord.js.org/api/v3/user/852606013126606908"),[d,o]=(0,n.useState)("notHovered"),[u,x]=(0,n.useState)(!1),[f,m]=(0,n.useState)(!1);return(0,c.useRouter)(),(0,n.useEffect)(()=>{if("undefined"==typeof WebSocket||u&&u instanceof WebSocket)return;let e=new WebSocket("wss://linkcord.js.org/api/wss?u=852606013126606908");e.onopen=()=>x(e),e.onmessage=e=>{try{var t,s;let a=JSON.parse(e.data);if(![0,1].includes(a.op)||!["FETCH_USER","UPDATE_USER"].includes(a.t))return;m(null==a?void 0:null===(t=a.d)||void 0===t?void 0:null===(s=t.activities)||void 0===s?void 0:s.find(e=>"Spotify"===e.name&&"LISTENING"===e.type))}catch(e){}}},[u]),(0,a.jsx)("div",{"data-aos":"fade-up",className:"w-[calc(100vw-18rem)] h-screen flex items-center justify-center",children:(0,a.jsxs)("div",{className:"flex items-center justify-between w-full max-w-3xl",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("h1",{className:"text-zinc-900 dark:text-zinc-50 transition-all duration-200 text-6xl font-bold",children:["Hi there, ",(0,a.jsx)("br",{}),"I'm Loiren"]}),(0,a.jsx)("h3",{className:"text-zinc-700 dark:text-zinc-400 transition-all duration-200 max-w-md mt-3",children:"Full-Stack Developer. My name is Berk, I live in Turkey and I am a high school student."}),f&&(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)("div",{className:"w-full bg-zinc-400/20 dark:bg-black/20 backdrop-blur-sm px-5 py-2.5 rounded-lg",children:(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-1 flex-wrap",children:[(0,a.jsx)("i",{className:"fa-brands fa-spotify text-emerald-500"}),(0,a.jsx)("p",{className:"text-black/60 dark:text-zinc-400",children:"Listening to"}),(0,a.jsxs)("p",{className:"text-black dark:text-zinc-100",children:[null==f?void 0:f.details," ",(null==f?void 0:null===(e=f.delails)||void 0===e?void 0:e.length)>=13&&"..."]}),(0,a.jsx)("p",{className:"text-black/60 dark:text-zinc-400",children:"by"}),(0,a.jsx)("p",{className:"text-black dark:text-zinc-100",children:null==f?void 0:f.state})]})})})]}),(null==i?void 0:i.data)?(0,a.jsx)(r(),{target:"_blank",href:"https://discord.com/users/852606013126606908",children:(0,a.jsxs)("div",{onMouseEnter:()=>o("hovered"),onMouseLeave:()=>o("notHovered"),className:"w-52 h-52 rounded-full group",children:[(0,a.jsx)("div",{className:"cursor-pointer flex items-center justify-center bg-black w-52 h-52 absolute rounded-full ".concat("hovered"===d?"opacity-70":"opacity-0"," transition-all duration-200"),children:(0,a.jsx)("p",{className:"text-lg text-white",children:"See Discord Profile"})}),(0,a.jsx)("img",{src:"https://cdn.discordapp.com/avatars/".concat(null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.id,"/").concat(null==i?void 0:null===(s=i.data)||void 0===s?void 0:s.avatar,"?size=4096"),alt:"avatar",className:"w-full h-full rounded-full transition-all duration-200"})]})}):(0,a.jsx)("div",{className:"w-52 h-52 rounded-full",children:(0,a.jsx)("div",{className:"flex items-center justify-center dark:bg-black/20 bg-gray-400/20 backdrop-blur-sm w-52 h-52 rounded-full transition-all duration-200",children:(0,a.jsxs)("p",{className:"text-sm text-red-500",children:[(0,a.jsx)("i",{className:"fa-solid fa-triangle-exclamation mr-2"}),"Linkcord is down."]})})})]})})}var o=s(5312),u=s(3504),x=s(6861);function f(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(o.Z,{}),(0,a.jsx)(x.Z,{})]})}}},function(e){e.O(0,[831,407,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);