(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6e74"],{7511:function(e,t,a){"use strict";a.r(t);var c=a("f2bf");const l={class:"v-row data-container"},n={class:"v-column"},i={class:"v-row data-statistic"},s={class:"statistic-item"},b={class:"statistic-item"},o={class:"statistic-item"},u={class:"statistic-item"},j={class:"v-row",style:{"--button-icon-size":"1.5em"}},d=Object(c["k"])("播放全部"),O=Object(c["k"])("添加到"),m=Object(c["k"])("下载"),r=Object(c["k"])("删除"),p={class:"cell-text"},g=["data-mid"],h=["data-mid"],v={class:"name"},f=["data-mid"],y=Object(c["k"])(" -"),k={class:"label"};function w(e,t,a,w,C,M){const V=Object(c["J"])("image-view"),Q=Object(c["J"])("hl-button"),z=Object(c["J"])("icon"),D=Object(c["J"])("table-view"),L=Object(c["J"])("grid-view"),_=Object(c["J"])("tab-pane");return Object(c["z"])(),Object(c["h"])(c["a"],null,[Object(c["i"])("div",l,[Object(c["l"])(V,{modelValue:e.singer.cover,"onUpdate:modelValue":t[0]||(t[0]=t=>e.singer.cover=t),defaultValue:"icon/singer.png"},null,8,["modelValue"]),Object(c["i"])("div",n,[Object(c["i"])("div",null,Object(c["M"])(e.singer.name||"-"),1),Object(c["i"])("div",i,[Object(c["i"])("span",s,"单曲："+Object(c["M"])(e.singer.songCount||"-"),1),Object(c["i"])("span",b,"专辑："+Object(c["M"])(e.singer.albumCount||"-"),1),Object(c["i"])("span",o,"MV："+Object(c["M"])(e.singer.mvCount||"-"),1),Object(c["i"])("span",u,"粉丝："+Object(c["M"])(e.singer.fansCount||"-"),1)]),Object(c["i"])("div",j,[Object(c["l"])(Q,{icon:"play-select"},{default:Object(c["Q"])(()=>[d]),_:1}),Object(c["l"])(Q,{icon:"plus"},{default:Object(c["Q"])(()=>[O]),_:1}),Object(c["l"])(Q,{icon:"my-download"},{default:Object(c["Q"])(()=>[m]),_:1}),Object(c["l"])(Q,{icon:"trash"},{default:Object(c["Q"])(()=>[r]),_:1}),Object(c["l"])(Q,{icon:"multiple",onClick:t[1]||(t[1]=t=>e.multiple=!e.multiple)},{default:Object(c["Q"])(()=>[Object(c["k"])(Object(c["M"])(e.multiple?"退出批量操作":"批量操作"),1)]),_:1})])])]),Object(c["l"])(_,{tabs:e.tabs,activeTabName:e.activeTabName,onTabChange:e.handleTabChanged},{song:Object(c["Q"])(()=>[Object(c["l"])(D,{style:{flex:"auto"},selection:e.multiple,columns:e.columns,data:e.songList,onRowDblclick:e.playMediaList,onInfiniteScroll:e.loadDataList},{title:Object(c["Q"])(({item:e})=>[Object(c["i"])("span",p,Object(c["M"])(e.title),1),e.vip?(Object(c["z"])(),Object(c["f"])(z,{key:0,class:"vip-icon",name:"vip",width:"1em",height:"1em"})):Object(c["g"])("",!0),e.vid?(Object(c["z"])(),Object(c["f"])(z,{key:1,class:"mv-icon",name:"mv",width:"1em",height:"1em"})):Object(c["g"])("",!0)]),singer:Object(c["Q"])(({item:{singer:e=[]}})=>[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["H"])(e,(e,t)=>(Object(c["z"])(),Object(c["h"])("span",{class:"link cell-text",key:t,"data-mid":e.mid},Object(c["M"])(e.name),9,g))),128))]),album:Object(c["Q"])(({item:{album:e}})=>[e?(Object(c["z"])(),Object(c["h"])("span",{key:0,class:"link cell-text","data-mid":e.mid},Object(c["M"])(e.name),9,h)):Object(c["g"])("",!0)]),_:1},8,["selection","columns","data","onRowDblclick","onInfiniteScroll"])]),album:Object(c["Q"])(()=>[Object(c["l"])(L,{"cell-widths":"repeat(auto-fit, 13em)",data:e.albumList,onInfiniteScroll:e.loadAlbumData,"cell-height":234,onCellClick:e.onAlbumItemClicked},{default:Object(c["Q"])(({item:e})=>[Object(c["l"])(V,{modelValue:e.cover,"onUpdate:modelValue":t=>e.cover=t,defaultValue:"icon/album.png"},null,8,["modelValue","onUpdate:modelValue"]),Object(c["i"])("div",v,Object(c["M"])(e.name),1)]),_:1},8,["data","onInfiniteScroll","onCellClick"])]),mv:Object(c["Q"])(()=>[Object(c["l"])(L,{class:"arc-rect","cell-widths":"repeat(auto-fit, 16em)",data:e.mvList,"cell-height":206,onInfiniteScroll:e.loadMvData},{default:Object(c["Q"])(({item:e})=>[Object(c["l"])(V,{modelValue:e.cover,"onUpdate:modelValue":t=>e.cover=t,defaultValue:"icon/mv.png"},null,8,["modelValue","onUpdate:modelValue"]),Object(c["i"])("div",null,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["H"])(e.singer,(e,t)=>(Object(c["z"])(),Object(c["h"])("span",{class:"link",key:t,"data-mid":e.mid},Object(c["M"])(e.name),9,f))),128)),y,Object(c["i"])("span",null,Object(c["M"])(e.title),1)])]),_:1},8,["data","onInfiniteScroll"])]),introduce:Object(c["Q"])(()=>[Object(c["i"])("div",k,Object(c["M"])(e.singer.introduce),1)]),_:1},8,["tabs","activeTabName","onTabChange"])],64)}var C=a("c25e"),M=a("297e"),V=a("846d"),Q=a("6c02"),z=Object(c["m"])({name:"SingerView",props:{query:{type:Object,required:!0}},setup(e){const t=Object(c["D"])({}),a=Object(c["D"])([]),l=Object(c["D"])([]),n=Object(c["D"])([]),i={title:"歌曲",name:"song",update:!0,page:{current:1,size:30}},s={title:"专辑",name:"album",update:!0,page:{current:1,size:30}},b={title:"MV",name:"mv",update:!0,page:{current:1,size:30}},o={title:"详情",name:"introduce",update:!0},u=[i,s,b,o],j=Object(c["F"])("song"),d=[{type:"index",width:"100px"},{title:"歌曲",property:"title",flex:!0},{title:"歌手",property:"singer"},{title:"专辑",property:"album"},{title:"时长",property:"duration",width:"100px"}],O=Object(c["F"])(!1),m=Object(Q["d"])(),r=e=>{if(j.value=e.name,"introduce"===e.name||!e.update)return;e.update=!1,C["a"].open();const c=e.page;"song"===e.name&&Object(V["m"])(c,t).then(e=>{e.page&&Object.assign(c,e.page),e.singer&&Object.assign(t,e.singer),a.splice(0,a.length,...e.list)}).catch(()=>e.update=!0).finally(C["a"].close),"album"===e.name&&Object(V["j"])(c,t).then(e=>{e.page&&Object.assign(c,e.page),l.splice(0,l.length,...e.list)}).catch(()=>e.update=!0).finally(C["a"].close),"mv"===e.name&&Object(V["l"])(c,t).then(e=>{e.page&&Object.assign(c,e.page),n.splice(0,n.length,...e.list)}).catch(()=>e.update=!0).finally(C["a"].close)};return Object(c["P"])(()=>e.query,e=>{t.mid!==e.mid&&e.mid&&(Object.assign(t,e),u.forEach(e=>{e.update=!0,e.page&&(e.page.total=0,e.page.current=1,e.page.pageCount=0)}),r(i))},{immediate:!0}),{tabs:u,activeTabName:j,singer:t,columns:d,songList:a,albumList:l,mvList:n,multiple:O,handleTabChanged:r,playMediaList:M["a"],onAlbumItemClicked(e){e&&m.push({path:"/album-view",query:{...e,singer:null}})},loadDataList(){const e=i.page;e.current>=1&&e.current<e.pageCount&&(++e.current,C["a"].open(),Object(V["m"])(e,t).then(t=>{t.page&&Object.assign(e,t.page),a.push(...t.list)}).catch(()=>--e.current).finally(C["a"].close))},loadAlbumData(){const e=b.page;e.current>=1&&e.current<e.pageCount&&(C["a"].open(),++e.current,Object(V["j"])(e,t).then(t=>{t.page&&Object.assign(e,t.page),l.push(...t.list)}).catch(()=>--e.current).finally(C["a"].close))},loadMvData(){const e=b.page;e.current>=1&&e.current<e.pageCount&&(C["a"].open(),++e.current,Object(V["l"])(e,t).then(t=>{t.page&&Object.assign(e,t.page),n.push(...t.list)}).catch(()=>--e.current).finally(C["a"].close))}}}}),D=a("6b0d"),L=a.n(D);const _=L()(z,[["render",w]]);t["default"]=_}}]);
//# sourceMappingURL=chunk-2d0d6e74.6431e1df.js.map