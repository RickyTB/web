import{I as d}from"./vendor.be535c7c.js";const m="modulepreload",i={},f="/",a=function(n,r){return!r||r.length===0?n():Promise.all(r.map(e=>{if(e=`${f}${e}`,e in i)return;i[e]=!0;const s=e.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const t=document.createElement("link");if(t.rel=s?"stylesheet":m,s||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),s)return new Promise((c,u)=>{t.addEventListener("load",c),t.addEventListener("error",u)})})).then(()=>n())};d("274FMA",{value:!0},async()=>{const[{default:o},{default:n}]=await Promise.all([a(()=>import("./Nav.af3a334b.js"),["assets/Nav.af3a334b.js","assets/vendor.be535c7c.js"]),a(()=>import("./client.88515b30.js"),["assets/client.88515b30.js","assets/vendor.be535c7c.js"])]);return(r,e)=>n(r)(o,{class:"astro-PCTRBLMN"},e)});