(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d9da"],{f7f9:function(e,t,c){"use strict";c.r(t);var l=c("f2bf");const i={class:"v-row data-container"},a={class:"v-column"},n={class:"v-row data-statistic"},s={class:"statistic-item"},b={class:"statistic-item"},o={class:"statistic-item"},j={class:"statistic-item"},m={class:"v-row",style:{"--button-icon-size":"1.5em"}},O=Object(l["k"])("播放全部"),u=Object(l["k"])("添加到"),d=Object(l["k"])("下载"),p=Object(l["k"])("删除"),r={class:"v-row",style:{margin:"1em 0 0 0",flex:"auto",overflow:"hidden","align-items":"stretch"}},g={class:"cell-text"},v=["data-mid"],h=["data-mid"],y={class:"label",style:{margin:"0 0 0 1em",padding:"0 1em 0 0",width:"15em"}};function f(e,t,c,f,w,k){const M=Object(l["J"])("image-view"),x=Object(l["J"])("hl-button"),z=Object(l["J"])("icon"),Q=Object(l["J"])("table-view");return Object(l["z"])(),Object(l["h"])(l["a"],null,[Object(l["i"])("div",i,[Object(l["l"])(M,{modelValue:e.album.cover,"onUpdate:modelValue":t[0]||(t[0]=t=>e.album.cover=t),defaultValue:"icon/album.png"},null,8,["modelValue"]),Object(l["i"])("div",a,[Object(l["i"])("div",null,Object(l["M"])(e.album.name||"-"),1),Object(l["i"])("div",n,[Object(l["i"])("span",s,"流派："+Object(l["M"])(e.album.genre||"-"),1),Object(l["i"])("span",b,"语种："+Object(l["M"])(e.album.language||"-"),1),Object(l["i"])("span",o,"唱片公司："+Object(l["M"])(e.album.company||"-"),1),Object(l["i"])("span",j,"发行时间："+Object(l["M"])(e.album.year||"-"),1)]),Object(l["i"])("div",m,[Object(l["l"])(x,{icon:"play-select"},{default:Object(l["Q"])(()=>[O]),_:1}),Object(l["l"])(x,{icon:"plus"},{default:Object(l["Q"])(()=>[u]),_:1}),Object(l["l"])(x,{icon:"my-download"},{default:Object(l["Q"])(()=>[d]),_:1}),Object(l["l"])(x,{icon:"trash"},{default:Object(l["Q"])(()=>[p]),_:1}),Object(l["l"])(x,{icon:"multiple",onClick:t[1]||(t[1]=t=>e.multiple=!e.multiple)},{default:Object(l["Q"])(()=>[Object(l["k"])(Object(l["M"])(e.multiple?"退出批量操作":"批量操作"),1)]),_:1})])])]),Object(l["i"])("div",r,[Object(l["l"])(Q,{style:{flex:"auto"},selection:e.multiple,columns:e.columns,data:e.songList,onRowDblclick:e.playMediaList,onInfiniteScroll:e.loadDataList},{title:Object(l["Q"])(({item:e})=>[Object(l["i"])("span",g,Object(l["M"])(e.title),1),e.vip?(Object(l["z"])(),Object(l["f"])(z,{key:0,class:"vip-icon",name:"vip",width:"1em",height:"1em"})):Object(l["g"])("",!0),e.vid?(Object(l["z"])(),Object(l["f"])(z,{key:1,class:"mv-icon",name:"mv",width:"1em",height:"1em"})):Object(l["g"])("",!0)]),singer:Object(l["Q"])(({item:{singer:e=[]}})=>[(Object(l["z"])(!0),Object(l["h"])(l["a"],null,Object(l["H"])(e,(e,t)=>(Object(l["z"])(),Object(l["h"])("span",{class:"link cell-text",key:t,"data-mid":e.mid},Object(l["M"])(e.name),9,v))),128))]),album:Object(l["Q"])(({item:{album:e}})=>[e?(Object(l["z"])(),Object(l["h"])("span",{key:0,class:"link cell-text","data-mid":e.mid},Object(l["M"])(e.name),9,h)):Object(l["g"])("",!0)]),_:1},8,["selection","columns","data","onRowDblclick","onInfiniteScroll"]),Object(l["i"])("div",y," 简介："+Object(l["M"])(e.album.introduce),1)])],64)}var w=c("c25e"),k=c("297e"),M=c("846d"),x=Object(l["m"])({name:"AlbumView",props:{query:Object},setup(e){const t=Object(l["D"])([]),c=Object(l["D"])({mid:"",name:"",cover:"",company:""}),i={current:1,size:30,total:1},a=[{type:"index",width:"100px"},{title:"歌曲",property:"title",flex:!0},{title:"歌手",property:"singer"},{title:"时长",property:"duration",width:"100px"},{title:"大小",property:"size",width:"100px"}],n=Object(l["F"])(!1);return Object(l["P"])(()=>e.query,e=>{e&&c.mid!==e.mid&&(w["a"].open(),Object(M["a"])(i,e).then(e=>{Object.assign(i,e.page),e.album&&Object.assign(c,e.album),t.splice(0,t.length,...e.list)}).finally(w["a"].close))},{immediate:!0}),{songList:t,page:i,album:c,columns:a,multiple:n,playMediaList:k["a"],loadDataList(){i.current>=1&&i.current<i.pageCount&&(++i.current,w["a"].open(),Object(M["a"])(i,c).then(e=>{e.page&&Object.assign(i,e.page),t.push(...e.list)}).catch(()=>--i.current).finally(w["a"].close))}}}}),z=c("6b0d"),Q=c.n(z);const D=Q()(x,[["render",f]]);t["default"]=D}}]);
//# sourceMappingURL=chunk-2d22d9da.b802b00d.js.map