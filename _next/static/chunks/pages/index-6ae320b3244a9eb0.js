(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(o,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},85:function(o,e,n){"use strict";n.r(e);var t=n(5893),r=n(7294),s=n(2729),i=n.n(s);let a=()=>{let[o,e]=(0,r.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[n,s]=(0,r.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),a=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],l=[[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1]],f=JSON.parse(JSON.stringify(n)),c=JSON.parse(JSON.stringify(o)),d=o.some(o=>o.some(o=>0!==o)),_=o.some((o,e)=>o.some((o,t)=>1===o&&1===n[e][t])),u=(o,e)=>{for(let n=0;n<10;n++){let t=Math.floor(9*Math.random()),r=Math.floor(9*Math.random());1!==f[t][r]&&(r!==o||t!==e)?f[t][r]=1:n--}},m=(o,e)=>{let t=0;for(let r of l)void 0!==a[e+r[1]]&&void 0!==a[e+r[1]][o+r[0]]&&(t+=n[e+r[1]][o+r[0]]);if(a[e][o]=t,0===t)for(let n of l)void 0!==a[e+n[1]]&&-1===a[e+n[1]][o+n[0]]&&m(o+n[0],e+n[1])};for(let e=0;e<9;e++)for(let t=0;t<9;t++)1===o[e][t]&&(1===n[e][t]?(a[e][t]=11,console.log("nya")):m(t,e));if(_)for(let o=0;o<9;o++)for(let e=0;e<9;e++)1===n[o][e]&&(a[o][e]=11);let N=(o,t)=>{for(let r of(console.log(o,t),c[t][o]=1,e(c),d||u(o,t),n))for(let o of r)if(1===o)break;s(f)};return(0,t.jsx)("div",{className:i().container,children:(0,t.jsx)("div",{className:i().board,children:a.map((o,e)=>o.map((o,n)=>(0,t.jsx)("div",{className:i().bomb,onClick:()=>N(n,e),style:{backgroundPosition:-30*o+30},children:-1===o&&(0,t.jsx)("div",{className:i().stone})},"".concat(n,"-").concat(e))))})})};e.default=a},2729:function(o){o.exports={container:"index_container__gnN1f",bomb:"index_bomb__UtPjB",board:"index_board__2d6xe",stone:"index_stone__oeDmm"}}},function(o){o.O(0,[774,888,179],function(){return o(o.s=8312)}),_N_E=o.O()}]);