"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[894],{6513:(e,n,t)=>{t.r(n),t.d(n,{default:()=>J});var c=t(2798),a=t(9641),o=t(7059),r=t(2983),s=t(8058),m={code:"\nimport { IconSmile } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Space>\n      <IconSmile size=\"2em\" />\n      <IconSmile size=\"2em\" style={{ color: '#8a2be2' }} />\n    </Space>\n  )\n}",namespace:s.Bb},i={code:"\nimport { Loading, IconLoading, Space } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Space>\n      <Loading size=\"24px\" spin style={{ color: 'var(--brand-color)' }} />\n      <IconLoading size=\"24px\" spin style={{ color: 'var(--brand-color)' }} />\n    </Space>\n  )\n}",namespace:s.gb},l={code:'\nimport { createIcon } from \'@mx-design/web\';\n\nfunction App() {\n  const IconFace = createIcon({\n    viewBox: \'0 0 36 36\',\n    paths: (\n      <>\n        <path\n          fill="#FFCB4C"\n          d="M35.597 14.232c2.083 9.72-4.108 19.289-13.828 21.372C12.049 37.687 2.48 31.496.397 21.776C-1.686 12.056 4.506 2.487 14.225.404c9.72-2.084 19.289 4.108 21.372 13.828"\n        />\n        <path fill="#F4F7F9" d="M29.284 9.012a6.734 6.734 0 1 1-13.169 2.821a6.734 6.734 0 0 1 13.169-2.821z" />\n        <circle fill="#292F33" cx="22.306" cy="9.291" r="2.037" />\n        <path fill="#F4F7F9" d="M14.088 14.282a3.938 3.938 0 1 1-7.7 1.65a3.938 3.938 0 0 1 7.7-1.65z" />\n        <circle transform="rotate(-12.095 10.236 15.853)" fill="#292F33" cx="10.238" cy="15.857" r="1.942" />\n        <path\n          fill="#65471B"\n          d="M18.625 20.937c-3.543.759-5.981.85-9.01.908c-.691.015-1.955.419-1.536 2.375c.838 3.911 6.379 7.837 12.642 6.495c6.262-1.342 9.708-7.194 8.87-11.105c-.419-1.956-1.739-1.808-2.375-1.536c-2.786 1.187-5.048 2.104-8.591 2.863z"\n        />\n        <path fill="#E8596E" d="M11 24.004v6c0 3 2 6 6 6s6-3 6-6v-6H11z" />\n        <path fill="#DD2F45" d="M17 31.883a.545.545 0 0 0 .545-.545v-6.295h-1.091v6.295a.546.546 0 0 0 .546.545z" />\n        <path\n          fill="#FFF"\n          d="M10.034 23.801s3.143.349 9.01-.908c5.867-1.257 8.591-2.864 8.591-2.864s-1.117 4.33-7.962 5.797c-6.845 1.467-9.639-2.025-9.639-2.025z"\n        />\n      </>\n    ),\n  });\n\n  return <IconFace size="2em" />;\n}',namespace:s.$4},p={code:"\nimport { createFromIconfont } from '@mx-design/web';\n\nfunction App() {\n  // pass url\n  const IconFont = createFromIconfont('//at.alicdn.com/t/c/font_3337530_4kpk3x87pyc.js')\n  return <IconFont type=\"icon-checked\" size=\"2em\" />;\n}",namespace:s.BH},u=t(7745),f=t(8230);const d="index-module__icon-container--sncUg",y="index-module__icon-item--hvhtP",b="index-module__icon-item-text--03Sik";var v=t(1076),k=t(7715),h=t(5927);function E(){let e=!1;const n=new Set,t={subscribe:e=>(n.add(e),()=>{n.delete(e)}),start(t,c){(0,v.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const a=[];return n.forEach((e=>{a.push((0,h.d)(e,t,{transitionOverride:c}))})),Promise.all(a)},set:t=>((0,v.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),n.forEach((e=>{(0,k.gg)(e,t)}))),stop(){n.forEach((e=>{!function(e){e.values.forEach((e=>e.stop()))}(e)}))},mount:()=>(e=!0,()=>{e=!1,t.stop()})};return t}var I=t(6067),O=t(7845);const g=function(){const e=(0,I.h)(E);return(0,O.L)(e.mount,[]),e};var j=t(4645),F=t(6724),x=t.n(F),w=t(5769);const Z=function(e){var n=e.Icon,t=e.Item,c=g(),a=(0,w.U)();return r.createElement(j.E.div,{onClick:function(){return function(e){x()("<".concat(e," />"))&&a.add({type:"success",content:"copy success <".concat(e," /> ")})}(t)},onMouseEnter:function(){c.start({scale:1.2})},onMouseLeave:function(){c.start({scale:1})},className:y},r.createElement(j.E.div,{animate:c},r.createElement(n,{size:"2em"})),r.createElement("span",{className:b},t))};var _,z={component:r.createElement("div",{className:d},Object.keys(u).map((function(e,n){var t=u[e];return r.createElement(Z,{Icon:t,Item:e,key:n})}))," ",Object.keys(f).map((function(e,n){var t=f[e];return r.createElement(Z,{Icon:t,Item:e,key:n})}))),namespace:s.$1},M=t(218),S=t(339),C={component:r.createElement("div",{className:d},Object.keys(M).map((function(e,n){var t=M[e];return r.createElement(Z,{Icon:t,Item:e,key:n})})),Object.keys(S).map((function(e,n){var t=S[e];return r.createElement(Z,{Icon:t,Item:e,key:n})}))),namespace:s.p6},P=t(5021),N={component:r.createElement("div",{className:d},Object.keys(P).map((function(e,n){var t=P[e];return r.createElement(Z,{Icon:t,Item:e,key:n})})),Object.keys(S).map((function(e,n){var t=S[e];return r.createElement(Z,{Icon:t,Item:e,key:n})}))),namespace:s.CX},L=t(2258),D=t(2739),A={component:r.createElement("div",{className:d},Object.keys(L).map((function(e,n){var t=L[e];return r.createElement(Z,{Icon:t,Item:e,key:n})})),Object.keys(D).map((function(e,n){var t=D[e];return r.createElement(Z,{Icon:t,Item:e,key:n})}))),namespace:s.Mt},B=t(3530),H={component:r.createElement("div",{className:d},Object.keys(B).map((function(e,n){var t=B[e];return r.createElement(Z,{Icon:t,Item:e,key:n})}))),namespace:s.Vw},U=(_={},(0,a.Z)(_,m.namespace,m),(0,a.Z)(_,i.namespace,i),(0,a.Z)(_,l.namespace,l),(0,a.Z)(_,p.namespace,p),(0,a.Z)(_,z.namespace,z),(0,a.Z)(_,C.namespace,C),(0,a.Z)(_,N.namespace,N),(0,a.Z)(_,A.namespace,A),(0,a.Z)(_,H.namespace,H),_),$=t(3101),G=t(7040),V=t(9673);function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const J=function(){var e=(0,$.b)({namespace:s.Zn}),n=(0,o.Z)(e,1)[0],t=(0,r.useMemo)((function(){return Object.keys(n).map((function(e){return q(q({},n[e]),U[e])}))}),[n,U]),a=(0,r.useMemo)((function(){return t.map((function(e){return{title:e.title,href:"#".concat(e.namespace)}}))}),[t]);return r.createElement(G.Z,{titleList:a},t.map((function(e){return null!=e&&e.component?r.createElement(V.Go,(0,c.Z)({key:e.namespace},e)):r.createElement(V.AN,(0,c.Z)({key:e.namespace},e))})))}}}]);