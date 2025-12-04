const t=URL,c=(n,o)=>{let e=document.createElement("a");e.href=t.createObjectURL(n),e.download=o||n.name||"unknown.bin",e.click(),setTimeout(()=>t.revokeObjectURL(e.href),2e3)};export{c as d};
