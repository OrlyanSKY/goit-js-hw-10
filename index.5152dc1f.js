document.querySelector("#search-box").addEventListener("input",(e=>{var t;val=e.target.value,t=val,fetch(`https://restcountries.com/v3.1/name/${t}`).then((e=>e.json())).then((e=>console.log(e)))}));
//# sourceMappingURL=index.5152dc1f.js.map
