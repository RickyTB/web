import{Q as _,T as d}from"./vendor.31acc435.js";const m="modulepreload",i={},f="/",a=function(n,t){return!t||t.length===0?n():Promise.all(t.map(e=>{if(e=`${f}${e}`,e in i)return;i[e]=!0;const o=e.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":m,o||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),o)return new Promise((c,u)=>{r.addEventListener("load",c),r.addEventListener("error",u)})})).then(()=>n())};_("274FMA",{value:!0},async()=>{const[{default:s},{default:n}]=await Promise.all([a(()=>import("./Nav.d9542023.js"),["assets/Nav.d9542023.js","assets/vendor.31acc435.js"]),a(()=>import("./client.133ef3a4.js"),["assets/client.133ef3a4.js","assets/vendor.31acc435.js"])]);return(t,e)=>n(t)(s,{class:"astro-HIYBAQ6D"},e)});d("Z8lXaQ",{value:!0},async()=>{const[{default:s},{default:n}]=await Promise.all([a(()=>import("./Contact.6d7888f1.js"),["assets/Contact.6d7888f1.js","assets/vendor.31acc435.js"]),a(()=>import("./client.133ef3a4.js"),["assets/client.133ef3a4.js","assets/vendor.31acc435.js"])]);return(t,e)=>n(t)(s,{class:"astro-HIYBAQ6D"},e)});