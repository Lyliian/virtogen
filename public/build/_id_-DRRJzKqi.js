import{x as w,y as x,u as $,a as q,A,o as b,b as s,c as n,w as o,d as _,g as N,e as k,v as R,f as e,k as i,l as u,z as V,m as h,n as p,_ as Q,p as S,q as j}from"./js/app.js-BoSbAghh.js";const z={class:"q-pa-md"},D={class:"q-pa-md row items-start q-gutter-xs"},E={__name:"[id]",setup(M){const f=w(),c=x(),r=$(),{query:v,result:t,loading:y,error:P,callApi:B}=q(async d=>(await A.get(`https://rickandmortyapi.com/api/character/${d}`)).data);return b(async()=>{await c.isReady(),v.value=f.params.id,B()}),(d,a)=>{const C=Q,l=S,g=j;return s(),n(h,null,{default:o(()=>[_("div",z,[_("div",D,[N(k(C,null,null,512),[[R,e(y)]]),e(t)?(s(),n(g,{key:0,class:"m-1",character:e(t)},{default:o(()=>[e(r).inBookmarks(e(t))?u("",!0):(s(),n(l,{key:0,icon:"bookmark_add",onClick:a[0]||(a[0]=m=>e(r).addBookmark(e(t)))},{default:o(()=>a[3]||(a[3]=[i("Ajouter aux favoris")])),_:1})),e(r).inBookmarks(e(t))?(s(),n(l,{key:1,icon:"bookmark_remove",onClick:a[1]||(a[1]=m=>e(r).removeBookmark(e(t)))},{default:o(()=>a[4]||(a[4]=[i("Enlever des favoris")])),_:1})):u("",!0)]),_:1},8,["character"])):u("",!0)]),k(V,{color:"primary",onClick:a[2]||(a[2]=m=>e(c).go(-1))},{default:o(()=>a[5]||(a[5]=[i("Retour")])),_:1})])]),_:1})}}};typeof p=="function"&&p(E);export{E as default};
