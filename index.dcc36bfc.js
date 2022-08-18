document.querySelector("#search-box").addEventListener("input",(e=>{let t=e.target.value;fetch(`https://restcountries.com/v3.1/name/${t}`).then((e=>e.json())).then((e=>console.log(e)))}));
//# sourceMappingURL=index.dcc36bfc.js.map
