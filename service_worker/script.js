/*-----------Service Workger Managment-----------*/
if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../sw_pagecache.js").catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}
/*------------------------------------------*/
